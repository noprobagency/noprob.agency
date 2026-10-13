import type { UseCase } from '@/data/use-cases'
import { absoluteUrl } from '@/lib/utils'
import { parseInline } from './renderSection'

type Locale = 'it' | 'en'

const LABELS = {
  it: { faq: 'Domande frequenti', sources: 'Fonti e metodo', updated: 'Dati aggiornati al' },
  en: { faq: 'Frequently asked questions', sources: 'Sources and method', updated: 'Data updated on' },
}

function formatDate(iso: string, locale: Locale) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString(locale === 'it' ? 'it-IT' : 'en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  })
}

/**
 * FAQ + "Sources and method" blocks at the end of a use case, plus the
 * Article and FAQPage JSON-LD. Every number in a case study must be traceable
 * to one of the listed sources: this is what search engines and AI assistants
 * read to trust (and cite) the figures.
 */
export default function UseCaseExtras({ useCase, locale, path }: { useCase: UseCase; locale: Locale; path: string }) {
  const t = LABELS[locale]
  const faq = (locale === 'en' ? useCase.faqEn : useCase.faq) ?? []
  const sources = (locale === 'en' ? useCase.sourcesEn : useCase.sources) ?? []
  const title = locale === 'en' ? (useCase.titleEn ?? useCase.title) : useCase.title
  const description = locale === 'en' ? (useCase.excerptEn ?? useCase.excerpt) : useCase.excerpt

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: title,
      description,
      image: absoluteUrl(useCase.image),
      datePublished: useCase.date,
      dateModified: useCase.updated ?? useCase.date,
      inLanguage: locale,
      mainEntityOfPage: absoluteUrl(path),
      author: { '@type': 'Organization', name: 'NoProb Agency', url: 'https://noprob.agency' },
      publisher: { '@type': 'Organization', name: 'NoProb Agency', url: 'https://noprob.agency' },
      ...(useCase.about ? { about: useCase.about.map((name) => ({ '@type': 'Thing', name })) } : {}),
    },
    ...(faq.length
      ? [
          {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faq.map((item) => ({
              '@type': 'Question',
              name: item.q,
              acceptedAnswer: { '@type': 'Answer', text: item.a.replace(/\*\*|\[|\]\([^)]*\)/g, '') },
            })),
          },
        ]
      : []),
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {faq.length > 0 && (
        <section className="mt-[60px]">
          <h2
            className="mb-4 font-sans font-semibold tracking-[-0.05em] leading-[1.15em] text-black"
            style={{ fontSize: 'clamp(28px, 4vw, 40px)' }}
          >
            {t.faq}
          </h2>
          {faq.map((item) => (
            <div key={item.q} className="mt-6">
              <h3 className="font-sans text-[20px] font-semibold leading-[1.3em] tracking-[-0.04em] text-black">{item.q}</h3>
              <p className="article-body mt-2 font-sans font-medium tracking-[-0.02em] text-[#1c1c1c]">{parseInline(item.a)}</p>
            </div>
          ))}
        </section>
      )}

      {sources.length > 0 && (
        <section className="mt-[60px] rounded-[12px] border border-black/10 bg-white px-5 py-5">
          <h2 className="font-sans text-[20px] font-semibold tracking-[-0.04em] text-black">{t.sources}</h2>
          {useCase.updated && (
            <p className="mt-1 font-sans text-[13px] tracking-[-0.02em] text-[#7c7c7c]">
              {t.updated} {formatDate(useCase.updated, locale)}
            </p>
          )}
          <ul className="mt-3 list-disc space-y-2 pl-5">
            {sources.map((s) => (
              <li key={s} className="font-sans text-[14px] leading-[1.5em] tracking-[-0.02em] text-[#1c1c1c]">
                {parseInline(s)}
              </li>
            ))}
          </ul>
        </section>
      )}
    </>
  )
}
