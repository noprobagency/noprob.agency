import { describe, expect, it } from 'vitest'

import { articles } from '@/data/articles'

const ISO_WITH_OFFSET = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}[+-]\d{2}:\d{2}$/

describe('article dates', () => {
  it('have an ISO 8601 publication and modification date with a UTC offset', () => {
    for (const a of articles) {
      expect(a.datePublishedIso, `${a.slug} datePublishedIso`).toMatch(ISO_WITH_OFFSET)
      expect(a.dateModifiedIso, `${a.slug} dateModifiedIso`).toMatch(ISO_WITH_OFFSET)
    }
  })

  it('never modify an article before it was published', () => {
    for (const a of articles) {
      const published = new Date(a.datePublishedIso!).getTime()
      const modified = new Date(a.dateModifiedIso!).getTime()
      expect(modified, a.slug).toBeGreaterThanOrEqual(published)
    }
  })

  it('show the same day as the publication date', () => {
    for (const a of articles) {
      expect(a.date, a.slug).toBe(a.datePublishedIso!.slice(0, 10))
    }
  })

  it('publish on weekdays', () => {
    for (const a of articles) {
      const day = new Date(`${a.date}T12:00:00Z`).getUTCDay()
      expect([0, 6], `${a.slug} (${a.date})`).not.toContain(day)
    }
  })
})
