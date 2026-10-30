// Review of the leads that the Gojiberry email agent (Dante, list 65682, sender
// hello@) sources, before they enter its 3-email campaign. Review Mode is on, so a
// lead is contacted (and its email looked up, 1 credit) only once approved here.
// Pure function, no network: scripts/cold-email-gjb.mjs fetches and applies.

import { isPersonalSite, normaliseUrl, siteMatchesCompany } from '../cold/detect-platform.mjs'
import { domainOf } from './leads.mjs'

const ITALY = /\b(italy|italia|milan|milano|rome|roma|turin|torino|naples|napoli|florence|firenze|bologna|venice|venezia|genoa|genova|verona|bari|palermo|catania|padua|padova|brescia|bergamo|como|monza|varese|treviso|vicenza|modena|parma|reggio|rimini|pesaro|ancona|perugia|cagliari|trieste|udine|trento|bolzano)\b/i
const NOT_ITALY = /\b(united states|usa|alabama|united kingdom|england|canada|australia)\b/i
// Companies that sell to eCommerce, not shops (30 Oct: a tracking SaaS and a review
// platform answered). LinkedIn industry labels.
const NOT_A_STORE = /\b(technology|software|it services|information|internet(?! market)|computer|marketing|advertising|consult\w*|agenc\w*|outsourcing|staffing|logistic\w*|transport\w*|design services|public relations)\b/i
const NOT_DECISION_MAKER = /\b(assistant|associate|intern|internship|stagista|junior|customer service|customer care|trainee|apprendista)\b/i

/**
 * Decision for one new lead: 'shopify' (move to the side list), 'reject' (another
 * channel has the store, or it opted out), 'hold' (a human looks), 'approve'.
 * @param {Record<string, any>} contact Gojiberry contact
 * @param {{ platform: string, status?: number | null } | null} check platform check of its site
 * @param {{ linkedin: Set<string>, direct: Set<string>, suppressed: Set<string> }} taken
 */
export function review(contact, check, taken) {
  const url = normaliseUrl(contact.website)
  // A domain with the person's surname is a personal site, unless the company carries the
  // same name: family brands (Bernabei on bernabei.it) are the norm in Italy.
  if (!url || (isPersonalSite(contact.lastName, url) && !siteMatchesCompany(contact.company, url))) return { action: 'hold', reason: 'no store site' }
  const domain = domainOf(url)
  const email = (contact.email || '').toLowerCase()
  if ((email && taken.suppressed.has(email)) || taken.suppressed.has(`@${domain}`)) return { action: 'reject', reason: 'opt-out list', domain }
  if (taken.linkedin.has(domain)) return { action: 'reject', reason: 'store in the LinkedIn campaign', domain }
  if (taken.direct.has(domain)) return { action: 'reject', reason: 'store in the direct email channel', domain }
  // The person's location counts; the company's only when the person has none
  // ("Florence, Alabama" is not Firenze).
  const where = contact.location || contact.companyLocation || ''
  if (!ITALY.test(where) || NOT_ITALY.test(where)) return { action: 'hold', reason: 'not based in Italy (Italian copy)', domain }
  if (contact.company && !siteMatchesCompany(contact.company, url)) return { action: 'hold', reason: 'site does not match the company', domain }
  // A bot wall, rate limit or server error page says nothing about the platform: an
  // error page would read as "not Shopify", so it is never approved.
  if (!check || check.platform === 'unreachable' || (check.status ?? 200) >= 400) return { action: 'hold', reason: 'site unreachable', domain }
  if (check.platform === 'shopify') return { action: 'shopify', reason: 'already on Shopify', domain }
  if (NOT_A_STORE.test(contact.industry || '')) return { action: 'hold', reason: 'not a store (sector)', domain }
  if (NOT_DECISION_MAKER.test(contact.jobTitle || '')) return { action: 'hold', reason: 'not a decision maker', domain }
  return { action: 'approve', reason: null, domain }
}

/**
 * Company name as a person would write it in a subject line ("[Company] su Shopify?"):
 * no legal suffix, no domain ending, no shouting. "UNOAERRE INDUSTRIES SPA" -> "Unoaerre Industries".
 */
export function cleanCompany(name) {
  let out = (name || '').trim()
  out = out.replace(/\s*[-,·|]?\s*\b(s\.?\s?r\.?\s?l\.?s?|s\.?\s?p\.?\s?a\.?|s\.?\s?n\.?\s?c\.?|s\.?\s?a\.?\s?s\.?|ltd|limited|llc|inc|gmbh|group|italy|italia)\b\.?/gi, '')
  out = out.replace(/\.(it|com|eu|shop|store)$/i, '').replace(/\s+/g, ' ').trim()
  if (out === out.toUpperCase() && /[A-Z]{4,}/.test(out)) out = out.toLowerCase().replace(/\b\p{L}/gu, (c) => c.toUpperCase())
  return out || (name || '').trim()
}

/** Employees from Gojiberry's band ("201 - 500 employees"): the low end, or null. */
export const employeesOf = (size) => {
  const n = parseInt(String(size || '').replace(/[^\d-]/g, ''), 10)
  return Number.isNaN(n) ? null : n
}

/**
 * Second look before approving an agent lead: the site must be a consumer shop
 * (lib/cold/store-check.mjs) and a company over 200 people with B2B signals is out.
 * @param {{ drop: string | null, b2b: number }} store
 * @returns {string | null} reason to hold, or null
 */
export function storeVerdict(store, companySize) {
  if (store.drop === 'no-cart') return 'not a store (no cart)'
  if (store.drop === 'b2b') return 'B2B site'
  if (store.b2b >= 1 && (employeesOf(companySize) ?? 0) > 200) return 'large B2B company'
  return null
}
