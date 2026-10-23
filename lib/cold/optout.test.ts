import { describe, expect, it } from 'vitest'
import { isOptOut } from './optout.mjs'
import { isSuppressed, parseSuppressed } from './sweep.mjs'

describe('isOptOut', () => {
  it('catches English refusals', () => {
    expect(isOptOut('Please unsubscribe me')).toBe(true)
    expect(isOptOut('Not interested, thanks')).toBe(true)
    expect(isOptOut("Don't email me again")).toBe(true)
    expect(isOptOut('Please remove me from your list')).toBe(true)
    expect(isOptOut('No.')).toBe(true)
    expect(isOptOut('stop')).toBe(true)
  })

  it('catches Italian refusals', () => {
    expect(isOptOut('Non mi interessa, grazie')).toBe(true)
    expect(isOptOut('Non scrivermi più per favore')).toBe(true)
    expect(isOptOut('Cancellami dalla lista')).toBe(true)
    expect(isOptOut('No grazie')).toBe(true)
    expect(isOptOut('Non siamo interessati al momento')).toBe(true)
  })

  it('leaves real conversations alone', () => {
    expect(isOptOut('Sure, how much is the sprint?')).toBe(false)
    expect(isOptOut('Ciao, si ci stiamo pensando. Quanto tempo serve?')).toBe(false)
    expect(isOptOut('No problem, send me the list of issues')).toBe(false)
    expect(isOptOut('')).toBe(false)
  })

  it('reads only the new part of an email reply', () => {
    expect(isOptOut('Tell me more\n\nOn Mon, Antonio wrote:\n> not interested? reply no')).toBe(false)
    expect(isOptOut('Interesting\n> unsubscribe')).toBe(false)
  })
})

describe('isSuppressed', () => {
  const lead = { website: 'https://www.acme-store.com/shop', email: 'Anna@Acme-Store.com' }
  it('matches an email or the store domain', () => {
    expect(isSuppressed(lead, ['anna@acme-store.com'])).toBe(true)
    expect(isSuppressed(lead, ['@acme-store.com'])).toBe(true)
    expect(isSuppressed({ website: 'acme-store.com' }, ['@acme-store.com'])).toBe(true)
  })
  it('ignores other leads', () => {
    expect(isSuppressed(lead, ['@other.com', 'bob@acme-store.com'])).toBe(false)
    expect(isSuppressed({ website: '' }, ['@acme-store.com'])).toBe(false)
  })
})

describe('parseSuppressed', () => {
  it('drops comments, also after an entry', () => {
    const text = '# header\nAnna@Acme.com # no, cold email diretta 2026-10-23\n\n@shop.it\n'
    expect(parseSuppressed(text)).toEqual(['anna@acme.com', '@shop.it'])
  })
})
