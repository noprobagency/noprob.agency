#!/usr/bin/env node
// Daily review of the Gojiberry email agent's leads (Dante: agent 41228, list 65682,
// campaign 46398, 3 emails from hello@noprob.agency). No AI. Review Mode is on in
// Gojiberry, so nothing is sent (and no email lookup credit is spent) before this
// approves a lead. For every new lead in the list:
//   0. opt-out sweep on Dante's list (replies with a no, unsubscribes, shared file)
//   1. store already on Shopify  -> moved to the Shopify side list (64769), kept for later
//   2. store already worked by the LinkedIn campaign (63200, 64866), by the direct
//      channel (cold-email/data/leads.json) or in docs/cold/suppressed.txt -> rejected
//   3. one person per store; new approvals a day = hello@'s daily limit / 3 emails per
//      lead, minus approved leads not started yet
// One line in cold-email/data/log.md; leads left for a human in cold-email/data/gjb-state.json.
// Mon-Fri 8:30 via launchd (agency.noprob.cold-email-gjb), before the 9:00 campaign launch.
//
// Usage: node scripts/cold-email-gjb.mjs [--dry]

import { appendFileSync, existsSync, readFileSync, writeFileSync } from 'node:fs'
import { fetchPlatform, pool } from '../lib/cold/fetch-platform.mjs'
import { normaliseUrl } from '../lib/cold/detect-platform.mjs'
import { LISTS, api, listContacts } from '../lib/cold/gojiberry.mjs'
import { optoutSweep } from '../lib/cold/sweep.mjs'
import { cleanCompany, review } from '../lib/cold-email/approve.mjs'
import { domainOf } from '../lib/cold-email/leads.mjs'
import { readSuppressed } from '../lib/cold-email/suppression.mjs'

// The mailbox is found by address: reconnecting it in Gojiberry gives it a new seat id.
const DANTE = { list: 65682, campaign: 46398, mailbox: 'hello@noprob.agency' }
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
const direct = existsSync('cold-email/data/leads.json')
  ? new Set(JSON.parse(readFileSync('cold-email/data/leads.json', 'utf8')).leads.filter((l) => l.segment !== 'shopify').map((l) => l.domain))
  : new Set()
const taken = { linkedin, direct, suppressed: readSuppressed() }

const contacts = await listContacts(DANTE.list)
// Started means started in Dante's campaign: leads taken over from another campaign
// (the 95 Italians of the paused ex-Leonardo list) carry its history and still need review.
const inDante = (c) => (c.campaignStatus || []).some((s) => s.campaignId === DANTE.campaign)
const started = (c) => c.readyForCampaign || inDante(c)
const approvedStores = new Set(contacts.filter(started).map((c) => domainOf(normaliseUrl(c.website))))
const waiting = contacts.filter((c) => c.readyForCampaign && !inDante(c)).length
const seat = ((await api('GET', '/v1/email-seat')) || []).find((s) => s.email === DANTE.mailbox)
// Every lead gets 3 emails: approving a third of the daily capacity keeps room for the
// follow-ups once the sequence is running (30/day -> 10 new leads a day).
const STEPS = 3
const cap = Math.max(0, Math.floor((seat?.dailyEmailMax ?? 2) / STEPS) - waiting)

const fresh = contacts.filter((c) => !processed.has(c.id) && !started(c) && !c.rejectedAt && !c.state)
const urls = [...new Set(fresh.map((c) => normaliseUrl(c.website)).filter(Boolean))]
const checks = await pool(urls, 12, (u) => fetchPlatform(u))

const plan = { approve: [], shopify: [], reject: [], hold: [] }
for (const c of fresh.sort((a, b) => Number(b.total_scoring) - Number(a.total_scoring))) {
  const decision = review(c, checks.get(normaliseUrl(c.website)) || null, taken)
  if (decision.action === 'approve' && approvedStores.has(decision.domain)) {
    plan.reject.push({ c, reason: 'same store already approved' })
  } else if (decision.action === 'approve' && plan.approve.length >= cap) {
    continue // waits for tomorrow's capacity, not marked processed
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
  for (const { c, reason } of plan.hold) held.set(c.id, { id: c.id, company: c.company, website: c.website, reason })
  writeFileSync(STATE, JSON.stringify({ lastRun: new Date().toISOString(), lastSweep: sweep.startedAt, processed: [...processed], held: [...held.values()] }))
}

const line = `- ${new Date().toISOString().slice(0, 16).replace('T', ' ')}${dry ? ' (dry)' : ''} · Dante (Gojiberry email) · nuovi ${fresh.length} · approvati ${plan.approve.length} (capacità ${cap}) · Shopify spostati ${plan.shopify.length} · scartati ${plan.reject.length} · da guardare ${plan.hold.length} · opt-out ${sweep.excluded}\n`
if (!dry) appendFileSync(LOG, line)
process.stdout.write(line)
