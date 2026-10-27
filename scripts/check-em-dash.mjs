#!/usr/bin/env node
// Fails (exit 1) if any em dash (U+2014) is present in the public copy
// modules: blog articles (IT and EN), the Shopify Launch Sprint copy and every
// i18n dictionary. House style: commas, parentheses or colons instead.
// Usage: node scripts/check-em-dash.mjs

import { readFileSync, readdirSync, existsSync } from 'node:fs'
import { join } from 'node:path'

const FILES = [
  'data/articles/index.ts',
  ...readdirSync('data/articles/posts').filter((f) => f.endsWith('.ts')).map((f) => join('data/articles/posts', f)),
  'content/zero-loss-migration.it.ts',
  'content/zero-loss-migration.en.ts',
  ...readdirSync('lib/i18n').filter((f) => f.endsWith('.ts')).map((f) => join('lib/i18n', f)),
  ...readdirSync('data/use-cases').filter((f) => f.endsWith('.ts')).map((f) => join('data/use-cases', f)),
  'public/llms.txt',
]

let hits = 0
for (const file of FILES) {
  if (!existsSync(file)) continue
  readFileSync(file, 'utf8').split('\n').forEach((line, idx) => {
    if (line.includes('—')) {
      console.error(`${file}:${idx + 1}: ${line.trim().slice(0, 120)}`)
      hits++
    }
  })
}

if (hits > 0) {
  console.error(`\nFound ${hits} em dash occurrence(s). Replace with comma, parentheses, or colon.`)
  process.exit(1)
}
console.log('check-em-dash: no em dashes in the public copy.')
