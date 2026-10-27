'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { getDictionary, type Locale } from '@/lib/i18n'

// Landing pages carry an in-page application form (#candidatura). The floating
// CTA there is page-specific and scrolls to that form. Everywhere else it points
// to the contact page with a generic "request info" label.
const LANDING_LABELS: Record<string, string> = {
  '/it/sviluppo-shopify': 'Candidati per il progetto',
  '/shopify-development': 'Apply for the project',
  '/it/team-ecommerce-dedicato': 'Candidati per il team',
  '/data-driven-team': 'Apply for the team',
  '/it/ai-accelerator': 'Candida la tua azienda',
  '/ai-accelerator': 'Apply with your company',
}

// Pages with their own mobile sticky CTA bar: the floating pill stays
// desktop-only there to avoid overlapping the bar.
const DESKTOP_ONLY_PATHS = ['/it/ai-accelerator', '/ai-accelerator']

export default function StickyContact({ locale: localeProp }: { locale?: Locale } = {}) {
  const [visible, setVisible] = useState(false)
  const pathname = usePathname()
  // Explicit locale from the layout (see Navbar): pathname-derived text would
  // mismatch at hydration on not-found renders.
  const locale: Locale = localeProp ?? (pathname.startsWith('/it') ? 'it' : 'en')
  const t = getDictionary(locale)

  // Don't show on contact pages
  // Also hidden on the AI Accelerator booking step: booking is the only action there.
  const isContactPage =
    pathname === '/contacts' ||
    pathname === '/it/contatti' ||
    pathname === '/ai-accelerator/thank-you' ||
    pathname === '/it/ai-accelerator/grazie' ||
    // Private ambassador playbook: no CTAs by design.
    pathname === '/ambassador' ||
    pathname === '/it/ambassador' ||
    // Migration guide: the Sprint CTA is the action there, a contact pill would compete with it.
    pathname === '/shopify-migration' ||
    pathname === '/it/migrazione-shopify'

  const isLanding = pathname in LANDING_LABELS
  const href = isLanding ? '#candidatura' : t.hero.ctaPrimaryHref
  const label = isLanding
    ? LANDING_LABELS[pathname]
    : locale === 'it'
      ? 'Richiedi informazioni'
      : 'Request information'

  useEffect(() => {
    if (isContactPage) return

    const handleScroll = () => {
      const trigger = document.getElementById('problem')
      let isVisible = true

      if (trigger) {
        isVisible = trigger.getBoundingClientRect().top <= window.innerHeight
      }

      const footer = document.querySelector('footer')
      if (footer && footer.getBoundingClientRect().top <= window.innerHeight) {
        isVisible = false
      }

      setVisible(isVisible)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initial check
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isContactPage])

  if (isContactPage) return null

  return (
    <div
      className={`fixed bottom-6 left-1/2 z-50 -translate-x-1/2 transition-all duration-300 ${
        DESKTOP_ONLY_PATHS.includes(pathname) ? 'hidden min-[810px]:block' : ''
      }`}
      style={{ opacity: visible ? 1 : 0, transform: 'translateX(-50%)', pointerEvents: visible ? 'auto' : 'none' }}
    >
      <Link href={href} className="button-principal whitespace-nowrap">
        <span className="inline-flex items-center gap-2">
          {label}
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#1dcc5d] opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#1dcc5d]" />
          </span>
        </span>
      </Link>
    </div>
  )
}
