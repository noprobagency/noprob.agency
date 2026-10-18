import type { Locale } from '@/lib/i18n'

/**
 * Copy module for the "Migrazione a Shopify" / "Shopify Migration" landing page.
 * Routes: it -> /it/migrazione-shopify, en -> /shopify-migration.
 *
 * Isolated from the large shared dictionary in `lib/i18n/index.ts` to keep that
 * file stable, while following the house i18n convention: a typed, locale-keyed
 * object consumed through a `get*` accessor. Only `seo.migrazioneShopify` lives
 * in the shared dictionary (so `buildMetadata({ pageKey })` keeps working).
 */

export type MigrazioneCopy = {
  hero: {
    trustRatingLabel: string
    trustSectors: string
    titlePart1: string
    titleEm1: string
    titleMid: string
    titleEm2: string
    titlePart2: string
    subtitle: string
    microBenefits: string[]
    cta: string
    trustedCount: string
  }
  problem: {
    label: string
    heading: string
    headingEm: string
    description: string
    items: { title: string; description: string }[]
  }
  solution: {
    label: string
    headingPart1: string
    headingEm: string
    description: string
    items: { title: string; description: string }[]
  }
  charts: {
    label: string
    title1: string
    titleEm: string
    subtitle: string
  }
  process: {
    label: string
    headingPart1: string
    headingEm: string
    description: string
    phases: { number: string; title: string; duration: string; description: string }[]
    fourMonths: { title: string; description: string }
    closingLine: string
  }
  /** "AI powered" banner that links to the Shopify Launch Sprint landing */
  sprintBanner: { badge: string; title: string; titleEm: string; text: string; points: string[]; cta: string }
  pricing: {
    label: string
    heading: string
    subheading: string
    tiers: { price: string; slot: string; tag: string; state: 'completed' | 'current' | 'upcoming' }[]
    priceSuffix: string
    /** Shown above the starting price (migration page, landing tiers). */
    priceFrom?: string
    priceBadge: string
    guarantee: string
    trustLabel: string
    cardTitle: string
    cardDescription: string
    cardChecks: string[]
    scarcity: string
    cta: string
  }
  faq: {
    label: string
    heading: string
    headingEm: string
    subheading: string
    items: { question: string; answer: string }[]
  }
  form: {
    label: string
    heading: string
    subheading: string
    intro: string
    fields: {
      name: { label: string; placeholder: string }
      email: { label: string; placeholder: string }
      brand: { label: string; placeholder: string }
      websiteUrl: { label: string; placeholder: string }
      platform: { label: string; placeholder: string; options?: string[] }
      revenue: { label: string; placeholder: string; options: string[] }
      timeline: { label: string; placeholder: string; options: string[] }
      reason: { label: string; placeholder: string }
    }
    privacyBefore: string
    privacyLinkLabel: string
    submit: string
    submitting: string
    errors: {
      name: string
      email: string
      brand: string
      websiteUrl: string
      platform: string
      revenue: string
      timeline: string
      reason: string
      privacy: string
    }
    errorGeneric: string
    errorNetwork: string
  }
}

const it: MigrazioneCopy = {
  hero: {
    trustRatingLabel: '5/5',
    trustSectors: 'Scelti da brand di Moda, Integratori e DTC eCommerce',
    titlePart1: 'Migra a Shopify senza perdere ',
    titleEm1: 'vendite',
    titleMid: ' e ',
    titleEm2: 'clienti',
    titlePart2: '',
    subtitle:
      'Non un semplice “ricostruiamo il tuo sito”. In 14 giorni portiamo il tuo store su Shopify e lo impostiamo per vendere meglio: design, tracciamento, performance, SEO. Un solo interlocutore, un report per ogni area, 4 garanzie scritte e 90 giorni di supporto dopo il go-live.',
    microBenefits: ['Store pronto in 14 giorni', 'Redirect SEO 1:1', 'Nemmeno un secondo offline'],
    cta: 'Candidati per la migrazione',
    trustedCount: 'Scelti da brand di Moda, Integratori e DTC eCommerce',
  },
  problem: {
    label: 'il problema',
    heading: 'La tua piattaforma ',
    headingEm: 'ti tiene fermo',
    description:
      'Cambiare piattaforma sembra un rischio enorme. Restare dove sei costa di più, ogni giorno, in vendite che non fai. Lo dicono i numeri.',
    items: [
      {
        title: 'Piattaforma rigida',
        description:
          'Ogni modifica passa da un ticket. Fuori dagli sconti non riesci a spingere. La piattaforma decide cosa puoi fare, non tu.',
      },
      {
        title: 'Paura di migrare',
        description:
          'Hai sentito storie di chi ha cambiato piattaforma e ha perso metà del traffico organico. È la paura numero uno, ed è legittima.',
      },
      {
        title: 'Caos gestionale',
        description:
          'Inventario, ordini in corso, clienti abituali. Cambiare piattaforma sembra aprire un cantiere che blocca tutto per mesi.',
      },
    ],
  },
  solution: {
    label: 'la soluzione',
    headingPart1: 'Team con esperienza per una migrazione ',
    headingEm: 'gestita e prevedibile.',
    description:
      'In una migrazione quasi tutto si può prevedere: dati, redirect, integrazioni, SEO. Un team che le ha già fatte sa dove sono i punti critici e li copre prima che diventino problemi.',
    items: [
      {
        title: 'Esperienza reale',
        description:
          'Migrazioni complesse e redirect su larga scala, fatti bene. Sappiamo dove guardare prima ancora di iniziare.',
      },
      {
        title: 'Un team esperto',
        description:
          'Sviluppo, SEO, tracciamento, design. Quando emerge un imprevisto non aspetti il freelancer giusto: il team è già lì, completo, e interviene subito.',
      },
      {
        title: 'Un partner di crescita',
        description:
          'Non consegniamo e spariamo. Dopo il go-live restiamo 90 giorni su SEO, tracking e checkout: troviamo cosa si può migliorare e lo miglioriamo, ogni settimana.',
      },
    ],
  },
  charts: {
    label: 'search console',
    title1: 'Dopo ogni migrazione il traffico scende. ',
    titleEm: 'Conta cosa succede dopo.',
    subtitle:
      'Google ri-elabora il sito: il calo è fisiologico. La risalita dipende da come è fatta la migrazione.',
  },
  process: {
    label: 'come lavoriamo',
    headingPart1: '14 giorni per ',
    headingEm: 'essere su Shopify.',
    description:
      'Uno sprint di 2 settimane, poi il go-live nella data che scegli tu e 90 giorni al tuo fianco.\nIl flusso testato e confermato dopo oltre 10 progetti.',
    phases: [
      {
        number: '01',
        title: 'Sprint',
        duration: 'giorni 1-14',
        description:
          'Kickoff, import di prodotti, clienti e ordini, riconciliazione al 100%, replica 1:1 dei template, Redirect Map, tracking server-side, checklist del flusso d’acquisto e test su 3 dispositivi. Al giorno 14 lo store è pronto a pubblicare.',
      },
      {
        number: '02',
        title: 'Go-live',
        duration: 'giorni 15-30',
        description:
          'La data la scegli tu. Cambio DNS, redirect attivi, sitemap e Search Console. Nemmeno un secondo offline, e 48 ore di presidio dopo il lancio.',
      },
      {
        number: '03',
        title: 'Supporto e crescita',
        duration: '90 giorni dal go-live',
        description:
          'Bug fix, modifiche, monitoraggio di SEO e tracking e nuove ottimizzazioni ogni settimana. Un Loom settimanale di 10 minuti e il report al giorno 90.',
      },
    ],
    fourMonths: {
      title: 'Perché bastano 14 giorni?',
      description:
        'Perché il lavoro è sempre lo stesso e lo abbiamo già fatto: dati, redirect, tracking, checkout. Un metodo fisso, un calendario giorno per giorno e un team completo dal primo giorno. Il tempo che risparmi lo usi per vendere, non per aspettare.',
    },
    closingLine: 'Non un team che consegna e sparisce.\nUn team che resta 90 giorni dopo il go-live.',
  },
  sprintBanner: {
    badge: 'AI powered',
    title: 'Shopify Launch Sprint:',
    titleEm: 'su Shopify in 14 giorni.',
    text: 'Il metodo con cui migriamo: un team intero e il nostro Custom AI System, con l’AI su ogni area nello stesso momento. Dati, redirect, tracking e checkout pronti in due settimane, con 4 garanzie scritte.',
    points: ['Store pronto al giorno 14', 'Custom AI System su misura', 'Prezzo fisso, 4 garanzie'],
    cta: 'Scopri lo sprint',
  },
  pricing: {
    label: 'prezzo',
    heading: 'Prezzo fisso, quattro rate.\nNessun preventivo.',
    subheading:
      'Prezzo pubblico in base alla dimensione della tua azienda. Prima rata al kickoff, seconda al go-live, terza e quarta nei mesi di supporto.',
    tiers: [],
    priceSuffix: '/rata × 4',
    priceFrom: 'A partire da',
    priceBadge: 'metodo noprobagency',
    guarantee:
      '4 garanzie scritte: store pronto al giorno 14, traffico organico, go-live senza downtime e checkout. Se non funziona, paghiamo noi.',
    trustLabel: 'Scelti da brand di Moda, Integratori e DTC eCommerce',
    cardTitle: 'Migrazione Shopify',
    cardDescription:
      'Lo sprint completo di 14 giorni: migrazione tecnica, tracking, SEO e flusso d’acquisto. Poi go-live e 90 giorni di supporto. Un solo interlocutore.',
    cardChecks: ['Store pronto in 14 giorni', 'Redirect SEO 1:1', '4 garanzie scritte'],
    scarcity: '',
    cta: 'Candidati ora',
  },
  faq: {
    label: 'domande frequenti',
    heading: 'Le risposte alle ',
    headingEm: 'domande più comuni',
    subheading:
      'Le obiezioni più comuni prima di migrare a Shopify. Senza giri di parole.',
    items: [
      {
        question: 'Quanto dura davvero la migrazione?',
        answer:
          'Lo sprint dura 14 giorni: al giorno 14 lo store è pronto a pubblicare. Il go-live lo fai tra il giorno 15 e il 30, nella data che scegli tu. Poi restiamo 90 giorni per supporto, monitoraggio e miglioramento.',
      },
      {
        question: 'Quali garanzie avete?',
        answer:
          'Quattro, scritte nel contratto: store pronto al giorno 14 o ti rimborsiamo la prima rata; traffico organico sotto la baseline a 90 giorni e lavoriamo gratis finché non torna; store offline al lancio per colpa nostra e una rata la paghiamo noi; checkout che converte meno di prima e lo ottimizziamo gratis finché non supera.',
      },
      {
        question: 'Perderò posizionamento su Google?',
        answer:
          'No, se la migrazione è gestita. Redirect 1:1, SEO tecnica, monitoraggio post-lancio: il lavoro è impostato nel dettaglio proprio per evitare penalizzazioni e cali. È il punto su cui lavoriamo di più.',
      },
      {
        question: 'Il mio store resta online durante la migrazione?',
        answer:
          'Sì. Lavoriamo in staging e al go-live il sito non si ferma un secondo. I tuoi clienti non si accorgono di nulla.',
      },
      {
        question: 'Da quali piattaforme migrate?',
        answer:
          'CRM, ERP e gestionali integrati, WooCommerce, PrestaShop, Magento. E store già esistenti da ricostruire.',
      },
      {
        question: 'Chi è il mio referente?',
        answer:
          'Un solo interlocutore dedicato, per tutto il percorso. La stessa persona dall’inizio alla fine. Non un venditore, ma il project manager ed esperto eCommerce del tuo progetto.',
      },
      {
        question: 'Cosa succede dopo i 90 giorni?',
        answer:
          'Lo store è su Shopify, solido e misurato. Da qui può entrare tutto il team performance per farlo crescere con advertising, email marketing, CRO e ottimizzazione continua. È il passo naturale verso una [gestione completa](/it/team-ecommerce-dedicato).',
      },
      {
        question: 'E se il mio store è molto complesso?',
        answer:
          'Lo capiamo prima di partire: per questo il prezzo dipende dalla dimensione dell’azienda e il kickoff parte solo con tutti gli accessi. Se qualcosa richiede sviluppo extra, lo mettiamo per iscritto prima, con tempi e costi chiari.',
      },
    ],
  },
  form: {
    label: 'candidatura',
    heading: 'Candidati per la migrazione',
    subheading: 'Pochi slot per trimestre. Candidati e vediamo se sei il progetto giusto.',
    intro: 'Più dettagli ci dai, più la valutazione è rapida. Leggiamo ogni candidatura.',
    fields: {
      name: { label: 'Nome e cognome', placeholder: 'Mario Rossi' },
      email: { label: 'Email aziendale', placeholder: 'nome@brand.com' },
      brand: { label: 'Nome del brand / azienda', placeholder: 'Brand srl' },
      websiteUrl: { label: 'URL del sito eCommerce attuale', placeholder: 'brand.com' },
      platform: {
        label: 'Su quale piattaforma sei ora?',
        placeholder: 'es. WooCommerce, Magento, PrestaShop, Custom…',
      },
      revenue: {
        label: 'Fatturato online annuo indicativo',
        placeholder: 'Seleziona…',
        options: ['< 100k', '100k - 300k', '300k - 1M', '1M - 3M', '3M+'],
      },
      timeline: {
        label: 'Da quando vuoi partire?',
        placeholder: 'Seleziona…',
        options: ['Il prima possibile', 'Entro 1-3 mesi', 'Sto solo valutando'],
      },
      reason: {
        label: 'Qual è il motivo principale per cui vuoi passare a Shopify?',
        placeholder: 'Raccontaci cosa ti blocca oggi e cosa vuoi ottenere con la migrazione.',
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
      websiteUrl: 'Inserisci l’URL del tuo sito',
      platform: 'Indica la piattaforma attuale',
      revenue: 'Seleziona un’opzione',
      timeline: 'Seleziona un’opzione',
      reason: 'Spiega in almeno 30 caratteri il motivo del passaggio',
      privacy: 'Devi accettare la Privacy Policy',
    },
    errorGeneric: 'Qualcosa è andato storto. Riprova tra un momento.',
    errorNetwork: 'Errore di rete. Controlla la connessione e riprova.',
  },
}

const en: MigrazioneCopy = {
  hero: {
    trustRatingLabel: '5/5',
    trustSectors: 'Chosen by Fashion, Supplements and DTC brands',
    titlePart1: 'Migrate to Shopify without losing ',
    titleEm1: 'sales',
    titleMid: ' or ',
    titleEm2: 'customers',
    titlePart2: '',
    subtitle:
      'Not just “we rebuild your site”. In 14 days we move your store to Shopify and set it up to sell better: design, tracking, performance, SEO. One point of contact, a report for every area, 4 written guarantees and 90 days of support after go-live.',
    microBenefits: ['Store ready in 14 days', '1:1 SEO redirects', 'Never a second offline'],
    cta: 'Apply for your migration',
    trustedCount: 'Chosen by Fashion, Supplements and DTC brands',
  },
  problem: {
    label: 'the problem',
    heading: 'Your platform ',
    headingEm: 'is holding you back',
    description:
      'Switching platforms feels like a huge risk. Staying where you are costs you more, every day, in sales you’re not making. The numbers say so.',
    items: [
      {
        title: 'Rigid platform',
        description:
          'Every change goes through a ticket. Outside of sales periods you can’t really push. The platform decides what you can do, not you.',
      },
      {
        title: 'Fear of migrating',
        description:
          'You’ve heard stories of brands that switched and lost half their organic traffic. It’s the number one fear, and it’s a fair one.',
      },
      {
        title: 'Operational chaos',
        description:
          'Inventory, open orders, returning customers. Switching platforms feels like opening a construction site that blocks everything for months.',
      },
    ],
  },
  solution: {
    label: 'the solution',
    headingPart1: 'An experienced team for a ',
    headingEm: 'managed, predictable migration.',
    description:
      'In a migration, almost everything can be planned for: data, redirects, integrations, SEO. A team that has done them well already knows where the critical points are and covers them before they become problems.',
    items: [
      {
        title: 'Real experience',
        description:
          'Complex migrations and large-scale redirects, done right. We know where to look before we even start.',
      },
      {
        title: 'An expert team',
        description:
          'Development, SEO, tracking, design. When something unexpected comes up you don’t wait for the right freelancer: the team is already there, complete, and steps in right away.',
      },
      {
        title: 'A growth partner',
        description:
          'We do not deliver and disappear. After go-live we stay 90 days on SEO, tracking and checkout: we find what can improve and we improve it, every week.',
      },
    ],
  },
  charts: {
    label: 'search console',
    title1: 'After every migration, traffic drops. ',
    titleEm: 'What matters is what happens next.',
    subtitle:
      'Google re-processes the site: the drop is normal. The recovery depends on how the migration is done.',
  },
  process: {
    label: 'how we work',
    headingPart1: '14 days to ',
    headingEm: 'be on Shopify.',
    description:
      'A 2-week sprint, then go-live on the date you choose and 90 days by your side.\nThe flow tested and confirmed over more than 10 projects.',
    phases: [
      {
        number: '01',
        title: 'Sprint',
        duration: 'days 1-14',
        description:
          'Kickoff, import of products, customers and orders, 100% reconciliation, 1:1 template replication, Redirect Map, server-side tracking, purchase-flow checklist and tests on 3 devices. On day 14 the store is ready to publish.',
      },
      {
        number: '02',
        title: 'Go-live',
        duration: 'days 15-30',
        description:
          'You pick the date. DNS switch, redirects live, sitemap and Search Console. Not a second offline, and 48 hours on watch after launch.',
      },
      {
        number: '03',
        title: 'Support and growth',
        duration: '90 days from go-live',
        description:
          'Bug fixes, changes, SEO and tracking monitoring and new optimizations every week. A weekly 10-minute Loom and a report on day 90.',
      },
    ],
    fourMonths: {
      title: 'Why are 14 days enough?',
      description:
        'Because the work is always the same and we have done it before: data, redirects, tracking, checkout. A fixed method, a day-by-day calendar and a full team from day one. The time you save goes into selling, not waiting.',
    },
    closingLine: 'Not a team that delivers and disappears.\nA team that stays 90 days after go-live.',
  },
  sprintBanner: {
    badge: 'AI powered',
    title: 'Shopify Launch Sprint:',
    titleEm: 'on Shopify in 14 days.',
    text: 'The method we migrate with: a whole team and our Custom AI System, with AI on every area at the same time. Data, redirects, tracking and checkout ready in two weeks, with 4 written guarantees.',
    points: ['Store ready on day 14', 'Made-to-measure Custom AI System', 'Fixed price, 4 guarantees'],
    cta: 'Discover the sprint',
  },
  pricing: {
    label: 'pricing',
    heading: 'Fixed price, four installments.\nNo quotes.',
    subheading:
      'Public price based on the size of your company. First installment at kickoff, second at go-live, third and fourth during the support months.',
    tiers: [],
    priceSuffix: '/installment × 4',
    priceFrom: 'Starting from',
    priceBadge: 'noprobagency method',
    guarantee:
      '4 written guarantees: store ready on day 14, organic traffic, zero-downtime go-live and checkout. If it does not work, we pay.',
    trustLabel: 'Chosen by Fashion, Supplements and DTC brands',
    cardTitle: 'Shopify Migration',
    cardDescription:
      'The full 14-day sprint: technical migration, tracking, SEO and purchase flow. Then go-live and 90 days of support. One point of contact.',
    cardChecks: ['Store ready in 14 days', '1:1 SEO redirects', '4 written guarantees'],
    scarcity: '',
    cta: 'Apply now',
  },
  faq: {
    label: 'faq',
    heading: 'Answers to the ',
    headingEm: 'most common questions',
    subheading: 'The most common objections before migrating to Shopify. No fluff.',
    items: [
      {
        question: 'How long does the migration really take?',
        answer:
          'The sprint lasts 14 days: on day 14 the store is ready to publish. You go live between day 15 and day 30, on the date you choose. Then we stay 90 days for support, monitoring and improvement.',
      },
      {
        question: 'What guarantees do you give?',
        answer:
          'Four, written in the contract: store ready on day 14 or we refund the first installment; organic traffic below baseline at 90 days and we work for free until it is back; store offline at launch through our fault and we pay one installment; checkout converting less than before and we optimize it for free until it beats it.',
      },
      {
        question: 'Will I lose my Google rankings?',
        answer:
          'No, if the migration is managed. 1:1 redirects, technical SEO, post-launch monitoring: the work is set up in detail precisely to avoid penalties and drops. It’s what we work on most.',
      },
      {
        question: 'Does my store stay online during the migration?',
        answer:
          'Yes. We work in staging, and at go-live the site doesn’t stop for a second. Your customers don’t notice a thing.',
      },
      {
        question: 'Which platforms do you migrate from?',
        answer:
          'CRM, ERP and integrated management systems, WooCommerce, PrestaShop, Magento. And existing stores that need rebuilding.',
      },
      {
        question: 'Who is my point of contact?',
        answer:
          'One dedicated point of contact, for the whole journey. The same person from start to finish. Not a salesperson, but the project manager and eCommerce expert for your project.',
      },
      {
        question: 'What happens after the 90 days?',
        answer:
          'The store is on Shopify, solid and measured. From here the whole performance team can step in to grow it with advertising, email marketing, CRO and continuous optimization. It is the natural step towards [full management](/data-driven-team).',
      },
      {
        question: 'What if my store is very complex?',
        answer:
          'We find out before we start: that is why the price depends on company size and kickoff only starts with every access in place. If something needs extra development, we put it in writing first, with clear timing and costs.',
      },
    ],
  },
  form: {
    label: 'application',
    heading: 'Apply for your migration',
    subheading: 'A few slots per quarter. Apply and let’s see if you’re the right fit.',
    intro: 'The more details you give us, the faster the review. We read every application.',
    fields: {
      name: { label: 'Full name', placeholder: 'John Smith' },
      email: { label: 'Business email', placeholder: 'name@brand.com' },
      brand: { label: 'Brand / company name', placeholder: 'Brand Ltd' },
      websiteUrl: { label: 'Current eCommerce URL', placeholder: 'brand.com' },
      platform: {
        label: 'Which platform are you on now?',
        placeholder: 'e.g. WooCommerce, Magento, PrestaShop, Custom…',
      },
      revenue: {
        label: 'Approximate annual online revenue',
        placeholder: 'Select…',
        options: ['< 100k', '100k - 300k', '300k - 1M', '1M - 3M', '3M+'],
      },
      timeline: {
        label: 'When do you want to start?',
        placeholder: 'Select…',
        options: ['As soon as possible', 'Within 1-3 months', 'Just exploring'],
      },
      reason: {
        label: 'What’s the main reason you want to move to Shopify?',
        placeholder: 'Tell us what’s blocking you today and what you want to achieve with the migration.',
      },
    },
    privacyBefore: 'I have read and accept the ',
    privacyLinkLabel: 'Privacy Policy',
    submit: 'Apply now',
    submitting: 'Sending…',
    errors: {
      name: 'Enter your full name',
      email: 'Enter a valid email address',
      brand: 'Enter your brand name',
      websiteUrl: 'Enter your site URL',
      platform: 'Tell us your current platform',
      revenue: 'Select an option',
      timeline: 'Select an option',
      reason: 'Explain in at least 30 characters',
      privacy: 'You must accept the Privacy Policy',
    },
    errorGeneric: 'Something went wrong. Please try again.',
    errorNetwork: 'Network error. Check your connection and try again.',
  },
}

const dictionaries: Record<Locale, MigrazioneCopy> = { it, en }

export function getMigrazioneCopy(locale: Locale): MigrazioneCopy {
  return dictionaries[locale]
}
