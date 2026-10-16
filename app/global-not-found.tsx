import type { Metadata, Viewport } from 'next'

import NotFoundLocale from '@/components/sections/NotFoundLocale'
import NotFoundSection from '@/components/sections/NotFoundSection'
import { siteConfig } from '@/lib/site'
import '@/app/globals.css'

/**
 * Global 404 for unmatched URLs (next.config `experimental.globalNotFound`).
 * The app has several root layouts (route groups), so this file renders its
 * own document; the locale (IT under /it, EN elsewhere) is chosen on the
 * client by NotFoundLocale after mount (the server renders EN: on a 404 the
 * server-side pathname is not the requested URL, so a pathname-based choice
 * would break hydration). Explicit notFound() calls inside a layout (blog,
 * case studies) still use app/(en)/not-found.tsx and app/it/not-found.tsx.
 */
export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? siteConfig.url),
  title: 'Page not found | noprob agency™',
  robots: { index: false, follow: false },
  icons: {
    icon: [
      { url: '/images/favicon-no-prob.svg', media: '(prefers-color-scheme: light)' },
      { url: '/images/favicon-no-prob-white.svg', media: '(prefers-color-scheme: dark)' },
    ],
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#f0f0f0',
}

export default function GlobalNotFound() {
  return (
    <html lang="en">
      <body className="bg-np-bg text-np-text font-sans antialiased overflow-x-hidden">
        <NotFoundLocale it={<NotFoundSection locale="it" />} en={<NotFoundSection locale="en" />} />
      </body>
    </html>
  )
}
