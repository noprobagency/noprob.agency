#!/usr/bin/env node
// Reads cold outreach leads (Gojiberry list_contacts JSON exports, or plain
// arrays of contacts or URLs), fetches each store homepage once and detects its
// eCommerce platform. One request per domain, no AI, no credits.
// Lead data stays local: write the output in the scratchpad or docs/cold/ (gitignored).
//
// Usage:
//   node scripts/detect-platform.mjs leads-p1.json leads-p2.json --out result.json
//   node scripts/detect-platform.mjs leads.json --ids shopify   (prints contact ids, one per line)
// Options: --concurrency 16  --timeout 10000

import { readFileSync, writeFileSync } from 'node:fs'
import { isPersonalSite, normaliseUrl } from '../lib/cold/detect-platform.mjs'
import { fetchPlatform, pool } from '../lib/cold/fetch-platform.mjs'

const args = process.argv.slice(2)
const opt = (name, fallback) => {
  const i = args.indexOf(`--${name}`)
  return i === -1 ? fallback : args[i + 1]
}
const files = args.filter((a, i) => !a.startsWith('--') && !args[i - 1]?.startsWith('--'))
const concurrency = Number(opt('concurrency', 16))
const timeout = Number(opt('timeout', 10000))
const outFile = opt('out', null)
const idsFor = opt('ids', null)

if (!files.length) {
  console.error('Usage: node scripts/detect-platform.mjs <leads.json...> [--out file] [--ids shopify]')
  process.exit(1)
}

const leads = []
for (const file of files) {
  const data = JSON.parse(readFileSync(file, 'utf8'))
  const items = Array.isArray(data) ? data : data.contacts || []
  for (const item of items) {
    if (typeof item === 'string') leads.push({ id: null, website: item })
    else leads.push({ id: item.id ?? null, website: item.website || item.companyUrl || '', lastName: item.lastName || '' })
  }
}

const byDomain = new Map()
for (const lead of leads) {
  const url = normaliseUrl(lead.website)
  if (url && isPersonalSite(lead.lastName, url)) {
    lead.personal = true
    continue
  }
  lead.url = url
  if (url && !byDomain.has(url)) byDomain.set(url, null)
}

const checked = await pool([...byDomain.keys()], concurrency, (url) => fetchPlatform(url, { timeout }))
for (const [url, r] of checked) byDomain.set(url, r)

const results = leads.map((lead) => ({
  id: lead.id,
  website: lead.website,
  ...(lead.url
    ? byDomain.get(lead.url)
    : { platform: lead.personal ? 'personal-site' : 'no-website', evidence: null, status: null, error: null }),
}))

const summary = {}
for (const r of results) summary[r.platform] = (summary[r.platform] || 0) + 1
console.error(`${results.length} leads, ${byDomain.size} domains:`, summary)

if (idsFor) {
  console.log(results.filter((r) => r.platform === idsFor && r.id != null).map((r) => r.id).join('\n'))
} else if (outFile) {
  writeFileSync(outFile, JSON.stringify(results, null, 2))
  console.error(`Written ${outFile}`)
} else {
  console.log(JSON.stringify(results, null, 2))
}
