import { getDictionary, type Locale } from '@/lib/i18n'
import { ROUTE_PATHS } from '@/lib/i18n/routes'
import { absoluteUrl } from '@/lib/utils'

/** Last content update of the migration guide (also `CONTENT_LAST_MODIFIED` in the sitemap). */
const GUIDE_PUBLISHED = '2026-10-27'
const GUIDE_MODIFIED = '2026-10-27'

/**
 * schema.org Article for the Shopify migration guide (/it/migrazione-shopify,
 * /shopify-migration). Headline and description come from `seo.migrazioneShopify`,
 * author and publisher match the blog's BlogPosting.
 */
export function migrationGuideArticleJsonLd(locale: Locale) {
  const seo = getDictionary(locale).seo.migrazioneShopify
  const url = absoluteUrl(ROUTE_PATHS.migrazioneShopify[locale])

  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: seo.title,
    description: seo.description,
    inLanguage: locale === 'it' ? 'it-IT' : 'en-US',
    datePublished: GUIDE_PUBLISHED,
    dateModified: GUIDE_MODIFIED,
    author: {
      '@type': 'Person',
      name: 'Antonio Manitta',
      jobTitle: 'Founder & eCommerce Manager',
      worksFor: { '@type': 'Organization', name: 'NoProb Agency' },
      url: absoluteUrl(ROUTE_PATHS.about[locale]),
    },
    publisher: {
      '@type': 'Organization',
      name: 'NoProb Agency',
      logo: {
        '@type': 'ImageObject',
        url: absoluteUrl('/images/logo-no-prob-black.svg'),
      },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
  }
}
