// Review of the leads that the Gojiberry email agent (Dante, list 65682, sender
// hello@) sources, before they enter its 3-email campaign. Review Mode is on, so a
// lead is contacted (and its email looked up, 1 credit) only once approved here.
// Pure function, no network: scripts/cold-email-gjb.mjs fetches and applies.

import { isPersonalSite, normaliseUrl, siteMatchesCompany } from '../cold/detect-platform.mjs'
import { domainOf } from './leads.mjs'

const ITALY = /\b(italy|italia|milan|milano|rome|roma|turin|torino|naples|napoli|florence|firenze|bologna|venice|venezia|genoa|genova|verona|bari|palermo|catania|padua|padova|brescia|bergamo|como|monza|varese|treviso|vicenza|modena|parma|reggio|rimini|pesaro|ancona|perugia|cagliari|trieste|udine|trento|bolzano)\b/i
const NOT_ITALY = /\b(united states|usa|alabama|united kingdom|england|canada|australia)\b/i
const NOT_DECISION_MAKER = /\b(assistant|associate|intern|internship|stagista|junior|customer service|customer care|trainee|apprendista)\b/i

/**
 * Decision for one new lead: 'shopify' (move to the side list), 'reject' (another
 * channel has the store, or it opted out), 'hold' (a human looks), 'approve'.
 * @param {Record<string, any>} contact Gojiberry contact
 * @param {{ platform: string } | null} check platform check of its site
 * @param {{ linkedin: Set<string>, direct: Set<string>, suppressed: Set<string> }} taken
 */
export function review(contact, check, taken) {
  const url = normaliseUrl(contact.website)
  if (!url || isPersonalSite(contact.lastName, url)) return { action: 'hold', reason: 'no store site' }
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
  if (!check || check.platform === 'unreachable') return { action: 'hold', reason: 'site unreachable', domain }
  if (check.platform === 'shopify') return { action: 'shopify', reason: 'already on Shopify', domain }
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
