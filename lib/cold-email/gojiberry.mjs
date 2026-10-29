// Read-only view of Gojiberry for the direct cold email channel: the store domains
// of the LinkedIn campaign lists and of the Gojiberry email agent (Dante), so a
// store never gets two channels. Only GET requests.

import { keychain } from './gmail.mjs'

export const GOJIBERRY_LISTS = [63200, 64866, 65682] // LinkedIn EN, LinkedIn IT, Dante (email, hello@)

const gojiberryKey = () => {
  const key = process.env.GOJIBERRY_API_KEY || keychain('gojiberry-api')
  if (!key) throw new Error('No Gojiberry key (env GOJIBERRY_API_KEY or Keychain "gojiberry-api")')
  return key
}

/**
 * Emails Gojiberry still plans to send today from a mailbox (Ada's campaign on
 * antonio@): its daily limit, which grows with the warm-up, minus what it already sent.
 * What it sent is already in Gmail's sent folder, so only the rest is reserved here.
 */
export async function gojiberryRemaining(email) {
  const res = await fetch('https://ext.gojiberry.ai/v1/email-seat', { headers: { authorization: `Bearer ${gojiberryKey()}` } })
  if (!res.ok) throw new Error(`Gojiberry email seats -> ${res.status}`)
  const seat = ((await res.json()) || []).find((s) => s.email === email)
  return seat ? Math.max(0, (seat.dailyEmailMax || 0) - (seat.dailyEmailCount || 0)) : 0
}

export async function gojiberryDomains() {
  const key = gojiberryKey()
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
