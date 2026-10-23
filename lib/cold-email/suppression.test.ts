import { mkdtempSync, readFileSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { describe, expect, it } from 'vitest'
import { fromCrm } from './leads.mjs'
import { appendSuppressed, applySuppressed, isSuppressed, parseSuppressed, readSuppressed, refusals } from './suppression.mjs'

const lead = fromCrm({ id: 'a', brand: 'Acme', contact: 'Anna', email: 'Anna@Acme-Store.com', domain: 'www.acme-store.com', status: 'archived' }, 'no_reply', {
  platform: 'woocommerce',
})

describe('shared opt-out list', () => {
  it('parses emails and domains, skipping comments', () => {
    expect(parseSuppressed('# header\nAnna@x.com # no\n\n@Y.it\n')).toEqual(['anna@x.com', '@y.it'])
  })

  it('matches the email, the store domain or the email domain', () => {
    expect(isSuppressed(lead, new Set(['anna@acme-store.com']))).toBe(true)
    expect(isSuppressed(lead, new Set(['@acme-store.com']))).toBe(true)
    expect(isSuppressed(lead, new Set(['bob@acme-store.com', '@other.com']))).toBe(false)
  })

  it('stops the sequence of a listed lead and lists our refusals once', () => {
    const [out] = applySuppressed([lead], new Set(['@acme-store.com']))
    expect(out.segment).toBe('suppressed')
    expect(out.sequence.stopReason).toBe('opt-out')

    const file = join(mkdtempSync(join(tmpdir(), 'supp-')), 'suppressed.txt')
    writeFileSync(file, '# shared\n')
    const said = { ...lead, segment: 'suppressed', reason: 'said no' }
    expect(appendSuppressed(refusals([said, lead]), 'no', file)).toBe(1)
    expect(appendSuppressed(refusals([said]), 'no', file)).toBe(0)
    expect(readSuppressed(file).has('anna@acme-store.com')).toBe(true)
    expect(readFileSync(file, 'utf8')).toContain('# no, cold email diretta')
  })
})
