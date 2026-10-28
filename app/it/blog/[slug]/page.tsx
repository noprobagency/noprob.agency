import type { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'

import { buildMetadata, FOUNDER_ID, ORGANIZATION_ID } from '@/lib/site'
import { detailBreadcrumbJsonLd, homeCrumb, routeCrumb } from '@/lib/seo/breadcrumbs'
import { articlePill, articleShortTitle } from '@/data/articles/clusters'
import { articles, type Article } from '@/data/articles'
import { renderSection } from '@/components/article/renderSection'
import { BlogPostMeta } from '@/components/blog/BlogPostMeta'
import { Breadcrumb } from '@/components/blog/Breadcrumb'
import { ReadNext } from '@/components/blog/ReadNext'
import { AuthorBio } from '@/components/blog/AuthorBio'
import { RelatedCTA } from '@/components/blog/RelatedCTA'
import { StructuredData } from '@/components/blog/StructuredData'
import CTA from '@/components/sections/CTA'
import Footer from '@/components/layout/Footer'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://noprob.agency'

type Props = {
  params: Promise<{ slug: string }>
}

function findItArticle(slug: string): Article | undefined {
  return articles.find((a) => (a.slugIt ?? a.slug) === slug)
}

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slugIt ?? a.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const article = findItArticle(slug)
  if (!article) return {}
  const itSlug = article.slugIt ?? article.slug
  return buildMetadata({
    title: article.seoTitleIt ?? article.titleIt ?? article.title,
    description: article.seoDescriptionIt ?? article.excerptIt ?? article.excerpt,
    path: `/it/blog/${itSlug}`,
    locale: 'it',
    image: article.image,
    imageAlt: article.imageAlt ?? article.titleIt ?? article.title,
    article: {
      publishedTime: article.datePublishedIso ?? `${article.date}T10:00:00+02:00`,
      modifiedTime: article.dateModifiedIso,
      section: article.articleSection,
    },
  })
}

function buildBlogPostingJsonLd(article: Article, itSlug: string) {
  const headline = article.titleIt ?? article.title
  const description = article.excerptIt ?? article.excerpt
  const image = `${SITE_URL}${article.image}`
  const datePublished = article.datePublishedIso ?? `${article.date}T10:00:00+02:00`
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline,
    description,
    image,
    datePublished,
    dateModified: article.dateModifiedIso ?? datePublished,
    author: {
      '@type': 'Person',
      '@id': FOUNDER_ID,
      name: 'Antonio Manitta',
      jobTitle: 'Founder & eCommerce Manager',
      worksFor: { '@id': ORGANIZATION_ID },
      url: `${SITE_URL}/it/chi-siamo`,
    },
    publisher: {
      '@type': 'Organization',
      '@id': ORGANIZATION_ID,
      name: 'NoProb Agency',
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/images/logo-no-prob-black.svg`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/it/blog/${itSlug}`,
    },
    ...(article.wordCount ? { wordCount: article.wordCount } : {}),
    ...(article.articleSection ? { articleSection: article.articleSection } : {}),
    ...(article.keywordsIt ? { keywords: article.keywordsIt } : {}),
    inLanguage: 'it-IT',
  }
}

function buildFaqJsonLd(faq: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((entry) => ({
      '@type': 'Question',
      name: entry.question,
      acceptedAnswer: { '@type': 'Answer', text: entry.answer },
    })),
  }
}

export default async function ItalianArticlePage({ params }: Props) {
  const { slug } = await params
  const article = findItArticle(slug)
  if (!article) notFound()

  const locale = 'it'
  const itSlug = article.slugIt ?? article.slug
  const title = article.titleIt ?? article.title
  const lede = article.ledeIt ?? article.excerptIt ?? article.excerpt
  const content = article.contentIt ?? article.content

  const schemas: Array<Record<string, unknown>> = [
    buildBlogPostingJsonLd(article, itSlug),
    detailBreadcrumbJsonLd('blog', locale, { name: title, path: `/it/blog/${itSlug}` }),
  ]
  if (article.faqIt && article.faqIt.length > 0) {
    schemas.push(buildFaqJsonLd(article.faqIt))
  }

  return (
    <>
      <StructuredData schemas={schemas} />

      {/* Hero */}
      <section className="w-full bg-[#f0f0f0] pt-[120px] pb-0 px-5 min-[810px]:px-9">
        <div className="mx-auto flex max-w-[860px] flex-col items-center gap-5 pb-12 text-center">
          <Breadcrumb
            items={[
              homeCrumb(locale),
              routeCrumb('blog', locale),
              { name: articleShortTitle(article, locale), path: `/it/blog/${itSlug}` },
            ]}
          />
          <span className="np-eyebrow">{articlePill(article, locale)}</span>
          <h1
            className="font-sans font-semibold text-black tracking-[-0.07em] leading-[110%]"
            style={{ fontSize: 'clamp(32px, 5vw, 56px)' }}
          >
            {title}
          </h1>
          <p className="max-w-[640px] font-sans text-[18px] font-medium leading-[1.5em] tracking-[-0.03em] text-[#7c7c7c]">
            {lede}
          </p>
          {article.datePublishedIso && article.readingTimeMinutes ? (
            <BlogPostMeta
              publishedAt={article.datePublishedIso}
              readingTimeMinutes={article.readingTimeMinutes}
              locale={locale}
            />
          ) : null}
        </div>

        {/* Cover image */}
        <div className="mx-auto max-w-[860px] overflow-hidden rounded-[24px] bg-[#f5f5f5]">
          <div className="relative w-full" style={{ aspectRatio: '16/9' }}>
            <Image
              src={article.image}
              alt={article.imageAlt ?? title}
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </section>

      {/* Article body */}
      <section className="w-full flex justify-center bg-[#f0f0f0] py-16 px-5 min-[810px]:px-9">
        <article className="w-full max-w-[720px]">
          {content?.map((section, idx) => renderSection(section, idx, locale))}
          <RelatedCTA locale={locale} variant="sprint" />
          <AuthorBio locale={locale} />
          <ReadNext slug={article.slug} locale={locale} />
        </article>
      </section>

      <CTA locale={locale} />
      <Footer locale={locale} />
    </>
  )
}
