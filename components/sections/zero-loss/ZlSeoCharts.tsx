import Link from 'next/link'

import type { ZlCopy } from '@/content/zero-loss-migration'
import { CUMINI_GO_LIVE, NAZZI_GO_LIVE, cuminiTrailing, nazziGsc, nazziGscYoy } from '@/data/zero-loss/seo-charts'

type Item = ZlCopy['proof']['charts']['items'][number]
type Series = { values: number[]; color: string; width?: number; dashed?: boolean }

const W = 640
const H = 240
const PAD = { left: 36, right: 12, top: 18, bottom: 28 }
const MONTHS = {
  it: ['gen', 'feb', 'mar', 'apr', 'mag', 'giu', 'lug', 'ago', 'set', 'ott', 'nov', 'dic'],
  en: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
}

/**
 * Line chart for index series (100 = before the migration). Dates are only used
 * to place month ticks and the go live marker: values are already indexed.
 */
function IndexChart({
  dates,
  series,
  goLive,
  band,
  lang,
  labels,
  ariaLabel,
}: {
  dates: string[]
  series: Series[]
  goLive?: string
  band?: [string, string]
  lang: 'it' | 'en'
  labels: { goLive?: string; band?: string; baseline: string }
  ariaLabel: string
}) {
  const max = Math.max(...series.flatMap((s) => s.values)) * 1.1
  const stepY = max > 250 ? 100 : 50
  const plotW = W - PAD.left - PAD.right
  const plotH = H - PAD.top - PAD.bottom
  const x = (i: number) => PAD.left + (i / (dates.length - 1)) * plotW
  const y = (v: number) => PAD.top + plotH - (v / max) * plotH
  const idx = (d: string) => {
    const i = dates.findIndex((date) => date >= d)
    return i === -1 ? dates.length - 1 : i
  }
  const ticks = dates
    .map((d, i) => ({ d, i }))
    .filter(({ d, i }) => i === 0 || d.slice(0, 7) !== dates[i - 1].slice(0, 7))
  const every = Math.ceil(ticks.length / 8)
  const gx = goLive ? x(idx(goLive)) : null
  const labelLeft = gx !== null && gx > W * 0.7

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="h-auto w-full font-sans" role="img" aria-label={ariaLabel}>
      {band && (
        <g>
          <rect x={x(idx(band[0]))} y={PAD.top} width={Math.max(4, x(idx(band[1])) - x(idx(band[0])))} height={plotH} fill="#1dcc5d" fillOpacity="0.1" />
          <text x={x(idx(band[0])) + 4} y={PAD.top + plotH - 6} fontSize="9" fill="#139a45">
            {labels.band}
          </text>
        </g>
      )}
      {Array.from({ length: Math.floor(max / stepY) + 1 }, (_, k) => k * stepY).map((v) => (
        <g key={v}>
          <line x1={PAD.left} x2={W - PAD.right} y1={y(v)} y2={y(v)} stroke={v === 100 ? '#9AA0A6' : '#ECEDEF'} strokeDasharray={v === 100 ? '4 4' : undefined} />
          <text x={PAD.left - 6} y={y(v) + 3} textAnchor="end" fontSize="9" fill="#9AA0A6">
            {v}
          </text>
        </g>
      ))}
      <text x={W - PAD.right} y={y(100) - 5} textAnchor="end" fontSize="9" fill="#80868B">
        {labels.baseline}
      </text>
      {gx !== null && (
        <g>
          <line x1={gx} x2={gx} y1={PAD.top} y2={PAD.top + plotH} stroke="#121212" strokeDasharray="3 3" />
          <text x={labelLeft ? gx - 5 : gx + 5} y={PAD.top + 10} textAnchor={labelLeft ? 'end' : 'start'} fontSize="10" fontWeight="600" fill="#121212">
            {labels.goLive}
          </text>
        </g>
      )}
      {series.map((s, k) => (
        <polyline
          key={k}
          fill="none"
          stroke={s.color}
          strokeWidth={s.width ?? 2}
          strokeDasharray={s.dashed ? '5 4' : undefined}
          strokeLinejoin="round"
          points={s.values.map((v, i) => `${x(i).toFixed(1)},${y(v).toFixed(1)}`).join(' ')}
        />
      ))}
      {ticks
        .filter((_, k) => k % every === 0)
        .map(({ d, i }) => (
          <text key={d} x={x(i)} y={H - 8} textAnchor="middle" fontSize="9" fill="#80868B">
            {MONTHS[lang][Number(d.slice(5, 7)) - 1]}
            {d.slice(5, 7) === '01' ? ` ${d.slice(2, 4)}` : ''}
          </text>
        ))}
    </svg>
  )
}

function chartFor(item: Item, lang: 'it' | 'en', copy: ZlCopy['proof']['charts']) {
  const labels = { goLive: copy.goLiveLabel, baseline: item.baseline ?? copy.baselineLabel }
  if (item.key === 'nazziGsc') {
    return {
      colors: ['#4793F0', '#5E3FBE'],
      chart: (
        <IndexChart
          dates={nazziGsc.map((r) => r[0])}
          series={[
            { values: nazziGsc.map((r) => r[1]), color: '#4793F0' },
            { values: nazziGsc.map((r) => r[2]), color: '#5E3FBE' },
          ]}
          goLive={NAZZI_GO_LIVE}
          lang={lang}
          labels={labels}
          ariaLabel={item.title}
        />
      ),
    }
  }
  if (item.key === 'nazziGscYoy') {
    return {
      colors: ['#B9BDC3', '#4793F0'],
      chart: (
        <IndexChart
          dates={nazziGscYoy.map((r) => r[0])}
          series={[
            { values: nazziGscYoy.map((r) => r[1]), color: '#B9BDC3', dashed: true },
            { values: nazziGscYoy.map((r) => r[2]), color: '#4793F0', width: 2.5 },
          ]}
          lang={lang}
          labels={labels}
          ariaLabel={item.title}
        />
      ),
    }
  }
  return {
    colors: ['#121212'],
    chart: (
      <IndexChart
        dates={cuminiTrailing.map((r) => `${r[0]}-01`)}
        series={[{ values: cuminiTrailing.map((r) => r[1]), color: '#121212', width: 2.5 }]}
        goLive={`${CUMINI_GO_LIVE}-01`}
        lang={lang}
        labels={labels}
        ariaLabel={item.title}
      />
    ),
  }
}

/** Results charts of the landing: real client data, indexed (no absolute figures). */
export default function ZlSeoCharts({ copy, lang }: { copy: ZlCopy['proof']['charts']; lang: 'it' | 'en' }) {
  return (
    <div className="flex flex-col gap-6">
      {copy.items.map((item) => {
        const { chart, colors } = chartFor(item, lang, copy)
        return (
          <article key={item.key} className="rounded-[16px] border border-black/[0.06] bg-white p-5 min-[810px]:p-7">
            <span className="inline-flex rounded-pill bg-np-card-soft px-3 py-[5px] font-sans text-[12px] font-semibold tracking-[-0.02em] text-np-dark">
              {item.brand}
            </span>
            <h3 className="mt-3 font-display text-[1.3rem] font-semibold leading-[1.2em] tracking-[-0.04em] text-np-dark min-[810px]:text-[1.6rem]">
              {item.title}
            </h3>
            <dl className="mt-5 grid grid-cols-3 gap-3">
              {item.kpis.map((kpi) => (
                <div key={kpi.label} className="border-l-2 border-[#1dcc5d] pl-3">
                  <dt className="sr-only">{kpi.label}</dt>
                  <dd className="font-display text-[1.5rem] font-semibold leading-[1em] tracking-[-0.05em] text-np-dark min-[810px]:text-[2rem]">
                    {kpi.value}
                  </dd>
                  <dd className="mt-1 font-sans text-[12px] font-medium leading-[1.35em] tracking-[-0.02em] text-np-grey min-[810px]:text-[13px]">
                    {kpi.label}
                  </dd>
                </div>
              ))}
            </dl>
            <div className="mt-5">{chart}</div>
            <div className="mt-2 flex flex-wrap items-center justify-between gap-x-6 gap-y-2">
              <div className="flex flex-wrap gap-4">
                {item.legend.map((label, i) => (
                  <span key={label} className="inline-flex items-center gap-2 font-sans text-[12px] font-medium text-np-text">
                    <span className="inline-block h-[3px] w-4 rounded-full" style={{ backgroundColor: colors[i] }} />
                    {label}
                  </span>
                ))}
              </div>
              <Link href={item.href} className="font-sans text-[13px] font-semibold tracking-[-0.02em] text-np-dark underline underline-offset-4">
                {copy.caseLink} →
              </Link>
            </div>
            <p className="mt-2 font-sans text-[12px] leading-[1.45em] tracking-[-0.01em] text-np-grey">{item.note}</p>
          </article>
        )
      })}
    </div>
  )
}
