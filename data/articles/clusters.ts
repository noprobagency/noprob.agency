import { articles, type Article } from './index'
import { CATEGORIES, type Category, type CategoryId } from './categories'
import type { Locale } from '@/lib/i18n'

/**
 * Topic clusters of the blog = its 5 categories (`categories.ts` holds id,
 * label and URL slug). Kept apart from `data/articles/posts/*` (one place to
 * read the whole map, no field to repeat in every file). Used by the blog
 * index (one H2 section per category), the category pages, the "Read next"
 * block of the article template and the pill on the cards. A new article must
 * be added here too: `lib/seo/clusters.test.ts` fails otherwise. A category
 * works with 2 articles or with 15: the pages list whatever is in `slugs`.
 */
export type ClusterId = CategoryId

export type Cluster = Category & {
  /** Slugs (EN) used for "Read next" (the pages sort by publication date). */
  slugs: string[]
}

const CLUSTER_SLUGS: Record<ClusterId, string[]> = {
  migrate: [
    'woocommerce-to-shopify-migration',
    'magento-to-shopify-migration',
    'prestashop-to-shopify-migration',
    'bigcommerce-to-shopify-migration',
    'wix-vs-shopify',
    'squarespace-vs-shopify',
    'shopify-migration-ai-agents',
    'bigcommerce-vs-shopify',
  ],
  shopify: [
    'shopify-migration-cost',
    'shopify-plus',
    'shopify-migration-seo-checklist',
    'choose-shopify-migration-agency',
    'shopify-vs-woocommerce',
    'how-shopify-works',
    'shopify-301-redirects',
  ],
  'ai-agents': [
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
  ],
  'ai-search': ['geo-for-shopify', 'geo-vs-seo', 'agentic-commerce-shopify', 'chatgpt-shopping-shopify'],
  growth: ['shopify-cro-guide', 'ecommerce-growth-strategy-long-term'],
}

export const CLUSTERS: Cluster[] = CATEGORIES.map((category) => ({
  ...category,
  slugs: CLUSTER_SLUGS[category.id],
}))

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
  'ai-agents-for-shopify': { en: 'AI agents', it: 'Agenti AI' },
  'build-ai-agent-shopify': { en: 'Guide', it: 'Guida' },
  'claude-shopify': { en: 'Claude', it: 'Claude' },
  'claude-duet-shopify': { en: 'Claude', it: 'Claude' },
  'shopify-mcp': { en: 'MCP', it: 'MCP' },
  'shopify-flow-ai': { en: 'Automation', it: 'Automazione' },
  'ai-agent-security-shopify': { en: 'Security', it: 'Sicurezza' },
  'ai-customer-service-shopify': { en: 'Support', it: 'Assistenza' },
  'evaluate-ai-assistant-ecommerce': { en: 'Guide', it: 'Guida' },
  'geo-vs-seo': { en: 'GEO', it: 'GEO' },
  'shopify-migration-ai-agents': { en: 'Migration', it: 'Migrazione' },
  'bigcommerce-vs-shopify': { en: 'Comparison', it: 'Confronto' },
  'shopify-301-redirects': { en: 'SEO', it: 'SEO' },
}

export function getCluster(slug: string): Cluster | undefined {
  return CLUSTERS.find((c) => c.slugs.includes(slug))
}

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug)
}

/** When an article was published (ISO 8601), falling back to the visible date. */
export function articlePublishedAt(article: Article): string {
  return article.datePublishedIso ?? `${article.date}T10:00:00+02:00`
}

/** Articles of a cluster, newest first by publication date. */
export function getClusterArticles(cluster: Cluster): Article[] {
  return cluster.slugs
    .map((s) => getArticle(s))
    .filter((a): a is Article => Boolean(a))
    .sort((a, b) => new Date(articlePublishedAt(b)).getTime() - new Date(articlePublishedAt(a)).getTime())
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
