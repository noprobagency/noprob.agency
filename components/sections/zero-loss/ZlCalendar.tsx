import type { ZlCopy } from '@/content/zero-loss-migration'
import { renderCopy } from './Placeholder'
import ZlRail from './ZlRail'
import ZlDashboardLink from './ZlDashboardLink'
import type { Locale } from '@/lib/i18n'

const WEEK_ACCENTS = ['bg-np-mark-green', 'bg-[#dbe9f7]'] as const

/**
 * Section 6, Fletch "Here's exactly what the sprint looks like": pre-work
 * two columns, then one card per week with a row per day (duration only
 * where the client is involved, purple pill linking to the deliverable completed
 * that day), then the "after the sprint" rows.
 */
export default function ZlCalendar({
  copy,
  deliverables,
  locale,
}: {
  copy: ZlCopy['calendar']
  deliverables: ZlCopy['deliverables']
  locale: Locale
}) {
  return (
    <section className="pt-14 min-[810px]:pt-28">
      <div className="container-noprob">
        <h2 className="text-np-h2 max-w-[820px] text-np-dark">{copy.h2}</h2>

        {/* Pre-work */}
        <div className="section-card mt-6 !gap-4 min-[810px]:mt-10 min-[810px]:!gap-5">
          <span className="np-eyebrow">{copy.prework.label}</span>
          <div className="grid w-full gap-4 min-[810px]:grid-cols-2 min-[810px]:gap-10">
            <div>
              <h3 className="font-sans text-[16px] font-bold tracking-[-0.03em] text-np-dark min-[810px]:text-[18px]">{copy.prework.yourTeamTitle}</h3>
              <p className="mt-1 font-sans text-[14px] min-[810px]:mt-2 min-[810px]:text-[15px] font-medium leading-[1.55em] tracking-[-0.02em] text-np-text">{copy.prework.yourTeam}</p>
            </div>
            <div>
              <h3 className="font-sans text-[16px] font-bold tracking-[-0.03em] text-np-dark min-[810px]:text-[18px]">{copy.prework.ourTeamTitle}</h3>
              <p className="mt-1 font-sans text-[14px] min-[810px]:mt-2 min-[810px]:text-[15px] font-medium leading-[1.55em] tracking-[-0.02em] text-np-text">{copy.prework.ourTeam}</p>
            </div>
          </div>
        </div>

        {/* Weeks */}
        <div className="mt-4 flex flex-col gap-4">
          {copy.weeks.map((week, wi) => (
            <div key={week.badge} className="section-card !gap-0 !p-0">
              <div className="flex w-full flex-wrap items-center gap-3 border-b border-black/[0.06] px-6 py-4">
                <span className={`inline-flex rounded-pill px-3 py-[6px] font-serif text-[14px] italic tracking-[-0.02em] text-np-dark ${WEEK_ACCENTS[wi]}`}>
                  {week.badge}
                </span>
                <h3 className="font-sans text-[18px] font-bold tracking-[-0.03em] text-np-dark">{week.title}</h3>
              </div>
              <ZlRail
                as="ol"
                inset
                className="grid w-full min-[810px]:divide-y min-[810px]:divide-black/[0.06] lg:grid-cols-5 lg:divide-x lg:divide-y-0"
              >
                {week.days.map((day) => (
                  <li
                    key={day.day}
                    className="flex flex-col gap-1 rounded-[14px] border border-black/[0.08] bg-np-bg/60 p-4 min-[810px]:rounded-none min-[810px]:border-0 min-[810px]:bg-transparent min-[810px]:px-6 min-[810px]:py-4 lg:px-5 lg:py-5"
                  >
                    <span className="font-sans text-[12px] font-bold uppercase tracking-[0.06em] text-np-grey">{day.day}</span>
                    <h4 className="font-sans text-[16px] font-bold leading-[1.3em] tracking-[-0.03em] text-np-dark">{day.title}</h4>
                    {day.deliverables?.map((n) => (
                      <a
                        key={n}
                        href={`#deliverable-${n}`}
                        className="mt-1 flex w-fit flex-col gap-[2px] rounded-[8px] bg-np-mark-purple px-[10px] py-[6px] font-sans text-[13px] font-semibold leading-[1.25em] tracking-[-0.02em] text-np-dark transition-opacity hover:opacity-80"
                      >
                        <span className="text-[10.5px] font-bold uppercase tracking-[0.06em] text-np-dark/70">
                          {deliverables.labelPrefix} {n}
                        </span>
                        {deliverables.items[n - 1]?.short}
                      </a>
                    ))}
                    {day.duration && (
                      <span className="inline-flex w-fit items-center gap-1 font-sans text-[12px] font-semibold tracking-[-0.02em] text-np-grey">
                        <ClockIcon />
                        {day.duration} {copy.durationLabel}
                      </span>
                    )}
                    <p className="mt-1 font-sans text-[14px] font-medium leading-[1.5em] tracking-[-0.02em] text-np-grey">
                      {renderCopy(day.detail)}
                    </p>
                  </li>
                ))}
              </ZlRail>
            </div>
          ))}

          {/* After the sprint */}
          <div className="section-card !gap-0 !p-0">
            <div className="w-full border-b border-black/[0.06] px-6 py-4">
              <h3 className="font-sans text-[18px] font-bold tracking-[-0.03em] text-np-dark">{copy.after.title}</h3>
            </div>
            <ol className="grid w-full divide-y divide-black/[0.06] min-[810px]:grid-cols-3 min-[810px]:divide-x min-[810px]:divide-y-0">
              {copy.after.rows.map((row) => (
                <li key={row.phase} className="flex flex-col gap-1 px-6 py-4 min-[810px]:py-5">
                  <span className="font-sans text-[12px] font-bold uppercase tracking-[0.06em] text-np-grey">{row.phase}</span>
                  <h4 className="font-sans text-[16px] font-bold leading-[1.3em] tracking-[-0.03em] text-np-dark">{row.title}</h4>
                  <p className="mt-1 font-sans text-[14px] font-medium leading-[1.5em] tracking-[-0.02em] text-np-grey">{row.detail}</p>
                </li>
              ))}
              <li className="flex flex-col gap-1 px-6 py-4 min-[810px]:py-5">
                <span className="font-sans text-[12px] font-bold uppercase tracking-[0.06em] text-np-grey">{copy.after.dashboard.phase}</span>
                <h4 className="font-sans text-[16px] font-bold leading-[1.3em] tracking-[-0.03em] text-np-dark">{copy.after.dashboard.title}</h4>
                <p className="mt-1 font-sans text-[14px] font-medium leading-[1.5em] tracking-[-0.02em] text-np-grey">{copy.after.dashboard.detail}</p>
                <ZlDashboardLink label={copy.after.dashboard.cta} position="proof" locale={locale} className="mt-3 self-start" />
              </li>
            </ol>
          </div>
        </div>

        <p className="mt-8 font-display text-[1.3rem] font-semibold leading-[1.3em] tracking-[-0.04em] text-np-dark min-[810px]:text-[1.6rem]">
          {copy.closing}
        </p>
      </div>
    </section>
  )
}

function ClockIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" strokeLinecap="round" />
    </svg>
  )
}
