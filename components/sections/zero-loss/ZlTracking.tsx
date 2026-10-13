'use client'

import { useEffect } from 'react'

import type { Locale } from '@/lib/i18n'
import { captureUtm, zlTrack } from '@/lib/zero-loss/tracking'

/**
 * Fires `lp_view` (landing) or `form_view` (application page) once per page
 * load and stores utm_* for the form payload.
 */
export default function ZlTracking({ locale, page = 'landing' }: { locale: Locale; page?: 'landing' | 'apply' }) {
  useEffect(() => {
    captureUtm()
    if (page === 'apply') zlTrack({ event: 'form_view', locale })
    else zlTrack({ event: 'lp_view', page: 'zero-loss-migration', locale })
  }, [locale, page])

  return null
}
