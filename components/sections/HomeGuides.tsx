import Link from 'next/link'

import ArticleCard from '@/components/blog/ArticleCard'
import SectionLabel from '@/components/ui/SectionLabel'
import { getArticle } from '@/data/articles/clusters'
import type { Article } from '@/data/articles'
import type { Locale } from '@/lib/i18n'
import { getBlocchiCopy } from '@/lib/i18n/blocchi'
import { ROUTE_PATHS } from '@/lib/i18n/routes'

/**
 * Home block "Guides for migrating to Shopify": 6 article cards (anchor = SEO
 * title of each article) and a link to the whole blog. Sits after the pricing
 * section. Copy and the 6 slugs live in `lib/i18n/blocchi.ts` (`homeGuides`).
 */
export default function HomeGuides({ locale = 'en' }: { locale?: Locale }) {
  const d = getBlocchiCopy(locale).homeGuides
  const items = d.slugs.map((slug) => getArticle(slug)).filter((a): a is Article => Boolean(a))

  return (
    <section id="guides" className="scroll-mt-20 py-[60px] min-[810px]:py-[80px]">
      <div className="container-noprob">
        <div className="mx-auto max-w-[760px] text-center">
          <SectionLabel>{d.label}</SectionLabel>
          <h2 className="mt-5 text-np-h2 text-np-dark">
            {d.heading}
            <em className="font-serif italic">{d.headingEm}</em>
          </h2>
          <p className="mt-4 font-sans text-body-lg font-medium text-np-grey">{d.text}</p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((article) => (
            <ArticleCard key={article.slug} article={article} locale={locale} shortTitle />
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href={ROUTE_PATHS.blog[locale]}
            data-tracking="home_guides_all"
            className="font-sans text-[16px] font-semibold tracking-[-0.03em] text-np-dark underline underline-offset-4 decoration-black/30 transition-colors hover:decoration-black"
          >
            {d.allGuides} →
          </Link>
        </div>
      </div>
    </section>
  )
}
