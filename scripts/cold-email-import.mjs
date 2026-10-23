#!/usr/bin/env node
// Builds the direct cold email lead file from the old CRM (crm-noprobagency
// data/prospects.json): fresh platform and PHP check per domain (one request each,
// no AI), segments, one lead per domain, and Gojiberry domains excluded (read only:
// GET on the Sprint lists, nothing is written to Gojiberry).
// Sequence state of leads already in the file is kept.
// Lead data stays in cold-email/data/ (gitignored).
//
// Usage: node scripts/cold-email-import.mjs <prospects.json> [--no-gojiberry]

import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { normaliseUrl } from '../lib/cold/detect-platform.mjs'
import { fetchPlatform, pool } from '../lib/cold/fetch-platform.mjs'
import { gojiberryDomains } from '../lib/cold-email/gojiberry.mjs'
import { domainOf, excludeDomains, fromCrm, onePerDomain } from '../lib/cold-email/leads.mjs'

const OUT = 'cold-email/data/leads.json'

const args = process.argv.slice(2)
const file = args.find((a) => !a.startsWith('--'))
if (!file) {
  console.error('Usage: node scripts/cold-email-import.mjs <prospects.json> [--no-gojiberry]')
  process.exit(1)
}

const crm = JSON.parse(readFileSync(file, 'utf8'))
const prospects = ['active', 'no_reply', 'bounced'].flatMap((section) => (crm[section] || []).map((p) => [p, section]))

const domains = [...new Set(prospects.map(([p]) => domainOf(p.domain || (p.email || '').split('@')[1])).filter(Boolean))]
const checks = await pool(domains, 16, (d) => fetchPlatform(normaliseUrl(d)))

let leads = prospects.map(([p, section]) => {
  const domain = domainOf(p.domain || (p.email || '').split('@')[1])
  return fromCrm(p, section, domain ? checks.get(domain) : null)
})
leads = onePerDomain(leads)

if (!args.includes('--no-gojiberry')) leads = excludeDomains(leads, await gojiberryDomains(), 'in Gojiberry')

// Keep what already happened: a started sequence, a suppression or a warm reply win
// over the fresh check (a store that moved to Shopify mid-sequence still stops by reply).
if (existsSync(OUT)) {
  const previous = new Map(JSON.parse(readFileSync(OUT, 'utf8')).leads.map((l) => [l.id, l]))
  leads = leads.map((l) => {
    const old = previous.get(l.id)
    if (!old) return l
    const keep = old.sequence.sent.length || ['suppressed', 'warm'].includes(old.segment)
    return keep ? { ...l, segment: old.segment, reason: old.reason, sequence: old.sequence } : { ...l, sequence: old.sequence }
  })
}

mkdirSync('cold-email/data', { recursive: true })
writeFileSync(OUT, JSON.stringify({ updatedAt: new Date().toISOString(), leads }, null, 2))

const count = (items, key) => items.reduce((acc, l) => ({ ...acc, [l[key]]: (acc[l[key]] || 0) + 1 }), {})
const targets = leads.filter((l) => l.segment === 'target')
console.log(`${leads.length} leads, ${domains.length} domains -> ${OUT}`)
console.log('segments', count(leads, 'segment'))
console.log('target platforms', count(targets, 'platform'), 'languages', count(targets, 'lang'))
console.log('target PHP exposed', targets.filter((l) => l.php).map((l) => l.php).join(' ') || 'none')
