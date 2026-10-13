import Link from 'next/link'

import type { ZlCopy } from '@/content/zero-loss-migration'
import gscDaily from '@/data/use-cases/nazzi-gsc-daily.json'
import { CUMINI_MIGRATION, NAZZI_MIGRATION, cuminiMonthly } from '@/data/zero-loss/seo-charts'
import ZlRail from './ZlRail'

type Item = ZlCopy['proof']['charts']['items'][number]
type Lang = 'it' | 'en'

const BLUE = '#4285f4'
const PURPLE = '#5e35b1'
const INK = '#121212'
const GREEN = '#96bf47'

const W = 720
const H = 330
const PAD = { left: 44, right: 50, top: 48, bottom: 36 }
const plotW = W - PAD.left - PAD.right
const plotH = H - PAD.top - PAD.bottom

const MONTHS: Record<Lang, string[]> = {
  it: ['gen', 'feb', 'mar', 'apr', 'mag', 'giu', 'lug', 'ago', 'set', 'ott', 'nov', 'dic'],
  en: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
}

const fmt = (v: number, lang: Lang) =>
  v >= 1000 ? `${(v / 1000).toLocaleString(lang === 'it' ? 'it-IT' : 'en-US')}K` : String(v)

type Axis = { max: number; step: number; color: string }
type Line = { values: number[]; color: string; axis: 'left' | 'right' }

/**
 * Chart in the style of the case study Search Console chart: green migration band,
 * black "live on Shopify" pill, month ticks, numbers without units on the axes.
 */
function Plot({
  dates,
  lines,
  left,
  right,
  migration,
  goLiveLabel,
  migrationLabel,
  lang,
  ariaLabel,
}: {
  dates: string[]
  lines: Line[]
  left: Axis
  right?: Axis
  migration: [string, string]
  goLiveLabel: string
  migrationLabel: string
  lang: Lang
  ariaLabel: string
}) {
  const t0 = Date.parse(dates[0])
  const t1 = Date.parse(dates[dates.length - 1])
  const xAt = (iso: string) => PAD.left + ((Date.parse(iso) - t0) / (t1 - t0)) * plotW
  const yAt = (v: number, axis: Axis) => PAD.top + plotH - (v / axis.max) * plotH
  const ticks = Array.from({ length: Math.round(left.max / left.step) + 1 }, (_, k) => k)

  const bandX0 = Math.max(PAD.left, xAt(migration[0]))
  const goX = xAt(migration[1])
  const pillW = Math.max(150, goLiveLabel.length * 7.2 + 28)
  const pillX = Math.min(Math.max(goX - pillW / 2, PAD.left), W - PAD.right - pillW)

  // First day of each month inside the range, thinned to at most 12 labels.
  const months: string[] = []
  const start = new Date(t0)
  for (let d = new Date(Date.UTC(start.getUTCFullYear(), start.getUTCMonth() + 1, 1)); d.getTime() <= t1; d.setUTCMonth(d.getUTCMonth() + 1)) {
    months.push(d.toISOString().slice(0, 10))
  }
  // Long ranges (Cumini, since 2023): year on January, month name on July.
  const long = months.length > 18
  const every = Math.ceil(months.length / 12)
  const showTick = (d: string, k: number) => (long ? ['01', '07'].includes(d.slice(5, 7)) : k % every === 0)
  const tickLabel = (d: string) => {
    const m = Number(d.slice(5, 7)) - 1
    if (long) return m === 0 ? d.slice(0, 4) : MONTHS[lang][m]
    return `${MONTHS[lang][m]}${m === 0 ? ` ${d.slice(2, 4)}` : ''}`
  }

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="h-auto w-full" style={{ fontFamily: 'Inter, Helvetica, Arial, sans-serif' }} role="img" aria-label={ariaLabel}>
      <rect x={bandX0} y={PAD.top} width={Math.max(0, goX - bandX0)} height={plotH} fill="#1dcc5d" fillOpacity="0.08" />
      <text x={(bandX0 + goX) / 2} y={PAD.top + 18} textAnchor="middle" fontSize="11" fontWeight="600" fill="#139a45">
        {migrationLabel}
      </text>

      {ticks.map((k) => {
        const y = PAD.top + plotH - (k / (ticks.length - 1)) * plotH
        return (
          <g key={k}>
            <line x1={PAD.left} x2={W - PAD.right} y1={y} y2={y} stroke="#ececec" />
            <text x={PAD.left - 10} y={y + 4} textAnchor="end" fontSize="11" fill={left.color}>
              {fmt(k * left.step, lang)}
            </text>
            {right && (
              <text x={W - PAD.right + 10} y={y + 4} fontSize="11" fill={right.color}>
                {fmt((k * right.max) / (ticks.length - 1), lang)}
              </text>
            )}
          </g>
        )
      })}

      {lines.map((line, k) => (
        <polyline
          key={k}
          fill="none"
          stroke={line.color}
          strokeWidth="2.2"
          strokeLinejoin="round"
          strokeLinecap="round"
          points={line.values
            .map((v, i) => `${xAt(dates[i]).toFixed(1)},${yAt(v, line.axis === 'right' && right ? right : left).toFixed(1)}`)
            .join(' ')}
        />
      ))}

      <line x1={goX} x2={goX} y1={PAD.top - 4} y2={PAD.top + plotH} stroke={INK} strokeWidth="1.3" strokeDasharray="4 4" />
      <rect x={pillX} y={PAD.top - 34} width={pillW} height="24" rx="12" fill={INK} />
      <text x={pillX + pillW / 2} y={PAD.top - 18} textAnchor="middle" fontSize="11.5" fontWeight="600" fill="#fff">
        {goLiveLabel}
      </text>

      {months
        .filter((d, k) => showTick(d, k))
        .map((d) => (
          <text
            key={d}
            x={xAt(d)}
            y={H - 10}
            textAnchor="middle"
            fontSize="11"
            fontWeight={long && d.slice(5, 7) === '01' ? 600 : 400}
            fill={long && d.slice(5, 7) === '01' ? INK : '#7c7c7c'}
          >
            {tickLabel(d)}
          </text>
        ))}
    </svg>
  )
}

function movingAverage(values: number[], days: number) {
  return values.map((_, i) => {
    const win = values.slice(Math.max(0, i - days + 1), i + 1)
    return win.reduce((a, b) => a + b, 0) / win.length
  })
}

function chartFor(item: Item, lang: Lang) {
  if (item.key === 'nazziGsc') {
    const dates = gscDaily.map((r) => r.d)
    return {
      colors: [BLUE, PURPLE],
      kpiColors: [BLUE, PURPLE, INK, INK],
      plot: (
        <Plot
          dates={dates}
          lines={[
            { values: movingAverage(gscDaily.map((r) => r.c), 7), color: BLUE, axis: 'left' },
            { values: movingAverage(gscDaily.map((r) => r.i), 7), color: PURPLE, axis: 'right' },
          ]}
          left={{ max: 75, step: 15, color: BLUE }}
          right={{ max: 5000, step: 1000, color: PURPLE }}
          migration={NAZZI_MIGRATION}
          goLiveLabel={item.goLiveLabel}
          migrationLabel={item.migrationLabel}
          lang={lang}
          ariaLabel={item.title}
        />
      ),
    }
  }
  const dates = cuminiMonthly.map((r) => `${r[0]}-15`)
  return {
    colors: [INK, GREEN],
    kpiColors: [INK, GREEN, INK, INK],
    plot: (
      <Plot
        dates={dates}
        lines={[
          { values: cuminiMonthly.map((r) => r[1]), color: INK, axis: 'left' },
          { values: cuminiMonthly.map((r) => r[2]), color: GREEN, axis: 'left' },
        ]}
        left={{ max: 350, step: 50, color: '#7c7c7c' }}
        migration={CUMINI_MIGRATION}
        goLiveLabel={item.goLiveLabel}
        migrationLabel={item.migrationLabel}
        lang={lang}
        ariaLabel={item.title}
      />
    ),
  }
}

/** Results charts of the landing (two cards, same style as the case study chart). */
export default function ZlSeoCharts({ copy, lang }: { copy: ZlCopy['proof']['charts']; lang: Lang }) {
  return (
    <ZlRail wide className="flex flex-col gap-6">
      {copy.items.map((item) => {
        const { plot, colors, kpiColors } = chartFor(item, lang)
        return (
          <li key={item.key} className="list-none rounded-[24px] border border-black/[0.06] bg-white px-4 py-5 min-[810px]:px-12 min-[810px]:py-11">
            <h3 className="font-sans text-[1.15rem] font-bold leading-[1.15em] tracking-[-0.04em] text-np-dark min-[810px]:text-[1.9rem]">
              {item.title}
            </h3>
            <p className="mt-2 line-clamp-3 max-w-[860px] font-sans text-[11.5px] leading-[1.45em] tracking-[-0.01em] text-np-grey min-[810px]:line-clamp-none min-[810px]:text-[14px]">
              {item.subtitle}
            </p>
            <dl className="mt-4 grid grid-cols-2 gap-x-4 gap-y-3 min-[810px]:mt-6 min-[810px]:grid-cols-4 min-[810px]:gap-x-6 min-[810px]:gap-y-4">
              {item.kpis.map((kpi, i) => (
                <div key={kpi.label}>
                  <dt className="font-sans text-[12.5px] font-semibold tracking-[-0.02em] min-[810px]:text-[14px]" style={{ color: kpiColors[i] }}>
                    {kpi.label}
                  </dt>
                  <dd className="mt-1 font-sans text-[1.35rem] font-bold leading-[1em] tracking-[-0.05em] text-np-dark min-[810px]:text-[2.1rem]">
                    {kpi.value}
                  </dd>
                </div>
              ))}
            </dl>
            <div className="mt-4 min-[810px]:mt-6">{plot}</div>
            <div className="mt-3 flex flex-wrap items-center justify-between gap-x-6 gap-y-2">
              <div className="flex flex-wrap gap-5">
                {item.legend.map((label, i) => (
                  <span key={label} className="inline-flex items-center gap-2 font-sans text-[13px] font-medium text-np-dark">
                    <span className="inline-block h-[10px] w-[10px] rounded-full" style={{ backgroundColor: colors[i] }} />
                    {label}
                  </span>
                ))}
              </div>
              <Link href={item.href} className="font-sans text-[13px] font-semibold tracking-[-0.02em] text-np-dark underline underline-offset-4">
                {copy.caseLink} →
              </Link>
            </div>
          </li>
        )
      })}
    </ZlRail>
  )
}
