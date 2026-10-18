import Footer from '@/components/layout/Footer'
import type { Locale } from '@/lib/i18n'
import { ROUTE_PATHS } from '@/lib/i18n/routes'
import { absoluteUrl } from '@/lib/utils'
import { ZL_PRODUCT_NAME, ZL_TIERS, getZeroLossCopy } from '@/content/zero-loss-migration'

import ZlTracking from './ZlTracking'
import ZlNav from './ZlNav'
import ZlHero from './ZlHero'
import ZlOverview from './ZlOverview'
import ZlChecklist from './ZlChecklist'
import ZlAiTheme from './ZlAiTheme'
import ZlDeliverables from './ZlDeliverables'
import ZlCalendar from './ZlCalendar'
import ZlGuarantees from './ZlGuarantees'
import ZlWhyNow from './ZlWhyNow'
import ZlStickyCta from './ZlStickyCta'
import ZlResultsFirst from './ZlResultsFirst'
import ZlProof from './ZlProof'
import ZlScope from './ZlScope'
import ZlFaq from './ZlFaq'
import ZlApplication from './ZlApplication'

/**
 * Zero-Loss Migration Sprint landing, section order (Fletch homepage + 3 of
 * ours: 7 guarantees, 8 why now, 10 included/not included):
 * 1 nav · 2 hero + logos · 3 overview · 4 checklist · 4b Custom AI theme · 5 deliverables ·
 * 6 calendar · 7 guarantees · 8 why now · 9 proof · 10 scope · 11 FAQ ·
 * 12 application form · footer.
 */
export default function ZeroLossPage({ locale }: { locale: Locale }) {
  const copy = getZeroLossCopy(locale)

  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: ZL_PRODUCT_NAME,
    provider: { '@type': 'Organization', name: 'NoProb Agency', url: 'https://noprob.agency' },
    alternateName: locale === 'it' ? 'Sprint migrazione Shopify' : 'Shopify migration sprint',
    serviceType: 'Shopify eCommerce migration',
    areaServed: ['IT', 'EU', 'US'],
    url: absoluteUrl(ROUTE_PATHS.zeroLossMigration[locale]),
    description: copy.meta.description,
    offers: ZL_TIERS.map((tier) => ({
      '@type': 'Offer',
      name: `${ZL_PRODUCT_NAME} · ${copy.overview.tiers[tier.id - 1].label}`,
      price: String(tier.price),
      priceCurrency: 'EUR',
      availability: 'https://schema.org/InStock',
    })),
  }

  return (
    <>
      <ZlTracking locale={locale} />
      <ZlNav locale={locale} copy={copy.nav} />
      <main>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
        <ZlHero copy={copy.hero} />
        <ZlOverview copy={copy.overview} />
        <ZlChecklist copy={copy.checklist} />
        <ZlAiTheme copy={copy.aiTheme} />
        <ZlDeliverables copy={copy.deliverables} />
        <ZlResultsFirst copy={copy.resultsFirst} />
        <ZlCalendar copy={copy.calendar} deliverables={copy.deliverables} locale={locale} />
        <ZlGuarantees copy={copy.guarantees} />
        <ZlWhyNow copy={copy.whyNow} />
        <ZlProof locale={locale} copy={copy.proof} />
        <ZlScope copy={copy.scope} />
        <ZlFaq copy={copy.faq} />
        <ZlApplication copy={copy.finalCta} />
      </main>
      <ZlStickyCta copy={copy.sticky} priceFrom={copy.overview.tiers[0].price} />
      <Footer locale={locale} minimal />
    </>
  )
}
