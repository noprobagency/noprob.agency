#!/usr/bin/env node
// Ada, US stores not on Shopify (D-99): writes on each lead the one fact that opens
// the email ({finding}), with rule, source and date. A lead without a finding gets
// no automatic email. Skips stores on Shopify and anyone in the shared opt-out list.
// PageSpeed key: env PAGESPEED_API_KEY, the pagespeed.env file Damiano reads, or Keychain "pagespeed-api"; without
// it only the free HTML rules run (description, H1).
// Usage: node scripts/ada-us-finding.mjs <leads.json> [--dry] [--force]

import { execFileSync } from 'node:child_process'
import { existsSync, readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { fetchHome, htmlSignals, pagespeed, pickFinding, stableLcp } from '../lib/cold/us-finding.mjs'
import { detectPlatform } from '../lib/cold/detect-platform.mjs'
import { isSuppressed, parseSuppressed } from '../lib/cold/sweep.mjs'

const [file] = process.argv.slice(2).filter((a) => !a.startsWith('--'))
const dry = process.argv.includes('--dry')
const force = process.argv.includes('--force')
if (!file) {
  console.error('Usage: node scripts/ada-us-finding.mjs <leads.json> [--dry] [--force]')
  process.exit(1)
}

function key() {
  if (process.env.PAGESPEED_API_KEY) return process.env.PAGESPEED_API_KEY
  // Same file Damiano reads (scripts/damiano-scrape.mjs)
  const env = join(process.env.HOME || '', 'Library/Application Support/noprob-agenti/pagespeed.env')
  const fromFile = existsSync(env) && readFileSync(env, 'utf8').match(/^\s*PAGESPEED_API_KEY\s*=\s*["']?([^"'\s]+)/m)?.[1]
  if (fromFile) return fromFile
  try {
    return execFileSync('security', ['find-generic-password', '-s', 'pagespeed-api', '-w'], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }).trim()
  } catch {
    return null
  }
}

const KEY = key()
const leads = JSON.parse(readFileSync(file, 'utf8'))
const suppressed = parseSuppressed(readFileSync('docs/cold/suppressed.txt', 'utf8'))
const domainOf = (l) => (l.domain || l.website || '').toLowerCase().replace(/^https?:\/\//, '').replace(/^www\./, '').replace(/[/?#].*$/, '')
const stats = { done: 0, finding: 0, none: 0, shopify: 0, suppressed: 0, unreachable: 0, skipped: 0 }

for (const lead of leads) {
  const domain = domainOf(lead)
  if (!domain || (lead.findingAt && !force)) { stats.skipped++; continue }
  if (isSuppressed({ email: lead.email, website: `https://${domain}` }, suppressed)) { lead.finding = null; lead.findingRule = 'suppressed'; stats.suppressed++; continue }
  const html = await fetchHome(domain)
  if (html === null) { stats.unreachable++; continue }
  if (detectPlatform(html, {}).platform === 'shopify') { lead.finding = null; lead.findingRule = 'shopify'; stats.shopify++; continue }
  const lab = await pagespeed(domain, KEY)
  // LCP only when a second run confirms it (stableLcp); image weight comes from the first run
  if (lab && lab.lcpMs > 4000) lab.lcpMs = stableLcp(lab.lcpMs, (await pagespeed(domain, KEY))?.lcpMs)
  else if (lab) lab.lcpMs = null
  const pick = pickFinding({ ...htmlSignals(html), ...(lab || {}) })
  lead.finding = pick ? pick.finding : null
  lead.findingRule = pick ? pick.rule : 'none'
  lead.findingSource = lab ? 'pagespeed-mobile+html' : 'html'
  lead.findingAt = new Date().toISOString()
  stats.done++
  if (pick) stats.finding++
  else stats.none++
}

if (!dry) writeFileSync(file, `${JSON.stringify(leads, null, 2)}\n`)
console.log(`${dry ? '(dry) ' : ''}leads ${leads.length} · with finding ${stats.finding} · no rule ${stats.none} · Shopify ${stats.shopify} · opt-out ${stats.suppressed} · unreachable ${stats.unreachable} · already done ${stats.skipped} · PageSpeed ${KEY ? 'on' : 'off (HTML rules only)'}`)
