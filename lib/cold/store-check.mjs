// Is the site a consumer shop? A WooCommerce plugin or a Magento install is not a shop:
// the homepage, or a usual shop page, must show a cart, and B2B signals must not outweigh
// it. Same rules as Damiano's scraping (scripts/damiano-scrape.mjs), shared here for the
// Dante review of the Gojiberry agent's leads. Free, no paid call.

const UA = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/128 Safari/537.36'
export const CART = [/add[-_ ]to[-_ ]cart/i, /aggiungi al carrello/i, /\/cart\b/i, /\/carrello/i, /checkout\/cart/i, /woocommerce-cart|wc-block-mini-cart|cart-contents|mini-?cart/i, /blockcart|shopping_cart|shopping-cart/i, /data-product_id|add_to_cart_button|product-add-to-cart/i, /\/checkout\b/i, /\/basket\b/i]
export const B2B = [/\bb2b\b/i, /ingrosso/i, /area rivenditor/i, /solo (per )?professionisti/i, /listino (prezzi )?riservato/i, /\bcontract\b/i, /richiedi (un )?preventivo/i, /diventa rivenditore/i, /wholesale/i, /per aziende/i, /trade (account|only)/i]
const SHOP_PATHS = ['shop/', 'negozio/', 'store/', 'it/shop/', 'prodotti/', 'catalogo/', 'products/']

async function html(url) {
  const ctrl = new AbortController()
  const timer = setTimeout(() => ctrl.abort(), 12000)
  try {
    const res = await fetch(url, { redirect: 'follow', signal: ctrl.signal, headers: { 'user-agent': UA } })
    return res.status < 400 ? (await res.text()).slice(0, 800_000) : null
  } catch {
    return null
  } finally {
    clearTimeout(timer)
  }
}

/** Cart and B2B signals in a page. */
export const storeSignals = (page) => ({ cart: CART.filter((re) => re.test(page)).length, b2b: B2B.filter((re) => re.test(page)).length })

/**
 * @param {string} domain
 * @returns {Promise<{ cart: number, b2b: number, drop: 'unreachable' | 'no-cart' | 'b2b' | null }>}
 */
export async function storeCheck(domain) {
  const home = await html(`https://${domain}/`)
  if (home === null) return { cart: 0, b2b: 0, drop: 'unreachable' }
  let { cart, b2b } = storeSignals(home)
  for (const p of cart ? [] : SHOP_PATHS) {
    const page = await html(`https://${domain}/${p}`)
    if (page && CART.some((re) => re.test(page))) {
      cart = 1
      break
    }
  }
  return { cart, b2b, drop: !cart ? 'no-cart' : b2b >= 2 && cart < 3 ? 'b2b' : null }
}
