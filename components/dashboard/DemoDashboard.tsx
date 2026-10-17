'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { type Locale } from '@/lib/i18n'
import { ROUTE_PATHS } from '@/lib/i18n/routes'
import { buildView, derive, type Granularity, type Totals } from '@/lib/demo-dashboard'

const GRANULARITIES: Granularity[] = ['day', 'week', 'month', 'year']

const T = {
  it: {
    day: 'Giorno',
    week: 'Settimana',
    month: 'Mese',
    year: 'Anno',
    customers: 'Clienti',
    frozen: 'Disponibile nella dashboard reale',
    metric: 'Metrica',
    inProgress: 'in corso',
    totalOf: { day: 'Totale 14 giorni', week: 'Totale 12 settimane', month: 'Totale 2026', year: 'Totale' },
    cardMer: { day: 'MER ultimo giorno', week: 'MER settimana corrente', month: 'MER mese corrente', year: 'MER anno corrente' },
    cardMerEur: { day: 'MER € ultimo giorno', week: 'MER € settimana corrente', month: 'MER € mese corrente', year: 'MER € anno corrente' },
    cardSales: { day: 'Vendite nette ultimo giorno', week: 'Vendite nette settimana corrente', month: 'Vendite nette mese corrente', year: 'Vendite nette anno corrente' },
    cardTotal: { day: 'Totale 14 giorni', week: 'Totale 12 settimane', month: 'Totale 2026', year: 'Totale 2025 + 2026' },
    legend: 'verde > 1,05 · rosso < 1,00',
    margin: 'margine 50,0% · costi ammortizzati al giorno',
    orders: 'ordini',
    breakEvenSub: 'su LTV 180gg × margine 50% · NCAC',
    rows: {
      ad: 'Spesa Adv*',
      fixed: 'Costi fissi (quota)',
      sales: 'Vendite nette',
      prev: 'Vendite anno prec.',
      orders: 'Ordini totali',
      newC: 'Clienti nuovi',
      retC: 'Clienti ricorrenti',
      roas: 'ROAS adv*',
      mer: 'MER*',
      merEur: 'MER €*',
      aov: 'AOV',
      cac: 'CAC*',
      ncac: 'NCAC*',
      retention: 'Retention',
    },
  },
  en: {
    day: 'Day',
    week: 'Week',
    month: 'Month',
    year: 'Year',
    customers: 'Customers',
    frozen: 'Available in the live dashboard',
    metric: 'Metric',
    inProgress: 'in progress',
    totalOf: { day: 'Total, 14 days', week: 'Total, 12 weeks', month: 'Total 2026', year: 'Total' },
    cardMer: { day: 'Last day MER', week: 'Current week MER', month: 'Current month MER', year: 'Current year MER' },
    cardMerEur: { day: 'Last day MER €', week: 'Current week MER €', month: 'Current month MER €', year: 'Current year MER €' },
    cardSales: { day: 'Last day net sales', week: 'Current week net sales', month: 'Current month net sales', year: 'Current year net sales' },
    cardTotal: { day: 'Total, 14 days', week: 'Total, 12 weeks', month: 'Total 2026', year: 'Total 2025 + 2026' },
    legend: 'green > 1.05 · red < 1.00',
    margin: 'margin 50.0% · daily amortized costs',
    orders: 'orders',
    breakEvenSub: 'on 180d LTV × 50% margin · NCAC',
    rows: {
      ad: 'Ad spend*',
      fixed: 'Fixed costs (share)',
      sales: 'Net sales',
      prev: 'Prior-year sales',
      orders: 'Total orders',
      newC: 'New customers',
      retC: 'Returning customers',
      roas: 'Ad ROAS*',
      mer: 'MER*',
      merEur: 'MER €*',
      aov: 'AOV',
      cac: 'CAC*',
      ncac: 'NCAC*',
      retention: 'Retention',
    },
  },
} as const

export default function DemoDashboard({ locale = 'it' }: { locale?: Locale }) {
  const [granularity, setGranularity] = useState<Granularity>('month')
  const [isRefreshing, setIsRefreshing] = useState(false)
  const isIt = locale === 'it'

  const sprintUrl = ROUTE_PATHS.zeroLossMigration[locale]
  const t = T[locale]
  const loc = locale === 'it' ? 'it-IT' : 'en-US'
  const eur = useMemo(() => new Intl.NumberFormat(loc, { style: 'currency', currency: 'EUR' }), [loc])
  const eurSigned = useMemo(() => new Intl.NumberFormat(loc, { style: 'currency', currency: 'EUR', signDisplay: 'exceptZero' }), [loc])
  const num = useMemo(() => new Intl.NumberFormat(loc), [loc])
  const dec2 = useMemo(() => new Intl.NumberFormat(loc, { minimumFractionDigits: 2, maximumFractionDigits: 2 }), [loc])
  const pct = useMemo(() => new Intl.NumberFormat(loc, { style: 'percent', minimumFractionDigits: 1, maximumFractionDigits: 1 }), [loc])
  const view = useMemo(() => buildView(granularity, locale), [granularity, locale])
  const cur = view.columns[view.columns.length - 1]
  const curD = derive(cur.totals)
  const totD = derive(view.total)
  const fmtE = (v: number | null) => (v === null ? '-' : eur.format(v))
  const merTone = (v: number | null) => (v === null ? '' : v >= 1.05 ? 'bg-emerald-100/60 text-emerald-900' : v >= 1 ? 'bg-amber-50 text-amber-800' : 'bg-red-100/70 text-red-900')
  const roasTone = (v: number | null) => (v === null ? '' : v >= 2.5 ? 'bg-emerald-50 text-emerald-800' : v >= 2 ? 'bg-amber-50 text-amber-800' : 'bg-red-50 text-red-800')

  type Row = {
    id: keyof (typeof T)['it']['rows']
    value: (x: Totals, prev: number | null) => string
    tone?: (x: Totals) => string
    strong?: boolean
  }
  const ROWS: Row[] = [
    { id: 'ad', value: (x) => eur.format(x.ad) },
    { id: 'fixed', value: (x) => eur.format(x.fixed) },
    { id: 'sales', value: (x) => eur.format(x.sales), strong: true },
    { id: 'prev', value: (_x, p) => fmtE(p) },
    { id: 'orders', value: (x) => num.format(x.orders) },
    { id: 'newC', value: (x) => num.format(x.newC) },
    { id: 'retC', value: (x) => num.format(x.retC) },
    { id: 'roas', value: (x) => { const d = derive(x).roas; return d === null ? '-' : dec2.format(d) }, tone: (x) => roasTone(derive(x).roas) },
    { id: 'mer', value: (x) => { const d = derive(x).mer; return d === null ? '-' : dec2.format(d) }, tone: (x) => merTone(derive(x).mer), strong: true },
    { id: 'merEur', value: (x) => eurSigned.format(derive(x).merEur), tone: (x) => (derive(x).merEur < 0 ? 'text-red-700' : 'text-emerald-700') },
    { id: 'aov', value: (x) => fmtE(derive(x).aov) },
    { id: 'cac', value: (x) => fmtE(derive(x).cac) },
    { id: 'ncac', value: (x) => fmtE(derive(x).ncac) },
    { id: 'retention', value: (x) => { const d = derive(x).retention; return d === null ? '-' : pct.format(d) } },
  ]

  function handleRefresh() {
    setIsRefreshing(true)
    setTimeout(() => setIsRefreshing(false), 600)
  }

  return (
    <div className="min-h-screen bg-[#f8f9fa] text-[#1a1a1a] font-sans antialiased pb-20">
      {/* Top Banner / Breadcrumb & Notice */}
      <div className="border-b border-[#e5e7eb] bg-white px-4 py-3 min-[810px]:px-8">
        <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-3 text-[13px]">
          <div className="flex items-center gap-2">
            <Link
              href={sprintUrl}
              className="inline-flex items-center gap-1 font-semibold text-np-dark hover:underline"
            >
              ← {isIt ? 'Torna allo Shopify Launch Sprint' : 'Back to Shopify Launch Sprint'}
            </Link>
            <span className="text-gray-300">|</span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-700 border border-emerald-200">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              {isIt ? 'Dashboard Dimostrativa Giorno 1' : 'Day 1 Demo Dashboard'}
            </span>
          </div>

          <div className="flex items-center gap-3 text-[#666]">
            <span>
              {isIt
                ? 'Dati dimostrativi: vendite e spesa adv aggiornate ogni giorno'
                : 'Demo data: sales and ad spend refreshed daily'}
            </span>
            <button
              onClick={handleRefresh}
              disabled={isRefreshing}
              className="rounded-md border border-[#d1d5db] bg-white px-2.5 py-1 text-[12px] font-medium text-[#374151] hover:bg-[#f3f4f6] transition-colors"
            >
              {isRefreshing ? (isIt ? 'Aggiornamento...' : 'Updating...') : (isIt ? 'Aggiorna ora' : 'Refresh now')}
            </button>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1400px] px-4 pt-6 min-[810px]:px-8">
        {/* Dashboard Header Bar */}
        <div className="flex flex-col gap-4 min-[810px]:flex-row min-[810px]:items-center min-[810px]:justify-between">
          <div>
            <div className="flex items-baseline gap-2">
              <h1 className="text-[24px] font-bold tracking-tight text-[#111]">
                Dashboard demo
              </h1>
              <span className="text-[13px] text-[#6b7280]">demo-store.example</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {/* Tabs: only Performance is live, the other sections are frozen in the demo */}
            <div className="inline-flex rounded-lg border border-[#e5e7eb] bg-white p-0.5 shadow-sm">
              <button type="button" aria-current="page" className="rounded-md bg-[#15803d] px-3 py-1.5 text-[13px] font-semibold text-white">
                Performance
              </button>
              {[t.customers, 'Email'].map((label) => (
                <span key={label} className="group relative inline-flex" title={t.frozen}>
                  <button
                    type="button"
                    aria-disabled="true"
                    aria-label={`${label}: ${t.frozen}`}
                    onClick={(e) => e.preventDefault()}
                    className="cursor-not-allowed rounded-md px-3 py-1.5 text-[13px] font-medium text-[#4b5563] transition-opacity group-hover:opacity-30 group-focus-within:opacity-30"
                  >
                    {label}
                  </button>
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-0 flex items-center justify-center text-[16px] font-bold leading-none text-red-600 opacity-0 transition-opacity group-hover:opacity-100"
                  >
                    ✕
                  </span>
                </span>
              ))}
            </div>

            {/* Granularity switcher: the whole page follows it */}
            <div className="inline-flex rounded-lg border border-[#e5e7eb] bg-white p-0.5 shadow-sm text-[13px]" role="group">
              {GRANULARITIES.map((g) => (
                <button
                  key={g}
                  type="button"
                  aria-pressed={granularity === g}
                  onClick={() => setGranularity(g)}
                  className={`rounded-md px-2.5 py-1.5 font-medium transition-colors ${
                    granularity === g ? 'bg-[#15803d] text-white' : 'text-[#4b5563] hover:text-[#111]'
                  }`}
                >
                  {t[g]}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 5 Top KPI Cards (current period of the selected granularity) */}
        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
          <div className="rounded-xl border border-[#e5e7eb] bg-white p-4 shadow-sm">
            <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#6b7280]">
              <span className={`h-2 w-2 rounded-full ${curD.mer !== null && curD.mer >= 1.05 ? 'bg-emerald-500' : curD.mer !== null && curD.mer >= 1 ? 'bg-amber-400' : 'bg-red-500'}`} />
              {t.cardMer[granularity]}
            </div>
            <div className="mt-2 text-[28px] font-bold tracking-tight text-[#111]">{curD.mer === null ? '-' : dec2.format(curD.mer)}</div>
            <div className="mt-1 text-[11px] text-[#6b7280]">{t.legend}</div>
          </div>

          <div className="rounded-xl border border-[#e5e7eb] bg-white p-4 shadow-sm">
            <div className="text-[11px] font-bold uppercase tracking-wider text-[#6b7280]">{t.cardMerEur[granularity]}</div>
            <div className={`mt-2 text-[28px] font-bold tracking-tight ${curD.merEur < 0 ? 'text-red-600' : 'text-emerald-600'}`}>{eurSigned.format(curD.merEur)}</div>
            <div className="mt-1 text-[11px] text-[#6b7280]">{t.margin}</div>
          </div>

          <div className="rounded-xl border border-[#e5e7eb] bg-white p-4 shadow-sm">
            <div className="text-[11px] font-bold uppercase tracking-wider text-[#6b7280]">{t.cardSales[granularity]}</div>
            <div className="mt-2 text-[28px] font-bold tracking-tight text-[#111]">{eur.format(cur.totals.sales)}</div>
            <div className="mt-1 text-[11px] text-[#6b7280]">
              {num.format(cur.totals.orders)} {t.orders} · AOV {fmtE(curD.aov)}
            </div>
          </div>

          <div className="rounded-xl border border-[#e5e7eb] bg-white p-4 shadow-sm">
            <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#6b7280]">
              <span className={`h-2 w-2 rounded-full ${curD.ncac !== null && curD.breakEven !== null && curD.ncac <= curD.breakEven ? 'bg-emerald-500' : 'bg-red-500'}`} />
              CPA Break Even
            </div>
            <div className="mt-2 text-[28px] font-bold tracking-tight text-[#111]">{fmtE(curD.breakEven)}</div>
            <div className="mt-1 truncate text-[11px] text-[#6b7280]">
              {t.breakEvenSub} {fmtE(curD.ncac)}
            </div>
          </div>

          <div className="rounded-xl border border-[#e5e7eb] bg-white p-4 shadow-sm">
            <div className="text-[11px] font-bold uppercase tracking-wider text-[#6b7280]">{t.cardTotal[granularity]}</div>
            <div className="mt-2 text-[28px] font-bold tracking-tight text-[#111]">{eur.format(view.total.sales)}</div>
            <div className="mt-1 text-[11px] text-[#6b7280]">
              MER {totD.mer === null ? '-' : dec2.format(totD.mer)} · MER € {eurSigned.format(totD.merEur)}
            </div>
          </div>
        </div>

        {/* Detailed Metrics Table: columns follow the granularity */}
        <div className="mt-6 overflow-hidden rounded-xl border border-[#e5e7eb] bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left text-[13px]" style={{ minWidth: 190 + (view.columns.length + 1) * 92 }}>
              <thead>
                <tr className="border-b border-[#e5e7eb] bg-[#fafafa] font-semibold text-[#374151]">
                  <th className="sticky left-0 z-10 w-[170px] bg-[#fafafa] px-4 py-3">{t.metric}</th>
                  {view.columns.map((c) => (
                    <th key={c.key} className={`whitespace-nowrap px-2 py-3 text-right ${c.inProgress ? 'bg-emerald-50/50 font-bold text-np-dark' : ''}`}>
                      {c.label}
                      {c.inProgress && <span className="ml-1 text-[10px] font-normal text-emerald-700">{t.inProgress}</span>}
                    </th>
                  ))}
                  <th className="whitespace-nowrap bg-[#f3f4f6] px-4 py-3 text-right font-bold">{t.totalOf[granularity]}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#f3f4f6]">
                {ROWS.map((row) => {
                  const highlighted = row.id === 'sales'
                  const muted = row.id === 'prev'
                  return (
                    <tr key={row.id} className={`transition-colors hover:bg-gray-50/60 ${highlighted ? 'bg-emerald-50/40 font-semibold text-[#111]' : ''} ${muted ? 'text-gray-500' : ''}`}>
                      <td className={`sticky left-0 z-10 px-4 py-2.5 font-medium ${highlighted ? 'bg-emerald-50 font-bold text-emerald-900' : 'bg-white text-[#4b5563]'}`}>{t.rows[row.id]}</td>
                      {view.columns.map((c) => (
                        <td key={c.key} className={`whitespace-nowrap px-2 py-2.5 text-right ${row.tone ? row.tone(c.totals) : ''} ${row.strong && !highlighted ? 'font-bold' : ''}`}>
                          {row.value(c.totals, c.prevSales)}
                        </td>
                      ))}
                      <td className={`whitespace-nowrap bg-gray-50 px-4 py-2.5 text-right font-bold ${row.tone ? row.tone(view.total).replace(/bg-[^ ]+/g, '') : ''}`}>
                        {row.value(view.total, view.prevTotal)}
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Footnote */}
        <p className="mt-3 text-[11px] text-[#6b7280]">
          * {isIt
            ? 'Dashboard dimostrativa: tutti i valori sono inventati, modellati sulla struttura di uno store reale e riscalati. Non corrispondono ai dati di nessun cliente. Nella dashboard vera la spesa adv arriva da Meta e Google Ads per giorno, vendite e clienti da Shopify.'
            : 'Demo dashboard: every value is invented, modelled on the structure of a real store and rescaled. Nothing here matches any client’s data. In the real dashboard, ad spend comes from Meta and Google Ads by day, sales and customers from Shopify.'}
        </p>

        {/* Explanatory Banner & CTA */}
        <div className="mt-8 rounded-2xl border-2 border-[#15803d]/30 bg-emerald-50/60 p-6 min-[810px]:p-8">
          <div className="flex flex-col gap-4 min-[810px]:flex-row min-[810px]:items-center min-[810px]:justify-between">
            <div className="max-w-[720px]">
              <h3 className="text-[19px] font-bold tracking-tight text-[#111]">
                {isIt
                  ? 'Questa è la dashboard che colleghiamo e congeliamo dal Giorno 1'
                  : 'This is the dashboard we connect and freeze from Day 1'}
              </h3>
              <p className="mt-1.5 text-[14px] leading-relaxed text-[#374151]">
                {isIt
                  ? 'Durante lo Shopify Launch Sprint colleghiamo Shopify, Meta Ads, Google Ads e il tracking server-side. Congeliamo la baseline delle tue metriche al kickoff per monitorare con trasparenza matematica le nostre 4 garanzie scritte (SEO, checkout, go-live, consegna in 14 giorni).'
                  : 'During the Shopify Launch Sprint we connect Shopify, Meta Ads, Google Ads and server-side tracking. We freeze your baseline at kickoff to track our 4 written guarantees (SEO, checkout, zero downtime, 14-day delivery) with mathematical transparency.'}
              </p>
            </div>

            <Link
              href={sprintUrl}
              className="shrink-0 rounded-xl bg-np-dark px-6 py-3.5 text-center text-[15px] font-semibold text-white shadow-sm hover:bg-black transition-colors"
            >
              {isIt ? 'Candidati allo Sprint in 14 giorni' : 'Apply for the 14-Day Sprint'}
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
