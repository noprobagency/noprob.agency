import { describe, expect, it } from 'vitest'
import { reviewYield, supplyGate } from './supply-gate.mjs'

const days = (d: number) => d * 55

describe('supplyGate', () => {
  it('pauses at 10 days of stock', () => {
    expect(supplyGate({ leads: days(10), readyFirst: 0, yield: 1 }).paused).toBe(true)
  })
  it('runs under 5 days', () => {
    expect(supplyGate({ leads: days(4.9), readyFirst: 0, yield: 1, wasPaused: true }).paused).toBe(false)
  })
  it('keeps its state between 5 and 10 days', () => {
    expect(supplyGate({ leads: days(7), readyFirst: 0, yield: 1, wasPaused: true }).paused).toBe(true)
    expect(supplyGate({ leads: days(7), readyFirst: 0, yield: 1, wasPaused: false }).paused).toBe(false)
  })
  it('counts ready first emails in full and the queue at the review yield', () => {
    const gate = supplyGate({ leads: 110, readyFirst: 55, yield: 0.5 })
    expect(gate.days).toBe(2)
  })
  it('725 Italian leads at 55 a day pause the run', () => {
    expect(supplyGate({ leads: 725, readyFirst: 0, yield: 0.86 }).paused).toBe(true)
  })
})

describe('reviewYield', () => {
  it('counts every lead as kept on a small sample', () => {
    expect(reviewYield({ directLeads: [{ source: 'damiano', segment: 'review' }] })).toBe(1)
  })
  it('is the share not left in review', () => {
    const directLeads = Array.from({ length: 40 }, (_, i) => ({ source: 'damiano', segment: i < 10 ? 'review' : 'target' }))
    expect(reviewYield({ directLeads })).toBe(0.75)
  })
})
