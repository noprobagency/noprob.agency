import Image from 'next/image'
import Link from 'next/link'

import Footer from '@/components/layout/Footer'
import { getDictionary, type Locale } from '@/lib/i18n'
import { ROUTE_PATHS } from '@/lib/i18n/routes'
import { siteAssets } from '@/lib/site'

/** Branded 404 for both locales (app/(en)/not-found.tsx, app/it/not-found.tsx). */
export default function NotFoundSection({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).notFound

  return (
    <>
      <main className="flex min-h-[70vh] flex-col items-center justify-center px-6 pb-[80px] pt-[140px] text-center">
        <Link href={ROUTE_PATHS.home[locale]} aria-label="noprob agency" className="mb-10 inline-flex h-[32px] items-center">
          <Image src={siteAssets.logoBlack} alt="noprob agency logo" width={128} height={32} className="h-full w-auto" priority />
        </Link>
        <p className="mb-6 inline-flex items-center rounded-pill bg-white px-4 py-[6px] font-sans text-[13px] font-medium tracking-[-0.04em] text-noprob-text shadow-[0_1px_3px_rgba(0,0,0,0.08)]">
          404
        </p>
        <h1 className="mb-5 max-w-[700px] font-display text-[2.4rem] font-semibold leading-[1.05em] tracking-[-0.05em] text-np-dark min-[810px]:text-[3.4rem]">
          {t.title}
          <em className="font-serif font-normal italic">{t.titleEm}</em>
        </h1>
        <p className="mb-8 max-w-[520px] font-sans text-[17px] font-medium leading-[1.5em] tracking-[-0.02em] text-noprob-text">
          {t.text}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link href={ROUTE_PATHS.home[locale]} className="button-principal">
            {t.home}
          </Link>
          <Link href={ROUTE_PATHS.contacts[locale]} className="button-secondary">
            {t.contacts}
          </Link>
        </div>
      </main>
      <Footer locale={locale} />
    </>
  )
}
