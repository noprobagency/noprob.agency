import type { Locale } from '@/lib/i18n'

/**
 * Copy module for the "AI Accelerator" landing page (v4, compressed copy).
 * Routes: it -> /it/ai-accelerator, en -> /ai-accelerator.
 *
 * Follows the same convention as `lib/i18n/migrazione.ts`: a typed,
 * locale-keyed object consumed through a `get*` accessor, isolated from the
 * shared dictionary. Only `seo.aiAccelerator` lives in `lib/i18n/index.ts`.
 *
 * IT copy rules: no "business" (use azienda/attività/eCommerce),
 * "call" -> "videochiamate" (only exception: "pre-call"), "noi" voice
 * everywhere except "Chi ti segue" (third person). The qualification is
 * worded qualitatively ("già avviati, con fatturato consolidato"), never as
 * a raw revenue figure.
 */

/** TidyCal booking page embedded on the AI Accelerator thank-you page. */
export const AI_TIDYCAL_PATH = 'noprobagency/ai-call'

/** Feature flag: show the "NEW" badge next to the AI Accelerator nav item. */
export const AI_NAV_SHOW_NEW_BADGE = true

type QuestionCards = { label: string; options: string[] }

export type AiCopy = {
  /** Card under the pricing plans on the home pages: problem first, product second. */
  homeCard: { eyebrow: string; title: string; subtitle: string; cta: string }
  hero: {
    eyebrow: string
    titleLine1: string
    titleLine2Pre: string
    titleEm1: string
    titleMid: string
    titleEm2: string
    titleEnd: string
    leadLine: string
    benefits: string[]
    cta: string
    ctaNote: string
    trustRatingLabel: string
    trustLine: string
  }
  problem: {
    label: string
    headingPart1: string
    headingEm: string
    headingEnd: string
    intro: string
    items: { title: string; description: string }[]
  }
  audience: {
    label: string
    headingPart1: string
    headingEm: string
    headingEnd: string
    intro: string
    cards: { title: string; description: string }[]
    notForTitle: string
    notForItems: string[]
  }
  solution: {
    label: string
    headingPart1: string
    headingEm: string
    headingEnd: string
    intro: string
    items: { title: string; description: string }[]
  }
  start: {
    heading: string
    steps: { title: string; description: string }[]
  }
  timeline: {
    label: string
    headingPart1: string
    headingEm: string
    headingEnd: string
    intro: string
    goalBox: { title: string; text: string }
    phaseLabel: string
    phases: {
      number: string
      title: string
      week: string
      description: string
      outputLabel: string
      output: string
    }[]
    note: { title: string; text: string }
    tagline: string
  }
  deliverables: {
    label: string
    headingPart1: string
    headingEm: string
    headingEnd: string
    cards: { title: string; description: string }[]
    extra: string
  }
  scope: {
    headingPart1: string
    headingEm: string
    headingEnd: string
    includedTitle: string
    included: string[]
    excludedTitle: string
    excluded: string[]
    note: string
  }
  contrast: {
    label: string
    headingPart1: string
    headingEm: string
    headingEnd: string
    intro: string
    left: { tag: string; items: string[] }
    right: { tag: string; items: string[] }
    closing: string
  }
  who: {
    label: string
    headingPart1: string
    headingEm: string
    headingEnd: string
    text1: string
    text2: string
    imageAlt: string
  }
  caseStudyHeading: { part1: string; em: string; end: string }
  pricing: {
    label: string
    headingPart1: string
    headingEm: string
    headingEnd: string
    intro: string
    tiers: { price: string; slot: string; tag: string; state: 'completed' | 'current' | 'upcoming' }[]
    tiersNote: string
    card: {
      title: string
      subtitle: string
      features: string[]
      badge: string
      price: string
      priceSuffix: string
      priceNote: string
      cta: string
    }
    trustLine: string
    trustLine2: string
  }
  after: {
    label: string
    headingPart1: string
    headingEm: string
    headingEnd: string
    intro: string
    cards: { title: string; description: string }[]
    note: string
  }
  testimonialsHeading: string
  faq: {
    label: string
    heading: string
    headingEm: string
    subheading: string
    items: { question: string; answer: string }[]
  }
  form: {
    title: string
    subtitle: string
    stepLabel: string
    back: string
    continue: string
    step1: {
      title: string
      /** `notice` is the qualification line shown in red under the question. */
      qBusiness: QuestionCards & { notice: string }
      qRole: QuestionCards
    }
    step2: {
      title: string
      qUsage: QuestionCards
      qPain: { label: string; helper: string; placeholder: string }
    }
    step3: {
      title: string
      fields: {
        name: { label: string; placeholder: string }
        email: { label: string; placeholder: string }
        legalName: { label: string; placeholder: string }
        phone: { label: string; placeholder: string }
        website: { label: string; placeholder: string }
      }
      privacyBefore: string
      privacyLinkLabel: string
      submit: string
      submitting: string
      micro: string
    }
    errors: {
      choice: string
      pain: string
      name: string
      email: string
      legalName: string
      phone: string
      website: string
      privacy: string
    }
    errorGeneric: string
    errorNetwork: string
  }
  /** Dedicated thank-you page (booking step) shown after a successful application. */
  thankYou: {
    metaTitle: string
    eyebrow: string
    titlePart1: string
    titleEm: string
    titleEnd: string
    text: string
    note: string
  }
  finalCta: { heading: string; text: string; cta: string }
  sticky: { priceLine: string; cta: string }
}

const it: AiCopy = {
  homeCard: {
    eyebrow: 'AI Accelerator · 30 giorni one-to-one',
    title: 'Non sai dove si blocca il tuo eCommerce?',
    subtitle:
      'In 30 giorni analizziamo vendite, acquisizione e processi, troviamo il collo di bottiglia e attiviamo con te le prime soluzioni AI. Prezzo fisso, zero vincoli.',
    cta: 'Trova il collo di bottiglia',
  },
  hero: {
    eyebrow: 'AI Accelerator · 30 giorni one-to-one per aziende ed eCommerce',
    titleLine1: 'Smetti di rincorrere tool.',
    titleLine2Pre: 'In 30 giorni portiamo l’AI dove ti fa ',
    titleEm1: 'risparmiare tempo',
    titleMid: ' e ',
    titleEm2: 'vendere di più',
    titleEnd: '.',
    leadLine:
      'Lavoriamo one-to-one sulla tua azienda: analizziamo vendite, acquisizione e processi, mettiamo in fila le priorità e attiviamo con te le prime soluzioni AI. Niente corsi, niente abbonamenti.',
    benefits: ['One-to-one, su misura', '4 videochiamate in 30 giorni', 'Prezzo fisso, zero vincoli'],
    cta: 'Candida la tua azienda',
    ctaNote: 'Solo aziende ed eCommerce già avviati. Valutiamo ogni candidatura.',
    trustRatingLabel: '5/5',
    trustLine: 'Scelti da brand eCommerce, aziende e team marketing',
  },
  problem: {
    label: 'il problema',
    headingPart1: 'Troppa AI, ',
    headingEm: 'nessun sistema',
    headingEnd: '.',
    intro:
      'Ogni settimana esce un tool nuovo. Intanto il team fa ancora tutto a mano e l’AI resta un esperimento. Il problema non è la mancanza di strumenti: è l’eccesso.',
    items: [
      {
        title: 'Sovraccarico di informazioni',
        description: 'Mille consigli che si contraddicono e nessun punto di partenza.',
      },
      {
        title: 'Tool provati e abbandonati',
        description: 'Abbonamenti attivati e dimenticati. Ognuno risolve un pezzo, nessuno parla con l’altro.',
      },
      {
        title: 'Tempo perso in attività ripetitive',
        description: 'Preventivi, report, email: lavoro che una macchina fa in pochi minuti.',
      },
      {
        title: 'Consulenti poco trasparenti',
        description: 'Prezzi fuori scala, promesse vaghe e alla fine un PDF generico.',
      },
    ],
  },
  solution: {
    label: 'la soluzione',
    headingPart1: 'Un partner AI, ',
    headingEm: 'non un guru',
    headingEnd: '.',
    intro:
      'Entriamo nella tua azienda, studiamo dati e processi e portiamo l’AI dove genera un risultato misurabile: tempo recuperato o fatturato in più.',
    items: [
      {
        title: 'Contesto prima dei tool',
        description: 'Partiamo da offerta, clienti e processi. Solo dopo scegliamo gli strumenti.',
      },
      {
        title: 'Dati, non teoria',
        description: 'Ogni scelta nasce dai tuoi numeri e dal lavoro reale del team, non da una tendenza.',
      },
      {
        title: 'Marketing, vendite e AI insieme',
        description: 'Un solo partner per acquisizione, sito, dati e automazioni.',
      },
      {
        title: 'Autonomia, non dipendenza',
        description: 'A fine mese il team va avanti da solo, con priorità chiare e procedure scritte.',
      },
    ],
  },
  audience: {
    label: 'per chi è',
    headingPart1: 'Per chi usa l’AI, ma ',
    headingEm: 'non di mestiere',
    headingEnd: '.',
    intro: 'Il tuo lavoro è far crescere l’azienda, non inseguire gli aggiornamenti dell’AI.',
    cards: [
      {
        title: 'Founder e titolari',
        description:
          'Guidi un’azienda o un eCommerce avviato. Usi l’AI a spot e sai che potresti farci molto di più: più clienti, meno ore perse.',
      },
      {
        title: 'Uffici marketing',
        description:
          'Ti hanno chiesto di “integrare l’AI” senza dirti come. Ti servono un metodo e processi che tutto il team possa seguire.',
      },
    ],
    notForTitle: 'Non fa per te se…',
    notForItems: [
      'sei una startup, un privato o un progetto ancora in fase di lancio',
      'cerchi il “prompt magico” che risolve tutto',
      'vuoi un corso generico uguale per tutti',
      'vuoi delegare tutto senza coinvolgere il team',
    ],
  },
  start: {
    heading: 'Come si accede',
    steps: [
      {
        title: 'Candidatura e pre-call',
        description:
          'Ci racconti la tua azienda e fissi subito una pre-call gratuita di 40 minuti per capire insieme se c’è fit.',
      },
      {
        title: 'Kick-off',
        description: 'Calendario delle videochiamate, accessi e task manager condiviso: il mese parte.',
      },
      {
        title: '4 settimane one-to-one',
        description: 'Una videochiamata a settimana, contatto diretto nel mezzo.',
      },
    ],
  },
  timeline: {
    label: 'come lavoriamo',
    headingPart1: '30 giorni per ',
    headingEm: 'fare chiarezza',
    headingEnd: '.',
    intro:
      '4 videochiamate da 60 minuti, una a settimana. In mezzo, contatto diretto e un task manager condiviso.',
    goalBox: {
      title: 'L’obiettivo del mese',
      text: 'Mappare numeri, processi e opportunità, metterli in ordine di priorità con te e attaccare con l’AI il primo collo di bottiglia. Prima capiamo cosa conta, poi agiamo.',
    },
    phaseLabel: 'Fase',
    phases: [
      {
        number: '01',
        title: 'Contesto e obiettivi',
        week: 'Settimana 1',
        description:
          'Modello, offerta, clienti, team, KPI e obiettivi a 6-12 mesi. Per 5 giorni il team annota le attività ripetitive: è la base per misurare il tempo recuperato.',
        outputLabel: 'Output',
        output: 'Mappa dell’azienda e prima bozza del Context Document.',
      },
      {
        number: '02',
        title: 'Acquisizione, vendite e retention',
        week: 'Settimana 2',
        description: 'Come arrivano i clienti, come comprano, come tornano e dove si perdono opportunità.',
        outputLabel: 'Output',
        output: 'Diagnosi con opportunità e aree critiche.',
      },
      {
        number: '03',
        title: 'Operatività e AI',
        week: 'Settimana 3',
        description:
          'Dove si perde tempo e dove l’AI porta un vantaggio concreto. In videochiamata attiviamo insieme fino a 2 quick win.',
        outputLabel: 'Output',
        output: 'Colli di bottiglia, strumenti consigliati, prime soluzioni AI attive.',
      },
      {
        number: '04',
        title: 'Priorità e roadmap',
        week: 'Settimana 4',
        description:
          'Tutto in un documento finale: opportunità in ordine di impatto, roadmap a 90 giorni, protocolli e Context Document. Da qui sei autonomo.',
        outputLabel: 'Output',
        output: 'Documento delle priorità, roadmap, protocolli e Context Document.',
      },
    ],
    note: {
      title: 'Perché un mese e non una videochiamata?',
      text: 'Perché i punti giusti per l’AI si trovano solo vedendo l’azienda lavorare, settimana dopo settimana. L’implementazione è la parte veloce.',
    },
    tagline: 'Non ti lasciamo una lista di tool. Ti lasciamo un sistema.',
  },
  deliverables: {
    label: 'cosa ricevi',
    headingPart1: 'Tre strumenti di lavoro, ',
    headingEm: 'non un PDF nel cassetto',
    headingEnd: '.',
    cards: [
      {
        title: 'Documento delle priorità e roadmap',
        description:
          'Ogni area analizzata, colli di bottiglia, opportunità in ordine di impatto, strumenti da usare ed evitare con i costi, roadmap a 90 giorni e KPI.',
      },
      {
        title: 'Protocolli operativi',
        description: 'Procedure passo per passo con strumenti, prompt e controlli. Tutto il team lavora allo stesso modo.',
      },
      {
        title: 'Context Document aziendale',
        description:
          'La tua azienda descritta per ChatGPT, Claude e simili: risposte su misura, non generiche. Resta a te.',
      },
    ],
    extra: 'In più: fino a 2 quick win già attive nel lavoro quotidiano.',
  },
  scope: {
    headingPart1: 'Chiaro fin dall’inizio: ',
    headingEm: 'cosa è incluso',
    headingEnd: '.',
    includedTitle: 'Incluso',
    included: [
      '4 videochiamate da 60 minuti + fino a 2 extra',
      'Contatto diretto per 30 giorni, risposta entro 1 giorno lavorativo',
      'Task manager condiviso e riepilogo dopo ogni videochiamata',
      'Fino a 2 quick win impostate insieme',
      'Documento delle priorità, protocolli e Context Document, che restano tuoi',
    ],
    excludedTitle: 'Non incluso',
    excluded: [
      'Sviluppo oltre le quick win',
      'Gestione delle campagne e budget pubblicitario',
      'Produzione di contenuti',
      'Licenze e abbonamenti AI',
      'Corsi preregistrati',
    ],
    note: 'Ogni passo successivo lo valutiamo insieme, con una proposta separata.',
  },
  contrast: {
    label: 'la differenza',
    headingPart1: 'Stessi strumenti. ',
    headingEm: 'Risultato opposto',
    headingEnd: '.',
    intro: 'L’AI è la stessa per tutti. Cambia come la usi.',
    left: {
      tag: '↓ AI senza contesto',
      items: [
        'Prompt generici, risposte generiche',
        'Un tool diverso per ogni problema',
        'Ognuno nel team fa a modo suo',
        'Tempo speso a sperimentare',
      ],
    },
    right: {
      tag: '↑ AI con contesto',
      items: [
        'Il Context Document guida ogni risposta',
        'Pochi strumenti, scelti per un motivo',
        'Procedure condivise da tutto il team',
        'Ore recuperate ogni settimana',
      ],
    },
    closing: 'Stessa AI. La differenza è il metodo.',
  },
  who: {
    label: 'chi ti segue',
    headingPart1: 'Un solo interlocutore, ',
    headingEm: 'dall’inizio alla fine',
    headingEnd: '.',
    text1:
      'Antonio Manitta, fondatore di NoProb Agency. Sviluppatore di formazione (laurea in Informatica), poi eCommerce manager, oggi guida un’agenzia che fa crescere aziende ed eCommerce nella moda di lusso, nel food, negli integratori e nel B2B industriale.',
    text2:
      'Usa l’AI ogni giorno per far lavorare agenti, dashboard e processi: sa dove va implementata subito e dove serve ancora una persona.',
    imageAlt: 'Antonio Manitta, fondatore di NoProb Agency',
  },
  caseStudyHeading: {
    part1: 'Cosa succede quando la tecnologia incontra ',
    em: 'l’esecuzione',
    end: '.',
  },
  pricing: {
    label: 'prezzo',
    headingPart1: 'Un prezzo fisso. ',
    headingEm: 'Nessun conteggio a ore',
    headingEnd: '.',
    intro:
      'Sai dall’inizio quanto investi e usi il percorso fino in fondo. Il prezzo sale con i nuovi clienti: chi entra ora blocca la tariffa.',
    tiers: [
      { price: '€750', slot: 'Fase MVP · Primi clienti pilota', tag: 'Chiuso', state: 'completed' },
      { price: '€1.100', slot: 'Post-MVP · Fino al 15° cliente', tag: 'Disponibile ora', state: 'current' },
      { price: '€2.500', slot: 'Clienti 16-30', tag: 'Prossimo scaglione', state: 'upcoming' },
      { price: '€4.000', slot: 'Dal 31° in poi', tag: 'Prezzo a regime', state: 'upcoming' },
    ],
    tiersNote: 'Nessun countdown: lo slot resta tuo finché c’è.',
    card: {
      title: 'AI Accelerator',
      subtitle:
        'Il percorso one-to-one di 30 giorni: priorità, roadmap e prime soluzioni AI attive. Un solo interlocutore.',
      features: ['4 videochiamate + fino a 2 extra', '3 deliverable che restano tuoi', '2 quick win impostate insieme'],
      badge:
        'Zero rischio d’ingresso: pre-call gratuita, prezzo fisso, nessun rinnovo automatico. 50% alla firma, 50% alla consegna.',
      price: '€1.100',
      priceSuffix: 'una tantum',
      priceNote: '€550 alla firma + €550 alla consegna',
      cta: 'Candida la tua azienda',
    },
    trustLine: 'Dopo la candidatura fissi subito la pre-call gratuita.',
    trustLine2: 'Solo aziende ed eCommerce già avviati, con fatturato consolidato.',
  },
  after: {
    label: 'e dopo?',
    headingPart1: 'Il mese finisce. ',
    headingEm: 'Il percorso no',
    headingEnd: '.',
    intro: 'L’audit non ti lega a niente: alla fine sei autonomo. Se vuoi, andiamo avanti insieme.',
    cards: [
      {
        title: 'Autonomia',
        description: 'Roadmap, protocolli e Context Document: il team applica il piano da solo.',
      },
      {
        title: 'Affiancamento continuo',
        description:
          'Videochiamate periodiche, nuovi strumenti che contano e revisione della roadmap. Resti aggiornato senza inseguire l’AI.',
      },
      {
        title: 'Implementazione',
        description:
          'Automazioni, agenti AI, sito, tracciamenti: se la roadmap richiede un team operativo, lo realizziamo noi.',
      },
    ],
    note: 'Le opzioni 2 e 3 sono su proposta, dopo la videochiamata finale.',
  },
  testimonialsHeading: 'Scelti da imprenditori affermati',
  faq: {
    label: 'domande frequenti',
    heading: 'Le risposte alle ',
    headingEm: 'domande più comuni',
    subheading: 'Senza giri di parole.',
    items: [
      {
        question: 'Lavorate anche con startup o privati?',
        answer:
          'No. Solo aziende ed eCommerce già avviati, con fatturato consolidato e processi da migliorare. Per questo valutiamo ogni candidatura.',
      },
      {
        question: 'Serve essere tecnici?',
        answer: 'No. Il percorso si adatta al tuo livello e documento e protocolli sono scritti per chiunque.',
      },
      {
        question: 'In 30 giorni vedo già un risultato?',
        answer:
          'L’obiettivo del mese è attaccare il primo collo di bottiglia con le prime soluzioni AI. Ciò che richiede sviluppo più ampio va in roadmap, con tempi e costi chiari.',
      },
      {
        question: 'Quali strumenti di AI usate?',
        answer: 'Quelli giusti per il tuo caso. Non siamo legati a nessun fornitore e ti diciamo anche cosa evitare.',
      },
      {
        question: 'Funziona anche se non ho un eCommerce?',
        answer: 'Sì. Vale per qualsiasi azienda avviata con attività di marketing: servizi, agenzie, studi, PMI.',
      },
      {
        question: 'Quanto tempo serve e chi partecipa?',
        answer:
          'Circa 1 ora di videochiamata a settimana più 1-2 ore di compiti; l’analisi la facciamo noi. Di solito partecipano 1-3 persone: chi decide e chi lavora sulle aree analizzate.',
      },
      {
        question: 'I nostri dati sono al sicuro?',
        answer:
          'Sì. Gli accessi servono solo all’analisi, senza modifiche non concordate, con riservatezza contrattuale.',
      },
      {
        question: 'Lavoriamo già con un’agenzia: ha senso?',
        answer: 'Sì. Ottieni una visione indipendente e una roadmap da condividere con i fornitori attuali.',
      },
      {
        question: 'Cosa succede dopo il mese?',
        answer:
          'Sei autonomo. Se vuoi, scegli l’affiancamento continuo o l’implementazione. Nessun rinnovo automatico.',
      },
    ],
  },
  form: {
    title: 'AI Accelerator',
    subtitle: '3 passaggi, 2 minuti. Investimento: €1.100, prezzo fisso.',
    stepLabel: 'Passaggio',
    back: '← Indietro',
    continue: 'Avanti',
    step1: {
      title: 'Di cosa si tratta?',
      qBusiness: {
        label: 'Che tipo di attività è?',
        notice:
          'Lavoriamo esclusivamente con aziende ed eCommerce già avviati, con fatturato consolidato. Non prendiamo in considerazione startup o progetti in fase di lancio.',
        options: ['eCommerce', 'Attività online o servizi', 'Azienda / PMI', 'Agenzia o freelance'],
      },
      qRole: {
        label: 'Qual è il tuo ruolo?',
        options: ['Founder / titolare', 'Ufficio marketing', 'Altro ruolo'],
      },
    },
    step2: {
      title: 'Da dove partiamo?',
      qUsage: {
        label: 'Quanto usate l’AI oggi?',
        options: ['Quasi per niente', 'A spot, senza metodo', 'Ogni giorno, ma senza sistema'],
      },
      qPain: {
        label: 'Cosa vorresti ottenere integrando l’AI nella tua attività?',
        helper:
          'Due righe su obiettivi, idee o dubbi. Se non hai ancora le idee chiare, raccontaci in breve la tua attività: arriviamo alla pre-call già preparati.',
        placeholder:
          'Es. vogliamo automatizzare i preventivi e rispondere prima ai clienti. Oppure: siamo un eCommerce moda di 6 persone e facciamo quasi tutto a mano…',
      },
    },
    step3: {
      title: 'Chi sei?',
      fields: {
        name: { label: 'Nome e cognome', placeholder: 'Mario Rossi' },
        email: { label: 'Email aziendale', placeholder: 'nome@azienda.com' },
        legalName: { label: 'Ragione sociale', placeholder: 'Es. Rossi S.r.l.' },
        phone: { label: 'Telefono (facoltativo)', placeholder: '+39 333 123 4567' },
        website: { label: 'Sito web', placeholder: 'azienda.com' },
      },
      privacyBefore: 'Ho letto e accetto la ',
      privacyLinkLabel: 'Privacy Policy',
      submit: 'Invia candidatura',
      submitting: 'Invio in corso…',
      micro: 'Dopo l’invio scegli subito giorno e orario della pre-call.',
    },
    errors: {
      choice: 'Seleziona un’opzione',
      pain: 'Raccontacelo in almeno 20 caratteri',
      name: 'Inserisci nome e cognome',
      email: 'Inserisci un indirizzo email valido',
      legalName: 'Inserisci la ragione sociale',
      phone: 'Inserisci un numero di telefono valido',
      website: 'Inserisci il sito web della tua attività',
      privacy: 'Devi accettare la Privacy Policy',
    },
    errorGeneric: 'Qualcosa è andato storto. Riprova tra un momento.',
    errorNetwork: 'Errore di rete. Controlla la connessione e riprova.',
  },
  thankYou: {
    metaTitle: 'Candidatura ricevuta · AI Accelerator',
    eyebrow: 'Candidatura ricevuta ⚡',
    titlePart1: 'Ultimo passo: ',
    titleEm: 'fissa la pre-call',
    titleEnd: '.',
    text: 'Scegli giorno e orario per la pre-call gratuita di 40 minuti. Nel frattempo leggiamo la tua candidatura, così arriviamo già preparati.',
    note: 'Solo aziende ed eCommerce già avviati: se non c’è fit, ti avvisiamo e annulliamo la prenotazione.',
  },
  finalCta: {
    heading: 'Pronto a mettere ordine nella tua azienda?',
    text: '30 giorni, one-to-one, prezzo fisso. Solo aziende ed eCommerce già avviati.',
    cta: 'Candida la tua azienda',
  },
  sticky: { priceLine: '€1.100 · 30 giorni', cta: 'Candida la tua azienda' },
}

const en: AiCopy = {
  homeCard: {
    eyebrow: 'AI Accelerator · 30 days one-to-one',
    title: 'Not sure where your eCommerce is stuck?',
    subtitle:
      'In 30 days we analyze sales, acquisition and processes, find the bottleneck and switch on your first AI solutions with you. Fixed price, no lock-in.',
    cta: 'Find your bottleneck',
  },
  hero: {
    eyebrow: 'AI Accelerator · 30 days one-to-one for companies and eCommerce brands',
    titleLine1: 'Stop chasing tools.',
    titleLine2Pre: 'In 30 days we put AI where it helps you ',
    titleEm1: 'save time',
    titleMid: ' and ',
    titleEm2: 'sell more',
    titleEnd: '.',
    leadLine:
      'We work one-to-one on your company: we analyze sales, acquisition and processes, rank the priorities and switch on your first AI solutions with you. No courses, no subscriptions.',
    benefits: ['One-to-one, tailored', '4 video calls in 30 days', 'Fixed price, no lock-in'],
    cta: 'Apply with your company',
    ctaNote: 'Established companies and eCommerce brands only. We review every application.',
    trustRatingLabel: '5/5',
    trustLine: 'Chosen by eCommerce brands, companies and marketing teams',
  },
  problem: {
    label: 'the problem',
    headingPart1: 'Too much AI, ',
    headingEm: 'no system',
    headingEnd: '.',
    intro:
      'A new tool launches every week. Meanwhile your team still does everything by hand and AI stays an experiment. The problem isn’t a lack of tools: it’s too many of them.',
    items: [
      {
        title: 'Information overload',
        description: 'A thousand contradicting tips and no starting point.',
      },
      {
        title: 'Tools tried and abandoned',
        description: 'Subscriptions started and forgotten. Each solves one piece, none talk to each other.',
      },
      {
        title: 'Time lost on repetitive work',
        description: 'Quotes, reports, emails: work a machine does in minutes.',
      },
      {
        title: 'Opaque consultants',
        description: 'Sky-high prices, vague promises and, in the end, a generic PDF.',
      },
    ],
  },
  solution: {
    label: 'the solution',
    headingPart1: 'An AI partner, ',
    headingEm: 'not a guru',
    headingEnd: '.',
    intro:
      'We step inside your company, study data and processes, and bring AI where it drives a measurable result: time saved or extra revenue.',
    items: [
      {
        title: 'Context before tools',
        description: 'We start from your offer, clients and processes. Only then do we pick the tools.',
      },
      {
        title: 'Data, not theory',
        description: 'Every choice comes from your numbers and your team’s real work, not from a trend.',
      },
      {
        title: 'Marketing, sales and AI together',
        description: 'One partner for acquisition, website, data and automation.',
      },
      {
        title: 'Autonomy, not dependency',
        description: 'By the end of the month your team moves on its own, with clear priorities and written procedures.',
      },
    ],
  },
  audience: {
    label: 'who it’s for',
    headingPart1: 'For people who use AI, but ',
    headingEm: 'not for a living',
    headingEnd: '.',
    intro: 'Your job is growing your company, not keeping up with AI updates.',
    cards: [
      {
        title: 'Founders and owners',
        description:
          'You run an established company or eCommerce brand. You use AI here and there and know it could do much more: more clients, fewer wasted hours.',
      },
      {
        title: 'Marketing teams',
        description:
          'You’ve been asked to “integrate AI” without being told how. You need a method and processes the whole team can follow.',
      },
    ],
    notForTitle: 'Not for you if…',
    notForItems: [
      'you’re a startup, an individual or a project still in launch phase',
      'you’re looking for the “magic prompt” that fixes everything',
      'you want a one-size-fits-all course',
      'you want to hand everything off without involving your team',
    ],
  },
  start: {
    heading: 'How to get in',
    steps: [
      {
        title: 'Application & intro call',
        description:
          'Tell us about your company and book a free 40-minute intro call right away to see together if there’s a fit.',
      },
      {
        title: 'Kick-off',
        description: 'Call calendar, tool access and a shared task manager: the month starts.',
      },
      {
        title: '4 weeks one-to-one',
        description: 'One video call per week, direct contact in between.',
      },
    ],
  },
  timeline: {
    label: 'how we work',
    headingPart1: '30 days to ',
    headingEm: 'get clarity',
    headingEnd: '.',
    intro: '4 video calls of 60 minutes, one per week. In between, direct contact and a shared task manager.',
    goalBox: {
      title: 'The goal of the month',
      text: 'Map numbers, processes and opportunities, rank them by priority with you and tackle the first bottleneck with AI. First we understand what matters, then we act.',
    },
    phaseLabel: 'Phase',
    phases: [
      {
        number: '01',
        title: 'Context & goals',
        week: 'Week 1',
        description:
          'Model, offer, clients, team, KPIs and 6-12 month goals. For 5 days your team logs repetitive tasks: the baseline for measuring the time we win back.',
        outputLabel: 'Output',
        output: 'Company map and first draft of the Context Document.',
      },
      {
        number: '02',
        title: 'Acquisition, sales & retention',
        week: 'Week 2',
        description: 'How clients find you, how they buy, how they come back and where opportunities are lost.',
        outputLabel: 'Output',
        output: 'Diagnosis with opportunities and critical areas.',
      },
      {
        number: '03',
        title: 'Operations & AI',
        week: 'Week 3',
        description:
          'Where time is lost and where AI brings a real advantage. During the call we switch on up to 2 quick wins together.',
        outputLabel: 'Output',
        output: 'Bottlenecks, recommended tools, first AI solutions running.',
      },
      {
        number: '04',
        title: 'Priorities & roadmap',
        week: 'Week 4',
        description:
          'Everything in one final document: opportunities ranked by impact, a 90-day roadmap, protocols and the Context Document. From here you’re autonomous.',
        outputLabel: 'Output',
        output: 'Priority document, roadmap, protocols and Context Document.',
      },
    ],
    note: {
      title: 'Why a month and not a single call?',
      text: 'Because the right places for AI only show up when you watch the company work, week after week. Implementation is the fast part.',
    },
    tagline: 'We don’t leave you a list of tools. We leave you a system.',
  },
  deliverables: {
    label: 'what you get',
    headingPart1: 'Three working tools, ',
    headingEm: 'not a PDF in a drawer',
    headingEnd: '.',
    cards: [
      {
        title: 'Priority document & roadmap',
        description:
          'Every area analyzed, bottlenecks, opportunities ranked by impact, tools to use and avoid with costs, a 90-day roadmap and KPIs.',
      },
      {
        title: 'Operating protocols',
        description: 'Step-by-step procedures with tools, prompts and checks. The whole team works the same way.',
      },
      {
        title: 'Company Context Document',
        description: 'Your company described for ChatGPT, Claude and similar tools: tailored answers, not generic ones. It stays yours.',
      },
    ],
    extra: 'Plus: up to 2 quick wins already running in your daily work.',
  },
  scope: {
    headingPart1: 'Clear from day one: ',
    headingEm: 'what’s included',
    headingEnd: '.',
    includedTitle: 'Included',
    included: [
      '4 calls of 60 minutes + up to 2 extra',
      'Direct contact for 30 days, reply within 1 business day',
      'Shared task manager and recap after every call',
      'Up to 2 quick wins set up together',
      'Priority document, protocols and Context Document, which stay yours',
    ],
    excludedTitle: 'Not included',
    excluded: [
      'Development beyond the quick wins',
      'Running ad campaigns and ad budget',
      'Content production',
      'AI licenses and subscriptions',
      'Pre-recorded courses',
    ],
    note: 'Every next step, we evaluate together with a separate proposal.',
  },
  contrast: {
    label: 'the difference',
    headingPart1: 'Same tools. ',
    headingEm: 'Opposite results',
    headingEnd: '.',
    intro: 'AI is the same for everyone. What changes is how you use it.',
    left: {
      tag: '↓ AI without context',
      items: [
        'Generic prompts, generic answers',
        'A different tool for every problem',
        'Everyone on the team does it their own way',
        'Time spent experimenting',
      ],
    },
    right: {
      tag: '↑ AI with context',
      items: [
        'The Context Document guides every answer',
        'Few tools, each chosen for a reason',
        'Procedures shared by the whole team',
        'Hours saved every week',
      ],
    },
    closing: 'Same AI. The difference is the method.',
  },
  who: {
    label: 'who you’ll work with',
    headingPart1: 'One point of contact, ',
    headingEm: 'from start to finish',
    headingEnd: '.',
    text1:
      'Antonio Manitta, founder of NoProb Agency. A developer by training (Computer Science degree), then an eCommerce manager, he now runs an agency that grows companies and eCommerce brands in luxury fashion, food, supplements and industrial B2B.',
    text2:
      'He uses AI every day to run agents, dashboards and processes: he knows where it should go in right away and where a person is still needed.',
    imageAlt: 'Antonio Manitta, founder of NoProb Agency',
  },
  caseStudyHeading: {
    part1: 'What happens when technology meets ',
    em: 'execution',
    end: '.',
  },
  pricing: {
    label: 'pricing',
    headingPart1: 'A fixed price. ',
    headingEm: 'No hourly billing',
    headingEnd: '.',
    intro:
      'You know upfront what you’re investing and use the program to the fullest. The price goes up with new clients: join now and lock in your rate.',
    tiers: [
      { price: '€750', slot: 'MVP phase · First pilot clients', tag: 'Closed', state: 'completed' },
      { price: '€1,100', slot: 'Post-MVP · Up to client #15', tag: 'Available now', state: 'current' },
      { price: '€2,500', slot: 'Clients 16-30', tag: 'Next tier', state: 'upcoming' },
      { price: '€4,000', slot: 'From client #31', tag: 'Standard price', state: 'upcoming' },
    ],
    tiersNote: 'No countdown: the slot is yours as long as it’s available.',
    card: {
      title: 'AI Accelerator',
      subtitle:
        'The 30-day one-to-one program: priorities, roadmap and your first AI solutions running. One point of contact.',
      features: ['4 calls + up to 2 extra', '3 deliverables you keep', '2 quick wins set up together'],
      badge: 'Zero entry risk: free intro call, fixed price, no auto-renewal. 50% on signing, 50% on delivery.',
      price: '€1,100',
      priceSuffix: 'one-off',
      priceNote: '€550 on signing + €550 on delivery',
      cta: 'Apply with your company',
    },
    trustLine: 'Right after applying, you book your free intro call.',
    trustLine2: 'Established companies and eCommerce brands with consolidated revenue only.',
  },
  after: {
    label: 'what’s next?',
    headingPart1: 'The month ends. ',
    headingEm: 'The journey doesn’t',
    headingEnd: '.',
    intro: 'The audit doesn’t tie you to anything: by the end you’re autonomous. If you want, we keep going together.',
    cards: [
      {
        title: 'Autonomy',
        description: 'Roadmap, protocols and Context Document: your team runs the plan on its own.',
      },
      {
        title: 'Ongoing support',
        description:
          'Regular calls, the new tools that matter and roadmap reviews. You stay up to date without chasing AI.',
      },
      {
        title: 'Implementation',
        description:
          'Automations, AI agents, website, tracking: if the roadmap needs an operating team, we build it.',
      },
    ],
    note: 'Options 2 and 3 are by proposal, after the final call.',
  },
  testimonialsHeading: 'Chosen by established entrepreneurs',
  faq: {
    label: 'FAQ',
    heading: 'Answers to the ',
    headingEm: 'most common questions',
    subheading: 'Straight answers.',
    items: [
      {
        question: 'Do you work with startups or individuals?',
        answer:
          'No. Only established companies and eCommerce brands with consolidated revenue and processes to improve. That’s why we review every application.',
      },
      {
        question: 'Do I need to be technical?',
        answer: 'No. The program adapts to your level and the document and protocols are written for anyone.',
      },
      {
        question: 'Will I see a result within 30 days?',
        answer:
          'The goal of the month is to tackle the first bottleneck with your first AI solutions. Anything needing broader development goes in the roadmap, with clear timing and costs.',
      },
      {
        question: 'Which AI tools do you use?',
        answer: 'The right ones for your case. We’re not tied to any vendor and we tell you what to avoid too.',
      },
      {
        question: 'Does it work if I don’t run an eCommerce store?',
        answer: 'Yes. It works for any established business with marketing activity: services, agencies, studios, SMEs.',
      },
      {
        question: 'How much time does it take and who joins?',
        answer:
          'About 1 hour of calls per week plus 1-2 hours of tasks; we do the analysis. Usually 1-3 people join: the decision-makers and those working on the areas we analyze.',
      },
      {
        question: 'Is our data safe?',
        answer: 'Yes. Accesses are used only for the analysis, with no unagreed changes and contractual confidentiality.',
      },
      {
        question: 'We already work with an agency: does it make sense?',
        answer: 'Yes. You get an independent view and a roadmap to share with your current vendors.',
      },
      {
        question: 'What happens after the month?',
        answer: 'You’re autonomous. If you want, choose ongoing support or implementation. No auto-renewal.',
      },
    ],
  },
  form: {
    title: 'AI Accelerator',
    subtitle: '3 steps, 2 minutes. Investment: €1,100, fixed price.',
    stepLabel: 'Step',
    back: '← Back',
    continue: 'Continue',
    step1: {
      title: 'What are we talking about?',
      qBusiness: {
        label: 'What kind of business is it?',
        notice:
          'We work exclusively with established companies and eCommerce brands with consolidated revenue. We don’t consider startups or early-stage projects.',
        options: ['eCommerce', 'Online business or services', 'Company / SME', 'Agency or freelancer'],
      },
      qRole: {
        label: 'What’s your role?',
        options: ['Founder / owner', 'Marketing team', 'Other role'],
      },
    },
    step2: {
      title: 'Where do we start?',
      qUsage: {
        label: 'How much do you use AI today?',
        options: ['Barely at all', 'Here and there, no method', 'Every day, but no system'],
      },
      qPain: {
        label: 'What would you like to achieve by bringing AI into your business?',
        helper:
          'A couple of lines on your goals, ideas or doubts. Not sure yet? Just tell us briefly about your company: we’ll come to the intro call prepared.',
        placeholder:
          'E.g. we want to automate quotes and reply to clients faster. Or: we’re a 6-person fashion eCommerce brand doing most things by hand…',
      },
    },
    step3: {
      title: 'Who are you?',
      fields: {
        name: { label: 'Full name', placeholder: 'John Smith' },
        email: { label: 'Work email', placeholder: 'name@company.com' },
        legalName: { label: 'Company legal name', placeholder: 'e.g. Acme Ltd' },
        phone: { label: 'Phone (optional)', placeholder: '+44 20 1234 5678' },
        website: { label: 'Website', placeholder: 'company.com' },
      },
      privacyBefore: 'I have read and accept the ',
      privacyLinkLabel: 'Privacy Policy',
      submit: 'Send application',
      submitting: 'Sending…',
      micro: 'After sending, you pick a day and time for your intro call.',
    },
    errors: {
      choice: 'Select an option',
      pain: 'Tell us in at least 20 characters',
      name: 'Enter your full name',
      email: 'Enter a valid email address',
      legalName: 'Enter your company legal name',
      phone: 'Enter a valid phone number',
      website: 'Enter your company website',
      privacy: 'You must accept the Privacy Policy',
    },
    errorGeneric: 'Something went wrong. Please try again.',
    errorNetwork: 'Network error. Check your connection and try again.',
  },
  thankYou: {
    metaTitle: 'Application received · AI Accelerator',
    eyebrow: 'Application received ⚡',
    titlePart1: 'Last step: ',
    titleEm: 'book your intro call',
    titleEnd: '.',
    text: 'Pick a day and time for your free 40-minute intro call. Meanwhile we’ll read your application, so we come prepared.',
    note: 'Established companies and eCommerce brands only: if there’s no fit, we’ll let you know and cancel the booking.',
  },
  finalCta: {
    heading: 'Ready to bring order to your company?',
    text: '30 days, one-to-one, fixed price. Established companies and eCommerce brands only.',
    cta: 'Apply with your company',
  },
  sticky: { priceLine: '€1,100 · 30 days', cta: 'Apply with your company' },
}

const dictionaries: Record<Locale, AiCopy> = { it, en }

export function getAiCopy(locale: Locale): AiCopy {
  return dictionaries[locale]
}
