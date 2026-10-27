import type { Locale } from '@/lib/i18n'
import type {
  MigrazioneCopy,
  MigrazioneFormCopy,
  MigrazionePricingCopy,
  MigrazioneProcessCopy,
} from '@/lib/i18n/migrazione'

/**
 * Copy module for the "Sviluppo Shopify" / "Shopify Development" landing page.
 * Routes: it -> /it/sviluppo-shopify, en -> /shopify-development.
 *
 * Twin of the migrazione page: it reuses the migrazione Process / Pricing /
 * Form / FAQ components (so those section shapes are typed via `MigrazioneCopy` and the exported section types)
 * and the rebuild Hero / Problem / Solution / WhyUs components (typed below).
 * Only `seo.sviluppoShopify` lives in the shared dictionary so
 * `buildMetadata({ pageKey })` keeps working.
 *
 * Positioning: SHOPIFY DEVELOPMENT as a project, for new brands / structured
 * startups building their store from scratch. Not migration, not a rebuild of an
 * existing store (those are covered by the migrazione page). Central lever:
 * lifetime maintenance included.
 */

type HeroCopy = {
  features: string[]
  doodle: string
  trustLabel: string
  titlePart1: string
  titlePart2: string
  descriptionPart1: string
  descriptionPart2: string
  cta: string
  trustedCount: string
}

type ProblemCopy = {
  label: string
  heading: string
  headingEm: string
  description: string
  items: { title: string; description: string }[]
}

type SolutionCopy = {
  label: string
  headingPart1: string
  headingPart2: string
  items: { title: string; description: string }[]
}

type WhyUsCopy = {
  label: string
  heading: string
  description: string
  agencyLabel: string
  agencyItems: string[]
  nobrobItems: string[]
  featuresDescription: string
  features: string[]
}

export type SviluppoCopy = {
  hero: HeroCopy
  problem: ProblemCopy
  solution: SolutionCopy
  process: MigrazioneProcessCopy
  whyUs: WhyUsCopy
  pricing: MigrazionePricingCopy
  form: MigrazioneFormCopy
  faq: MigrazioneCopy['faq']
}

const it: SviluppoCopy = {
  hero: {
    features: [
      'Supporto rapido, 7 giorni su 7',
      'Manutenzione a vita inclusa',
      '30 giorni di garanzia di rimborso',
    ],
    doodle: 'Costruito su misura per il tuo brand',
    trustLabel: 'Scelti da brand di Moda, Integratori e DTC eCommerce',
    titlePart1: 'Sviluppiamo il tuo eCommerce su Shopify, pronto a ',
    titlePart2: 'convertire',
    descriptionPart1:
      'Costruiamo il tuo store dalle fondamenta: design su misura, tracciamento completo, SEO e performance. Tu pensi al brand. ',
    descriptionPart2: 'Noi al lato tecnico.',
    cta: 'Candidati per il progetto',
    trustedCount: 'Scelti da brand di Moda, Integratori e DTC eCommerce',
  },
  problem: {
    label: 'problema',
    heading: 'Partire su Shopify è facile.',
    headingEm: 'Farlo bene no.',
    description:
      'Troppi store nascono come vetrine: belli da vedere ma che non convertono. Senza tracciamento, senza SEO, senza una struttura pensata per scalare.',
    items: [
      {
        title: 'Un sito vetrina non vende',
        description:
          'Design curato ma zero strategia di conversione. Una struttura che non regge la crescita e ti blocca dopo i primi mesi.',
      },
      {
        title: 'Tracciamento assente dal giorno uno',
        description:
          'Campagne lanciate alla cieca, dati inaffidabili, budget sprecato. Senza misurare nulla, ogni decisione è una scommessa.',
      },
      {
        title: 'Nessuno che governa il progetto',
        description:
          'Freelancer scollegati, nessuna visione tecnica d’insieme, decisioni prese senza dati. Il risultato è un patchwork che nessuno controlla.',
      },
    ],
  },
  solution: {
    label: 'soluzione',
    headingPart1: 'Un eCommerce costruito bene',
    headingPart2: 'dal primo giorno',
    items: [
      {
        title: 'Team tecnico unico',
        description:
          'Sviluppo, design, CRO e analytics guidati da un eCommerce Manager. Una sola regia su tutto il progetto.',
      },
      {
        title: 'Ogni aspetto al massimo',
        description:
          'Tracciamento server-side, SEO base, performance e CRO inclusi nello sviluppo. Non come extra a pagamento, ma di serie.',
      },
      {
        title: 'Manutenzione a vita',
        description:
          'Non costruiamo e spariamo. Restiamo a mantenere e ottimizzare lo store nel tempo, senza che tu debba ricominciare.',
      },
    ],
  },
  process: {
    label: 'come lavoriamo',
    headingPart1: '3 mesi per ',
    headingEm: 'costruire tutto.',
    description:
      'Tre fasi, un ordine logico. Il tempo per impostare ogni dettaglio nel modo giusto.\nIl flusso che usiamo su ogni progetto.',
    phases: [
      {
        number: '01',
        title: 'Analisi e strategia',
        duration: 'primi ~15 giorni',
        description:
          'Capiamo brand, prodotti, obiettivi, target e posizionamento. Definiamo architettura dello store, struttura del catalogo, strategia di conversione e di tracciamento. Niente parte finché la strategia non è chiara.',
      },
      {
        number: '02',
        title: 'Sviluppo e design',
        duration: '~45 giorni',
        description:
          'Costruzione dello store su misura: design, sviluppo, setup del tracciamento server-side (GA4 e Meta CAPI), SEO base on-page e performance. Tutto in staging, validato con te prima del lancio.',
      },
      {
        number: '03',
        title: 'Lancio e ottimizzazione',
        duration: '~30 giorni',
        description:
          'Go-live e poi monitoraggio continuo. Il team resta su ogni fronte (sviluppo, SEO, tracciamento, design, CRO) per ottimizzare dato dopo dato, fino a portare lo store al massimo.',
      },
    ],
    fourMonths: {
      title: 'Perché 3 mesi per costruire tutto?',
      description:
        'Tre mesi non è quanto ci mettiamo a mettere online un sito. È il tempo che dedichiamo a costruirlo bene: strategia, sviluppo, lancio e ottimizzazione. E poi restiamo, con la manutenzione a vita inclusa.',
    },
    closingLine: 'Non un team che consegna e sparisce.\nUn team che resta nel tempo.',
  },
  whyUs: {
    label: 'perché noi',
    heading: 'Perché il nostro modello funziona meglio',
    description:
      'Un confronto diretto tra l’approccio noprob e le agenzie tradizionali o i freelancer. Perché una struttura unica costruisce eCommerce che reggono nel tempo.',
    agencyLabel: 'Altre<br />Agenzie',
    agencyItems: [
      'Risposte lente e coordinamento poco chiaro',
      'Sviluppano siti vetrina, senza strategia di conversione',
      'Tracciamento e SEO trattati come extra, spesso dimenticati',
      'Team frammentati, scarsa collaborazione',
      'Consegnano e spariscono, nessuna manutenzione',
    ],
    nobrobItems: [
      'Sempre guidati da un Senior eCommerce Manager',
      'Supporto reattivo e costante, disponibilità 7/7',
      'Tracciamento server-side e SEO base inclusi di serie',
      'Store costruito per convertire e per scalare',
      'Manutenzione a vita su ogni progetto',
    ],
    featuresDescription:
      'Non ci limitiamo a consegnare uno store, costruiamo infrastrutture eCommerce su cui i brand possono contare nel tempo. Ecco perché i clienti restano con noi.',
    features: [
      'Specializzati in verticali fashion, beauty e DTC',
      'Manutenzione a vita su ogni build',
      'Design su misura, costruito per convertire',
      'Tracciamento server-side (GA4 e Meta CAPI) incluso',
      'SEO base on-page impostata correttamente dal lancio',
      'Prezzi mensili fissi, niente costi imprevisti',
      'Optional NDA per la massima riservatezza',
      'Un solo interlocutore dedicato per tutto il progetto',
      'Ogni collaborazione strutturata per la crescita del brand',
    ],
  },
  pricing: {
    label: 'prezzo',
    heading: 'Un progetto, non un servizio.\nLo paghi mentre lo costruiamo.',
    subheading:
      'Niente esborso da migliaia di euro in anticipo: paghi mese per mese, mentre vedi lo store prendere forma. Il prezzo parte basso e sale man mano che acquisiamo nuovi progetti. Più aspetti, più costa.',
    tiers: [
      { price: '€1.600', slot: 'Primi 10 progetti', tag: 'Già acquisiti', state: 'completed' },
      { price: '€1.850', slot: 'Progetti 11-20', tag: 'Disponibile ora', state: 'current' },
      { price: '€2.100', slot: 'Progetti 21-30', tag: 'Prossimo scaglione', state: 'upcoming' },
      { price: '€2.400', slot: 'Dal 31° in poi', tag: 'Prezzo a regime', state: 'upcoming' },
    ],
    priceSuffix: '/mese × 3 mesi',
    priceBadge: 'metodo noprobagency',
    guarantee:
      'Garanzia 30 giorni: se entro 30 giorni il progetto non ti convince, ti rimborsiamo, senza domande.',
    trustLabel: 'Scelti da brand di Moda, Integratori e DTC eCommerce',
    cardTitle: 'Sviluppo Shopify',
    cardDescription:
      'Il progetto completo di 3 mesi: strategia, design su misura, sviluppo, tracciamento e SEO. Gestito end to end, con un solo interlocutore.',
    cardChecks: [
      'Paga in 3 mesi',
      'Manutenzione a vita inclusa',
      'Garanzia 30 giorni',
    ],
    scarcity:
      'Gli scaglioni si riferiscono al numero di progetti che seguiamo: il prezzo sale col crescere dell’esperienza e della richiesta, non per urgenza artificiale. Chi entra ora blocca la tariffa, prima che salga. Nessun countdown: lo slot resta tuo finché c’è.',
    cta: 'Candidati per il progetto',
  },
  form: {
    label: 'candidatura',
    heading: 'Candidati per il progetto',
    subheading: 'Pochi progetti per trimestre. Candidati e vediamo se sei il progetto giusto.',
    intro: 'Più dettagli ci dai, più la valutazione è precisa. Leggiamo ogni candidatura.',
    fields: {
      name: { label: 'Nome e cognome', placeholder: 'Mario Rossi' },
      email: { label: 'Email aziendale', placeholder: 'nome@brand.com' },
      brand: { label: 'Nome del brand / azienda', placeholder: 'Brand srl' },
      websiteUrl: { label: 'Sito o profilo del brand (se ce l’hai)', placeholder: 'brand.com oppure @brand' },
      platform: {
        label: 'A che punto sei con lo store?',
        placeholder: 'Seleziona…',
        options: ['Parto da zero, nuovo progetto', 'Ho un’idea ma non ho ancora uno store', 'Ho già uno store da rifare'],
      },
      revenue: {
        label: 'Fatturato online annuo indicativo',
        placeholder: 'Seleziona…',
        options: ['Non ancora online', '< 100k', '100k - 300k', '300k - 1M', '1M+'],
      },
      timeline: {
        label: 'Da quando vuoi partire?',
        placeholder: 'Seleziona…',
        options: ['Il prima possibile', 'Entro 1-3 mesi', 'Sto solo valutando'],
      },
      reason: {
        label: 'Cosa vuoi costruire e che obiettivo hai?',
        placeholder: 'Raccontaci il brand, i prodotti e cosa vuoi ottenere con il nuovo eCommerce.',
      },
    },
    privacyBefore: 'Ho letto e accetto la ',
    privacyLinkLabel: 'Privacy Policy',
    submit: 'Candidati ora',
    submitting: 'Invio in corso…',
    errors: {
      name: 'Inserisci nome e cognome',
      email: 'Inserisci un indirizzo email valido',
      brand: 'Inserisci il nome del brand',
      websiteUrl: 'Inserisci il sito o il profilo del brand',
      platform: 'Indica a che punto sei con lo store',
      revenue: 'Seleziona un’opzione',
      timeline: 'Seleziona un’opzione',
      reason: 'Spiega in almeno 30 caratteri cosa vuoi costruire',
      privacy: 'Devi accettare la Privacy Policy',
    },
    errorGeneric: 'Qualcosa è andato storto. Riprova tra un momento.',
    errorNetwork: 'Errore di rete. Controlla la connessione e riprova.',
  },
  faq: {
    label: 'domande frequenti',
    heading: 'Le risposte alle ',
    headingEm: 'domande più comuni',
    subheading: 'Tutto quello che vuoi sapere prima di costruire il tuo eCommerce su Shopify.',
    items: [
      {
        question: 'Lavorate con chi parte da zero?',
        answer:
          'Sì, è il nostro focus su questa pagina: costruiamo l’intero eCommerce dalle fondamenta, dal design al lancio. Sei nel posto giusto se stai avviando il brand o vuoi finalmente farlo bene.',
      },
      {
        question: 'Cosa include lo sviluppo?',
        answer:
          'Design su misura, sviluppo dello store, tracciamento server-side (GA4 e Meta CAPI), SEO base on-page, performance e CRO. Non incluso: fotografia prodotto, contenuti e gestione influencer.',
      },
      {
        question: 'Cosa significa manutenzione a vita?',
        answer:
          'Dopo il lancio restiamo a mantenere e ottimizzare lo store nel tempo, senza che tu debba ricostruire o cambiare partner. È il differenziatore centrale del nostro modello.',
      },
      {
        question: 'Quanto dura il progetto?',
        answer:
          'Tre mesi strutturati: analisi e strategia, sviluppo e design, lancio e ottimizzazione. Il tempo giusto per costruire tutto bene e seguirlo nel dettaglio.',
      },
      {
        question: 'Come funziona il pagamento?',
        answer:
          'Rateizzato mensile sui 3 mesi, così non c’è un esborso unico in anticipo. Garanzia rimborso 30 giorni: se il progetto non ti convince, ti rimborsiamo.',
      },
      {
        question: 'Su che piattaforma costruite?',
        answer:
          'Esclusivamente Shopify. È la piattaforma su cui siamo specializzati e che permette di scalare senza vincoli tecnici.',
      },
      {
        question: 'Chi è il mio punto di contatto?',
        answer:
          'Un solo eCommerce Manager, che guida il team e gestisce tutta la comunicazione. La stessa persona dall’inizio alla fine.',
      },
      {
        question: 'Offrite garanzie?',
        answer:
          'Sì, garanzia rimborso 30 giorni sul progetto di sviluppo. E dopo il lancio resta la manutenzione a vita inclusa.',
      },
    ],
  },
}

const en: SviluppoCopy = {
  hero: {
    features: [
      'Fast support, 7 days a week',
      'Lifetime maintenance included',
      '30-day money-back guarantee',
    ],
    doodle: 'Built to match your brand',
    trustLabel: 'Chosen by Fashion, Supplements and DTC brands',
    titlePart1: 'We build your Shopify eCommerce, ready to ',
    titlePart2: 'convert',
    descriptionPart1:
      'We build your store from the ground up: custom design, full tracking, SEO and performance. You focus on the brand. ',
    descriptionPart2: 'We handle the technical side.',
    cta: 'Apply for your project',
    trustedCount: 'Chosen by Fashion, Supplements and DTC brands',
  },
  problem: {
    label: 'the problem',
    heading: 'Launching on Shopify is easy.',
    headingEm: 'Doing it right is not.',
    description:
      'Too many stores are born as showcases: nice to look at but they don’t convert. No tracking, no SEO, no structure built to scale.',
    items: [
      {
        title: 'A showcase store doesn’t sell',
        description:
          'Polished design but zero conversion strategy. A structure that can’t handle growth and stalls after the first months.',
      },
      {
        title: 'No tracking from day one',
        description:
          'Campaigns launched blind, unreliable data, wasted budget. With nothing measured, every decision is a gamble.',
      },
      {
        title: 'No one owns the project',
        description:
          'Disconnected freelancers, no overall technical vision, decisions made without data. The result is a patchwork no one controls.',
      },
    ],
  },
  solution: {
    label: 'the solution',
    headingPart1: 'An eCommerce built right',
    headingPart2: 'from day one',
    items: [
      {
        title: 'One technical team',
        description:
          'Development, design, CRO and analytics led by an eCommerce Manager. A single direction across the whole project.',
      },
      {
        title: 'Every aspect at its best',
        description:
          'Server-side tracking, base SEO, performance and CRO included in the build. Not paid extras, but standard.',
      },
      {
        title: 'Lifetime maintenance',
        description:
          'We don’t build and disappear. We stay to maintain and optimize the store over time, so you never start over.',
      },
    ],
  },
  process: {
    label: 'how we work',
    headingPart1: '3 months to ',
    headingEm: 'build it all.',
    description:
      'Three phases, one logical order. The time to set every detail the right way.\nThe flow we use on every project.',
    phases: [
      {
        number: '01',
        title: 'Analysis and strategy',
        duration: 'first ~15 days',
        description:
          'We understand the brand, products, goals, target and positioning. We define the store architecture, catalog structure, conversion and tracking strategy. Nothing starts until the strategy is clear.',
      },
      {
        number: '02',
        title: 'Development and design',
        duration: '~45 days',
        description:
          'Building the custom store: design, development, server-side tracking setup (GA4 and Meta CAPI), base on-page SEO and performance. Everything in staging, validated with you before launch.',
      },
      {
        number: '03',
        title: 'Launch and optimization',
        duration: '~30 days',
        description:
          'Go-live and then continuous monitoring. The team stays on every front (development, SEO, tracking, design, CRO) to optimize data after data, until the store performs at its best.',
      },
    ],
    fourMonths: {
      title: 'Why 3 months to build it all?',
      description:
        'Three months isn’t how long it takes us to put a site online. It’s the time we dedicate to building it right: strategy, development, launch and optimization. And then we stay, with lifetime maintenance included.',
    },
    closingLine: 'Not a team that delivers and disappears.\nA team that stays over time.',
  },
  whyUs: {
    label: 'why us',
    heading: 'Why Our Model Works Better',
    description:
      'A direct comparison between the noprob approach and traditional agencies or freelancers. Why a single structure builds eCommerce that lasts.',
    agencyLabel: 'Other<br />Agency',
    agencyItems: [
      'Slow response times and unclear coordination',
      'They build showcase sites, with no conversion strategy',
      'Tracking and SEO treated as extras, often forgotten',
      'Fragmented teams, poor collaboration',
      'They deliver and disappear, no maintenance',
    ],
    nobrobItems: [
      'Always led by a Senior eCommerce Manager',
      'Responsive, constant support, 7/7 availability',
      'Server-side tracking and base SEO included as standard',
      'A store built to convert and to scale',
      'Lifetime maintenance on every project',
    ],
    featuresDescription:
      'We don’t just deliver a store, we build eCommerce infrastructures brands can rely on over time. That’s why clients stay with us.',
    features: [
      'Specialized in fashion, beauty and DTC verticals',
      'Lifetime maintenance on every build',
      'Custom design, built to convert',
      'Server-side tracking (GA4 and Meta CAPI) included',
      'Base on-page SEO set up correctly from launch',
      'Fixed monthly pricing, no unexpected fees',
      'Optional NDA for full confidentiality',
      'One dedicated point of contact for the whole project',
      'Every collaboration structured for long-term brand growth',
    ],
  },
  pricing: {
    label: 'pricing',
    heading: 'A project, not a service.\nYou pay as we build it.',
    subheading:
      'No thousands of euros upfront: you pay month by month as you watch the store take shape. The price starts low and rises as we take on new projects. The longer you wait, the more it costs.',
    tiers: [
      { price: '€1,600', slot: 'First 10 projects', tag: 'Already taken', state: 'completed' },
      { price: '€1,850', slot: 'Projects 11-20', tag: 'Available now', state: 'current' },
      { price: '€2,100', slot: 'Projects 21-30', tag: 'Next tier', state: 'upcoming' },
      { price: '€2,400', slot: 'From the 31st on', tag: 'Standard price', state: 'upcoming' },
    ],
    priceSuffix: '/mo × 3 months',
    priceBadge: 'noprobagency method',
    guarantee:
      '30-day guarantee: if within 30 days the project doesn’t convince you, we refund you, no questions asked.',
    trustLabel: 'Chosen by Fashion, Supplements and DTC brands',
    cardTitle: 'Shopify Development',
    cardDescription:
      'The complete 3-month project: strategy, custom design, development, tracking and SEO. Managed end to end, with a single point of contact.',
    cardChecks: [
      'Pay over 3 months',
      'Lifetime maintenance included',
      '30-day guarantee',
    ],
    scarcity:
      'The tiers refer to the number of projects we take on: the price rises with experience and demand, not artificial urgency. Apply now and lock the rate before it goes up. No countdown: your slot stays yours while it lasts.',
    cta: 'Apply for your project',
  },
  form: {
    label: 'application',
    heading: 'Apply for your project',
    subheading: 'A few projects per quarter. Apply and let’s see if you’re the right fit.',
    intro: 'The more detail you give, the sharper our assessment. We read every application.',
    fields: {
      name: { label: 'Full name', placeholder: 'John Smith' },
      email: { label: 'Business email', placeholder: 'name@brand.com' },
      brand: { label: 'Brand / company name', placeholder: 'Brand ltd' },
      websiteUrl: { label: 'Brand site or profile (if you have one)', placeholder: 'brand.com or @brand' },
      platform: {
        label: 'Where are you with the store?',
        placeholder: 'Select…',
        options: ['Starting from scratch, new project', 'I have an idea but no store yet', 'I have an existing store to rebuild'],
      },
      revenue: {
        label: 'Approximate annual online revenue',
        placeholder: 'Select…',
        options: ['Not online yet', '< 100k', '100k - 300k', '300k - 1M', '1M+'],
      },
      timeline: {
        label: 'When do you want to start?',
        placeholder: 'Select…',
        options: ['As soon as possible', 'Within 1-3 months', 'Just exploring'],
      },
      reason: {
        label: 'What do you want to build and what’s your goal?',
        placeholder: 'Tell us about the brand, the products and what you want to achieve with the new eCommerce.',
      },
    },
    privacyBefore: 'I have read and accept the ',
    privacyLinkLabel: 'Privacy Policy',
    submit: 'Apply now',
    submitting: 'Sending…',
    errors: {
      name: 'Enter your full name',
      email: 'Enter a valid email address',
      brand: 'Enter the brand name',
      websiteUrl: 'Enter the brand site or profile',
      platform: 'Tell us where you are with the store',
      revenue: 'Select an option',
      timeline: 'Select an option',
      reason: 'Explain in at least 30 characters what you want to build',
      privacy: 'You must accept the Privacy Policy',
    },
    errorGeneric: 'Something went wrong. Please try again in a moment.',
    errorNetwork: 'Network error. Check your connection and try again.',
  },
  faq: {
    label: 'frequently asked questions',
    heading: 'Answers to the ',
    headingEm: 'most common questions',
    subheading: 'Everything you want to know before building your eCommerce on Shopify.',
    items: [
      {
        question: 'Do you work with people starting from scratch?',
        answer:
          'Yes, that’s our focus on this page: we build the entire eCommerce from the ground up, from design to launch. You’re in the right place if you’re launching the brand or finally want to do it right.',
      },
      {
        question: 'What does development include?',
        answer:
          'Custom design, store development, server-side tracking (GA4 and Meta CAPI), base on-page SEO, performance and CRO. Not included: product photography, content and influencer management.',
      },
      {
        question: 'What does lifetime maintenance mean?',
        answer:
          'After launch we stay to maintain and optimize the store over time, so you never have to rebuild or switch partner. It’s the central differentiator of our model.',
      },
      {
        question: 'How long does the project take?',
        answer:
          'Three structured months: analysis and strategy, development and design, launch and optimization. The right time to build everything well and follow it in detail.',
      },
      {
        question: 'How does payment work?',
        answer:
          'Spread monthly over the 3 months, so there’s no single upfront payment. 30-day money-back guarantee: if the project doesn’t convince you, we refund you.',
      },
      {
        question: 'Which platform do you build on?',
        answer:
          'Shopify only. It’s the platform we specialize in and the one that lets you scale with no technical limits.',
      },
      {
        question: 'Who is my point of contact?',
        answer:
          'A single eCommerce Manager, who leads the team and handles all communication. The same person from start to finish.',
      },
      {
        question: 'Do you offer guarantees?',
        answer:
          'Yes, a 30-day money-back guarantee on the development project. And after launch, lifetime maintenance stays included.',
      },
    ],
  },
}

const dictionaries: Record<Locale, SviluppoCopy> = { it, en }

export function getSviluppoCopy(locale: Locale): SviluppoCopy {
  return dictionaries[locale]
}
