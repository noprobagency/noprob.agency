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
import { getDictionary } from '@/lib/i18n'
import { pageBreadcrumbJsonLd } from '@/lib/seo/breadcrumbs'

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata({ path: '/it/team-ecommerce-dedicato', locale: 'it', pageKey: 'dataDrivenTeam' })
}

const seoCopy = getDictionary('it').seo.dataDrivenTeam

const dataDrivenTeamJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: seoCopy.title,
  provider: { '@type': 'Organization', name: 'NoProb Agency', url: 'https://noprob.agency' },
  serviceType: 'eCommerce management retainer',
  areaServed: ['IT', 'EU'],
  description: seoCopy.description,
}

const breadcrumbJsonLd = pageBreadcrumbJsonLd('dataDrivenTeam', 'it')

export default function ItalianDataDrivenTeamPage() {
  const locale = 'it'
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
      <DataDrivenTeamHero locale={locale} ctaHref="#candidatura" ctaTracking="datateam_hero_cta" />
      <DataDrivenTeamProblem locale={locale} />
      <DataDrivenTeamSolution locale={locale} />
      <MigrazioneProcess locale={locale} copy={getTeamRoadmapCopy(locale)} />
      <EcommerceRebuildWhyUs locale={locale} copy={getDataTeamCopy(locale).whyUs} />
      <CaseStudy locale={locale} noPadding={true} />
      <MigrazionePricing
        locale={locale}
        copy={getDataTeamCopy(locale).pricing}
        formCopy={getDataTeamCopy(locale).form}
        formSource="datateam"
        ctaTracking="datateam_pricing_cta"
        formSubmitTracking="datateam_form_submit"
        showTiers={false}
        showPrice={false}
      />
      <FAQ locale={locale} />
      <CTA locale={locale} />
      <Footer locale={locale} />
    </main>
  )
}
