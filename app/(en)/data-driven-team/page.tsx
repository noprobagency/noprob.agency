import type { Metadata } from 'next'

import DataDrivenTeamHero from '@/components/sections/DataDrivenTeamHero'
import DataDrivenTeamProblem from '@/components/sections/DataDrivenTeamProblem'
import DataDrivenTeamSolution from '@/components/sections/DataDrivenTeamSolution'
import MigrazioneProcess from '@/components/sections/MigrazioneProcess'
import EcommerceRebuildWhyUs from '@/components/sections/EcommerceRebuildWhyUs'
import { getTeamRoadmapCopy } from '@/lib/i18n/teamRoadmap'
import CaseStudy from '@/components/sections/CaseStudy'
import MigrazionePricing from '@/components/sections/MigrazionePricing'
import { getDataTeamCopy } from '@/lib/i18n/dataTeam'
import FAQ from '@/components/sections/FAQ'
import CTA from '@/components/sections/CTA'
import Footer from '@/components/layout/Footer'
import { buildMetadata } from '@/lib/site'
import { pageBreadcrumbJsonLd } from '@/lib/seo/breadcrumbs'

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata({ path: '/data-driven-team', locale: 'en', pageKey: 'dataDrivenTeam' })
}

const dataDrivenTeamJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Data-Driven Team, Dedicated eCommerce Retainer',
  provider: { '@type': 'Organization', name: 'NoProb Agency', url: 'https://noprob.agency' },
  serviceType: 'eCommerce management retainer',
  areaServed: ['IT', 'EU', 'US'],
  description:
    'A dedicated eCommerce team on retainer, led by an eCommerce Manager as your single point of contact. Development, marketing, CRO, branding and data, managed end to end.',
}

const breadcrumbJsonLd = pageBreadcrumbJsonLd('dataDrivenTeam', 'en')

export default function DataDrivenTeamPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(dataDrivenTeamJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <DataDrivenTeamHero ctaHref="#candidatura" ctaTracking="datateam_hero_cta" />
      <DataDrivenTeamProblem />
      <DataDrivenTeamSolution />
      <MigrazioneProcess locale="en" copy={getTeamRoadmapCopy('en')} />
      <EcommerceRebuildWhyUs copy={getDataTeamCopy('en').whyUs} />
      <CaseStudy noPadding={true} />
      <MigrazionePricing
        locale="en"
        copy={getDataTeamCopy('en').pricing}
        formCopy={getDataTeamCopy('en').form}
        formSource="datateam"
        ctaTracking="datateam_pricing_cta"
        formSubmitTracking="datateam_form_submit"
        showTiers={false}
        showPrice={false}
      />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  )
}
