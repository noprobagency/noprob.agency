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

const get = async (path) => {
  const res = await fetch(`https://ext.gojiberry.ai${path}`, { headers: { authorization: `Bearer ${gojiberryKey()}` } })
  if (!res.ok) throw new Error(`Gojiberry ${path.split('?')[0]} -> ${res.status}`)
  return res.json()
}

/**
 * Emails Ada's Gojiberry campaign will really send today from a mailbox: the emails in
 * its queue (multichannel campaigns queue LinkedIn steps too), at most the seat's
 * remaining daily limit. Room it does not use goes to the direct channel. What it
 * already sent is in Gmail's sent folder, so only the rest is reserved here.
 */
export async function gojiberryRemaining(email, campaignId, { live = false, ceiling = 25 } = {}) {
  const seat = ((await get('/v1/email-seat')) || []).find((s) => s.email === email)
  if (!seat) return 0
  const left = Math.max(0, (seat.dailyEmailMax || 0) - (seat.dailyEmailCount || 0))
  // Once Ada's leads reach their email steps, they enter the queue during the day, after
  // this run: the seat's remaining limit (at most `ceiling`) is kept free instead.
  if (live) return Math.min(left, ceiling)
  const queued = ((await get(`/v1/campaign/${campaignId}/queue`)) || []).filter((q) => q.campaignStep?.type === 'email').length
  return Math.min(left, queued)
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
