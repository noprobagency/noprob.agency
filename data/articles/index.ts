import shopifyCroGuide from './posts/shopify-cro-guide'
import howShopifyWorks from './posts/how-shopify-works'
import ecommerceGrowthStrategyLongTerm from './posts/ecommerce-growth-strategy-long-term'
import geoForShopify from './posts/geo-for-shopify'
import shopifyVsWoocommerce from './posts/shopify-vs-woocommerce'
import shopifyMigrationSeoChecklist from './posts/shopify-migration-seo-checklist'
import woocommerceToShopifyMigration from './posts/woocommerce-to-shopify-migration'
import agenticCommerceShopify from './posts/agentic-commerce-shopify'
import aiForEcommerce from './posts/ai-for-ecommerce'

export type ArticleSection =
  | { type: 'paragraph'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'list'; items: string[] }
  | { type: 'h3'; text: string }
  | { type: 'image'; src: string; alt?: string; width?: number; height?: number; maxWidth?: string }
  | { type: 'metrics'; merValue: string; growthValue?: string; note?: string }
  | { type: 'cta' }

export type Article = {
  slug: string
  title: string
  excerpt: string
  image: string
  imageAlt?: string
  /** Optional EN-specific alt text override (falls back to imageAlt). */
  imageAltEn?: string
  articleType: string
  date: string
  content?: ArticleSection[]
  titleIt?: string
  excerptIt?: string
  contentIt?: ArticleSection[]
  /**
   * Locale-specific slug (used by /it/blog/[slug] when present).
   * EN side keeps `slug`; IT side uses `slugIt ?? slug`.
   */
  slugIt?: string
  /** On-page subtitle/lede shown under the H1. Falls back to excerpt. */
  ledeEn?: string
  ledeIt?: string
  /** ISO 8601 with offset, used for BlogPosting.datePublished. */
  datePublishedIso?: string
  /** ISO 8601 with offset, last substantial update (BlogPosting.dateModified). */
  dateModifiedIso?: string
  /** Short <title>/<meta description> for Google (the H1 keeps the long title). */
  seoTitle?: string
  seoTitleIt?: string
  seoDescription?: string
  seoDescriptionIt?: string
  /** Approximate word count, surfaced in BlogPosting JSON-LD. */
  wordCount?: number
  /** BlogPosting articleSection (broad topic category). */
  articleSection?: string
  /** Comma-separated keyword string for BlogPosting JSON-LD. */
  keywordsIt?: string
  keywordsEn?: string
  /** Estimated reading time in minutes, shown by BlogPostMeta. */
  readingTimeMinutes?: number
  /** Optional FAQ pairs used to emit FAQPage JSON-LD. */
  faqIt?: Array<{ question: string; answer: string }>
  faqEn?: Array<{ question: string; answer: string }>
}

/** One article per file in ./posts; a new article = a new file + one import line here. */
export const articles: Article[] = [
  aiForEcommerce,
  agenticCommerceShopify,
  woocommerceToShopifyMigration,
  shopifyMigrationSeoChecklist,
  shopifyVsWoocommerce,
  geoForShopify,
  shopifyCroGuide,
  howShopifyWorks,
  ecommerceGrowthStrategyLongTerm,
]
