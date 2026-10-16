import { describe, expect, it } from 'vitest'

import { ROUTE_PATHS, getAlternateLocalePath } from './routes'
import { articles } from '@/data/articles'

describe('ROUTE_PATHS', () => {
  it('every IT path lives under /it and every EN path does not', () => {
    for (const [key, paths] of Object.entries(ROUTE_PATHS)) {
      expect(paths.it, key).toMatch(/^\/it(\/|$)/)
      expect(paths.en, key).not.toMatch(/^\/it(\/|$)/)
    }
  })
})

describe('getAlternateLocalePath', () => {
  it('maps fixed routes in both directions', () => {
    expect(getAlternateLocalePath('/', 'en')).toBe('/it')
    expect(getAlternateLocalePath('/it', 'it')).toBe('/')
    expect(getAlternateLocalePath('/it/chi-siamo', 'it')).toBe('/about')
    expect(getAlternateLocalePath('/shopify-migration-sprint', 'en')).toBe('/it/sprint-migrazione-shopify')
    expect(getAlternateLocalePath('/it/sprint-migrazione-shopify/grazie', 'it')).toBe('/shopify-migration-sprint/thank-you')
  })

  it('keeps the slug of a use case, which is shared between locales', () => {
    expect(getAlternateLocalePath('/use-cases/cumini-luxury-fashion-ecommerce', 'en')).toBe(
      '/it/casi-studio/cumini-luxury-fashion-ecommerce'
    )
    expect(getAlternateLocalePath('/it/casi-studio/cumini-luxury-fashion-ecommerce', 'it')).toBe(
      '/use-cases/cumini-luxury-fashion-ecommerce'
    )
  })

  it('translates blog slugs through the article data', () => {
    const withItSlug = articles.find((a) => a.slugIt && a.slugIt !== a.slug)
    expect(withItSlug).toBeDefined()
    expect(getAlternateLocalePath(`/blog/${withItSlug!.slug}`, 'en')).toBe(`/it/blog/${withItSlug!.slugIt}`)
    expect(getAlternateLocalePath(`/it/blog/${withItSlug!.slugIt}`, 'it')).toBe(`/blog/${withItSlug!.slug}`)
  })

  it('leaves unknown paths untouched', () => {
    expect(getAlternateLocalePath('/something-else', 'en')).toBe('/something-else')
  })
})
