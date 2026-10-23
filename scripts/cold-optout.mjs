#!/usr/bin/env node
// Hourly opt-out sweep (launchd agency.noprob.cold-optout): excludes at once anyone
// who asked not to be contacted. Logic in lib/cold/sweep.mjs. Silent when nobody
// opted out; otherwise one line in docs/cold/daily-log.md.
// Usage: node scripts/cold-optout.mjs [--dry]

import { appendFileSync, existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { optoutSweep } from '../lib/cold/sweep.mjs'

const STATE = 'docs/cold/daily-state.json'
const dry = process.argv.includes('--dry')

const state = existsSync(STATE) ? JSON.parse(readFileSync(STATE, 'utf8')) : {}
const sweep = await optoutSweep({ since: state.lastSweep, dry })
if (!dry) {
  mkdirSync('docs/cold', { recursive: true })
  const current = existsSync(STATE) ? JSON.parse(readFileSync(STATE, 'utf8')) : {}
  writeFileSync(STATE, JSON.stringify({ ...current, lastSweep: sweep.startedAt }))
}
if (sweep.excluded) {
  const line = `- ${new Date().toISOString().slice(0, 16).replace('T', ' ')}${dry ? ' (dry)' : ''} · opt-out esclusi ${sweep.excluded}\n`
  if (!dry) appendFileSync('docs/cold/daily-log.md', line)
  process.stdout.write(line)
}
