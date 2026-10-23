#!/usr/bin/env node
// Daily engine of the direct cold email channel (no AI). Mon-Fri via launchd
// (agency.noprob.cold-email). In order:
//   1. reads every running thread: a reply or a bounce stops the sequence for good
//      (a reply moves the lead to `warm`, a bounce to `suppressed`); out of office does not
//   2. skips domains that Gojiberry is working (read only) and anyone in the shared
//      opt-out list docs/cold/suppressed.txt; appends who said no here to that list
//   3. sends the emails due today, follow-ups first, within the daily cap and the
//      mailbox budget (antonio@ max 55 a day across Gojiberry, this channel and
//      manual emails: already sent today and a manual reserve are subtracted), with
//      a random gap between sends; only an approved SEQUENCE_VERSION is ever sent
//   4. one line in cold-email/data/log.md, then the CRM export (+ push)
// State is saved after every send. Lead data stays in cold-email/data/ (gitignored).
//
// Config cold-email/data/config.json:
//   { "approved": "v1", "dailyCap": 10, "mailboxMax": 55, "manualReserve": 10,
//     "gapSeconds": [40, 120], "crmPath": "cold-email/data/crm" }
// Usage: node scripts/cold-email-daily.mjs [--dry] [--cap 5]

import { execFileSync } from 'node:child_process'
import { appendFileSync, existsSync, readFileSync, writeFileSync } from 'node:fs'
import { accessToken, buildRaw, gmail, messageId, threadOutcome } from '../lib/cold-email/gmail.mjs'
import { gojiberryDomains } from '../lib/cold-email/gojiberry.mjs'
import { excludeDomains } from '../lib/cold-email/leads.mjs'
import { appendSuppressed, applySuppressed, readSuppressed, refusals } from '../lib/cold-email/suppression.mjs'
import { SEQUENCE_VERSION, dueStep, render } from '../lib/cold-email/sequence.mjs'

const DIR = 'cold-email/data'
const LEADS = `${DIR}/leads.json`
const CONFIG = `${DIR}/config.json`
const LOG = `${DIR}/log.md`

const args = process.argv.slice(2)
const dry = args.includes('--dry')
const config = { approved: null, dailyCap: 10, mailboxMax: 55, manualReserve: 10, gapSeconds: [40, 120], crmPath: `${DIR}/crm`, ...(existsSync(CONFIG) ? JSON.parse(readFileSync(CONFIG, 'utf8')) : {}) }
const cap = args.includes('--cap') ? Number(args[args.indexOf('--cap') + 1]) : config.dailyCap
const today = new Date().toLocaleDateString('en-CA', { timeZone: 'Europe/Lisbon' })

const db = JSON.parse(readFileSync(LEADS, 'utf8'))
const save = () => {
  if (!dry) writeFileSync(LEADS, JSON.stringify({ ...db, updatedAt: new Date().toISOString() }, null, 2))
}
const stats = { replies: 0, bounces: 0, sent: { e1: 0, e2: 0, e3: 0, e4: 0, e5: 0 }, skipped: 0 }

// A dry run works without Gmail too: it only lists what would be sent.
const api = await accessToken().then(gmail, (err) => {
  if (!dry) throw err
  console.error(`[dry] ${err.message}: thread check skipped`)
  return null
})

// 1. Replies and bounces on running threads
for (const lead of api ? db.leads : []) {
  const seq = lead.sequence
  if (lead.segment !== 'target' || !seq.threadId || seq.stoppedAt) continue
  const outcome = threadOutcome(await api.thread(seq.threadId))
  if (!outcome) continue
  seq.stoppedAt = today
  seq.stopReason = outcome
  if (outcome === 'reply') {
    stats.replies++
    Object.assign(lead, { segment: 'warm', reason: 'reply to sequence', priority: 1, note: `Risposta alla sequenza dopo ${seq.sent.length} email` })
  } else {
    stats.bounces++
    Object.assign(lead, { segment: 'suppressed', reason: 'bounce' })
  }
}
save()

// 2. Gojiberry domains, read only
try {
  db.leads = excludeDomains(db.leads, await gojiberryDomains(), 'in Gojiberry')
} catch (err) {
  console.error(`Gojiberry check skipped: ${err.message}`)
}

// Shared opt-out list: the file wins over any sequence, our refusals go in.
db.leads = applySuppressed(db.leads, readSuppressed())
if (!dry) appendSuppressed(refusals(db.leads), 'no / opt-out')
save()

// 3. Sends, within the mailbox budget
let note = ''
const sentToday = api ? ((await api.search(`in:sent after:${today.replaceAll('-', '/')}`)).messages || []).length : 0
const budget = Math.max(0, Math.min(cap, config.mailboxMax - config.manualReserve - sentToday))
if (budget < cap) note += ` · budget ${budget} (già inviate oggi da antonio@ ${sentToday})`
if (config.approved !== SEQUENCE_VERSION) {
  note += ` · invii fermi (sequenza ${SEQUENCE_VERSION} non approvata)`
} else {
  const priority = (l) => (l.sequence.sent.length ? 0 : l.php ? 1 : ['woocommerce', 'magento', 'prestashop', 'shopware', 'wordpress'].includes(l.platform) ? 2 : 3)
  const due = db.leads
    .map((lead) => ({ lead, step: dueStep(lead, today) }))
    .filter((d) => d.step)
    .sort((a, b) => priority(a.lead) - priority(b.lead))
  stats.skipped = Math.max(0, due.length - budget)

  for (const [i, { lead, step }] of due.slice(0, budget).entries()) {
    const { subject, body } = render(lead, step.key)
    if (dry) {
      console.log(`[dry] ${step.key} -> ${lead.email} · ${subject}`)
      stats.sent[step.key]++
      continue
    }
    const seq = lead.sequence
    const res = await api.send(buildRaw({ to: lead.email, subject, body, inReplyTo: seq.messageId }), seq.threadId)
    if (step.key === 'e1') {
      seq.threadId = res.threadId
      seq.messageId = messageId(await api.thread(res.threadId))
      seq.version = SEQUENCE_VERSION
    }
    seq.sent.push({ step: step.key, date: today, id: res.id })
    stats.sent[step.key]++
    save()
    if (i < Math.min(budget, due.length) - 1) {
      const [min, max] = config.gapSeconds
      await new Promise((r) => setTimeout(r, (min + Math.random() * (max - min)) * 1000))
    }
  }
}

// 4. Log and CRM
const total = Object.values(stats.sent).reduce((a, b) => a + b, 0)
const line = `- ${new Date().toISOString().slice(0, 16).replace('T', ' ')}${dry ? ' (dry)' : ''} · inviate ${total} (${Object.entries(stats.sent).filter(([, n]) => n).map(([k, n]) => `${k} ${n}`).join(', ') || 'nessuna'}) · rinviate ${stats.skipped} · risposte ${stats.replies} · bounce ${stats.bounces}${note}\n`
if (!dry) {
  appendFileSync(LOG, line)
  if (existsSync(config.crmPath)) execFileSync('node', ['scripts/cold-email-crm.mjs', config.crmPath, '--push'], { stdio: 'inherit' })
}
process.stdout.write(line)
