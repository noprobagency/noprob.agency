import type { Metadata } from 'next'

import AboutHero from '@/components/sections/AboutHero'
import ResultsCarousel from '@/components/sections/ResultsCarousel'
import PrinciplesSection from '@/components/sections/PrinciplesSection'
import FounderBlock from '@/components/sections/FounderBlock'
import CTA from '@/components/sections/CTA'
import Footer from '@/components/layout/Footer'
import { StructuredData } from '@/components/blog/StructuredData'
import { buildMetadata, FOUNDER_ID, FOUNDER_SAME_AS, ORGANIZATION_ID, siteAssets } from '@/lib/site'
import { ROUTE_PATHS } from '@/lib/i18n/routes'
import { pageBreadcrumbJsonLd } from '@/lib/seo/breadcrumbs'
import { absoluteUrl } from '@/lib/utils'

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata({ path: '/about', locale: 'en', pageKey: 'about' })
}

/** Breadcrumb plus the founder Person, with the same @id used by the Organization and the blog author. */
function aboutSchemas(locale: 'en') {
  return [
    pageBreadcrumbJsonLd('about', locale),
    {
      '@context': 'https://schema.org',
      '@type': 'Person',
      '@id': FOUNDER_ID,
      name: 'Antonio Manitta',
      jobTitle: 'Founder & eCommerce Manager',
      url: absoluteUrl(ROUTE_PATHS.about[locale]),
      image: absoluteUrl(siteAssets.heroAntonio),
      worksFor: { '@id': ORGANIZATION_ID },
      ...(FOUNDER_SAME_AS.length > 0 ? { sameAs: FOUNDER_SAME_AS } : {}),
    },
  ]
}

export default function AboutPage() {
  return (
    <main>
      <StructuredData schemas={aboutSchemas('en')} />
      <AboutHero />
      <ResultsCarousel />
      <PrinciplesSection />
      <FounderBlock variant="about" locale="en" />
      <CTA />
      <Footer />
    </main>
  )
}
