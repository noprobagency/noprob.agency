'use client'

import { useState } from 'react'
import Link from 'next/link'
import { type Locale } from '@/lib/i18n'
import { ROUTE_PATHS } from '@/lib/i18n/routes'

type Tab = 'performance' | 'clienti' | 'email' | 'quiz'
type Granularity = 'giorno' | 'settimana' | 'mese' | 'anno'

export default function DemoDashboard({ locale = 'it' }: { locale?: Locale }) {
  const [activeTab, setActiveTab] = useState<Tab>('performance')
  const [granularity, setGranularity] = useState<Granularity>('mese')
  const [year, setYear] = useState('2026')
  const [isRefreshing, setIsRefreshing] = useState(false)

  const isIt = locale === 'it'

  const sprintUrl = ROUTE_PATHS.zeroLossMigration[locale]

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
                ? 'Ultime novità: vendite 13/10, 20:12 · spesa adv 13/10, 20:12'
                : 'Latest update: sales 13/10, 20:12 · ad spend 13/10, 20:12'}
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
                Dashboard Nazzi
              </h1>
              <span className="text-[13px] text-[#6b7280]">farmaciagiancarlonazzi.com</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {/* Tabs */}
            <div className="inline-flex rounded-lg border border-[#e5e7eb] bg-white p-0.5 shadow-sm">
              <button
                onClick={() => setActiveTab('performance')}
                className={`rounded-md px-3 py-1.5 text-[13px] font-semibold transition-colors ${
                  activeTab === 'performance'
                    ? 'bg-[#15803d] text-white'
                    : 'text-[#4b5563] hover:text-[#111]'
                }`}
              >
                Performance
              </button>
              <button
                onClick={() => setActiveTab('clienti')}
                className={`rounded-md px-3 py-1.5 text-[13px] font-medium transition-colors ${
                  activeTab === 'clienti' ? 'bg-[#15803d] text-white' : 'text-[#4b5563] hover:text-[#111]'
                }`}
              >
                {isIt ? 'Clienti' : 'Customers'}
              </button>
              <button
                onClick={() => setActiveTab('email')}
                className={`rounded-md px-3 py-1.5 text-[13px] font-medium transition-colors ${
                  activeTab === 'email' ? 'bg-[#15803d] text-white' : 'text-[#4b5563] hover:text-[#111]'
                }`}
              >
                Email
              </button>
              <button
                onClick={() => setActiveTab('quiz')}
                className={`rounded-md px-3 py-1.5 text-[13px] font-medium transition-colors ${
                  activeTab === 'quiz' ? 'bg-[#15803d] text-white' : 'text-[#4b5563] hover:text-[#111]'
                }`}
              >
                Quiz AstrumDonna
              </button>
            </div>

            {/* Year Selector */}
            <select
              value={year}
              onChange={(e) => setYear(e.target.value)}
              className="rounded-lg border border-[#e5e7eb] bg-white px-3 py-1.5 text-[13px] font-medium text-[#374151] shadow-sm focus:outline-none"
            >
              <option value="2026">2026</option>
              <option value="2025">2025</option>
            </select>

            {/* Granularity Switcher */}
            <div className="inline-flex rounded-lg border border-[#e5e7eb] bg-white p-0.5 shadow-sm text-[13px]">
              {(['giorno', 'settimana', 'mese', 'anno'] as const).map((g) => (
                <button
                  key={g}
                  onClick={() => setGranularity(g)}
                  className={`capitalize rounded-md px-2.5 py-1.5 font-medium transition-colors ${
                    granularity === g
                      ? 'bg-[#15803d] text-white'
                      : 'text-[#4b5563] hover:text-[#111]'
                  }`}
                >
                  {g === 'giorno'
                    ? (isIt ? 'Giorno' : 'Day')
                    : g === 'settimana'
                    ? (isIt ? 'Settimana' : 'Week')
                    : g === 'mese'
                    ? (isIt ? 'Mese' : 'Month')
                    : (isIt ? 'Anno' : 'Year')}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 5 Top KPI Cards */}
        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {/* Card 1: MER MESE CORRENTE */}
          <div className="rounded-xl border border-[#e5e7eb] bg-white p-4 shadow-sm">
            <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#6b7280]">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              {isIt ? 'MER Mese Corrente' : 'Current Month MER'}
            </div>
            <div className="mt-2 text-[28px] font-bold tracking-tight text-[#111]">
              1,25
            </div>
            <div className="mt-1 text-[11px] text-[#6b7280]">
              {isIt ? 'verde > 1,05 · rosso < 1,00' : 'green > 1.05 · red < 1.00'}
            </div>
          </div>

          {/* Card 2: MER € MESE CORRENTE */}
          <div className="rounded-xl border border-[#e5e7eb] bg-white p-4 shadow-sm">
            <div className="text-[11px] font-bold uppercase tracking-wider text-[#6b7280]">
              {isIt ? 'MER € Mese Corrente' : 'Current Month MER €'}
            </div>
            <div className="mt-2 text-[28px] font-bold tracking-tight text-emerald-600">
              +448,18 €
            </div>
            <div className="mt-1 text-[11px] text-[#6b7280]">
              {isIt ? 'margine 50,0% · costi ammortizzati al giorno' : 'margin 50.0% · daily amortized costs'}
            </div>
          </div>

          {/* Card 3: VENDITE NETTE MESE CORRENTE */}
          <div className="rounded-xl border border-[#e5e7eb] bg-white p-4 shadow-sm">
            <div className="text-[11px] font-bold uppercase tracking-wider text-[#6b7280]">
              {isIt ? 'Vendite Nette Mese Corrente' : 'Current Month Net Sales'}
            </div>
            <div className="mt-2 text-[28px] font-bold tracking-tight text-[#111]">
              4444,20 €
            </div>
            <div className="mt-1 text-[11px] text-[#6b7280]">
              77 {isIt ? 'ordini' : 'orders'} · AOV 57,72 €
            </div>
          </div>

          {/* Card 4: CPA BREAK EVEN */}
          <div className="rounded-xl border border-[#e5e7eb] bg-white p-4 shadow-sm">
            <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#6b7280]">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              CPA Break Even
            </div>
            <div className="mt-2 text-[28px] font-bold tracking-tight text-[#111]">
              32,56 €
            </div>
            <div className="mt-1 text-[11px] text-[#6b7280] truncate">
              {isIt
                ? 'su LTV 180gg x margine 50% · primo ordine 25,03 € · NCAC 30,28 €'
                : 'on 180d LTV x 50% margin · 1st order 25.03 € · NCAC 30.28 €'}
            </div>
          </div>

          {/* Card 5: TOTALE 2026 */}
          <div className="rounded-xl border border-[#e5e7eb] bg-white p-4 shadow-sm">
            <div className="text-[11px] font-bold uppercase tracking-wider text-[#6b7280]">
              {isIt ? 'Totale 2026' : 'Total 2026'}
            </div>
            <div className="mt-2 text-[28px] font-bold tracking-tight text-[#111]">
              88.639,02 €
            </div>
            <div className="mt-1 text-[11px] text-[#6b7280]">
              MER 1,19 · MER € +7.198,19 €
            </div>
          </div>
        </div>

        {/* Detailed Metrics Table */}
        <div className="mt-6 overflow-hidden rounded-xl border border-[#e5e7eb] bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-[13px] border-collapse min-w-[1050px]">
              <thead>
                <tr className="border-b border-[#e5e7eb] bg-[#fafafa] font-semibold text-[#374151]">
                  <th className="py-3 px-4 w-[180px]">Metrica</th>
                  <th className="py-3 px-2 text-right">Gen 26</th>
                  <th className="py-3 px-2 text-right">Feb 26</th>
                  <th className="py-3 px-2 text-right">Mar 26</th>
                  <th className="py-3 px-2 text-right">Apr 26</th>
                  <th className="py-3 px-2 text-right">Mag 26</th>
                  <th className="py-3 px-2 text-right">Giu 26</th>
                  <th className="py-3 px-2 text-right">Lug 26</th>
                  <th className="py-3 px-2 text-right">Ago 26</th>
                  <th className="py-3 px-2 text-right">Set 26</th>
                  <th className="py-3 px-2 text-right font-bold text-np-dark bg-emerald-50/50">
                    Ott 26 <span className="text-[10px] font-normal text-emerald-700">in corso</span>
                  </th>
                  <th className="py-3 px-4 text-right font-bold bg-[#f3f4f6]">Totale 2026</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#f3f4f6]">
                {/* Spesa Adv */}
                <tr className="hover:bg-gray-50/60 transition-colors">
                  <td className="py-2.5 px-4 font-medium text-[#4b5563]">Spesa Adv*</td>
                  <td className="py-2.5 px-2 text-right">2945,39 €</td>
                  <td className="py-2.5 px-2 text-right">1731,69 €</td>
                  <td className="py-2.5 px-2 text-right">2938,96 €</td>
                  <td className="py-2.5 px-2 text-right">3682,20 €</td>
                  <td className="py-2.5 px-2 text-right">2649,44 €</td>
                  <td className="py-2.5 px-2 text-right">5162,30 €</td>
                  <td className="py-2.5 px-2 text-right">4951,76 €</td>
                  <td className="py-2.5 px-2 text-right">1322,81 €</td>
                  <td className="py-2.5 px-2 text-right">3062,85 €</td>
                  <td className="py-2.5 px-2 text-right bg-emerald-50/30">1438,44 €</td>
                  <td className="py-2.5 px-4 text-right font-bold bg-gray-50">29.885,84 €</td>
                </tr>

                {/* Costi fissi */}
                <tr className="hover:bg-gray-50/60 transition-colors">
                  <td className="py-2.5 px-4 font-medium text-[#4b5563]">Costi fissi (quota)</td>
                  <td className="py-2.5 px-2 text-right">500,00 €</td>
                  <td className="py-2.5 px-2 text-right">800,00 €</td>
                  <td className="py-2.5 px-2 text-right">800,00 €</td>
                  <td className="py-2.5 px-2 text-right">800,00 €</td>
                  <td className="py-2.5 px-2 text-right">800,00 €</td>
                  <td className="py-2.5 px-2 text-right">800,00 €</td>
                  <td className="py-2.5 px-2 text-right">800,00 €</td>
                  <td className="py-2.5 px-2 text-right">800,00 €</td>
                  <td className="py-2.5 px-2 text-right">800,00 €</td>
                  <td className="py-2.5 px-2 text-right bg-emerald-50/30">335,48 €</td>
                  <td className="py-2.5 px-4 text-right font-bold bg-gray-50">7235,48 €</td>
                </tr>

                {/* Vendite nette (highlighted row) */}
                <tr className="bg-emerald-50/40 font-semibold text-[#111] hover:bg-emerald-50/60 transition-colors">
                  <td className="py-3 px-4 font-bold text-emerald-900">Vendite nette</td>
                  <td className="py-3 px-2 text-right">6432,10 €</td>
                  <td className="py-3 px-2 text-right">7649,70 €</td>
                  <td className="py-3 px-2 text-right">8503,50 €</td>
                  <td className="py-3 px-2 text-right">10.860,73 €</td>
                  <td className="py-3 px-2 text-right">8113,49 €</td>
                  <td className="py-3 px-2 text-right">10.291,12 €</td>
                  <td className="py-3 px-2 text-right">12.628,00 €</td>
                  <td className="py-3 px-2 text-right">8397,38 €</td>
                  <td className="py-3 px-2 text-right">11.318,80 €</td>
                  <td className="py-3 px-2 text-right bg-emerald-100/50">4444,20 €</td>
                  <td className="py-3 px-4 text-right font-extrabold bg-emerald-100/70">88.639,02 €</td>
                </tr>

                {/* Vendite anno prec. */}
                <tr className="hover:bg-gray-50/60 transition-colors text-gray-500">
                  <td className="py-2.5 px-4 font-medium">Vendite anno prec.</td>
                  <td className="py-2.5 px-2 text-right">7088,70 €</td>
                  <td className="py-2.5 px-2 text-right">2209,70 €</td>
                  <td className="py-2.5 px-2 text-right">5774,50 €</td>
                  <td className="py-2.5 px-2 text-right">3972,70 €</td>
                  <td className="py-2.5 px-2 text-right">4771,80 €</td>
                  <td className="py-2.5 px-2 text-right">4002,20 €</td>
                  <td className="py-2.5 px-2 text-right">5761,90 €</td>
                  <td className="py-2.5 px-2 text-right">4031,70 €</td>
                  <td className="py-2.5 px-2 text-right">5233,40 €</td>
                  <td className="py-2.5 px-2 text-right bg-emerald-50/30">5626,50 €</td>
                  <td className="py-2.5 px-4 text-right font-bold bg-gray-50">-</td>
                </tr>

                {/* Ordini totali */}
                <tr className="hover:bg-gray-50/60 transition-colors">
                  <td className="py-2.5 px-4 font-medium text-[#4b5563]">Ordini totali</td>
                  <td className="py-2.5 px-2 text-right">137</td>
                  <td className="py-2.5 px-2 text-right">154</td>
                  <td className="py-2.5 px-2 text-right">171</td>
                  <td className="py-2.5 px-2 text-right">229</td>
                  <td className="py-2.5 px-2 text-right">171</td>
                  <td className="py-2.5 px-2 text-right">227</td>
                  <td className="py-2.5 px-2 text-right">259</td>
                  <td className="py-2.5 px-2 text-right">146</td>
                  <td className="py-2.5 px-2 text-right">200</td>
                  <td className="py-2.5 px-2 text-right bg-emerald-50/30">77</td>
                  <td className="py-2.5 px-4 text-right font-bold bg-gray-50">1771</td>
                </tr>

                {/* Clienti NEW */}
                <tr className="hover:bg-gray-50/60 transition-colors">
                  <td className="py-2.5 px-4 font-medium text-[#4b5563]">Clienti NEW</td>
                  <td className="py-2.5 px-2 text-right">69</td>
                  <td className="py-2.5 px-2 text-right">94</td>
                  <td className="py-2.5 px-2 text-right">101</td>
                  <td className="py-2.5 px-2 text-right">128</td>
                  <td className="py-2.5 px-2 text-right">103</td>
                  <td className="py-2.5 px-2 text-right">142</td>
                  <td className="py-2.5 px-2 text-right">166</td>
                  <td className="py-2.5 px-2 text-right">50</td>
                  <td className="py-2.5 px-2 text-right">87</td>
                  <td className="py-2.5 px-2 text-right bg-emerald-50/30">47</td>
                  <td className="py-2.5 px-4 text-right font-bold bg-gray-50">987</td>
                </tr>

                {/* Clienti ricorrenti */}
                <tr className="hover:bg-gray-50/60 transition-colors">
                  <td className="py-2.5 px-4 font-medium text-[#4b5563]">Clienti ricorrenti</td>
                  <td className="py-2.5 px-2 text-right">66</td>
                  <td className="py-2.5 px-2 text-right">57</td>
                  <td className="py-2.5 px-2 text-right">67</td>
                  <td className="py-2.5 px-2 text-right">100</td>
                  <td className="py-2.5 px-2 text-right">63</td>
                  <td className="py-2.5 px-2 text-right">81</td>
                  <td className="py-2.5 px-2 text-right">89</td>
                  <td className="py-2.5 px-2 text-right">96</td>
                  <td className="py-2.5 px-2 text-right">109</td>
                  <td className="py-2.5 px-2 text-right bg-emerald-50/30">30</td>
                  <td className="py-2.5 px-4 text-right font-bold bg-gray-50">513</td>
                </tr>

                {/* ROAS adv (color coded) */}
                <tr className="hover:bg-gray-50/60 transition-colors">
                  <td className="py-2.5 px-4 font-medium text-[#4b5563]">ROAS adv*</td>
                  <td className="py-2.5 px-2 text-right bg-amber-50 text-amber-800">2,18</td>
                  <td className="py-2.5 px-2 text-right bg-emerald-50 text-emerald-800">4,42</td>
                  <td className="py-2.5 px-2 text-right bg-emerald-50 text-emerald-800">2,89</td>
                  <td className="py-2.5 px-2 text-right bg-emerald-50 text-emerald-800">2,95</td>
                  <td className="py-2.5 px-2 text-right bg-emerald-50 text-emerald-800">3,06</td>
                  <td className="py-2.5 px-2 text-right bg-red-50 text-red-800">1,99</td>
                  <td className="py-2.5 px-2 text-right bg-emerald-50 text-emerald-800">2,55</td>
                  <td className="py-2.5 px-2 text-right bg-emerald-50 text-emerald-800">6,35</td>
                  <td className="py-2.5 px-2 text-right bg-emerald-50 text-emerald-800">3,70</td>
                  <td className="py-2.5 px-2 text-right bg-emerald-50 text-emerald-800">3,09</td>
                  <td className="py-2.5 px-4 text-right font-bold bg-gray-50">2,97</td>
                </tr>

                {/* MER (color coded) */}
                <tr className="hover:bg-gray-50/60 transition-colors font-medium">
                  <td className="py-2.5 px-4 font-semibold text-[#111]">MER*</td>
                  <td className="py-2.5 px-2 text-right bg-red-100/70 text-red-900 font-bold">0,93</td>
                  <td className="py-2.5 px-2 text-right bg-emerald-100/60 text-emerald-900 font-bold">1,51</td>
                  <td className="py-2.5 px-2 text-right bg-emerald-100/60 text-emerald-900 font-bold">1,14</td>
                  <td className="py-2.5 px-2 text-right bg-emerald-100/60 text-emerald-900 font-bold">1,21</td>
                  <td className="py-2.5 px-2 text-right bg-emerald-100/60 text-emerald-900 font-bold">1,18</td>
                  <td className="py-2.5 px-2 text-right bg-red-100/70 text-red-900 font-bold">0,86</td>
                  <td className="py-2.5 px-2 text-right bg-emerald-100/60 text-emerald-900 font-bold">1,10</td>
                  <td className="py-2.5 px-2 text-right bg-emerald-100/60 text-emerald-900 font-bold">1,98</td>
                  <td className="py-2.5 px-2 text-right bg-emerald-100/60 text-emerald-900 font-bold">1,47</td>
                  <td className="py-2.5 px-2 text-right bg-emerald-100/60 text-emerald-900 font-bold">1,25</td>
                  <td className="py-2.5 px-4 text-right font-extrabold bg-gray-100">1,19</td>
                </tr>

                {/* MER € */}
                <tr className="hover:bg-gray-50/60 transition-colors">
                  <td className="py-2.5 px-4 font-medium text-[#4b5563]">MER €*</td>
                  <td className="py-2.5 px-2 text-right text-red-700">-229,34 €</td>
                  <td className="py-2.5 px-2 text-right text-emerald-700 font-medium">+1293,16 €</td>
                  <td className="py-2.5 px-2 text-right text-emerald-700 font-medium">+512,79 €</td>
                  <td className="py-2.5 px-2 text-right text-emerald-700 font-medium">+948,17 €</td>
                  <td className="py-2.5 px-2 text-right text-emerald-700 font-medium">+607,31 €</td>
                  <td className="py-2.5 px-2 text-right text-red-700">-816,74 €</td>
                  <td className="py-2.5 px-2 text-right text-emerald-700 font-medium">+562,24 €</td>
                  <td className="py-2.5 px-2 text-right text-emerald-700 font-medium">+2075,88 €</td>
                  <td className="py-2.5 px-2 text-right text-emerald-700 font-medium">+1796,55 €</td>
                  <td className="py-2.5 px-2 text-right text-emerald-700 font-medium bg-emerald-50/30">+448,18 €</td>
                  <td className="py-2.5 px-4 text-right font-bold text-emerald-800 bg-gray-50">+7198,19 €</td>
                </tr>

                {/* AOV */}
                <tr className="hover:bg-gray-50/60 transition-colors">
                  <td className="py-2.5 px-4 font-medium text-[#4b5563]">AOV</td>
                  <td className="py-2.5 px-2 text-right">46,95 €</td>
                  <td className="py-2.5 px-2 text-right">49,67 €</td>
                  <td className="py-2.5 px-2 text-right">49,73 €</td>
                  <td className="py-2.5 px-2 text-right">47,43 €</td>
                  <td className="py-2.5 px-2 text-right">47,45 €</td>
                  <td className="py-2.5 px-2 text-right">45,34 €</td>
                  <td className="py-2.5 px-2 text-right">48,76 €</td>
                  <td className="py-2.5 px-2 text-right">57,52 €</td>
                  <td className="py-2.5 px-2 text-right">56,59 €</td>
                  <td className="py-2.5 px-2 text-right bg-emerald-50/30">57,72 €</td>
                  <td className="py-2.5 px-4 text-right font-bold bg-gray-50">50,05 €</td>
                </tr>

                {/* CAC */}
                <tr className="hover:bg-gray-50/60 transition-colors">
                  <td className="py-2.5 px-4 font-medium text-[#4b5563]">CAC*</td>
                  <td className="py-2.5 px-2 text-right">21,82 €</td>
                  <td className="py-2.5 px-2 text-right">11,47 €</td>
                  <td className="py-2.5 px-2 text-right">17,49 €</td>
                  <td className="py-2.5 px-2 text-right">16,15 €</td>
                  <td className="py-2.5 px-2 text-right">15,96 €</td>
                  <td className="py-2.5 px-2 text-right">23,15 €</td>
                  <td className="py-2.5 px-2 text-right">19,42 €</td>
                  <td className="py-2.5 px-2 text-right">9,06 €</td>
                  <td className="py-2.5 px-2 text-right">15,63 €</td>
                  <td className="py-2.5 px-2 text-right bg-emerald-50/30">18,68 €</td>
                  <td className="py-2.5 px-4 text-right font-bold bg-gray-50">19,92 €</td>
                </tr>

                {/* NCAC */}
                <tr className="hover:bg-gray-50/60 transition-colors">
                  <td className="py-2.5 px-4 font-medium text-[#4b5563]">NCAC*</td>
                  <td className="py-2.5 px-2 text-right">42,69 €</td>
                  <td className="py-2.5 px-2 text-right">18,42 €</td>
                  <td className="py-2.5 px-2 text-right">29,10 €</td>
                  <td className="py-2.5 px-2 text-right">28,77 €</td>
                  <td className="py-2.5 px-2 text-right">25,72 €</td>
                  <td className="py-2.5 px-2 text-right">36,35 €</td>
                  <td className="py-2.5 px-2 text-right">29,83 €</td>
                  <td className="py-2.5 px-2 text-right">26,46 €</td>
                  <td className="py-2.5 px-2 text-right">35,21 €</td>
                  <td className="py-2.5 px-2 text-right bg-emerald-50/30">30,61 €</td>
                  <td className="py-2.5 px-4 text-right font-bold bg-gray-50">30,28 €</td>
                </tr>

                {/* Retention */}
                <tr className="hover:bg-gray-50/60 transition-colors">
                  <td className="py-2.5 px-4 font-medium text-[#4b5563]">Retention</td>
                  <td className="py-2.5 px-2 text-right">48,9%</td>
                  <td className="py-2.5 px-2 text-right">37,7%</td>
                  <td className="py-2.5 px-2 text-right">39,9%</td>
                  <td className="py-2.5 px-2 text-right">43,9%</td>
                  <td className="py-2.5 px-2 text-right">38,0%</td>
                  <td className="py-2.5 px-2 text-right">36,3%</td>
                  <td className="py-2.5 px-2 text-right">34,9%</td>
                  <td className="py-2.5 px-2 text-right">65,8%</td>
                  <td className="py-2.5 px-2 text-right">55,6%</td>
                  <td className="py-2.5 px-2 text-right bg-emerald-50/30">39,0%</td>
                  <td className="py-2.5 px-4 text-right font-bold bg-gray-50">34,2%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Footnote */}
        <p className="mt-3 text-[11px] text-[#6b7280]">
          * {isIt
            ? 'spesa adv: dato Meta reale per giorno da 2026-06 in poi (i giorni senza spesa sono zero vero); prima, il mensile Meta è distribuito sui giorni in proporzione agli ordini. Vendite e clienti sono dati Shopify reali.'
            : 'ad spend: Meta real daily data from 2026-06 onwards (zero-spend days are true zero); earlier Meta monthly spend is distributed proportionally by orders. Sales and customers are real Shopify data.'}
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
