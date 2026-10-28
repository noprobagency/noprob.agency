import type { Locale } from '@/lib/i18n'
import type { MigrazioneFormCopy, MigrazionePricingCopy } from '@/lib/i18n/migrazione'

/**
 * Pricing + application-form copy for the Data-Driven Team page
 * (/data-driven-team, /it/team-ecommerce-dedicato).
 *
 * Reuses the migrazione black pricing+form section (MigrazionePricing) but with
 * the tier progression bar and the price hidden (showTiers/showPrice = false),
 * so only the fields below are actually rendered. `tiers`, `priceSuffix` and
 * `scarcity` are kept empty to satisfy the shared type.
 */

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

export type DataTeamCopy = {
  pricing: MigrazionePricingCopy
  form: MigrazioneFormCopy
  whyUs: WhyUsCopy
}

const it: DataTeamCopy = {
  pricing: {
    label: 'prezzo',
    heading: 'Il prezzo parte dal costo di una figura.\nCresce solo se lo decidi tu.',
    subheading:
      'Ogni progetto ha esigenze diverse. Si parte da un punto chiaro, nell’ordine di costo di un dipendente. Da lì il team può crescere, ma solo quando insieme decidiamo di aggiungere competenze o spingere su nuove aree. Paghi in base a quanto team è in gioco. Nessun costo a sorpresa.',
    tiers: [],
    priceSuffix: '',
    priceBadge: 'metodo noprobagency',
    guarantee:
      'Il primo sprint di 30 giorni lo fai a metà prezzo: entri a rischio dimezzato.',
    trustLabel: 'Scelti da brand di Moda, Integratori e DTC eCommerce',
    cardTitle: 'Data-Driven Team',
    cardDescription:
      'Un eCommerce Manager dedicato che guida un team full-stack sul tuo store. Sviluppo, marketing, CRO, branding e dati, gestiti per te con un solo punto di riferimento.',
    cardChecks: [
      'Supporto rapido, 7 giorni su 7',
      'Un unico eCommerce Manager',
      'Primo sprint a metà prezzo',
    ],
    scarcity: '',
    cta: 'Candidati per il team',
  },
  form: {
    label: 'candidatura',
    heading: 'Candidati per il team dedicato',
    subheading: 'Lavoriamo con pochi brand alla volta, per seguirli davvero.',
    intro: 'Raccontaci il progetto: se siamo in target, ti ricontattiamo per una videochiamata.',
    fields: {
      name: { label: 'Nome e cognome', placeholder: 'Mario Rossi' },
      email: { label: 'Email aziendale', placeholder: 'nome@brand.com' },
      brand: { label: 'Nome del brand / azienda', placeholder: 'Brand srl' },
      websiteUrl: { label: 'URL del tuo eCommerce', placeholder: 'brand.com' },
      platform: {
        label: 'In quali aree ti serve più supporto?',
        placeholder: 'Seleziona…',
        options: [
          'Sviluppo',
          'Marketing e advertising',
          'Branding e creatività',
          'Dati e tracciamento',
          'Parte commerciale',
          'Un po’ tutto',
        ],
      },
      revenue: {
        label: 'Fatturato online annuo indicativo',
        placeholder: 'Seleziona…',
        options: ['< 100k', '100k - 300k', '300k - 1M', '1M - 3M', '3M+'],
      },
      timeline: {
        label: 'Da quando vorresti iniziare?',
        placeholder: 'Seleziona…',
        options: ['Il prima possibile', 'Entro 1-3 mesi', 'Sto solo valutando'],
      },
      reason: {
        label: 'Qual è l’obiettivo principale dei prossimi 12 mesi?',
        placeholder: 'Raccontaci dove vuoi arrivare e cosa ti blocca oggi.',
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
      platform: 'Seleziona un’area',
      revenue: 'Seleziona un’opzione',
      timeline: 'Seleziona un’opzione',
      reason: 'Spiega in almeno 30 caratteri il tuo obiettivo',
      privacy: 'Devi accettare la Privacy Policy',
    },
    errorGeneric: 'Qualcosa è andato storto. Riprova tra un momento.',
    errorNetwork: 'Errore di rete. Controlla la connessione e riprova.',
  },
  whyUs: {
    label: 'perché noi',
    heading: 'Un team, non una somma di fornitori',
    description:
      'Il confronto è semplice: da una parte freelancer e agenzie da coordinare tu, dall’altra un team unico che risponde di tutto.',
    agencyLabel: 'Freelancer e<br />agenzie tradizionali',
    agencyItems: [
      'Competenze sparse, nessuno le coordina',
      'Paghi ogni figura separatamente',
      'Il coordinamento resta sulle tue spalle',
      'Dati assenti o inaffidabili',
      'Serve una competenza nuova? Nuovo fornitore da trovare',
      'Collaborazioni brevi, si cambia spesso',
    ],
    nobrobItems: [
      'Un team completo, guidato da un eCommerce Manager',
      'Un solo partner, al costo di un dipendente',
      'Il coordinamento è nostro, tu hai un interlocutore',
      'Sistema dati su misura, decisioni sui numeri',
      'Serve una competenza nuova? La attiviamo noi',
      'Partnership che durano anni',
    ],
    featuresDescription:
      'Non consegniamo task e spariamo. Restiamo dentro il progetto e cresciamo insieme al brand. Ecco cosa significa averci come team.',
    features: [
      'Presenza continua, mese dopo mese',
      'Team modulare, attivi solo le competenze che servono',
      'Prezzo che parte dal costo di una figura',
      'Mindset data-first su ogni decisione',
      'Un solo interlocutore per tutto il progetto',
      'Branding, fotografia e shooting nella stessa regia',
      'Tracciamento server-side e dashboard su misura',
      'Nessun costo a sorpresa',
      'Una partnership pensata per durare anni',
    ],
  },
}

const en: DataTeamCopy = {
  pricing: {
    label: 'pricing',
    heading: 'The price starts from the cost of one hire.\nIt only grows if you decide so.',
    subheading:
      'Every project has different needs. It starts from a clear point, around the cost of one employee. From there the team can grow, but only when we decide together to add skills or push into new areas. You pay for the team in play. No surprise costs.',
    tiers: [],
    priceSuffix: '',
    priceBadge: 'noprobagency method',
    guarantee:
      'Your first 30-day sprint is half price: you get in at half the risk.',
    trustLabel: 'Chosen by Fashion, Supplements and DTC brands',
    cardTitle: 'Data-Driven Team',
    cardDescription:
      'An eCommerce Manager leading a full-stack team on your store. Development, marketing, CRO, branding and data, managed for you through a single point of contact.',
    cardChecks: [
      'Fast support, 7 days a week',
      'One dedicated eCommerce Manager',
      'First sprint at half price',
    ],
    scarcity: '',
    cta: 'Apply for the team',
  },
  form: {
    label: 'application',
    heading: 'Apply for your dedicated team',
    subheading: 'We work with a few brands at a time, to truly follow them.',
    intro: 'Tell us about the project: if it is a fit, we will reach out for a call.',
    fields: {
      name: { label: 'Full name', placeholder: 'John Smith' },
      email: { label: 'Business email', placeholder: 'name@brand.com' },
      brand: { label: 'Brand / company name', placeholder: 'Brand ltd' },
      websiteUrl: { label: 'Your eCommerce URL', placeholder: 'brand.com' },
      platform: {
        label: 'Which areas do you need most support in?',
        placeholder: 'Select…',
        options: [
          'Development',
          'Marketing & advertising',
          'Branding & creative',
          'Data & tracking',
          'Sales',
          'A bit of everything',
        ],
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
        label: 'What is your main goal for the next 12 months?',
        placeholder: 'Tell us where you want to get to and what is blocking you today.',
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
      websiteUrl: 'Enter your site URL',
      platform: 'Select an area',
      revenue: 'Select an option',
      timeline: 'Select an option',
      reason: 'Explain your goal in at least 30 characters',
      privacy: 'You must accept the Privacy Policy',
    },
    errorGeneric: 'Something went wrong. Please try again in a moment.',
    errorNetwork: 'Network error. Check your connection and try again.',
  },
  whyUs: {
    label: 'why us',
    heading: 'A team, not a pile of vendors',
    description:
      'The comparison is simple: on one side freelancers and agencies you have to coordinate, on the other a single team that owns it all.',
    agencyLabel: 'Freelancers and<br />traditional agencies',
    agencyItems: [
      'Scattered skills, no one coordinates them',
      'You pay each role separately',
      'Coordination stays on your shoulders',
      'Missing or unreliable data',
      'Need a new skill? A new vendor to find',
      'Short engagements, frequent switching',
    ],
    nobrobItems: [
      'A complete team, led by an eCommerce Manager',
      'One partner, at the cost of one employee',
      'Coordination is on us, you get one point of contact',
      'Custom data system, decisions on the numbers',
      'Need a new skill? We bring it in',
      'Partnerships that last for years',
    ],
    featuresDescription:
      'We don’t deliver tasks and disappear. We stay inside the project and grow with the brand. That’s what having us as a team means.',
    features: [
      'Continuous presence, month after month',
      'Modular team, only the skills you need',
      'Pricing that starts at the cost of one hire',
      'Data-first mindset on every decision',
      'One point of contact for the whole project',
      'Branding, photography and shooting in the same direction',
      'Server-side tracking and custom dashboards',
      'No surprise costs',
      'A partnership built to last for years',
    ],
  },
}

const dictionaries: Record<Locale, DataTeamCopy> = { it, en }

export function getDataTeamCopy(locale: Locale): DataTeamCopy {
  return dictionaries[locale]
}
