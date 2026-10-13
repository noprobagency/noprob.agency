import type { ZlCopy } from '@/content/zero-loss-migration'
import ZlCta from './ZlCta'

function CheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden className="shrink-0">
      <circle cx="12" cy="12" r="10" fill="#121212" />
      <path d="M7.5 12.5l3 3 6-6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function Intro({ copy }: { copy: ZlCopy['finalCta'] }) {
  return (
    <>
      <h2 className="text-np-h2 text-np-dark">{copy.h2}</h2>
      <p className="mt-5 font-sans text-[17px] font-medium leading-[1.5em] tracking-[-0.02em] text-np-text">{copy.paragraph}</p>
      <ul className="mt-6 flex flex-col gap-3">
        {copy.bullets.map((b) => (
          <li key={b} className="flex items-center gap-3 font-sans text-[15px] font-semibold tracking-[-0.02em] text-np-dark">
            <CheckIcon />
            {b}
          </li>
        ))}
      </ul>
    </>
  )
}

/**
 * Section 12 of the landing: closing CTA that opens the application page
 * (`ZeroLossApplyPage`, which has its own layout with the form).
 */
export default function ZlApplication({ copy }: { copy: ZlCopy['finalCta'] }) {
  return (
    <section id="zl-final" className="py-14 min-[810px]:py-28">
      <div className="container-noprob">
        <div className="section-card !items-center !gap-6 !p-6 text-center min-[810px]:!gap-8 min-[810px]:!p-14">
          <div className="mx-auto max-w-[640px] [&_ul]:items-center">
            <Intro copy={copy} />
          </div>
          <ZlCta label={copy.cta} position="final" className="!px-10 !py-[14px] !text-[18px]" />
        </div>
      </div>
    </section>
  )
}
