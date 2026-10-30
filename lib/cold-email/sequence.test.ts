import { describe, expect, it } from 'vitest'
import { excludeDomains, firstNameOf, fromCrm, stopStore } from './leads.mjs'
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

  it('stops the whole store when one person answers, and skips Gojiberry domains', () => {
    const a = fromCrm(prospect({ id: 'a', contact: '', email: 'info@acme.it' }), 'no_reply', { platform: 'magento' })
    const b = fromCrm(prospect({ id: 'b' }), 'no_reply', { platform: 'magento' })
    expect([a.segment, b.segment]).toEqual(['target', 'target'])
    const leads = [a, b]
    stopStore(leads, 'acme.it', 'sara ha risposto', '2026-10-27')
    expect(leads.map((l) => l.sequence.stopReason)).toEqual(['store replied', 'store replied'])
    expect(excludeDomains([fromCrm(prospect(), 'no_reply', { platform: 'magento' })], ['https://www.acme.it/'], 'gojiberry')[0].segment).toBe('review')
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
    expect(render({ ...lead, platform: 'other', php: null }, 'e1').body).not.toContain('PHP')
    expect(render(lead, 'e2').subject).toBe('Re: Acme e la falla di PHP')
    expect(render({ ...lead, php: '8.3.36' }, 'e1').subject).toBe('Acme su Shopify?')
    const custom = render({ ...lead, platform: 'other', php: '7.2.34' }, 'e1').body
    expect(custom).toContain('il sito di Acme gira ancora su PHP')
    expect(custom).toContain('PHP 7.2.34')
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
    expect(threadOutcome({ messages: [me, { ...msg('Sara <sara@acme.it>'), snippet: 'No grazie, non siamo interessati' }] })).toBe('optout')
    expect(threadOutcome({ messages: [me, { ...msg('Sara <sara@acme.it>'), snippet: 'Ciao, quanto costa la migrazione?' }] })).toBe('reply')
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

describe('lead hygiene', () => {
  it('keeps private mailboxes in the sequence (flagged) and no-reply addresses out', () => {
    const base = prospect({ status: 'archived' })
    const priv = fromCrm({ ...base, email: 'lucia.r@gmail.com' }, 'no_reply', { platform: 'other' })
    expect([priv.segment, priv.privateMailbox]).toEqual(['target', true])
    expect(fromCrm({ ...base, email: 'noreply@me.brand.com' }, 'no_reply', { platform: 'other' }).segment).toBe('suppressed')
    expect(fromCrm({ ...base, email: 'support@brand.zendesk.com' }, 'no_reply', { platform: 'other' }).segment).toBe('suppressed')
  })

  it('cleans brands and writes English to foreign stores', async () => {
    const { cleanBrand } = await import('./leads.mjs')
    expect(cleanBrand('Motivi (Miroglio)')).toBe('Motivi')
    expect(cleanBrand('SatÃ¹')).toBe('Satù')
    expect(fromCrm(prospect({ domain: 'peachyden.co.uk', email: 'hello@peachyden.co.uk' }), 'no_reply', { platform: 'other' }).lang).toBe('en')
    expect(firstNameOf('MW', 'mw@x.com')).toBe(null)
  })
})

describe('leads from Gojiberry (Dante overflow)', () => {
  it('builds an Italian direct-channel lead with the right case study category', async () => {
    const { fromGojiberry } = await import('./leads.mjs')
    const c = { id: 7, firstName: 'sara', lastName: 'Rossi', email: 'Sara@Acme.it', website: 'https://www.acme.it/', industry: 'Apparel & Fashion', jobTitle: 'CEO' }
    const lead = fromGojiberry(c, { platform: 'woocommerce', php: '7.4.33' }, 'Acme')
    expect([lead.id, lead.domain, lead.email, lead.firstName, lead.lang, lead.category, lead.segment]).toEqual(['gjb:7', 'acme.it', 'sara@acme.it', 'Sara', 'it', 'fashion', 'target'])
    expect(render(lead, 'e1').body).toContain('PHP 7.4.33')
    expect(fromGojiberry({ ...c, email: 'noreply@acme.it', industry: 'Food' }, null, 'Acme')).toMatchObject({ segment: 'suppressed', category: 'dtc' })
  })
})

describe('leads from Damiano batches', () => {
  it('re-checks the platform: Shopify aside, blocked sites to review, the rest in sequence', async () => {
    const { fromDamiano } = await import('./leads.mjs')
    const row = { brand: 'Acme', domain: 'www.acme.it', platform: 'woocommerce', php: null, name: 'Sara Rossi', title: 'CEO', email: 'Sara@acme.it', industry: 'Fashion' }
    expect(fromDamiano(row, { platform: 'woocommerce', php: '7.4.33', status: 200 })).toMatchObject({ segment: 'target', domain: 'acme.it', firstName: 'Sara', category: 'fashion', php: '7.4.33', source: 'damiano' })
    expect(fromDamiano(row, { platform: 'shopify', status: 200 }).segment).toBe('shopify')
    expect(fromDamiano(row, { platform: 'other', status: 403 })).toMatchObject({ segment: 'review', platform: 'woocommerce' })
  })
})

describe('Dante leads in the CRM', () => {
  it('maps Gojiberry campaign steps to sent emails, next date and segment', async () => {
    const { danteLead } = await import('./dante.mjs')
    const c = { id: 1, company: 'ACME SRL', website: 'acme.it', fullName: 'Sara Rossi', email: 'sara@acme.it', campaignStatus: [{ type: 'email', stepNumber: 0, state: 'sent', createdAt: '2026-10-28T09:47:44Z', campaignId: 46398 }] }
    expect(danteLead(c, 46398, 'Acme')).toMatchObject({ channel: 'hello@', total: 3, domain: 'acme.it', segment: 'target', sent: [{ step: 'e1', date: '2026-10-28' }], nextDate: '2026-11-04' })
    const replied = { ...c, campaignStatus: [{ ...c.campaignStatus[0], state: 'answered' }] }
    expect(danteLead(replied, 46398, 'Acme')).toMatchObject({ segment: 'warm', stopReason: 'reply', nextDate: null })
    expect(danteLead({ ...c, unsubscribed: true }, 46398, 'Acme')).toMatchObject({ segment: 'suppressed', reason: 'opt-out' })
  })
})

describe('gmail token refresh', () => {
  it('gets a fresh token once on a 401 and retries', async () => {
    const { vi } = await import('vitest')
    const calls: string[] = []
    vi.stubGlobal('fetch', async (url: string, init: { headers?: Record<string, string> }) => {
      if (url.includes('oauth2')) return new Response(JSON.stringify({ access_token: 'fresh' }))
      calls.push(init.headers?.authorization || '')
      return calls.length === 1 ? new Response('expired', { status: 401 }) : new Response('{"messages":[]}')
    })
    vi.doMock('node:child_process', () => ({ execFileSync: (_: string, a: string[]) => (a.includes('cold-email-gmail-client') ? '{"client_id":"i","client_secret":"s"}' : 'refresh') }))
    vi.resetModules()
    const { gmail } = await import('./gmail.mjs')
    await gmail('old').search('in:sent')
    expect(calls).toEqual(['Bearer old', 'Bearer fresh'])
    vi.unstubAllGlobals()
    vi.doUnmock('node:child_process')
  })
})

describe('network retry', () => {
  it('retries a failing call and gives up after the last try', async () => {
    const { withRetry } = await import('./gmail.mjs')
    let n = 0
    expect(await withRetry(async () => (++n < 3 ? Promise.reject(new Error('ECONNRESET')) : 'ok'), { pauseMs: 1 })).toBe('ok')
    await expect(withRetry(async () => Promise.reject(new Error('down')), { tries: 2, pauseMs: 1 })).rejects.toThrow('down')
  })
})
