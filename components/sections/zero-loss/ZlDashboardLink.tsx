'use client'

import type { Locale } from '@/lib/i18n'
import { ZL_DEMO_DASHBOARD_URL } from '@/content/zero-loss-migration'
import { zlTrack } from '@/lib/zero-loss/tracking'

/**
 * "Guarda la dashboard che ricevi il giorno 1" link ([LINK DEMO]). Opens in
 * a new tab and fires `dashboard_demo_click`.
 */
export default function ZlDashboardLink({
  label,
  position,
  className = '',
  locale = 'it',
}: {
  label: string
  position: 'proof' | 'success'
  className?: string
  locale?: Locale
}) {
  const url = locale === 'en' ? '/demo-dashboard' : ZL_DEMO_DASHBOARD_URL ?? '/it/demo-dashboard'
  if (!url) return null
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => zlTrack({ event: 'dashboard_demo_click', position })}
      className={`button-secondary ${className}`}
    >
      {label}
    </a>
  )
}
