import { describe, expect, it } from 'vitest'
import { directTake, helloPayload, helloTake, pickQueue } from './damiano.mjs'

const row = (over = {}) => ({ brand: 'Acme', domain: 'www.acme.it', name: 'Sara De Luca', title: 'CEO', email: 'sara@acme.it', linkedin: 'https://linkedin.com/in/sara', city: 'Verona', ...over })

describe('Damiano queue', () => {
  it('keeps only free stores, once each', () => {
    const seen = { used: { 'used.it': {} }, domains: new Set(['taken.it']), emails: new Set(['x@other.it']), suppressed: new Set(['@nope.it', 'no@yes.it']) }
    const rows = [row(), row({ email: 'b@acme.it' }), row({ domain: 'used.it', email: 'a@used.it' }), row({ domain: 'taken.it', email: 'a@taken.it' }), row({ domain: 'other.it', email: 'x@other.it' }), row({ domain: 'nope.it', email: 'a@nope.it' }), row({ domain: 'yes.it', email: 'no@yes.it' })]
    expect(pickQueue(rows, seen).map((r) => r.email)).toEqual(['sara@acme.it'])
  })

  it('builds a Gojiberry contact with the email and an Italian location', () => {
    expect(helloPayload(row(), 65682)).toMatchObject({ firstName: 'Sara', lastName: 'De Luca', website: 'https://acme.it', location: 'Verona, Italy', email: 'sara@acme.it', listId: 65682 })
  })
})

describe('channel top-up', () => {
  const rows = (linkedin: number, without: number) => [
    ...Array.from({ length: linkedin }, (_, i) => ({ email: `l${i}@a.it`, linkedin: `in/${i}` })),
    ...Array.from({ length: without }, (_, i) => ({ email: `n${i}@a.it` })),
  ]

  it('tops hello@ up to the daily limit even above the old threshold', () => {
    expect(helloTake(rows(74, 10), 30)).toHaveLength(20)
    expect(helloTake(rows(74, 10), 50)).toHaveLength(0)
    expect(helloTake(rows(3, 10), 0).every((r) => r.linkedin)).toBe(true)
  })

  it('tops the direct channel up when it could not fill a day', () => {
    expect(directTake(rows(0, 90), 40)).toHaveLength(20)
    expect(directTake(rows(0, 90), 50)).toHaveLength(0)
  })

  it('keeps the hello@ reserve of LinkedIn rows out of the direct channel', () => {
    expect(directTake(rows(74, 5), 0).map((r) => r.email)).toEqual(['n0@a.it', 'n1@a.it', 'n2@a.it', 'n3@a.it', 'n4@a.it'])
    const take = directTake(rows(130, 5), 0)
    expect(take).toHaveLength(35)
    expect(take.filter((r) => r.linkedin)).toHaveLength(30)
  })
})
