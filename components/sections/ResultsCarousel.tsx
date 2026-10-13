import Image from 'next/image'
import Link from 'next/link'
import type { Locale } from '@/lib/i18n'

type Metrics = readonly string[] | { en: readonly string[]; it: readonly string[] }

// Cards without a public source show only the logo: metrics come back when a source exists
// (docs/dati-verificati.md).
const resultCards: ReadonlyArray<{
  image: string
  logo: string
  logoClass: string
  metrics: Metrics
  /** Public case study, when there is one. */
  href?: { en: string; it: string }
  label?: string
}> = [
  {
    image: '/images/originals/lXYpLfNsEJ0igk2CBCTjY1Irqw.png',
    logo: '/images/originals/iWbz1XLCfNQ5rbC2z8HrFO8.png',
    logoClass: 'h-[30px] w-[140px] object-contain',
    metrics: {
      en: ['+67.7% online sales after Shopify', '+301% email revenue with Klaviyo'],
      it: ['+67,7% vendite online dopo Shopify', '+301% entrate email con Klaviyo'],
    },
    href: { en: '/use-cases/cumini-luxury-fashion-ecommerce', it: '/it/casi-studio/cumini-luxury-fashion-ecommerce' },
    label: 'Cumini',
  },
  {
    image: '/images/use-case-nazzi/nazzi-homepage-shopify.webp',
    logo: '/images/use-case-nazzi/nazzi-logo.svg',
    logoClass: 'h-[30px] w-[196px] object-contain',
    metrics: {
      en: ['+105% online sales after Shopify', '2.8x clicks from Google'],
      it: ['+105% vendite online dopo Shopify', '2,8x clic da Google'],
    },
    href: { en: '/use-cases/farmacia-nazzi-integratori-shopify', it: '/it/casi-studio/farmacia-nazzi-integratori-shopify' },
    label: 'Farmacia Nazzi',
  },
  {
    image: '/images/originals/i9Ht9Hdb61eYmBH3DZyKGjIm6s.webp',
    logo: '/images/originals/RWVPFhFtXLH5J1UMr53qg3AEzL8.svg',
    logoClass: 'h-[62px] w-[140px] object-contain',
    metrics: [],
  },
  {
    image: '/images/originals/HACWQoGOAZHSLqcFjpYb1fb90wk.jpg',
    logo: '/images/originals/UR9tJ9ihRaU7gaL1jcgl0kwQY5g.svg',
    logoClass: 'h-[30px] w-[140px] object-contain',
    metrics: [],
  },
  {
    image: '/images/originals/xikMpaXW3G0T00o5bsdB5bWnpuU.png',
    logo: '/images/originals/3D4Ji7c6LSsawGoOucoTS6dFA.png',
    logoClass: 'h-[30px] w-[140px] object-contain',
    metrics: [],
  },
  {
    image: '/images/originals/cOnThGiudnDZv0DuLTLxFgBBoc.webp',
    logo: '/images/originals/8GgYF2twbCK7Wa70vrBTzBY7kg.svg',
    logoClass: 'h-[30px] w-[140px] object-contain',
    metrics: [],
  },
]

function pickMetrics(metrics: Metrics, locale: Locale): readonly string[] {
  return Array.isArray(metrics) ? metrics : (metrics as { en: readonly string[]; it: readonly string[] })[locale]
}

export default function ResultsCarousel({ locale = 'en' }: { locale?: Locale }) {
  return (
    <section id="results" className="scroll-mt-[150px] px-0 py-0">
      <div className="px-5 lg:px-0">
        <div className="overflow-hidden py-4 lg:py-6 [mask-image:linear-gradient(to_right,rgba(0,0,0,0)_0%,rgb(0,0,0)_5%,rgb(0,0,0)_95%,rgba(0,0,0,0)_100%)] lg:[mask-image:linear-gradient(to_right,rgba(0,0,0,0)_0%,rgb(0,0,0)_10%,rgb(0,0,0)_90%,rgba(0,0,0,0)_100%)]">
          <div className="flex w-max animate-marquee gap-4 [animation-duration:35s]">
            {[...resultCards, ...resultCards].map((card, index) => {
              const metrics = pickMetrics(card.metrics, locale)
              return (
                <article
                  key={`${card.image}-${index}`}
                  className="relative h-[220px] w-[340px] shrink-0 overflow-hidden rounded-card-lg border-2 border-noprob-border bg-noprob-card-off max-[809px]:w-[428px] max-[809px]:min-h-[277px] max-[809px]:h-[277px] lg:h-[277px] lg:w-[428px]"
                >
                  {card.href && (
                    <Link
                      href={card.href[locale === 'it' ? 'it' : 'en']}
                      aria-label={card.label}
                      className="absolute inset-0 z-[3]"
                    />
                  )}
                  <Image src={card.image} alt="" fill className="object-cover" aria-hidden />
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0)_24.09%,#f9f9f9_70.74%)]" />
                  <Image
                    src="/images/originals/UKOEHbiYnbExoWnbKlr4yrGf8.svg"
                    alt=""
                    fill
                    className="block h-full w-full object-cover object-center rounded-[inherit] opacity-[0.18]"
                    aria-hidden
                  />

                  <div className="absolute bottom-0 left-1/2 z-[2] flex w-full -translate-x-1/2 flex-col items-center justify-center gap-3 overflow-visible px-5 py-8">
                    <Image
                      src={card.logo}
                      alt="Client logo"
                      width={140}
                      height={30}
                      className={card.logoClass}
                    />
                    <div className="flex flex-wrap items-center justify-center gap-2 max-[809px]:flex-nowrap max-[809px]:overflow-hidden">
                      {metrics.map((metric) => (
                        <span
                          key={metric}
                          className="relative flex flex-none flex-row items-center justify-center gap-2 rounded-xl border border-noprob-border-dk bg-noprob-dark px-3 py-2 font-sans text-[12px] font-medium leading-[1.2em] tracking-[-0.04em] text-[#f0f0f0] text-start whitespace-pre overflow-hidden w-min opacity-100 [font-feature-settings:'blwf'_on,'cv09'_on,'cv03'_on,'cv04'_on,'cv11'_on] max-[809px]:flex-none max-[809px]:w-min max-[809px]:rounded-xl max-[809px]:py-2 max-[809px]:px-3 max-[809px]:text-[12px] max-[809px]:font-medium max-[809px]:leading-[1.2em] max-[809px]:tracking-[-0.04em] max-[809px]:whitespace-pre max-[809px]:text-start max-[809px]:text-[#f0f0f0] max-[809px]:[font-feature-settings:'blwf'_on,'cv09'_on,'cv03'_on,'cv04'_on,'cv11'_on]"
                        >
                          {metric}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
