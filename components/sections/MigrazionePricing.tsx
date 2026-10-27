'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

import SectionLabel from '@/components/ui/SectionLabel'
import Testimonials from '@/components/sections/Testimonials'
import MigrazioneForm from '@/components/sections/MigrazioneForm'
import { siteAssets } from '@/lib/site'
import { type Locale } from '@/lib/i18n'
import { type MigrazionePricingCopy, type MigrazioneFormCopy } from '@/lib/i18n/migrazione'

function CheckIcon() {
  return (
    <svg className="np-check-circle shrink-0" viewBox="0 0 32 32" fill="none" aria-hidden>
      <path
        d="M16 3C13.4288 3 10.9154 3.76244 8.77759 5.1909C6.63975 6.61935 4.97351 8.64968 3.98957 11.0251C3.00563 13.4006 2.74819 16.0144 3.2498 18.5362C3.75141 21.0579 4.98953 23.3743 6.80762 25.1924C8.6257 27.0105 10.9421 28.2486 13.4638 28.7502C15.9856 29.2518 18.5995 28.9944 20.9749 28.0104C23.3503 27.0265 25.3807 25.3603 26.8091 23.2224C28.2376 21.0846 29 18.5712 29 16C28.9964 12.5533 27.6256 9.24882 25.1884 6.81163C22.7512 4.37445 19.4467 3.00364 16 3ZM21.7075 13.7075L14.7075 20.7075C14.6146 20.8005 14.5043 20.8742 14.3829 20.9246C14.2615 20.9749 14.1314 21.0008 14 21.0008C13.8686 21.0008 13.7385 20.9749 13.6171 20.9246C13.4957 20.8742 13.3854 20.8005 13.2925 20.7075L10.2925 17.7075C10.1049 17.5199 9.99945 17.2654 9.99945 17C9.99945 16.7346 10.1049 16.4801 10.2925 16.2925C10.4801 16.1049 10.7346 15.9994 11 15.9994C11.2654 15.9994 11.5199 16.1049 11.7075 16.2925L14 18.5863L20.2925 12.2925C20.3854 12.1996 20.4957 12.1259 20.6171 12.0756C20.7385 12.0253 20.8686 11.9994 21 11.9994C21.1314 11.9994 21.2615 12.0253 21.3829 12.0756C21.5043 12.1259 21.6146 12.1996 21.7075 12.2925C21.8004 12.3854 21.8741 12.4957 21.9244 12.6171C21.9747 12.7385 22.0006 12.8686 22.0006 13C22.0006 13.1314 21.9747 13.2615 21.9244 13.3829C21.8741 13.5043 21.8004 13.6146 21.7075 13.7075Z"
        fill="#121212"
      />
    </svg>
  )
}

export default function MigrazionePricing({
  locale = 'it',
  copy,
  ctaTracking = 'migrazione_pricing_cta',
  formCopy,
  formSource = 'migrazione',
  formSubmitTracking = 'migrazione_form_submit',
  showTiers = true,
  showPrice = true,
}: {
  locale?: Locale
  copy: MigrazionePricingCopy
  ctaTracking?: string
  formCopy: MigrazioneFormCopy
  formSource?: 'migrazione' | 'sviluppo' | 'datateam'
  formSubmitTracking?: string
  showTiers?: boolean
  showPrice?: boolean
}) {
  const d = copy
  const tiers = d.tiers
  const currentIndex = Math.max(0, tiers.findIndex((t) => t.state === 'current'))
  const current = tiers[currentIndex] ?? tiers[0]

  // Continuous track: each column is 25% wide, so dot centers sit at 12.5%, 37.5%, 62.5%, 87.5%.
  const center = (i: number) => (i + 0.5) * 25
  const greenWidth = center(currentIndex) - center(0)

  return (
    <section id="pricing" data-header-theme="dark" className="scroll-mt-40 bg-black py-[40px]">
      <div className="container-noprob">
        <div className="mx-auto max-w-[850px]">
          {/* Header */}
          <div className="mx-auto max-w-[680px] text-center">
            <SectionLabel>{d.label}</SectionLabel>
            <h2 className="mt-5 whitespace-pre-line text-np-h2 text-center text-[#f9f9f9]">{d.heading}</h2>
            <p className="mt-5 font-sans text-body-lg font-medium text-[#f9f9f9]">{d.subheading}</p>
          </div>

          {/* Tiered price bar */}
          {showTiers && (
          <div className="mt-12">
            <div className="grid grid-cols-4">
              {tiers.map((tier) => (
                <div key={tier.price} className="text-center">
                  <span
                    className={
                      tier.state === 'current'
                        ? 'font-display text-[18px] font-bold tracking-[-0.04em] text-white min-[810px]:text-[26px]'
                        : tier.state === 'completed'
                          ? 'font-display text-[15px] font-semibold tracking-[-0.04em] text-[#777] line-through min-[810px]:text-[20px]'
                          : 'font-display text-[15px] font-semibold tracking-[-0.04em] text-[#777] min-[810px]:text-[20px]'
                    }
                  >
                    {tier.price}
                    <span className="ml-0.5 font-sans text-[10px] font-medium text-[#777] min-[810px]:text-[12px]">
                      {locale === 'en' ? '/mo' : '/mese'}
                    </span>
                  </span>
                </div>
              ))}
            </div>

            <div className="relative my-3 grid grid-cols-4">
              <span className="pointer-events-none absolute left-[12.5%] right-[12.5%] top-1/2 h-[2px] -translate-y-1/2 bg-[#333]" />
              <span
                className="pointer-events-none absolute top-1/2 h-[2px] -translate-y-1/2 bg-[#1dcc5d]"
                style={{ left: '12.5%', width: `${greenWidth}%` }}
              />
              {tiers.map((tier) => (
                <div key={tier.price} className="flex items-center justify-center">
                  <span
                    className={
                      tier.state === 'current'
                        ? 'relative z-10 h-[16px] w-[16px] rounded-full bg-[#1dcc5d] ring-4 ring-[#1dcc5d]/25'
                        : tier.state === 'completed'
                          ? 'relative z-10 h-[16px] w-[16px] rounded-full bg-[#1dcc5d]'
                          : 'relative z-10 h-[11px] w-[11px] rounded-full bg-[#4a4a4a]'
                    }
                  />
                </div>
              ))}
            </div>

            <div className="grid grid-cols-4">
              {tiers.map((tier) => (
                <div key={tier.price} className="flex flex-col gap-[2px] text-center">
                  <span
                    className={`font-sans text-[11px] font-semibold leading-[1.3] tracking-[-0.02em] min-[810px]:text-[13px] ${
                      tier.state === 'current' ? 'text-white' : 'text-[#999]'
                    }`}
                  >
                    {tier.slot}
                  </span>
                  <span className="font-serif text-[11px] font-medium italic tracking-[-0.04em] text-[#777] min-[810px]:text-[12px]">
                    {tier.tag}
                  </span>
                </div>
              ))}
            </div>
          </div>
          )}

          {/* Scarcity line */}
          {showTiers && d.scarcity && (
          <p className="mx-auto mt-8 max-w-[620px] text-center font-sans text-[14px] font-medium leading-[1.6em] tracking-[-0.02em] text-[#c9c9c9]">
            {d.scarcity}
          </p>
          )}

          {/* Pricing card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 'some' }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="mt-10 w-full overflow-hidden rounded-[24px] border border-[rgb(54,54,54)] bg-[rgb(24,24,24)] p-2"
          >
            <div className="rounded-[20px] bg-white p-6 shadow-pricing-inner min-[810px]:p-[32px]">
              <div className="grid gap-8 min-[810px]:grid-cols-2 min-[810px]:gap-10">
                {/* Left: project summary (reads first, left to right) */}
                <div className="flex flex-col">
                  <h3 className="text-np-pricing text-noprob-text">{d.cardTitle}</h3>
                  <p className="mt-3 font-sans text-body-sm font-medium leading-[1.6em] text-noprob-text">
                    {d.cardDescription}
                  </p>
                  <ul className="mt-5 flex flex-col gap-3">
                    {d.cardChecks.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-3 font-sans text-body-sm font-medium text-noprob-text"
                      >
                        <CheckIcon />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right: badge + guarantee + price + CTA + trust */}
                <div className="flex flex-col min-[810px]:border-l min-[810px]:border-[#ececec] min-[810px]:pl-10">
                  <span className="inline-flex self-start rounded-pill border border-[#d6d6d6] bg-white px-3 py-[6px] font-serif text-[14px] font-normal italic tracking-[-0.02em] text-noprob-text">
                    {d.priceBadge}
                  </span>

                  {/* Guarantee - right below the label */}
                  <div className="mt-4 flex items-start gap-2 rounded-[12px] bg-[rgb(206,232,204)] px-4 py-3">
                    <CheckIcon />
                    <p className="font-sans text-[13px] font-semibold leading-[1.5em] tracking-[-0.02em] text-noprob-text">
                      {d.guarantee}
                    </p>
                  </div>

                  {showPrice && current && (
                  <div className="mt-5 flex items-end gap-1">
                    <span className="text-np-pricing text-noprob-text">{current.price}</span>
                    <span className="mb-2 font-sans text-[14px] font-medium tracking-[-0.02em] text-noprob-grey">
                      {d.priceSuffix}
                    </span>
                  </div>
                  )}

                  <Link
                    href="#candidatura"
                    data-tracking={ctaTracking}
                    className="button-principal mt-5 !w-full"
                  >
                    {d.cta}
                  </Link>

                  {/* Trustpilot */}
                  <div className="mt-4 flex flex-col items-center gap-[8px]">
                    <div className="flex items-center gap-[5px]">
                      <Image
                        src={siteAssets.trustpilotWordmark}
                        alt="Trustpilot"
                        width={72}
                        height={16}
                        className="h-4 w-auto object-contain"
                      />
                      <span className="font-sans text-[12px] font-semibold tracking-[-0.03em] text-np-green-trust">
                        5/5
                      </span>
                    </div>
                    <p className="text-center font-sans text-[12px] font-medium tracking-[-0.04em] text-noprob-text">
                      {d.trustLabel}
                    </p>
                  </div>
                </div>
              </div>

              {/* Light divider between the offer and the application form */}
              <div className="my-8 border-t border-[#ececec]" />

              {/* Application form (anchor target for all CTAs) */}
              <MigrazioneForm
                locale={locale}
                copy={formCopy}
                source={formSource}
                submitTracking={formSubmitTracking}
              />
            </div>
          </motion.div>

          {/* Testimonials (on the black section, under the application card) */}
          <Testimonials locale={locale} />
        </div>
      </div>
    </section>
  )
}
