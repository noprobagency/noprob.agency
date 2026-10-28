import { articles, type Article } from '@/data/articles'
import { articleExcerpt, articleHref, articleTitle } from '@/data/articles/clusters'
import type { Locale } from '@/lib/i18n'
import { ROUTE_PATHS } from '@/lib/i18n/routes'
import { absoluteUrl } from '@/lib/utils'

const FEED_COPY: Record<Locale, { title: string; description: string; language: string }> = {
  en: {
    title: 'noprob agency blog: Shopify migration, SEO and AI for eCommerce',
    description:
      'Guides on migrating to Shopify, platform comparisons, migration SEO, GEO and AI for eCommerce, from the noprob agency team.',
    language: 'en-US',
  },
  it: {
    title: 'Blog di noprob agency: migrazione Shopify, SEO e AI per eCommerce',
    description:
      'Guide sulla migrazione a Shopify, confronti tra piattaforme, SEO della migrazione, GEO e AI per eCommerce, dal team noprob agency.',
    language: 'it-IT',
  },
}

export function feedPath(locale: Locale): string {
  return `${ROUTE_PATHS.blog[locale]}/rss.xml`
}

export function escapeXml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

function publishedAt(article: Article): string {
  return article.datePublishedIso ?? `${article.date}T10:00:00+02:00`
}

function modifiedAt(article: Article): string {
  return article.dateModifiedIso ?? publishedAt(article)
}

/** RSS 2.0 feed with every article of the blog in one locale, newest first. */
export function buildRssFeed(locale: Locale): string {
  const copy = FEED_COPY[locale]
  const sorted = [...articles].sort(
    (a, b) => new Date(publishedAt(b)).getTime() - new Date(publishedAt(a)).getTime()
  )
  const lastBuild = articles.reduce(
    (latest, a) => Math.max(latest, new Date(modifiedAt(a)).getTime()),
    0
  )

  const items = sorted
    .map((article) => {
      const url = absoluteUrl(articleHref(article, locale))
      return [
        '    <item>',
        `      <title>${escapeXml(articleTitle(article, locale))}</title>`,
        `      <link>${escapeXml(url)}</link>`,
        `      <guid isPermaLink="true">${escapeXml(url)}</guid>`,
        `      <pubDate>${new Date(publishedAt(article)).toUTCString()}</pubDate>`,
        `      <description>${escapeXml(articleExcerpt(article, locale))}</description>`,
        '      <dc:creator>Antonio Manitta</dc:creator>',
        ...(article.articleSection ? [`      <category>${escapeXml(article.articleSection)}</category>`] : []),
        '    </item>',
      ].join('\n')
    })
    .join('\n')

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/">',
    '  <channel>',
    `    <title>${escapeXml(copy.title)}</title>`,
    `    <link>${escapeXml(absoluteUrl(ROUTE_PATHS.blog[locale]))}</link>`,
    `    <description>${escapeXml(copy.description)}</description>`,
    `    <language>${copy.language}</language>`,
    `    <lastBuildDate>${new Date(lastBuild).toUTCString()}</lastBuildDate>`,
    `    <atom:link href="${escapeXml(absoluteUrl(feedPath(locale)))}" rel="self" type="application/rss+xml" />`,
    items,
    '  </channel>',
    '</rss>',
    '',
  ].join('\n')
}
