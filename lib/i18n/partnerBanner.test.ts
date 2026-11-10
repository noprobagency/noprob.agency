import { describe, expect, it } from 'vitest'

import { getPartnerBannerCopy, PARTNER_MIN_EARNING } from './partnerBanner'

describe('partner banner', () => {
  it('states the first-tier commission as what the partner earns', () => {
    expect(PARTNER_MIN_EARNING).toBe(1000)
    expect(getPartnerBannerCopy('en').body).toContain('You earn from €1,000 per project')
    expect(getPartnerBannerCopy('it').body).toContain('Guadagni da €1.000 a progetto')
  })
})
