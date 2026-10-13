#!/usr/bin/env node
// One-shot generator for the Shopify Launch Sprint OG images (1200x630, IT + EN).
// Run with: node scripts/generate-zero-loss-og.mjs
// Output: public/images/og-zero-loss-migration-{it,en}.png
// Brand: #f0f0f0 background, near-black type, green accent (#1dcc5d).

import sharp from 'sharp'
import { writeFileSync } from 'node:fs'

function svg(claim) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="#f0f0f0"/>
  <rect x="72" y="72" width="1056" height="486" rx="28" fill="#ffffff" stroke="#f8f8f8" stroke-width="10"/>
  <rect x="120" y="120" width="380" height="44" rx="22" fill="#f9f9f9" stroke="#181818" stroke-width="2"/>
  <text x="310" y="150" text-anchor="middle" font-family="Georgia, 'Source Serif 4', serif" font-style="italic" font-size="22" font-weight="600" letter-spacing="-1" fill="#181818">shopify launch sprint</text>
  <text x="120" y="290" font-family="Helvetica, Arial, sans-serif" font-size="92" font-weight="700" letter-spacing="-5" fill="#121212">Shopify Launch</text>
  <text x="120" y="385" font-family="Helvetica, Arial, sans-serif" font-size="92" font-weight="700" letter-spacing="-5" fill="#121212">Sprint</text>
  <circle cx="132" cy="470" r="9" fill="#1dcc5d"/>
  <text x="156" y="480" font-family="Helvetica, Arial, sans-serif" font-size="34" font-weight="500" letter-spacing="-1" fill="#181818">${claim}</text>
  <text x="1080" y="520" text-anchor="end" font-family="Georgia, 'Source Serif 4', serif" font-style="italic" font-size="30" fill="#7c7c7c">noprob agency</text>
</svg>`
}

const variants = [
  { file: 'public/images/og-zero-loss-migration-it.png', claim: 'Su Shopify in 10 giorni lavorativi' },
  { file: 'public/images/og-zero-loss-migration-en.png', claim: 'On Shopify in 10 business days' },
]

for (const { file, claim } of variants) {
  const png = await sharp(Buffer.from(svg(claim))).png().toBuffer()
  writeFileSync(file, png)
  console.log(`written ${file} (${png.length} bytes)`)
}
