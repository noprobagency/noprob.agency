#!/usr/bin/env node
// One-shot generator for the AI Accelerator OG images (1200x630, IT + EN).
// Run with: node scripts/generate-ai-og.mjs
// Output: public/images/og-ai-accelerator-{it,en}.png

import sharp from 'sharp'
import { writeFileSync } from 'node:fs'

const ACCENT = '#2F6BFF'

// Subtitle mirrors the landing H1: line1 plain, line2 with the two highlighted parts.
function svg({ line1, em1, mid, em2, end, kicker }) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="#0b0e17"/>
  <!-- neural circuits -->
  <g fill="none" stroke="${ACCENT}" stroke-width="2" opacity="0.35">
    <path d="M0 120 H300 Q340 120 340 160 V180 Q340 220 380 220 H500"/>
    <path d="M1200 100 H940 Q900 100 900 140 V180 Q900 220 860 220 H700"/>
    <path d="M80 630 V580 Q80 540 120 540 H300"/>
    <path d="M1160 630 V580 Q1160 540 1120 540 H900"/>
    <path d="M420 0 V40 Q420 80 460 80 H540"/>
  </g>
  <g fill="${ACCENT}" opacity="0.8">
    <circle cx="500" cy="220" r="6"/>
    <circle cx="700" cy="220" r="6"/>
    <circle cx="300" cy="540" r="6"/>
    <circle cx="900" cy="540" r="6"/>
    <circle cx="540" cy="80" r="6"/>
  </g>
  <!-- lightning mark -->
  <path d="M600 120 L560 190 H590 L580 250 L630 175 H598 L610 120 Z" fill="${ACCENT}"/>
  <text x="600" y="330" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-size="80" font-weight="700" letter-spacing="-3" fill="#ffffff">AI Accelerator</text>
  <text x="600" y="400" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-size="36" font-weight="500" fill="#9db9ff">${line1}</text>
  <text x="600" y="448" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-size="36" font-weight="500" fill="#9db9ff"><tspan fill="#ffffff" font-weight="700">${em1}</tspan>${mid}<tspan fill="#ffffff" font-weight="700">${em2}</tspan>${end}</text>
  <text x="600" y="505" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-size="24" font-weight="500" fill="#8a8f9c">${kicker}</text>
  <text x="600" y="565" text-anchor="middle" font-family="Georgia, serif" font-style="italic" font-size="28" fill="#8a8f9c">noprob agency</text>
</svg>`
}

const variants = [
  {
    file: 'public/images/og-ai-accelerator-it.png',
    text: {
      line1: 'In 30 giorni portiamo l’AI dove il tuo eCommerce può',
      em1: 'risparmiare tempo',
      mid: ' e ',
      em2: 'vendere di più',
      end: '.',
      kicker: '30 giorni one-to-one per eCommerce',
    },
  },
  {
    file: 'public/images/og-ai-accelerator-en.png',
    text: {
      line1: 'In 30 days we put AI where your eCommerce can',
      em1: 'save time',
      mid: ' and ',
      em2: 'sell more',
      end: '.',
      kicker: '30 days one-to-one for eCommerce brands',
    },
  },
]

for (const { file, text } of variants) {
  const png = await sharp(Buffer.from(svg(text))).png().toBuffer()
  writeFileSync(file, png)
  console.log(`written ${file} (${png.length} bytes)`)
}
