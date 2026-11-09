import { describe, expect, it } from 'vitest'

import { ZL_TIERS } from '@/content/zero-loss-migration'
import {
  AMBASSADOR_TIERS,
  ambassadorCommission,
  getAmbassadorCopy,
  whiteLabelInstallment,
  whiteLabelPartnerPrice,
} from '@/lib/i18n/ambassador'

describe('ambassador and white label money', () => {
  it('derives the tiers from the Sprint price list', () => {
    expect(AMBASSADOR_TIERS).toBe(ZL_TIERS)
  })

  it('pays from €1.000 on the base tier, rounded down to the hundred', () => {
    expect(ZL_TIERS.map((t) => ambassadorCommission(t.price))).toEqual([1000, 1500, 2200])
  })

  it('never pays more than 20% of a tier price', () => {
    for (const t of ZL_TIERS) {
      expect(ambassadorCommission(t.price)).toBeLessThanOrEqual(t.price * 0.2)
      expect(ambassadorCommission(t.price) % 100).toBe(0)
    }
  })

  it('white label partner price is the public price minus the partner amount, in 4 whole installments', () => {
    expect(ZL_TIERS.map((t) => whiteLabelPartnerPrice(t.price))).toEqual([4800, 7300, 10600])
    for (const t of ZL_TIERS) {
      expect(whiteLabelPartnerPrice(t.price) + ambassadorCommission(t.price)).toBe(t.price)
      expect(Number.isInteger(whiteLabelInstallment(t.price))).toBe(true)
    }
  })
})

describe('ambassador copy', () => {
  const it_ = getAmbassadorCopy('it')
  const en = getAmbassadorCopy('en')

  it('IT and EN have the same structure', () => {
    expect(en.hero.toc.map((t) => t.id)).toEqual(it_.hero.toc.map((t) => t.id))
    expect(en.programs.items.length).toBe(it_.programs.items.length)
    expect(en.whiteLabel.steps.length).toBe(it_.whiteLabel.steps.length)
    expect(en.whiteLabel.faq.length).toBe(it_.whiteLabel.faq.length)
    expect(en.whiteLabel.tiers.map((t) => t.partnerPrice.replace(',', '.'))).toEqual(
      it_.whiteLabel.tiers.map((t) => t.partnerPrice)
    )
  })

  it('starts from €1.000 and no longer advertises a 20% commission', () => {
    expect(it_.hero.titleEm).toContain('€1.000')
    expect(en.hero.titleEm).toContain('€1,000')
    expect(JSON.stringify(it_)).not.toContain('20%')
    expect(JSON.stringify(en)).not.toContain('20%')
  })

  it('quotes the 4 Sprint guarantees word for word', () => {
    expect(it_.whiteLabel.guarantees).toBe(
      'Store pronto al giorno 14 o ti rimborsiamo la prima rata. Traffico organico sotto la baseline a 90 giorni dal go-live? Lavoriamo gratis finché non torna. Store offline al lancio per colpa nostra? Una rata la paghiamo noi. Il checkout converte meno di prima a 90 giorni? Lo ottimizziamo gratis finché non supera.'
    )
    expect(en.whiteLabel.guarantees).toBe(
      'Store ready on day 14 or we refund the first installment. Organic traffic below the baseline 90 days after go-live? We work for free until it comes back. Store offline at launch because of us? We pay one installment. Checkout converting less than before at 90 days? We optimize it for free until it beats it.'
    )
  })

  it('every TOC entry points to a section id rendered by the playbook', () => {
    const ids = [
      'programmi', 'come-funziona', 'commissioni', 'white-label', 'offerta', 'materiali', 'prezzo', 'target',
      'problemi', 'dove-trovarli', 'pitch', 'qualificare', 'vendita', 'promozione', 'regole', 'segnalare', 'faq',
    ]
    for (const t of it_.hero.toc) expect(ids).toContain(t.id)
  })
})
