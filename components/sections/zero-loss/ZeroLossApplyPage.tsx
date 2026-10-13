import Image from 'next/image'
import Link from 'next/link'

import Footer from '@/components/layout/Footer'
import type { Locale } from '@/lib/i18n'
import { ROUTE_PATHS } from '@/lib/i18n/routes'
import { siteAssets } from '@/lib/site'
import { getZeroLossCopy } from '@/content/zero-loss-migration'

import ZlTracking from './ZlTracking'
import ZlNav from './ZlNav'
import ZlApplicationForm from './ZlApplicationForm'

const AVATARS = [
  '/images/originals/mEIBGBqwotHJ35YaPhM5ljuLc2U.png',
  '/images/originals/2B9gp2gJnBjBX44Yovd3HRxqiXM.png',
  '/images/originals/B9ROL6BhEMArgbWauFiEj7UZZJY.png',
  '/images/originals/lFzmQ3NzC3LG6q2c7lvBf8kw.png',
  '/images/originals/38I07rfLJ4DXJRQZ7YXCanY6ko.png',
]

const CARD = 'rounded-[16px] border-[6px] border-[#f8f8f8] bg-white'

function Star({ className }: { className: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#F9C24A" aria-hidden>
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden className="shrink-0">
      <circle cx="12" cy="12" r="10" fill="#121212" />
      <path d="M7.5 12.5l3 3 6-6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

/**
 * Application page of the Shopify Launch Sprint (/it/zero-loss-migration/candidatura,
 * /zero-loss-migration/apply), same layout as the contact page: centered hero with
 * Trustpilot, then one card with the 4-step form (first on mobile) and, next to it,
 * the trust card (avatars, promise, bullets) and a client testimonial.
 */
export default function ZeroLossApplyPage({ locale }: { locale: Locale }) {
  const copy = getZeroLossCopy(locale)
  const a = copy.apply
  const review = copy.proof.testimonials.find((t) => !t.hidden)

  return (
    <>
      <ZlTracking locale={locale} page="apply" />
      <ZlNav locale={locale} copy={copy.nav} page="apply" />
      <main>
        {/* Hero, same pattern as /contatti */}
        <section className="px-5 pt-8 min-[810px]:pt-14">
          <div className="mx-auto flex max-w-[800px] flex-col items-center text-center">
            <Link
              href={ROUTE_PATHS.zeroLossMigration[locale]}
              className="mb-6 font-sans text-[13px] font-medium tracking-[-0.02em] text-np-grey hover:text-np-dark"
            >
              ← {a.back}
            </Link>
            <div className="mb-5 flex flex-col items-center gap-1">
              <div className="flex items-center gap-[5px]">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="rgb(36,143,98)" aria-hidden className="shrink-0">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <span className="font-sans text-[13px] font-semibold tracking-[-0.03em] text-np-green-trust">5/5</span>
                <span className="font-sans text-[13px] font-medium tracking-[-0.03em] text-np-green-trust">Trustpilot</span>
              </div>
              <p className="font-sans text-[12px] font-medium leading-[1.4em] tracking-[-0.04em] text-np-dark">{a.trust}</p>
            </div>
            <h1 className="font-sans text-[2rem] font-semibold leading-[1.1em] tracking-[-0.06em] text-black [text-wrap:balance] min-[810px]:text-[3rem]">
              {a.h1Pre} <em className="font-serif font-normal italic">{a.h1Em}</em>
            </h1>
            <p className="mt-4 max-w-[560px] font-sans text-[16px] font-medium leading-[1.45em] tracking-[-0.02em] text-np-text min-[810px]:text-[18px]">
              {a.description}
            </p>
          </div>
        </section>

        {/* Form + trust, same card pattern as the contact section */}
        <section className="mx-auto mb-14 mt-8 w-full max-w-[1200px] px-5 min-[810px]:mb-20 min-[810px]:mt-10 min-[810px]:px-9">
          <div className={`flex flex-col-reverse gap-4 p-3 min-[810px]:p-5 lg:flex-row lg:gap-10 lg:p-10 ${CARD}`}>
            {/* Left: trust (second on mobile) */}
            <div className="flex w-full flex-col gap-4 lg:w-[42%] lg:shrink-0 lg:gap-6">
              <div className={`flex flex-col gap-4 p-5 min-[810px]:p-6 ${CARD}`}>
                <div className="flex items-center gap-3 lg:gap-5">
                  <div className="flex -space-x-2 lg:-space-x-3">
                    {AVATARS.map((src) => (
                      <div key={src} className="relative h-8 w-8 overflow-hidden rounded-full border-2 border-white bg-np-bg lg:h-11 lg:w-11">
                        <Image src={src} alt="" fill sizes="44px" className="object-cover" />
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <div className="flex gap-0.5">
                      {[0, 1, 2, 3, 4].map((s) => (
                        <Star key={s} className="h-3 w-3 lg:h-4 lg:w-4" />
                      ))}
                    </div>
                    <span className="font-sans text-[11px] font-semibold tracking-[-0.03em] text-np-dark lg:text-[13px]">{a.trustedBy}</span>
                  </div>
                </div>
                <h2 className="text-[28px] font-semibold leading-[1.1] tracking-[-0.06em] text-np-dark min-[810px]:text-[34px]">
                  {a.sideTitle}
                  <br />
                  <span className="font-serif font-normal italic">{a.sideTitleEm}</span>
                </h2>
                <p className="font-sans text-[15px] font-medium leading-[1.45em] tracking-[-0.02em] text-np-text min-[810px]:text-[17px]">{a.sideText}</p>
                <ul className="flex flex-col gap-3">
                  {copy.finalCta.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-3 font-sans text-[14px] font-semibold tracking-[-0.02em] text-np-dark min-[810px]:text-[15px]">
                      <CheckIcon />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>

              {review && (
                <article className={`flex flex-col gap-4 bg-noprob-card p-5 min-[810px]:p-6 ${CARD}`}>
                  <p className="line-clamp-6 font-sans text-[15px] leading-[1.5em] tracking-[-0.02em] text-np-text min-[810px]:text-[16px]">
                    {review.quote}
                  </p>
                  <Image src={siteAssets.trustpilotWordmark} alt="Trustpilot" width={100} height={20} className="h-5 w-auto object-contain object-left" />
                  <div className="flex items-center gap-3">
                    <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full border border-black/5">
                      <Image src={review.image} alt={review.name} fill sizes="44px" className="object-cover" />
                    </div>
                    <div>
                      <p className="font-sans text-[16px] font-medium leading-[1.3em] tracking-[-0.02em] text-[#363636]">{review.name}</p>
                      <p className="font-sans text-[12px] font-medium tracking-[-0.04em] text-np-grey">{review.role}</p>
                    </div>
                  </div>
                </article>
              )}
            </div>

            {/* Right: the form (first on mobile) */}
            <div className={`flex w-full flex-col gap-5 p-4 min-[810px]:p-6 lg:flex-1 ${CARD}`}>
              <ZlApplicationForm locale={locale} copy={copy.form} />
              <ul className="flex flex-wrap justify-center gap-2 border-t border-black/[0.06] pt-4">
                {a.badges.map((badge) => (
                  <li
                    key={badge}
                    className="inline-flex items-center gap-[6px] rounded-pill bg-np-bg px-3 py-[6px] font-sans text-[12px] font-semibold tracking-[-0.02em] text-np-dark"
                  >
                    <span aria-hidden className="h-[6px] w-[6px] rounded-full bg-[#1dcc5d]" />
                    {badge}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer locale={locale} minimal />
    </>
  )
}
