import Image from 'next/image'
import Link from 'next/link'

import type { Article } from '@/data/articles'
import { articleExcerpt, articleHref, articlePill, articleShortTitle, articleTitle } from '@/data/articles/clusters'
import type { Locale } from '@/lib/i18n'

/**
 * Article card shared by the blog index and the home "Guides" block. The pill
 * shows the topic (`ARTICLE_PILLS`), never the technical `articleType`.
 * `headingLevel` keeps the outline right: h3 under a section H2, h2 on a flat list.
 */
export default function ArticleCard({
  article,
  locale,
  headingLevel = 3,
  shortTitle = false,
  sizes = '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw',
  priority = false,
}: {
  article: Article
  locale: Locale
  headingLevel?: 2 | 3
  /** Use the SEO title (shorter, keyword first) as anchor instead of the long H1. */
  shortTitle?: boolean
  sizes?: string
  priority?: boolean
}) {
  const Heading = headingLevel === 2 ? 'h2' : 'h3'
  const title = shortTitle ? articleShortTitle(article, locale) : articleTitle(article, locale)

  return (
    <Link
      href={articleHref(article, locale)}
      className="group flex flex-col overflow-hidden rounded-[24px] bg-white no-underline border-card-thick shadow-card"
    >
      <div className="relative w-full overflow-hidden rounded-[16px_16px_0_0] bg-[#f5f5f5]">
        <div className="relative w-full" style={{ aspectRatio: '16/9' }}>
          <Image
            src={article.image}
            alt={locale === 'it' ? (article.imageAlt ?? title) : (article.imageAltEn ?? article.imageAlt ?? title)}
            fill
            sizes={sizes}
            priority={priority}
            className="object-contain transition-transform duration-500 ease-out group-hover:scale-[1.02]"
          />
        </div>
        <div
          className="absolute left-4 top-4 flex items-center rounded-full px-3 py-1"
          style={{ backdropFilter: 'blur(24px)', backgroundColor: '#f0f0f0' }}
        >
          <span className="font-sans text-[12px] font-medium tracking-[-0.03em] text-[#181818]">
            {articlePill(article, locale)}
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-2 p-5">
        <Heading
          className="font-sans font-semibold leading-[1.3em] tracking-[-0.02em] text-black"
          style={{
            fontSize: 'clamp(14.4px, 1.13rem, 18px)',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {title}
        </Heading>
        <p
          className="font-sans text-[14px] font-medium leading-[1.4em] tracking-[-0.02em]"
          style={{
            color: '#7c7c7c',
            display: '-webkit-box',
            WebkitLineClamp: 4,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {articleExcerpt(article, locale)}
        </p>
      </div>
    </Link>
  )
}
