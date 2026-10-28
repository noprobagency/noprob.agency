import Image from 'next/image'

import { cn } from '@/lib/utils'
import { siteAssets, TRUSTPILOT_URL } from '@/lib/site'
import { getBlocchiCopy } from '@/lib/i18n/blocchi'
import type { Locale } from '@/lib/i18n'

/**
 * "10 five-star reviews on Trustpilot", linked to the public profile
 * (external link, opens in a new tab). Wording in `lib/i18n/blocchi.ts`.
 * `siteAssets.trustpilotWordmark` is the five green stars SVG.
 */
export default function TrustpilotBadge({ locale = 'en', className }: { locale?: Locale; className?: string }) {
  const copy = getBlocchiCopy(locale).trustpilot

  return (
    <a
      href={TRUSTPILOT_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={copy.linkLabel}
      data-tracking="trustpilot_badge"
      className={cn(
        'inline-flex w-fit items-center gap-2 rounded-pill border border-[#d6d6d6] bg-white px-3 py-[6px] no-underline transition-opacity hover:opacity-80',
        className
      )}
    >
      <Image
        src={siteAssets.trustpilotWordmark}
        alt=""
        width={85}
        height={16}
        className="h-4 w-auto object-contain"
      />
      <span className="font-sans text-[13px] font-semibold tracking-[-0.03em] text-np-green-trust">{copy.label}</span>
    </a>
  )
}
