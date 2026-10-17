import Testimonials from '@/components/sections/Testimonials'
import type { Locale } from '@/lib/i18n'
import type { ZlCopy } from '@/content/zero-loss-migration'
import ZlSeoCharts from './ZlSeoCharts'

/**
 * Section 9 (#prove): real results of two migrations (Supplement DTC Nazzi from
 * WooCommerce, Cumini from a proprietary platform) as indexed charts, then the
 * testimonial wall. No absolute client figures on the page.
 */
export default function ZlProof({ locale, copy }: { locale: Locale; copy: ZlCopy['proof'] }) {
  const visibleTestimonials = copy.testimonials.filter((t) => !t.hidden)

  return (
    <section id="prove" className="scroll-mt-20 pt-14 min-[810px]:pt-28">
      <div className="container-noprob">
        <h2 className="text-np-h2 max-w-[820px] text-np-dark">{copy.h2}</h2>
        <p className="mt-3 max-w-[680px] font-sans text-[15px] min-[810px]:mt-4 min-[810px]:text-[17px] font-medium leading-[1.5em] tracking-[-0.02em] text-np-text">{copy.sub}</p>

        <div className="mt-6 min-[810px]:mt-10">
          <ZlSeoCharts copy={copy.charts} lang={locale === 'it' ? 'it' : 'en'} sideBySide />
        </div>

        <Testimonials
          locale={locale}
          heading={copy.testimonialsHeading}
          items={visibleTestimonials}
          tone="light"
          className="mt-12 w-full min-[810px]:mt-16"
        />
      </div>
    </section>
  )
}
