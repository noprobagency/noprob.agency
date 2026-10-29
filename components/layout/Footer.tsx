import Image from 'next/image'
import Link from 'next/link'

import { siteConfig, siteAssets } from '@/lib/site'
import { getDictionary, type Locale } from '@/lib/i18n'
import { getBlocchiCopy, type BlockLink } from '@/lib/i18n/blocchi'
import { ROUTE_PATHS } from '@/lib/i18n/routes'
import { articleHref, getArticle } from '@/data/articles/clusters'

function resolveHref(link: BlockLink, locale: Locale): string {
  if (link.route) return ROUTE_PATHS[link.route][locale]
  const article = link.article ? getArticle(link.article) : undefined
  if (!article) throw new Error(`Footer link "${link.label}" points to an unknown article`)
  return articleHref(article, locale)
}

const FOOTER_LINK_CLASS =
  'font-sans text-[16px] font-medium tracking-[-0.04em] text-[#f0f0f0] transition-opacity hover:opacity-70'

function FooterColumn({ heading, children }: { heading: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="font-sans text-[12px] font-semibold uppercase tracking-[0.12em] text-[#7c7c7c]">{heading}</p>
      <ul className="mt-3 flex flex-col gap-2">{children}</ul>
    </div>
  )
}

export default function Footer({
  locale = 'en',
  minimal = false,
  bar = false,
}: {
  locale?: Locale
  /**
   * Standalone landings (Zero-Loss Migration Sprint): no service links, the
   * only exits are the noprob.agency homepage (logo) and the policies.
   */
  minimal?: boolean
  /** Single compact strip (company data + policies), for pages that must fit the viewport. */
  bar?: boolean
}) {
  const t = getDictionary(locale)
  const blocks = getBlocchiCopy(locale).footer
  const logoHref = locale === 'it' ? '/it' : '/'

  const legal = (
    <>
      <div className="font-sans text-[12px] font-medium tracking-[-0.04em] text-[#a9a9a9]">
        <p>NOPROB AGENCY LLC® EIN : 365136989</p>
        <p>30 N Gould St Ste R, Sheridan, Wyoming (WY) 82801, USA</p>
      </div>

      <div className="flex flex-wrap items-center gap-4 text-[12px] font-medium tracking-[-0.04em] text-[#7c7c7c]">
        <Link href={ROUTE_PATHS.privacyPolicy[locale]} className="transition-colors hover:text-[#989898]">
          {t.footer.privacyPolicy}
        </Link>
        <Link href={ROUTE_PATHS.cookiePolicy[locale]} className="transition-colors hover:text-[#989898]">
          {t.footer.cookiePolicy}
        </Link>
        <span className="uppercase tracking-[0.12em] text-[#7c7c7c]">Version {siteConfig.version}</span>
      </div>
    </>
  )

  if (bar) {
    return (
      <footer data-header-theme="dark" className="bg-black px-5 py-4 text-white min-[810px]:px-9">
        <div className="mx-auto flex w-full max-w-[1360px] flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">{legal}</div>
      </footer>
    )
  }

  return (
    <footer data-header-theme="dark" className="flex flex-col items-center gap-12 bg-black px-9 py-10 text-white">
      <div className="flex w-full max-w-[1200px] flex-col gap-12">
        <div className="max-w-[760px]">
          <Link href={logoHref} className="relative inline-flex h-[44px] w-auto items-center">
            <Image
              src={siteAssets.logoWhite}
              alt="noprob agency logo"
              height={44}
              width={176}
              className="h-full w-auto object-contain object-left"
            />
          </Link>

          <div className="mt-4">
            <p className="font-display text-[44px] font-semibold leading-[1.1] tracking-[-0.05em] text-white sm:text-[56px] lg:text-[64px]">
              {t.footer.headingPre.split('\n').map((line, i, arr) => (
                <span key={i} className="block">{i === arr.length - 1 ? <>{line}<span className="font-serif italic font-normal">{t.footer.headingEm}</span></> : <>{line} </>}</span>
              ))}
            </p>
          </div>

          <p className="mt-4 max-w-[547px] font-sans text-[18px] font-semibold tracking-[-0.04em] text-white">
            {t.footer.description}
          </p>
        </div>

        {!minimal && (
        <nav
          aria-label={locale === 'it' ? 'Link del sito' : 'Site links'}
          className="grid max-w-[1000px] grid-cols-2 gap-x-10 gap-y-8 sm:grid-cols-4"
        >
          <FooterColumn heading={blocks.servicesHeading}>
            {blocks.services.map((link) => (
              <li key={link.label}>
                <Link href={resolveHref(link, locale)} className={FOOTER_LINK_CLASS}>
                  {link.label}
                </Link>
              </li>
            ))}
          </FooterColumn>
          <FooterColumn heading={blocks.guidesHeading}>
            {blocks.guides.map((link) => (
              <li key={link.label}>
                <Link href={resolveHref(link, locale)} className={FOOTER_LINK_CLASS}>
                  {link.label}
                </Link>
              </li>
            ))}
          </FooterColumn>
          <FooterColumn heading={t.navbar.learn.label}>
            {[...t.navbar.learn.items, { label: t.navbar.learn.allLabel, href: t.navbar.learn.allHref }].map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={FOOTER_LINK_CLASS}>
                  {link.label}
                </Link>
              </li>
            ))}
          </FooterColumn>
          <FooterColumn heading={blocks.companyHeading}>
            {t.footer.links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  // The ambassador playbook is private (noindex): no link equity to pass.
                  rel={link.href === ROUTE_PATHS.ambassador[locale] ? 'nofollow' : undefined}
                  className={FOOTER_LINK_CLASS}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </FooterColumn>
        </nav>
        )}
      </div>

      <div className="flex w-full max-w-[1200px] flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
        {legal}
      </div>
    </footer>
  )
}
