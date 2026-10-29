import { ROUTE_PATHS, type RouteKey } from '@/lib/i18n/routes'

/**
 * Last substantial content change of the fixed pages (ISO date). Bump it when
 * the copy of a page changes, so `lastmod` in the sitemap means something
 * instead of moving at every deploy.
 */
export const CONTENT_LAST_MODIFIED = '2026-10-29'

export type RouteConfig = {
  key: RouteKey
  enPath: string
  itPath: string
  hasIt: boolean
}

/**
 * Fixed pages of the sitemap. No `priority` and no `changefreq`: Google ignores
 * both, and an honest `lastmod` is the only field that decides what gets recrawled.
 */
const ROUTE_DEFS: Array<{ key: RouteKey; hasIt: boolean }> = [
  { key: 'home', hasIt: true },
  { key: 'about', hasIt: true },
  { key: 'useCases', hasIt: true },
  { key: 'dataDrivenTeam', hasIt: true },
  { key: 'sviluppoShopify', hasIt: true },
  { key: 'migrazioneShopify', hasIt: true },
  { key: 'zeroLossMigration', hasIt: true },
  { key: 'aiAccelerator', hasIt: true },
  { key: 'blog', hasIt: true },
  { key: 'contacts', hasIt: true },
  { key: 'privacyPolicy', hasIt: true },
  { key: 'cookiePolicy', hasIt: true },
]

export const ROUTES: RouteConfig[] = ROUTE_DEFS.map((def) => ({
  ...def,
  enPath: ROUTE_PATHS[def.key].en,
  itPath: ROUTE_PATHS[def.key].it,
}))
