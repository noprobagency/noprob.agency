#!/usr/bin/env node
// Standard blog cover: 1200x630, background colour plus a dot pattern, no text,
// no logo. Fully deterministic from the slug (sha256 -> seeded PRNG), so the
// same slug always gives the same image and different slugs differ in colour
// and pattern.
//
// Usage:
//   node scripts/blog-cover.mjs <slug> [<slug> ...]   write the cover(s)
//   node scripts/blog-cover.mjs --all                 regenerate every article in data/articles/posts
//
// Output: public/images/blog/<name>.svg and <name>.png where <name> is the
// file name of the article's `image` field when the slug belongs to an
// existing article (so no reference breaks), otherwise `<slug>-cover`.
// The script also prints a suggested imageAlt / imageAltEn for the cover.

import { createHash } from 'node:crypto'
import { readdirSync, readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { join, basename } from 'node:path'
import sharp from 'sharp'

const W = 1200
const H = 630
const OUT_DIR = 'public/images/blog'
const POSTS_DIR = 'data/articles/posts'

// bg: background, dot: dot colour, op: dot opacity. Light theme first (pastels),
// then a few deep tones. Greens come from lib/design-tokens.ts.
const PALETTES = [
  { en: 'mint', it: 'menta', bg: '#d4efe0', dot: '#1f7a53', op: 0.32 },
  { en: 'sage green', it: 'verde salvia', bg: '#cee8cc', dot: '#1f7a53', op: 0.3 },
  { en: 'lilac', it: 'lilla', bg: '#dbcce8', dot: '#5b3f7a', op: 0.3 },
  { en: 'sand', it: 'sabbia', bg: '#efe6d6', dot: '#8a6a3b', op: 0.3 },
  { en: 'sky blue', it: 'azzurro', bg: '#d6e6f2', dot: '#2f5d82', op: 0.3 },
  { en: 'blush pink', it: 'rosa cipria', bg: '#f4dcd6', dot: '#a04a3b', op: 0.28 },
  { en: 'butter yellow', it: 'giallo burro', bg: '#f3ecc4', dot: '#7f6f12', op: 0.3 },
  { en: 'light grey', it: 'grigio chiaro', bg: '#e6e6e6', dot: '#181818', op: 0.2 },
  { en: 'signature green', it: 'verde del sito', bg: '#1dcc5d', dot: '#06371b', op: 0.34 },
  { en: 'black', it: 'nero', bg: '#111111', dot: '#1dcc5d', op: 0.7 },
  { en: 'forest green', it: 'verde bosco', bg: '#0f3d2a', dot: '#8fe3b0', op: 0.5 },
  { en: 'navy', it: 'blu notte', bg: '#14213d', dot: '#9db4e0', op: 0.5 },
  { en: 'aubergine', it: 'melanzana', bg: '#2d1b3d', dot: '#c9b3e6', op: 0.5 },
]

const smooth = (t) => t * t * (3 - 2 * t)
const clamp01 = (t) => Math.max(0, Math.min(1, t))

function seedFrom(slug) {
  const h = createHash('sha256').update(slug).digest()
  return h.readUInt32BE(0)
}

function mulberry32(a) {
  return () => {
    a |= 0
    a = (a + 0x6d2b79f5) | 0
    let t = Math.imul(a ^ (a >>> 15), 1 | a)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

const range = (rng, a, b) => a + rng() * (b - a)
const pick = (rng, arr) => arr[Math.floor(rng() * arr.length)]

function hexToRgb(hex) {
  const n = parseInt(hex.slice(1), 16)
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255]
}
function mix(a, b, t) {
  const A = hexToRgb(a)
  const B = hexToRgb(b)
  const c = A.map((v, i) => Math.round(v + (B[i] - v) * t))
  return '#' + c.map((v) => v.toString(16).padStart(2, '0')).join('')
}

// Each pattern returns [{x, y, r}] and a short name (EN, IT) for the alt text.
const PATTERNS = {
  grid(rng) {
    const s = range(rng, 34, 52)
    const r = s * range(rng, 0.09, 0.14)
    const dots = []
    for (let y = s / 2; y < H + s; y += s) for (let x = s / 2; x < W + s; x += s) dots.push({ x, y, r })
    return { dots, en: 'a regular dot grid', it: 'una griglia regolare di puntini' }
  },
  offset(rng) {
    const s = range(rng, 34, 50)
    const r = s * range(rng, 0.1, 0.15)
    const dots = []
    let row = 0
    for (let y = s / 2; y < H + s; y += s * 0.866, row++) {
      for (let x = s / 2 + (row % 2 ? s / 2 : 0); x < W + s; x += s) dots.push({ x, y, r })
    }
    return { dots, en: 'an offset dot grid', it: 'una griglia sfalsata di puntini' }
  },
  halftone(rng) {
    const s = range(rng, 26, 34)
    const ang = pick(rng, [0, Math.PI / 2, Math.PI / 4, -Math.PI / 4, Math.PI, (3 * Math.PI) / 4])
    const dx = Math.cos(ang)
    const dy = Math.sin(ang)
    const proj = (x, y) => x * dx + y * dy
    const corners = [proj(0, 0), proj(W, 0), proj(0, H), proj(W, H)]
    const lo = Math.min(...corners)
    const hi = Math.max(...corners)
    const dots = []
    for (let y = s / 2; y < H + s; y += s) {
      for (let x = s / 2; x < W + s; x += s) {
        const t = (proj(x, y) - lo) / (hi - lo)
        const r = s * (0.03 + 0.43 * Math.pow(t, 1.15))
        if (r > 0.7) dots.push({ x, y, r })
      }
    }
    return { dots, en: 'a halftone gradient of growing dots', it: 'una sfumatura halftone di puntini crescenti' }
  },
  radial(rng) {
    const s = range(rng, 26, 34)
    const cx = W * range(rng, 0.25, 0.75)
    const cy = H * range(rng, 0.3, 0.7)
    const maxD = Math.hypot(Math.max(cx, W - cx), Math.max(cy, H - cy))
    const inward = rng() < 0.5
    const dots = []
    for (let y = s / 2; y < H + s; y += s) {
      for (let x = s / 2; x < W + s; x += s) {
        const d = clamp01(Math.hypot(x - cx, y - cy) / maxD)
        const t = inward ? 1 - d : d
        const r = s * (0.04 + 0.42 * Math.pow(t, 1.3))
        if (r > 0.7) dots.push({ x, y, r })
      }
    }
    return {
      dots,
      en: inward ? 'a radial fade of dots growing toward the centre' : 'a radial fade of dots growing toward the edges',
      it: inward ? 'una dissolvenza radiale di puntini più grandi al centro' : 'una dissolvenza radiale di puntini più grandi ai bordi',
    }
  },
  bands(rng) {
    const s = range(rng, 26, 34)
    const ang = pick(rng, [Math.PI / 4, -Math.PI / 4, Math.PI / 6, -Math.PI / 6])
    const period = range(rng, 150, 230)
    const phase0 = rng()
    const dx = Math.cos(ang)
    const dy = Math.sin(ang)
    const dots = []
    for (let y = s / 2; y < H + s; y += s) {
      for (let x = s / 2; x < W + s; x += s) {
        const p = (x * dx + y * dy) / period + phase0
        const w = clamp01(0.5 + 0.9 * Math.sin(p * 2 * Math.PI))
        const r = s * (0.03 + 0.36 * smooth(w))
        if (r > 0.9) dots.push({ x, y, r })
      }
    }
    return { dots, en: 'diagonal bands of dots', it: 'fasce diagonali di puntini' }
  },
  wave(rng) {
    const s = range(rng, 28, 36)
    const f1 = range(rng, 0.004, 0.009)
    const f2 = range(rng, 0.004, 0.009) * (rng() < 0.5 ? -1 : 1)
    const ph = range(rng, 0, Math.PI * 2)
    const dots = []
    for (let y = s / 2; y < H + s; y += s) {
      for (let x = s / 2; x < W + s; x += s) {
        const w = 0.5 + 0.5 * Math.sin(x * f1 * 2 * Math.PI + y * f2 * 2 * Math.PI + ph)
        const r = s * (0.05 + 0.34 * smooth(w))
        if (r > 0.9) dots.push({ x, y, r })
      }
    }
    return { dots, en: 'a wave of dots changing size', it: 'un’onda di puntini di dimensione variabile' }
  },
}
const PATTERN_KEYS = Object.keys(PATTERNS)

function buildCover(slug) {
  const rng = mulberry32(seedFrom(slug))
  const palette = PALETTES[Math.floor(rng() * PALETTES.length)]
  const patternKey = PATTERN_KEYS[Math.floor(rng() * PATTERN_KEYS.length)]
  const graded = rng() < 0.6
  const gAngle = range(rng, 0, Math.PI * 2)
  const pattern = PATTERNS[patternKey](rng)

  const g = {
    x1: (0.5 - Math.cos(gAngle) * 0.5).toFixed(3),
    y1: (0.5 - Math.sin(gAngle) * 0.5).toFixed(3),
    x2: (0.5 + Math.cos(gAngle) * 0.5).toFixed(3),
    y2: (0.5 + Math.sin(gAngle) * 0.5).toFixed(3),
  }
  const bg2 = mix(palette.bg, palette.dot, 0.13)
  const defs = graded
    ? `<defs><linearGradient id="g" x1="${g.x1}" y1="${g.y1}" x2="${g.x2}" y2="${g.y2}"><stop offset="0" stop-color="${palette.bg}"/><stop offset="1" stop-color="${bg2}"/></linearGradient></defs>`
    : ''
  const fill = graded ? 'url(#g)' : palette.bg
  const circles = pattern.dots
    .map((d) => `<circle cx="${d.x.toFixed(1)}" cy="${d.y.toFixed(1)}" r="${d.r.toFixed(2)}"/>`)
    .join('')
  const svg =
    `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">` +
    defs +
    `<rect width="${W}" height="${H}" fill="${fill}"/>` +
    `<g fill="${palette.dot}" fill-opacity="${palette.op}">${circles}</g></svg>\n`

  const grade = graded ? 'softly graded ' : ''
  const gradeIt = graded ? ' sfumato' : ''
  return {
    svg,
    descriptor: {
      palette: palette.en,
      pattern: patternKey,
      graded,
      altEn: `abstract cover, ${grade}${palette.en} background with ${pattern.en}`,
      altIt: `copertina astratta, sfondo ${palette.it}${gradeIt}, con ${pattern.it}`,
    },
  }
}

// slug -> { stem } from the article files (EN slug and slugIt both resolve).
function readPosts() {
  const map = new Map()
  const slugs = []
  for (const f of readdirSync(POSTS_DIR).filter((n) => n.endsWith('.ts'))) {
    const src = readFileSync(join(POSTS_DIR, f), 'utf8')
    const slug = src.match(/^ {2}slug: '([^']+)'/m)?.[1]
    const slugIt = src.match(/^ {2}slugIt: '([^']+)'/m)?.[1]
    const image = src.match(/^ {2}image: '([^']+)'/m)?.[1]
    if (!slug) continue
    const stem = image ? basename(image).replace(/\.(png|svg|jpe?g|webp)$/i, '') : `${slug}-cover`
    slugs.push(slug)
    map.set(slug, { stem })
    if (slugIt) map.set(slugIt, { stem })
  }
  return { map, slugs }
}

async function writeCover(slug, posts) {
  const stem = posts.get(slug)?.stem ?? `${slug}-cover`
  const { svg, descriptor } = buildCover(slug)
  mkdirSync(OUT_DIR, { recursive: true })
  writeFileSync(join(OUT_DIR, `${stem}.svg`), svg)
  await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toFile(join(OUT_DIR, `${stem}.png`))
  console.log(`${slug} -> ${OUT_DIR}/${stem}.{svg,png}  [${descriptor.palette} / ${descriptor.pattern}${descriptor.graded ? ' / graded' : ''}]`)
  console.log(`  imageAltEn: ${descriptor.altEn}`)
  console.log(`  imageAlt:   ${descriptor.altIt}`)
}

const args = process.argv.slice(2)
if (args.length === 0) {
  console.error('Usage: node scripts/blog-cover.mjs <slug> [<slug> ...] | --all')
  process.exit(1)
}
const posts = readPosts()
const named = args.filter((a) => !a.startsWith('--'))
const targets = [...new Set([...(args.includes('--all') ? posts.slugs : []), ...named])]
for (const slug of targets) await writeCover(slug, posts.map)
