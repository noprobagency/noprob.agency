import type { UseCase } from './index'

/**
 * DDglobal Store case study: AI migration of a B2B catalog eCommerce (not Shopify).
 * Short, positive version (Antonio, 2026-10-13). Figures:
 * - GA4 sessions (Acquisizione traffico, monthly view): September 2026 about 4.1x the
 *   January → July 2026 monthly average, after the new site went live on 2026-08-29
 * - Google Search Console (API, exact): average position 9.4 → 7.9 (shown only as +16%),
 *   last 28 days vs the 28 days before go live; impressions 2.7x the same 44 days of 2025
 * Internal note in docs/dati-verificati.md: Google clicks were stable in the same period,
 * so the GA4 jump also reflects the new measurement; the copy says "sessions", never
 * "Google traffic".
 * Chart: scripts/generate-ddglobal-ga4-chart.mjs
 */
export const ddglobal: UseCase = {
  slug: 'ddglobal-store-migrazione-ai-ecommerce-b2b',
  title: 'Migrazione AI di un eCommerce B2B: il caso DDglobal Store, sessioni quadruplicate nel primo mese',
  seoTitle: 'Migrazione AI eCommerce B2B: DDglobal Store',
  seoTitleEn: 'AI migration of a B2B eCommerce: DDglobal Store',
  seoDescription:
    'Migrazione AI del catalogo B2B di DDglobal Store: modifiche più rapide, sessioni 4 volte la media nel primo mese, posizione su Google migliorata del 16%.',
  seoDescriptionEn:
    'AI migration of DDglobal Store’s B2B catalog: faster changes, sessions 4 times the average in the first month, Google position improved by 16%.',
  excerpt:
    'Il catalogo online di DDglobal Store, azienda B2B di neoprene e tessuti tecnici, portato da WordPress a un sito nuovo con una migrazione AI. Modifiche più rapide, sessioni quadruplicate nel primo mese.',
  image: '/images/originals/i9Ht9Hdb61eYmBH3DZyKGjIm6s.webp',
  imageAlt: 'Neoprene DDglobal Store, dettaglio del tessuto',
  caseType: 'Use Case',
  date: '2026-10-13',
  updated: '2026-10-13',
  about: ['Migrazione AI', 'eCommerce B2B', 'Catalogo online', 'SEO per eCommerce'],
  content: [
    { type: 'paragraph', text: 'Settore: Neoprene e tessuti tecnici | eCommerce B2B' },
    { type: 'paragraph', text: 'Progetto: migrazione AI del catalogo online' },
    { type: 'paragraph', text: 'Lingue: italiano e inglese' },
    { type: 'paragraph', text: 'Online dal: 29 agosto 2026' },
    {
      type: 'paragraph',
      text: '**In breve.** Abbiamo portato il catalogo di DDglobal Store dal vecchio WordPress a un sito nuovo, con una migrazione fatta con l’AI. Il sito si modifica e si ottimizza molto più in fretta, e nel primo mese le sessioni sono diventate 4 volte quelle di inizio anno.',
    },
    {
      type: 'list',
      items: [
        'sessioni nel primo mese dopo il lancio: **4 volte** la media di inizio anno',
        'posizione media su Google migliorata del **16%**, impressioni **2,7 volte** lo stesso periodo del 2025',
        'catalogo in **italiano e inglese**, leggibile anche dagli assistenti AI',
      ],
    },
    { type: 'h2', text: 'Il punto di partenza' },
    {
      type: 'paragraph',
      text: 'DDglobal Store vende neoprene, Yulex, trilaminati e tessuti tecnici alle aziende che producono per diving, watersports, nautica, outdoor e moda. Il sito è un catalogo B2B: il cliente trova il materiale, scarica la scheda tecnica e contatta il commerciale.',
    },
    {
      type: 'paragraph',
      text: 'In un catalogo senza carrello il sito fa il lavoro del primo commerciale: deve far trovare il materiale giusto in pochi clic, mettere subito a disposizione la scheda tecnica e rendere semplice il contatto con l’ufficio vendite. Il traguardo non è l’ordine online, è la richiesta di un professionista che ha già capito cosa gli serve.',
    },
    {
      type: 'paragraph',
      text: 'Su WordPress ogni modifica era lenta e ogni ottimizzazione passava da plugin e tema. Da gennaio a luglio le sessioni sono rimaste ferme.',
    },
    {
      type: 'paragraph',
      text: 'Il catalogo c’era, i clienti professionali anche: serviva un sito che si potesse migliorare alla velocità del lavoro commerciale.',
    },
    { type: 'h2', text: 'La migrazione AI' },
    {
      type: 'paragraph',
      text: 'Invece di ricostruire tutto a mano, abbiamo fatto il trasferimento con l’AI: stesso catalogo, struttura nuova, pensata per chi cerca un materiale preciso. Il nuovo sito è online dal 29 agosto 2026.',
    },
    {
      type: 'paragraph',
      text: 'Il vantaggio più grande si vede ogni giorno: modifiche e ottimizzazioni che prima richiedevano un intervento tecnico ora si fanno subito. Più velocità vuol dire più test, e più test vogliono dire un sito che migliora di continuo.',
    },
    { type: 'h3', text: 'Un catalogo ordinato per chi cerca un materiale' },
    {
      type: 'paragraph',
      text: 'Il catalogo è organizzato per famiglie di prodotto e per brand, con le schede tecniche in PDF da scaricare. Chi arriva cercando neoprene, Yulex o un trilaminato trova la famiglia giusta senza passare da un menu per l’altro, e la scheda tecnica è a un clic: per un acquirente tecnico è uno dei documenti che consulta prima di contattare il commerciale.',
    },
    { type: 'h3', text: 'Italiano e inglese, collegati tra loro' },
    {
      type: 'paragraph',
      text: 'Il sito esiste in italiano e in inglese, con le due versioni collegate tra loro (hreflang), così Google mostra a ciascun visitatore la lingua giusta e il catalogo si fa trovare anche all’estero. Con le due lingue la sitemap conta 831 URL (dato del 13 ottobre 2026).',
    },
    { type: 'h3', text: 'Un listino riservato, con accesso dedicato' },
    {
      type: 'paragraph',
      text: 'I prezzi non sono pubblici: il listino sta in un’area riservata, con accesso dedicato ai clienti. Il catalogo resta aperto a tutti, il listino solo a chi ha le credenziali.',
    },
    { type: 'h3', text: 'Leggibile dagli assistenti AI' },
    {
      type: 'paragraph',
      text: 'Il sito pubblica un file llms.txt che spiega agli assistenti AI chi è l’azienda e cosa vende. Chi cerca un materiale può chiederlo anche a un assistente: un catalogo che si fa leggere ha una possibilità in più di essere citato. Per il quadro generale leggi [come usare l’AI per l’eCommerce](/it/blog/ai-per-ecommerce).',
    },
    { type: 'h2', text: 'I risultati' },
    {
      type: 'image',
      src: '/images/use-case-ddglobal/ddglobal-ga4-it.png',
      alt: 'Google Analytics 4 di DDglobal Store: sessioni mensili da gennaio a settembre 2026, con il salto dopo la migrazione AI del 29 agosto',
      width: 1600,
      height: 900,
    },
    {
      type: 'paragraph',
      text: 'Otto mesi di linea piatta, poi il salto. Nel primo mese dopo il lancio le sessioni sono state 4 volte la media di inizio anno, e su Google la posizione media è migliorata del 16%, con le impressioni a 2,7 volte lo stesso periodo del 2025.',
    },
    { type: 'h3', text: 'Sessioni: il salto dopo il lancio' },
    {
      type: 'paragraph',
      text: 'Il grafico di Google Analytics 4 mostra le sessioni mensili da gennaio a settembre 2026. Come termine di paragone usiamo la media mensile da gennaio a luglio; settembre, il primo mese pieno dopo il lancio del 29 agosto, è circa 4 volte quella media.',
    },
    { type: 'h3', text: 'Google: posizione e impressioni' },
    {
      type: 'paragraph',
      text: 'In Search Console la posizione media è migliorata del 16% negli ultimi 28 giorni rispetto ai 28 giorni prima del lancio, e le impressioni dei primi 44 giorni sono 2,7 volte quelle degli stessi giorni del 2025. Le impressioni contano quante volte il sito compare nei risultati di ricerca: più compari, più occasioni hai di essere scelto.',
    },
    { type: 'h3', text: 'Come leggere questi numeri' },
    {
      type: 'paragraph',
      text: 'Le sessioni arrivano da Analytics e comprendono tutti i canali da cui si visita il sito, non solo Google. Posizione e impressioni arrivano da Search Console. Per riservatezza pubblichiamo percentuali e rapporti, non volumi.',
    },
    { type: 'h3', text: 'Cosa dice il cliente' },
    {
      type: 'paragraph',
      text: '“Collaborare con Antonio per la creazione del nostro sito eCommerce è stata un’esperienza estremamente positiva. Ha dimostrato grande professionalità, competenza tecnica e una notevole attenzione al dettaglio, riuscendo a trasformare le nostre idee in un eCommerce funzionale, moderno e performante.” Camilla Dudine, DDglobal Store.',
    },
    { type: 'h2', text: 'Cosa insegna questo caso' },
    {
      type: 'paragraph',
      text: 'Una migrazione non serve solo a chi vende con il carrello. Per un’azienda B2B il sito è il primo commerciale: se è veloce da migliorare, ordinato e leggibile da Google e dagli assistenti AI, lavora per te ogni giorno. Con l’AI questo passaggio è alla portata di ogni catalogo.',
    },
    {
      type: 'paragraph',
      text: 'La velocità è la leva che resta. Quando una modifica non richiede un intervento tecnico, si possono fare più test, e un sito che si testa di più migliora di più. È lo stesso principio dello Shopify Launch Sprint: un team che lavora in parallelo, un calendario fisso e dati misurati dal primo giorno.',
    },
    { type: 'h2', text: 'Questo modello funziona per te?' },
    {
      type: 'paragraph',
      text: 'Se vendi a professionisti con un catalogo ampio e schede tecniche, e il tuo sito attuale è lento da modificare, DDglobal Store è il caso che somiglia di più alla tua situazione. Se invece vendi con il carrello e vuoi passare a Shopify, il percorso è lo [Shopify Launch Sprint](/it/sprint-migrazione-shopify): store pronto in 14 giorni, prezzo pubblico, 4 garanzie scritte.',
    },
    {
      type: 'paragraph',
      text: 'Come impostiamo una migrazione: la [guida completa alla migrazione a Shopify](/it/migrazione-shopify). Per i casi con i numeri sulle vendite online leggi [Integratori DTC Nazzi](/it/casi-studio/integratori-nazzi-dtc-shopify), da WooCommerce, e [Cumini](/it/casi-studio/cumini-luxury-fashion-ecommerce), da piattaforma proprietaria.',
    },
    { type: 'cta' },
  ],
  faq: [
    {
      q: 'Si può fare una migrazione con l’AI per un eCommerce B2B senza carrello?',
      a: 'Sì. DDglobal Store è un catalogo B2B che porta il cliente al contatto commerciale. Lo abbiamo portato da WordPress a un sito nuovo con una migrazione AI, online dal 29 agosto 2026.',
    },
    {
      q: 'Cosa cambia dopo la migrazione?',
      a: 'Modifiche e ottimizzazioni molto più rapide. Per DDglobal Store le sessioni del primo mese sono state 4 volte la media di inizio anno, con la posizione media su Google migliorata del 16%.',
    },
    {
      q: 'Cos’è una migrazione AI?',
      a: 'È il trasferimento di un catalogo da un sito a uno nuovo fatto con l’aiuto dell’AI invece che a mano: stesso catalogo, struttura nuova. Per DDglobal Store ha significato un sito nuovo in italiano e inglese, online dal 29 agosto 2026.',
    },
    {
      q: 'Come avete misurato i risultati?',
      a: 'Le sessioni vengono da Google Analytics 4 e sono confrontate con la media mensile da gennaio a luglio 2026. Posizione media e impressioni vengono da Google Search Console, sugli stessi periodi del 2025 e sui 28 giorni prima del lancio.',
    },
    {
      q: 'Un catalogo B2B può avere il listino riservato?',
      a: 'Sì. Su DDglobal Store il catalogo è aperto a tutti e il listino prezzi sta in un’area riservata, con accesso dedicato ai clienti.',
    },
    {
      q: 'Il sito è leggibile dagli assistenti AI?',
      a: 'Il sito pubblica un file llms.txt che spiega agli assistenti AI chi è l’azienda e cosa vende, e il catalogo è ordinato per famiglie di prodotto, con schede tecniche in PDF.',
    },
    {
      q: 'E se vendo con il carrello e voglio passare a Shopify?',
      a: 'Il percorso è lo Shopify Launch Sprint: store su Shopify in 14 giorni, prezzo pubblico in base al fatturato (da €5.800, IVA esclusa) e 4 garanzie scritte.',
    },
  ],
  sources: [
    'Sessioni: Google Analytics 4, proprietà ddglobalstore.com, primo mese dopo il lancio contro la media mensile da gennaio a luglio 2026.',
    'Posizione media (miglioramento in percentuale): Google Search Console, ultimi 28 giorni contro i 28 giorni prima del lancio. Impressioni: Google Search Console, 44 giorni dopo il lancio contro gli stessi giorni del 2025.',
    'Sito pubblico: sitemap con 831 URL e hreflang italiano e inglese, file llms.txt, listino riservato e schede tecniche PDF, verificati il 13 ottobre 2026.',
    'Per riservatezza pubblichiamo solo variazioni percentuali e rapporti, non valori assoluti.',
  ],
  titleEn: 'AI Migration of a B2B eCommerce: the DDglobal Store Case, Sessions Quadrupled in the First Month',
  excerptEn:
    'The online catalog of DDglobal Store, a B2B company selling neoprene and technical fabrics, moved from WordPress to a new site with an AI migration. Faster changes, sessions quadrupled in the first month.',
  contentEn: [
    { type: 'paragraph', text: 'Sector: Neoprene and technical fabrics | B2B eCommerce' },
    { type: 'paragraph', text: 'Project: AI migration of the online catalog' },
    { type: 'paragraph', text: 'Languages: Italian and English' },
    { type: 'paragraph', text: 'Live since: August 29, 2026' },
    {
      type: 'paragraph',
      text: '**In short.** We moved the DDglobal Store catalog from the old WordPress to a new site, with a migration done with AI. The site is now much faster to change and optimize, and in the first month sessions became 4 times the early year level.',
    },
    {
      type: 'list',
      items: [
        'sessions in the first month after launch: **4 times** the early year average',
        'average Google position improved by **16%**, impressions **2.7 times** the same period of 2025',
        'catalog in **Italian and English**, readable by AI assistants too',
      ],
    },
    { type: 'h2', text: 'The starting point' },
    {
      type: 'paragraph',
      text: 'DDglobal Store sells neoprene, Yulex, trilaminates and technical fabrics to companies producing for diving, watersports, sailing, outdoor and fashion. The site is a B2B catalog: clients find the material, download the data sheet and contact sales.',
    },
    {
      type: 'paragraph',
      text: 'In a catalog without a cart the website does the job of the first salesperson: it has to help people find the right material in a few clicks, put the data sheet at hand and make contact with the sales office simple. The goal is not the online order, it is the request from a professional who already knows what they need.',
    },
    {
      type: 'paragraph',
      text: 'On WordPress every change was slow and every optimization went through plugins and the theme. From January to July sessions stayed flat.',
    },
    {
      type: 'paragraph',
      text: 'The catalog was there, and so were the professional clients: what was needed was a site that could be improved at the speed of the commercial work.',
    },
    { type: 'h2', text: 'The AI migration' },
    {
      type: 'paragraph',
      text: 'Instead of rebuilding everything by hand, we did the move with AI: same catalog, new structure, designed for people looking for a specific material. The new site has been live since August 29, 2026.',
    },
    {
      type: 'paragraph',
      text: 'The biggest gain shows every day: changes and optimizations that used to need a technical intervention now happen right away. More speed means more tests, and more tests mean a site that keeps getting better.',
    },
    { type: 'h3', text: 'A catalog organized for people looking for a material' },
    {
      type: 'paragraph',
      text: 'The catalog is organized by product family and brand, with PDF data sheets to download. Someone looking for neoprene, Yulex or a trilaminate finds the right family without hopping between menus, and the data sheet is one click away: for a technical buyer it is one of the documents they check before contacting sales.',
    },
    { type: 'h3', text: 'Italian and English, linked together' },
    {
      type: 'paragraph',
      text: 'The site exists in Italian and English, with the two versions linked together (hreflang), so Google shows each visitor the right language and the catalog can be found abroad too. With both languages the sitemap counts 831 URLs (as of October 13, 2026).',
    },
    { type: 'h3', text: 'A reserved price list with dedicated access' },
    {
      type: 'paragraph',
      text: 'Prices are not public: the price list sits in a reserved area, with dedicated client access. The catalog stays open to everyone, the price list only to people with credentials.',
    },
    { type: 'h3', text: 'Readable by AI assistants' },
    {
      type: 'paragraph',
      text: 'The site publishes an llms.txt file that tells AI assistants who the company is and what it sells. People looking for a material can also ask an assistant: a catalog that can be read has one more chance of being cited. For the bigger picture read [how to use AI for eCommerce](/blog/ai-for-ecommerce).',
    },
    { type: 'h2', text: 'The results' },
    {
      type: 'image',
      src: '/images/use-case-ddglobal/ddglobal-ga4-en.png',
      alt: 'Google Analytics 4 for DDglobal Store: monthly sessions from January to September 2026, with the jump after the AI migration of August 29',
      width: 1600,
      height: 900,
    },
    {
      type: 'paragraph',
      text: 'Eight months of flat line, then the jump. In the first month after launch sessions were 4 times the early year average, and on Google the average position improved by 16%, with impressions at 2.7 times the same period of 2025.',
    },
    { type: 'h3', text: 'Sessions: the jump after launch' },
    {
      type: 'paragraph',
      text: 'The Google Analytics 4 chart shows monthly sessions from January to September 2026. As a reference we use the January to July monthly average; September, the first full month after the August 29 launch, is about 4 times that average.',
    },
    { type: 'h3', text: 'Google: position and impressions' },
    {
      type: 'paragraph',
      text: 'In Search Console the average position improved by 16% in the last 28 days compared with the 28 days before launch, and impressions over the first 44 days are 2.7 times those of the same days of 2025. Impressions count how many times the site shows up in search results: the more you show up, the more chances you have to be chosen.',
    },
    { type: 'h3', text: 'How to read these numbers' },
    {
      type: 'paragraph',
      text: 'Sessions come from Analytics and include every channel people visit the site from, not only Google. Position and impressions come from Search Console. For confidentiality we publish percentages and ratios, not volumes.',
    },
    { type: 'h3', text: 'What the client says' },
    {
      type: 'paragraph',
      text: '“Collaborating with Antonio on the creation of our eCommerce website was an extremely positive experience. He demonstrated great professionalism, technical competence, and remarkable attention to detail, managing to transform our ideas into a functional, modern, and high-performing eCommerce website.” Camilla Dudine, DDglobal Store.',
    },
    { type: 'h2', text: 'What this case teaches' },
    {
      type: 'paragraph',
      text: 'A migration is not only for those who sell with a cart. For a B2B company the website is the first salesperson: if it is fast to improve, organized and readable by Google and AI assistants, it works for you every day. With AI this step is within reach of every catalog.',
    },
    {
      type: 'paragraph',
      text: 'Speed is the lever that stays. When a change does not need a technical intervention, you can run more tests, and a site that is tested more improves more. It is the same principle as the Shopify Launch Sprint: a team working in parallel, a fixed calendar and data measured from day one.',
    },
    { type: 'h2', text: 'Does this model work for you?' },
    {
      type: 'paragraph',
      text: 'If you sell to professionals with a wide catalog and data sheets, and your current site is slow to change, DDglobal Store is the case closest to your situation. If you sell with a cart and want to move to Shopify, the path is the [Shopify Launch Sprint](/shopify-migration-sprint): store ready in 14 days, public price, 4 written guarantees.',
    },
    {
      type: 'paragraph',
      text: 'How we run a migration: the [complete Shopify migration guide](/shopify-migration). For the cases with online sales numbers read [Supplement DTC Nazzi](/use-cases/integratori-nazzi-dtc-shopify), from WooCommerce, and [Cumini](/use-cases/cumini-luxury-fashion-ecommerce), from a proprietary platform.',
    },
    { type: 'cta' },
  ],
  faqEn: [
    {
      q: 'Can you do an AI migration for a B2B eCommerce without a cart?',
      a: 'Yes. DDglobal Store is a B2B catalog that brings clients to sales. We moved it from WordPress to a new site with an AI migration, live since August 29, 2026.',
    },
    {
      q: 'What changes after the migration?',
      a: 'Much faster changes and optimizations. For DDglobal Store, sessions in the first month were 4 times the early year average, with the average Google position improving by 16%.',
    },
    {
      q: 'What is an AI migration?',
      a: 'It is the transfer of a catalog from one site to a new one done with the help of AI instead of by hand: same catalog, new structure. For DDglobal Store it meant a new site in Italian and English, live since August 29, 2026.',
    },
    {
      q: 'How did you measure the results?',
      a: 'Sessions come from Google Analytics 4 and are compared with the January to July 2026 monthly average. Average position and impressions come from Google Search Console, against the same days of 2025 and the 28 days before launch.',
    },
    {
      q: 'Can a B2B catalog have a reserved price list?',
      a: 'Yes. On DDglobal Store the catalog is open to everyone and the price list sits in a reserved area, with dedicated client access.',
    },
    {
      q: 'Is the site readable by AI assistants?',
      a: 'The site publishes an llms.txt file that tells AI assistants who the company is and what it sells, and the catalog is organized by product family, with PDF data sheets.',
    },
    {
      q: 'What if I sell with a cart and want to move to Shopify?',
      a: 'The path is the Shopify Launch Sprint: your store on Shopify in 14 days, a public price by revenue (from €5,800, VAT excluded) and 4 written guarantees.',
    },
  ],
  sourcesEn: [
    'Sessions: Google Analytics 4, ddglobalstore.com property, first month after launch against the January to July 2026 monthly average.',
    'Average position (improvement in percent): Google Search Console, last 28 days against the 28 days before launch. Impressions: Google Search Console, 44 days after launch against the same days of 2025.',
    'Public site: sitemap with 831 URLs and Italian and English hreflang, llms.txt file, reserved price list and PDF data sheets, checked on October 13, 2026.',
    'For confidentiality we only publish percentage changes and ratios, not absolute values.',
  ],
  archive: {
    image: '/images/originals/i9Ht9Hdb61eYmBH3DZyKGjIm6s.webp',
    logo: '/images/originals/RWVPFhFtXLH5J1UMr53qg3AEzL8.svg',
    logoClass: 'h-[62px] w-[140px] object-contain',
    metrics: {
      en: ['4x sessions in the first month', 'AI migration, B2B'],
      it: ['4x sessioni nel primo mese', 'Migrazione AI, B2B'],
    },
  },
}
