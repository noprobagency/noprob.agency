import SearchConsoleCharts from '@/components/sections/SearchConsoleCharts'
import Testimonials from '@/components/sections/Testimonials'
import type { Locale } from '@/lib/i18n'
import type { ZlCopy } from '@/content/zero-loss-migration'
import { isPlaceholderToken, renderCopy } from './Placeholder'
import { ZL_DEMO_DASHBOARD_URL } from '@/content/zero-loss-migration'
import ZlDashboardLink from './ZlDashboardLink'

function Metric({ label, note, before, after, beforeLabel, afterLabel }: {
  label: string
  note?: string
  before: string
  after: string
  beforeLabel: string
  afterLabel: string
}) {
  return (
    <div className="border-t border-black/[0.06] pt-3">
      <p className="font-sans text-[12px] font-bold uppercase tracking-[0.06em] text-np-grey">
        {label}
        {note && <span className="ml-1 font-medium normal-case tracking-[-0.02em]">({note})</span>}
      </p>
      <div className="mt-1 grid grid-cols-2 gap-3">
        <p className="font-sans text-[14px] font-medium tracking-[-0.02em] text-np-text">
          <span className="mr-1 text-[11px] text-np-grey">{beforeLabel}</span>
          <span className="font-semibold">{renderCopy(before)}</span>
        </p>
        <p className="font-sans text-[14px] font-medium tracking-[-0.02em] text-np-text">
          <span className="mr-1 text-[11px] text-np-grey">{afterLabel}</span>
          <span className="font-semibold">{renderCopy(after)}</span>
        </p>
      </div>
    </div>
  )
}

/**
 * Section 9 (#prove): Search Console charts reused as they are on
 * /shopify-migration, the before/after gallery, the demo dashboard link and
 * the testimonial wall (existing two + hidden slots for the next ones).
 */
export default function ZlProof({ locale, copy }: { locale: Locale; copy: ZlCopy['proof'] }) {
  const g = copy.gallery
  const visibleTestimonials = copy.testimonials.filter((t) => !t.hidden)
  // The before/after gallery stays hidden until every Cumini value is confirmed.
  const showGallery = !Object.values(g.cumini).some(isPlaceholderToken)

  return (
    <section id="prove" className="scroll-mt-20 pt-20 min-[810px]:pt-28">
      <div className="container-noprob">
        <h2 className="text-np-h2 max-w-[820px] text-np-dark">{copy.h2}</h2>
      </div>

      {/* Block A: Search Console charts, unchanged */}
      <SearchConsoleCharts locale={locale} />

      <div className="container-noprob mt-16">
        {/* Block B: before/after gallery */}
        {showGallery && (
        <>
        <h3 className="font-display text-[1.5rem] font-semibold leading-[1.2em] tracking-[-0.05em] text-np-dark min-[810px]:text-[1.9rem]">
          {copy.galleryTitle}
        </h3>
        <ul className="mt-6 grid gap-4 min-[810px]:grid-cols-3">
          <li className="section-card !gap-3">
            <div className="flex w-full items-center justify-between">
              <span className="font-sans text-[18px] font-bold tracking-[-0.03em] text-np-dark">{g.cumini.brand}</span>
              <span className="font-sans text-[12px] font-medium tracking-[-0.02em] text-np-grey">
                {renderCopy(g.cumini.from)} → Shopify
              </span>
            </div>
            <p className="font-sans text-[13px] font-medium tracking-[-0.02em] text-np-grey">
              {g.goLiveLabel}: <span className="font-semibold text-np-text">{renderCopy(g.cumini.goLive)}</span>
            </p>
            <Metric label={g.clicksLabel} note={g.clicksNote} before={g.cumini.clicksBefore} after={g.cumini.clicksAfter} beforeLabel={g.beforeLabel} afterLabel={g.afterLabel} />
            <Metric label={g.lcpLabel} note={g.lcpNote} before={g.cumini.lcpBefore} after={g.cumini.lcpAfter} beforeLabel={g.beforeLabel} afterLabel={g.afterLabel} />
            <div className="w-full border-t border-black/[0.06] pt-3">
              <p className="font-sans text-[12px] font-bold uppercase tracking-[0.06em] text-np-grey">{g.offlineLabel}</p>
              <p className="mt-1 font-display text-[2rem] font-semibold leading-[1em] tracking-[-0.05em] text-np-dark">{g.cumini.offline}</p>
            </div>
          </li>
          {Array.from({ length: Math.min(g.skeletons, 2) }).map((_, i) => (
            <li
              key={i}
              aria-hidden
              className="flex flex-col gap-4 rounded-card border-2 border-dashed border-np-border p-6"
            >
              <span className="inline-flex w-fit rounded-pill bg-white px-3 py-[6px] font-serif text-[13px] italic tracking-[-0.02em] text-np-grey">
                {g.skeletonLabel}
              </span>
              <span className="block h-[10px] w-2/5 rounded-full bg-black/[0.08]" />
              <span className="block h-[8px] w-3/5 rounded-full bg-black/[0.06]" />
              <span className="mt-2 block h-[8px] w-1/2 rounded-full bg-black/[0.06]" />
              <span className="block h-[8px] w-2/3 rounded-full bg-black/[0.06]" />
              <span className="mt-2 block h-[24px] w-1/4 rounded-[6px] bg-black/[0.06]" />
            </li>
          ))}
        </ul>
        </>
        )}

        {/* Block C: demo dashboard */}
        {ZL_DEMO_DASHBOARD_URL && (
          <div className="mt-8">
            <ZlDashboardLink label={copy.dashboardCta} position="proof" />
          </div>
        )}

        {/* Block D: testimonials (same card as /shopify-migration) */}
        <Testimonials
          locale={locale}
          heading={copy.testimonialsHeading}
          items={visibleTestimonials}
          tone="light"
          className="mt-16 w-full"
        />
      </div>
    </section>
  )
}
