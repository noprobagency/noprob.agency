import { describe, expect, it } from 'vitest'

import { estimateTier, exceedsTierCaps, tierForRevenue } from './tier'
import { ZL_TIERS, getZlTier } from '@/content/zero-loss-migration'

describe('tierForRevenue', () => {
  it('maps every revenue band to a tier, under €300k included', () => {
    expect(tierForRevenue('under300k')).toBe(1)
    expect(tierForRevenue('300k-2m')).toBe(1)
    expect(tierForRevenue('2m-20m')).toBe(2)
    expect(tierForRevenue('over20m')).toBe(3)
  })

  it('returns null when nothing is selected', () => {
    expect(tierForRevenue('')).toBeNull()
  })
})

describe('ZL_TIERS', () => {
  it('prices are 4 equal installments and strictly increasing', () => {
    for (const tier of ZL_TIERS) expect(tier.installment * 4).toBe(tier.price)
    expect(ZL_TIERS.map((t) => t.price)).toEqual([5800, 8800, 12800])
  })
})

describe('exceedsTierCaps', () => {
  it('tier 1 without extras has no add-on', () => {
    expect(exceedsTierCaps(getZlTier(1), { products: 'under2000', languages: '1', erp: 'no' })).toBe(false)
  })

  it('tier 1 with an ERP or a second language needs an add-on', () => {
    expect(exceedsTierCaps(getZlTier(1), { products: 'under2000', languages: '1', erp: 'yes' })).toBe(true)
    expect(exceedsTierCaps(getZlTier(1), { products: 'under2000', languages: '2-3', erp: 'no' })).toBe(true)
  })

  it('tier 2 includes one ERP and up to 3 languages, not 10k+ products', () => {
    expect(exceedsTierCaps(getZlTier(2), { products: '2000-10000', languages: '2-3', erp: 'yes' })).toBe(false)
    expect(exceedsTierCaps(getZlTier(2), { products: 'over10000', languages: '1', erp: 'no' })).toBe(true)
  })

  it('tier 3 has no caps except a custom ERP', () => {
    expect(exceedsTierCaps(getZlTier(3), { products: 'over10000', languages: '4plus', erp: 'no' })).toBe(false)
    expect(exceedsTierCaps(getZlTier(3), { products: 'under2000', languages: '1', erp: 'yes' })).toBe(true)
  })
})

describe('estimateTier', () => {
  it('returns the tier and the add-on flag from the form answers', () => {
    expect(estimateTier({ revenue: '2m-20m', products: 'over10000', languages: '1', erp: 'no' })).toEqual({
      tier: getZlTier(2),
      addon: true,
    })
  })

  it('returns null without a revenue band', () => {
    expect(estimateTier({ revenue: '', products: 'under2000', languages: '1', erp: 'no' })).toBeNull()
  })
})
