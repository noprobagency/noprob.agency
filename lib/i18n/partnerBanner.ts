import type { Locale } from '@/lib/i18n'
import { AMBASSADOR_TIERS, ambassadorCommission, formatEur } from '@/lib/i18n/ambassador'

/** Lowest amount a partner earns per project: the commission on the first Sprint tier. */
export const PARTNER_MIN_EARNING = ambassadorCommission(AMBASSADOR_TIERS[0].price)

/** Copy of the reusable article banner that points agencies to the Ambassador page. */
export function getPartnerBannerCopy(locale: Locale) {
  const earning = formatEur(PARTNER_MIN_EARNING, locale)
  return locale === 'it'
    ? {
        eyebrow: 'Per agenzie e partner',
        heading: 'Hai clienti che devono passare a Shopify?',
        body: `Segnali lo store o rivendi la migrazione con il tuo marchio, e il lavoro lo facciamo noi. Guadagni da ${earning} a progetto.`,
        button: 'Scopri il programma Ambassador',
      }
    : {
        eyebrow: 'For agencies and partners',
        heading: 'Have clients who need to move to Shopify?',
        body: `Refer the store or resell the migration under your own brand, and we do the work. You earn from ${earning} per project.`,
        button: 'See the Ambassador program',
      }
}
