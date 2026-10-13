'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { siteAssets } from '@/lib/site'
import type { Locale } from '@/lib/i18n'
import { ROUTE_PATHS } from '@/lib/i18n/routes'
import type { ZlCopy } from '@/content/zero-loss-migration'
import ZlCta from './ZlCta'

/**
 * Landing nav: logo, IT/EN switch, one CTA. No other links on purpose (one
 * offer, one door). Sticky; compact on mobile.
 */
export default function ZlNav({ locale, copy, page = 'landing' }: { locale: Locale; copy: ZlCopy['nav']; page?: 'landing' | 'apply' }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const langs: { code: Locale; href: string }[] = [
    { code: 'en', href: ROUTE_PATHS[page === 'apply' ? 'zeroLossApply' : 'zeroLossMigration'].en },
    { code: 'it', href: ROUTE_PATHS[page === 'apply' ? 'zeroLossApply' : 'zeroLossMigration'].it },
  ]

  return (
    <header
      className={`sticky top-0 z-50 transition-[background-color,box-shadow] duration-300 ${
        scrolled
          ? 'bg-[rgba(240,240,240,0.85)] shadow-[0_1px_0_rgba(0,0,0,0.06)] backdrop-blur-[20px] [-webkit-backdrop-filter:blur(20px)]'
          : 'bg-[rgba(240,240,240,0.5)] backdrop-blur-[20px] [-webkit-backdrop-filter:blur(20px)]'
      }`}
    >
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-3 px-5 py-2 min-[810px]:px-9">
        <Link href={ROUTE_PATHS.home[locale]} aria-label={copy.logoLabel} className="inline-flex items-center">
          <Image
            src={siteAssets.logoBlack}
            alt="noprob agency"
            width={140}
            height={35}
            priority
            className="h-[28px] w-auto object-contain object-left min-[810px]:h-[35px]"
          />
        </Link>

        <div className="flex items-center gap-2 min-[810px]:gap-3">
          <nav
            aria-label={copy.langSwitchLabel}
            className="inline-flex items-center rounded-pill bg-white p-[3px] shadow-[0_1px_3px_rgba(0,0,0,0.08)]"
          >
            {langs.map((lang) => {
              const active = lang.code === locale
              return (
                <Link
                  key={lang.code}
                  href={lang.href}
                  hrefLang={lang.code}
                  aria-current={active ? 'page' : undefined}
                  className={`rounded-pill px-[10px] py-[4px] font-sans text-[12px] tracking-[-0.03em] transition-colors ${
                    active ? 'bg-np-dark font-semibold text-white' : 'font-medium text-np-grey hover:text-np-dark'
                  }`}
                >
                  {lang.code.toUpperCase()}
                </Link>
              )
            })}
          </nav>

          {page === 'landing' && (
            <ZlCta label={copy.cta} position="nav" className="!px-4 !py-[7px] !text-[14px] min-[810px]:!px-6 min-[810px]:!text-[16px]" />
          )}
        </div>
      </div>
    </header>
  )
}
