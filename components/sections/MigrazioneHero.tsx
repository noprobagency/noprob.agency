import Image from 'next/image'
import Link from 'next/link'

import PartnerLogos from '@/components/ui/PartnerLogos'
import { type Locale } from '@/lib/i18n'
import { getMigrazioneCopy } from '@/lib/i18n/migrazione'
import { ROUTE_PATHS } from '@/lib/i18n/routes'

export default function MigrazioneHero({ locale = 'it' }: { locale?: Locale }) {
  const d = getMigrazioneCopy(locale).hero

  return (
    <section className="flex flex-col items-center overflow-hidden px-5 pt-[65px] pb-[32px] min-[810px]:px-[34px] min-[810px]:pt-[100px] min-[810px]:pb-[30px]">
      <div
        className="relative flex w-full flex-col items-center gap-[21px] overflow-visible rounded-card border-2 border-[#d6d6d6] px-6 pb-6 pt-10 backdrop-blur-[5px] min-[810px]:max-w-[1200px]"
        style={{
          background: 'linear-gradient(rgb(240, 240, 240) 44%, rgba(91, 191, 71, 0.26) 100%)',
        }}
      >
        {/* Background icons */}
        <div
          className="pointer-events-none absolute top-[75%] -translate-y-1/2 rotate-[20deg] left-[15px] min-[810px]:left-[300px]"
          style={{ zIndex: 0 }}
        >
          <Image
            src="/images/originals/shopify-icon.svg"
            alt=""
            width={150}
            height={150}
            aria-hidden
            className="opacity-60 blur-[6px] w-[90px] h-[90px] min-[810px]:w-[80px] min-[810px]:h-[80px]"
          />
        </div>
        <div
          className="pointer-events-none absolute top-[75%] -translate-y-1/2 -rotate-[15deg] right-[15px] min-[810px]:right-[300px]"
          style={{ zIndex: 0 }}
        >
          <Image
            src="/images/originals/XLyBDTREt3z2DUGwONQm3gbCnI.svg"
            alt=""
            width={150}
            height={150}
            aria-hidden
            className="opacity-60 blur-[6px] w-[90px] h-[90px] min-[810px]:w-[120px] min-[810px]:h-[120px]"
          />
        </div>

        {/* Trustpilot badge */}
        <div className="flex flex-col items-center gap-[6px]">
          <div className="flex items-center gap-[5px]">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="rgb(31,122,83)"
              aria-hidden="true"
              className="shrink-0"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <span className="font-sans text-[13px] font-semibold tracking-[-0.03em] text-np-green-trust">
              {d.trustRatingLabel}
            </span>
            <span className="font-sans text-[13px] font-medium tracking-[-0.03em] text-np-green-trust">
              Trustpilot
            </span>
          </div>
          <p className="text-center font-sans text-[12px] font-medium leading-[1.4em] tracking-[-0.04em] text-np-dark">
            {d.trustSectors}
          </p>
        </div>

        {/* Hero title (single H1) */}
        <h1 className="max-w-[760px] text-center font-display text-[34px] font-semibold leading-[1.1em] tracking-[-0.07em] text-black min-[810px]:text-[4rem]">
          {d.titlePart1}
          <em className="font-serif italic font-semibold">{d.titleEm1}</em>
          {d.titleMid}
          <em className="font-serif italic font-semibold">{d.titleEm2}</em>
          {d.titlePart2}
        </h1>

        {/* Subtitle */}
        <p
          className="w-full max-w-[840px] text-center font-sans text-[14.4px] font-medium leading-[1.4em] tracking-[-0.02em] text-[#181818] min-[810px]:text-[18px]"
          style={{ wordBreak: 'break-word', wordWrap: 'break-word' }}
        >
          {d.subtitle}
        </p>

        {/* Micro-benefits */}
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 py-2 min-[810px]:gap-6">
          {d.microBenefits.map((benefit) => (
            <div key={benefit} className="flex items-center gap-2">
              <span className="np-check-circle">
                <svg width="20" height="20" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                  <path
                    d="M16 3C13.4288 3 10.9154 3.76244 8.77759 5.1909C6.63975 6.61935 4.97351 8.64968 3.98957 11.0251C3.00563 13.4006 2.74819 16.0144 3.2498 18.5362C3.75141 21.0579 4.98953 23.3743 6.80762 25.1924C8.6257 27.0105 10.9421 28.2486 13.4638 28.7502C15.9856 29.2518 18.5995 28.9944 20.9749 28.0104C23.3503 27.0265 25.3807 25.3603 26.8091 23.2224C28.2376 21.0846 29 18.5712 29 16C28.9964 12.5533 27.6256 9.24882 25.1884 6.81163C22.7512 4.37445 19.4467 3.00364 16 3ZM21.7075 13.7075L14.7075 20.7075C14.6146 20.8005 14.5043 20.8742 14.3829 20.9246C14.2615 20.9749 14.1314 21.0008 14 21.0008C13.8686 21.0008 13.7385 20.9749 13.6171 20.9246C13.4957 20.8742 13.3854 20.8005 13.2925 20.7075L10.2925 17.7075C10.1049 17.5199 9.99945 17.2654 9.99945 17C9.99945 16.7346 10.1049 16.4801 10.2925 16.2925C10.4801 16.1049 10.7346 15.9994 11 15.9994C11.2654 15.9994 11.5199 16.1049 11.7075 16.2925L14 18.5863L20.2925 12.2925C20.3854 12.1996 20.4957 12.1259 20.6171 12.0756C20.7385 12.0253 20.8686 11.9994 21 11.9994C21.1314 11.9994 21.2615 12.0253 21.3829 12.0756C21.5043 12.1259 21.6146 12.1996 21.7075 12.2925C21.8004 12.3854 21.8741 12.4957 21.9244 12.6171C21.9747 12.7385 22.0006 12.8686 22.0006 13C22.0006 13.1314 21.9747 13.2615 21.9244 13.3829C21.8741 13.5043 21.8004 13.6146 21.7075 13.7075Z"
                    fill="#121212"
                  />
                </svg>
              </span>
              <span className="font-sans text-[12px] font-medium text-np-text">{benefit}</span>
            </div>
          ))}
        </div>

        {/* CTA -> Shopify Launch Sprint landing */}
        <div className="flex flex-col items-center gap-[9px] min-[810px]:w-auto min-[810px]:flex-row min-[810px]:flex-nowrap min-[810px]:items-center min-[810px]:gap-2">
          <Link
            href={ROUTE_PATHS.zeroLossMigration[locale]}
            data-tracking="migrazione_hero_cta"
            className="button-principal"
          >
            {d.cta}
          </Link>
        </div>

        {/* Trusted by + logo grid */}
        <div className="flex flex-col items-center place-content-center gap-[10px] w-full max-w-[400px]">
          <p className="font-sans text-[12px] font-medium tracking-[-0.03em] text-np-dark">
            {d.trustedCount}
          </p>
          <PartnerLogos />
        </div>
      </div>
    </section>
  )
}
