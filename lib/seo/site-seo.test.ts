import { describe, expect, it } from 'vitest'

import robots from '@/app/robots'
import sitemap from '@/app/sitemap'
import {
  AREA_SERVED,
  FOUNDER_ID,
  ORGANIZATION_ID,
  TRUSTPILOT_URL,
  buildMetadata,
  organizationJsonLd,
} from '@/lib/site'

describe('Organization JSON-LD', () => {
  it('has stable @id for the company and the founder', () => {
    expect(organizationJsonLd['@id']).toBe(ORGANIZATION_ID)
    expect(organizationJsonLd.founder['@id']).toBe(FOUNDER_ID)
    expect(ORGANIZATION_ID).toMatch(/^https:\/\/[^/]+\/#organization$/)
    expect(FOUNDER_ID).toMatch(/^https:\/\/[^/]+\/about#antonio-manitta$/)
  })

  it('serves the US, UK, Australia and the world, with the US first and no Italian base', () => {
    expect(AREA_SERVED.map((a) => a.name)).toEqual(['United States', 'United Kingdom', 'Australia', 'Worldwide'])
    expect(organizationJsonLd.address.addressCountry).toBe('US')
  })

  it('keeps the existing sameAs profiles, Trustpilot included', () => {
    expect(organizationJsonLd.sameAs).toContain(TRUSTPILOT_URL)
    expect(organizationJsonLd.sameAs.length).toBeGreaterThanOrEqual(4)
  })
})

describe('buildMetadata', () => {
  it('stays a website page by default and becomes an article with dates and author', () => {
    const page = buildMetadata({ path: '/', locale: 'en' })
    expect(page.openGraph).toMatchObject({ type: 'website' })

    const post = buildMetadata({
      path: '/blog/x',
      locale: 'en',
      article: { publishedTime: '2026-10-01T10:00:00+02:00', modifiedTime: '2026-10-02T10:00:00+02:00' },
    })
    expect(post.openGraph).toMatchObject({
      type: 'article',
      publishedTime: '2026-10-01T10:00:00+02:00',
      authors: ['Antonio Manitta'],
    })
  })

  it('adds the RSS alternate only when a feed is given', () => {
    expect(buildMetadata({ path: '/blog', locale: 'en' }).alternates?.types).toBeUndefined()
    const withFeed = buildMetadata({ path: '/blog', locale: 'en', feedPath: '/blog/rss.xml' })
    expect(withFeed.alternates?.types?.['application/rss+xml']).toMatch(/\/blog\/rss\.xml$/)
  })
})

describe('robots', () => {
  const rules = robots().rules as Array<{ userAgent: string; allow: string; disallow: string[] }>
  const agents = rules.map((r) => r.userAgent)

  it('allows the AI crawlers, with the same disallow as the generic group', () => {
    for (const bot of ['GPTBot', 'ClaudeBot', 'Claude-SearchBot', 'Claude-User', 'PerplexityBot', 'Perplexity-User', 'Google-Extended', 'Applebot-Extended']) {
      const rule = rules.find((r) => r.userAgent === bot)
      expect(rule, bot).toBeDefined()
      expect(rule?.allow).toBe('/')
      expect(rule?.disallow).toEqual(['/api/', '/admin/'])
    }
    expect(agents[0]).toBe('*')
  })
})

describe('sitemap', () => {
  const entries = sitemap()

  it('emits no priority and no changefreq', () => {
    for (const entry of entries) {
      expect(entry).not.toHaveProperty('priority')
      expect(entry).not.toHaveProperty('changeFrequency')
    }
  })

  it('has unique URLs, a real lastmod and hreflang alternates', () => {
    expect(new Set(entries.map((e) => e.url)).size).toBe(entries.length)
    for (const entry of entries) {
      expect(entry.lastModified instanceof Date && !Number.isNaN(entry.lastModified.getTime()), entry.url).toBe(true)
      expect(entry.alternates?.languages, entry.url).toBeDefined()
    }
  })

  it('moves the blog hub lastmod with its newest article', () => {
    const hub = entries.find((e) => e.url.endsWith('/blog'))!
    const articleDates = entries
      .filter((e) => /\/blog\/[^/]+$/.test(e.url) && !e.url.endsWith('/blog'))
      .map((e) => (e.lastModified as Date).getTime())
    expect((hub.lastModified as Date).getTime()).toBeGreaterThanOrEqual(Math.max(...articleDates))
  })
})
