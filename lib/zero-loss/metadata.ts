import type { Metadata, Viewport } from 'next'

import type { Locale } from '@/lib/i18n'
import { ROUTE_PATHS } from '@/lib/i18n/routes'
import { buildMetadata } from '@/lib/site'
import { getZeroLossCopy } from '@/content/zero-loss-migration'

/** The landing is public and indexable since 13 Oct 2026 (it is in the sitemap too). */
export const ZL_INDEXABLE = true

export const zeroLossViewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#f0f0f0',
}

export function buildZeroLossMetadata(locale: Locale): Metadata {
  const copy = getZeroLossCopy(locale)
  const base = buildMetadata({
    locale,
    path: ROUTE_PATHS.zeroLossMigration[locale],
    title: copy.meta.title,
    description: copy.meta.description,
    noIndex: !ZL_INDEXABLE,
    image: `/images/og-shopify-migration-sprint-${locale}.png`,
    imageAlt: copy.meta.ogAlt,
  })
  return {
    ...base,
    // The full title is set in the copy: avoid the root "%s | noprob agency™" template.
    title: { absolute: copy.meta.title },
    icons: {
      icon: [
        { url: '/images/favicon-no-prob.svg', media: '(prefers-color-scheme: light)' },
        { url: '/images/favicon-no-prob-white.svg', media: '(prefers-color-scheme: dark)' },
      ],
    },
  }
}

/** Confirmation page after the application: always noindex, never in the sitemap. */
export function buildZeroLossThankYouMetadata(locale: Locale): Metadata {
  const copy = getZeroLossCopy(locale)
  const base = buildMetadata({
    locale,
    path: ROUTE_PATHS.zeroLossThankYou[locale],
    title: copy.thankYou.metaTitle,
    description: copy.apply.metaDescription,
    noIndex: true,
    image: `/images/og-shopify-migration-sprint-${locale}.png`,
    imageAlt: copy.meta.ogAlt,
  })
  return { ...base, title: { absolute: copy.thankYou.metaTitle } }
}

/** Application page: always noindex, never in the sitemap. */
export function buildZeroLossApplyMetadata(locale: Locale): Metadata {
  const copy = getZeroLossCopy(locale)
  const base = buildMetadata({
    locale,
    path: ROUTE_PATHS.zeroLossApply[locale],
    title: copy.apply.metaTitle,
    description: copy.apply.metaDescription,
    noIndex: true,
    image: `/images/og-shopify-migration-sprint-${locale}.png`,
    imageAlt: copy.meta.ogAlt,
  })
  return { ...base, title: { absolute: copy.apply.metaTitle } }
}
