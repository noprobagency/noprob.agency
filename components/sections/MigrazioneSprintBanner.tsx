import Link from 'next/link'

import { ZapIcon } from '@/components/sections/ai/PowerLayer'
import { type Locale } from '@/lib/i18n'
import { getMigrazioneCopy } from '@/lib/i18n/migrazione'
import { ROUTE_PATHS } from '@/lib/i18n/routes'

/** Spark positions (percent of the card), size and rotation, staggered flicker. */
const SPARKS = [
  { top: '12%', left: '6%', size: 18, r: '-12deg', delay: '0s' },
  { top: '70%', left: '3%', size: 12, r: '18deg', delay: '1.1s' },
  { top: '18%', left: '58%', size: 14, r: '8deg', delay: '0.6s' },
  { top: '8%', left: '88%', size: 22, r: '-20deg', delay: '1.7s' },
  { top: '62%', left: '94%', size: 14, r: '14deg', delay: '0.3s' },
  { top: '84%', left: '52%', size: 12, r: '-6deg', delay: '2s' },
]

/**
 * "AI powered" banner on the Shopify migration page: dark card with flickering
 * green sparks, the whole card links to the Shopify Launch Sprint landing.
 */
export default function MigrazioneSprintBanner({ locale = 'it' }: { locale?: Locale }) {
  const d = getMigrazioneCopy(locale).sprintBanner

  return (
    <section className="pt-[40px] min-[810px]:pt-[60px]">
      <div className="container-noprob">
        <Link
          href={ROUTE_PATHS.zeroLossMigration[locale]}
          data-tracking="migrazione_sprint_banner"
          data-header-theme="dark"
          className="group relative block overflow-clip rounded-[24px] bg-[#0b0d0c] px-6 py-9 transition-transform duration-300 hover:-translate-y-0.5 min-[810px]:px-14 min-[810px]:py-14"
        >
          {/* Glow + sparks */}
          <div aria-hidden className="pointer-events-none absolute -left-20 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-[#1dcc5d]/15 blur-3xl" />
          <div aria-hidden className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full bg-[#1dcc5d]/10 blur-3xl" />
          {SPARKS.map((s, i) => (
            <span
              key={i}
              aria-hidden
              className="np-spark pointer-events-none absolute text-[#1dcc5d]"
              style={{ top: s.top, left: s.left, animationDelay: s.delay, ['--r' as string]: s.r }}
            >
              <ZapIcon size={s.size} />
            </span>
          ))}

          <div className="relative grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:items-center lg:gap-14">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-pill border border-[#1dcc5d]/50 bg-[#1dcc5d]/10 px-3 py-[6px] font-sans text-[12px] font-bold uppercase tracking-[0.08em] text-[#1dcc5d]">
                <ZapIcon size={12} />
                {d.badge}
              </span>
              <h2 className="mt-5 font-display text-[1.9rem] font-semibold leading-[1.08em] tracking-[-0.05em] text-white min-[810px]:text-[2.8rem]">
                {d.title} <em className="font-serif font-normal italic text-[#1dcc5d]">{d.titleEm}</em>
              </h2>
              <p className="mt-4 max-w-[620px] font-sans text-[15px] font-medium leading-[1.55em] tracking-[-0.02em] text-white/75 min-[810px]:text-[17px]">
                {d.text}
              </p>
            </div>
            <div className="flex flex-col gap-5">
              <ul className="flex flex-col gap-2">
                {d.points.map((p) => (
                  <li
                    key={p}
                    className="flex items-center gap-2 rounded-[12px] border border-white/10 bg-white/[0.04] px-4 py-3 font-sans text-[14px] font-semibold tracking-[-0.02em] text-white"
                  >
                    <ZapIcon size={13} className="shrink-0 text-[#1dcc5d]" />
                    {p}
                  </li>
                ))}
              </ul>
              <span className="button-principal zl-cta self-start !bg-[#1dcc5d] !text-black group-hover:brightness-110">
                {d.cta} →
              </span>
            </div>
          </div>
        </Link>
      </div>
    </section>
  )
}
