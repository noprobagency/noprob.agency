#!/usr/bin/env node
// Daily engine of the direct cold email channel (no AI). Mon-Fri via launchd
// (agency.noprob.cold-email). In order:
//   1. reads every running thread: a reply or a bounce stops the sequence for good
//      (a reply moves the lead to `warm` and stops everyone else of that store, a bounce
//      moves it to `suppressed`); out of office does not
//   2. skips domains that Gojiberry is working (read only) and anyone in the shared
//      opt-out list docs/cold/suppressed.txt; appends who said no here to that list
//   3. sends the emails due today, follow-ups first, within each mailbox's budget
//      (antonio@, plus config.mailboxes such as hello@: a lead keeps the mailbox of its first email)
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
import { gojiberryDomains, gojiberryQueuedToday, gojiberryRemaining } from '../lib/cold-email/gojiberry.mjs'
import { excludeDomains, stopStore } from '../lib/cold-email/leads.mjs'
import { appendSuppressed, applySuppressed, readSuppressed, refusals } from '../lib/cold-email/suppression.mjs'
import { publishTaken, takenBody } from '../lib/cold-email/taken.mjs'
import { SEQUENCE_VERSION, dueDate, dueStep, interleaveLines, lineOf, render } from '../lib/cold-email/sequence.mjs'
import { US_VERSION, US_ZONE, usHours, usReady } from '../lib/cold-email/sequence-us.mjs'
import { V3_VERSION, measureDato, pagespeedKey, renderV3First } from '../lib/cold-email/sequence-v3.mjs'

const DIR = 'cold-email/data'
const LEADS = `${DIR}/leads.json`
const CONFIG = `${DIR}/config.json`
const LOG = `${DIR}/log.md`

const args = process.argv.slice(2)
const dry = args.includes('--dry')
const config = { approved: null, dailyCap: 10, mailboxMax: 55, manualReserve: 10, adaCampaign: 45702, adaEmailsLive: false, gapSeconds: [40, 120], crmPath: `${DIR}/crm`, ...(existsSync(CONFIG) ? JSON.parse(readFileSync(CONFIG, 'utf8')) : {}) }
const cap = args.includes('--cap') ? Number(args[args.indexOf('--cap') + 1]) : config.dailyCap
// In the cloud (crm-noprobagency, GitHub Actions) the day is split in hourly runs:
// --slots N sends this run's share of what is left (N runs left today, this one included),
// --gap a,b sets the pause between emails, COLD_CRM_PATH points at the CRM checkout.
const slots = args.includes('--slots') ? Math.max(1, Number(args[args.indexOf('--slots') + 1])) : 1
if (args.includes('--gap')) config.gapSeconds = args[args.indexOf('--gap') + 1].split(',').map(Number)
if (process.env.COLD_CRM_PATH) config.crmPath = process.env.COLD_CRM_PATH
// Keep the Mac awake while this run lives (launchd starts node directly: a job whose
// program is /usr/bin/caffeinate fails to spawn).
if (!dry && process.platform === 'darwin') spawn('caffeinate', ['-i', '-w', String(process.pid)], { detached: true, stdio: 'ignore' }).unref()

const today = new Date().toLocaleDateString('en-CA', { timeZone: 'Europe/Lisbon' })
const until = args.includes('--until') ? args[args.indexOf('--until') + 1] : null

/** Minutes left until HH:MM on the recipients' clock (Europe/Rome, or New York for the US line with --until-zone us). */
function minutesUntil(hhmm) {
  const zone = args.includes('--until-zone') && args[args.indexOf('--until-zone') + 1] === 'us' ? US_ZONE : 'Europe/Rome'
  const [h, m] = new Date().toLocaleTimeString('en-GB', { timeZone: zone, hour12: false }).split(':').map(Number)
  const [eh, em] = hhmm.split(':').map(Number)
  return eh * 60 + em - (h * 60 + m)
}

const db = JSON.parse(readFileSync(LEADS, 'utf8'))
const save = () => {
  if (!dry) writeFileSync(LEADS, JSON.stringify({ ...db, updatedAt: new Date().toISOString() }, null, 2))
}
const stats = { v3: 0, replies: 0, optouts: 0, bounces: 0, sent: { e1: 0, e2: 0, e3: 0, e4: 0, e5: 0 }, skipped: 0, recent: 0 }

// Mailboxes: antonio@ always, plus config.mailboxes (e.g. hello@ with its own Keychain token).
// Every lead keeps the mailbox of its first email (sequence.mailbox, antonio@ when unset):
// its follow-ups and replies stay in that thread. New first emails go where there is room.
const MAILBOXES = [
  { key: 'antonio', email: SENDER.email, max: config.mailboxMax, reserve: config.manualReserve },
  ...(config.mailboxes || []).map((m) => ({ reserve: 0, ...m })),
]
// A dry run works without Gmail too: it only lists what would be sent.
for (const m of MAILBOXES) {
  m.api = await accessToken(m.token).then(
    (t) => gmail(t, { entry: m.token }),
    (err) => {
      if (!dry && m.key === 'antonio') throw err
      console.error(`${m.email}: ${err.message}: casella saltata`)
      return null
    },
  )
}
const boxOf = (lead) => MAILBOXES.find((m) => m.key === (lead.sequence.mailbox || 'antonio'))

// 1. Replies and bounces on running threads
for (const lead of db.leads) {
  const seq = lead.sequence
  const box = boxOf(lead)
  if (!box?.api) continue
  // Warm leads stay under watch: a later message can still ask to be removed.
  const warm = lead.segment === 'warm'
  if (!seq.threadId || !(warm || (lead.segment === 'target' && !seq.stoppedAt))) continue
  let outcome = threadOutcome(await box.api.thread(seq.threadId))
  if (outcome === 'reply') outcome = threadOutcome(await box.api.threadFull(seq.threadId))
  if (!outcome || (warm && outcome !== 'optout')) continue
  seq.stoppedAt ||= today
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

// 3. Sends, within each mailbox's budget
let note = ''
const pageKey = pagespeedKey()
// The mailbox budget covers every email; dailyCap limits only new first emails, so
// follow-ups keep their days even when a big batch reaches the same step together.
// Ada's campaign sends from antonio@ too (from 9:00, up to its warm-up limit): the
// emails it has queued for today are kept free, the rest of the mailbox is ours.
// A mailbox with a Gojiberry campaign of its own (hello@, until its follow-ups end) keeps
// that campaign's queue for today free.
for (const m of MAILBOXES) {
  m.sentToday = m.api ? ((await m.api.search(`in:sent after:${today.replaceAll('-', '/')}`)).messages || []).length : 0
  if (m.key === 'antonio') {
    const ada = await gojiberryRemaining(SENDER.email, config.adaCampaign, { live: config.adaEmailsLive }).catch((err) => {
      console.error(`Gojiberry seat check failed, 25 kept free: ${err.message}`)
      return { reserve: 25, live: config.adaEmailsLive }
    })
    m.gojiberry = ada.reserve
    if (ada.live && !config.adaEmailsLive && !dry) {
      const saved = JSON.parse(readFileSync(CONFIG, 'utf8'))
      writeFileSync(CONFIG, `${JSON.stringify({ ...saved, adaEmailsLive: true }, null, 2)}\n`)
      note += ' · Ada ha email in coda: da oggi le riservo fino a 25 al giorno'
    }
  } else {
    m.gojiberry = m.gojiberryCampaign
      ? await gojiberryQueuedToday(m.email, m.gojiberryCampaign).catch((err) => {
          console.error(`${m.email}: Gojiberry check failed, mailbox kept free: ${err.message}`)
          return m.max
        })
      : 0
  }
  m.room = m.api ? Math.max(0, m.max - m.reserve - m.sentToday - m.gojiberry) : 0
  m.sent = 0
}
// Each line sends only its approved copy: Italy (SEQUENCE_VERSION) and USA (US_VERSION).
// US emails go out only in New York working hours (the afternoon runs of the Mac).
const usApproved = usReady() && config.approvedUs === US_VERSION
const approved = { it: config.approved === SEQUENCE_VERSION, us: usApproved && usHours() }
if (!approved.it) note += ` · Italia ferma (sequenza ${SEQUENCE_VERSION} non approvata)`
if (!usApproved && db.leads.some((l) => lineOf(l) === 'us' && l.segment === 'target')) note += ` · USA ferma (sequenza ${US_VERSION} non approvata)`
if (approved.it || approved.us) {
  const priority = (l) => (l.sequence.sent.length ? 0 : l.php ? 1 : ['woocommerce', 'magento', 'prestashop', 'shopware', 'wordpress'].includes(l.platform) ? 2 : 3)
  const due = db.leads
    .map((lead) => ({ lead, step: dueStep(lead, today) }))
    .filter((d) => d.step && approved[lineOf(d.lead)])
    .sort((a, b) => priority(a.lead) - priority(b.lead) || (a.step.key === 'e1' ? 0 : dueDate(a.lead, a.step).localeCompare(dueDate(b.lead, b.step))))
  // Follow-ups first; then first emails of Italy and USA in turns, so both lines start every day.
  due.splice(0, due.length, ...due.filter((d) => d.step.key !== 'e1'), ...interleaveLines(due.filter((d) => d.step.key === 'e1')))

  // At most one first email per store a day, even with several people of the same store.
  const storesToday = new Set(db.leads.filter((l) => l.sequence.sent.some((x) => x.step === 'e1' && x.date === today)).map((l) => l.domain))
  const followUps = due.filter((d) => d.step.key !== 'e1').length
  // First emails already sent today (an earlier hourly run) count against dailyCap.
  const firstsToday = db.leads.filter((l) => l.sequence.sent.some((x) => x.step === 'e1' && x.date === today)).length
  const capLeft = Math.max(0, cap - firstsToday)
  const wanted = followUps + Math.min(capLeft, due.length - followUps)
  const room = MAILBOXES.reduce((n, m) => n + m.room, 0)
  // Each mailbox sends its own share of the day in this run, so both send all day long.
  for (const m of MAILBOXES) m.run = Math.ceil(m.room / slots)
  const left = () => MAILBOXES.reduce((n, m) => n + Math.max(0, m.run - m.sent), 0)
  if (room < wanted) note += ` · budget ${MAILBOXES.map((m) => `${m.email.split('@')[0]}@ ${m.room} (già inviate oggi ${m.sentToday}, riservate a Gojiberry ${m.gojiberry})`).join(', ')}`
  let sent = 0
  let firsts = 0
  for (const { lead, step } of due) {
    if (!left()) break
    // A follow-up stays in its thread's mailbox; a first email takes the mailbox with most room.
    const m = step.key === 'e1' ? MAILBOXES.filter((x) => x.run > x.sent).sort((a, b) => b.run - b.sent - (a.run - a.sent))[0] : boxOf(lead)
    if (!m || m.sent >= m.run) continue
    if (step.key === 'e1' && (firsts >= capLeft || storesToday.has(lead.domain))) continue
    // Never a first email to a store Antonio wrote to by hand in the last 60 days, from any mailbox.
    if (step.key === 'e1') {
      let recent = false
      for (const x of MAILBOXES) if (x.api && (await x.api.search(`in:sent to:(${lead.email} OR ${lead.domain}) newer_than:60d`)).messages?.length) recent = true
      if (recent) {
        Object.assign(lead, { segment: 'review', reason: 'contacted by hand in the last 60 days' })
        stats.recent++
        continue
      }
    }
    // Italy v3 (D-100): a first email opens with one fact about the homepage when a rule fires;
    // otherwise the lead keeps the v2 first email. Measured once, saved on the lead.
    let v3 = null
    if (step.key === 'e1' && lineOf(lead) === 'it' && config.approvedV3 === V3_VERSION) {
      if (!lead.datoAt) {
        const dato = await measureDato(lead.domain, pageKey).catch(() => null)
        Object.assign(lead, { dato: dato?.frase || null, datoRule: dato?.rule || 'none', datoAt: new Date().toISOString() })
      }
      if (lead.dato) v3 = renderV3First(lead, lead.dato)
    }
    const { subject, body } = v3 || render(lead, step.key, { v3: config.approvedV3 === V3_VERSION })
    if (dry) {
      console.log(`[dry] ${m.email.split('@')[0]}@ ${step.key} -> ${lead.email} · ${subject}`)
      if (v3) stats.v3++
      if (step.key === 'e1') {
        storesToday.add(lead.domain)
        firsts++
      }
      stats.sent[step.key]++
      m.sent++
      sent++
      continue
    }
    const seq = lead.sequence
    const res = await m.api.send(buildRaw({ to: lead.email, subject, body, inReplyTo: seq.messageId, from: m.email }), seq.threadId)
    if (step.key === 'e1') {
      seq.threadId = res.threadId
      seq.messageId = messageId(await m.api.thread(res.threadId))
      seq.version = lineOf(lead) === 'us' ? US_VERSION : v3 ? V3_VERSION : SEQUENCE_VERSION
      if (v3) stats.v3++
      seq.mailbox = m.key
    }
    seq.sent.push({ step: step.key, date: today, id: res.id })
    if (step.key === 'e1') {
      storesToday.add(lead.domain)
      firsts++
    }
    stats.sent[step.key]++
    m.sent++
    sent++
    save()
    if (left()) {
      const [min, max] = config.gapSeconds
      const minutes = until ? minutesUntil(until) : 0
      const seconds = minutes > 0 ? ((minutes * 60) / left()) * (0.6 + Math.random() * 0.8) : min + Math.random() * (max - min)
      await new Promise((r) => setTimeout(r, seconds * 1000))
    }
  }
  stats.skipped = Math.max(0, due.length - stats.recent - sent)
  if (stats.v3) note += ` · prime v3 ${stats.v3}`
  if (MAILBOXES.length > 1) note += ` · per casella ${MAILBOXES.map((m) => `${m.email.split('@')[0]}@ ${m.sent}`).join(', ')}`
  save()
}

// 4. Log and CRM
const total = Object.values(stats.sent).reduce((a, b) => a + b, 0)
const line = `- ${new Date().toISOString().slice(0, 16).replace('T', ' ')}${dry ? ' (dry)' : ''} · inviate ${total} (${Object.entries(stats.sent).filter(([, n]) => n).map(([k, n]) => `${k} ${n}`).join(', ') || 'nessuna'}) · rinviate ${stats.skipped} · saltate (scritte a mano) ${stats.recent} · risposte ${stats.replies} · opt-out ${stats.optouts} · bounce ${stats.bounces}${note}\n`
if (!dry) {
  appendFileSync(LOG, line)
  // The night review of Dante in the cloud reads today's stores and opt-outs from here.
  publishTaken(takenBody(db.leads.filter((l) => l.segment !== 'shopify').map((l) => l.domain), readSuppressed()))
  if (existsSync(config.crmPath)) execFileSync('node', ['scripts/cold-email-crm.mjs', config.crmPath, '--push'], { stdio: 'inherit' })
  // The CRM's single store registry (Claudio's) is rebuilt after every export; a failure
  // there never stops this run.
  if (existsSync(config.crmPath)) {
    try {
      execFileSync('node', ['scripts/crm-registry.mjs', config.crmPath, '--gojiberry', '--push'], { stdio: 'inherit' })
    } catch (err) {
      console.error(`CRM registry not rebuilt: ${err.message.split('\n')[0]}`)
    }
  }
}
process.stdout.write(line)
