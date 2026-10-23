// Lead model for the direct cold email channel (Gmail, antonio@noprob.agency).
// Runs in parallel with Gojiberry: one lead per store domain, Shopify stores kept
// aside for a future campaign, anyone who said no or bounced never written again.
// Pure functions, no network: scripts/cold-email-*.mjs do the fetching.

/** Segments: target = in the sequence, warm = replied (handled by hand), shopify = later. */
export const SEGMENTS = ['target', 'warm', 'shopify', 'review', 'suppressed']

/** Platforms that run on PHP: the CERT-EU 2026-018 hook applies only to these. */
export const PHP_PLATFORMS = new Set(['woocommerce', 'wordpress', 'magento', 'prestashop', 'shopware'])

const PLATFORM_LABEL = {
  woocommerce: 'WooCommerce',
  wordpress: 'WordPress',
  magento: 'Magento',
  prestashop: 'PrestaShop',
  shopware: 'Shopware',
  'salesforce-commerce-cloud': 'Salesforce Commerce Cloud',
  bigcommerce: 'BigCommerce',
  wix: 'Wix',
  squarespace: 'Squarespace',
  webflow: 'Webflow',
}
export const platformLabel = (platform) => PLATFORM_LABEL[platform] || null

const OPT_OUT = /\b(remove me|unsubscribe|cancell[ai]|cancelli|non (mi )?scriv|not interested|stop)\b/i
const HARD_NO = /\b(non ricerchiamo|non siamo interessati|no grazie|no thanks|già seguiti|already work with|not looking)\b/i
const GENERIC_MAILBOX = /^(info|customer|customercare|assistenza|assistenzaclienti|shop|hello|ciao|contact|contatti|support|ordini|orders|sales|admin|service|servizio|servizioclienti|store|business|office|amministrazione|marketing|web|ecommerce|negozio)\b/i

// Private mailboxes are not company contacts (and the lawyer's line excludes them);
// no-reply and ticketing addresses never reach a person.
const PRIVATE_MAILBOX = /@(gmail|googlemail|hotmail|outlook|live|msn|yahoo|ymail|libero|email|alice|tiscali|virgilio|icloud|me|tin|fastwebnet|aol|gmx|proton|protonmail)\.[a-z.]+$/i
const NO_PERSON = /^(no-?reply|do-?not-?reply|mailer|bounce)|@.*\.(zendesk|freshdesk|helpscoutapp|gorgias)\.com$/i
const ENGLISH_TLD = /\.(uk|ie|gr|de|fr|nl|be|dk|se|no|fi|at|ch|es|pt|us|ca|au|nz)$/

/** "Motivi (Miroglio)" -> "Motivi", "SatÃ¹" -> "Satù". */
export function cleanBrand(brand) {
  let out = (brand || '').trim()
  if (/Ã.|Â./.test(out)) out = Buffer.from(out, 'latin1').toString('utf8')
  return out.replace(/\s*\([^)]*\)\s*/g, ' ').replace(/\s+/g, ' ').trim()
}

export const domainOf = (value) =>
  (value || '').toLowerCase().replace(/^https?:\/\//, '').replace(/^www\./, '').split(/[/?#]/)[0] || null

export const isGenericMailbox = (email) => GENERIC_MAILBOX.test((email || '').split('@')[0])

/** First name for the greeting, or null when the contact is a company mailbox or missing. */
export function firstNameOf(contact, email) {
  if (isGenericMailbox(email)) return null
  const word = (contact || '').trim().split(/\s+/)[0] || ''
  if (!word || word.includes('@') || word.length < 2 || !/^[\p{L}'-]+$/u.test(word)) return null
  if (word.length === 2 && word === word.toUpperCase()) return null // initials ("MW")
  return word[0].toUpperCase() + word.slice(1).toLowerCase()
}

/** Language of the old thread: Italian openers, else the .it domain. */
export function languageOf(snippet, domain) {
  if (ENGLISH_TLD.test(domain || '')) return 'en'
  if (/^\s*(ciao|buongiorno|buonasera|salve|gentile)\b/i.test(snippet || '')) return 'it'
  if (/^\s*(hi|hello|hey|good|dear)\b/i.test(snippet || '')) return 'en'
  return (domain || '').endsWith('.it') ? 'it' : 'en'
}

/** Case study category: CRM angle 1A was luxury multibrand boutiques. */
const categoryOf = (angle) => (angle === '1A' ? 'fashion' : 'dtc')

/**
 * Lead from a prospect of the old CRM (crm-noprobagency data/prospects.json).
 * @param {Record<string, any>} prospect
 * @param {string} section 'active' | 'no_reply' | 'bounced'
 * @param {{ platform: string, php?: string | null } | null} [check] fresh platform check of the domain
 */
export function fromCrm(prospect, section, check = null) {
  const domain = domainOf(prospect.domain || (prospect.email || '').split('@')[1])
  const reply = prospect.last_reply_from_prospect?.snippet || ''
  const platform = check?.platform || (prospect.platform === 'Shopify' ? 'shopify' : prospect.platform ? 'other' : 'unknown')
  const lead = {
    id: `crm:${prospect.id || prospect.email}`,
    source: 'crm-2026',
    domain,
    brand: cleanBrand(prospect.brand) || domain,
    contact: prospect.contact || null,
    firstName: firstNameOf(prospect.contact, prospect.email),
    email: (prospect.email || '').trim().toLowerCase(),
    lang: languageOf(prospect.first_email_snippet || prospect.last_outbound_by_antonio?.snippet, domain),
    category: categoryOf(prospect.angle),
    platform,
    php: check?.php || null,
    segment: 'target',
    reason: null,
    crm: {
      status: prospect.status || null,
      angle: prospect.angle || null,
      firstContact: prospect.first_contact || null,
      threadId: prospect.thread_id || null,
      reply: reply || null,
      replyDate: prospect.last_reply_from_prospect?.date || null,
      nextAction: prospect.next_action || null,
    },
    sequence: { step: 0, sent: [], threadId: null, stoppedAt: null, stopReason: null },
  }
  return { ...lead, ...segmentOf(lead, section) }
}

function segmentOf(lead, section) {
  const said = `${lead.crm.reply || ''} ${lead.crm.nextAction || ''}`
  if (section === 'bounced' || lead.crm.status === 'bounced') return { segment: 'suppressed', reason: 'bounce' }
  if (!lead.email || !lead.domain) return { segment: 'suppressed', reason: 'no email' }
  if (OPT_OUT.test(said)) return { segment: 'suppressed', reason: 'opt-out' }
  if (HARD_NO.test(said)) return { segment: 'suppressed', reason: 'said no' }
  if (NO_PERSON.test(lead.email)) return { segment: 'suppressed', reason: 'no-reply address' }
  if (PRIVATE_MAILBOX.test(lead.email)) return { segment: 'review', reason: 'private mailbox' }
  if (['in_conversation', 'call_booked', 'closed'].includes(lead.crm.status)) return { segment: 'warm', reason: 'replied' }
  if (lead.platform === 'shopify') return { segment: 'shopify', reason: 'on Shopify' }
  if (lead.platform === 'unreachable' || lead.platform === 'unknown') return { segment: 'review', reason: 'site not checked' }
  return { segment: 'target', reason: null }
}

/**
 * One lead per store domain in the sequence: a named person beats a company mailbox.
 * The others of the same domain move to `review` (kept, never written by the engine).
 */
export function onePerDomain(leads) {
  const best = new Map()
  const score = (l) => (l.firstName ? 2 : 0) + (isGenericMailbox(l.email) ? 0 : 1)
  for (const lead of leads.filter((l) => l.segment === 'target')) {
    const current = best.get(lead.domain)
    if (!current || score(lead) > score(current)) best.set(lead.domain, lead)
  }
  return leads.map((l) =>
    l.segment === 'target' && best.get(l.domain) !== l ? { ...l, segment: 'review', reason: 'same domain' } : l,
  )
}

/** Domains Gojiberry is already working (Ada, Leonardo): never emailed from here too. */
export function excludeDomains(leads, domains, reason) {
  const set = new Set([...domains].map(domainOf).filter(Boolean))
  return leads.map((l) => (l.segment === 'target' && set.has(l.domain) ? { ...l, segment: 'review', reason } : l))
}
