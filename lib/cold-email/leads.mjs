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

// Private mailboxes (gmail, yahoo...) stay in the sequence by Antonio's choice and are
// only flagged; no-reply and ticketing addresses never reach a person.
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

export const isPrivateMailbox = (email) => PRIVATE_MAILBOX.test(email || '')

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
    privateMailbox: isPrivateMailbox(prospect.email),
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

const FASHION = /\b(fashion|apparel|clothing|abbigliamento|moda|luxury|lusso|footwear|calzature|scarpe|jewel\w*|gioiell\w*|accessori\w*|textile|tessil\w*)\b/i

/**
 * Lead for the direct channel from a Gojiberry contact that passed Dante's review when
 * Dante had no capacity left (the agent finds more Italians than hello@ can write to).
 * @param {Record<string, any>} contact Gojiberry contact with its email found
 * @param {{ platform: string, php?: string | null } | null} check platform check of its site
 * @param {string} brand company name as a person writes it (cleanCompany)
 */
export function fromGojiberry(contact, check, brand) {
  const email = (contact.email || '').trim().toLowerCase()
  const domain = domainOf(contact.website)
  const name = [contact.firstName, contact.lastName].filter(Boolean).join(' ')
  return {
    id: `gjb:${contact.id}`,
    source: 'gojiberry-dante',
    domain,
    brand: brand || domain,
    contact: name || null,
    firstName: firstNameOf(contact.firstName, email),
    email,
    privateMailbox: isPrivateMailbox(email),
    lang: 'it',
    category: FASHION.test(`${contact.industry || ''} ${contact.company || ''} ${contact.companyDescription || ''}`) ? 'fashion' : 'dtc',
    platform: check?.platform || 'other',
    php: check?.php || null,
    segment: NO_PERSON.test(email) ? 'suppressed' : 'target',
    reason: NO_PERSON.test(email) ? 'no-reply address' : null,
    crm: { status: null, angle: null, firstContact: null, threadId: null, reply: null, replyDate: null, nextAction: null },
    gojiberry: { contactId: contact.id, jobTitle: contact.jobTitle || null },
    sequence: { step: 0, sent: [], threadId: null, stoppedAt: null, stopReason: null },
  }
}

/**
 * Lead for the direct channel from Damiano's scraped batches (docs/cold/damiano/lotti,
 * email verified, platform checked when the batch was built and again on import).
 * @param {Record<string, any>} row batch row: brand, domain, platform, php, name, title, email, industry
 * @param {{ platform: string, php?: string | null, status?: number | null } | null} check fresh platform check
 */
export function fromDamiano(row, check) {
  const email = (row.email || '').trim().toLowerCase()
  const domain = domainOf(row.domain)
  const blocked = !check || check.platform === 'unreachable' || (check.status ?? 200) >= 400
  const platform = blocked ? row.platform || 'other' : check.platform
  const segment = NO_PERSON.test(email) ? 'suppressed' : !blocked && platform === 'shopify' ? 'shopify' : blocked ? 'review' : 'target'
  return {
    id: `damiano:${email || domain}`,
    source: 'damiano',
    domain,
    brand: cleanBrand(row.brand) || domain,
    contact: row.name || null,
    firstName: firstNameOf(row.name, email),
    email,
    privateMailbox: isPrivateMailbox(email),
    lang: 'it',
    category: FASHION.test(`${row.industry || ''} ${row.brand || ''}`) ? 'fashion' : 'dtc',
    platform,
    php: (blocked ? row.php : check.php) || null,
    segment,
    reason: { suppressed: 'no-reply address', shopify: 'on Shopify', review: 'site not checked', target: null }[segment],
    crm: { status: null, angle: null, firstContact: null, threadId: null, reply: null, replyDate: null, nextAction: null },
    damiano: { title: row.title || null },
    sequence: { step: 0, sent: [], threadId: null, stoppedAt: null, stopReason: null },
  }
}

function segmentOf(lead, section) {
  const said = `${lead.crm.reply || ''} ${lead.crm.nextAction || ''}`
  if (section === 'bounced' || lead.crm.status === 'bounced') return { segment: 'suppressed', reason: 'bounce' }
  if (!lead.email || !lead.domain) return { segment: 'suppressed', reason: 'no email' }
  if (OPT_OUT.test(said)) return { segment: 'suppressed', reason: 'opt-out' }
  if (HARD_NO.test(said)) return { segment: 'suppressed', reason: 'said no' }
  if (NO_PERSON.test(lead.email)) return { segment: 'suppressed', reason: 'no-reply address' }
  if (['in_conversation', 'call_booked', 'closed'].includes(lead.crm.status)) return { segment: 'warm', reason: 'replied' }
  if (lead.platform === 'shopify') return { segment: 'shopify', reason: 'on Shopify' }
  if (lead.platform === 'unreachable' || lead.platform === 'unknown') return { segment: 'review', reason: 'site not checked' }
  return { segment: 'target', reason: null }
}

/**
 * Several people of the same store can be in the sequence ("di massa"), but the store
 * gets at most one first email a day and the whole store stops when one of them answers.
 * Leads of `domain` still running move to `review` with the reason given.
 */
export function stopStore(leads, domain, reason, today) {
  for (const l of leads) {
    if (l.domain !== domain || l.segment !== 'target' || l.sequence.stoppedAt) continue
    Object.assign(l, { segment: 'review', reason })
    l.sequence.stoppedAt = today
    l.sequence.stopReason = 'store replied'
  }
}

/** Domains Gojiberry is already working (Ada, Leonardo): never emailed from here too. */
export function excludeDomains(leads, domains, reason) {
  const set = new Set([...domains].map(domainOf).filter(Boolean))
  return leads.map((l) => (l.segment === 'target' && set.has(l.domain) ? { ...l, segment: 'review', reason } : l))
}
