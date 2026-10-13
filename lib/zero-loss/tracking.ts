import type { Locale } from '@/lib/i18n'

/**
 * dataLayer events for the Zero-Loss Migration Sprint landing.
 * Reuses the GA4 (gtag) + Meta Pixel scripts already installed by
 * AnalyticsProvider: no new script tags. Every event is pushed to
 * `window.dataLayer` (created by the gtag bootstrap) and mirrored to GA4 via
 * `gtag('event', ...)` so it shows up in DebugView without a GTM container.
 */
export type ZlEvent =
  | { event: 'lp_view'; page: 'zero-loss-migration'; locale: Locale }
  | { event: 'form_view'; locale: Locale }
  | { event: 'cta_click'; position: ZlCtaPosition }
  | { event: 'checklist_change'; checked_count: number }
  | { event: 'form_start'; locale: Locale }
  | { event: 'form_step'; step: 1 | 2 | 3 | 4 }
  | { event: 'form_disqualified'; reason: 'shopify' | 'revenue_under_300k' }
  | {
      event: 'form_submit'
      tier: number
      estimated_price: number
      platform: string
      revenue_band: string
      start_timing: string
    }
  | { event: 'dashboard_demo_click'; position: 'proof' | 'success' }

export type ZlCtaPosition = 'nav' | 'hero' | 'overview' | 'checklist' | 'whynow' | 'faq' | 'final'

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[]
  }
}

export function zlTrack(payload: ZlEvent) {
  if (typeof window === 'undefined') return
  const { event, ...params } = payload
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({ event, ...params, lp: 'zero-loss-migration' })
  if (typeof window.gtag === 'function') {
    window.gtag('event', event, { ...params, lp: 'zero-loss-migration' })
  }
}

export const ZL_UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'] as const
export type ZlUtm = Partial<Record<(typeof ZL_UTM_KEYS)[number], string>>

const UTM_STORAGE_KEY = 'zl_utm'

/** Read utm_* from the current URL, persist them for the session, return the merged set. */
export function captureUtm(): ZlUtm {
  if (typeof window === 'undefined') return {}
  let stored: ZlUtm = {}
  try {
    stored = JSON.parse(window.sessionStorage.getItem(UTM_STORAGE_KEY) ?? '{}') as ZlUtm
  } catch {
    stored = {}
  }
  const params = new URLSearchParams(window.location.search)
  const fresh: ZlUtm = {}
  for (const key of ZL_UTM_KEYS) {
    const value = params.get(key)
    if (value) fresh[key] = value.slice(0, 200)
  }
  const merged = Object.keys(fresh).length > 0 ? fresh : stored
  try {
    window.sessionStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(merged))
  } catch {
    // Storage unavailable (private mode): the in-memory value is still returned.
  }
  return merged
}

export function readUtm(): ZlUtm {
  if (typeof window === 'undefined') return {}
  try {
    return JSON.parse(window.sessionStorage.getItem(UTM_STORAGE_KEY) ?? '{}') as ZlUtm
  } catch {
    return {}
  }
}
