import Image from 'next/image'

import Footer from '@/components/layout/Footer'
import type { Locale } from '@/lib/i18n'
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

/**
 * Application page of the Shopify Launch Sprint (/it/zero-loss-migration/candidatura,
 * /shopify-migration-sprint/apply): only nav, one wide white card and the footer, so on
 * desktop it fits the viewport without scrolling. Card: the 4-step form (first on
 * mobile) and, next to it, trust line, H1, one strong paragraph and a short testimonial.
 */
export default function ZeroLossApplyPage({ locale }: { locale: Locale }) {
  const copy = getZeroLossCopy(locale)
  const a = copy.apply
  const review = copy.proof.testimonials.find((t) => !t.hidden)

  return (
    <div className="flex min-h-dvh flex-col">
      <ZlTracking locale={locale} page="apply" />
      <ZlNav locale={locale} copy={copy.nav} page="apply" />
      {/* Only nav, the wide white card and the footer: on desktop the page fits the viewport */}
      <main className="flex flex-1 items-center">
        <section className="mx-auto w-full max-w-[1360px] px-5 py-6 min-[810px]:px-9 lg:py-3">
          <div className={`flex flex-col-reverse gap-4 p-3 min-[810px]:p-4 lg:flex-row lg:gap-6 lg:p-3 ${CARD}`}>
            {/* Left: title, promise, testimonial (second on mobile) */}
            <div className="flex w-full flex-col gap-4 lg:w-[46%] lg:shrink-0">
              <div className={`flex flex-1 flex-col justify-center gap-5 p-5 min-[810px]:p-8 ${CARD}`}>
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2 lg:-space-x-3">
                    {AVATARS.map((src) => (
                      <div key={src} className="relative h-8 w-8 overflow-hidden rounded-full border-2 border-white bg-np-bg lg:h-10 lg:w-10">
                        <Image src={src} alt="" fill sizes="40px" className="object-cover" />
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
                <h1 className="font-sans text-[2.2rem] font-semibold leading-[1.05em] tracking-[-0.06em] text-black [text-wrap:balance] min-[810px]:text-[2.6rem] min-[1400px]:text-[3.2rem]">
                  {a.h1Pre} <em className="font-serif font-normal italic">{a.h1Em}</em>
                </h1>
                <p className="font-sans text-[16px] font-medium leading-[1.5em] tracking-[-0.02em] text-np-text min-[810px]:text-[18px]">
                  {a.description}
                </p>
                <ul className="flex flex-wrap gap-2">
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

              {review && (
                <article className={`flex items-start gap-3 bg-noprob-card p-4 ${CARD}`}>
                  <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full border border-black/5">
                    <Image src={review.image} alt={review.name} fill sizes="40px" className="object-cover" />
                  </div>
                  <div className="min-w-0">
                    <p className="line-clamp-2 font-sans text-[14px] leading-[1.45em] tracking-[-0.02em] text-np-text">{review.quote}</p>
                    <p className="mt-1 font-sans text-[12px] font-medium tracking-[-0.03em] text-np-grey">
                      <span className="font-semibold text-np-dark">{review.name}</span> · {review.role}
                    </p>
                  </div>
                </article>
              )}
            </div>

            {/* Right: the form (first on mobile) */}
            <div className={`flex w-full flex-col justify-center p-4 min-[810px]:p-6 lg:flex-1 lg:px-7 lg:py-5 ${CARD}`}>
              <ZlApplicationForm locale={locale} copy={copy.form} />
            </div>
          </div>
        </section>
      </main>
      <Footer locale={locale} bar />
    </div>
  )
}
