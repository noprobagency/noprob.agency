import type { Article } from '../index'

const article: Article = {
  slug: 'geo-for-shopify',
  slugIt: 'geo-seo-shopify',
  title: 'GEO for Shopify: How to Get Your Store Cited by ChatGPT, Perplexity and Google AI',
  titleIt: 'GEO SEO per Shopify: come farsi citare da ChatGPT, Perplexity e Google AI',
  seoTitle: 'GEO for Shopify: Get Cited by ChatGPT and AI',
  seoTitleIt: 'GEO SEO per Shopify: farsi citare dalle AI',
  seoDescription:
    'GEO for Shopify: what stays the same as SEO, what changes, and how to get product pages cited by ChatGPT, Perplexity and Google AI, with real examples.',
  seoDescriptionIt:
    'GEO SEO per Shopify: cosa resta uguale alla SEO, cosa cambia e come far citare schede prodotto e collezioni da ChatGPT, Perplexity e Google AI.',
  excerpt:
    'What generative engine optimization means for a Shopify store, what stays the same as classic SEO, and what we actually did on our own site: llms.txt, robots rules, JSON-LD and answer-first sections.',
  excerptIt:
    'Cosa significa GEO SEO per uno store Shopify, cosa resta uguale alla SEO classica e cosa abbiamo fatto davvero sul nostro sito: llms.txt, regole robots, JSON-LD e sezioni che aprono con la risposta.',
  ledeEn:
    'GEO is young and its measurement is imperfect. Here is what stays the same as SEO, what changes for a Shopify store, and what we did on our own site that you can inspect today.',
  ledeIt:
    'La GEO è giovane e si misura male. Ecco cosa resta uguale alla SEO, cosa cambia per uno store Shopify e cosa abbiamo fatto sul nostro sito, che puoi controllare tu stesso.',
  image: '/images/blog/geo-for-shopify-cover.png',
  imageAlt: 'Copertina astratta, sfondo menta, con una dissolvenza radiale di puntini più grandi al centro',
  imageAltEn: 'Abstract cover, mint background with a radial fade of dots growing toward the centre',
  articleType: 'BlogPosting',
  date: '2026-10-27',
  datePublishedIso: '2026-10-27T09:00:00+00:00',
  dateModifiedIso: '2026-10-27T09:00:00+00:00',
  wordCount: 2030,
  articleSection: 'AI Search',
  readingTimeMinutes: 9,
  keywordsEn:
    'geo seo, geo vs seo, generative engine optimization, llm seo, geo for shopify, shopify ai seo, llms.txt shopify',
  keywordsIt:
    'geo seo, seo per ai, ai seo, generative engine optimization, geo shopify, farsi citare da chatgpt, llms.txt shopify',
  content: [
    {
      type: 'paragraph',
      text: '**GEO, short for generative engine optimization (you will also see it called GEO SEO, AI SEO or LLM SEO), is the work of making your pages easy for ChatGPT, Perplexity, Copilot and Google’s AI answers to find, understand and cite.** For a Shopify store that means two things at once: pages that answer questions, and product data a machine can read without guessing.',
    },
    {
      type: 'paragraph',
      text: 'We are noprob agency and we sell the [Shopify Launch Sprint](/shopify-migration-sprint), so we have a stake in this topic. We also have something most GEO articles lack: our own site, which you can inspect. This piece starts there, then moves to what changes on a Shopify store. GEO is young, measurement is imperfect, and wherever we are guessing we say so.',
    },
    { type: 'h2', text: 'GEO vs SEO: what stays the same and what changes?' },
    {
      type: 'paragraph',
      text: '**Most of the work is the same.** Google says its AI Overviews and AI Mode are built on its core ranking and quality systems, and its [guide to optimizing for generative AI features](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide) asks for what it always asked: indexable pages, original content with a point of view, clear structure, good page experience. If a page is not indexed, no AI answer built on Google’s index will quote it. That is why we never sell GEO as a replacement for SEO, and why a migration needs its [SEO checklist](/blog/shopify-migration-seo-checklist) before any AI work.',
    },
    { type: 'h3', text: 'What stays the same' },
    {
      type: 'list',
      items: [
        'Pages crawlable, indexed and fast.',
        'Original, first-hand content, not a rewrite of what the top results already say.',
        'Clear headings and semantic HTML.',
        'Structured data that matches what the page shows.',
      ],
    },
    { type: 'h3', text: 'What changes' },
    {
      type: 'list',
      items: [
        '**The unit is the passage, not the page.** An AI answer lifts a sentence or a short block, so every section has to make sense on its own.',
        '**The goal is a mention, not only a click.** A store can be named in an answer without a visit.',
        '**Other sites matter more.** AI answers tend to lean on what third parties say about you: reviews, listings, press, forums.',
        '**Product data becomes a channel.** Catalog data can reach AI shopping surfaces without anyone opening your product page.',
        '**Measurement gets worse.** Rankings are a number; citations are a sample of answers that change between runs.',
      ],
    },
    {
      type: 'paragraph',
      text: 'Our view: GEO is good SEO plus better-structured answers and better product data. Anyone selling it as a separate magic discipline is selling you something. Google’s own guide tells site owners to be wary of third-party tools that promise ranking success.',
    },
    { type: 'h2', text: 'What did we do on noprob.agency, and what can we show?' },
    {
      type: 'paragraph',
      text: '**On our own site we did four things you can inspect right now: an llms.txt file, robots rules that name AI crawlers, JSON-LD on every page type, and sections that open with their own answer.**',
    },
    { type: 'h3', text: 'The llms.txt file' },
    {
      type: 'paragraph',
      text: 'Our [llms.txt](https://noprob.agency/llms.txt) is a plain text file at the root of the domain, following the [llms.txt proposal](https://llmstxt.org). It is written to be quoted, in this order:',
    },
    {
      type: 'list',
      items: [
        'A one-paragraph definition of who we are and what we do.',
        'An About block: legal entity, founding year, founder, main platform, services, languages.',
        'Services with the public price of each, and a link to its page.',
        'Key differentiators.',
        'Proof points, with the date of the last check and the rule that we publish percentages, never clients’ absolute revenue.',
        'Who the ideal client is, and who is not a fit.',
        'Contact details.',
        'Links to our guides, case studies (each one lists its source platform) and blog articles.',
      ],
    },
    {
      type: 'paragraph',
      text: 'Does it work? Google’s guide says plainly that Google Search does not use llms.txt and that creating one neither helps nor harms visibility there. We keep it anyway: it takes an hour, it is the one place where we state prices and proof in a form we control, and other AI tools and agents may read it. We have no evidence that it moved a single citation, and we will not claim it did.',
    },
    { type: 'h3', text: 'Robots rules for AI crawlers' },
    {
      type: 'paragraph',
      text: 'Our `robots.txt` allows everything except `/api/` and `/admin/`, and then names six AI user agents explicitly: GPTBot, ChatGPT-User, ClaudeBot, anthropic-ai, PerplexityBot and Google-Extended. Honestly, the wildcard rule already allows them all. The explicit lines document intent and survive the day someone adds a blanket block. One detail from [OpenAI’s crawler documentation](https://developers.openai.com/api/docs/bots): the bot that decides whether you appear in ChatGPT search is OAI-SearchBot, separate from GPTBot, which relates to training. Ours is covered by the wildcard; if you write explicit lines, include it.',
    },
    { type: 'h3', text: 'JSON-LD on every page type' },
    {
      type: 'paragraph',
      text: 'We emit Organization data site-wide, Service and Offer with the public prices on the service pages, BlogPosting and BreadcrumbList on articles, and FAQPage wherever a page has real questions: the Sprint landing, the migration guide and every article with a FAQ, including this one. We do not do it to win a rich result in Google. We do it because it states question and answer unambiguously, and because it forces us to write short answers that stand alone.',
    },
    { type: 'h3', text: 'Sections that open with the answer' },
    {
      type: 'paragraph',
      text: 'Every H2 on this page is a question, and the first sentence under it answers it before any context. That is the cheapest GEO change there is, and it costs nothing but editing.',
    },
    { type: 'h2', text: 'How do you do GEO on a Shopify store?' },
    {
      type: 'paragraph',
      text: '**On Shopify, GEO comes down to four layers: product data, collection and content pages, the technical files, and the AI sales channels.** Take them in that order.',
    },
    { type: 'h3', text: 'Product pages and product data' },
    {
      type: 'paragraph',
      text: 'Shoppers ask AI for products by attribute, so the product page is where a store wins or loses. What to do:',
    },
    {
      type: 'list',
      items: [
        '**Write the facts as text:** material, dimensions, fit, ingredients, who it is for, how to use it, what is in the box, care, shipping and returns. Not only in images or in accordions that load late.',
        '**Use Shopify’s structure:** product type, variants, standard attributes and metafields. Shopify’s own [Agentic Storefronts announcement](https://www.shopify.com/news/winter-26-edition-agentic-storefronts) says merchants define their product schema with standard attributes and metafields, which is what lets agents describe items accurately.',
        '**Make the markup match the page.** Shopify’s Liquid [structured_data filter](https://shopify.dev/docs/api/liquid/filters/structured_data) turns a product into schema.org Product markup (ProductGroup when it has variants), so check that your theme or app actually outputs it. Then check that price, availability and brand equal what the shopper sees; Google’s [Product structured data](https://developers.google.com/search/docs/appearance/structured-data/product) page lists the properties.',
        '**Keep real reviews in the page itself,** on the product, not in a pop-up.',
      ],
    },
    {
      type: 'paragraph',
      text: 'On [Nazzi’s store](/use-cases/integratori-nazzi-dtc-shopify), a supplement brand from a compounding laboratory, shoppers ask about ingredients and how to take a product, so those are the facts that must sit on the page in plain text. We also published an agentic discovery sitemap on that store.',
    },
    { type: 'h3', text: 'Collections, guides and policy pages' },
    {
      type: 'paragraph',
      text: '**Collection pages and guides win the broad questions; policy pages win the trust questions.** Give each collection an intro that says what is inside and how to choose. Write buying guides with an opinion, not a summary of competitors. Publish shipping, returns and sizing as real, crawlable pages with plain answers, because AI assistants get asked about them constantly. Shopify’s Knowledge Base app is the place to store policies, FAQs and brand voice for agents.',
    },
    { type: 'h3', text: 'llms.txt and robots.txt on Shopify' },
    {
      type: 'paragraph',
      text: '**The Shopify stores we checked already serve an llms.txt, and you can edit your robots.txt.** On 27 October 2026 we requested `/llms.txt` on two well-known Shopify brands, kith.com and allbirds.com. Both returned a platform-generated file for agents, pointing to Shopify’s Universal Commerce Protocol endpoints and the Shop skill. We did not find this documented, and we do not know whether merchants can change it. Open `yourstore.com/llms.txt` before you do anything, and spend your effort on content and data instead.',
    },
    {
      type: 'paragraph',
      text: 'On robots, Shopify’s default file keeps crawlers out of admin, cart, checkout, account and sorted or filtered collection URLs, and you can customize it with the [robots.txt.liquid template](https://shopify.dev/docs/storefronts/themes/seo/robots-txt). The check that matters: make sure no customization, app or bot-protection layer in front of your store blocks the AI crawlers you want. Allowing GPTBot, which relates to training, is a business decision. Allowing OAI-SearchBot is what keeps you eligible for ChatGPT search answers. We allow both.',
    },
    { type: 'h3', text: 'Feeds and Shopify’s AI channels' },
    {
      type: 'paragraph',
      text: '**Shopify’s Agentic Storefronts publish your catalog to ChatGPT, Perplexity and Microsoft Copilot from one setup in the admin.** According to [Shopify’s announcement](https://www.shopify.com/news/winter-26-edition-agentic-storefronts), you can switch each platform on or off, Shopify Catalog syndicates your product data (inferring categories, extracting attributes, merging variants), shoppers can buy in the chat or on your store, you stay the merchant of record, and orders are credited to the AI channel in the admin. Here the catalog is the page, so feed quality is GEO. For Google, the same logic applies to Merchant Center data, which Google’s guide names as a way for products to appear in AI responses.',
    },
    {
      type: 'paragraph',
      text: 'The scale is rising: AI-driven traffic and orders to Shopify stores tripled year over year in the second quarter of 2026, according to [Digital Commerce 360](https://www.digitalcommerce360.com/2026/08/06/how-shopify-is-approaching-agentic-ai-2026/). That is a platform-wide figure, not a result of ours. The mechanics are in our guides to [agentic commerce for Shopify](/blog/agentic-commerce-shopify) and [ChatGPT shopping for Shopify](/blog/chatgpt-shopping-shopify).',
    },
    { type: 'h2', text: 'What does the Custom AI System do for GEO?' },
    {
      type: 'paragraph',
      text: '**In the Shopify Launch Sprint, the Custom AI System builds GEO into the store instead of adding it later.** Two of its six superpowers cover this: catalog and structured data ready for ChatGPT, Copilot and Google AI Mode, and an automatic GEO layer, so every new product is born with schema and data generated on its own. These are qualitative claims: we do not publish a speed or citation number for them, because we have no before-and-after measure.',
    },
    {
      type: 'paragraph',
      text: 'A migration is the cheapest moment to fix product data, since every product is touched anyway. It is also the riskiest moment for SEO, so the redirects come first: our [guide to migrating to Shopify](/shopify-migration) covers that. The Sprint takes 14 days, with go-live between day 15 and 30 and 90 days of support. If your store is already on Shopify, the [AI Accelerator](/ai-accelerator) is the lighter route: 30 days one-to-one to find the growth opportunities and switch on the first AI solutions with your team.',
    },
    { type: 'h2', text: 'How do you measure GEO?' },
    {
      type: 'paragraph',
      text: '**You can measure GEO only partly, and anyone showing you one GEO score is overselling.** Use four imperfect sources together:',
    },
    {
      type: 'list',
      items: [
        'Shopify admin: with Agentic Storefronts, orders are attributed to the AI channel.',
        'Analytics: look for chatgpt.com, perplexity.ai and Copilot as referral sources. Some AI visits arrive with no referrer, so you will undercount.',
        'Search Console: Google points to its reporting for generative AI features.',
        'A fixed list of prompts you run by hand every month: are we named, which page is cited, who else appears. Answers vary between runs, so look at the trend.',
      ],
    },
    {
      type: 'paragraph',
      text: 'Measurement is why we fix tracking before comparing channels. On [Cumini](/use-cases/cumini-luxury-fashion-ecommerce), the tracking audit score went from 31 to 92 out of 100 around the migration, and only then did channel comparisons mean anything.',
    },
    { type: 'h2', text: 'What is still unproven about GEO?' },
    {
      type: 'paragraph',
      text: '**Most GEO tactics have no public evidence behind them, including some of ours.** We do not know that llms.txt changes citations. We do not know how much explicit crawler rules or schema change what a model says. Google’s guide says no special file or markup is needed for its AI features and warns against creating pages just to manipulate AI responses. What we can say: clear answers, accurate product data and open crawling cost little and help classic search too, so we do them whether or not AI cites us. We have no AI-referral number for noprob.agency that we would publish, and no promise of citations to make you.',
    },
    { type: 'h2', text: 'Where should a Shopify store start this week?' },
    {
      type: 'paragraph',
      text: '**Start with the checks that cost nothing and the pages that sell.** In this order:',
    },
    {
      type: 'list',
      items: [
        'Confirm your key pages are indexed and that no app or firewall blocks AI crawlers.',
        'Open `yourstore.com/llms.txt` and see what Shopify serves.',
        'Rewrite your five best-selling product pages with the facts as text and check the Product JSON-LD matches.',
        'Add an answer-first intro to your main collections and a real shipping and returns page.',
        'Turn on Agentic Storefronts for the platforms you want and review the catalog data they use.',
        'Write down 10 prompts a customer would ask and run them monthly.',
      ],
    },
    {
      type: 'paragraph',
      text: 'The [Shopify Launch Sprint](/shopify-migration-sprint) moves your store to Shopify in 14 days with our Custom AI System: a fixed calendar, a public price and 4 written guarantees.',
    },
  ],
  contentIt: [
    {
      type: 'paragraph',
      text: '**La GEO (generative engine optimization), che in italiano trovi anche come GEO SEO, AI SEO o SEO per AI, è il lavoro che rende le tue pagine facili da trovare, capire e citare per ChatGPT, Perplexity, Copilot e le risposte AI di Google.** Per uno store Shopify significa due cose insieme: pagine che rispondono alle domande e dati prodotto che una macchina legge senza dover indovinare.',
    },
    {
      type: 'paragraph',
      text: 'Siamo noprob agency e vendiamo lo [Shopify Launch Sprint](/it/sprint-migrazione-shopify), quindi su questo tema abbiamo un interesse. Abbiamo però anche una cosa che quasi tutte le guide alla GEO SEO non hanno: un sito nostro, che puoi controllare. Partiamo da lì, poi passiamo a cosa cambia su uno store Shopify. La GEO è giovane, si misura male e dove stiamo facendo ipotesi lo scriviamo.',
    },
    { type: 'h2', text: 'GEO SEO e SEO tradizionale: cosa resta uguale e cosa cambia?' },
    {
      type: 'paragraph',
      text: '**La maggior parte del lavoro è la stessa.** Google dice che AI Overviews e AI Mode si basano sui suoi sistemi di ranking e qualità di sempre, e la sua [guida all’ottimizzazione per le funzioni di AI generativa](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide) chiede ciò che ha sempre chiesto: pagine indicizzabili, contenuti originali con un punto di vista, struttura chiara, buona esperienza di pagina. Se una pagina non è indicizzata, nessuna risposta AI costruita sull’indice di Google la citerà. Per questo non vendiamo mai la SEO per AI come sostituta della SEO, e per questo una migrazione ha bisogno della sua [checklist SEO](/it/blog/migrazione-shopify-seo-checklist) prima di qualsiasi lavoro sull’AI.',
    },
    { type: 'h3', text: 'Cosa resta uguale' },
    {
      type: 'list',
      items: [
        'Pagine scansionabili, indicizzate e veloci.',
        'Contenuti originali e di prima mano, non la riscrittura di ciò che dicono già i primi risultati.',
        'Titoli chiari e HTML semantico.',
        'Dati strutturati che corrispondono a quello che mostra la pagina.',
      ],
    },
    { type: 'h3', text: 'Cosa cambia' },
    {
      type: 'list',
      items: [
        '**L’unità è il passaggio, non la pagina.** Una risposta AI preleva una frase o un blocco breve, quindi ogni sezione deve reggersi da sola.',
        '**L’obiettivo è la citazione, non solo il clic.** Uno store può essere nominato in una risposta senza ricevere una visita.',
        '**Contano di più gli altri siti.** Le risposte AI tendono ad appoggiarsi a ciò che dicono di te i terzi: recensioni, elenchi, stampa, forum.',
        '**I dati prodotto diventano un canale.** Il catalogo può arrivare alle superfici di shopping AI senza che nessuno apra la tua scheda prodotto.',
        '**Misurare diventa più difficile.** Una posizione è un numero; una citazione è un campione di risposte che cambiano da una prova all’altra.',
      ],
    },
    {
      type: 'paragraph',
      text: 'La nostra opinione: la GEO è buona SEO più risposte meglio strutturate e dati prodotto migliori. Chi la vende come una disciplina magica a parte ti sta vendendo qualcosa. La stessa guida di Google invita i proprietari dei siti a diffidare degli strumenti di terzi che promettono successo nel ranking.',
    },
    { type: 'h2', text: 'Cosa abbiamo fatto su noprob.agency e cosa possiamo mostrare?' },
    {
      type: 'paragraph',
      text: '**Sul nostro sito abbiamo fatto quattro cose che puoi verificare adesso: un file llms.txt, regole robots che nominano i crawler AI, JSON-LD su ogni tipo di pagina e sezioni che aprono con la propria risposta.**',
    },
    { type: 'h3', text: 'Il file llms.txt' },
    {
      type: 'paragraph',
      text: 'Il nostro [llms.txt](https://noprob.agency/llms.txt) è un file di testo nella radice del dominio, che segue la [proposta llms.txt](https://llmstxt.org). È scritto per essere citato, in quest’ordine:',
    },
    {
      type: 'list',
      items: [
        'Un paragrafo che dice chi siamo e cosa facciamo.',
        'Un blocco “About”: entità legale, anno di fondazione, fondatore, piattaforma principale, servizi, lingue.',
        'I servizi con il prezzo pubblico di ciascuno e il link alla pagina.',
        'I fattori che ci differenziano.',
        'Le prove, con la data dell’ultimo controllo e la regola che pubblichiamo percentuali, mai il fatturato assoluto dei clienti.',
        'Chi è il cliente ideale e per chi non siamo adatti.',
        'I contatti.',
        'I link a guide, casi studio (ognuno indica la piattaforma di partenza) e articoli del blog.',
      ],
    },
    {
      type: 'paragraph',
      text: 'Funziona? La guida di Google dice chiaramente che Google Search non usa llms.txt e che crearlo non aiuta né danneggia la visibilità lì. Lo teniamo comunque: richiede un’ora, è l’unico posto in cui mettiamo prezzi e prove in una forma che controlliamo noi, e altri strumenti e agenti AI potrebbero leggerlo. Non abbiamo prove che abbia spostato una sola citazione e non diremo che l’abbia fatto.',
    },
    { type: 'h3', text: 'Regole robots per i crawler AI' },
    {
      type: 'paragraph',
      text: 'Il nostro `robots.txt` permette tutto tranne `/api/` e `/admin/`, poi nomina esplicitamente sei user agent AI: GPTBot, ChatGPT-User, ClaudeBot, anthropic-ai, PerplexityBot e Google-Extended. In realtà la regola generale li permette già tutti. Le righe esplicite documentano l’intenzione e resistono al giorno in cui qualcuno aggiunge un blocco generico. Un dettaglio dalla [documentazione dei crawler di OpenAI](https://developers.openai.com/api/docs/bots): il bot che decide se compari nella ricerca di ChatGPT è OAI-SearchBot, distinto da GPTBot, che riguarda l’addestramento. Il nostro è coperto dalla regola generale; se scrivi righe esplicite, includilo.',
    },
    { type: 'h3', text: 'JSON-LD su ogni tipo di pagina' },
    {
      type: 'paragraph',
      text: 'Pubblichiamo dati Organization su tutto il sito, Service e Offer con i prezzi pubblici sulle pagine dei servizi, BlogPosting e BreadcrumbList sugli articoli e FAQPage dove una pagina ha domande vere: la pagina dello Sprint, la guida alla migrazione e ogni articolo con le FAQ, questo compreso. Non lo facciamo per ottenere un risultato arricchito su Google. Lo facciamo perché dichiara domanda e risposta senza ambiguità e perché ci costringe a scrivere risposte brevi che stanno in piedi da sole.',
    },
    { type: 'h3', text: 'Sezioni che aprono con la risposta' },
    {
      type: 'paragraph',
      text: 'Ogni H2 di questa pagina è una domanda e la prima frase sotto risponde, prima di qualsiasi contesto. È la modifica di GEO SEO più economica che esista e costa solo il tempo di rilettura.',
    },
    { type: 'h2', text: 'Come si fa SEO per AI su uno store Shopify?' },
    {
      type: 'paragraph',
      text: '**Su Shopify la GEO SEO si riduce a quattro livelli: dati prodotto, pagine di collezione e contenuto, file tecnici e canali di vendita AI.** Affrontali in quest’ordine.',
    },
    { type: 'h3', text: 'Schede prodotto e dati prodotto' },
    {
      type: 'paragraph',
      text: 'Chi chiede un prodotto a un’AI lo descrive per caratteristiche, quindi la scheda prodotto è dove uno store vince o perde. Cosa fare:',
    },
    {
      type: 'list',
      items: [
        '**Scrivi i fatti come testo:** materiale, misure, vestibilità, ingredienti, a chi è rivolto, come si usa, cosa c’è nella confezione, cura, spedizione e resi. Non solo in immagini o in fisarmoniche che si caricano in ritardo.',
        '**Usa la struttura di Shopify:** tipo di prodotto, varianti, attributi standard e metafield. Lo stesso [annuncio di Shopify sugli Agentic Storefronts](https://www.shopify.com/news/winter-26-edition-agentic-storefronts) dice che i merchant definiscono il proprio schema prodotto con attributi standard e metafield, ed è ciò che permette agli agenti di descrivere gli articoli in modo accurato.',
        '**Fai coincidere il markup con la pagina.** Il [filtro Liquid structured_data](https://shopify.dev/docs/api/liquid/filters/structured_data) di Shopify trasforma un prodotto in markup schema.org Product (ProductGroup se ha varianti): verifica che il tuo tema o la tua app lo produca davvero. Poi controlla che prezzo, disponibilità e marca siano uguali a ciò che vede chi compra; la pagina di Google sui [dati strutturati Product](https://developers.google.com/search/docs/appearance/structured-data/product) elenca le proprietà.',
        '**Tieni recensioni vere dentro la pagina,** sulla scheda prodotto, non in un pop-up.',
      ],
    },
    {
      type: 'paragraph',
      text: 'Sullo [store di Nazzi](/it/casi-studio/integratori-nazzi-dtc-shopify), un brand di integratori nato da un laboratorio galenico, chi compra chiede ingredienti e modo d’uso, quindi sono i fatti che devono stare sulla pagina in testo semplice. Su quello store abbiamo pubblicato anche una sitemap per l’agentic discovery.',
    },
    { type: 'h3', text: 'Collezioni, guide e pagine di policy' },
    {
      type: 'paragraph',
      text: '**Le collezioni e le guide vincono le domande ampie; le pagine di policy vincono le domande di fiducia.** Dai a ogni collezione un’introduzione che dice cosa contiene e come scegliere. Scrivi guide all’acquisto con un’opinione, non il riassunto dei concorrenti. Pubblica spedizioni, resi e taglie come pagine vere e scansionabili con risposte semplici, perché gli assistenti AI ricevono continuamente quelle domande. L’app Knowledge Base di Shopify è il posto dove tenere policy, FAQ e tono di voce per gli agenti.',
    },
    { type: 'h3', text: 'llms.txt e robots.txt su Shopify' },
    {
      type: 'paragraph',
      text: '**Gli store Shopify che abbiamo controllato servono già un llms.txt e puoi modificare il robots.txt.** Il 27 ottobre 2026 abbiamo richiesto `/llms.txt` su due marchi Shopify noti, kith.com e allbirds.com. Entrambi hanno restituito un file generato dalla piattaforma, scritto per gli agenti, che rimanda agli endpoint dello Universal Commerce Protocol di Shopify e alla Shop skill. Non l’abbiamo trovato nella documentazione e non sappiamo se i merchant possano modificarlo. Apri `tuostore.com/llms.txt` prima di fare qualsiasi cosa e metti l’impegno su contenuti e dati.',
    },
    {
      type: 'paragraph',
      text: 'Sul robots, il file predefinito di Shopify tiene i crawler fuori da admin, carrello, checkout, account e URL di collezioni ordinate o filtrate, e puoi personalizzarlo con il [template robots.txt.liquid](https://shopify.dev/docs/storefronts/themes/seo/robots-txt). Il controllo che conta: assicurati che nessuna personalizzazione, app o protezione anti-bot davanti allo store blocchi i crawler AI che vuoi. Permettere GPTBot, che riguarda l’addestramento, è una scelta aziendale. Permettere OAI-SearchBot è ciò che ti tiene idoneo alle risposte della ricerca di ChatGPT. Noi permettiamo entrambi.',
    },
    { type: 'h3', text: 'Feed e canali AI di Shopify' },
    {
      type: 'paragraph',
      text: '**Gli Agentic Storefronts di Shopify pubblicano il tuo catalogo su ChatGPT, Perplexity e Microsoft Copilot da un’unica configurazione nell’admin.** Secondo [l’annuncio di Shopify](https://www.shopify.com/news/winter-26-edition-agentic-storefronts) puoi attivare o disattivare ogni piattaforma, Shopify Catalog distribuisce i tuoi dati prodotto (deduce le categorie, estrae gli attributi, unisce le varianti), chi compra può acquistare nella chat o sul tuo store, resti tu il merchant of record e gli ordini vengono attribuiti al canale AI nell’admin. Qui il catalogo è la pagina, quindi la qualità del feed è GEO. Per Google vale la stessa logica con i dati di Merchant Center, che la guida di Google cita come via perché i prodotti compaiano nelle risposte AI.',
    },
    {
      type: 'paragraph',
      text: 'La scala sta crescendo: traffico e ordini generati dall’AI verso gli store Shopify sono triplicati anno su anno nel secondo trimestre 2026, secondo [Digital Commerce 360](https://www.digitalcommerce360.com/2026/08/06/how-shopify-is-approaching-agentic-ai-2026/). È un dato dell’intera piattaforma, non un nostro risultato. Il funzionamento è nelle nostre guide al [commercio via agenti per Shopify](/it/blog/agentic-commerce-shopify) e a [ChatGPT shopping per Shopify](/it/blog/chatgpt-shopping-shopify).',
    },
    { type: 'h2', text: 'Cosa fa il Custom AI System per la GEO?' },
    {
      type: 'paragraph',
      text: '**Nello Shopify Launch Sprint il Custom AI System costruisce la GEO dentro lo store invece di aggiungerla dopo.** Due dei suoi sei superpoteri riguardano questo: catalogo e dati strutturati pronti per ChatGPT, Copilot e Google AI Mode, e un livello di GEO automatico, per cui ogni prodotto nuovo nasce con schema e dati generati da soli. Sono affermazioni qualitative: non pubblichiamo un numero di velocità o di citazioni, perché non abbiamo una misura prima e dopo.',
    },
    {
      type: 'paragraph',
      text: 'Una migrazione è il momento più economico per sistemare i dati prodotto, perché ogni prodotto viene toccato comunque. È anche il momento più rischioso per la SEO, quindi i redirect vengono prima di tutto: la nostra [guida alla migrazione a Shopify](/it/migrazione-shopify) ne parla. Lo Sprint dura 14 giorni, con go-live tra il giorno 15 e il 30 e 90 giorni di supporto. Se il tuo store è già su Shopify, la strada più leggera è l’[AI Accelerator](/it/ai-accelerator): 30 giorni one-to-one per individuare le opportunità di crescita e attivare le prime soluzioni AI con il tuo team.',
    },
    { type: 'h2', text: 'Come si misura la GEO SEO?' },
    {
      type: 'paragraph',
      text: '**La GEO si misura solo in parte, e chi ti mostra un unico punteggio GEO sta esagerando.** Usa insieme quattro fonti imperfette:',
    },
    {
      type: 'list',
      items: [
        'Admin Shopify: con gli Agentic Storefronts gli ordini sono attribuiti al canale AI.',
        'Analytics: cerca chatgpt.com, perplexity.ai e Copilot tra le fonti di riferimento. Alcune visite AI arrivano senza referrer, quindi sottostimerai.',
        'Search Console: Google rimanda ai suoi report per le funzioni di AI generativa.',
        'Un elenco fisso di domande che esegui a mano ogni mese: veniamo nominati, quale pagina viene citata, chi altro compare. Le risposte cambiano da una prova all’altra, quindi guarda l’andamento.',
      ],
    },
    {
      type: 'paragraph',
      text: 'La misura è il motivo per cui sistemiamo il tracciamento prima di confrontare i canali. Su [Cumini](/it/casi-studio/cumini-luxury-fashion-ecommerce) il punteggio dell’audit di tracciamento è passato da 31 a 92 su 100 attorno alla migrazione, e solo dopo i confronti tra canali hanno avuto senso.',
    },
    { type: 'h2', text: 'Cosa non è ancora dimostrato nella SEO per AI?' },
    {
      type: 'paragraph',
      text: '**Per la maggior parte delle tattiche di GEO non esistono prove pubbliche, comprese alcune nostre.** Non sappiamo se llms.txt cambi le citazioni. Non sappiamo quanto le regole esplicite per i crawler o lo schema cambino ciò che dice un modello. La guida di Google dice che per le sue funzioni AI non servono file o markup speciali e mette in guardia dal creare pagine solo per manipolare le risposte AI. Quello che possiamo dire: risposte chiare, dati prodotto accurati e scansione aperta costano poco e aiutano anche la ricerca classica, quindi li facciamo che l’AI ci citi o no. Non abbiamo un dato di visite da AI per noprob.agency che pubblicheremmo e non ti promettiamo citazioni.',
    },
    { type: 'h2', text: 'Da dove deve partire uno store Shopify questa settimana?' },
    {
      type: 'paragraph',
      text: '**Parti dai controlli che non costano nulla e dalle pagine che vendono.** In quest’ordine:',
    },
    {
      type: 'list',
      items: [
        'Conferma che le pagine chiave siano indicizzate e che nessuna app o firewall blocchi i crawler AI.',
        'Apri `tuostore.com/llms.txt` e guarda cosa serve Shopify.',
        'Riscrivi le cinque schede dei prodotti più venduti con i fatti come testo e controlla che il JSON-LD Product coincida.',
        'Aggiungi un’introduzione che apre con la risposta alle collezioni principali e una vera pagina di spedizioni e resi.',
        'Attiva gli Agentic Storefronts per le piattaforme che vuoi e rivedi i dati del catalogo che usano.',
        'Scrivi 10 domande che un cliente farebbe e rieseguile ogni mese.',
      ],
    },
    {
      type: 'paragraph',
      text: 'Lo [Shopify Launch Sprint](/it/sprint-migrazione-shopify) porta il tuo store su Shopify in 14 giorni con il nostro Custom AI System: calendario fisso, prezzo pubblico e 4 garanzie scritte.',
    },
  ],
  faqEn: [
    {
      question: 'What is GEO (generative engine optimization)?',
      answer:
        'GEO is the practice of making your pages and data easy for AI assistants such as ChatGPT, Perplexity, Copilot and Google’s AI answers to find, understand and cite. It is also called GEO SEO, AI SEO or LLM SEO. It builds on classic SEO rather than replacing it.',
    },
    {
      question: 'What is the difference between GEO and SEO?',
      answer:
        'Most of the work is shared: crawlable, indexed, original, well-structured pages. What changes is the target. SEO competes for a ranking and a click; GEO competes to be quoted inside an answer, often from a single passage or from product data, and it is harder to measure.',
    },
    {
      question: 'Do I need an llms.txt file on Shopify?',
      answer:
        'No. Google says Google Search does not use llms.txt, and Shopify already serves a platform-generated one on the stores we checked. Check yourstore.com/llms.txt first and put your effort into product data and answer-first content.',
    },
    {
      question: 'How do I get my Shopify products into ChatGPT, Perplexity and Copilot?',
      answer:
        'Turn on Agentic Storefronts in the Shopify admin, choose the AI platforms you want, and make your catalog data complete: attributes, variants, metafields, accurate prices and availability. Shopify Catalog then syndicates the data, and you remain the merchant of record.',
    },
    {
      question: 'Should I block GPTBot or other AI crawlers?',
      answer:
        'It is a business decision. GPTBot relates to training, while OAI-SearchBot decides whether you appear in ChatGPT search answers, and OpenAI lets you set them independently. If you want to be cited, do not block the search crawlers. We allow all of them.',
    },
    {
      question: 'Can I measure traffic and sales from ChatGPT and Perplexity?',
      answer:
        'Partly. Shopify attributes orders to the AI channel when you use Agentic Storefronts, and analytics shows referrals from chatgpt.com or perplexity.ai. Some visits carry no referrer, so you will undercount. Add a monthly manual check of fixed prompts.',
    },
  ],
  faqIt: [
    {
      question: 'Cos’è la GEO (generative engine optimization)?',
      answer:
        'La GEO è il lavoro che rende pagine e dati facili da trovare, capire e citare per assistenti AI come ChatGPT, Perplexity, Copilot e le risposte AI di Google. Si chiama anche GEO SEO, AI SEO o SEO per AI. Si appoggia alla SEO classica, non la sostituisce.',
    },
    {
      question: 'Che differenza c’è tra GEO e SEO?',
      answer:
        'Gran parte del lavoro è comune: pagine scansionabili, indicizzate, originali e ben strutturate. Cambia il bersaglio. La SEO compete per una posizione e un clic; la GEO compete per essere citata dentro una risposta, spesso da un solo passaggio o dai dati prodotto, ed è più difficile da misurare.',
    },
    {
      question: 'Serve un file llms.txt su Shopify?',
      answer:
        'No. Google dice che Google Search non usa llms.txt e Shopify serve già un file generato dalla piattaforma sugli store che abbiamo controllato. Guarda prima tuostore.com/llms.txt e metti l’impegno su dati prodotto e contenuti che aprono con la risposta.',
    },
    {
      question: 'Come porto i miei prodotti Shopify su ChatGPT, Perplexity e Copilot?',
      answer:
        'Attiva gli Agentic Storefronts nell’admin di Shopify, scegli le piattaforme AI che vuoi e completa i dati del catalogo: attributi, varianti, metafield, prezzi e disponibilità corretti. Shopify Catalog distribuisce poi i dati e resti tu il merchant of record.',
    },
    {
      question: 'Devo bloccare GPTBot o gli altri crawler AI?',
      answer:
        'È una scelta aziendale. GPTBot riguarda l’addestramento, mentre OAI-SearchBot decide se compari nelle risposte della ricerca di ChatGPT, e OpenAI permette di impostarli in modo indipendente. Se vuoi essere citato, non bloccare i crawler di ricerca. Noi li permettiamo tutti.',
    },
    {
      question: 'Posso misurare visite e vendite da ChatGPT e Perplexity?',
      answer:
        'In parte. Shopify attribuisce gli ordini al canale AI quando usi gli Agentic Storefronts e l’analytics mostra i riferimenti da chatgpt.com o perplexity.ai. Alcune visite non hanno referrer, quindi sottostimerai. Aggiungi un controllo manuale mensile con domande fisse.',
    },
  ],
}

export default article
