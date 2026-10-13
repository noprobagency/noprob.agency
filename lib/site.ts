import type { Metadata } from 'next'

import { absoluteUrl } from '@/lib/utils'
import { getDictionary, type Locale } from '@/lib/i18n'
import { getAlternateLocalePath } from '@/lib/i18n/routes'

export const siteConfig = {
  name: 'noprob agency™',
  companyName: 'NOPROB AGENCY LLC',
  url: 'https://noprob.agency',
  version: 'v0.78.0',
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
    },
    openGraph: {
      type: 'website',
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
  name: 'NoProb Agency',
  legalName: siteConfig.companyName,
  url: siteConfig.url,
  logo: absoluteUrl(siteAssets.logoBlack),
  foundingDate: '2022',
  founder: {
    '@type': 'Person',
    name: 'Antonio Manitta',
    jobTitle: 'Founder & eCommerce Manager',
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
    'Conversion rate optimization',
    'Server-side tracking',
    'eCommerce management',
  ],
  areaServed: ['IT', 'EU', 'US'],
  sameAs: [
    'https://www.linkedin.com/company/noprobagency',
    'https://www.trustpilot.com/review/noprob.agency',
  ],
} as const
