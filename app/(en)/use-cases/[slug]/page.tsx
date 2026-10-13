import type { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'

import { buildMetadata } from '@/lib/site'
import { useCases } from '@/data/use-cases'
import { renderSection } from '@/components/article/renderSection'
import UseCaseExtras from '@/components/article/UseCaseExtras'
import CTA from '@/components/sections/CTA'
import Footer from '@/components/layout/Footer'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return useCases.map((uc) => ({ slug: uc.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const useCase = useCases.find((uc) => uc.slug === slug)
  if (!useCase) return {}
  return buildMetadata({
    title: useCase.titleEn ?? useCase.title,
    description: useCase.excerptEn ?? useCase.excerpt,
    path: `/use-cases/${useCase.slug}`,
    locale: 'en',
  })
}

export default async function UseCasePage({ params }: Props) {
  const { slug } = await params
  const useCase = useCases.find((uc) => uc.slug === slug)
  if (!useCase) notFound()

  const title = useCase.titleEn ?? useCase.title
  const excerpt = useCase.excerptEn ?? useCase.excerpt
  const content = useCase.contentEn ?? useCase.content

  return (
    <>
      {/* Hero */}
      <section className="w-full bg-[#f0f0f0] pt-[120px] pb-0 px-5 min-[810px]:px-9">
        <div className="mx-auto flex max-w-[860px] flex-col items-center gap-5 pb-12 text-center">
          <span className="np-eyebrow">{useCase.caseType}</span>
          <h1
            className="font-sans font-semibold text-black tracking-[-0.07em] leading-[110%]"
            style={{ fontSize: 'clamp(32px, 5vw, 56px)' }}
          >
            {title}
          </h1>
          <p className="max-w-[600px] font-sans text-[18px] font-medium leading-[1.5em] tracking-[-0.03em] text-[#7c7c7c]">
            {excerpt}
          </p>
        </div>

        {/* Cover image */}
        <div className="mx-auto max-w-[860px] overflow-hidden rounded-[24px]">
          <div className="relative w-full" style={{ aspectRatio: '16/9' }}>
            <Image
              src={useCase.image}
              alt={useCase.imageAlt ?? title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="w-full flex justify-center bg-[#f0f0f0] py-16 px-5 min-[810px]:px-9">
        <article className="w-full max-w-[720px]">
          {content?.map((section, idx) => renderSection(section, idx, 'en'))}
          <UseCaseExtras useCase={useCase} locale="en" path={`/use-cases/${useCase.slug}`} />
        </article>
      </section>

      <CTA />
      <Footer />
    </>
  )
}
