import Navbar from '@/components/layout/Navbar'
import ConsentBanner from '@/components/tracking/ConsentBanner'
import StickyContact from '@/components/ui/StickyContact'
import type { Locale } from '@/lib/i18n'

export default function BaseLayout({
  locale,
  children,
}: {
  locale: Locale
  children: React.ReactNode
}) {
  return (
    <>
      <Navbar locale={locale} />
      <ConsentBanner locale={locale} />
      <StickyContact locale={locale} />
      {children}
    </>
  )
}
