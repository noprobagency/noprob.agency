import { describe, expect, it } from 'vitest'
import { detectPlatform, isPersonalSite, normaliseUrl, phpStatus, phpVersion, siteMatchesCompany } from './detect-platform.mjs'

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

describe('PHP version (CERT-EU 2026-018)', () => {
  it('reads the version from X-Powered-By', () => {
    expect(phpVersion({ 'X-Powered-By': 'PHP/7.4.33' })).toBe('7.4.33')
    expect(phpVersion({ 'x-powered-by': 'W3 Total Cache' })).toBe(null)
    expect(phpVersion({})).toBe(null)
  })

  it('classifies versions against the first fixed release', () => {
    expect(phpStatus('8.3.35')).toBe('vulnerable')
    expect(phpStatus('8.3.36')).toBe('patched')
    expect(phpStatus('8.5.12')).toBe('patched')
    expect(phpStatus('8.1.30')).toBe('eol')
    expect(phpStatus('7.4.33')).toBe('eol')
  })
})
