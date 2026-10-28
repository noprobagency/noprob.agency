'use client'

import { getDictionary, type Locale } from '@/lib/i18n'

const copy = {
  en: {
    headingPre: 'Book Your Call With an',
    headingMid: 'eCommerce ',
    headingEm: 'Expert',
    description:
      'Once you submit the form, you’ll be contacted by our senior eCommerce manager within 48 hours. Together, you’ll analyze your current situation and define the best next steps for your growth.',
  },
  it: {
    headingPre: 'Prenota la tua videochiamata con un',
    headingMid: '',
    headingEm: 'esperto eCommerce',
    description:
      'Una volta inviato il modulo, verrai contattato entro 48 ore dal nostro senior eCommerce manager. Insieme analizzerete la tua situazione attuale e definirete i passi migliori per la tua crescita.',
  },
} as const

export default function ContactsHero({ locale = 'en' }: { locale?: Locale }) {
  const t = copy[locale]
  const hero = getDictionary(locale).hero

  return (
    <section
      id="hero"
      className="relative flex w-full justify-center overflow-hidden bg-noprob-bg px-6 pt-[100px] pb-0 min-[810px]:pt-24 min-[810px]:pb-0"
    >
      <div className="relative z-10 mx-auto flex w-full max-w-[800px] flex-col items-center text-center">
        {/* Trustpilot Badge */}
        <div className="mb-6 flex flex-col items-center gap-1">
          <a
            href={hero.trustpilotHref}
            target="_blank"
            rel="noopener noreferrer"
            data-tracking="contacts_trustpilot"
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
              {hero.trustpilotRating}
            </span>
          </a>
          <p className="font-sans text-[12px] font-medium leading-[1.4em] tracking-[-0.04em] text-noprob-dark">
            {hero.trustpilotLabel}
          </p>
        </div>

        {/* Heading */}
        <h1
          className="text-center font-sans text-[1.79rem] font-semibold leading-[1.2em] tracking-[-0.05em] text-black [text-wrap:balance] min-[810px]:text-[2.8rem]"
          style={{ fontFeatureSettings: "'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on" }}
        >
          {t.headingPre} <br className="hidden sm:block" />
          {t.headingMid}
          <em className="font-serif italic font-normal">{t.headingEm}</em>
        </h1>

        {/* Description */}
        <div className="mt-[20px] w-[550px] max-w-full">
          <p className="font-sans text-[18px] font-medium leading-[1.4em] tracking-[-0.02em] text-noprob-text">
            {t.description}
          </p>
        </div>
      </div>
    </section>
  )
}
