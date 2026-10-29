import type { Locale } from '@/lib/i18n'
import type { RouteKey } from '@/lib/i18n/routes'
import type { ClusterId } from '@/data/articles/clusters'

/**
 * Copy of the blocks added by the SEO review of 28 October 2026 (home guides,
 * footer columns, founder blocks, case study index, blog index, "Read next").
 * IT and EN say the same thing. Hrefs are not written here: a link is a
 * `route` (key of `ROUTE_PATHS`) or an `article` (EN slug), resolved by the
 * component with the right locale.
 */

export type BlockLink = { label: string; route?: RouteKey; article?: string }

export type BlocchiCopy = {
  /** Label of the first-level "Sprint" item of the navbar (keyword in every page). */
  navSprint: string
  /** Home guides carousel: newest articles, categories come from `CLUSTERS`. */
  homeGuides: {
    label: string
    heading: string
    headingEm: string
    text: string
    /** aria-label of the carousel region. */
    regionLabel: string
    filterLabel: string
    /** Chip that removes the category filter. */
    filterAll: string
    /** Reading time suffix, after the minutes ("min read"). */
    minRead: string
    prev: string
    next: string
    /** Last card, link to the blog index. */
    allGuides: string
    allGuidesText: string
  }
  footer: {
    servicesHeading: string
    guidesHeading: string
    companyHeading: string
    services: BlockLink[]
    guides: BlockLink[]
  }
  trustpilot: { label: string; linkLabel: string }
  founder: {
    sprint: { heading: string; text: string; role: string }
    about: { heading: string; text: string; role: string; cta: string }
    imageAlt: string
    name: string
  }
  useCases: {
    /** Fixed section label above the H1 of the index. */
    sectionLabel: string
    /** Eyebrow of each case card and case page. */
    caseTypeLabel: string
    intro: string
    /** Brand name (H2) of each case card, by case slug. */
    brands: Record<string, string>
    closing: {
      heading: string
      text: string
      cta: string
      guideLink: string
    }
  }
  blog: {
    label: string
    h1: string
    h1Em: string
    /** Markdown-style inline links, like the article body. */
    intro: string
    sections: Record<ClusterId, { description: string }>
    articlesCount: (n: number) => string
    readArticle: string
  }
  readNext: {
    heading: string
    guideLead: string
    guideLabel: string
  }
}

const it: BlocchiCopy = {
  navSprint: 'Sprint migrazione',
  homeGuides: {
    label: 'Guide',
    heading: 'Shopify, AI ed eCommerce, ',
    headingEm: 'spiegati',
    text: 'Guide pratiche su migrazione, Shopify, agenti AI e crescita, scritte dal team che gestisce lo Shopify Launch Sprint.',
    regionLabel: 'Guide del blog su Shopify, AI ed eCommerce',
    filterLabel: 'Filtra le guide per argomento',
    filterAll: 'Tutte',
    minRead: 'min di lettura',
    prev: 'Guide precedenti',
    next: 'Guide successive',
    allGuides: 'Tutte le guide',
    allGuidesText: 'Tutto il blog, diviso per argomento.',
  },
  footer: {
    servicesHeading: 'Servizi',
    guidesHeading: 'Guide',
    companyHeading: 'Azienda',
    services: [
      { label: 'Sprint di migrazione Shopify', route: 'zeroLossMigration' },
      { label: 'Sviluppo Shopify', route: 'sviluppoShopify' },
      { label: 'Data-Driven Team', route: 'dataDrivenTeam' },
      { label: 'AI Accelerator', route: 'aiAccelerator' },
    ],
    guides: [
      { label: 'Guida alla migrazione Shopify', route: 'migrazioneShopify' },
      { label: 'Costo della migrazione', article: 'shopify-migration-cost' },
      { label: 'Checklist SEO della migrazione', article: 'shopify-migration-seo-checklist' },
      { label: 'GEO per Shopify', article: 'geo-for-shopify' },
    ],
  },
  trustpilot: {
    label: '10 recensioni a 5 stelle su Trustpilot',
    linkLabel: 'Leggi le recensioni su Trustpilot',
  },
  founder: {
    name: 'Antonio Manitta',
    imageAlt: 'Antonio Manitta, fondatore di noprob agency',
    sprint: {
      heading: 'Chi segue il tuo Sprint',
      role: 'Fondatore di noprob agency',
      text: 'Antonio Manitta, fondatore di noprob agency. Sviluppatore di formazione, poi eCommerce manager, con oltre 7 anni di progetti eCommerce. Legge ogni candidatura di persona e resta il tuo referente dal kickoff ai 90 giorni di supporto.',
    },
    about: {
      heading: 'Chi c’è dietro noprob agency',
      role: 'Fondatore di noprob agency',
      text: 'Antonio Manitta è il fondatore di noprob agency e il tuo referente in ogni progetto. Sviluppatore di formazione, poi eCommerce manager, ha oltre 7 anni di progetti eCommerce alle spalle. Segue Cumini da oltre 4 anni e ha guidato la migrazione di Integratori DTC Nazzi da WooCommerce a Shopify. noprob agency è nata nel 2022 e lavora su Shopify con un team di specialisti in Shopify, marketing, advertising e SEO, un Custom AI System proprio e un prezzo pubblico per le migrazioni.',
      cta: 'Scopri lo Shopify Launch Sprint',
    },
  },
  useCases: {
    sectionLabel: 'Casi studio',
    caseTypeLabel: 'Caso studio',
    intro:
      'Tre casi studio con numeri e fonti: la migrazione da WooCommerce a Shopify di Integratori DTC Nazzi, il passaggio di Cumini da una piattaforma proprietaria a Shopify e la migrazione AI del catalogo B2B di DDglobal Store. I risultati sono in percentuali e rapporti, sempre con la fonte.',
    brands: {
      'integratori-nazzi-dtc-shopify': 'Integratori DTC Nazzi',
      'cumini-luxury-fashion-ecommerce': 'Cumini',
      'ddglobal-store-migrazione-ai-ecommerce-b2b': 'DDglobal Store',
    },
    closing: {
      heading: 'Vuoi lo stesso metodo sul tuo store?',
      text: 'Lo Shopify Launch Sprint porta il tuo store su Shopify in 14 giorni con il nostro Custom AI System: calendario fisso, prezzo pubblico e 4 garanzie scritte.',
      cta: 'Scopri lo Shopify Launch Sprint',
      guideLink: 'Vuoi capire prima come funziona una migrazione? Leggi la guida completa alla migrazione a Shopify.',
    },
  },
  blog: {
    label: 'Blog',
    h1: 'Migrazione a Shopify, confronti tra piattaforme e ',
    h1Em: 'AI per eCommerce',
    intro:
      'Dalla migrazione da WooCommerce, Magento o PrestaShop alla SEO, al tracking e all’AI per eCommerce: guide pratiche del team noprob agency. Se stai per migrare, parti dalla [guida completa](/it/migrazione-shopify) e dallo [Shopify Launch Sprint](/it/sprint-migrazione-shopify).',
    sections: {
      'migration-platform': {
        description:
          'Una guida per piattaforma: cosa si sposta, cosa si ricostruisce e cosa va reindirizzato quando lasci WooCommerce, Magento, PrestaShop, BigCommerce, Wix o Squarespace.',
      },
      'migration-planning': {
        description:
          'Costi, checklist SEO, come scegliere un’agenzia di migrazione e come si confronta Shopify con WooCommerce.',
      },
      ai: {
        description:
          'GEO, agentic commerce, ChatGPT shopping, Shopify Magic e Sidekick: cosa preparare e cosa misurare.',
      },
      growth: {
        description: 'La ricerca sulla conversione e la strategia di lungo periodo per i brand che crescono su Shopify.',
      },
    },
    articlesCount: (n) => (n === 1 ? '1 articolo' : `${n} articoli`),
    readArticle: 'Leggi l’articolo',
  },
  readNext: {
    heading: 'Leggi anche',
    guideLead: 'Stai valutando una migrazione?',
    guideLabel: 'Guida completa alla migrazione a Shopify',
  },
}

const en: BlocchiCopy = {
  navSprint: 'Migration Sprint',
  homeGuides: {
    label: 'Guides',
    heading: 'Shopify, AI and eCommerce, ',
    headingEm: 'explained',
    text: 'Practical guides on migration, Shopify, AI agents and growth, written by the team that runs the Shopify Launch Sprint.',
    regionLabel: 'Blog guides on Shopify, AI and eCommerce',
    filterLabel: 'Filter guides by topic',
    filterAll: 'All',
    minRead: 'min read',
    prev: 'Previous guides',
    next: 'Next guides',
    allGuides: 'All guides',
    allGuidesText: 'The whole blog, by topic.',
  },
  footer: {
    servicesHeading: 'Services',
    guidesHeading: 'Guides',
    companyHeading: 'Company',
    services: [
      { label: 'Shopify Migration Sprint', route: 'zeroLossMigration' },
      { label: 'Shopify Development', route: 'sviluppoShopify' },
      { label: 'Data-Driven Team', route: 'dataDrivenTeam' },
      { label: 'AI Accelerator', route: 'aiAccelerator' },
    ],
    guides: [
      { label: 'Shopify Migration Guide', route: 'migrazioneShopify' },
      { label: 'Shopify migration cost', article: 'shopify-migration-cost' },
      { label: 'Migration SEO checklist', article: 'shopify-migration-seo-checklist' },
      { label: 'GEO for Shopify', article: 'geo-for-shopify' },
    ],
  },
  trustpilot: {
    label: '10 five-star reviews on Trustpilot',
    linkLabel: 'Read the reviews on Trustpilot',
  },
  founder: {
    name: 'Antonio Manitta',
    imageAlt: 'Antonio Manitta, founder of noprob agency',
    sprint: {
      heading: 'Who runs your Sprint',
      role: 'Founder of noprob agency',
      text: 'Antonio Manitta, founder of noprob agency. A developer by training, then eCommerce manager, with 7+ years of eCommerce projects. He reads every application himself and stays your point of contact from kickoff to the end of the 90 days of support.',
    },
    about: {
      heading: 'Who is behind noprob agency',
      role: 'Founder of noprob agency',
      text: 'Antonio Manitta is the founder of noprob agency and your point of contact on every project. A developer by training, then eCommerce manager, he has 7+ years of eCommerce projects behind him. He has worked with Cumini for over 4 years and led the WooCommerce to Shopify migration of Supplement DTC Nazzi. noprob agency was founded in 2022 and works on Shopify with a team of specialists in Shopify, marketing, advertising and SEO, its own Custom AI System and a public price for migrations.',
      cta: 'See the Shopify Launch Sprint',
    },
  },
  useCases: {
    sectionLabel: 'Use Cases',
    caseTypeLabel: 'Use Case',
    intro:
      'Three case studies with sourced numbers: the WooCommerce to Shopify migration of Supplement DTC Nazzi, Cumini’s move from a proprietary platform to Shopify, and the AI migration of DDglobal Store’s B2B catalog. Results are shown as percentages and ratios, always with the source.',
    brands: {
      'integratori-nazzi-dtc-shopify': 'Supplement DTC Nazzi',
      'cumini-luxury-fashion-ecommerce': 'Cumini',
      'ddglobal-store-migrazione-ai-ecommerce-b2b': 'DDglobal Store',
    },
    closing: {
      heading: 'Want the same method on your store?',
      text: 'The Shopify Launch Sprint moves your store to Shopify in 14 days with our Custom AI System: a fixed calendar, a public price and 4 written guarantees.',
      cta: 'See the Shopify Launch Sprint',
      guideLink: 'Want to understand how a migration works first? Read the complete Shopify migration guide.',
    },
  },
  blog: {
    label: 'Blog',
    h1: 'Shopify migration, platform comparisons and ',
    h1Em: 'AI for eCommerce',
    intro:
      'From migrating off WooCommerce, Magento or PrestaShop to SEO, tracking and AI for eCommerce: practical guides from the noprob agency team. If you are about to migrate, start with the [complete guide](/shopify-migration) and the [Shopify Launch Sprint](/shopify-migration-sprint).',
    sections: {
      'migration-platform': {
        description:
          'One guide per platform: what moves, what gets rebuilt and what to redirect when you leave WooCommerce, Magento, PrestaShop, BigCommerce, Wix or Squarespace.',
      },
      'migration-planning': {
        description:
          'Costs, SEO checklist, how to choose a migration agency and how Shopify compares with WooCommerce.',
      },
      ai: {
        description:
          'GEO, agentic commerce, ChatGPT shopping, Shopify Magic and Sidekick: what to prepare and what to measure.',
      },
      growth: {
        description: 'Conversion research and long-term strategy for brands that grow on Shopify.',
      },
    },
    articlesCount: (n) => (n === 1 ? '1 article' : `${n} articles`),
    readArticle: 'Read the article',
  },
  readNext: {
    heading: 'Read next',
    guideLead: 'Considering a migration?',
    guideLabel: 'Complete guide to migrating to Shopify',
  },
}

const COPY: Record<Locale, BlocchiCopy> = { it, en }

export function getBlocchiCopy(locale: Locale): BlocchiCopy {
  return COPY[locale]
}
