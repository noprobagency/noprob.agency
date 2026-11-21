#!/usr/bin/env node
// Ada, US stores not on Shopify (D-99): writes on each lead the one fact that opens
// the email ({finding}), with rule, source and date. A lead without a finding gets
// no automatic email. Skips stores on Shopify and anyone in the shared opt-out list.
// Every row gets findingAt, even when skipped, so the engine sees the batch as finished.
// PageSpeed key: env PAGESPEED_API_KEY, the pagespeed.env file Damiano reads, or Keychain "pagespeed-api"; without
// it only the free HTML rules run (description, H1).
// Usage: node scripts/ada-us-finding.mjs <leads.json> [--dry] [--force]

import { execFileSync } from 'node:child_process'
import { existsSync, readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { fetchHome, freshRun, htmlSignals, networkDown, pagespeed, pickFinding, stableLcp } from '../lib/cold/us-finding.mjs'
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
// A plain array, or one of Damiano's batches ({ createdAt, market, count, leads })
const doc = JSON.parse(readFileSync(file, 'utf8'))
const leads = Array.isArray(doc) ? doc : doc.leads || []
const suppressed = parseSuppressed(readFileSync('docs/cold/suppressed.txt', 'utf8'))
const domainOf = (l) => (l.domain || l.website || '').toLowerCase().replace(/^https?:\/\//, '').replace(/^www\./, '').replace(/[/?#].*$/, '')
const stats = { done: 0, finding: 0, none: 0, shopify: 0, suppressed: 0, unreachable: 0, skipped: 0, lcpCached: 0 }
const wait = (ms) => new Promise((r) => setTimeout(r, ms))

/** Runs fn over items, `n` at a time. */
async function each(items, n, fn) {
  const queue = [...items]
  await Promise.all(Array.from({ length: Math.min(n, queue.length) }, async () => { while (queue.length) await fn(queue.shift()) }))
}

// Phase 1: homepage, platform, opt-out and a first PageSpeed run on the final URL (after redirects)
const work = []
const unreachable = []
await each(leads, 4, async (lead) => {
  const domain = domainOf(lead)
  if (!domain || (lead.findingAt && !force)) { stats.skipped++; return }
  if (isSuppressed({ email: lead.email, website: `https://${domain}` }, suppressed)) { Object.assign(lead, { finding: null, findingRule: 'suppressed', findingAt: new Date().toISOString() }); stats.suppressed++; return }
  const home = await fetchHome(domain)
  if (!home) { unreachable.push(lead); return }
  if (detectPlatform(home.html, {}).platform === 'shopify') { Object.assign(lead, { finding: null, findingRule: 'shopify', findingAt: new Date().toISOString() }); stats.shopify++; return }
  work.push({ lead, home, first: await pagespeed(home.url, KEY), at: Date.now() })
})

// Most homepages failing together means our network was down, not the stores (19/11: 77 of 77):
// write nothing, so the next run measures them again.
if (networkDown(work.length + stats.shopify, unreachable.length)) {
  console.error(`Network down? ${unreachable.length} homepages unreachable, ${work.length + stats.shopify} reached: nothing written, run again later.`)
  process.exit(2)
}
for (const lead of unreachable) Object.assign(lead, { finding: null, findingRule: 'unreachable', findingAt: new Date().toISOString() })
stats.unreachable = unreachable.length

// Phase 2: PageSpeed LCP swings, so a slow first run counts only if a fresh second run,
// at least 60 s later and with a different fetchTime (not Google's cache), is slow too.
await each(work, 4, async (w) => {
  let lcpMs = null
  if (w.first?.lcpMs > 4000) {
    const left = 60_000 - (Date.now() - w.at)
    if (left > 0) await wait(left)
    const second = await pagespeed(w.home.url, KEY)
    if (freshRun(w.first, second)) lcpMs = stableLcp(w.first.lcpMs, second.lcpMs)
    else stats.lcpCached++
  }
  const lab = w.first ? { ...w.first, lcpMs } : null
  const pick = pickFinding({ ...htmlSignals(w.home.html), ...(lab || {}) })
  Object.assign(w.lead, {
    finding: pick ? pick.finding : null,
    findingRule: pick ? pick.rule : 'none',
    findingSource: lab ? 'pagespeed-mobile+html' : 'html',
    findingUrl: w.home.url,
    findingAt: new Date().toISOString(),
  })
  stats.done++
  if (pick) stats.finding++
  else stats.none++
})

if (!dry) writeFileSync(file, `${JSON.stringify(doc, null, 2)}\n`)
console.log(`${dry ? '(dry) ' : ''}leads ${leads.length} · with finding ${stats.finding} · no rule ${stats.none} · Shopify ${stats.shopify} · opt-out ${stats.suppressed} · unreachable ${stats.unreachable} · already done ${stats.skipped} · LCP second run cached ${stats.lcpCached} · PageSpeed ${KEY ? 'on' : 'off (HTML rules only)'}`)
