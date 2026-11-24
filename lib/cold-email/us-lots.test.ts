import { describe, expect, it } from 'vitest'
import { execFileSync } from 'node:child_process'
import { mkdirSync, mkdtempSync, symlinkSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { importUsRows, lotDone, saveLot, usLotFiles } from './us-lots.mjs'

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

describe('saveLot', () => {
  it('commits and pushes only the batch, through a symlink, leaving other changes alone', () => {
    const base = mkdtempSync(join(tmpdir(), 'lot-'))
    const git = (cwd: string, ...args: string[]) => execFileSync('git', ['-C', cwd, ...args], { encoding: 'utf8' }).trim()
    git(base, 'init', '-q', '--bare', '-b', 'main', 'remote.git')
    git(base, 'clone', '-q', join(base, 'remote.git'), 'crm')
    const crm = join(base, 'crm')
    git(crm, 'config', 'user.email', 'test@example.com')
    git(crm, 'config', 'user.name', 'test')
    mkdirSync(join(crm, 'state/lotti'), { recursive: true })
    writeFileSync(join(crm, 'state/lotti/a.json'), '{}\n')
    writeFileSync(join(crm, 'state/other.json'), '{}\n')
    git(crm, 'add', '.')
    git(crm, 'commit', '-q', '-m', 'init')
    git(crm, 'push', '-q', '-u', 'origin', 'main')
    writeFileSync(join(crm, 'state/lotti/a.json'), '{"done":true}\n')
    writeFileSync(join(crm, 'state/other.json'), '{"dirty":true}\n')
    symlinkSync(join(crm, 'state'), join(base, 'data'))
    expect(saveLot(join(base, 'data/lotti/a.json'), { pauseMs: 0 })).toBe('state/lotti/a.json: saved')
    expect(git(crm, 'status', '--porcelain')).toBe('M state/other.json')
    expect(git(join(base, 'remote.git'), 'show', 'main:state/lotti/a.json')).toBe('{"done":true}')
    expect(saveLot(join(base, 'data/lotti/a.json'), { pauseMs: 0 })).toBe('state/lotti/a.json: nothing to save')
  })
})
