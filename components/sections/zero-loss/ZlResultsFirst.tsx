import type { ZlCopy } from '@/content/zero-loss-migration'

/** Rising results chart with an arrow, brand green. */
function ResultsIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" aria-hidden className="shrink-0">
      <rect x="1" y="1" width="42" height="42" rx="12" fill="#1dcc5d" fillOpacity="0.12" stroke="#1dcc5d" strokeOpacity="0.5" />
      <path d="M11 30 L18 23 L23 27 L33 15" stroke="#1dcc5d" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M26 15 H33 V22" stroke="#1dcc5d" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

/**
 * Results-first block ("Ossessionati dai risultati") between the deliverables and the calendar: why 14 days
 * is possible (a whole team, one specialist per area, all in parallel).
 */
export default function ZlResultsFirst({ copy }: { copy: ZlCopy['resultsFirst'] }) {
  return (
    <section className="pt-14 min-[810px]:pt-28">
      <div className="container-noprob">
        <div
          data-header-theme="dark"
          className="relative overflow-clip rounded-card bg-np-dark px-5 py-8 min-[810px]:px-12 min-[810px]:py-14"
        >
          <div aria-hidden className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#1dcc5d]/10 blur-3xl" />
          <div className="relative grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-end lg:gap-14">
            <div>
              <div className="flex items-center gap-3">
                <ResultsIcon />
                <span className="inline-flex rounded-pill border border-[#1dcc5d]/50 px-3 py-[5px] font-sans text-[12px] font-bold uppercase tracking-[0.08em] text-[#1dcc5d]">
                  {copy.label}
                </span>
              </div>
              <h2 className="mt-5 font-display text-[1.8rem] font-semibold leading-[1.08em] tracking-[-0.05em] text-white min-[810px]:text-[2.6rem]">
                {copy.h2}
              </h2>
              <p className="mt-4 font-sans text-[15px] font-medium leading-[1.55em] tracking-[-0.02em] text-white/75 min-[810px]:text-[17px]">
                {copy.paragraph}
              </p>
            </div>
            <div>
              <ul className="grid grid-cols-2 gap-2">
                {copy.areas.map((area) => (
                  <li
                    key={area}
                    className="flex items-center gap-2 rounded-[12px] border border-white/10 bg-white/[0.04] px-3 py-3 font-sans text-[13px] font-semibold tracking-[-0.02em] text-white min-[810px]:text-[14px]"
                  >
                    <span aria-hidden className="h-[7px] w-[7px] shrink-0 rounded-full bg-[#1dcc5d] shadow-[0_0_10px_#1dcc5d]" />
                    {area}
                  </li>
                ))}
              </ul>
              <p className="mt-4 font-display text-[1.15rem] font-semibold tracking-[-0.04em] text-[#1dcc5d] min-[810px]:text-[1.3rem]">
                {copy.line}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
