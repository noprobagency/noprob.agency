import Link from 'next/link'

import ZlAiBadge from '@/components/sections/zero-loss/ZlAiBadge'
import { getDictionary, type Locale } from '@/lib/i18n'

/** Four-point sparkle, the same mark as the AI badge. */
function Spark({ className }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 16 16" className={className}>
      <path d="M8 1Q8.9 7.1 15 8Q8.9 8.9 8 15Q7.1 8.9 1 8Q7.1 7.1 8 1Z" fill="currentColor" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg aria-hidden viewBox="0 0 20 20" fill="none" className="mt-[1px] h-5 w-5 shrink-0">
      <circle cx="10" cy="10" r="9" fill="#7f9cff" fillOpacity="0.16" stroke="#7f9cff" strokeOpacity="0.55" />
      <path d="M6 10.3 8.8 13 14 7.4" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

/**
 * Featured pricing card of the home pages: the Shopify Launch Sprint. Same
 * visual language as the Sprint landing (ZlAiSystem): electric-blue dark card,
 * glows, grid mask, the animated AI badge. Stacked on phones, two columns
 * (copy | key facts, price and CTAs) from 1024px. Server component.
 */
export default function PricingSprintCard({ locale = 'en' }: { locale?: Locale }) {
  const t = getDictionary(locale)
  const plan = t.pricing.plans.find((p) => p.featured)
  if (!plan?.featured) return null
  const f = plan.featured

  return (
    <article
      className="relative overflow-clip rounded-[24px] border border-[#7f9cff]/30 bg-[linear-gradient(135deg,#0b1020_0%,#0d1a4a_55%,#1638b8_130%)] px-5 py-7 shadow-[0_30px_80px_-30px_rgb(31_91_255/0.6)] min-[810px]:px-10 min-[810px]:py-10"
    >
      <div aria-hidden className="pointer-events-none absolute -right-24 -top-28 h-80 w-80 rounded-full bg-[#1f5bff]/35 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-[#7f9cff]/15 blur-3xl" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgb(127_156_255/0.07)_1px,transparent_1px),linear-gradient(90deg,rgb(127_156_255/0.07)_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:radial-gradient(ellipse_at_top_right,black,transparent_70%)]"
      />

      <div className="relative grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:gap-12">
        <div className="flex flex-col">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
            <span className="inline-flex rounded-[5px] bg-white/10 px-2 py-[5px] font-serif text-[14px] font-semibold italic tracking-[-0.06em] text-white">
              {plan.badge}
            </span>
            <ZlAiBadge label={f.aiLabel} />
          </div>

          <h3 className="mt-4 font-display text-[2.2rem] font-semibold leading-[1.05em] tracking-[-0.05em] text-white min-[810px]:text-[3rem]">
            {plan.name}
            <span className="mt-1 block text-[#7f9cff] [text-wrap:balance]">{f.tagline}</span>
          </h3>

          <p className="mt-4 flex items-start gap-2 font-sans text-[15px] font-semibold leading-[1.45em] tracking-[-0.02em] text-white min-[810px]:text-[17px]">
            <Spark className="mt-[3px] h-[16px] w-[16px] shrink-0 text-[#7f9cff] drop-shadow-[0_0_6px_#7f9cff]" />
            {f.aiLine}
          </p>

          <p className="mt-3 max-w-[640px] font-sans text-body-sm font-medium leading-[1.6em] text-white/75">{plan.description}</p>

          <ul className="mt-5 flex flex-col gap-3">
            {plan.features.map((feature) => (
              <li key={feature} className="flex items-start gap-3 font-sans text-body-sm font-medium text-white/90">
                <CheckIcon />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-5 rounded-[18px] border border-[#7f9cff]/25 bg-white/[0.04] p-4 shadow-[inset_0_1px_0_rgb(255_255_255/0.06)] backdrop-blur-sm min-[810px]:p-6">
          <ul className="grid grid-cols-2 gap-3">
            {f.facts.map((fact) => (
              <li key={fact.value} className="rounded-[14px] border border-[#7f9cff]/20 bg-white/[0.04] p-3 min-[810px]:p-4">
                <p className="font-display text-[1.9rem] font-semibold leading-[1em] tracking-[-0.05em] text-white min-[810px]:text-[2.4rem]">
                  {fact.value}
                </p>
                <p className="mt-2 font-sans text-[12.5px] font-medium leading-[1.35em] tracking-[-0.01em] text-white/70">{fact.label}</p>
              </li>
            ))}
          </ul>

          <div className="border-t border-white/10 pt-5">
            <p className="font-sans text-[12.5px] font-medium tracking-[-0.01em] text-white/70">{f.priceLabel}</p>
            <p className="mt-1 flex flex-wrap items-baseline gap-x-2 text-white">
              <span className="font-sans text-[14px] font-medium text-white/70">{t.pricing.from}</span>
              <span className="font-display text-[2.2rem] font-semibold leading-[1.05em] tracking-[-0.05em]">{f.price}</span>
            </p>
            <p className="mt-1 font-sans text-[12.5px] font-medium tracking-[-0.01em] text-white/70">{f.priceNote}</p>
          </div>

          <div className="flex flex-col gap-3 min-[810px]:items-center">
            <Link
              href={plan.ctaHref}
              data-tracking="pricing_sprint_primary"
              className="button-secondary max-[809px]:!w-full !border-transparent !px-[22px] !py-[12px] shadow-[0_0_28px_-6px_rgb(127_156_255/0.8)]"
            >
              {plan.cta}
            </Link>
            <Link
              href={plan.secondaryHref}
              data-tracking="pricing_sprint_guide"
              className="text-center font-sans text-[13px] font-medium leading-[1.6em] tracking-[-0.02em] text-white/80 underline transition-opacity hover:opacity-70"
            >
              {plan.secondary}
            </Link>
          </div>
        </div>
      </div>
    </article>
  )
}
