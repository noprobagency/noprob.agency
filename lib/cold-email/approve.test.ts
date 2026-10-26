import { describe, expect, it } from 'vitest'
import { review } from './approve.mjs'

const taken = { linkedin: new Set(['linked.it']), direct: new Set(['direct.it']), suppressed: new Set(['@nope.it', 'anna@acme.it']) }
const lead = (over = {}) => ({ website: 'https://www.acme.it', lastName: 'Rossi', jobTitle: 'CTO', email: '', ...over })
const woo = { platform: 'woocommerce' }

describe('Dante lead review', () => {
  it('approves a decision maker of a non-Shopify store nobody else is working', () => {
    expect(review(lead(), woo, taken)).toMatchObject({ action: 'approve', domain: 'acme.it' })
  })

  it('moves Shopify stores to the side list', () => {
    expect(review(lead(), { platform: 'shopify' }, taken).action).toBe('shopify')
  })

  it('rejects stores of other channels and opt-outs', () => {
    expect(review(lead({ website: 'linked.it' }), woo, taken).reason).toBe('store in the LinkedIn campaign')
    expect(review(lead({ website: 'https://direct.it/' }), woo, taken).reason).toBe('store in the direct email channel')
    expect(review(lead({ website: 'nope.it' }), woo, taken).reason).toBe('opt-out list')
    expect(review(lead({ email: 'Anna@acme.it' }), woo, taken).reason).toBe('opt-out list')
  })

  it('holds what needs a human', () => {
    expect(review(lead({ website: '' }), null, taken).action).toBe('hold')
    expect(review(lead(), { platform: 'unreachable' }, taken).action).toBe('hold')
    expect(review(lead({ jobTitle: 'Customer Service Assistant' }), woo, taken).reason).toBe('not a decision maker')
  })
})
