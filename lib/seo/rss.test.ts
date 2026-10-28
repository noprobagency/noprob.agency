import { describe, expect, it } from 'vitest'

import { articles } from '@/data/articles'
import { buildRssFeed, escapeXml, feedPath } from './rss'

describe('buildRssFeed', () => {
  for (const locale of ['en', 'it'] as const) {
    describe(locale, () => {
      const xml = buildRssFeed(locale)

      it('has one item per article, each with an absolute link', () => {
        expect(xml.match(/<item>/g)).toHaveLength(articles.length)
        const links = [...xml.matchAll(/<item>[\s\S]*?<link>([^<]+)<\/link>/g)].map((m) => m[1])
        expect(links).toHaveLength(articles.length)
        for (const link of links) expect(link).toMatch(/^https?:\/\/[^/]+\/(it\/)?blog\/[a-z0-9-]+$/)
      })

      it('declares itself and the language, and is well formed enough to start and end right', () => {
        expect(xml.startsWith('<?xml version="1.0" encoding="UTF-8"?>')).toBe(true)
        expect(xml).toContain(`<language>${locale === 'it' ? 'it-IT' : 'en-US'}</language>`)
        expect(xml).toContain(`href="https://noprob.agency${feedPath(locale)}"`)
        expect(xml.trimEnd().endsWith('</rss>')).toBe(true)
      })

      it('has no raw ampersands or angle brackets inside text nodes', () => {
        const text = [...xml.matchAll(/<(title|description)>([^<]*)<\/\1>/g)].map((m) => m[2])
        for (const t of text) expect(t).not.toMatch(/&(?!amp;|lt;|gt;|quot;|apos;)/)
      })
    })
  }

  it('puts the feeds under the blog of each locale', () => {
    expect(feedPath('en')).toBe('/blog/rss.xml')
    expect(feedPath('it')).toBe('/it/blog/rss.xml')
  })
})

describe('escapeXml', () => {
  it('escapes the five XML characters', () => {
    expect(escapeXml(`a & b < c > "d" 'e'`)).toBe('a &amp; b &lt; c &gt; &quot;d&quot; &apos;e&apos;')
  })
})
