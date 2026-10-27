import type { Metadata } from 'next'

import AiHero from '@/components/sections/ai/AiHero'
import AiProblem from '@/components/sections/ai/AiProblem'
import AiSolution from '@/components/sections/ai/AiSolution'
import AiAudience from '@/components/sections/ai/AiAudience'
import AiStartSteps from '@/components/sections/ai/AiStartSteps'
import AiTimeline from '@/components/sections/ai/AiTimeline'
import AiWho from '@/components/sections/ai/AiWho'
import AiDeliverables from '@/components/sections/ai/AiDeliverables'
import AiScope from '@/components/sections/ai/AiScope'
import AiContrast from '@/components/sections/ai/AiContrast'
import AiAfter from '@/components/sections/ai/AiAfter'
import AiPricing from '@/components/sections/ai/AiPricing'
import AiFinalCta from '@/components/sections/ai/AiFinalCta'
import AiStickyCta from '@/components/sections/ai/AiStickyCta'
import { ElectricDivider, SideCables } from '@/components/sections/ai/PowerLayer'
import CaseStudy from '@/components/sections/CaseStudy'
import MigrazioneFAQ from '@/components/sections/MigrazioneFAQ'
import Footer from '@/components/layout/Footer'
import { buildMetadata } from '@/lib/site'
import { pageBreadcrumbJsonLd } from '@/lib/seo/breadcrumbs'
import { getAiCopy } from '@/lib/i18n/aiAccelerator'

const locale = 'en' as const

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata({
    path: '/ai-accelerator',
    locale,
    pageKey: 'aiAccelerator',
    image: '/images/og-ai-accelerator-en.png',
    imageAlt: 'AI Accelerator, a 30-day one-to-one AI program for eCommerce brands',
  })
}

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'AI Accelerator',
  provider: { '@type': 'Organization', name: 'NoProb Agency', url: 'https://noprob.agency' },
  serviceType: 'AI consulting',
  areaServed: ['IT', 'EU'],
  description:
    'A 30-day one-to-one program for established eCommerce brands: analysis of sales, acquisition and processes, opportunities ranked by impact, a 90-day roadmap and your first AI solutions running. Fixed price, no lock-in.',
  offers: {
    '@type': 'Offer',
    price: '1100',
    priceCurrency: 'EUR',
    availability: 'https://schema.org/InStock',
  },
}

const breadcrumbJsonLd = pageBreadcrumbJsonLd('aiAccelerator', locale)

export default function AiAcceleratorPage() {
  const copy = getAiCopy(locale)

  return (
    <main className="ai-scope relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Decorative side cables (desktop only) */}
      <SideCables />

      <AiHero locale={locale} />
      <AiProblem locale={locale} />
      <AiSolution locale={locale} />
      <AiAudience locale={locale} />
      <ElectricDivider className="py-6" />
      <AiStartSteps locale={locale} />
      <AiTimeline locale={locale} />
      <ElectricDivider className="py-6" />
      <AiWho locale={locale} />
      <CaseStudy
        locale={locale}
        noPadding
        compact
        heading={
          <>
            {copy.caseStudyHeading.part1}
            <em className="font-serif italic">{copy.caseStudyHeading.em}</em>
            {copy.caseStudyHeading.end}
          </>
        }
      />
      <AiPricing locale={locale} />
      <AiAfter locale={locale} />
      <AiDeliverables locale={locale} />
      <AiScope locale={locale} />
      <AiContrast locale={locale} />
      <ElectricDivider className="py-6 pt-12" />
      <MigrazioneFAQ locale={locale} copy={copy.faq} />
      <AiFinalCta locale={locale} />
      <Footer locale={locale} />
      <AiStickyCta locale={locale} />
    </main>
  )
}
