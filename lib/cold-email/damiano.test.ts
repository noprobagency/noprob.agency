import { describe, expect, it } from 'vitest'
import { helloPayload, pickQueue } from './damiano.mjs'

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
