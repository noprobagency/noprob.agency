import { buildRssFeed } from '@/lib/seo/rss'

export const dynamic = 'force-static'

export function GET() {
  return new Response(buildRssFeed('it'), {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=0, s-maxage=3600, stale-while-revalidate=86400',
    },
  })
}
