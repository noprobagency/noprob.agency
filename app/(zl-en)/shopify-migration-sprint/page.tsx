import type { Metadata } from 'next'

import ZeroLossPage from '@/components/sections/zero-loss/ZeroLossPage'
import { buildZeroLossMetadata } from '@/lib/zero-loss/metadata'

const locale = 'en' as const

export async function generateMetadata(): Promise<Metadata> {
  return buildZeroLossMetadata(locale)
}

export default function ZeroLossMigrationPage() {
  return <ZeroLossPage locale={locale} />
}
