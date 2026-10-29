import type { Article } from '../index'

const article: Article = {
  slug: 'ai-for-ecommerce',
  slugIt: 'ai-per-ecommerce',
  title: 'AI for Ecommerce: What Works, What Is Hype, and How to Start in 30 Days',
  titleIt: 'AI per eCommerce: cosa funziona, cosa è solo hype e come partire in 30 giorni',
  seoTitle: 'AI for Ecommerce: 7 Uses That Pay, 4 That Fail',
  seoTitleIt: 'AI per eCommerce: 7 usi utili, 4 che falliscono',
  seoDescription:
    'AI for ecommerce from a team that uses it daily: where it pays (catalog, service, data, email, code), where it fails, and how to start in 30 days.',
  seoDescriptionIt:
    'AI per eCommerce da un team che la usa ogni giorno: dove rende (catalogo, assistenza, dati, email, codice), dove fallisce e come partire in 30 giorni.',
  excerpt:
    'Where AI pays off in an ecommerce store today, where it still fails, how to start in 30 days without a big project, and how to measure it, from a team that uses it every day.',
  excerptIt:
    'Dove l’AI rende davvero in un eCommerce oggi, dove fallisce ancora, come partire in 30 giorni senza un grande progetto e come misurarla, da un team che la usa ogni giorno.',
  ledeEn:
    'This is where AI earns its place in an ecommerce store, where it still fails, and how to start in 30 days without a big project.',
  ledeIt:
    'Ecco dove l’AI si guadagna il posto in un eCommerce, dove fallisce ancora e come partire in 30 giorni senza un grande progetto.',
  image: '/images/blog/ai-for-ecommerce-cover.png',
  imageAlt: 'Copertina astratta, sfondo grigio chiaro sfumato, con fasce diagonali di puntini',
  imageAltEn: 'Abstract cover, softly graded light grey background with diagonal bands of dots',
  articleType: 'BlogPosting',
  date: '2026-10-19',
  datePublishedIso: '2026-10-19T14:15:00+01:00',
  dateModifiedIso: '2026-10-28T09:00:00+00:00',
  wordCount: 2230,
  articleSection: 'AI',
  readingTimeMinutes: 10,
  keywordsEn:
    'ai ecommerce, ai for ecommerce, ai in ecommerce, ecommerce ai, ai product descriptions, ai customer service ecommerce, ai ecommerce shopify, ai accelerator',
  keywordsIt:
    'ai ecommerce, intelligenza artificiale ecommerce, ai per ecommerce, ai per eCommerce Shopify, descrizioni prodotto con ai, assistenza clienti ai ecommerce, ai accelerator',
  content: [
    {
      type: 'paragraph',
      text: '**AI for ecommerce works today where the job is repetitive, structured and checkable: catalog content, customer service triage, data analysis, lifecycle email and software development. It still fails where it runs unsupervised, invents facts, or has to sound like your brand without context.** We are noprob agency, we build stores with the [Shopify Launch Sprint](/shopify-migration-sprint), and we use AI every day: AI agents write and test the code of the stores we build, and agents and dashboards read store data for us. This article comes from that work, not from a survey.',
    },
    { type: 'h2', text: 'Where does AI actually pay off in an ecommerce store?' },
    {
      type: 'paragraph',
      text: '**AI pays off in seven places, and in every one the shape is the same: AI does the first pass, a person owns the result.** We list them in the order we trust them, from most to least reliable in our experience.',
    },
    { type: 'h3', text: '1. Product content and catalog enrichment' },
    {
      type: 'paragraph',
      text: 'This is the safest first use. A catalog is data: titles, attributes, variants, alt text, translations. AI is good at filling gaps and keeping hundreds of items consistent, and every output can be checked against the source. The condition is that it drafts from your data and not from its imagination: give it the real attributes, your brand rules and a few approved examples, and never let it add a claim you did not supply. In the AI Accelerator we write a Context Document for this: your brand, catalog and customers described for ChatGPT, Claude and similar tools, so the answers fit your store instead of sounding generic. It stays yours.',
    },
    { type: 'h3', text: '2. Customer service triage' },
    {
      type: 'paragraph',
      text: 'AI sorts and drafts well, and it should not decide. Classifying incoming messages, pulling the order status, drafting a reply for an agent to send and spotting the question that arrives twenty times a week are all reliable. Deciding a refund, an exception or a sensitive complaint is not. Start with drafts that a person approves. Then read what customers actually write: repeated questions usually point to a product page or a policy that needs fixing, which is worth more than the minutes saved.',
    },
    { type: 'h3', text: '3. Analytics and anomaly detection' },
    {
      type: 'paragraph',
      text: 'AI is very good at watching numbers you would not open every day, but only if the numbers are right. For the stores we manage we run dashboards with MER, ROAS and retention, and agents help us read them and flag what moved. The precondition is tracking you can trust. On [Cumini](/use-cases/cumini-luxury-fashion-ecommerce), the tracking audit score went from 31 to 92 out of 100 around the migration (Analytics 100, Ads 97), and only then did comparing channels mean anything. An AI that reads a broken dashboard gives you a confident wrong answer, faster.',
    },
    { type: 'h3', text: '4. Development speed with AI agents' },
    {
      type: 'paragraph',
      text: 'This is where we feel it most. The Custom AI System is code written from scratch for one store and designed for the AI agents that work on it, so new features, tests and changes ship faster. Here is where it helps. A first draft is cheap for everyone now. The difference is reviewing, testing and shipping safely, and every change still gets read by a person before it reaches your checkout.',
    },
    { type: 'h3', text: '5. Email and flows' },
    {
      type: 'paragraph',
      text: 'AI helps write and segment, but the structure of the flows carries the result. On Cumini, revenue attributed to Klaviyo grew 301% and reached 61.66% of total revenue between 1 November 2025 and 24 April 2026, against the previous period (Klaviyo’s own report). That result came from flows, segmentation and clean data. AI shortens the work of writing variants and testing subject lines inside a structure that already exists. On [Integratori DTC Nazzi](/use-cases/integratori-nazzi-dtc-shopify), a quiz connected to Klaviyo, live since 18 September 2026, collected over a thousand leads in under a month, and the useful part is the answers each person gave, because they feed segments and messages.',
    },
    { type: 'h3', text: '6. Search and merchandising' },
    {
      type: 'paragraph',
      text: 'Search that understands intent and typos, and collections sorted by what actually sells, are real gains, and you judge them on your own queries. Open your zero-result searches first: they list what shoppers want and your catalog does not say. Shopify also ships AI inside the admin, which we cover in [Shopify Magic and Sidekick](/blog/shopify-magic-sidekick). Try what is already included before you pay for another tool.',
    },
    { type: 'h3', text: '7. Being found by AI assistants' },
    {
      type: 'paragraph',
      text: 'More shopping questions now go to ChatGPT, Copilot and Google’s AI answers, and these assistants can only recommend products whose data they can read. The only number we can cite is a platform-wide one: [Digital Commerce 360](https://www.digitalcommerce360.com/2026/08/06/how-shopify-is-approaching-agentic-ai-2026/) reports that “AI-driven” traffic and orders to Shopify stores grew 3x year over year in Q2 2026. It is not a result of ours. The practice is in our guide to [GEO for Shopify](/blog/geo-for-shopify), and the buying side is in [agentic commerce for Shopify](/blog/agentic-commerce-shopify).',
    },
    { type: 'h2', text: 'Where does AI still fail in ecommerce?' },
    {
      type: 'paragraph',
      text: '**AI fails in ecommerce when nobody checks it, when it works on wrong data, and when a rule or a law applies.** Four failures we plan for, and one piece of hype.',
    },
    { type: 'h3', text: 'Unsupervised content' },
    {
      type: 'paragraph',
      text: 'A model fills silence with plausible text: a size that does not exist, a material you do not use, a benefit nobody can prove. In regulated categories this is a legal risk: in the EU, health claims on food supplements are governed by [Regulation (EC) No 1924/2006](https://eur-lex.europa.eu/eli/reg/2006/1924/oj). Google’s guidance on [generative AI content](https://developers.google.com/search/docs/fundamentals/using-gen-ai-content) says that using AI is not a problem in itself, while producing pages at scale mainly to rank is. Publishing a thousand unreviewed pages is the quickest way to collect both problems.',
    },
    { type: 'h3', text: 'Brand voice' },
    {
      type: 'paragraph',
      text: 'Without context every store sounds the same: a model has read the whole internet and none of your customer emails. The fix is input, not a cleverer prompt: a Context Document, examples of your best descriptions, a list of words you never use. Even then, keep a person on the pages that carry the brand, such as the home page, the about page and the hero collections.',
    },
    { type: 'h3', text: 'Wrong data' },
    {
      type: 'paragraph',
      text: 'Prices, stock, variants and discount rules are where AI quietly does damage. If the feed says a product is in stock and it is not, AI repeats the mistake at scale, in places you cannot see, such as assistants and ads. Clean the source first. This is why our Custom AI System reconciles counts and totals of products, customers and orders before anything is switched on.',
    },
    { type: 'h3', text: 'Compliance and privacy' },
    {
      type: 'paragraph',
      text: 'Do not paste customers’ personal data into consumer tools without a legal basis and a contract with the provider. A chatbot that talks to customers should say it is a machine: the [EU AI Act](https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai) sets transparency duties for AI systems that interact with people. Check what applies to you with a lawyer.',
    },
    { type: 'h3', text: 'What we treat as hype' },
    {
      type: 'paragraph',
      text: 'Fully autonomous stores. An “AI marketer” with write access to your budget, your prices or your refunds. Any promise of a fixed percentage uplift from installing an app. Any average return quoted for AI in ecommerce needs a method behind it. The right framing is narrower: this task took this many hours, now it takes fewer, and a person still approves it.',
    },
    { type: 'h2', text: 'How do you start with AI in an ecommerce store in 30 days?' },
    {
      type: 'paragraph',
      text: '**Start with one problem you can measure, run it for a month with a person approving the output, and write down the procedure.** No platform and no big project. This is the shape of our month, and you can run it yourself:',
    },
    {
      type: 'list',
      items: [
        '**Week 1, context and a log.** Write the Context Document: voice, catalog structure, customers, what you never say. For five working days the team notes every repetitive task and how long it takes. That log is your baseline.',
        '**Week 2, where sales leak.** Look at acquisition, product pages, conversion, email and repeat purchase. Check that tracking is trustworthy before you read any report.',
        '**Week 3, one or two quick wins.** Usually one in catalog or customer service. Write the procedure (tool, prompt, check), run it on a small batch and compare with the baseline.',
        '**Week 4, priorities and roadmap.** Rank what you found by impact, set a 90-day roadmap and decide what stays manual.',
      ],
    },
    {
      type: 'paragraph',
      text: 'That is the shape of our [AI Accelerator](/ai-accelerator): 30 days one-to-one for established ecommerce stores, four video calls of 60 minutes, one a week, up to two quick wins switched on with you, and three deliverables that stay yours (priorities and roadmap, operating protocols, the Context Document). Fixed price, no automatic renewal, no lock-in, and a free pre-call to check the fit before you commit. Quoted separately: development beyond the quick wins, campaign management, content production and AI licenses, as a proposal after the month. Built for established ecommerce stores.',
    },
    { type: 'h2', text: 'How do you measure whether AI is working?' },
    {
      type: 'paragraph',
      text: '**Measure each use against a baseline you took before you started, with one number per use.** Not an “AI ROI”, which mixes too many things to mean anything.',
    },
    {
      type: 'list',
      items: [
        '**Time:** hours per week on the logged task, before and after.',
        '**Quality:** the share of AI drafts a person accepts without edits, and the errors found in review.',
        '**Service:** first response time and the share of tickets answered from a draft.',
        '**Product pages and search:** conversion on the pages you changed against similar pages you left alone, over the same weeks.',
        '**Email:** revenue per flow against the previous period.',
        '**AI visibility:** a fixed list of prompts you run by hand every month, as described in the [GEO guide](/blog/geo-for-shopify).',
      ],
    },
    {
      type: 'paragraph',
      text: 'Two rules. Keep a control, a set of products, pages or tickets you leave untouched, so seasonality does not fool you. And never accept a vendor’s own case-study numbers as your forecast. Be patient with the clock too: time saved shows in weeks, while an effect on conversion or revenue needs a longer window than one month.',
    },
    { type: 'h2', text: 'How do the AI Accelerator and the Custom AI System fit in?' },
    {
      type: 'paragraph',
      text: '**If your store is live, the [AI Accelerator](/ai-accelerator) is the route: 30 days one-to-one, up to two quick wins switched on with you. If you are changing platform, the [Shopify Launch Sprint](/shopify-migration-sprint) rebuilds your store on Shopify in 14 days with the Custom AI System.**',
    },
    {
      type: 'paragraph',
      text: 'The Custom AI System is how we build stores with AI inside them from day one: catalog and structured data ready for AI assistants, automatic GEO for every new product, code built for AI agents, and tracking and a dashboard from day 1. In the Sprint, go-live falls between day 15 and 30, followed by 90 days of support. Our [guide to migrating to Shopify](/shopify-migration) explains the process.',
    },
    {
      type: 'paragraph',
      text: 'Among our published case studies are [Integratori DTC Nazzi](/use-cases/integratori-nazzi-dtc-shopify), moved from WooCommerce, and [Cumini](/use-cases/cumini-luxury-fashion-ecommerce), moved from a proprietary platform tied to its ERP. Their pages show the migration results. The summary of this article is the same: AI is a strong tool in the hands of a team with clean data, a procedure and someone who checks.',
    },
    {
      type: 'paragraph',
      text: 'The Sprint has a public price by revenue: €5,800 under €2M, €8,800 from €2M to €20M, €12,800 above €20M, VAT excluded, in 4 installments.',
    },
    { type: 'h2', text: 'Frequently asked questions' },
    { type: 'h3', text: 'What is AI used for in ecommerce?' },
    {
      type: 'paragraph',
      text: 'In practice: writing and enriching product content, triaging and drafting customer service replies, reading store data and flagging anomalies, speeding up development, helping with email and flows, and making products findable by AI assistants. It works best on repetitive, checkable tasks with a person approving the result.',
    },
    { type: 'h3', text: 'Is AI worth it for a small ecommerce store?' },
    {
      type: 'paragraph',
      text: 'Yes, if you pick one repetitive task and measure the hours before and after. No, if you buy a tool without a problem to solve. Start with catalog content or customer service drafts, keep a person approving, and judge the result after a month.',
    },
    { type: 'h3', text: 'Will AI replace ecommerce staff?' },
    {
      type: 'paragraph',
      text: 'In our work it removes repetitive tasks, not decisions. People still set the strategy, approve what goes live, handle sensitive customers and own the brand.',
    },
    { type: 'h3', text: 'Is AI-generated product content bad for SEO?' },
    {
      type: 'paragraph',
      text: 'Not by itself. Google says using AI is not a problem in itself, while generating pages at scale mainly to manipulate rankings is spam. Content that is accurate, reviewed and written from your real product data is fine. Unreviewed bulk pages are the risk.',
    },
    { type: 'h3', text: 'How long before AI shows results in an ecommerce store?' },
    {
      type: 'paragraph',
      text: 'Time saved on repetitive work usually shows within weeks. Effects on conversion or revenue need a longer window and a control group. In our AI Accelerator the goal of the 30 days is to find the opportunities, rank them and switch on the first AI solutions on the most important one.',
    },
    { type: 'h3', text: 'What does the AI Accelerator include?' },
    {
      type: 'paragraph',
      text: 'It is a 30-day one-to-one program for established ecommerce stores: four video calls of 60 minutes, up to two quick wins switched on with you, a priorities and roadmap document, operating protocols and a Context Document that stay yours. Fixed price, no automatic renewal. Quoted separately: development beyond the quick wins, campaign management, content production and AI licenses.',
    },
    {
      type: 'paragraph',
      text: '**Next step.** For a live store, book the free pre-call for the [AI Accelerator](/ai-accelerator): we check the fit before you commit. If you are changing platform, [apply to the Shopify Launch Sprint](/shopify-migration-sprint) and we reply within 48 hours with your tier, the price and the first available kickoff date.',
    },
    {
      type: 'paragraph',
      text: 'The [Shopify Launch Sprint](/shopify-migration-sprint) moves your store to Shopify in 14 days with our Custom AI System: a fixed calendar, a public price and 4 written guarantees.',
    },
  ],
  faqEn: [
    {
      question: 'What is AI used for in ecommerce?',
      answer:
        'In practice: writing and enriching product content, triaging and drafting customer service replies, reading store data and flagging anomalies, speeding up development, helping with email and flows, and making products findable by AI assistants. It works best on repetitive, checkable tasks with a person approving the result.',
    },
    {
      question: 'Is AI worth it for a small ecommerce store?',
      answer:
        'Yes, if you pick one repetitive task and measure the hours before and after. No, if you buy a tool without a problem to solve. Start with catalog content or customer service drafts, keep a person approving, and judge the result after a month.',
    },
    {
      question: 'Will AI replace ecommerce staff?',
      answer:
        'In our work it removes repetitive tasks, not decisions. People still set the strategy, approve what goes live, handle sensitive customers and own the brand.',
    },
    {
      question: 'Is AI-generated product content bad for SEO?',
      answer:
        'Not by itself. Google says using AI is not a problem in itself, while generating pages at scale mainly to manipulate rankings is spam. Content that is accurate, reviewed and written from your real product data is fine. Unreviewed bulk pages are the risk.',
    },
    {
      question: 'How long before AI shows results in an ecommerce store?',
      answer:
        'Time saved on repetitive work usually shows within weeks. Effects on conversion or revenue need a longer window and a control group. In our AI Accelerator the goal of the 30 days is to find the opportunities, rank them and switch on the first AI solutions on the most important one.',
    },
    {
      question: 'What does the AI Accelerator include?',
      answer:
        'It is a 30-day one-to-one program for established ecommerce stores: four video calls of 60 minutes, up to two quick wins switched on with you, a priorities and roadmap document, operating protocols and a Context Document that stay yours. Fixed price, no automatic renewal. Quoted separately: development beyond the quick wins, campaign management, content production and AI licenses.',
    },
  ],
  contentIt: [
    {
      type: 'paragraph',
      text: '**L’AI per eCommerce funziona oggi dove il lavoro è ripetitivo, strutturato e verificabile: contenuti del catalogo, smistamento dell’assistenza clienti, analisi dei dati, email di lifecycle e sviluppo software. Fallisce ancora dove lavora senza supervisione, inventa fatti o deve suonare come il tuo brand senza contesto.** Siamo noprob agency, costruiamo store con lo [Shopify Launch Sprint](/it/sprint-migrazione-shopify) e usiamo l’intelligenza artificiale ogni giorno: gli agenti AI scrivono e testano il codice degli store che costruiamo, e agenti e dashboard leggono i dati degli store al posto nostro. Questo articolo nasce da quel lavoro, non da un sondaggio.',
    },
    { type: 'h2', text: 'Dove l’AI rende davvero in un eCommerce?' },
    {
      type: 'paragraph',
      text: '**L’AI rende in sette punti, e in ognuno la forma è la stessa: l’AI fa la prima bozza, una persona è responsabile del risultato.** Li elenchiamo nell’ordine in cui ci fidiamo, dal più al meno affidabile secondo la nostra esperienza.',
    },
    { type: 'h3', text: '1. Contenuti prodotto e arricchimento del catalogo' },
    {
      type: 'paragraph',
      text: 'È il primo uso più sicuro. Un catalogo è fatto di dati: titoli, attributi, varianti, testi alternativi, traduzioni. L’AI è brava a colmare i vuoti e a tenere coerenti centinaia di articoli, e ogni output si controlla sulla fonte. La condizione è che scriva dai tuoi dati e non dalla sua fantasia: dagli gli attributi veri, le regole del brand e qualche esempio approvato, e non lasciarle mai aggiungere una promessa che non hai fornito tu. Nell’AI Accelerator scriviamo per questo un Context Document: brand, catalogo e clienti descritti per ChatGPT, Claude e simili, così le risposte calzano sul tuo store invece di suonare generiche. Resta tuo.',
    },
    { type: 'h3', text: '2. Smistamento dell’assistenza clienti' },
    {
      type: 'paragraph',
      text: 'L’AI smista e prepara bozze bene, e non deve decidere. Classificare i messaggi in arrivo, recuperare lo stato dell’ordine, preparare una risposta che un operatore invia e individuare la domanda che arriva venti volte a settimana sono compiti affidabili. Decidere un rimborso, un’eccezione o un reclamo delicato no. Parti da bozze che una persona approva. Poi leggi cosa scrivono davvero i clienti: le domande ripetute di solito indicano una scheda prodotto o una policy da correggere, e questo vale più dei minuti risparmiati.',
    },
    { type: 'h3', text: '3. Analytics e individuazione delle anomalie' },
    {
      type: 'paragraph',
      text: 'L’AI è molto brava a guardare numeri che tu non apriresti ogni giorno, ma solo se i numeri sono giusti. Per gli store che gestiamo usiamo dashboard con MER, ROAS e retention, e gli agenti ci aiutano a leggerle e a segnalare cosa si è mosso. La premessa è un tracking di cui fidarsi. Su [Cumini](/it/casi-studio/cumini-luxury-fashion-ecommerce) il punteggio dell’audit di tracking è passato da 31 a 92 su 100 attorno alla migrazione (Analytics 100, Ads 97), e solo allora confrontare i canali ha avuto senso. Un’AI che legge una dashboard sbagliata ti dà una risposta sbagliata ma sicura di sé, più in fretta.',
    },
    { type: 'h3', text: '4. Velocità di sviluppo con gli agenti AI' },
    {
      type: 'paragraph',
      text: 'Qui è dove la sentiamo di più. Il Custom AI System è codice scritto da zero per un solo store e progettato per gli agenti AI che ci lavorano, così nuove funzioni, test e modifiche vanno online più in fretta. Ecco dove aiuta. Una prima bozza oggi costa poco a tutti. La differenza è rivedere, testare e rilasciare in sicurezza, e ogni modifica viene letta da una persona prima di arrivare al tuo checkout.',
    },
    { type: 'h3', text: '5. Email e flussi' },
    {
      type: 'paragraph',
      text: 'L’AI aiuta a scrivere e a segmentare, ma a portare il risultato è la struttura dei flussi. Su Cumini le entrate attribuite a Klaviyo sono cresciute del 301% e sono arrivate al 61,66% delle entrate totali tra il 1 novembre 2025 e il 24 aprile 2026, rispetto al periodo precedente (report di Klaviyo stesso). Quel risultato viene da flussi, segmentazione e dati puliti. L’AI accorcia il lavoro di scrivere varianti e testare gli oggetti dentro una struttura che esiste già. Su [Integratori DTC Nazzi](/it/casi-studio/integratori-nazzi-dtc-shopify) un quiz collegato a Klaviyo, online dal 18 settembre 2026, ha raccolto oltre mille lead in meno di un mese, e la parte utile sono le risposte di ogni persona, perché alimentano segmenti e messaggi.',
    },
    { type: 'h3', text: '6. Ricerca interna e merchandising' },
    {
      type: 'paragraph',
      text: 'Una ricerca che capisce l’intento e i refusi, e collezioni ordinate per ciò che vende davvero, sono guadagni reali, e si giudicano sulle tue query. Apri prima le ricerche senza risultati: elencano ciò che i clienti cercano e il tuo catalogo non dice. Shopify include anche AI nel pannello di amministrazione, ne parliamo in [Shopify Magic e Sidekick](/it/blog/shopify-magic-sidekick). Prova ciò che è già incluso prima di pagare un altro strumento.',
    },
    { type: 'h3', text: '7. Farsi trovare dagli assistenti AI' },
    {
      type: 'paragraph',
      text: 'Sempre più domande d’acquisto passano da ChatGPT, Copilot e dalle risposte AI di Google, e questi assistenti possono consigliare solo prodotti di cui riescono a leggere i dati. L’unico numero che possiamo citare riguarda tutta la piattaforma: [Digital Commerce 360](https://www.digitalcommerce360.com/2026/08/06/how-shopify-is-approaching-agentic-ai-2026/) riporta che traffico e ordini “AI-driven” verso gli store Shopify sono cresciuti di 3 volte su base annua nel Q2 2026. Non è un nostro risultato. La pratica è nella nostra guida alla [GEO SEO per Shopify](/it/blog/geo-seo-shopify), il lato acquisto è nell’[agentic commerce per Shopify](/it/blog/agentic-commerce-shopify).',
    },
    { type: 'h2', text: 'Dove l’AI fallisce ancora in un eCommerce?' },
    {
      type: 'paragraph',
      text: '**L’AI fallisce in un eCommerce quando nessuno la controlla, quando lavora su dati sbagliati e quando si applica una regola o una legge.** Quattro fallimenti che mettiamo in conto e una dose di hype.',
    },
    { type: 'h3', text: 'Contenuti senza supervisione' },
    {
      type: 'paragraph',
      text: 'Un modello riempie il silenzio con testo plausibile: una taglia che non esiste, un materiale che non usi, un beneficio che nessuno può dimostrare. Nelle categorie regolate è un rischio legale: nell’UE i claim sulla salute degli integratori alimentari sono disciplinati dal [Regolamento (CE) n. 1924/2006](https://eur-lex.europa.eu/eli/reg/2006/1924/oj). La guida di Google ai [contenuti generati con l’AI](https://developers.google.com/search/docs/fundamentals/using-gen-ai-content) dice che usare l’AI non è un problema in sé, mentre produrre pagine in serie soprattutto per posizionarsi lo è. Pubblicare mille pagine non riviste è il modo più rapido di prendersi entrambi i problemi.',
    },
    { type: 'h3', text: 'Voce del brand' },
    {
      type: 'paragraph',
      text: 'Senza contesto tutti gli store suonano uguali: un modello ha letto tutto internet e nessuna delle email dei tuoi clienti. La soluzione è l’input, non un prompt più furbo: un Context Document, esempi delle tue descrizioni migliori, un elenco di parole che non usi mai. Anche così, tieni una persona sulle pagine che portano il brand, come home, chi siamo e collezioni principali.',
    },
    { type: 'h3', text: 'Dati sbagliati' },
    {
      type: 'paragraph',
      text: 'Prezzi, giacenze, varianti e regole sugli sconti sono dove l’AI fa danni senza farsi notare. Se il feed dice che un prodotto è disponibile e non lo è, l’AI ripete l’errore su larga scala, in posti che non vedi, come assistenti e annunci. Pulisci prima la fonte. Per questo il nostro Custom AI System riconcilia numero e totali di prodotti, clienti e ordini prima di accendere qualsiasi cosa.',
    },
    { type: 'h3', text: 'Conformità e privacy' },
    {
      type: 'paragraph',
      text: 'Non incollare dati personali dei clienti in strumenti per il grande pubblico senza una base giuridica e un contratto con il fornitore. Un chatbot che parla con i clienti dovrebbe dire di essere una macchina: l’[AI Act europeo](https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai) prevede obblighi di trasparenza per i sistemi di AI che interagiscono con le persone. Verifica con un legale cosa vale per te.',
    },
    { type: 'h3', text: 'Cosa consideriamo hype' },
    {
      type: 'paragraph',
      text: 'Store completamente autonomi. Un “AI marketer” con accesso in scrittura a budget, prezzi o rimborsi. Qualsiasi promessa di un aumento percentuale fisso installando un’app. Qualunque ritorno medio citato per l’AI negli eCommerce ha bisogno di un metodo dietro. La formulazione giusta è più stretta: questo compito richiedeva tante ore, ora ne richiede meno, e una persona lo approva ancora.',
    },
    { type: 'h2', text: 'Come si parte con l’AI in un eCommerce in 30 giorni?' },
    {
      type: 'paragraph',
      text: '**Parti da un problema che puoi misurare, fallo girare un mese con una persona che approva l’output e scrivi la procedura.** Nessuna piattaforma e nessun grande progetto. Questa è la forma del nostro mese, e puoi farlo anche da solo:',
    },
    {
      type: 'list',
      items: [
        '**Settimana 1, contesto e registro.** Scrivi il Context Document: voce, struttura del catalogo, clienti, cosa non dici mai. Per cinque giorni lavorativi il team annota ogni attività ripetitiva e quanto dura. Quel registro è la tua base di partenza.',
        '**Settimana 2, dove si perdono vendite.** Guarda acquisizione, schede prodotto, conversione, email e riacquisto. Verifica che il tracking sia affidabile prima di leggere qualsiasi report.',
        '**Settimana 3, una o due quick win.** Di solito una sul catalogo o sull’assistenza. Scrivi la procedura (strumento, prompt, controllo), provala su un piccolo lotto e confronta con la base di partenza.',
        '**Settimana 4, priorità e roadmap.** Ordina ciò che hai trovato per impatto, definisci una roadmap a 90 giorni e decidi cosa resta manuale.',
      ],
    },
    {
      type: 'paragraph',
      text: 'È la forma del nostro [AI Accelerator](/it/ai-accelerator): 30 giorni one-to-one per eCommerce già avviati, quattro videochiamate da 60 minuti, una a settimana, fino a due quick win attivate insieme a te e tre deliverable che restano tuoi (documento delle priorità e roadmap, protocolli operativi, Context Document). Prezzo fisso, nessun rinnovo automatico, nessun vincolo, e una pre-call gratuita per verificare il fit prima di impegnarti. A parte: sviluppo oltre le quick win, gestione delle campagne, produzione di contenuti e licenze AI, con una proposta dopo il mese. Pensato per eCommerce già avviati.',
    },
    { type: 'h2', text: 'Come si misura se l’AI sta funzionando?' },
    {
      type: 'paragraph',
      text: '**Misura ogni uso contro una base di partenza presa prima di iniziare, con un numero per ogni uso.** Non un “ROI dell’AI”, che mescola troppe cose per voler dire qualcosa.',
    },
    {
      type: 'list',
      items: [
        '**Tempo:** ore a settimana sul compito registrato, prima e dopo.',
        '**Qualità:** la quota di bozze AI che una persona accetta senza modifiche e gli errori trovati in revisione.',
        '**Assistenza:** tempo di prima risposta e quota di ticket risolti partendo da una bozza.',
        '**Schede prodotto e ricerca:** conversione sulle pagine modificate contro pagine simili lasciate com’erano, nelle stesse settimane.',
        '**Email:** entrate per flusso rispetto al periodo precedente.',
        '**Visibilità nell’AI:** un elenco fisso di prompt che esegui a mano ogni mese, come descritto nella [guida alla GEO](/it/blog/geo-seo-shopify).',
      ],
    },
    {
      type: 'paragraph',
      text: 'Due regole. Tieni un gruppo di controllo, prodotti, pagine o ticket che lasci intatti, così la stagionalità non ti inganna. E non accettare mai i numeri dei case study del fornitore come tua previsione. Abbi pazienza anche con il calendario: il tempo risparmiato si vede in settimane, mentre un effetto su conversione o fatturato richiede una finestra più lunga di un mese.',
    },
    { type: 'h2', text: 'Come si inseriscono l’AI Accelerator e il Custom AI System?' },
    {
      type: 'paragraph',
      text: '**Se il tuo store è già online, la strada è l’[AI Accelerator](/it/ai-accelerator): 30 giorni one-to-one, fino a due quick win attivate insieme a te. Se stai cambiando piattaforma, lo [Shopify Launch Sprint](/it/sprint-migrazione-shopify) ricostruisce il tuo store su Shopify in 14 giorni con il Custom AI System.**',
    },
    {
      type: 'paragraph',
      text: 'Il Custom AI System è il modo in cui costruiamo store con l’AI dentro fin dal primo giorno: catalogo e dati strutturati pronti per gli assistenti AI, GEO automatica per ogni nuovo prodotto, codice pensato per gli agenti AI, tracking e dashboard dal primo giorno. Nello Sprint il go-live cade tra il giorno 15 e il 30, poi 90 giorni di supporto. La nostra [guida alla migrazione a Shopify](/it/migrazione-shopify) spiega il processo.',
    },
    {
      type: 'paragraph',
      text: 'Tra i nostri casi studio pubblicati ci sono [Integratori DTC Nazzi](/it/casi-studio/integratori-nazzi-dtc-shopify), passato da WooCommerce, e [Cumini](/it/casi-studio/cumini-luxury-fashion-ecommerce), passato da una piattaforma proprietaria legata al gestionale. Le loro pagine mostrano i risultati della migrazione. La sintesi di questo articolo è la stessa: l’AI è uno strumento forte in mano a un team con dati puliti, una procedura e qualcuno che controlla.',
    },
    {
      type: 'paragraph',
      text: 'Lo Sprint ha un prezzo pubblico per fatturato: €5.800 sotto i €2M, €8.800 tra €2M e €20M, €12.800 oltre i €20M, IVA esclusa, in 4 rate.',
    },
    { type: 'h2', text: 'Domande frequenti' },
    { type: 'h3', text: 'A cosa serve l’AI in un eCommerce?' },
    {
      type: 'paragraph',
      text: 'In pratica: scrivere e arricchire i contenuti prodotto, smistare e preparare le risposte dell’assistenza, leggere i dati dello store e segnalare anomalie, accelerare lo sviluppo, aiutare con email e flussi e rendere i prodotti trovabili dagli assistenti AI. Funziona meglio su compiti ripetitivi e verificabili, con una persona che approva il risultato.',
    },
    { type: 'h3', text: 'Conviene l’AI per un piccolo eCommerce?' },
    {
      type: 'paragraph',
      text: 'Sì, se scegli un compito ripetitivo e misuri le ore prima e dopo. No, se compri uno strumento senza un problema da risolvere. Parti dai contenuti del catalogo o dalle bozze di assistenza, fai approvare a una persona e giudica il risultato dopo un mese.',
    },
    { type: 'h3', text: 'L’AI sostituirà chi lavora in un eCommerce?' },
    {
      type: 'paragraph',
      text: 'Nel nostro lavoro toglie compiti ripetitivi, non decisioni. Le persone definiscono la strategia, approvano ciò che va online, gestiscono i clienti delicati e proteggono il brand.',
    },
    { type: 'h3', text: 'I contenuti prodotto scritti con l’AI fanno male alla SEO?' },
    {
      type: 'paragraph',
      text: 'Non di per sé. Google dice che usare l’AI non è un problema in sé, mentre generare pagine in serie soprattutto per manipolare il posizionamento è spam. Un contenuto accurato, rivisto e scritto sui dati veri del prodotto va bene. Il rischio sono le pagine in blocco senza revisione.',
    },
    { type: 'h3', text: 'Quanto ci vuole prima di vedere risultati con l’AI in un eCommerce?' },
    {
      type: 'paragraph',
      text: 'Il tempo risparmiato sui lavori ripetitivi di solito si vede in settimane. Gli effetti su conversione o fatturato richiedono una finestra più lunga e un gruppo di controllo. Nel nostro AI Accelerator l’obiettivo dei 30 giorni è trovare le opportunità, metterle in ordine e attivare le prime soluzioni AI sulla più importante.',
    },
    { type: 'h3', text: 'Cosa include l’AI Accelerator?' },
    {
      type: 'paragraph',
      text: 'È un percorso one-to-one di 30 giorni per eCommerce già avviati: quattro videochiamate da 60 minuti, fino a due quick win attivate insieme a te, un documento delle priorità con roadmap, protocolli operativi e un Context Document che restano tuoi. Prezzo fisso, nessun rinnovo automatico. A parte: sviluppo oltre le quick win, gestione delle campagne, produzione di contenuti e licenze AI.',
    },
    {
      type: 'paragraph',
      text: '**Prossimo passo.** Per uno store già online, prenota la pre-call gratuita per l’[AI Accelerator](/it/ai-accelerator): verifichiamo insieme il fit prima che tu ti impegni. Se stai cambiando piattaforma, [candidati allo Shopify Launch Sprint](/it/sprint-migrazione-shopify) e rispondiamo entro 48 ore con la tua fascia, il prezzo e la prima data di kickoff disponibile.',
    },
    {
      type: 'paragraph',
      text: 'Lo [Shopify Launch Sprint](/it/sprint-migrazione-shopify) porta il tuo store su Shopify in 14 giorni con il nostro Custom AI System: calendario fisso, prezzo pubblico e 4 garanzie scritte.',
    },
  ],
  faqIt: [
    {
      question: 'A cosa serve l’AI in un eCommerce?',
      answer:
        'In pratica: scrivere e arricchire i contenuti prodotto, smistare e preparare le risposte dell’assistenza, leggere i dati dello store e segnalare anomalie, accelerare lo sviluppo, aiutare con email e flussi e rendere i prodotti trovabili dagli assistenti AI. Funziona meglio su compiti ripetitivi e verificabili, con una persona che approva il risultato.',
    },
    {
      question: 'Conviene l’AI per un piccolo eCommerce?',
      answer:
        'Sì, se scegli un compito ripetitivo e misuri le ore prima e dopo. No, se compri uno strumento senza un problema da risolvere. Parti dai contenuti del catalogo o dalle bozze di assistenza, fai approvare a una persona e giudica il risultato dopo un mese.',
    },
    {
      question: 'L’AI sostituirà chi lavora in un eCommerce?',
      answer:
        'Nel nostro lavoro toglie compiti ripetitivi, non decisioni. Le persone definiscono la strategia, approvano ciò che va online, gestiscono i clienti delicati e proteggono il brand.',
    },
    {
      question: 'I contenuti prodotto scritti con l’AI fanno male alla SEO?',
      answer:
        'Non di per sé. Google dice che usare l’AI non è un problema in sé, mentre generare pagine in serie soprattutto per manipolare il posizionamento è spam. Un contenuto accurato, rivisto e scritto sui dati veri del prodotto va bene. Il rischio sono le pagine in blocco senza revisione.',
    },
    {
      question: 'Quanto ci vuole prima di vedere risultati con l’AI in un eCommerce?',
      answer:
        'Il tempo risparmiato sui lavori ripetitivi di solito si vede in settimane. Gli effetti su conversione o fatturato richiedono una finestra più lunga e un gruppo di controllo. Nel nostro AI Accelerator l’obiettivo dei 30 giorni è trovare le opportunità, metterle in ordine e attivare le prime soluzioni AI sulla più importante.',
    },
    {
      question: 'Cosa include l’AI Accelerator?',
      answer:
        'È un percorso one-to-one di 30 giorni per eCommerce già avviati: quattro videochiamate da 60 minuti, fino a due quick win attivate insieme a te, un documento delle priorità con roadmap, protocolli operativi e un Context Document che restano tuoi. Prezzo fisso, nessun rinnovo automatico. A parte: sviluppo oltre le quick win, gestione delle campagne, produzione di contenuti e licenze AI.',
    },
  ],
}

export default article
