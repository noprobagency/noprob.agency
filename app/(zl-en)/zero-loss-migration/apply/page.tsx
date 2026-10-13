import type { Metadata } from 'next'

import ZeroLossApplyPage from '@/components/sections/zero-loss/ZeroLossApplyPage'
import { buildZeroLossApplyMetadata } from '@/lib/zero-loss/metadata'

const locale = 'en' as const

export async function generateMetadata(): Promise<Metadata> {
  return buildZeroLossApplyMetadata(locale)
}

export default function ZeroLossApplyPageEn() {
  return <ZeroLossApplyPage locale={locale} />
}
