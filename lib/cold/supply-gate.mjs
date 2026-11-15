// D-61: Damiano pauses by himself when Italy has stock, and restarts by himself.
// 15 Nov 2026 (Claudio's review): one stock on the new model. Every Italian lead goes to
// Dante's direct engine (two mailboxes, at most 55 first emails a day, helloImport false),
// so hello@ and direct are no longer counted apart. Italy runs slow and steady; the spend
// goes to the US run.

export const SUPPLY = { perDay: 55, pauseDays: 10, resumeDays: 5 }

// Below this many leads taken, a share says nothing yet: count every lead as kept.
const MIN_SAMPLE = 30
const share = (kept, taken) => (taken >= MIN_SAMPLE ? kept / taken : 1)

/**
 * What Dante's review really kept: Damiano's leads in the direct list not left in review.
 * @param {{ directLeads: Array<{ source?: string, segment?: string }> }} data
 */
export function reviewYield({ directLeads }) {
  const ours = directLeads.filter((l) => l.source === 'damiano')
  return share(ours.filter((l) => l.segment !== 'review').length, ours.length)
}

/**
 * Pause at pauseDays of stock, restart under resumeDays; in between the run keeps doing
 * what it was doing, so it does not flip on and off.
 * @param {{ leads: number, readyFirst: number, yield: number, wasPaused?: boolean, limits?: Partial<typeof SUPPLY> }} input
 */
export function supplyGate({ leads, readyFirst, yield: kept, wasPaused = false, limits = {} }) {
  const { perDay, pauseDays, resumeDays } = { ...SUPPLY, ...limits }
  // Ready first emails already passed the review; only the queue still has to.
  const days = (readyFirst + leads * kept) / perDay
  const paused = days < resumeDays ? false : days >= pauseDays ? true : wasPaused
  return { paused, days: Math.round(days * 10) / 10, leads, readyFirst, perDay, yield: Math.round(kept * 100) / 100 }
}
