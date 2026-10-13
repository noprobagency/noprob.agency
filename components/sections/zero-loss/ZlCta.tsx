'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { cn } from '@/lib/utils'
import { ROUTE_PATHS } from '@/lib/i18n/routes'
import { zlTrack, type ZlCtaPosition } from '@/lib/zero-loss/tracking'

export const ZL_FORM_ID = 'candidatura'
export const ZL_FORM_FIRST_FIELD_ID = 'zl-websiteUrl'

/**
 * "Candidati allo sprint" button. Every CTA of the landing opens the dedicated
 * application page (/it/zero-loss-migration/candidatura, /zero-loss-migration/apply),
 * keeping the query string so utm_* survive even without sessionStorage.
 * Primary CTAs carry the `zl-cta` effect (green glow, dotted halo on hover).
 */
export default function ZlCta({
  label,
  position,
  variant = 'primary',
  className,
}: {
  label: string
  position: ZlCtaPosition
  variant?: 'primary' | 'secondary'
  className?: string
}) {
  const pathname = usePathname() ?? ''
  const locale = pathname.startsWith('/it') ? 'it' : 'en'
  const [query, setQuery] = useState('')
  useEffect(() => setQuery(window.location.search), [])

  return (
    <Link
      href={`${ROUTE_PATHS.zeroLossApply[locale]}${query}`}
      onClick={() => zlTrack({ event: 'cta_click', position })}
      className={cn(variant === 'primary' ? 'button-principal zl-cta' : 'button-secondary', className)}
    >
      {label}
    </Link>
  )
}
