// Gojiberry REST client shared by the cold outreach scripts (no MCP, no credits).
// API key: env GOJIBERRY_API_KEY, or macOS Keychain item "gojiberry-api"
//   (security add-generic-password -s gojiberry-api -a noprob -w)

import { execFileSync } from 'node:child_process'

export const LISTS = { en: 63200, it: 64866, shopify: 64769 }

function apiKey() {
  if (process.env.GOJIBERRY_API_KEY) return process.env.GOJIBERRY_API_KEY
  try {
    return execFileSync('security', ['find-generic-password', '-s', 'gojiberry-api', '-w'], { encoding: 'utf8' }).trim()
  } catch {
    console.error('Missing API key: set GOJIBERRY_API_KEY or the Keychain item "gojiberry-api".')
    process.exit(1)
  }
}
let KEY // read on the first request, so importing this module needs no key

export async function api(method, path, body) {
  for (let attempt = 0; attempt < 3; attempt++) {
    const res = await fetch(`https://ext.gojiberry.ai${path}`, {
      method,
      headers: { authorization: `Bearer ${(KEY ??= apiKey())}`, 'content-type': 'application/json' },
      body: body ? JSON.stringify(body) : undefined,
    })
    if (res.status === 429) {
      await new Promise((r) => setTimeout(r, (Number(res.headers.get('retry-after')) || 10) * 1000))
      continue
    }
    // In CI (public run logs) never print response bodies: they can hold lead data
    if (!res.ok) throw new Error(`${method} ${path} -> ${res.status}${process.env.CI ? '' : ` ${(await res.text()).slice(0, 200)}`}`)
    const text = await res.text()
    return text ? JSON.parse(text) : null
  }
  throw new Error(`${method} ${path} -> rate limited`)
}

export async function listContacts(listId) {
  const all = []
  for (let page = 1; page < 50; page++) {
    const data = await api('GET', `/v1/contact?listId=${listId}&limit=100&page=${page}`)
    const items = data.contacts || data.data || []
    all.push(...items)
    if (items.length < 100) break
  }
  return all
}
