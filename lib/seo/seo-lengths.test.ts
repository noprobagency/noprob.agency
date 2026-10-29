import { describe, expect, it } from 'vitest'

import { articles } from '@/data/articles'
import { CATEGORIES } from '@/data/articles/categories'
import { useCases } from '@/data/use-cases'
import { getZeroLossCopy } from '@/content/zero-loss-migration'
import { getDictionary, type Locale } from '@/lib/i18n'
import { getCategoriesCopy } from '@/lib/i18n/categorie'
import { ROUTE_PATHS } from '@/lib/i18n/routes'
import { ROUTES } from '@/lib/sitemap/routes'

const MAX_TITLE = 65
const MAX_DESCRIPTION = 160
const LOCALES: Locale[] = ['en', 'it']

/**
 * `title.template` of the root layouts (`app/(en)/layout.tsx`, `app/it/layout.tsx`):
 * every page title below the layout gets this suffix. The homepage sits in the
 * same segment as the layout, so Next does not apply the template to it.
 */
const TITLE_SUFFIX = ' | noprob agency™'

/**
 * Existing values that are over a limit. The copy is not changed here: each one
 * is listed so the test stays green and the problem stays visible (`it.skip`).
 * Format: `<kind>:<locale>:<key>:<title|description>`.
 */
const KNOWN_OVER_LIMIT = new Set<string>([])

type Case = { id: string; label: string; text: string; max: number }

function check({ id, label, text, max }: Case) {
  const run = KNOWN_OVER_LIMIT.has(id) ? it.skip : it
  const name = KNOWN_OVER_LIMIT.has(id) ? `KNOWN OVER LIMIT ${label}` : label
  run(`${name} (<= ${max})`, () => {
    expect(text.length, `${label} is ${text.length} chars: "${text}"`).toBeLessThanOrEqual(max)
  })
}

function titleCase(id: string, label: string, text: string, suffix = true): Case {
  return { id: `${id}:title`, label: `${label} title`, text: suffix ? `${text}${TITLE_SUFFIX}` : text, max: MAX_TITLE }
}

function descriptionCase(id: string, label: string, text: string): Case {
  return { id: `${id}:description`, label: `${label} description`, text, max: MAX_DESCRIPTION }
}

describe('seo.* dictionary entries', () => {
  for (const locale of LOCALES) {
    describe(locale, () => {
      const seo = getDictionary(locale).seo
      for (const [key, value] of Object.entries(seo)) {
        // The homepage is in the layout segment: no title template, rendered as written.
        const suffix = key !== 'home'
        check(titleCase(`seo:${locale}:${key}`, `seo.${key}`, value.title, suffix))
        check(descriptionCase(`seo:${locale}:${key}`, `seo.${key}`, value.description))
      }
    })
  }
})

describe('blog articles', () => {
  describe('en (mirrors app/(en)/blog/[slug]/page.tsx)', () => {
    for (const a of articles) {
      check(titleCase(`article:en:${a.slug}`, `article ${a.slug}`, a.seoTitle ?? a.title))
      check(descriptionCase(`article:en:${a.slug}`, `article ${a.slug}`, a.seoDescription ?? a.excerpt))
    }
  })
  describe('it (mirrors app/it/blog/[slug]/page.tsx)', () => {
    for (const a of articles) {
      const slug = a.slugIt ?? a.slug
      check(titleCase(`article:it:${slug}`, `articolo ${slug}`, a.seoTitleIt ?? a.titleIt ?? a.title))
      check(
        descriptionCase(`article:it:${slug}`, `articolo ${slug}`, a.seoDescriptionIt ?? a.excerptIt ?? a.excerpt)
      )
    }
  })
})

describe('blog category pages (mirror app/(en)/blog/category and app/it/blog/categoria)', () => {
  for (const locale of LOCALES) {
    const { pages } = getCategoriesCopy(locale)
    for (const category of CATEGORIES) {
      const page = pages[category.id]
      check(titleCase(`category:${locale}:${category.id}`, `category ${locale} ${category.id}`, page.metaTitle))
      check(descriptionCase(`category:${locale}:${category.id}`, `category ${locale} ${category.id}`, page.metaDescription))
    }
  }
})

describe('case studies', () => {
  describe('en (mirrors app/(en)/use-cases/[slug]/page.tsx)', () => {
    for (const u of useCases) {
      check(titleCase(`usecase:en:${u.slug}`, `case ${u.slug}`, u.seoTitleEn ?? u.titleEn ?? u.title))
      check(
        descriptionCase(
          `usecase:en:${u.slug}`,
          `case ${u.slug}`,
          u.seoDescriptionEn ?? u.excerptEn ?? u.excerpt
        )
      )
    }
  })
  describe('it (mirrors app/it/casi-studio/[slug]/page.tsx)', () => {
    for (const u of useCases) {
      check(titleCase(`usecase:it:${u.slug}`, `caso ${u.slug}`, u.seoTitle ?? u.title))
      check(descriptionCase(`usecase:it:${u.slug}`, `caso ${u.slug}`, u.seoDescription ?? u.excerpt))
    }
  })
})

describe('Shopify Launch Sprint meta', () => {
  for (const locale of LOCALES) {
    const { meta } = getZeroLossCopy(locale)
    // buildZeroLossMetadata sets `title: { absolute }`: no template suffix.
    check(titleCase(`sprint:${locale}`, `sprint ${locale}`, meta.title, false))
    check(descriptionCase(`sprint:${locale}`, `sprint ${locale}`, meta.description))
  }
})

describe('sitemap routes', () => {
  it('has at least one route', () => {
    expect(ROUTES.length).toBeGreaterThan(0)
  })
  for (const route of ROUTES) {
    it(`${route.key} has an EN and an IT path in ROUTE_PATHS`, () => {
      const paths = ROUTE_PATHS[route.key]
      expect(paths, `${route.key} missing from ROUTE_PATHS`).toBeDefined()
      expect(paths.en).toMatch(/^\//)
      expect(paths.it).toMatch(/^\/it(\/|$)/)
      expect(route.enPath).toBe(paths.en)
      expect(route.itPath).toBe(paths.it)
    })
  }
})
