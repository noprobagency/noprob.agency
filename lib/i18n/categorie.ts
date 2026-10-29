import type { Locale } from '@/lib/i18n'
import type { CategoryId } from '@/data/articles/categories'

/**
 * Copy of the blog category pages (`/blog/category/[slug]`,
 * `/it/blog/categoria/[slug]`): meta title (without the brand, the layout
 * template adds " | noprob agency™", so at most 48 characters) and meta
 * description (at most 160), H1, and an intro of 2-3 sentences with inline
 * links like the article body. IT and EN say the same thing; the lengths are
 * enforced by `lib/seo/seo-lengths.test.ts`. The label and the URL slug of
 * each category are in `data/articles/categories.ts`.
 */
export type CategoryPageCopy = {
  metaTitle: string
  metaDescription: string
  /** H1 = `h1` + `h1Em` (the second part is set in the serif italic). */
  h1: string
  h1Em: string
  /** 2-3 sentences, markdown-style inline links. */
  intro: string
}

export type CategoriesCopy = {
  /** Eyebrow above the H1. */
  eyebrow: string
  moreHeading: string
  /** Link to the blog index at the end of "more categories". */
  allArticlesLink: string
  pages: Record<CategoryId, CategoryPageCopy>
}

const en: CategoriesCopy = {
  eyebrow: 'Category',
  moreHeading: 'More categories',
  allArticlesLink: 'All articles',
  pages: {
    migrate: {
      metaTitle: 'Migrate to Shopify: Guides by Platform',
      metaDescription:
        'Guides to migrate to Shopify from WooCommerce, Magento, PrestaShop, BigCommerce, Wix or Squarespace: what moves, what we rebuild, what to redirect.',
      h1: 'Migrate to Shopify: ',
      h1Em: 'guides by platform',
      intro:
        'One guide per platform: what moves, what we rebuild and what we redirect when you leave WooCommerce, Magento, PrestaShop, BigCommerce, Wix or Squarespace. They come from the migrations we run, with the official documentation of each platform as the source. If you want the whole process first, read the [complete migration guide](/shopify-migration); when you are ready to move, the [Shopify Launch Sprint](/shopify-migration-sprint) does it in 14 days.',
    },
    shopify: {
      metaTitle: 'Shopify Guides: How It Works, Costs, Plans',
      metaDescription:
        'How Shopify works, what a migration costs, when Shopify Plus pays off, migration SEO and how to choose an agency. Straight answers from the noprob agency team.',
      h1: 'Shopify guides: ',
      h1Em: 'plans, costs, SEO and how to choose',
      intro:
        'The questions people ask before they commit to Shopify: how it works, what it costs, when Shopify Plus pays off and how it compares with WooCommerce, plus the SEO checklist for a migration and how to choose the agency that runs it. Short answer first, then the detail, with prices and numbers we can source. If you are ready to move, the [Shopify Launch Sprint](/shopify-migration-sprint) has a fixed calendar and a public price.',
    },
    'ai-agents': {
      metaTitle: 'AI Agents for eCommerce and Shopify',
      metaDescription:
        'AI agents on Shopify: chatbot or agent, Shopify MCP, Claude and Claude Duet, Flow, security, customer care and testing. Where they pay, where a person decides.',
      h1: 'AI agents for ',
      h1Em: 'eCommerce stores',
      intro:
        'We work with AI agents built on Claude Code every day, and these guides show where agents pay off in a Shopify store and where a person still decides. Start from the difference between a chatbot, a workflow and an agent, then go deeper: Shopify MCP, Claude and Claude Duet, Shopify Flow, Magic and Sidekick, security, the order and returns assistant, how to test it and what it costs. If your store is live on Shopify, the [AI Accelerator](/ai-accelerator) switches on the first AI solutions in 30 days.',
    },
    'ai-search': {
      metaTitle: 'AI Search and GEO for Shopify',
      metaDescription:
        'GEO, agentic commerce and ChatGPT shopping on Shopify: how AI assistants find and recommend products, what to prepare and what we checked ourselves.',
      h1: 'AI search and GEO ',
      h1Em: 'for Shopify stores',
      intro:
        'Shoppers now ask ChatGPT, Copilot and Google’s AI answers what to buy, and these assistants can only recommend products whose data they can read. These guides cover GEO (generative engine optimization), agentic commerce and ChatGPT shopping on Shopify, separating what official pages confirm from what is hype. In every [Shopify Launch Sprint](/shopify-migration-sprint) this work is part of how the store is built.',
    },
    growth: {
      metaTitle: 'eCommerce Growth: CRO and Long-Term Strategy',
      metaDescription:
        'eCommerce growth on Shopify: conversion rate optimization backed by peer-reviewed studies and a long-term strategy built on stable teams and real KPIs.',
      h1: 'eCommerce growth: ',
      h1Em: 'CRO and long-term strategy',
      intro:
        'Brands that grow on Shopify do it by compounding: a solid technical base, conversion work backed by research and a team that stays. These guides cover CRO built on peer-reviewed studies and the long-term strategy behind it. If you want a team that does this work with you, see the [Data-Driven Team](/data-driven-team).',
    },
  },
}

const it: CategoriesCopy = {
  eyebrow: 'Categoria',
  moreHeading: 'Altre categorie',
  allArticlesLink: 'Tutti gli articoli',
  pages: {
    migrate: {
      metaTitle: 'Migrare a Shopify: guide per piattaforma',
      metaDescription:
        'Guide per migrare a Shopify da WooCommerce, Magento, PrestaShop, BigCommerce, Wix o Squarespace: cosa si sposta, cosa si ricostruisce, cosa reindirizzare.',
      h1: 'Migrare a Shopify: ',
      h1Em: 'guide per piattaforma',
      intro:
        'Una guida per piattaforma: cosa si sposta, cosa ricostruiamo e cosa reindirizziamo quando lasci WooCommerce, Magento, PrestaShop, BigCommerce, Wix o Squarespace. Nascono dalle migrazioni che seguiamo, con la documentazione ufficiale di ciascuna piattaforma come fonte. Se vuoi prima il quadro completo, leggi la [guida alla migrazione](/it/migrazione-shopify); quando sei pronto a muoverti, lo [Shopify Launch Sprint](/it/sprint-migrazione-shopify) la fa in 14 giorni.',
    },
    shopify: {
      metaTitle: 'Guide Shopify: costi, piani e come scegliere',
      metaDescription:
        'Come funziona Shopify, quanto costa migrare, quando conviene Plus, SEO della migrazione e come scegliere l’agenzia. Risposte dirette del team di noprob agency.',
      h1: 'Guide Shopify: ',
      h1Em: 'piani, costi, SEO e come scegliere',
      intro:
        'Le domande che ci si fa prima di scegliere Shopify: come funziona, quanto costa, quando conviene Shopify Plus e come si confronta con WooCommerce, più la checklist SEO della migrazione e come scegliere l’agenzia che la segue. Prima la risposta breve, poi il dettaglio, con prezzi e numeri di cui indichiamo la fonte. Se sei pronto a muoverti, lo [Shopify Launch Sprint](/it/sprint-migrazione-shopify) ha calendario fisso e prezzo pubblico.',
    },
    'ai-agents': {
      metaTitle: 'Agenti AI per eCommerce e Shopify',
      metaDescription:
        'Agenti AI su Shopify: chatbot o agente, Shopify MCP, Claude e Claude Duet, Flow, sicurezza, assistenza clienti e test. Dove rendono, dove decide una persona.',
      h1: 'Agenti AI per ',
      h1Em: 'eCommerce',
      intro:
        'Lavoriamo ogni giorno con agenti AI costruiti su Claude Code, e queste guide mostrano dove gli agenti rendono in uno store Shopify e dove decide ancora una persona. Parti dalla differenza tra chatbot, workflow e agente, poi vai a fondo: Shopify MCP, Claude e Claude Duet, Shopify Flow, Magic e Sidekick, sicurezza, l’assistente per ordini e resi, come testarlo e quanto costa. Se il tuo store è già su Shopify, l’[AI Accelerator](/it/ai-accelerator) attiva le prime soluzioni AI in 30 giorni.',
    },
    'ai-search': {
      metaTitle: 'Ricerca AI e GEO per Shopify',
      metaDescription:
        'GEO, agentic commerce e ChatGPT shopping su Shopify: come gli assistenti AI trovano e consigliano i prodotti, cosa preparare e cosa abbiamo verificato noi.',
      h1: 'Ricerca AI e GEO ',
      h1Em: 'per Shopify',
      intro:
        'Chi compra ora chiede a ChatGPT, Copilot e alle risposte AI di Google cosa acquistare, e questi assistenti possono consigliare solo prodotti di cui leggono i dati. Le guide trattano GEO (generative engine optimization), agentic commerce e ChatGPT shopping su Shopify, separando ciò che le pagine ufficiali confermano dall’hype. In ogni [Shopify Launch Sprint](/it/sprint-migrazione-shopify) questo lavoro fa parte di come costruiamo lo store.',
    },
    growth: {
      metaTitle: 'Crescita eCommerce: CRO e strategia',
      metaDescription:
        'Crescita eCommerce su Shopify: ottimizzazione della conversione basata su studi peer-reviewed e strategia di lungo periodo con team stabili e KPI reali.',
      h1: 'Crescita eCommerce: ',
      h1Em: 'CRO e strategia di lungo periodo',
      intro:
        'I brand che crescono su Shopify lo fanno per accumulo: una base tecnica solida, un lavoro sulla conversione fondato sulla ricerca e un team che resta. Le guide trattano la CRO costruita su studi peer-reviewed e la strategia di lungo periodo che la sostiene. Se vuoi un team che faccia questo lavoro con te, guarda il [Data-Driven Team](/it/team-ecommerce-dedicato).',
    },
  },
}

const COPY: Record<Locale, CategoriesCopy> = { it, en }

export function getCategoriesCopy(locale: Locale): CategoriesCopy {
  return COPY[locale]
}
