import type { MetadataRoute } from 'next'
import { CONTENT_LAST_MODIFIED, ROUTES } from '@/lib/sitemap/routes'
import { articles } from '@/data/articles'
import { useCases } from '@/data/use-cases'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://noprob.agency'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date(CONTENT_LAST_MODIFIED)
  const entries: MetadataRoute.Sitemap = []

  // Fixed routes (home, about, services, etc.)
  for (const route of ROUTES) {
    const enUrl = `${BASE_URL}${route.enPath === '/' ? '' : route.enPath}`
    const itUrl = `${BASE_URL}${route.itPath}`

    entries.push({
      url: enUrl,
      lastModified: now,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
      alternates: route.hasIt
        ? { languages: { en: enUrl, it: itUrl, 'x-default': enUrl } }
        : undefined,
    })

    if (route.hasIt) {
      entries.push({
        url: itUrl,
        lastModified: now,
        changeFrequency: route.changeFrequency,
        priority: route.priority * 0.9,
        alternates: { languages: { en: enUrl, it: itUrl, 'x-default': enUrl } },
      })
    }
  }

  // Blog posts (per-locale slugs supported via slugIt)
  for (const article of articles) {
    const lastModified = new Date(article.dateModifiedIso ?? article.datePublishedIso ?? CONTENT_LAST_MODIFIED)
    const enUrl = `${BASE_URL}/blog/${article.slug}`
    const itUrl = `${BASE_URL}/it/blog/${article.slugIt ?? article.slug}`

    entries.push({
      url: enUrl,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: { languages: { en: enUrl, it: itUrl, 'x-default': enUrl } },
    })

    entries.push({
      url: itUrl,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.72,
      alternates: { languages: { en: enUrl, it: itUrl, 'x-default': enUrl } },
    })
  }

  // Use cases (same slug in both locales)
  for (const useCase of useCases) {
    const lastModified = new Date(useCase.date)
    const enUrl = `${BASE_URL}/use-cases/${useCase.slug}`
    const itUrl = `${BASE_URL}/it/casi-studio/${useCase.slug}`
    const alternates = { languages: { en: enUrl, it: itUrl, 'x-default': enUrl } }
    entries.push({ url: enUrl, lastModified, changeFrequency: 'monthly', priority: 0.8, alternates })
    entries.push({ url: itUrl, lastModified, changeFrequency: 'monthly', priority: 0.72, alternates })
  }

  return entries
}
