import type { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'

import { buildMetadata } from '@/lib/site'
import { articles, type Article } from '@/data/articles'
import { renderSection } from '@/components/article/renderSection'
import { BlogPostMeta } from '@/components/blog/BlogPostMeta'
import { AuthorBio } from '@/components/blog/AuthorBio'
import { RelatedCTA } from '@/components/blog/RelatedCTA'
import { StructuredData } from '@/components/blog/StructuredData'
import CTA from '@/components/sections/CTA'
import Footer from '@/components/layout/Footer'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://noprob.agency'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const article = articles.find((a) => a.slug === slug)
  if (!article) return {}
  return buildMetadata({
    title: article.seoTitle ?? article.title,
    description: article.seoDescription ?? article.excerpt,
    path: `/blog/${article.slug}`,
    locale: 'en',
    image: article.image,
    imageAlt: article.imageAltEn ?? article.imageAlt ?? article.title,
  })
}

function buildBlogPostingJsonLd(article: Article) {
  const image = `${SITE_URL}${article.image}`
  const datePublished = article.datePublishedIso ?? `${article.date}T10:00:00+02:00`
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.title,
    description: article.excerpt,
    image,
    datePublished,
    dateModified: article.dateModifiedIso ?? datePublished,
    author: {
      '@type': 'Person',
      name: 'Antonio Manitta',
      jobTitle: 'Founder & eCommerce Manager',
      worksFor: { '@type': 'Organization', name: 'NoProb Agency' },
      url: `${SITE_URL}/about`,
    },
    publisher: {
      '@type': 'Organization',
      name: 'NoProb Agency',
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/images/logo-no-prob-black.svg`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/blog/${article.slug}`,
    },
    ...(article.wordCount ? { wordCount: article.wordCount } : {}),
    ...(article.articleSection ? { articleSection: article.articleSection } : {}),
    ...(article.keywordsEn ? { keywords: article.keywordsEn } : {}),
    inLanguage: 'en-US',
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

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params
  const article = articles.find((a) => a.slug === slug)
  if (!article) notFound()

  const locale = 'en'
  const lede = article.ledeEn ?? article.excerpt
  const content = article.content

  const schemas: Array<Record<string, unknown>> = [buildBlogPostingJsonLd(article)]
  if (article.faqEn && article.faqEn.length > 0) {
    schemas.push(buildFaqJsonLd(article.faqEn))
  }

  return (
    <>
      <StructuredData schemas={schemas} />

      {/* Hero */}
      <section className="w-full bg-[#f0f0f0] pt-[120px] pb-0 px-5 min-[810px]:px-9">
        <div className="mx-auto flex max-w-[860px] flex-col items-center gap-5 pb-12 text-center">
          <span className="np-eyebrow">{article.articleType}</span>
          <h1
            className="font-sans font-semibold text-black tracking-[-0.07em] leading-[110%]"
            style={{ fontSize: 'clamp(32px, 5vw, 56px)' }}
          >
            {article.title}
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
              alt={article.imageAltEn ?? article.imageAlt ?? article.title}
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
          <RelatedCTA locale={locale} />
          <AuthorBio locale={locale} />
        </article>
      </section>

      <CTA />
      <Footer />
    </>
  )
}
