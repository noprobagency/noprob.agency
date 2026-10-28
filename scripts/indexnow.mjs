#!/usr/bin/env node
// Sends every URL of the sitemap to IndexNow (Bing, Yandex, Seznam, Naver; ChatGPT
// search leans on the Bing index). Run it after each production deploy:
//   pnpm indexnow                      reads https://noprob.agency/sitemap.xml
//   pnpm indexnow --dry-run            prints the URLs, sends nothing
//   pnpm indexnow --file path.xml      reads a local sitemap instead of the live one
// The key file must be live at https://noprob.agency/<KEY>.txt before the first run
// (it is in public/, so it ships with the deploy). Docs: https://www.indexnow.org/documentation

import { existsSync, readFileSync } from 'node:fs'

const SITE = (process.env.INDEXNOW_SITE || 'https://noprob.agency').replace(/\/$/, '')
const KEY = '6bc1295b33d8eeb2a3b808b8ac399598'
const ENDPOINT = 'https://api.indexnow.org/indexnow'
const MAX_URLS = 10000

const args = process.argv.slice(2)
const dryRun = args.includes('--dry-run')
const fileIndex = args.indexOf('--file')
const file = fileIndex >= 0 ? args[fileIndex + 1] : null

async function readSitemap() {
  if (file) return readFileSync(file, 'utf8')
  const res = await fetch(`${SITE}/sitemap.xml`)
  if (!res.ok) throw new Error(`sitemap.xml answered ${res.status}`)
  return res.text()
}

function extractUrls(xml) {
  const host = new URL(SITE).host
  const urls = [...xml.matchAll(/<loc>\s*([^<\s]+)\s*<\/loc>/g)].map((m) => m[1].replaceAll('&amp;', '&'))
  // Only URLs of our own host (hreflang <xhtml:link> alternates are not <loc>)
  return [...new Set(urls)].filter((u) => new URL(u).host === host)
}

if (!existsSync(new URL(`../public/${KEY}.txt`, import.meta.url))) {
  console.error(`Key file public/${KEY}.txt is missing.`)
  process.exit(1)
}

const urls = extractUrls(await readSitemap()).slice(0, MAX_URLS)
if (urls.length === 0) {
  console.error('No URL found in the sitemap.')
  process.exit(1)
}

console.log(`${urls.length} URLs from ${file ?? SITE + '/sitemap.xml'}`)
if (dryRun) {
  urls.forEach((u) => console.log(u))
  console.log('Dry run: nothing sent.')
  process.exit(0)
}

const res = await fetch(ENDPOINT, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({
    host: new URL(SITE).host,
    key: KEY,
    keyLocation: `${SITE}/${KEY}.txt`,
    urlList: urls,
  }),
})

// 200 = received, 202 = received and key check pending, 403 = key not valid, 422 = URLs not on the host, 429 = too many requests
console.log(`IndexNow answered ${res.status} ${res.statusText}`)
if (res.status !== 200 && res.status !== 202) {
  console.error(await res.text())
  process.exit(1)
}
