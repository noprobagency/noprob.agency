import Link from 'next/link'

import CaseStudy from '@/components/sections/CaseStudy'
import { type Locale } from '@/lib/i18n'

const MORE_CASES = {
  it: {
    label: 'Un altro caso di migrazione:',
    title: 'Farmacia Nazzi, da WooCommerce a Shopify',
    href: '/it/casi-studio/farmacia-nazzi-integratori-shopify',
  },
  en: {
    label: 'Another migration case:',
    title: 'Farmacia Nazzi, from WooCommerce to Shopify',
    href: '/use-cases/farmacia-nazzi-integratori-shopify',
  },
}

export default function MigrazioneSocialProof({ locale = 'it' }: { locale?: Locale }) {
  const more = MORE_CASES[locale === 'en' ? 'en' : 'it']
  return (
    <>
      <CaseStudy locale={locale} noPadding={true} compact={true} />
      <p className="-mt-4 mb-10 px-5 text-center font-sans text-[14px] font-medium tracking-[-0.03em] text-np-text min-[810px]:mb-[50px]">
        {more.label}{' '}
        <Link href={more.href} className="font-semibold text-[#121212] underline underline-offset-4">
          {more.title} →
        </Link>
      </p>
    </>
  )
}
