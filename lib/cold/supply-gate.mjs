// D-61: Damiano pauses by himself when both channels have stock, and restarts by himself.
// Stock is counted in working days after Dante's review, not in theoretical leads.

export const SUPPLY = { perDay: 50, pauseDays: 10, resumeDays: 5 }

// Below this many leads taken, a share says nothing yet: count every lead as kept.
const MIN_SAMPLE = 30
const share = (kept, taken) => (taken >= MIN_SAMPLE ? kept / taken : 1)
const bare = (domain) => String(domain || '').replace(/^www\./, '').toLowerCase()

/**
 * What the review really kept of the leads it took. hello@: stores taken (usati.json) that
 * reached Dante's list. Direct: Damiano's leads not left in review.
 * @param {{ used: Record<string, { channel?: string }>, danteLeads: Array<{ domain?: string }>, directLeads: Array<{ source?: string, segment?: string }> }} data
 */
export function reviewYields({ used, danteLeads, directLeads }) {
  const inDante = new Set(danteLeads.map((l) => bare(l.domain)))
  const taken = Object.entries(used).filter(([, v]) => v.channel === 'hello@').map(([d]) => bare(d))
  const ours = directLeads.filter((l) => l.source === 'damiano')
  return {
    hello: share(taken.filter((d) => inDante.has(d)).length, taken.length),
    direct: share(ours.filter((l) => l.segment !== 'review').length, ours.length),
  }
}

/**
 * Pause when both channels reach pauseDays, restart when one drops under resumeDays; in
 * between the run keeps doing what it was doing, so it does not flip on and off.
 * @param {{ hello: number, direct: number, readyFirst: number, yields: { hello: number, direct: number }, wasPaused?: boolean, limits?: Partial<typeof SUPPLY> }} input
 */
export function supplyGate({ hello, direct, readyFirst, yields, wasPaused = false, limits = {} }) {
  const { perDay, pauseDays, resumeDays } = { ...SUPPLY, ...limits }
  const helloDays = (hello * yields.hello) / perDay
  // Ready first emails already passed the review; only the queue still has to.
  const directDays = (readyFirst + direct * yields.direct) / perDay
  const lowest = Math.min(helloDays, directDays)
  const paused = lowest < resumeDays ? false : lowest >= pauseDays ? true : wasPaused
  const round = (n) => Math.round(n * 10) / 10
  return {
    paused,
    helloDays: round(helloDays),
    directDays: round(directDays),
    helloLeads: hello,
    directLeads: direct,
    readyFirst,
    helloYield: Math.round(yields.hello * 100) / 100,
    directYield: Math.round(yields.direct * 100) / 100,
  }
}
