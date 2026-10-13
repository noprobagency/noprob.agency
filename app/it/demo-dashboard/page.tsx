import type { Metadata } from 'next'
import DemoDashboard from '@/components/dashboard/DemoDashboard'

export const metadata: Metadata = {
  title: 'Dashboard Dimostrativa Giorno 1 | Shopify Launch Sprint',
  description: 'Dashboard di monitoraggio delle metriche chiave (MER, vendite nette, ROAS, CAC, retention) collegata dal Giorno 1 dello Shopify Launch Sprint.',
  robots: { index: false, follow: false },
}

export default function DemoDashboardPageIt() {
  return <DemoDashboard locale="it" />
}
