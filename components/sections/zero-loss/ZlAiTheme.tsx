import type { ZlCopy } from '@/content/zero-loss-migration'
import ZlAiBadge from './ZlAiBadge'

/** Four-point sparkle, the same mark as the AI badge. */
function Spark({ className }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 16 16" className={className}>
      <path d="M8 1Q8.9 7.1 15 8Q8.9 8.9 8 15Q7.1 8.9 1 8Q7.1 7.1 8 1Z" fill="currentColor" />
    </svg>
  )
}

/** Speedometer at full throttle, electric blue: the "turbo" mark next to the badge. */
function TurboIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" aria-hidden className="shrink-0">
      <rect x="1" y="1" width="42" height="42" rx="12" fill="#7f9cff" fillOpacity="0.14" stroke="#7f9cff" strokeOpacity="0.6" />
      <path d="M11 29a11 11 0 1 1 22 0" stroke="#7f9cff" strokeWidth="2.6" strokeLinecap="round" />
      <path d="M22 29 L30 18" stroke="#ffffff" strokeWidth="2.6" strokeLinecap="round" />
      <circle cx="22" cy="29" r="2.4" fill="#ffffff" />
    </svg>
  )
}

/**
 * The "secret" block before the deliverables: the Custom AI theme and its
 * superpowers. Same dark card as ZlResultsFirst, in the electric blue of the
 * AI badge (#1f5bff / #7f9cff), with glows and a grid of power cards.
 */
export default function ZlAiTheme({ copy }: { copy: ZlCopy['aiTheme'] }) {
  // Two sentences, two lines from 810px: "Non un semplice redesign." / the claim.
  const cut = copy.h2.indexOf('. ')
  const lead = cut === -1 ? '' : copy.h2.slice(0, cut + 2)
  const rest = cut === -1 ? copy.h2 : copy.h2.slice(cut + 2)
  return (
    <section className="pt-14 min-[810px]:pt-28">
      <div className="container-noprob">
        <div
          data-header-theme="dark"
          className="relative overflow-clip rounded-card bg-[linear-gradient(135deg,#0b1020_0%,#0d1a4a_55%,#1638b8_130%)] px-5 py-7 shadow-[0_30px_80px_-30px_rgb(31_91_255/0.6)] min-[810px]:px-10 min-[810px]:py-10"
        >
          <div aria-hidden className="pointer-events-none absolute -right-24 -top-28 h-80 w-80 rounded-full bg-[#1f5bff]/35 blur-3xl" />
          <div aria-hidden className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-[#7f9cff]/15 blur-3xl" />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgb(127_156_255/0.07)_1px,transparent_1px),linear-gradient(90deg,rgb(127_156_255/0.07)_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:radial-gradient(ellipse_at_top_right,black,transparent_70%)]"
          />

          <div className="relative">
            <div className="flex items-center gap-3">
              <TurboIcon />
              <ZlAiBadge label={copy.label} />
            </div>
            <h2 className="mt-4 max-w-[900px] font-display text-[1.8rem] font-semibold leading-[1.08em] tracking-[-0.05em] text-white min-[810px]:text-[2.6rem]">
              {lead}
              <span className="min-[810px]:block lg:whitespace-nowrap">{rest}</span>
            </h2>
            <p className="mt-3 max-w-[720px] font-sans text-[15px] font-medium leading-[1.55em] tracking-[-0.02em] text-white/75 min-[810px]:text-[17px]">
              {copy.paragraph}
            </p>

            <ul className="mt-6 grid gap-3 min-[600px]:grid-cols-2 lg:grid-cols-3 min-[810px]:mt-8">
              {copy.powers.map((power) => (
                <li
                  key={power.title}
                  className="rounded-[14px] border border-[#7f9cff]/25 bg-white/[0.04] p-4 shadow-[inset_0_1px_0_rgb(255_255_255/0.06)] backdrop-blur-sm"
                >
                  <p className="flex items-center gap-2 font-sans text-[15px] font-bold tracking-[-0.03em] text-white min-[810px]:text-[16px]">
                    <Spark className="h-[14px] w-[14px] shrink-0 text-[#7f9cff] drop-shadow-[0_0_6px_#7f9cff]" />
                    {power.title}
                  </p>
                  <p className="mt-[6px] font-sans text-[14px] font-medium leading-[1.45em] tracking-[-0.02em] text-white/70">{power.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
