#!/usr/bin/env node
// Daily technical routine for the Gojiberry cold outreach (no AI, no credits).
// For every new lead in the Sprint lists:
//   1. store already on Shopify  -> moved to the side-project segment
//   2. Italian lead in the EN list -> moved to the IT list
//   3. lead passing the fixed criteria -> approved (readyForCampaign), max N per campaign per run
// Writes one line to docs/cold/daily-log.md. Lead data never leaves docs/cold/ (gitignored).
//
// API key: env GOJIBERRY_API_KEY, or macOS Keychain item "gojiberry-api"
//   (security add-generic-password -s gojiberry-api -a noprob -w)
// Usage: node scripts/cold-daily.mjs [--dry] [--cap 10]

import { execFileSync } from 'node:child_process'
import { appendFileSync, existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { isPersonalSite, normaliseUrl, siteMatchesCompany } from '../lib/cold/detect-platform.mjs'
import { fetchPlatform, pool } from '../lib/cold/fetch-platform.mjs'

const LISTS = { en: 63200, it: 64866, shopify: 64769 }
const MIN_SCORE = 2.0
const NOT_DECISION_MAKER = /\b(assistant|associate|intern|internship|stagista|junior|customer service|customer care|coordinator|specialist|analyst|consultant|freelance|executive assistant|trainee)\b/i
const ITALY = /\b(italy|italia|milan|milano|rome|roma|turin|torino|naples|napoli|florence|firenze|bologna|venice|venezia|genoa|genova|verona|bari|palermo|catania|padua|padova|brescia|bergamo|como|monza|varese|treviso|vicenza|modena|parma|reggio|rimini|pesaro|ancona|perugia|cagliari|trieste|udine|trento|bolzano)\b/i

const args = process.argv.slice(2)
const dry = args.includes('--dry')
const cap = Number(args[args.indexOf('--cap') + 1]) || 10
const STATE = 'docs/cold/daily-state.json'
const LOG = 'docs/cold/daily-log.md'

function apiKey() {
  if (process.env.GOJIBERRY_API_KEY) return process.env.GOJIBERRY_API_KEY
  try {
    return execFileSync('security', ['find-generic-password', '-s', 'gojiberry-api', '-w'], { encoding: 'utf8' }).trim()
  } catch {
    console.error('Missing API key: set GOJIBERRY_API_KEY or the Keychain item "gojiberry-api".')
    process.exit(1)
  }
}
const KEY = apiKey()

async function api(method, path, body) {
  for (let attempt = 0; attempt < 3; attempt++) {
    const res = await fetch(`https://ext.gojiberry.ai${path}`, {
      method,
      headers: { authorization: `Bearer ${KEY}`, 'content-type': 'application/json' },
      body: body ? JSON.stringify(body) : undefined,
    })
    if (res.status === 429) {
      await new Promise((r) => setTimeout(r, (Number(res.headers.get('retry-after')) || 10) * 1000))
      continue
    }
    if (!res.ok) throw new Error(`${method} ${path} -> ${res.status} ${(await res.text()).slice(0, 200)}`)
    const text = await res.text()
    return text ? JSON.parse(text) : null
  }
  throw new Error(`${method} ${path} -> rate limited`)
}

async function listContacts(listId) {
  const all = []
  for (let page = 1; page < 50; page++) {
    const data = await api('GET', `/v1/contact?listId=${listId}&limit=100&page=${page}`)
    const items = data.contacts || data.data || []
    all.push(...items)
    if (items.length < 100) break
  }
  return all
}

// One person per company: the LinkedIn company page is the stable key, names vary
// ("Semprefarmacia" vs "Semprefarmacia.it").
const companyKey = (c) =>
  (c.companyUrl || '').toLowerCase().replace(/\/+$/, '') ||
  (c.company || '').toLowerCase().replace(/\.(it|com|co\.uk|de|fr|es|nl|eu|shop|store)$/, '').replace(/[^a-z0-9]/g, '')

const state = existsSync(STATE) ? JSON.parse(readFileSync(STATE, 'utf8')) : { processed: [], held: [] }
const processed = new Set(state.processed)
const held = new Set(state.held || [])
const stats = { new: 0, shopify: 0, toIt: 0, approved: { en: 0, it: 0 }, held: 0 }
const moves = { shopify: [], it: [] }
const approvals = []

for (const key of ['en', 'it']) {
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
    if (key === 'en' && ITALY.test(`${c.location} ${c.companyLocation}`)) {
      moves.it.push(c.id)
      continue // evaluated again tomorrow inside the IT list
    }
    const ok =
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
stats.toIt = moves.it.length

if (!dry) {
  if (moves.shopify.length) await api('POST', `/v1/contact/list/${LISTS.shopify}/contacts`, { contactIds: moves.shopify })
  if (moves.it.length) await api('POST', `/v1/contact/list/${LISTS.it}/contacts`, { contactIds: moves.it })
  for (const id of approvals) await api('PATCH', `/v1/contact/${id}`, { readyForCampaign: true })
  mkdirSync('docs/cold', { recursive: true })
  writeFileSync(STATE, JSON.stringify({ lastRun: new Date().toISOString(), processed: [...processed], held: [...held] }))
}

const line = `- ${new Date().toISOString().slice(0, 16).replace('T', ' ')}${dry ? ' (dry)' : ''} · nuovi ${stats.new} · Shopify spostati ${stats.shopify} · IT spostati ${stats.toIt} · approvati EN ${stats.approved.en} IT ${stats.approved.it} · da guardare ${stats.held}\n`
if (!dry) appendFileSync(LOG, line)
process.stdout.write(line)
