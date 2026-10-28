import Link from 'next/link'

import type { ZlCopy } from '@/content/zero-loss-migration'
import { stripCopy } from './Placeholder'
import ZlFaqAccordion from './ZlFaqAccordion'
import ZlCta from './ZlCta'

/**
 * Section 11, Fletch FAQ: sticky left column with H2 + CTA, accordion on the
 * right, closed by default. FAQPage JSON-LD emitted here.
 */
export default function ZlFaq({ copy }: { copy: ZlCopy['faq'] }) {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: copy.items.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: stripCopy(faq.answer) },
    })),
  }

  return (
    <section className="pt-14 min-[810px]:pt-28">
      <div className="container-noprob">
        <div className="grid gap-8 lg:grid-cols-[280px_1fr] lg:gap-14">
          <div className="flex flex-row items-center justify-between gap-4 lg:sticky lg:top-24 lg:flex-col lg:items-start lg:self-start">
            <h2 className="text-np-h2 text-np-dark">{copy.h2}</h2>
            <ZlCta label={copy.cta} position="faq" className="shrink-0" />
          </div>
          <div className="border-card-thick shadow-card rounded-card-lg bg-noprob-card px-4 py-5 min-[810px]:p-8">
            <ZlFaqAccordion items={copy.items} />
          </div>
          <p className="font-sans text-[15px] font-medium leading-[1.5em] tracking-[-0.02em] text-np-text lg:col-start-2">
            {copy.guideLink.text}{' '}
            <Link
              href={copy.guideLink.href}
              className="font-semibold text-np-dark underline underline-offset-4 decoration-np-dark/40 transition-colors hover:decoration-np-dark"
            >
              {copy.guideLink.label}
            </Link>
            .
          </p>
        </div>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      </div>
    </section>
  )
}
