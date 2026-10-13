import type { Metadata } from 'next'

import MigrazioneHero from '@/components/sections/MigrazioneHero'
import MigrazioneProblem from '@/components/sections/MigrazioneProblem'
import MigrazioneSolution from '@/components/sections/MigrazioneSolution'
import MigrazioneSocialProof from '@/components/sections/MigrazioneSocialProof'
import MigrazioneProcess from '@/components/sections/MigrazioneProcess'
import MigrazioneSprintPricing from '@/components/sections/MigrazioneSprintPricing'
import MigrazioneResults from '@/components/sections/MigrazioneResults'
import MigrazioneFAQ from '@/components/sections/MigrazioneFAQ'
import Footer from '@/components/layout/Footer'
import { buildMetadata } from '@/lib/site'

const locale = 'en' as const

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata({ path: '/shopify-migration', locale, pageKey: 'migrazioneShopify' })
}

const migrationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Shopify eCommerce Migration',
  provider: { '@type': 'Organization', name: 'NoProb Agency', url: 'https://noprob.agency' },
  serviceType: 'Shopify eCommerce migration',
  areaServed: ['IT', 'EU', 'US'],
  description:
    'Move your eCommerce to Shopify in 14 days without losing sales or customers. 1:1 redirects, no site interruption, server-side tracking, 4 written guarantees and 90 days of support.',
  offers: {
    '@type': 'AggregateOffer',
    priceCurrency: 'EUR',
    lowPrice: '5800',
    highPrice: '12800',
    offerCount: 3,
  },
}

export default function ShopifyMigrationPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(migrationJsonLd) }}
      />
      <MigrazioneHero locale={locale} />
      <MigrazioneProblem locale={locale} />
      <MigrazioneSolution locale={locale} />
      <MigrazioneSocialProof locale={locale} />
      <MigrazioneProcess locale={locale} />
      <MigrazioneSprintPricing locale={locale} />
      <MigrazioneResults locale={locale} />
      <MigrazioneFAQ locale={locale} />
      <Footer locale={locale} />
    </main>
  )
}
