import Link from 'next/link'

import { StructuredData } from '@/components/blog/StructuredData'
import type { Locale } from '@/lib/i18n'
import { getBlocchiCopy } from '@/lib/i18n/blocchi'
import { ROUTE_PATHS } from '@/lib/i18n/routes'
import { breadcrumbJsonLd, homeCrumb, routeCrumb } from '@/lib/seo/breadcrumbs'

/**
 * Blocks added to the case study index: BreadcrumbList JSON-LD, the
 * introductory paragraph under the H1 and the closing block towards the
 * Shopify Launch Sprint. Copy in `lib/i18n/blocchi.ts` (`useCases`).
 */
export function UseCasesIntro({ locale }: { locale: Locale }) {
  return (
    <>
      <StructuredData schemas={[breadcrumbJsonLd([homeCrumb(locale), routeCrumb('useCases', locale)])]} />
      <p className="max-w-[760px] font-sans text-[17px] font-medium leading-[1.55em] tracking-[-0.02em] text-[#4a4a4a]">
        {getBlocchiCopy(locale).useCases.intro}
      </p>
    </>
  )
}

export function UseCasesClosing({ locale }: { locale: Locale }) {
  const d = getBlocchiCopy(locale).useCases.closing

  return (
    <div className="mx-auto mt-16 max-w-[1200px]">
      <div className="border-card-thick shadow-card flex flex-col items-start gap-4 rounded-card-lg bg-white p-6 min-[810px]:p-10">
        <h2 className="font-display text-[26px] font-semibold leading-[1.15em] tracking-[-0.05em] text-black min-[810px]:text-[34px]">
          {d.heading}
        </h2>
        <p className="max-w-[680px] font-sans text-[16px] font-medium leading-[1.6em] tracking-[-0.02em] text-[#4a4a4a]">
          {d.text}
        </p>
        <Link href={ROUTE_PATHS.zeroLossMigration[locale]} data-tracking="usecases_sprint_cta" className="button-principal">
          {d.cta}
        </Link>
        <Link
          href={ROUTE_PATHS.migrazioneShopify[locale]}
          className="font-sans text-[15px] font-medium tracking-[-0.02em] text-[#1c1c1c] underline underline-offset-4 decoration-[#1c1c1c]/40 hover:decoration-[#1c1c1c]"
        >
          {d.guideLink}
        </Link>
      </div>
    </div>
  )
}
