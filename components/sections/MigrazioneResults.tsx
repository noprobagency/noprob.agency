import SectionLabel from '@/components/ui/SectionLabel'
import ZlSeoCharts from '@/components/sections/zero-loss/ZlSeoCharts'
import { type Locale } from '@/lib/i18n'
import { getMigrazioneCopy } from '@/lib/i18n/migrazione'
import { getZeroLossCopy } from '@/content/zero-loss-migration'

/**
 * Results of real migrations on the Shopify migration product page: the same two
 * charts as the Shopify Launch Sprint landing (Supplement DTC Nazzi Search
 * Console, Cumini sales index since 2023). Sources in docs/dati-verificati.md.
 */
export default function MigrazioneResults({ locale = 'it' }: { locale?: Locale }) {
  const c = getMigrazioneCopy(locale).charts
  const charts = getZeroLossCopy(locale).proof.charts

  return (
    <section className="pb-0 pt-[40px] min-[810px]:pt-[60px]">
      <div className="container-noprob">
        <div className="mx-auto mb-10 max-w-[680px] text-center">
          <SectionLabel>{c.label}</SectionLabel>
          <h2 className="mt-5 text-np-h2 text-center text-np-dark">
            {c.title1}
            <span className="font-serif italic">{c.titleEm}</span>
          </h2>
          <p className="mt-5 font-sans text-body-lg font-medium text-noprob-text">{c.subtitle}</p>
        </div>
        <div className="mx-auto max-w-[980px]">
          <ZlSeoCharts copy={charts} lang={locale === 'it' ? 'it' : 'en'} />
        </div>
      </div>
    </section>
  )
}
