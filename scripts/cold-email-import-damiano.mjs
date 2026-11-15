#!/usr/bin/env node
// Imports a batch of Damiano's scraped leads (docs/cold/damiano/lotti, gitignored) into
// one channel. No AI. Before anything a store is dropped when another channel has it:
// the direct channel (cold-email/data/leads.json), the opt-out list, and the Gojiberry
// lists (LinkedIn 63200 and 64866, Dante 65682, direct overflow 66757, Shopify 64769).
//
//   --direct <file>  antonio@'s 5-email sequence: the platform is checked again live,
//                    a store now on Shopify goes to `shopify`, a blocked site to `review`.
//   --hello <file>   hello@ (Dante): contacts created in list 65682 with their email
//                    (no credit), not approved: the 8:30 review approves them up to
//                    hello@'s limit. Rows without a LinkedIn profile URL (required by
//                    Gojiberry) are left out.
// Prints counts only. --direct refuses to run while the daily send run holds leads.json.
//
// Usage: node scripts/cold-email-import-damiano.mjs --direct <file> | --hello <file> [--dry]

import { execFileSync } from 'node:child_process'
import { existsSync, lstatSync, readFileSync, writeFileSync } from 'node:fs'
import { fetchPlatform, pool } from '../lib/cold/fetch-platform.mjs'
import { LISTS, api, listContacts } from '../lib/cold/gojiberry.mjs'
import { normaliseUrl } from '../lib/cold/detect-platform.mjs'
import { domainOf, fromDamiano } from '../lib/cold-email/leads.mjs'
import { helloPayload } from '../lib/cold-email/damiano.mjs'
import { readSuppressed } from '../lib/cold-email/suppression.mjs'

// The live queue is the CRM's state/leads.json: on the Mac runner cold-email/data is a
// symlink to it. In a plain checkout cold-email/data/leads.json is an old copy, so --direct
// refuses unless COLD_CRM_PATH is set or cold-email/data is that symlink (15/11).
const LEADS = process.env.COLD_CRM_PATH ? `${process.env.COLD_CRM_PATH}/state/leads.json` : 'cold-email/data/leads.json'
const liveQueue = () => Boolean(process.env.COLD_CRM_PATH) || (existsSync('cold-email/data') && lstatSync('cold-email/data').isSymbolicLink())
const DANTE_LIST = 65682
const OTHER_LISTS = [LISTS.en, LISTS.it, DANTE_LIST, 66757, LISTS.shopify]

const args = process.argv.slice(2)
const dry = args.includes('--dry')
const channel = args.includes('--direct') ? 'direct' : args.includes('--hello') ? 'hello' : null
const file = channel && args[args.indexOf(`--${channel}`) + 1]
if (!file) {
  console.error('Usage: node scripts/cold-email-import-damiano.mjs --direct <file> | --hello <file> [--dry]')
  process.exit(1)
}
if (!dry && channel === 'direct' && !liveQueue()) {
  console.error('Not the live queue: run from the Mac runner clone, or set COLD_CRM_PATH to the CRM checkout.')
  process.exit(1)
}
try {
  if (!dry && channel === 'direct' && execFileSync('pgrep', ['-f', 'cold-email-daily'], { encoding: 'utf8' }).trim()) {
    console.error('The daily send run is active: it saves leads.json after every email. Run this when it ends.')
    process.exit(1)
  }
} catch {
  // pgrep exits 1 when nothing runs
}

const rows = JSON.parse(readFileSync(file, 'utf8')).leads
const db = JSON.parse(readFileSync(LEADS, 'utf8'))
const suppressed = readSuppressed()

// Stores and people other channels already have
const domains = new Set(db.leads.map((l) => l.domain))
const emails = new Set(db.leads.map((l) => l.email))
for (const id of OTHER_LISTS) {
  for (const c of await listContacts(id)) {
    const d = domainOf(normaliseUrl(c.website))
    if (d) domains.add(d)
    if (c.email) emails.add(c.email.toLowerCase())
  }
}
const stats = { batch: rows.length, taken: 0, optout: 0 }
const fresh = rows.filter((r) => {
  const email = (r.email || '').toLowerCase()
  const domain = domainOf(r.domain)
  if (suppressed.has(email) || suppressed.has(`@${domain}`) || suppressed.has(`@${email.split('@')[1]}`)) return ++stats.optout && false
  if (domains.has(domain) || emails.has(email)) return ++stats.taken && false
  return true
})

if (channel === 'direct') {
  const checks = await pool([...new Set(fresh.map((r) => `https://${domainOf(r.domain)}`))], 12, (u) => fetchPlatform(u))
  const leads = fresh.map((r) => fromDamiano(r, checks.get(`https://${domainOf(r.domain)}`)))
  for (const l of leads) stats[l.segment] = (stats[l.segment] || 0) + 1
  stats.stores = new Set(leads.filter((l) => l.segment === 'target').map((l) => l.domain)).size
  if (!dry) {
    db.leads.push(...leads)
    writeFileSync(LEADS, JSON.stringify({ ...db, updatedAt: new Date().toISOString() }, null, 2))
  }
} else {
  const [withProfile, without] = [fresh.filter((r) => r.linkedin), fresh.filter((r) => !r.linkedin)]
  stats.noLinkedin = without.length
  stats.created = 0
  for (const r of withProfile) {
    if (dry) {
      stats.created++
      continue
    }
    try {
      await api('POST', '/v1/contact', helloPayload(r, DANTE_LIST))
      stats.created++
    } catch (err) {
      stats.errors = (stats.errors || 0) + 1
      console.error(`create failed: ${err.message.split(' ->')[0]}`)
    }
  }
}

console.log(`${dry ? '[dry] ' : ''}Damiano ${channel} · ${Object.entries(stats).map(([k, v]) => `${k} ${v}`).join(' · ')}`)
