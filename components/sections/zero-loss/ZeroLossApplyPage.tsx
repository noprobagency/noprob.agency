import Link from 'next/link'

import Footer from '@/components/layout/Footer'
import type { Locale } from '@/lib/i18n'
import { ROUTE_PATHS } from '@/lib/i18n/routes'
import { getZeroLossCopy } from '@/content/zero-loss-migration'

import ZlTracking from './ZlTracking'
import ZlNav from './ZlNav'
import ZlApplication from './ZlApplication'

/**
 * Application page of the Shopify Launch Sprint (/it/zero-loss-migration/candidatura,
 * /zero-loss-migration/apply): reached from every CTA of the landing. Same nav
 * without the CTA, the closing copy next to the 4-step form, minimal footer.
 */
export default function ZeroLossApplyPage({ locale }: { locale: Locale }) {
  const copy = getZeroLossCopy(locale)

  return (
    <>
      <ZlTracking locale={locale} page="apply" />
      <ZlNav locale={locale} copy={copy.nav} page="apply" />
      <main>
        <div className="container-noprob pt-8 min-[810px]:pt-12">
          <Link
            href={ROUTE_PATHS.zeroLossMigration[locale]}
            className="font-sans text-[14px] font-medium tracking-[-0.02em] text-np-grey hover:text-np-dark"
          >
            ← {copy.apply.back}
          </Link>
        </div>
        <ZlApplication locale={locale} copy={copy.finalCta} form={copy.form} mode="form" />
      </main>
      <Footer locale={locale} minimal />
    </>
  )
}
