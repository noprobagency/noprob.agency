'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

import SectionLabel from '@/components/ui/SectionLabel'
import { getDictionary, type Locale } from '@/lib/i18n'

const serviceTags = ['Meta Ads', 'eCommerce', 'Klaviyo', 'Shopify', 'Google Ads', 'SEO']

export default function CaseStudy({
  locale = 'en',
  noPadding = false,
  compact = false,
  heading,
}: {
  locale?: Locale
  noPadding?: boolean
  compact?: boolean
  /** Optional heading override (defaults to the shared dictionary heading). */
  heading?: React.ReactNode
}) {
  const t = getDictionary(locale)

  return (
    <section
      className={
        noPadding
          ? compact
            ? 'px-5 pb-10 min-[810px]:px-9 min-[810px]:pb-[50px]'
            : 'px-5 pb-20 min-[810px]:px-9 min-[810px]:pb-[100px]'
          : 'px-9 pb-[80px] pt-[80px]'
      }
    >
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center gap-8">
        <div className="max-w-[550px] text-center">
          <SectionLabel>{t.caseStudy.label}</SectionLabel>
          <h2 className="mt-5 text-np-h2 text-center text-np-dark">
            {heading ?? t.caseStudy.heading}
          </h2>
        </div>

        <motion.article
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 'some' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="shadow-card relative flex w-full max-w-[850px] flex-col items-start overflow-hidden rounded-[16px] bg-[#f9f9f9] border-[6px] border-[#f0f0f0] gap-5 p-0 max-[809px]:gap-0 lg:flex-row"
        >
          <div className="relative w-full h-[200px] flex-none self-stretch lg:h-auto lg:flex-1">
            <Image
              src="/images/originals/2QNUkNFRX0OUC0qTVjeplIvlFS0.jpg"
              alt="Cumini fashion case study"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>

          <div className="relative flex flex-1 flex-col items-start justify-start gap-[25px] overflow-clip pb-5 pl-0 pr-5 pt-5 max-[809px]:w-full max-[809px]:flex-none max-[809px]:gap-[15px] max-[809px]:p-5">
            <div className="relative flex w-full flex-none flex-col items-start justify-start gap-[10px] overflow-clip">
              <div className="flex flex-col gap-2">
                <p className="font-sans text-[12px] font-medium tracking-[-0.04em] text-[#666]">
                  {t.caseStudy.category}
                </p>

                <Image
                  src="/images/originals/T1UW1kS41RaUauBrmK5dUj0txA.png"
                  alt="Cumini logo"
                  width={228}
                  height={36}
                  className="h-6 w-auto object-contain object-left"
                />
              </div>

              <p className="max-w-[480px] font-sans text-body-sm font-medium leading-[1.5em] text-np-text">
                {t.caseStudy.description}
              </p>
            </div>

            <div className="flex w-full flex-col gap-[10px]">
              <div className="flex items-center gap-2">
                <span className="font-sans text-body-lg font-medium text-noprob-text">{t.caseStudy.metric.charAt(0)}</span>
                <span className="font-sans text-body-lg font-medium text-noprob-text">{t.caseStudy.metric.slice(2)}</span>
              </div>

              <div className="border-b border-[rgba(164,164,164,0.5)] pb-2">
                <p className="font-sans text-[11px] font-medium tracking-[-0.04em] text-np-text">
                  {t.caseStudy.metricNote}
                </p>
              </div>

              <Link
                href={t.caseStudy.ctaHref}
                className="font-sans text-[14px] font-semibold tracking-[-0.04em] text-[#121212] underline underline-offset-4"
              >
                {t.caseStudy.cta} →
              </Link>

              <div className="flex flex-wrap gap-2 max-[809px]:gap-1">
                {serviceTags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex rounded-pill bg-white px-3 py-[2px] font-sans text-[14px] font-semibold tracking-[-0.04em] text-[#121212]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  )
}
