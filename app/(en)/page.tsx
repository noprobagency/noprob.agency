import type { Metadata } from 'next'

import CaseStudy from '@/components/sections/CaseStudy'
import FAQ from '@/components/sections/FAQ'
import CTA from '@/components/sections/CTA'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import LogoWall from '@/components/sections/LogoWall'
import Pricing from '@/components/sections/Pricing'
import ProblemSection from '@/components/sections/ProblemSection'
import ResultsCarousel from '@/components/sections/ResultsCarousel'
import SolutionSection from '@/components/sections/SolutionSection'
import AiServiceCard from '@/components/sections/ai/AiServiceCard'
import { buildMetadata, siteConfig } from '@/lib/site'

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata({ path: '/', locale: 'en', pageKey: 'home' })
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <ResultsCarousel />
      <ProblemSection />
      <SolutionSection />
      <CaseStudy />
      <Pricing>
        <AiServiceCard locale="en" />
      </Pricing>
      <LogoWall />
      <FAQ />
      <CTA />
      <Footer />
    </>
  )
}
