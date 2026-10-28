import Link from 'next/link'

import PartnerLogos from '@/components/ui/PartnerLogos'
import { NeuralCircuits, ZapIcon } from '@/components/sections/ai/PowerLayer'
import { type Locale } from '@/lib/i18n'
import { TRUSTPILOT_URL } from '@/lib/site'
import { getAiCopy } from '@/lib/i18n/aiAccelerator'

export default function AiHero({ locale = 'it' }: { locale?: Locale }) {
  const d = getAiCopy(locale).hero

  return (
    <section className="flex flex-col items-center overflow-hidden px-5 pt-[65px] pb-[32px] min-[810px]:px-[34px] min-[810px]:pt-[100px] min-[810px]:pb-[30px]">
      <div
        className="relative flex w-full flex-col items-center gap-[21px] overflow-hidden rounded-card border-2 border-[#d6d6d6] px-6 pb-6 pt-10 backdrop-blur-[5px] min-[810px]:max-w-[1200px]"
        style={{
          background: 'linear-gradient(rgb(240, 240, 240) 44%, rgba(47, 107, 255, 0.14) 100%)',
        }}
      >
        {/* Neural circuit background */}
        <NeuralCircuits />

        {/* Eyebrow */}
        <div className="relative z-[1] inline-flex items-center gap-2 rounded-pill border border-[#d6d6d6] bg-white/80 px-4 py-[6px] font-sans text-[12px] font-semibold tracking-[-0.02em] text-np-dark">
          <ZapIcon size={13} className="text-[color:var(--ai-accent)]" />
          {d.eyebrow}
        </div>

        {/* Hero title (single H1, two lines) */}
        <h1 className="relative z-[1] max-w-[900px] text-center font-display text-[30px] font-semibold leading-[1.14em] tracking-[-0.06em] text-black min-[810px]:text-[3.1rem]">
          <span className="block">{d.titleLine1}</span>
          <span className="block">
            {d.titleLine2Pre}
            <em className="font-serif italic font-semibold">{d.titleEm1}</em>
            {d.titleMid}
            <em className="font-serif italic font-semibold">{d.titleEm2}</em>
            {d.titleEnd}
          </span>
        </h1>

        {/* Lead line: the single supporting paragraph (how + who + objection) */}
        <p className="relative z-[1] w-full max-w-[760px] text-center font-sans text-[16px] font-medium leading-[1.45em] tracking-[-0.02em] text-np-dark min-[810px]:text-[19px]">
          {d.leadLine}
        </p>

        {/* Micro-benefits */}
        <div className="relative z-[1] flex flex-wrap items-center justify-center gap-x-4 gap-y-1 py-2 min-[810px]:gap-6">
          {d.benefits.map((benefit) => (
            <div key={benefit} className="flex items-center gap-2">
              <ZapIcon size={14} className="shrink-0 text-[color:var(--ai-accent-text)]" />
              <span className="font-sans text-[12px] font-medium text-np-text">{benefit}</span>
            </div>
          ))}
        </div>

        {/* CTA -> form anchor */}
        <div className="relative z-[1] flex flex-col items-center gap-[9px]">
          <Link href="#candidatura" data-tracking="ai_hero_cta" className="button-principal ai-cta">
            {d.cta}
          </Link>
          <p className="font-sans text-[12px] font-medium tracking-[-0.02em] text-noprob-grey">{d.ctaNote}</p>
        </div>

        {/* Trust bar: Trustpilot + partner logos */}
        <div className="relative z-[1] flex w-full max-w-[400px] flex-col items-center place-content-center gap-[10px]">
          <a
            href={TRUSTPILOT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-[5px] no-underline hover:underline"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="rgb(31,122,83)"
              aria-hidden="true"
              className="shrink-0"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <span className="font-sans text-[13px] font-semibold tracking-[-0.03em] text-np-green-trust">
              {d.trustRatingLabel}
            </span>
          </a>
          <p className="font-sans text-[12px] font-medium tracking-[-0.03em] text-np-dark text-center">
            {d.trustLine}
          </p>
          <PartnerLogos />
        </div>
      </div>
    </section>
  )
}
