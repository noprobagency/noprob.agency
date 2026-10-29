import { describe, expect, it } from 'vitest'

import { articles, type ArticleSection } from '@/data/articles'

type TableSection = Extract<ArticleSection, { type: 'table' }>

function tables(content: ArticleSection[] | undefined): TableSection[] {
  return (content ?? []).filter((s): s is TableSection => s.type === 'table')
}

describe('article tables', () => {
  it('have a header, at least one row and as many cells as headers in every row', () => {
    for (const a of articles) {
      for (const [locale, content] of [
        ['en', a.content],
        ['it', a.contentIt],
      ] as const) {
        for (const [i, table] of tables(content).entries()) {
          const where = `${a.slug} ${locale} table ${i + 1}`
          expect(table.headers.length, `${where} headers`).toBeGreaterThanOrEqual(2)
          expect(table.rows.length, `${where} rows`).toBeGreaterThan(0)
          for (const [r, row] of table.rows.entries()) {
            expect(row.length, `${where} row ${r + 1}`).toBe(table.headers.length)
            for (const cell of row) expect(cell.trim(), `${where} row ${r + 1} cell`).not.toBe('')
          }
        }
      }
    }
  })

  it('are the same in Italian and English (same count, same shape)', () => {
    for (const a of articles) {
      if (!a.contentIt) continue
      const en = tables(a.content)
      const it = tables(a.contentIt)
      expect(it.length, `${a.slug} tables`).toBe(en.length)
      en.forEach((t, i) => {
        expect(it[i].headers.length, `${a.slug} table ${i + 1} columns`).toBe(t.headers.length)
        expect(it[i].rows.length, `${a.slug} table ${i + 1} rows`).toBe(t.rows.length)
      })
    }
  })

  it('exist in the eight articles that compare things side by side', () => {
    const withTables = articles.filter((a) => tables(a.content).length > 0).map((a) => a.slug)
    expect(withTables.sort()).toEqual(
      [
        'ai-customer-service-shopify',
        'bigcommerce-vs-shopify',
        'claude-duet-shopify',
        'claude-shopify',
        'geo-vs-seo',
        'shopify-flow-ai',
        'shopify-mcp',
        'shopify-migration-ai-agents',
      ].sort(),
    )
  })
})
