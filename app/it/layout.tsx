import type { Metadata, Viewport } from 'next'
import BaseLayout from '@/components/layout/BaseLayout'
import { AnalyticsProvider } from '@/components/analytics/AnalyticsProvider'
import { siteConfig, organizationJsonLd } from '@/lib/site'
import '@/app/globals.css'
import 'vanilla-cookieconsent/dist/cookieconsent.css'

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? siteConfig.url),
  title: {
    default: 'Agenzia Shopify per Brand eCommerce Fashion e DTC | NoProb',
    template: '%s | noprob agency™',
  },
  description:
    'Partner tecnico Shopify per brand fashion, integratori e DTC. Sviluppo, migrazione e gestione eCommerce con un team dedicato a lungo termine.',
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
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

export default function ItalianLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it">
      <body className="bg-np-bg text-np-text font-sans antialiased overflow-x-hidden">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <BaseLayout locale="it">
          {children}
        </BaseLayout>
        <AnalyticsProvider />
      </body>
    </html>
  )
}
