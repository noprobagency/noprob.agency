import type { Locale } from '@/lib/i18n'

/**
 * Copy for the in-house Privacy Policy and Cookie Policy pages (they replace
 * the old Iubenda-hosted documents). Kept short on purpose: a quick, plain
 * explanation of what the site actually does.
 *
 * Paragraphs and list items support the blog inline syntax (`[text](/path)`,
 * `**bold**`) via `parseInline`.
 *
 * When a tool, form or cookie is added to the site, update BOTH locales here
 * and bump `LEGAL_LAST_UPDATED`.
 */
export const LEGAL_LAST_UPDATED = '2026-10-04'

export const LEGAL_CONTACT_EMAIL = 'antonio@noprob.agency'

export type LegalCookieRow = { name: string; provider: string; purpose: string; duration: string }

export type LegalSection = {
  title: string
  paragraphs?: string[]
  items?: string[]
  cookies?: LegalCookieRow[]
  /** Renders the "manage cookie preferences" button under the section. */
  preferencesButton?: boolean
}

export type LegalDoc = {
  seo: { title: string; description: string }
  eyebrow: string
  title: string
  titleEm: string
  updatedLabel: string
  summaryTitle: string
  summary: string[]
  sections: LegalSection[]
}

export type LegalCopy = {
  privacy: LegalDoc
  cookie: LegalDoc
  cookieTable: { name: string; provider: string; purpose: string; duration: string }
  preferencesButton: string
}

const MAIL = `[${LEGAL_CONTACT_EMAIL}](mailto:${LEGAL_CONTACT_EMAIL})`

const it: LegalCopy = {
  privacy: {
    seo: {
      title: 'Informativa privacy',
      description:
        'Quali dati raccogliamo su noprob.agency, perché li usiamo, con chi li condividiamo e come esercitare i tuoi diritti. Spiegato in breve.',
    },
    eyebrow: 'Privacy Policy',
    title: 'I tuoi dati, spiegati ',
    titleEm: 'in breve',
    updatedLabel: 'Ultimo aggiornamento',
    summaryTitle: 'In sintesi',
    summary: [
      'Raccogliamo solo i dati che ci invii tramite i form e, se acconsenti, dati statistici e di marketing.',
      'Li usiamo per risponderti, valutare la tua richiesta e capire come funzionano il sito e le campagne.',
      'Non vendiamo i tuoi dati a nessuno.',
      `Puoi chiederci di vederli, correggerli o cancellarli scrivendo a ${MAIL}.`,
    ],
    sections: [
      {
        title: 'Chi tratta i tuoi dati',
        paragraphs: [
          'Il titolare del trattamento è **NOPROB AGENCY LLC**, 30 N Gould St Ste R, Sheridan, Wyoming (WY) 82801, USA, EIN 365136989.',
          `Per qualsiasi domanda sulla privacy scrivi a ${MAIL}.`,
        ],
      },
      {
        title: 'Quali dati raccogliamo',
        items: [
          '**Dati che ci invii tu** compilando un form di contatto o di candidatura: nome, email, telefono, azienda, sito web e le risposte che dai sul tuo progetto.',
          '**Dati di prenotazione**, se fissi una videochiamata dal calendario presente nelle pagine di conferma.',
          '**Dati tecnici di navigazione**: indirizzo IP, tipo di browser e dispositivo, pagine visitate. Quelli usati per statistiche e marketing vengono raccolti solo con il tuo consenso (vedi la [Cookie Policy](/it/cookie-policy)).',
        ],
      },
      {
        title: 'Perché li usiamo',
        items: [
          '**Risponderti e valutare la tua richiesta o candidatura**, inclusa l’email di conferma che ricevi dopo l’invio. Base giuridica: misure precontrattuali su tua richiesta.',
          '**Misurare l’andamento del sito e delle campagne pubblicitarie**. Base giuridica: il tuo consenso, che puoi revocare in ogni momento.',
          '**Proteggere il sito da spam e abusi**. Base giuridica: il nostro legittimo interesse.',
        ],
        paragraphs: ['Non usiamo i tuoi dati per finalità diverse da queste e non li vendiamo.'],
      },
      {
        title: 'Con chi li condividiamo',
        paragraphs: ['Solo con i fornitori che ci servono per far funzionare il sito:'],
        items: [
          '**Vercel**: hosting del sito.',
          '**Resend**: invio delle email generate dai form.',
          '**Google Analytics 4**: statistiche di utilizzo, solo con il tuo consenso.',
          '**Meta (Pixel e Conversions API)**: misurazione delle campagne, solo con il tuo consenso.',
          '**TidyCal**: prenotazione delle videochiamate.',
          '**WhatsApp**: solo se scegli tu di scriverci da lì.',
        ],
      },
      {
        title: 'Dove si trovano i dati',
        paragraphs: [
          'La nostra società e alcuni di questi fornitori hanno sede negli Stati Uniti, quindi i tuoi dati possono essere trasferiti fuori dallo Spazio Economico Europeo. Quando succede, il trasferimento avviene sulla base delle garanzie previste dal GDPR, come le clausole contrattuali standard o il Data Privacy Framework UE-USA, ove applicabili.',
        ],
      },
      {
        title: 'Per quanto tempo li conserviamo',
        items: [
          '**Richieste e candidature**: per il tempo necessario a gestirle e per l’eventuale rapporto di lavoro che ne nasce. Se non iniziamo a lavorare insieme, le cancelliamo entro 24 mesi dall’ultimo contatto.',
          '**Dati statistici e di marketing**: per la durata dei relativi cookie, indicata nella [Cookie Policy](/it/cookie-policy).',
        ],
      },
      {
        title: 'I tuoi diritti',
        paragraphs: [
          'Puoi chiederci in qualsiasi momento di accedere ai tuoi dati, correggerli, cancellarli, limitarne l’uso, riceverne una copia o opporti al trattamento. Puoi anche revocare il consenso a statistiche e marketing dalle preferenze cookie.',
          `Scrivi a ${MAIL}: rispondiamo entro 30 giorni. Se ritieni che i tuoi dati siano trattati in modo scorretto puoi presentare reclamo all’autorità di controllo del tuo Paese (in Italia, il Garante per la protezione dei dati personali).`,
        ],
      },
      {
        title: 'Modifiche a questa pagina',
        paragraphs: [
          'Se cambiamo il modo in cui trattiamo i dati aggiorniamo questa pagina e la data che trovi in alto.',
        ],
      },
    ],
  },
  cookie: {
    seo: {
      title: 'Informativa cookie',
      description:
        'Quali cookie usa noprob.agency, a cosa servono, quanto durano e come cambiare le tue preferenze in qualsiasi momento. Spiegato in breve.',
    },
    eyebrow: 'Cookie Policy',
    title: 'I cookie, spiegati ',
    titleEm: 'in breve',
    updatedLabel: 'Ultimo aggiornamento',
    summaryTitle: 'In sintesi',
    summary: [
      'Usiamo un solo cookie tecnico, che ricorda la tua scelta sui cookie.',
      'I cookie di statistica (Google Analytics) e di marketing (Meta) si attivano solo se acconsenti.',
      'Puoi cambiare idea quando vuoi dal pulsante "Gestisci preferenze cookie" in questa pagina.',
    ],
    sections: [
      {
        title: 'Cosa sono i cookie',
        paragraphs: [
          'Sono piccoli file che un sito salva nel tuo browser per ricordare informazioni tra una visita e l’altra. Alcuni servono al funzionamento del sito, altri a misurare le visite o l’efficacia delle campagne pubblicitarie.',
        ],
      },
      {
        title: 'Quali cookie usiamo',
        cookies: [
          {
            name: 'noprob_agency_consent',
            provider: 'noprob.agency',
            purpose: 'Necessario. Ricorda le tue preferenze sui cookie.',
            duration: '6 mesi',
          },
          {
            name: '_ga, _ga_*',
            provider: 'Google Analytics 4',
            purpose: 'Statistica. Ci dice quante persone visitano il sito e quali pagine funzionano. Solo con consenso.',
            duration: 'Fino a 2 anni',
          },
          {
            name: '_fbp',
            provider: 'Meta Pixel',
            purpose: 'Marketing. Misura i risultati delle campagne su Facebook e Instagram. Solo con consenso.',
            duration: '3 mesi',
          },
        ],
        paragraphs: [
          'Con il consenso marketing inviamo a Meta gli stessi eventi anche dal nostro server (Conversions API), insieme a indirizzo IP e tipo di browser, per misurare le campagne in modo più affidabile.',
          'Sulla pagina Shopify Launch Sprint salviamo nella memoria di sessione del browser i parametri della campagna da cui arrivi (UTM): si cancellano quando chiudi la scheda.',
          'Il calendario per prenotare una videochiamata, presente nelle pagine di conferma, è fornito da TidyCal, che può impostare i propri cookie tecnici quando viene caricato.',
        ],
      },
      {
        title: 'Come gestire il consenso',
        paragraphs: [
          'Alla prima visita un banner ti chiede cosa vuoi attivare. Finché non accetti, i cookie di statistica e di marketing restano spenti. Puoi cambiare la tua scelta in qualsiasi momento da qui:',
        ],
        preferencesButton: true,
      },
      {
        title: 'Dal tuo browser',
        paragraphs: [
          'Puoi anche bloccare o cancellare i cookie dalle impostazioni del browser. Se cancelli il cookie tecnico, alla visita successiva ti verrà mostrato di nuovo il banner.',
        ],
      },
      {
        title: 'Per saperne di più',
        paragraphs: [
          `Come trattiamo i tuoi dati personali è spiegato nella [Privacy Policy](/it/privacy-policy). Per qualsiasi domanda scrivi a ${MAIL}.`,
        ],
      },
    ],
  },
  cookieTable: { name: 'Cookie', provider: 'Fornitore', purpose: 'A cosa serve', duration: 'Durata' },
  preferencesButton: 'Gestisci preferenze cookie',
}

const en: LegalCopy = {
  privacy: {
    seo: {
      title: 'Privacy Policy',
      description:
        'What data we collect on noprob.agency, why we use it, who we share it with and how to exercise your rights. The short version.',
    },
    eyebrow: 'Privacy Policy',
    title: 'Your data, ',
    titleEm: 'in short',
    updatedLabel: 'Last updated',
    summaryTitle: 'The short version',
    summary: [
      'We only collect the data you send us through our forms and, if you consent, analytics and marketing data.',
      'We use it to reply to you, review your request and understand how the site and our campaigns perform.',
      'We do not sell your data to anyone.',
      `You can ask us to see, correct or delete it by writing to ${MAIL}.`,
    ],
    sections: [
      {
        title: 'Who is responsible for your data',
        paragraphs: [
          'The data controller is **NOPROB AGENCY LLC**, 30 N Gould St Ste R, Sheridan, Wyoming (WY) 82801, USA, EIN 365136989.',
          `For any privacy question, write to ${MAIL}.`,
        ],
      },
      {
        title: 'What we collect',
        items: [
          '**Data you send us** by filling in a contact or application form: name, email, phone, company, website and the answers you give about your project.',
          '**Booking data**, if you schedule a video call from the calendar on our confirmation pages.',
          '**Technical browsing data**: IP address, browser and device type, pages visited. Data used for analytics and marketing is collected only with your consent (see the [Cookie Policy](/cookie-policy)).',
        ],
      },
      {
        title: 'Why we use it',
        items: [
          '**To reply to you and review your request or application**, including the confirmation email you receive after submitting. Legal basis: pre-contractual steps at your request.',
          '**To measure how the site and our ad campaigns perform**. Legal basis: your consent, which you can withdraw at any time.',
          '**To protect the site from spam and abuse**. Legal basis: our legitimate interest.',
        ],
        paragraphs: ['We do not use your data for any other purpose and we do not sell it.'],
      },
      {
        title: 'Who we share it with',
        paragraphs: ['Only with the providers we need to run the site:'],
        items: [
          '**Vercel**: website hosting.',
          '**Resend**: delivery of the emails generated by our forms.',
          '**Google Analytics 4**: usage statistics, only with your consent.',
          '**Meta (Pixel and Conversions API)**: campaign measurement, only with your consent.',
          '**TidyCal**: video call booking.',
          '**WhatsApp**: only if you choose to message us there.',
        ],
      },
      {
        title: 'Where your data is',
        paragraphs: [
          'Our company and some of these providers are based in the United States, so your data may be transferred outside the European Economic Area. When that happens, the transfer relies on the safeguards provided by the GDPR, such as standard contractual clauses or the EU-US Data Privacy Framework, where applicable.',
        ],
      },
      {
        title: 'How long we keep it',
        items: [
          '**Requests and applications**: for as long as needed to handle them and for any working relationship that follows. If we do not end up working together, we delete them within 24 months of our last contact.',
          '**Analytics and marketing data**: for the lifetime of the related cookies, listed in the [Cookie Policy](/cookie-policy).',
        ],
      },
      {
        title: 'Your rights',
        paragraphs: [
          'You can ask us at any time to access, correct or delete your data, restrict its use, receive a copy of it or object to the processing. You can also withdraw your consent to analytics and marketing from the cookie preferences.',
          `Write to ${MAIL}: we reply within 30 days. If you believe your data is being handled incorrectly, you can lodge a complaint with the data protection authority in your country.`,
        ],
      },
      {
        title: 'Changes to this page',
        paragraphs: ['If we change how we handle data, we update this page and the date at the top.'],
      },
    ],
  },
  cookie: {
    seo: {
      title: 'Cookie Policy',
      description:
        'Which cookies noprob.agency uses, what they are for, how long they last and how to change your preferences at any time. The short version.',
    },
    eyebrow: 'Cookie Policy',
    title: 'Cookies, ',
    titleEm: 'in short',
    updatedLabel: 'Last updated',
    summaryTitle: 'The short version',
    summary: [
      'We use a single technical cookie, which remembers your cookie choice.',
      'Analytics (Google Analytics) and marketing (Meta) cookies are switched on only if you consent.',
      'You can change your mind whenever you like with the "Manage cookie preferences" button on this page.',
    ],
    sections: [
      {
        title: 'What cookies are',
        paragraphs: [
          'They are small files a website stores in your browser to remember information between visits. Some are needed for the site to work, others measure visits or how well ad campaigns perform.',
        ],
      },
      {
        title: 'Which cookies we use',
        cookies: [
          {
            name: 'noprob_agency_consent',
            provider: 'noprob.agency',
            purpose: 'Necessary. Remembers your cookie preferences.',
            duration: '6 months',
          },
          {
            name: '_ga, _ga_*',
            provider: 'Google Analytics 4',
            purpose: 'Analytics. Tells us how many people visit the site and which pages work. Only with consent.',
            duration: 'Up to 2 years',
          },
          {
            name: '_fbp',
            provider: 'Meta Pixel',
            purpose: 'Marketing. Measures the results of our Facebook and Instagram campaigns. Only with consent.',
            duration: '3 months',
          },
        ],
        paragraphs: [
          'With marketing consent we also send the same events to Meta from our server (Conversions API), together with IP address and browser type, to measure campaigns more reliably.',
          'On the Shopify Launch Sprint page we store the campaign parameters you arrived with (UTM) in your browser session storage: they are deleted when you close the tab.',
          'The calendar used to book a video call on our confirmation pages is provided by TidyCal, which may set its own technical cookies when it loads.',
        ],
      },
      {
        title: 'How to manage consent',
        paragraphs: [
          'On your first visit a banner asks what you want to switch on. Until you accept, analytics and marketing cookies stay off. You can change your choice at any time from here:',
        ],
        preferencesButton: true,
      },
      {
        title: 'From your browser',
        paragraphs: [
          'You can also block or delete cookies from your browser settings. If you delete the technical cookie, the banner will be shown again on your next visit.',
        ],
      },
      {
        title: 'Learn more',
        paragraphs: [
          `How we handle your personal data is explained in the [Privacy Policy](/privacy-policy). For any question, write to ${MAIL}.`,
        ],
      },
    ],
  },
  cookieTable: { name: 'Cookie', provider: 'Provider', purpose: 'What it is for', duration: 'Duration' },
  preferencesButton: 'Manage cookie preferences',
}

export function getLegalCopy(locale: Locale): LegalCopy {
  return locale === 'it' ? it : en
}

export function formatLegalDate(locale: Locale): string {
  return new Intl.DateTimeFormat(locale === 'it' ? 'it-IT' : 'en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(`${LEGAL_LAST_UPDATED}T00:00:00Z`))
}
