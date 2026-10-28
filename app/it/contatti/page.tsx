import type { Metadata } from 'next'

import ContactsHero from '@/components/sections/ContactsHero'
import ContactSection from '@/components/sections/ContactSection'
import Footer from '@/components/layout/Footer'
import { StructuredData } from '@/components/blog/StructuredData'
import { buildMetadata } from '@/lib/site'
import { pageBreadcrumbJsonLd } from '@/lib/seo/breadcrumbs'

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata({ path: '/it/contatti', locale: 'it', pageKey: 'contacts' })
}

export default function ItalianContactsPage() {
  return (
    <main>
      <StructuredData schemas={[pageBreadcrumbJsonLd('contacts', 'it')]} />
      <ContactsHero locale="it" />
      <ContactSection successRedirect="/it/grazie" locale="it" />
      <Footer locale="it" />
    </main>
  )
}
