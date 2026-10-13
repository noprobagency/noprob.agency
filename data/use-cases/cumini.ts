import type { UseCase } from './index'

/**
 * Cumini case study. Rule: no direct company figures, only ratios and percentages.
 * Verified on 2026-10-13 against dashboard-cumini (Shopify + Meta + Google Ads, data from 2023-04-10,
 * Shopify live since 2025-05-19) and the screenshots in the article (tracking audit, Klaviyo report):
 * 12 months after vs before Shopify (2025-06 → 2026-05 vs 2024-06 → 2025-05): sales +67.7%, orders +49.4%,
 * AOV +12.2%, returning customers +35.3%; 2025 vs 2024 +26.3%; 2026 Jan → Oct 13 vs full 2025 +15.4%;
 * six figure months: Jan 2024 before, Nov 2025, Dec 2025, Jan 2026, Jul 2026 after; AOV 2026 vs 2023 +69%;
 * MER (sales / ad spend) 2023 Apr → Dec 6.85, 2024 6.09, 2025 5.43, 2026 YTD 3.74.
 * Removed because no source was available: MER and growth for 2022 and 2023, 2024 growth, +13.2% company
 * revenue, 95% tracking coverage, mobile CR nearly doubled, +23% email revenue, 86 → 14 urgent issues.
 */
export const cumini: UseCase = {
  slug: 'cumini-luxury-fashion-ecommerce',
  title: 'Migrazione su Shopify per una boutique di lusso: il caso Cumini, +67,7% di vendite online in 12 mesi',
  seoTitle: 'Caso Cumini: migrazione Shopify, +67,7% vendite',
  seoTitleEn: 'Cumini case: Shopify migration, +67.7% sales',
  seoDescription:
    'Come abbiamo portato su Shopify una boutique di lusso con gestionale integrato: +67,7% di vendite online in 12 mesi. Dati verificati, con le fonti.',
  seoDescriptionEn:
    'How we moved a luxury boutique with an integrated ERP to Shopify: +67.7% online sales in 12 months. Verified data, with sources.',
  excerpt: 'Il caso studio di Cumini, boutique multibrand di lusso in Friuli: quattro anni di lavoro, la migrazione su Shopify con gestionale proprietario e i risultati verificati prima e dopo.',
  image: '/images/originals/2QNUkNFRX0OUC0qTVjeplIvlFS0.jpg',
  imageAlt: 'Cumini fashion case study',
  caseType: 'Use Case',
  date: '2026-04-24',
  updated: '2026-10-13',
  about: ['Migrazione su Shopify', 'eCommerce fashion di lusso', 'Shopify', 'Tracciamento server side', 'Email marketing Klaviyo'],
  content: [
    {
      type: 'paragraph',
      text: 'Settore: Fashion retail | Luxury multibrand',
    },
    {
      type: 'paragraph',
      text: 'Durata partnership: Oltre 4 anni (attiva)',
    },
    {
      type: 'paragraph',
      text: 'Stato: In crescita costante',
    },
    {
      type: 'paragraph',
      text: 'Un eCommerce non cresce per caso, serve un sistema. Questo caso studio racconta cosa succede quando viene costruito nel modo corretto.',
    },
    {
      type: 'paragraph',
      text: 'In poco più di 4 anni, dal 2022:',
    },
    {
      type: 'list',
      items: [
        '+67,7% di vendite online nei 12 mesi dopo la migrazione su Shopify, rispetto ai 12 mesi prima',
        '+49,4% di ordini e +12,2% di scontrino medio nello stesso confronto',
        'mesi a sei cifre: uno prima di Shopify, quattro dopo la migrazione',
        'a metà ottobre 2026 le vendite online hanno già superato tutto il 2025 del 15,4%',
        'scontrino medio cresciuto del 69% rispetto al 2023',
        'punteggio del tracciamento passato da 31 a 92 su 100',
        'entrate attribuite all’email marketing +301% rispetto al periodo precedente, pari al 61,66% delle entrate totali (report Klaviyo, 1 novembre 2025, 24 aprile 2026)',
      ],
    },
    {
      type: 'h2',
      text: 'Il punto di partenza',
    },
    {
      type: 'paragraph',
      text: 'Cumini è una luxury fashion boutique multibrand italiana, con due negozi fisici in Friuli-Venezia Giulia. Da anni rappresenta un punto di riferimento per l’alta moda sul territorio, grazie a una selezione che include alcuni dei nomi più rilevanti del prêt-à-porter internazionale.',
    },
    {
      type: 'paragraph',
      text: 'Un posizionamento solido che, tuttavia, non trovava ancora una piena espressione nel canale digitale: l’eCommerce era già attivo, ma usato come sola estensione del punto vendita fisico e non sviluppato come strumento strategico.',
    },
    {
      type: 'paragraph',
      text: 'Il tasso di conversione era infatti vicino allo zero, la navigazione poco intuitiva e tecnicamente vincolata a un fornitore esterno collegato al gestionale interno, con margini di intervento limitati.',
    },
    {
      type: 'paragraph',
      text: 'Dal punto di vista marketing, invece, il quadro era piuttosto frammentato: non c’era un sistema di tracciamento dati, i social media erano penalizzati da gestioni precedenti, l’email marketing era limitato a invii sporadici e le attività di advertising erano minime e senza una struttura definita.',
    },
    {
      type: 'paragraph',
      text: 'Mancava, in sintesi, un ecosistema strutturato capace di supportare lo sviluppo del brand anche sul digitale.',
    },
    {
      type: 'paragraph',
      text: "Il progetto è seguito da NoProb Agency, Shopify Partner specializzato in sviluppo, migrazione e gestione eCommerce B2C, con cui Cumini lavora in esclusiva da agosto 2022.",
    },
    {
      type: 'h2',
      text: 'Dal 2022 al 2024: gli anni di costruzione',
    },
    {
      type: 'paragraph',
      text: 'I dettagli di questi anni richiederebbero un’analisi a sé. Qui vengono sintetizzati per offrire il contesto necessario, non per costruire un manuale operativo.',
    },
    {
      type: 'paragraph',
      text: 'Al termine di ogni anno trovi due indicatori: il MER (Marketing Efficiency Ratio, cioè fatturato eCommerce diviso spesa pubblicitaria totale) e la crescita del fatturato eCommerce rispetto all’anno precedente.',
    },
    {
      type: 'h3',
      text: '2022: impostazione del progetto e prime integrazioni',
    },
    {
      type: 'paragraph',
      text: 'Il 2022 ha segnato l’avvio della gestione operativa dell’intero progetto.',
    },
    {
      type: 'paragraph',
      text: 'L’obiettivo era iniziare a integrare alcuni primi interventi in modo progressivo, calibrandoli sulle reali necessità del momento.',
    },
    {
      type: 'paragraph',
      text: 'La prima attività è stata l’attivazione di Google Ads, affidata a un professionista verticale nel settore.',
    },
    {
      type: 'paragraph',
      text: 'La situazione di partenza era favorevole: un catalogo composto da brand di lusso con una selezione distintiva e prezzi competitivi sul digitale, unito a un pubblico già “formato”, che cercava attivamente quei prodotti online.',
    },
    {
      type: 'paragraph',
      text: 'In pochi mesi, questo unico canale ha permesso di raggiungere lo stesso fatturato eCommerce dell’intero anno precedente.',
    },
    {
      type: 'paragraph',
      text: 'Questo risultato va interpretato nel modo corretto.',
    },
    {
      type: 'paragraph',
      text: 'Non è stato un picco eccezionale, ma la risposta a una domanda che, in fondo, era già esistente: l’attivazione di Google Ads ha semplicemente reso visibile un’offerta che prima non lo era.',
    },
    {
      type: 'h3',
      text: '2023: sviluppo e consolidamento operativo',
    },
    {
      type: 'paragraph',
      text: 'Nel secondo anno, la strategia si è strutturata attorno ai momenti chiave del calendario commerciale, dai saldi ai lanci delle nuove collezioni.',
    },
    {
      type: 'paragraph',
      text: 'Il sistema ha iniziato a prendere forma, con un primo picco rilevante già a gennaio, durante i saldi invernali.',
    },
    {
      type: 'paragraph',
      text: 'Il principale limite, però, restava la piattaforma eCommerce.',
    },
    {
      type: 'paragraph',
      text: 'Costruita su codice proprietario e non gestita direttamente, presentava criticità tecniche ricorrenti e difficilmente prevedibili: instabilità del sito, interruzioni nei processi di acquisto e una conseguente perdita di vendite.',
    },
    {
      type: 'paragraph',
      text: 'Questo ha avuto un impatto diretto anche sulle attività marketing. In più momenti è stato necessario ridurre o sospendere le campagne advertising, per evitare di investire traffico su un’infrastruttura non affidabile.',
    },
    {
      type: 'paragraph',
      text: 'Nel corso dell’anno sono stati fatti diversi tentativi per aggirare questi limiti: integrazioni esterne, modifiche ai flussi di tracciamento, adattamenti operativi per mantenere attivi i canali principali.',
    },
    {
      type: 'paragraph',
      text: 'Interventi utili a tamponare le criticità, ma non risolutivi, perché non intervenivano direttamente sulla causa del problema.',
    },
    {
      type: 'paragraph',
      text: 'In questo contesto, la leva principale è stata la flessibilità: integrazione rapida di competenze verticali, test continui, lettura dei dati e adattamento costante.',
    },
    {
      type: 'paragraph',
      text: 'Nonostante le limitazioni tecniche, il fatturato eCommerce ha registrato una crescita significativa.',
    },
    {
      type: 'metrics',
      merValue: '6',
      note: 'Da aprile a dicembre 2023: da qui partono i dati della dashboard.',
    },
    {
      type: 'h3',
      text: '2024: verso una nuova infrastruttura',
    },
    {
      type: 'paragraph',
      text: 'Gennaio 2024 segna un passaggio simbolico: il primo mese a sei cifre di fatturato online.',
    },
    {
      type: 'paragraph',
      text: 'Un risultato che, due anni prima, sembrava totalmente fuori portata.',
    },
    {
      type: 'paragraph',
      text: 'Il limite principale, tuttavia, restava lo stesso: la piattaforma eCommerce presentava ancora crash improvvisi, non ci permetteva né di impostare attività di marketing automation né di inserire sistemi di tracciamento completi e precisi.',
    },
    {
      type: 'paragraph',
      text: 'Inoltre, a settembre 2024, il catalogo Google è rimasto offline per tre settimane consecutive, compromettendo uno dei momenti più strategici dell’anno (saldi).',
    },
    {
      type: 'paragraph',
      text: 'Tutti i dati indicavano una perdita costante di vendite potenziali, legata a fattori tecnici fuori dal nostro controllo.',
    },
    {
      type: 'paragraph',
      text: 'Parallelamente, il team ha raggiunto una maggiore stabilità operativa: i professionisti coinvolti lavoravano in modo sempre più coordinato sui diversi canali, rendendo la gestione complessiva più efficace.',
    },
    {
      type: 'paragraph',
      text: 'In questo contesto si è aperta una nuova fase del progetto.',
    },
    {
      type: 'paragraph',
      text: 'Accanto alle attività di performance ci siamo dedicati al branding, con l’introduzione di nuove linee editoriali per i social, con una maggiore attenzione alla coerenza complessiva dell’immagine, con l’obiettivo di rendere il brand più riconoscibile e coerente anche nel digitale.',
    },
    {
      type: 'paragraph',
      text: 'Tutto ciò ha permesso al brand di continuare a crescere in modo coerente su tutti i fronti, nonostante i limiti della piattaforma.',
    },
    {
      type: 'paragraph',
      text: 'A fine anno, insieme al cliente, è stata presa una decisione strategica e pianificata come investimento sul lungo termine: migrare l’intero ecosistema su una piattaforma moderna e sviluppare internamente una soluzione tecnica in grado di integrarsi con il gestionale proprietario di Cumini.',
    },
    {
      type: 'metrics',
      merValue: '6',
      note: 'La crescita sul 2023 non è riportata perché il 2023 in dashboard è parziale.',
    },
    {
      type: 'h2',
      text: '2025: Un cambio strutturale con Shopify',
    },
    {
      type: 'image',
      src: '/images/use-case-cumini/use-case-cumini5.png',
      alt: 'Cumini eCommerce su Shopify',
    },
    {
      type: 'paragraph',
      text: 'Con Shopify, tutto quello che prima non funzionava ha smesso di essere un problema',
    },
    {
      type: 'list',
      items: [
        'tracciamento: punteggio complessivo da 31 a 92 su 100',
        'email automation finalmente attiva e misurabile',
        'zero crash, zero cataloghi offline',
        'decisioni basate su dati precisi, non su stime',
      ],
    },
    {
      type: 'paragraph',
      text: 'Il passaggio a Shopify non è stato un semplice cambio di piattaforma, ma un vero e proprio punto di svolta per l’intero progetto: ecco perché.',
    },
    {
      type: 'paragraph',
      text: 'I primi mesi del 2025 si sono rivelati i migliori di sempre per l’eCommerce.',
    },
    {
      type: 'paragraph',
      text: 'Anni di lavoro, processi interni ben consolidati e la stabilità del team stavano finalmente producendo risultati prevedibili e pianificabili.',
    },
    {
      type: 'paragraph',
      text: 'La struttura era solida, ma mancava ancora una piattaforma all’altezza.',
    },
    {
      type: 'paragraph',
      text: 'Dalla primavera 2025, per circa tre mesi, il team si è dedicato completamente alla pianificazione e all’organizzazione della transizione verso Shopify: architettura tecnica, integrazioni, flussi e tracciamento.',
    },
    {
      type: 'paragraph',
      text: 'Il nuovo store è andato online su Shopify il 19 maggio 2025. Da lì a dicembre si è svolta la fase di migrazione attiva, accompagnata da un costante lavoro di ottimizzazione su tutti i fronti: recupero del traffico SEO, risoluzione di problemi tecnici, formazione del personale, automazione dei processi operativi, miglioramento della conversione (CRO) e integrazione con strumenti come Klaviyo e Stape.',
    },
    {
      type: 'paragraph',
      text: 'Il 2025 si è chiuso con il record assoluto di fatturato, nonostante i mesi di transizione tecnica.',
    },
    {
      type: 'metrics',
      merValue: '5',
      growthValue: '+26,3%',
      note: 'Record storico in quel momento, già superato dal 2026.',
    },
    {
      type: 'cta',
    },
    {
      type: 'h3',
      text: 'Tracciamento: da parziale a completo',
    },
    {
      type: 'image',
      src: '/images/use-case-cumini/use-case-cumini2.png',
      alt: 'Tracking system score pre e post Sprint',
      maxWidth: '420px',
    },
    {
      type: 'paragraph',
      text: 'Prima di Shopify, il sistema di tracciamento era un “accumulo di patch”: integrazioni parziali, dati mancanti e attribuzioni errate tra i diversi canali. Sapevamo che i numeri non erano affidabili, ma non immaginavamo fino a che punto.',
    },
    {
      type: 'paragraph',
      text: 'Con la migrazione abbiamo introdotto un sistema di tracking server to server tramite Stape.',
    },
    {
      type: 'paragraph',
      text: 'Ad oggi, il sito raggiunge un punteggio complessivo di 92/100, con gli Analytics a 100 e le Ads a 97.',
    },
    {
      type: 'paragraph',
      text: 'Questo ci dà una visione completa di ciò che accade in ogni canale: quali campagne producono risultati, dove gli utenti abbandonano il funnel e qual è il reale valore di ogni touchpoint.',
    },
    {
      type: 'paragraph',
      text: 'Naturalmente, un tracciamento affidabile non è un obiettivo in sé, ma la condizione necessaria per prendere tutte le decisioni a livello strategico, di marketing e di comunicazione.',
    },
    {
      type: 'h3',
      text: 'Decidere sui dati: la svolta strategica',
    },
    {
      type: 'image',
      src: '/images/use-case-cumini/use-case-cumini6.png',
      alt: 'Dashboard metriche mensili: ROAS, MER, margine',
    },
    {
      type: 'paragraph',
      text: 'Con Shopify, abbiamo accesso a una dashboard chiara, facilmente integrabile con strumenti di analisi esterni e capace di restituire metriche che prima calcolavamo manualmente su fogli Google.',
    },
    {
      type: 'paragraph',
      text: 'Parliamo di numeri precisi, non di stime generiche: CAC complessivo, nCAC (costo di acquisizione di un nuovo cliente), ROAS per canale, ROAS totale dello shop, margine di contribuzione reale al netto di tutti i costi.',
    },
    {
      type: 'paragraph',
      text: 'Incrociando tutti questi dati con la stagionalità, riusciamo a leggere con chiarezza le dinamiche dello shop: quanto costa davvero un nuovo cliente, quando è il momento giusto per fare più leva sulle campagne e quando rallentare, quali strategie restano solide nel tempo e quali vincono solo durante i saldi.',
    },
    {
      type: 'paragraph',
      text: 'Ad oggi, il focus è sulla retention e sulla LTV: la crescita non passa solo dall’acquisizione di nuovi clienti, ma dal saper valorizzare quelli esistenti e aumentare il loro valore nel tempo.',
    },
    {
      type: 'h3',
      text: 'Conversion rate: priorità mobile',
    },
    {
      type: 'paragraph',
      text: 'Il tasso di conversione da mobile rappresenta uno degli indicatori più sensibili per un eCommerce fashion.',
    },
    {
      type: 'paragraph',
      text: 'Oggi, nel caso di Cumini, la maggior parte delle visite proviene da smartphone (un dato ormai standard nel settore) ma fino a poco tempo fa la quasi totalità delle transazioni avveniva ancora da desktop.',
    },
    {
      type: 'paragraph',
      text: 'Questo squilibrio evidenziava una criticità chiara: il percorso d’acquisto su mobile non era sufficientemente fluido o intuitivo, e la user experience stava frenando clienti già intenzionati all’acquisto.',
    },
    {
      type: 'paragraph',
      text: 'Con la transizione a Shopify, la situazione è cambiata radicalmente grazie a un checkout nativo progettato per l’esperienza mobile, privo di errori e perfettamente coerente con gli standard del brand.',
    },
    {
      type: 'paragraph',
      text: 'In un eCommerce fashion con un AOV elevato, anche un singolo punto percentuale di incremento nel tasso di conversione può generare decine di migliaia di euro di ricavi aggiuntivi ogni anno.',
    },
    {
      type: 'h3',
      text: 'Klaviyo e marketing automation: dati affidabili, strategie più efficaci',
    },
    {
      type: 'image',
      src: '/images/use-case-cumini/use-case-cumini-7.png',
      alt: 'Klaviyo: riepilogo prestazioni ed entrate attribuite',
    },
    {
      type: 'paragraph',
      text: 'Con il passaggio a Shopify, l’integrazione con Klaviyo è diventata nativa e perfettamente funzionante. In precedenza, la connessione era instabile: dati incompleti, acquisti non riconosciuti, flussi automatici intermittenti. Anche le automazioni più semplici operavano in modo irregolare.',
    },
    {
      type: 'paragraph',
      text: 'Oggi Klaviyo riceve dati puliti e aggiornati in tempo reale su ogni comportamento utente. I flussi sono attivi, coerenti, performanti. Il risultato? Tra il 1° novembre 2025 e il 24 aprile 2026 le entrate attribuite a Klaviyo sono cresciute del 301% rispetto al periodo precedente, e valgono il 61,66% delle entrate totali dello store.',
    },
    {
      type: 'h3',
      text: 'Nuova collezione, prezzo pieno',
    },
    {
      type: 'paragraph',
      text: 'Nel fashion multibrand, le dinamiche di vendita cambiano in modo significativo tra periodi di saldo e prezzo pieno.',
    },
    {
      type: 'paragraph',
      text: 'Molti store tendono a ridurre o interrompere l’advertising durante il lancio delle nuove collezioni, perché il ROAS appare più basso nel breve periodo.',
    },
    {
      type: 'paragraph',
      text: 'Il nostro approccio è stato diverso: un prodotto da 400€ raramente viene acquistato alla prima visita. Il processo decisionale è più lungo, richiede più interazioni e tempo.',
    },
    {
      type: 'paragraph',
      text: 'Per questo, gli investimenti durante i periodi di lancio della nuova collezione non sono finalizzati alla conversione immediata, ma alla costruzione di una base di utenti che, nella maggior parte dei casi, si attiva nei mesi successivi, spesso in corrispondenza dei saldi.',
    },
    {
      type: 'paragraph',
      text: 'Per gestire questa strategia in modo davvero profittevole servono dati accurati: breakeven per campagna, costo per add-to-cart, costo per inizio checkout, CAC e nCAC monitorati in tempo reale.',
    },
    {
      type: 'paragraph',
      text: 'Oggi questi numeri si guardano mese per mese. Ci sono mesi che costruiscono e mesi che raccolgono, e alcuni mesi di lancio chiudono sotto il pareggio. Ma su base annua il marketing resta in positivo, sia nel 2025 sia nel 2026.',
    },
    {
      type: 'h2',
      text: '2026: nuovi risultati',
    },
    {
      type: 'paragraph',
      text: 'Nei mesi successivi alla migrazione, i risultati hanno iniziato a consolidarsi.',
    },
    {
      type: 'paragraph',
      text: 'Per misurarli in modo onesto abbiamo messo a confronto i 12 mesi prima di Shopify (da giugno 2024 a maggio 2025) con i 12 mesi dopo (da giugno 2025 a maggio 2026). Stessi negozi, stesso catalogo, stessa squadra.',
    },
    {
      type: 'list',
      items: [
        'vendite online: **+67,7%**',
        'ordini: **+49,4%**',
        'scontrino medio: **+12,2%**',
        'clienti che tornano a comprare: **+35,3%**',
      ],
    },
    {
      type: 'paragraph',
      text: 'Il 2026 conferma la direzione. A metà ottobre lo store ha già venduto online il 15,4% in più di tutto il 2025, e luglio 2026 è stato il mese più alto di sempre.',
    },
    {
      type: 'paragraph',
      text: 'Dalla migrazione i mesi a sei cifre sono diventati quattro: novembre e dicembre 2025, gennaio e luglio 2026. Prima di Shopify era successo una volta sola, a gennaio 2024.',
    },
    {
      type: 'paragraph',
      text: 'Non è ancora una media mensile a sei cifre, e non lo scriviamo. È una cosa più utile: i picchi arrivano quando li pianifichiamo, tra saldi, Black Friday e Natale.',
    },
    {
      type: 'metrics',
      merValue: '3',
      growthValue: '+15,4%',
      note: 'Da gennaio a metà ottobre 2026, confrontato con tutto il 2025. Anno ancora in corso: il MER scende perché stiamo investendo di più in advertising.',
    },
    {
      type: 'paragraph',
      text: 'Ad oggi, Cumini ha raggiunto un livello di maturità che le permette di crescere in modo costante e prevedibile nel tempo.',
    },
    {
      type: 'h2',
      text: 'Metodo, numeri, crescita: la combinazione che fa la differenza',
    },
    {
      type: 'paragraph',
      text: 'La crescita di un eCommerce fashion non è mai lineare: alterna fasi di accelerazione, momenti di stallo e periodi in cui si lavora per costruire, non per raccogliere.',
    },
    {
      type: 'paragraph',
      text: 'Il MER lo mostra bene. Era 6,8 nel 2023 ed è 3,7 nel 2026: scende man mano che investiamo di più in advertising, in un mercato sempre più competitivo. Eppure le vendite online crescono: +26,3% nel 2025 e, a metà ottobre 2026, già il 15,4% in più di tutto il 2025.',
    },
    {
      type: 'paragraph',
      text: 'Per questo non guardiamo solo il MER, ma anche il margine di contribuzione: quanto resta all’azienda dopo pubblicità e costi. È la metrica che conta davvero. Su base annua il marketing è in positivo sia nel 2025 sia nel 2026.',
    },
    {
      type: 'paragraph',
      text: 'Non è una linea sempre in salita. Alcuni mesi di lancio chiudono sotto il pareggio, perché costruiscono la domanda che arriva con i saldi. Conta il risultato dell’anno, non il singolo mese.',
    },
    {
      type: 'paragraph',
      text: 'Nel lungo periodo, con numeri coerenti e una strategia fondata sulla stabilità, il valore tende a crescere in modo costante e ad accumulare risultati duraturi. È il frutto di un lavoro pensato e portato avanti con una logica di lungo termine.',
    },
    {
      type: 'h2',
      text: 'Oggi: struttura e crescita',
    },
    {
      type: 'paragraph',
      text: 'Nel fashion, lo spazio tra la scoperta di un brand e l’acquisto è ampio e non riconducibile a un singolo canale.',
    },
    {
      type: 'paragraph',
      text: 'Per questo, la crescita non può essere gestita in modo isolato. Richiede una strategia multicanale integrata, in cui ogni touchpoint contribuisce in modo diverso al percorso d’acquisto.',
    },
    {
      type: 'paragraph',
      text: 'Social, email, Google, Meta, SEO: ogni canale ha un ruolo specifico. Il ROAS diretto, da solo, non è sufficiente per valutarne l’efficacia. Un utente può scoprire il brand su Instagram, ritrovarlo su Google, ricevere un’email e acquistare settimane dopo, spesso durante i saldi. È un percorso distribuito nel tempo, che si costruisce attraverso interazioni successive.',
    },
    {
      type: 'paragraph',
      text: 'Per questo, nessun canale viene interrotto sulla base delle sole performance di breve periodo. Il risultato è sempre l’effetto combinato di più leve che lavorano insieme.',
    },
    {
      type: 'paragraph',
      text: 'Questo approccio si riflette direttamente sui risultati complessivi. Il vero indicatore di crescita non è il fatturato online in sé, ma la capacità di generare valore in modo costante e prevedibile nel tempo.',
    },
    {
      type: 'paragraph',
      text: 'Operativamente, il lavoro si basa sul monitoraggio continuo degli stessi indicatori (MER, ROAS per canale, margine di contribuzione, CAC e tasso di riacquisto) da cui derivano le decisioni. I risultati sono il prodotto di un insieme di scelte progressive, non di singole azioni isolate.',
    },
    {
      type: 'paragraph',
      text: 'La variabile determinante è il bilanciamento. Gestire un eCommerce oggi significa coordinare in modo coerente tutte le leve: advertising, branding, email marketing, SEO, sviluppo tecnico e analytics.',
    },
    {
      type: 'paragraph',
      text: 'È da questo equilibrio che dipende il potenziale di crescita. Anche una sola area gestita in modo non adeguato può limitarlo.',
    },
    {
      type: 'paragraph',
      text: 'Ad oggi:',
    },
    {
      type: 'list',
      items: [
        'Le vendite online sono cresciute del 67,7% nei 12 mesi dopo la migrazione a Shopify',
        'I mesi a sei cifre sono passati da uno prima di Shopify a quattro dopo la migrazione',
        'Il 2026 ha già superato le vendite online di tutto il 2025',
        'Il punteggio del tracciamento è passato da 31 a 92 su 100',
        'Le entrate attribuite all\'email marketing sono cresciute del 301% con Klaviyo integrato correttamente',
      ],
    },
    {
      type: 'cta',
    },
    {
      type: 'h2',
      text: 'Questo modello funziona per te?',
    },
    {
      type: 'paragraph',
      text: 'Se sei arrivato fin qui, probabilmente riconosci qualcosa della tua realtà in queste pagine. Un brand con un prodotto forte e negozi fisici che performano bene, ma con un eCommerce che non esprime il suo pieno potenziale. O uno store online attivo, ma privo di una vera governance: dati incompleti, advertising guidato dall’intuizione, piattaforma tecnica che non scala con l’ambizione del business.',
    },
    {
      type: 'paragraph',
      text: 'Il modello costruito con Cumini è pensato per boutique fashion e brand multibrand B2C che vantano già un prodotto validato e un fatturato aziendale strutturato. È per chi vuole trasformare il canale online in un asset strategico, gestito con la stessa cura e attenzione dedicate al punto vendita fisico.',
    },
    {
      type: 'paragraph',
      text: 'Non è la soluzione per chi cerca risultati in 30 giorni, né per chi desidera un semplice fornitore a cui delegare senza coinvolgimento.',
    },
    {
      type: 'paragraph',
      text: 'Cumini è un cliente attivo di NoProb Agency da oltre 4 anni. [Ecco come lavoriamo sulle migrazioni a Shopify](/it/sprint-migrazione-shopify). Se parti da WooCommerce, leggi il [caso Integratori Nazzi DTC](/it/casi-studio/integratori-nazzi-dtc-shopify).',
    },
    {
      type: 'cta',
    },
  ],
  titleEn: 'Shopify Migration for a Luxury Boutique: the Cumini Case, +67.7% Online Sales in 12 Months',
  excerptEn: 'The Cumini case study, a luxury multibrand boutique in Friuli, Italy: four years of work, the move to Shopify with a proprietary ERP and the verified results before and after.',
  contentEn: [
    { type: 'paragraph', text: 'Sector: Fashion retail | Luxury multibrand' },
    { type: 'paragraph', text: 'Partnership length: Over 4 years (active)' },
    { type: 'paragraph', text: 'Status: In steady growth' },
    {
      type: 'paragraph',
      text: "An eCommerce doesn't grow by chance, it needs a system. This case study describes what happens when one is built the right way.",
    },
    { type: 'paragraph', text: 'In just over 4 years, since 2022:' },
    {
      type: 'list',
      items: [
        '+67.7% online sales in the 12 months after the move to Shopify, compared with the 12 months before',
        '+49.4% orders and +12.2% average order value in the same comparison',
        'six figure months: one before Shopify, four after the migration',
        'by mid October 2026 online sales had already passed the whole of 2025 by 15.4%',
        'average order value up 69% compared with 2023',
        'tracking score up from 31 to 92 out of 100',
        'revenue attributed to email marketing +301% on the previous period, 61.66% of total revenue (Klaviyo report, November 1, 2025 to April 24, 2026)',
      ],
    },
    { type: 'h2', text: 'The starting point' },
    {
      type: 'paragraph',
      text: 'Cumini is an Italian luxury fashion multibrand boutique with two physical stores in Friuli-Venezia Giulia. For years it has been a reference point for high fashion in the region, thanks to a selection that includes some of the most relevant names in international ready-to-wear.',
    },
    {
      type: 'paragraph',
      text: 'A solid positioning that, however, was not yet fully expressed on the digital channel: the eCommerce was already active, but used as a mere extension of the physical store and not developed as a strategic tool.',
    },
    {
      type: 'paragraph',
      text: 'The conversion rate was in fact close to zero, navigation was not intuitive, and the platform was technically tied to an external vendor connected to the internal ERP, with limited room for intervention.',
    },
    {
      type: 'paragraph',
      text: 'From a marketing standpoint, the picture was rather fragmented: there was no data tracking system, social media had been penalized by previous management, email marketing was limited to occasional sends, and advertising activities were minimal and lacked a defined structure.',
    },
    {
      type: 'paragraph',
      text: "What was missing, in short, was a structured ecosystem capable of supporting the brand's development on the digital channel as well.",
    },
    {
      type: 'paragraph',
      text: 'The project is led by NoProb Agency, a Shopify Partner specialized in B2C eCommerce development, migration, and management, working exclusively with Cumini since August 2022.',
    },
    { type: 'h2', text: 'From 2022 to 2024: the construction years' },
    {
      type: 'paragraph',
      text: 'The details of these years would deserve a separate analysis. They are summarized here to provide the necessary context, not to build an operational manual.',
    },
    {
      type: 'paragraph',
      text: 'At the end of each year you will find two indicators: the MER (Marketing Efficiency Ratio, eCommerce revenue divided by total ad spend) and the growth of eCommerce revenue compared to the previous year.',
    },
    { type: 'h3', text: '2022: project setup and first integrations' },
    {
      type: 'paragraph',
      text: '2022 marked the beginning of the operational management of the entire project.',
    },
    {
      type: 'paragraph',
      text: 'The objective was to start integrating some initial interventions progressively, calibrating them to the real needs of the moment.',
    },
    {
      type: 'paragraph',
      text: 'The first activity was the activation of Google Ads, entrusted to a vertical specialist in the sector.',
    },
    {
      type: 'paragraph',
      text: "The starting situation was favorable: a catalog of luxury brands with a distinctive selection and competitive online prices, combined with an audience that was already 'formed' and actively searching for those products online.",
    },
    {
      type: 'paragraph',
      text: 'In a few months, this single channel allowed us to achieve the same eCommerce revenue as the entire previous year.',
    },
    { type: 'paragraph', text: 'This result should be interpreted correctly.' },
    {
      type: 'paragraph',
      text: 'It was not an exceptional spike, but the response to a demand that already existed: the activation of Google Ads simply made an offer visible that previously was not.',
    },
    { type: 'h3', text: '2023: development and operational consolidation' },
    {
      type: 'paragraph',
      text: 'In the second year, the strategy structured itself around the key moments of the commercial calendar, from sales seasons to new collection launches.',
    },
    {
      type: 'paragraph',
      text: 'The system began to take shape, with a first significant peak already in January, during winter sales.',
    },
    {
      type: 'paragraph',
      text: 'The main limitation, however, remained the eCommerce platform.',
    },
    {
      type: 'paragraph',
      text: 'Built on proprietary code and not directly managed, it presented recurring and hardly predictable technical issues: site instability, interruptions in the purchase processes, and a consequent loss of sales.',
    },
    {
      type: 'paragraph',
      text: 'This had a direct impact on marketing activities as well. At several moments it was necessary to reduce or suspend advertising campaigns, to avoid investing traffic into an unreliable infrastructure.',
    },
    {
      type: 'paragraph',
      text: 'During the year, several attempts were made to work around these limitations: external integrations, modifications to tracking flows, operational adaptations to keep the main channels active.',
    },
    {
      type: 'paragraph',
      text: 'Useful interventions to mitigate the issues, but not resolutive, because they did not address the root cause.',
    },
    {
      type: 'paragraph',
      text: 'In this context, the main lever was flexibility: rapid integration of vertical skills, continuous testing, data reading, and constant adaptation.',
    },
    {
      type: 'paragraph',
      text: 'Despite the technical limitations, eCommerce revenue recorded significant growth.',
    },
    { type: 'metrics', merValue: '6', note: 'April to December 2023: this is where the dashboard data starts.' },
    { type: 'h3', text: '2024: toward a new infrastructure' },
    {
      type: 'paragraph',
      text: 'January 2024 marked a symbolic moment: the first month with six figure online revenue.',
    },
    {
      type: 'paragraph',
      text: 'A result that, two years earlier, seemed completely out of reach.',
    },
    {
      type: 'paragraph',
      text: 'The main limitation, however, remained the same: the eCommerce platform still presented sudden crashes and did not allow us to set up marketing automation activities or implement complete and accurate tracking systems.',
    },
    {
      type: 'paragraph',
      text: 'Furthermore, in September 2024, the Google catalog remained offline for three consecutive weeks, compromising one of the most strategic moments of the year (sales).',
    },
    {
      type: 'paragraph',
      text: 'All the data indicated a constant loss of potential sales, linked to technical factors outside our control.',
    },
    {
      type: 'paragraph',
      text: 'In parallel, the team reached greater operational stability: the professionals involved worked in an increasingly coordinated way across the various channels, making overall management more effective.',
    },
    { type: 'paragraph', text: 'In this context, a new phase of the project opened up.' },
    {
      type: 'paragraph',
      text: 'Alongside performance activities, we dedicated ourselves to branding, with new editorial lines for social media and greater attention to the overall consistency of the image, with the goal of making the brand more recognizable and consistent in the digital space as well.',
    },
    {
      type: 'paragraph',
      text: "All this allowed the brand to continue growing in a coherent way on all fronts, despite the platform's limitations.",
    },
    {
      type: 'paragraph',
      text: "At the end of the year, together with the client, a strategic decision was made and planned as a long-term investment: to migrate the entire ecosystem to a modern platform and develop in-house a technical solution capable of integrating with Cumini's proprietary ERP.",
    },
    { type: 'metrics', merValue: '6', note: 'Growth on 2023 is not reported because 2023 is partial in the dashboard.' },
    { type: 'h2', text: '2025: A structural shift with Shopify' },
    {
      type: 'image',
      src: '/images/use-case-cumini/use-case-cumini5.png',
      alt: 'Cumini eCommerce on Shopify',
    },
    {
      type: 'paragraph',
      text: "With Shopify, everything that previously didn't work stopped being a problem.",
    },
    {
      type: 'list',
      items: [
        'tracking: overall score from 31 to 92 out of 100',
        'email automation finally active and measurable',
        'zero crashes, zero offline catalogs',
        'decisions based on accurate data, not estimates',
      ],
    },
    {
      type: 'paragraph',
      text: 'The transition to Shopify was not just a platform change, but a true turning point for the entire project: here is why.',
    },
    {
      type: 'paragraph',
      text: 'The first months of 2025 turned out to be the best ever for the eCommerce.',
    },
    {
      type: 'paragraph',
      text: 'Years of work, well-consolidated internal processes, and team stability were finally producing predictable and plannable results.',
    },
    {
      type: 'paragraph',
      text: 'The structure was solid, but a platform up to standard was still missing.',
    },
    {
      type: 'paragraph',
      text: 'Starting in spring 2025, for about three months, the team dedicated itself entirely to planning and organizing the transition to Shopify: technical architecture, integrations, flows, and tracking.',
    },
    {
      type: 'paragraph',
      text: 'The new store went live on Shopify on May 19, 2025. From then until December the active migration phase took place, accompanied by constant optimization work on all fronts: SEO traffic recovery, technical issue resolution, staff training, automation of operational processes, conversion rate optimization (CRO), and integration with tools like Klaviyo and Stape.',
    },
    {
      type: 'paragraph',
      text: '2025 closed with the all-time revenue record, despite the months of technical transition.',
    },
    {
      type: 'metrics',
      merValue: '5',
      growthValue: '+26.3%',
      note: 'All time record at that point, already passed by 2026.',
    },
    { type: 'cta' },
    { type: 'h3', text: 'Tracking: from partial to complete' },
    {
      type: 'image',
      src: '/images/use-case-cumini/use-case-cumini2.png',
      alt: 'Tracking system score before and after the Sprint',
      maxWidth: '420px',
    },
    {
      type: 'paragraph',
      text: "Before Shopify, the tracking system was a 'patch accumulation': partial integrations, missing data, and incorrect attribution across channels. We knew the numbers were not reliable, but we did not imagine to what extent.",
    },
    {
      type: 'paragraph',
      text: 'With the migration we introduced a server to server tracking system through Stape.',
    },
    {
      type: 'paragraph',
      text: 'Today, the site reaches an overall score of 92/100, with Analytics at 100 and Ads at 97.',
    },
    {
      type: 'paragraph',
      text: 'This gives us a complete view of what happens in each channel: which campaigns produce results, where users abandon the funnel, and what the real value of each touchpoint is.',
    },
    {
      type: 'paragraph',
      text: 'Naturally, reliable tracking is not an objective in itself, but the necessary condition for making all decisions at a strategic, marketing, and communication level.',
    },
    { type: 'h3', text: 'Deciding on data: the strategic shift' },
    {
      type: 'image',
      src: '/images/use-case-cumini/use-case-cumini6.png',
      alt: 'Monthly metrics dashboard: ROAS, MER, margin',
    },
    {
      type: 'paragraph',
      text: 'With Shopify, we have access to a clear dashboard, easily integrable with external analysis tools and capable of returning metrics that we previously calculated manually on Google Sheets.',
    },
    {
      type: 'paragraph',
      text: 'We are talking about precise numbers, not generic estimates: total CAC, nCAC (new customer acquisition cost), ROAS by channel, total ROAS of the shop, real contribution margin net of all costs.',
    },
    {
      type: 'paragraph',
      text: 'By cross-referencing all this data with seasonality, we are able to clearly read the dynamics of the shop: how much a new customer really costs, when is the right time to push more on campaigns and when to slow down, which strategies remain solid over time, and which only win during sales.',
    },
    {
      type: 'paragraph',
      text: "Today, the focus is on retention and LTV: growth doesn't come only from acquiring new customers, but from knowing how to value existing ones and increasing their value over time.",
    },
    { type: 'h3', text: 'Conversion rate: mobile priority' },
    {
      type: 'paragraph',
      text: 'The mobile conversion rate is one of the most sensitive indicators for a fashion eCommerce.',
    },
    {
      type: 'paragraph',
      text: 'Today, in the case of Cumini, most visits come from smartphones (a now-standard data point in the sector), but until recently almost all transactions still happened from desktop.',
    },
    {
      type: 'paragraph',
      text: 'This imbalance highlighted a clear criticality: the mobile purchase journey was not fluid or intuitive enough, and user experience was holding back customers who already intended to purchase.',
    },
    {
      type: 'paragraph',
      text: "With the transition to Shopify, the situation changed radically thanks to a native checkout designed for the mobile experience, free of errors and perfectly aligned with the brand's standards.",
    },
    {
      type: 'paragraph',
      text: 'In a fashion eCommerce with a high AOV, even a single percentage point of increase in conversion rate can generate tens of thousands of euros of additional revenue every year.',
    },
    {
      type: 'h3',
      text: 'Klaviyo and marketing automation: reliable data, more effective strategies',
    },
    {
      type: 'image',
      src: '/images/use-case-cumini/use-case-cumini-7.png',
      alt: 'Klaviyo: performance summary and attributed revenue',
    },
    {
      type: 'paragraph',
      text: 'With the move to Shopify, the integration with Klaviyo became native and perfectly functional. Previously, the connection was unstable: incomplete data, unrecognized purchases, intermittent automatic flows. Even the simplest automations operated irregularly.',
    },
    {
      type: 'paragraph',
      text: 'Today Klaviyo receives clean and updated data in real time on every user behavior. The flows are active, consistent, and high-performing. The result? Between November 1, 2025 and April 24, 2026 revenue attributed to Klaviyo grew 301% on the previous period, and it is worth 61.66% of the store total revenue.',
    },
    { type: 'h3', text: 'New collection, full price' },
    {
      type: 'paragraph',
      text: 'In multibrand fashion, sales dynamics change significantly between sale periods and full-price periods.',
    },
    {
      type: 'paragraph',
      text: 'Many stores tend to reduce or interrupt advertising during new collection launches, because the ROAS appears lower in the short term.',
    },
    {
      type: 'paragraph',
      text: 'Our approach was different: a 400 EUR product is rarely purchased on the first visit. The decision-making process is longer, requires more interactions and time.',
    },
    {
      type: 'paragraph',
      text: 'For this reason, investments during new collection launch periods are not aimed at immediate conversion, but at building a base of users who, in most cases, activate in the following months, often during sales.',
    },
    {
      type: 'paragraph',
      text: 'To manage this strategy in a truly profitable way, accurate data is needed: campaign breakeven, cost per add-to-cart, cost per checkout start, CAC, and nCAC monitored in real time.',
    },
    {
      type: 'paragraph',
      text: 'Today these numbers are checked month by month. Some months build and some months harvest, and a few launch months close below break even. But on a yearly basis marketing stays positive, both in 2025 and in 2026.',
    },
    { type: 'h2', text: '2026: new results' },
    {
      type: 'paragraph',
      text: 'In the months following the migration, the results began to consolidate.',
    },
    {
      type: 'paragraph',
      text: 'To measure them honestly we compared the 12 months before Shopify (June 2024 to May 2025) with the 12 months after (June 2025 to May 2026). Same stores, same catalog, same team.',
    },
    {
      type: 'list',
      items: [
        'online sales: **+67.7%**',
        'orders: **+49.4%**',
        'average order value: **+12.2%**',
        'returning customers: **+35.3%**',
      ],
    },
    {
      type: 'paragraph',
      text: '2026 confirms the direction. By mid October the store has already sold 15.4% more online than the whole of 2025, and July 2026 was the best month ever.',
    },
    {
      type: 'paragraph',
      text: 'Since the migration, six figure months went up to four: November and December 2025, January and July 2026. Before Shopify it had happened only once, in January 2024.',
    },
    {
      type: 'paragraph',
      text: 'It is not a six figure monthly average yet, and we will not write that it is. It is something more useful: the peaks arrive when we plan them, around sales, Black Friday and Christmas.',
    },
    {
      type: 'metrics',
      merValue: '3',
      growthValue: '+15.4%',
      note: 'January to mid October 2026, compared with the whole of 2025. Year still in progress: MER goes down because we are investing more in advertising.',
    },
    {
      type: 'paragraph',
      text: 'Today, Cumini has reached a level of maturity that allows it to grow consistently and predictably over time.',
    },
    { type: 'h2', text: 'Method, numbers, growth: the combination that makes the difference' },
    {
      type: 'paragraph',
      text: 'The growth of a fashion eCommerce is never linear: it alternates phases of acceleration, moments of stagnation, and periods in which work is done to build, not to harvest.',
    },
    {
      type: 'paragraph',
      text: 'The MER shows it well. It was 6.8 in 2023 and is 3.7 in 2026: it goes down as we invest more in advertising, in an increasingly competitive market. Yet online sales keep growing: +26.3% in 2025 and, by mid October 2026, already 15.4% more than the whole of 2025.',
    },
    {
      type: 'paragraph',
      text: 'That is why we do not look at MER alone, but also at contribution margin: what the company keeps after advertising and costs. It is the metric that really matters. On a yearly basis marketing is positive in both 2025 and 2026.',
    },
    {
      type: 'paragraph',
      text: 'It is not a line that always goes up. Some launch months close below break-even, because they build the demand that arrives with the sales. What counts is the result of the year, not the single month.',
    },
    {
      type: 'paragraph',
      text: 'In the long run, with consistent numbers and a strategy founded on stability, value tends to grow steadily and to accumulate lasting results. It is the result of work conceived and carried out with a long-term logic.',
    },
    { type: 'h2', text: 'Today: structure and growth' },
    {
      type: 'paragraph',
      text: 'In fashion, the space between brand discovery and purchase is wide and not attributable to a single channel.',
    },
    {
      type: 'paragraph',
      text: 'For this reason, growth cannot be managed in an isolated way. It requires an integrated multichannel strategy, in which each touchpoint contributes differently to the purchase journey.',
    },
    {
      type: 'paragraph',
      text: 'Social, email, Google, Meta, SEO: each channel has a specific role. Direct ROAS, alone, is not enough to evaluate its effectiveness. A user can discover the brand on Instagram, find it again on Google, receive an email, and purchase weeks later, often during sales. It is a journey distributed over time, built through successive interactions.',
    },
    {
      type: 'paragraph',
      text: 'For this reason, no channel is interrupted based solely on short-term performance. The result is always the combined effect of multiple levers working together.',
    },
    {
      type: 'paragraph',
      text: 'This approach is directly reflected in overall results. The real growth indicator is not online revenue itself, but the ability to generate value consistently and predictably over time.',
    },
    {
      type: 'paragraph',
      text: 'Operationally, the work is based on the continuous monitoring of the same indicators (MER, ROAS by channel, contribution margin, CAC, and repurchase rate) from which decisions are derived. The results are the product of a set of progressive choices, not isolated actions.',
    },
    {
      type: 'paragraph',
      text: 'The determining variable is balance. Managing an eCommerce today means coordinating in a coherent way all the levers: advertising, branding, email marketing, SEO, technical development, and analytics.',
    },
    {
      type: 'paragraph',
      text: 'It is from this balance that growth potential depends. Even a single area managed inadequately can limit it.',
    },
    { type: 'paragraph', text: 'Today:' },
    {
      type: 'list',
      items: [
        'Online sales grew 67.7% in the 12 months after the migration to Shopify',
        'Six figure months went from one before Shopify to four after the migration',
        '2026 has already passed the online sales of the whole of 2025',
        'The tracking score went from 31 to 92 out of 100',
        'Revenue attributed to email marketing grew 301% with Klaviyo correctly integrated',
      ],
    },
    { type: 'cta' },
    { type: 'h2', text: 'Does this model work for you?' },
    {
      type: 'paragraph',
      text: "If you have made it this far, you probably recognize something of your own reality in these pages. A brand with a strong product and physical stores that perform well, but with an eCommerce that does not express its full potential. Or an active online store, but lacking real governance: incomplete data, advertising guided by intuition, a technical platform that does not scale with the ambition of the business.",
    },
    {
      type: 'paragraph',
      text: 'The model built with Cumini is designed for fashion boutiques and multibrand B2C brands that already have a validated product and structured company revenue. It is for those who want to transform the online channel into a strategic asset, managed with the same care and attention dedicated to the physical store.',
    },
    {
      type: 'paragraph',
      text: 'It is not the solution for those looking for results in 30 days, nor for those who want a simple supplier to delegate to without involvement.',
    },
    {
      type: 'paragraph',
      text: 'Cumini has been an active client of NoProb Agency for over 4 years. [This is how we run Shopify migrations](/shopify-migration-sprint). If you are coming from WooCommerce, read the [Integratori Nazzi DTC case](/use-cases/integratori-nazzi-dtc-shopify).',
    },
    { type: 'cta' },
  ],
  faq: [
    {
      q: 'Una migrazione su Shopify fa crescere le vendite?',
      a: 'Da sola no: la piattaforma toglie i limiti, il resto lo fanno dati, advertising ed email. Per Cumini, nei 12 mesi dopo la migrazione le vendite online sono cresciute del 67,7% rispetto ai 12 mesi prima, con ordini +49,4% e scontrino medio +12,2%.',
    },
    {
      q: 'Si può migrare su Shopify un eCommerce collegato a un gestionale proprietario?',
      a: 'Sì. Per Cumini abbiamo sviluppato una soluzione che collega Shopify al gestionale proprietario dei negozi. Lo store è online su Shopify dal 19 maggio 2025.',
    },
    {
      q: 'Perché il MER scende mentre le vendite crescono?',
      a: 'Perché per crescere si investe di più in advertising, e ogni euro in più rende un po’ meno del precedente. Per Cumini il MER è passato da 6 nel 2024 a 3,7 nel 2026, mentre le vendite online del 2026 hanno già superato tutto il 2025.',
    },
    {
      q: 'Quanto migliora il tracciamento dopo la migrazione a Shopify?',
      a: 'Per Cumini il punteggio complessivo del tracciamento è passato da 31 a 92 su 100 (Analytics 100, Ads 97), con tracking server to server tramite Stape.',
    },
  ],
  faqEn: [
    {
      q: 'Does a Shopify migration grow sales?',
      a: 'Not on its own: the platform removes the limits, data, advertising and email do the rest. For Cumini, in the 12 months after the migration online sales grew 67.7% compared with the 12 months before, with orders +49.4% and average order value +12.2%.',
    },
    {
      q: 'Can you migrate to Shopify a store connected to a proprietary ERP?',
      a: 'Yes. For Cumini we built a solution that connects Shopify to the stores proprietary ERP. The store has been live on Shopify since May 19, 2025.',
    },
    {
      q: 'Why does MER go down while sales grow?',
      a: 'Because growing means investing more in advertising, and each extra euro returns a little less than the one before. For Cumini MER went from 6 in 2024 to 3.7 in 2026, while 2026 online sales have already passed the whole of 2025.',
    },
    {
      q: 'How much does tracking improve after migrating to Shopify?',
      a: 'For Cumini the overall tracking score went from 31 to 92 out of 100 (Analytics 100, Ads 97), with server to server tracking through Stape.',
    },
  ],
  sources: [
    'Vendite, ordini, scontrino medio e clienti di ritorno: Shopify, letti dalla dashboard NoProb di Cumini il 13 ottobre 2026. Fino al 18 maggio 2025 i dati vengono dalla piattaforma precedente, importati una volta. Vendite = vendite nette.',
    'Spesa pubblicitaria: Meta Ads e Google Ads. MER = vendite online diviso spesa pubblicitaria.',
    'La dashboard parte dal 10 aprile 2023: per questo il 2023 è parziale e la crescita del 2024 sul 2023 non è riportata.',
    'Tracciamento: audit del sistema di tracking prima e dopo la migrazione (immagine nell’articolo).',
    'Email marketing: report Klaviyo dal 1° novembre 2025 al 24 aprile 2026, confrontato con il periodo precedente (immagine nell’articolo).',
    'Per riservatezza pubblichiamo solo variazioni percentuali e rapporti, non valori assoluti.',
  ],
  sourcesEn: [
    'Sales, orders, average order value and returning customers: Shopify, read from the NoProb dashboard for Cumini on October 13, 2026. Until May 18, 2025 the data comes from the previous platform, imported once. Sales = net sales.',
    'Ad spend: Meta Ads and Google Ads. MER = online sales divided by ad spend.',
    'The dashboard starts on April 10, 2023: this is why 2023 is partial and 2024 growth on 2023 is not reported.',
    'Tracking: audit of the tracking system before and after the migration (image in the article).',
    'Email marketing: Klaviyo report from November 1, 2025 to April 24, 2026, compared with the previous period (image in the article).',
    'For confidentiality we only publish percentage changes and ratios, not absolute values.',
  ],
  archive: {
    image: '/images/originals/lXYpLfNsEJ0igk2CBCTjY1Irqw.png',
    logo: '/images/originals/iWbz1XLCfNQ5rbC2z8HrFO8.png',
    logoClass: 'h-[30px] w-[140px] object-contain',
    metrics: {
      en: ['+67.7% online sales after Shopify', '+301% email revenue with Klaviyo'],
      it: ['+67,7% vendite online dopo Shopify', '+301% entrate email con Klaviyo'],
    },
  },
}
