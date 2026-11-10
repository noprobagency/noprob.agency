import type { Metadata } from 'next'

import ShopifySeoHero from '@/components/sections/shopify-seo/ShopifySeoHero'
import ShopifySeoWhy from '@/components/sections/shopify-seo/ShopifySeoWhy'
import ShopifySeoScope from '@/components/sections/shopify-seo/ShopifySeoScope'
import ShopifySeoMethod from '@/components/sections/shopify-seo/ShopifySeoMethod'
import ShopifySeoProof from '@/components/sections/shopify-seo/ShopifySeoProof'
import ShopifySeoFaq from '@/components/sections/shopify-seo/ShopifySeoFaq'
import ShopifySeoFinalCta from '@/components/sections/shopify-seo/ShopifySeoFinalCta'
import Footer from '@/components/layout/Footer'
import { AREA_SERVED, ORGANIZATION_ID, buildMetadata } from '@/lib/site'
import { pageBreadcrumbJsonLd } from '@/lib/seo/breadcrumbs'
import { getDictionary } from '@/lib/i18n'

const locale = 'en' as const

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata({ path: '/shopify-seo-agency', locale, pageKey: 'shopifySeo' })
}

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Shopify SEO Agency',
  provider: { '@type': 'Organization', '@id': ORGANIZATION_ID, name: 'NoProb Agency', url: 'https://noprob.agency' },
  serviceType: 'Shopify SEO',
  areaServed: AREA_SERVED,
  description: getDictionary(locale).seo.shopifySeo.description,
}

const breadcrumbJsonLd = pageBreadcrumbJsonLd('shopifySeo', locale)

export default function ShopifySeoAgencyPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <ShopifySeoHero locale={locale} />
      <ShopifySeoWhy locale={locale} />
      <ShopifySeoScope locale={locale} />
      <ShopifySeoMethod locale={locale} />
      <ShopifySeoProof locale={locale} />
      <ShopifySeoFaq locale={locale} />
      <ShopifySeoFinalCta locale={locale} />
      <Footer locale={locale} />
    </main>
  )
}
