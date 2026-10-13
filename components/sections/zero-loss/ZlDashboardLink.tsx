'use client'

import { ZL_DEMO_DASHBOARD_URL } from '@/content/zero-loss-migration'
import { zlTrack } from '@/lib/zero-loss/tracking'

/**
 * "Guarda la dashboard che ricevi il giorno 1" link ([LINK DEMO]). Opens in
 * a new tab and fires `dashboard_demo_click`. Until the URL is confirmed it
 * renders nothing.
 */
export default function ZlDashboardLink({
  label,
  position,
  className = '',
}: {
  label: string
  position: 'proof' | 'success'
  className?: string
}) {
  if (!ZL_DEMO_DASHBOARD_URL) return null
  return (
    <a
      href={ZL_DEMO_DASHBOARD_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => zlTrack({ event: 'dashboard_demo_click', position })}
      className={`button-secondary ${className}`}
    >
      {label}
    </a>
  )
}
