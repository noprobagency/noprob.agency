#!/usr/bin/env node
// One-time Gmail connection for the cold email engine (antonio@noprob.agency, or with
// --account hello@noprob.agency the mailbox Gojiberry sends Dante's emails from: read
// only, for the replies, in its own Keychain entry).
// Needs an OAuth client of type "Desktop app" in a Google Cloud project of the
// noprob.agency Workspace, with the Gmail API enabled and the consent screen set
// to "Internal". Saves client and refresh token in the macOS Keychain; nothing on disk.
//
// Usage: node scripts/cold-email-auth.mjs [client_secret.json downloaded from Google Cloud] [--account hello@noprob.agency]
// Without the file the OAuth client already saved in the Keychain is used.
// Afterwards the downloaded JSON can be deleted.

import { execFileSync } from 'node:child_process'
import { readFileSync } from 'node:fs'
import { createServer } from 'node:http'
import { SCOPES, SENDER, keychain } from '../lib/cold-email/gmail.mjs'

const args = process.argv.slice(2)
const file = args.find((a, i) => !a.startsWith('--') && args[i - 1] !== '--account')
const saved = keychain('cold-email-gmail-client')
if (!file && !saved) {
  console.error('Usage: node scripts/cold-email-auth.mjs <client_secret.json> [--account hello@noprob.agency]')
  process.exit(1)
}
const account = args.includes('--account') ? args[args.indexOf('--account') + 1] : SENDER.email
const extra = account !== SENDER.email
// antonio@ sends and reads; any other mailbox is read only, its token in its own entry.
const scopes = extra ? ['https://www.googleapis.com/auth/gmail.readonly'] : SCOPES
const tokenEntry = extra ? `cold-email-gmail-token-${account.split('@')[0]}` : 'cold-email-gmail-token'
const json = file ? JSON.parse(readFileSync(file, 'utf8')) : JSON.parse(saved)
const { client_id, client_secret } = json.installed || json.web || json
if (!client_id || !client_secret) throw new Error('Not an OAuth client JSON (expected "installed.client_id")')

const store = (service, value) =>
  execFileSync('security', ['add-generic-password', '-U', '-s', service, '-a', 'noprob', '-w', value])

const server = createServer()
await new Promise((r) => server.listen(0, '127.0.0.1', r))
const redirect = `http://127.0.0.1:${server.address().port}`
const url = `https://accounts.google.com/o/oauth2/v2/auth?${new URLSearchParams({
  client_id,
  redirect_uri: redirect,
  response_type: 'code',
  scope: scopes.join(' '),
  access_type: 'offline',
  prompt: 'consent',
  login_hint: account,
})}`

const code = await new Promise((resolve, reject) => {
  server.on('request', (req, res) => {
    const params = new URL(req.url, redirect).searchParams
    res.end(params.get('code') ? 'Gmail collegato, puoi chiudere questa scheda.' : 'Errore, guarda il terminale.')
    server.close()
    if (params.get('code')) resolve(params.get('code'))
    else reject(new Error(params.get('error') || 'no code'))
  })
  console.log(`Accedi come ${account} e autorizza:\n${url}`)
  execFileSync('open', [url])
})

const res = await fetch('https://oauth2.googleapis.com/token', {
  method: 'POST',
  body: new URLSearchParams({ code, client_id, client_secret, redirect_uri: redirect, grant_type: 'authorization_code' }),
})
const token = await res.json()
if (!token.refresh_token) throw new Error(`No refresh token: ${JSON.stringify(token).slice(0, 200)}`)

store('cold-email-gmail-client', JSON.stringify({ client_id, client_secret }))
store(tokenEntry, token.refresh_token)
console.log(`Saved in the Keychain: cold-email-gmail-client, ${tokenEntry}`)
