import type { Locale } from '@/lib/i18n'
import { ZL_TIERS } from '@/content/zero-loss-migration'

/**
 * Copy module for the private Ambassador and White Label playbook.
 * Routes: it -> /it/ambassador, en -> /ambassador (noindex, not in sitemap).
 *
 * The page is shared by hand with referral partners (Ambassador) and with
 * agencies that resell the Sprint under their own brand (White Label). Money
 * figures are derived from the Shopify Launch Sprint tiers (`ZL_TIERS` in
 * content/zero-loss-migration.shared.ts), so the math always matches the
 * public price of the landing.
 */

export const AMBASSADOR_TERMS = {
  /**
   * Partner share of the tier price, rounded DOWN to the hundred:
   * €5.800 -> €1.000, €8.800 -> €1.500, €12.800 -> €2.200.
   */
  rate: 0.175,
  roundTo: 100,
  referralValidityMonths: 6,
  payoutDays: 30,
  /** White label: months after the project in which we never approach the agency's client. */
  whiteLabelNonSolicitMonths: 24,
  contactEmail: 'antonio@noprob.agency',
  whatsappDisplay: '+39 320 406 3459',
  whatsappUrl: 'https://wa.me/393204063459',
} as const

/** The Sprint price tiers (by company revenue) are the single source of truth. */
export const AMBASSADOR_TIERS = ZL_TIERS

/**
 * Fixed partner amount for a Sprint tier price (VAT excluded): the ambassador
 * commission and, in the white label program, the minimum agency margin.
 */
export function ambassadorCommission(price: number): number {
  const { rate, roundTo } = AMBASSADOR_TERMS
  return Math.floor((price * rate + 1e-9) / roundTo) * roundTo
}

/** White label: what the agency pays us for a tier (public price minus the partner amount). */
export function whiteLabelPartnerPrice(price: number): number {
  return price - ambassadorCommission(price)
}

/** White label: one of the 4 installments the agency pays us. */
export function whiteLabelInstallment(price: number): number {
  return whiteLabelPartnerPrice(price) / 4
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
  programs: {
    label: string
    heading: string
    headingEm: string
    intro: string
    items: {
      tag: string
      title: string
      forWho: string
      points: string[]
      earn: string
      href: string
      linkLabel: string
    }[]
  }
  summary: { label: string; heading: string; headingEm: string; steps: Item[] }
  whiteLabel: {
    label: string
    heading: string
    headingEm: string
    intro: string
    forWhoTitle: string
    forWho: string[]
    receiveTitle: string
    receive: string[]
    stepsTitle: string
    steps: Item[]
    earnTitle: string
    earnIntro: string
    publicLabel: string
    partnerLabel: string
    marginLabel: string
    tiers: { label: string; publicPrice: string; partnerPrice: string; under: string; margin: string }[]
    earnPoints: string[]
    splitTitle: string
    ourSideTitle: string
    ourSide: string[]
    yourSideTitle: string
    yourSide: string[]
    brandTitle: string
    brand: string[]
    guaranteesTitle: string
    guarantees: string
    faqTitle: string
    faq: { question: string; answer: string }[]
    ctaTitle: string
    cta: string
    ctaSubject: string
    ctaEmailLabel: string
    ctaWhatsappLabel: string
  }
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
    tiersTitle: string
    tiers: { label: string; price: string; under: string; commission: string }[]
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
const [TIER1, TIER2, TIER3] = AMBASSADOR_TIERS
const MIN = TIER1.price
const COMMISSION = ambassadorCommission(TIER1.price)
const C2 = ambassadorCommission(TIER2.price)
const C3 = ambassadorCommission(TIER3.price)
const WL1 = whiteLabelPartnerPrice(TIER1.price)
const WL2 = whiteLabelPartnerPrice(TIER2.price)
const WL3 = whiteLabelPartnerPrice(TIER3.price)
const NS = T.whiteLabelNonSolicitMonths
/** Illustrative resale price for the white label example (not a price we publish). */
const EXAMPLE_RESALE = 7000

const itEur = (n: number) => formatEur(n, 'it')
const enEur = (n: number) => formatEur(n, 'en')

const it: AmbassadorCopy = {
  metaTitle: 'Ambassador e White Label: Shopify Launch Sprint',
  metaDescription:
    'Segnali una migrazione Shopify o la rivendi con il tuo marchio: lo Shopify Launch Sprint, il target, il pitch e da €1.000 a migrazione per te.',
  hero: {
    label: 'ambassador e white label',
    badge: 'Per consulenti, partner e agenzie',
    titlePart1: 'Segnala o rivendi una migrazione Shopify. ',
    titleEm: `Guadagni da ${itEur(COMMISSION)}.`,
    lead:
      'Questo è il playbook completo per lavorare con me in due modi. Ambassador: mi segnali un eCommerce e incassi una commissione fissa. White Label: la tua agenzia vende la migrazione con il suo marchio e noi la realizziamo dietro le quinte. Cosa vendiamo, a chi, quanto costa, come presentarlo e quanto guadagni. Tutto scritto, niente sorprese.',
    stats: [
      { value: itEur(COMMISSION), label: `commissione ambassador sullo scaglione base, fino a ${itEur(C3)} sugli scaglioni più alti` },
      { value: `${itEur(COMMISSION)}+`, label: 'margine minimo per l’agenzia in white label, più tutto il ricarico che decidi tu' },
      { value: '14 giorni', label: 'dal kickoff allo store pronto, con il tuo marchio o con il nostro' },
    ],
    tocLabel: 'In questo documento',
    toc: [
      { id: 'programmi', label: 'Ambassador o White Label' },
      { id: 'come-funziona', label: 'Come funziona l’Ambassador' },
      { id: 'commissioni', label: 'Commissioni' },
      { id: 'white-label', label: 'White Label per agenzie' },
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
  programs: {
    label: 'due programmi',
    heading: 'Segnali o rivendi: ',
    headingEm: 'scegli tu.',
    intro:
      'Stesso servizio, stessa qualità, stesso calendario di 14 giorni. Cambia chi parla con il cliente e quanto guadagni.',
    items: [
      {
        tag: 'Ambassador',
        title: 'Segnali, al resto pensiamo noi',
        forWho: 'Per consulenti, freelance, fornitori e imprenditori che conoscono eCommerce pronti a passare a Shopify.',
        points: [
          'Mi presenti il cliente o chiudi tu la vendita',
          'Il cliente firma con noi, al prezzo pubblico dello Sprint',
          'Parla con noi e vede il nostro marchio',
          'Nessun impegno dopo la segnalazione',
        ],
        earn: `Commissione fissa: ${itEur(COMMISSION)}, ${itEur(C2)} o ${itEur(C3)} per migrazione`,
        href: '#come-funziona',
        linkLabel: 'Come funziona l’Ambassador',
      },
      {
        tag: 'White Label',
        title: 'Rivendi con il tuo marchio',
        forWho: 'Per agenzie che seguono eCommerce e vogliono offrire la migrazione a Shopify senza un team dedicato.',
        points: [
          'Vendi la migrazione come servizio della tua agenzia',
          'Il cliente firma e paga te, al prezzo che decidi tu',
          'Il cliente parla con te: noi lavoriamo dietro le quinte',
          'Il cliente resta tuo, prima, durante e dopo',
        ],
        earn: `Margine da ${itEur(COMMISSION)} a ${itEur(C3)} per migrazione, più il tuo ricarico`,
        href: '#white-label',
        linkLabel: 'Come funziona il White Label',
      },
    ],
  },
  whiteLabel: {
    label: 'white label per agenzie',
    heading: 'La migrazione Shopify, ',
    headingEm: 'con il marchio della tua agenzia.',
    intro:
      'I tuoi clienti eCommerce ti chiedono di passare a Shopify. Con il White Label la migrazione diventa un servizio della tua agenzia: tu vendi, tieni la relazione e decidi il prezzo, noi realizziamo lo Shopify Launch Sprint completo con il tuo nome. Stesso calendario di 14 giorni, stesse 4 garanzie scritte, nessun team da assumere.',
    forWhoTitle: 'Per chi è',
    forWho: [
      'Agenzie di advertising, SEO, email marketing e social con clienti eCommerce',
      'Web agency che lavorano su WooCommerce, PrestaShop o Magento e ricevono richieste Shopify',
      'Agenzie Shopify che vogliono più capacità sulle migrazioni senza assumere',
      'Consulenti eCommerce che seguono i clienti nel tempo e vogliono offrire anche il passaggio a Shopify',
    ],
    receiveTitle: 'Cosa ricevi',
    receive: [
      'Lo Shopify Launch Sprint completo: dati, store, redirect, tracking, checkout, go-live e 90 giorni di supporto',
      'Tutti i documenti con il marchio della tua agenzia: Data Migration Report, Redirect Map, Tracking Spec, Go-live Checklist, report del giorno 90',
      'Loom settimanali e aggiornamenti pensati per essere girati al tuo cliente così come sono',
      'Se serve, il team partecipa alle videochiamate come team tecnico della tua agenzia',
      'Se hai un account Shopify Partner, lavoriamo come collaboratori dal tuo account',
      'Un canale diretto con Antonio per ogni progetto, per te e per il tuo account manager',
      'Accordo di riservatezza firmato prima del primo progetto',
    ],
    stepsTitle: 'Come funziona, passo per passo',
    steps: [
      {
        title: 'Firmiamo l’accordo white label',
        description:
          'Una videochiamata per conoscerci, poi un accordo semplice con prezzi partner, riservatezza e regole sul cliente. Una volta sola, vale per tutti i progetti.',
      },
      {
        title: 'Mi mandi il sito del cliente',
        description:
          'Prima che tu faccia l’offerta ti confermo scaglione, eventuali add-on e fattibilità. Così vendi un prezzo sicuro, senza sorprese.',
      },
      {
        title: 'Vendi con il tuo marchio',
        description:
          'Proposta, contratto e fattura al cliente sono tuoi, al prezzo che decidi tu. Puoi usare questo playbook e la nostra struttura di offerta come base.',
      },
      {
        title: 'Kickoff e sprint di 14 giorni',
        description:
          'Il cliente consegna gli accessi, noi lavoriamo con un team intero in parallelo. Ti aggiorniamo a ogni passaggio del calendario, tu aggiorni il cliente come preferisci.',
      },
      {
        title: 'Go-live tra il giorno 15 e il 30',
        description:
          'La data la sceglie il cliente con te. Cambio DNS, redirect attivi, presidio di 48 ore, store che non si ferma un secondo.',
      },
      {
        title: '90 giorni di supporto, poi il cliente resta tuo',
        description:
          'Supporto, monitoraggio e report del giorno 90 con il tuo marchio. Dopo, il cliente lo segui tu: advertising, email, CRO, restyling.',
      },
    ],
    earnTitle: 'Quanto guadagni',
    earnIntro:
      'Il tuo margine minimo è uguale alla commissione ambassador, e puoi alzarlo quanto vuoi: decidi tu il prezzo al cliente, purché non sia sotto il prezzo pubblico dello Sprint.',
    publicLabel: 'Prezzo pubblico minimo',
    partnerLabel: 'Paghi a noi',
    marginLabel: 'Il tuo margine minimo',
    tiers: [
      { label: 'Fatturato del cliente sotto €2M', publicPrice: itEur(TIER1.price), partnerPrice: itEur(WL1), under: `4 rate da ${itEur(whiteLabelInstallment(TIER1.price))}, IVA esclusa`, margin: `${itEur(COMMISSION)}+` },
      { label: 'Fatturato tra €2M e €20M', publicPrice: itEur(TIER2.price), partnerPrice: itEur(WL2), under: `4 rate da ${itEur(whiteLabelInstallment(TIER2.price))}, IVA esclusa`, margin: `${itEur(C2)}+` },
      { label: 'Fatturato oltre €20M', publicPrice: itEur(TIER3.price), partnerPrice: itEur(WL3), under: `4 rate da ${itEur(whiteLabelInstallment(TIER3.price))}, IVA esclusa`, margin: `${itEur(C3)}+` },
    ],
    earnPoints: [
      'Paghi a noi in 4 rate, con lo stesso calendario dello Sprint: la prima al kickoff, la seconda al go-live, la terza e la quarta nei mesi di supporto.',
      `Esempio: vendi lo scaglione base a ${itEur(EXAMPLE_RESALE)}. Paghi a noi ${itEur(WL1)}, a te restano ${itEur(EXAMPLE_RESALE - WL1)}.`,
      'Gli add-on a prezzo fisso (prodotti, lingue o gestionale oltre i limiti dello scaglione) li ricevi per iscritto prima della tua offerta, così li inserisci nel tuo prezzo.',
      'Piano Shopify e app li paga il cliente direttamente a Shopify, come nello Sprint.',
      'Il consiglio delle agenzie che lo fanno bene: proponi insieme alla migrazione il tuo servizio continuativo per dopo i 90 giorni (advertising, email, CRO). Il cliente arriva su uno store nuovo con dati puliti, ed è il momento migliore per farlo crescere con te.',
    ],
    splitTitle: 'Chi fa cosa',
    ourSideTitle: 'Noi',
    ourSide: [
      'Realizziamo lo Sprint completo: dati, store, redirect, tracking, checkout',
      'Gestiamo go-live e 90 giorni di supporto',
      'Prepariamo documenti, Loom e report con il tuo marchio',
      'Rispondiamo a te del risultato, con le 4 garanzie scritte nel nostro contratto',
      `Non contattiamo il tuo cliente e non gli vendiamo nulla, durante il progetto e per ${NS} mesi dopo`,
    ],
    yourSideTitle: 'Tu',
    yourSide: [
      'Vendi, firmi il contratto con il cliente e lo fatturi',
      'Tieni la relazione e le comunicazioni con il cliente',
      'Raccogli accessi e approvazioni del cliente (circa 8 ore del suo tempo in tutto)',
      'Decidi il prezzo, purché non sotto il prezzo pubblico dello scaglione',
      'Aggiungi i tuoi servizi prima, durante e dopo, come preferisci',
    ],
    brandTitle: 'Il tuo marchio, la tua relazione',
    brand: [
      'Il nostro marchio non compare: né nei documenti, né nello store, né nelle comunicazioni al cliente.',
      'Riservatezza reciproca: il prezzo partner e il tuo margine restano tra noi.',
      'Se preferisci, puoi anche presentarci come partner tecnico: decidi tu, progetto per progetto.',
    ],
    guaranteesTitle: 'Le 4 garanzie scritte, nel contratto con la tua agenzia',
    guarantees:
      'Store pronto al giorno 14 o ti rimborsiamo la prima rata. Traffico organico sotto la baseline a 90 giorni dal go-live? Lavoriamo gratis finché non torna. Store offline al lancio per colpa nostra? Una rata la paghiamo noi. Il checkout converte meno di prima a 90 giorni? Lo ottimizziamo gratis finché non supera.',
    faqTitle: 'Le domande delle agenzie',
    faq: [
      {
        question: 'Il mio cliente saprà che ci siete voi?',
        answer:
          'No, se non vuoi. Lavoriamo con il marchio della tua agenzia e tutte le comunicazioni passano da te. Se preferisci presentarci come partner tecnico, si può fare.',
      },
      {
        question: 'Posso decidere io il prezzo?',
        answer:
          'Sì. L’unico vincolo è non scendere sotto il prezzo pubblico dello scaglione del cliente. Sopra, il ricarico è tutto tuo.',
      },
      {
        question: 'Chi risponde se qualcosa va storto?',
        answer:
          'Noi, verso di te. Le 4 garanzie dello Sprint sono scritte nel contratto tra noi e la tua agenzia.',
      },
      {
        question: 'Devo essere Shopify Partner?',
        answer:
          'No, ma conviene. Se lo store nasce dal tuo account Shopify Partner e poi lo trasferiamo al cliente, i compensi che Shopify riconosce ai partner per i negozi che portano restano alla tua agenzia, secondo le regole del programma. Lo store è sempre di proprietà del cliente.',
      },
      {
        question: 'Posso vendere anche altri servizi allo stesso cliente?',
        answer:
          'Certo: advertising, email, SEO, restyling. La migrazione è un progetto con un inizio e una fine, il cliente resta tuo.',
      },
      {
        question: 'Il cliente è già su Shopify: vale?',
        answer:
          'Per ora il programma copre le migrazioni da altre piattaforme. Se hai un progetto diverso, parliamone comunque.',
      },
      {
        question: 'Quanti progetti posso portare?',
        answer:
          'Nessun limite di progetti: l’unico limite sono gli slot, perché seguiamo pochi progetti alla volta per farli bene. Prima di firmare con il cliente ti confermo la data di kickoff.',
      },
      {
        question: 'Posso fare sia Ambassador sia White Label?',
        answer:
          'Sì, cliente per cliente. Se vuoi solo segnalare, è Ambassador. Se vuoi vendere con il tuo marchio, è White Label.',
      },
    ],
    ctaTitle: 'Vuoi offrire la migrazione Shopify con il tuo marchio?',
    cta:
      'Scrivimi due righe sulla tua agenzia e sui clienti che segui. Ti rispondo io, Antonio, e fissiamo una videochiamata per l’accordo.',
    ctaSubject: 'White Label: nome della tua agenzia',
    ctaEmailLabel: 'Scrivimi per email',
    ctaWhatsappLabel: 'Scrivimi su WhatsApp',
  },
  summary: {
    label: 'ambassador',
    heading: 'Come funziona l’Ambassador, ',
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
        title: `Incassi da ${itEur(COMMISSION)}`,
        description: `Una commissione fissa per ogni migrazione, in base allo scaglione del cliente: ${itEur(COMMISSION)}, ${itEur(C2)} o ${itEur(C3)}.`,
      },
    ],
  },
  commission: {
    label: 'commissioni',
    heading: 'Quanto guadagni ',
    headingEm: 'e quando.',
    rateLabel: itEur(COMMISSION),
    rateNote: `di commissione fissa su ogni migrazione chiusa sullo scaglione base, ${itEur(C2)} e ${itEur(C3)} sugli altri due.`,
    formula: {
      before: 'Esempio: il prezzo minimo dell’',
      linkLabel: 'offerta',
      after: ` parte da ${itEur(MIN)} (aziende sotto €2M di fatturato, 4 rate da ${itEur(TIER1.installment)}). Per ogni chiusura, ${itEur(COMMISSION)} in fattura per te.`,
    },
    simulationTitle: 'Simulazione sullo scaglione base',
    simulationNote: 'Commissioni una tantum, una per ogni migrazione chiusa.',
    simulation: [
      { count: 1, label: '1 migrazione' },
      { count: 3, label: '3 migrazioni' },
      { count: 5, label: '5 migrazioni' },
      { count: 10, label: '10 migrazioni' },
    ],
    tierNote: `Sugli scaglioni più alti la commissione sale: ${itEur(C2)} per un’azienda tra €2M e €20M di fatturato (Sprint da ${itEur(TIER2.price)}), ${itEur(C3)} sopra i €20M (Sprint da ${itEur(TIER3.price)}). Importi fissi e chiari, decisi prima: li conosci già quando presenti il cliente.`,
    rules: [
      {
        title: 'Quando è confermata',
        description:
          'Nel momento in cui il cliente paga la prima rata. Prima di allora la segnalazione è registrata, ma la commissione non è ancora maturata.',
      },
      {
        title: 'Rimborsi e garanzie non ti toccano',
        description:
          'Se dopo la prima rata scatta una delle 4 garanzie dello Sprint (rimborso della prima rata, lavoro gratis, una rata a carico nostro) o il cliente interrompe il progetto, la tua commissione non cambia. Dal momento in cui il cliente è acquisito, portare avanti il progetto è una mia responsabilità.',
      },
      {
        title: 'Quando la ricevi',
        description: `In un’unica soluzione, entro ${T.payoutDays} giorni dall’incasso della prima rata.`,
      },
      {
        title: 'Quanto vale, esattamente',
        description:
          `È un importo fisso per scaglione, IVA esclusa: ${itEur(COMMISSION)}, ${itEur(C2)} o ${itEur(C3)}. Add-on, piano Shopify e app non cambiano la tua commissione.`,
      },
      {
        title: `Prezzo pubblico, da ${itEur(MIN)}`,
        description: `Il prezzo dello Sprint è pubblico e dipende dal fatturato dell’azienda: ${itEur(TIER1.price)}, ${itEur(TIER2.price)} o ${itEur(TIER3.price)}, IVA esclusa, in 4 rate. Nessuno sconto, nessun preventivo: non si tratta né al ribasso né al rialzo.`,
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
    headingEm: 'lo Shopify Launch Sprint.',
    intro:
      'Entrambi i programmi coprono un solo servizio: lo Shopify Launch Sprint, la migrazione di un eCommerce esistente su Shopify in 14 giorni. Non è “rifacciamo il sito”: è lo stesso store, replicato 1:1 su Shopify senza perdere vendite, clienti e posizionamento, più veloce e con un checkout costruito per vendere di più. Un team intero su ogni area nello stesso momento (sviluppo, SEO, tracciamento, checkout), un solo interlocutore per il cliente, poi 90 giorni di supporto dopo il go-live.',
    includedTitle: 'Cosa è incluso',
    included: [
      'Data Migration Report: prodotti, varianti, clienti e storico ordini riconciliati al 100%',
      'Store Shopify pronto a pubblicare: replica 1:1 con il Custom AI System, sviluppato su misura, bug corretti, flusso d’acquisto ottimizzato',
      'Redirect Map 1:1: ogni URL vecchio mappato al nuovo e testato in automatico',
      'Tracking Spec e setup server-side: GA4, Meta CAPI, email, consent mode',
      'Go-live Checklist con la data scelta dal cliente (giorni 15-30), zero downtime',
      'Configurazione di pagamenti, spedizioni, email e delle piattaforme già in uso',
      'Dashboard delle metriche chiave dal giorno 1',
      '90 giorni di supporto, monitoraggio e miglioramento dopo il go-live',
      'Un solo referente per tutto lo sprint',
      '4 garanzie scritte nel contratto',
    ],
    phasesTitle: 'Le 3 fasi: sprint, go-live, supporto',
    phases: [
      {
        name: 'Sprint',
        duration: 'giorni 1-14',
        description:
          'Il giorno 1 il cliente consegna gli accessi, il giorno 14 ha lo store su Shopify pronto a pubblicare: dati, template, redirect, tracking e checkout, con un team intero in parallelo. Al cliente servono circa 8 ore in tutto.',
      },
      {
        name: 'Go-live',
        duration: 'giorni 15-30',
        description:
          'La data la sceglie il cliente. Cambio DNS, redirect attivi, sitemap e Search Console, presidio di 48 ore. Lo store non si ferma un secondo.',
      },
      {
        name: 'Supporto',
        duration: '90 giorni dal go-live',
        description:
          'Bug fix, modifiche, monitoraggio di SEO e tracking e nuove ottimizzazioni ogni settimana, con un Loom settimanale e il report al giorno 90. Qui si misurano le garanzie.',
      },
    ],
    landingLabel: 'Apri la landing dello Shopify Launch Sprint',
    landingNote: 'Tienila sempre a portata di mano: è la pagina da girare al cliente.',
    platformsTitle: 'Da quali piattaforme',
    platforms:
      'WooCommerce, PrestaShop, Magento, piattaforme custom, CRM, ERP e gestionali con eCommerce integrato. In generale, qualsiasi piattaforma diversa da Shopify.',
    whyTitle: 'Perché bastano 14 giorni',
    why:
      'Perché non lavora una persona sola: uno specialista per ogni area, tutti nello stesso momento, con l’AI su dati, test e contenuti. Il calendario è fisso e pubblico, giorno per giorno, e il kickoff parte solo quando ci sono tutti gli accessi. Le 4 rate si pagano al kickoff, al go-live e nei mesi di supporto.',
  },
  pricing: {
    label: 'prezzo e costi',
    heading: 'Quanto costa ',
    headingEm: 'al cliente.',
    tiersTitle: 'Prezzo pubblico, in base al fatturato dell’azienda',
    tiers: [
      { label: 'Fatturato aziendale sotto €2M', price: itEur(TIER1.price), under: `4 rate da ${itEur(TIER1.installment)}, IVA esclusa`, commission: `La tua commissione: ${itEur(COMMISSION)}` },
      { label: 'Fatturato tra €2M e €20M', price: itEur(TIER2.price), under: `4 rate da ${itEur(TIER2.installment)}, IVA esclusa`, commission: `La tua commissione: ${itEur(C2)}` },
      { label: 'Fatturato oltre €20M', price: itEur(TIER3.price), under: `4 rate da ${itEur(TIER3.installment)}, IVA esclusa`, commission: `La tua commissione: ${itEur(C3)}` },
    ],
    points: [
      'Quattro rate: la prima al kickoff, la seconda al go-live, la terza e la quarta nei mesi di supporto. Nessun esborso unico in anticipo.',
      '4 garanzie scritte nel contratto. Store pronto al giorno 14 o ti rimborsiamo la prima rata. Traffico organico sotto la baseline a 90 giorni dal go-live? Lavoriamo gratis finché non torna. Store offline al lancio per colpa nostra? Una rata la paghiamo noi. Il checkout converte meno di prima a 90 giorni? Lo ottimizziamo gratis finché non supera.',
      'Nessuno sconto, nessun preventivo: il cliente vede il suo scaglione in pagina, prima di parlarci.',
      'Sopra i limiti dello scaglione (prodotti, lingue, gestionale) ci sono add-on a prezzo fisso, comunicati per iscritto prima della firma. Mai un preventivo libero.',
    ],
    externalTitle: 'Costi esterni',
    external:
      'Gli unici costi esterni sono il piano Shopify e le app, che il cliente paga direttamente a Shopify. Il piano dipende dalle dimensioni dello store e lo scegliamo insieme al cliente al kickoff. Nient’altro: niente costi nascosti, niente extra a consuntivo.',
    externalLinkLabel: 'Prezzi aggiornati dei piani Shopify',
    argumentTitle: 'Un argomento di vendita in più',
    argument:
      'Prezzo fisso e pubblico, garanzie scritte, calendario di 14 giorni: il cliente sa prima di parlarci quanto spende, quando ha lo store e cosa succede se qualcosa non va. È il contrario del preventivo da aspettare.',
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
      `Che può sostenere lo Sprint del suo scaglione (da ${itEur(MIN)} in 4 rate) senza che diventi una scommessa`,
    ],
    noTitle: 'Non in target',
    no: [
      'Startup ed eCommerce appena aperti o ancora da lanciare',
      'Progetti senza vendite regolari o ancora in fase di test del prodotto',
      'Store già su Shopify che vogliono solo un restyling (per ora fuori dal programma)',
      'Chi cerca il prezzo più basso o vuole un redesign completo (lo Sprint replica lo store 1:1, il restyling arriva dopo con un partner)',
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
        fix: `Prezzo pubblico da ${itEur(MIN)}, in 4 rate: la prima al kickoff, la seconda al go-live. Con 4 garanzie scritte nel contratto.`,
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
      { value: 'Team', label: 'di specialisti in Shopify, marketing, advertising e SEO' },
      { value: '7+ anni', label: 'di progetti eCommerce' },
      { value: 'Decine', label: 'di progetti eCommerce seguiti' },
      { value: '10', label: 'recensioni a 5 stelle su Trustpilot' },
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
      title: 'Un team di specialisti in Shopify, marketing, advertising e SEO',
      description:
        'Dietro Antonio c’è un team completo che copre ogni area della migrazione. Quando serve qualcosa, non si cerca il freelance giusto: c’è già qualcuno nel team che lo fa. E chi sviluppa SaaS e applicazioni proprie ha competenze tecniche che vanno ben oltre il classico sito costruito su un template.',
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
    pitch: `“Conosco un team di specialisti in Shopify, marketing, advertising e SEO, Shopify Partner, che porta un eCommerce su Shopify in 14 giorni senza fermare le vendite e senza perdere posizionamento su Google. Hai un solo referente, Antonio, e dietro un team che segue tutto in parallelo: SEO, tracciamento, checkout e sviluppo. Il prezzo è pubblico, da ${itEur(MIN)} in 4 rate, con 4 garanzie scritte nel contratto e 90 giorni di supporto dopo il go-live. Vuoi che ti metta in contatto con Antonio?”`,
    messagesTitle: 'I 6 messaggi chiave',
    messages: [
      'Shopify Partner, con un team di specialisti in Shopify, marketing, advertising e SEO: tracciamento, UX, sviluppo.',
      'Nessuna vendita persa: il sito attuale resta online fino al go-live.',
      'Nessuna perdita SEO: redirect 1:1 e monitoraggio dopo il lancio.',
      'Un solo referente, con un team completo dietro.',
      'Prezzo pubblico in 4 rate: la prima al kickoff, la seconda al go-live.',
      '4 garanzie scritte nel contratto: store pronto al giorno 14, SEO, go-live, checkout.',
    ],
    proofTitle: 'Le prove da citare: Nazzi e Cumini',
    proof:
      'Da oltre 4 anni seguiamo Cumini, boutique di moda luxury multibrand: dopo la migrazione su Shopify ha venduto online il 67,7% in più nei 12 mesi successivi. E Integratori DTC Nazzi, passata da WooCommerce a Shopify: +105% di vendite online nei primi 85 giorni. Sono i due nomi da citare, con i case study pubblici sul sito.',
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
        question: '“Davvero in 14 giorni?”',
        answer:
          'Sì, perché lavora un team intero in parallelo, con un calendario fisso giorno per giorno. Il kickoff parte solo quando ci sono tutti gli accessi, così lo sprint finisce sempre in 14 giorni. Il go-live lo sceglie il cliente tra il giorno 15 e il 30, poi restiamo 90 giorni.',
      },
      {
        question: '“Costa troppo.”',
        answer: `Da ${itEur(MIN)} in 4 rate, con 4 garanzie scritte e 90 giorni di supporto inclusi. Da confrontare con quanto costa oggi mantenere la piattaforma attuale e con le vendite perse da un sito lento.`,
      },
      {
        question: '“E se non mi trovo bene?”',
        answer: 'Quattro garanzie scritte nel contratto. Store pronto al giorno 14 o ti rimborsiamo la prima rata. Traffico organico sotto la baseline a 90 giorni dal go-live? Lavoriamo gratis finché non torna. Store offline al lancio per colpa nostra? Una rata la paghiamo noi. Il checkout converte meno di prima a 90 giorni? Lo ottimizziamo gratis finché non supera.',
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
        question: '“E dopo i 90 giorni?”',
        answer:
          'Lo store è del cliente, solido, con dati puliti. Può continuare da solo, con un pacchetto ore o con il team per advertising, email e CRO. Nessun vincolo.',
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
        question: `Un investimento da ${itEur(MIN)} in 4 rate (in base al fatturato) è sostenibile?`,
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
          'Il cliente conferma: gli invio proposta e contratto al prezzo pubblico del suo scaglione',
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
          'No. Il prezzo dello Sprint è pubblico e fisso per scaglione: niente sconti, niente rialzi, niente preventivi.',
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
        label: 'Landing Shopify Launch Sprint (IT)',
        description: 'Tutto lo sprint: calendario, prezzo, garanzie e FAQ.',
        href: '/it/sprint-migrazione-shopify',
      },
      {
        label: 'Shopify Launch Sprint landing (EN)',
        description: 'La stessa pagina in inglese, per clienti esteri.',
        href: '/shopify-migration-sprint',
      },
      {
        label: 'Caso studio Integratori DTC Nazzi',
        description: 'Da WooCommerce a Shopify: +105% di vendite online nei primi 85 giorni.',
        href: '/it/casi-studio/integratori-nazzi-dtc-shopify',
      },
      {
        label: 'Caso studio Cumini',
        description: 'La migrazione con il gestionale collegato: +67,7% di vendite online in 12 mesi.',
        href: '/it/casi-studio/cumini-luxury-fashion-ecommerce',
      },
      {
        label: 'Recensioni Trustpilot',
        description: 'Cosa dicono i clienti che hanno lavorato con noi.',
        href: 'https://www.trustpilot.com/review/noprob.agency',
      },
    ],
    closing: 'Hai una domanda che non trovi qui? Scrivimi: la aggiungo a questo documento.',
    signature: 'Antonio Manitta, Founder di noprob agency',
    updated: 'Ultimo aggiornamento: novembre 2026',
    terms:
      'Le condizioni possono essere aggiornate. Per ogni segnalazione valgono quelle in vigore nel giorno in cui la ricevo.',
  },
}

const en: AmbassadorCopy = {
  metaTitle: 'Ambassador and White Label: Shopify Launch Sprint',
  metaDescription:
    'Refer a Shopify migration or resell it under your own brand: the Shopify Launch Sprint, the target, the pitch and from €1,000 per migration for you.',
  hero: {
    label: 'ambassador and white label',
    badge: 'For consultants, partners and agencies',
    titlePart1: 'Refer or resell a Shopify migration. ',
    titleEm: `Earn from ${enEur(COMMISSION)}.`,
    lead:
      'This is the complete playbook for working with me in two ways. Ambassador: you refer an eCommerce to me and earn a fixed commission. White Label: your agency sells the migration under its own brand and we deliver it behind the scenes. What we sell, to whom, what it costs, how to pitch it and how much you earn. All in writing, no surprises.',
    stats: [
      { value: enEur(COMMISSION), label: `ambassador commission on the base tier, up to ${enEur(C3)} on the higher tiers` },
      { value: `${enEur(COMMISSION)}+`, label: 'minimum agency margin in white label, plus all the markup you decide' },
      { value: '14 days', label: 'from kickoff to a store ready to publish, under your brand or ours' },
    ],
    tocLabel: 'In this document',
    toc: [
      { id: 'programmi', label: 'Ambassador or White Label' },
      { id: 'come-funziona', label: 'How Ambassador works' },
      { id: 'commissioni', label: 'Commission' },
      { id: 'white-label', label: 'White Label for agencies' },
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
  programs: {
    label: 'two programs',
    heading: 'Refer or resell: ',
    headingEm: 'your call.',
    intro:
      'Same service, same quality, same 14-day calendar. What changes is who talks to the client and how much you earn.',
    items: [
      {
        tag: 'Ambassador',
        title: 'You refer, we handle the rest',
        forWho: 'For consultants, freelancers, suppliers and business owners who know eCommerce stores ready to move to Shopify.',
        points: [
          'You introduce the client to me or close the sale yourself',
          'The client signs with us, at the public Sprint price',
          'They talk to us and see our brand',
          'No commitment after the referral',
        ],
        earn: `Fixed commission: ${enEur(COMMISSION)}, ${enEur(C2)} or ${enEur(C3)} per migration`,
        href: '#come-funziona',
        linkLabel: 'How Ambassador works',
      },
      {
        tag: 'White Label',
        title: 'Resell under your own brand',
        forWho: 'For agencies that work with eCommerce clients and want to offer the move to Shopify without a dedicated team.',
        points: [
          'You sell the migration as your agency’s service',
          'The client signs with and pays you, at the price you set',
          'The client talks to you: we work behind the scenes',
          'The client stays yours, before, during and after',
        ],
        earn: `Margin from ${enEur(COMMISSION)} to ${enEur(C3)} per migration, plus your markup`,
        href: '#white-label',
        linkLabel: 'How White Label works',
      },
    ],
  },
  whiteLabel: {
    label: 'white label for agencies',
    heading: 'The Shopify migration, ',
    headingEm: 'under your agency’s brand.',
    intro:
      'Your eCommerce clients ask you to move them to Shopify. With White Label the migration becomes a service of your agency: you sell, own the relationship and set the price, we deliver the full Shopify Launch Sprint under your name. Same 14-day calendar, same 4 written guarantees, no team to hire.',
    forWhoTitle: 'Who it’s for',
    forWho: [
      'Advertising, SEO, email marketing and social agencies with eCommerce clients',
      'Web agencies working on WooCommerce, PrestaShop or Magento that get Shopify requests',
      'Shopify agencies that want more capacity on migrations without hiring',
      'eCommerce consultants who follow clients over time and want to offer the move to Shopify too',
    ],
    receiveTitle: 'What you get',
    receive: [
      'The full Shopify Launch Sprint: data, store, redirects, tracking, checkout, go-live and 90 days of support',
      'Every document under your agency’s brand: Data Migration Report, Redirect Map, Tracking Spec, Go-live Checklist, day-90 report',
      'Weekly Looms and updates made to be forwarded to your client as they are',
      'When needed, the team joins video calls as your agency’s technical team',
      'If you have a Shopify Partner account, we work as collaborators from your account',
      'A direct line to Antonio on every project, for you and your account manager',
      'A confidentiality agreement signed before the first project',
    ],
    stepsTitle: 'How it works, step by step',
    steps: [
      {
        title: 'We sign the white label agreement',
        description:
          'A video call to get to know each other, then a simple agreement with partner prices, confidentiality and client rules. Once, valid for every project.',
      },
      {
        title: 'You send me the client’s site',
        description:
          'Before you make your offer I confirm the tier, any add-ons and feasibility. So you sell a safe price, with no surprises.',
      },
      {
        title: 'You sell under your brand',
        description:
          'Proposal, contract and invoice to the client are yours, at the price you set. You can use this playbook and our offer structure as a base.',
      },
      {
        title: 'Kickoff and 14-day sprint',
        description:
          'The client hands over the accesses, we work with a whole team in parallel. We update you at every step of the calendar, you update the client however you like.',
      },
      {
        title: 'Go-live between day 15 and 30',
        description:
          'The client picks the date with you. DNS switch, redirects live, 48 hours of monitoring, a store that doesn’t stop for a second.',
      },
      {
        title: '90 days of support, then the client stays yours',
        description:
          'Support, monitoring and the day-90 report under your brand. After that you follow the client: advertising, email, CRO, redesign.',
      },
    ],
    earnTitle: 'How much you earn',
    earnIntro:
      'Your minimum margin equals the ambassador commission, and you can raise it as much as you like: you set the price to the client, as long as it isn’t below the public Sprint price.',
    publicLabel: 'Minimum public price',
    partnerLabel: 'You pay us',
    marginLabel: 'Your minimum margin',
    tiers: [
      { label: 'Client revenue under €2M', publicPrice: enEur(TIER1.price), partnerPrice: enEur(WL1), under: `4 installments of ${enEur(whiteLabelInstallment(TIER1.price))}, VAT excluded`, margin: `${enEur(COMMISSION)}+` },
      { label: 'Revenue between €2M and €20M', publicPrice: enEur(TIER2.price), partnerPrice: enEur(WL2), under: `4 installments of ${enEur(whiteLabelInstallment(TIER2.price))}, VAT excluded`, margin: `${enEur(C2)}+` },
      { label: 'Revenue above €20M', publicPrice: enEur(TIER3.price), partnerPrice: enEur(WL3), under: `4 installments of ${enEur(whiteLabelInstallment(TIER3.price))}, VAT excluded`, margin: `${enEur(C3)}+` },
    ],
    earnPoints: [
      'You pay us in 4 installments, on the same calendar as the Sprint: the first at kickoff, the second at go-live, the third and fourth during the support months.',
      `Example: you sell the base tier at ${enEur(EXAMPLE_RESALE)}. You pay us ${enEur(WL1)}, you keep ${enEur(EXAMPLE_RESALE - WL1)}.`,
      'Fixed-price add-ons (products, languages or ERP beyond the tier caps) come to you in writing before your offer, so you include them in your price.',
      'The client pays the Shopify plan and apps directly to Shopify, as in the Sprint.',
      'The tip from agencies that do it well: sell your ongoing service for after the 90 days (advertising, email, CRO) together with the migration. The client lands on a new store with clean data, the best moment to grow it with you.',
    ],
    splitTitle: 'Who does what',
    ourSideTitle: 'Us',
    ourSide: [
      'We deliver the full Sprint: data, store, redirects, tracking, checkout',
      'We run go-live and 90 days of support',
      'We prepare documents, Looms and reports under your brand',
      'We answer to you for the result, with the 4 guarantees written in our contract',
      `We don’t contact your client or sell them anything, during the project and for ${NS} months after`,
    ],
    yourSideTitle: 'You',
    yourSide: [
      'You sell, sign the contract with the client and invoice them',
      'You own the relationship and the communication with the client',
      'You collect the client’s accesses and approvals (about 8 hours of their time in total)',
      'You set the price, as long as it isn’t below the public price of the tier',
      'You add your own services before, during and after, as you prefer',
    ],
    brandTitle: 'Your brand, your relationship',
    brand: [
      'Our brand doesn’t appear: not in the documents, not in the store, not in the client communication.',
      'Mutual confidentiality: the partner price and your margin stay between us.',
      'If you prefer, you can also present us as your technical partner: your call, project by project.',
    ],
    guaranteesTitle: 'The 4 written guarantees, in the contract with your agency',
    guarantees:
      'Store ready on day 14 or we refund the first installment. Organic traffic below the baseline 90 days after go-live? We work for free until it comes back. Store offline at launch because of us? We pay one installment. Checkout converting less than before at 90 days? We optimize it for free until it beats it.',
    faqTitle: 'Questions from agencies',
    faq: [
      {
        question: 'Will my client know you’re behind it?',
        answer:
          'Not unless you want them to. We work under your agency’s brand and all communication goes through you. If you prefer to present us as your technical partner, that works too.',
      },
      {
        question: 'Can I set the price myself?',
        answer:
          'Yes. The only rule is not going below the public price of the client’s tier. Above it, the markup is all yours.',
      },
      {
        question: 'Who answers if something goes wrong?',
        answer:
          'We do, to you. The 4 Sprint guarantees are written in the contract between us and your agency.',
      },
      {
        question: 'Do I need to be a Shopify Partner?',
        answer:
          'No, but it pays. If the store is created from your Shopify Partner account and then transferred to the client, the earnings Shopify grants partners for the stores they bring stay with your agency, under the program rules. The store is always owned by the client.',
      },
      {
        question: 'Can I sell other services to the same client?',
        answer:
          'Of course: advertising, email, SEO, redesign. The migration is a project with a start and an end, the client stays yours.',
      },
      {
        question: 'The client is already on Shopify: does it count?',
        answer:
          'For now the program covers migrations from other platforms. If you have a different project, let’s talk about it anyway.',
      },
      {
        question: 'How many projects can I bring?',
        answer:
          'No limit on projects: the only limit is capacity, because we take on a few projects at a time to do them well. Before you sign with the client I confirm the kickoff date.',
      },
      {
        question: 'Can I do both Ambassador and White Label?',
        answer:
          'Yes, client by client. If you only want to refer, it’s Ambassador. If you want to sell under your brand, it’s White Label.',
      },
    ],
    ctaTitle: 'Want to offer the Shopify migration under your brand?',
    cta:
      'Write me a couple of lines about your agency and the clients you work with. I, Antonio, will reply and we’ll set up a video call for the agreement.',
    ctaSubject: 'White Label: your agency name',
    ctaEmailLabel: 'Email me',
    ctaWhatsappLabel: 'Message me on WhatsApp',
  },
  summary: {
    label: 'ambassador',
    heading: 'How Ambassador works, ',
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
        title: `You earn from ${enEur(COMMISSION)}`,
        description: `A fixed commission for every migration, based on the client’s tier: ${enEur(COMMISSION)}, ${enEur(C2)} or ${enEur(C3)}.`,
      },
    ],
  },
  commission: {
    label: 'commission',
    heading: 'How much you earn ',
    headingEm: 'and when.',
    rateLabel: enEur(COMMISSION),
    rateNote: `fixed commission on every closed migration on the base tier, ${enEur(C2)} and ${enEur(C3)} on the other two.`,
    formula: {
      before: 'Example: the minimum price of the ',
      linkLabel: 'offer',
      after: ` starts at ${enEur(MIN)} (companies under €2M in revenue, 4 installments of ${enEur(TIER1.installment)}). For every close, ${enEur(COMMISSION)} on your invoice.`,
    },
    simulationTitle: 'Simulation on the base tier',
    simulationNote: 'One-off commissions, one for each closed migration.',
    simulation: [
      { count: 1, label: '1 migration' },
      { count: 3, label: '3 migrations' },
      { count: 5, label: '5 migrations' },
      { count: 10, label: '10 migrations' },
    ],
    tierNote: `On the higher tiers the commission goes up: ${enEur(C2)} for a company between €2M and €20M in revenue (Sprint from ${enEur(TIER2.price)}), ${enEur(C3)} above €20M (Sprint from ${enEur(TIER3.price)}). Fixed, clear amounts, set in advance: you know them before you introduce the client.`,
    rules: [
      {
        title: 'When it’s confirmed',
        description:
          'The moment the client pays the first installment. Before that, the referral is registered but the commission hasn’t been earned yet.',
      },
      {
        title: 'Refunds and guarantees don’t affect you',
        description:
          'If after the first installment one of the 4 Sprint guarantees kicks in (first installment refunded, free work, an installment on us) or the client stops the project, your commission doesn’t change. Once the client is acquired, delivering the project is my responsibility.',
      },
      {
        title: 'When you get paid',
        description: `In a single payment, within ${T.payoutDays} days of receiving the first installment.`,
      },
      {
        title: 'What it’s worth, exactly',
        description:
          `A fixed amount per tier, VAT excluded: ${enEur(COMMISSION)}, ${enEur(C2)} or ${enEur(C3)}. Add-ons, Shopify plan and apps don’t change your commission.`,
      },
      {
        title: `Public price, from ${enEur(MIN)}`,
        description: `The Sprint price is public and depends on the company’s revenue: ${enEur(TIER1.price)}, ${enEur(TIER2.price)} or ${enEur(TIER3.price)}, VAT excluded, in 4 installments. No discounts, no quotes: it isn’t negotiated down or up.`,
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
    headingEm: 'the Shopify Launch Sprint.',
    intro:
      'Both programs cover one service only: the Shopify Launch Sprint, moving an existing eCommerce to Shopify in 14 days. It’s not “we’ll rebuild your site”: it’s the same store, replicated 1:1 on Shopify without losing sales, customers or rankings, faster and with a checkout built to sell more. A whole team on every area at the same time (development, SEO, tracking, checkout), one point of contact for the client, then 90 days of support after go-live.',
    includedTitle: 'What’s included',
    included: [
      'Data Migration Report: products, variants, customers and order history reconciled 100%',
      'Shopify store ready to publish: 1:1 replica with the Custom AI System, built from scratch, bugs fixed, purchase flow optimized',
      '1:1 Redirect Map: every old URL mapped to the new one and tested automatically',
      'Tracking Spec and server-side setup: GA4, Meta CAPI, email, consent mode',
      'Go-live Checklist with the date the client picks (days 15-30), zero downtime',
      'Setup of payments, shipping, email and the platforms already in use',
      'Key-metrics dashboard from day 1',
      '90 days of support, monitoring and improvement after go-live',
      'One point of contact for the whole sprint',
      '4 guarantees written in the contract',
    ],
    phasesTitle: 'The 3 phases: sprint, go-live, support',
    phases: [
      {
        name: 'Sprint',
        duration: 'days 1-14',
        description:
          'On day 1 the client hands over the accesses, on day 14 they have the store on Shopify ready to publish: data, templates, redirects, tracking and checkout, with a whole team working in parallel. About 8 hours of the client’s time in total.',
      },
      {
        name: 'Go-live',
        duration: 'days 15-30',
        description:
          'The client picks the date. DNS switch, redirects live, sitemap and Search Console, 48 hours of monitoring. The store doesn’t stop for a second.',
      },
      {
        name: 'Support',
        duration: '90 days from go-live',
        description:
          'Bug fixes, changes, SEO and tracking monitoring and new optimizations every week, with a weekly Loom and the day-90 report. This is where the guarantees are measured.',
      },
    ],
    landingLabel: 'Open the Shopify Launch Sprint landing page',
    landingNote: 'Keep it at hand: it’s the page to send to the client.',
    platformsTitle: 'Which platforms',
    platforms:
      'WooCommerce, PrestaShop, Magento, custom platforms, CRM, ERP and management systems with a built-in eCommerce. In short, any platform other than Shopify.',
    whyTitle: 'Why 14 days are enough',
    why:
      'Because it isn’t one person doing it: one specialist per area, all at the same time, with AI on data, tests and content. The calendar is fixed and public, day by day, and the kickoff only starts once every access is in. The 4 installments are paid at kickoff, at go-live and during the support months.',
  },
  pricing: {
    label: 'price and costs',
    heading: 'What it costs ',
    headingEm: 'the client.',
    tiersTitle: 'Public price, based on the company’s revenue',
    tiers: [
      { label: 'Company revenue under €2M', price: enEur(TIER1.price), under: `4 installments of ${enEur(TIER1.installment)}, VAT excluded`, commission: `Your commission: ${enEur(COMMISSION)}` },
      { label: 'Revenue between €2M and €20M', price: enEur(TIER2.price), under: `4 installments of ${enEur(TIER2.installment)}, VAT excluded`, commission: `Your commission: ${enEur(C2)}` },
      { label: 'Revenue above €20M', price: enEur(TIER3.price), under: `4 installments of ${enEur(TIER3.installment)}, VAT excluded`, commission: `Your commission: ${enEur(C3)}` },
    ],
    points: [
      'Four installments: the first at kickoff, the second at go-live, the third and fourth during the support months. No single payment up front.',
      '4 guarantees written in the contract. Store ready on day 14 or we refund the first installment. Organic traffic below the baseline 90 days after go-live? We work for free until it comes back. Store offline at launch because of us? We pay one installment. Checkout converting less than before at 90 days? We optimize it for free until it beats it.',
      'No discounts, no quotes: the client sees their tier on the page, before talking to us.',
      'Beyond the tier caps (products, languages, ERP) there are fixed-price add-ons, confirmed in writing before signing. Never an open quote.',
    ],
    externalTitle: 'External costs',
    external:
      'The only external costs are the Shopify plan and the apps, which the client pays directly to Shopify. The plan depends on the size of the store and we choose it with the client at kickoff. Nothing else: no hidden costs, no surprise extras.',
    externalLinkLabel: 'Current Shopify plan prices',
    argumentTitle: 'One more selling point',
    argument:
      'Fixed public price, written guarantees, a 14-day calendar: the client knows before talking to us how much they spend, when they get the store and what happens if something goes wrong. It’s the opposite of waiting for a quote.',
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
      `Able to invest in the Sprint of their tier (from ${enEur(MIN)} in 4 installments) without it being a gamble`,
    ],
    noTitle: 'Not in target',
    no: [
      'Startups and eCommerce stores that just opened or haven’t launched yet',
      'Projects without regular sales or still testing the product',
      'Stores already on Shopify that only want a redesign (outside the program for now)',
      'People looking for the lowest price or wanting a full redesign (the Sprint replicates the store 1:1, the restyling comes later with a partner)',
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
        fix: `Public price from ${enEur(MIN)}, in 4 installments: the first at kickoff, the second at go-live. With 4 guarantees written in the contract.`,
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
      { value: 'Team', label: 'of Shopify, marketing, advertising and SEO specialists' },
      { value: '7+ years', label: 'of eCommerce projects' },
      { value: 'Dozens', label: 'of eCommerce projects delivered' },
      { value: '10', label: 'five-star reviews on Trustpilot' },
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
      title: 'A team of Shopify, marketing, advertising and SEO specialists',
      description:
        'Behind Antonio there’s a full team covering every area of the migration. When something’s needed, nobody goes looking for the right freelancer: someone on the team already does it. And a team that builds its own SaaS and apps has technical skills that go far beyond the typical template-based site.',
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
    pitch: `“I know a team of Shopify, marketing, advertising and SEO specialists, Shopify Partners, that moves an eCommerce to Shopify in 14 days without stopping sales and without losing Google rankings. You get one point of contact, Antonio, and behind him a team working on everything in parallel: SEO, tracking, checkout and development. The price is public, from ${enEur(MIN)} in 4 installments, with 4 guarantees written in the contract and 90 days of support after go-live. Want me to put you in touch with Antonio?”`,
    messagesTitle: 'The 6 key messages',
    messages: [
      'Shopify Partners, with a team of Shopify, marketing, advertising and SEO specialists: tracking, UX, development.',
      'No lost sales: the current site stays online until go-live.',
      'No SEO loss: 1:1 redirects and post-launch monitoring.',
      'One point of contact, with a full team behind it.',
      'Public price in 4 installments: the first at kickoff, the second at go-live.',
      '4 guarantees written in the contract: store ready on day 14, SEO, go-live, checkout.',
    ],
    proofTitle: 'The proof to quote: Nazzi and Cumini',
    proof:
      'For over 4 years we’ve worked with Cumini, a luxury multibrand fashion boutique: after the migration to Shopify it sold 67.7% more online in the following 12 months. And Supplement DTC Nazzi, moved from WooCommerce to Shopify: +105% online sales in the first 85 days. Those are the two names to quote, with public case studies on the site.',
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
        question: '“Really, in 14 days?”',
        answer:
          'Yes, because a whole team works in parallel, on a fixed day-by-day calendar. The kickoff only starts once every access is in, so the sprint always finishes in 14 days. The client picks the go-live date between day 15 and day 30, then we stay for 90 days.',
      },
      {
        question: '“It’s too expensive.”',
        answer: `From ${enEur(MIN)} in 4 installments, with 4 written guarantees and 90 days of support included. Compare it with what it costs today to maintain the current platform and with the sales lost to a slow site.`,
      },
      {
        question: '“What if I’m not happy?”',
        answer: 'Four guarantees written in the contract. Store ready on day 14 or we refund the first installment. Organic traffic below the baseline 90 days after go-live? We work for free until it comes back. Store offline at launch because of us? We pay one installment. Checkout converting less than before at 90 days? We optimize it for free until it beats it.',
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
        question: '“And after the 90 days?”',
        answer:
          'The store is the client’s, solid, with clean data. They can carry on alone, with a bundle of hours or with the team for advertising, email and CRO. No lock-in.',
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
        question: `Is an investment from ${enEur(MIN)} in 4 installments (based on revenue) sustainable?`,
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
          'The client confirms: I send the proposal and contract at the public price of their tier',
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
        answer: 'No. The Sprint price is public and fixed per tier: no discounts, no mark-ups, no quotes.',
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
        label: 'Shopify Launch Sprint landing (EN)',
        description: 'The whole sprint: calendar, price, guarantees and FAQ.',
        href: '/shopify-migration-sprint',
      },
      {
        label: 'Landing Shopify Launch Sprint (IT)',
        description: 'The same page in Italian, for Italian clients.',
        href: '/it/sprint-migrazione-shopify',
      },
      {
        label: 'Supplement DTC Nazzi case study',
        description: 'From WooCommerce to Shopify: +105% online sales in the first 85 days.',
        href: '/use-cases/integratori-nazzi-dtc-shopify',
      },
      {
        label: 'Cumini case study',
        description: 'The migration with a connected ERP: +67.7% online sales in 12 months.',
        href: '/use-cases/cumini-luxury-fashion-ecommerce',
      },
      {
        label: 'Trustpilot reviews',
        description: 'What clients who worked with us say.',
        href: 'https://www.trustpilot.com/review/noprob.agency',
      },
    ],
    closing: 'Got a question you can’t find here? Write to me: I’ll add it to this document.',
    signature: 'Antonio Manitta, Founder of noprob agency',
    updated: 'Last updated: November 2026',
    terms:
      'Terms may be updated. Each referral is governed by the terms in force on the day I receive it.',
  },
}

const dictionaries: Record<Locale, AmbassadorCopy> = { it, en }

export function getAmbassadorCopy(locale: Locale): AmbassadorCopy {
  return dictionaries[locale]
}
