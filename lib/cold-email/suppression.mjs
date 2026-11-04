// Opt-out list shared with the Gojiberry routine: docs/cold/suppressed.txt (gitignored),
// one email or @domain per line, # comments. Anyone listed is never written again on
// any channel (rule agreed with the lawyer). This channel reads it before every send
// and appends who says no or opts out here; Gojiberry's hourly sweep reads it too.

import { execFileSync } from 'node:child_process'
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

/** Lines of `from` whose entry `into` lacks, comments kept. */
export function missingLines(from, into) {
  const known = new Set(parseSuppressed(into))
  return from.split('\n').filter((line) => {
    const [entry] = parseSuppressed(line)
    return entry && !known.has(entry)
  })
}

/**
 * The direct channel and Dante's review run in the cloud on state/suppressed.txt of the
 * CRM, Ada's routines on the Mac on the local file: every refusal has to reach both.
 * Errors are reported, never fatal: the next run tries again.
 */
export function syncSuppressed(crmPath = 'cold-email/data/crm', path = SUPPRESSED) {
  const shared = `${crmPath}/state/suppressed.txt`
  if (!existsSync(shared) || !existsSync(path)) return
  const git = (...a) => execFileSync('git', ['-C', crmPath, ...a], { stdio: ['ignore', 'ignore', 'pipe'] })
  try {
    git('pull', '--rebase', '--autostash', '-q')
    const local = readFileSync(path, 'utf8')
    const remote = readFileSync(shared, 'utf8')
    const toLocal = missingLines(remote, local)
    const toShared = missingLines(local, remote)
    if (toLocal.length) appendFileSync(path, `${toLocal.join('\n')}\n`)
    if (!toShared.length) return
    appendFileSync(shared, `${toShared.join('\n')}\n`)
    git('add', 'state/suppressed.txt')
    git('-c', 'user.name=noprobagency', '-c', 'user.email=hello@noprob.agency', 'commit', '-qm', 'chore(state): opt-out dal Mac')
    git('pull', '--rebase', '--autostash', '-q')
    git('push', '-q')
  } catch (err) {
    console.error(`Opt-out list not synced: ${err.message.split('\n')[0]}`)
  }
}
