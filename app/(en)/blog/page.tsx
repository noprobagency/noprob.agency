import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { buildMetadata } from '@/lib/site'
import SectionLabel from '@/components/ui/SectionLabel'
import { articles } from '@/data/articles'
import Footer from '@/components/layout/Footer'
import GuideFeaturedCard from '@/components/blog/GuideFeaturedCard'
import { getMigrazioneBlogCard } from '@/lib/i18n/migrazione'

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata({ path: '/blog', locale: 'en', pageKey: 'blog' })
}

export default function BlogPage() {
  return (
    <>
      <section className="w-full bg-[#f0f0f0] pt-[120px] pb-[80px] px-5 min-[810px]:px-9">
        {/* Header */}
        <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-5 text-center">
          <SectionLabel>Blog</SectionLabel>
          <h1
            className="font-sans font-semibold text-black tracking-[-0.07em] leading-[110%] text-[40px]"
          >
            Practical reads to help you move{' '}
            <em className="font-serif italic tracking-[-0.08em]">faster.</em>
          </h1>
        </div>

        {/* Featured: migration guide */}
        <div className="mx-auto mt-12 max-w-[1200px]">
          <GuideFeaturedCard card={getMigrazioneBlogCard('en')} />
        </div>

        {/* Article Grid */}
        <div className="mx-auto mt-6 max-w-[1200px]">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="group flex flex-col overflow-hidden rounded-[24px] bg-white no-underline"
                style={{
                  border: '6px solid #f8f8f8',
                  boxShadow:
                    'rgba(108, 113, 128, 0.08) 0px 2px 4px 0px, rgba(108, 113, 128, 0.07) 0px 7px 7px 0px, rgba(108, 113, 128, 0.04) 0px 17px 10px 0px, rgba(108, 113, 128, 0.01) 0px 29px 12px 0px, rgba(108, 113, 128, 0) 0px 46px 13px 0px',
                }}
              >
                {/* Cover image (object-contain so any aspect ratio renders without crop) */}
                <div className="relative w-full overflow-hidden rounded-[16px_16px_0_0] bg-[#f5f5f5]">
                  <div className="relative w-full" style={{ aspectRatio: '16/9' }}>
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-contain transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                    />
                  </div>
                  {/* Article type pill */}
                  <div
                    className="absolute left-4 top-4 flex items-center rounded-full px-3 py-1"
                    style={{
                      backdropFilter: 'blur(24px)',
                      backgroundColor: '#f0f0f0',
                    }}
                  >
                    <span className="font-sans text-[12px] font-medium tracking-[-0.03em] text-[#181818]">
                      {article.articleType}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col gap-2 p-5">
                  <h2
                    className="font-sans font-semibold leading-[1.3em] tracking-[-0.02em] text-black"
                    style={{
                      fontSize: 'clamp(14.4px, 1.13rem, 18px)',
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                    }}
                  >
                    {article.title}
                  </h2>
                  <p
                    className="font-sans text-[14px] font-medium leading-[1.4em] tracking-[-0.02em]"
                    style={{ color: '#7c7c7c' }}
                  >
                    {article.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
