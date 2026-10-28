'use client'

import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useInView } from 'framer-motion'

import PartnerLogos from '@/components/ui/PartnerLogos'
import { siteAssets } from '@/lib/site'
import { getDictionary, type Locale } from '@/lib/i18n'


export default function Hero({ locale = 'en' }: { locale?: Locale }) {
  const t = getDictionary(locale)
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { amount: 0.1 })
  const waveStyle = {
    '--wave-play-state': isInView ? 'running' : 'paused',
  } as React.CSSProperties

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative flex w-full justify-center overflow-hidden bg-noprob-bg px-6 pb-20 pt-[63px] min-[810px]:h-[751px] min-[810px]:items-center min-[810px]:px-9 min-[810px]:pb-40 min-[810px]:pt-[250px] min-[810px]:max-[1199px]:h-auto min-[810px]:max-[1199px]:items-start min-[810px]:max-[1199px]:pb-[50px] min-[810px]:max-[1199px]:pt-[100px]"
    >
      <div
        className="pointer-events-none absolute inset-x-0 bottom-[-24px] block h-[262px] overflow-hidden min-[810px]:hidden"
        style={waveStyle}
      >
        {/* START: Effetto Onda Lissajous Premium */}
        <div className="relative h-full w-full wave-x">
          <div className="relative h-full w-full wave-y">
            <div className="relative h-full w-full wave-3d">
              <div className="relative h-full w-full wave-stretch">
                <Image src={siteAssets.heroBlobMobile} alt="" fill priority className="object-cover object-bottom" aria-hidden />
              </div>
            </div>
          </div>
        </div>
        {/* END: Effetto Onda Lissajous Premium */}
      </div>

      <div
        className="pointer-events-none absolute hidden overflow-hidden min-[810px]:block min-[810px]:max-[1199px]:bottom-[-90px] min-[810px]:max-[1199px]:right-[-720px] min-[810px]:max-[1199px]:top-auto min-[810px]:max-[1199px]:h-[904px] min-[810px]:max-[1199px]:w-[1343px] min-[810px]:max-[1199px]:-rotate-[200deg] min-[1200px]:-bottom-[77px] min-[1200px]:-right-[571px] min-[1200px]:-top-[76px] min-[1200px]:w-[1344px] min-[1200px]:aspect-[1.48636] min-[1200px]:-rotate-[240deg]"
        style={waveStyle}
      >
        {/* START: Effetto Onda Lissajous Premium */}
        <div className="h-full w-full wave-x">
          <div className="h-full w-full wave-y">
            <div className="h-full w-full wave-3d">
              <div className="h-full w-full wave-stretch">
                <Image
                  src={siteAssets.heroBlob}
                  alt=""
                  fill
                  priority
                  className="object-contain"
                  aria-hidden
                />
              </div>
            </div>
          </div>
        </div>
        {/* END: Effetto Onda Lissajous Premium */}
      </div>

      <div className="pointer-events-none absolute inset-0 z-[5] bg-noprob-bg [mask-image:linear-gradient(rgba(0,0,0,0)_88%,#000_97%)] [-webkit-mask-image:linear-gradient(rgba(0,0,0,0)_88%,#000_97%)] min-[810px]:[mask-image:linear-gradient(rgba(0,0,0,0)_75%,#000_97%)] min-[810px]:[-webkit-mask-image:linear-gradient(rgba(0,0,0,0)_75%,#000_97%)]" />

      <div className="relative z-10 mx-auto flex w-full max-w-[1100px] flex-col gap-[20px] min-[810px]:flex-row min-[810px]:items-start min-[810px]:max-[1199px]:items-center">
        <div className="flex w-full flex-col items-center gap-[18px] min-[810px]:w-px min-[810px]:flex-[1.2_0_0] min-[810px]:items-start min-[810px]:gap-7">
          <div className="flex w-full flex-col items-center gap-[10px] min-[810px]:items-start">
            <div className="flex max-w-[280px] flex-col items-center gap-1 min-[810px]:max-w-none min-[810px]:items-start">
              <div className="flex flex-col items-center gap-[3px] min-[810px]:items-start">
                <a
                  href={t.hero.trustpilotHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-tracking="hero_trustpilot"
                  className="flex items-center gap-[5px] text-[rgb(31,122,83)] hover:underline"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="rgb(31,122,83)"
                    aria-hidden="true"
                    className="h-[14px] w-[14px] shrink-0"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <span className="font-sans text-[13px] font-semibold tracking-[-0.03em]">
                    {t.hero.trustpilotRating}
                  </span>
                </a>
                <p className="max-w-[280px] text-center font-sans text-[12px] font-medium leading-[1.4em] tracking-[-0.04em] text-noprob-dark min-[810px]:max-w-none min-[810px]:text-left">
                  {t.hero.trustpilotLabel}
                </p>
              </div>
            </div>
          </div>

          <h1 className="max-w-[650px] text-center text-np-hero text-noprob-text min-[810px]:text-left" style={{ lineHeight: '1.1em', letterSpacing: '-0.07em', fontFeatureSettings: "'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on" }}>
            {t.hero.line1} {t.hero.line2} {t.hero.line3pre}
            <em className="font-serif italic">{t.hero.line3em}</em>.
          </h1>

          <p className="max-w-[550px] text-center font-sans text-[16px] font-medium leading-[1.4em] tracking-[-0.02em] text-noprob-text min-[810px]:text-left min-[810px]:text-[18px]">
            {t.hero.description}
          </p>

          <div className="flex flex-col items-center gap-[9px] min-[810px]:w-auto min-[810px]:flex-row min-[810px]:flex-nowrap min-[810px]:items-center min-[810px]:gap-2">
            <Link
              href={t.hero.ctaPrimaryHref}
              data-tracking="hero_cta_primary"
              className="button-principal"
            >
              {t.hero.ctaPrimary}
            </Link>
            <Link
              href={t.hero.ctaSecondaryHref}
              data-tracking="hero_cta_secondary"
              className="button-secondary max-[809px]:bg-transparent max-[809px]:border-0 max-[809px]:shadow-none max-[809px]:p-0 max-[809px]:rounded-none max-[809px]:font-light max-[809px]:text-[12.8px] max-[809px]:text-[#181818] max-[809px]:underline max-[809px]:decoration-[#000] max-[809px]:underline-offset-0 max-[809px]:leading-[120%] max-[809px]:tracking-[-0.04em] max-[809px]:text-center max-[809px]:cursor-auto max-[809px]:hover:transform-none max-[809px]:hover:shadow-none max-[809px]:[font-feature-settings:'blwf'_on,'cv09'_on,'cv03'_on,'cv04'_on,'cv11'_on]"
            >
              {t.hero.ctaSecondary}
            </Link>
          </div>

          <PartnerLogos className="max-w-[600px] pt-[2px] min-[810px]:pt-0" />
        </div>

        <div className="flex w-full flex-col items-center min-[810px]:w-px min-[810px]:flex-[1_0_0] min-[810px]:self-stretch min-[810px]:justify-center">
          <div className="w-full rounded-card border-2 border-noprob-border bg-[rgba(255,255,255,0.79)] px-6 py-[10px] backdrop-blur-[10px] min-[810px]:w-min min-[810px]:px-6 min-[810px]:py-3">
            <div className="mx-auto aspect-[1.3428571428571427] w-[89%] max-w-[235px] min-[810px]:mx-0 min-[810px]:h-[244px] min-[810px]:w-[353px] min-[810px]:max-w-none">
              <Image
                src={siteAssets.heroChart}
                alt="With NoProb versus Without NoProb chart"
                width={235}
                height={175}
                priority
                className="h-full w-full object-contain object-left"
              />
            </div>

            <div className="mt-2 w-full min-[810px]:mt-0 min-[810px]:max-w-[349px] min-[810px]:min-w-[349px]">
              <div className="flex items-start gap-3">
                <Image
                  src={siteAssets.heroAntonio}
                  alt="Antonio Manitta"
                  width={42}
                  height={42}
                  className="mt-0.5 h-[30px] w-[30px] flex-shrink-0 rounded-full object-cover min-[810px]:h-[42px] min-[810px]:w-[42px]"
                />
                <div>
                  <p className="font-sans text-[12px] font-medium italic leading-[1.2] tracking-[-0.04em] text-noprob-dark">
                    {t.hero.quote}
                  </p>
                  <p className="mt-1 font-sans text-[9.6px] font-medium leading-[1.2] tracking-[-0.04em] text-noprob-grey">
                    {t.hero.quoteAuthor} - <em className="font-serif italic">noprob.agency</em>{' '}
                    eCommerce Manager
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
