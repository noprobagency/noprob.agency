import type { Metadata } from 'next'
import DemoDashboard from '@/components/dashboard/DemoDashboard'

export const metadata: Metadata = {
  title: 'Day 1 Demo Dashboard | Shopify Launch Sprint',
  description: 'Key metrics monitoring dashboard (MER, net sales, ROAS, CAC, retention) connected from Day 1 of the Shopify Launch Sprint.',
  robots: { index: false, follow: false },
}

export default function DemoDashboardPageEn() {
  return <DemoDashboard locale="en" />
}
