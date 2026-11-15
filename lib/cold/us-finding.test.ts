import { describe, expect, it } from 'vitest'
import { freshRun, htmlSignals, pickFinding, stableLcp } from './us-finding.mjs'

describe('pickFinding', () => {
  it('uses a slow mobile LCP first, rounded down', () => {
    expect(pickFinding({ lcpMs: 9672, imageBytes: 8_238_012, hasDescription: true })).toEqual({
      rule: 'lcp',
      finding: "Google's mobile speed test shows your homepage taking about 9 seconds to show its main content",
    })
  })

  it('caps a freak lab run at over 20 seconds', () => {
    expect(pickFinding({ lcpMs: 54_300 })?.finding).toBe("Google's mobile speed test shows your homepage taking over 20 seconds to show its main content")
  })

  it('falls back to image weight when the page is fast', () => {
    expect(pickFinding({ lcpMs: 2000, imageBytes: 6_751_998 })?.finding).toBe(
      'the images on your homepage weigh over 6 MB, which slows it down on phones',
    )
  })

  it('then a missing description, then a missing H1, then layout shift', () => {
    expect(pickFinding({ lcpMs: 1464, imageBytes: 844_562, hasDescription: false, hasH1: false })?.rule).toBe('description')
    expect(pickFinding({ hasDescription: true, hasH1: false })?.rule).toBe('h1')
    expect(pickFinding({ hasDescription: true, hasH1: true, cls: 0.39 })?.rule).toBe('cls')
  })

  it('returns null when nothing fires, so the lead gets no automatic email', () => {
    expect(pickFinding({ lcpMs: 1900, imageBytes: 500_000, hasDescription: true, hasH1: true, cls: 0.01 })).toBeNull()
    expect(pickFinding({})).toBeNull()
  })
})

describe('htmlSignals', () => {
  it('reads the meta description and the H1', () => {
    expect(htmlSignals('<meta name="description" content="Fresh coffee"><h1>Coffee</h1>')).toEqual({ hasDescription: true, hasH1: true })
    expect(htmlSignals('<meta name="description" content=""><h2>x</h2>')).toEqual({ hasDescription: false, hasH1: false })
  })
})

describe('stableLcp', () => {
  it('counts only when two runs in a row are over 4 s, and quotes the lower one', () => {
    expect(stableLcp(20_000, 9_000)).toBe(9_000)
    expect(stableLcp(20_000, 3_000)).toBeNull()
    expect(stableLcp(5_000, null)).toBeNull()
    expect(stableLcp(2_000, 2_500)).toBeNull()
  })
})

describe('freshRun', () => {
  it('rejects a cached second answer with the same fetchTime', () => {
    expect(freshRun({ fetchTime: '2026-11-15T19:00:00Z' }, { fetchTime: '2026-11-15T19:00:00Z' })).toBe(false)
    expect(freshRun({ fetchTime: '2026-11-15T19:00:00Z' }, { fetchTime: '2026-11-15T19:01:10Z' })).toBe(true)
    expect(freshRun({ fetchTime: 'x' }, null)).toBe(false)
  })
})
