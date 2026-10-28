import type { Metadata } from 'next'

import CaseStudy from '@/components/sections/CaseStudy'
import FAQ from '@/components/sections/FAQ'
import CTA from '@/components/sections/CTA'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import HomeGuides from '@/components/sections/HomeGuides'
import Pricing from '@/components/sections/Pricing'
import ProblemSection from '@/components/sections/ProblemSection'
import ResultsCarousel from '@/components/sections/ResultsCarousel'
import SolutionSection from '@/components/sections/SolutionSection'
import AiServiceCard from '@/components/sections/ai/AiServiceCard'
import Preloader from '@/components/ui/Preloader'
import { buildMetadata } from '@/lib/site'

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata({ path: '/it', locale: 'it', pageKey: 'home' })
}

export default function ItalianHomePage() {
  return (
    <>
      <Preloader />
      <Hero locale="it" />
      <ResultsCarousel locale="it" />
      <ProblemSection locale="it" />
      <SolutionSection locale="it" />
      <CaseStudy locale="it" />
      <Pricing locale="it">
        <AiServiceCard locale="it" />
      </Pricing>
      <HomeGuides locale="it" />
      <FAQ locale="it" />
      <CTA locale="it" />
      <Footer locale="it" />
    </>
  )
}
