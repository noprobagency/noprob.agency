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
      'Shopify Migration in 14 Days',
    ])
    expect(pageBreadcrumbJsonLd('dataDrivenTeam', 'it').itemListElement[1].name).toBe('Data-Driven Team')
    expect(pageBreadcrumbJsonLd('sviluppoShopify', 'it').itemListElement[1].item).toMatch(/\/it\/sviluppo-shopify$/)
  })

  it('covers the Sprint landing, contacts and about in both locales', () => {
    expect(pageBreadcrumbJsonLd('contacts', 'it').itemListElement[1].name).toBe('Contatti')
    expect(pageBreadcrumbJsonLd('about', 'en').itemListElement[1].name).toBe('About')
    for (const locale of ['en', 'it'] as const) {
      const sprint = pageBreadcrumbJsonLd('zeroLossMigration', locale).itemListElement
      expect(sprint).toHaveLength(2)
      expect(sprint[1].name.length).toBeGreaterThan(0)
      expect(sprint[1].item).toMatch(locale === 'it' ? /\/it\/sprint-migrazione-shopify$/ : /\/shopify-migration-sprint$/)
    }
  })

  it('builds Home > section > detail', () => {
    const ld = detailBreadcrumbJsonLd('blog', 'it', { name: 'Titolo', path: '/it/blog/titolo' })
    expect(ld.itemListElement.map((i) => i.name)).toEqual(['Home', 'Blog', 'Titolo'])
  })
})
