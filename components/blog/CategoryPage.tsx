import Link from 'next/link'

import ArticleCard from '@/components/blog/ArticleCard'
import { Breadcrumb } from '@/components/blog/Breadcrumb'
import { RelatedCTA } from '@/components/blog/RelatedCTA'
import { StructuredData } from '@/components/blog/StructuredData'
import { parseInline } from '@/components/article/renderSection'
import SectionLabel from '@/components/ui/SectionLabel'
import { CATEGORIES, categoryPath, type CategoryId } from '@/data/articles/categories'
import { articleHref, articleShortTitle, getClusterArticles, CLUSTERS } from '@/data/articles/clusters'
import { getDictionary, type Locale } from '@/lib/i18n'
import { getBlocchiCopy } from '@/lib/i18n/blocchi'
import { getCategoriesCopy } from '@/lib/i18n/categorie'
import { ROUTE_PATHS } from '@/lib/i18n/routes'
import { breadcrumbJsonLd, categoryCrumb, homeCrumb, routeCrumb } from '@/lib/seo/breadcrumbs'
import { absoluteUrl } from '@/lib/utils'

function clusterOf(id: CategoryId) {
  const cluster = CLUSTERS.find((c) => c.id === id)
  if (!cluster) throw new Error(`No cluster for category "${id}"`)
  return cluster
}

/**
 * Blog category page, one component for both locales and the 5 categories:
 * breadcrumb, H1 and intro (copy in `lib/i18n/categorie.ts`), the grid of
 * article cards (newest first, same card as the blog index), links to the
 * other categories and the closing Sprint band. Works with 2 articles or 15.
 * JSON-LD: BreadcrumbList (Home > Learn > category) and a CollectionPage with
 * the ItemList of its articles. Server component, no client JS.
 */
export default function CategoryPage({ id, locale }: { id: CategoryId; locale: Locale }) {
  const copy = getCategoriesCopy(locale)
  const page = copy.pages[id]
  const blog = getBlocchiCopy(locale).blog
  const learn = getDictionary(locale).navbar.learn
  const articles = getClusterArticles(clusterOf(id))
  const url = absoluteUrl(categoryPath(id, locale))
  const others = CATEGORIES.filter((c) => c.id !== id)

  const crumbs = [homeCrumb(locale), routeCrumb('blog', locale), categoryCrumb(id, locale)]

  const schemas: Array<Record<string, unknown>> = [
    breadcrumbJsonLd(crumbs),
    {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: `${page.h1}${page.h1Em}`,
      description: page.metaDescription,
      url,
      inLanguage: locale === 'it' ? 'it-IT' : 'en-US',
      isPartOf: { '@type': 'CollectionPage', name: learn.label, url: absoluteUrl(ROUTE_PATHS.blog[locale]) },
      mainEntity: {
        '@type': 'ItemList',
        numberOfItems: articles.length,
        itemListElement: articles.map((article, i) => ({
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
        <Breadcrumb items={crumbs} />
        <SectionLabel>{copy.eyebrow}</SectionLabel>
        <h1 className="font-sans font-semibold text-black tracking-[-0.07em] leading-[110%] text-[36px] min-[810px]:text-[48px]">
          {page.h1}
          <em className="font-serif italic tracking-[-0.08em]">{page.h1Em}</em>
        </h1>
        <p className="max-w-[680px] font-sans text-[17px] font-medium leading-[1.55em] tracking-[-0.02em] text-[#4a4a4a]">
          {parseInline(page.intro)}
        </p>
        <p className="font-sans text-[14px] font-medium tracking-[-0.02em] text-[#7c7c7c]">
          {blog.articlesCount(articles.length)}
        </p>
      </div>

      {/* Article grid */}
      <div className="mx-auto mt-12 grid max-w-[1200px] grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((article, i) => (
          <ArticleCard key={article.slug} article={article} locale={locale} headingLevel={2} priority={i < 3} />
        ))}
      </div>

      {/* Other categories */}
      <nav aria-labelledby="more-categories-heading" className="mx-auto mt-16 max-w-[1200px]">
        <h2
          id="more-categories-heading"
          className="font-display text-[26px] font-semibold leading-[1.15em] tracking-[-0.05em] text-black"
        >
          {copy.moreHeading}
        </h2>
        <ul className="mt-5 flex flex-wrap gap-3">
          {others.map((other) => (
            <li key={other.id}>
              <Link
                href={categoryPath(other.id, locale)}
                className="inline-flex items-center rounded-full border border-black/10 bg-white px-5 py-2.5 font-sans text-[15px] font-medium tracking-[-0.02em] text-black no-underline transition-colors hover:bg-[#fafafa]"
              >
                {other.label[locale]}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href={ROUTE_PATHS.blog[locale]}
              className="inline-flex items-center rounded-full border border-black bg-black px-5 py-2.5 font-sans text-[15px] font-medium tracking-[-0.02em] text-white no-underline transition-opacity hover:opacity-80"
            >
              {copy.allArticlesLink} →
            </Link>
          </li>
        </ul>
      </nav>

      {/* Closing band */}
      <div className="mx-auto mt-14 max-w-[860px]">
        <RelatedCTA locale={locale} variant="sprint" />
      </div>
    </section>
  )
}
