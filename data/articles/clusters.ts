import { articles, type Article } from './index'
import type { Locale } from '@/lib/i18n'

/**
 * Topic clusters of the blog. Kept apart from `data/articles/posts/*` (one
 * place to read the whole map, no field to repeat in 18 files). Used by the
 * blog index (one H2 section per cluster), the "Read next" block of the
 * article template and the pill on the cards. A new article must be added
 * here too: `lib/seo/clusters.test.ts` fails otherwise.
 */
export type ClusterId = 'migration-platform' | 'migration-planning' | 'ai' | 'growth'

export type Cluster = {
  id: ClusterId
  label: Record<Locale, string>
  /** Slugs (EN) in the order shown on the index and used for "Read next". */
  slugs: string[]
}

export const CLUSTERS: Cluster[] = [
  {
    id: 'migration-platform',
    label: { en: 'Migrate to Shopify', it: 'Migrare a Shopify' },
    slugs: [
      'woocommerce-to-shopify-migration',
      'magento-to-shopify-migration',
      'prestashop-to-shopify-migration',
      'bigcommerce-to-shopify-migration',
      'wix-vs-shopify',
      'squarespace-vs-shopify',
    ],
  },
  {
    id: 'migration-planning',
    label: { en: 'Plan and compare', it: 'Pianificare e confrontare' },
    slugs: [
      'shopify-migration-cost',
      'shopify-plus',
      'shopify-migration-seo-checklist',
      'choose-shopify-migration-agency',
      'shopify-vs-woocommerce',
      'how-shopify-works',
    ],
  },
  {
    id: 'ai',
    label: { en: 'AI and GEO', it: 'AI e GEO' },
    slugs: [
      'geo-for-shopify',
      'agentic-commerce-shopify',
      'chatgpt-shopping-shopify',
      'shopify-magic-sidekick',
      'ai-for-ecommerce',
    ],
  },
  {
    id: 'growth',
    label: { en: 'Growth', it: 'Crescita' },
    slugs: ['shopify-cro-guide', 'ecommerce-growth-strategy-long-term'],
  },
]

/** Short label on the card pill (replaces the technical `articleType`). */
export const ARTICLE_PILLS: Record<string, Record<Locale, string>> = {
  'woocommerce-to-shopify-migration': { en: 'Migration', it: 'Migrazione' },
  'magento-to-shopify-migration': { en: 'Migration', it: 'Migrazione' },
  'prestashop-to-shopify-migration': { en: 'Migration', it: 'Migrazione' },
  'bigcommerce-to-shopify-migration': { en: 'Migration', it: 'Migrazione' },
  'wix-vs-shopify': { en: 'Comparison', it: 'Confronto' },
  'squarespace-vs-shopify': { en: 'Comparison', it: 'Confronto' },
  'shopify-migration-cost': { en: 'Costs', it: 'Costi' },
  'shopify-plus': { en: 'Shopify Plus', it: 'Shopify Plus' },
  'shopify-migration-seo-checklist': { en: 'SEO', it: 'SEO' },
  'choose-shopify-migration-agency': { en: 'Guide', it: 'Guida' },
  'shopify-vs-woocommerce': { en: 'Comparison', it: 'Confronto' },
  'how-shopify-works': { en: 'Guide', it: 'Guida' },
  'geo-for-shopify': { en: 'GEO', it: 'GEO' },
  'agentic-commerce-shopify': { en: 'AI', it: 'AI' },
  'chatgpt-shopping-shopify': { en: 'AI', it: 'AI' },
  'shopify-magic-sidekick': { en: 'AI', it: 'AI' },
  'ai-for-ecommerce': { en: 'AI', it: 'AI' },
  'shopify-cro-guide': { en: 'CRO', it: 'CRO' },
  'ecommerce-growth-strategy-long-term': { en: 'Strategy', it: 'Strategia' },
}

export function getCluster(slug: string): Cluster | undefined {
  return CLUSTERS.find((c) => c.slugs.includes(slug))
}

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug)
}

export function getClusterArticles(cluster: Cluster): Article[] {
  return cluster.slugs.map((s) => getArticle(s)).filter((a): a is Article => Boolean(a))
}

export function articleHref(article: Article, locale: Locale): string {
  return locale === 'it' ? `/it/blog/${article.slugIt ?? article.slug}` : `/blog/${article.slug}`
}

export function articleTitle(article: Article, locale: Locale): string {
  return locale === 'it' ? (article.titleIt ?? article.title) : article.title
}

/** Short title for anchors and cards (the SEO title, without the brand). */
export function articleShortTitle(article: Article, locale: Locale): string {
  return locale === 'it'
    ? (article.seoTitleIt ?? article.titleIt ?? article.title)
    : (article.seoTitle ?? article.title)
}

export function articleExcerpt(article: Article, locale: Locale): string {
  return locale === 'it' ? (article.excerptIt ?? article.excerpt) : article.excerpt
}

export function articlePill(article: Article, locale: Locale): string {
  return ARTICLE_PILLS[article.slug]?.[locale] ?? (locale === 'it' ? 'Guida' : 'Guide')
}

/**
 * Articles to suggest at the end of `slug`: `count` from its own cluster,
 * taken cyclically after the current one (so inbound links spread evenly
 * across the cluster); a cluster too small to fill the list borrows from the
 * next cluster.
 */
export function getRelatedArticles(slug: string, count = 3): Article[] {
  const cluster = getCluster(slug)
  if (!cluster) return []

  const picked: string[] = []
  const own = cluster.slugs
  const start = own.indexOf(slug)
  for (let i = 1; i < own.length && picked.length < count; i++) {
    picked.push(own[(start + i) % own.length])
  }

  const clusterIndex = CLUSTERS.indexOf(cluster)
  for (let step = 1; step < CLUSTERS.length && picked.length < count; step++) {
    for (const s of CLUSTERS[(clusterIndex + step) % CLUSTERS.length].slugs) {
      if (picked.length >= count) break
      picked.push(s)
    }
  }

  return picked.map((s) => getArticle(s)).filter((a): a is Article => Boolean(a))
}
