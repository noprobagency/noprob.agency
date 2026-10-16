import type { Metadata } from 'next'

import ZeroLossThankYouPage from '@/components/sections/zero-loss/ZeroLossThankYouPage'
import { buildZeroLossThankYouMetadata } from '@/lib/zero-loss/metadata'

const locale = 'en' as const

export async function generateMetadata(): Promise<Metadata> {
  return buildZeroLossThankYouMetadata(locale)
}

export default function ZeroLossThankYouPageEn() {
  return <ZeroLossThankYouPage locale={locale} />
}
