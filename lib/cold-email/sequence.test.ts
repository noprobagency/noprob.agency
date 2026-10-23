import { describe, expect, it } from 'vitest'
import { excludeDomains, firstNameOf, fromCrm, onePerDomain } from './leads.mjs'
import { STEPS, addWorkingDays, dueStep, render } from './sequence.mjs'

const prospect = (over = {}) => ({
  id: 'p1',
  brand: 'Acme',
  contact: 'sara rossi',
  email: 'sara@acme.it',
  domain: 'acme.it',
  platform: 'non-Shopify',
  status: 'archived',
  angle: '1A',
  first_email_snippet: 'Ciao Sara, mi sono imbattuto in Acme',
  ...over,
})

describe('leads from the old CRM', () => {
  it('segments by what happened in the old thread', () => {
    expect(fromCrm(prospect(), 'no_reply', { platform: 'woocommerce', php: null }).segment).toBe('target')
    expect(fromCrm(prospect(), 'no_reply', { platform: 'shopify', php: null }).segment).toBe('shopify')
    expect(fromCrm(prospect(), 'bounced').reason).toBe('bounce')
    const optOut = prospect({ status: 'in_conversation', last_reply_from_prospect: { snippet: 'Remove me.' } })
    expect(fromCrm(optOut, 'active').reason).toBe('opt-out')
    expect(fromCrm(prospect({ status: 'in_conversation' }), 'active').segment).toBe('warm')
  })

  it('greets people, not company mailboxes', () => {
    expect(firstNameOf('sara rossi', 'sara@acme.it')).toBe('Sara')
    expect(firstNameOf('Customer Care', 'customer@acme.it')).toBe(null)
    expect(firstNameOf('', 'x@acme.it')).toBe(null)
  })

  it('keeps one lead per domain and skips Gojiberry domains', () => {
    const a = fromCrm(prospect({ id: 'a', contact: '', email: 'info@acme.it' }), 'no_reply', { platform: 'magento' })
    const b = fromCrm(prospect({ id: 'b' }), 'no_reply', { platform: 'magento' })
    const kept = onePerDomain([a, b])
    expect(kept.map((l: { segment: string }) => l.segment)).toEqual(['review', 'target'])
    expect(excludeDomains(kept, ['https://www.acme.it/'], 'gojiberry')[1].segment).toBe('review')
  })
})

describe('sequence', () => {
  const lead = fromCrm(prospect(), 'no_reply', { platform: 'woocommerce', php: '7.4.33' })

  it('writes every step without dashes or colons in the body', () => {
    for (const step of STEPS) {
      for (const l of [lead, { ...lead, lang: 'en' }, { ...lead, platform: 'other' }]) {
        const { body } = render(l, step.key)
        expect(body).not.toMatch(/[—–]| - |:/)
        expect(body).not.toMatch(/undefined|null/)
      }
    }
  })

  it('uses the PHP hook only on PHP platforms and quotes only an exposed version', () => {
    expect(render(lead, 'e1').body).toContain('PHP 7.4.33')
    expect(render({ ...lead, php: '8.3.36' }, 'e1').body).not.toContain('risulta')
    expect(render({ ...lead, platform: 'other' }, 'e1').body).not.toContain('PHP')
    expect(render(lead, 'e2').subject).toBe('Re: Acme e la falla di PHP')
  })

  it('spreads the steps over working days and stops on a reply', () => {
    expect(addWorkingDays('2026-10-23', 3)).toBe('2026-10-28')
    expect(dueStep(lead, '2026-10-26')?.key).toBe('e1')
    expect(dueStep(lead, '2026-10-25')).toBe(null)
    const sent = { ...lead, sequence: { ...lead.sequence, sent: [{ step: 'e1', date: '2026-10-26' }] } }
    expect(dueStep(sent, '2026-10-28')).toBe(null)
    expect(dueStep(sent, '2026-10-29')?.key).toBe('e2')
    expect(dueStep({ ...sent, sequence: { ...sent.sequence, stoppedAt: '2026-10-27' } }, '2026-10-29')).toBe(null)
  })
})

describe('gmail thread outcome', async () => {
  const { threadOutcome, buildRaw } = await import('./gmail.mjs')
  const msg = (from: string, extra: Record<string, string> = {}) => ({
    payload: { headers: [{ name: 'From', value: from }, ...Object.entries(extra).map(([name, value]) => ({ name, value }))] },
  })
  const me = msg('Antonio Manitta <antonio@noprob.agency>')

  it('stops on a human reply or a bounce, not on out of office', () => {
    expect(threadOutcome({ messages: [me] })).toBe(null)
    expect(threadOutcome({ messages: [me, msg('Sara <sara@acme.it>')] })).toBe('reply')
    expect(threadOutcome({ messages: [me, msg('Mail Delivery Subsystem <mailer-daemon@googlemail.com>')] })).toBe('bounce')
    expect(threadOutcome({ messages: [me, msg('sara@acme.it', { Subject: 'Risposta automatica: fuori ufficio' })] })).toBe(null)
    expect(threadOutcome({ messages: [me, msg('sara@acme.it', { 'Auto-Submitted': 'auto-replied' })] })).toBe(null)
  })

  it('builds a UTF-8 reply in the same thread', () => {
    const mime = Buffer.from(buildRaw({ to: 'a@b.it', subject: 'Re: Acme e la falla', body: 'Ciao è', inReplyTo: '<x@mail>' }), 'base64url').toString()
    expect(mime).toContain('In-Reply-To: <x@mail>')
    expect(mime).toContain('charset=UTF-8')
  })
})
