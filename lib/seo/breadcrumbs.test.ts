import { describe, expect, it } from 'vitest'

import { breadcrumbJsonLd, detailBreadcrumbJsonLd, pageBreadcrumbJsonLd } from './breadcrumbs'

describe('breadcrumbJsonLd', () => {
  it('builds positioned ListItems with absolute URLs', () => {
    const ld = breadcrumbJsonLd([
      { name: 'Home', path: '/' },
      { name: 'Blog', path: '/blog' },
    ])
    expect(ld['@type']).toBe('BreadcrumbList')
    expect(ld.itemListElement.map((i) => i.position)).toEqual([1, 2])
    expect(ld.itemListElement[1].item).toMatch(/^https?:\/\/[^/]+\/blog$/)
  })

  it('labels fixed pages from the navbar dictionary in both locales', () => {
    expect(pageBreadcrumbJsonLd('migrazioneShopify', 'en').itemListElement.map((i) => i.name)).toEqual([
      'Home',
      'Shopify Migration',
    ])
    expect(pageBreadcrumbJsonLd('dataDrivenTeam', 'it').itemListElement[1].name).toBe('Data-Driven Team')
    expect(pageBreadcrumbJsonLd('sviluppoShopify', 'it').itemListElement[1].item).toMatch(/\/it\/sviluppo-shopify$/)
  })

  it('builds Home > section > detail', () => {
    const ld = detailBreadcrumbJsonLd('blog', 'it', { name: 'Titolo', path: '/it/blog/titolo' })
    expect(ld.itemListElement.map((i) => i.name)).toEqual(['Home', 'Blog', 'Titolo'])
  })
})
