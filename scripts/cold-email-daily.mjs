#!/usr/bin/env node
// Daily engine of the direct cold email channel (no AI). Mon-Fri via launchd
// (agency.noprob.cold-email). In order:
//   1. reads every running thread: a reply or a bounce stops the sequence for good
//      (a reply moves the lead to `warm` and stops everyone else of that store, a bounce
//      moves it to `suppressed`); out of office does not
//   2. skips domains that Gojiberry is working (read only) and anyone in the shared
//      opt-out list docs/cold/suppressed.txt; appends who said no here to that list
//   3. sends the emails due today, follow-ups first, within the mailbox budget
//      (antonio@ max 55 a day across Gojiberry, this channel and manual emails:
//      already sent today, what Ada's Gojiberry campaign still plans to send today and a
//      manual reserve are subtracted); dailyCap limits only
//      new first emails; random gap between sends; only an approved SEQUENCE_VERSION is sent
//   4. one line in cold-email/data/log.md, then the CRM export (+ push)
// State is saved after every send. Lead data stays in cold-email/data/ (gitignored).
//
// Config cold-email/data/config.json:
//   { "approved": "v1", "dailyCap": 10, "mailboxMax": 55, "manualReserve": 10,
//     "gapSeconds": [40, 120], "crmPath": "cold-email/data/crm" }
// A first email never goes to a store Antonio wrote to by hand in the last 60 days.
// --until 18:30 spreads the sends evenly until that time (Europe/Rome, the
// recipients' clock), each gap varied by ±40%; without it, gapSeconds applies.
// Usage: node scripts/cold-email-daily.mjs [--dry] [--cap 5] [--until 18:30]

import { execFileSync, spawn } from 'node:child_process'
import { appendFileSync, existsSync, readFileSync, writeFileSync } from 'node:fs'
import { SENDER, accessToken, buildRaw, gmail, messageId, threadOutcome } from '../lib/cold-email/gmail.mjs'
import { gojiberryDomains, gojiberryRemaining } from '../lib/cold-email/gojiberry.mjs'
import { excludeDomains, stopStore } from '../lib/cold-email/leads.mjs'
import { appendSuppressed, applySuppressed, readSuppressed, refusals } from '../lib/cold-email/suppression.mjs'
import { SEQUENCE_VERSION, dueStep, render } from '../lib/cold-email/sequence.mjs'

const DIR = 'cold-email/data'
const LEADS = `${DIR}/leads.json`
const CONFIG = `${DIR}/config.json`
const LOG = `${DIR}/log.md`

const args = process.argv.slice(2)
const dry = args.includes('--dry')
const config = { approved: null, dailyCap: 10, mailboxMax: 55, manualReserve: 10, adaCampaign: 45702, adaEmailsLive: false, gapSeconds: [40, 120], crmPath: `${DIR}/crm`, ...(existsSync(CONFIG) ? JSON.parse(readFileSync(CONFIG, 'utf8')) : {}) }
const cap = args.includes('--cap') ? Number(args[args.indexOf('--cap') + 1]) : config.dailyCap
// Keep the Mac awake while this run lives (launchd starts node directly: a job whose
// program is /usr/bin/caffeinate fails to spawn).
if (!dry) spawn('caffeinate', ['-i', '-w', String(process.pid)], { detached: true, stdio: 'ignore' }).unref()

const today = new Date().toLocaleDateString('en-CA', { timeZone: 'Europe/Lisbon' })
const until = args.includes('--until') ? args[args.indexOf('--until') + 1] : null

/** Minutes left until HH:MM on the recipients' clock (Europe/Rome). */
function minutesUntil(hhmm) {
  const [h, m] = new Date().toLocaleTimeString('en-GB', { timeZone: 'Europe/Rome', hour12: false }).split(':').map(Number)
  const [eh, em] = hhmm.split(':').map(Number)
  return eh * 60 + em - (h * 60 + m)
}

const db = JSON.parse(readFileSync(LEADS, 'utf8'))
const save = () => {
  if (!dry) writeFileSync(LEADS, JSON.stringify({ ...db, updatedAt: new Date().toISOString() }, null, 2))
}
const stats = { replies: 0, optouts: 0, bounces: 0, sent: { e1: 0, e2: 0, e3: 0, e4: 0, e5: 0 }, skipped: 0, recent: 0 }

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
    stopStore(db.leads, lead.domain, `${lead.email} ha risposto`, today) // the whole store stops
  } else if (outcome === 'optout') {
    stats.optouts++ // to docs/cold/suppressed.txt below, with every other refusal
    Object.assign(lead, { segment: 'suppressed', reason: 'opt-out' })
    stopStore(db.leads, lead.domain, `${lead.email} ha detto no`, today)
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
// The mailbox budget covers every email; dailyCap limits only new first emails, so
// follow-ups keep their days even when a big batch reaches the same step together.
// Ada's campaign sends from antonio@ too (from 9:00, up to its warm-up limit): the
// emails it has queued for today are kept free, the rest of the mailbox is ours.
const ada = await gojiberryRemaining(SENDER.email, config.adaCampaign, { live: config.adaEmailsLive }).catch((err) => {
  console.error(`Gojiberry seat check failed, 25 kept free: ${err.message}`)
  return { reserve: 25, live: config.adaEmailsLive }
})
const gojiberryLeft = ada.reserve
if (ada.live && !config.adaEmailsLive && !dry) {
  const saved = JSON.parse(readFileSync(CONFIG, 'utf8'))
  writeFileSync(CONFIG, `${JSON.stringify({ ...saved, adaEmailsLive: true }, null, 2)}\n`)
  note += ' · Ada ha email in coda: da oggi le riservo fino a 25 al giorno'
}
const mailbox = Math.max(0, config.mailboxMax - config.manualReserve - sentToday - gojiberryLeft)
if (config.approved !== SEQUENCE_VERSION) {
  note += ` · invii fermi (sequenza ${SEQUENCE_VERSION} non approvata)`
} else {
  const priority = (l) => (l.sequence.sent.length ? 0 : l.php ? 1 : ['woocommerce', 'magento', 'prestashop', 'shopware', 'wordpress'].includes(l.platform) ? 2 : 3)
  const due = db.leads
    .map((lead) => ({ lead, step: dueStep(lead, today) }))
    .filter((d) => d.step)
    .sort((a, b) => priority(a.lead) - priority(b.lead))

  // At most one first email per store a day, even with several people of the same store.
  const storesToday = new Set(db.leads.filter((l) => l.sequence.sent.some((x) => x.step === 'e1' && x.date === today)).map((l) => l.domain))
  const followUps = due.filter((d) => d.step.key !== 'e1').length
  const budget = Math.min(mailbox, followUps + Math.min(cap, due.length - followUps))
  if (budget < followUps + Math.min(cap, due.length - followUps)) note += ` · budget casella ${mailbox} (già inviate oggi da antonio@ ${sentToday}, riservate a Gojiberry ${gojiberryLeft})`
  let sent = 0
  let firsts = 0
  for (const { lead, step } of due) {
    if (sent >= budget) break
    if (step.key === 'e1' && (firsts >= cap || storesToday.has(lead.domain))) continue
    // Never a first email to a store Antonio wrote to by hand in the last 60 days.
    if (step.key === 'e1' && api && (await api.search(`in:sent to:(${lead.email} OR ${lead.domain}) newer_than:60d`)).messages?.length) {
      Object.assign(lead, { segment: 'review', reason: 'contacted by hand in the last 60 days' })
      stats.recent++
      continue
    }
    const { subject, body } = render(lead, step.key)
    if (dry) {
      console.log(`[dry] ${step.key} -> ${lead.email} · ${subject}`)
      if (step.key === 'e1') {
        storesToday.add(lead.domain)
        firsts++
      }
      stats.sent[step.key]++
      sent++
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
    if (step.key === 'e1') {
      storesToday.add(lead.domain)
      firsts++
    }
    stats.sent[step.key]++
    sent++
    save()
    if (sent < budget) {
      const [min, max] = config.gapSeconds
      const left = until ? minutesUntil(until) : 0
      const seconds = left > 0 ? ((left * 60) / (budget - sent)) * (0.6 + Math.random() * 0.8) : min + Math.random() * (max - min)
      await new Promise((r) => setTimeout(r, seconds * 1000))
    }
  }
  stats.skipped = Math.max(0, due.length - stats.recent - sent)
  save()
}

// 4. Log and CRM
const total = Object.values(stats.sent).reduce((a, b) => a + b, 0)
const line = `- ${new Date().toISOString().slice(0, 16).replace('T', ' ')}${dry ? ' (dry)' : ''} · inviate ${total} (${Object.entries(stats.sent).filter(([, n]) => n).map(([k, n]) => `${k} ${n}`).join(', ') || 'nessuna'}) · rinviate ${stats.skipped} · saltate (scritte a mano) ${stats.recent} · risposte ${stats.replies} · opt-out ${stats.optouts} · bounce ${stats.bounces}${note}\n`
if (!dry) {
  appendFileSync(LOG, line)
  if (existsSync(config.crmPath)) execFileSync('node', ['scripts/cold-email-crm.mjs', config.crmPath, '--push'], { stdio: 'inherit' })
}
process.stdout.write(line)
