#!/usr/bin/env node
// Daily technical routine for the Gojiberry cold outreach (no AI, no credits).
// For every new lead in Ada's list (US, UK, AU; Italy went to Dante's email agent on 26 Oct 2026):
//   1. store already on Shopify  -> moved to the side-project segment
//   2. lead outside US, UK, AU -> held for a human look
//   3. lead passing the fixed criteria -> approved (readyForCampaign), max N per run
// Before that, the opt-out sweep (lib/cold/sweep.mjs), which also runs hourly on its own.
// Writes one line to docs/cold/daily-log.md. Lead data never leaves docs/cold/ (gitignored).
//
// Usage: node scripts/cold-daily.mjs [--dry] [--cap 10]

import { appendFileSync, existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { isPersonalSite, normaliseUrl, siteMatchesCompany } from '../lib/cold/detect-platform.mjs'
import { fetchPlatform, pool } from '../lib/cold/fetch-platform.mjs'
import { LISTS, api, listContacts } from '../lib/cold/gojiberry.mjs'
import { optoutSweep } from '../lib/cold/sweep.mjs'

const MIN_SCORE = 2.0
// antonio@noprob.agency sends for Gojiberry and for the direct channel: 55 a day in
// total is the ceiling Antonio set (60+ is a problem), Gojiberry keeps at most 25 of it
// so manual and direct emails have room.
const GOJIBERRY_EMAIL_CAP = 25
const ADA_MAILBOX = 'antonio@noprob.agency' // hello@ belongs to Dante's email agent
const NOT_DECISION_MAKER = /\b(assistant|associate|intern|internship|stagista|junior|customer service|customer care|coordinator|specialist|analyst|consultant|freelance|executive assistant|trainee)\b/i
// Ada's markets: US, UK and Australia. Anyone else stays held for a human look.
const EN_MARKETS = /\b(united states|usa|u\.s\.|united kingdom|uk|england|scotland|wales|northern ireland|great britain|australia|new south wales|queensland|western australia|south australia|tasmania|bay area|new york|los angeles|chicago|boston|seattle|miami|dallas|houston|austin|atlanta|denver|phoenix|philadelphia|san diego|portland|nashville|washington dc|london|manchester|birmingham|leeds|glasgow|edinburgh|bristol|liverpool|sydney|melbourne|brisbane|perth|adelaide|gold coast|canberra)\b/i

const args = process.argv.slice(2)
const dry = args.includes('--dry')
const cap = Number(args[args.indexOf('--cap') + 1]) || 10
const STATE = 'docs/cold/daily-state.json'
const LOG = 'docs/cold/daily-log.md'

// One person per company: the LinkedIn company page is the stable key, names vary
// ("Semprefarmacia" vs "Semprefarmacia.it").
const companyKey = (c) =>
  (c.companyUrl || '').toLowerCase().replace(/\/+$/, '') ||
  (c.company || '').toLowerCase().replace(/\.(it|com|co\.uk|de|fr|es|nl|eu|shop|store)$/, '').replace(/[^a-z0-9]/g, '')

const state = existsSync(STATE) ? JSON.parse(readFileSync(STATE, 'utf8')) : { processed: [], held: [] }
const stamp = () => new Date().toISOString().slice(0, 16).replace('T', ' ')
const saveState = (extra) => {
  if (dry) return
  mkdirSync('docs/cold', { recursive: true })
  const current = existsSync(STATE) ? JSON.parse(readFileSync(STATE, 'utf8')) : {}
  writeFileSync(STATE, JSON.stringify({ ...current, ...extra }))
}

const sweep = await optoutSweep({ since: state.lastSweep, dry })
saveState({ lastSweep: sweep.startedAt })

// --- Email volume: Ada's Gojiberry mailbox (Dante's hello@ has its own budget) --
const seats = await api('GET', '/v1/email-seat')
const mailMax = seats.filter((s) => s.email === ADA_MAILBOX).reduce((n, s) => n + (s.dailyEmailMax || 0), 0)
const mailFlag = mailMax > GOJIBERRY_EMAIL_CAP ? ` ⚠ sopra ${GOJIBERRY_EMAIL_CAP}, abbassare in Gojiberry` : ''

// --- New leads -----------------------------------------------------------------
const processed = new Set(state.processed)
const held = new Set(state.held || [])
const stats = { new: 0, shopify: 0, approved: { en: 0 }, held: 0 }
const moves = { shopify: [] }
const approvals = []

for (const key of ['en']) {
  const contacts = await listContacts(LISTS[key])
  const busyCompanies = new Set(
    contacts.filter((c) => c.readyForCampaign || c.hasStartedCampaign).map(companyKey),
  )
  const fresh = contacts.filter(
    (c) => !processed.has(c.id) && !c.readyForCampaign && !c.hasStartedCampaign && !c.rejectedAt && !c.state,
  )
  stats.new += fresh.length

  const urls = new Map()
  for (const c of fresh) {
    const url = normaliseUrl(c.website)
    urls.set(c.id, url && !isPersonalSite(c.lastName, url) ? url : null)
  }
  const platforms = await pool([...new Set([...urls.values()].filter(Boolean))], 12, (u) => fetchPlatform(u))

  const candidates = []
  for (const c of fresh) {
    const url = urls.get(c.id)
    const platform = url ? platforms.get(url).platform : 'unknown'
    if (platform === 'shopify') {
      moves.shopify.push(c.id)
      processed.add(c.id)
      continue
    }
    const ok =
      EN_MARKETS.test(`${c.location} ${c.companyLocation}`) &&
      url &&
      platform !== 'unreachable' &&
      siteMatchesCompany(c.company, url) &&
      !NOT_DECISION_MAKER.test(c.jobTitle || '') &&
      Number(c.total_scoring) >= MIN_SCORE
    if (!ok) {
      stats.held++
      held.add(c.id)
      processed.add(c.id) // left for a human look in /cold (state.held), not re-checked daily
      continue
    }
    candidates.push(c)
  }

  candidates.sort((a, b) => Number(b.total_scoring) - Number(a.total_scoring))
  for (const c of candidates) {
    const company = companyKey(c)
    if (busyCompanies.has(company)) {
      stats.held++ // same company already in sequence: one person per company
      processed.add(c.id)
      continue
    }
    if (stats.approved[key] >= cap) break // the rest waits for the next run
    busyCompanies.add(company)
    approvals.push(c.id)
    stats.approved[key]++
    processed.add(c.id)
  }
}

stats.shopify = moves.shopify.length

if (!dry) {
  if (moves.shopify.length) await api('POST', `/v1/contact/list/${LISTS.shopify}/contacts`, { contactIds: moves.shopify })
  for (const id of approvals) await api('PATCH', `/v1/contact/${id}`, { readyForCampaign: true })
  saveState({ lastRun: new Date().toISOString(), processed: [...processed], held: [...held] })
}

const line = `- ${stamp()}${dry ? ' (dry)' : ''} · opt-out esclusi ${sweep.excluded} · nuovi ${stats.new} · Shopify spostati ${stats.shopify} · approvati ${stats.approved.en} · da guardare ${stats.held} · email antonio@ max/giorno ${mailMax}${mailFlag}\n`
if (!dry) appendFileSync(LOG, line)
process.stdout.write(line)
