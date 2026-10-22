import { describe, expect, it } from 'vitest'
import { detectPlatform, normaliseUrl } from './detect-platform.mjs'

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
