import type { UseCase } from './index'

/**
 * Integratori Nazzi DTC case study: WooCommerce → Shopify migration.
 *
 * Rule: no direct company figures (no euros, no order or customer counts). Only
 * ratios computed from the sources listed in `sources`. Every figure was
 * recomputed on 2026-10-13 from dashboard-nazzi (scratch script verify-nazzi.mjs):
 * - post go live 85 days (2026-07-19 → 10-12) vs same days 2025: sales +105.2%,
 *   orders +77.0%, AOV +15.9%, returning customers x2.25, MER 3.92
 * - no-ads window (2026-07-29 → 08-11, Meta spend 0) vs same days 2025: sales +46.3%,
 *   orders +9.8%, AOV +33.3%
 * - 2024: September sales 12.2x January; 7.1 new customers for each returning one
 * - 2025 vs 2024: sales +5.8%, ad spend +8.2%, returning customers x2.81, AOV +12.3%, MER 3.27 → 3.20
 * - June and July 2026 vs 2025: sales x2.57 and x2.19
 * - 2026 Jan → Oct 12 vs full 2025: +20.0%
 * - Search Console API (data/use-cases/nazzi-gsc-daily.json, exact daily data, 2025-09-09 → 2026-10-11):
 *   last 28 days (Sep 12 → Oct 9) vs 28 days before go live (Jun 21 → Jul 18): clicks 1.41x, impressions 2.17x,
 *   position 9.0 → 7.1; vs same 28 days 2025: clicks 2.71x, impressions 4.03x; period: CTR 1.9%, position 8.7
 * - Live site 2026-10-13: 143 blog articles in the Shopify sitemap, sitemap_agentic_discovery.xml
 *   published, 215 archived WooCommerce URLs checked one by one.
 */
export const nazzi: UseCase = {
  slug: 'integratori-nazzi-dtc-shopify',
  title: 'Migrazione da WooCommerce a Shopify: il caso Integratori Nazzi DTC, vendite online raddoppiate in 85 giorni',
  seoTitle: 'Da WooCommerce a Shopify: Integratori Nazzi DTC',
  seoTitleEn: 'WooCommerce to Shopify: Integratori Nazzi DTC',
  seoDescription:
    'Migrazione da WooCommerce a Shopify per un brand di integratori DTC: vendite online +105% in 85 giorni e 2,7x clic da Google. Dati verificati.',
  seoDescriptionEn:
    'WooCommerce to Shopify migration for a DTC supplements brand: +105% online sales in 85 days and 2.7x clicks from Google. Verified data.',
  excerpt:
    'Come abbiamo portato Integratori Nazzi DTC, brand di integratori nato da un laboratorio galenico attivo dal 2001, da WooCommerce a Shopify: SEO, storico clienti, tracciamento e i risultati verificati prima e dopo la migrazione.',
  image: '/images/use-case-nazzi/nazzi-astrumkap.png',
  imageAlt: 'Astrumkap, l’integratore più venduto di Integratori Nazzi DTC',
  caseType: 'Use Case',
  date: '2026-10-13',
  updated: '2026-10-13',
  about: ['Migrazione da WooCommerce a Shopify', 'SEO per eCommerce', 'Shopify', 'Farmacia online', 'Integratori alimentari'],
  content: [
    { type: 'paragraph', text: 'Settore: Integratori, DTC | Laboratorio galenico' },
    { type: 'paragraph', text: 'Progetto: migrazione da WooCommerce a Shopify, SEO, tracciamento, email marketing' },
    { type: 'paragraph', text: 'Durata partnership: da gennaio 2024 (attiva)' },
    { type: 'paragraph', text: 'Online su Shopify dal: 19 luglio 2026' },
    {
      type: 'paragraph',
      text: '**In breve.** Il brand Integratori Nazzi DTC è passato da WooCommerce a Shopify il 19 luglio 2026 con NoProb Agency. Nei primi 85 giorni le vendite online sono cresciute del 105% rispetto agli stessi giorni del 2025, i clienti di ritorno sono più che raddoppiati e i clic da Google negli ultimi 28 giorni sono 2,7 volte quelli di un anno prima. Tutti i numeri sono confronti percentuali su dati Shopify, Meta e Google Search Console: le fonti sono in fondo alla pagina.',
    },
    {
      type: 'paragraph',
      text: 'Cambiare piattaforma fa paura per un motivo preciso: hai costruito qualcosa e non vuoi perderlo. Clienti, posizioni su Google, abitudini di chi compra. Questo caso studio racconta come abbiamo fatto la migrazione da WooCommerce a Shopify per Integratori Nazzi DTC, e cosa è successo dopo.',
    },
    {
      type: 'paragraph',
      text: 'Nei primi 85 giorni su Shopify, dal 19 luglio al 12 ottobre 2026, rispetto agli stessi giorni del 2025:',
    },
    {
      type: 'list',
      items: [
        'vendite online: **+105%**',
        'ordini: **+77%**',
        'scontrino medio: **+16%**',
        'clienti che tornano a comprare: **2,25 volte** quelli dell’anno prima',
        'clic da Google negli ultimi 28 giorni: **2,7 volte** lo stesso periodo del 2025',
      ],
    },
    { type: 'h2', text: 'Il punto di partenza' },
    {
      type: 'paragraph',
      text: 'Integratori Nazzi DTC è il brand direct to consumer di un laboratorio galenico attivo dal 2001, dentro una farmacia. Gli integratori li formula e li prepara in casa, partendo da quello che i clienti chiedono ogni giorno al banco. Ogni formula è notificata al Ministero della Salute. Il più venduto, Astrumkap, è pensato per la perdita di capelli.',
    },
    {
      type: 'paragraph',
      text: 'Un prodotto con una storia così online ha un vantaggio enorme: le persone lo cercano. Il lavoro è farsi trovare, e poi farsi scegliere.',
    },
    {
      type: 'paragraph',
      text: 'Quando abbiamo iniziato, a gennaio 2024, lo shop era su WooCommerce e le vendite online erano ancora marginali. C’era però un patrimonio che pochi eCommerce hanno: un blog con decine di articoli sulla salute che Google già conosceva.',
    },
    {
      type: 'paragraph',
      text: 'Il progetto è seguito da NoProb Agency, Shopify Partner specializzato in sviluppo, migrazione e gestione eCommerce B2C.',
    },
    { type: 'h2', text: 'Dal 2024 al 2025: prima i clienti, poi la piattaforma' },
    {
      type: 'paragraph',
      text: 'Al termine di ogni anno trovi il MER (Marketing Efficiency Ratio, cioè fatturato eCommerce diviso spesa pubblicitaria) e, quando c’è un anno con cui confrontarlo, la crescita delle vendite online.',
    },
    { type: 'h3', text: '2024: far arrivare persone nuove' },
    {
      type: 'paragraph',
      text: 'Il primo anno lo abbiamo dedicato a una cosa sola: portare persone nuove sul sito. Campagne Meta, con un budget che saliva solo quando i numeri lo permettevano.',
    },
    {
      type: 'paragraph',
      text: 'A settembre 2024 lo shop vendeva più di 12 volte gennaio.',
    },
    {
      type: 'paragraph',
      text: 'Ma c’era un dato che non ci piaceva: chi comprava una volta, quasi mai tornava. Nel 2024, per ogni cliente che tornava a comprare ne arrivavano 7 nuovi.',
    },
    { type: 'metrics', merValue: '3,2', note: 'Primo anno di dati completi: nessun confronto con il 2023.' },
    { type: 'h3', text: '2025: far tornare chi ha già comprato' },
    {
      type: 'paragraph',
      text: 'Nel 2025 abbiamo spostato il peso sull’email marketing con Klaviyo: campagne stagionali, promozioni per i clienti abituali, follow up dopo l’acquisto. Meno rumore, più relazione.',
    },
    {
      type: 'paragraph',
      text: 'I clienti tornati a comprare sono diventati 2,8 volte quelli del 2024. Lo scontrino medio è salito del 12%.',
    },
    {
      type: 'paragraph',
      text: 'Le vendite sono cresciute poco, +5,8%, con una spesa pubblicitaria salita dell’8%. Ma la base era diversa: più solida e meno dipendente dalla pubblicità.',
    },
    { type: 'metrics', merValue: '3,2', growthValue: '+5,8%' },
    {
      type: 'paragraph',
      text: 'Per il passo successivo servivano tre cose che volevamo controllare fino in fondo: un checkout veloce da telefono, dati affidabili per le campagne e la libertà di costruire strumenti nuovi, come un quiz che consiglia l’integratore giusto. Abbiamo deciso di portare tutto su Shopify.',
    },
    { type: 'h2', text: '2026: la migrazione da WooCommerce a Shopify' },
    {
      type: 'image',
      src: '/images/use-case-nazzi/nazzi-homepage-shopify.webp',
      alt: 'La nuova homepage di Integratori Nazzi DTC su Shopify',
      width: 2000,
      height: 1106,
    },
    {
      type: 'paragraph',
      text: 'Tra maggio e giugno 2026 abbiamo costruito il nuovo store mentre quello vecchio continuava a vendere. Il vecchio store ha venduto fino al giorno prima del go live, e a giugno e luglio le vendite erano già più del doppio dello stesso mese del 2025.',
    },
    {
      type: 'paragraph',
      text: 'Il nuovo sito racconta la farmacia per quello che è: formule preparate dai farmacisti, notificate al Ministero della Salute, spedizione gratuita sopra i 50 euro e un farmacista vero su WhatsApp. Non è un catalogo. È il banco della farmacia, portato online.',
    },
    { type: 'paragraph', text: 'Il 19 luglio 2026 il nuovo store è andato online.' },
    { type: 'h3', text: 'Come abbiamo protetto la SEO nella migrazione' },
    {
      type: 'paragraph',
      text: 'In una migrazione il rischio vero non è il design. È perdere quello che Google ha imparato del tuo sito in anni. Per Integratori Nazzi DTC abbiamo lavorato su quattro fronti.',
    },
    {
      type: 'list',
      items: [
        '**Contenuti.** Abbiamo portato su Shopify il blog: oggi la sitemap dello store conta oltre 140 articoli sulla salute, portati dal vecchio sito.',
        '**Redirect 301.** Gli indirizzi vecchi di prodotti, categorie e articoli vengono reindirizzati ai nuovi URL Shopify. Dopo il go live abbiamo controllato uno per uno 215 indirizzi del vecchio sito archiviati online e preparato i redirect per quelli che non portavano ancora alla pagina giusta.',
        '**Storico.** Ordini e clienti dal 2023 sono passati su Shopify: niente è ripartito da zero, né per le email né per le analisi.',
        '**Agenti AI.** Lo store pubblica la sitemap che Shopify prepara per gli assistenti AI (agentic discovery), così il catalogo è leggibile anche fuori da Google.',
      ],
    },
    { type: 'h3', text: 'Le prime due settimane senza pubblicità' },
    {
      type: 'paragraph',
      text: 'Dal 29 luglio all’11 agosto le campagne sono rimaste spente. Due settimane in cui ogni vendita è arrivata da Google, dalle email o da chi conosceva già la farmacia.',
    },
    {
      type: 'paragraph',
      text: 'Rispetto agli stessi giorni del 2025, sulla vecchia piattaforma, le vendite sono cresciute del 46% e lo scontrino medio del 33%. Senza un euro di advertising.',
    },
    {
      type: 'paragraph',
      text: 'Non tutto è filato liscio. Nella prima settimana dopo la ripartenza delle campagne il tracciamento non era ancora a posto. Il 20 agosto abbiamo sistemato la configurazione di pixel e Google, e da lì le conversioni vengono lette correttamente. Lo scriviamo perché succede, e conta come lo risolvi.',
    },
    { type: 'h3', text: 'SEO dopo la migrazione: prima il calo, poi la salita' },
    {
      type: 'image',
      src: '/images/use-case-nazzi/nazzi-search-console-it.png',
      alt: 'Google Search Console di Integratori Nazzi DTC: clic e impressioni da settembre 2025 a ottobre 2026, prima e dopo la migrazione da WooCommerce a Shopify',
      width: 1600,
      height: 960,
    },
    {
      type: 'paragraph',
      text: 'Questo è il grafico di Search Console di Integratori Nazzi DTC, con i dati giornalieri esatti. La crescita parte dalla migrazione.',
    },
    {
      type: 'paragraph',
      text: 'Ad agosto i clic sono scesi. Succede spesso dopo una migrazione: Google deve rileggere il sito e capire dove sono finite le pagine. Da settembre la curva cambia pendenza.',
    },
    {
      type: 'paragraph',
      text: 'Negli ultimi 28 giorni i clic da Google sono stati il 41% in più dei 28 giorni prima della migrazione, e 2,7 volte quelli dello stesso periodo del 2025. Le impressioni sono più che raddoppiate rispetto a prima della migrazione, e sono 4 volte quelle di un anno fa. La posizione media è passata da 9,0 a 7,1.',
    },
    {
      type: 'paragraph',
      text: 'Su tutto il periodo del grafico il CTR medio è dell’1,9% e la posizione media 8,7.',
    },
    { type: 'h3', text: 'Le vendite dopo il go live' },
    {
      type: 'metrics',
      merValue: '3,9',
      growthValue: '+105%',
      note: 'Dal 19 luglio al 12 ottobre 2026, rispetto agli stessi giorni del 2025. Anche la pubblicità è ripartita, da metà agosto.',
    },
    {
      type: 'paragraph',
      text: 'Il dato che ci piace di più però è un altro: i clienti che tornano. In questi tre mesi sono stati più del doppio dell’anno prima. Il lavoro del 2025 sulle email e quello del 2026 sul sito si stanno sommando.',
    },
    {
      type: 'paragraph',
      text: 'A metà ottobre 2026 lo store ha già venduto il 20% in più di tutto il 2025.',
    },
    { type: 'h3', text: 'Il quiz: consigliare come al banco' },
    {
      type: 'paragraph',
      text: 'Su Shopify abbiamo costruito online quello che in farmacia succede ogni giorno: entri, racconti cosa senti, il farmacista ti consiglia. Il quiz AstrumDonna fa la stessa cosa per perimenopausa, menopausa, stress e sonno, equilibrio del ciclo.',
    },
    {
      type: 'paragraph',
      text: 'È online dal 18 settembre 2026. In meno di un mese oltre mille persone hanno fatto il quiz e lasciato la loro email, e ora ricevono messaggi pensati per il loro profilo. È presto per parlare delle vendite del quiz, e non lo facciamo. Ma è una base di contatti che prima non esisteva.',
    },
    { type: 'cta' },
    { type: 'h2', text: 'Cosa insegna questo caso sulla migrazione a Shopify' },
    {
      type: 'paragraph',
      text: 'Una migrazione fatta bene non si misura il giorno del lancio. Si misura nei mesi dopo: se Google ti ritrova, se i clienti tornano, se i numeri reggono anche con le campagne spente.',
    },
    {
      type: 'paragraph',
      text: 'Con Nazzi abbiamo seguito lo stesso metodo di sempre: prima i dati, poi le decisioni. Una dashboard con vendite giorno per giorno, spesa pubblicitaria, MER e clienti di ritorno. Ogni scelta passa da lì.',
    },
    { type: 'paragraph', text: 'Ad oggi:' },
    {
      type: 'list',
      items: [
        'Integratori Nazzi DTC vende su Shopify dal 19 luglio 2026, con lo storico di ordini e clienti dal 2023',
        'Nei primi 85 giorni le vendite online sono più che raddoppiate rispetto allo stesso periodo del 2025',
        'I clienti che tornano a comprare sono più del doppio',
        'I clic da Google sono 2,7 volte quelli di un anno fa',
        'Nel 2026 lo store ha già superato le vendite di tutto il 2025',
        'Oltre mille persone hanno fatto il quiz AstrumDonna nel primo mese',
      ],
    },
    { type: 'h2', text: 'Questo modello funziona per te?' },
    {
      type: 'paragraph',
      text: 'Se hai un prodotto vero, che le persone cercano, ma uno store su WooCommerce che non ti segue più, sai di cosa parliamo. Il punto non è cambiare piattaforma. È farlo senza perdere quello che hai costruito, e usare il cambio per crescere.',
    },
    {
      type: 'paragraph',
      text: 'Lo facciamo per brand e farmacie che vendono già online e vogliono passare a Shopify con un piano, dei numeri e qualcuno che risponde. [Ecco come lavoriamo sulle migrazioni a Shopify](/it/sprint-migrazione-shopify).',
    },
    { type: 'paragraph', text: 'Integratori Nazzi DTC è un cliente attivo di NoProb Agency da gennaio 2024. Se il tuo store è collegato a un gestionale proprietario, leggi anche il [caso Cumini](/it/casi-studio/cumini-luxury-fashion-ecommerce).' },
    { type: 'cta' },
  ],
  faq: [
    {
      q: 'Quanto dura una migrazione da WooCommerce a Shopify?',
      a: 'Per Integratori Nazzi DTC il nuovo store è stato costruito tra maggio e giugno 2026, mentre quello vecchio continuava a vendere, ed è andato online il 19 luglio 2026.',
    },
    {
      q: 'Si perde la SEO migrando da WooCommerce a Shopify?',
      a: 'Un calo temporaneo dei clic è frequente, perché Google deve rileggere il sito. Nel caso Nazzi i clic sono scesi ad agosto e da settembre hanno superato i livelli di prima: negli ultimi 28 giorni sono il 41% in più dei 28 giorni prima della migrazione e 2,7 volte lo stesso periodo del 2025. Contano tre cose: portare tutti i contenuti, redirect 301 dai vecchi indirizzi, controllo dopo il go live.',
    },
    {
      q: 'Dopo quanto si vedono i risultati di una migrazione a Shopify?',
      a: 'Sulle vendite da subito: nei primi 85 giorni Integratori Nazzi DTC ha venduto online il 105% in più rispetto agli stessi giorni dell’anno prima. Sulla SEO dal secondo mese, dopo il riassestamento di agosto.',
    },
    {
      q: 'Cosa succede a clienti e ordini storici?',
      a: 'Si portano su Shopify. Per Nazzi abbiamo trasferito ordini e clienti dal 2023, così niente è ripartito da zero: nei primi tre mesi i clienti di ritorno sono stati più del doppio dell’anno prima.',
    },
    {
      q: 'Serve la pubblicità per far ripartire le vendite dopo la migrazione?',
      a: 'Non per forza. Nelle due settimane dopo il go live in cui le campagne sono rimaste spente, Integratori Nazzi DTC ha venduto il 46% in più rispetto agli stessi giorni del 2025, con uno scontrino medio più alto del 33%.',
    },
  ],
  sources: [
    'Vendite, ordini, scontrino medio, clienti nuovi e di ritorno: Shopify (ShopifyQL e ordini), letti dalla dashboard NoProb di Integratori Nazzi DTC. Vendite = vendite nette Shopify, spedizione inclusa.',
    'Storico 2024 e 2025: ordini WooCommerce importati su Shopify e riallineati ai totali mensili di ShopifyQL.',
    'Spesa pubblicitaria: Meta Marketing API. MER = vendite online diviso spesa pubblicitaria. Campagne spente dal 29 luglio all’11 agosto 2026, verificato su Meta.',
    'Traffico organico: Google Search Console, proprietà del sito, dati giornalieri letti via API dal 9 settembre 2025 all’11 ottobre 2026. Posizione media ponderata sulle impressioni.',
    'SEO tecnica: sitemap pubblica dello store e verifica degli indirizzi WooCommerce archiviati su Wayback Machine, fatta il 13 ottobre 2026.',
    'Ogni confronto è fatto sugli stessi giorni dell’anno precedente. Per riservatezza pubblichiamo solo variazioni percentuali, non valori assoluti.',
  ],
  titleEn: 'WooCommerce to Shopify Migration: the Integratori Nazzi DTC Case, Online Sales Doubled in 85 Days',
  excerptEn:
    'How we moved Integratori Nazzi DTC, a supplement brand born from a compounding laboratory active since 2001, from WooCommerce to Shopify: SEO, customer history, tracking and the verified results before and after the migration.',
  contentEn: [
    { type: 'paragraph', text: 'Sector: Supplements, DTC | Compounding laboratory' },
    { type: 'paragraph', text: 'Project: WooCommerce to Shopify migration, SEO, tracking, email marketing' },
    { type: 'paragraph', text: 'Partnership length: since January 2024 (active)' },
    { type: 'paragraph', text: 'Live on Shopify since: July 19, 2026' },
    {
      type: 'paragraph',
      text: '**In short.** Integratori Nazzi DTC moved from WooCommerce to Shopify on July 19, 2026 with NoProb Agency. In the first 85 days online sales grew 105% compared with the same days of 2025, returning customers more than doubled and Google clicks in the last 28 days are 2.7 times those of a year earlier. Every number is a percentage comparison on Shopify, Meta and Google Search Console data: sources are at the bottom of the page.',
    },
    {
      type: 'paragraph',
      text: 'Changing platform is scary for one simple reason: you built something and you do not want to lose it. Customers, Google rankings, the habits of the people who buy from you. This case study tells how we migrated Integratori Nazzi DTC from WooCommerce to Shopify, and what happened next.',
    },
    {
      type: 'paragraph',
      text: 'In the first 85 days on Shopify, from July 19 to October 12, 2026, compared with the same days in 2025:',
    },
    {
      type: 'list',
      items: [
        'online sales: **+105%**',
        'orders: **+77%**',
        'average order value: **+16%**',
        'returning customers: **2.25 times** the year before',
        'clicks from Google in the last 28 days: **2.7 times** the same period of 2025',
      ],
    },
    { type: 'h2', text: 'The starting point' },
    {
      type: 'paragraph',
      text: 'Integratori Nazzi DTC is the direct to consumer brand of a compounding laboratory active since 2001, inside a pharmacy. It formulates and prepares its supplements in house, starting from what customers ask for at the counter every day. Every formula is notified to the Italian Ministry of Health. The best seller, Astrumkap, is designed for hair loss.',
    },
    {
      type: 'paragraph',
      text: 'A product with a story like this has a huge advantage online: people search for it. The job is to be found, and then to be chosen.',
    },
    {
      type: 'paragraph',
      text: 'When we started, in January 2024, the shop ran on WooCommerce and online sales were still marginal. But it had an asset few eCommerce stores have: a blog with dozens of health articles that Google already knew.',
    },
    {
      type: 'paragraph',
      text: 'The project is led by NoProb Agency, a Shopify Partner specialized in B2C eCommerce development, migration and management.',
    },
    { type: 'h2', text: 'From 2024 to 2025: customers first, then the platform' },
    {
      type: 'paragraph',
      text: 'At the end of each year you will find the MER (Marketing Efficiency Ratio, eCommerce revenue divided by ad spend) and, when there is a year to compare with, the growth of online sales.',
    },
    { type: 'h3', text: '2024: bringing in new people' },
    {
      type: 'paragraph',
      text: 'We spent the first year on one thing only: bringing new people to the site. Meta campaigns, with a budget that went up only when the numbers allowed it.',
    },
    { type: 'paragraph', text: 'In September 2024 the shop was selling more than 12 times January.' },
    {
      type: 'paragraph',
      text: 'But one number bothered us: people who bought once almost never came back. In 2024, for every customer who came back to buy, 7 new ones arrived.',
    },
    { type: 'metrics', merValue: '3.2', note: 'First year of complete data: no comparison with 2023.' },
    { type: 'h3', text: '2025: bringing back the people who already bought' },
    {
      type: 'paragraph',
      text: 'In 2025 we moved the weight to email marketing with Klaviyo: seasonal campaigns, offers for regular customers, follow ups after the purchase. Less noise, more relationship.',
    },
    {
      type: 'paragraph',
      text: 'Returning customers became 2.8 times those of 2024. Average order value rose by 12%.',
    },
    {
      type: 'paragraph',
      text: 'Sales grew a little, +5.8%, with ad spend up 8%. But the base was different: stronger and less dependent on advertising.',
    },
    { type: 'metrics', merValue: '3.2', growthValue: '+5.8%' },
    {
      type: 'paragraph',
      text: 'The next step needed three things we wanted full control over: a fast checkout on mobile, reliable data for the campaigns and the freedom to build new tools, like a quiz that recommends the right supplement. We decided to move everything to Shopify.',
    },
    { type: 'h2', text: '2026: the WooCommerce to Shopify migration' },
    {
      type: 'image',
      src: '/images/use-case-nazzi/nazzi-homepage-shopify.webp',
      alt: 'The new Integratori Nazzi DTC homepage on Shopify',
      width: 2000,
      height: 1106,
    },
    {
      type: 'paragraph',
      text: 'Between May and June 2026 we built the new store while the old one kept selling. The old store kept selling until the day before go live, and in June and July sales were already more than double the same month of 2025.',
    },
    {
      type: 'paragraph',
      text: 'The new site tells the pharmacy for what it is: formulas prepared by pharmacists, notified to the Ministry of Health, free shipping over €50 and a real pharmacist on WhatsApp. It is not a catalog. It is the pharmacy counter, brought online.',
    },
    { type: 'paragraph', text: 'On July 19, 2026 the new store went live.' },
    { type: 'h3', text: 'How we protected SEO during the migration' },
    {
      type: 'paragraph',
      text: 'In a migration the real risk is not the design. It is losing what Google has learned about your site over the years. For Integratori Nazzi DTC we worked on four fronts.',
    },
    {
      type: 'list',
      items: [
        '**Content.** We moved the blog to Shopify: today the store sitemap lists over 140 health articles, brought over from the old site.',
        '**301 redirects.** Old product, category and article addresses are redirected to the new Shopify URLs. After go live we checked one by one 215 archived addresses of the old site and prepared redirects for the ones that did not lead to the right page yet.',
        '**History.** Orders and customers since 2023 moved to Shopify: nothing started from zero, neither for email nor for analysis.',
        '**AI agents.** The store publishes the sitemap Shopify prepares for AI assistants (agentic discovery), so the catalog is readable outside Google too.',
      ],
    },
    { type: 'h3', text: 'The first two weeks without advertising' },
    {
      type: 'paragraph',
      text: 'From July 29 to August 11 the campaigns stayed off. Two weeks in which every sale came from Google, from email or from people who already knew the pharmacy.',
    },
    {
      type: 'paragraph',
      text: 'Compared with the same days of 2025, on the old platform, sales grew 46% and average order value 33%. Without a single euro of advertising.',
    },
    {
      type: 'paragraph',
      text: 'Not everything went smoothly. In the first week after the campaigns restarted, tracking was not right yet. On August 20 we fixed the pixel and Google setup, and since then conversions are read correctly. We write it because it happens, and what counts is how you fix it.',
    },
    { type: 'h3', text: 'SEO after the migration: first the dip, then the climb' },
    {
      type: 'image',
      src: '/images/use-case-nazzi/nazzi-search-console-en.png',
      alt: 'Google Search Console for Integratori Nazzi DTC: clicks and impressions from September 2025 to October 2026, before and after the WooCommerce to Shopify migration',
      width: 1600,
      height: 960,
    },
    {
      type: 'paragraph',
      text: 'This is the Integratori Nazzi DTC Search Console chart, with the exact daily data. The growth starts with the migration.',
    },
    {
      type: 'paragraph',
      text: 'In August clicks went down. It often happens after a migration: Google has to read the site again and work out where the pages went. From September the curve changes slope.',
    },
    {
      type: 'paragraph',
      text: 'In the last 28 days Google clicks were 41% higher than in the 28 days before the migration, and 2.7 times the same period of 2025. Impressions more than doubled compared with before the migration, and are 4 times those of a year ago. The average position went from 9.0 to 7.1.',
    },
    {
      type: 'paragraph',
      text: 'Over the whole period in the chart the average CTR is 1.9% and the average position 8.7.',
    },
    { type: 'h3', text: 'Sales after go live' },
    {
      type: 'metrics',
      merValue: '3.9',
      growthValue: '+105%',
      note: 'July 19 to October 12, 2026, compared with the same days of 2025. Advertising restarted too, from mid August.',
    },
    {
      type: 'paragraph',
      text: 'The number we like most is another one: returning customers. In these three months they were more than double the year before. The 2025 work on email and the 2026 work on the site are adding up.',
    },
    { type: 'paragraph', text: 'By mid October 2026 the store has already sold 20% more than the whole of 2025.' },
    { type: 'h3', text: 'The quiz: advice like at the counter' },
    {
      type: 'paragraph',
      text: 'On Shopify we built online what happens in the pharmacy every day: you walk in, you say how you feel, the pharmacist advises you. The AstrumDonna quiz does the same for perimenopause, menopause, stress and sleep, cycle balance.',
    },
    {
      type: 'paragraph',
      text: 'It has been live since September 18, 2026. In less than a month over a thousand people took the quiz and left their email, and now receive messages written for their profile. It is too early to talk about quiz sales, so we will not. But it is a contact base that did not exist before.',
    },
    { type: 'cta' },
    { type: 'h2', text: 'What this case teaches about migrating to Shopify' },
    {
      type: 'paragraph',
      text: 'A good migration is not measured on launch day. It is measured in the months after: whether Google finds you again, whether customers come back, whether the numbers hold even with the campaigns off.',
    },
    {
      type: 'paragraph',
      text: 'With Nazzi we followed the same method as always: data first, then decisions. A dashboard with sales day by day, ad spend, MER and returning customers. Every choice goes through it.',
    },
    { type: 'paragraph', text: 'Today:' },
    {
      type: 'list',
      items: [
        'Integratori Nazzi DTC has been selling on Shopify since July 19, 2026, with the order and customer history since 2023',
        'In the first 85 days online sales more than doubled compared with the same period of 2025',
        'Returning customers more than doubled',
        'Clicks from Google are 2.7 times those of a year ago',
        'In 2026 the store has already passed the sales of the whole of 2025',
        'Over a thousand people took the AstrumDonna quiz in its first month',
      ],
    },
    { type: 'h2', text: 'Does this model work for you?' },
    {
      type: 'paragraph',
      text: 'If you have a real product that people search for, but a WooCommerce store that no longer keeps up with you, you know what we mean. The point is not to change platform. It is to do it without losing what you built, and to use the change to grow.',
    },
    {
      type: 'paragraph',
      text: 'We do it for brands and pharmacies that already sell online and want to move to Shopify with a plan, real numbers and someone who answers. [This is how we run Shopify migrations](/shopify-migration-sprint).',
    },
    { type: 'paragraph', text: 'Integratori Nazzi DTC has been an active client of NoProb Agency since January 2024. If your store is connected to a proprietary ERP, read the [Cumini case](/use-cases/cumini-luxury-fashion-ecommerce) too.' },
    { type: 'cta' },
  ],
  faqEn: [
    {
      q: 'How long does a WooCommerce to Shopify migration take?',
      a: 'For Integratori Nazzi DTC the new store was built between May and June 2026, while the old one kept selling, and went live on July 19, 2026.',
    },
    {
      q: 'Do you lose SEO when migrating from WooCommerce to Shopify?',
      a: 'A temporary dip in clicks is common, because Google has to read the site again. For Nazzi clicks went down in August and from September passed the previous levels: in the last 28 days they are 41% higher than in the 28 days before the migration and 2.7 times the same period of 2025. Three things matter: moving all the content, 301 redirects from the old addresses, checking after go live.',
    },
    {
      q: 'How soon do you see results after a Shopify migration?',
      a: 'On sales right away: in the first 85 days Integratori Nazzi DTC sold 105% more online than on the same days of the year before. On SEO from the second month, after the August adjustment.',
    },
    {
      q: 'What happens to past customers and orders?',
      a: 'They move to Shopify. For Nazzi we transferred orders and customers since 2023, so nothing started from zero: in the first three months returning customers were more than double the year before.',
    },
    {
      q: 'Do you need advertising to restart sales after the migration?',
      a: 'Not necessarily. In the two weeks after go live when the campaigns stayed off, Integratori Nazzi DTC sold 46% more than on the same days of 2025, with a 33% higher average order value.',
    },
  ],
  sourcesEn: [
    'Sales, orders, average order value, new and returning customers: Shopify (ShopifyQL and orders), read from the NoProb dashboard for Integratori Nazzi DTC. Sales = Shopify net sales, shipping included.',
    '2024 and 2025 history: WooCommerce orders imported into Shopify and aligned with the ShopifyQL monthly totals.',
    'Ad spend: Meta Marketing API. MER = online sales divided by ad spend. Campaigns off from July 29 to August 11, 2026, verified on Meta.',
    'Organic traffic: Google Search Console, site property, daily data read through the API from September 9, 2025 to October 11, 2026. Average position weighted by impressions.',
    'Technical SEO: the store public sitemap and a check of the WooCommerce addresses archived on the Wayback Machine, done on October 13, 2026.',
    'Every comparison uses the same days of the previous year. For confidentiality we only publish percentage changes, not absolute values.',
  ],
  archive: {
    image: '/images/use-case-nazzi/nazzi-astrumkap.png',
    logo: '/images/originals/3D4Ji7c6LSsawGoOucoTS6dFA.png',
    logoClass: 'h-[30px] w-[140px] object-contain',
    metrics: {
      en: ['+105% online sales after Shopify', '2.7x clicks from Google'],
      it: ['+105% vendite online dopo Shopify', '2,7x clic da Google'],
    },
  },
}
