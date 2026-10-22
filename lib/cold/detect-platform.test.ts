import { describe, expect, it } from 'vitest'
import { detectPlatform, isPersonalSite, normaliseUrl, siteMatchesCompany } from './detect-platform.mjs'

describe('lead site checks', () => {
  it('flags personal sites', () => {
    expect(isPersonalSite('Leighton', 'https://www.simonleighton.com/')).toBe(true)
    expect(isPersonalSite('Tate', 'https://www.flooringsuperstore.com/')).toBe(false)
  })

  it('matches the store domain with the company name', () => {
    expect(siteMatchesCompany('Flooring Superstore', 'https://www.flooringsuperstore.com/')).toBe(true)
    expect(siteMatchesCompany('Harry Hall International Ltd', 'https://www.harryhall.com/')).toBe(true)
    expect(siteMatchesCompany('Pulse Light Clinic', 'https://www.protectormascotas.com/')).toBe(false)
    expect(siteMatchesCompany('Unique Health Products', 'http://www.debtrescue.com.au/')).toBe(false)
  })
})

describe('detectPlatform', () => {
  it('detects Shopify from the CDN and from headers', () => {
    expect(detectPlatform('<link href="//cdn.shopify.com/s/files/1/theme.css">').platform).toBe('shopify')
    expect(detectPlatform('<html></html>', { 'X-ShopId': '123' }).platform).toBe('shopify')
  })

  it('detects the platforms we migrate from', () => {
    expect(detectPlatform('<body class="woocommerce-page">').platform).toBe('woocommerce')
    expect(detectPlatform('<script src="/static/requirejs-config.js">').platform).toBe('magento')
    expect(detectPlatform('<script>var prestashop = {}</script>').platform).toBe('prestashop')
    expect(detectPlatform('<img src="/on/demandware.static/x.png">').platform).toBe('salesforce-commerce-cloud')
  })

  it('prefers Shopify when a store also loads WordPress assets', () => {
    expect(detectPlatform('wp-content/ cdn.shopify.com').platform).toBe('shopify')
  })

  it('returns other when nothing matches', () => {
    expect(detectPlatform('<html><body>hello</body></html>')).toEqual({ platform: 'other', evidence: null })
  })
})

describe('normaliseUrl', () => {
  it('builds a homepage URL and rejects LinkedIn links', () => {
    expect(normaliseUrl('example.com/shop?x=1')).toBe('https://example.com/')
    expect(normaliseUrl('https://www.linkedin.com/company/x')).toBeNull()
    expect(normaliseUrl('')).toBeNull()
  })
})
