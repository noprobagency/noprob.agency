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
  return useCases.map((u) => ({ slug: u.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const useCase = useCases.find((u) => u.slug === slug)
  if (!useCase) return {}
  return buildMetadata({
    title: useCase.title,
    description: useCase.excerpt,
    path: `/it/casi-studio/${useCase.slug}`,
    locale: 'it',
    image: useCase.image,
    imageAlt: useCase.imageAlt,
  })
}

export default async function ItalianUseCasePage({ params }: Props) {
  const { slug } = await params
  const useCase = useCases.find((u) => u.slug === slug)
  if (!useCase) notFound()

  const locale = 'it'

  return (
    <>
      {/* Hero */}
      <section className="w-full bg-[#f0f0f0] pt-[120px] pb-0 px-5 min-[810px]:px-9">
        <div className="mx-auto flex max-w-[860px] flex-col items-center gap-5 pb-12 text-center">
          <span className="np-eyebrow">{useCase.caseType === 'Use Case' ? 'Caso d’Uso' : useCase.caseType}</span>
          <h1
            className="font-sans font-semibold text-black tracking-[-0.07em] leading-[110%]"
            style={{ fontSize: 'clamp(32px, 5vw, 56px)' }}
          >
            {useCase.title}
          </h1>
          <p className="max-w-[600px] font-sans text-[18px] font-medium leading-[1.5em] tracking-[-0.03em] text-[#7c7c7c]">
            {useCase.excerpt}
          </p>
        </div>

        {/* Cover image */}
        <div className="mx-auto max-w-[860px] overflow-hidden rounded-[24px]">
          <div className="relative w-full" style={{ aspectRatio: '16/9' }}>
            <Image
              src={useCase.image}
              alt={useCase.imageAlt ?? useCase.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Article body */}
      <section className="w-full flex justify-center bg-[#f0f0f0] py-16 px-5 min-[810px]:px-9">
        <article className="w-full max-w-[720px]">
          {useCase.content?.map((section, idx) => renderSection(section, idx, 'it'))}
          <UseCaseExtras useCase={useCase} locale="it" path={`/it/casi-studio/${useCase.slug}`} />
        </article>
      </section>

      <CTA locale={locale} />
      <Footer locale={locale} />
    </>
  )
}
