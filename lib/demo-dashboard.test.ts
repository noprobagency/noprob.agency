import { describe, expect, it } from 'vitest'

import { buildView, derive } from './demo-dashboard'

const near = (a: number, b: number) => expect(Math.abs(a - b)).toBeLessThan(0.011)

describe('demo dashboard data', () => {
  it('month view reproduces the monthly bases exactly', () => {
    const v = buildView('month', 'it')
    expect(v.columns).toHaveLength(10)
    near(v.columns[0].totals.sales, 8811.98)
    near(v.columns[2].totals.ad, 4026.38)
    expect(v.columns[3].totals.orders).toBe(314)
    expect(v.columns[9].totals.orders).toBe(105)
    near(v.columns[9].totals.sales, 6088.55)
  })

  it('year, month and week views agree on the 2026 total', () => {
    const year = buildView('year', 'en')
    const month = buildView('month', 'en')
    near(year.columns[1].totals.sales, month.total.sales)
    expect(year.columns[1].totals.orders).toBe(month.total.orders)
    expect(month.total.sales).toBeGreaterThan(100000)
  })

  it('day view has 14 days, week view 12 weeks with the current one in progress', () => {
    expect(buildView('day', 'it').columns).toHaveLength(14)
    const w = buildView('week', 'it')
    expect(w.columns).toHaveLength(12)
    expect(w.columns[11].inProgress).toBe(true)
    expect(w.columns[0].inProgress).toBe(false)
  })

  it('week totals add up to the sum of their days', () => {
    const w = buildView('week', 'it')
    const d = buildView('day', 'it')
    const lastWeekDays = d.columns.slice(-6).reduce((a, c) => a + c.totals.sales, 0)
    near(w.columns[11].totals.sales, lastWeekDays) // Mon 12 → Sat 17 Oct
  })

  it('has no prior-year data for 2025 only', () => {
    const y = buildView('year', 'it')
    expect(y.columns[0].prevSales).toBeNull()
    expect(y.columns[1].prevSales).not.toBeNull()
  })

  it('derives ratios from the totals of the period', () => {
    const d = derive({ ad: 1000, fixed: 500, sales: 3000, orders: 50, newC: 30, retC: 20 })
    expect(d.roas).toBe(3)
    expect(d.mer).toBe(1)
    expect(d.merEur).toBe(0)
    expect(d.aov).toBe(60)
    expect(d.ncac).toBeCloseTo(33.33, 1)
    expect(d.retention).toBe(0.4)
    expect(derive({ ad: 0, fixed: 0, sales: 0, orders: 0, newC: 0, retC: 0 }).roas).toBeNull()
  })
})
