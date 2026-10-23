// Opt-out sweep for the Gojiberry Sprint lists: anyone who replied "no" / "don't
// contact me" on LinkedIn (Unibox), is marked unsubscribed in Gojiberry, or is listed
// in docs/cold/suppressed.txt gets state `excluded` at once and never receives
// anything again, on any channel (rule agreed with the lawyer).
// docs/cold/suppressed.txt is shared with the direct cold email channel: one email
// or @domain per line, both channels read it and append to it.
// Run hourly by scripts/cold-optout.mjs and at the start of scripts/cold-daily.mjs.

import { appendFileSync, existsSync, mkdirSync, readFileSync } from 'node:fs'
import { normaliseUrl } from './detect-platform.mjs'
import { LISTS, api, listContacts } from './gojiberry.mjs'
import { isOptOut } from './optout.mjs'

const SUPPRESSED = 'docs/cold/suppressed.txt'

const emailsOf = (c) =>
  [c.email, c.email_2, c.email_3, c.secondEmail, c.thirdEmail].filter(Boolean).map((e) => String(e).toLowerCase())

/** Store domain as "@example.com": Gojiberry finds emails only at the email step. */
const domainOf = (c) => {
  const url = normaliseUrl(c.website)
  return url ? `@${new URL(url).hostname.replace(/^www\./, '')}` : null
}

/** True when a suppression line (email or @domain) covers the contact. */
export function isSuppressed(c, lines) {
  const mails = emailsOf(c)
  const domain = domainOf(c)
  return lines.some((s) => (s.startsWith('@') ? s === domain || mails.some((m) => m.endsWith(s)) : mails.includes(s)))
}

export async function optoutSweep({ since = new Date(Date.now() - 3 * 864e5).toISOString(), dry = false } = {}) {
  const startedAt = new Date().toISOString()
  const contacts = [...(await listContacts(LISTS.en)), ...(await listContacts(LISTS.it))]
  const byLinkedin = new Map()
  for (const c of contacts) {
    for (const k of [c.id, c.linkedinMemberId, c.profileId, c.linkedinIdentifier]) if (k) byLinkedin.set(String(k), c)
  }

  const out = new Map() // contact id -> reason
  // 1. LinkedIn replies since the last sweep (threads come newest first)
  for (let page = 1; page < 20; page++) {
    const { data = [] } = await api('GET', `/v1/unibox/threads?limit=100&page=${page}`)
    const recent = data.filter((t) => t.updatedAt >= since)
    for (const t of recent) {
      const c = byLinkedin.get(String(t.contactId)) || byLinkedin.get(String(t.attendeeUrn))
      if (!c || c.state === 'excluded') continue // only Sprint leads, never personal chats
      const msgs = (await api('GET', `/v1/unibox/threads/${t.id}/messages`)).data || []
      if (msgs.some((m) => !m.senderIsSelf && (m.deliveredAt || m.createdAt) >= since && isOptOut(m.content))) {
        out.set(c.id, 'linkedin')
      }
    }
    if (recent.length < data.length || data.length < 100) break
  }
  // 2. Unsubscribed in Gojiberry, or suppressed by the direct email channel
  const suppressed = existsSync(SUPPRESSED)
    ? readFileSync(SUPPRESSED, 'utf8').split('\n').map((l) => l.trim().toLowerCase()).filter((l) => l && !l.startsWith('#'))
    : []
  for (const c of contacts) {
    if (c.state === 'excluded') continue
    if (c.unsubscribed) out.set(c.id, 'unsubscribed')
    if (isSuppressed(c, suppressed)) out.set(c.id, 'suppressed')
  }

  if (!dry) {
    const toFile = []
    for (const [id] of out) {
      await api('PATCH', `/v1/contact/${id}`, { state: 'excluded', readyForCampaign: false })
      const c = contacts.find((x) => x.id === id)
      toFile.push(...emailsOf(c).filter((m) => !suppressed.includes(m)))
    }
    if (toFile.length) {
      mkdirSync('docs/cold', { recursive: true })
      appendFileSync(SUPPRESSED, toFile.map((m) => `${m}\n`).join(''))
    }
  }
  return { excluded: out.size, startedAt }
}
