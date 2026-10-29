import type { Locale } from '@/lib/i18n'

/**
 * The 5 categories of the blog ("Learn" in the menu): id, label and URL slug
 * per locale. Light module on purpose (no article data), so the navbar, the
 * footer, the route map and the breadcrumbs can read it without pulling the
 * articles. Which articles belong to which category is in `clusters.ts`; the
 * copy of each category page is in `lib/i18n/categorie.ts`.
 */
export type CategoryId = 'migrate' | 'shopify' | 'ai-agents' | 'ai-search' | 'growth'

export type Category = {
  id: CategoryId
  label: Record<Locale, string>
  /** Last URL segment: `/blog/category/<en>` and `/it/blog/categoria/<it>`. */
  slug: Record<Locale, string>
}

/** URL prefix of the category pages, per locale (no trailing slash). */
export const CATEGORY_PREFIX: Record<Locale, string> = {
  en: '/blog/category',
  it: '/it/blog/categoria',
}

export const CATEGORIES: Category[] = [
  {
    id: 'migrate',
    label: { en: 'Migrate to Shopify', it: 'Migrare a Shopify' },
    slug: { en: 'migrate-to-shopify', it: 'migrare-a-shopify' },
  },
  {
    id: 'shopify',
    label: { en: 'Shopify guides', it: 'Guide Shopify' },
    slug: { en: 'shopify-guides', it: 'guide-shopify' },
  },
  {
    id: 'ai-agents',
    label: { en: 'AI agents', it: 'Agenti AI' },
    slug: { en: 'ai-agents', it: 'agenti-ai' },
  },
  {
    id: 'ai-search',
    label: { en: 'AI search and GEO', it: 'Ricerca AI e GEO' },
    slug: { en: 'ai-search-geo', it: 'ricerca-ai-geo' },
  },
  {
    id: 'growth',
    label: { en: 'eCommerce growth', it: 'Crescita eCommerce' },
    slug: { en: 'ecommerce-growth', it: 'crescita-ecommerce' },
  },
]

export function getCategory(id: CategoryId): Category {
  const category = CATEGORIES.find((c) => c.id === id)
  if (!category) throw new Error(`Unknown blog category "${id}"`)
  return category
}

/** Path of a category page in one locale. */
export function categoryPath(id: CategoryId, locale: Locale): string {
  return `${CATEGORY_PREFIX[locale]}/${getCategory(id).slug[locale]}`
}

/** Category of a URL slug in one locale, if any. */
export function getCategoryBySlug(slug: string, locale: Locale): Category | undefined {
  return CATEGORIES.find((c) => c.slug[locale] === slug)
}

/**
 * Same category page in the other locale, when `path` is a category page of
 * `currentLocale` (undefined otherwise).
 */
export function getAlternateCategoryPath(path: string, currentLocale: Locale): string | undefined {
  const prefix = `${CATEGORY_PREFIX[currentLocale]}/`
  if (!path.startsWith(prefix)) return undefined
  const category = getCategoryBySlug(path.slice(prefix.length), currentLocale)
  if (!category) return undefined
  return categoryPath(category.id, currentLocale === 'en' ? 'it' : 'en')
}
