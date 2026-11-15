import { describe, expect, it } from 'vitest'
import { fraseDato, renderV3First, v3Subject } from './sequence-v3.mjs'
import { dueStep, render } from './sequence.mjs'

describe('Italy v3 first email', () => {
  it('picks the first rule that fires, in order', () => {
    expect(fraseDato({ lcpMs: 6900, imageBytes: 9e6, hasDescription: false })?.rule).toBe('lcp')
    expect(fraseDato({ lcpMs: null, imageBytes: 7061313 })?.frase).toContain('oltre 6 MB')
    expect(fraseDato({ lcpMs: null, imageBytes: 1e6, hasDescription: false })?.rule).toBe('description')
    expect(fraseDato({ hasDescription: true, hasH1: false })?.rule).toBe('h1')
    expect(fraseDato({ hasDescription: true, hasH1: true, cls: 0.3 })?.rule).toBe('cls')
    expect(fraseDato({ hasDescription: true, hasH1: true, cls: 0.1, imageBytes: 1e6 })).toBe(null)
    expect(fraseDato({ lcpMs: 5286 })?.frase).toContain('circa 5 secondi')
  })
  it("renders Antonio's text word for word", () => {
    const { subject, body } = renderV3First({ brand: 'Acme', firstName: 'Sara' }, 'ho notato X')
    expect(subject).toBe('Acme, due cose sulle vendite')
    expect(body.startsWith('Ciao Sara 🙂\nPiacere Antonio!\n\nStavo girando su Acme ed ho notato X.')).toBe(true)
    expect(body).toContain('Antonio\neCommerce manager da 7 anni')
    expect(body.endsWith('PS se non vi interessa, rispondi pure "no" e non ti scrivo più!')).toBe(true)
    expect(body).not.toMatch(/https?:/)
    expect(renderV3First({ brand: 'Acme', firstName: null }, 'x').body.startsWith('Ciao 🙂')).toBe(true)
  })
  it('keeps the v3 subject on v2 follow-ups of a v3 thread', () => {
    const lead = { segment: 'target', lang: 'it', brand: 'Acme', firstName: 'Sara', platform: 'woocommerce', sequence: { version: 'v3', sent: [{ step: 'e1', date: '2026-11-16' }] } }
    expect(render(lead, 'e2').subject).toBe(`Re: ${v3Subject('Acme')}`)
  })
})

describe('v3 follow-ups', () => {
  const base = { segment: 'target', lang: 'it', brand: 'Acme', firstName: 'Sara', platform: 'woocommerce' }
  it('a v3 thread has two follow-ups on days 3 and 7', () => {
    const l = { ...base, sequence: { version: 'v3', sent: [{ step: 'e1', date: '2026-11-16' }], stoppedAt: null } }
    expect(dueStep(l, '2026-11-19')?.key).toBe('e2')
    expect(render(l, 'e2', { v3: true }).body).toBe('Ciao Sara, non vi interessa? 🙂\n\nIl documento su Acme ve lo preparo volentieri, basta un sì.\n\nAntonio')
    const three = { ...l, sequence: { ...l.sequence, sent: [...l.sequence.sent, { step: 'e2', date: '2026-11-19' }, { step: 'e3', date: '2026-11-25' }] } }
    expect(dueStep(three, '2026-12-30')).toBe(null)
  })
  it('v2 threads get the rewritten e2-e5 only once approved', () => {
    const l = { ...base, sequence: { version: 'v2', sent: [{ step: 'e1', date: '2026-11-02' }] } }
    expect(render(l, 'e4', { v3: true }).body).toContain('Sapete da quale pagina di Acme')
    expect(render(l, 'e4').body).not.toContain('Sapete da quale pagina')
    expect(render({ ...l, firstName: null }, 'e5', { v3: true }).body.startsWith('Ciao, ultima volta')).toBe(true)
  })
})
