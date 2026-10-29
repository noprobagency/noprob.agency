import Image from 'next/image'
import Link from 'next/link'

import HomeGuidesControls from '@/components/sections/HomeGuidesControls'
import SectionLabel from '@/components/ui/SectionLabel'
import { CLUSTERS, articleHref, articleShortTitle, getCluster } from '@/data/articles/clusters'
import { articles, type Article } from '@/data/articles'
import type { Locale } from '@/lib/i18n'
import { getBlocchiCopy } from '@/lib/i18n/blocchi'
import { ROUTE_PATHS } from '@/lib/i18n/routes'

/** Guide cards in the carousel (the closing "all guides" card is extra). */
const MAX_GUIDES = 12

const ITEM_CLASS =
  'flex basis-[82vw] shrink-0 snap-start [&[hidden]]:hidden min-[640px]:basis-[calc((100%-16px)/2.3)] lg:basis-[calc((100%-48px)/3.5)]'

const STRETCHED_LINK =
  'outline-none after:absolute after:inset-0 after:rounded-[24px] focus-visible:after:outline focus-visible:after:outline-2 focus-visible:after:outline-offset-2 focus-visible:after:outline-np-dark'

const STRETCHED_LINK_ON_DARK = STRETCHED_LINK.replace('focus-visible:after:outline-np-dark', 'focus-visible:after:outline-white')

function publishedAt(article: Article): number {
  return Date.parse(article.datePublishedIso ?? article.date) || 0
}

function Arrow() {
  return (
    <svg viewBox="0 0 20 20" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M4 10h12M11 5l5 5-5 5" />
    </svg>
  )
}

/**
 * Home block "Shopify, AI and eCommerce, explained": app-style carousel of the
 * newest blog guides. Pure CSS scroll-snap on a server-rendered list (every
 * card is a real link in the HTML); the only client code is the small
 * `HomeGuidesControls` island (topic chips and prev/next arrows), which shows
 * up after hydration. Topics and articles come from `data/articles`, so a new
 * article or topic appears here without touching this file. Copy lives in
 * `lib/i18n/blocchi.ts` (`homeGuides`).
 */
export default function HomeGuides({ locale = 'en' }: { locale?: Locale }) {
  const d = getBlocchiCopy(locale).homeGuides
  const items = [...articles].sort((a, b) => publishedAt(b) - publishedAt(a)).slice(0, MAX_GUIDES)
  const filters = CLUSTERS.filter((c) => items.some((a) => getCluster(a.slug)?.id === c.id)).map((c) => ({
    id: c.id,
    label: c.label[locale],
  }))
  const imageSizes = '(max-width: 639px) 82vw, (max-width: 1023px) 44vw, 330px'

  return (
    <section id="guides" aria-labelledby="home-guides-heading" className="scroll-mt-20 py-[60px] min-[810px]:py-[80px]">
      <div className="container-noprob">
        <div className="mx-auto max-w-[760px] text-center">
          <SectionLabel>{d.label}</SectionLabel>
          <h2 id="home-guides-heading" className="mt-5 text-np-h2 text-np-dark">
            {d.heading}
            <em className="font-serif italic">{d.headingEm}</em>
          </h2>
          <p className="mt-4 font-sans text-body-lg font-medium text-np-grey">{d.text}</p>
        </div>

        <HomeGuidesControls
          filters={filters}
          labels={{ all: d.filterAll, filter: d.filterLabel, prev: d.prev, next: d.next }}
        >
          <ul
            data-guides-track
            aria-label={d.regionLabel}
            className="-mx-5 flex snap-x snap-mandatory items-stretch gap-4 overflow-x-auto overscroll-x-contain px-5 pb-8 pt-2 [scroll-padding-inline:20px] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden min-[810px]:-mx-9 min-[810px]:px-9 min-[810px]:[scroll-padding-inline:36px]"
          >
            {items.map((article) => {
              const cluster = getCluster(article.slug)
              return (
                <li key={article.slug} data-cat={cluster?.id} className={ITEM_CLASS}>
                  <article className="group relative flex w-full flex-col overflow-hidden rounded-[24px] bg-white border-card-thick shadow-card">
                    <div className="relative aspect-[1200/630] w-full overflow-hidden bg-[#f5f5f5]">
                      <Image
                        src={article.image}
                        alt=""
                        fill
                        sizes={imageSizes}
                        loading="lazy"
                        className="object-cover motion-safe:transition-transform motion-safe:duration-500 motion-safe:ease-out motion-safe:group-hover:scale-[1.03]"
                      />
                      {cluster && (
                        <span className="absolute left-3 top-3 rounded-full bg-[#f0f0f0] px-3 py-1 font-sans text-[12px] font-medium tracking-[-0.03em] text-[#181818]">
                          {cluster.label[locale]}
                        </span>
                      )}
                    </div>
                    <div className="flex flex-1 flex-col justify-between gap-4 p-5">
                      <h3 className="line-clamp-3 font-sans text-[17px] font-semibold leading-[1.3em] tracking-[-0.02em] text-black">
                        <Link href={articleHref(article, locale)} className={STRETCHED_LINK}>
                          {articleShortTitle(article, locale)}
                        </Link>
                      </h3>
                      <div className="flex items-center justify-between gap-3 font-sans text-[13px] font-medium tracking-[-0.02em] text-np-grey">
                        <span>
                          {article.readingTimeMinutes} {d.minRead}
                        </span>
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-np-dark text-white motion-safe:transition-transform motion-safe:group-hover:translate-x-0.5">
                          <Arrow />
                        </span>
                      </div>
                    </div>
                  </article>
                </li>
              )
            })}

            <li data-keep className={ITEM_CLASS}>
              <div className="group relative flex w-full flex-col justify-between gap-8 rounded-[24px] bg-np-dark p-6 text-white shadow-card">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-np-dark motion-safe:transition-transform motion-safe:group-hover:translate-x-0.5">
                  <Arrow />
                </span>
                <div>
                  <p className="font-sans text-[22px] font-semibold leading-[1.2em] tracking-[-0.03em]">
                    <Link href={ROUTE_PATHS.blog[locale]} data-tracking="home_guides_all" className={STRETCHED_LINK_ON_DARK}>
                      {d.allGuides}
                    </Link>
                  </p>
                  <p className="mt-2 font-sans text-[14px] font-medium leading-[1.4em] tracking-[-0.02em] text-white/70">
                    {d.allGuidesText}
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </HomeGuidesControls>
      </div>
    </section>
  )
}
