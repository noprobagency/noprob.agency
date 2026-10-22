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
import { detectPlatform, normaliseUrl } from '../lib/cold/detect-platform.mjs'

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

// Gojiberry's `website` is sometimes the person's own site (johnsmith.com), not the store.
const squash = (s) => (s || '').toLowerCase().replace(/[^a-z0-9]/g, '')
const isPersonalSite = (lead, url) => {
  const last = squash(lead.lastName)
  return last.length > 2 && squash(new URL(url).hostname.replace(/^www\./, '').split('.')[0]).includes(last)
}

const byDomain = new Map()
for (const lead of leads) {
  const url = normaliseUrl(lead.website)
  if (url && isPersonalSite(lead, url)) {
    lead.personal = true
    continue
  }
  lead.url = url
  if (url && !byDomain.has(url)) byDomain.set(url, null)
}

async function check(url) {
  const ctrl = new AbortController()
  const timer = setTimeout(() => ctrl.abort(), timeout)
  try {
    const res = await fetch(url, {
      redirect: 'follow',
      signal: ctrl.signal,
      headers: { 'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/128 Safari/537.36' },
    })
    const html = (await res.text()).slice(0, 500_000)
    return { ...detectPlatform(html, Object.fromEntries(res.headers)), status: res.status, error: null }
  } catch (err) {
    return { platform: 'unreachable', evidence: null, status: null, error: err.name === 'AbortError' ? 'timeout' : err.message }
  } finally {
    clearTimeout(timer)
  }
}

const queue = [...byDomain.keys()]
await Promise.all(
  Array.from({ length: Math.min(concurrency, queue.length) }, async () => {
    while (queue.length) {
      const url = queue.shift()
      byDomain.set(url, await check(url))
    }
  }),
)

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
