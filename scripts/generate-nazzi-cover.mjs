#!/usr/bin/env node
// Cover of the Supplement DTC Nazzi case study, in the same style as the blog covers
// (light background with a soft green glow, green rule on the left, black + green
// headline, rounded card with the brand mark on the right). Language neutral, so the
// same file works for the IT and EN pages and as OG image.
// Run with: node scripts/generate-nazzi-cover.mjs
// Output: public/images/use-case-nazzi/nazzi-cover.png (1600x900)

import sharp from 'sharp'
import { readFileSync, writeFileSync } from 'node:fs'

const W = 1600
const H = 900
const FONT = 'Helvetica, Arial, sans-serif'
const GREEN = '#96bf47'
const NAZZI_GREEN = '#1d6b48'

// Nazzi mark: the three paths of public/images/use-case-nazzi/nazzi-logo.svg (viewBox 36x27).
const logo = readFileSync('public/images/use-case-nazzi/nazzi-logo.svg', 'utf8')
const markPaths = [...logo.matchAll(/<path d="([^"]+)"/g)].map((m) => m[1])

const card = { x: 990, y: 200, w: 500, h: 500 }
const markScale = 8
const markW = 36 * markScale
const markH = 27 * markScale

const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="glow" cx="0.68" cy="0.5" r="0.55">
      <stop offset="0" stop-color="#e3ecd0" stop-opacity="1"/>
      <stop offset="1" stop-color="#f0f0f0" stop-opacity="1"/>
    </radialGradient>
    <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="10" stdDeviation="22" flood-color="#6c7180" flood-opacity="0.10"/>
    </filter>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#glow)"/>
  <rect x="0" y="0" width="8" height="${H}" fill="${GREEN}"/>

  <text x="110" y="380" font-family="${FONT}" font-size="112" font-weight="700" letter-spacing="-5" fill="#121212">WooCommerce</text>
  <text x="110" y="508" font-family="${FONT}" font-size="112" font-weight="700" letter-spacing="-5" fill="${GREEN}">→ Shopify</text>
  <rect x="112" y="572" width="96" height="5" rx="2.5" fill="${GREEN}" fill-opacity="0.6"/>
  <text x="112" y="652" font-family="${FONT}" font-size="40" font-weight="400" letter-spacing="-0.8" fill="#7c7c7c">Nazzi DTC, case study</text>

  <rect x="${card.x}" y="${card.y}" width="${card.w}" height="${card.h}" rx="44" fill="#f6f8f0" stroke="#e6ebdb" stroke-width="2" filter="url(#shadow)"/>
  <g transform="translate(${card.x + (card.w - markW) / 2} ${card.y + (card.h - markH) / 2}) scale(${markScale})" fill="${NAZZI_GREEN}">
    ${markPaths.map((d) => `<path d="${d}"/>`).join('\n    ')}
  </g>
</svg>`

const file = 'public/images/use-case-nazzi/nazzi-cover.png'
const png = await sharp(Buffer.from(svg)).png().toBuffer()
writeFileSync(file, png)
console.log(`written ${file} (${png.length} bytes)`)
