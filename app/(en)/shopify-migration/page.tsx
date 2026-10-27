import type { Metadata } from 'next'

import MigrazioneHero from '@/components/sections/MigrazioneHero'
import MigrazioneGuide from '@/components/sections/MigrazioneGuide'
import MigrazioneSocialProof from '@/components/sections/MigrazioneSocialProof'
import MigrazioneResults from '@/components/sections/MigrazioneResults'
import MigrazioneSprintBanner from '@/components/sections/MigrazioneSprintBanner'
import MigrazioneFAQ from '@/components/sections/MigrazioneFAQ'
import Footer from '@/components/layout/Footer'
import { StructuredData } from '@/components/blog/StructuredData'
import { buildMetadata } from '@/lib/site'
import { pageBreadcrumbJsonLd } from '@/lib/seo/breadcrumbs'
import { migrationGuideArticleJsonLd } from '@/lib/seo/migrationGuide'

const locale = 'en' as const

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata({ path: '/shopify-migration', locale, pageKey: 'migrazioneShopify' })
}

const schemas = [
  migrationGuideArticleJsonLd(locale),
  pageBreadcrumbJsonLd('migrazioneShopify', locale),
]

export default function ShopifyMigrationPage() {
  return (
    <main>
      <StructuredData schemas={schemas} />
      <MigrazioneHero locale={locale} />
      <MigrazioneGuide locale={locale} />
      <MigrazioneSocialProof locale={locale} />
      <MigrazioneResults locale={locale} />
      <MigrazioneSprintBanner locale={locale} />
      <MigrazioneFAQ locale={locale} />
      <Footer locale={locale} />
    </main>
  )
}
