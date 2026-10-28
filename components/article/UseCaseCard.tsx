import Image from 'next/image'
import Link from 'next/link'

import type { UseCase } from '@/data/use-cases'
import type { Locale } from '@/lib/i18n'

type Props = {
  useCase: UseCase
  href: string
  locale: Locale
  caseTypeLabel: string
  /**
   * Brand name as visible text (H2) on the card, used by the case study index
   * (the logo alone gives crawlers no text). Omitted on the home marquee.
   */
  brand?: string
}

/**
 * Renders a single use-case card on the archive listing.
 * - When `useCase.archive` is set, renders the styled overlay card (image +
 *   brand logo + metric pills) used on the homepage marquee.
 * - Otherwise, falls back to the plain title + excerpt card.
 */
export default function UseCaseCard({ useCase, href, locale, caseTypeLabel, brand }: Props) {
  const title = locale === 'en' ? (useCase.titleEn ?? useCase.title) : useCase.title
  const excerpt = locale === 'en' ? (useCase.excerptEn ?? useCase.excerpt) : useCase.excerpt

  if (useCase.archive) {
    const metrics = useCase.archive.metrics[locale]
    return (
      <Link
        href={href}
        aria-label={title}
        className={`group relative block overflow-hidden rounded-card-lg border-2 border-noprob-border bg-noprob-card-off no-underline ${
          brand ? 'h-[360px] min-[810px]:h-[420px]' : 'h-[320px] min-[810px]:h-[380px]'
        }`}
      >
        <Image
          src={useCase.archive.image}
          alt=""
          fill
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          aria-hidden
        />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0)_24.09%,#f9f9f9_70.74%)]" />
        <Image
          src="/images/originals/UKOEHbiYnbExoWnbKlr4yrGf8.svg"
          alt=""
          fill
          className="block h-full w-full object-cover object-center rounded-[inherit] opacity-[0.18]"
          aria-hidden
        />

        {/* Case type pill (top-left) */}
        <div
          className="absolute left-4 top-4 z-[2] flex items-center rounded-full px-3 py-1"
          style={{ backdropFilter: 'blur(24px)', backgroundColor: '#f0f0f0' }}
        >
          <span className="font-sans text-[12px] font-medium tracking-[-0.03em] text-[#181818]">
            {caseTypeLabel}
          </span>
        </div>

        {/* Logo + metric pills (bottom) */}
        <div className="absolute bottom-0 left-1/2 z-[2] flex w-full -translate-x-1/2 flex-col items-center justify-center gap-3 px-5 py-8">
          <Image
            src={useCase.archive.logo}
            alt={title}
            width={140}
            height={30}
            className={useCase.archive.logoClass ?? 'h-[30px] w-[140px] object-contain'}
          />
          {brand ? (
            <h2 className="text-center font-sans text-[20px] font-semibold leading-[1.2em] tracking-[-0.03em] text-np-dark">
              {brand}
            </h2>
          ) : null}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {metrics.map((metric) => (
              <span
                key={metric}
                className="relative flex flex-none items-center justify-center rounded-xl border border-noprob-border-dk bg-noprob-dark px-3 py-2 font-sans text-[12px] font-medium leading-[1.2em] tracking-[-0.04em] text-[#f0f0f0] whitespace-pre"
              >
                {metric}
              </span>
            ))}
          </div>
        </div>
      </Link>
    )
  }

  // Fallback: plain card (image + title + excerpt below)
  return (
    <Link
      href={href}
      className="group flex flex-col overflow-hidden rounded-[24px] bg-white no-underline"
      style={{
        border: '6px solid #f8f8f8',
        boxShadow:
          'rgba(108, 113, 128, 0.08) 0px 2px 4px 0px, rgba(108, 113, 128, 0.07) 0px 7px 7px 0px, rgba(108, 113, 128, 0.04) 0px 17px 10px 0px, rgba(108, 113, 128, 0.01) 0px 29px 12px 0px, rgba(108, 113, 128, 0) 0px 46px 13px 0px',
      }}
    >
      <div
        className="relative w-full overflow-hidden rounded-[16px_16px_0_0]"
        style={{
          mask: 'linear-gradient(0deg, rgba(0,0,0,0) 0%, rgb(0,0,0) 35%, rgb(0,0,0) 100%)',
          WebkitMask: 'linear-gradient(0deg, rgba(0,0,0,0) 0%, rgb(0,0,0) 35%, rgb(0,0,0) 100%)',
        }}
      >
        <div className="relative w-full" style={{ aspectRatio: '4/3' }}>
          <Image
            src={useCase.image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          />
        </div>
        <div
          className="absolute left-4 top-4 flex items-center rounded-full px-3 py-1"
          style={{ backdropFilter: 'blur(24px)', backgroundColor: '#f0f0f0' }}
        >
          <span className="font-sans text-[12px] font-medium tracking-[-0.03em] text-[#181818]">
            {caseTypeLabel}
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-2 p-5">
        <h2
          className="font-sans font-semibold leading-[1.3em] tracking-[-0.02em] text-black"
          style={{
            fontSize: 'clamp(14.4px, 1.13rem, 18px)',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {title}
        </h2>
        <p
          className="font-sans text-[14px] font-medium leading-[1.4em] tracking-[-0.02em]"
          style={{ color: '#7c7c7c' }}
        >
          {excerpt}
        </p>
      </div>
    </Link>
  )
}
