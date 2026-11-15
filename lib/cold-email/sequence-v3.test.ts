import { describe, expect, it } from 'vitest'
import { fraseDato, renderV3First, v3Subject } from './sequence-v3.mjs'
import { render } from './sequence.mjs'

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
