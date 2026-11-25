#!/usr/bin/env node
// Seed test of a new copy (D-107): one real email of that copy from one mailbox to a seed
// address (Antonio's own Gmail, a mail-tester.com address), to see the tab it lands in and
// the spam score before the copy goes to leads. Sends only with --send, on Antonio's ok;
// without it prints what it would send. Example store and name, never a lead.
// Usage: node scripts/cold-email-seed.mjs --copy it-cat|us2 --from antonio|hello --to <address> [--send]

import { SENDER, accessToken, buildRaw, gmail } from '../lib/cold-email/gmail.mjs'
import { renderItCat } from '../lib/cold-email/sequence-itcat.mjs'
import { renderUs } from '../lib/cold-email/sequence-us.mjs'

const args = process.argv.slice(2)
const arg = (k) => (args.includes(k) ? args[args.indexOf(k) + 1] : null)
const copy = arg('--copy')
const from = arg('--from') || 'antonio'
const to = arg('--to')
if (!['it-cat', 'us2'].includes(copy) || !to || !['antonio', 'hello'].includes(from)) {
  console.error('uso: --copy it-cat|us2 --from antonio|hello --to <indirizzo> [--send]')
  process.exit(2)
}
const lead = copy === 'it-cat' ? { brand: 'Bottega Rossi', firstName: 'Antonio', lang: 'it' } : { brand: 'Harbor Goods', firstName: 'Antonio', lang: 'en', line: 'us' }
const { subject, body } = copy === 'it-cat' ? renderItCat(lead, 'e1') : renderUs(lead, 'e1', null, undefined, 'us2')
const box = from === 'antonio' ? { email: SENDER.email, token: undefined } : { email: 'hello@noprob.agency', token: 'cold-email-gmail-token-hello' }
console.log(`${box.email} -> ${to}\nOggetto: ${subject}\n\n${body}\n`)
if (!args.includes('--send')) process.exit(0)
const api = gmail(await accessToken(box.token), { entry: box.token })
const res = await api.send(buildRaw({ to, subject, body, from: box.email }))
console.log(`inviata: ${res.id}`)
