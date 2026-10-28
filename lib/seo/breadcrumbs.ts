import { getDictionary, type Locale } from '@/lib/i18n'
import { ROUTE_PATHS, type RouteKey } from '@/lib/i18n/routes'
import { absoluteUrl } from '@/lib/utils'

export type BreadcrumbItem = { name: string; path: string }

/** schema.org BreadcrumbList with absolute URLs (same base URL as `buildMetadata`). */
export function breadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  }
}

/**
 * Route whose navbar entry carries the breadcrumb label. The migration page
 * is labelled like the navbar item that points to the Sprint.
 */
const NAV_LABEL_ROUTE: Partial<Record<RouteKey, RouteKey>> = {
  aiAccelerator: 'aiAccelerator',
  useCases: 'useCases',
  blog: 'blog',
  sviluppoShopify: 'sviluppoShopify',
  dataDrivenTeam: 'dataDrivenTeam',
  migrazioneShopify: 'zeroLossMigration',
  zeroLossMigration: 'zeroLossMigration',
  contacts: 'contacts',
  about: 'about',
}

/** Breadcrumb entry for a fixed route: name from the navbar labels, path from the route map. */
export function routeCrumb(key: RouteKey, locale: Locale): BreadcrumbItem {
  const nav = getDictionary(locale).navbar
  const labelRoute = NAV_LABEL_ROUTE[key]
  const labelPath = labelRoute ? ROUTE_PATHS[labelRoute][locale] : undefined
  const entry = [...nav.navLinks, ...nav.serviceItems].find((e) => e.href === labelPath)
  if (!entry) throw new Error(`No navbar label for route "${key}" (${locale})`)
  return { name: entry.label, path: ROUTE_PATHS[key][locale] }
}

export function homeCrumb(locale: Locale): BreadcrumbItem {
  return { name: getDictionary(locale).navbar.homeLabel, path: ROUTE_PATHS.home[locale] }
}

/** Home > section (a fixed route). */
export function pageBreadcrumbJsonLd(key: RouteKey, locale: Locale) {
  return breadcrumbJsonLd([homeCrumb(locale), routeCrumb(key, locale)])
}

/** Home > section > detail page (case study or article). */
export function detailBreadcrumbJsonLd(
  section: RouteKey,
  locale: Locale,
  detail: BreadcrumbItem
) {
  return breadcrumbJsonLd([homeCrumb(locale), routeCrumb(section, locale), detail])
}
