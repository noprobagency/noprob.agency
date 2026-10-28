import SectionLabel from '@/components/ui/SectionLabel'
import GuideFeaturedCard from '@/components/blog/GuideFeaturedCard'
import ArticleCard from '@/components/blog/ArticleCard'
import { RelatedCTA } from '@/components/blog/RelatedCTA'
import { StructuredData } from '@/components/blog/StructuredData'
import { parseInline } from '@/components/article/renderSection'
import { CLUSTERS, articleHref, articleShortTitle, getClusterArticles } from '@/data/articles/clusters'
import type { Locale } from '@/lib/i18n'
import { getBlocchiCopy } from '@/lib/i18n/blocchi'
import { getMigrazioneBlogCard } from '@/lib/i18n/migrazione'
import { ROUTE_PATHS } from '@/lib/i18n/routes'
import { breadcrumbJsonLd, homeCrumb, routeCrumb } from '@/lib/seo/breadcrumbs'
import { absoluteUrl } from '@/lib/utils'

/**
 * Blog index, one component for both locales: H1 and intro (copy in
 * `lib/i18n/blocchi.ts`), the migration guide card, one H2 section per topic
 * cluster (`data/articles/clusters.ts`) and the closing Sprint CTA band.
 * JSON-LD: BreadcrumbList and a CollectionPage with the ItemList of articles.
 */
export default function BlogIndex({ locale }: { locale: Locale }) {
  const d = getBlocchiCopy(locale).blog
  const clusters = CLUSTERS.map((cluster) => ({ cluster, items: getClusterArticles(cluster) }))

  const schemas: Array<Record<string, unknown>> = [
    breadcrumbJsonLd([homeCrumb(locale), routeCrumb('blog', locale)]),
    {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: `${d.h1}${d.h1Em}`,
      url: absoluteUrl(ROUTE_PATHS.blog[locale]),
      inLanguage: locale === 'it' ? 'it-IT' : 'en-US',
      mainEntity: {
        '@type': 'ItemList',
        itemListElement: clusters
          .flatMap((c) => c.items)
          .map((article, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            name: articleShortTitle(article, locale),
            url: absoluteUrl(articleHref(article, locale)),
          })),
      },
    },
  ]

  return (
    <section className="w-full bg-[#f0f0f0] pt-[120px] pb-[80px] px-5 min-[810px]:px-9">
      <StructuredData schemas={schemas} />

      {/* Header */}
      <div className="mx-auto flex max-w-[860px] flex-col items-center gap-5 text-center">
        <SectionLabel>{d.label}</SectionLabel>
        <h1 className="font-sans font-semibold text-black tracking-[-0.07em] leading-[110%] text-[36px] min-[810px]:text-[48px]">
          {d.h1}
          <em className="font-serif italic tracking-[-0.08em]">{d.h1Em}</em>
        </h1>
        <p className="max-w-[680px] font-sans text-[17px] font-medium leading-[1.55em] tracking-[-0.02em] text-[#4a4a4a]">
          {parseInline(d.intro)}
        </p>
      </div>

      {/* Featured: migration guide */}
      <div className="mx-auto mt-12 max-w-[1200px]">
        <GuideFeaturedCard card={getMigrazioneBlogCard(locale)} />
      </div>

      {/* One section per cluster */}
      {clusters.map(({ cluster, items }) => (
        <div key={cluster.id} id={cluster.id} className="mx-auto mt-14 max-w-[1200px] scroll-mt-24">
          <div className="mb-6 flex flex-col gap-2">
            <h2 className="font-display text-[26px] font-semibold leading-[1.15em] tracking-[-0.05em] text-black min-[810px]:text-[34px]">
              {cluster.label[locale]}
            </h2>
            <p className="max-w-[760px] font-sans text-[15px] font-medium leading-[1.5em] tracking-[-0.02em] text-[#6b6b6b]">
              {d.sections[cluster.id].description}
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((article) => (
              <ArticleCard key={article.slug} article={article} locale={locale} />
            ))}
          </div>
        </div>
      ))}

      {/* Closing band */}
      <div className="mx-auto mt-14 max-w-[860px]">
        <RelatedCTA locale={locale} variant="sprint" />
      </div>
    </section>
  )
}
