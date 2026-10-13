#!/usr/bin/env node
// Search Console chart of the DDglobal Store case study (IT + EN), from the GSC
// performance export of ddglobalstore.com (daily, Jun 12 2025 → Oct 11 2026) in
// data/use-cases/ddglobal-gsc-daily.json, drawn as a 7-day moving average.
// Run with: node scripts/generate-ddglobal-gsc-chart.mjs
// Output: public/images/use-case-ddglobal/ddglobal-search-console-{it,en}.png

import sharp from 'sharp'
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'

const rows = JSON.parse(readFileSync('data/use-cases/ddglobal-gsc-daily.json', 'utf8'))

const W = 1600
const H = 960
const PAD = { left: 110, right: 120, top: 330, bottom: 120 }
const plotW = W - PAD.left - PAD.right
const plotH = H - PAD.top - PAD.bottom
const C_MAX = 25
const I_MAX = 1500
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
    title: 'DDglobal Store, traffico organico da Google',
    sub: 'Clic e impressioni giornaliere, media mobile 7 giorni. Fonte: Google Search Console, proprietà ddglobalstore.com, giu 2025 → ott 2026.',
    kpis: [['Clic, ultimi 28 giorni', '+17%', BLUE], ['Clic anno su anno', '+55%', BLUE], ['Impressioni anno su anno', '2,7x', PURPLE], ['Posizione media', '9,4 → 7,9', '#181818']],
    band: '',
    golive: 'Online il nuovo sito, 29 ago',
    clicks: 'Clic',
    impressions: 'Impressioni',
    months: ['giu', 'lug', 'ago', 'set', 'ott', 'nov', 'dic', 'gen', 'feb', 'mar', 'apr', 'mag', 'giu', 'lug', 'ago', 'set', 'ott'],
    k: (n) => (n >= 1000 ? `${(n / 1000).toLocaleString('it-IT')}K` : String(n)),
  },
  en: {
    title: 'DDglobal Store, organic traffic from Google',
    sub: 'Daily clicks and impressions, 7-day moving average. Source: Google Search Console, ddglobalstore.com property, Jun 2025 → Oct 2026.',
    kpis: [['Clicks, last 28 days', '+17%', BLUE], ['Clicks year over year', '+55%', BLUE], ['Impressions year over year', '2.7x', PURPLE], ['Average position', '9.4 → 7.9', '#181818']],
    band: '',
    golive: 'New site live, Aug 29',
    clicks: 'Clicks',
    impressions: 'Impressions',
    months: ['Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
    k: (n) => (n >= 1000 ? `${n / 1000}K` : String(n)),
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
  for (let m = 0; m < 17; m++) {
    const date = new Date(Date.UTC(2025, 5 + m, 1)).toISOString().slice(0, 10)
    if (day(date) < d0 || day(date) > d1) continue
    const tx = x(date)
    const label = t.months[m] + (m === 7 ? ' 26' : '')
    ticks.push(`<text x="${tx}" y="${PAD.top + plotH + 42}" text-anchor="middle" font-family="${FONT}" font-size="21" fill="#7c7c7c">${label}</text>`)
  }

  const goLiveX = x('2026-08-29')
  const bandX0 = goLiveX

  const kpis = t.kpis
    .map(([label, value, color], i) => {
      const kx = PAD.left + i * 330
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

mkdirSync('public/images/use-case-ddglobal', { recursive: true })
for (const locale of ['it', 'en']) {
  const file = `public/images/use-case-ddglobal/ddglobal-search-console-${locale}.png`
  const png = await sharp(Buffer.from(svg(locale))).png().toBuffer()
  writeFileSync(file, png)
  console.log(`written ${file} (${png.length} bytes)`)
}
