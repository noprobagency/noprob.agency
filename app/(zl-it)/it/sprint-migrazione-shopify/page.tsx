import type { Metadata } from 'next'

import ZeroLossPage from '@/components/sections/zero-loss/ZeroLossPage'
import { buildZeroLossMetadata } from '@/lib/zero-loss/metadata'

const locale = 'it' as const

export async function generateMetadata(): Promise<Metadata> {
  return buildZeroLossMetadata(locale)
}

export default function ZeroLossMigrationPageIt() {
  return <ZeroLossPage locale={locale} />
}
