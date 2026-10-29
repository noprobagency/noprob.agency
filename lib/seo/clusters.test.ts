import { describe, expect, it } from 'vitest'

import { articles } from '@/data/articles'
import { CATEGORIES, categoryPath } from '@/data/articles/categories'
import {
  ARTICLE_PILLS,
  CLUSTERS,
  articleHref,
  articlePublishedAt,
  getArticle,
  getCluster,
  getClusterArticles,
  getRelatedArticles,
} from '@/data/articles/clusters'
import { getDictionary, type Locale } from '@/lib/i18n'
import { getBlocchiCopy } from '@/lib/i18n/blocchi'
import { getCategoriesCopy } from '@/lib/i18n/categorie'
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

describe('blog categories', () => {
  it('are the 5 agreed categories, with the agreed URLs in both locales', () => {
    expect(CATEGORIES.map((c) => c.id)).toEqual(['migrate', 'shopify', 'ai-agents', 'ai-search', 'growth'])
    expect(CATEGORIES.map((c) => categoryPath(c.id, 'en'))).toEqual([
      '/blog/category/migrate-to-shopify',
      '/blog/category/shopify-guides',
      '/blog/category/ai-agents',
      '/blog/category/ai-search-geo',
      '/blog/category/ecommerce-growth',
    ])
    expect(CATEGORIES.map((c) => categoryPath(c.id, 'it'))).toEqual([
      '/it/blog/categoria/migrare-a-shopify',
      '/it/blog/categoria/guide-shopify',
      '/it/blog/categoria/agenti-ai',
      '/it/blog/categoria/ricerca-ai-geo',
      '/it/blog/categoria/crescita-ecommerce',
    ])
  })

  it('have unique slugs per locale', () => {
    for (const locale of LOCALES) {
      const slugs = CATEGORIES.map((c) => c.slug[locale])
      expect(new Set(slugs).size).toBe(slugs.length)
    }
  })

  it('hold the agreed articles', () => {
    const byId = Object.fromEntries(CLUSTERS.map((c) => [c.id, [...c.slugs].sort()]))
    expect(byId.migrate).toEqual(
      [
        'woocommerce-to-shopify-migration',
        'magento-to-shopify-migration',
        'prestashop-to-shopify-migration',
        'bigcommerce-to-shopify-migration',
        'wix-vs-shopify',
        'squarespace-vs-shopify',
        'shopify-migration-ai-agents',
        'bigcommerce-vs-shopify',
      ].sort()
    )
    expect(byId.shopify).toContain('shopify-301-redirects')
    expect(byId['ai-agents']).toEqual(
      [
        'ai-agents-for-shopify',
        'build-ai-agent-shopify',
        'claude-shopify',
        'claude-duet-shopify',
        'shopify-mcp',
        'shopify-flow-ai',
        'ai-agent-security-shopify',
        'ai-customer-service-shopify',
        'evaluate-ai-assistant-ecommerce',
        'shopify-magic-sidekick',
        'ai-for-ecommerce',
      ].sort()
    )
    expect(byId['ai-search']).toEqual(
      ['agentic-commerce-shopify', 'chatgpt-shopping-shopify', 'geo-for-shopify', 'geo-vs-seo'].sort()
    )
    expect(byId.growth).toEqual(['ecommerce-growth-strategy-long-term', 'shopify-cro-guide'])
  })

  it('have page copy (title, description, H1 and intro) in both locales', () => {
    for (const locale of LOCALES) {
      const { pages } = getCategoriesCopy(locale)
      for (const category of CATEGORIES) {
        const page = pages[category.id]
        expect(page.metaTitle, `${locale} ${category.id}`).toBeTruthy()
        expect(page.metaDescription, `${locale} ${category.id}`).toBeTruthy()
        expect(`${page.h1}${page.h1Em}`.length, `${locale} ${category.id}`).toBeGreaterThan(10)
        const sentences = page.intro.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').split(/(?<=[.!?])\s+/)
        expect(sentences.length, `${locale} ${category.id} intro`).toBeGreaterThanOrEqual(2)
        expect(sentences.length, `${locale} ${category.id} intro`).toBeLessThanOrEqual(3)
      }
    }
  })

  it('list newest article first', () => {
    for (const cluster of CLUSTERS) {
      const times = getClusterArticles(cluster).map((a) => new Date(articlePublishedAt(a)).getTime())
      expect(times, cluster.id).toEqual([...times].sort((a, b) => b - a))
    }
  })

  it('are the items of the Learn dropdown, in order, followed by the blog index', () => {
    for (const locale of LOCALES) {
      const { learn } = getDictionary(locale).navbar
      expect(learn.items).toEqual(
        CATEGORIES.map((c) => ({ label: c.label[locale], href: categoryPath(c.id, locale) }))
      )
      expect(learn.allHref).toBe(ROUTE_PATHS.blog[locale])
    }
    expect(getDictionary('en').navbar.learn.label).toBe('Learn')
    expect(getDictionary('it').navbar.learn.label).toBe('Risorse')
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
