import type { Metadata } from 'next'

import MigrazioneHero from '@/components/sections/MigrazioneHero'
import MigrazioneProblem from '@/components/sections/MigrazioneProblem'
import MigrazioneSolution from '@/components/sections/MigrazioneSolution'
import MigrazioneSocialProof from '@/components/sections/MigrazioneSocialProof'
import MigrazioneProcess from '@/components/sections/MigrazioneProcess'
import MigrazioneSprintBanner from '@/components/sections/MigrazioneSprintBanner'
import MigrazioneSprintPricing from '@/components/sections/MigrazioneSprintPricing'
import MigrazioneResults from '@/components/sections/MigrazioneResults'
import MigrazioneFAQ from '@/components/sections/MigrazioneFAQ'
import Footer from '@/components/layout/Footer'
import { buildMetadata } from '@/lib/site'
import { pageBreadcrumbJsonLd } from '@/lib/seo/breadcrumbs'

const locale = 'it' as const

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata({ path: '/it/migrazione-shopify', locale, pageKey: 'migrazioneShopify' })
}

const migrazioneJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Migrazione eCommerce su Shopify',
  provider: { '@type': 'Organization', name: 'NoProb Agency', url: 'https://noprob.agency' },
  serviceType: 'Shopify eCommerce migration',
  areaServed: ['IT', 'EU'],
  description:
    'Migra il tuo eCommerce su Shopify in 14 giorni senza perdere vendite o clienti. Redirect 1:1, nessuna interruzione del sito, tracciamento server-side, 4 garanzie scritte e 90 giorni di supporto.',
  offers: {
    '@type': 'AggregateOffer',
    priceCurrency: 'EUR',
    lowPrice: '5800',
    highPrice: '12800',
    offerCount: 3,
  },
}

const breadcrumbJsonLd = pageBreadcrumbJsonLd('migrazioneShopify', locale)

export default function MigrazioneShopifyPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(migrazioneJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <MigrazioneHero locale={locale} />
      <MigrazioneProblem locale={locale} />
      <MigrazioneSolution locale={locale} />
      <MigrazioneSocialProof locale={locale} />
      <MigrazioneProcess locale={locale} />
      <MigrazioneSprintBanner locale={locale} />
      <MigrazioneSprintPricing locale={locale} />
      <MigrazioneResults locale={locale} />
      <MigrazioneFAQ locale={locale} />
      <Footer locale={locale} />
    </main>
  )
}
