'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

import SectionLabel from '@/components/ui/SectionLabel'
import Testimonials from '@/components/sections/Testimonials'
import AiApplicationForm from '@/components/sections/ai/AiApplicationForm'
import { ZapIcon } from '@/components/sections/ai/PowerLayer'
import { siteAssets } from '@/lib/site'
import { type Locale } from '@/lib/i18n'
import { getAiCopy } from '@/lib/i18n/aiAccelerator'

export default function AiPricing({ locale = 'it' }: { locale?: Locale }) {
  const copy = getAiCopy(locale)
  const d = copy.pricing
  const tiers = d.tiers
  const currentIndex = Math.max(0, tiers.findIndex((t) => t.state === 'current'))

  // Continuous track: each column is 25% wide, dot centers at 12.5% steps.
  const center = (i: number) => (i + 0.5) * 25
  const accentWidth = center(currentIndex) - center(0)

  return (
    <section id="pricing" data-header-theme="dark" className="scroll-mt-40 bg-black py-[40px]">
      <div className="container-noprob">
        <div className="mx-auto max-w-[850px]">
          {/* Header */}
          <div className="mx-auto max-w-[680px] text-center">
            <SectionLabel>{d.label}</SectionLabel>
            <h2 className="mt-5 text-np-h2 text-center text-[#f9f9f9]">
              {d.headingPart1}
              <em className="font-serif italic">{d.headingEm}</em>
              {d.headingEnd}
            </h2>
            <p className="mt-5 font-sans text-body-lg font-medium text-[#f9f9f9]">{d.intro}</p>
          </div>

          {/* Tiered price bar */}
          <div className="mt-12">
            <div className="grid grid-cols-4">
              {tiers.map((tier) => (
                <div key={tier.price} className="text-center">
                  <span
                    className={
                      tier.state === 'current'
                        ? 'ai-number-dark font-display text-[18px] font-bold tracking-[-0.04em] min-[810px]:text-[26px]'
                        : tier.state === 'completed'
                          ? 'font-display text-[15px] font-semibold tracking-[-0.04em] text-[#777] line-through min-[810px]:text-[20px]'
                          : 'font-display text-[15px] font-semibold tracking-[-0.04em] text-[#777] min-[810px]:text-[20px]'
                    }
                  >
                    {tier.price}
                  </span>
                </div>
              ))}
            </div>

            <div className="relative my-3 grid grid-cols-4">
              <span className="pointer-events-none absolute left-[12.5%] right-[12.5%] top-1/2 h-[2px] -translate-y-1/2 bg-[#333]" />
              <span
                className="pointer-events-none absolute top-1/2 h-[2px] -translate-y-1/2 bg-[color:var(--ai-accent)]"
                style={{ left: '12.5%', width: `${accentWidth}%`, boxShadow: '0 0 8px var(--ai-accent-glow)' }}
              />
              {tiers.map((tier) => (
                <div key={tier.price} className="flex items-center justify-center">
                  <span
                    className={
                      tier.state === 'current'
                        ? 'relative z-10 h-[16px] w-[16px] rounded-full bg-[color:var(--ai-accent)] ring-4 ring-[rgba(47,107,255,0.3)]'
                        : tier.state === 'completed'
                          ? 'relative z-10 h-[16px] w-[16px] rounded-full bg-[color:var(--ai-accent)]'
                          : 'relative z-10 h-[11px] w-[11px] rounded-full bg-[#4a4a4a]'
                    }
                  />
                </div>
              ))}
            </div>

            <div className="grid grid-cols-4">
              {tiers.map((tier) => (
                <div key={tier.price} className="flex flex-col gap-[2px] text-center">
                  <span
                    className={`font-sans text-[11px] font-semibold leading-[1.3] tracking-[-0.02em] min-[810px]:text-[13px] ${
                      tier.state === 'current' ? 'text-white' : 'text-[#999]'
                    }`}
                  >
                    {tier.slot}
                  </span>
                  <span className="font-serif text-[11px] font-medium italic tracking-[-0.04em] text-[#777] min-[810px]:text-[12px]">
                    {tier.tag}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Scarcity line */}
          <p className="mx-auto mt-8 max-w-[620px] text-center font-sans text-[14px] font-medium leading-[1.6em] tracking-[-0.02em] text-[#c9c9c9]">
            {d.tiersNote}
          </p>

          {/* Product card - border "under tension" (active tier) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 'some' }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="ai-tier-live mt-10 w-full rounded-[24px] border border-[rgb(54,54,54)] bg-[rgb(24,24,24)] p-2"
          >
            <div className="rounded-[20px] bg-white p-6 shadow-pricing-inner min-[810px]:p-[32px]">
              <div className="grid gap-8 min-[810px]:grid-cols-2 min-[810px]:gap-10">
                {/* Left: program summary */}
                <div className="flex flex-col">
                  <h3 className="text-np-pricing text-noprob-text">{d.card.title}</h3>
                  <p className="mt-3 font-sans text-body-sm font-medium leading-[1.6em] text-noprob-text">
                    {d.card.subtitle}
                  </p>
                  <ul className="mt-5 flex flex-col gap-3">
                    {d.card.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-3 font-sans text-body-sm font-medium text-noprob-text"
                      >
                        <ZapIcon size={18} className="shrink-0 text-[color:var(--ai-accent-text)]" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right: zero-risk badge + price + CTA + trust */}
                <div className="flex flex-col min-[810px]:border-l min-[810px]:border-[#ececec] min-[810px]:pl-10">
                  <span className="inline-flex self-start rounded-pill border border-[#d6d6d6] bg-white px-3 py-[6px] font-serif text-[14px] font-normal italic tracking-[-0.02em] text-noprob-text">
                    AI Accelerator
                  </span>

                  {/* Zero-risk badge (replaces the migration guarantee) */}
                  <div className="mt-4 flex items-start gap-2 rounded-[12px] bg-[rgba(47,107,255,0.1)] px-4 py-3">
                    <ZapIcon size={18} className="mt-[2px] shrink-0 text-[color:var(--ai-accent-text)]" />
                    <p className="font-sans text-[13px] font-semibold leading-[1.5em] tracking-[-0.02em] text-noprob-text">
                      {d.card.badge}
                    </p>
                  </div>

                  <div className="mt-5 flex items-end gap-2">
                    <span className="ai-number text-np-pricing">{d.card.price}</span>
                    <span className="mb-2 font-sans text-[14px] font-medium tracking-[-0.02em] text-noprob-grey">
                      {d.card.priceSuffix}
                    </span>
                  </div>
                  <p className="mt-1 font-sans text-[12px] font-medium tracking-[-0.02em] text-noprob-grey">
                    {d.card.priceNote}
                  </p>

                  <Link
                    href="#candidatura"
                    data-tracking="ai_pricing_cta"
                    className="button-principal ai-cta mt-5 !w-full"
                  >
                    {d.card.cta}
                  </Link>

                  {/* Trustpilot */}
                  <div className="mt-4 flex flex-col items-center gap-[8px]">
                    <div className="flex items-center gap-[5px]">
                      <Image
                        src={siteAssets.trustpilotWordmark}
                        alt="Trustpilot"
                        width={72}
                        height={16}
                        className="h-4 w-auto object-contain"
                      />
                      <span className="font-sans text-[12px] font-semibold tracking-[-0.03em] text-np-green-trust">
                        {copy.hero.trustRatingLabel}
                      </span>
                    </div>
                    <p className="text-center font-sans text-[12px] font-medium tracking-[-0.04em] text-noprob-text">
                      {d.trustLine}
                    </p>
                    <p className="text-center font-sans text-[11px] font-medium tracking-[-0.03em] text-noprob-grey">
                      {d.trustLine2}
                    </p>
                  </div>
                </div>
              </div>

              {/* Application form (#candidatura target for every CTA), framed as
                  its own electric card inside the pricing card */}
              <div className="ai-form-card mt-8 rounded-[16px] p-5 min-[810px]:p-8">
                <AiApplicationForm locale={locale} />
              </div>
            </div>
          </motion.div>

          {/* Testimonials (same Trustpilot reviews as the migration landing) */}
          <Testimonials locale={locale} heading={copy.testimonialsHeading} />
        </div>
      </div>
    </section>
  )
}
