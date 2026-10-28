import type { Metadata } from 'next'

import ContactsHero from '@/components/sections/ContactsHero'
import ContactSection from '@/components/sections/ContactSection'
import Footer from '@/components/layout/Footer'
import { StructuredData } from '@/components/blog/StructuredData'
import { buildMetadata } from '@/lib/site'
import { pageBreadcrumbJsonLd } from '@/lib/seo/breadcrumbs'

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata({ path: '/contacts', locale: 'en', pageKey: 'contacts' })
}

export default function ContactsPage() {
  return (
    <main>
      <StructuredData schemas={[pageBreadcrumbJsonLd('contacts', 'en')]} />
      <ContactsHero />
      <ContactSection />
      <Footer />
    </main>
  )
}
