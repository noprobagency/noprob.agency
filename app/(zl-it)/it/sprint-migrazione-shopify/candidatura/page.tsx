import type { Metadata } from 'next'

import ZeroLossApplyPage from '@/components/sections/zero-loss/ZeroLossApplyPage'
import { buildZeroLossApplyMetadata } from '@/lib/zero-loss/metadata'

const locale = 'it' as const

export async function generateMetadata(): Promise<Metadata> {
  return buildZeroLossApplyMetadata(locale)
}

export default function ZeroLossApplyPageIt() {
  return <ZeroLossApplyPage locale={locale} />
}
