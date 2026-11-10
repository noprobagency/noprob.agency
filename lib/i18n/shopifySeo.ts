import type { Locale } from '@/lib/i18n'

/**
 * Copy module for the "Shopify SEO Agency" landing page.
 * Routes: en -> /shopify-seo-agency, it -> /it/agenzia-seo-shopify.
 *
 * Offer approved by Antonio (10 Nov 2026): SEO work on Shopify, no price, CTA to a
 * call. For stores already on Shopify. Not the Shopify Launch Sprint (migration,
 * 14 days, 4 written guarantees) and not the Data-Driven Team (dedicated team
 * across several functions).
 *
 * Facts used (docs/dati-verificati.md): Integratori DTC Nazzi, Search Console via
 * API, 28 days to 9 Oct 2026 vs the same 28 days of 2025 and vs the 28 days before
 * go-live (21 Jun to 18 Jul 2026): clicks 2.7x and +41%, impressions 4.0x,
 * position improved 21% (published as a percentage only, never as a point
 * position). Already published in the case study. The Sprint guarantee quoted
 * word for word comes from the "Garanzie dello Sprint" section. Antonio's
 * statements: 7+ years of eCommerce projects, team of specialists in Shopify,
 * marketing, advertising and SEO.
 * No prices, no absolute client volumes, no promised rankings or timelines.
 *
 * Markdown links `[text](/path)` are allowed in string values. EN leads, IT is
 * the same content adapted (house style IT: "videochiamata", no "business").
 */

export type ShopifySeoCopy = {
  hero: {
    eyebrow: string
    h1: string
    paragraph: string
    ctaPrimary: string
    ctaSecondary: string
  }
  why: {
    heading: string
    intro: string
    rows: { label: string; problem: string; whatWeDo: string }[]
  }
  scope: {
    heading: string
    intro: string
    items: { title: string; body: string; bullets: string[] }[]
  }
  method: {
    heading: string
    steps: { title: string; body: string }[]
  }
  proof: {
    heading: string
    body: string
    items: { client: string; result: string; href: string }[]
  }
  faq: { heading: string; items: { q: string; a: string }[] }
  finalCta: { heading: string; body: string; button: string; secondary: string }
}

const en: ShopifySeoCopy = {
  hero: {
    eyebrow: 'Shopify SEO agency',
    h1: 'Shopify SEO agency: search work built for your store',
    paragraph:
      'We are a Shopify SEO agency for eCommerce brands that already sell on Shopify. Our Shopify SEO services cover technical SEO, collections and product pages, blog content, visibility in AI answers, and redirects that protect your search traffic when you restructure, all measured in Google Search Console. There is no package and no price list: we look at your store first and define the work together on a call.',
    ctaPrimary: 'Book a call',
    ctaSecondary: 'See what the work covers',
  },
  why: {
    heading: 'Why Shopify SEO is its own job',
    intro:
      'Shopify fixes part of your site structure for you, and that changes what SEO work is worth doing. Some things you cannot change, so the effort goes where you can. The [Shopify SEO documentation](https://help.shopify.com/en/manual/promoting-marketing/seo) describes the platform side. This is what we check in a Shopify store.',
    rows: [
      {
        label: 'Fixed URL paths',
        problem:
          'Product pages live under /products/ and collections under /collections/ in every Shopify store, and the prefix is not editable.',
        whatWeDo:
          'We work on what you control: clear handles, a collection structure that matches how people search, and a 301 redirect whenever a handle changes.',
      },
      {
        label: 'One product, several paths',
        problem:
          'A product can be reached from its own page and from the collection it sits in, so the same page can exist under two addresses. Themes from the Shopify Theme Store handle the canonical tags on their own.',
        whatWeDo:
          'On custom templates and customized designs we check that the canonical tags work and that internal links use the main URL, so Google reads one page, not two.',
      },
      {
        label: 'Variants',
        problem:
          'Sizes and colors share one product page, so a single page has to carry everything people search for across all variants.',
        whatWeDo:
          'We write the product page for the searches around the whole product, and we keep variant names clean and consistent.',
      },
      {
        label: 'Apps and speed',
        problem:
          'Apps can add scripts to your storefront, and each one has a loading cost.',
        whatWeDo:
          'We list what loads on your pages, remove what is not earning its place, and keep the apps that do.',
      },
      {
        label: 'Sitemap and indexing',
        problem:
          'Shopify generates your sitemap.xml for you, so you do not build it by hand, and what ends up indexed depends on how the store is set up. The [Shopify guide to the sitemap](https://help.shopify.com/en/manual/promoting-marketing/seo/find-site-map) explains where to find it.',
        whatWeDo:
          'We check in Search Console which pages are indexed and make sure the pages that sell are the ones listed.',
      },
    ],
  },
  scope: {
    heading: 'Shopify SEO services: what the work covers',
    intro:
      'Our Shopify SEO services cover five areas, and we pick the order from what your store needs most. You can start from one and add the others. Not on Shopify yet? Our [Shopify migration service](/shopify-migration-sprint) comes first.',
    items: [
      {
        title: 'Technical SEO on Shopify',
        body: 'The base that lets Google crawl, read and index your store correctly.',
        bullets: [
          'Page titles and meta descriptions, written per template and per page that matters',
          'Structured data (schema) for products, collections and the blog',
          'Sitemap and indexing checked in Search Console',
          'Page speed and the apps that slow it down',
          'Redirects and broken links',
        ],
      },
      {
        title: 'Collections and product pages',
        body: 'These are the pages that rank and sell, so they get the most careful work.',
        bullets: [
          'Collection pages built around the searches your customers actually make',
          'Product descriptions, titles and images written for people first',
          'Internal links between collections, products and the blog',
          'Clean variant naming and one canonical address per product',
        ],
      },
      {
        title: 'Blog content with verified data',
        body: 'Articles that answer real questions in your category and bring people to your products.',
        bullets: [
          'Topics chosen from Search Console and from the questions your customers ask',
          'Every figure traced to a source we link, never invented',
          'Internal links from each article to the right collection or product',
          'Articles updated when the facts change',
        ],
      },
      {
        title: 'Visibility in AI answers (GEO)',
        body: 'AI-driven traffic and orders to Shopify stores tripled year on year in the second quarter of 2026, according to [Digital Commerce 360](https://www.digitalcommerce360.com/2026/08/06/how-shopify-is-approaching-agentic-ai-2026/), which attributes it to Shopify’s president. So the store has to be easy for assistants to read and quote.',
        bullets: [
          'Pages that open with a direct, citable answer',
          'Clear entities: brand, products, policies, shipping',
          'An llms.txt file that points assistants to your key pages',
          'The sitemap Shopify prepares for AI assistants (agentic discovery) checked and in place',
        ],
      },
      {
        title: 'Redirects, traffic protection and measurement',
        body: 'When you restructure collections, handles or templates inside Shopify, the redirect map decides how much of your search traffic carries over. Search Console is where we measure it. How we plan redirects is in our [Shopify migration guide](/shopify-migration).',
        bullets: [
          'Map of old addresses to new ones, with 301 redirects',
          'Check of the old addresses after the change',
          'Search Console set up and watched before, during and after the change',
          'Reports with percentages and the comparison period stated',
        ],
      },
    ],
  },
  method: {
    heading: 'How we work on your Shopify SEO',
    steps: [
      {
        title: 'We read your store and your data',
        body: 'We start from Search Console and a crawl of the store: what is indexed, what ranks, which pages bring people in and which ones should.',
      },
      {
        title: 'We fix the base first',
        body: 'Indexing, redirects, titles, schema and speed come before new content. A good page on a weak base wastes effort.',
      },
      {
        title: 'We work on the pages that sell',
        body: 'Collections and product pages first, then the blog around them, with sources for every number.',
      },
      {
        title: 'We prepare the store for AI answers',
        body: 'Citable pages, clear entities and llms.txt, so assistants can find and quote your store.',
      },
      {
        title: 'We measure and show it',
        body: 'You get Search Console results as percentages, with the comparison period written next to each one, so you can check them yourself.',
      },
    ],
  },
  proof: {
    heading: 'What happened in search on a store we moved to Shopify',
    body: 'Supplement DTC Nazzi is a store we migrated from WooCommerce to Shopify, with a carefully built 301 redirect map, and we measured the outcome in Google Search Console. This is what happened to its search results, as percentages, with the period stated.',
    items: [
      {
        client: 'Supplement DTC Nazzi (WooCommerce to Shopify), clicks from Google',
        result:
          '2.7x the clicks of the same 28 days of 2025, and +41% against the 28 days before go-live (28 days to October 9, 2026).',
        href: '/use-cases/integratori-nazzi-dtc-shopify',
      },
      {
        client: 'Supplement DTC Nazzi (WooCommerce to Shopify), impressions and position',
        result:
          'Impressions 4x the same 28 days of 2025. Average position improved by 21% against the 28 days before go-live (28 days to October 9, 2026).',
        href: '/use-cases/integratori-nazzi-dtc-shopify',
      },
    ],
  },
  faq: {
    heading: 'Shopify SEO agency: questions we get asked',
    items: [
      {
        q: 'How much do your Shopify SEO services cost?',
        a: 'There is no price list, because the work depends on your store: its size, its state and what you want to work on first. We define scope and cost on a call, after we have seen your store.',
      },
      {
        q: 'What does a Shopify SEO company like noprob agency actually do?',
        a: 'We work on five areas: technical SEO, collections and product pages, blog content, visibility in AI answers, and traffic protection with Search Console measurement. We start from your data and pick the order together. You can begin with one area.',
      },
      {
        q: 'Do you guarantee rankings?',
        a: 'We commit to what we control: a defined plan, the changes made in your store, and results reported from Search Console with the comparison period written next to every figure.',
      },
      {
        q: 'How do you measure the results?',
        a: 'With Google Search Console, which shows how your store performs in Google search. We report clicks, impressions and average position as percentage changes over a stated period, so you can compare them with your own data.',
      },
      {
        q: 'Our store is not on Shopify yet. Can you help?',
        a: 'This service is for stores already on Shopify. If you still have to move, the [Shopify Launch Sprint](/shopify-migration-sprint) moves your store to Shopify in 14 days with our Custom AI System, and it protects your search traffic during the move. One of its 4 written guarantees reads: “Organic traffic below the baseline 90 days after go-live? We work for free until it comes back.” That guarantee belongs to the Sprint.',
      },
      {
        q: 'How is this different from the Data-Driven Team?',
        a: 'This page is focused SEO work on your Shopify store. The [Data-Driven Team](/data-driven-team) is a dedicated team that works across several functions of your store. Many brands start with SEO, and some add the team later.',
      },
      {
        q: 'What do you need from us?',
        a: 'A call to look at your store, read access to Google Search Console, and one person on your side who can approve changes. We handle the audit, the changes and the reporting.',
      },
    ],
  },
  finalCta: {
    heading: 'Tell us which pages should be bringing you more search traffic',
    body: 'On the call we look at your Shopify store, tell you where the SEO work would start and agree the scope. No package and no template: a plan for your store.',
    button: 'Book a call',
    secondary:
      'Not on Shopify yet? See the [Shopify Launch Sprint](/shopify-migration-sprint).',
  },
}

const it: ShopifySeoCopy = {
  hero: {
    eyebrow: 'Agenzia SEO Shopify',
    h1: 'Agenzia SEO Shopify: il lavoro sulla ricerca costruito per il tuo store',
    paragraph:
      'Siamo un’agenzia SEO Shopify per brand eCommerce che vendono già su Shopify. I nostri servizi SEO per Shopify coprono SEO tecnica, collezioni e schede prodotto, contenuti del blog, visibilità nelle risposte AI e redirect che proteggono il traffico dalla ricerca quando ristrutturi, tutto misurato in Google Search Console. Non c’è un pacchetto né un listino: guardiamo prima il tuo store e definiamo il lavoro insieme in videochiamata.',
    ctaPrimary: 'Prenota una videochiamata',
    ctaSecondary: 'Vedi cosa copre il lavoro',
  },
  why: {
    heading: 'Perché la SEO su Shopify è un lavoro a sé',
    intro:
      'Shopify fissa per te una parte della struttura del sito, e questo cambia quale lavoro SEO vale la pena fare. Alcune cose non si possono cambiare, quindi l’impegno va dove si può. La [documentazione SEO di Shopify](https://help.shopify.com/en/manual/promoting-marketing/seo) descrive il lato piattaforma. Questo è ciò che controlliamo in uno store Shopify.',
    rows: [
      {
        label: 'Percorsi URL fissi',
        problem:
          'Le schede prodotto stanno sotto /products/ e le collezioni sotto /collections/ in ogni store Shopify, e il prefisso non si modifica.',
        whatWeDo:
          'Lavoriamo su ciò che controlli: handle chiari, una struttura di collezioni che segue come cerca la gente e un redirect 301 ogni volta che un handle cambia.',
      },
      {
        label: 'Un prodotto, più percorsi',
        problem:
          'Un prodotto si raggiunge dalla sua pagina e dalla collezione in cui si trova, quindi la stessa pagina può esistere con due indirizzi. I temi dello Shopify Theme Store gestiscono da soli i tag canonical.',
        whatWeDo:
          'Su template personalizzati e design modificati verifichiamo che i tag canonical funzionino e che i link interni usino l’URL principale, così Google legge una pagina, non due.',
      },
      {
        label: 'Varianti',
        problem:
          'Taglie e colori condividono una sola pagina di prodotto, quindi una sola pagina deve contenere tutto ciò che la gente cerca su tutte le varianti.',
        whatWeDo:
          'Scriviamo la scheda per le ricerche attorno all’intero prodotto e teniamo i nomi delle varianti puliti e coerenti.',
      },
      {
        label: 'App e velocità',
        problem:
          'Le app possono aggiungere script allo store, e ognuno ha un costo di caricamento.',
        whatWeDo:
          'Elenchiamo cosa si carica sulle tue pagine, togliamo ciò che non si guadagna il posto e teniamo le app che lo fanno.',
      },
      {
        label: 'Sitemap e indicizzazione',
        problem:
          'Shopify genera la sitemap.xml al posto tuo, quindi non la costruisci a mano, e ciò che finisce nell’indice dipende da come è impostato lo store. La [guida Shopify alla sitemap](https://help.shopify.com/it/manual/promoting-marketing/seo/find-site-map) spiega dove trovarla.',
        whatWeDo:
          'Controlliamo in Search Console quali pagine risultano indicizzate e ci assicuriamo che le pagine che vendono siano quelle elencate.',
      },
    ],
  },
  scope: {
    heading: 'Servizi SEO per Shopify: cosa copre il lavoro',
    intro:
      'I nostri servizi SEO per Shopify coprono cinque aree, e scegliamo l’ordine in base a ciò che serve di più al tuo store. Puoi partire da una e aggiungere le altre. Non sei ancora su Shopify? Prima viene il nostro [servizio di migrazione a Shopify](/it/sprint-migrazione-shopify).',
    items: [
      {
        title: 'SEO tecnica su Shopify',
        body: 'La base che permette a Google di scansionare, leggere e indicizzare bene il tuo store.',
        bullets: [
          'Title e meta description, scritti per template e per le pagine che contano',
          'Dati strutturati (schema) per prodotti, collezioni e blog',
          'Sitemap e indicizzazione verificate in Search Console',
          'Velocità delle pagine e app che la rallentano',
          'Redirect e link rotti',
        ],
      },
      {
        title: 'Collezioni e schede prodotto',
        body: 'Sono le pagine che si posizionano e vendono, quindi hanno il lavoro più attento.',
        bullets: [
          'Pagine collezione costruite attorno alle ricerche che i tuoi clienti fanno davvero',
          'Descrizioni, title e immagini dei prodotti scritti prima di tutto per le persone',
          'Link interni tra collezioni, prodotti e blog',
          'Nomi delle varianti puliti e un solo indirizzo canonico per prodotto',
        ],
      },
      {
        title: 'Contenuti del blog con dati verificati',
        body: 'Articoli che rispondono a domande vere della tua categoria e portano le persone ai tuoi prodotti.',
        bullets: [
          'Argomenti scelti da Search Console e dalle domande dei tuoi clienti',
          'Ogni cifra riportata a una fonte che linkiamo, mai inventata',
          'Link interni da ogni articolo alla collezione o al prodotto giusto',
          'Articoli aggiornati quando i fatti cambiano',
        ],
      },
      {
        title: 'Visibilità nelle risposte AI (GEO)',
        body: 'Traffico e ordini AI-driven verso gli store Shopify sono triplicati su base annua nel secondo trimestre 2026, secondo [Digital Commerce 360](https://www.digitalcommerce360.com/2026/08/06/how-shopify-is-approaching-agentic-ai-2026/), che lo attribuisce al presidente di Shopify. Quindi lo store deve essere facile da leggere e citare per gli assistenti.',
        bullets: [
          'Pagine che si aprono con una risposta diretta e citabile',
          'Entità chiare: brand, prodotti, policy, spedizioni',
          'Un file llms.txt che indirizza gli assistenti alle tue pagine chiave',
          'La sitemap che Shopify prepara per gli assistenti AI (agentic discovery) verificata e attiva',
        ],
      },
      {
        title: 'Redirect, protezione del traffico e misura',
        body: 'Quando ristrutturi collezioni, handle o template dentro Shopify, la mappa dei redirect decide quanto del traffico dalla ricerca si conserva. Search Console è dove lo misuriamo. Come pianifichiamo i redirect è nella nostra [guida alla migrazione a Shopify](/it/migrazione-shopify).',
        bullets: [
          'Mappa dei vecchi indirizzi verso i nuovi, con redirect 301',
          'Controllo dei vecchi indirizzi dopo il cambio',
          'Search Console impostata e tenuta d’occhio prima, durante e dopo il cambio',
          'Report con percentuali e periodo di confronto dichiarato',
        ],
      },
    ],
  },
  method: {
    heading: 'Come lavoriamo sulla SEO del tuo Shopify',
    steps: [
      {
        title: 'Leggiamo il tuo store e i tuoi dati',
        body: 'Partiamo da Search Console e da una scansione dello store: cosa è indicizzato, cosa si posiziona, quali pagine portano persone e quali dovrebbero.',
      },
      {
        title: 'Sistemiamo prima la base',
        body: 'Indicizzazione, redirect, title, schema e velocità vengono prima dei contenuti nuovi. Una bella pagina su una base debole spreca lavoro.',
      },
      {
        title: 'Lavoriamo sulle pagine che vendono',
        body: 'Prima collezioni e schede prodotto, poi il blog attorno a loro, con la fonte per ogni numero.',
      },
      {
        title: 'Prepariamo lo store alle risposte AI',
        body: 'Pagine citabili, entità chiare e llms.txt, così gli assistenti possono trovare e citare il tuo store.',
      },
      {
        title: 'Misuriamo e lo mostriamo',
        body: 'Ricevi i risultati di Search Console in percentuale, con il periodo di confronto scritto accanto a ciascuno, così puoi verificarli da solo.',
      },
    ],
  },
  proof: {
    heading: 'Cosa è successo nella ricerca su uno store che abbiamo portato su Shopify',
    body: 'Integratori DTC Nazzi è uno store che abbiamo migrato da WooCommerce a Shopify, con una mappa di redirect 301 curata, e abbiamo misurato l’esito in Google Search Console. Questo è ciò che è successo ai suoi risultati nella ricerca, in percentuale, con il periodo dichiarato.',
    items: [
      {
        client: 'Integratori DTC Nazzi (da WooCommerce a Shopify), clic da Google',
        result:
          '2,7 volte i clic degli stessi 28 giorni del 2025, e +41% rispetto ai 28 giorni prima del go-live (28 giorni fino al 9 ottobre 2026).',
        href: '/it/casi-studio/integratori-nazzi-dtc-shopify',
      },
      {
        client: 'Integratori DTC Nazzi (da WooCommerce a Shopify), impressioni e posizione',
        result:
          'Impressioni 4 volte quelle degli stessi 28 giorni del 2025. Posizione media migliorata del 21% rispetto ai 28 giorni prima del go-live (28 giorni fino al 9 ottobre 2026).',
        href: '/it/casi-studio/integratori-nazzi-dtc-shopify',
      },
    ],
  },
  faq: {
    heading: 'Agenzia SEO Shopify: le domande che ci fanno',
    items: [
      {
        q: 'Quanto costano i vostri servizi SEO per Shopify?',
        a: 'Non c’è un listino, perché il lavoro dipende dal tuo store: dimensione, stato e da cosa vuoi partire. Definiamo ambito e costo in videochiamata, dopo aver visto il tuo store.',
      },
      {
        q: 'Cosa fa davvero un’agenzia SEO Shopify come noprob agency?',
        a: 'Lavoriamo su cinque aree: SEO tecnica, collezioni e schede prodotto, contenuti del blog, visibilità nelle risposte AI, protezione del traffico con misura in Search Console. Partiamo dai tuoi dati e scegliamo l’ordine insieme. Puoi iniziare da un’area sola.',
      },
      {
        q: 'Garantite le posizioni?',
        a: 'Ci impegniamo su ciò che controlliamo: un piano definito, le modifiche fatte nel tuo store e risultati riportati da Search Console con il periodo di confronto scritto accanto a ogni cifra.',
      },
      {
        q: 'Come misurate i risultati?',
        a: 'Con Google Search Console, che mostra come va il tuo store nella ricerca Google. Riportiamo clic, impressioni e posizione media come variazioni percentuali su un periodo dichiarato, così le confronti con i tuoi dati.',
      },
      {
        q: 'Il nostro store non è ancora su Shopify. Potete aiutarci?',
        a: 'Questo servizio è per store già su Shopify. Se devi ancora migrare, lo [Shopify Launch Sprint](/it/sprint-migrazione-shopify) porta il tuo store su Shopify in 14 giorni con il nostro Custom AI System e protegge il traffico dalla ricerca durante il passaggio. Una delle sue 4 garanzie scritte dice: “Traffico organico sotto la baseline a 90 giorni dal go-live? Lavoriamo gratis finché non torna.” Quella garanzia appartiene allo Sprint.',
      },
      {
        q: 'In cosa è diverso dal Data-Driven Team?',
        a: 'Questa pagina riguarda lavoro SEO mirato sul tuo store Shopify. Il [Data-Driven Team](/it/team-ecommerce-dedicato) è un team dedicato che lavora su più funzioni del tuo store. Molti brand partono dalla SEO e alcuni aggiungono il team più avanti.',
      },
      {
        q: 'Cosa vi serve da parte nostra?',
        a: 'Una videochiamata per guardare il tuo store, l’accesso in lettura a Google Search Console e una persona dalla tua parte che possa approvare le modifiche. All’audit, alle modifiche e ai report pensiamo noi.',
      },
    ],
  },
  finalCta: {
    heading: 'Dicci quali pagine dovrebbero portarti più traffico dalla ricerca',
    body: 'In videochiamata guardiamo il tuo store Shopify, ti diciamo da dove partirebbe il lavoro SEO e concordiamo l’ambito. Nessun pacchetto, nessun modello: un piano per il tuo store.',
    button: 'Prenota una videochiamata',
    secondary:
      'Non sei ancora su Shopify? Guarda lo [Shopify Launch Sprint](/it/sprint-migrazione-shopify).',
  },
}

const COPY: Record<Locale, ShopifySeoCopy> = { en, it }

export function getShopifySeoCopy(locale: Locale): ShopifySeoCopy {
  return COPY[locale]
}
