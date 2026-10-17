#!/usr/bin/env node
// Sales and orders chart of the Cumini case study (IT + EN): the same series as the
// results chart of the Shopify Launch Sprint landing (data/zero-loss/seo-charts.ts):
// net sales and orders from the Shopify backend of cumini.com, 3-month moving average,
// index 100 = monthly average of the 12 months before Shopify. Index only, no revenue.
// Run with: node scripts/generate-cumini-sales-chart.mjs
// Output: public/images/use-case-cumini/cumini-sales-{it,en}.png (1600x960)

import sharp from 'sharp'
import { readFileSync, writeFileSync } from 'node:fs'

const src = readFileSync('data/zero-loss/seo-charts.ts', 'utf8')
const rows = [...src.matchAll(/\["(\d{4}-\d{2})", ([\d.]+), ([\d.]+)\]/g)].map((m) => ({ m: m[1], s: +m[2], o: +m[3] }))
if (rows.length < 30) throw new Error('cuminiMonthly not parsed')

const GREEN = '#96bf47'
const GREEN_TEXT = '#466f17'
const INK = '#121212'
const FONT = 'Helvetica, Arial, sans-serif'
const W = 1600
const H = 960
const PAD = { left: 110, right: 70, top: 330, bottom: 120 }
const plotW = W - PAD.left - PAD.right
const plotH = H - PAD.top - PAD.bottom
const MAX = 350

const day = (iso) => Date.parse(`${iso}T00:00:00Z`) / 86400000
const d0 = day(`${rows[0].m}-15`)
const d1 = day(`${rows[rows.length - 1].m}-15`)
const x = (iso) => PAD.left + ((day(iso) - d0) / (d1 - d0)) * plotW
const y = (v) => PAD.top + plotH - (v / MAX) * plotH
const path = (key) => rows.map((r, i) => `${i ? 'L' : 'M'}${x(`${r.m}-15`).toFixed(1)},${y(r[key]).toFixed(1)}`).join(' ')

const COPY = {
  it: {
    title: 'Cumini, crescita delle vendite eCommerce dal 2023',
    sub: 'Vendite nette e ordini mensili, media mobile 3 mesi, in indice: 100 = media dei 12 mesi prima di Shopify. Fonte: backend Shopify.',
    kpis: [['Vendite, 12 mesi dopo', '+67,7%', INK], ['Ordini, 12 mesi dopo', '+49,4%', GREEN_TEXT], ['Scontrino medio', '+12,2%', INK], ['Ultimi 12 mesi vs prima', '2,08x', INK]],
    band: 'Migrazione',
    golive: 'Online su Shopify, 19 mag 2025',
    sales: 'Vendite',
    orders: 'Ordini',
    months: ['gen', 'feb', 'mar', 'apr', 'mag', 'giu', 'lug', 'ago', 'set', 'ott', 'nov', 'dic'],
  },
  en: {
    title: 'Cumini, eCommerce sales growth since 2023',
    sub: 'Net sales and monthly orders, 3-month moving average, indexed: 100 = average of the 12 months before Shopify. Source: Shopify backend.',
    kpis: [['Sales, 12 months after', '+67.7%', INK], ['Orders, 12 months after', '+49.4%', GREEN_TEXT], ['Average order value', '+12.2%', INK], ['Last 12 months vs before', '2.08x', INK]],
    band: 'Migration',
    golive: 'Live on Shopify, May 19, 2025',
    sales: 'Sales',
    orders: 'Orders',
    months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  },
}

function svg(locale) {
  const t = COPY[locale]
  const grid = [0, 1, 2, 3, 4, 5, 6, 7]
    .map((i) => {
      const gy = PAD.top + plotH - (i / 7) * plotH
      return `<line x1="${PAD.left}" y1="${gy}" x2="${W - PAD.right}" y2="${gy}" stroke="#ececec" stroke-width="2"/>
      <text x="${PAD.left - 18}" y="${gy + 8}" text-anchor="end" font-family="${FONT}" font-size="22" fill="#7c7c7c">${(MAX / 7) * i}</text>`
    })
    .join('')

  // Year on January, month name on July, like the landing chart.
  const ticks = []
  for (let yr = 2023; yr <= 2026; yr++) {
    for (const mo of [1, 7]) {
      const iso = `${yr}-${String(mo).padStart(2, '0')}-01`
      if (day(iso) < d0 || day(iso) > d1) continue
      ticks.push(
        `<text x="${x(iso)}" y="${PAD.top + plotH + 42}" text-anchor="middle" font-family="${FONT}" font-size="21" font-weight="${mo === 1 ? 700 : 400}" fill="${mo === 1 ? INK : '#7c7c7c'}">${mo === 1 ? yr : t.months[mo - 1]}</text>`
      )
    }
  }

  const bandX0 = x('2025-03-01')
  const goX = x('2025-05-19')
  const pillW = 400
  const kpis = t.kpis
    .map(([label, value, color], i) => {
      const kx = PAD.left + i * 360
      return `<text x="${kx}" y="186" font-family="${FONT}" font-size="22" font-weight="600" fill="${color}">${label}</text>
      <text x="${kx}" y="232" font-family="${FONT}" font-size="44" font-weight="700" letter-spacing="-1.5" fill="${INK}">${value}</text>`
    })
    .join('')

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${W}" height="${H}" fill="#ffffff"/>
  <text x="${PAD.left}" y="78" font-family="${FONT}" font-size="38" font-weight="700" letter-spacing="-1.2" fill="${INK}">${t.title}</text>
  <text x="${PAD.left}" y="118" font-family="${FONT}" font-size="21" fill="#7c7c7c">${t.sub}</text>
  ${kpis}
  <rect x="${bandX0}" y="${PAD.top}" width="${goX - bandX0}" height="${plotH}" fill="#1dcc5d" fill-opacity="0.08"/>
  <text x="${bandX0 + 8}" y="${PAD.top + 28}" font-family="${FONT}" font-size="17" font-weight="600" fill="#139a45">${t.band}</text>
  ${grid}
  <path d="${path('o')}" fill="none" stroke="${GREEN}" stroke-width="4" stroke-linejoin="round"/>
  <path d="${path('s')}" fill="none" stroke="${INK}" stroke-width="4" stroke-linejoin="round"/>
  <line x1="${goX}" y1="${PAD.top - 6}" x2="${goX}" y2="${PAD.top + plotH}" stroke="${INK}" stroke-width="2.5" stroke-dasharray="8 7"/>
  <rect x="${goX - pillW / 2}" y="${PAD.top - 50}" width="${pillW}" height="40" rx="20" fill="${INK}"/>
  <text x="${goX}" y="${PAD.top - 23}" text-anchor="middle" font-family="${FONT}" font-size="20" font-weight="600" fill="#ffffff">${t.golive}</text>
  ${ticks.join('')}
  <circle cx="${PAD.left + 8}" cy="${H - 34}" r="8" fill="${INK}"/>
  <text x="${PAD.left + 26}" y="${H - 26}" font-family="${FONT}" font-size="21" fill="#181818">${t.sales}</text>
  <circle cx="${PAD.left + 128}" cy="${H - 34}" r="8" fill="${GREEN}"/>
  <text x="${PAD.left + 146}" y="${H - 26}" font-family="${FONT}" font-size="21" fill="#181818">${t.orders}</text>
</svg>`
}

for (const locale of ['it', 'en']) {
  const file = `public/images/use-case-cumini/cumini-sales-${locale}.png`
  const png = await sharp(Buffer.from(svg(locale))).png().toBuffer()
  writeFileSync(file, png)
  console.log(`written ${file} (${png.length} bytes)`)
}
