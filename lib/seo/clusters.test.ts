import { describe, expect, it } from 'vitest'

import { articles } from '@/data/articles'
import {
  ARTICLE_PILLS,
  CLUSTERS,
  articleHref,
  getArticle,
  getCluster,
  getRelatedArticles,
} from '@/data/articles/clusters'
import type { Locale } from '@/lib/i18n'
import { getBlocchiCopy } from '@/lib/i18n/blocchi'
import { ROUTE_PATHS } from '@/lib/i18n/routes'

const LOCALES: Locale[] = ['en', 'it']

describe('article clusters', () => {
  it('cover every article exactly once', () => {
    const clustered = CLUSTERS.flatMap((c) => c.slugs)
    expect(new Set(clustered).size, 'a slug is in two clusters').toBe(clustered.length)
    expect([...clustered].sort()).toEqual(articles.map((a) => a.slug).sort())
  })

  it('give every article a pill label in both locales', () => {
    for (const article of articles) {
      for (const locale of LOCALES) {
        expect(ARTICLE_PILLS[article.slug]?.[locale], `${article.slug} ${locale}`).toBeTruthy()
      }
    }
    expect(Object.keys(ARTICLE_PILLS).sort()).toEqual(articles.map((a) => a.slug).sort())
  })

  it('have a label and a description in both locales', () => {
    for (const cluster of CLUSTERS) {
      for (const locale of LOCALES) {
        expect(cluster.label[locale]).toBeTruthy()
        expect(getBlocchiCopy(locale).blog.sections[cluster.id].description).toBeTruthy()
      }
    }
  })
})

describe('getRelatedArticles', () => {
  it('returns 3 distinct articles, never the current one', () => {
    for (const article of articles) {
      const related = getRelatedArticles(article.slug, 3)
      expect(related, article.slug).toHaveLength(3)
      expect(new Set(related.map((a) => a.slug)).size).toBe(3)
      expect(related.map((a) => a.slug)).not.toContain(article.slug)
    }
  })

  it('takes them from the same cluster when it is big enough', () => {
    for (const article of articles) {
      const cluster = getCluster(article.slug)!
      if (cluster.slugs.length < 4) continue
      for (const related of getRelatedArticles(article.slug, 3)) {
        expect(getCluster(related.slug)?.id, `${article.slug} -> ${related.slug}`).toBe(cluster.id)
      }
    }
  })

  it('spreads inbound links: every article is suggested by at least one other', () => {
    const inbound = new Map<string, number>()
    for (const article of articles) {
      for (const related of getRelatedArticles(article.slug, 3)) {
        inbound.set(related.slug, (inbound.get(related.slug) ?? 0) + 1)
      }
    }
    for (const article of articles) {
      expect(inbound.get(article.slug) ?? 0, article.slug).toBeGreaterThan(0)
    }
  })
})

describe('blocks that point at articles', () => {
  it('home guides carousel: copy in both locales, every article has a topic and a reading time', () => {
    for (const locale of LOCALES) {
      const copy = getBlocchiCopy(locale).homeGuides
      for (const [key, value] of Object.entries(copy)) expect(value, key).not.toBe('')
    }
    for (const article of articles) {
      expect(getCluster(article.slug), article.slug).toBeDefined()
      expect(article.readingTimeMinutes, article.slug).toBeGreaterThan(0)
    }
  })

  it('footer columns: same links in IT and EN, every target resolves', () => {
    const [en, it] = LOCALES.map((l) => getBlocchiCopy(l).footer)
    for (const column of ['services', 'guides'] as const) {
      expect(it[column].map((l) => l.route ?? l.article)).toEqual(en[column].map((l) => l.route ?? l.article))
      for (const link of en[column]) {
        if (link.route) expect(ROUTE_PATHS[link.route]).toBeDefined()
        else expect(getArticle(link.article!), link.article).toBeDefined()
      }
    }
  })

  it('article hrefs follow the locale slugs', () => {
    const cost = getArticle('shopify-migration-cost')!
    expect(articleHref(cost, 'en')).toBe('/blog/shopify-migration-cost')
    expect(articleHref(cost, 'it')).toBe('/it/blog/costo-migrazione-shopify')
  })

  it('use case brand names exist in both locales for the same cases', () => {
    const [en, it] = LOCALES.map((l) => Object.keys(getBlocchiCopy(l).useCases.brands).sort())
    expect(it).toEqual(en)
  })
})
