import { describe, expect, it } from 'vitest'

import { contactSchema } from './contact'
import { isBusinessEmail, isStoreUrl, zeroLossSchema } from './zeroLoss'

const validSprint = {
  websiteUrl: 'www.store.it',
  platform: 'woocommerce',
  revenue_band: '300k-2m',
  products: 'under2000',
  languages: '1',
  erp: 'no',
  start_timing: 'now',
  reason: 'Il sito è lento e ogni modifica è un ticket.',
  name: 'Mario Rossi',
  email: 'mario@azienda.it',
  phone: '',
  privacy: true,
  tier: 1,
  estimated_price: 5800,
  locale: 'it',
  source: 'zero-loss-migration',
}

describe('zeroLossSchema', () => {
  it('accepts a complete application', () => {
    expect(zeroLossSchema.safeParse(validSprint).success).toBe(true)
  })

  it('rejects free mailbox providers', () => {
    const result = zeroLossSchema.safeParse({ ...validSprint, email: 'mario@gmail.com' })
    expect(result.success).toBe(false)
    expect(result.error?.issues[0]?.path).toEqual(['email'])
  })

  it('requires the ERP name when an ERP is connected', () => {
    const result = zeroLossSchema.safeParse({ ...validSprint, erp: 'yes', erpName: ' ' })
    expect(result.success).toBe(false)
    expect(result.error?.issues[0]?.path).toEqual(['erpName'])
  })

  it('rejects a foreign source and a non-accepted privacy policy', () => {
    expect(zeroLossSchema.safeParse({ ...validSprint, source: 'other' }).success).toBe(false)
    expect(zeroLossSchema.safeParse({ ...validSprint, privacy: false }).success).toBe(false)
  })
})

describe('isStoreUrl / isBusinessEmail', () => {
  it('accepts bare domains and full URLs', () => {
    expect(isStoreUrl('store.it')).toBe(true)
    expect(isStoreUrl('https://www.store.it/shop')).toBe(true)
    expect(isStoreUrl('not a url')).toBe(false)
  })

  it('tells business addresses from free mailboxes', () => {
    expect(isBusinessEmail('anna@brand.com')).toBe(true)
    expect(isBusinessEmail('anna@hotmail.it')).toBe(false)
    expect(isBusinessEmail('anna@googlemail.com')).toBe(false)
  })
})

describe('contactSchema', () => {
  const valid = {
    name: 'Anna Bianchi',
    company: 'Brand Srl',
    email: 'anna@brand.com',
    phone: '+39 320 000 0000',
    interest: 'I want to migrate to Shopify',
    revenue: 'More than €500,000',
    adsSpend: 'Less than €2,500/month',
  }

  it('accepts a complete request and rejects a missing selection', () => {
    expect(contactSchema.safeParse(valid).success).toBe(true)
    expect(contactSchema.safeParse({ ...valid, interest: '' }).success).toBe(false)
  })
})
