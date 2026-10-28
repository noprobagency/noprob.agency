import type { Locale } from '@/lib/i18n'
import type { ArticleSection } from '@/data/articles'

/**
 * Copy module for the "Migrazione a Shopify" / "Shopify Migration" landing page.
 * Routes: it -> /it/migrazione-shopify, en -> /shopify-migration.
 *
 * Isolated from the large shared dictionary in `lib/i18n/index.ts` to keep that
 * file stable, while following the house i18n convention: a typed, locale-keyed
 * object consumed through a `get*` accessor. Only `seo.migrazioneShopify` lives
 * in the shared dictionary (so `buildMetadata({ pageKey })` keeps working).
 */

/**
 * Section shapes below are no longer part of the migration page copy (the page is now a guide).
 * They stay exported because the Sviluppo, Data-Driven Team and Team roadmap copy modules
 * reuse them for MigrazioneProcess, MigrazionePricing and MigrazioneForm.
 */
export type MigrazioneProcessCopy = {
  label: string
  headingPart1: string
  headingEm: string
  description: string
  phases: { number: string; title: string; duration: string; description: string }[]
  fourMonths: { title: string; description: string }
  closingLine: string
}

export type MigrazionePricingCopy = {
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

export type MigrazioneFormCopy = {
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
  /** Body of the complete migration guide (typed sections, same inline syntax as blog articles). */
  guide: { sections: ArticleSection[] }
  charts: {
    label: string
    title1: string
    titleEm: string
    subtitle: string
  }
  /** "AI powered" banner that links to the Shopify Launch Sprint landing */
  sprintBanner: { badge: string; title: string; titleEm: string; text: string; points: string[]; cta: string }
  faq: {
    label: string
    heading: string
    headingEm: string
    subheading: string
    items: { question: string; answer: string }[]
  }
}

const it: MigrazioneCopy = {
  hero: {
    trustRatingLabel: '5/5',
    trustSectors: 'Scelti da brand di Moda, Integratori e DTC eCommerce',
    titlePart1: 'Migrazione a ',
    titleEm1: 'Shopify',
    titleMid: ': la ',
    titleEm2: 'guida completa',
    titlePart2: '',
    subtitle:
      'Tutto quello che cambia quando passi a Shopify: piattaforme, dati, SEO e redirect 301, tracking, tempi, rischi e costi, con due migrazioni reali.',
    microBenefits: ['Piattaforme e dati', 'SEO e redirect 301', 'Tempi, rischi e costi'],
    cta: 'Scopri lo Shopify Launch Sprint',
    trustedCount: 'Scelti da brand di Moda, Integratori e DTC eCommerce',
  },
  guide: {
    sections: [
      {
        type: 'paragraph',
        text: 'Una migrazione a Shopify significa spostare il tuo eCommerce (prodotti, clienti, ordini, contenuti e URL) dalla piattaforma attuale a Shopify, mantenendo ciò che già funziona: il posizionamento su Google, i dati dei clienti e il tracciamento. Questa guida è per founder e responsabili eCommerce che stanno valutando il passaggio, o che hanno già deciso e vogliono sapere cosa succede davvero, in quale ordine e dove si rischia.',
      },
      {
        type: 'paragraph',
        text: 'La scrive noprob agency, un team che fa migrazioni a Shopify. Spieghiamo l’intero processo, comprese le parti che puoi fare da solo. Il metodo dello Sprint è lo stesso qualunque sia la piattaforma di partenza: stesse fasi, stessa mappa dei redirect, stessi controlli.',
      },
      { type: 'paragraph', text: '**In questa guida**' },
      {
        type: 'list',
        items: [
          'Da quali piattaforme si migra e cosa cambia',
          'Cosa si sposta davvero',
          'SEO e redirect 301',
          'Tracking e dati',
          'Quanto dura una migrazione',
          'Rischi e come evitarli',
          'Quanto costa',
          'La checklist di migrazione',
          'Due migrazioni reali',
        ],
      },
      { type: 'h2', text: 'Da quali piattaforme si migra a Shopify?' },
      {
        type: 'paragraph',
        text: 'Si migra a Shopify da tutte le principali piattaforme, e la fonte più grande è WooCommerce. Secondo [Store Leads](https://storeleads.app/reports/shopify), nei 90 giorni al 9 ottobre 2026 sono passati a Shopify da altre piattaforme 27.247 merchant, circa 300 al giorno, e 9.204 arrivavano da WooCommerce. È un flusso lordo: nello stesso periodo Shopify ne ha persi 17.922, quindi il saldo netto è +9.325.',
      },
      { type: 'paragraph', text: 'Cosa cambia a seconda del punto di partenza:' },
      {
        type: 'list',
        items: [
          '**WooCommerce**: prodotti, ordini e clienti stanno nel database di WordPress e molte funzioni arrivano da plugin. Ogni plugin va sostituito con un’app o una funzione nativa di Shopify, oppure eliminato. Anche il blog vive di solito su WordPress e va spostato o mantenuto.',
          '**Magento / Adobe Commerce**: di solito cataloghi grandi, molti attributi, moduli su misura e regole B2B. Il lavoro sta soprattutto nel mappare attributi e logiche custom sul modello dati di Shopify (metafield, app o codice dedicato).',
          '**PrestaShop**: funzioni affidate a moduli, spesso con più lingue e più negozi. Contano la pulizia del catalogo, la mappatura dei moduli e la struttura degli URL per lingua.',
          '**Wix e Squarespace**: piattaforme chiuse, con opzioni di esportazione più ridotte rispetto a quelle self-hosted. Prima di decidere verifica cosa riesci a esportare di prodotti, clienti, ordini e blog.',
          '**BigCommerce**: piattaforma SaaS come Shopify. Il lavoro riguarda soprattutto design, app e URL.',
          '**Piattaforme proprietarie**: spesso legate a un gestionale. Il lavoro è ricostruire i flussi di dati (giacenze, prezzi, ordini) tra gestionale e Shopify, oltre a spostare il catalogo.',
        ],
      },
      {
        type: 'paragraph',
        text: 'Noi abbiamo migrato store da WooCommerce e da una piattaforma proprietaria collegata a un gestionale (due casi in fondo alla guida). Su ogni piattaforma applichiamo lo stesso metodo dello Sprint (audit, mappa dei redirect 301, migrazione dei dati, QA): le indicazioni sopra rimandano alla documentazione di Shopify. Il primo passo è sempre l’audit del tuo store.',
      },
      { type: 'h2', text: 'Cosa si sposta davvero in una migrazione a Shopify?' },
      {
        type: 'paragraph',
        text: 'Quasi tutto ciò che è un dato si può spostare, ma ogni elemento ha le sue regole. Questi sono i blocchi da prevedere:',
      },
      {
        type: 'list',
        items: [
          '**Prodotti e varianti**: titoli, descrizioni, immagini, SKU, prezzi, giacenze e opzioni (taglia, colore). Shopify gestisce le varianti come opzioni del prodotto, con limiti precisi (vedi la [documentazione Shopify sulle varianti](https://help.shopify.com/it/manual/products/variants)), quindi i prodotti con molti attributi vanno rimodellati.',
          '**Collezioni**: manuali o automatiche, con le regole che le popolano.',
          '**Clienti**: anagrafiche e indirizzi si importano ([guida Shopify all’importazione dei clienti](https://help.shopify.com/it/manual/customers/import-export-customers)), le password no. I clienti ricevono un’email di attivazione dell’account per sceglierne una nuova: conviene avvisarli prima.',
          '**Storico ordini**: importato come storico, così report e area clienti restano completi. Dopo l’import si riconciliano numero e totali con la piattaforma di partenza.',
          '**Contenuti e blog**: pagine, articoli, immagini, categorie e metadati SEO.',
          '**URL**: cambiano quasi sempre, per questo servono i redirect (sezione successiva).',
          '**App e integrazioni**: pagamenti, spedizioni, gestionale, CRM, email marketing, recensioni, abbonamenti. Ognuna diventa un’app Shopify, una funzione nativa o un’integrazione su misura.',
          '**Tracking**: GA4, pixel degli advertising, consenso cookie.',
        ],
      },
      {
        type: 'paragraph',
        text: 'Shopify documenta le basi nel suo [centro assistenza sulla migrazione](https://help.shopify.com/it/manual/migrating-to-shopify), con le app di importazione e il formato dei file CSV. Leggilo prima di definire il perimetro del progetto.',
      },
      { type: 'h2', text: 'Come si mantiene la SEO e come si impostano i redirect 301?' },
      {
        type: 'paragraph',
        text: 'La SEO si mantiene dando a ogni vecchio URL un redirect 301 verso il suo equivalente più vicino su Shopify e tenendo titoli, descrizioni, intestazioni e contenuti vicini a quelli che oggi si posizionano.',
      },
      {
        type: 'paragraph',
        text: 'Su Shopify la struttura degli URL ha prefissi fissi: /products/, /collections/, /pages/ e /blogs/. Se la tua piattaforma usa schemi diversi, quasi ogni URL cambia (per esempio una categoria in /scarpe/ diventa /collections/scarpe). Per questo serve una mappa dei redirect, il passaggio che più spesso decide come va la migrazione sul fronte SEO:',
      },
      {
        type: 'list',
        items: [
          '**Raccogli gli URL**: crawl del vecchio sito, più gli URL con traffico in Search Console e quelli con backlink.',
          '**Mappa uno a uno**: ogni vecchio URL va al nuovo URL equivalente. Se una pagina non esiste più, reindirizza alla categoria più vicina, non alla home.',
          '**Caricali in Shopify**: i redirect si gestiscono dalla sezione URL Redirects dell’admin, con importazione da CSV.',
          '**Controlla dopo il lancio**: ripeti il crawl della lista dei vecchi URL, trova i 404 e le catene di redirect e correggili.',
          '**Aggiorna Search Console**: invia la nuova sitemap e monitora scansione e impressioni per le settimane successive.',
        ],
      },
      {
        type: 'paragraph',
        text: 'La [guida di Google Search Central sui trasferimenti di sito con cambio di URL](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes) dice la stessa cosa: mappa vecchi e nuovi URL, usa redirect permanenti e tienili attivi il più a lungo possibile, idealmente almeno un anno.',
      },
      {
        type: 'paragraph',
        text: 'Nel caso Integratori DTC Nazzi (da WooCommerce a Shopify) abbiamo fatto questo controllo dopo il lancio su 215 URL WooCommerce archiviati, e il CSV dei redirect 301 è stato consegnato per l’importazione in Shopify. In Search Console gli ultimi 28 giorni al 9 ottobre 2026 mostrano clic 2,7 volte e impressioni 4,0 volte rispetto agli stessi 28 giorni del 2025. I clic giornalieri sono scesi sotto il livello pre-lancio ad agosto e sono risaliti sopra a settembre e ottobre: in una migrazione il posizionamento si muove, ed è la mappa dei redirect a decidere come recupera.',
      },
      { type: 'h2', text: 'Come si gestiscono tracking e dati?' },
      {
        type: 'paragraph',
        text: 'Il tracking va ricostruito prima del lancio, non dopo, perché ogni giorno senza dati corretti è un giorno che non potrai confrontare con prima.',
      },
      {
        type: 'list',
        items: [
          '**GA4**: gli eventi dell’acquisto (visualizzazione prodotto, aggiunta al carrello, inizio checkout, acquisto) vanno riportati sugli eventi cliente di Shopify. Se possibile mantieni la stessa proprietà GA4, così lo storico continua.',
          '**Pixel e conversioni degli advertising**: ricollegali e verifica che i valori di acquisto arrivino corretti.',
          '**Tracking server-side**: riduce la perdita di dati causata da browser e blocchi, e rende le conversioni più affidabili.',
          '**Consenso cookie**: banner e Consent Mode vanno configurati bene fin dal primo giorno, soprattutto se vendi in Europa.',
        ],
      },
      { type: 'h2', text: 'Quanto dura una migrazione a Shopify?' },
      {
        type: 'paragraph',
        text: 'Una migrazione a Shopify dura da poche settimane a diversi mesi, a seconda della dimensione del catalogo, del numero di integrazioni e di quanto del design si ricostruisce. Le fasi sono quasi sempre le stesse:',
      },
      {
        type: 'list',
        items: [
          '**Analisi e perimetro**: piattaforma, app, URL, dati e integrazioni da portare.',
          '**Import e riconciliazione dei dati**: prodotti, clienti, ordini, con controllo dei totali.',
          '**Design e store**: replica o ridisegno delle pagine.',
          '**Integrazioni e app**: pagamenti, spedizioni, gestionale, email.',
          '**SEO**: mappa dei redirect, metadati, sitemap.',
          '**Tracking**: GA4, pixel, server-side, consenso.',
          '**Test**: checkout, pagamenti, spedizioni, tasse, codici sconto, email, su più dispositivi.',
          '**Go-live**: cambio DNS, redirect attivi, sitemap inviata.',
          '**Monitoraggio dopo il lancio**: Search Console, errori 404, conversioni.',
        ],
      },
      {
        type: 'paragraph',
        text: 'Lo [Shopify Launch Sprint](/it/sprint-migrazione-shopify) comprime questo percorso in un calendario fisso: lo store è pronto al giorno 14, il go-live avviene tra il giorno 15 e il 30 nella data che scegli tu, e seguono 90 giorni di supporto. Lavora con un team completo, il nostro Custom AI System e un solo referente.',
      },
      { type: 'h2', text: 'Quali sono i rischi di una migrazione e come si evitano?' },
      {
        type: 'paragraph',
        text: 'I rischi principali sono cinque (downtime, perdita di posizionamento, dati persi o sbagliati, checkout che converte meno e app che smettono di funzionare) e ognuno ha una contromisura nota.',
      },
      {
        type: 'list',
        items: [
          '**Downtime**: costruisci e testa tutto in uno store non pubblico, poi cambia il DNS in un orario tranquillo e tieni attivo il vecchio sito finché la propagazione non è finita.',
          '**Perdita di posizionamento**: mappa dei redirect completa, contenuti e metadati conservati, monitoraggio di Search Console per le settimane dopo il lancio.',
          '**Dati**: riconcilia numero e totali di prodotti, clienti e ordini, e conserva un export completo della vecchia piattaforma come backup.',
          '**Checkout**: prova ogni metodo di pagamento, regola di spedizione, tassa, codice sconto ed email su dispositivi reali prima del lancio, poi confronta la conversione.',
          '**App e integrazioni**: elenca ogni plugin e script del vecchio sito e decidi per ciascuno se sostituirlo o eliminarlo. Testa la sincronizzazione col gestionale con ordini veri.',
          '**Giorno sbagliato**: evita di lanciare in un giorno di picco di vendite e prepara i clienti all’email di attivazione dell’account.',
        ],
      },
      { type: 'h2', text: 'Quanto costa migrare a Shopify?' },
      {
        type: 'paragraph',
        text: 'Una migrazione a Shopify costa da un import fatto in autonomia a un progetto completo con un’agenzia, e il prezzo dipende da dimensione del catalogo, integrazioni, lavoro di design e dati da riconciliare. Le voci che muovono il costo:',
      },
      {
        type: 'list',
        items: [
          'numero di prodotti, varianti e attributi da rimodellare',
          'integrazioni con gestionale, CRM, logistica e pagamenti',
          'quanto del design si replica e quanto si ridisegna',
          'lingue, mercati e valute',
          'volume di URL, redirect e contenuti da spostare',
          'tracking e configurazione del consenso',
        ],
      },
      {
        type: 'paragraph',
        text: 'A questo si aggiungono l’abbonamento a Shopify, le app e le commissioni di pagamento, che vanno verificate sul sito di Shopify. Se vuoi la migrazione come progetto chiavi in mano, lo [Shopify Launch Sprint](/it/sprint-migrazione-shopify) ha un prezzo pubblico in base al fatturato: €5.800 sotto i €2M, €8.800 tra €2M e €20M, €12.800 oltre i €20M, IVA esclusa, in 4 rate.',
      },
      { type: 'h2', text: 'La checklist di migrazione a Shopify' },
      {
        type: 'paragraph',
        text: 'Questa checklist riassume i controlli da fare prima, durante e dopo la migrazione:',
      },
      {
        type: 'list',
        items: [
          'Esporta e conserva un backup completo della vecchia piattaforma.',
          'Elenca app, plugin, script e integrazioni attivi.',
          'Fai il crawl del vecchio sito ed esporta gli URL con traffico e backlink.',
          'Prepara la mappa dei redirect uno a uno.',
          'Importa prodotti, collezioni, clienti e ordini.',
          'Riconcilia numero e totali dei dati importati.',
          'Ricostruisci GA4, pixel, tracking server-side e consenso cookie.',
          'Configura pagamenti, spedizioni e tasse.',
          'Testa il checkout con ordini veri su più dispositivi.',
          'Comunica ai clienti l’attivazione dell’account.',
          'Cambia il DNS, attiva i redirect e invia la sitemap.',
          'Dopo il lancio controlla 404, catene di redirect, conversioni e Search Console.',
        ],
      },
      { type: 'h2', text: 'Due migrazioni reali: WooCommerce e piattaforma proprietaria' },
      {
        type: 'paragraph',
        text: 'Due migrazioni che abbiamo fatto mostrano i punti di partenza più comuni: un negozio WooCommerce e una piattaforma proprietaria. I dati vengono dalle dashboard dei clienti e sono confronti con lo stesso periodo prima.',
      },
      { type: 'h3', text: 'Integratori DTC Nazzi: da WooCommerce a Shopify' },
      {
        type: 'paragraph',
        text: 'Migrazione costruita tra maggio e giugno 2026, online dal 19 luglio 2026. Dal go-live al 12 ottobre 2026, rispetto agli stessi giorni del 2025: vendite online +105%, ordini +77%, scontrino medio +16% e clienti di ritorno 2,25 volte. Leggi il [caso studio Integratori DTC Nazzi](/it/casi-studio/integratori-nazzi-dtc-shopify).',
      },
      { type: 'h3', text: 'Cumini: da piattaforma proprietaria a Shopify' },
      {
        type: 'paragraph',
        text: 'Moda luxury multibrand, online su Shopify dal 19 maggio 2025, prima su una piattaforma proprietaria collegata al gestionale. Nei 12 mesi successivi, rispetto ai 12 precedenti: vendite nette +67,7%, ordini +49,4%, scontrino medio +12,2%. Il punteggio del tracking è passato da 31/100 a 92/100. Leggi il [caso studio Cumini](/it/casi-studio/cumini-luxury-fashion-ecommerce).',
      },
      {
        type: 'paragraph',
        text: 'Lo [Shopify Launch Sprint](/it/sprint-migrazione-shopify) porta il tuo store su Shopify in 14 giorni con il nostro Custom AI System: calendario fisso, prezzo pubblico e 4 garanzie scritte.',
      },
    ],
  },
  charts: {
    label: 'search console',
    title1: 'Dopo una migrazione il traffico può calare. ',
    titleEm: 'Conta cosa succede dopo.',
    subtitle:
      'Google deve rielaborare il sito: la risalita dipende da come è fatta la migrazione.',
  },
  sprintBanner: {
    badge: 'AI powered',
    title: 'Shopify Launch Sprint:',
    titleEm: 'su Shopify in 14 giorni.',
    text: 'Migrazione a Shopify in 14 giorni con il nostro Custom AI System: store pronto al giorno 14, go-live tra il giorno 15 e il 30, 90 giorni di supporto e 4 garanzie scritte. Prezzo pubblico in base al fatturato, in 4 rate.',
    points: ['Store pronto al giorno 14', 'Go-live tra il giorno 15 e il 30', 'Prezzo pubblico, 4 garanzie scritte'],
    cta: 'Scopri lo Shopify Launch Sprint',
  },
  faq: {
    label: 'domande frequenti',
    heading: 'Domande frequenti sulla ',
    headingEm: 'migrazione a Shopify',
    subheading: 'Le domande che ci fanno più spesso prima di migrare a Shopify, con risposte brevi.',
    items: [
      {
        question: 'Quanto tempo ci vuole per migrare a Shopify?',
        answer:
          'Da poche settimane a diversi mesi, a seconda di catalogo, integrazioni e design. Con lo [Shopify Launch Sprint](/it/sprint-migrazione-shopify) lo store è pronto al giorno 14, il go-live avviene tra il giorno 15 e il 30 e seguono 90 giorni di supporto.',
      },
      {
        question: 'Perderò il posizionamento su Google migrando a Shopify?',
        answer:
          'Il posizionamento di solito si muove per un periodo dopo la migrazione, e una mappa completa di redirect 301, contenuti conservati e monitoraggio in Search Console permettono di recuperarlo. Nello Sprint il traffico organico a 90 giorni è una delle 4 garanzie scritte.',
      },
      {
        question: 'I clienti mantengono account e password?',
        answer:
          'Anagrafiche e indirizzi si importano, le password no. Ogni cliente riceve un’email di attivazione dell’account e sceglie una nuova password: conviene avvisarlo prima del lancio.',
      },
      {
        question: 'Lo storico degli ordini viene migrato?',
        answer:
          'Sì, lo storico ordini si importa su Shopify così report e area clienti restano completi. Dopo l’import si controllano numero e totali degli ordini rispetto alla piattaforma di partenza.',
      },
      {
        question: 'Da quali piattaforme si può migrare a Shopify?',
        answer:
          'Da tutte le principali: WooCommerce, Magento / Adobe Commerce, PrestaShop, Wix, Squarespace, BigCommerce e piattaforme proprietarie. Il metodo è lo stesso su ogni piattaforma: audit, mappa dei redirect 301, migrazione dei dati e QA.',
      },
      {
        question: 'Quanto costa migrare a Shopify?',
        answer:
          'Dipende da catalogo, integrazioni, design e dati da riconciliare. Lo Shopify Launch Sprint ha un prezzo pubblico in base al fatturato: €5.800 sotto i €2M, €8.800 tra €2M e €20M, €12.800 oltre i €20M, IVA esclusa, in 4 rate.',
      },
    ],
  },
}

const en: MigrazioneCopy = {
  hero: {
    trustRatingLabel: '5/5',
    trustSectors: 'Chosen by Fashion, Supplements and DTC brands',
    titlePart1: 'How to Migrate to ',
    titleEm1: 'Shopify',
    titleMid: ': The ',
    titleEm2: 'Complete Guide',
    titlePart2: '',
    subtitle:
      'Everything that changes when you move to Shopify: platforms, data, SEO and 301 redirects, tracking, timeline, risks and cost, with two real migrations.',
    microBenefits: ['Platforms and data', 'SEO and 301 redirects', 'Timeline, risks and cost'],
    cta: 'See the Shopify Launch Sprint',
    trustedCount: 'Chosen by Fashion, Supplements and DTC brands',
  },
  guide: {
    sections: [
      {
        type: 'paragraph',
        text: 'To migrate to Shopify means moving your online store (products, customers, orders, content and URLs) from your current platform to Shopify, while keeping what already works: your Google rankings, your customer data and your tracking. This guide is for founders and eCommerce managers who are deciding whether to move, or who have decided and want to know what actually happens, in what order, and where it goes wrong.',
      },
      {
        type: 'paragraph',
        text: 'It is written by noprob agency, a team that migrates stores to Shopify. We explain the whole process, including the parts you can do yourself. The Sprint method is the same whatever the starting platform: same phases, same redirect map, same checks.',
      },
      { type: 'paragraph', text: '**In this guide**' },
      {
        type: 'list',
        items: [
          'Which platforms people migrate from and what changes',
          'What actually gets migrated',
          'SEO and 301 redirects',
          'Tracking and data',
          'How long a migration takes',
          'Risks and how to avoid them',
          'What it costs',
          'The migration checklist',
          'Two real migrations',
        ],
      },
      { type: 'h2', text: 'Which platforms do people migrate to Shopify from?' },
      {
        type: 'paragraph',
        text: 'People migrate to Shopify from every major platform, and the largest single source is WooCommerce. According to [Store Leads](https://storeleads.app/reports/shopify), 27,247 merchants moved to Shopify from other platforms in the 90 days to 9 October 2026, about 300 a day, and 9,204 of them came from WooCommerce. That is a gross flow: in the same period Shopify also lost 17,922 stores, so the net gain is 9,325.',
      },
      { type: 'paragraph', text: 'What changes depends on where you start:' },
      {
        type: 'list',
        items: [
          '**WooCommerce**: products, orders and customers live in the WordPress database, and many features come from plugins. Each plugin needs a Shopify app or native feature as a replacement, or has to be dropped. The blog usually lives in WordPress too and has to be moved or kept.',
          '**Magento / Adobe Commerce**: typically large catalogs, many attributes, custom modules and B2B rules. Most of the work is mapping attributes and custom logic to Shopify’s data model (metafields, apps or dedicated code).',
          '**PrestaShop**: features are handled by modules, often with several languages or shops. Catalog cleanup, module mapping and the URL structure per language matter most.',
          '**Wix and Squarespace**: closed platforms with narrower export options than self-hosted ones. Before you decide, check what you can export of products, customers, orders and blog.',
          '**BigCommerce**: a SaaS platform like Shopify. The work is mostly design, apps and URLs.',
          '**Proprietary platforms**: often tied to an ERP. The job is to rebuild the data flows (stock, prices, orders) between the ERP and Shopify, on top of moving the catalog.',
        ],
      },
      {
        type: 'paragraph',
        text: 'We have migrated stores from WooCommerce and from a proprietary platform tied to an ERP (two cases at the end of this guide). We apply the same Sprint method on every platform (audit, 301 redirect map, data migration, QA): the notes above point to Shopify’s documentation. The first step is always an audit of your store.',
      },
      { type: 'h2', text: 'What actually gets migrated to Shopify?' },
      {
        type: 'paragraph',
        text: 'Almost everything that is data can be moved, but each item has its own rules. These are the blocks to plan for:',
      },
      {
        type: 'list',
        items: [
          '**Products and variants**: titles, descriptions, images, SKUs, prices, stock and options (size, color). Shopify handles variants as product options, with set limits (see [Shopify’s documentation on variants](https://help.shopify.com/en/manual/products/variants)), so products with many attributes have to be remodeled.',
          '**Collections**: manual or automated, with the rules that populate them.',
          '**Customers**: profiles and addresses can be imported ([Shopify’s guide to importing customers](https://help.shopify.com/en/manual/customers/import-export-customers)), passwords cannot. Customers get an account activation email to set a new one, so it is worth warning them first.',
          '**Order history**: imported as history so reports and customer accounts stay complete. After the import you reconcile counts and totals against the old platform.',
          '**Content and blog**: pages, posts, images, categories and SEO metadata.',
          '**URLs**: they almost always change, which is why you need redirects (next section).',
          '**Apps and integrations**: payments, shipping, ERP, CRM, email marketing, reviews, subscriptions. Each one becomes a Shopify app, a native feature or a custom integration.',
          '**Tracking**: GA4, advertising pixels, cookie consent.',
        ],
      },
      {
        type: 'paragraph',
        text: 'Shopify documents the basics in its [migrating to Shopify help center](https://help.shopify.com/en/manual/migrating-to-shopify), including import apps and the CSV file format. Read it before you scope the project.',
      },
      { type: 'h2', text: 'How do you keep your SEO and set up 301 redirects?' },
      {
        type: 'paragraph',
        text: 'You keep your SEO by giving every old URL a 301 redirect to its closest equivalent on Shopify, and by keeping titles, descriptions, headings and content close to what ranks today.',
      },
      {
        type: 'paragraph',
        text: 'On Shopify the URL structure has fixed prefixes: /products/, /collections/, /pages/ and /blogs/. If your platform uses different patterns, almost every URL changes (for example a category at /shoes/ becomes /collections/shoes). That is why you need a redirect map, the step that most often decides how the migration goes on the SEO side:',
      },
      {
        type: 'list',
        items: [
          '**Collect the URLs**: crawl the old site, then add the URLs that get traffic in Search Console and the ones with backlinks.',
          '**Map one to one**: every old URL goes to its equivalent new URL. If a page no longer exists, redirect to the closest category, not the homepage.',
          '**Load them into Shopify**: redirects are managed from the URL Redirects section of the admin, with CSV import.',
          '**Check after launch**: crawl the list of old URLs again, find the 404s and redirect chains, and fix them.',
          '**Update Search Console**: submit the new sitemap and monitor crawling and impressions for the following weeks.',
        ],
      },
      {
        type: 'paragraph',
        text: 'Google’s [Search Central guide on site moves with URL changes](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes) says the same: map old to new URLs, use permanent redirects and keep them as long as you can, ideally at least a year.',
      },
      {
        type: 'paragraph',
        text: 'On Integratori DTC Nazzi (WooCommerce to Shopify) we ran this post-launch check on 215 archived WooCommerce URLs, and the 301 redirect CSV was handed over to import into Shopify. In Search Console, the 28 days to 9 October 2026 show clicks at 2.7x and impressions at 4.0x the same 28 days of 2025. Daily clicks dipped below the pre-launch level in August and were back above it in September and October: rankings move during a migration, and the redirect map decides how they recover.',
      },
      { type: 'h2', text: 'How do you handle tracking and data?' },
      {
        type: 'paragraph',
        text: 'Rebuild tracking before launch, not after, because every day without correct data is a day you cannot compare with before.',
      },
      {
        type: 'list',
        items: [
          '**GA4**: purchase events (view item, add to cart, begin checkout, purchase) have to be mapped to Shopify’s customer events. If you can, keep the same GA4 property so your history continues.',
          '**Advertising pixels and conversions**: reconnect them and check that purchase values arrive correctly.',
          '**Server-side tracking**: reduces the data lost to browsers and blockers and makes conversions more reliable.',
          '**Cookie consent**: banner and Consent Mode need to be set up properly from day one, especially if you sell in Europe.',
        ],
      },
      { type: 'h2', text: 'How long does a Shopify migration take?' },
      {
        type: 'paragraph',
        text: 'A Shopify migration takes from a few weeks to several months, depending on catalog size, the number of integrations and how much of the design you rebuild. The phases are almost always the same:',
      },
      {
        type: 'list',
        items: [
          '**Audit and scope**: platform, apps, URLs, data and integrations to bring over.',
          '**Data import and reconciliation**: products, customers, orders, with a check on totals.',
          '**Design and store**: replicating or redesigning the pages.',
          '**Integrations and apps**: payments, shipping, ERP, email.',
          '**SEO**: redirect map, metadata, sitemap.',
          '**Tracking**: GA4, pixels, server-side, consent.',
          '**Testing**: checkout, payments, shipping, taxes, discount codes, emails, on several devices.',
          '**Go-live**: DNS switch, redirects live, sitemap submitted.',
          '**Post-launch monitoring**: Search Console, 404 errors, conversions.',
        ],
      },
      {
        type: 'paragraph',
        text: 'The [Shopify Launch Sprint](/shopify-migration-sprint) compresses this path into a fixed calendar: the store is ready on day 14, go-live happens between day 15 and 30 on the date you choose, and 90 days of support follow. It runs with a full team, our Custom AI System and one point of contact.',
      },
      { type: 'h2', text: 'What are the risks of migrating to Shopify and how do you avoid them?' },
      {
        type: 'paragraph',
        text: 'There are five main risks (downtime, lost rankings, lost or wrong data, a checkout that converts worse, and apps that stop working) and each has a known countermeasure.',
      },
      {
        type: 'list',
        items: [
          '**Downtime**: build and test everything in a store that is not public, then switch the DNS at a quiet hour and keep the old site up until propagation is finished.',
          '**Lost rankings**: a complete redirect map, content and metadata kept, and Search Console monitored for the weeks after launch.',
          '**Data**: reconcile counts and totals of products, customers and orders, and keep a full export of the old platform as a backup.',
          '**Checkout**: test every payment method, shipping rule, tax, discount code and email on real devices before launch, then compare conversion.',
          '**Apps and integrations**: list every plugin and script on the old site and decide for each whether to replace or drop it. Test the ERP sync with real orders.',
          '**The wrong day**: avoid launching on a peak sales day, and prepare customers for the account activation email.',
        ],
      },
      { type: 'h2', text: 'How much does it cost to migrate to Shopify?' },
      {
        type: 'paragraph',
        text: 'A Shopify migration costs anything from a do-it-yourself import to a full agency project, and the price depends on catalog size, integrations, design work and the data to reconcile. The items that move the cost:',
      },
      {
        type: 'list',
        items: [
          'number of products, variants and attributes to remodel',
          'integrations with ERP, CRM, logistics and payments',
          'how much of the design is replicated and how much redesigned',
          'languages, markets and currencies',
          'volume of URLs, redirects and content to move',
          'tracking and consent setup',
        ],
      },
      {
        type: 'paragraph',
        text: 'On top of that come the Shopify subscription, apps and payment fees, which you should check on Shopify’s site. If you want the migration as a turnkey project, the [Shopify Launch Sprint](/shopify-migration-sprint) has a public price by revenue: €5,800 under €2M, €8,800 between €2M and €20M, €12,800 above €20M, VAT excluded, in 4 installments.',
      },
      { type: 'h2', text: 'The Shopify migration checklist' },
      {
        type: 'paragraph',
        text: 'This checklist sums up the checks to run before, during and after the migration:',
      },
      {
        type: 'list',
        items: [
          'Export and keep a full backup of the old platform.',
          'List the active apps, plugins, scripts and integrations.',
          'Crawl the old site and export the URLs with traffic and backlinks.',
          'Prepare the one-to-one redirect map.',
          'Import products, collections, customers and orders.',
          'Reconcile counts and totals of the imported data.',
          'Rebuild GA4, pixels, server-side tracking and cookie consent.',
          'Configure payments, shipping and taxes.',
          'Test checkout with real orders on several devices.',
          'Tell customers about the account activation.',
          'Switch the DNS, turn on the redirects and submit the sitemap.',
          'After launch, check 404s, redirect chains, conversions and Search Console.',
        ],
      },
      { type: 'h2', text: 'Two real migrations: WooCommerce and a proprietary platform' },
      {
        type: 'paragraph',
        text: 'Two migrations we ran show the most common starting points: a WooCommerce store and a proprietary platform. The figures come from the clients’ dashboards and compare against the same period before.',
      },
      { type: 'h3', text: 'Integratori DTC Nazzi: WooCommerce to Shopify' },
      {
        type: 'paragraph',
        text: 'Migration built between May and June 2026, live on 19 July 2026. From go-live to 12 October 2026, against the same days of 2025: online sales +105%, orders +77%, average order value +16% and returning customers at 2.25x. Read the [Integratori DTC Nazzi case study](/use-cases/integratori-nazzi-dtc-shopify).',
      },
      { type: 'h3', text: 'Cumini: proprietary platform to Shopify' },
      {
        type: 'paragraph',
        text: 'Luxury multibrand fashion, on Shopify since 19 May 2025, before that on a proprietary platform tied to its management system. In the 12 months after, against the 12 before: net sales +67.7%, orders +49.4%, average order value +12.2%. The tracking score went from 31/100 to 92/100. Read the [Cumini case study](/use-cases/cumini-luxury-fashion-ecommerce).',
      },
      {
        type: 'paragraph',
        text: 'The [Shopify Launch Sprint](/shopify-migration-sprint) moves your store to Shopify in 14 days with our Custom AI System: a fixed calendar, a public price and 4 written guarantees.',
      },
    ],
  },
  charts: {
    label: 'search console',
    title1: 'After a migration, traffic can dip. ',
    titleEm: 'What matters is what happens next.',
    subtitle:
      'Google has to re-process the site: the recovery depends on how the migration is done.',
  },
  sprintBanner: {
    badge: 'AI powered',
    title: 'Shopify Launch Sprint:',
    titleEm: 'on Shopify in 14 days.',
    text: 'Shopify migration in 14 days with our Custom AI System: store ready on day 14, go-live between day 15 and 30, 90 days of support and 4 written guarantees. Public price by revenue, in 4 installments.',
    points: ['Store ready on day 14', 'Go-live between day 15 and 30', 'Public price, 4 written guarantees'],
    cta: 'See the Shopify Launch Sprint',
  },
  faq: {
    label: 'faq',
    heading: 'Shopify migration ',
    headingEm: 'frequently asked questions',
    subheading: 'The questions we hear most before a move to Shopify, with short answers.',
    items: [
      {
        question: 'How long does it take to migrate to Shopify?',
        answer:
          'From a few weeks to several months, depending on catalog, integrations and design. With the [Shopify Launch Sprint](/shopify-migration-sprint) the store is ready on day 14, go-live happens between day 15 and 30, and 90 days of support follow.',
      },
      {
        question: 'Will I lose my Google rankings when I migrate to Shopify?',
        answer:
          'Rankings usually move for a while after a migration, and a complete map of 301 redirects, preserved content and monitoring in Search Console let them recover. In the Sprint, organic traffic at 90 days is one of the 4 written guarantees.',
      },
      {
        question: 'Do customers keep their accounts and passwords?',
        answer:
          'Profiles and addresses are imported, passwords are not. Each customer gets an account activation email and sets a new password, so it is worth warning them before launch.',
      },
      {
        question: 'Is order history migrated?',
        answer:
          'Yes, order history is imported into Shopify so reports and customer accounts stay complete. After the import, order counts and totals are checked against the old platform.',
      },
      {
        question: 'Which platforms can I migrate to Shopify from?',
        answer:
          'All the major ones: WooCommerce, Magento / Adobe Commerce, PrestaShop, Wix, Squarespace, BigCommerce and proprietary platforms. The method is the same on every platform: audit, 301 redirect map, data migration and QA.',
      },
      {
        question: 'How much does it cost to migrate to Shopify?',
        answer:
          'It depends on catalog, integrations, design and the data to reconcile. The Shopify Launch Sprint has a public price by revenue: €5,800 under €2M, €8,800 between €2M and €20M, €12,800 above €20M, VAT excluded, in 4 installments.',
      },
    ],
  },
}

const dictionaries: Record<Locale, MigrazioneCopy> = { it, en }

export function getMigrazioneCopy(locale: Locale): MigrazioneCopy {
  return dictionaries[locale]
}

/**
 * Featured card shown at the top of the blog listings (EN and IT) that links to
 * the migration guide. Title and description come from the guide's hero, so the
 * card never drifts from the page it points to.
 */
export type MigrazioneBlogCard = {
  href: string
  image: string
  imageAlt: string
  pill: string
  title: string
  description: string
  cta: string
}

export function getMigrazioneBlogCard(locale: Locale): MigrazioneBlogCard {
  const { hero } = getMigrazioneCopy(locale)
  const title = `${hero.titlePart1}${hero.titleEm1}${hero.titleMid}${hero.titleEm2}${hero.titlePart2}`
  return locale === 'it'
    ? {
        href: '/it/migrazione-shopify',
        image: '/images/blog/shopify-migration-guide-cover.png',
        imageAlt: 'Copertina della guida alla migrazione a Shopify: sfondo nero sfumato con una dissolvenza radiale di puntini verdi',
        pill: 'Guida',
        title,
        description: hero.subtitle,
        cta: 'Leggi la guida',
      }
    : {
        href: '/shopify-migration',
        image: '/images/blog/shopify-migration-guide-cover.png',
        imageAlt: 'Cover of the Shopify migration guide: softly graded black background with a radial fade of green dots',
        pill: 'Guide',
        title,
        description: hero.subtitle,
        cta: 'Read the guide',
      }
}
