// Damiano's leads (scraped, email verified) into the two channels. His nightly job
// writes the ready queue, this side only reads it and records what it took, so each
// file has a single writer:
//   docs/cold/damiano/coda.json   { updatedAt, leads: [batch rows] }   Damiano writes
//   docs/cold/damiano/usati.json  { domain: { channel, date } }        Dante writes
// In the cloud docs/cold/damiano is state/damiano of the private CRM repo.

import { domainOf } from './leads.mjs'

export const DAMIANO = { queue: 'docs/cold/damiano/coda.json', used: 'docs/cold/damiano/usati.json' }

/**
 * Queue rows still free: not taken by any channel, not opted out, one per store.
 * @param {Array<Record<string, any>>} rows
 * @param {{ used: Record<string, unknown>, domains: Set<string>, emails: Set<string>, suppressed: Set<string> }} seen
 */
export function pickQueue(rows, { used, domains, emails, suppressed }) {
  const stores = new Set()
  return rows.filter((r) => {
    const domain = domainOf(r.domain)
    const email = (r.email || '').toLowerCase()
    if (!domain || !email || used[domain] || domains.has(domain) || emails.has(email) || stores.has(domain)) return false
    if (suppressed.has(email) || suppressed.has(`@${domain}`) || suppressed.has(`@${email.split('@')[1]}`)) return false
    stores.add(domain)
    return true
  })
}

/** Gojiberry contact for hello@ (Dante's list): the verified email comes along, no credit. */
export function helloPayload(row, listId) {
  const [firstName, ...rest] = (row.name || '').trim().split(/\s+/)
  return {
    firstName: firstName || row.brand,
    lastName: rest.join(' ') || '-',
    profileUrl: row.linkedin,
    jobTitle: row.title || undefined,
    company: row.brand,
    website: `https://${domainOf(row.domain)}`,
    industry: row.industry || undefined,
    location: row.city ? `${row.city}, Italy` : 'Italy',
    email: row.email,
    note: 'Lotto Damiano (scraping, email verificata)',
    listId,
  }
}
