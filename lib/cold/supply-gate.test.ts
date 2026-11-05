import { describe, expect, it } from 'vitest'
import { reviewYields, supplyGate } from './supply-gate.mjs'

const yields = { hello: 1, direct: 1 }
const days = (d: number) => d * 50

describe('supplyGate', () => {
  it('pauses when both channels reach 10 days', () => {
    expect(supplyGate({ hello: days(10), direct: days(10), readyFirst: 0, yields }).paused).toBe(true)
  })

  it('keeps running when only one channel reaches 10 days', () => {
    expect(supplyGate({ hello: days(40), direct: days(9), readyFirst: 0, yields }).paused).toBe(false)
  })

  it('stays paused between 5 and 10 days', () => {
    expect(supplyGate({ hello: days(7), direct: days(7), readyFirst: 0, yields, wasPaused: true }).paused).toBe(true)
  })

  it('stays running between 5 and 10 days', () => {
    expect(supplyGate({ hello: days(7), direct: days(7), readyFirst: 0, yields, wasPaused: false }).paused).toBe(false)
  })

  it('restarts as soon as one channel drops under 5 days', () => {
    expect(supplyGate({ hello: days(40), direct: days(4.9), readyFirst: 0, yields, wasPaused: true }).paused).toBe(false)
  })

  it('counts ready first emails for the direct channel, without the review share', () => {
    const gate = supplyGate({ hello: 0, direct: 100, readyFirst: 100, yields: { hello: 1, direct: 0.5 } })
    expect(gate.directDays).toBe(3)
  })

  it('counts stock after the review, not theoretical leads', () => {
    const gate = supplyGate({ hello: days(10), direct: days(10), readyFirst: 0, yields: { hello: 0.8, direct: 1 } })
    expect(gate.helloDays).toBe(8)
    expect(gate.paused).toBe(false)
  })
})

describe('reviewYields', () => {
  const taken = (n: number) => Object.fromEntries(Array.from({ length: n }, (_, i) => [`s${i}.it`, { channel: 'hello@' }]))

  it('measures the hello@ share on the stores that reached Dante, ignoring www', () => {
    const danteLeads = Array.from({ length: 24 }, (_, i) => ({ domain: `www.s${i}.it` }))
    expect(reviewYields({ used: taken(30), danteLeads, directLeads: [] }).hello).toBeCloseTo(0.8)
  })

  it('measures the direct share on Damiano leads only', () => {
    const directLeads = [
      ...Array.from({ length: 27 }, () => ({ source: 'damiano', segment: 'target' })),
      ...Array.from({ length: 3 }, () => ({ source: 'damiano', segment: 'review' })),
      ...Array.from({ length: 50 }, () => ({ source: 'crm-2026', segment: 'review' })),
    ]
    expect(reviewYields({ used: {}, danteLeads: [], directLeads }).direct).toBeCloseTo(0.9)
  })

  it('counts every lead as kept until the sample is large enough', () => {
    expect(reviewYields({ used: taken(29), danteLeads: [], directLeads: [] })).toEqual({ hello: 1, direct: 1 })
  })
})
