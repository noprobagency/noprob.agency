// Detects the eCommerce platform of a store from its homepage HTML and response
// headers. Used by scripts/detect-platform.mjs to split cold outreach leads:
// stores already on Shopify are not a fit for the Shopify Launch Sprint.
// Pure function, no network: the CLI does the fetching.

/** Ordered: the first matching platform wins. Shopify first, it is the one we filter out. */
const SIGNATURES = [
  {
    platform: 'shopify',
    headers: ['x-shopify-stage', 'x-shopid', 'x-sorting-hat-shopid'],
    html: ['cdn.shopify.com', 'shopify.theme', '.myshopify.com', 'shopify-section', 'window.shopify'],
  },
  {
    platform: 'salesforce-commerce-cloud',
    headers: [],
    html: ['demandware.static', 'demandware.store', '/on/demandware.'],
  },
  { platform: 'magento', headers: ['x-magento-tags', 'x-magento-cache-debug'], html: ['mage/cookies', 'magento_', '"magento', 'mage-cache', 'requirejs-config.js'] },
  { platform: 'woocommerce', headers: [], html: ['woocommerce', 'wc-ajax'] },
  { platform: 'prestashop', headers: ['powered-by: prestashop'], html: ['prestashop', 'var prestashop'] },
  { platform: 'bigcommerce', headers: [], html: ['cdn11.bigcommerce.com', 'bigcommerce.com/s-'] },
  { platform: 'shopware', headers: ['sw-version-id', 'sw-context-token'], html: ['shopware', 'sw-plugin'] },
  { platform: 'wix', headers: ['x-wix-request-id'], html: ['static.wixstatic.com', 'wix.com website builder'] },
  { platform: 'squarespace', headers: [], html: ['static1.squarespace.com', 'squarespace.com'] },
  { platform: 'webflow', headers: [], html: ['webflow.js', 'data-wf-site'] },
  { platform: 'wordpress', headers: [], html: ['wp-content/', 'wp-includes/'] },
]

/**
 * @param {string} html homepage HTML (any case)
 * @param {Record<string, string>} [headers] response headers, names in any case
 * @returns {{ platform: string, evidence: string | null }}
 */
export function detectPlatform(html, headers = {}) {
  const body = (html || '').toLowerCase()
  const headerLines = Object.entries(headers).map(([k, v]) => `${k.toLowerCase()}: ${String(v).toLowerCase()}`)
  for (const sig of SIGNATURES) {
    for (const h of sig.headers) {
      const hit = headerLines.find((line) => line.startsWith(h) || line.includes(h))
      if (hit) return { platform: sig.platform, evidence: `header ${h}` }
    }
    for (const needle of sig.html) {
      if (body.includes(needle)) return { platform: sig.platform, evidence: needle }
    }
  }
  return { platform: 'other', evidence: null }
}

const squash = (s) => (s || '').toLowerCase().replace(/[^a-z0-9]/g, '')

/** Gojiberry's `website` is sometimes the person's own site (johnsmith.com), not the store. */
export function isPersonalSite(lastName, url) {
  const last = squash(lastName)
  if (last.length <= 2 || !url) return false
  return squash(new URL(url).hostname.replace(/^www\./, '').split('.')[0]).includes(last)
}

/** True when the store domain plausibly belongs to the company (shared 4-letter stem). */
export function siteMatchesCompany(company, url) {
  if (!company || !url) return false
  const host = squash(new URL(url).hostname.replace(/^www\./, '').split('.')[0])
  const name = squash(company.replace(/\b(ltd|limited|llc|inc|srl|spa|s\.r\.l\.|s\.p\.a\.|gmbh|bv|b\.v\.|group|international|usa)\b/gi, ''))
  if (host.length < 3 || name.length < 3) return false
  return host.includes(name.slice(0, 4)) || name.includes(host.slice(0, 4))
}

/** Normalises a lead website into a fetchable homepage URL, or null. */
export function normaliseUrl(raw) {
  if (!raw || typeof raw !== 'string') return null
  let url = raw.trim()
  if (!url) return null
  if (!/^https?:\/\//i.test(url)) url = `https://${url}`
  try {
    const u = new URL(url)
    if (/linkedin\.com$/i.test(u.hostname)) return null
    return `${u.protocol}//${u.hostname}/`
  } catch {
    return null
  }
}
