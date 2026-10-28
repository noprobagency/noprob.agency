import type { Metadata } from 'next'

import { buildMetadata } from '@/lib/site'
import SectionLabel from '@/components/ui/SectionLabel'
import UseCaseCard from '@/components/article/UseCaseCard'
import { useCases } from '@/data/use-cases'
import Footer from '@/components/layout/Footer'
import { UseCasesClosing, UseCasesIntro } from '@/components/sections/UseCasesIndexBlocks'
import { getBlocchiCopy } from '@/lib/i18n/blocchi'

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata({ path: '/use-cases', locale: 'en', pageKey: 'useCases' })
}

export default function UseCasesPage() {
  return (
    <>
      <section className="w-full bg-[#f0f0f0] pt-[120px] pb-[80px] px-5 min-[810px]:px-9">
        {/* Header */}
        <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-5 text-center">
          <SectionLabel>{getBlocchiCopy('en').useCases.sectionLabel}</SectionLabel>
          <h1
            className="font-sans font-semibold text-black tracking-[-0.07em] leading-[110%] text-[40px]"
          >
            Real brands, real growth.{' '}
            <em className="font-serif italic tracking-[-0.08em]">See how it works.</em>
          </h1>
          <UseCasesIntro locale="en" />
        </div>

        {/* Grid */}
        <div className="mx-auto mt-12 max-w-[1200px]">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {useCases.map((useCase) => (
              <UseCaseCard
                key={useCase.slug}
                useCase={useCase}
                href={`/use-cases/${useCase.slug}`}
                locale="en"
                caseTypeLabel={getBlocchiCopy('en').useCases.caseTypeLabel}
                brand={getBlocchiCopy('en').useCases.brands[useCase.slug]}
              />
            ))}
          </div>
        </div>

        <UseCasesClosing locale="en" />
      </section>
      <Footer />
    </>
  )
}
