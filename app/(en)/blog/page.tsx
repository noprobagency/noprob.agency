import type { Metadata } from 'next'

import { buildMetadata } from '@/lib/site'
import { feedPath } from '@/lib/seo/rss'
import BlogIndex from '@/components/blog/BlogIndex'
import Footer from '@/components/layout/Footer'

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata({ path: '/blog', locale: 'en', pageKey: 'blog', feedPath: feedPath('en') })
}

export default function BlogPage() {
  return (
    <>
      <BlogIndex locale="en" />
      <Footer />
    </>
  )
}
