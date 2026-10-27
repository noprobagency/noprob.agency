import type { Metadata } from 'next'

import EcommerceRebuildHero from '@/components/sections/EcommerceRebuildHero'
import EcommerceRebuildProblem from '@/components/sections/EcommerceRebuildProblem'
import EcommerceRebuildSolution from '@/components/sections/EcommerceRebuildSolution'
import MigrazioneProcess from '@/components/sections/MigrazioneProcess'
import EcommerceRebuildWhyUs from '@/components/sections/EcommerceRebuildWhyUs'
import CaseStudy from '@/components/sections/CaseStudy'
import MigrazionePricing from '@/components/sections/MigrazionePricing'
import MigrazioneFAQ from '@/components/sections/MigrazioneFAQ'
import CTA from '@/components/sections/CTA'
import Footer from '@/components/layout/Footer'
import { buildMetadata } from '@/lib/site'
import { pageBreadcrumbJsonLd } from '@/lib/seo/breadcrumbs'
import { getSviluppoCopy } from '@/lib/i18n/sviluppo'

const locale = 'it' as const

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata({ path: '/it/sviluppo-shopify', locale, pageKey: 'sviluppoShopify' })
}

const sviluppoJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Sviluppo eCommerce su Shopify',
  provider: { '@type': 'Organization', name: 'NoProb Agency', url: 'https://noprob.agency' },
  serviceType: 'Shopify eCommerce development',
  areaServed: ['IT', 'EU'],
  description:
    'Progetto di 3 mesi per costruire un eCommerce su Shopify dal design al tracciamento: design su misura, tracciamento server-side, SEO base e CRO. Manutenzione a vita inclusa.',
  offers: {
    '@type': 'Offer',
    price: '1850',
    priceCurrency: 'EUR',
    priceSpecification: {
      '@type': 'UnitPriceSpecification',
      price: '1850',
      priceCurrency: 'EUR',
      unitText: 'MONTH',
    },
  },
}

const breadcrumbJsonLd = pageBreadcrumbJsonLd('sviluppoShopify', locale)

export default function SviluppoShopifyPage() {
  const c = getSviluppoCopy(locale)
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(sviluppoJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <EcommerceRebuildHero
        locale={locale}
        copy={c.hero}
        ctaHref="#candidatura"
        ctaTracking="sviluppo_hero_cta"
      />
      <EcommerceRebuildProblem locale={locale} copy={c.problem} />
      <EcommerceRebuildSolution locale={locale} copy={c.solution} />
      <MigrazioneProcess locale={locale} copy={c.process} />
      <EcommerceRebuildWhyUs locale={locale} copy={c.whyUs} />
      <CaseStudy locale={locale} noPadding={true} />
      <MigrazionePricing
        locale={locale}
        copy={c.pricing}
        ctaTracking="sviluppo_pricing_cta"
        formCopy={c.form}
        formSource="sviluppo"
        formSubmitTracking="sviluppo_form_submit"
      />
      <MigrazioneFAQ locale={locale} copy={c.faq} />
      <CTA locale={locale} buttonLabel={c.hero.cta} buttonHref="#candidatura" />
      <Footer locale={locale} />
    </main>
  )
}
