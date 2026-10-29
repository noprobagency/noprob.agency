// Stores the cloud review of Dante must not approve: domains of the direct channel and
// entries of the opt-out list. They live on the Mac (cold-email/data, docs/cold, not
// versioned); the Mac publishes them as short SHA-256 hashes in the GitHub Actions
// variable COLD_TAKEN, so the public repo and its run logs never see a domain or an email.

import { createHash } from 'node:crypto'
import { execFileSync } from 'node:child_process'
import { existsSync } from 'node:fs'

export const hashOf = (value) => createHash('sha256').update(String(value).toLowerCase()).digest('hex').slice(0, 12)

/** COLD_TAKEN body: hashes of direct-channel domains and opt-out entries. */
export function takenBody(domains, suppressed) {
  return [...new Set([...domains, ...suppressed].filter(Boolean).map(hashOf))].sort().join(',')
}

/** A Set-like view over COLD_TAKEN: has(domain), has(email), has('@domain'). */
export function takenSet(body) {
  const hashes = new Set((body || '').split(',').filter(Boolean))
  return { has: (value) => hashes.has(hashOf(value)), size: hashes.size }
}

/** Publishes COLD_TAKEN from the Mac (gh logged in). Errors are reported, never fatal. */
export function publishTaken(body, repo = 'noprobagency/website') {
  const gh = existsSync('/opt/homebrew/bin/gh') ? '/opt/homebrew/bin/gh' : 'gh'
  try {
    execFileSync(gh, ['variable', 'set', 'COLD_TAKEN', '-R', repo, '--body', body], { stdio: ['ignore', 'ignore', 'pipe'] })
    return true
  } catch (err) {
    console.error(`COLD_TAKEN not published: ${err.message.split('\n')[0]}`)
    return false
  }
}
