import Image from 'next/image'
import Link from 'next/link'

import { articleExcerpt, articleHref, articlePill, articleShortTitle, getRelatedArticles } from '@/data/articles/clusters'
import type { Locale } from '@/lib/i18n'
import { getBlocchiCopy } from '@/lib/i18n/blocchi'
import { ROUTE_PATHS } from '@/lib/i18n/routes'

/**
 * "Read next" at the end of an article: 3 articles of the same topic cluster
 * (`getRelatedArticles`, cyclic so inbound links spread across the cluster)
 * and a line to the complete migration guide. Server component, plain links.
 */
export function ReadNext({ slug, locale = 'en' }: { slug: string; locale?: Locale }) {
  const related = getRelatedArticles(slug, 3)
  if (related.length === 0) return null
  const copy = getBlocchiCopy(locale).readNext

  return (
    <aside aria-labelledby="read-next-heading" className="my-12">
      <h2
        id="read-next-heading"
        className="font-sans text-[22px] font-semibold leading-[1.25em] tracking-[-0.03em] text-black"
      >
        {copy.heading}
      </h2>

      <ul className="mt-5 flex flex-col gap-3">
        {related.map((article) => (
          <li key={article.slug}>
            <Link
              href={articleHref(article, locale)}
              data-tracking="blog_read_next"
              className="group flex items-start gap-4 rounded-[16px] border border-black/10 bg-white p-4 no-underline transition-colors hover:bg-[#fafafa]"
            >
              <div className="relative hidden h-[72px] w-[128px] shrink-0 overflow-hidden rounded-[10px] bg-[#f5f5f5] sm:block">
                <Image
                  src={article.image}
                  alt=""
                  fill
                  sizes="128px"
                  className="object-contain"
                />
              </div>
              <div className="flex min-w-0 flex-col gap-1">
                <span className="font-sans text-[12px] font-medium tracking-[-0.03em] text-[#7c7c7c]">
                  {articlePill(article, locale)}
                </span>
                <span className="font-sans text-[16px] font-semibold leading-[1.3em] tracking-[-0.02em] text-black group-hover:underline underline-offset-4">
                  {articleShortTitle(article, locale)}
                </span>
                <span
                  className="font-sans text-[14px] font-medium leading-[1.4em] tracking-[-0.02em] text-[#7c7c7c]"
                  style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}
                >
                  {articleExcerpt(article, locale)}
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>

      <p className="mt-5 font-sans text-[15px] font-medium tracking-[-0.02em] text-[#1c1c1c]">
        {copy.guideLead}{' '}
        <Link
          href={ROUTE_PATHS.migrazioneShopify[locale]}
          data-tracking="blog_read_next_guide"
          className="font-semibold underline underline-offset-4 decoration-[#1c1c1c]/40 hover:decoration-[#1c1c1c]"
        >
          {copy.guideLabel} →
        </Link>
      </p>
    </aside>
  )
}
