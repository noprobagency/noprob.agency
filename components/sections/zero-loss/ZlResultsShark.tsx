import type { ZlCopy } from '@/content/zero-loss-migration'

/** Simple shark fin over a waterline, brand green. */
function SharkFin() {
  return (
    <svg width="56" height="40" viewBox="0 0 56 40" fill="none" aria-hidden className="shrink-0">
      <path d="M10 31 C18 24 22 12 30 3 C31 13 35 23 44 31 Z" fill="#1dcc5d" />
      <path d="M2 33 C8 29 14 37 20 33 S32 29 38 33 S48 37 54 33" stroke="#1dcc5d" strokeOpacity="0.55" strokeWidth="2.4" strokeLinecap="round" />
    </svg>
  )
}

/**
 * "Results Shark" block between the deliverables and the calendar: why 14 days
 * is possible (a whole team, one specialist per area, all in parallel).
 */
export default function ZlResultsShark({ copy }: { copy: ZlCopy['shark'] }) {
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
                <SharkFin />
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
