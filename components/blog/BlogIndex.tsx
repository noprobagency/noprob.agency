import Link from 'next/link'

import SectionLabel from '@/components/ui/SectionLabel'
import GuideFeaturedCard from '@/components/blog/GuideFeaturedCard'
import ArticleCard from '@/components/blog/ArticleCard'
import { RelatedCTA } from '@/components/blog/RelatedCTA'
import { StructuredData } from '@/components/blog/StructuredData'
import { parseInline } from '@/components/article/renderSection'
import { categoryPath } from '@/data/articles/categories'
import { CLUSTERS, articleHref, articlePublishedAt, articleShortTitle, getClusterArticles } from '@/data/articles/clusters'
import { getDictionary, type Locale } from '@/lib/i18n'
import { getBlocchiCopy } from '@/lib/i18n/blocchi'
import { getMigrazioneBlogCard } from '@/lib/i18n/migrazione'
import { ROUTE_PATHS } from '@/lib/i18n/routes'
import { breadcrumbJsonLd, homeCrumb, routeCrumb } from '@/lib/seo/breadcrumbs'
import { ORGANIZATION_ID } from '@/lib/site'
import { absoluteUrl } from '@/lib/utils'

/** Cards shown per category on the index; the rest sits behind "See all". */
const MAX_PER_SECTION = 6

/**
 * Blog index ("Learn" / "Risorse"), one component for both locales: H1 and
 * intro (copy in `lib/i18n/blocchi.ts`), the migration guide card, one H2
 * section per category (`data/articles/clusters.ts`, newest article first,
 * with a "See all" link to the category page) and the closing Sprint CTA band.
 * JSON-LD: BreadcrumbList, a Blog and a CollectionPage with the ItemList of
 * the articles shown.
 */
export default function BlogIndex({ locale }: { locale: Locale }) {
  const d = getBlocchiCopy(locale).blog
  const clusters = CLUSTERS.map((cluster) => {
    const all = getClusterArticles(cluster)
    return { cluster, items: all.slice(0, MAX_PER_SECTION) }
  })
  const blogUrl = absoluteUrl(ROUTE_PATHS.blog[locale])
  const inLanguage = locale === 'it' ? 'it-IT' : 'en-US'

  const schemas: Array<Record<string, unknown>> = [
    breadcrumbJsonLd([homeCrumb(locale), routeCrumb('blog', locale)]),
    {
      '@context': 'https://schema.org',
      '@type': 'Blog',
      '@id': `${blogUrl}#blog`,
      name: `${d.h1}${d.h1Em}`,
      url: blogUrl,
      inLanguage,
      publisher: { '@id': ORGANIZATION_ID },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: `${d.h1}${d.h1Em}`,
      description: getDictionary(locale).seo.blog.description,
      url: blogUrl,
      inLanguage,
      isPartOf: { '@id': `${blogUrl}#blog` },
      mainEntity: {
        '@type': 'ItemList',
        itemListElement: clusters
          .flatMap((c) => c.items)
          .sort((a, b) => new Date(articlePublishedAt(b)).getTime() - new Date(articlePublishedAt(a)).getTime())
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
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
              <h2 className="font-display text-[26px] font-semibold leading-[1.15em] tracking-[-0.05em] text-black min-[810px]:text-[34px]">
                {cluster.label[locale]}
              </h2>
              <Link
                href={categoryPath(cluster.id, locale)}
                aria-label={d.seeAllLabel(cluster.label[locale])}
                data-tracking="blog_see_all"
                className="font-sans text-[15px] font-semibold tracking-[-0.02em] text-black underline underline-offset-4 decoration-black/40 hover:decoration-black"
              >
                {d.seeAll} →
              </Link>
            </div>
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
