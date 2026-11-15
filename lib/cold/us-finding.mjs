// The one true, specific fact that opens Ada's email to a US store not on Shopify
// (D-99). Rules in order; the first one that fires wins. No rule, no automatic email.
// Text approved in the CRM, ada/negozi-usa/testo-finale.md.

const UA = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/128 Safari/537.36'

/**
 * @param {{ lcpMs?: number|null, imageBytes?: number|null, cls?: number|null, hasDescription?: boolean|null, hasH1?: boolean|null }} m
 * @returns {{ rule: string, finding: string } | null}
 */
export function pickFinding(m) {
  if (m.lcpMs != null && m.lcpMs > 4000) {
    // Lab figure on Google's simulated slow mobile connection: say whose test it is, and
    // cap it, so the owner can check it and a freak run does not read as absurd.
    const s = Math.floor(m.lcpMs / 1000)
    const time = s > 20 ? 'over 20 seconds' : `about ${s} seconds`
    return { rule: 'lcp', finding: `Google's mobile speed test shows your homepage taking ${time} to load its main image` }
  }
  if (m.imageBytes != null && m.imageBytes > 3 * 1024 * 1024) {
    return { rule: 'images', finding: `the images on your homepage weigh over ${Math.floor(m.imageBytes / (1024 * 1024))} MB, which slows it down on phones` }
  }
  if (m.hasDescription === false) {
    return { rule: 'description', finding: "your homepage doesn't set a description for Google, so Google writes its own line under your link" }
  }
  if (m.hasH1 === false) {
    return { rule: 'h1', finding: 'your homepage has no main heading, so Google has to guess what the page is about' }
  }
  if (m.cls != null && m.cls > 0.25) return { rule: 'cls', finding: 'on a phone, the homepage jumps around while it loads' }
  return null
}

/**
 * PageSpeed LCP swings a lot between runs (20 s, then 3 s an hour later), so it counts
 * only when two runs in a row are both over 4 s; the lower one is quoted (Claudio, 15/11).
 * @param {number|null|undefined} a
 * @param {number|null|undefined} b
 */
export function stableLcp(a, b) {
  return a != null && b != null && a > 4000 && b > 4000 ? Math.min(a, b) : null
}

/** Meta description and H1 from the homepage HTML. */
export function htmlSignals(html) {
  const desc = html.match(/<meta[^>]+name=["']description["'][^>]*>/i)
  const content = desc && desc[0].match(/content=["']([^"']*)["']/i)
  return { hasDescription: Boolean(content && content[1].trim()), hasH1: /<h1[\s>]/i.test(html) }
}

/** Homepage HTML, or null when the site does not answer. */
export async function fetchHome(domain) {
  const ctrl = new AbortController()
  const timer = setTimeout(() => ctrl.abort(), 15000)
  try {
    const res = await fetch(`https://${domain}/`, { redirect: 'follow', signal: ctrl.signal, headers: { 'user-agent': UA } })
    return res.ok ? (await res.text()).slice(0, 1_000_000) : null
  } catch {
    return null
  } finally {
    clearTimeout(timer)
  }
}

/** Mobile lab metrics from the PageSpeed Insights API, or null without a key or on error. */
export async function pagespeed(domain, key) {
  if (!key) return null
  const url = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(`https://${domain}/`)}&strategy=mobile&category=performance&key=${key}`
  try {
    const res = await fetch(url)
    if (!res.ok) return null
    const a = (await res.json()).lighthouseResult?.audits
    if (!a) return null
    const images = (a['network-requests']?.details?.items || []).filter((r) => r.resourceType === 'Image')
    return {
      lcpMs: a['largest-contentful-paint']?.numericValue ?? null,
      cls: a['cumulative-layout-shift']?.numericValue ?? null,
      imageBytes: images.reduce((s, r) => s + (r.transferSize || 0), 0),
    }
  } catch {
    return null
  }
}
