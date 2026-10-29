#!/usr/bin/env node
// Daily review of the Gojiberry email agent's leads (Dante: agent 41228, list 65682,
// campaign 46398, 3 emails from hello@noprob.agency). No AI. Review Mode is on in
// Gojiberry, so nothing is sent (and no email lookup credit is spent) before this
// approves a lead. For every new lead in the list:
//   0. opt-out sweep on Dante's list (replies with a no, unsubscribes, shared file)
//   1. store already on Shopify  -> moved to the Shopify side list (64769), kept for later
//   2. store already worked by the LinkedIn campaign (63200, 64866), by the direct
//      channel (cold-email/data/leads.json) or in docs/cold/suppressed.txt -> rejected
//   3. one person per store; new approvals a day = hello@'s daily limit minus the emails
//      Gojiberry already has queued for today (follow-ups and approved leads not started),
//      so hello@ sends its full limit every day
//   4. leads that pass when Dante is full go to the direct channel (antonio@, 5 emails):
//      Gojiberry finds the email (1 credit when found), the contact moves to list 66757
//      (out of Dante) and the lead lands in cold-email/data/leads.json, until the direct
//      channel has `directPool` (config.json, default 55) first emails waiting
// One line in cold-email/data/log.md; leads left for a human in cold-email/data/gjb-state.json.
// Mon-Fri 8:30 via launchd (agency.noprob.cold-email-gjb), before the 9:00 campaign launch.
//
// Usage: node scripts/cold-email-gjb.mjs [--dry]

import { execFileSync } from 'node:child_process'
import { appendFileSync, existsSync, readFileSync, writeFileSync } from 'node:fs'
import { fetchPlatform, pool } from '../lib/cold/fetch-platform.mjs'
import { normaliseUrl } from '../lib/cold/detect-platform.mjs'
import { LISTS, api, listContacts } from '../lib/cold/gojiberry.mjs'
import { optoutSweep } from '../lib/cold/sweep.mjs'
import { cleanCompany, review } from '../lib/cold-email/approve.mjs'
import { danteLead } from '../lib/cold-email/dante.mjs'
import { domainOf, fromGojiberry } from '../lib/cold-email/leads.mjs'
import { readSuppressed } from '../lib/cold-email/suppression.mjs'

// The mailbox is found by address: reconnecting it in Gojiberry gives it a new seat id.
const DANTE = { list: 65682, campaign: 46398, mailbox: 'hello@noprob.agency' }
const DIRECT = { list: 66757, leads: 'cold-email/data/leads.json', config: 'cold-email/data/config.json' }
const STATE = 'cold-email/data/gjb-state.json'
const LOG = 'cold-email/data/log.md'
const dry = process.argv.includes('--dry')

const state = existsSync(STATE) ? JSON.parse(readFileSync(STATE, 'utf8')) : { processed: [], held: [] }
const processed = new Set(state.processed)
const held = new Map((state.held || []).map((h) => [h.id, h]))

// Opt-outs first: anyone who replied no (or unsubscribed) on Dante's list is excluded and
// lands in docs/cold/suppressed.txt, the same sweep Ada runs hourly on her lists.
const sweep = await optoutSweep({ lists: [DANTE.list], since: state.lastSweep, dry })

// Stores another channel already has
const websites = async (listId) => (await listContacts(listId)).map((c) => domainOf(normaliseUrl(c.website))).filter(Boolean)
const linkedin = new Set([...(await websites(LISTS.en)), ...(await websites(LISTS.it))])
const db = existsSync(DIRECT.leads) ? JSON.parse(readFileSync(DIRECT.leads, 'utf8')) : { leads: [] }
const direct = new Set(db.leads.filter((l) => l.segment !== 'shopify').map((l) => l.domain))
const taken = { linkedin, direct, suppressed: readSuppressed() }

const contacts = await listContacts(DANTE.list)
// Started means started in Dante's campaign: leads taken over from another campaign
// (the 95 Italians of the paused ex-Leonardo list) carry its history and still need review.
const inDante = (c) => (c.campaignStatus || []).some((s) => s.campaignId === DANTE.campaign)
const started = (c) => c.readyForCampaign || inDante(c)
const approvedStores = new Set(contacts.filter(started).map((c) => domainOf(normaliseUrl(c.website))))
const seat = ((await api('GET', '/v1/email-seat')) || []).find((s) => s.email === DANTE.mailbox)
// Fill hello@ every day: what the queue (follow-ups due, approved leads waiting) leaves
// of the daily limit goes to new leads. Gojiberry holds anything over the limit for the
// next day, so a busy day only shifts a follow-up by a day.
const queued = ((await api('GET', `/v1/campaign/${DANTE.campaign}/email-queue`)) || []).length
const cap = Math.max(0, (seat?.dailyEmailMax ?? 2) - (seat?.dailyEmailCount ?? 0) - queued)

const fresh = contacts.filter((c) => !processed.has(c.id) && !started(c) && !c.rejectedAt && !c.state)
const urls = [...new Set(fresh.map((c) => normaliseUrl(c.website)).filter(Boolean))]
const checks = await pool(urls, 12, (u) => fetchPlatform(u))

// The direct channel takes the overflow up to a pool of first emails waiting to go out.
const directPool = (existsSync(DIRECT.config) ? JSON.parse(readFileSync(DIRECT.config, 'utf8')).directPool : null) ?? 55
const directWaiting = db.leads.filter((l) => l.segment === 'target' && !l.sequence.sent.length && !l.sequence.stoppedAt).length
// The daily send run keeps leads.json in memory and saves after every email: while it
// runs (Mac woken late, both jobs at once) the overflow waits for the next review.
const dailyRunning = (() => {
  try {
    return Boolean(execFileSync('pgrep', ['-f', 'cold-email-daily'], { encoding: 'utf8' }).trim())
  } catch {
    return false
  }
})()
const directRoom = dailyRunning ? 0 : Math.max(0, directPool - directWaiting)

const plan = { approve: [], direct: [], shopify: [], reject: [], hold: [] }
for (const c of fresh.sort((a, b) => Number(b.total_scoring) - Number(a.total_scoring))) {
  const decision = review(c, checks.get(normaliseUrl(c.website)) || null, taken)
  if (decision.action === 'approve' && approvedStores.has(decision.domain)) {
    plan.reject.push({ c, reason: 'same store already approved' })
  } else if (decision.action === 'approve' && plan.approve.length >= cap) {
    if (plan.direct.length >= directRoom) continue // waits for tomorrow's capacity, not marked processed
    plan.direct.push({ c, reason: null })
    approvedStores.add(decision.domain)
  } else {
    plan[decision.action].push({ c, reason: decision.reason })
    if (decision.action === 'approve') approvedStores.add(decision.domain)
  }
  processed.add(c.id)
}

if (dry) {
  for (const [action, items] of Object.entries(plan))
    for (const { c, reason } of items) console.log(`[dry] ${action} · ${c.company} · ${c.jobTitle} · ${c.website}${reason ? ` · ${reason}` : ''}`)
} else {
  if (plan.shopify.length) await api('POST', `/v1/contact/list/${LISTS.shopify}/contacts`, { contactIds: plan.shopify.map(({ c }) => c.id) })
  for (const { c } of plan.reject) await api('POST', `/v1/contact/${c.id}/reject`)
  // The subject is "[Company] su Shopify?": the name goes in as a person would write it.
  for (const { c } of plan.approve) await api('PATCH', `/v1/contact/${c.id}`, { readyForCampaign: true, company: cleanCompany(c.company) })
  // Direct channel: email lookup a few at a time (each call can take minutes).
  const found = await pool(plan.direct, 4, async ({ c }) => {
    try {
      return await api('POST', `/v1/contact/${c.id}/enrich/email`)
    } catch (err) {
      console.error(`enrich ${c.id}: ${err.message}`)
      return null
    }
  })
  const moved = []
  for (const item of plan.direct) {
    const enriched = found.get(item) || item.c
    if (!enriched.email) {
      plan.hold.push({ c: item.c, reason: 'no email found (direct channel)' })
      continue
    }
    const check = checks.get(normaliseUrl(item.c.website)) || null
    db.leads.push(fromGojiberry({ ...item.c, ...enriched }, check, cleanCompany(item.c.company)))
    moved.push(item.c.id)
  }
  if (moved.length) {
    await api('POST', `/v1/contact/list/${DIRECT.list}/contacts`, { contactIds: moved })
    writeFileSync(DIRECT.leads, JSON.stringify({ ...db, updatedAt: new Date().toISOString() }, null, 2))
  }
  plan.direct = plan.direct.filter(({ c }) => moved.includes(c.id))
  for (const { c, reason } of plan.hold) held.set(c.id, { id: c.id, company: c.company, website: c.website, reason })
  writeFileSync(STATE, JSON.stringify({ lastRun: new Date().toISOString(), lastSweep: sweep.startedAt, processed: [...processed], held: [...held.values()] }))
}

// Dante's leads in the CRM next to the direct channel's (cold-email/data/dante.json,
// merged by scripts/cold-email-crm.mjs).
if (!dry) {
  const approvedNow = new Set(plan.approve.map(({ c }) => c.id))
  const crmLeads = contacts.filter((c) => started(c) || approvedNow.has(c.id)).map((c) => danteLead(c, DANTE.campaign, cleanCompany(c.company)))
  writeFileSync('cold-email/data/dante.json', JSON.stringify({ updatedAt: new Date().toISOString(), leads: crmLeads }))
  const crmPath = (existsSync(DIRECT.config) && JSON.parse(readFileSync(DIRECT.config, 'utf8')).crmPath) || 'cold-email/data/crm'
  if (existsSync(crmPath)) execFileSync('node', ['scripts/cold-email-crm.mjs', crmPath, '--push'], { stdio: 'inherit' })
}

const line = `- ${new Date().toISOString().slice(0, 16).replace('T', ' ')}${dry ? ' (dry)' : ''} · Dante (Gojiberry email) · nuovi ${fresh.length} · approvati ${plan.approve.length} (capacità ${cap}) · al canale diretto ${plan.direct.length} (spazio ${directRoom}) · Shopify spostati ${plan.shopify.length} · scartati ${plan.reject.length} · da guardare ${plan.hold.length} · opt-out ${sweep.excluded}\n`
if (!dry) appendFileSync(LOG, line)
process.stdout.write(line)
