import type { UseCase } from './index'

/**
 * Farmacia Nazzi case study.
 * Sales, orders, customers and ad spend: dashboard-nazzi (Shopify + Meta Marketing API), read on 2026-10-13.
 * Search Console: rebuilt from the GSC performance screenshot (data/use-cases/nazzi-gsc-daily.json,
 * chart from scripts/generate-nazzi-gsc-chart.mjs). Daily click and impression values are read from the
 * chart, so the copy only uses rounded figures ("circa").
 */
export const nazzi: UseCase = {
  slug: 'farmacia-nazzi-integratori-shopify',
  title: 'Farmacia Nazzi: da WooCommerce a Shopify, vendite online raddoppiate nei primi tre mesi',
  excerpt:
    'Il caso studio di Farmacia Nazzi, laboratorio galenico dal 2001 che vende online i suoi integratori: la migrazione da WooCommerce a Shopify, il traffico da Google e i numeri veri, prima e dopo.',
  image: '/images/use-case-nazzi/nazzi-homepage-shopify.webp',
  imageAlt: 'La homepage di Farmacia Nazzi su Shopify',
  caseType: 'Use Case',
  date: '2026-10-13',
  content: [
    { type: 'paragraph', text: 'Settore: Farmacia e integratori | Laboratorio galenico' },
    { type: 'paragraph', text: 'Durata partnership: da gennaio 2024 (attiva)' },
    { type: 'paragraph', text: 'Stato: online su Shopify dal 19 luglio 2026' },
    {
      type: 'paragraph',
      text: 'Cambiare piattaforma fa paura per un motivo preciso: hai costruito qualcosa e non vuoi perderlo. Clienti, posizioni su Google, abitudini di chi compra. Questo caso studio racconta come lo abbiamo fatto con Farmacia Nazzi, e cosa è successo dopo.',
    },
    {
      type: 'paragraph',
      text: 'Nei primi 85 giorni su Shopify, dal 19 luglio al 12 ottobre 2026, rispetto agli stessi giorni del 2025:',
    },
    {
      type: 'list',
      items: [
        'vendite online da 13.333 a 27.356 euro: **+105%**',
        'ordini da 269 a 476: **+77%**',
        'scontrino medio da 49,6 a 57,5 euro: **+16%**',
        'clienti che tornano a comprare da 119 a 268: **più del doppio**',
        'clic da Google circa **2,8 volte** quelli di un anno fa',
      ],
    },
    { type: 'h2', text: 'Il punto di partenza' },
    {
      type: 'paragraph',
      text: 'Farmacia Giancarlo Nazzi è una farmacia con laboratorio galenico dal 2001. Gli integratori li formula e li prepara in casa, partendo da quello che i clienti chiedono ogni giorno al banco. Ogni formula è notificata al Ministero della Salute. Il più venduto, Astrumkap, è pensato per la perdita di capelli.',
    },
    {
      type: 'paragraph',
      text: 'Un prodotto con una storia così online ha un vantaggio enorme: le persone lo cercano. Il lavoro è farsi trovare, e poi farsi scegliere.',
    },
    {
      type: 'paragraph',
      text: 'Quando abbiamo iniziato, a gennaio 2024, lo shop era su WooCommerce e vendeva poco: 1.056 euro in tutto il mese, 24 ordini.',
    },
    {
      type: 'paragraph',
      text: 'Il progetto è seguito da NoProb Agency, Shopify Partner specializzato in sviluppo, migrazione e gestione eCommerce B2C.',
    },
    { type: 'h2', text: 'Dal 2024 al 2025: prima i clienti, poi la piattaforma' },
    {
      type: 'paragraph',
      text: 'Al termine di ogni anno trovi due indicatori: il MER (Marketing Efficiency Ratio, cioè fatturato eCommerce diviso spesa pubblicitaria) e la crescita delle vendite online rispetto all’anno precedente.',
    },
    { type: 'h3', text: '2024: far arrivare persone nuove' },
    {
      type: 'paragraph',
      text: 'Il primo anno lo abbiamo dedicato a una cosa sola: portare persone nuove sul sito. Campagne Meta, con un budget che saliva solo quando i numeri lo permettevano.',
    },
    {
      type: 'paragraph',
      text: 'A settembre 2024 lo shop ha fatto 12.924 euro, più di dodici volte gennaio. In tutto l’anno sono arrivati 1.408 clienti nuovi.',
    },
    {
      type: 'paragraph',
      text: 'Ma c’era un dato che non ci piaceva: chi comprava una volta, quasi mai tornava. Nel 2024 i clienti tornati a comprare sono stati 197, contro 1.408 nuovi.',
    },
    { type: 'metrics', merValue: '3,2', note: 'Vendite online 2024: 69.611 euro. Primo anno di dati completi, nessun confronto con il 2023.' },
    { type: 'h3', text: '2025: far tornare chi ha già comprato' },
    {
      type: 'paragraph',
      text: 'Nel 2025 abbiamo spostato il peso sull’email marketing con Klaviyo: campagne stagionali, promozioni per i clienti abituali, follow up dopo l’acquisto. Meno rumore, più relazione.',
    },
    {
      type: 'paragraph',
      text: 'I clienti tornati a comprare sono passati da 197 a 554, quasi il triplo. Lo scontrino medio è salito da 42,9 a 48,2 euro.',
    },
    {
      type: 'paragraph',
      text: 'Le vendite sono cresciute poco, +5,8%, con una spesa pubblicitaria simile all’anno prima. Ma la base era diversa: più solida e meno dipendente dalla pubblicità.',
    },
    { type: 'metrics', merValue: '3,2', growthValue: '+5,8%', note: 'Vendite online 2025: 73.655 euro.' },
    {
      type: 'paragraph',
      text: 'Per il passo successivo servivano tre cose che volevamo controllare fino in fondo: un checkout veloce da telefono, dati affidabili per le campagne e la libertà di costruire strumenti nuovi, come un quiz che consiglia l’integratore giusto. Abbiamo deciso di portare tutto su Shopify.',
    },
    { type: 'h2', text: '2026: la migrazione su Shopify' },
    {
      type: 'image',
      src: '/images/use-case-nazzi/nazzi-homepage-shopify.webp',
      alt: 'La nuova homepage di Farmacia Nazzi su Shopify',
      width: 2000,
      height: 1106,
    },
    {
      type: 'paragraph',
      text: 'Tra maggio e giugno 2026 abbiamo costruito il nuovo store mentre quello vecchio continuava a vendere. Nessuno stop, nessuna vetrina chiusa: a giugno lo shop ha fatto 10.291 euro, a luglio 12.628.',
    },
    {
      type: 'paragraph',
      text: 'Il nuovo sito racconta la farmacia per quello che è: formule preparate dai farmacisti, notificate al Ministero della Salute, spedizione gratuita sopra i 50 euro e un farmacista vero su WhatsApp. Non è un catalogo. È il banco della farmacia, portato online.',
    },
    {
      type: 'paragraph',
      text: 'Abbiamo portato su Shopify lo storico di ordini e clienti dal 2023: niente è ripartito da zero. Oggi l’anagrafica conta 7.586 clienti.',
    },
    { type: 'paragraph', text: 'Il 19 luglio 2026 il nuovo store è andato online.' },
    { type: 'h3', text: 'Le prime due settimane senza pubblicità' },
    {
      type: 'paragraph',
      text: 'Dal 29 luglio all’11 agosto le campagne sono rimaste spente. Due settimane in cui ogni vendita è arrivata da Google, dalle email o da chi conosceva già la farmacia.',
    },
    {
      type: 'paragraph',
      text: 'In quei 14 giorni lo store ha fatto 2.808 euro e 45 ordini. Negli stessi giorni del 2025, sulla vecchia piattaforma, si era fermato a 1.919 euro. Fa +46%, senza un euro di advertising.',
    },
    {
      type: 'paragraph',
      text: 'Lo scontrino medio di quelle due settimane è stato 62,4 euro, contro i 46,8 dell’anno prima.',
    },
    {
      type: 'paragraph',
      text: 'Non tutto è filato liscio. Nella prima settimana dopo la ripartenza delle campagne il tracciamento non era ancora a posto. Il 20 agosto abbiamo sistemato la configurazione di pixel e Google, e da lì le conversioni vengono lette correttamente. Lo scriviamo perché succede, e conta come lo risolvi.',
    },
    { type: 'h3', text: 'Google: prima il calo, poi la salita' },
    {
      type: 'image',
      src: '/images/use-case-nazzi/nazzi-search-console-it.png',
      alt: 'Grafico Google Search Console di Farmacia Nazzi: clic e impressioni da agosto 2025 a ottobre 2026, con la migrazione su Shopify',
      width: 1600,
      height: 960,
    },
    {
      type: 'paragraph',
      text: 'Questo è il grafico di Search Console di Farmacia Nazzi, ricostruito dai dati reali. La crescita parte dalla migrazione.',
    },
    {
      type: 'paragraph',
      text: 'Ad agosto i clic sono scesi. Succede spesso dopo una migrazione: Google deve rileggere il sito e capire dove sono finite le pagine. Da settembre la curva cambia pendenza.',
    },
    {
      type: 'paragraph',
      text: 'Negli ultimi 28 giorni il sito ha preso in media circa 46 clic al giorno da Google, contro i 32 dei 28 giorni prima della migrazione e i 17 dello stesso periodo del 2025. Le impressioni giornaliere sono passate da circa 1.500 a 3.400.',
    },
    {
      type: 'paragraph',
      text: 'Nei 14 mesi del grafico: 11.800 clic, 624.000 impressioni, CTR medio 1,9%, posizione media 10,2.',
    },
    { type: 'h3', text: 'I numeri dopo il go live' },
    {
      type: 'metrics',
      merValue: '3,9',
      growthValue: '+105%',
      note: 'Dal 19 luglio al 12 ottobre 2026, rispetto agli stessi giorni del 2025. Anche la pubblicità è ripartita: 6.987 euro di budget in quel periodo.',
    },
    {
      type: 'paragraph',
      text: 'Il dato che ci piace di più però è un altro: i clienti che tornano. In questi tre mesi sono stati 268, più del doppio dei 119 dell’anno prima. Il lavoro del 2025 sulle email e quello del 2026 sul sito si stanno sommando.',
    },
    {
      type: 'paragraph',
      text: 'Da gennaio al 12 ottobre 2026 lo store ha già venduto 88.382 euro, il 20% in più di tutto il 2025.',
    },
    { type: 'h3', text: 'Il quiz: consigliare come al banco' },
    {
      type: 'paragraph',
      text: 'Su Shopify abbiamo costruito online quello che in farmacia succede ogni giorno: entri, racconti cosa senti, il farmacista ti consiglia. Il quiz AstrumDonna fa la stessa cosa per perimenopausa, menopausa, stress e sonno, equilibrio del ciclo.',
    },
    {
      type: 'paragraph',
      text: 'È online dal 18 settembre 2026. In meno di un mese oltre 1.100 persone hanno fatto il quiz e lasciato la loro email, e ora ricevono messaggi pensati per il loro profilo.',
    },
    {
      type: 'paragraph',
      text: 'È presto per parlare delle vendite del quiz, e non lo facciamo. Ma è una base di contatti che prima non esisteva.',
    },
    { type: 'cta' },
    { type: 'h2', text: 'Cosa insegna questo caso' },
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
        'Farmacia Nazzi vende su Shopify dal 19 luglio 2026, con lo storico di ordini e clienti dal 2023',
        'Nei primi 85 giorni le vendite online sono più che raddoppiate rispetto allo stesso periodo del 2025',
        'I clienti che tornano a comprare sono più del doppio',
        'I clic da Google sono circa 2,8 volte quelli di un anno fa',
        'Nel 2026 lo store ha già superato le vendite di tutto il 2025',
        'Oltre 1.100 persone hanno fatto il quiz AstrumDonna nel primo mese',
      ],
    },
    { type: 'cta' },
    { type: 'h2', text: 'Questo modello funziona per te?' },
    {
      type: 'paragraph',
      text: 'Se hai un prodotto vero, che le persone cercano, ma uno store che non ti segue più, sai di cosa parliamo. Il punto non è cambiare piattaforma. È farlo senza perdere quello che hai costruito, e usare il cambio per crescere.',
    },
    {
      type: 'paragraph',
      text: 'Lo facciamo per brand e farmacie che vendono già online e vogliono passare a Shopify con un piano, dei numeri e qualcuno che risponde. [Ecco come lavoriamo sulle migrazioni](/it/zero-loss-migration).',
    },
    { type: 'paragraph', text: 'Farmacia Nazzi è un cliente attivo di NoProb Agency da gennaio 2024.' },
    { type: 'cta' },
  ],
  titleEn: 'Farmacia Nazzi: From WooCommerce to Shopify, Online Sales Doubled in the First Three Months',
  excerptEn:
    'The Farmacia Nazzi case study, a compounding pharmacy since 2001 that sells its own supplements online: the move from WooCommerce to Shopify, Google traffic and the real numbers, before and after.',
  contentEn: [
    { type: 'paragraph', text: 'Sector: Pharmacy and supplements | Compounding laboratory' },
    { type: 'paragraph', text: 'Partnership length: since January 2024 (active)' },
    { type: 'paragraph', text: 'Status: live on Shopify since July 19, 2026' },
    {
      type: 'paragraph',
      text: 'Changing platform is scary for one simple reason: you built something and you do not want to lose it. Customers, Google rankings, the habits of the people who buy from you. This case study tells how we did it with Farmacia Nazzi, and what happened next.',
    },
    {
      type: 'paragraph',
      text: 'In the first 85 days on Shopify, from July 19 to October 12, 2026, compared with the same days in 2025:',
    },
    {
      type: 'list',
      items: [
        'online sales from €13,333 to €27,356: **+105%**',
        'orders from 269 to 476: **+77%**',
        'average order value from €49.60 to €57.50: **+16%**',
        'returning customers from 119 to 268: **more than double**',
        'clicks from Google about **2.8 times** those of a year ago',
      ],
    },
    { type: 'h2', text: 'The starting point' },
    {
      type: 'paragraph',
      text: 'Farmacia Giancarlo Nazzi is a pharmacy with its own compounding laboratory since 2001. It formulates and prepares its supplements in house, starting from what customers ask for at the counter every day. Every formula is notified to the Italian Ministry of Health. The best seller, Astrumkap, is designed for hair loss.',
    },
    {
      type: 'paragraph',
      text: 'A product with a story like this has a huge advantage online: people search for it. The job is to be found, and then to be chosen.',
    },
    {
      type: 'paragraph',
      text: 'When we started, in January 2024, the shop ran on WooCommerce and sold very little: €1,056 in the whole month, 24 orders.',
    },
    {
      type: 'paragraph',
      text: 'The project is led by NoProb Agency, a Shopify Partner specialized in B2C eCommerce development, migration and management.',
    },
    { type: 'h2', text: 'From 2024 to 2025: customers first, then the platform' },
    {
      type: 'paragraph',
      text: 'At the end of each year you will find two indicators: the MER (Marketing Efficiency Ratio, eCommerce revenue divided by ad spend) and the growth of online sales compared to the previous year.',
    },
    { type: 'h3', text: '2024: bringing in new people' },
    {
      type: 'paragraph',
      text: 'We spent the first year on one thing only: bringing new people to the site. Meta campaigns, with a budget that went up only when the numbers allowed it.',
    },
    {
      type: 'paragraph',
      text: 'In September 2024 the shop made €12,924, more than twelve times January. Over the year, 1,408 new customers arrived.',
    },
    {
      type: 'paragraph',
      text: 'But one number bothered us: people who bought once almost never came back. In 2024, 197 customers came back to buy again, against 1,408 new ones.',
    },
    { type: 'metrics', merValue: '3.2', note: '2024 online sales: €69,611. First year of complete data, no comparison with 2023.' },
    { type: 'h3', text: '2025: bringing back the people who already bought' },
    {
      type: 'paragraph',
      text: 'In 2025 we moved the weight to email marketing with Klaviyo: seasonal campaigns, offers for regular customers, follow ups after the purchase. Less noise, more relationship.',
    },
    {
      type: 'paragraph',
      text: 'Returning customers went from 197 to 554, almost three times as many. Average order value rose from €42.90 to €48.20.',
    },
    {
      type: 'paragraph',
      text: 'Sales grew a little, +5.8%, with ad spend similar to the year before. But the base was different: stronger and less dependent on advertising.',
    },
    { type: 'metrics', merValue: '3.2', growthValue: '+5.8%', note: '2025 online sales: €73,655.' },
    {
      type: 'paragraph',
      text: 'The next step needed three things we wanted full control over: a fast checkout on mobile, reliable data for the campaigns and the freedom to build new tools, like a quiz that recommends the right supplement. We decided to move everything to Shopify.',
    },
    { type: 'h2', text: '2026: the move to Shopify' },
    {
      type: 'image',
      src: '/images/use-case-nazzi/nazzi-homepage-shopify.webp',
      alt: 'The new Farmacia Nazzi homepage on Shopify',
      width: 2000,
      height: 1106,
    },
    {
      type: 'paragraph',
      text: 'Between May and June 2026 we built the new store while the old one kept selling. No stop, no closed shop window: in June the shop made €10,291, in July €12,628.',
    },
    {
      type: 'paragraph',
      text: 'The new site tells the pharmacy for what it is: formulas prepared by pharmacists, notified to the Ministry of Health, free shipping over €50 and a real pharmacist on WhatsApp. It is not a catalog. It is the pharmacy counter, brought online.',
    },
    {
      type: 'paragraph',
      text: 'We moved the order and customer history since 2023 to Shopify: nothing started from zero. Today the customer base counts 7,586 customers.',
    },
    { type: 'paragraph', text: 'On July 19, 2026 the new store went live.' },
    { type: 'h3', text: 'The first two weeks without advertising' },
    {
      type: 'paragraph',
      text: 'From July 29 to August 11 the campaigns stayed off. Two weeks in which every sale came from Google, from email or from people who already knew the pharmacy.',
    },
    {
      type: 'paragraph',
      text: 'In those 14 days the store made €2,808 and 45 orders. On the same days of 2025, on the old platform, it had stopped at €1,919. That is +46%, without a single euro of advertising.',
    },
    {
      type: 'paragraph',
      text: 'Average order value in those two weeks was €62.40, against €46.80 the year before.',
    },
    {
      type: 'paragraph',
      text: 'Not everything went smoothly. In the first week after the campaigns restarted, tracking was not right yet. On August 20 we fixed the pixel and Google setup, and since then conversions are read correctly. We write it because it happens, and what counts is how you fix it.',
    },
    { type: 'h3', text: 'Google: first the dip, then the climb' },
    {
      type: 'image',
      src: '/images/use-case-nazzi/nazzi-search-console-en.png',
      alt: 'Google Search Console chart for Farmacia Nazzi: clicks and impressions from August 2025 to October 2026, with the move to Shopify',
      width: 1600,
      height: 960,
    },
    {
      type: 'paragraph',
      text: 'This is the Farmacia Nazzi Search Console chart, rebuilt from the real data. The growth starts with the migration.',
    },
    {
      type: 'paragraph',
      text: 'In August clicks went down. It often happens after a migration: Google has to read the site again and work out where the pages went. From September the curve changes slope.',
    },
    {
      type: 'paragraph',
      text: 'In the last 28 days the site averaged about 46 clicks a day from Google, against 32 in the 28 days before the migration and 17 in the same period of 2025. Daily impressions went from about 1,500 to 3,400.',
    },
    {
      type: 'paragraph',
      text: 'Over the 14 months in the chart: 11,800 clicks, 624,000 impressions, 1.9% average CTR, 10.2 average position.',
    },
    { type: 'h3', text: 'The numbers after go live' },
    {
      type: 'metrics',
      merValue: '3.9',
      growthValue: '+105%',
      note: 'July 19 to October 12, 2026, compared with the same days of 2025. Advertising restarted too: €6,987 of budget in that period.',
    },
    {
      type: 'paragraph',
      text: 'The number we like most is another one: returning customers. In these three months there were 268, more than double the 119 of the year before. The 2025 work on email and the 2026 work on the site are adding up.',
    },
    {
      type: 'paragraph',
      text: 'From January to October 12, 2026 the store has already sold €88,382, 20% more than the whole of 2025.',
    },
    { type: 'h3', text: 'The quiz: advice like at the counter' },
    {
      type: 'paragraph',
      text: 'On Shopify we built online what happens in the pharmacy every day: you walk in, you say how you feel, the pharmacist advises you. The AstrumDonna quiz does the same for perimenopause, menopause, stress and sleep, cycle balance.',
    },
    {
      type: 'paragraph',
      text: 'It has been live since September 18, 2026. In less than a month over 1,100 people took the quiz and left their email, and now receive messages written for their profile.',
    },
    {
      type: 'paragraph',
      text: 'It is too early to talk about quiz sales, so we will not. But it is a contact base that did not exist before.',
    },
    { type: 'cta' },
    { type: 'h2', text: 'What this case teaches' },
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
        'Farmacia Nazzi has been selling on Shopify since July 19, 2026, with the order and customer history since 2023',
        'In the first 85 days online sales more than doubled compared with the same period of 2025',
        'Returning customers more than doubled',
        'Clicks from Google are about 2.8 times those of a year ago',
        'In 2026 the store has already passed the sales of the whole of 2025',
        'Over 1,100 people took the AstrumDonna quiz in its first month',
      ],
    },
    { type: 'cta' },
    { type: 'h2', text: 'Does this model work for you?' },
    {
      type: 'paragraph',
      text: 'If you have a real product that people search for, but a store that no longer keeps up with you, you know what we mean. The point is not to change platform. It is to do it without losing what you built, and to use the change to grow.',
    },
    {
      type: 'paragraph',
      text: 'We do it for brands and pharmacies that already sell online and want to move to Shopify with a plan, real numbers and someone who answers. [This is how we run migrations](/zero-loss-migration).',
    },
    { type: 'paragraph', text: 'Farmacia Nazzi has been an active client of NoProb Agency since January 2024.' },
    { type: 'cta' },
  ],
  archive: {
    image: '/images/use-case-nazzi/nazzi-hero-farmacia.webp',
    logo: '/images/use-case-nazzi/nazzi-logo.svg',
    logoClass: 'h-[30px] w-[196px] object-contain',
    metrics: {
      en: ['+105% online sales after Shopify', '2.8x clicks from Google'],
      it: ['+105% vendite online dopo Shopify', '2,8x clic da Google'],
    },
  },
}
