import Link from 'next/link'

import type { Locale } from '@/lib/i18n'
import { ROUTE_PATHS, type RouteKey } from '@/lib/i18n/routes'

export type RelatedCTAVariant = 'sprint' | 'dataDrivenTeam'

type CtaCopy = { heading: string; body: string; buttonLabel: string; targetKey: RouteKey }

const COPY: Record<RelatedCTAVariant, Record<Locale, CtaCopy>> = {
  // Default closing CTA of every article: the Shopify Launch Sprint comes first.
  sprint: {
    en: {
      heading: 'Move your store to Shopify in 14 days',
      body: 'The Shopify Launch Sprint moves your store to Shopify in 14 days with our Custom AI System: a fixed calendar, a public price and 4 written guarantees.',
      buttonLabel: 'See the Sprint',
      targetKey: 'zeroLossMigration',
    },
    it: {
      heading: 'Porta il tuo store su Shopify in 14 giorni',
      body: 'Lo Shopify Launch Sprint porta il tuo store su Shopify in 14 giorni con il nostro Custom AI System: calendario fisso, prezzo pubblico e 4 garanzie scritte.',
      buttonLabel: 'Scopri lo Sprint',
      targetKey: 'zeroLossMigration',
    },
  },
  dataDrivenTeam: {
    en: {
      heading: 'Want to see how we apply this with B2C brands?',
      body: 'Our Data-Driven Team is a long-term technical partnership for fashion, supplement, and DTC brands. One stable team, one platform, compound results.',
      buttonLabel: 'Explore Data-Driven Team',
      targetKey: 'dataDrivenTeam',
    },
    it: {
      heading: 'Vuoi vedere come applichiamo questo ai brand B2C?',
      body: 'Il nostro Data-Driven Team è una partnership tecnica long-term per brand fashion, integratori e DTC. Un solo team stabile, una sola piattaforma, risultati che si compongono nel tempo.',
      buttonLabel: 'Scopri il Data-Driven Team',
      targetKey: 'dataDrivenTeam',
    },
  },
}

export function RelatedCTA({
  locale = 'it',
  variant = 'dataDrivenTeam',
}: {
  locale?: Locale
  variant?: RelatedCTAVariant
}) {
  const copy = COPY[variant][locale]
  const href = ROUTE_PATHS[copy.targetKey][locale]

  return (
    <aside className="my-12 rounded-[16px] border border-black/10 bg-[#f8f8f8] p-7">
      <h3 className="font-sans text-[20px] font-semibold leading-[1.25em] tracking-[-0.03em] text-black">
        {copy.heading}
      </h3>
      <p className="mt-3 font-sans text-[15px] leading-[1.6em] text-[#1c1c1c] tracking-[-0.02em]">
        {copy.body}
      </p>
      <Link
        href={href}
        data-tracking="blog_related_cta"
        className="mt-5 inline-block rounded-[10px] bg-[#1A1A1A] px-5 py-3 font-sans text-[14px] font-semibold text-white no-underline transition-opacity hover:opacity-90"
      >
        {copy.buttonLabel} →
      </Link>
    </aside>
  )
}
