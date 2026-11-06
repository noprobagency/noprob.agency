import { mkdtempSync, readFileSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { describe, expect, it } from 'vitest'
import { fromCrm } from './leads.mjs'
import { appendSuppressed, applySuppressed, isSuppressed, missingLines, parseSuppressed, readSuppressed, refusals } from './suppression.mjs'

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
    expect(appendSuppressed(refusals([said, lead]), 'no', file)).toBe(2)
    expect(appendSuppressed(refusals([said]), 'no', file)).toBe(0)
    expect(readSuppressed(file).has('anna@acme-store.com')).toBe(true)
    expect(readSuppressed(file).has('@acme-store.com')).toBe(true)
    expect(readFileSync(file, 'utf8')).toContain('# no, cold email diretta')
  })
})

describe('store-wide refusals', () => {
  it('lists the store domain, never a private mailbox domain', () => {
    const said = { ...lead, segment: 'suppressed', reason: 'opt-out' }
    expect(refusals([said])).toEqual(['anna@acme-store.com', '@acme-store.com'])
    expect(refusals([{ ...said, email: 'anna@gmail.com', domain: 'gmail.com' }])).toEqual(['anna@gmail.com'])
  })
})

describe('opt-out list on two sides', () => {
  it('copies only what the other side lacks, comments kept, case ignored', () => {
    const local = '# header\na@x.it # no\n@shop.it\n'
    const shared = 'A@X.it\nb@y.it # opt-out\n'
    expect(missingLines(local, shared)).toEqual(['@shop.it'])
    expect(missingLines(shared, local)).toEqual(['b@y.it # opt-out'])
  })
})
