import type { UseCase } from './index'

/**
 * DDglobal Store case study: AI migration of a B2B catalog eCommerce (not Shopify).
 *
 * Rule: no direct company figures, only ratios. Source: Google Search Console export of
 * ddglobalstore.com (daily, 2025-06-12 → 2026-10-11) in data/use-cases/ddglobal-gsc-daily.json.
 * Go live of the new site: 2026-08-29. Recomputed on 2026-10-13:
 * - 44 days after go live vs 44 days before: clicks/day 15.7 vs 15.5 (+1%), impressions +5%,
 *   impression weighted position 8.3 vs 9.3
 * - last 28 days (Sep 14 → Oct 11) vs 28 days before go live (Jul 31 → Aug 27): clicks +17%,
 *   impressions +7%, position 7.9 vs 9.4
 * - 44 days after go live vs the same days of 2025: clicks +55%, impressions 2.7x, position 8.3 vs 12.6
 * - September 2026 vs September 2025: clicks +54%
 * GA4 showed about 4x sessions in September, but Google clicks were flat: likely a measurement
 * change with the new site, so it is NOT used as a result.
 * Public site checked on 2026-10-13: 831 URLs in the sitemap with IT/EN hreflang, llms.txt,
 * reserved price list, downloadable PDF data sheets.
 * Chart: scripts/generate-ddglobal-gsc-chart.mjs
 */
export const ddglobal: UseCase = {
  slug: 'ddglobal-store-migrazione-ai-ecommerce-b2b',
  title: 'Migrazione AI di un eCommerce B2B: il caso DDglobal Store, nessun clic perso e posizioni migliori su Google',
  excerpt:
    'Come abbiamo portato il catalogo online di DDglobal Store, azienda B2B di neoprene e tessuti tecnici, dal vecchio WordPress a un sito nuovo con una migrazione AI, senza perdere traffico da Google. Con i dati di Search Console prima e dopo.',
  image: '/images/originals/i9Ht9Hdb61eYmBH3DZyKGjIm6s.webp',
  imageAlt: 'Neoprene DDglobal Store, dettaglio del tessuto',
  caseType: 'Use Case',
  date: '2026-10-13',
  updated: '2026-10-13',
  about: ['Migrazione AI', 'eCommerce B2B', 'SEO per eCommerce', 'Catalogo online', 'Neoprene e tessuti tecnici'],
  content: [
    { type: 'paragraph', text: 'Settore: Neoprene e tessuti tecnici | eCommerce B2B' },
    { type: 'paragraph', text: 'Progetto: migrazione AI del catalogo online, SEO, struttura bilingue' },
    { type: 'paragraph', text: 'Online dal: 29 agosto 2026' },
    {
      type: 'paragraph',
      text: '**In breve.** DDglobal Store vende neoprene e tessuti tecnici alle aziende. Il 29 agosto 2026 abbiamo portato il suo catalogo online dal vecchio WordPress a un sito nuovo, con una migrazione fatta con l’AI. Su Google non si è perso un clic: negli ultimi 28 giorni i clic sono il 17% in più dei 28 giorni prima del lancio e la posizione media è passata da 9,4 a 7,9. I dati vengono da Google Search Console e sono in forma relativa: le fonti sono in fondo alla pagina.',
    },
    {
      type: 'paragraph',
      text: 'Non tutti gli eCommerce hanno un carrello. Nel B2B il sito spesso è il primo commerciale dell’azienda: deve farsi trovare, spiegare bene i prodotti e portare il cliente al contatto. E una migrazione fatta male lo spegne proprio dove conta, su Google.',
    },
    { type: 'paragraph', text: 'Dopo il lancio del nuovo sito, secondo Google Search Console:' },
    {
      type: 'list',
      items: [
        'clic da Google negli ultimi 28 giorni: **+17%** rispetto ai 28 giorni prima del lancio',
        'posizione media: da **9,4 a 7,9** nello stesso confronto',
        'nei 44 giorni dopo il lancio, rispetto agli stessi giorni del 2025: clic **+55%**, impressioni **2,7 volte**',
        'clic di settembre 2026: **+54%** su settembre 2025',
      ],
    },
    { type: 'h2', text: 'Il punto di partenza' },
    {
      type: 'paragraph',
      text: 'DDglobal Store è un’azienda B2B italiana di San Canzian d’Isonzo, in provincia di Gorizia. Vende neoprene, Yulex, trilaminati, tessuti tecnici e componenti a chi produce per diving, watersports, nautica, outdoor, moda e ortopedia.',
    },
    {
      type: 'paragraph',
      text: 'Online non si compra: il sito è un catalogo. Il cliente trova il materiale, scarica la scheda tecnica, chiede un campione e contatta il commerciale via email o WhatsApp. I prezzi stanno in un listino riservato.',
    },
    {
      type: 'paragraph',
      text: 'Il vecchio sito era su WordPress e su Google andava già bene: da inizio 2026 i clic crescevano mese dopo mese. Il rischio della migrazione era tutto lì. Cambiare sito e perdere quella posizione.',
    },
    { type: 'h2', text: 'La migrazione AI' },
    {
      type: 'paragraph',
      text: 'Invece di ricostruire tutto a mano, abbiamo fatto il trasferimento con l’AI: dal vecchio WordPress a un sito nuovo, con lo stesso catalogo e una struttura pensata per chi cerca un materiale preciso.',
    },
    { type: 'paragraph', text: 'Il 29 agosto 2026 il nuovo sito è andato online. Oggi ha:' },
    {
      type: 'list',
      items: [
        '**un catalogo ordinato** per famiglie di prodotto (neoprene, Yulex, trilaminati e tessuti, componenti, ricambi) e per brand',
        '**schede tecniche PDF** scaricabili dalle pagine prodotto e un campionario di colori e finiture',
        '**due lingue, italiano e inglese**, collegate tra loro con hreflang: la sitemap conta 831 indirizzi',
        '**un listino prezzi riservato**, accessibile con login e tenuto fuori dai motori di ricerca',
        '**un file llms.txt** che spiega agli assistenti AI chi è l’azienda, cosa vende e come indirizzare chi chiede prezzi',
      ],
    },
    { type: 'h2', text: 'I risultati su Google' },
    {
      type: 'image',
      src: '/images/use-case-ddglobal/ddglobal-search-console-it.png',
      alt: 'Google Search Console di DDglobal Store: clic e impressioni da giugno 2025 a ottobre 2026, prima e dopo la migrazione AI del 29 agosto 2026',
      width: 1600,
      height: 960,
    },
    {
      type: 'paragraph',
      text: 'Questo è il grafico di Search Console di DDglobal Store, dagli export reali. La linea tratteggiata è il giorno del lancio.',
    },
    {
      type: 'paragraph',
      text: 'La prima cosa da guardare è quella che non succede: dopo il 29 agosto non c’è nessun crollo. Nei 44 giorni dopo il lancio i clic al giorno sono gli stessi dei 44 giorni prima, e la posizione media migliora già da 9,3 a 8,3.',
    },
    {
      type: 'paragraph',
      text: 'Poi la curva sale. Negli ultimi 28 giorni i clic sono il 17% in più dei 28 giorni prima del lancio, con una posizione media di 7,9 contro 9,4.',
    },
    {
      type: 'paragraph',
      text: 'Rispetto a un anno fa la differenza è più grande, clic +55% e impressioni 2,7 volte, ma non è tutto merito della migrazione: il sito cresceva già da inizio 2026. La migrazione ha protetto quella crescita e l’ha spinta un passo più avanti.',
    },
    { type: 'cta' },
    { type: 'h2', text: 'Cosa insegna questo caso' },
    {
      type: 'paragraph',
      text: 'Una migrazione non serve solo a chi vende con il carrello. Per un’azienda B2B il sito è il punto in cui un buyer decide se scriverti o passare al fornitore dopo. Se il catalogo è ordinato, si legge in due lingue e lo capiscono sia Google sia gli assistenti AI, il lavoro fatto negli anni non si perde.',
    },
    {
      type: 'paragraph',
      text: 'E un risultato si legge con più fonti. A settembre Google Analytics 4 segnava sessioni quasi quadruplicate, ma i clic da Google erano stabili: con un sito nuovo cambia anche il modo in cui le visite vengono misurate. Per questo qui usiamo solo Search Console.',
    },
    { type: 'paragraph', text: 'Ad oggi:' },
    {
      type: 'list',
      items: [
        'DDglobal Store è online con il nuovo sito dal 29 agosto 2026',
        'Nessun clic perso con la migrazione, e negli ultimi 28 giorni +17%',
        'Posizione media su Google da 9,4 a 7,9',
        'Clic anno su anno +55%',
        'Il catalogo è in italiano e in inglese, con un file llms.txt per gli assistenti AI',
      ],
    },
    { type: 'cta' },
  ],
  faq: [
    {
      q: 'Si può fare una migrazione con l’AI per un eCommerce B2B senza carrello?',
      a: 'Sì. DDglobal Store è un catalogo B2B: non vende online, porta il cliente al contatto commerciale. Il trasferimento dal vecchio WordPress al nuovo sito è stato fatto con l’AI ed è andato online il 29 agosto 2026.',
    },
    {
      q: 'Si perde traffico da Google cambiando sito?',
      a: 'Non se la migrazione è fatta bene. Nei 44 giorni dopo il lancio DDglobal Store ha avuto gli stessi clic al giorno dei 44 giorni prima, e negli ultimi 28 giorni il 17% in più, con la posizione media passata da 9,4 a 7,9.',
    },
    {
      q: 'Cosa serve perché un catalogo B2B sia letto anche dagli assistenti AI?',
      a: 'Una struttura chiara per famiglie di prodotto, pagine in tutte le lingue collegate con hreflang, una sitemap completa e un file llms.txt che spiega chi sei, cosa vendi e come contattarti. Il nuovo sito di DDglobal Store li ha tutti.',
    },
  ],
  sources: [
    'Traffico da Google: export di Google Search Console, proprietà ddglobalstore.com, ricerca web, dati giornalieri dal 12 giugno 2025 all’11 ottobre 2026. Posizione media ponderata sulle impressioni.',
    'Confronti: 28 e 44 giorni dopo il lancio del 29 agosto 2026 contro lo stesso numero di giorni prima, e contro gli stessi giorni del 2025.',
    'Google Analytics 4 non è usato come risultato: le sessioni registrate dopo il lancio crescono molto più dei clic da Google, segno di un cambio nella misurazione.',
    'Sito: verifica del sito pubblico fatta il 13 ottobre 2026 (sitemap, versioni in italiano e inglese, file llms.txt, robots.txt).',
    'Per riservatezza pubblichiamo solo rapporti e variazioni, non valori assoluti.',
  ],
  titleEn: 'AI Migration of a B2B eCommerce: the DDglobal Store Case, No Clicks Lost and Better Google Rankings',
  excerptEn:
    'How we moved the online catalog of DDglobal Store, a B2B company selling neoprene and technical fabrics, from the old WordPress to a new site with an AI migration, without losing Google traffic. With Search Console data before and after.',
  contentEn: [
    { type: 'paragraph', text: 'Sector: Neoprene and technical fabrics | B2B eCommerce' },
    { type: 'paragraph', text: 'Project: AI migration of the online catalog, SEO, bilingual structure' },
    { type: 'paragraph', text: 'Live since: August 29, 2026' },
    {
      type: 'paragraph',
      text: '**In short.** DDglobal Store sells neoprene and technical fabrics to businesses. On August 29, 2026 we moved its online catalog from the old WordPress to a new site, with a migration done with AI. Not a single Google click was lost: in the last 28 days clicks are 17% higher than in the 28 days before launch and the average position went from 9.4 to 7.9. Data comes from Google Search Console and is shown in relative form: sources are at the bottom of the page.',
    },
    {
      type: 'paragraph',
      text: 'Not every eCommerce has a cart. In B2B the website is often the company’s first salesperson: it has to be found, explain the products well and bring the client to contact. And a badly done migration switches it off right where it matters, on Google.',
    },
    { type: 'paragraph', text: 'After the new site launched, according to Google Search Console:' },
    {
      type: 'list',
      items: [
        'Google clicks in the last 28 days: **+17%** against the 28 days before launch',
        'average position: from **9.4 to 7.9** in the same comparison',
        'in the 44 days after launch, against the same days of 2025: clicks **+55%**, impressions **2.7 times**',
        'September 2026 clicks: **+54%** on September 2025',
      ],
    },
    { type: 'h2', text: 'The starting point' },
    {
      type: 'paragraph',
      text: 'DDglobal Store is an Italian B2B company based in San Canzian d’Isonzo, near Gorizia. It sells neoprene, Yulex, trilaminates, technical fabrics and components to companies producing for diving, watersports, sailing, outdoor, fashion and orthopedics.',
    },
    {
      type: 'paragraph',
      text: 'There is no online checkout: the site is a catalog. Clients find the material, download the data sheet, ask for a sample and contact sales by email or WhatsApp. Prices sit in a reserved price list.',
    },
    {
      type: 'paragraph',
      text: 'The old site ran on WordPress and was already doing well on Google: since early 2026 clicks had been growing month after month. That was the whole risk of the migration. Changing site and losing that position.',
    },
    { type: 'h2', text: 'The AI migration' },
    {
      type: 'paragraph',
      text: 'Instead of rebuilding everything by hand, we did the move with AI: from the old WordPress to a new site, with the same catalog and a structure designed for people looking for a specific material.',
    },
    { type: 'paragraph', text: 'On August 29, 2026 the new site went live. Today it has:' },
    {
      type: 'list',
      items: [
        '**an organized catalog** by product family (neoprene, Yulex, trilaminates and fabrics, components, spare parts) and by brand',
        '**PDF data sheets** downloadable from the product pages and a sample book of colors and finishes',
        '**two languages, Italian and English**, linked with hreflang: the sitemap lists 831 addresses',
        '**a reserved price list**, behind a login and kept out of search engines',
        '**an llms.txt file** that tells AI assistants who the company is, what it sells and where to send people asking for prices',
      ],
    },
    { type: 'h2', text: 'The results on Google' },
    {
      type: 'image',
      src: '/images/use-case-ddglobal/ddglobal-search-console-en.png',
      alt: 'Google Search Console for DDglobal Store: clicks and impressions from June 2025 to October 2026, before and after the AI migration of August 29, 2026',
      width: 1600,
      height: 960,
    },
    {
      type: 'paragraph',
      text: 'This is the DDglobal Store Search Console chart, from the real exports. The dashed line is launch day.',
    },
    {
      type: 'paragraph',
      text: 'The first thing to look at is what does not happen: after August 29 there is no drop. In the 44 days after launch daily clicks are the same as in the 44 days before, and the average position already improves from 9.3 to 8.3.',
    },
    {
      type: 'paragraph',
      text: 'Then the curve rises. In the last 28 days clicks are 17% higher than in the 28 days before launch, with an average position of 7.9 against 9.4.',
    },
    {
      type: 'paragraph',
      text: 'Against a year ago the gap is bigger, clicks +55% and impressions 2.7 times, but not all of it comes from the migration: the site was already growing since early 2026. The migration protected that growth and pushed it one step further.',
    },
    { type: 'cta' },
    { type: 'h2', text: 'What this case teaches' },
    {
      type: 'paragraph',
      text: 'A migration is not only for those who sell with a cart. For a B2B company the website is where a buyer decides whether to write to you or move on to the next supplier. If the catalog is organized, reads in two languages and is understood by both Google and AI assistants, the work done over the years is not lost.',
    },
    {
      type: 'paragraph',
      text: 'And a result is read with more than one source. In September Google Analytics 4 showed sessions almost four times higher, but Google clicks were stable: with a new site the way visits are measured changes too. That is why here we only use Search Console.',
    },
    { type: 'paragraph', text: 'Today:' },
    {
      type: 'list',
      items: [
        'DDglobal Store has been live with the new site since August 29, 2026',
        'No clicks lost with the migration, and +17% in the last 28 days',
        'Average Google position from 9.4 to 7.9',
        'Clicks year over year +55%',
        'The catalog is in Italian and English, with an llms.txt file for AI assistants',
      ],
    },
    { type: 'cta' },
  ],
  faqEn: [
    {
      q: 'Can you do an AI migration for a B2B eCommerce without a cart?',
      a: 'Yes. DDglobal Store is a B2B catalog: it does not sell online, it brings clients to sales. The move from the old WordPress to the new site was done with AI and went live on August 29, 2026.',
    },
    {
      q: 'Do you lose Google traffic when you change site?',
      a: 'Not if the migration is done right. In the 44 days after launch DDglobal Store had the same daily clicks as in the 44 days before, and 17% more in the last 28 days, with the average position going from 9.4 to 7.9.',
    },
    {
      q: 'What does a B2B catalog need to be read by AI assistants too?',
      a: 'A clear structure by product family, pages in every language linked with hreflang, a complete sitemap and an llms.txt file that says who you are, what you sell and how to contact you. The new DDglobal Store site has all of them.',
    },
  ],
  sourcesEn: [
    'Google traffic: Google Search Console export, ddglobalstore.com property, web search, daily data from June 12, 2025 to October 11, 2026. Average position weighted by impressions.',
    'Comparisons: 28 and 44 days after the August 29, 2026 launch against the same number of days before, and against the same days of 2025.',
    'Google Analytics 4 is not used as a result: sessions recorded after launch grow far more than Google clicks, a sign of a change in measurement.',
    'Site: check of the public site done on October 13, 2026 (sitemap, Italian and English versions, llms.txt file, robots.txt).',
    'For confidentiality we only publish ratios and changes, not absolute values.',
  ],
  archive: {
    image: '/images/originals/i9Ht9Hdb61eYmBH3DZyKGjIm6s.webp',
    logo: '/images/originals/RWVPFhFtXLH5J1UMr53qg3AEzL8.svg',
    logoClass: 'h-[62px] w-[140px] object-contain',
    metrics: {
      en: ['+17% Google clicks after migration', 'Position 9.4 → 7.9'],
      it: ['+17% clic da Google dopo la migrazione', 'Posizione 9,4 → 7,9'],
    },
  },
}
