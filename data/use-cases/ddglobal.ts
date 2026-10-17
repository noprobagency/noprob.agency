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
      text: 'Su WordPress ogni modifica era lenta e ogni ottimizzazione passava da plugin e tema. Da gennaio a luglio le sessioni sono rimaste ferme.',
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
    {
      type: 'list',
      items: [
        '**catalogo ordinato** per famiglie di prodotto e per brand, con schede tecniche PDF',
        '**italiano e inglese** collegati tra loro, per farsi trovare anche all’estero',
        '**listino prezzi riservato** con accesso dedicato ai clienti',
        '**file llms.txt**: il sito spiega agli assistenti AI chi è l’azienda e cosa vende',
      ],
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
    { type: 'cta' },
    { type: 'h2', text: 'Cosa insegna questo caso' },
    {
      type: 'paragraph',
      text: 'Una migrazione non serve solo a chi vende con il carrello. Per un’azienda B2B il sito è il primo commerciale: se è veloce da migliorare, ordinato e leggibile da Google e dagli assistenti AI, lavora per te ogni giorno. Con l’AI questo passaggio è alla portata di ogni catalogo.',
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
  ],
  sources: [
    'Sessioni: Google Analytics 4, proprietà ddglobalstore.com, primo mese dopo il lancio contro la media mensile da gennaio a luglio 2026.',
    'Posizione media (miglioramento in percentuale): Google Search Console, ultimi 28 giorni contro i 28 giorni prima del lancio. Impressioni: Google Search Console, 44 giorni dopo il lancio contro gli stessi giorni del 2025.',
  ],
  titleEn: 'AI Migration of a B2B eCommerce: the DDglobal Store Case, Sessions Quadrupled in the First Month',
  excerptEn:
    'The online catalog of DDglobal Store, a B2B company selling neoprene and technical fabrics, moved from WordPress to a new site with an AI migration. Faster changes, sessions quadrupled in the first month.',
  contentEn: [
    { type: 'paragraph', text: 'Sector: Neoprene and technical fabrics | B2B eCommerce' },
    { type: 'paragraph', text: 'Project: AI migration of the online catalog' },
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
      text: 'On WordPress every change was slow and every optimization went through plugins and the theme. From January to July sessions stayed flat.',
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
    {
      type: 'list',
      items: [
        '**an organized catalog** by product family and brand, with PDF data sheets',
        '**Italian and English** linked together, to be found abroad too',
        '**a reserved price list** with dedicated client access',
        '**an llms.txt file**: the site tells AI assistants who the company is and what it sells',
      ],
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
    { type: 'cta' },
    { type: 'h2', text: 'What this case teaches' },
    {
      type: 'paragraph',
      text: 'A migration is not only for those who sell with a cart. For a B2B company the website is the first salesperson: if it is fast to improve, organized and readable by Google and AI assistants, it works for you every day. With AI this step is within reach of every catalog.',
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
  ],
  sourcesEn: [
    'Sessions: Google Analytics 4, ddglobalstore.com property, first month after launch against the January to July 2026 monthly average.',
    'Average position (improvement in percent): Google Search Console, last 28 days against the 28 days before launch. Impressions: Google Search Console, 44 days after launch against the same days of 2025.',
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
