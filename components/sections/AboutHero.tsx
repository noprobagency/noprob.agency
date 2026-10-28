'use client'

import { getDictionary, type Locale } from '@/lib/i18n'
import { TRUSTPILOT_URL } from '@/lib/site'

export default function AboutHero({ locale = 'en' }: { locale?: Locale }) {
  const t = getDictionary(locale).about.hero

  return (
    <section
      id="hero"
      className="relative flex w-full justify-center overflow-hidden bg-noprob-bg px-6 pt-[100px] pb-16 min-[810px]:py-24"
    >
      <div className="relative z-10 mx-auto flex w-full max-w-[800px] flex-col items-center text-center">
        {/* Trustpilot Badge */}
        <div className="mb-6 flex flex-col items-center gap-1">
          <a
            href={TRUSTPILOT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-[5px] no-underline hover:underline"
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
            <span className="font-sans text-[13px] font-semibold tracking-[-0.03em] text-np-green-trust">
              {getDictionary(locale).hero.trustpilotRating}
            </span>
          </a>
          <p className="font-sans text-[12px] font-medium leading-[1.4em] tracking-[-0.04em] text-noprob-dark">
            {t.trustLabel}
          </p>
        </div>

        {/* Heading */}
        <h1 className="text-np-hero text-noprob-text">
          {t.h1pre}<em className="font-serif italic font-normal">{t.h1em}</em>
        </h1>

        {/* Description */}
        <div className="mt-8 flex flex-col gap-6">
          <p className="font-sans text-[18px] font-medium leading-[1.4em] tracking-[-0.02em] text-noprob-text">
            {t.body1}
          </p>
          <p className="font-sans text-[18px] font-medium leading-[1.4em] tracking-[-0.02em] text-noprob-text">
            {t.body2}
          </p>
        </div>
      </div>
    </section>
  )
}
