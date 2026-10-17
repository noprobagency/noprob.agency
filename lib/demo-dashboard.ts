/**
 * Invented data for the Day 1 demo dashboard (/it/demo-dashboard, /demo-dashboard).
 *
 * Nothing here comes from a client: the monthly bases below are made up and
 * spread over the days with a seeded generator, so the dashboard can show the
 * same numbers by day, week, month and year. Month totals reproduce the bases
 * exactly (largest remainder), every ratio is derived from the totals of the
 * period shown, never averaged.
 */

export type Granularity = 'day' | 'week' | 'month' | 'year'
export type Locale = 'it' | 'en'

export type Totals = {
  ad: number
  fixed: number
  sales: number
  orders: number
  newC: number
  retC: number
}

export type DayRow = Totals & { date: string }

export type ViewColumn = {
  key: string
  label: string
  inProgress: boolean
  totals: Totals
  /** Sales of the same period one year earlier; null when there is no data (2024). */
  prevSales: number | null
}

export type View = {
  columns: ViewColumn[]
  total: Totals
  prevTotal: number | null
}

/** The demo is frozen on this day: October 2026 is "in progress". */
export const DEMO_TODAY = '2026-10-17'
export const MARGIN = 0.5
/** 180-day LTV multiplier on the first-order margin, used for the CPA break even. */
export const LTV_MULTIPLIER = 1.45

// Monthly bases 2026 (January → October 17), invented.
const M26 = {
  ad: [4035.18, 2372.42, 4026.38, 5044.61, 3629.73, 7072.35, 6783.91, 1812.25, 4196.1, 1970.66],
  fixed: [685, 1096, 1096, 1096, 1096, 1096, 1096, 1096, 1096, 601.03],
  sales: [8811.98, 10480.09, 11649.8, 14879.2, 11115.48, 14098.83, 17300.36, 11504.41, 15506.76, 6088.55],
  orders: [188, 211, 234, 314, 234, 311, 355, 200, 274, 105],
  newC: [95, 129, 138, 175, 141, 195, 227, 68, 119, 64],
  retC: [90, 78, 92, 137, 86, 111, 122, 132, 149, 41],
}

// 2025 sales (all twelve months), invented. The other 2025 metrics are derived below.
const SALES_2025 = [9711.52, 3027.29, 7911.07, 5442.6, 6537.37, 5483.01, 7893.8, 5523.43, 7169.76, 7708.31, 9420.65, 12380.4]

function mulberry32(seed: number) {
  let a = seed
  return () => {
    a |= 0
    a = (a + 0x6d2b79f5) | 0
    let t = Math.imul(a ^ (a >>> 15), 1 | a)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

/** Splits `total` (in integer units) over weights, summing exactly to it. */
function distribute(total: number, weights: number[]): number[] {
  const sum = weights.reduce((a, b) => a + b, 0)
  const raw = weights.map((w) => (total * w) / sum)
  const floors = raw.map(Math.floor)
  let rest = total - floors.reduce((a, b) => a + b, 0)
  const order = raw.map((v, i) => ({ i, frac: v - Math.floor(v) })).sort((a, b) => b.frac - a.frac)
  for (const { i } of order) {
    if (rest <= 0) break
    floors[i] += 1
    rest -= 1
  }
  return floors
}

const WEEKDAY_FACTOR = [0.85, 1.1, 1.05, 1, 1, 1.1, 0.9] // Sun … Sat

function monthDays(year: number, month: number, lastDay?: number): string[] {
  const n = lastDay ?? new Date(Date.UTC(year, month + 1, 0)).getUTCDate()
  return Array.from({ length: n }, (_, d) => new Date(Date.UTC(year, month, d + 1)).toISOString().slice(0, 10))
}

function buildMonth(year: number, month: number, base: Totals, days: string[]): DayRow[] {
  const rand = mulberry32(year * 100 + month)
  const rand2 = mulberry32(year * 100 + month + 5000)
  const w = days.map((d) => (0.7 + 0.6 * rand()) * WEEKDAY_FACTOR[new Date(`${d}T00:00:00Z`).getUTCDay()])
  const wAd = days.map(() => 0.6 + 0.8 * rand2())
  const sales = distribute(Math.round(base.sales * 100), w)
  const ad = distribute(Math.round(base.ad * 100), wAd)
  const fixed = distribute(Math.round(base.fixed * 100), days.map(() => 1))
  const orders = distribute(base.orders, w)
  const newC = distribute(base.newC, w)
  const retC = distribute(base.retC, w)
  return days.map((date, i) => ({
    date,
    ad: ad[i] / 100,
    fixed: fixed[i] / 100,
    sales: sales[i] / 100,
    orders: orders[i],
    newC: newC[i],
    retC: retC[i],
  }))
}

function build2026(): DayRow[] {
  const rows: DayRow[] = []
  for (let m = 0; m < 10; m++) {
    const days = monthDays(2026, m, m === 9 ? 17 : undefined)
    rows.push(
      ...buildMonth(2026, m, { ad: M26.ad[m], fixed: M26.fixed[m], sales: M26.sales[m], orders: M26.orders[m], newC: M26.newC[m], retC: M26.retC[m] }, days)
    )
  }
  return rows
}

function build2025(): DayRow[] {
  const rows: DayRow[] = []
  for (let m = 0; m < 12; m++) {
    const rand = mulberry32(2025 * 100 + m + 900)
    const sales = SALES_2025[m]
    const orders = Math.round(sales / (46 + 9 * rand()))
    const newC = Math.round(orders * (0.5 + 0.1 * rand()))
    rows.push(
      ...buildMonth(
        2025,
        m,
        { ad: Math.round((sales / (2.2 + 1.1 * rand())) * 100) / 100, fixed: 1000, sales, orders, newC, retC: orders - newC },
        monthDays(2025, m)
      )
    )
  }
  return rows
}

const DAYS: DayRow[] = [...build2025(), ...build2026()]
const BY_DATE = new Map(DAYS.map((r) => [r.date, r]))

const EMPTY: Totals = { ad: 0, fixed: 0, sales: 0, orders: 0, newC: 0, retC: 0 }

function sumRange(from: string, to: string): Totals {
  const t = { ...EMPTY }
  for (const r of DAYS) {
    if (r.date >= from && r.date <= to) {
      t.ad += r.ad
      t.fixed += r.fixed
      t.sales += r.sales
      t.orders += r.orders
      t.newC += r.newC
      t.retC += r.retC
    }
  }
  return t
}

const shiftYear = (iso: string, delta: number) => `${Number(iso.slice(0, 4)) + delta}${iso.slice(4)}`
const addDays = (iso: string, n: number) => new Date(Date.parse(`${iso}T00:00:00Z`) + n * 86400000).toISOString().slice(0, 10)

function prevSalesOf(from: string, to: string): number | null {
  const pf = shiftYear(from, -1)
  const pt = shiftYear(to, -1)
  if (!BY_DATE.has(pf)) return null
  return sumRange(pf, pt).sales
}

function isoWeek(iso: string): number {
  const d = new Date(`${iso}T00:00:00Z`)
  const day = d.getUTCDay() || 7
  d.setUTCDate(d.getUTCDate() + 4 - day)
  const y0 = Date.UTC(d.getUTCFullYear(), 0, 1)
  return Math.ceil(((d.getTime() - y0) / 86400000 + 1) / 7)
}

function mondayOf(iso: string): string {
  const day = new Date(`${iso}T00:00:00Z`).getUTCDay() || 7
  return addDays(iso, 1 - day)
}

export function buildView(g: Granularity, locale: Locale): View {
  const loc = locale === 'it' ? 'it-IT' : 'en-US'
  const cols: { key: string; label: string; from: string; to: string; inProgress: boolean }[] = []

  if (g === 'day') {
    const fmt = new Intl.DateTimeFormat(loc, { weekday: 'short', day: 'numeric', timeZone: 'UTC' })
    for (let i = 13; i >= 0; i--) {
      const d = addDays(DEMO_TODAY, -i)
      cols.push({ key: d, label: fmt.format(new Date(`${d}T00:00:00Z`)), from: d, to: d, inProgress: false })
    }
  } else if (g === 'week') {
    const start = mondayOf(DEMO_TODAY)
    for (let i = 11; i >= 0; i--) {
      const from = addDays(start, -7 * i)
      const to = i === 0 ? DEMO_TODAY : addDays(from, 6)
      cols.push({ key: from, label: `${locale === 'it' ? 'S' : 'W'}${isoWeek(from)}`, from, to, inProgress: i === 0 })
    }
  } else if (g === 'month') {
    const fmt = new Intl.DateTimeFormat(loc, { month: 'short', timeZone: 'UTC' })
    for (let m = 0; m < 10; m++) {
      const from = `2026-${String(m + 1).padStart(2, '0')}-01`
      const to = m === 9 ? DEMO_TODAY : monthDays(2026, m).slice(-1)[0]
      const name = fmt.format(new Date(`${from}T00:00:00Z`)).replace('.', '')
      cols.push({ key: from, label: `${name.charAt(0).toUpperCase()}${name.slice(1)} 26`, from, to, inProgress: m === 9 })
    }
  } else {
    cols.push({ key: '2025', label: '2025', from: '2025-01-01', to: '2025-12-31', inProgress: false })
    cols.push({ key: '2026', label: '2026', from: '2026-01-01', to: DEMO_TODAY, inProgress: true })
  }

  const columns: ViewColumn[] = cols.map((c) => ({
    key: c.key,
    label: c.label,
    inProgress: c.inProgress,
    totals: sumRange(c.from, c.to),
    prevSales: prevSalesOf(c.from, c.to),
  }))
  const total = columns.reduce(
    (a, c) => ({
      ad: a.ad + c.totals.ad,
      fixed: a.fixed + c.totals.fixed,
      sales: a.sales + c.totals.sales,
      orders: a.orders + c.totals.orders,
      newC: a.newC + c.totals.newC,
      retC: a.retC + c.totals.retC,
    }),
    { ...EMPTY }
  )
  const prevs = columns.map((c) => c.prevSales)
  return { columns, total, prevTotal: prevs.every((p) => p === null) ? null : prevs.reduce<number>((a, p) => a + (p ?? 0), 0) }
}

export type Derived = {
  roas: number | null
  mer: number | null
  merEur: number
  aov: number | null
  cac: number | null
  ncac: number | null
  retention: number | null
  breakEven: number | null
}

const div = (a: number, b: number) => (b > 0 ? a / b : null)

export function derive(t: Totals): Derived {
  const customers = t.newC + t.retC
  const aov = div(t.sales, t.orders)
  return {
    roas: div(t.sales, t.ad),
    mer: div(t.sales * MARGIN, t.ad + t.fixed),
    merEur: t.sales * MARGIN - t.ad - t.fixed,
    aov,
    cac: div(t.ad, customers),
    ncac: div(t.ad, t.newC),
    retention: div(t.retC, customers),
    breakEven: aov === null ? null : aov * MARGIN * LTV_MULTIPLIER,
  }
}
