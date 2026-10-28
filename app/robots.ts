import type { MetadataRoute } from 'next'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://noprob.agency'

// /_next/ stays crawlable: Googlebot needs its JS, CSS and /_next/image to render and index images
const DISALLOW = ['/api/', '/admin/']

/**
 * Crawlers of AI search and assistants (GEO). A group with its own user agent
 * ignores the generic `*` group, so each one repeats the `Disallow` lines.
 */
const AI_CRAWLERS = [
  'GPTBot',
  'ChatGPT-User',
  'OAI-SearchBot',
  'ClaudeBot',
  'Claude-SearchBot',
  'Claude-User',
  'anthropic-ai',
  'PerplexityBot',
  'Perplexity-User',
  'Google-Extended',
  'Applebot-Extended',
]

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/', disallow: DISALLOW },
      ...AI_CRAWLERS.map((userAgent) => ({ userAgent, allow: '/', disallow: DISALLOW })),
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  }
}
