import Link from 'next/link'

import { ZapIcon } from '@/components/sections/ai/PowerLayer'
import { ROUTE_PATHS } from '@/lib/i18n/routes'
import { type Locale } from '@/lib/i18n'
import { getAiCopy } from '@/lib/i18n/aiAccelerator'

/**
 * Link card to the AI Accelerator landing, under the three pricing plans on the
 * home pages (rendered inside the Pricing section). Leads with the visitor's
 * situation (an eCommerce that wants to grow but does not know where to start),
 * the product name stays in the eyebrow.
 */
export default function AiServiceCard({ locale = 'it' }: { locale?: Locale }) {
  const d = getAiCopy(locale)
  const c = d.homeCard
  const href = ROUTE_PATHS.aiAccelerator[locale]

  return (
    <div className="ai-scope mt-3">
      <div className="w-full">
        <Link
          href={href}
          data-tracking="home_ai_accelerator_card"
          className="border-card-thick shadow-card flex flex-col items-start gap-3 rounded-card bg-noprob-card p-6 transition-transform hover:-translate-y-[2px] min-[810px]:flex-row min-[810px]:items-center min-[810px]:justify-between min-[810px]:p-8"
        >
          <div className="flex flex-col gap-2">
            <span className="inline-flex items-center gap-2 font-sans text-[13px] font-semibold tracking-[-0.02em] text-[color:var(--ai-accent-text)]">
              <ZapIcon size={14} />
              {c.eyebrow}
            </span>
            <span className="font-display text-[22px] font-semibold leading-[1.2em] tracking-[-0.04em] text-np-dark min-[810px]:text-[28px]">
              {c.title}
            </span>
            <span className="max-w-[640px] font-sans text-body-sm font-medium text-noprob-text">{c.subtitle}</span>
          </div>
          <span className="button-principal ai-cta shrink-0">{c.cta}</span>
        </Link>
      </div>
    </div>
  )
}
