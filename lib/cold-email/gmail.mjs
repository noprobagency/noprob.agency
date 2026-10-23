// Minimal Gmail API client for the cold email engine (antonio@noprob.agency).
// OAuth client and refresh token live in the macOS Keychain, written once by
// scripts/cold-email-auth.mjs: "cold-email-gmail-client" (JSON with client_id and
// client_secret) and "cold-email-gmail-token" (refresh token).

import { execFileSync } from 'node:child_process'

export const SENDER = { name: 'Antonio Manitta', email: 'antonio@noprob.agency' }
export const SCOPES = ['https://www.googleapis.com/auth/gmail.send', 'https://www.googleapis.com/auth/gmail.readonly']
const API = 'https://gmail.googleapis.com/gmail/v1/users/me'

export function keychain(service) {
  try {
    return execFileSync('security', ['find-generic-password', '-s', service, '-w'], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }).trim()
  } catch {
    return null
  }
}

export async function accessToken() {
  const client = keychain('cold-email-gmail-client')
  const refresh = keychain('cold-email-gmail-token')
  if (!client || !refresh) throw new Error('Gmail not connected: run node scripts/cold-email-auth.mjs')
  const { client_id, client_secret } = JSON.parse(client)
  const res = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    body: new URLSearchParams({ client_id, client_secret, refresh_token: refresh, grant_type: 'refresh_token' }),
  })
  if (!res.ok) throw new Error(`Gmail token -> ${res.status} ${await res.text()}`)
  return (await res.json()).access_token
}

/** Gmail client. Access tokens last one hour: on a 401 it gets a fresh one and retries once. */
export function gmail(token) {
  const call = async (method, path, body, retried = false) => {
    const res = await fetch(`${API}${path}`, {
      method,
      headers: { authorization: `Bearer ${token}`, 'content-type': 'application/json' },
      body: body ? JSON.stringify(body) : undefined,
    })
    if (res.status === 401 && !retried) {
      token = await accessToken()
      return call(method, path, body, true)
    }
    if (!res.ok) throw new Error(`Gmail ${method} ${path.split('?')[0]} -> ${res.status} ${(await res.text()).slice(0, 200)}`)
    return res.json()
  }
  return {
    send: (raw, threadId) => call('POST', '/messages/send', threadId ? { raw, threadId } : { raw }),
    thread: (id) =>
      call('GET', `/threads/${id}?format=metadata&metadataHeaders=From&metadataHeaders=Subject&metadataHeaders=Auto-Submitted&metadataHeaders=Message-ID`),
    search: (q) => call('GET', `/messages?q=${encodeURIComponent(q)}&maxResults=100`),
    message: (id) => call('GET', `/messages/${id}?format=full`),
  }
}

const encodeWord = (s) => (/^[\x20-\x7e]*$/.test(s) ? s : `=?UTF-8?B?${Buffer.from(s).toString('base64')}?=`)

/** RFC 822 plain text message, base64url as the API wants it. Replies carry In-Reply-To. */
export function buildRaw({ to, subject, body, inReplyTo }) {
  const headers = [
    `From: ${encodeWord(SENDER.name)} <${SENDER.email}>`,
    `To: ${to}`,
    `Subject: ${encodeWord(subject)}`,
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'Content-Transfer-Encoding: base64',
  ]
  if (inReplyTo) headers.push(`In-Reply-To: ${inReplyTo}`, `References: ${inReplyTo}`)
  const mime = `${headers.join('\r\n')}\r\n\r\n${Buffer.from(body).toString('base64').replace(/.{76}/g, '$&\r\n')}`
  return Buffer.from(mime).toString('base64url')
}

const header = (msg, name) => msg.payload?.headers?.find((h) => h.name.toLowerCase() === name.toLowerCase())?.value || ''

const AUTO_REPLY = /(out of (the )?office|automatic reply|auto.?reply|risposta automatica|fuori ufficio|assente|abwesenheit|absence|vacation)/i
const BOUNCE_FROM = /(mailer-daemon|postmaster)/i

/**
 * What happened in a sequence thread after our emails: 'reply', 'bounce' or null.
 * Out of office replies do not stop the sequence.
 */
export function threadOutcome(thread) {
  for (const msg of thread.messages || []) {
    const from = header(msg, 'From')
    if (from.toLowerCase().includes(SENDER.email)) continue
    if (BOUNCE_FROM.test(from)) return 'bounce'
    if (header(msg, 'Auto-Submitted').toLowerCase().startsWith('auto') || AUTO_REPLY.test(header(msg, 'Subject'))) continue
    return 'reply'
  }
  return null
}

export const messageId = (thread) => header(thread.messages?.[0] || {}, 'Message-ID')
