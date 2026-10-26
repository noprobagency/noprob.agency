// Read-only view of Gojiberry for the direct cold email channel: the store domains
// of the LinkedIn campaign lists and of the Gojiberry email agent (Dante), so a
// store never gets two channels. Only GET requests.

import { keychain } from './gmail.mjs'

export const GOJIBERRY_LISTS = [63200, 64866, 65682] // LinkedIn EN, LinkedIn IT, Dante (email, hello@)

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
