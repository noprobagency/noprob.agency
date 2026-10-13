import type { Locale } from '@/lib/i18n'

/**
 * Copy module for the private Ambassador playbook.
 * Routes: it -> /it/ambassador, en -> /ambassador (noindex, not in sitemap).
 *
 * The page is shared by hand with potential referral partners: no CTAs, no
 * form. Money figures are derived from `AMBASSADOR_TERMS` so the commission
 * math stays consistent with the migration price. Keep `monthlyPrice` and
 * `tiers` in sync with the tiers in `lib/i18n/migrazione.ts`.
 */

export const AMBASSADOR_TERMS = {
  monthlyPrice: 1450,
  months: 4,
  rate: 0.2,
  referralValidityMonths: 6,
  payoutDays: 30,
  /** Monthly price per tier, same order as the migration landing tiers. */
  tiers: [1100, 1450, 1700, 2000],
  contactEmail: 'antonio@noprob.agency',
  whatsappDisplay: '+39 320 406 3459',
  whatsappUrl: 'https://wa.me/393204063459',
} as const

export function ambassadorCommission(monthlyPrice: number): number {
  const total = monthlyPrice * AMBASSADOR_TERMS.months
  return Math.round(total * AMBASSADOR_TERMS.rate)
}

export function formatEur(value: number, locale: Locale): string {
  const sep = locale === 'it' ? '.' : ','
  return `€${String(value).replace(/\B(?=(\d{3})+(?!\d))/g, sep)}`
}

type Item = { title: string; description: string }

export type AmbassadorCopy = {
  metaTitle: string
  metaDescription: string
  hero: {
    label: string
    badge: string
    titlePart1: string
    titleEm: string
    lead: string
    stats: { value: string; label: string }[]
    tocLabel: string
    toc: { id: string; label: string }[]
  }
  summary: { label: string; heading: string; headingEm: string; steps: Item[] }
  commission: {
    label: string
    heading: string
    headingEm: string
    rateLabel: string
    rateNote: string
    formula: { before: string; linkLabel: string; after: string }
    simulationTitle: string
    simulationNote: string
    simulation: { count: number; label: string }[]
    tierNote: string
    rules: Item[]
  }
  offer: {
    label: string
    heading: string
    headingEm: string
    intro: string
    includedTitle: string
    included: string[]
    phasesTitle: string
    phases: { name: string; duration: string; description: string }[]
    landingLabel: string
    landingNote: string
    platformsTitle: string
    platforms: string
    whyTitle: string
    why: string
  }
  pricing: {
    label: string
    heading: string
    headingEm: string
    perMonth: string
    monthsSuffix: string
    totalLabel: string
    points: string[]
    externalTitle: string
    external: string
    externalLinkLabel: string
    argumentTitle: string
    argument: string
  }
  target: {
    label: string
    heading: string
    headingEm: string
    intro: string
    yesTitle: string
    yes: string[]
    noTitle: string
    no: string[]
    doubtTitle: string
    doubt: string
  }
  pains: {
    label: string
    heading: string
    headingEm: string
    intro: string
    quoteLabel: string
    fixLabel: string
    items: { title: string; quote: string; fix: string }[]
  }
  prospecting: {
    label: string
    heading: string
    headingEm: string
    idealTitle: string
    ideal: string
    signalsTitle: string
    signals: string[]
    checkTitle: string
    check: string[]
    networkTitle: string
    network: string[]
  }
  pitch: {
    label: string
    heading: string
    headingEm: string
    whoTitle: string
    partnerAlt: string
    partnerText: string
    authorityStats: { value: string; label: string }[]
    antonio: { name: string; role: string; bio: string; points: string[] }
    team: { title: string; description: string; skills: string[] }
    pitchTitle: string
    pitch: string
    messagesTitle: string
    messages: string[]
    proofTitle: string
    proof: string
    proofFoot: string
    objectionsTitle: string
    objections: { question: string; answer: string }[]
  }
  qualify: {
    label: string
    heading: string
    headingEm: string
    intro: string
    whyLabel: string
    questions: { question: string; why: string }[]
  }
  modes: {
    label: string
    heading: string
    headingEm: string
    intro: string
    items: { tag: string; title: string; forWho: string; steps: string[] }[]
    hotLeadTitle: string
    hotLead: string
  }
  promotion: {
    label: string
    heading: string
    headingEm: string
    intro: string
    ideasTitle: string
    ideas: string[]
    rulesTitle: string
    rules: string[]
  }
  attribution: { label: string; heading: string; headingEm: string; items: Item[] }
  handoff: {
    label: string
    heading: string
    headingEm: string
    fieldsTitle: string
    fields: string[]
    channelsTitle: string
    emailLabel: string
    whatsappLabel: string
    subjectHint: string
    privacy: string
  }
  faq: {
    label: string
    heading: string
    headingEm: string
    items: { question: string; answer: string }[]
  }
  materials: {
    label: string
    heading: string
    headingEm: string
    intro: string
    links: { label: string; description: string; href: string }[]
    closing: string
    signature: string
    updated: string
    terms: string
  }
}

const T = AMBASSADOR_TERMS
const TOTAL = T.monthlyPrice * T.months
const COMMISSION = ambassadorCommission(T.monthlyPrice)

const itEur = (n: number) => formatEur(n, 'it')
const enEur = (n: number) => formatEur(n, 'en')

const it: AmbassadorCopy = {
  metaTitle: 'Programma Ambassador: Migrazione Shopify',
  metaDescription:
    'Il playbook per gli ambassador di noprob: offerta, target, pitch e commissioni del 20% su ogni migrazione Shopify portata.',
  hero: {
    label: 'programma ambassador',
    badge: 'Documento riservato, non pubblico',
    titlePart1: 'Porta una migrazione Shopify. ',
    titleEm: 'Guadagni il 20%.',
    lead:
      'Questo è il playbook completo per collaborare con me come ambassador: cosa vendiamo, a chi, quanto costa, come presentarlo e quanto guadagni per ogni cliente che arriva da te. Tutto scritto, niente sorprese.',
    stats: [
      { value: '20%', label: 'di commissione su ogni migrazione chiusa' },
      { value: itEur(COMMISSION), label: `quello che guadagni oggi per ogni cliente (su un’offerta di ${itEur(TOTAL)})` },
      { value: '1ª rata', label: 'la commissione è confermata al primo pagamento del cliente' },
    ],
    tocLabel: 'In questo documento',
    toc: [
      { id: 'come-funziona', label: 'Come funziona' },
      { id: 'commissioni', label: 'Commissioni' },
      { id: 'offerta', label: 'L’offerta' },
      { id: 'materiali', label: 'Materiali' },
      { id: 'prezzo', label: 'Prezzo e costi' },
      { id: 'target', label: 'Il cliente giusto' },
      { id: 'problemi', label: 'I problemi del target' },
      { id: 'dove-trovarli', label: 'Dove trovarli' },
      { id: 'pitch', label: 'Come presentarlo' },
      { id: 'qualificare', label: 'Domande da fare' },
      { id: 'vendita', label: 'Chiudi tu o chiudo io' },
      { id: 'promozione', label: 'Promozione' },
      { id: 'regole', label: 'Regole di attribuzione' },
      { id: 'segnalare', label: 'Come segnalare' },
      { id: 'faq', label: 'Domande frequenti' },
    ],
  },
  summary: {
    label: 'in breve',
    heading: 'Come funziona, ',
    headingEm: 'in 4 punti.',
    steps: [
      {
        title: 'Trovi un eCommerce in target',
        description:
          'Un eCommerce già avviato, su una piattaforma diversa da Shopify, che vuole passare a Shopify. Il meglio: chi ha già deciso e sta cercando un partner. In Italia, in Europa o nel resto del mondo.',
      },
      {
        title: 'Lo presenti o me lo passi',
        description:
          'Puoi chiudere la vendita tu, oppure passarmi il contatto caldo e gestisco io la trattativa. La commissione è la stessa.',
      },
      {
        title: 'Il cliente paga la prima rata',
        description:
          'In quel momento la tua commissione è confermata. Da lì in poi il progetto è una mia responsabilità.',
      },
      {
        title: 'Incassi il 20%',
        description: `Il 20% del valore del progetto. Oggi sono ${itEur(COMMISSION)} per ogni migrazione.`,
      },
    ],
  },
  commission: {
    label: 'commissioni',
    heading: 'Quanto guadagni ',
    headingEm: 'e quando.',
    rateLabel: '20%',
    rateNote: `del valore del progetto, su ogni migrazione chiusa. Oggi sono ${itEur(COMMISSION)} per ogni migrazione.`,
    formula: {
      before: 'Esempio: il prezzo minimo dell’',
      linkLabel: 'offerta',
      after: ` è di ${itEur(TOTAL)} (${itEur(T.monthlyPrice)} × ${T.months} mesi). Per ogni chiusura, il 20% sono ${itEur(COMMISSION)} in fattura.`,
    },
    simulationTitle: 'Simulazione alla tariffa attuale',
    simulationNote: 'Commissioni una tantum, una per ogni migrazione chiusa.',
    simulation: [
      { count: 1, label: '1 migrazione' },
      { count: 3, label: '3 migrazioni' },
      { count: 5, label: '5 migrazioni' },
      { count: 10, label: '10 migrazioni' },
    ],
    tierNote: `Quando il prezzo sale, sale anche la tua commissione: ${itEur(ambassadorCommission(T.tiers[2]))} a ${itEur(T.tiers[2])}/mese, ${itEur(ambassadorCommission(T.tiers[3]))} a ${itEur(T.tiers[3])}/mese. E se chiudi tu la vendita a un prezzo più alto di ${itEur(TOTAL)}, il 20% si calcola sul prezzo effettivo: la commissione sale di conseguenza.`,
    rules: [
      {
        title: 'Quando è confermata',
        description:
          'Nel momento in cui il cliente paga la prima rata. Prima di allora la segnalazione è registrata, ma la commissione non è ancora maturata.',
      },
      {
        title: 'Rimborsi e garanzie non ti toccano',
        description:
          'Se dopo la prima rata il cliente usa la garanzia 30 giorni, chiede un rimborso o interrompe il progetto, la tua commissione non cambia. Dal momento in cui il cliente è acquisito, portare avanti il progetto è una mia responsabilità.',
      },
      {
        title: 'Quando la ricevi',
        description: `In un’unica soluzione, entro ${T.payoutDays} giorni dall’incasso della prima rata.`,
      },
      {
        title: 'Su cosa si calcola',
        description:
          'Sul prezzo effettivo del percorso di migrazione pagato dal cliente (4 rate), al netto di eventuali imposte. Sono esclusi i costi esterni, come l’abbonamento Shopify.',
      },
      {
        title: `Prezzo minimo ${itEur(TOTAL)}`,
        description: `La commissione vale per le migrazioni vendute almeno al prezzo in vigore del percorso di 4 mesi (oggi ${itEur(TOTAL)}). Sopra si può, sotto no.`,
      },
      {
        title: 'Come ti pago',
        description:
          'Con bonifico, a fronte di fattura o ricevuta secondo il tuo regime fiscale. Se non sai come inquadrarla, chiedi al tuo commercialista.',
      },
    ],
  },
  offer: {
    label: 'l’offerta',
    heading: 'Cosa vendi: ',
    headingEm: 'la Migrazione Shopify.',
    intro:
      'Per ora il programma copre un solo servizio: la migrazione di un eCommerce esistente su Shopify. Non è “rifacciamo il sito”: è spostare un eCommerce che già vende su Shopify senza perdere vendite, clienti e posizionamento, e impostarlo per vendere meglio. Un percorso di 4 mesi, gestito da un team completo (sviluppo, SEO, tracciamento, UX) con un solo interlocutore per il cliente.',
    includedTitle: 'Cosa è incluso',
    included: [
      'Analisi completa dello store: dati, prodotti, ordini, clienti, URL, integrazioni, criticità SEO',
      'Migrazione di prodotti, clienti e storico ordini',
      'Piano redirect SEO 1:1 di tutti gli URL',
      'Lavoro in staging: il sito attuale non va mai offline',
      'Revisione della UX dello store per aumentare il conversion rate (non un restyling grafico completo)',
      'Sviluppo dello store Shopify',
      'Tracciamento server-side, per avere dati affidabili su pubblicità e vendite',
      'SEO tecnica e monitoraggio continuo dopo il lancio',
      'Un report di conferma per ogni area di lavoro',
      'Un solo referente per tutto il percorso',
      'Manutenzione inclusa',
      'Garanzia di rimborso 30 giorni',
    ],
    phasesTitle: 'Le 3 fasi dei 4 mesi',
    phases: [
      {
        name: 'Analisi',
        duration: 'primi ~15 giorni',
        description:
          'Mappiamo ogni dettaglio dello store prima di toccare qualsiasi cosa e impostiamo un metodo di comunicazione con il cliente.',
      },
      {
        name: 'Operatività',
        duration: '~55 giorni',
        description:
          'Migrazione dei dati, staging, redirect 1:1, tracciamento server-side, revisione UX e sviluppo. Ogni step viene inviato e confermato prima del lancio.',
      },
      {
        name: 'Monitoraggio',
        duration: '~50 giorni',
        description:
          'Go-live e controllo continuo: il team resta su sviluppo, SEO, tracciamento e UX per risolvere ogni collo di bottiglia.',
      },
    ],
    landingLabel: 'Apri la landing della Migrazione Shopify',
    landingNote: 'Tienila sempre a portata di mano: è la pagina da girare al cliente.',
    platformsTitle: 'Da quali piattaforme',
    platforms:
      'WooCommerce, PrestaShop, Magento, piattaforme custom, CRM, ERP e gestionali con eCommerce integrato. In generale, qualsiasi piattaforma diversa da Shopify.',
    whyTitle: 'Perché 4 mesi',
    why:
      'Non è il tempo tecnico della migrazione: è il tempo in cui il team segue tutto a 360°, dal primo giorno di analisi al monitoraggio dopo il lancio. E permette al cliente di pagare in 4 rate mentre vede lo store prendere forma.',
  },
  pricing: {
    label: 'prezzo e costi',
    heading: 'Quanto costa ',
    headingEm: 'al cliente.',
    perMonth: '/mese',
    monthsSuffix: `× ${T.months} mesi`,
    totalLabel: `${itEur(TOTAL)} totale del percorso`,
    points: [
      'Nessun esborso in anticipo: il cliente paga mese per mese, mentre il lavoro avanza.',
      'Garanzia 30 giorni: se entro 30 giorni il progetto non lo convince, il cliente viene rimborsato, senza domande.',
      'Il prezzo è a scaglioni e sale con il numero di clienti acquisiti. Chi entra ora blocca la tariffa attuale.',
      `${itEur(TOTAL)} è il prezzo minimo. Se chiudi tu la vendita puoi proporre un prezzo più alto (lo concordiamo prima di inviare la proposta): la tua commissione sale in proporzione.`,
    ],
    externalTitle: 'Costi esterni',
    external:
      'L’unico costo esterno è l’abbonamento Shopify, che il cliente paga direttamente a Shopify. Il piano dipende dalle dimensioni dello store e lo scegliamo insieme al cliente in fase di analisi. Nient’altro: niente costi nascosti, niente extra a consuntivo.',
    externalLinkLabel: 'Prezzi aggiornati dei piani Shopify',
    argumentTitle: 'Un argomento di vendita in più',
    argument:
      'Ogni 10 clienti la tariffa sale. Per il cliente è un motivo concreto per decidere ora e non tra sei mesi. (Per te, tra l’altro, significa che quando il prezzo sale, sale anche la commissione.)',
  },
  target: {
    label: 'il cliente giusto',
    heading: 'Chi è in target ',
    headingEm: '(e chi no).',
    intro:
      'La commissione vale solo per clienti in target. Non contano il settore né il paese: conta che l’eCommerce sia già avviato e che la migrazione abbia senso per lui. La valutazione finale la faccio io, dopo aver visto lo store.',
    yesTitle: 'In target',
    yes: [
      'eCommerce già avviato, online da tempo, con vendite regolari ogni mese',
      'Su una piattaforma diversa da Shopify (WooCommerce, PrestaShop, Magento, custom, gestionali)',
      'Con uno storico da proteggere: catalogo, clienti, ordini, traffico organico',
      'Di qualsiasi settore: moda, integratori, cosmetica, food, arredo, elettronica, B2B e altro',
      'In Italia, in Europa o nel resto del mondo (il servizio è in italiano e in inglese)',
      `Che può sostenere ${itEur(TOTAL)} in 4 mesi senza che diventi una scommessa`,
    ],
    noTitle: 'Non in target',
    no: [
      'Startup ed eCommerce appena aperti o ancora da lanciare',
      'Progetti senza vendite regolari o ancora in fase di test del prodotto',
      'Store già su Shopify che vogliono solo un restyling (per ora fuori dal programma)',
      'Chi cerca il prezzo più basso o un sito pronto in due settimane',
      'Aziende già in contatto con me prima della tua segnalazione',
    ],
    doubtTitle: 'Nel dubbio, chiedimi prima',
    doubt:
      'Se non sei sicuro che un contatto sia in target, mandami il sito prima di investirci tempo. Ti dico io se ha senso procedere.',
  },
  pains: {
    label: 'i problemi del target',
    heading: 'Chi hai davanti ',
    headingEm: 'e cosa lo blocca.',
    intro:
      'Chi ha un eCommerce avviato su una piattaforma che non funziona più ha quasi sempre gli stessi problemi. Se li senti in una conversazione, hai trovato un potenziale cliente.',
    quoteLabel: 'Cosa senti dire',
    fixLabel: 'Cosa risolviamo',
    items: [
      {
        title: 'Piattaforma rigida',
        quote: '“Ogni modifica è un ticket al developer.”',
        fix: 'Su Shopify il cliente gestisce contenuti, prodotti e promozioni in autonomia. Lo sviluppo serve solo quando serve davvero.',
      },
      {
        title: 'Sito lento e fragile',
        quote: '“Ogni volta che aggiorno un plugin si rompe qualcosa.”',
        fix: 'Hosting, sicurezza e aggiornamenti li gestisce Shopify. Niente server da mantenere, niente plugin in conflitto.',
      },
      {
        title: 'Paura di perdere la SEO',
        quote: '“Conosco chi ha migrato e ha perso metà del traffico.”',
        fix: 'Redirect 1:1 mappati prima del lancio e monitoraggio dopo. È la parte su cui lavoriamo di più (vedi il caso Cumini).',
      },
      {
        title: 'Paura del caos operativo',
        quote: '“Non posso fermare le vendite per mesi.”',
        fix: 'Si lavora in staging: il sito attuale resta online fino al go-live e i clienti non si accorgono di nulla.',
      },
      {
        title: 'Dati di cui non fidarsi',
        quote: '“Meta dice una cosa, Analytics un’altra, il gestionale un’altra ancora.”',
        fix: 'Tracciamento server-side impostato da zero: dati affidabili per decidere dove investire in pubblicità.',
      },
      {
        title: 'Manutenzione che costa troppo',
        quote: '“Spendo più per tenere in piedi il sito che per farlo crescere.”',
        fix: 'Meno sviluppo custom, meno emergenze. Il budget torna su marketing e crescita.',
      },
      {
        title: 'Ostaggio di un fornitore',
        quote: '“Il developer non risponde e solo lui sa come funziona il sito.”',
        fix: 'Un team completo con un solo referente, e uno store standard che non tiene in ostaggio nessuno.',
      },
      {
        title: 'Traffico che non converte',
        quote: '“Le visite ci sono, ma da mobile vende poco.”',
        fix: 'Revisione della UX pensata per aumentare il conversion rate e checkout Shopify, collaudato su milioni di store.',
      },
      {
        title: 'Preventivi alti e tutto in anticipo',
        quote: '“Mi hanno chiesto migliaia di euro prima ancora di iniziare.”',
        fix: `${itEur(T.monthlyPrice)} al mese per 4 mesi, pagati mentre lo store prende forma, con garanzia 30 giorni.`,
      },
    ],
  },
  prospecting: {
    label: 'dove trovarli',
    heading: 'Come riconoscere ',
    headingEm: 'un cliente in target.',
    idealTitle: 'Il contatto ideale: chi ha già deciso di migrare',
    ideal:
      'I contatti migliori sono quelli che vogliono già passare a Shopify e stanno cercando un partner che lo faccia. Conoscono già i costi e i vantaggi di Shopify: non devi convincerli di niente, devi solo presentare le persone giuste. Se puoi scegliere dove cercare, cerca soprattutto loro.',
    signalsTitle: 'Segnali da cogliere',
    signals: [
      'Sta raccogliendo preventivi per passare a Shopify',
      'Ti chiede se conosci qualcuno bravo su Shopify',
      'Si lamenta del sito: lento, instabile, difficile da aggiornare',
      'Sta cercando un nuovo developer o ha appena perso quello di prima',
      'Ha avuto problemi durante un picco di vendite (saldi, Black Friday, campagne)',
      'Vuole aprire nuovi mercati, nuove lingue o vendere all’estero',
      'Sta facendo un rebranding o rinnovando il catalogo',
      'È su Magento 1 o su versioni vecchie di WooCommerce o PrestaShop',
      'Investe in pubblicità ma non si fida dei dati',
    ],
    checkTitle: 'Come capire su che piattaforma è un sito (30 secondi)',
    check: [
      'Installa l’estensione gratuita Wappalyzer (Chrome o Firefox): apri il sito e ti mostra la piattaforma.',
      'Oppure vai su builtwith.com, inserisci il dominio e leggi la voce “eCommerce”.',
      'Se leggi “Shopify”, non è in target per questo programma. Se leggi WooCommerce, PrestaShop, Magento o altro, sì.',
    ],
    networkTitle: 'Chi nella tua rete ha questi contatti',
    network: [
      'Agenzie e freelance di advertising, email marketing, SEO e social che non fanno sviluppo',
      'Consulenti eCommerce e di marketing',
      'Commercialisti e consulenti che seguono aziende con un eCommerce',
      'Fornitori di logistica, magazzino, packaging, fotografia e contenuti',
      'Software house e fornitori di gestionali ed ERP',
      'Altri imprenditori eCommerce, community ed eventi di settore',
    ],
  },
  pitch: {
    label: 'come presentarlo',
    heading: 'Cosa dire, ',
    headingEm: 'parola per parola.',
    whoTitle: 'Chi c’è dietro',
    partnerAlt: 'Shopify Partners',
    partnerText:
      'Siamo Shopify Partner e lavoriamo solo su Shopify, ogni giorno. È la prima cosa da dire: il cliente non parla con un’agenzia generalista, ma con specialisti della piattaforma su cui vuole andare.',
    authorityStats: [
      { value: '7', label: 'persone nel team, tutte specializzate su Shopify' },
      { value: '7+ anni', label: 'di progetti eCommerce' },
      { value: 'Decine', label: 'di progetti eCommerce seguiti' },
      { value: '5/5', label: 'su Trustpilot, 10 recensioni' },
    ],
    antonio: {
      name: 'Antonio Manitta',
      role: 'Founder di noprob e referente unico del progetto',
      bio: 'Il cliente ha un solo interlocutore dall’inizio alla fine: Antonio. Non un commerciale, ma il project manager ed esperto eCommerce che segue il progetto su tutto, dalla prima analisi al monitoraggio dopo il lancio.',
      points: [
        'Laureato in informatica',
        'Da oltre 7 anni lavora su progetti eCommerce',
        'Ultra specializzato su Shopify',
        'Con il team sviluppa e lancia anche SaaS e applicazioni proprie',
      ],
    },
    team: {
      title: 'Un team di 7 specialisti Shopify',
      description:
        'Dietro Antonio c’è un team completo che copre ogni area della migrazione. Quando serve qualcosa, non si cerca il freelance giusto: c’è già qualcuno nel team che lo fa. E chi sviluppa SaaS e applicazioni proprie ha competenze tecniche che vanno ben oltre il classico “sito su tema”.',
      skills: [
        'Sviluppo Shopify',
        'SEO e redirect',
        'Tracciamento server-side',
        'UX e conversion rate',
        'Design',
        'Integrazioni, ERP e gestionali',
        'Migrazione dati',
      ],
    },
    pitchTitle: 'Il pitch in 30 secondi',
    pitch: `“Conosco un team di 7 specialisti Shopify, Shopify Partner, che porta eCommerce su Shopify senza fermare le vendite e senza perdere posizionamento su Google. Hai un solo referente, Antonio, e dietro un team che segue tutto: SEO, tracciamento, UX e sviluppo. È un percorso di 4 mesi: analisi, migrazione, lancio e monitoraggio dopo il lancio. Si paga mese per mese, ${itEur(T.monthlyPrice)} al mese, con garanzia di rimborso nei primi 30 giorni. Vuoi che ti metta in contatto con Antonio?”`,
    messagesTitle: 'I 6 messaggi chiave',
    messages: [
      'Shopify Partner, con un team di 7 persone specializzate solo su Shopify: SEO, tracciamento, UX, sviluppo.',
      'Nessuna vendita persa: il sito attuale resta online fino al go-live.',
      'Nessuna perdita SEO: redirect 1:1 e monitoraggio dopo il lancio.',
      'Un solo referente, con un team completo dietro.',
      'Si paga mentre il lavoro avanza, non tutto in anticipo.',
      'Garanzia 30 giorni: il rischio per il cliente è minimo.',
    ],
    proofTitle: 'La prova da citare: Cumini',
    proof:
      'Da oltre 4 anni seguiamo Cumini, boutique di moda luxury multibrand: dopo la migrazione su Shopify ha venduto online il 67,7% in più nei 12 mesi successivi. E Integratori Nazzi DTC, passata da WooCommerce a Shopify: +105% di vendite online nei primi 85 giorni. Sono i due nomi da citare, con i case study pubblici sul sito.',
    proofFoot: 'E come Cumini ci sono decine di altri progetti eCommerce seguiti dal team. Le recensioni dei clienti sono su Trustpilot: 10 recensioni, tutte a 5 stelle.',
    objectionsTitle: 'Le obiezioni più comuni (e come rispondere)',
    objections: [
      {
        question: '“Perderò posizionamento su Google?”',
        answer:
          'No, se la migrazione è gestita. Redirect 1:1 di tutti gli URL, SEO tecnica e monitoraggio dopo il lancio. Un calo nei primi giorni è fisiologico: conta la risalita, ed è lì che facciamo la differenza.',
      },
      {
        question: '“Il sito andrà offline?”',
        answer: 'No. Si lavora in staging e al go-live il sito non si ferma un secondo.',
      },
      {
        question: '“Perché 4 mesi? Non si fa prima?”',
        answer:
          'La parte tecnica sì, ma i 4 mesi coprono anche l’analisi iniziale e il monitoraggio dopo il lancio. E permettono di pagare in 4 rate.',
      },
      {
        question: '“Costa troppo.”',
        answer: `${itEur(TOTAL)} in totale, divisi in 4 mesi, con garanzia 30 giorni. Da confrontare con quanto costa oggi mantenere la piattaforma attuale e con le vendite perse da un sito lento.`,
      },
      {
        question: '“E se non mi trovo bene?”',
        answer: 'Garanzia 30 giorni: se entro 30 giorni il progetto non lo convince, rimborso senza domande.',
      },
      {
        question: '“Perché proprio Shopify?”',
        answer:
          'Hosting, sicurezza e aggiornamenti li gestisce Shopify, il checkout è collaudato su milioni di store e il cliente diventa autonomo nella gestione di tutti i giorni.',
      },
      {
        question: '“Ho già chi mi segue il marketing.”',
        answer:
          'Nessun problema: la migrazione è un progetto a sé, con un inizio e una fine. Chi segue già advertising e marketing può continuare a farlo.',
      },
      {
        question: '“E dopo i 4 mesi?”',
        answer:
          'Lo store è su Shopify, solido e pronto. Se vuole, il cliente può continuare con il team per la crescita (advertising, email marketing, CRO), ma non è un obbligo.',
      },
    ],
  },
  qualify: {
    label: 'domande da fare',
    heading: 'Cosa chiedere ',
    headingEm: 'prima di passarmelo.',
    intro:
      'Bastano cinque minuti di conversazione. Ti fanno risparmiare tempo e mi permettono di arrivare alla videochiamata già preparato.',
    whyLabel: 'Perché',
    questions: [
      { question: 'Su che piattaforma è il tuo eCommerce oggi?', why: 'Deve essere diversa da Shopify.' },
      { question: 'Da quanto tempo vendi online?', why: 'Escludiamo startup e progetti appena lanciati.' },
      { question: 'Hai vendite regolari ogni mese?', why: 'Serve uno storico da proteggere.' },
      {
        question: 'Cosa ti blocca oggi della piattaforma attuale?',
        why: 'È il vero motivo del cambio, ed è quello che mi serve per preparare la videochiamata.',
      },
      { question: 'Quando vorresti fare il passaggio?', why: 'Ci dice quanto è urgente.' },
      {
        question: `Un investimento di ${itEur(T.monthlyPrice)} al mese per 4 mesi è sostenibile?`,
        why: 'Evita di far perdere tempo a te e al cliente.',
      },
      { question: 'Chi decide in azienda?', why: 'Meglio parlare direttamente con chi firma.' },
    ],
  },
  modes: {
    label: 'la vendita',
    heading: 'Chiudi tu ',
    headingEm: 'o chiudo io.',
    intro: 'Scegli tu, anche cliente per cliente. La commissione non cambia.',
    items: [
      {
        tag: 'Opzione A',
        title: 'Chiudi tu la vendita',
        forWho: 'Per chi ha già la fiducia del cliente e vuole gestire la trattativa.',
        steps: [
          'Presenti il servizio usando questo documento e la landing',
          'Se servono dettagli tecnici, organizzo una videochiamata con te e il cliente',
          'Il cliente conferma: gli invio proposta e contratto al prezzo che avete concordato',
          'Il cliente paga la prima rata e la tua commissione è confermata',
        ],
      },
      {
        tag: 'Opzione B',
        title: 'Passami il lead caldo',
        forWho: 'Per chi preferisce fare solo l’introduzione.',
        steps: [
          'Presenti me e il servizio e verifichi che il cliente sia interessato',
          'Mi mandi i suoi dati o ci metti in contatto direttamente',
          'Gestisco io videochiamata, proposta e chiusura, e ti aggiorno sull’esito',
          'Il cliente paga la prima rata e la tua commissione è confermata',
        ],
      },
    ],
    hotLeadTitle: 'Cos’è un lead caldo',
    hotLead:
      'Un contatto che sa chi sono, sa perché lo contatterò e ha accettato di parlarmi. Un nome in una lista non è un lead caldo.',
  },
  promotion: {
    label: 'promozione',
    heading: 'Promuovi come vuoi, ',
    headingEm: 'conta il risultato.',
    intro:
      'Puoi usare qualsiasi canale: passaparola, messaggi diretti, LinkedIn, contenuti, newsletter, eventi, pubblicità a pagamento. L’importante è che il contatto arrivi a me e che venga chiuso.',
    ideasTitle: 'Idee che funzionano',
    ideas: [
      'Proporlo ai clienti con cui lavori già: è il canale più efficace',
      'Post e contenuti su migrazione, SEO e Shopify rivolti a titolari di eCommerce',
      'Newsletter, community e gruppi di settore',
      'Campagne pubblicitarie verso titolari di eCommerce su altre piattaforme',
    ],
    rulesTitle: 'Le regole (poche, ma chiare)',
    rules: [
      'Parli a nome tuo: non presentarti come dipendente o socio di noprob.',
      'Usa solo prezzi, tempi e garanzie scritti qui. Niente promesse in più.',
      'Non puoi applicare sconti al prezzo del servizio.',
      'Niente spam: niente liste comprate, niente messaggi di massa non richiesti.',
      'Nelle campagne a pagamento non usare “noprob” come parola chiave o come nome dell’inserzionista.',
    ],
  },
  attribution: {
    label: 'regole di attribuzione',
    heading: 'Quando un cliente ',
    headingEm: 'è tuo.',
    items: [
      {
        title: 'Conta la segnalazione scritta',
        description:
          'Un contatto è tuo da quando me lo segnali per email o WhatsApp. Ti confermo la ricezione e ti dico se è in target.',
      },
      {
        title: 'Vale la prima segnalazione',
        description: 'Se lo stesso contatto arriva da due ambassador, vale la prima segnalazione ricevuta.',
      },
      {
        title: 'Contatti già in corso',
        description:
          'Se l’azienda era già in trattativa con me o mi aveva già scritto nei 6 mesi prima della tua segnalazione, non genera commissione. Te lo dico subito, alla conferma.',
      },
      {
        title: `Validità ${T.referralValidityMonths} mesi`,
        description: `Se il cliente firma entro ${T.referralValidityMonths} mesi dalla tua segnalazione, la commissione è tua.`,
      },
      {
        title: 'Aggiornamenti a ogni passaggio',
        description:
          'Ti tengo aggiornato: videochiamata fatta, proposta inviata, firma, pagamento della prima rata.',
      },
    ],
  },
  handoff: {
    label: 'come segnalare',
    heading: 'Cosa mandarmi ',
    headingEm: 'per ogni contatto.',
    fieldsTitle: 'Le informazioni che mi servono',
    fields: [
      'Nome e cognome del referente',
      'Nome del brand e sito web',
      'Piattaforma attuale',
      'Email e/o telefono',
      'Cosa lo blocca oggi e perché vuole cambiare',
      'Tempistiche indicative',
      'Se chiudi tu o se gestisco io la vendita',
      'Se il cliente sa che lo contatterò (per un lead caldo deve essere sì)',
    ],
    channelsTitle: 'Dove mandarle',
    emailLabel: 'Email',
    whatsappLabel: 'WhatsApp',
    subjectHint: 'Oggetto consigliato: “Segnalazione ambassador: nome del brand”.',
    privacy:
      'Prima di passarmi i dati di una persona, assicurati che sia d’accordo a essere contattata.',
  },
  faq: {
    label: 'domande frequenti',
    heading: 'Le domande ',
    headingEm: 'degli ambassador.',
    items: [
      {
        question: 'Serve un contratto?',
        answer:
          'Sì. Prima della prima segnalazione firmiamo un breve accordo di collaborazione che riprende le condizioni di questa pagina.',
      },
      {
        question: 'Devo avere la partita IVA?',
        answer:
          'Non per forza: dipende da quante collaborazioni fai e dal tuo paese. In Italia, se la collaborazione è occasionale, si può valutare la prestazione occasionale. Chiedi conferma al tuo commercialista.',
      },
      {
        question: 'Posso segnalare aziende fuori dall’Italia?',
        answer:
          'Sì. Il programma vale per eCommerce in Italia, in Europa e nel resto del mondo. Il servizio è disponibile in italiano e in inglese.',
      },
      {
        question: 'C’è un limite di clienti che posso portare?',
        answer:
          'No. L’unico limite sono gli slot: seguiamo pochi progetti alla volta per farli bene. Se c’è attesa, te lo dico subito.',
      },
      {
        question: 'Se il cliente chiede il rimborso dopo la prima rata?',
        answer:
          'La tua commissione resta confermata. Da quando il cliente ha pagato la prima rata, il progetto è una mia responsabilità.',
      },
      {
        question: 'Il cliente è già su Shopify e vuole rifare il sito: vale?',
        answer:
          'Per ora no: il programma copre solo le migrazioni da altre piattaforme. Se pensi sia un contatto interessante, parliamone comunque.',
      },
      {
        question: 'Posso fare uno sconto rinunciando a parte della commissione?',
        answer:
          `No. ${itEur(TOTAL)} è il prezzo minimo del percorso: puoi proporre un prezzo più alto (e guadagnare di più), mai uno più basso.`,
      },
      {
        question: 'Posso usare il logo e i materiali di noprob?',
        answer:
          'Puoi girare liberamente i link alla landing e al caso studio. Per usare logo o materiali in pubblicità, chiedimelo prima.',
      },
    ],
  },
  materials: {
    label: 'materiali',
    heading: 'Cosa puoi ',
    headingEm: 'girare al cliente.',
    intro: 'Tienili sempre pronti: sono i link da mandare al cliente dopo la prima conversazione.',
    links: [
      {
        label: 'Landing Migrazione Shopify (IT)',
        description: 'Tutto il servizio, il processo, il prezzo e le FAQ.',
        href: '/it/migrazione-shopify',
      },
      {
        label: 'Shopify Migration landing (EN)',
        description: 'La stessa pagina in inglese, per clienti esteri.',
        href: '/shopify-migration',
      },
      {
        label: 'Caso studio Cumini',
        description: 'La storia completa del cliente citato nel pitch.',
        href: '/it/casi-studio/cumini-luxury-fashion-ecommerce',
      },
      {
        label: 'Recensioni Trustpilot',
        description: 'Cosa dicono i clienti che hanno lavorato con noi.',
        href: '/trustpilot',
      },
    ],
    closing: 'Hai una domanda che non trovi qui? Scrivimi: la aggiungo a questo documento.',
    signature: 'Antonio Manitta, Founder di noprob agency',
    updated: 'Ultimo aggiornamento: settembre 2026',
    terms:
      'Le condizioni possono essere aggiornate. Per ogni segnalazione valgono quelle in vigore nel giorno in cui la ricevo.',
  },
}

const en: AmbassadorCopy = {
  metaTitle: 'Ambassador Program: Shopify Migration',
  metaDescription:
    'The noprob ambassador playbook: offer, target, pitch and a 20% commission on every Shopify migration you bring.',
  hero: {
    label: 'ambassador program',
    badge: 'Private document, not public',
    titlePart1: 'Bring a Shopify migration. ',
    titleEm: 'Earn 20%.',
    lead:
      'This is the complete playbook for working with me as an ambassador: what we sell, to whom, what it costs, how to pitch it and how much you earn for every client who comes through you. All in writing, no surprises.',
    stats: [
      { value: '20%', label: 'commission on every closed migration' },
      { value: enEur(COMMISSION), label: `what you earn today per client (on a ${enEur(TOTAL)} offer)` },
      { value: '1st payment', label: 'your commission is confirmed when the client pays the first installment' },
    ],
    tocLabel: 'In this document',
    toc: [
      { id: 'come-funziona', label: 'How it works' },
      { id: 'commissioni', label: 'Commission' },
      { id: 'offerta', label: 'The offer' },
      { id: 'materiali', label: 'Materials' },
      { id: 'prezzo', label: 'Price and costs' },
      { id: 'target', label: 'The right client' },
      { id: 'problemi', label: 'Their problems' },
      { id: 'dove-trovarli', label: 'Where to find them' },
      { id: 'pitch', label: 'How to pitch it' },
      { id: 'qualificare', label: 'Questions to ask' },
      { id: 'vendita', label: 'You close or I close' },
      { id: 'promozione', label: 'Promotion' },
      { id: 'regole', label: 'Attribution rules' },
      { id: 'segnalare', label: 'How to refer' },
      { id: 'faq', label: 'FAQ' },
    ],
  },
  summary: {
    label: 'in short',
    heading: 'How it works, ',
    headingEm: 'in 4 steps.',
    steps: [
      {
        title: 'You find an eCommerce in target',
        description:
          'An established eCommerce, on a platform other than Shopify, that wants to move to Shopify. Best of all: one that has already decided and is looking for a partner. In Italy, Europe or anywhere else in the world.',
      },
      {
        title: 'You pitch it or pass it to me',
        description:
          'You can close the sale yourself, or hand me the warm lead and I run the negotiation. The commission is the same.',
      },
      {
        title: 'The client pays the first installment',
        description:
          'At that moment your commission is confirmed. From there on, the project is my responsibility.',
      },
      {
        title: 'You earn 20%',
        description: `20% of the project value. Today that’s ${enEur(COMMISSION)} per migration.`,
      },
    ],
  },
  commission: {
    label: 'commission',
    heading: 'How much you earn ',
    headingEm: 'and when.',
    rateLabel: '20%',
    rateNote: `of the project value, on every closed migration. Today that’s ${enEur(COMMISSION)} per migration.`,
    formula: {
      before: 'Example: the minimum price of the ',
      linkLabel: 'offer',
      after: ` is ${enEur(TOTAL)} (${enEur(T.monthlyPrice)} × ${T.months} months). For every close, 20% is ${enEur(COMMISSION)} on your invoice.`,
    },
    simulationTitle: 'Simulation at the current rate',
    simulationNote: 'One-off commissions, one for each closed migration.',
    simulation: [
      { count: 1, label: '1 migration' },
      { count: 3, label: '3 migrations' },
      { count: 5, label: '5 migrations' },
      { count: 10, label: '10 migrations' },
    ],
    tierNote: `When the price goes up, so does your commission: ${enEur(ambassadorCommission(T.tiers[2]))} at ${enEur(T.tiers[2])}/month, ${enEur(ambassadorCommission(T.tiers[3]))} at ${enEur(T.tiers[3])}/month. And if you close the sale yourself at a price above ${enEur(TOTAL)}, the 20% is calculated on the actual price: your commission goes up accordingly.`,
    rules: [
      {
        title: 'When it’s confirmed',
        description:
          'The moment the client pays the first installment. Before that, the referral is registered but the commission hasn’t been earned yet.',
      },
      {
        title: 'Refunds and guarantees don’t affect you',
        description:
          'If after the first installment the client uses the 30-day guarantee, asks for a refund or stops the project, your commission doesn’t change. Once the client is acquired, delivering the project is my responsibility.',
      },
      {
        title: 'When you get paid',
        description: `In a single payment, within ${T.payoutDays} days of receiving the first installment.`,
      },
      {
        title: 'What it’s calculated on',
        description:
          'On the actual price of the migration journey paid by the client (4 installments), net of any taxes. External costs, like the Shopify subscription, are excluded.',
      },
      {
        title: `Minimum price ${enEur(TOTAL)}`,
        description: `The commission applies to migrations sold at least at the current price of the 4-month journey (today ${enEur(TOTAL)}). Above is fine, below is not.`,
      },
      {
        title: 'How I pay you',
        description:
          'By bank transfer, against an invoice or receipt according to your tax status. If you’re not sure how to handle it, ask your accountant.',
      },
    ],
  },
  offer: {
    label: 'the offer',
    heading: 'What you sell: ',
    headingEm: 'the Shopify Migration.',
    intro:
      'For now the program covers one service only: migrating an existing eCommerce to Shopify. It’s not “we’ll rebuild your site”: it’s moving an eCommerce that already sells to Shopify without losing sales, customers or rankings, and setting it up to sell better. A 4-month journey, run by a full team (development, SEO, tracking, UX) with one point of contact for the client.',
    includedTitle: 'What’s included',
    included: [
      'Full store analysis: data, products, orders, customers, URLs, integrations, SEO issues',
      'Migration of products, customers and order history',
      '1:1 SEO redirect plan for every URL',
      'Work in staging: the current site never goes offline',
      'A UX review of the store to raise the conversion rate (not a full visual redesign)',
      'Shopify store development',
      'Server-side tracking, for reliable ad and sales data',
      'Technical SEO and continuous post-launch monitoring',
      'A confirmation report for every work area',
      'One point of contact for the whole journey',
      'Maintenance included',
      '30-day money-back guarantee',
    ],
    phasesTitle: 'The 3 phases of the 4 months',
    phases: [
      {
        name: 'Analysis',
        duration: 'first ~15 days',
        description:
          'We map every detail of the store before touching anything and set up how we communicate with the client.',
      },
      {
        name: 'Execution',
        duration: '~55 days',
        description:
          'Data migration, staging, 1:1 redirects, server-side tracking, UX review and development. Every step is shared and approved before launch.',
      },
      {
        name: 'Monitoring',
        duration: '~50 days',
        description:
          'Go-live and continuous oversight: the team stays on development, SEO, tracking and UX to fix every bottleneck.',
      },
    ],
    landingLabel: 'Open the Shopify Migration landing page',
    landingNote: 'Keep it at hand: it’s the page to send to the client.',
    platformsTitle: 'Which platforms',
    platforms:
      'WooCommerce, PrestaShop, Magento, custom platforms, CRM, ERP and management systems with a built-in eCommerce. In short, any platform other than Shopify.',
    whyTitle: 'Why 4 months',
    why:
      'It isn’t the technical time of the migration: it’s the time the team follows everything end to end, from the first day of analysis to post-launch monitoring. It also lets the client pay in 4 installments while watching the store take shape.',
  },
  pricing: {
    label: 'price and costs',
    heading: 'What it costs ',
    headingEm: 'the client.',
    perMonth: '/month',
    monthsSuffix: `× ${T.months} months`,
    totalLabel: `${enEur(TOTAL)} for the full journey`,
    points: [
      'Nothing up front: the client pays month by month, as the work progresses.',
      '30-day guarantee: if the client isn’t convinced within 30 days, they get a refund, no questions asked.',
      'The price is tiered and goes up as we take on clients. Whoever starts now locks in the current rate.',
      `${enEur(TOTAL)} is the minimum price. If you close the sale yourself you can propose a higher price (we agree on it before the proposal goes out): your commission rises in proportion.`,
    ],
    externalTitle: 'External costs',
    external:
      'The only external cost is the Shopify subscription, which the client pays directly to Shopify. The plan depends on the size of the store and we choose it with the client during the analysis. Nothing else: no hidden costs, no surprise extras.',
    externalLinkLabel: 'Current Shopify plan prices',
    argumentTitle: 'One more selling point',
    argument:
      'Every 10 clients the rate goes up. For the client it’s a concrete reason to decide now rather than in six months. (For you, by the way, it means that when the price goes up, so does your commission.)',
  },
  target: {
    label: 'the right client',
    heading: 'Who is in target ',
    headingEm: '(and who isn’t).',
    intro:
      'The commission only applies to clients in target. Industry and country don’t matter: what matters is that the eCommerce is established and the migration makes sense for it. I make the final call after looking at the store.',
    yesTitle: 'In target',
    yes: [
      'An established eCommerce, online for a while, with regular sales every month',
      'On a platform other than Shopify (WooCommerce, PrestaShop, Magento, custom, management systems)',
      'With a history to protect: catalog, customers, orders, organic traffic',
      'Any industry: fashion, supplements, beauty, food, furniture, electronics, B2B and more',
      'In Italy, Europe or anywhere else in the world (the service runs in Italian and English)',
      `Able to invest ${enEur(TOTAL)} over 4 months without it being a gamble`,
    ],
    noTitle: 'Not in target',
    no: [
      'Startups and eCommerce stores that just opened or haven’t launched yet',
      'Projects without regular sales or still testing the product',
      'Stores already on Shopify that only want a redesign (outside the program for now)',
      'People looking for the lowest price or a site ready in two weeks',
      'Companies already in touch with me before your referral',
    ],
    doubtTitle: 'When in doubt, ask me first',
    doubt:
      'If you’re not sure a contact is in target, send me the site before you invest time in it. I’ll tell you whether it’s worth pursuing.',
  },
  pains: {
    label: 'their problems',
    heading: 'Who you’re talking to ',
    headingEm: 'and what’s holding them back.',
    intro:
      'Owners of an established eCommerce on a platform that no longer works almost always have the same problems. If you hear them in a conversation, you’ve found a potential client.',
    quoteLabel: 'What you hear',
    fixLabel: 'What we fix',
    items: [
      {
        title: 'Rigid platform',
        quote: '“Every change is a ticket to the developer.”',
        fix: 'On Shopify the client manages content, products and promotions on their own. Development is only needed when it’s really needed.',
      },
      {
        title: 'Slow, fragile site',
        quote: '“Every time I update a plugin, something breaks.”',
        fix: 'Shopify handles hosting, security and updates. No servers to maintain, no conflicting plugins.',
      },
      {
        title: 'Fear of losing SEO',
        quote: '“I know people who migrated and lost half their traffic.”',
        fix: '1:1 redirects mapped before launch and monitoring after. It’s what we work on most (see the Cumini case).',
      },
      {
        title: 'Fear of operational chaos',
        quote: '“I can’t stop selling for months.”',
        fix: 'We work in staging: the current site stays online until go-live and customers don’t notice a thing.',
      },
      {
        title: 'Data they can’t trust',
        quote: '“Meta says one thing, Analytics another, the back office something else.”',
        fix: 'Server-side tracking set up from scratch: reliable data to decide where to invest in ads.',
      },
      {
        title: 'Maintenance that costs too much',
        quote: '“I spend more keeping the site alive than growing it.”',
        fix: 'Less custom development, fewer emergencies. The budget goes back to marketing and growth.',
      },
      {
        title: 'Hostage to a supplier',
        quote: '“The developer doesn’t answer and only he knows how the site works.”',
        fix: 'A full team with one point of contact, and a standard store that holds nobody hostage.',
      },
      {
        title: 'Traffic that doesn’t convert',
        quote: '“We get visits, but mobile barely sells.”',
        fix: 'A UX review built to raise the conversion rate and the Shopify checkout, proven on millions of stores.',
      },
      {
        title: 'High quotes, all up front',
        quote: '“They asked for thousands before even starting.”',
        fix: `${enEur(T.monthlyPrice)} a month for 4 months, paid while the store takes shape, with a 30-day guarantee.`,
      },
    ],
  },
  prospecting: {
    label: 'where to find them',
    heading: 'How to spot ',
    headingEm: 'a client in target.',
    idealTitle: 'The ideal contact: someone who has already decided to migrate',
    ideal:
      'The best contacts are those who already want to move to Shopify and are looking for a partner to do it. They already know the costs and the benefits of Shopify: you don’t need to convince them of anything, you just introduce the right people. If you can choose where to look, look for them first.',
    signalsTitle: 'Signals to look for',
    signals: [
      'They’re collecting quotes to move to Shopify',
      'They ask if you know someone good with Shopify',
      'They complain about the site: slow, unstable, hard to update',
      'They’re looking for a new developer or just lost the previous one',
      'They had problems during a sales peak (sales season, Black Friday, campaigns)',
      'They want to open new markets, new languages or sell abroad',
      'They’re rebranding or renewing the catalog',
      'They’re on Magento 1 or on old versions of WooCommerce or PrestaShop',
      'They invest in ads but don’t trust the data',
    ],
    checkTitle: 'How to tell which platform a site runs on (30 seconds)',
    check: [
      'Install the free Wappalyzer extension (Chrome or Firefox): open the site and it shows you the platform.',
      'Or go to builtwith.com, enter the domain and read the “eCommerce” entry.',
      'If you see “Shopify”, it’s not in target for this program. If you see WooCommerce, PrestaShop, Magento or anything else, it is.',
    ],
    networkTitle: 'Who in your network has these contacts',
    network: [
      'Advertising, email marketing, SEO and social agencies and freelancers who don’t do development',
      'eCommerce and marketing consultants',
      'Accountants and advisors working with companies that run an eCommerce',
      'Logistics, warehousing, packaging, photography and content suppliers',
      'Software houses and ERP or management system vendors',
      'Other eCommerce founders, communities and industry events',
    ],
  },
  pitch: {
    label: 'how to pitch it',
    heading: 'What to say, ',
    headingEm: 'word for word.',
    whoTitle: 'Who’s behind it',
    partnerAlt: 'Shopify Partners',
    partnerText:
      'We’re Shopify Partners and we work only on Shopify, every day. It’s the first thing to say: the client isn’t talking to a generalist agency, but to specialists in the platform they want to move to.',
    authorityStats: [
      { value: '7', label: 'people on the team, all Shopify specialists' },
      { value: '7+ years', label: 'of eCommerce projects' },
      { value: 'Dozens', label: 'of eCommerce projects delivered' },
      { value: '5/5', label: 'on Trustpilot, 10 reviews' },
    ],
    antonio: {
      name: 'Antonio Manitta',
      role: 'Founder of noprob and single point of contact for the project',
      bio: 'The client has one point of contact from start to finish: Antonio. Not a salesperson, but the project manager and eCommerce expert who oversees everything, from the first analysis to post-launch monitoring.',
      points: [
        'Degree in Computer Science',
        'Over 7 years working on eCommerce projects',
        'Deeply specialized in Shopify',
        'With the team he also builds and launches proprietary SaaS and apps',
      ],
    },
    team: {
      title: 'A team of 7 Shopify specialists',
      description:
        'Behind Antonio there’s a full team covering every area of the migration. When something’s needed, nobody goes looking for the right freelancer: someone on the team already does it. And a team that builds its own SaaS and apps has technical skills that go far beyond the typical “theme-based site”.',
      skills: [
        'Shopify development',
        'SEO and redirects',
        'Server-side tracking',
        'UX and conversion rate',
        'Design',
        'Integrations, ERP and back office',
        'Data migration',
      ],
    },
    pitchTitle: 'The 30-second pitch',
    pitch: `“I know a team of 7 Shopify specialists, Shopify Partners, that moves eCommerce stores to Shopify without stopping sales and without losing Google rankings. You get one point of contact, Antonio, and behind him a team that handles everything: SEO, tracking, UX and development. It’s a 4-month journey: analysis, migration, launch and post-launch monitoring. You pay month by month, ${enEur(T.monthlyPrice)} a month, with a money-back guarantee in the first 30 days. Want me to put you in touch with Antonio?”`,
    messagesTitle: 'The 6 key messages',
    messages: [
      'Shopify Partners, with a team of 7 people specialized only in Shopify: SEO, tracking, UX, development.',
      'No lost sales: the current site stays online until go-live.',
      'No SEO loss: 1:1 redirects and post-launch monitoring.',
      'One point of contact, with a full team behind it.',
      'You pay as the work progresses, not everything up front.',
      '30-day guarantee: the risk for the client is minimal.',
    ],
    proofTitle: 'The proof to quote: Cumini',
    proof:
      'For over 4 years we’ve worked with Cumini, a luxury multibrand fashion boutique: after the migration to Shopify it sold 67.7% more online in the following 12 months. And Integratori Nazzi DTC, moved from WooCommerce to Shopify: +105% online sales in the first 85 days. Those are the two names to quote, with public case studies on the site.',
    proofFoot: 'And like Cumini there are dozens of other eCommerce projects the team has worked on. Client reviews are on Trustpilot: 10 reviews, all 5 stars.',
    objectionsTitle: 'The most common objections (and how to answer)',
    objections: [
      {
        question: '“Will I lose my Google rankings?”',
        answer:
          'No, if the migration is managed. 1:1 redirects for every URL, technical SEO and post-launch monitoring. A dip in the first days is normal: what matters is the recovery, and that’s where we make the difference.',
      },
      {
        question: '“Will the site go offline?”',
        answer: 'No. We work in staging and at go-live the site doesn’t stop for a second.',
      },
      {
        question: '“Why 4 months? Can’t it be faster?”',
        answer:
          'The technical part, yes, but the 4 months also cover the initial analysis and post-launch monitoring. And they let the client pay in 4 installments.',
      },
      {
        question: '“It’s too expensive.”',
        answer: `${enEur(TOTAL)} in total, split over 4 months, with a 30-day guarantee. Compare it with what it costs today to maintain the current platform and with the sales lost to a slow site.`,
      },
      {
        question: '“What if I’m not happy?”',
        answer: '30-day guarantee: if the client isn’t convinced within 30 days, they get a refund, no questions asked.',
      },
      {
        question: '“Why Shopify?”',
        answer:
          'Shopify handles hosting, security and updates, the checkout is proven on millions of stores and the client becomes autonomous in day-to-day management.',
      },
      {
        question: '“I already have someone doing my marketing.”',
        answer:
          'No problem: the migration is a project of its own, with a start and an end. Whoever already runs ads and marketing can keep doing it.',
      },
      {
        question: '“And after the 4 months?”',
        answer:
          'The store is on Shopify, solid and ready. If they want, the client can continue with the team for growth (advertising, email marketing, CRO), but it’s not required.',
      },
    ],
  },
  qualify: {
    label: 'questions to ask',
    heading: 'What to ask ',
    headingEm: 'before passing it on.',
    intro:
      'Five minutes of conversation is enough. It saves you time and lets me show up to the video call already prepared.',
    whyLabel: 'Why',
    questions: [
      { question: 'Which platform is your eCommerce on today?', why: 'It has to be something other than Shopify.' },
      { question: 'How long have you been selling online?', why: 'We rule out startups and just-launched projects.' },
      { question: 'Do you have regular sales every month?', why: 'There needs to be a history to protect.' },
      {
        question: 'What’s holding you back on your current platform?',
        why: 'It’s the real reason for the switch, and what I need to prepare the video call.',
      },
      { question: 'When would you like to make the switch?', why: 'It tells us how urgent it is.' },
      {
        question: `Is an investment of ${enEur(T.monthlyPrice)} a month for 4 months sustainable?`,
        why: 'It avoids wasting your time and the client’s.',
      },
      { question: 'Who makes the decision in the company?', why: 'It’s better to talk directly to whoever signs.' },
    ],
  },
  modes: {
    label: 'the sale',
    heading: 'You close ',
    headingEm: 'or I close.',
    intro: 'Your choice, even client by client. The commission doesn’t change.',
    items: [
      {
        tag: 'Option A',
        title: 'You close the sale',
        forWho: 'For those who already have the client’s trust and want to run the negotiation.',
        steps: [
          'You present the service using this document and the landing page',
          'If technical details are needed, I set up a video call with you and the client',
          'The client confirms: I send the proposal and contract at the price you agreed',
          'The client pays the first installment and your commission is confirmed',
        ],
      },
      {
        tag: 'Option B',
        title: 'Hand me the warm lead',
        forWho: 'For those who prefer to just make the introduction.',
        steps: [
          'You introduce me and the service and check the client is interested',
          'You send me their details or connect us directly',
          'I handle the video call, proposal and closing, and keep you posted on the outcome',
          'The client pays the first installment and your commission is confirmed',
        ],
      },
    ],
    hotLeadTitle: 'What a warm lead is',
    hotLead:
      'A contact who knows who I am, knows why I’ll reach out and has agreed to talk to me. A name on a list is not a warm lead.',
  },
  promotion: {
    label: 'promotion',
    heading: 'Promote it however you like, ',
    headingEm: 'results are what count.',
    intro:
      'You can use any channel: word of mouth, direct messages, LinkedIn, content, newsletters, events, paid ads. What matters is that the contact reaches me and gets closed.',
    ideasTitle: 'Ideas that work',
    ideas: [
      'Offer it to the clients you already work with: it’s the most effective channel',
      'Posts and content about migration, SEO and Shopify aimed at eCommerce owners',
      'Newsletters, communities and industry groups',
      'Ad campaigns targeting owners of eCommerce stores on other platforms',
    ],
    rulesTitle: 'The rules (few, but clear)',
    rules: [
      'You speak on your own behalf: don’t present yourself as an employee or partner of noprob.',
      'Only use the prices, timelines and guarantees written here. No extra promises.',
      'You can’t apply discounts to the price of the service.',
      'No spam: no bought lists, no unsolicited mass messages.',
      'In paid campaigns don’t use “noprob” as a keyword or as the advertiser name.',
    ],
  },
  attribution: {
    label: 'attribution rules',
    heading: 'When a client ',
    headingEm: 'is yours.',
    items: [
      {
        title: 'The written referral counts',
        description:
          'A contact is yours from the moment you refer them to me by email or WhatsApp. I confirm receipt and tell you whether they’re in target.',
      },
      {
        title: 'First referral wins',
        description: 'If the same contact comes from two ambassadors, the first referral received counts.',
      },
      {
        title: 'Contacts already in progress',
        description:
          'If the company was already negotiating with me or had written to me in the 6 months before your referral, it doesn’t generate a commission. I’ll tell you right away, when I confirm.',
      },
      {
        title: `Valid for ${T.referralValidityMonths} months`,
        description: `If the client signs within ${T.referralValidityMonths} months of your referral, the commission is yours.`,
      },
      {
        title: 'Updates at every step',
        description:
          'I keep you posted: video call done, proposal sent, contract signed, first installment paid.',
      },
    ],
  },
  handoff: {
    label: 'how to refer',
    heading: 'What to send me ',
    headingEm: 'for each contact.',
    fieldsTitle: 'The information I need',
    fields: [
      'Full name of the contact person',
      'Brand name and website',
      'Current platform',
      'Email and/or phone',
      'What’s holding them back today and why they want to switch',
      'Rough timing',
      'Whether you close or I handle the sale',
      'Whether the client knows I’ll reach out (for a warm lead it must be yes)',
    ],
    channelsTitle: 'Where to send it',
    emailLabel: 'Email',
    whatsappLabel: 'WhatsApp',
    subjectHint: 'Suggested subject: “Ambassador referral: brand name”.',
    privacy: 'Before passing me someone’s details, make sure they’re happy to be contacted.',
  },
  faq: {
    label: 'faq',
    heading: 'Questions ',
    headingEm: 'from ambassadors.',
    items: [
      {
        question: 'Is there a contract?',
        answer:
          'Yes. Before the first referral we sign a short collaboration agreement that reflects the terms on this page.',
      },
      {
        question: 'Do I need to be registered as a business?',
        answer:
          'Not necessarily: it depends on how often you refer and on your country’s rules. Check with your accountant how to invoice the commission.',
      },
      {
        question: 'Can I refer companies outside Italy?',
        answer:
          'Yes. The program covers eCommerce stores in Italy, Europe and the rest of the world. The service is available in Italian and English.',
      },
      {
        question: 'Is there a limit to how many clients I can bring?',
        answer:
          'No. The only limit is capacity: we take on a few projects at a time to do them well. If there’s a wait, I’ll tell you right away.',
      },
      {
        question: 'What if the client asks for a refund after the first installment?',
        answer:
          'Your commission stays confirmed. Once the client has paid the first installment, the project is my responsibility.',
      },
      {
        question: 'The client is already on Shopify and wants a new site: does it count?',
        answer:
          'Not for now: the program only covers migrations from other platforms. If you think it’s an interesting contact, let’s talk about it anyway.',
      },
      {
        question: 'Can I give a discount by giving up part of my commission?',
        answer: `No. ${enEur(TOTAL)} is the minimum price of the journey: you can propose a higher price (and earn more), never a lower one.`,
      },
      {
        question: 'Can I use the noprob logo and materials?',
        answer:
          'You can freely share the links to the landing page and the case study. To use the logo or materials in ads, ask me first.',
      },
    ],
  },
  materials: {
    label: 'materials',
    heading: 'What you can ',
    headingEm: 'share with the client.',
    intro: 'Keep them ready: these are the links to send the client after the first conversation.',
    links: [
      {
        label: 'Shopify Migration landing (EN)',
        description: 'The full service, process, price and FAQ.',
        href: '/shopify-migration',
      },
      {
        label: 'Migrazione Shopify landing (IT)',
        description: 'The same page in Italian, for Italian clients.',
        href: '/it/migrazione-shopify',
      },
      {
        label: 'Cumini case study',
        description: 'The full story of the client quoted in the pitch.',
        href: '/use-cases/cumini-luxury-fashion-ecommerce',
      },
      {
        label: 'Trustpilot reviews',
        description: 'What clients who worked with us say.',
        href: '/trustpilot',
      },
    ],
    closing: 'Got a question you can’t find here? Write to me: I’ll add it to this document.',
    signature: 'Antonio Manitta, Founder of noprob agency',
    updated: 'Last updated: September 2026',
    terms:
      'Terms may be updated. Each referral is governed by the terms in force on the day I receive it.',
  },
}

const dictionaries: Record<Locale, AmbassadorCopy> = { it, en }

export function getAmbassadorCopy(locale: Locale): AmbassadorCopy {
  return dictionaries[locale]
}
