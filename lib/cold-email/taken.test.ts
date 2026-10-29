import { describe, expect, it } from 'vitest'
import { takenBody, takenSet } from './taken.mjs'

describe('COLD_TAKEN hashes', () => {
  it('matches domains, emails and @domains without carrying them in clear', () => {
    const body = takenBody(['acme.it', 'beta.com'], new Set(['sara@gamma.it', '@delta.it']))
    expect(body).not.toMatch(/acme|gamma|delta/)
    const set = takenSet(body)
    expect(['acme.it', 'Sara@Gamma.it', '@delta.it'].map((v) => set.has(v))).toEqual([true, true, true])
    expect(set.has('other.it')).toBe(false)
    expect(takenSet('').has('acme.it')).toBe(false)
  })
})
