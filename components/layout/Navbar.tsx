'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { cn } from '@/lib/utils'
import { getDictionary, type Locale } from '@/lib/i18n'
import { ROUTE_PATHS, getAlternateLocalePath } from '@/lib/i18n/routes'
import { colors, dropdown } from '@/lib/design-tokens'
import { siteAssets } from '@/lib/site'
import { getAiCopy } from '@/lib/i18n/aiAccelerator'
import { ZapIcon } from '@/components/sections/ai/PowerLayer'

function getLocale(pathname: string): Locale {
  return pathname.startsWith('/it') ? 'it' : 'en'
}

function getAlternateHref(pathname: string): string {
  return getAlternateLocalePath(pathname, getLocale(pathname))
}

function ChevronDown({ size = 14, color = colors.textDark }: { size?: number; color?: string }) {
  return (
    <svg
      viewBox="0 0 256 256"
      width={size}
      height={size}
      aria-hidden="true"
      focusable="false"
      className="shrink-0"
    >
      <path
        fill={color}
        d="m213.66 101.66-80 80a8 8 0 0 1-11.32 0l-80-80a8 8 0 0 1 11.32-11.32L128 164.69l74.34-74.35a8 8 0 0 1 11.32 11.32Z"
      />
    </svg>
  )
}


function Logo({ href, size = '35px' }: { href: string; size?: string }) {
  return (
    <Link
      href={href}
      aria-label="noprob agency, torna alla home"
      className="inline-flex items-center"
    >
      <div className="relative" style={{ height: size }}>
        <Image
          src={siteAssets.logoBlack}
          alt="noprob agency logo"
          height={parseInt(size)}
          width={parseInt(size) * 4}
          className="h-full w-auto object-contain object-left"
          priority
        />
      </div>
    </Link>
  )
}

export function ServicesDropdown({
  locale = 'en',
  theme = 'light',
  direction = 'down',
  className
}: {
  locale?: Locale
  theme?: 'light' | 'dark'
  direction?: 'up' | 'down'
  className?: string
}) {
  const t = getDictionary(locale)
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const closeTimeoutRef = useRef<number | null>(null)

  const clearCloseTimeout = () => {
    if (closeTimeoutRef.current !== null) {
      window.clearTimeout(closeTimeoutRef.current)
      closeTimeoutRef.current = null
    }
  }

  const openDropdown = () => {
    clearCloseTimeout()
    setOpen(true)
  }

  const scheduleClose = () => {
    clearCloseTimeout()
    closeTimeoutRef.current = window.setTimeout(() => {
      setOpen(false)
      closeTimeoutRef.current = null
    }, 140)
  }

  useEffect(() => {
    const handleMouseDown = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }

    document.addEventListener('mousedown', handleMouseDown)

    return () => {
      document.removeEventListener('mousedown', handleMouseDown)
      clearCloseTimeout()
    }
  }, [])

  return (
    <div
      ref={ref}
      className={`relative ${direction === 'down' ? "after:top-full" : "after:bottom-full"} after:absolute after:left-0 after:h-2 after:w-[220px] after:content-['']`}
      onMouseEnter={() => {
        if (typeof window !== 'undefined' && window.matchMedia('(hover: hover)').matches) {
          openDropdown()
        }
      }}
      onMouseLeave={() => {
        if (typeof window !== 'undefined' && window.matchMedia('(hover: hover)').matches) {
          scheduleClose()
        }
      }}
    >
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => {
          clearCloseTimeout()
          setOpen((current) => !current)
        }}
        className={cn(
          "inline-flex items-center gap-1 whitespace-nowrap rounded-[8px] px-[14px] py-2 font-sans overflow-hidden text-[16px] font-normal tracking-[-0.04em] transition-colors",
          theme === 'dark' ? 'text-[#f0f0f0] hover:bg-white/10' : 'text-np-dark hover:bg-black/5',
          className
        )}
        style={theme === 'light' ? { backgroundColor: open ? dropdown.itemHoverBg : 'transparent' } : {}}
      >
        <span>{t.navbar.services}</span>
        <span
          className="transition-transform duration-150"
          style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}
        >
          <ChevronDown size={14} color={theme === 'dark' ? '#f0f0f0' : 'currentColor'} />
        </span>
      </button>

      {open ? (
        <div
          role="menu"
          aria-label="Servizi"
          className={`absolute left-0 z-[100] border ${theme === 'dark' ? 'border-white/10 bg-black' : 'border-black/5 bg-white'}`}
          style={{
            ...(direction === 'down' ? { top: `calc(100% + ${dropdown.gap})` } : { bottom: `calc(100% + ${dropdown.gap})` }),
            borderRadius: dropdown.radius,
            padding: dropdown.padding,
            minWidth: dropdown.minWidth,
            boxShadow: dropdown.shadow,
          }}
          onMouseEnter={() => {
            if (typeof window !== 'undefined' && window.matchMedia('(hover: hover)').matches) {
              openDropdown()
            }
          }}
          onMouseLeave={() => {
            if (typeof window !== 'undefined' && window.matchMedia('(hover: hover)').matches) {
              scheduleClose()
            }
          }}
        >
          {t.navbar.serviceItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              role="menuitem"
              onClick={() => setOpen(false)}
              className={`block whitespace-nowrap rounded-[8px] px-4 py-[10px] font-sans text-[16px] font-normal tracking-[-0.03em] transition-colors ${theme === 'dark' ? 'text-white hover:bg-white/10' : 'text-np-text hover:bg-black/5'
                }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      ) : null}
    </div>
  )
}

function LangDropdown({ locale, pathname }: { locale: Locale; pathname: string }) {
  const t = getDictionary(locale)
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const closeTimeoutRef = useRef<number | null>(null)

  const clearCloseTimeout = () => {
    if (closeTimeoutRef.current !== null) {
      window.clearTimeout(closeTimeoutRef.current)
      closeTimeoutRef.current = null
    }
  }

  const openDropdown = () => {
    clearCloseTimeout()
    setOpen(true)
  }

  const scheduleClose = () => {
    clearCloseTimeout()
    closeTimeoutRef.current = window.setTimeout(() => {
      setOpen(false)
      closeTimeoutRef.current = null
    }, 140)
  }

  useEffect(() => {
    const handleMouseDown = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleMouseDown)
    return () => {
      document.removeEventListener('mousedown', handleMouseDown)
      clearCloseTimeout()
    }
  }, [])

  const alternateHref = getAlternateHref(pathname)
  const langs = [
    { display: 'EN', href: locale === 'it' ? alternateHref : pathname, active: locale === 'en' },
    { display: 'IT', href: locale === 'en' ? alternateHref : pathname, active: locale === 'it' },
  ]

  return (
    <div
      ref={ref}
      className="np-nav-desktop relative after:absolute after:top-full after:left-0 after:h-6 after:w-full after:content-['']"
      onMouseEnter={() => {
        if (typeof window !== 'undefined' && window.matchMedia('(hover: hover)').matches) {
          openDropdown()
        }
      }}
      onMouseLeave={() => {
        if (typeof window !== 'undefined' && window.matchMedia('(hover: hover)').matches) {
          scheduleClose()
        }
      }}
    >
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label={t.navbar.langSwitcher.label}
        onClick={() => {
          clearCloseTimeout()
          setOpen((current) => !current)
        }}
        className="inline-flex items-center gap-1 rounded-pill bg-white px-[10px] py-[6px] font-sans text-[12px] font-medium tracking-[-0.04em] text-np-text shadow-[0_1px_3px_rgba(0,0,0,0.08)] transition-all duration-300"
      >
        <span>{t.navbar.langSwitcher.display}</span>
        <span
          className="transition-transform duration-150"
          style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}
        >
          <ChevronDown size={11} color={colors.textPrimary} />
        </span>
      </button>

      {open ? (
        <div
          role="menu"
          aria-label="Seleziona lingua"
          className="absolute left-0 z-[100] border border-black/5 bg-white"
          style={{
            top: 'calc(100% + 22px)',
            borderRadius: dropdown.radius,
            padding: dropdown.padding,
            minWidth: 'max-content',
            boxShadow: dropdown.shadow,
          }}
          onMouseEnter={() => {
            if (typeof window !== 'undefined' && window.matchMedia('(hover: hover)').matches) {
              openDropdown()
            }
          }}
          onMouseLeave={() => {
            if (typeof window !== 'undefined' && window.matchMedia('(hover: hover)').matches) {
              scheduleClose()
            }
          }}
        >
          <div className="flex flex-col gap-[5px]">
            {langs.map((lang) => (
              <Link
                key={lang.display}
                href={lang.href}
                role="menuitem"
                onClick={() => setOpen(false)}
                className={`block whitespace-nowrap rounded-[8px] px-[10px] py-[5px] font-sans text-[12px] tracking-[-0.03em] transition-colors hover:bg-black/5 ${lang.active ? 'font-semibold text-np-dark bg-black/[0.03]' : 'font-normal text-np-text'}`}
              >
                {lang.display}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  )
}

/**
 * "Sprint" first-level nav item (same label in IT/EN): green lightning icon,
 * links to the Shopify Launch Sprint landing.
 */
function SprintNavItem({ locale, onClick, className }: { locale: Locale; onClick?: () => void; className?: string }) {
  return (
    <Link
      href={ROUTE_PATHS.zeroLossMigration[locale]}
      onClick={onClick}
      className={cn(
        'inline-flex items-center gap-1.5 whitespace-nowrap rounded-[8px] px-[14px] py-2 font-sans text-[16px] font-normal leading-[120%] tracking-[-0.04em] text-np-dark transition-colors hover:bg-black/5',
        className
      )}
    >
      <ZapIcon size={14} className="shrink-0 fill-[#1dcc5d] text-[#1dcc5d] drop-shadow-[0_0_4px_rgba(29,204,93,0.6)]" />
      <span>Sprint</span>
    </Link>
  )
}


export default function Navbar({ locale: localeProp }: { locale?: Locale } = {}) {
  const pathname = usePathname()
  // The layout passes its locale: on not-found renders the server pathname is
  // not the client one, and deriving the locale from it breaks hydration.
  const locale = localeProp ?? getLocale(pathname)
  const t = getDictionary(locale)

  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [isOverDark, setIsOverDark] = useState(false)

  const alternateHref = getAlternateHref(pathname)
  const logoHref = ROUTE_PATHS.home[locale]
  const isAiPage = pathname === ROUTE_PATHS.aiAccelerator[locale]
  // On the AI Accelerator landing the header CTA drives to the in-page form,
  // with the landing's own label ("call"-free in Italian).
  const contactsHref = isAiPage ? '#candidatura' : ROUTE_PATHS.contacts[locale]
  const reserveLabel = isAiPage ? getAiCopy(locale).hero.cta : t.navbar.reserveCta


  useEffect(() => {
    const checkScroll = () => {
      const darkSections = document.querySelectorAll('[data-header-theme="dark"]')
      const headerHeight = 60

      let isIntersecting = false
      darkSections.forEach((section) => {
        const rect = section.getBoundingClientRect()
        if (rect.top <= headerHeight && rect.bottom >= 0) {
          isIntersecting = true
        }
      })

      setIsOverDark(isIntersecting)
    }

    window.addEventListener('scroll', checkScroll)
    checkScroll()

    return () => window.removeEventListener('scroll', checkScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileOpen(false)
      }
    }

    document.addEventListener('keydown', handleEscape)

    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [])

  return (
    <>
      <header
        className={[
          'fixed inset-x-0 top-0 z-50 transition-colors duration-300',
          isOverDark ? 'bg-white' : 'bg-[rgba(240,240,240,0.5)] backdrop-blur-[20px] [-webkit-backdrop-filter:blur(20px)]',
        ].join(' ')}
      >
        <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-6 px-6 py-2 min-[810px]:px-9">
          <Logo href={logoHref} />

          <nav
            aria-label="Navigazione principale"
            className="np-nav-desktop items-center gap-0"
          >
            <ServicesDropdown locale={locale} />
            {t.navbar.navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="inline-flex items-center gap-1 whitespace-nowrap rounded-[8px] px-[14px] py-2 font-sans text-[16px] font-normal leading-[120%] tracking-[-0.04em] text-np-dark transition-colors hover:bg-black/5"
              >
                {link.label}
              </Link>
            ))}
            <SprintNavItem locale={locale} />
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            <LangDropdown locale={locale} pathname={pathname} />

            <Link
              href={contactsHref}
              className="np-nav-desktop button-principal"
            >
              {reserveLabel}
            </Link>

            <button
              type="button"
              aria-label={mobileOpen ? 'Chiudi menu di navigazione' : 'Apri menu di navigazione'}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              onClick={() => setMobileOpen((v) => !v)}
              className="np-nav-mobile items-center justify-center rounded-[50px] bg-white font-sans text-[14px] font-medium tracking-[-0.04em] text-black transition-colors"
              style={{ border: isOverDark ? '1px solid black' : '1px solid transparent', backdropFilter: 'blur(5px)', fontFeatureSettings: '"salt","kern","cv05","cv11","ccmp"' }}
            >
              {mobileOpen ? t.navbar.menuClose : t.navbar.menuOpen}
            </button>
          </div>
        </div>

        {/* Electric bottom border, only while browsing the AI Accelerator page */}
        {isAiPage && <span aria-hidden="true" className="ai-header-line" />}
      </header>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-label="Menu di navigazione mobile"
        aria-modal="true"
        aria-hidden={!mobileOpen}
        className={[
          'fixed inset-x-0 top-[50px] z-[40] min-[810px]:hidden transition-all duration-300 ease-out pt-6 pb-6',
          isOverDark
            ? 'bg-white'
            : 'bg-[rgba(240,240,240,0.5)] backdrop-blur-[20px] [-webkit-backdrop-filter:blur(20px)]',
          mobileOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none',
        ].join(' ')}
      >
        {/* Nav links */}
        <nav aria-label="Navigazione mobile" className="px-6">
          {/* Services accordion */}
          <button
            type="button"
            onClick={() => setMobileServicesOpen((v) => !v)}
            className="flex w-full items-center justify-between py-2 font-sans text-[16px] font-medium tracking-[-0.04em] text-np-text"
          >
            <span>{t.navbar.services}</span>
            <span className="transition-transform duration-200" style={{ transform: mobileServicesOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
              <ChevronDown size={18} />
            </span>
          </button>

          {mobileServicesOpen && (
            <div className="pl-3 pb-1">
              {t.navbar.serviceItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => { setMobileOpen(false); setMobileServicesOpen(false) }}
                  className="block py-1.5 font-sans text-[15px] font-medium tracking-[-0.04em] text-np-text"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          )}

          {t.navbar.navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-2 font-sans text-[16px] font-medium tracking-[-0.04em] text-np-text"
            >
              {link.label}
            </Link>
          ))}
          <SprintNavItem
            locale={locale}
            onClick={() => setMobileOpen(false)}
            className="w-full !px-0 py-2 text-[16px] font-medium text-np-text hover:bg-transparent"
          />
        </nav>

        {/* Language + bottom padding */}
        <div className="px-6 py-4 flex items-center gap-2">
          {[
            { display: 'EN', href: locale === 'it' ? alternateHref : pathname, active: locale === 'en' },
            { display: 'IT', href: locale === 'en' ? alternateHref : pathname, active: locale === 'it' },
          ].map((lang) => (
            <Link
              key={lang.display}
              href={lang.href}
              onClick={() => setMobileOpen(false)}
              className={`inline-flex items-center gap-1.5 rounded-pill bg-white px-3 py-[5px] font-sans text-[13px] tracking-[-0.04em] text-np-text shadow-[0_1px_3px_rgba(0,0,0,0.08)] ${lang.active ? 'font-semibold' : 'font-medium opacity-50'}`}
            >
              {lang.display}
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}
