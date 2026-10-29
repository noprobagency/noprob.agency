#!/usr/bin/env node
// Damiano: sources decision-maker emails at Italian stores NOT on Shopify, for the
// cold channels. No AI in the loop: one treg call per step, every answer cached in
// the state file, so a rerun never pays twice.
//
// Flow per company: Hunter discover (free) -> homepage platform check with the same
// detector Ada and Dante use (free) -> Shopify stores go to a separate list with a
// free people search, no paid calls -> everyone else: people search by domain (free),
// best decision maker by title, email find + verify (paid, ~$0.005-0.01 each).
// Only verdict "valid" becomes a lead. Lead data stays local (docs/cold/ is gitignored).
//
// Usage: node scripts/damiano-scrape.mjs --target 50 [--budget 5] [--out docs/cold/damiano] [--crm <crm checkout>]

import { execFile } from 'node:child_process'
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { promisify } from 'node:util'
import { normaliseUrl, siteMatchesCompany } from '../lib/cold/detect-platform.mjs'
import { fetchPlatform, pool } from '../lib/cold/fetch-platform.mjs'

const run = promisify(execFile)
const args = process.argv.slice(2)
const opt = (name, fallback) => {
  const i = args.indexOf(`--${name}`)
  return i === -1 ? fallback : args[i + 1]
}
const TARGET = Number(opt('target', 50))
const BUDGET_MICRO = Number(opt('budget', 5)) * 1e6
const OUT = opt('out', 'docs/cold/damiano')
const STATE_FILE = join(OUT, 'state.json')

// Natural-language Hunter queries, one per vertical; Hunter turns each into filters.
const QUERIES = [
  'Fashion and apparel brands headquartered in Italy with an online store, 11-200 employees',
  'Footwear and leather goods brands headquartered in Italy selling online, 11-200 employees',
  'Cosmetics, beauty and skincare brands headquartered in Italy with an ecommerce, 11-200 employees',
  'Food, wine and gourmet ecommerce companies headquartered in Italy, 11-200 employees',
  'Home decor, furniture and design brands headquartered in Italy selling online, 11-200 employees',
  'Jewelry, watches and accessories brands headquartered in Italy with an online shop, 11-200 employees',
  'Sports, outdoor and cycling brands headquartered in Italy with an ecommerce, 11-200 employees',
  'Online retail stores headquartered in Italy using Magento, WooCommerce or PrestaShop, 11-200 employees',
]
const STORE_PLATFORMS = new Set(['magento', 'woocommerce', 'prestashop', 'shopware', 'salesforce-commerce-cloud', 'bigcommerce'])

// Title ranking: lower is better; null means not a decision maker for a migration.
const RANKS = [
  [/\b(ceo|founder|co-?founder|fondat|titolare|owner|propriet|amministratore|managing director|general manager|direttore generale|president)|(?<![-\w])socio(?![-\w])/i, 1],
  [/(e-?commerce|digital|online).*(manager|director|head|responsabile|lead|direttore)|(head|responsabile|direttore|director).*(e-?commerce|digital|online)|chief digital|\bcdo\b/i, 2],
  [/\bcmo\b|marketing.*(director|manager|head|responsabile|direttore)|(head|responsabile|direttore).*marketing|\bcoo\b|chief operating/i, 3],
  [/e-?commerce|digital/i, 4],
]
// Consumer brands only: Hunter drifts into agencies, SaaS and B2B manufacturers whose
// WordPress has a WooCommerce plugin. The industry comes free with the people search.
const FIT_INDUSTRY = /retail|apparel|fashion|luxury|jewel|cosmetic|personal care|beauty|food|beverage|wine|winer|spirits|wellness|sporting goods|sports equipment|furniture|home furnish|consumer|footwear|toy|pet |e-?commerce|internet marketplace|textile|eyewear|leather/i
const fits = (c) => FIT_INDUSTRY.test(c.industry || '')
const SKIP_TITLE =/intern|stagi|tirocin|assistant|assistente|customer (service|care)|magazzin|warehouse|student/i
const rankOf = (title = '') => {
  if (!title || SKIP_TITLE.test(title)) return null
  for (const [re, r] of RANKS) if (re.test(title)) return r
  return null
}

const state = existsSync(STATE_FILE)
  ? JSON.parse(readFileSync(STATE_FILE, 'utf8'))
  : { companies: {}, queries: {}, spentMicro: 0, calls: 0 }
const save = () => writeFileSync(STATE_FILE, JSON.stringify(state, null, 1))

async function treg(id, body, headers = {}) {
  if (state.spentMicro >= BUDGET_MICRO) throw new Error('budget reached')
  const h = Object.entries(headers).flatMap(([k, v]) => ['--header', `${k}: ${v}`])
  const { stdout } = await run('treg', ['--json', 'call', id, '--method', 'POST', '--data', JSON.stringify(body), ...h], {
    maxBuffer: 20 * 1024 * 1024,
  })
  const res = JSON.parse(stdout)
  state.spentMicro += res._treg?.charged_micro || 0
  state.calls += 1
  if (res._treg?.http_status >= 400) throw new Error(`${id} ${res._treg.http_status}`)
  return res.result
}

// Domains already in any channel (CRM, direct cold email, Dante, opt-outs): never touched.
function knownDomains() {
  const out = new Set()
  const files = [
    '/Users/antoniomanitta/crm-noprob/data/prospects.json',
    'cold-email/data/leads.json',
    'cold-email/data/dante.json',
    'docs/cold/suppressed.txt',
  ]
  for (const f of files) {
    if (!existsSync(f)) continue
    const text = readFileSync(f, 'utf8').toLowerCase()
    for (const m of text.matchAll(/@([a-z0-9.-]+\.[a-z]{2,})/g)) out.add(m[1].replace(/^www\./, ''))
    for (const m of text.matchAll(/"domain":\s*"([^"]+)"/g)) out.add(m[1].replace(/^www\./, ''))
  }
  return out
}

async function discover() {
  for (const q of QUERIES) {
    for (let offset = 0; offset < 300; offset += 100) {
      const key = `${q}#${offset}`
      if (state.queries[key] != null) continue
      const r = await treg('hunter.x.discover-companies', { query: q, limit: 100, offset })
      const rows = r?.data || []
      state.queries[key] = rows.length
      for (const row of rows) {
        const domain = row.domain?.toLowerCase().replace(/^www\./, '')
        if (domain && !state.companies[domain]) state.companies[domain] = { domain, name: row.organization, query: q }
      }
      save()
      if (rows.length < 100) break
    }
  }
}

async function checkPlatforms(domains) {
  const todo = domains.filter((d) => !state.companies[d].platform || state.companies[d].status === undefined)
  const res = await pool(todo, 16, (d) => fetchPlatform(normaliseUrl(d), { timeout: 12000 }))
  for (const [d, r] of res) Object.assign(state.companies[d], { platform: r.platform, evidence: r.evidence, php: r.php, status: r.status })
  save()
}

async function people(c) {
  if (c.people) return c.people
  const r = await treg(
    'treg.people.search',
    { company_domain: c.domain, limit: 25 },
    { 'X-Treg-Route-Prefer': 'quickenrich', 'X-Treg-Route-Waterfall': '0', 'X-Treg-Route-Max-Cost': '0.01' },
  )
  c.people = (r?.output?.people || []).map((p) => ({
    name: [p.first_name, p.last_name].filter(Boolean).join(' '),
    first: p.first_name,
    last: p.last_name,
    title: p.title,
    linkedin: p.employee_linkedin && p.employee_linkedin !== 'N/A' ? p.employee_linkedin : null,
    rank: rankOf(p.title),
  }))
  const org = r?.output?.people?.[0]
  if (org) Object.assign(c, { legalName: org.company_name, employees: org.employee_count, revenue: org.revenue, industry: org.industry, city: org.city })
  save()
  return c.people
}

async function findEmail(c, p) {
  p.tried = true
  const body = { first_name: p.first, last_name: p.last, domain: c.domain, ...(p.linkedin ? { linkedin_url: p.linkedin } : {}) }
  const r = await treg('treg.people.email.find', body, { 'X-Treg-Route-Verify': 'true', 'X-Treg-Route-Max-Cost': '0.05' })
  p.email = r?.output?.email || null
  p.verdict = r?._treg?.verification?.verdict || (p.email ? 'unverified' : 'not_found')
  p.emailBy = r?._treg?.served_by || null
  save()
  return p.verdict === 'valid' ? p : null
}

mkdirSync(OUT, { recursive: true })
const known = knownDomains()
await discover()
const domains = Object.keys(state.companies).filter((d) => !known.has(d))
console.error(`${Object.keys(state.companies).length} companies discovered, ${domains.length} not in any channel yet`)
await checkPlatforms(domains)

// Same rule as Ada and Dante: an error page (bot wall, 429, 5xx) proves nothing about the platform.
const reachable = (c) => c.status >= 200 && c.status < 400
const leads = () => Object.values(state.companies).filter((c) => c.lead && fits(c) && reachable(c))
for (const d of domains) {
  const c = state.companies[d]
  if (leads().length >= TARGET) break
  if (c.done || !STORE_PLATFORMS.has(c.platform) || !reachable(c)) continue
  try {
    const found = await people(c)
    if (!fits(c)) {
      c.done = true
      continue
    }
    for (const p of found) p.rank = rankOf(p.title)
    const ranked = found.filter((p) => p.rank != null).sort((a, b) => a.rank - b.rank)
    for (const p of ranked.slice(0, 2)) {
      if (p.tried) continue
      const hit = await findEmail(c, p)
      if (hit) {
        c.lead = { name: hit.name, title: hit.title, email: hit.email, linkedin: hit.linkedin }
        break
      }
    }
  } catch (err) {
    console.error(`${d}: ${err.message}`)
    if (err.message === 'budget reached') break
  }
  c.done = true
  save()
  console.error(`${leads().length}/${TARGET} leads · $${(state.spentMicro / 1e6).toFixed(3)} · ${d} (${c.platform})`)
}

// Shopify stores: kept apart for later offers, with a free people search only.
const shopify = Object.values(state.companies).filter((c) => c.platform === 'shopify' && reachable(c) && !known.has(c.domain))
for (const c of shopify) {
  try {
    await people(c)
  } catch (err) {
    if (err.message === 'budget reached') break
  }
}

const best = (c) => (c.people || []).filter((p) => p.rank != null).sort((a, b) => a.rank - b.rank)[0] || null
const company = (c) => ({
  brand: c.name,
  domain: c.domain,
  platform: c.platform,
  evidence: c.evidence,
  php: c.php,
  employees: c.employees || null,
  revenue: c.revenue || null,
  industry: c.industry || null,
  city: c.city || null,
  nameMatches: siteMatchesCompany(c.name, normaliseUrl(c.domain)),
  consumerBrand: fits(c),
})
const leadRows = leads().map((c) => ({ ...company(c), ...c.lead, verdict: 'valid' }))
const shopifyRows = shopify.map((c) => {
  const p = best(c)
  return { ...company(c), contact: p?.name || null, title: p?.title || null, linkedin: p?.linkedin || null }
})
const all = Object.values(state.companies)
const summary = {
  date: new Date().toISOString(),
  discovered: all.length,
  alreadyKnown: all.length - domains.length,
  platforms: Object.fromEntries(
    Object.entries(all.reduce((m, c) => ((m[c.platform || 'unchecked'] = (m[c.platform || 'unchecked'] || 0) + 1), m), {})).sort((a, b) => b[1] - a[1]),
  ),
  storesWorked: all.filter((c) => c.done).length,
  storesNotConsumer: all.filter((c) => c.done && c.industry !== undefined && !fits(c)).length,
  paidLeadsDropped: all.filter((c) => c.lead && !fits(c)).length,
  emailsTried: all.flatMap((c) => c.people || []).filter((p) => p.tried).length,
  verdicts: all.flatMap((c) => c.people || []).filter((p) => p.tried).reduce((m, p) => ((m[p.verdict] = (m[p.verdict] || 0) + 1), m), {}),
  leads: leadRows.length,
  shopify: shopifyRows.length,
  spentUsd: +(state.spentMicro / 1e6).toFixed(4),
  costPerLeadUsd: leadRows.length ? +(state.spentMicro / 1e6 / leadRows.length).toFixed(4) : null,
  tregCalls: state.calls,
}
writeFileSync(join(OUT, 'leads.json'), JSON.stringify(leadRows, null, 2))
writeFileSync(join(OUT, 'shopify.json'), JSON.stringify(shopifyRows, null, 2))
writeFileSync(join(OUT, 'summary.json'), JSON.stringify(summary, null, 2))
// The CRM page damiano.html reads data/damiano.json from the crm-noprobagency checkout.
const crm = opt('crm', null)
if (crm) writeFileSync(join(crm, 'data/damiano.json'), JSON.stringify({ summary, leads: leadRows, shopify: shopifyRows }))
console.log(JSON.stringify(summary, null, 2))
