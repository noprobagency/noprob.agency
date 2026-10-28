import type { ZlCopy } from './zero-loss-migration.shared'
import { ZL_SOURCES } from './zero-loss-migration.shared'

/*
  Copy italiano della landing Shopify Launch Sprint (ex Zero-Loss Migration Sprint).
  Regole: niente trattini lunghi, niente scarsità finta, niente numeri inventati.
  Numeri dei clienti solo in forma relativa (vedi docs/dati-verificati.md). I token [[X]], se presenti, in pagina diventano
  "[DA CONFERMARE]" (vedi components/sections/zero-loss/README.md).
*/

export const zeroLossIt: ZlCopy = {
  meta: {
    title: 'Migrazione a Shopify in 14 giorni | Shopify Launch Sprint',
    description:
      'Migrazione a Shopify in 14 giorni con il nostro Custom AI System, senza perdere Google né vendite. Prezzo fisso, 4 garanzie scritte, 90 giorni di supporto.',
    ogAlt: 'Shopify Launch Sprint: il tuo eCommerce su Shopify in 14 giorni, più SEO e più vendite',
  },
  nav: {
    cta: 'Candidati allo sprint',
    langSwitchLabel: 'Cambia lingua',
    logoLabel: 'noprob agency, vai alla home',
  },
  hero: {
    eyebrow: 'Shopify Launch Sprint',
    h1: 'Il tuo eCommerce su Shopify in 14 giorni. Più posizioni su Google, più vendite, più AI.',
    proofNote: 'Caso studio: +105% di vendite in 85 giorni 😉',
    paragraph:
      'In 14 giorni un team completo porta il tuo store su Shopify, con il nostro Custom AI System: più veloce, pronto per gli agenti AI, costruito per vendere. Poi 90 giorni su SEO, conversioni e AOV, misurati in dashboard. Prezzo fisso, zero sorprese.',
    ctaPrimary: 'Candidati allo sprint',
    ctaNote: 'Rispondiamo in 48 ore',
    ctaSecondary: 'Guarda i risultati',
    logosLabel: 'Scelti da brand di Moda, Integratori e DTC eCommerce',
    trustpilotScore: '5/5',
    trustpilotLabel: '10 recensioni su Trustpilot',
  },
  overview: {
    h2: 'Shopify Launch Sprint',
    paragraph:
      "Quattordici giorni, un calendario fisso, un referente. Il giorno 1 ci dai gli accessi, il giorno 14 hai lo store su Shopify pronto a pubblicare. Non è un redesign: è il tuo store, ricostruito da zero con il nostro Custom AI System, più veloce, più forte su Google e con un checkout costruito per vendere di più.",
    cta: 'Candidati allo sprint',
    deliverablesTitle: 'Cosa ottieni al giorno 14',
    deliverables: [
      {
        title: 'Store Shopify pronto a pubblicare',
        line: "Replica 1:1 con il Custom AI System, sviluppato su misura, bug corretti, la nostra checklist del flusso d'acquisto applicata.",
        badge: 'Custom AI System',
      },
      {
        title: 'Data Migration Report',
        line: 'Prodotti, varianti, clienti e storico ordini riconciliati al 100%.',
      },
      {
        title: 'Redirect Map 1:1',
        line: 'Ogni URL vecchio mappato al nuovo e testato in automatico. Nessun click organico perso.',
      },
      {
        title: 'Tracking Spec + setup server-side',
        line: 'GA4, Meta CAPI via Stape, email, consent mode. Dati che tornano con gli ordini.',
      },
      {
        title: 'Go-live Checklist con data',
        line: 'Tu scegli il giorno, noi il resto. Mai un secondo offline.',
      },
    ],
    afterLine:
      'Inclusi nel prezzo: dashboard dei risultati dal giorno 1, go-live a zero downtime nella finestra che scegli tu e 90 giorni di supporto, monitoraggio e miglioramento: bug fix, modifiche, controllo di SEO e tracking e nuove ottimizzazioni ogni settimana.',
    pricingTitle: 'Prezzo in base alla dimensione della tua azienda',
    pricingSub: 'e alla complessità dello store che ne deriva',
    tiers: [
      { label: 'Fatturato aziendale sotto €2M', price: '€5.800', under: '4 rate da €1.450, IVA esclusa' },
      { label: 'Fatturato tra €2M e €20M', price: '€8.800', under: '4 rate da €2.200, IVA esclusa' },
      { label: 'Fatturato oltre €20M', price: '€12.800', under: '4 rate da €3.200, IVA esclusa' },
    ],
    pricingNote:
      'Prima rata al kickoff, seconda al go-live, terza e quarta nei mesi di supporto. Piano Shopify e app a carico tuo. Nessuno sconto, nessun preventivo: questo è il prezzo.',
    results: [
      { value: '+105% di vendite online nei primi 85 giorni su Shopify', attribution: 'Integratori DTC Nazzi' },
      { value: '+67,7% di vendite online nei 12 mesi dopo la migrazione', attribution: 'Cumini, luxury multibrand' },
      { value: 'Posizione su Google migliorata del 21%, clic 2,7 volte l’anno prima', attribution: 'Integratori DTC Nazzi, Search Console' },
      { value: '0 minuti offline in oltre 10 migrazioni', attribution: 'noprob agency' },
    ],
  },
  checklist: {
    h2: 'Ti riconosci? Sii sincero.',
    sub: 'spunta quelle vere',
    items: [
      'Ogni modifica al sito è lenta: devi sempre aspettare qualcuno',
      'Vorresti passare a Shopify, ma hai paura di perdere Google e clienti',
      'Senti che il tuo sito potrebbe essere molto più veloce',
      'Tanti visitatori, ma troppo pochi diventano ordini',
      'I numeri delle piattaforme non tornano con le vendite vere',
      'Vorresti farti trovare anche su ChatGPT e sull’AI, ma non sai da dove partire',
    ],
    reactionNone: 'Tutto verde? Allora non hai bisogno di noprob.',
    reactionMid: 'Già solo con questo potremmo migliorare i tuoi risultati.',
    reactionHigh: 'No prob. È esattamente quello che risolviamo in 14 giorni.',
    reactionHighCta: 'Candidati allo sprint',
    countLabel: 'spunte',
  },
  deliverables: {
    h2: 'La soluzione in uno sprint di 2 settimane',
    sub: 'andiamo a tappeto, punto per punto',
    labelPrefix: 'Deliverable',
    items: [
      {
        title: 'Data Migration Report',
        short: 'Data Migration Report',
        paragraph:
          'Prodotti, varianti, immagini, clienti, storico ordini, codici sconto, recensioni. Ogni conteggio della piattaforma vecchia confrontato con Shopify e riconciliato al 100%. Se una differenza c\'è, è scritta e spiegata.',
        imageAlt: 'Tabella del Data Migration Report con colonne sorgente, Shopify e differenza',
        mockup: 'report',
      },
      {
        title: 'Il tuo store, pronto a pubblicare su Shopify',
        short: 'Store pronto a pubblicare',
        paragraph:
          "Il tuo store ricostruito 1:1 su Shopify, con il Custom AI System, sviluppato su misura per te: stesse pagine, stessa struttura, stessi contenuti. Correggiamo bug ed errori che ti porti dietro da anni e applichiamo la nostra checklist sul flusso d'acquisto: ricerca, scheda prodotto, carrello, checkout. Non è un restyling: è il tuo store, più veloce e più corto da comprare.",
        imageAlt: 'Screenshot dello staging Shopify affiancato al sito attuale, con la checklist in overlay',
        mockup: 'staging',
      },
      {
        title: 'Tracking Spec e setup server-side',
        short: 'Tracking Spec',
        paragraph:
          'GA4, Meta Conversions API via Stape, Google Ads, piattaforma email, consent mode. Un documento con ogni evento e come lo verifichiamo: purchase deduplicato, Event Match Quality Meta sopra 8, scarto tra ordini Shopify e GA4 sotto il 3%.',
        imageAlt: 'Pagina della Tracking Spec e screenshot dell\'Event Match Quality',
        mockup: 'tracking',
      },
      {
        title: 'Redirect Map 1:1',
        short: 'Redirect Map',
        paragraph:
          'Ogni URL che ha ricevuto traffico negli ultimi 12 mesi ha il suo redirect 301 verso una pagina che risponde 200. Non a mano: con un test automatico che gira prima del go-live e dopo. È il motivo per cui il traffico organico non si perde.',
        imageAlt: 'CSV della Redirect Map e output del test automatico con 100% verde',
        mockup: 'redirects',
      },
      {
        title: 'Go-live Checklist con la tua data',
        short: 'Go-live Checklist',
        paragraph:
          'DNS, TTL, sitemap, Search Console, monitor di uptime, piano di rollback. La firmi tu con la data che scegli, dal giorno 15 al 30. Il giorno del lancio il tuo store non si ferma un secondo.',
        imageAlt: 'Go-live Checklist firmata con la data in evidenza',
        mockup: 'checklist',
      },
    ],
  },
  calendar: {
    h2: 'Ecco esattamente come funziona lo sprint',
    prework: {
      label: 'Pre-work',
      yourTeamTitle: 'Il tuo team',
      yourTeam: "Compili il form di intake (30 minuti), prepari la lista degli accessi e l'export di catalogo e ordini.",
      ourTeamTitle: 'Il nostro team',
      ourTeam:
        'Apriamo il canale dedicato, prepariamo lo store di sviluppo e il piano di import. Il kickoff parte solo quando abbiamo tutti gli accessi. Non si parte a metà.',
    },
    weeks: [
      {
        badge: 'Settimana 01',
        title: 'Costruzione',
        days: [
          {
            day: 'Lunedì',
            title: 'Kickoff e credenziali',
            duration: '90 minuti',
            detail: 'Accessi a piattaforma, DNS, Search Console, GA4 e Meta. Export. Congeliamo la baseline di traffico e vendite.',
          },
          {
            day: 'Martedì',
            title: 'Inventario e import',
            detail: 'Inventario di ogni URL con traffico negli ultimi 12 mesi, mappa dati. Import di prodotti, clienti e ordini in staging.',
          },
          {
            day: 'Mercoledì',
            title: 'Riconciliazione e struttura',
            duration: '10 minuti',
            detail: 'Conteggi sorgente e Shopify al 100%. Struttura, navigazione, collezioni. Ti arriva un Loom.',
            deliverables: [1],
          },
          {
            day: 'Giovedì',
            title: 'Replica dei template',
            detail: 'Home, collezione, prodotto e ricerca replicate 1:1. Prima versione della Redirect Map.',
          },
          {
            day: 'Venerdì',
            title: 'Staging v1',
            duration: '30 minuti',
            detail: 'Ti mandiamo il link dello staging e un Loom di 10 minuti. Feedback entro lunedì.',
            deliverables: [2],
          },
        ],
      },
      {
        badge: 'Settimana 02',
        title: 'Rifinitura e consegna',
        days: [
          {
            day: 'Lunedì',
            title: 'Review live e fix',
            duration: '60 minuti',
            detail: 'Call sullo staging, poi carrello, checkout e account.',
          },
          {
            day: 'Martedì',
            title: 'Tracking e integrazioni',
            detail: 'Stape, GA4, Meta CAPI, email, consent mode. Pagamenti e spedizioni.',
            deliverables: [3],
          },
          {
            day: 'Mercoledì',
            title: "Flusso d'acquisto",
            detail: "La checklist del flusso d'acquisto su ricerca, scheda prodotto, carrello e checkout. Velocità. SEO tecnica: meta, schema, sitemap.",
          },
          {
            day: 'Giovedì',
            title: 'QA e test',
            detail: 'Test automatico dei 301 su tutti gli URL, ordini di prova end-to-end, 3 device, validazione del tracking.',
            deliverables: [4],
          },
          {
            day: 'Venerdì',
            title: 'Consegna dello sprint',
            duration: '45 minuti',
            detail: 'Store pronto a pubblicare, Redirect Map, Tracking Spec, Go-live Checklist. Fissiamo la data.',
            deliverables: [5],
          },
        ],
      },
    ],
    durationLabel: 'per te',
    after: {
      title: 'Dopo lo sprint',
      rows: [
        {
          phase: 'Giorni 15-30',
          title: 'Go-live, la data la scegli tu',
          detail: 'Cambio DNS, redirect attivi, sitemap e Search Console. Presidio 48 ore.',
        },
        {
          phase: '90 giorni dal go-live',
          title: 'Supporto, monitoraggio e miglioramento',
          detail: 'Bug fix, modifiche minori, monitoraggio di SEO e tracking e nuove ottimizzazioni. Loom settimanale di 10 minuti. Report al giorno 90.',
        },
      ],
      dashboard: {
        phase: 'Dal giorno 1',
        title: 'Dashboard dei risultati',
        detail: 'Vendite nette, MER, ROAS e retention collegati dal kickoff: è la dashboard con cui misuriamo le 4 garanzie.',
        cta: 'Guarda la dashboard demo',
      },
    },
    closing: 'Tempo richiesto a te in tutto: circa 8 ore. Il resto lo facciamo noi.',
  },
  guarantees: {
    h2: 'Se non funziona, paghiamo noi.',
    sub: 'Quattro garanzie, misurate dalla dashboard che ricevi il giorno 1. Non da opinioni.',
    cards: [
      { key: 'Sprint', text: 'Store pronto al giorno 14 o ti rimborsiamo la prima rata.' },
      { key: 'SEO', text: 'Traffico organico sotto la baseline a 90 giorni dal go-live? Lavoriamo gratis finché non torna.' },
      { key: 'Go-live', text: 'Store offline al lancio per colpa nostra? Una rata la paghiamo noi.' },
      { key: 'Checkout', text: 'Il checkout converte meno di prima a 90 giorni? Lo ottimizziamo gratis finché non supera.' },
    ],
    line: 'Le condizioni complete stanno nel contratto, scritte in una pagina. Niente asterischi nascosti.',
  },
  aiSystem: {
    label: 'Custom AI System',
    h2: "Non un semplice redesign. Il tuo store, con i superpoteri dell'AI.",
    paragraph:
      "Non solo sviluppo, non solo marketing: con il Custom AI System lavoriamo insieme su sito, dati, flusso d'acquisto e AI. Compatto e forte, con sei superpoteri.",
    powers: [
      { title: 'Ultra veloce', text: 'Codice scritto da zero solo per il tuo store: niente codice morto, niente app che rallentano.' },
      { title: 'Pronto per gli agenti AI', text: 'Catalogo e dati strutturati pronti per ChatGPT, Copilot e Google AI Mode, dove i clienti stanno iniziando a comprare.' },
      { title: 'GEO automatico', text: "Ogni prodotto nuovo nasce già ottimizzato per le risposte dell'AI: schema e dati si generano da soli." },
      { title: 'Sviluppo con agenti AI', text: 'Codice pensato per gli agenti AI che ci lavorano sopra: nuove funzioni, test e modifiche vanno online in giornata, non in settimane.' },
      { title: "Flusso d'acquisto ai raggi X", text: 'Ricerca, scheda prodotto, carrello e checkout analizzati passo per passo: troviamo dove si perdono gli ordini e lo correggiamo.' },
      { title: 'Dati mappati al dettaglio', text: 'Ogni prodotto, cliente e ordine riconciliato al 100%, tracking server-side e una dashboard con MER, ROAS e retention dal giorno 1.' },
    ],
  },
  resultsFirst: {
    label: 'Ossessionati dai risultati',
    h2: '14 giorni non è fretta. È un team intero sul tuo store.',
    paragraph:
      'Su Shopify in 14 giorni perché non lavora una persona sola: si mette sotto un team intero, uno specialista per ogni area, tutti nello stesso momento. Così hai tutto subito, nessun collo di bottiglia e i primi risultati il prima possibile. Ogni area ha un numero da far salire, e non ci fermiamo finché non sale.',
    areas: ['Sviluppo Shopify', 'SEO e redirect', 'Tracking e dati', 'Checkout e CRO', 'Design', 'AI'],
    line: 'Lavoriamo in parallelo, non in fila.',
  },
  sticky: {
    prefix: 'Prezzo fisso da',
    note: 'Su Shopify in 14 giorni',
    cta: 'Candidati allo sprint',
  },
  whyNow: {
    eyebrow: 'Perché adesso',
    h2: 'I tuoi competitor stanno già passando a Shopify. Ogni mese che aspetti, il vantaggio è loro.',
    paragraph:
      'Non è una moda, è una migrazione di massa. Con Shopify e l’AI una modifica si fa in minuti, una promo parte in giornata e il tuo catalogo è già dentro ChatGPT. Chi parte prima accumula mesi di test, dati e posizioni su Google che chi arriva dopo non recupera più.',
    sourceLabel: 'Fonte',
    stats: [
      {
        value: '≈300',
        label: 'store al giorno lasciano la loro piattaforma per Shopify: 27.247 negli ultimi 90 giorni.',
        source: { label: 'Store Leads, ottobre 2026', href: ZL_SOURCES.storeLeads },
      },
      {
        value: '9.204',
        label: 'di questi arrivano da WooCommerce, in soli 90 giorni. È la piattaforma da cui se ne vanno di più.',
        source: { label: 'Store Leads, ottobre 2026', href: ZL_SOURCES.storeLeads },
      },
      {
        value: '+32%',
        label: 'il volume venduto su Shopify in un anno. Il mercato si sposta dove si vende di più.',
        source: { label: 'Shopify, risultati Q2 2026', href: ZL_SOURCES.shopifyQ2 },
      },
      {
        value: '3x',
        label: 'traffico e ordini portati dagli agenti AI agli store Shopify, anno su anno.',
        source: { label: 'Digital Commerce 360', href: ZL_SOURCES.digitalCommerce360 },
      },
    ],
    race: {
      title: 'Stesso store, due velocità',
      colOld: 'Da solo, sulla piattaforma vecchia',
      colNew: 'Con noi, su Shopify + AI',
      rows: [
        { task: 'Manutenzione', old: 'Hosting, plugin e developer da pagare a parte', now: 'Tutto incluso: aggiornamenti, fix e modifiche li facciamo noi' },
        { task: 'Supporto', old: 'Un ticket e giorni di attesa', now: 'Supporto 7 giorni su 7, diretto con il team' },
        { task: 'Velocità', old: 'Ogni modifica diventa un progetto', now: 'Modifiche e test in giornata, con l’AI al nostro fianco' },
        { task: 'Visione', old: 'Fornitori diversi, nessuno vede il quadro', now: 'Un partner di crescita che vede ogni area: SEO, ads, email, tracking e AI' },
        { task: 'AI', old: 'Aspetti un plugin che forse arriva', now: 'Catalogo già in ChatGPT, Copilot e Google AI Mode' },
        { task: 'Crescita', old: 'Il sito resta fermo mentre il mercato corre', now: 'Ogni mese un passo avanti misurato su Google e sulle vendite' },
      ],
    },
    cardsTitle: 'E il commercio con l’AI nasce su Shopify',
    cards: [
      {
        text: 'Shopify ha reso ogni store "agent-ready by default": i cataloghi dei merchant sono già dentro ChatGPT, Microsoft Copilot e Google AI Mode attraverso un solo canale in admin.',
        sources: [
          { label: 'Shopify', href: ZL_SOURCES.shopifyAgentic },
          { label: 'Yahoo Finance', href: ZL_SOURCES.yahooFinance },
        ],
      },
      {
        text: 'Nel secondo trimestre 2026 il traffico e gli ordini portati dagli agenti AI agli store Shopify sono triplicati anno su anno.',
        sources: [{ label: 'Digital Commerce 360', href: ZL_SOURCES.digitalCommerce360 }],
      },
      {
        text: 'Lo standard del commercio via agenti, UCP, lo scrive Shopify insieme a Google. Le altre piattaforme lo adottano dopo, via plugin.',
        sources: [{ label: 'Shopify', href: ZL_SOURCES.shopifyAgentic }],
      },
    ],
    closing: 'Prima parti, prima vedi i risultati. Lo sprint dura 14 giorni: fra due settimane il vantaggio lo prendi tu, non il tuo competitor.',
    cta: 'Candidati allo sprint',
  },
  proof: {
    h2: 'Dopo la migrazione: più Google, più vendite',
    sub: 'Dati reali dei nostri clienti, con la fonte di ogni numero. Le cifre di fatturato restano loro: le vendite sono mostrate in indice.',
    charts: {
      caseLink: 'Leggi il caso studio',
      items: [
        {
          key: 'cuminiSales',
          title: 'Cumini, crescita delle vendite eCommerce dal 2023',
          subtitle: 'Vendite nette e ordini mensili, media mobile 3 mesi, in indice: 100 è la media dei 12 mesi prima di Shopify. Fonte: backend Shopify di cumini.com, con lo storico della piattaforma precedente importato, da maggio 2023 a settembre 2026.',
          kpis: [
            { label: 'Vendite, 12 mesi dopo', value: '+67,7%' },
            { label: 'Ordini, 12 mesi dopo', value: '+49,4%' },
            { label: 'Scontrino medio', value: '+12,2%' },
            { label: 'Ultimi 12 mesi vs prima', value: '2,08x' },
          ],
          legend: ['Vendite', 'Ordini'],
          migrationLabel: 'Migrazione',
          goLiveLabel: 'Online su Shopify, 19 mag 2025',
          href: '/it/casi-studio/cumini-luxury-fashion-ecommerce',
        },
        {
          key: 'nazziGsc',
          title: 'Integratori DTC Nazzi, traffico organico da Google',
          subtitle: 'Clic e impressioni giornaliere, media mobile 7 giorni, in indice: 100 è la media dei 28 giorni prima del go-live. Fonte: Google Search Console, proprietà del sito di Integratori DTC Nazzi, da settembre 2025 a ottobre 2026. I volumi restano del cliente.',
          kpis: [
            { label: 'Clic, 28 gg dopo il go-live', value: '+41%' },
            { label: 'Impressioni, 28 gg dopo', value: '2,2x' },
            { label: 'Clic vs 2025', value: '2,7x' },
            { label: 'Posizione Google', value: '+21%' },
          ],
          legend: ['Clic', 'Impressioni'],
          migrationLabel: 'Migrazione',
          goLiveLabel: 'Online su Shopify, 19 lug',
          href: '/it/casi-studio/integratori-nazzi-dtc-shopify',
        },
      ],
    },
    testimonialsHeading: 'Cosa dicono i clienti',
    testimonials: [
      {
        name: 'Antonio Cali',
        role: 'Sfogliate&Sfogliatelle - DTC eCommerce Owner',
        image: '/images/originals/5ZClDWRqPVst2zJqghXyG33cMY0.png',
        quote:
          "Collaborare con NoProb Agency per lo sviluppo del nostro eCommerce è stata un’esperienza estremamente positiva. Fin dalle prime fasi del progetto, il team si è distinto per chiarezza nella comunicazione, competenza tecnica e capacità di ascolto. Ogni passaggio, dalla progettazione grafica al go-live, è stato gestito con professionalità…",
      },
      {
        name: 'Camilla Dudine',
        role: 'DDglobal Store - B2B eCommerce Owner',
        image: '/images/originals/btYlkzRXpOBFU8seMDbnX8BY8.jpeg',
        quote:
          'Collaborare con Antonio per la creazione del nostro sito eCommerce è stata un’esperienza estremamente positiva. Ha dimostrato grande professionalità, competenza tecnica e una notevole attenzione al dettaglio, riuscendo a trasformare le nostre idee in un eCommerce funzionale, moderno e performante.',
      },
      // Slot per le prossime testimonianze sulla migrazione: nascosti finché `hidden` è true.
      { name: '', role: '', image: '', quote: '', hidden: true },
      { name: '', role: '', image: '', quote: '', hidden: true },
      { name: '', role: '', image: '', quote: '', hidden: true },
    ],
  },
  scope: {
    h2: 'Cosa facciamo. E cosa viene dopo.',
    includedTitle: 'Incluso nello sprint',
    included: [
      'Migrazione di prodotti, clienti e storico ordini',
      'Redirect SEO 1:1 e SEO tecnica on-site',
      'Tracking server-side e consent mode',
      'Configurazione di pagamenti, spedizioni, email e delle piattaforme che già usi',
      "Replica 1:1 con il Custom AI System, bug fix, flusso d'acquisto ottimizzato",
      'Go-live a zero downtime e 90 giorni di supporto, monitoraggio e miglioramento',
    ],
    partnersTitle: 'Con partner dedicati, dopo il go-live',
    partners: [
      'Design su misura e rebranding',
      'Advertising Meta e Google',
      'Email marketing e CRM',
      'Foto prodotto, copywriting, traduzioni',
      'Marketplace, POS, portali B2B complessi',
    ],
    line: 'Sopra i limiti del tuo scaglione (prodotti, lingue, gestionale) si aggiungono add-on a prezzo fisso, mai un preventivo libero. Te li diciamo in call, prima di firmare.',
  },
  faq: {
    h2: 'Domande frequenti',
    cta: 'Candidati allo sprint',
    items: [
      {
        question: 'Quanto tempo mi serve?',
        answer:
          'Circa 8 ore in tutto: 30 minuti di form, 90 di kickoff, 60 di review dello staging, 45 alla consegna, qualche Loom da 10 minuti, la reperibilità il giorno del go-live. Il resto lo facciamo noi.',
      },
      {
        question: 'Il mio store resta online durante lo sprint?',
        answer:
          'Sì. Lavoriamo in staging, il tuo sito attuale non viene toccato. Il go-live lo fai quando decidi tu, tra il giorno 15 e il 30.',
      },
      {
        question: 'Perdo posizioni su Google?',
        answer:
          'No, se la migrazione è gestita. Ogni URL con traffico ha il suo redirect 1:1, testato in automatico prima e dopo il lancio, e monitoriamo Search Console per 90 giorni. Se il traffico organico resta sotto la baseline a 90 giorni, lavoriamo gratis finché non torna.',
      },
      {
        question: 'Il sito sarà uguale a prima?',
        answer:
          "Struttura, pagine e contenuti sì: è il tuo store, non un redesign. Ma lo ricostruiamo con il Custom AI System: più veloce, senza i bug di prima e con il flusso d'acquisto ottimizzato con la nostra checklist. Se vuoi cambiare immagine, quello arriva dopo, con un partner.",
      },
      {
        question: 'Da quali piattaforme migrate?',
        answer:
          'WooCommerce, PrestaShop, Magento, piattaforme custom, gestionali ed ERP con store integrato. Lo sprint è pensato per chi arriva da un’altra piattaforma.',
      },
      {
        question: 'Cosa succede se non arrivano gli accessi in tempo?',
        answer: 'Il kickoff slitta finché non abbiamo tutto. Lo sprint parte solo quando può finire in 14 giorni.',
      },
      {
        question: 'Cosa succede se il mio store supera i limiti dello scaglione?',
        answer:
          'Gli extra (lingue, valute, gestionale custom, blog molto grande) hanno un prezzo fisso a listino e te li diciamo in call, prima della firma. Nessun preventivo libero.',
      },
      {
        question: 'Come si paga?',
        answer:
          'Quattro rate: la prima al kickoff, la seconda al go-live, la terza e la quarta nei mesi di supporto. Prezzi IVA esclusa. Piano Shopify e app li paghi direttamente a Shopify.',
      },
      {
        question: 'Come funzionano le garanzie?',
        answer:
          'Sono quattro, misurate dalla dashboard: store pronto al giorno 14 o rimborso della prima rata; traffico organico sotto la baseline a 90 giorni e lavoriamo gratis finché non torna; store offline al lancio per colpa nostra e una rata la paghiamo noi; checkout che converte meno di prima a 90 giorni e lo ottimizziamo gratis finché non supera. Le condizioni stanno nel contratto, in una pagina.',
      },
      {
        question: 'Cosa succede dopo i 90 giorni?',
        answer:
          'Lo store è tuo, solido, con dati puliti. Puoi continuare da solo, con un pacchetto ore, o con i partner per advertising, email e design. Nessun vincolo.',
      },
      {
        question: 'Quando posso partire?',
        answer:
          'Candidati: ti rispondiamo entro 48 ore con lo scaglione e la prima data di kickoff disponibile.',
      },
      {
        question: 'Perché il prezzo dipende dal fatturato della mia azienda?',
        answer:
          'Perché fatturato e complessità dello store vanno insieme: più prodotti, lingue, integrazioni e persone da allineare. È lo stesso criterio che usano le migliori consulenze prodottizzate. Il prezzo del tuo scaglione lo vedi qui, prima di parlarci.',
      },
      {
        question: "Cos'è la dashboard che ricevo il giorno 1?",
        answer:
          "È una dashboard di monitoraggio delle metriche chiave del tuo eCommerce (MER, margine di contribuzione, ROAS, vendite nette, ordini, CPA e retention). Al kickoff colleghiamo Shopify, le piattaforme adv e il tracking per congelare la baseline iniziale, e la usiamo durante e dopo lo sprint per verificare in tempo reale le garanzie contrattuali.",
      },
    ],
  },
  finalCta: {
    h2: 'Il tuo store su Shopify fra 14 giorni. Candidati.',
    paragraph:
      'Ti rispondiamo entro 48 ore, anche se la risposta è no. Se sei dentro i criteri, la risposta è lo scaglione, il prezzo e la prima data di kickoff disponibile.',
    bullets: ['Store pronto al giorno 14', '4 garanzie scritte nel contratto', '90 giorni di supporto, monitoraggio e miglioramento'],
    cta: 'Candidati allo sprint',
  },
  apply: {
    metaTitle: 'Candidati allo Shopify Launch Sprint | noprob agency',
    metaDescription: 'Quattro passi, due minuti. Ti rispondiamo entro 48 ore con lo scaglione, il prezzo e la prima data di kickoff disponibile.',
    back: 'Torna alla pagina dello sprint',
    trustedBy: '5/5 su Trustpilot',
    h1Pre: 'Il tuo store su Shopify in',
    h1Em: '14 giorni.',
    description:
      'Un intero team, totalmente in focus sul tuo store. Lo ricostruiamo su Shopify con il nostro Custom AI System in soli 14 giorni e lo prepariamo a uno sprint di performance su ogni area: è il next step del tuo business eCommerce.',
    badges: ['Risposta in 48 ore', 'Supporto 7/7', 'Prezzo fisso, nessun preventivo'],
  },
  form: {
    progressLabel: 'Passo {step} di {total}',
    replyNote: 'Ti rispondiamo entro 48 ore',
    next: 'Avanti',
    back: 'Indietro',
    submit: 'Invia la candidatura',
    submitting: 'Invio in corso...',
    requiredMark: 'obbligatorio',
    steps: [{ title: 'Il tuo store' }, { title: 'Dimensione' }, { title: 'Tempi e motivo' }, { title: 'Contatti' }],
    step1: {
      urlLabel: 'URL dello store',
      urlPlaceholder: 'https://www.tuostore.it',
      platformLabel: 'Piattaforma attuale',
      platforms: [
        { value: 'woocommerce', label: 'WooCommerce' },
        { value: 'prestashop', label: 'PrestaShop' },
        { value: 'magento', label: 'Magento' },
        { value: 'custom', label: 'Custom' },
        { value: 'erp', label: 'Gestionale/ERP' },
        { value: 'other', label: 'Altro' },
        { value: 'shopify', label: 'Shopify' },
      ],
      shopifyStop:
        "Lo sprint è per chi arriva da un'altra piattaforma. Se vuoi solo migliorare uno store già su Shopify, scrivici dalla pagina contatti.",
      shopifyStopLink: 'Vai alla pagina contatti',
    },
    step2: {
      revenueLabel: 'Fatturato aziendale annuo',
      revenues: [
        { value: 'under300k', label: 'Sotto €300k' },
        { value: '300k-2m', label: '€300k-2M' },
        { value: '2m-20m', label: '€2M-20M' },
        { value: 'over20m', label: 'Oltre €20M' },
      ],
      productsLabel: 'Prodotti attivi a catalogo',
      products: [
        { value: 'under2000', label: 'Sotto 2.000' },
        { value: '2000-10000', label: '2.000-10.000' },
        { value: 'over10000', label: 'Oltre 10.000' },
      ],
      languagesLabel: 'Lingue e valute',
      languages: [
        { value: '1', label: '1' },
        { value: '2-3', label: '2-3' },
        { value: '4plus', label: '4 o più' },
      ],
      erpLabel: 'Gestionale o ERP collegato',
      erpNo: 'No',
      erpYes: 'Sì',
      erpWhichLabel: 'Quale?',
      erpWhichPlaceholder: 'Nome del gestionale o ERP',
      revenueStop: 'Sotto €300k lo sprint richiede una valutazione preventiva. Puoi comunque proseguire e candidarti.',
      revenueNotice: 'Nota: sotto i €300k di fatturato lo sprint richiede una valutazione preventiva per assicurarci che l’investimento sia sostenibile. Puoi comunque completare il form e inviare la candidatura: valuteremo insieme la fattibilità.',
    },
    step3: {
      timingLabel: 'Quando vuoi partire',
      timings: [
        { value: 'now', label: 'Subito' },
        { value: '1-3months', label: 'Entro 1-3 mesi' },
        { value: 'evaluating', label: 'Sto valutando' },
      ],
      reasonLabel: 'Perché vuoi passare a Shopify',
      reasonPlaceholder: 'Piattaforma rigida, sito lento, paura di perdere SEO, tracking sballato... dillo con parole tue',
      reasonCounter: '{count}/{max}',
    },
    step4: {
      summaryTitle: 'Il tuo scaglione',
      summary:
        'In base a quello che ci hai detto, il tuo scaglione è {tier}: {price} in 4 rate da {installment}, IVA esclusa. Lo confermiamo in call.',
      addonLine: 'Alcuni extra potrebbero avere un add-on a prezzo fisso: te lo diciamo in call.',
      nameLabel: 'Nome e cognome',
      namePlaceholder: 'Mario Rossi',
      emailLabel: 'Email aziendale',
      emailPlaceholder: 'nome@tuaazienda.it',
      phoneLabel: 'Telefono (opzionale)',
      phonePrefixLabel: 'Prefisso',
      phonePlaceholder: '320 000 0000',
      privacyBefore: 'Ho letto la ',
      privacyLinkLabel: 'Privacy Policy',
      tierLabel: 'Tier',
    },
    errors: {
      url: "Inserisci l'URL dello store, ad esempio https://www.tuostore.it",
      choice: "Scegli un'opzione",
      erpName: 'Scrivi quale gestionale o ERP usi',
      reason: 'Scrivi in due righe perché vuoi passare a Shopify',
      reasonMax: 'Massimo 500 caratteri',
      name: 'Inserisci nome e cognome',
      email: 'Inserisci un indirizzo email valido',
      emailFree: "Usa l'email aziendale, così sappiamo che sei tu",
      phone: 'Controlla il numero di telefono',
      privacy: 'Devi accettare la Privacy Policy',
      generic: "Qualcosa non ha funzionato. Riprova: i dati inseriti sono ancora qui.",
      network: 'Connessione assente. Riprova tra un attimo: i dati inseriti sono ancora qui.',
    },
    success: {
      title: 'Candidatura ricevuta.',
      text: 'Ti rispondiamo entro 48 ore da {email} con lo scaglione e la prima data di kickoff disponibile.',
      dashboardCta: 'Guarda la dashboard che ricevi il giorno 1',
    },
    retry: 'Riprova',
  },
  thankYou: {
    metaTitle: 'Candidatura ricevuta | Shopify Launch Sprint',
    badge: 'Candidatura ricevuta',
    h1Pre: 'Fatto. Ti rispondiamo',
    h1Em: 'entro 48 ore.',
    text:
      'Antonio legge ogni candidatura di persona. Ti scrive all’indirizzo che ci hai lasciato con lo scaglione confermato e la prima data di kickoff disponibile. Se la risposta è no, te lo diciamo lo stesso.',
    nextTitle: 'Intanto, se vuoi portarti avanti',
    next: [
      'Guarda la dashboard che ricevi il giorno 1: è quella con cui misuriamo le 4 garanzie.',
      'Prepara la lista degli accessi: piattaforma attuale, DNS, Search Console, GA4 e Meta.',
      'Se hai fretta, prenota direttamente una call qui sotto o scrivi su WhatsApp.',
    ],
    dashboardCta: 'Guarda la dashboard del giorno 1',
    whatsapp: 'Scrivi su WhatsApp',
    whatsappNote: 'Antonio risponde di persona',
    whatsappText: 'Ciao Antonio, ho appena inviato la candidatura allo Shopify Launch Sprint su noprob.agency.',
    bookTitle: 'Vuoi anticipare la call?',
    bookText: 'Scegli uno slot: parliamo del tuo store e del calendario dello sprint.',
    back: 'Torna alla pagina dello sprint',
  },
  footer: {
    backToSite: 'Torna a noprob.agency',
  },
}
