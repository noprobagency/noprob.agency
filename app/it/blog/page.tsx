import type { Metadata } from 'next'

import { buildMetadata } from '@/lib/site'
import { feedPath } from '@/lib/seo/rss'
import BlogIndex from '@/components/blog/BlogIndex'
import Footer from '@/components/layout/Footer'

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata({ path: '/it/blog', locale: 'it', pageKey: 'blog', feedPath: feedPath('it') })
}

export default function ItalianBlogPage() {
  return (
    <>
      <BlogIndex locale="it" />
      <Footer locale="it" />
    </>
  )
}
