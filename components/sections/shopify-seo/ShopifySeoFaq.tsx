import Accordion from '@/components/ui/Accordion'
import { type Locale } from '@/lib/i18n'
import { getShopifySeoCopy } from '@/lib/i18n/shopifySeo'

/** FAQ accordion with FAQPage JSON-LD (links in the answers are stripped from the schema text). */
export default function ShopifySeoFaq({ locale }: { locale: Locale }) {
  const d = getShopifySeoCopy(locale).faq

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: d.items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1'),
      },
    })),
  }

  return (
    <section className="px-5 py-10 min-[810px]:px-9 min-[810px]:py-14">
      <div className="mx-auto max-w-[1000px]">
        <h2 className="text-np-h2 max-w-[760px] text-np-dark">{d.heading}</h2>
        <div className="border-card-thick shadow-card mx-auto mt-8 max-w-[800px] rounded-card-lg bg-noprob-card px-4 pb-4 pt-6 min-[810px]:p-10">
          <Accordion items={d.items.map((item) => ({ question: item.q, answer: item.a }))} />
        </div>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      </div>
    </section>
  )
}
