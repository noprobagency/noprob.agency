/**
 * Zero-Loss Migration Sprint landing (/zero-loss-migration, /it/zero-loss-migration).
 *
 * All copy lives in the per-locale files next to this one; components never
 * hardcode text. Values that are still to be confirmed by Antonio are NOT
 * filled with plausible numbers: they are written as `[[KEY]]` tokens inside
 * the copy and rendered as "[DA CONFERMARE]" by `renderCopy()` (see
 * components/sections/zero-loss/Placeholder.tsx). The full list of open
 * placeholders is in components/sections/zero-loss/README.md.
 */

export const ZL_PRODUCT_NAME = 'Shopify Launch Sprint'
export const ZL_SOURCE_ID = 'zero-loss-migration' as const
export const ZL_PLACEHOLDER_LABEL = '[DA CONFERMARE]'

/** Demo dashboard link ([LINK DEMO]). */
export const ZL_DEMO_DASHBOARD_URL: string | null = '/it/demo-dashboard'

/** Urgency sources (section "Perché ora"): every fact links its source. */
export const ZL_SOURCES = {
  shopifyAgentic: 'https://www.shopify.com/blog/how-agentic-commerce-works',
  digitalCommerce360:
    'https://www.digitalcommerce360.com/2026/08/06/how-shopify-is-approaching-agentic-ai-2026/',
  yahooFinance:
    'https://finance.yahoo.com/technology/ai/articles/shopify-turns-agent-checkout-default-124019261.html',
  storeLeads: 'https://storeleads.app/reports/shopify',
  shopifyQ2: 'https://www.sec.gov/Archives/edgar/data/0001594805/000159480526000046/exhibit991pressreleaseq220.htm',
} as const

export type ZlTierId = 1 | 2 | 3

export type ZlTier = {
  id: ZlTierId
  /** Full price, EUR, VAT excluded. */
  price: number
  /** One of the 4 installments, EUR, VAT excluded. */
  installment: number
  /** Caps included in the tier. Anything above is a fixed-price add-on. */
  caps: {
    maxProducts: number
    maxLanguages: number
    /** Number of connected ERP/management systems included. */
    erpIncluded: number
  }
}

export const ZL_TIERS: readonly ZlTier[] = [
  { id: 1, price: 5800, installment: 1450, caps: { maxProducts: 2000, maxLanguages: 1, erpIncluded: 0 } },
  { id: 2, price: 8800, installment: 2200, caps: { maxProducts: 10000, maxLanguages: 3, erpIncluded: 1 } },
  // Tier 3 has no caps, except a custom ERP which is always an add-on.
  { id: 3, price: 12800, installment: 3200, caps: { maxProducts: Infinity, maxLanguages: Infinity, erpIncluded: 0 } },
] as const

/** Form option keys (stable across locales; labels live in the copy files). */
export const ZL_PLATFORMS = ['woocommerce', 'prestashop', 'magento', 'custom', 'erp', 'other', 'shopify'] as const
export type ZlPlatform = (typeof ZL_PLATFORMS)[number]

export const ZL_REVENUE_BANDS = ['under300k', '300k-2m', '2m-20m', 'over20m'] as const
export type ZlRevenueBand = (typeof ZL_REVENUE_BANDS)[number]

export const ZL_PRODUCT_BANDS = ['under2000', '2000-10000', 'over10000'] as const
export type ZlProductBand = (typeof ZL_PRODUCT_BANDS)[number]

export const ZL_LANGUAGE_BANDS = ['1', '2-3', '4plus'] as const
export type ZlLanguageBand = (typeof ZL_LANGUAGE_BANDS)[number]

export const ZL_START_TIMINGS = ['now', '1-3months', 'evaluating'] as const
export type ZlStartTiming = (typeof ZL_START_TIMINGS)[number]

/** Free mailbox providers rejected by the contact step. */
export const ZL_FREE_EMAIL_PROVIDERS = ['gmail', 'googlemail', 'hotmail', 'yahoo', 'outlook', 'icloud', 'live', 'msn'] as const

export type ZlOption<K extends string> = { value: K; label: string }

export type ZlCopy = {
  meta: { title: string; description: string; ogAlt: string }
  nav: { cta: string; langSwitchLabel: string; logoLabel: string }
  hero: {
    eyebrow: string
    h1: string
    /** Annotation hooked to the last word of the H1 claim (arrow + text, links to #prove) */
    proofNote: string
    paragraph: string
    ctaPrimary: string
    ctaNote: string
    ctaSecondary: string
    logosLabel: string
    trustpilotScore: string
    trustpilotLabel: string
  }
  overview: {
    h2: string
    paragraph: string
    cta: string
    deliverablesTitle: string
    /** `badge` marks a plus (e.g. the Custom AI theme) with the electric-blue AI pill next to the title */
    deliverables: { title: string; line: string; badge?: string }[]
    afterLine: string
    pricingTitle: string
    pricingSub: string
    tiers: { label: string; price: string; under: string }[]
    pricingNote: string
    results: { value: string; attribution: string }[]
  }
  checklist: {
    h2: string
    sub: string
    items: string[]
    /** 0 ticks (green) */
    reactionNone: string
    /** 1-2 ticks (orange) */
    reactionMid: string
    /** 3+ ticks (red) */
    reactionHigh: string
    reactionHighCta: string
    countLabel: string
  }
  deliverables: {
    h2: string
    sub: string
    labelPrefix: string
    items: { title: string; /** Short name for the calendar pills */ short: string; paragraph: string; imageAlt: string; mockup: ZlMockupKind }[]
  }
  calendar: {
    h2: string
    prework: { label: string; yourTeamTitle: string; yourTeam: string; ourTeamTitle: string; ourTeam: string }
    weeks: { badge: string; title: string; days: { day: string; title: string; duration?: string; detail: string; /** Deliverables (1-based) completed this day */ deliverables?: number[] }[] }[]
    durationLabel: string
    after: {
      title: string
      rows: { phase: string; title: string; detail: string }[]
      /** Third point: the results dashboard, with the link to the demo */
      dashboard: { phase: string; title: string; detail: string; cta: string }
    }
    closing: string
  }
  guarantees: { h2: string; sub: string; cards: { key: string; text: string }[]; line: string }
  /** The "secret": the Custom AI theme and its superpowers, electric-blue card before the deliverables */
  aiTheme: { label: string; h2: string; paragraph: string; powers: { title: string; text: string }[] }
  /** Results-first block: why 14 days (a whole team, every area in parallel) */
  resultsFirst: { label: string; h2: string; paragraph: string; areas: string[]; line: string }
  /** Mobile sticky CTA bar */
  sticky: { prefix: string; note: string; cta: string }
  whyNow: {
    eyebrow: string
    h2: string
    paragraph: string
    sourceLabel: string
    /** Big numbers band: the market moving to Shopify */
    stats: { value: string; label: string; source: { label: string; href: string } }[]
    /** Same job, two speeds: old platform vs Shopify + AI */
    race: { title: string; colOld: string; colNew: string; rows: { task: string; old: string; now: string }[] }
    cardsTitle: string
    cards: { text: string; sources: { label: string; href: string }[] }[]
    closing: string
    cta: string
  }
  proof: {
    h2: string
    sub: string
    charts: {
      caseLink: string
      items: {
        key: 'nazziGsc' | 'cuminiSales'
        title: string
        subtitle: string
        kpis: { label: string; value: string }[]
        legend: [string, string]
        migrationLabel: string
        goLiveLabel: string
        href: string
      }[]
    }
    testimonialsHeading: string
    testimonials: { name: string; role: string; image: string; quote: string; hidden?: boolean }[]
  }
  scope: {
    h2: string
    includedTitle: string
    included: string[]
    partnersTitle: string
    partners: string[]
    line: string
  }
  faq: { h2: string; cta: string; items: { question: string; answer: string }[] }
  finalCta: { h2: string; paragraph: string; bullets: string[]; cta: string }
  apply: {
    metaTitle: string
    metaDescription: string
    back: string
    /** Left column of the application card: trust line, H1, one strong paragraph */
    trustedBy: string
    h1Pre: string
    h1Em: string
    description: string
    /** Small badges under the form */
    badges: string[]
  }
  form: {
    progressLabel: string
    replyNote: string
    next: string
    back: string
    submit: string
    submitting: string
    requiredMark: string
    steps: { title: string }[]
    step1: {
      urlLabel: string
      urlPlaceholder: string
      platformLabel: string
      platforms: ZlOption<ZlPlatform>[]
      shopifyStop: string
      shopifyStopLink: string
    }
    step2: {
      revenueLabel: string
      revenues: ZlOption<ZlRevenueBand>[]
      productsLabel: string
      products: ZlOption<ZlProductBand>[]
      languagesLabel: string
      languages: ZlOption<ZlLanguageBand>[]
      erpLabel: string
      erpNo: string
      erpYes: string
      erpWhichLabel: string
      erpWhichPlaceholder: string
      revenueStop: string
      revenueNotice: string
    }
    step3: {
      timingLabel: string
      timings: ZlOption<ZlStartTiming>[]
      reasonLabel: string
      reasonPlaceholder: string
      reasonCounter: string
    }
    step4: {
      summaryTitle: string
      /** Template: {tier}, {price}, {installment}. */
      summary: string
      addonLine: string
      nameLabel: string
      namePlaceholder: string
      emailLabel: string
      emailPlaceholder: string
      phoneLabel: string
      phonePrefixLabel: string
      phonePlaceholder: string
      privacyBefore: string
      privacyLinkLabel: string
      tierLabel: string
    }
    errors: {
      url: string
      choice: string
      erpName: string
      reason: string
      reasonMax: string
      name: string
      email: string
      emailFree: string
      phone: string
      privacy: string
      generic: string
      network: string
    }
    success: { title: string; text: string; dashboardCta: string }
    retry: string
  }
  /** Confirmation page after the application (own route, noindex). */
  thankYou: {
    metaTitle: string
    badge: string
    h1Pre: string
    h1Em: string
    text: string
    nextTitle: string
    next: string[]
    dashboardCta: string
    whatsapp: string
    whatsappNote: string
    whatsappText: string
    bookTitle: string
    bookText: string
    back: string
  }
  footer: { backToSite: string }
}

export type ZlMockupKind = 'staging' | 'report' | 'redirects' | 'tracking' | 'checklist'

/** EUR formatting used everywhere a price is printed: "€5.800". */
export function formatZlEur(value: number): string {
  // Manual thousands separator: Intl data for it-IT is not guaranteed in every runtime.
  const digits = Math.round(value).toString()
  return `€${digits.replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`
}

export function getZlTier(id: ZlTierId): ZlTier {
  return ZL_TIERS.find((t) => t.id === id) ?? ZL_TIERS[0]
}
