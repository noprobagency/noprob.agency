import type { Metadata } from 'next'

import AgentsHero from '@/components/sections/agents/AgentsHero'
import AgentsContrast from '@/components/sections/agents/AgentsContrast'
import AgentsPaths from '@/components/sections/agents/AgentsPaths'
import AgentsMonitors from '@/components/sections/agents/AgentsMonitors'
import AgentsMethod from '@/components/sections/agents/AgentsMethod'
import AgentsControl from '@/components/sections/agents/AgentsControl'
import AgentsProof from '@/components/sections/agents/AgentsProof'
import AgentsFaq from '@/components/sections/agents/AgentsFaq'
import AgentsFinalCta from '@/components/sections/agents/AgentsFinalCta'
import Footer from '@/components/layout/Footer'
import { AREA_SERVED, ORGANIZATION_ID, buildMetadata } from '@/lib/site'
import { pageBreadcrumbJsonLd } from '@/lib/seo/breadcrumbs'
import { getDictionary } from '@/lib/i18n'

const locale = 'it' as const

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata({ path: '/it/agenti-ai-per-ecommerce', locale, pageKey: 'agentsEcommerce' })
}

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Agenti AI per eCommerce',
  provider: { '@type': 'Organization', '@id': ORGANIZATION_ID, name: 'NoProb Agency', url: 'https://noprob.agency' },
  serviceType: 'AI agent integration',
  areaServed: AREA_SERVED,
  description: getDictionary(locale).seo.agentsEcommerce.description,
}

const breadcrumbJsonLd = pageBreadcrumbJsonLd('agentsEcommerce', locale)

export default function AgentiAiPerEcommercePage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <AgentsHero locale={locale} />
      <AgentsContrast locale={locale} />
      <AgentsPaths locale={locale} />
      <AgentsMonitors locale={locale} />
      <AgentsMethod locale={locale} />
      <AgentsControl locale={locale} />
      <AgentsProof locale={locale} />
      <AgentsFaq locale={locale} />
      <AgentsFinalCta locale={locale} />
      <Footer locale={locale} />
    </main>
  )
}
