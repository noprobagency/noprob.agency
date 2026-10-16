import Image from 'next/image'
import Link from 'next/link'

import SectionLabel from '@/components/ui/SectionLabel'
import Testimonials from '@/components/sections/Testimonials'
import ZlApplicationForm from '@/components/sections/zero-loss/ZlApplicationForm'
import { siteAssets } from '@/lib/site'
import { type Locale } from '@/lib/i18n'
import { getMigrazioneCopy } from '@/lib/i18n/migrazione'
import { getZeroLossCopy } from '@/content/zero-loss-migration'

function CheckIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden className="shrink-0">
      <circle cx="12" cy="12" r="10" fill="#121212" />
      <path d="M7.5 12.5l3 3 6-6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

/**
 * Pricing + application form of the Shopify migration product page
 * (/it/migrazione-shopify, /shopify-migration). Same black section as
 * MigrazionePricing, but with the Shopify Launch Sprint price tiers (by company
 * revenue, 4 installments) and the same 4-step form as the landing application
 * page. Every "#candidatura" CTA on the page lands on this form.
 */
export default function MigrazioneSprintPricing({ locale = 'it' }: { locale?: Locale }) {
  const d = getMigrazioneCopy(locale).pricing
  const zl = getZeroLossCopy(locale)
  const tiers = zl.overview.tiers

  return (
    <section id="pricing" data-header-theme="dark" className="scroll-mt-40 bg-black py-[40px] min-[810px]:py-[60px]">
      <div className="container-noprob">
        <div className="mx-auto max-w-[850px]">
          <div className="mx-auto max-w-[680px] text-center">
            <SectionLabel>{d.label}</SectionLabel>
            <h2 className="mt-5 whitespace-pre-line text-np-h2 text-center text-[#f9f9f9]">{d.heading}</h2>
            <p className="mt-5 font-sans text-body-lg font-medium text-[#f9f9f9]">{d.subheading}</p>
          </div>

          {/* Price tiers by company revenue (same as the landing) */}
          <div className="mt-10">
            <p className="text-center font-sans text-[13px] font-semibold uppercase tracking-[0.06em] text-[#999]">
              {zl.overview.pricingTitle} <span className="normal-case tracking-[-0.02em]">{zl.overview.pricingSub}</span>
            </p>
            <ul className="mt-5 grid gap-3 min-[810px]:grid-cols-3">
              {tiers.map((tier, i) => (
                <li
                  key={tier.label}
                  className={`rounded-[16px] border px-5 py-5 text-center ${
                    i === 0 ? 'border-[#1dcc5d]/60 bg-[#141414]' : 'border-[#333] bg-[#111]'
                  }`}
                >
                  <p className="font-sans text-[13px] font-semibold tracking-[-0.02em] text-[#c9c9c9]">{tier.label}</p>
                  <p className="mt-2 font-display text-[30px] font-bold leading-[1em] tracking-[-0.05em] text-white">{tier.price}</p>
                  <p className="mt-2 font-sans text-[12px] font-medium tracking-[-0.02em] text-[#999]">{tier.under}</p>
                </li>
              ))}
            </ul>
            <p className="mx-auto mt-5 max-w-[640px] text-center font-sans text-[13px] font-medium leading-[1.6em] tracking-[-0.02em] text-[#9a9a9a]">
              {zl.overview.pricingNote}
            </p>
          </div>

          {/* Offer card + application form */}
          <div className="mt-10 w-full overflow-hidden rounded-[24px] border border-[rgb(54,54,54)] bg-[rgb(24,24,24)] p-2">
            <div className="rounded-[20px] bg-white p-6 shadow-pricing-inner min-[810px]:p-[32px]">
              <div className="grid gap-8 min-[810px]:grid-cols-2 min-[810px]:gap-10">
                <div className="flex flex-col">
                  <h3 className="text-np-pricing text-noprob-text">{d.cardTitle}</h3>
                  <p className="mt-3 font-sans text-body-sm font-medium leading-[1.6em] text-noprob-text">{d.cardDescription}</p>
                  <ul className="mt-5 flex flex-col gap-3">
                    {d.cardChecks.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 font-sans text-body-sm font-medium text-noprob-text">
                        <CheckIcon />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col min-[810px]:border-l min-[810px]:border-[#ececec] min-[810px]:pl-10">
                  <span className="inline-flex self-start rounded-pill border border-[#d6d6d6] bg-white px-3 py-[6px] font-serif text-[14px] font-normal italic tracking-[-0.02em] text-noprob-text">
                    {d.priceBadge}
                  </span>
                  <div className="mt-4 flex items-start gap-2 rounded-[12px] bg-[rgb(206,232,204)] px-4 py-3">
                    <CheckIcon />
                    <p className="font-sans text-[13px] font-semibold leading-[1.5em] tracking-[-0.02em] text-noprob-text">{d.guarantee}</p>
                  </div>
                  <div className="mt-5">
                    <span className="font-sans text-[13px] font-medium tracking-[-0.02em] text-noprob-grey">{d.priceFrom}</span>
                    <div className="flex items-end gap-2">
                      <span className="text-np-pricing text-noprob-text">{tiers[0].price}</span>
                      <span className="mb-2 font-sans text-[14px] font-medium tracking-[-0.02em] text-noprob-grey">{tiers[0].under}</span>
                    </div>
                  </div>
                  <Link href="#candidatura" data-tracking="migrazione_pricing_cta" className="button-principal zl-cta mt-5 !w-full">
                    {d.cta}
                  </Link>
                  <div className="mt-4 flex flex-col items-center gap-[8px]">
                    <div className="flex items-center gap-[5px]">
                      <Image src={siteAssets.trustpilotWordmark} alt="Trustpilot" width={72} height={16} className="h-4 w-auto object-contain" />
                      <span className="font-sans text-[12px] font-semibold tracking-[-0.03em] text-np-green-trust">5/5</span>
                    </div>
                    <p className="text-center font-sans text-[12px] font-medium tracking-[-0.04em] text-noprob-text">{d.trustLabel}</p>
                  </div>
                </div>
              </div>

              <div className="my-8 border-t border-[#ececec]" />

              {/* Same 4-step application form as /zero-loss-migration/apply (id="candidatura") */}
              <ZlApplicationForm locale={locale} copy={zl.form} />
            </div>
          </div>

          <Testimonials locale={locale} />
        </div>
      </div>
    </section>
  )
}
