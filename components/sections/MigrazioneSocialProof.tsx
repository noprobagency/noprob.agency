import CaseStudy from '@/components/sections/CaseStudy'
import { type Locale } from '@/lib/i18n'

export default function MigrazioneSocialProof({ locale = 'it' }: { locale?: Locale }) {
  // Same case study block as the homepage: Cumini + Integratori Nazzi DTC cards.
  return <CaseStudy locale={locale} noPadding={true} compact={true} />
}
