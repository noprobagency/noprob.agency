import type { Locale } from '@/lib/i18n'
import type { ZlCopy } from '@/content/zero-loss-migration'
import ZlApplicationForm from './ZlApplicationForm'
import ZlCta from './ZlCta'

function CheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden className="shrink-0">
      <circle cx="12" cy="12" r="10" fill="#121212" />
      <path d="M7.5 12.5l3 3 6-6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function Intro({ copy, as: Heading }: { copy: ZlCopy['finalCta']; as: 'h1' | 'h2' }) {
  return (
    <>
      <Heading className="text-np-h2 text-np-dark">{copy.h2}</Heading>
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
 * Section 12 of the landing: closing CTA that opens the application page.
 * With `mode="form"` (application page) it renders the text next to the form.
 */
export default function ZlApplication({
  locale,
  copy,
  form,
  mode = 'cta',
}: {
  locale: Locale
  copy: ZlCopy['finalCta']
  form: ZlCopy['form']
  mode?: 'cta' | 'form'
}) {
  if (mode === 'cta') {
    return (
      <section id="zl-final" className="py-14 min-[810px]:py-28">
        <div className="container-noprob">
          <div className="section-card !items-center !gap-6 !p-6 text-center min-[810px]:!gap-8 min-[810px]:!p-14">
            <div className="mx-auto max-w-[640px] [&_ul]:items-center">
              <Intro copy={copy} as="h2" />
            </div>
            <ZlCta label={copy.cta} position="final" className="!px-10 !py-[14px] !text-[18px]" />
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="pb-20 pt-8 min-[810px]:pb-28 min-[810px]:pt-12">
      <div className="container-noprob">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <Intro copy={copy} as="h1" />
          </div>
          <div className="section-card !block !p-6 min-[810px]:!p-8">
            <ZlApplicationForm locale={locale} copy={form} />
          </div>
        </div>
      </div>
    </section>
  )
}
