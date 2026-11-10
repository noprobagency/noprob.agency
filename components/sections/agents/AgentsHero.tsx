import { parseInline } from '@/components/article/renderSection'
import { type Locale } from '@/lib/i18n'
import { getAgentsCopy } from '@/lib/i18n/agentsEcommerce'
import { AGENTS_BOOKING_URL } from './constants'

/** Hero of the AI agents landing: single H1, call CTA and anchor to the two ways. */
export default function AgentsHero({ locale }: { locale: Locale }) {
  const d = getAgentsCopy(locale).hero

  return (
    <section className="px-5 pb-8 pt-[65px] min-[810px]:px-[34px] min-[810px]:pb-12 min-[810px]:pt-[110px]">
      <div className="mx-auto flex w-full max-w-[1000px] flex-col items-start gap-6 rounded-card border-2 border-[#d6d6d6] bg-[#f0f0f0] px-6 py-10 min-[810px]:px-14 min-[810px]:py-16">
        <span className="np-eyebrow">{d.eyebrow}</span>
        <h1 className="max-w-[820px] font-display text-[32px] font-semibold leading-[1.1em] tracking-[-0.06em] text-black min-[810px]:text-[3.4rem]">
          {d.h1}
        </h1>
        <p className="max-w-[720px] font-sans text-[16px] font-medium leading-[1.5em] tracking-[-0.02em] text-np-dark min-[810px]:text-[19px]">
          {parseInline(d.paragraph)}
        </p>
        <div className="flex flex-col items-start gap-4 min-[810px]:flex-row min-[810px]:items-center min-[810px]:gap-6">
          <a
            href={AGENTS_BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-tracking="agents_hero_cta"
            className="button-principal"
          >
            {d.ctaPrimary}
          </a>
          <a
            href="#how"
            className="font-sans text-[16px] font-medium text-[#1c1c1c] underline decoration-[#1c1c1c]/40 underline-offset-4 transition-colors hover:decoration-[#1c1c1c]"
          >
            {d.ctaSecondary}
          </a>
        </div>
      </div>
    </section>
  )
}
