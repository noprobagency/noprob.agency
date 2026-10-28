import type { Metadata } from 'next'

import { absoluteUrl } from '@/lib/utils'
import { getDictionary, type Locale } from '@/lib/i18n'
import { getAlternateLocalePath } from '@/lib/i18n/routes'
import pkg from '../package.json'

export const siteConfig = {
  name: 'noprob agency™',
  companyName: 'NOPROB AGENCY LLC',
  url: 'https://noprob.agency',
  // Single source of truth: package.json#version (bump it on every change).
  version: `v${pkg.version}`,
  ga4Id: 'G-JD0T1HWWWV',
  metaPixelId: '1174058738142037',
  defaultTitle: 'Your eCommerce Partner. From Build to Scale.',
  description:
    'Shopify Partner for fashion, supplement, and DTC brands. We build, migrate, and manage eCommerce stores as your long-term technical partner.',
  keywords: [
    'ecommerce agency',
    'shopify development',
    'woocommerce',
    'ecommerce partner',
    'technical ecommerce partner',
    'growth partner',
    'fashion ecommerce',
    'supplements ecommerce',
    'dtc ecommerce',
  ],
} as const

/** Public Trustpilot profile (10 five-star reviews, see docs/dati-verificati.md). */
export const TRUSTPILOT_URL = 'https://www.trustpilot.com/review/noprob.agency'

/** One entity id per Organization and founder, referenced from every JSON-LD graph. */
export const ORGANIZATION_ID = `${siteConfig.url}/#organization`
export const FOUNDER_ID = `${siteConfig.url}/about#antonio-manitta`

/**
 * Markets served, for `areaServed` in every Organization and Service JSON-LD:
 * US, UK and Australia first (outbound markets), then the rest of the world.
 */
export const AREA_SERVED = [
  { '@type': 'Country', name: 'United States' },
  { '@type': 'Country', name: 'United Kingdom' },
  { '@type': 'Country', name: 'Australia' },
  { '@type': 'Place', name: 'Worldwide' },
] as const

/**
 * External profiles of the founder (`Person.sameAs`). Add Antonio's LinkedIn
 * profile URL here once confirmed: it is not published anywhere in the repo.
 */
export const FOUNDER_SAME_AS: readonly string[] = []

/** External profiles of the company (`Organization.sameAs`). Add the Upwork agency page once it has a public URL. */
export const ORGANIZATION_SAME_AS: readonly string[] = [
  'https://www.linkedin.com/company/noprobagency',
  TRUSTPILOT_URL,
  'https://clutch.co/profile/noprob-agency',
  'https://contra.com/noprob_agency_llc',
  'https://www.goodfirms.co/company/noprob-agency',
]

export const siteAssets = {
  logo: '/images/originals/AY6rjj8ZVUbD4McJGHwEF1x9L08.svg',
  logoBlack: '/images/logo-no-prob-black.svg',
  logoWhite: '/images/logo-no-prob-white-1.svg',
  heroBlob: '/images/hero-blob.png',
  heroBlobMobile: '/images/hero-blob-mobile.png',
  heroChart: '/images/originals/HijMCqLZAt650eXmAVvyaUjhCCs.svg',
  trustpilotStars: '/images/originals/sbAOhlGVa6UCdyPY5GQVN73U.svg',
  trustpilotWordmark: '/images/originals/EHy98QvA9z6tzzIid9n0yt58zU.svg',
  heroAntonio: '/images/originals/7jMr2bJ1E0BHUjGZvEWpbOHZ0.png',
  heroPartners: [
    '/images/originals/05zntouhHCNSOngYM6ybfvl2s.svg',
    '/images/originals/pNYebJJ9UvO2bOfzWB6XHxacQs.svg',
    '/images/originals/SOy6gjI9zh07NZMqw435UMgZbWM.svg',
    '/images/originals/PShAQlL3z50doCD4JeSedvGws3o.png',
  ],
} as const

type PageKey = keyof ReturnType<typeof getDictionary>['seo']

type MetadataOptions = {
  title?: string
  description?: string
  path?: string
  locale: Locale
  pageKey?: PageKey
  noIndex?: boolean
  /** Optional per-page OG/Twitter image (relative path). Defaults to /images/og-image.png. */
  image?: string
  /** Optional alt text for the OG/Twitter image. */
  imageAlt?: string
  /** Open Graph type: `article` for blog posts (adds published/modified time and author). */
  article?: { publishedTime: string; modifiedTime?: string; section?: string }
  /** RSS feed path of this section: adds `<link rel="alternate" type="application/rss+xml">`. */
  feedPath?: string
}

export function buildMetadata({
  title,
  description,
  path = '/',
  locale,
  pageKey,
  noIndex = false,
  image,
  imageAlt,
  article,
  feedPath,
}: MetadataOptions): Metadata {
  const dict = pageKey ? getDictionary(locale).seo[pageKey] : null
  const resolvedTitle = title ?? dict?.title ?? siteConfig.defaultTitle
  const resolvedDescription = description ?? dict?.description ?? siteConfig.description

  // Derive the EN and IT paths via the route map (handles different slugs per locale)
  const altPath = getAlternateLocalePath(path, locale)
  const enPath = locale === 'en' ? path : altPath
  const itPath = locale === 'it' ? path : altPath

  const canonical = absoluteUrl(path)
  const enUrl = absoluteUrl(enPath)
  const itUrl = absoluteUrl(itPath)
  const ogLocale = locale === 'it' ? 'it_IT' : 'en_US'

  const ogImageUrl = absoluteUrl(image ?? '/images/og-image.png')
  const ogImageAlt = imageAlt ?? siteConfig.name

  return {
    title: resolvedTitle,
    description: resolvedDescription,
    alternates: {
      canonical,
      languages: {
        en: enUrl,
        it: itUrl,
        'x-default': enUrl,
      },
      ...(feedPath ? { types: { 'application/rss+xml': absoluteUrl(feedPath) } } : {}),
    },
    openGraph: {
      ...(article
        ? {
            type: 'article' as const,
            publishedTime: article.publishedTime,
            ...(article.modifiedTime ? { modifiedTime: article.modifiedTime } : {}),
            authors: ['Antonio Manitta'],
            ...(article.section ? { section: article.section } : {}),
          }
        : { type: 'website' as const }),
      url: canonical,
      siteName: siteConfig.name,
      locale: ogLocale,
      title: resolvedTitle,
      description: resolvedDescription,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: ogImageAlt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: resolvedTitle,
      description: resolvedDescription,
      images: [ogImageUrl],
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
        }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            'max-image-preview': 'large',
            'max-snippet': -1,
          },
        },
    verification: {
      google: process.env.GSC_VERIFICATION_TOKEN,
    },
  }
}

export const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': ORGANIZATION_ID,
  name: 'NoProb Agency',
  legalName: siteConfig.companyName,
  url: siteConfig.url,
  logo: absoluteUrl(siteAssets.logoBlack),
  foundingDate: '2022',
  founder: {
    '@type': 'Person',
    '@id': FOUNDER_ID,
    name: 'Antonio Manitta',
    jobTitle: 'Founder & eCommerce Manager',
    url: absoluteUrl('/about'),
    worksFor: { '@id': ORGANIZATION_ID },
    ...(FOUNDER_SAME_AS.length > 0 ? { sameAs: FOUNDER_SAME_AS } : {}),
  },
  description: siteConfig.description,
  address: {
    '@type': 'PostalAddress',
    streetAddress: '30 N Gould St Ste R',
    addressLocality: 'Sheridan',
    addressRegion: 'WY',
    postalCode: '82801',
    addressCountry: 'US',
  },
  knowsAbout: [
    'Shopify development',
    'eCommerce migration',
    'Shopify migration',
    'Migration SEO',
    'Conversion rate optimization',
    'Server-side tracking',
    'eCommerce management',
    'Generative engine optimization',
    'Agentic commerce',
  ],
  areaServed: AREA_SERVED,
  sameAs: ORGANIZATION_SAME_AS,
} as const
