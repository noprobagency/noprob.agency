#!/usr/bin/env node
// Search Console chart of the Supplement DTC Nazzi case study (IT + EN), from the
// exact daily data read through the Search Console API (2025-09-09 → 2026-10-11)
// in data/use-cases/nazzi-gsc-daily.json, drawn here as a 7-day moving average.
// Run with: node scripts/generate-nazzi-gsc-chart.mjs
// Output: public/images/use-case-nazzi/nazzi-search-console-{it,en}.png

import sharp from 'sharp'
import { readFileSync, writeFileSync } from 'node:fs'

const rows = JSON.parse(readFileSync('data/use-cases/nazzi-gsc-daily.json', 'utf8'))

const W = 1600
const H = 960
const PAD = { left: 110, right: 120, top: 330, bottom: 120 }
const plotW = W - PAD.left - PAD.right
const plotH = H - PAD.top - PAD.bottom
const C_MAX = 75
const I_MAX = 5000
const BLUE = '#4285f4'
const PURPLE = '#5e35b1'
const GREEN = '#1dcc5d'
const FONT = "Helvetica, Arial, sans-serif"

const day = (iso) => Date.parse(`${iso}T00:00:00Z`) / 86400000
const d0 = day(rows[0].d)
const d1 = day(rows[rows.length - 1].d)
const x = (iso) => PAD.left + ((day(iso) - d0) / (d1 - d0)) * plotW
const yC = (v) => PAD.top + plotH - (v / C_MAX) * plotH
const yI = (v) => PAD.top + plotH - (v / I_MAX) * plotH

function movingAvg(key) {
  return rows.map((r, i) => {
    const win = rows.slice(Math.max(0, i - 6), i + 1)
    return { d: r.d, v: win.reduce((s, w) => s + w[key], 0) / win.length }
  })
}

const path = (pts, y) => pts.map((p, i) => `${i ? 'L' : 'M'}${x(p.d).toFixed(1)},${y(p.v).toFixed(1)}`).join(' ')

const COPY = {
  it: {
    title: 'Integratori DTC Nazzi, traffico organico da Google',
    sub: 'Clic e impressioni giornaliere, media mobile 7 giorni. Fonte: Google Search Console, set 2025 → ott 2026.',
    kpis: [['Clic totali', '11,5K', BLUE], ['Impressioni totali', '604K', PURPLE], ['CTR medio', '1,9%', '#181818'], ['Posizione media', '8,7', '#181818']],
    band: 'Migrazione',
    golive: 'Online su Shopify, 19 lug',
    clicks: 'Clic',
    impressions: 'Impressioni',
    months: ['ago', 'set', 'ott', 'nov', 'dic', 'gen', 'feb', 'mar', 'apr', 'mag', 'giu', 'lug', 'ago', 'set', 'ott'],
    k: (n) => `${n / 1000}K`,
  },
  en: {
    title: 'Supplement DTC Nazzi, organic traffic from Google',
    sub: 'Daily clicks and impressions, 7-day moving average. Source: Google Search Console, Sep 2025 → Oct 2026.',
    kpis: [['Total clicks', '11.5K', BLUE], ['Total impressions', '604K', PURPLE], ['Average CTR', '1.9%', '#181818'], ['Average position', '8.7', '#181818']],
    band: 'Migration',
    golive: 'Live on Shopify, Jul 19',
    clicks: 'Clicks',
    impressions: 'Impressions',
    months: ['Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
    k: (n) => `${n / 1000}K`,
  },
}

function svg(locale) {
  const t = COPY[locale]
  const clicks = movingAvg('c')
  const impr = movingAvg('i')

  const grid = [0, 1, 2, 3, 4, 5]
    .map((i) => {
      const gy = PAD.top + plotH - (i / 5) * plotH
      return `<line x1="${PAD.left}" y1="${gy}" x2="${W - PAD.right}" y2="${gy}" stroke="#ececec" stroke-width="2"/>
      <text x="${PAD.left - 18}" y="${gy + 8}" text-anchor="end" font-family="${FONT}" font-size="22" fill="${BLUE}">${(C_MAX / 5) * i}</text>
      <text x="${W - PAD.right + 18}" y="${gy + 8}" font-family="${FONT}" font-size="22" fill="${PURPLE}">${i ? t.k((I_MAX / 5) * i) : 0}</text>`
    })
    .join('')

  // Month ticks: the 1st of each month from Sep 2025.
  const ticks = []
  for (let m = 0; m < 15; m++) {
    const date = new Date(Date.UTC(2025, 7 + m, 1)).toISOString().slice(0, 10)
    if (day(date) < d0 || day(date) > d1) continue
    const tx = x(date)
    const label = t.months[m] + (m === 5 ? ' 26' : '')
    ticks.push(`<text x="${tx}" y="${PAD.top + plotH + 42}" text-anchor="middle" font-family="${FONT}" font-size="21" fill="#7c7c7c">${label}</text>`)
  }

  const bandX0 = x('2026-05-01')
  const goLiveX = x('2026-07-19')

  const kpis = t.kpis
    .map(([label, value, color], i) => {
      const kx = PAD.left + i * 290
      return `<text x="${kx}" y="186" font-family="${FONT}" font-size="22" font-weight="600" fill="${color}">${label}</text>
      <text x="${kx}" y="232" font-family="${FONT}" font-size="44" font-weight="700" letter-spacing="-1.5" fill="#121212">${value}</text>`
    })
    .join('')

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${W}" height="${H}" fill="#ffffff"/>
  <text x="${PAD.left}" y="78" font-family="${FONT}" font-size="38" font-weight="700" letter-spacing="-1.2" fill="#121212">${t.title}</text>
  <text x="${PAD.left}" y="118" font-family="${FONT}" font-size="21" fill="#7c7c7c">${t.sub}</text>
  ${kpis}
  <rect x="${bandX0}" y="${PAD.top}" width="${goLiveX - bandX0}" height="${plotH}" fill="${GREEN}" fill-opacity="0.08"/>
  <text x="${(bandX0 + goLiveX) / 2}" y="${PAD.top + 30}" text-anchor="middle" font-family="${FONT}" font-size="20" font-weight="600" fill="#139a45">${t.band}</text>
  ${grid}
  <path d="${path(impr, yI)}" fill="none" stroke="${PURPLE}" stroke-width="4" stroke-linejoin="round"/>
  <path d="${path(clicks, yC)}" fill="none" stroke="${BLUE}" stroke-width="4" stroke-linejoin="round"/>
  <line x1="${goLiveX}" y1="${PAD.top - 6}" x2="${goLiveX}" y2="${PAD.top + plotH}" stroke="#121212" stroke-width="2.5" stroke-dasharray="8 7"/>
  <rect x="${goLiveX - 150}" y="${PAD.top - 50}" width="300" height="40" rx="20" fill="#121212"/>
  <text x="${goLiveX}" y="${PAD.top - 23}" text-anchor="middle" font-family="${FONT}" font-size="20" font-weight="600" fill="#ffffff">${t.golive}</text>
  ${ticks.join('')}
  <circle cx="${PAD.left + 8}" cy="${H - 34}" r="8" fill="${BLUE}"/>
  <text x="${PAD.left + 26}" y="${H - 26}" font-family="${FONT}" font-size="21" fill="#181818">${t.clicks}</text>
  <circle cx="${PAD.left + 128}" cy="${H - 34}" r="8" fill="${PURPLE}"/>
  <text x="${PAD.left + 146}" y="${H - 26}" font-family="${FONT}" font-size="21" fill="#181818">${t.impressions}</text>
</svg>`
}

for (const locale of ['it', 'en']) {
  const file = `public/images/use-case-nazzi/nazzi-search-console-${locale}.png`
  const png = await sharp(Buffer.from(svg(locale))).png().toBuffer()
  writeFileSync(file, png)
  console.log(`written ${file} (${png.length} bytes)`)
}
