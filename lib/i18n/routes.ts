import type { Locale } from '@/lib/i18n'
import { articles } from '@/data/articles'

export type RouteKey =
  | 'home'
  | 'about'
  | 'useCases'
  | 'dataDrivenTeam'
  | 'sviluppoShopify'
  | 'migrazioneShopify'
  | 'aiAccelerator'
  | 'aiThankYou'
  | 'ambassador'
  | 'zeroLossMigration'
  | 'zeroLossApply'
  | 'blog'
  | 'contacts'
  | 'thankYou'
  | 'privacyPolicy'
  | 'cookiePolicy'

export const ROUTE_PATHS: Record<RouteKey, { en: string; it: string }> = {
  home:             { en: '/',                   it: '/it' },
  about:            { en: '/about',              it: '/it/chi-siamo' },
  useCases:         { en: '/use-cases',          it: '/it/casi-studio' },
  dataDrivenTeam:   { en: '/data-driven-team',   it: '/it/team-ecommerce-dedicato' },
  sviluppoShopify:  { en: '/shopify-development', it: '/it/sviluppo-shopify' },
  migrazioneShopify: { en: '/shopify-migration', it: '/it/migrazione-shopify' },
  // Product name, same slug in both locales.
  aiAccelerator:    { en: '/ai-accelerator',     it: '/it/ai-accelerator' },
  // Booking step after a successful AI Accelerator application (noindex).
  aiThankYou:       { en: '/ai-accelerator/thank-you', it: '/it/ai-accelerator/grazie' },
  // Private ambassador playbook (noindex, not in the sitemap).
  ambassador:       { en: '/ambassador',         it: '/it/ambassador' },
  // Zero-Loss Migration Sprint landing (ads / cold email / ambassador traffic).
  // Product name, same slug in both locales. noindex + out of the sitemap until
  // LP_ZERO_LOSS_INDEX=true (see components/sections/zero-loss/README.md).
  zeroLossMigration: { en: '/zero-loss-migration', it: '/it/zero-loss-migration' },
  // Application form of the landing, reached from every CTA (always noindex).
  zeroLossApply:    { en: '/zero-loss-migration/apply', it: '/it/zero-loss-migration/candidatura' },
  blog:             { en: '/blog',               it: '/it/blog' },
  contacts:         { en: '/contacts',           it: '/it/contatti' },
  thankYou:         { en: '/thank-you',          it: '/it/grazie' },
  // In-house legal pages (copy in lib/i18n/legal.ts).
  privacyPolicy:    { en: '/privacy-policy',     it: '/it/privacy-policy' },
  cookiePolicy:     { en: '/cookie-policy',      it: '/it/cookie-policy' },
}

export function getRoutePath(key: RouteKey, locale: Locale): string {
  return ROUTE_PATHS[key][locale]
}

/**
 * Map a path in one locale to the equivalent path in the other locale.
 * Handles:
 *  - Fixed routes via lookup in `ROUTE_PATHS`.
 *  - Dynamic `/use-cases/[slug]` routes - slug is shared between locales.
 *  - Dynamic `/blog/[slug]` routes - slug differs per locale (article.slug for
 *    EN, article.slugIt for IT). The article data is consulted to map the
 *    current-locale slug to the alternate-locale slug.
 *  - Unknown paths fall back to the input path (no-op).
 */
export function getAlternateLocalePath(path: string, currentLocale: Locale): string {
  const altLocale: Locale = currentLocale === 'en' ? 'it' : 'en'

  // Fixed routes
  for (const paths of Object.values(ROUTE_PATHS)) {
    if (paths[currentLocale] === path) return paths[altLocale]
  }

  // Dynamic routes: use-cases (slug shared between locales)
  const useCasesCurrent = ROUTE_PATHS.useCases[currentLocale]
  const useCasesAlt = ROUTE_PATHS.useCases[altLocale]
  if (path.startsWith(useCasesCurrent + '/')) {
    return useCasesAlt + path.slice(useCasesCurrent.length)
  }

  // Dynamic routes: blog (per-locale slug - look up via articles data)
  const blogCurrent = ROUTE_PATHS.blog[currentLocale]
  const blogAlt = ROUTE_PATHS.blog[altLocale]
  if (path.startsWith(blogCurrent + '/')) {
    const currentSlug = path.slice(blogCurrent.length + 1)
    const article = articles.find((a) =>
      currentLocale === 'it' ? (a.slugIt ?? a.slug) === currentSlug : a.slug === currentSlug
    )
    if (article) {
      const altSlug = altLocale === 'it' ? (article.slugIt ?? article.slug) : article.slug
      return `${blogAlt}/${altSlug}`
    }
    // Article not found in data - fall back to the alt-locale prefix with the
    // original slug. The alt URL may 404, but that surfaces a real data issue
    // rather than silently sending users to a wrong page.
    return blogAlt + path.slice(blogCurrent.length)
  }

  // Fallback (unknown path)
  return path
}
