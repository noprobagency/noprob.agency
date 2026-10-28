import Image from 'next/image'
import Link from 'next/link'

import TrustpilotBadge from '@/components/ui/TrustpilotBadge'
import { siteAssets } from '@/lib/site'
import type { Locale } from '@/lib/i18n'
import { getBlocchiCopy } from '@/lib/i18n/blocchi'
import { ROUTE_PATHS } from '@/lib/i18n/routes'

/**
 * Founder block: photo, name, short bio, Trustpilot badge with link.
 * - `sprint`: "Chi segue il tuo Sprint", before the FAQ of the Shopify Launch
 *   Sprint landing (a standalone landing: no link out except Trustpilot).
 * - `about`: "Chi c'è dietro noprob agency", on the About page, with a CTA to the Sprint.
 * Copy in `lib/i18n/blocchi.ts` (`founder`).
 */
export default function FounderBlock({
  variant,
  locale = 'en',
}: {
  variant: 'sprint' | 'about'
  locale?: Locale
}) {
  const founder = getBlocchiCopy(locale).founder
  const copy = variant === 'sprint' ? founder.sprint : founder.about
  const aboutCta = variant === 'about' ? founder.about.cta : null

  return (
    <section
      id={variant === 'sprint' ? 'chi-segue' : 'chi-ce-dietro'}
      className={variant === 'sprint' ? 'scroll-mt-20 pt-14 min-[810px]:pt-28' : 'py-[60px] min-[810px]:py-[80px]'}
    >
      <div className="container-noprob">
        <h2 className="text-np-h2 max-w-[820px] text-np-dark">{copy.heading}</h2>

        <article className="border-card-thick shadow-card mt-6 flex max-w-[900px] flex-col gap-5 rounded-card bg-noprob-card p-6 min-[810px]:mt-10 min-[810px]:flex-row min-[810px]:items-start min-[810px]:gap-8 min-[810px]:p-8">
          <div className="relative h-[96px] w-[96px] shrink-0 overflow-hidden rounded-full border-2 border-[#f0f0f0] min-[810px]:h-[120px] min-[810px]:w-[120px]">
            <Image src={siteAssets.heroAntonio} alt={founder.imageAlt} fill sizes="120px" className="object-cover" />
          </div>

          <div className="flex flex-col items-start gap-4">
            <div>
              <p className="font-sans text-[18px] font-semibold leading-[1.2em] tracking-[-0.03em] text-np-dark">
                {founder.name}
              </p>
              <p className="mt-1 font-sans text-[13px] font-medium tracking-[-0.02em] text-np-grey">{copy.role}</p>
            </div>
            <p className="font-sans text-[15px] font-medium leading-[1.7em] tracking-[-0.02em] text-noprob-text min-[810px]:text-[16px]">
              {copy.text}
            </p>
            <TrustpilotBadge locale={locale} />
            {aboutCta ? (
              <Link
                href={ROUTE_PATHS.zeroLossMigration[locale]}
                data-tracking="about_founder_sprint_cta"
                className="button-principal mt-1"
              >
                {aboutCta}
              </Link>
            ) : null}
          </div>
        </article>
      </div>
    </section>
  )
}
