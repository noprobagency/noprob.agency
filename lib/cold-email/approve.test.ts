import { describe, expect, it } from 'vitest'
import { cleanCompany, review } from './approve.mjs'

const taken = { linkedin: new Set(['linked.it']), direct: new Set(['direct.it']), suppressed: new Set(['@nope.it', 'anna@acme.it']) }
const lead = (over = {}) => ({ website: 'https://www.acme.it', lastName: 'Rossi', company: 'Acme Srl', location: 'Milan, Lombardy, Italy', jobTitle: 'CTO', email: '', ...over })
const woo = { platform: 'woocommerce' }

describe('Dante lead review', () => {
  it('approves a decision maker of a non-Shopify store nobody else is working', () => {
    expect(review(lead(), woo, taken)).toMatchObject({ action: 'approve', domain: 'acme.it' })
  })

  it('moves Shopify stores to the side list', () => {
    expect(review(lead(), { platform: 'shopify' }, taken).action).toBe('shopify')
  })

  it('rejects stores of other channels and opt-outs', () => {
    expect(review(lead({ website: 'linked.it', company: 'Linked' }), woo, taken).reason).toBe('store in the LinkedIn campaign')
    expect(review(lead({ website: 'https://direct.it/', company: 'Direct' }), woo, taken).reason).toBe('store in the direct email channel')
    expect(review(lead({ website: 'nope.it', company: 'Nope' }), woo, taken).reason).toBe('opt-out list')
    expect(review(lead({ email: 'Anna@acme.it' }), woo, taken).reason).toBe('opt-out list')
  })

  it('never approves on an error page (bot wall, rate limit, server error)', () => {
    expect(review(lead(), { platform: 'other', status: 403 }, taken)).toMatchObject({ action: 'hold', reason: 'site unreachable' })
    expect(review(lead(), { platform: 'other', status: 200 }, taken).action).toBe('approve')
  })

  it('holds what needs a human', () => {
    expect(review(lead({ website: '' }), null, taken).action).toBe('hold')
    expect(review(lead(), { platform: 'unreachable' }, taken).action).toBe('hold')
    expect(review(lead({ jobTitle: 'Customer Service Assistant' }), woo, taken).reason).toBe('not a decision maker')
    expect(review(lead({ location: 'Birmingham, Alabama, United States' }), woo, taken).reason).toBe('not based in Italy (Italian copy)')
    expect(review(lead({ location: 'Los Angeles Metropolitan Area', companyLocation: 'Florence, Alabama, United States' }), woo, taken).reason).toBe('not based in Italy (Italian copy)')
    expect(review(lead({ location: 'Greater Milan Metropolitan Area' }), woo, taken).action).toBe('approve')
    expect(review(lead({ company: 'Mobilificio Marchese', website: 'http://www.pepperchic.com/' }), woo, taken).reason).toBe('site does not match the company')
  })
})

describe('company name for the subject', () => {
  it('drops legal suffixes, domain endings and capitals', () => {
    expect(cleanCompany('UNOAERRE INDUSTRIES SPA')).toBe('Unoaerre Industries')
    expect(cleanCompany('Tsunami Nutrition S.r.l.')).toBe('Tsunami Nutrition')
    expect(cleanCompany('Zicaffè SpA')).toBe('Zicaffè')
    expect(cleanCompany('Semprefarmacia.it')).toBe('Semprefarmacia')
    expect(cleanCompany('Würth MODYF Italy')).toBe('Würth MODYF')
    expect(cleanCompany('Camicissima')).toBe('Camicissima')
  })
})
