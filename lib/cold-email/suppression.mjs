// Opt-out list shared with the Gojiberry routine: docs/cold/suppressed.txt (gitignored),
// one email or @domain per line, # comments. Anyone listed is never written again on
// any channel (rule agreed with the lawyer). This channel reads it before every send
// and appends who says no or opts out here; Gojiberry's hourly sweep reads it too.

import { appendFileSync, existsSync, readFileSync } from 'node:fs'
import { domainOf } from './leads.mjs'

export const SUPPRESSED = 'docs/cold/suppressed.txt'

/** Entries of the file (lowercase emails and "@domain"), from a path or raw text. */
export function parseSuppressed(text) {
  return text
    .split('\n')
    .map((line) => line.replace(/#.*/, '').trim().toLowerCase())
    .filter(Boolean)
}

export const readSuppressed = (path = SUPPRESSED) => new Set(existsSync(path) ? parseSuppressed(readFileSync(path, 'utf8')) : [])

/** True when the lead's email or its store domain (also the email domain) is listed. */
export function isSuppressed(lead, entries) {
  const email = (lead.email || '').toLowerCase()
  const domains = [domainOf(lead.domain), domainOf(email.split('@')[1])].filter(Boolean)
  return entries.has(email) || domains.some((d) => entries.has(`@${d}`))
}

/** Appends emails not yet listed, with the reason as a comment. */
export function appendSuppressed(emails, reason, path = SUPPRESSED) {
  const entries = readSuppressed(path)
  const fresh = [...new Set(emails.map((e) => e.toLowerCase()))].filter((e) => e && !entries.has(e))
  if (!fresh.length) return 0
  const date = new Date().toISOString().slice(0, 10)
  appendFileSync(path, fresh.map((e) => `${e} # ${reason}, cold email diretta ${date}\n`).join(''))
  return fresh.length
}

/** Leads that must reach the shared file: those who said no or opted out here. */
export const refusals = (leads) =>
  leads.filter((l) => l.segment === 'suppressed' && ['opt-out', 'said no'].includes(l.reason)).map((l) => l.email)

/** Moves every listed target or warm lead to `suppressed` (the file wins over the sequence). */
export function applySuppressed(leads, entries) {
  return leads.map((l) =>
    ['target', 'warm', 'review', 'shopify'].includes(l.segment) && isSuppressed(l, entries)
      ? { ...l, segment: 'suppressed', reason: 'opt-out list', sequence: { ...l.sequence, stoppedAt: l.sequence.stoppedAt || new Date().toISOString().slice(0, 10), stopReason: l.sequence.stopReason || 'opt-out' } }
      : l,
  )
}
