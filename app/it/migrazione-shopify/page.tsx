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
    'Percorso di 4 mesi per migrare un eCommerce su Shopify senza perdere vendite o clienti. Redirect 1:1, nessuna interruzione del sito, tracciamento server-side, design e SEO.',
  offers: {
    '@type': 'AggregateOffer',
    priceCurrency: 'EUR',
    lowPrice: '5800',
    highPrice: '12800',
    offerCount: 3,
  },
}

export default function MigrazioneShopifyPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(migrazioneJsonLd) }}
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
