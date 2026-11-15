import { describe, expect, it } from 'vitest'
import { mkdirSync, mkdtempSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { importUsRows, lotDone, usLotFiles } from './us-lots.mjs'

const row = (over = {}) => ({ domain: 'acme-us.com', email: 'sam@acme-us.com', name: 'Sam Lee', brand: 'Acme US', platform: 'woocommerce', market: 'US', finding: 'the images on your homepage weigh over 5 MB, which slows it down on phones', findingRule: 'images', findingAt: '2026-11-16T10:00:00Z', ...over })
const ctx = (over = {}) => ({ suppressed: /** @type {string[]} */ ([]), gojiberry: new Set<string>(), live: new Map<string, unknown>([['https://acme-us.com', { platform: 'woocommerce', status: 200 }]]), lcpApproved: false, clean: (s: string) => s, ...over })

describe('US batches', () => {
  it('waits until every row has a finding pass', () => {
    expect(lotDone([row(), row({ findingAt: null, findingRule: null })])).toBe(false)
    expect(lotDone([row()])).toBe(true)
  })
  it('imports ready rows, holds LCP until approved, skips opt-outs and out-of-target', () => {
    const db: { leads: Record<string, unknown>[] } = { leads: [] }
    const n = importUsRows(db, [row(), row({ domain: 'slow.com', email: 'a@slow.com', findingRule: 'lcp', finding: 'x' }), row({ domain: 'no.com', email: 'b@no.com' }), row({ domain: 'bad.com', email: 'c@bad.com' })], ctx({ suppressed: ['@no.com'], excluded: new Set(['bad.com']) }))
    expect(n).toMatchObject({ added: 2, ready: 1, lcpWaiting: 1, blocked: 2 })
    expect(db.leads.find((l) => l.domain === 'acme-us.com')).toMatchObject({ line: 'us', lang: 'en', segment: 'target' })
    expect(db.leads.find((l) => l.domain === 'slow.com')).toMatchObject({ segment: 'review', reason: 'frase LCP da approvare', findingPending: 'x' })
  })
  it('never revives a lead marked out of target', () => {
    const db = { leads: [{ domain: 'acme-us.com', email: 'sam@acme-us.com', line: 'us', segment: 'review', reason: 'fuori target', sequence: { sent: [] } }] }
    expect(importUsRows(db, [row()], ctx()).known).toBe(1)
    expect(db.leads[0].reason).toBe('fuori target')
  })
})

describe('US batch files', () => {
  it("reads Damiano's US folder without the us- prefix", () => {
    const root = mkdtempSync(join(tmpdir(), 'lots-'))
    mkdirSync(join(root, 'us/lotti'), { recursive: true })
    mkdirSync(join(root, 'lotti'))
    writeFileSync(join(root, 'us/lotti/2026-11-16-1.json'), '[]')
    writeFileSync(join(root, 'lotti/2026-11-16-1.json'), '[]')
    writeFileSync(join(root, 'lotti/us-2026-11-15-1.json'), '[]')
    expect(usLotFiles([join(root, 'us/lotti'), join(root, 'lotti')]).map((f) => f.slice(root.length))).toEqual(['/lotti/us-2026-11-15-1.json', '/us/lotti/2026-11-16-1.json'])
  })
})
