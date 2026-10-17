#!/usr/bin/env node
// GA4 chart of the DDglobal Store case study (IT + EN): monthly sessions from the GA4
// "Acquisizione traffico" report of ddglobalstore.com, January → September 2026, as an
// index (no absolute values, no axis numbers). New site live on August 29, 2026.
// Run with: node scripts/generate-ddglobal-ga4-chart.mjs
// Output: public/images/use-case-ddglobal/ddglobal-ga4-{it,en}.png

import sharp from 'sharp'
import { mkdirSync, writeFileSync } from 'node:fs'

// Monthly sessions, index 100 = January → July 2026 average.
const SESSIONS = [99, 103, 98, 108, 103, 93, 95, 140, 409]

const W = 1600
const H = 900
const PAD = { left: 110, right: 110, top: 300, bottom: 120 }
const plotW = W - PAD.left - PAD.right
const plotH = H - PAD.top - PAD.bottom
const MAX = 440
const FONT = 'Helvetica, Arial, sans-serif'
const GREEN = '#1dcc5d'
const INK = '#121212'

const x = (i) => PAD.left + (i / (SESSIONS.length - 1)) * plotW
const y = (v) => PAD.top + plotH - (v / MAX) * plotH
const line = SESSIONS.map((v, i) => `${i ? 'L' : 'M'}${x(i).toFixed(1)},${y(v).toFixed(1)}`).join(' ')
const area = `${line} L${x(SESSIONS.length - 1)},${y(0)} L${x(0)},${y(0)} Z`

const COPY = {
  it: {
    title: 'DDglobal Store, sessioni sul sito prima e dopo la migrazione AI',
    sub: 'Sessioni mensili da gennaio a settembre 2026. Fonte: Google Analytics 4.',
    kpis: [['Sessioni nel primo mese', '4x'], ['Posizione su Google', '+16%']],
    golive: 'Online il nuovo sito, 29 ago',
    months: ['gen', 'feb', 'mar', 'apr', 'mag', 'giu', 'lug', 'ago', 'set'],
  },
  en: {
    title: 'DDglobal Store, site sessions before and after the AI migration',
    sub: 'Monthly sessions from January to September 2026. Source: Google Analytics 4.',
    kpis: [['Sessions in the first month', '4x'], ['Google position', '+16%']],
    golive: 'New site live, Aug 29',
    months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
  },
}

function svg(locale) {
  const t = COPY[locale]
  const goX = x(7 + 28 / 31)
  const kpis = t.kpis
    .map(([label, value], i) => `<text x="${PAD.left + i * 470}" y="180" font-family="${FONT}" font-size="23" font-weight="600" fill="${i ? INK : '#139a45'}">${label}</text>
      <text x="${PAD.left + i * 470}" y="236" font-family="${FONT}" font-size="54" font-weight="700" letter-spacing="-2" fill="${INK}">${value}</text>`)
    .join('')
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="fill" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="${GREEN}" stop-opacity="0.28"/>
      <stop offset="1" stop-color="${GREEN}" stop-opacity="0.02"/>
    </linearGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="#ffffff"/>
  <text x="${PAD.left}" y="78" font-family="${FONT}" font-size="38" font-weight="700" letter-spacing="-1.2" fill="${INK}">${t.title}</text>
  <text x="${PAD.left}" y="118" font-family="${FONT}" font-size="21" fill="#7c7c7c">${t.sub}</text>
  ${kpis}
  <line x1="${PAD.left}" y1="${y(0)}" x2="${W - PAD.right}" y2="${y(0)}" stroke="#e4e4e4" stroke-width="2"/>
  <path d="${area}" fill="url(#fill)"/>
  <path d="${line}" fill="none" stroke="${GREEN}" stroke-width="5" stroke-linejoin="round" stroke-linecap="round"/>
  ${SESSIONS.map((v, i) => `<circle cx="${x(i)}" cy="${y(v)}" r="${i === SESSIONS.length - 1 ? 10 : 6}" fill="${GREEN}"/>`).join('')}
  <line x1="${goX}" y1="${PAD.top - 6}" x2="${goX}" y2="${y(0)}" stroke="${INK}" stroke-width="2.5" stroke-dasharray="8 7"/>
  <rect x="${goX - 340}" y="${PAD.top - 52}" width="320" height="42" rx="21" fill="${INK}"/>
  <text x="${goX - 180}" y="${PAD.top - 24}" text-anchor="middle" font-family="${FONT}" font-size="20" font-weight="600" fill="#ffffff">${t.golive}</text>
  ${t.months.map((m, i) => `<text x="${x(i)}" y="${y(0) + 44}" text-anchor="middle" font-family="${FONT}" font-size="22" fill="#7c7c7c">${m}</text>`).join('')}
</svg>`
}

mkdirSync('public/images/use-case-ddglobal', { recursive: true })
for (const locale of ['it', 'en']) {
  const file = `public/images/use-case-ddglobal/ddglobal-ga4-${locale}.png`
  writeFileSync(file, await sharp(Buffer.from(svg(locale))).png().toBuffer())
  console.log(`written ${file}`)
}
