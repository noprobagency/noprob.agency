#!/usr/bin/env node
// Damiano: sources decision-maker emails at Italian stores NOT on Shopify, for the
// cold channels. No AI in the loop: one treg call per step, every answer cached in
// the state file, so a rerun never pays twice.
//
// Flow, in batches until --target leads: Hunter discover pages (free) -> homepage
// platform check with the same detector Ada and Dante use (free; error pages never
// count) -> every Shopify store goes to a separate list with free people searches,
// no paid calls -> other stores: people search by domain plus by role (free),
// consumer-industry filter, best decision maker by title, email find + verify (paid,
// ~$0.007 each). Only verdict "valid" becomes a contact. A lead keeps its best contact
// and, when one exists, a second verified one. Lead data stays local (docs/cold/ is gitignored).
//
// --market intl is Ada's mode: US, UK and AU stores, a decision maker with a LinkedIn
// URL, no paid email find (add --email to pay for one), the person's country must match
// the market, 5-999 employees, and every store already in a Gojiberry list is skipped.
//
// Usage: node scripts/damiano-scrape.mjs --target 500 [--budget 7] [--out docs/cold/damiano] [--crm <crm checkout>]
//        node scripts/damiano-scrape.mjs --market intl --target 200   (writes docs/cold/damiano/intl)

import { execFile } from 'node:child_process'
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { promisify } from 'node:util'
import { normaliseUrl, phpStatus, siteMatchesCompany } from '../lib/cold/detect-platform.mjs'
import { fetchPlatform, pool } from '../lib/cold/fetch-platform.mjs'
import { listContacts } from '../lib/cold/gojiberry.mjs'

const run = promisify(execFile)
const args = process.argv.slice(2)
const opt = (name, fallback) => {
  const i = args.indexOf(`--${name}`)
  return i === -1 ? fallback : args[i + 1]
}
const TARGET = Number(opt('target', 50))
const BUDGET_MICRO = Number(opt('budget', 5)) * 1e6
// --export rewrites the lists from the saved state, with no calls at all.
const EXPORT_ONLY = args.includes('--export')
const INTL = opt('market', 'it') === 'intl'
// In intl mode the email is optional: Ada is LinkedIn-first and Gojiberry finds it later.
const PAY_EMAIL = !INTL || args.includes('--email')
const OUT = opt('out', INTL ? 'docs/cold/damiano/intl' : 'docs/cold/damiano')
const STATE_FILE = join(OUT, 'state.json')
const PEOPLE_VERSION = 2 // bump to redo the free people searches on cached companies

// Natural-language Hunter queries: the first batch is the original test, then every
// vertical by size band. Hunter turns each into filters; pages of 100, free.
const FIRST = [
  'Fashion and apparel brands headquartered in Italy with an online store, 11-200 employees',
  'Footwear and leather goods brands headquartered in Italy selling online, 11-200 employees',
  'Cosmetics, beauty and skincare brands headquartered in Italy with an ecommerce, 11-200 employees',
  'Food, wine and gourmet ecommerce companies headquartered in Italy, 11-200 employees',
  'Home decor, furniture and design brands headquartered in Italy selling online, 11-200 employees',
  'Jewelry, watches and accessories brands headquartered in Italy with an online shop, 11-200 employees',
  'Sports, outdoor and cycling brands headquartered in Italy with an ecommerce, 11-200 employees',
  'Online retail stores headquartered in Italy using Magento, WooCommerce or PrestaShop, 11-200 employees',
]
const VERTICALS = [
  'clothing and fashion brands', 'shoe and footwear brands', 'leather bags and accessories brands',
  'jewelry brands', 'watch and eyewear brands', 'lingerie, swimwear and underwear brands',
  'children clothing and toy brands', 'cosmetics and makeup brands', 'skincare and natural cosmetics brands',
  'perfume and fragrance brands', 'hair care and barber products brands', 'wine producers and online wine shops',
  'olive oil and gourmet food producers', 'coffee roasters and coffee shops online', 'pasta, sweets and chocolate producers',
  'organic food and health food shops', 'supplements and nutrition brands', 'online pharmacies and parapharmacies',
  'home decor and design brands', 'furniture brands', 'lighting brands', 'bed linen, home textiles and bedding brands',
  'kitchenware and tableware brands', 'garden and outdoor furniture brands', 'pet food and pet products brands',
  'sporting goods brands', 'cycling and bike brands', 'outdoor, mountain and ski gear brands',
  'fitness equipment brands', 'stationery, gifts and paper goods brands', 'craft beer and spirits brands',
]
const SIZES = ['2-10', '11-50', '51-200', '201-500']
// Ada's markets: the person's country_code must be one of the codes.
const MARKETS = [
  { market: 'US', name: 'the United States', codes: ['US'] },
  { market: 'UK', name: 'the United Kingdom', codes: ['GB', 'UK'] },
  { market: 'AU', name: 'Australia', codes: ['AU'] },
]
const INTL_VERTICALS = [
  'fashion and apparel brands', 'beauty, cosmetics and skincare brands', 'food and beverage DTC brands',
  'home decor and furniture retailers', 'jewelry and watch brands', 'sports, outdoor and cycling brands',
  'shoe and footwear brands', 'pet products brands', 'supplements and wellness brands', 'wine, beer and spirits brands',
]
// Markets interleaved, so a small target still covers all three.
const INTL_QUERIES = [
  'Online retail stores headquartered in {m} using Magento, WooCommerce, PrestaShop, BigCommerce or Salesforce Commerce Cloud, 11-500 employees',
  ...INTL_VERTICALS.map((v) => `${v} headquartered in {m} selling online with an ecommerce website, 11-500 employees`),
].flatMap((q) => MARKETS.map((m) => ({ q: q.replace('{m}', m.name), market: m.market })))
// After the national queries ran dry (Oct 2026): the same verticals, grouped, by region
// and by city, so Hunter returns companies the national pages never reached.
const REGIONS = [
  'Lombardy', 'Veneto', 'Emilia-Romagna', 'Tuscany', 'Piedmont', 'Lazio', 'Campania', 'Apulia', 'Marche', 'Sicily',
  'Trentino-Alto Adige', 'Friuli-Venezia Giulia', 'Liguria', 'Umbria', 'Abruzzo', 'Sardinia', 'Calabria', 'Basilicata', 'Molise', "Valle d'Aosta",
]
const CITIES = ['Milan', 'Rome', 'Turin', 'Florence', 'Naples', 'Bologna', 'Verona', 'Padua', 'Bergamo', 'Brescia', 'Bari', 'Vicenza', 'Treviso', 'Modena', 'Parma']
const REGION_VERTICALS = [
  'fashion, clothing and footwear brands', 'bags, leather goods and accessories brands', 'jewelry, watches and eyewear brands',
  'cosmetics, skincare and perfume brands', 'wine, spirits and craft beer producers', 'gourmet food, coffee, pasta and sweets producers',
  'supplements, organic food and pharmacy shops', 'home decor, furniture, lighting and textiles brands', 'sports, cycling and outdoor brands',
  'toys, kids, pet products and gifts brands',
]
const LOCAL_QUERIES = [
  ...REGIONS.flatMap((r) => REGION_VERTICALS.map((v) => `Italian ${v} headquartered in ${r}, Italy, selling online with an ecommerce website`)),
  ...CITIES.flatMap((c) => REGION_VERTICALS.map((v) => `${v} based in ${c}, Italy, with an online store`)),
]
const QUERIES = INTL
  ? INTL_QUERIES
  : [
      ...FIRST,
      ...SIZES.flatMap((s) => VERTICALS.map((v) => `Italian ${v} headquartered in Italy selling online with an ecommerce website, ${s} employees`)),
      ...LOCAL_QUERIES,
    ].map((q) => ({ q, market: 'IT' }))
const PAGES = 10

const STORE_PLATFORMS = new Set(['magento', 'woocommerce', 'prestashop', 'shopware', 'salesforce-commerce-cloud', 'bigcommerce'])

// Title ranking: lower is better; null means not a decision maker for a migration.
const RANKS = [
  [/\b(ceo|founder|co-?founder|fondat|titolare|owner|propriet|amministratore|managing director|general manager|direttore generale|president)|(?<![-\w])socio(?![-\w])/i, 1],
  [/(e-?commerce|digital|online).*(manager|director|head|responsabile|lead|direttore)|(head|responsabile|direttore|director).*(e-?commerce|digital|online)|chief digital|\bcdo\b/i, 2],
  [/\bcmo\b|marketing.*(director|manager|head|responsabile|direttore)|(head|responsabile|direttore).*marketing|\bcoo\b|chief operating/i, 3],
  [/e-?commerce|digital/i, 4],
]
// Ada's list (30 Oct): no "President of Sales", VPs only for marketing or IT, no
// "online operations" or merchandising, which the Italian ranks would let through.
const INTL_RANKS = [
  [/\b(ceo|founder|co-?founder|owner|managing director|general manager|coo|chief operating)\b|(?<!vice )\bpresident\b(?!.*\bof\b)/i, 1],
  [/(head|director|vp|vice president) of (e-?commerce|digital)|(e-?commerce|digital) (director|manager|lead)|chief digital/i, 2],
  [/\bcmo\b|chief marketing|(head|director|vp|vice president),? (of )?marketing|marketing director|\bvp\b.*\b(it|technology)\b/i, 3],
]
const ROLE_LABEL = INTL
  ? { 1: 'founder/CEO/owner', 2: 'ecommerce/digital', 3: 'marketing/IT' }
  : { 1: 'titolare/CEO', 2: 'e-commerce/digital', 3: 'marketing/ops', 4: 'altro e-commerce' }
// Role searches run on top of the plain domain search, which lists only 25 people.
const ROLE_SEARCHES = INTL
  ? ['founder', 'CEO', 'owner', 'managing director', 'ecommerce', 'marketing director']
  : ['founder', 'CEO', 'owner', 'amministratore', 'general manager', 'e-commerce manager']
// Consumer brands only: Hunter drifts into agencies, SaaS and B2B manufacturers whose
// WordPress has a WooCommerce plugin. The industry comes free with the people search.
const FIT_INDUSTRY = /retail|apparel|fashion|luxury|jewel|cosmetic|personal care|beauty|food|beverage|wine|winer|spirits|wellness|sporting goods|sports equipment|furniture|home furnish|consumer|footwear|toy|pet |e-?commerce|internet marketplace|textile|eyewear|leather/i
// B2B industries that pass the words above (Ada's and the Fable review's discards).
const B2B_INDUSTRY = /office equipment|office furniture|wholesale|food production/i
// Employee bands come as "20 - 99" or "< 5"; unknown sizes pass. Intl only, Ada's 5-999.
const sizeFits = (c) => {
  if (!INTL || !c.employees) return true
  if (/^</.test(c.employees)) return false
  const low = parseInt(c.employees, 10)
  return Number.isNaN(low) || (low >= 5 && low < 1000)
}
const fits = (c) => FIT_INDUSTRY.test(c.industry || '') && !B2B_INDUSTRY.test(c.industry || '') && sizeFits(c)
const SKIP_TITLE = /intern|stagi|tirocin|assistant|assistente|customer (service|care)|magazzin|warehouse|student/i
const rankOf = (title = '') => {
  if (!title || SKIP_TITLE.test(title)) return null
  for (const [re, r] of INTL ? INTL_RANKS : RANKS) if (re.test(title)) return r
  return null
}
// Same rule as Ada and Dante: an error page (bot wall, 429, 5xx) proves nothing about the platform.
const reachable = (c) => c.status >= 200 && c.status < 400

const state = existsSync(STATE_FILE)
  ? JSON.parse(readFileSync(STATE_FILE, 'utf8'))
  : { companies: {}, queries: {}, spentMicro: 0, calls: 0 }
const save = () => writeFileSync(STATE_FILE, JSON.stringify(state, null, 1))
const over = () => state.spentMicro >= BUDGET_MICRO

async function treg(id, body, headers = {}) {
  if (over()) throw new Error('budget reached')
  const h = Object.entries(headers).flatMap(([k, v]) => ['--header', `${k}: ${v}`])
  const { stdout } = await run('treg', ['--json', 'call', id, '--method', 'POST', '--data', JSON.stringify(body), ...h], {
    maxBuffer: 20 * 1024 * 1024,
    timeout: 240000,
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
    'cold-email/data/crm/data/leads.json',
    'cold-email/data/crm/v2/data/prospects.json',
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

/** Next unread Hunter page; returns the new domains, or null when every query is exhausted. */
// Hunter's discovery has a rate limit (403 too_many_requests, not billed): wait and retry
// instead of dropping the run.
async function discover(query, offset) {
  for (let attempt = 1; ; attempt++) {
    try {
      return await treg('hunter.x.discover-companies', { query, limit: 100, offset })
    } catch (err) {
      const text = `${err.message} ${err.stdout || ''}`
      // A location Hunter does not support ("This region isn't supported", 400, not billed)
      // counts as an empty page: the query is marked done and the run goes on.
      if (/query_failed/.test(text)) {
        console.log(`hunter refused the query, skipped: ${query}`)
        return { data: [] }
      }
      const limited = /too_many_requests|rate limit| 429/i.test(text)
      if (!limited || attempt >= 8) throw err
      console.log(`hunter rate limit, retry ${attempt} in ${attempt} min`)
      await new Promise((r) => setTimeout(r, attempt * 60000))
    }
  }
}

async function discoverPage() {
  for (const { q, market } of QUERIES) {
    for (let page = 0; page < PAGES; page++) {
      const key = `${q}#${page * 100}`
      if (state.queries[key] != null) {
        if (state.queries[key] < 100) break
        continue
      }
      const r = await discover(q, page * 100)
      const rows = r?.data || []
      state.queries[key] = rows.length
      const fresh = []
      for (const row of rows) {
        const domain = row.domain?.toLowerCase().replace(/^www\./, '')
        if (domain && !state.companies[domain]) {
          state.companies[domain] = { domain, name: row.organization, query: q, market }
          fresh.push(domain)
        }
      }
      save()
      return fresh
    }
  }
  return null
}

async function checkPlatforms(domains) {
  const todo = domains.filter((d) => !state.companies[d].platform || state.companies[d].status === undefined)
  const res = await pool(todo, 16, (d) => fetchPlatform(normaliseUrl(d), { timeout: 12000 }))
  for (const [d, r] of res) Object.assign(state.companies[d], { platform: r.platform, evidence: r.evidence, php: r.php, status: r.status, checkedAt: new Date().toISOString() })
  save()
}

const clean = (s) => (s && s !== 'N/A' ? s : null)
const mapPerson = (p) => ({
  name: [clean(p.first_name), clean(p.last_name)].filter(Boolean).join(' '),
  first: clean(p.first_name),
  last: clean(p.last_name),
  title: p.title,
  country: clean(p.country_code),
  linkedin: p.employee_linkedin && p.employee_linkedin !== 'N/A' ? p.employee_linkedin : null,
})
const FREE = { 'X-Treg-Route-Prefer': 'quickenrich', 'X-Treg-Route-Waterfall': '0', 'X-Treg-Route-Max-Cost': '0.01' }

/** Free people searches: the domain list, then one search per role. Cached per company. */
async function people(c, { roles = true } = {}) {
  if (c.people && !c.peopleV) c.peopleV = 1 // cached before role searches existed
  if (c.peopleV >= (roles ? PEOPLE_VERSION : 1) && c.people) return c.people
  const byName = new Map((c.people || []).map((p) => [p.name.toLowerCase(), p]))
  const add = (rows) => {
    for (const row of rows || []) {
      const p = mapPerson(row)
      if (p.name && !byName.has(p.name.toLowerCase())) byName.set(p.name.toLowerCase(), p)
    }
  }
  if (!c.peopleV) {
    const r = await treg('treg.people.search', { company_domain: c.domain, limit: 25 }, FREE)
    const rows = r?.output?.people || []
    add(rows)
    if (rows[0]) Object.assign(c, { legalName: rows[0].company_name, employees: rows[0].employee_count, revenue: rows[0].revenue, industry: rows[0].industry, city: rows[0].city, country: clean(rows[0].country_code), companyLinkedin: rows[0].company_linked })
    c.peopleV = 1
  }
  if (roles && c.peopleV < PEOPLE_VERSION && (c.industry === undefined || fits(c))) {
    for (const title of ROLE_SEARCHES) {
      const r = await treg('treg.people.search', { company_domain: c.domain, title, limit: 5 }, FREE)
      add(r?.output?.people)
    }
    c.peopleV = PEOPLE_VERSION
  }
  c.people = [...byName.values()]
  // No surname, no email worth paying for.
  for (const p of c.people) p.rank = p.first && p.last && p.last !== 'N/A' ? rankOf(p.title) : null
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

const contact = (p) => ({ name: p.name, first: p.first, last: p.last, title: p.title, email: p.email || null, linkedin: p.linkedin, country: p.country || null, rank: p.rank })

/** Best verified contact plus a second one: upgrades an older lead when a higher role turns up. */
async function work(c, { second = true } = {}) {
  const found = await people(c)
  if (!fits(c)) return
  let ranked = found.filter((p) => p.rank != null).sort((a, b) => a.rank - b.rank)
  if (INTL) {
    // Ada needs the profile URL, someone in the store's market, and nobody she already has.
    const codes = MARKETS.find((m) => m.market === c.market)?.codes || []
    ranked = ranked.filter((p) => p.linkedin && codes.includes(p.country || c.country) && !knownProfiles.has(profileKey(p.linkedin)))
    if (!PAY_EMAIL) {
      const [primary, backup] = ranked
      c.lead = primary ? { ...contact(primary), second: backup ? contact(backup) : null, bestRankFound: primary.rank } : null
      return
    }
  }
  const valid = () => ranked.filter((p) => p.verdict === 'valid')
  const bestRank = ranked[0]?.rank
  // Primary: try the best ranks first, up to 3 paid attempts, until one is valid.
  let attempts = 0
  for (const p of ranked) {
    if (valid().some((v) => v.rank <= p.rank) || attempts >= 3) break
    if (p.tried) continue
    attempts++
    await findEmail(c, p)
  }
  // Second contact: one more attempt on the next best role, only if the brand already has a valid one.
  if (second && valid().length === 1) {
    const next = ranked.find((p) => !p.tried && p.rank <= 3)
    if (next) await findEmail(c, next)
  }
  const [primary, backup] = valid()
  c.lead = primary ? { ...contact(primary), second: backup ? contact(backup) : null, bestRankFound: bestRank } : null
}

// Quality score 0-100 for sorting the list: role, contact depth, size, platform age.
function score(c) {
  const l = c.lead
  let s = { 1: 50, 2: 40, 3: 30, 4: 20 }[l.rank] || 10
  if (l.second) s += 15
  if (l.linkedin) s += 5
  const emp = parseInt(c.employees, 10) || 0
  if (emp >= 20 && emp <= 249) s += 15
  else if (emp >= 5) s += 8
  const php = c.php ? phpStatus(c.php) : null
  if (php === 'eol' || php === 'vulnerable') s += 10
  if (siteMatchesCompany(c.name, normaliseUrl(c.domain))) s += 5
  return Math.min(100, s)
}

mkdirSync(OUT, { recursive: true })
const known = knownDomains()
// Gojiberry lists, read only: Ada 63200, Dante 65682, DIRETTO 66757, Shopify reserve 64769.
// Their stores and LinkedIn profiles are never handed out again.
const profileKey = (url) => String(url).toLowerCase().replace(/^https?:\/\/(www\.)?/, '').replace(/\/+$/, '')
const knownProfiles = new Set()
try {
  for (const id of [63200, 65682, 66757, 64769]) {
    for (const c of await listContacts(id)) {
      if (c.website) {
        try {
          known.add(new URL(normaliseUrl(c.website)).hostname.replace(/^www\./, '').toLowerCase())
        } catch {}
      }
      for (const k of ['linkedinUrl', 'linkedin_url', 'linkedin', 'profileUrl']) if (c[k]) knownProfiles.add(profileKey(c[k]))
    }
  }
} catch (err) {
  // Ada's mode must never hand her a store she already has; Italy can run on the local files.
  if (INTL) throw err
  console.error(`Gojiberry lists not read (${err.message.split('\n')[0]}), local files only`)
}
// Intl never repeats an Italian lead's store, and vice versa through the CRM files.
if (INTL && existsSync('docs/cold/damiano/leads.json')) {
  for (const l of JSON.parse(readFileSync('docs/cold/damiano/leads.json', 'utf8'))) known.add(l.domain)
}
const fresh = (d) => !known.has(d)
const leads = () => Object.values(state.companies).filter((c) => c.lead && fits(c) && reachable(c) && fresh(c.domain))
const isStore = (c) => STORE_PLATFORMS.has(c.platform) && reachable(c) && fresh(c.domain)
const isShopify = (c) => c.platform === 'shopify' && reachable(c) && fresh(c.domain)

if (!EXPORT_ONLY) {
  // Pass 1: re-work the stores already done with the role searches (upgrades, second contacts).
  const log = (msg) => console.error(`${leads().length}/${TARGET} leads · $${(state.spentMicro / 1e6).toFixed(3)} · ${msg}`)
  await checkPlatforms(Object.keys(state.companies).filter(fresh))
  const pass = async (list, opts) =>
    pool(list, 6, async (d) => {
      const c = state.companies[d]
      if (over() || (leads().length >= TARGET && !c.lead && !opts?.seconds)) return
      try {
        if (isShopify(c)) await people(c)
        else await work(c, opts)
        c.done = true
        c.workV = PEOPLE_VERSION
      } catch (err) {
        console.error(`${d}: ${err.message.split('\n')[0]}`)
      }
      save()
    })
  await pass(Object.keys(state.companies).filter((d) => (isStore(state.companies[d]) || isShopify(state.companies[d])) && state.companies[d].workV !== PEOPLE_VERSION))
  log('existing stores re-worked')

  // Pass 2: new Hunter pages until the target or the budget.
  while (leads().length < TARGET && !over()) {
    const batch = await discoverPage()
    if (batch === null) {
      console.error('every Hunter query exhausted')
      break
    }
    const todo = batch.filter(fresh)
    await checkPlatforms(todo)
    await pass(todo.filter((d) => isStore(state.companies[d]) || isShopify(state.companies[d])), { second: false })
    log(`page done, ${Object.keys(state.companies).length} companies`)
  }

  // Pass 3: second verified contact for leads that have one person only, while the budget lasts.
  if (PAY_EMAIL) {
    await pass(leads().filter((c) => !c.lead.second).map((c) => c.domain), { second: true, seconds: true })
    log('second contacts added')
  }
}

const company = (c) => ({
  brand: c.name,
  domain: c.domain,
  platform: c.platform,
  evidence: c.evidence,
  php: c.php,
  phpStatus: c.php ? phpStatus(c.php) : null,
  employees: c.employees || null,
  revenue: c.revenue && c.revenue !== 'Not Available' ? c.revenue : null,
  industry: c.industry || null,
  city: c.city || null,
  companyLinkedin: c.companyLinkedin || null,
  nameMatches: siteMatchesCompany(c.name, normaliseUrl(c.domain)),
  consumerBrand: fits(c),
})
const others = (c, skip) =>
  (c.people || [])
    .filter((p) => p.rank != null && !skip.includes(p.name))
    .sort((a, b) => a.rank - b.rank)
    .slice(0, 3)
    .map((p) => ({ name: p.name, title: p.title, linkedin: p.linkedin }))
const leadRows = leads()
  .map((c) => ({
    ...company(c),
    name: c.lead.name,
    title: c.lead.title,
    email: c.lead.email || null,
    linkedin: c.lead.linkedin,
    second: c.lead.second,
    others: others(c, [c.lead.name, c.lead.second?.name]),
    score: score(c),
    verdict: c.lead.email ? 'valid' : null,
    // Ada's import fields
    ...(INTL && {
      firstName: c.lead.first,
      lastName: c.lead.last,
      role: ROLE_LABEL[c.lead.rank],
      company: c.legalName || c.name,
      website: `https://${c.domain}`,
      market: c.market,
      country: c.lead.country || c.country || null,
      platformCheckedAt: (c.checkedAt || '').slice(0, 10) || null,
    }),
  }))
  .sort((a, b) => b.score - a.score)
const shopifyRows = Object.values(state.companies)
  .filter(isShopify)
  .map((c) => {
    const ranked = (c.people || []).filter((p) => p.rank != null).sort((a, b) => a.rank - b.rank)
    return { ...company(c), contact: ranked[0]?.name || null, title: ranked[0]?.title || null, linkedin: ranked[0]?.linkedin || null, others: ranked.slice(1, 4).map((p) => ({ name: p.name, title: p.title, linkedin: p.linkedin })) }
  })
const all = Object.values(state.companies)
const tried = all.flatMap((c) => c.people || []).filter((p) => p.tried)
const summary = {
  date: new Date().toISOString(),
  discovered: all.length,
  alreadyKnown: all.filter((c) => !fresh(c.domain)).length,
  hunterPages: Object.keys(state.queries).length,
  platforms: Object.fromEntries(
    Object.entries(all.reduce((m, c) => ((m[c.platform || 'unchecked'] = (m[c.platform || 'unchecked'] || 0) + 1), m), {})).sort((a, b) => b[1] - a[1]),
  ),
  storesWorked: all.filter((c) => c.done && isStore(c)).length,
  storesNotConsumer: all.filter((c) => c.done && isStore(c) && c.industry !== undefined && !fits(c)).length,
  emailsTried: tried.length,
  verdicts: tried.reduce((m, p) => ((m[p.verdict] = (m[p.verdict] || 0) + 1), m), {}),
  leads: leadRows.length,
  leadsWithSecondContact: leadRows.filter((l) => l.second).length,
  leadsByRole: leadRows.reduce((m, l) => ((m[ROLE_LABEL[rankOf(l.title)]] = (m[ROLE_LABEL[rankOf(l.title)]] || 0) + 1), m), {}),
  shopify: shopifyRows.length,
  spentUsd: +(state.spentMicro / 1e6).toFixed(4),
  costPerLeadUsd: leadRows.length ? +(state.spentMicro / 1e6 / leadRows.length).toFixed(4) : null,
  tregCalls: state.calls,
}
writeFileSync(join(OUT, 'leads.json'), JSON.stringify(leadRows, null, 2))
writeFileSync(join(OUT, 'shopify.json'), JSON.stringify(shopifyRows, null, 2))
writeFileSync(join(OUT, 'summary.json'), JSON.stringify(summary, null, 2))
// The CRM section damiano/ reads data/damiano.json from the crm-noprobagency checkout.
const crm = opt('crm', null)
if (crm && !INTL) writeFileSync(join(crm, 'data/damiano.json'), JSON.stringify({ summary, leads: leadRows, shopify: shopifyRows }))
console.log(JSON.stringify(summary, null, 2))
