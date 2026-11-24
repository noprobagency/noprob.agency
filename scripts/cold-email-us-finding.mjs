#!/usr/bin/env node
// Runs Ada's finding on one US batch, then saves the batch in the CRM repo it lives in.
// Started in the background by the review (cold-email-gjb.mjs). Without the save, the
// finished batch stays an uncommitted change in the runner's CRM clone, and the next Mac
// run stops on it ("clone CRM non riuscito", 24/11: the 9:20 and 10:20 runs sent nothing).
// Usage: node scripts/cold-email-us-finding.mjs <batch.json>

import { execFileSync } from 'node:child_process'
import { saveLot } from '../lib/cold-email/us-lots.mjs'

const [file] = process.argv.slice(2)
if (!file) {
  console.error('Usage: node scripts/cold-email-us-finding.mjs <batch.json>')
  process.exit(1)
}
execFileSync('node', ['scripts/ada-us-finding.mjs', file], { stdio: 'inherit' })
console.log(saveLot(file))
