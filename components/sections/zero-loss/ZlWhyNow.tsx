import type { ZlCopy } from '@/content/zero-loss-migration'
import ZlCta from './ZlCta'

type Source = { label: string; href: string }

function SourceLinks({ label, sources, className }: { label: string; sources: Source[]; className: string }) {
  return (
    <p className={className}>
      {label}:{' '}
      {sources.map((s, j) => (
        <span key={s.href + j}>
          {j > 0 && ', '}
          <a href={s.href} target="_blank" rel="noopener noreferrer" className="underline transition-opacity hover:opacity-70">
            {s.label}
          </a>
        </span>
      ))}
    </p>
  )
}

/**
 * Section 8 (not in Fletch), the scarcity block: the market is moving to
 * Shopify (black band with big sourced numbers), the same job at two speeds
 * (old platform vs Shopify + AI), the three agentic-commerce fact cards and a
 * "the sooner you start" CTA. No source, no number: see docs/dati-verificati.md.
 */
export default function ZlWhyNow({ copy }: { copy: ZlCopy['whyNow'] }) {
  return (
    <section className="pt-20 min-[810px]:pt-28">
      <div className="container-noprob">
        <div className="max-w-[900px]">
          <span className="np-eyebrow">{copy.eyebrow}</span>
          <h2 className="mt-5 text-np-h2 text-np-dark">{copy.h2}</h2>
          <p className="mt-5 max-w-[820px] font-sans text-[17px] font-medium leading-[1.5em] tracking-[-0.02em] text-np-text">{copy.paragraph}</p>
        </div>

        {/* The market is moving: big numbers */}
        <ol data-header-theme="dark" className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-card bg-white/10 min-[600px]:grid-cols-2 lg:grid-cols-4">
          {copy.stats.map((stat) => (
            <li key={stat.value} className="flex flex-col gap-3 bg-np-dark px-6 py-7 min-[810px]:px-7 min-[810px]:py-9">
              <span className="font-display text-[2.8rem] font-semibold leading-[1em] tracking-[-0.06em] text-[#1dcc5d] min-[810px]:text-[3.4rem]">
                {stat.value}
              </span>
              <p className="font-sans text-[15px] font-medium leading-[1.45em] tracking-[-0.02em] text-white/85">{stat.label}</p>
              <SourceLinks
                label={copy.sourceLabel}
                sources={[stat.source]}
                className="mt-auto pt-2 font-sans text-[12px] font-medium tracking-[-0.02em] text-white/50"
              />
            </li>
          ))}
        </ol>

        {/* Same job, two speeds */}
        <div className="section-card mt-4 !gap-0 !p-0">
          <div className="hidden w-full grid-cols-[1.1fr_1fr_1fr] border-b border-black/[0.06] px-6 py-4 min-[810px]:grid">
            <h3 className="font-sans text-[18px] font-bold tracking-[-0.03em] text-np-dark">{copy.race.title}</h3>
            <span className="self-center font-sans text-[12px] font-bold uppercase tracking-[0.06em] text-np-grey">{copy.race.colOld}</span>
            <span className="self-center font-sans text-[12px] font-bold uppercase tracking-[0.06em] text-[#139a45]">{copy.race.colNew}</span>
          </div>
          <h3 className="w-full border-b border-black/[0.06] px-6 py-4 font-sans text-[18px] font-bold tracking-[-0.03em] text-np-dark min-[810px]:hidden">
            {copy.race.title}
          </h3>
          <ul className="w-full divide-y divide-black/[0.06]">
            {copy.race.rows.map((row) => (
              <li key={row.task} className="grid gap-2 px-6 py-4 min-[810px]:grid-cols-[1.1fr_1fr_1fr] min-[810px]:items-center min-[810px]:gap-4">
                <span className="font-sans text-[16px] font-bold tracking-[-0.03em] text-np-dark">{row.task}</span>
                <span className="flex items-start gap-2 font-sans text-[14px] font-medium leading-[1.45em] tracking-[-0.02em] text-np-grey">
                  <Mark kind="old" />
                  <span>
                    <span className="sr-only min-[810px]:hidden">{copy.race.colOld}: </span>
                    {row.old}
                  </span>
                </span>
                <span className="flex items-start gap-2 font-sans text-[14px] font-semibold leading-[1.45em] tracking-[-0.02em] text-np-dark">
                  <Mark kind="new" />
                  <span>
                    <span className="sr-only min-[810px]:hidden">{copy.race.colNew}: </span>
                    {row.now}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* AI commerce is born on Shopify */}
        <h3 className="mt-12 font-sans text-[20px] font-bold tracking-[-0.03em] text-np-dark min-[810px]:text-[22px]">{copy.cardsTitle}</h3>
        <ol className="mt-5 grid gap-4 min-[810px]:grid-cols-3">
          {copy.cards.map((card, i) => (
            <li key={i} className="section-card !gap-4">
              <span className="font-display text-[2rem] font-semibold leading-[1em] tracking-[-0.05em] text-np-grey">0{i + 1}</span>
              <p className="font-sans text-[15px] font-medium leading-[1.55em] tracking-[-0.02em] text-np-text">{card.text}</p>
              <SourceLinks
                label={copy.sourceLabel}
                sources={card.sources}
                className="mt-auto font-sans text-[12px] font-medium tracking-[-0.02em] text-np-grey"
              />
            </li>
          ))}
        </ol>

        <div className="mt-10 flex flex-col items-start gap-5 min-[810px]:flex-row min-[810px]:items-center min-[810px]:justify-between min-[810px]:gap-10">
          <p className="max-w-[760px] font-display text-[1.4rem] font-semibold leading-[1.25em] tracking-[-0.04em] text-np-dark min-[810px]:text-[1.8rem]">
            {copy.closing}
          </p>
          <ZlCta label={copy.cta} position="whynow" />
        </div>
      </div>
    </section>
  )
}

function Mark({ kind }: { kind: 'old' | 'new' }) {
  return kind === 'new' ? (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden className="mt-[1px] shrink-0">
      <circle cx="12" cy="12" r="10" fill="#1dcc5d" />
      <path d="M7.5 12.5l3 3 6-6" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ) : (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden className="mt-[1px] shrink-0">
      <circle cx="12" cy="12" r="10" fill="#e9e6e6" />
      <path d="M9 9l6 6M15 9l-6 6" stroke="#9a9a9a" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  )
}
