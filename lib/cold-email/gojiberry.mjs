// Read-only view of Gojiberry for the direct cold email channel: the store domains
// of the Sprint lists (Ada EN, Leonardo IT), which also email from antonio@.
// Only GET requests: this channel never writes to Gojiberry.

import { keychain } from './gmail.mjs'

export const GOJIBERRY_LISTS = [63200, 64866]

export async function gojiberryDomains() {
  const key = process.env.GOJIBERRY_API_KEY || keychain('gojiberry-api')
  if (!key) throw new Error('No Gojiberry key (env GOJIBERRY_API_KEY or Keychain "gojiberry-api")')
  const out = new Set()
  for (const listId of GOJIBERRY_LISTS) {
    for (let page = 1; page < 50; page++) {
      const res = await fetch(`https://ext.gojiberry.ai/v1/contact?listId=${listId}&limit=100&page=${page}`, {
        headers: { authorization: `Bearer ${key}` },
      })
      if (!res.ok) throw new Error(`Gojiberry list ${listId} -> ${res.status}`)
      const data = await res.json()
      const items = data.contacts || data.data || []
      for (const c of items) if (c.website) out.add(c.website)
      if (items.length < 100) break
    }
  }
  return out
}
