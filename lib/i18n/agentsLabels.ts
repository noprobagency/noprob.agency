import type { Locale } from '@/lib/i18n'

/**
 * Fixed labels of the AI agents landing that the main copy module
 * (`agentsEcommerce.ts`) does not carry: the three line labels of each
 * monitored area.
 */
export const AGENTS_MONITOR_LABELS: Record<Locale, { watches: string; flags: string; yourCall: string }> = {
  en: { watches: 'Watches', flags: 'Flags', yourCall: 'You decide' },
  it: { watches: 'Cosa guarda', flags: 'Cosa segnala', yourCall: 'Decidi tu' },
}
