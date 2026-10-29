#!/usr/bin/env node
// Exports cold-email/data/leads.json (direct channel, antonio@) and
// cold-email/data/dante.json (Dante, hello@, written by scripts/cold-email-gjb.mjs) to the CRM (noprobagency/crm-noprobagency,
// private, Vercel with SSO) as data/leads.json, only the fields the page shows.
// With --push it commits and pushes, and Vercel deploys.
//
// Usage: node scripts/cold-email-crm.mjs <path to crm-noprobagency checkout> [--push]

import { execFileSync } from 'node:child_process'
import { existsSync, readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { STEPS, addWorkingDays } from '../lib/cold-email/sequence.mjs'

const args = process.argv.slice(2)
const repo = args.find((a) => !a.startsWith('--'))
if (!repo) {
  console.error('Usage: node scripts/cold-email-crm.mjs <crm checkout> [--push]')
  process.exit(1)
}

const { leads } = JSON.parse(readFileSync('cold-email/data/leads.json', 'utf8'))
const today = new Date().toLocaleDateString('en-CA', { timeZone: 'Europe/Lisbon' })

const nextDate = (l) => {
  const next = STEPS[l.sequence.sent.length]
  if (l.segment !== 'target' || l.sequence.stoppedAt || !next) return null
  return l.sequence.sent.length ? addWorkingDays(l.sequence.sent[0].date, next.day) : null
}

const direct = leads.map((l) => ({
  channel: 'antonio@',
  total: STEPS.length,
  brand: l.brand,
  domain: l.domain,
  contact: l.contact,
  email: l.email,
  lang: l.lang,
  platform: l.platform,
  php: l.php,
  segment: l.segment,
  reason: l.reason,
  priority: l.priority ?? null,
  note: l.note ?? null,
  reply: l.segment === 'warm' ? l.crm.reply : null,
  sent: l.sequence.sent,
  nextDate: nextDate(l),
  stopReason: l.sequence.stopReason,
}))
const dante = existsSync('cold-email/data/dante.json') ? JSON.parse(readFileSync('cold-email/data/dante.json', 'utf8')).leads : []
const out = [...direct, ...dante]

writeFileSync(join(repo, 'data/leads.json'), JSON.stringify({ updatedAt: new Date().toISOString(), today, leads: out }))
console.log(`${out.length} leads -> ${join(repo, 'data/leads.json')}`)

if (args.includes('--push')) {
  const git = (...a) => execFileSync('git', ['-C', repo, ...a], { encoding: 'utf8' })
  git('add', 'data/leads.json')
  if (git('status', '--porcelain').trim()) {
    git('commit', '-m', `chore(crm): cold email update ${today}`)
    git('push', '-q')
    console.log('pushed')
  } else console.log('no changes')
}
