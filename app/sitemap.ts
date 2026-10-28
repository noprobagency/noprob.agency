import type { MetadataRoute } from 'next'
import { CONTENT_LAST_MODIFIED, ROUTES } from '@/lib/sitemap/routes'
import { articles } from '@/data/articles'
import { useCases } from '@/data/use-cases'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://noprob.agency'

/** Most recent of a list of ISO dates, falling back to the fixed-pages date. */
function latest(dates: Array<string | undefined>): Date {
  const times = dates.filter((d): d is string => Boolean(d)).map((d) => new Date(d).getTime())
  return new Date(times.length > 0 ? Math.max(...times) : CONTENT_LAST_MODIFIED)
}

/**
 * Only `loc`, `lastmod` and hreflang alternates are emitted: `priority` and
 * `changefreq` are ignored by Google. `lastmod` is a real date: the fixed pages
 * share `CONTENT_LAST_MODIFIED` (bump it when their copy changes), the blog hub
 * follows its newest article, every article and case its own date.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const fixedPagesDate = new Date(CONTENT_LAST_MODIFIED)
  const blogHubDate = latest([
    CONTENT_LAST_MODIFIED,
    ...articles.map((a) => a.dateModifiedIso ?? a.datePublishedIso),
  ])
  const entries: MetadataRoute.Sitemap = []

  // Fixed routes (home, about, services, etc.)
  for (const route of ROUTES) {
    const enUrl = `${BASE_URL}${route.enPath === '/' ? '' : route.enPath}`
    const itUrl = `${BASE_URL}${route.itPath}`
    const lastModified = route.key === 'blog' ? blogHubDate : fixedPagesDate

    entries.push({
      url: enUrl,
      lastModified,
      alternates: route.hasIt
        ? { languages: { en: enUrl, it: itUrl, 'x-default': enUrl } }
        : undefined,
    })

    if (route.hasIt) {
      entries.push({
        url: itUrl,
        lastModified,
        alternates: { languages: { en: enUrl, it: itUrl, 'x-default': enUrl } },
      })
    }
  }

  // Blog posts (per-locale slugs supported via slugIt)
  for (const article of articles) {
    const lastModified = new Date(article.dateModifiedIso ?? article.datePublishedIso ?? CONTENT_LAST_MODIFIED)
    const enUrl = `${BASE_URL}/blog/${article.slug}`
    const itUrl = `${BASE_URL}/it/blog/${article.slugIt ?? article.slug}`
    const alternates = { languages: { en: enUrl, it: itUrl, 'x-default': enUrl } }

    entries.push({ url: enUrl, lastModified, alternates })
    entries.push({ url: itUrl, lastModified, alternates })
  }

  // Use cases (same slug in both locales)
  for (const useCase of useCases) {
    const lastModified = new Date(useCase.updated ?? useCase.date)
    const enUrl = `${BASE_URL}/use-cases/${useCase.slug}`
    const itUrl = `${BASE_URL}/it/casi-studio/${useCase.slug}`
    const alternates = { languages: { en: enUrl, it: itUrl, 'x-default': enUrl } }
    entries.push({ url: enUrl, lastModified, alternates })
    entries.push({ url: itUrl, lastModified, alternates })
  }

  return entries
}
