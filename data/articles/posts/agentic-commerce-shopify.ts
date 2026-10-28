import type { Article } from '../index'

const article: Article = {
  slug: 'agentic-commerce-shopify',
  slugIt: 'agentic-commerce-shopify',
  title: 'Agentic Commerce for Shopify: What to Prepare This Quarter',
  titleIt: 'Agentic commerce per Shopify: cosa preparare in questo trimestre',
  seoTitle: 'Agentic Commerce on Shopify: What to Do Now',
  seoTitleIt: 'Agentic commerce su Shopify: cosa fare ora',
  seoDescription:
    'Agentic commerce on Shopify without the hype: what AI shopping agents change for your store, and the five things worth fixing this quarter, in order.',
  seoDescriptionIt:
    'Agentic commerce su Shopify senza hype: cosa cambia per il tuo store con gli agenti AI che comprano e le cinque cose da sistemare in questo trimestre.',
  excerpt:
    'What agentic commerce means for a Shopify store, what is real and what is hype, and a five-step plan to get your store ready for AI shopping agents.',
  excerptIt:
    'Cosa significa agentic commerce per uno store Shopify, cosa è reale e cosa è hype, e un piano in cinque passi per preparare lo store agli agenti AI.',
  ledeEn:
    'AI agents now search, compare and buy for shoppers. Our view on what that means for a Shopify store, what to ignore, and what to fix this quarter.',
  ledeIt:
    'Gli agenti AI ormai cercano, confrontano e comprano al posto del cliente. La nostra lettura per uno store Shopify: cosa ignorare e cosa sistemare in questo trimestre.',
  image: '/images/blog/agentic-commerce-shopify-cover.png',
  imageAlt: 'Copertina astratta, sfondo azzurro sfumato, con un’onda di puntini di dimensione variabile',
  imageAltEn: 'Abstract cover, softly graded sky blue background with a wave of dots changing size',
  articleType: 'Article',
  date: '2026-10-27',
  datePublishedIso: '2026-10-27T09:00:00+02:00',
  dateModifiedIso: '2026-10-27T09:00:00+02:00',
  wordCount: 2180,
  articleSection: 'AI',
  readingTimeMinutes: 9,
  keywordsEn:
    'agentic commerce, ai shopping agent, agentic commerce shopify, shopify agentic storefronts, ai agents ecommerce, prepare store for ai agents',
  keywordsIt:
    'agentic commerce, agenti ai ecommerce, agentic commerce shopify, shopify agentic storefronts, agenti ai che comprano, preparare store agenti ai',
  faqEn: [
    {
      question: 'What is agentic commerce?',
      answer:
        'Agentic commerce is online shopping where an AI agent searches, compares and buys on behalf of the shopper, usually after the shopper approves. The agent reads product data, prices, stock and policies instead of browsing a store the way a person does.',
    },
    {
      question: 'Do I need to do anything if my store is already on Shopify?',
      answer:
        'Yes, but it is data work, not a rebuild. Shopify provides the AI sales channel (Agentic Storefronts) in the admin, and you decide which AI platforms to sell on. What it cannot do for you is fix incomplete attributes, missing policies and a messy catalog.',
    },
    {
      question: 'Will AI shopping agents replace my website?',
      answer:
        'No. In Shopify’s setup the shopper can complete the purchase in the AI conversation or on your online store, and you stay the merchant. Your site still matters for returning customers, direct traffic and everything an agent cannot judge, like brand.',
    },
    {
      question: 'What is the first thing to fix for AI shopping agents?',
      answer:
        'Product attributes. Open ten products as if each were a spreadsheet row and check that material, size, compatibility, ingredients and similar facts are filled in as structured fields, not buried in the description.',
    },
    {
      question: 'How do I know if AI agents send orders to my store?',
      answer:
        'Check the AI channel attribution in your Shopify admin orders, add a channel group for AI referrers in your analytics, and run a monthly test with ten customer-style queries on the main AI assistants. Do not rely on last-click reports alone.',
    },
    {
      question: 'Do I need an llms.txt file for agentic commerce?',
      answer:
        'No. It costs an afternoon and does no harm, and product data, structured data and clear policies matter far more than a text file at the root of the site.',
    },
  ],
  faqIt: [
    {
      question: 'Cos’è l’agentic commerce?',
      answer:
        'L’agentic commerce è lo shopping online in cui un agente AI cerca, confronta e compra al posto del cliente, di solito dopo la sua approvazione. L’agente legge dati prodotto, prezzi, disponibilità e policy invece di navigare lo store come farebbe una persona.',
    },
    {
      question: 'Se il mio store è già su Shopify devo fare qualcosa?',
      answer:
        'Sì, ma è lavoro sui dati, non un rifacimento. Shopify mette a disposizione in admin il canale di vendita AI (Agentic Storefronts) e tu scegli su quali piattaforme AI vendere. Non può sistemare al posto tuo attributi incompleti, policy mancanti e un catalogo disordinato.',
    },
    {
      question: 'Gli agenti AI sostituiranno il mio sito?',
      answer:
        'No. Nella configurazione di Shopify il cliente può chiudere l’acquisto nella conversazione con l’AI o sul tuo store online, e resti tu il venditore. Il sito conta ancora per i clienti di ritorno, il traffico diretto e tutto ciò che un agente non sa giudicare, come il brand.',
    },
    {
      question: 'Qual è la prima cosa da sistemare per gli agenti AI?',
      answer:
        'Gli attributi dei prodotti. Apri dieci prodotti come se fossero righe di un foglio di calcolo e verifica che materiale, taglia, compatibilità, ingredienti e dati simili siano compilati come campi strutturati, non sepolti nella descrizione.',
    },
    {
      question: 'Come capisco se gli agenti AI mi portano ordini?',
      answer:
        'Guarda l’attribuzione dei canali AI negli ordini dell’admin Shopify, aggiungi un gruppo di canali per i referrer AI nelle analytics e fai ogni mese un test con dieci domande da cliente sui principali assistenti AI. Non fermarti ai report last click.',
    },
    {
      question: 'Serve un file llms.txt per l’agentic commerce?',
      answer:
        'No. Costa un pomeriggio e non fa danni, e dati prodotto, dati strutturati e policy chiare contano molto più di un file di testo nella radice del sito.',
    },
  ],
  content: [
    {
      type: 'paragraph',
      text: "**Agentic commerce is shopping where an AI agent searches, compares and buys on the shopper's behalf. For a Shopify store it comes down to one question: can an agent read your catalog and your policies without guessing?** Channels, protocols and announcements all sit on top of that.",
    },
    {
      type: 'paragraph',
      text: 'We build and migrate Shopify stores at noprob agency (see the [Shopify Launch Sprint](/shopify-migration-sprint)). Since AI shopping agents moved from demo to a channel inside the Shopify admin, store owners ask us the same thing: is this real, and what do I do about it? Our answer: real enough to prepare for now, with work that also improves the store for people. Below is our view and a plan for this quarter.',
    },
    { type: 'h2', text: 'What does agentic commerce mean for a Shopify store?' },
    {
      type: 'paragraph',
      text: 'For a Shopify store, agentic commerce means a new kind of visitor: software that shops for a person, reads your data instead of your design, and can complete the purchase once the person approves.',
    },
    { type: 'paragraph', text: 'Three practical differences from a normal visitor:' },
    {
      type: 'list',
      items: [
        '**It does not see your homepage.** No hero, no brand video, no carefully chosen photo order. It sees a record: title, attributes, price, availability, shipping, returns.',
        '**It compares many stores at once, on facts.** Price, stock, delivery time, return terms and product attributes decide who gets recommended.',
        '**It can finish at checkout without a visit to your theme.** In Shopify’s setup you remain the merchant of record and the order lands in your admin.',
      ],
    },
    {
      type: 'paragraph',
      text: "Shopify's move is [Agentic Storefronts](https://www.shopify.com/news/winter-26-edition-agentic-storefronts): one setup in the admin that makes your catalog available inside AI conversations, with each AI platform switched on or off separately and orders showing AI channel attribution. Behind it, Shopify Catalog structures product data (categories, attributes, variants) and keeps prices and inventory current across agents, which is why your own data quality is the part you still control. The platform list changes, so check your admin for the current one.",
    },
    {
      type: 'paragraph',
      text: "Shopify's own [guide to agentic commerce](https://www.shopify.com/blog/agentic-commerce) covers the basics. This article covers what to do first and what to skip, for the agent that buys. For the neighbouring topics, see [ChatGPT shopping for Shopify](/blog/chatgpt-shopping-shopify) (getting products into ChatGPT) and [GEO for Shopify](/blog/geo-for-shopify) (being cited in AI answers).",
    },
    { type: 'h2', text: 'What is real and what is hype in agentic commerce?' },
    {
      type: 'paragraph',
      text: 'Real: the AI sales channel exists, the traffic is growing, and the preparation work is the same work that makes a store better for people. Hype: anything that sells you a shortcut.',
    },
    {
      type: 'paragraph',
      text: 'The figure to know is this one: AI-driven traffic and orders to Shopify stores tripled year over year in the second quarter of 2026 ([Digital Commerce 360](https://www.digitalcommerce360.com/2026/08/06/how-shopify-is-approaching-agentic-ai-2026/), 6 August 2026). It is a growth rate, not a share of orders, and a tripling can start from a small base the source does not give: it tells you the direction, not the size.',
    },
    { type: 'paragraph', text: '**Worth doing this quarter:**' },
    {
      type: 'list',
      items: [
        'The GEO groundwork, including measurement of AI-channel orders',
        'A checkout an agent can complete',
        'A clean catalog with accurate stock and consistent prices',
        'An order and support flow for a shopper who never saw your store',
        'Fraud rules and refunds reviewed on the first agent orders',
      ],
    },
    { type: 'paragraph', text: '**Hype, or at least not yet:**' },
    {
      type: 'list',
      items: [
        '**Building your own shopping agent or one-off integrations with each AI platform.** On Shopify the channel does that job for you.',
        '**Rewriting every description with AI to “rank in ChatGPT”.** Agents want facts, not louder copy.',
        '**Treating llms.txt as a growth lever.** It costs an afternoon, and product data, structured data and clear policies matter far more.',
        '**Paid “agent optimization” packages with guaranteed placement.** Nobody can guarantee what an agent picks.',
        '**Waiting for the standards to settle.** The data work below does not depend on which protocol wins.',
      ],
    },
    {
      type: 'paragraph',
      text: 'Our position: treat agentic commerce as a data quality project with a new customer at the end. If agent traffic stays small, you still end up with better product pages and a cleaner feed for Google. If it grows, you are already there.',
    },
    { type: 'h2', text: 'What changes for the merchant when an agent does the shopping?' },
    {
      type: 'paragraph',
      text: 'You compete on data and terms rather than on page design, and you give up some control over the moment of choice.',
    },
    {
      type: 'list',
      items: [
        '**The product page becomes a record.** If a fact lives only in an image or in a paragraph of brand story, for an agent it may as well not exist.',
        '**Policies become part of the product.** An agent that cannot find your return window cannot tell the shopper, and will recommend someone else.',
        '**Attribution changes.** Orders from AI channels show up in the admin with their channel. Reading only last-click reports will hide them.',
      ],
    },
    { type: 'h2', text: 'How do you prepare a Shopify store for an AI shopping agent?' },
    {
      type: 'paragraph',
      text: '**An AI shopping agent needs two things from your store: data it can read and a purchase it can complete.** The first is the same work as GEO, and the second is what this article adds. Five things, in this order, because each depends on the one before. None needs a rebuild.',
    },
    { type: 'h3', text: '1. The GEO groundwork' },
    {
      type: 'paragraph',
      text: 'Start with the data layer in our [guide to GEO for Shopify](/blog/geo-for-shopify): facts written as text, filled-in attributes and metafields, Product markup that matches the page, and shipping and returns on real pages. Then set up measurement: AI channel attribution in the admin orders and ten prompts run by hand every month. Those steps come first. Skip them and an agent never reaches your checkout, because it cannot read your record.',
    },
    { type: 'h3', text: '2. Checkout readiness' },
    {
      type: 'paragraph',
      text: 'An agent drops what a person would push through, so nothing at checkout can be left to guess. The purchase can happen in the AI conversation or on your store, and both paths must work. Check four things:',
    },
    {
      type: 'list',
      items: [
        '**Payment methods:** the ones your customers already use, enabled in every market you sell to.',
        '**Guest checkout:** let a first-time buyer pay without creating an account. A forced login is a wall for software.',
        '**Shipping rules and costs up front:** countries, rates, delivery estimates and taxes visible before payment, equal to what the agent quotes.',
        '**Returns:** window, return shipping cost and refund method, visible before buying.',
      ],
    },
    {
      type: 'paragraph',
      text: 'Keep the checkout close to Shopify’s standard: the more you bend it, the more likely it breaks in a flow you do not control. Place a test order through each route you enable.',
    },
    { type: 'h3', text: '3. Catalog and stock accuracy' },
    {
      type: 'paragraph',
      text: 'An agent buys what the data says is available, so a wrong record is now an order you have to handle. Three places where records drift apart:',
    },
    {
      type: 'list',
      items: [
        '**Inventory sync:** if stock also lives in an ERP, a warehouse system or a marketplace, check how fast it reaches Shopify and what happens when two channels sell the last unit. An oversell to a person is an apology email; to an agent’s shopper it is a cancellation they never expected.',
        '**Variant availability:** a sold-out size or colour must read as unavailable at variant level, not only on the product.',
        '**Price consistency across channels:** the price in Shopify, in Google Merchant Center, on marketplaces and in each market and currency must match, sales included. Agents compare sources.',
      ],
    },
    { type: 'h3', text: '4. Order flow and customer service when the buyer is an agent' },
    {
      type: 'paragraph',
      text: 'The order lands in your admin like any other, but its buyer never saw your store. Check that the confirmation email, tracking and order status page tell the shopper everything, without a trip back to the chat. Tag AI channel orders (Shopify Flow can do it) so support knows how the order began. Prepare replies for the follow-ups: where is my order, wrong variant, I did not mean this. The contact is the shopper, not the agent.',
    },
    { type: 'h3', text: '5. Fraud and refunds' },
    {
      type: 'paragraph',
      text: 'Agent orders can look odd to a fraud filter: a first order, a request that never touched your theme. Do not switch the rules off, and do not let them cancel everything from the AI channel. Review the first agent orders by hand in Shopify’s order risk analysis, then adjust. On refunds, the shopper approved a purchase on the strength of what the agent said. If your data was wrong, expect the refund to be yours, one more reason to fix items 1 and 3. If the shopper just regrets it, your normal returns policy applies, so write it for a person and for software alike.',
    },
    { type: 'h2', text: 'How can you test your store with an AI agent in 30 minutes?' },
    {
      type: 'paragraph',
      text: 'Ask the assistants your customers use the questions your customers ask, and write down whether you appear, with which facts, and what is wrong.',
    },
    {
      type: 'list',
      items: [
        '**Five category questions:** “best [product] for [use]” in your niche.',
        '**Three attribute questions:** “[product] without [ingredient or material] under [price]”.',
        '**Two policy questions:** “does [your brand] ship to [country] and how long are returns?”',
      ],
    },
    {
      type: 'paragraph',
      text: 'Run all ten on the main AI assistants. For each answer note: are you there, is the price right, is availability right, is the policy right. Every miss maps to the plan above: a missing attribute, a wrong price or a wrong return window is item 1, wrong availability is item 3. Then place a test order on each route you enable and read the confirmation as the shopper would. Repeat monthly and keep the sheet. That is your whole monitoring system for now.',
    },
    { type: 'h2', text: 'How do we build this into a Shopify store?' },
    {
      type: 'paragraph',
      text: 'In the [Shopify Launch Sprint](/shopify-migration-sprint) this work is part of how the store is built, not an add-on. The Sprint moves your store to Shopify in 14 days with our Custom AI System, with go-live between day 15 and 30 and 90 days of support. A migration is also the best moment to fix attributes, because every product, customer and order is being mapped anyway.',
    },
    {
      type: 'paragraph',
      text: 'The Custom AI System is built to be ready for AI agents: catalog and structured data prepared for ChatGPT, Copilot and Google AI Mode, and automatic GEO, so every new product is born with schema and data generated on its own.',
    },
    {
      type: 'paragraph',
      text: 'Two real migrations show how we work. [Integratori DTC Nazzi](/use-cases/integratori-nazzi-dtc-shopify) moved from WooCommerce, and its live Shopify store publishes the agentic discovery sitemap (checked on 13 October 2026). It sold 105% more online in its first 85 days on Shopify than in the same days of 2025. The case shows what the migration did. [Cumini](/use-cases/cumini-luxury-fashion-ecommerce) moved from a proprietary platform tied to its ERP. For how we migrate, read the [guide to migrating to Shopify](/shopify-migration).',
    },
    {
      type: 'paragraph',
      text: 'If your store is already on Shopify, the [AI Accelerator](/ai-accelerator) is 30 days one-to-one: we analyze sales, acquisition and processes with you and switch on the first AI solutions that pay back. Agent readiness is one possible item, chosen only if your numbers say so.',
    },
    { type: 'h2', text: 'Frequently Asked Questions' },
    { type: 'h3', text: 'What is agentic commerce?' },
    {
      type: 'paragraph',
      text: 'Agentic commerce is online shopping where an AI agent searches, compares and buys on behalf of the shopper, usually after the shopper approves. The agent reads product data, prices, stock and policies instead of browsing a store the way a person does.',
    },
    { type: 'h3', text: 'Do I need to do anything if my store is already on Shopify?' },
    {
      type: 'paragraph',
      text: 'Yes, but it is data work, not a rebuild. Shopify provides the AI sales channel (Agentic Storefronts) in the admin, and you decide which AI platforms to sell on. What it cannot do for you is fix incomplete attributes, missing policies and a messy catalog.',
    },
    { type: 'h3', text: 'Will AI shopping agents replace my website?' },
    {
      type: 'paragraph',
      text: 'No. In Shopify’s setup the shopper can complete the purchase in the AI conversation or on your online store, and you stay the merchant. Your site still matters for returning customers, direct traffic and everything an agent cannot judge, like brand.',
    },
    { type: 'h3', text: 'What is the first thing to fix for AI shopping agents?' },
    {
      type: 'paragraph',
      text: 'Product attributes. Open ten products as if each were a spreadsheet row and check that material, size, compatibility, ingredients and similar facts are filled in as structured fields, not buried in the description.',
    },
    { type: 'h3', text: 'How do I know if AI agents send orders to my store?' },
    {
      type: 'paragraph',
      text: 'Check the AI channel attribution in your Shopify admin orders, add a channel group for AI referrers in your analytics, and run a monthly test with ten customer-style queries on the main AI assistants. Do not rely on last-click reports alone.',
    },
    { type: 'h3', text: 'Do I need an llms.txt file for agentic commerce?' },
    {
      type: 'paragraph',
      text: 'No. It costs an afternoon and does no harm, and product data, structured data and clear policies matter far more than a text file at the root of the site.',
    },
    { type: 'h2', text: 'What to do on Monday' },
    {
      type: 'paragraph',
      text: 'Run the 30-minute test, write down the misses, and fix attributes first. Do the other four in the order above over the quarter. Skip the hype list. If agent orders grow, you will have the data ready; if they do not, you still have a better store.',
    },
    {
      type: 'paragraph',
      text: 'The [Shopify Launch Sprint](/shopify-migration-sprint) moves your store to Shopify in 14 days with our Custom AI System: a fixed calendar, a public price and 4 written guarantees.',
    },
  ],
  contentIt: [
    {
      type: 'paragraph',
      text: "**L’agentic commerce è lo shopping in cui un agente AI cerca, confronta e compra al posto del cliente. Per uno store Shopify si riduce a questo: un agente riesce a leggere il tuo catalogo e le tue policy senza tirare a indovinare?** Canali, protocolli e annunci stanno sopra.",
    },
    {
      type: 'paragraph',
      text: 'Costruiamo e migriamo store Shopify come noprob agency (vedi lo [Shopify Launch Sprint](/it/sprint-migrazione-shopify)). Da quando gli agenti AI per lo shopping sono un canale dentro l’admin di Shopify, chi ha uno store ci chiede: è vero, e io cosa faccio? La nostra risposta: abbastanza vera da prepararsi ora, con un lavoro che migliora lo store anche per le persone. Qui sotto la nostra lettura e un piano per questo trimestre.',
    },
    { type: 'h2', text: 'Cosa significa agentic commerce per uno store Shopify?' },
    {
      type: 'paragraph',
      text: 'Per uno store Shopify, agentic commerce significa un nuovo tipo di visitatore: un software che compra per conto di una persona, legge i tuoi dati invece del tuo design e può chiudere l’acquisto quando la persona approva.',
    },
    { type: 'paragraph', text: 'Tre differenze rispetto a un visitatore normale:' },
    {
      type: 'list',
      items: [
        '**Non vede la tua homepage.** Niente hero, niente video del brand, niente foto in ordine studiato. Vede una scheda: titolo, attributi, prezzo, disponibilità, spedizione, resi.',
        '**Confronta molti store insieme, sui fatti.** Prezzo, giacenza, tempi di consegna, condizioni di reso e attributi del prodotto decidono chi viene consigliato.',
        '**Può chiudere al checkout senza passare dal tuo tema.** Nella configurazione di Shopify resti tu il venditore e l’ordine arriva nel tuo admin.',
      ],
    },
    {
      type: 'paragraph',
      text: "La mossa di Shopify si chiama [Agentic Storefronts](https://www.shopify.com/news/winter-26-edition-agentic-storefronts): un’unica configurazione in admin che rende il catalogo disponibile dentro le conversazioni con l’AI, con ogni piattaforma AI attivabile o disattivabile separatamente e gli ordini con l’attribuzione del canale AI. Dietro c’è Shopify Catalog, che struttura i dati prodotto (categorie, attributi, varianti) e tiene aggiornati prezzi e giacenze per gli agenti: la qualità dei tuoi dati resta la parte in mano a te. L’elenco delle piattaforme cambia, quindi controlla quello attuale nel tuo admin.",
    },
    {
      type: 'paragraph',
      text: "La [guida di Shopify all’agentic commerce](https://www.shopify.com/blog/agentic-commerce) spiega le basi. Questo articolo dice cosa fare per primo e cosa saltare, per l’agente che compra. Per i temi vicini: [ChatGPT shopping per Shopify](/it/blog/chatgpt-shopping-shopify) (portare i prodotti in ChatGPT) e [GEO per Shopify](/it/blog/geo-seo-shopify) (essere citati nelle risposte AI).",
    },
    { type: 'h2', text: 'Cosa è reale e cosa è hype negli agenti AI per l’eCommerce?' },
    {
      type: 'paragraph',
      text: 'Reale: il canale di vendita AI esiste, il traffico cresce, e il lavoro di preparazione rende lo store migliore anche per le persone. Hype: tutto ciò che ti vende una scorciatoia.',
    },
    {
      type: 'paragraph',
      text: 'Il dato da conoscere è questo: traffico e ordini generati dall’AI verso gli store Shopify sono triplicati anno su anno nel secondo trimestre 2026 ([Digital Commerce 360](https://www.digitalcommerce360.com/2026/08/06/how-shopify-is-approaching-agentic-ai-2026/), 6 agosto 2026). È un tasso di crescita, non una quota degli ordini, e un triplicare può partire da una base piccola che la fonte non indica: dice la direzione, non la dimensione.',
    },
    { type: 'paragraph', text: '**Vale la pena farlo in questo trimestre:**' },
    {
      type: 'list',
      items: [
        'Le basi della GEO, compresa la misurazione degli ordini dal canale AI',
        'Un checkout che un agente sa completare',
        'Un catalogo pulito con giacenze corrette e prezzi coerenti',
        'Un flusso ordini e assistenza per un cliente che non ha visto il tuo store',
        'Regole antifrode e rimborsi rivisti sui primi ordini degli agenti',
      ],
    },
    { type: 'paragraph', text: '**Hype, o comunque non ancora:**' },
    {
      type: 'list',
      items: [
        '**Costruire un tuo agente di shopping o integrazioni su misura con ogni piattaforma AI.** Su Shopify lo fa il canale.',
        '**Riscrivere ogni descrizione con l’AI per “posizionarsi su ChatGPT”.** Gli agenti vogliono fatti, non testi più urlati.',
        '**Trattare llms.txt come una leva di crescita.** Costa un pomeriggio, e dati prodotto, dati strutturati e policy chiare contano molto di più.',
        '**Pacchetti a pagamento di “ottimizzazione per gli agenti” con posizionamento garantito.** Nessuno può garantire cosa sceglie un agente.',
        '**Aspettare che gli standard si assestino.** Il lavoro sui dati non dipende da quale protocollo vince.',
      ],
    },
    {
      type: 'paragraph',
      text: 'La nostra posizione: tratta l’agentic commerce come un progetto di qualità dei dati con un nuovo cliente in fondo. Se il traffico degli agenti resta piccolo, ti ritrovi comunque con schede prodotto migliori e un feed più pulito per Google. Se cresce, sei già pronto.',
    },
    { type: 'h2', text: 'Cosa cambia per chi vende quando compra un agente?' },
    {
      type: 'paragraph',
      text: 'Competi sui dati e sulle condizioni più che sul design, e cedi un po’ di controllo sul momento della scelta.',
    },
    {
      type: 'list',
      items: [
        '**La scheda prodotto diventa un record.** Se un’informazione sta solo in un’immagine o in un paragrafo di storytelling, per un agente è come se non esistesse.',
        '**Le policy diventano parte del prodotto.** Un agente che non trova il tuo periodo di reso non può dirlo al cliente e consiglierà un altro.',
        '**L’attribuzione cambia.** Gli ordini dai canali AI compaiono nell’admin con il loro canale. Guardare solo i report last click li nasconde.',
      ],
    },
    { type: 'h2', text: 'Come si prepara uno store Shopify agli agenti AI ecommerce che comprano?' },
    {
      type: 'paragraph',
      text: '**Gli agenti AI ecommerce chiedono due cose al tuo store: dati che sanno leggere e un acquisto che sanno completare.** La prima è lo stesso lavoro della GEO, la seconda è ciò che aggiunge questo articolo. Cinque cose, in quest’ordine, perché ognuna dipende dalla precedente. Nessuna richiede di rifare lo store.',
    },
    { type: 'h3', text: '1. Le basi della GEO' },
    {
      type: 'paragraph',
      text: 'Parti dal livello dati della nostra [guida alla GEO per Shopify](/it/blog/geo-seo-shopify): fatti scritti come testo, attributi e metafield compilati, markup Product coerente con la pagina, spedizioni e resi in pagine vere. Poi imposta la misurazione: attribuzione del canale AI negli ordini dell’admin e dieci prompt a mano ogni mese. Quei passaggi vengono per primi. Se li salti l’agente non arriva mai al checkout, perché non riesce a leggere la tua scheda.',
    },
    { type: 'h3', text: '2. Checkout pronto' },
    {
      type: 'paragraph',
      text: 'Un agente lascia ciò che una persona porterebbe a termine, quindi al checkout niente va lasciato a indovinare. L’acquisto può avvenire nella conversazione con l’AI o sul tuo store: entrambi i percorsi devono funzionare. Controlla quattro cose:',
    },
    {
      type: 'list',
      items: [
        '**Metodi di pagamento:** quelli che i tuoi clienti usano già, attivi in ogni mercato in cui vendi.',
        '**Checkout come ospite:** chi compra la prima volta deve poter pagare senza creare un account. Un login obbligatorio è un muro per un software.',
        '**Regole e costi di spedizione in chiaro:** paesi, tariffe, stime di consegna e tasse visibili prima del pagamento, uguali a ciò che cita l’agente.',
        '**Resi:** periodo, costo della spedizione di ritorno e metodo di rimborso, visibili prima di comprare.',
      ],
    },
    {
      type: 'paragraph',
      text: 'Tieni il checkout vicino allo standard di Shopify: più lo pieghi, più si rompe in flussi che non controlli. Fai un ordine di prova per ogni percorso.',
    },
    { type: 'h3', text: '3. Catalogo e giacenze corretti' },
    {
      type: 'paragraph',
      text: 'Un agente compra ciò che i dati dicono disponibile, quindi un record sbagliato diventa un ordine da gestire. Tre punti in cui si sfasano:',
    },
    {
      type: 'list',
      items: [
        '**Sincronizzazione dell’inventario:** se la giacenza vive anche in un ERP, in un gestionale di magazzino o su un marketplace, verifica quanto in fretta arriva su Shopify e cosa succede quando due canali vendono l’ultimo pezzo. A una persona basta una mail di scuse; per il cliente di un agente è una cancellazione inattesa.',
        '**Disponibilità delle varianti:** una taglia o un colore esauriti devono risultare non disponibili a livello di variante, non solo sul prodotto.',
        '**Prezzi coerenti tra i canali:** il prezzo su Shopify, in Google Merchant Center, sui marketplace e in ogni mercato e valuta deve coincidere, saldi compresi. Gli agenti confrontano le fonti.',
      ],
    },
    { type: 'h3', text: '4. Flusso ordini e assistenza quando il cliente è un agente' },
    {
      type: 'paragraph',
      text: 'L’ordine arriva nel tuo admin come gli altri, ma chi ha comprato non ha mai visto il tuo store. Verifica che email di conferma, tracking e stato dell’ordine dicano tutto al cliente, senza tornare nella chat. Etichetta gli ordini dal canale AI (Shopify Flow può farlo) per l’assistenza. Prepara le risposte ai dopo-acquisto: dov’è il mio ordine, variante sbagliata, non intendevo questo. Il contatto è il cliente, non l’agente.',
    },
    { type: 'h3', text: '5. Frodi e rimborsi' },
    {
      type: 'paragraph',
      text: 'Gli ordini degli agenti possono sembrare strani a un filtro antifrode: un primo ordine, una richiesta che non è passata dal tuo tema. Non spegnere le regole, ma non lasciare che cancellino tutto il canale AI. Rivedi a mano i primi ordini degli agenti nell’analisi del rischio di Shopify, poi correggi. Sui rimborsi: il cliente ha approvato l’acquisto in base a ciò che ha detto l’agente. Se i tuoi dati erano sbagliati, il rimborso sarà a tuo carico: un motivo in più per sistemare i punti 1 e 3. Se si è solo pentito vale la tua policy di reso, quindi scrivila per una persona e per un software.',
    },
    { type: 'h2', text: 'Come testi il tuo store con un agente AI in 30 minuti?' },
    {
      type: 'paragraph',
      text: 'Fai agli assistenti dei tuoi clienti le domande dei tuoi clienti e annota se compari, con quali dati e cosa è sbagliato.',
    },
    {
      type: 'list',
      items: [
        '**Cinque domande di categoria:** “miglior [prodotto] per [uso]” nella tua nicchia.',
        '**Tre domande sugli attributi:** “[prodotto] senza [ingrediente o materiale] sotto [prezzo]”.',
        '**Due domande sulle policy:** “[il tuo brand] spedisce in [paese] e quanto durano i resi?”',
      ],
    },
    {
      type: 'paragraph',
      text: 'Fai tutte e dieci sui principali assistenti AI. Per ogni risposta annota se ci sei e se prezzo, disponibilità e policy sono giusti. Ogni errore corrisponde al piano sopra: un attributo mancante, un prezzo sbagliato o un periodo di reso sbagliato è il punto 1, una disponibilità sbagliata il 3. Poi fai un ordine di prova su ogni percorso che attivi e leggi la conferma come la leggerebbe il cliente. Ripeti ogni mese e conserva il foglio. Per ora è tutto il monitoraggio che serve.',
    },
    { type: 'h2', text: 'Come costruiamo tutto questo dentro uno store Shopify?' },
    {
      type: 'paragraph',
      text: 'Nello [Shopify Launch Sprint](/it/sprint-migrazione-shopify) questo lavoro fa parte di come si costruisce lo store, non è un extra. Lo Sprint porta il tuo store su Shopify in 14 giorni con il nostro Custom AI System, con go-live tra il giorno 15 e il 30 e 90 giorni di supporto. Una migrazione è il momento migliore per sistemare gli attributi: ogni prodotto viene comunque mappato.',
    },
    {
      type: 'paragraph',
      text: 'Il Custom AI System è pensato per gli agenti AI: catalogo e dati strutturati preparati per ChatGPT, Copilot e Google AI Mode, e GEO automatico, così ogni nuovo prodotto nasce con schema e dati generati in automatico.',
    },
    {
      type: 'paragraph',
      text: 'Due migrazioni reali mostrano come lavoriamo. [Integratori DTC Nazzi](/it/casi-studio/integratori-nazzi-dtc-shopify) è passato da WooCommerce, e il suo store Shopify online pubblica la sitemap di agentic discovery (verificato il 13 ottobre 2026). Ha venduto online il 105% in più nei primi 85 giorni su Shopify rispetto agli stessi giorni del 2025. Il caso mostra cosa ha fatto la migrazione. [Cumini](/it/casi-studio/cumini-luxury-fashion-ecommerce) è passato da una piattaforma proprietaria legata al gestionale. Per come migriamo, leggi la [guida alla migrazione a Shopify](/it/migrazione-shopify).',
    },
    {
      type: 'paragraph',
      text: 'Se il tuo store è già su Shopify, l’[AI Accelerator](/it/ai-accelerator) sono 30 giorni one-to-one: analizziamo con te vendite, acquisizione e processi e attiviamo le prime soluzioni AI che si ripagano. La prontezza per gli agenti è una voce possibile, scelta solo se i tuoi numeri lo dicono.',
    },
    { type: 'h2', text: 'FAQ: le domande più frequenti sull’agentic commerce' },
    { type: 'h3', text: 'Cos’è l’agentic commerce?' },
    {
      type: 'paragraph',
      text: 'L’agentic commerce è lo shopping online in cui un agente AI cerca, confronta e compra al posto del cliente, di solito dopo la sua approvazione. L’agente legge dati prodotto, prezzi, disponibilità e policy invece di navigare lo store come farebbe una persona.',
    },
    { type: 'h3', text: 'Se il mio store è già su Shopify devo fare qualcosa?' },
    {
      type: 'paragraph',
      text: 'Sì, ma è lavoro sui dati, non un rifacimento. Shopify mette a disposizione in admin il canale di vendita AI (Agentic Storefronts) e tu scegli su quali piattaforme AI vendere. Quello che non può fare al posto tuo è sistemare attributi incompleti, policy mancanti e un catalogo disordinato.',
    },
    { type: 'h3', text: 'Gli agenti AI sostituiranno il mio sito?' },
    {
      type: 'paragraph',
      text: 'No. Nella configurazione di Shopify il cliente può chiudere l’acquisto nella conversazione con l’AI o sul tuo store online, e resti tu il venditore. Il sito conta ancora per i clienti di ritorno, il traffico diretto e tutto ciò che un agente non sa giudicare, come il brand.',
    },
    { type: 'h3', text: 'Qual è la prima cosa da sistemare per gli agenti AI?' },
    {
      type: 'paragraph',
      text: 'Gli attributi dei prodotti. Apri dieci prodotti come se fossero righe di un foglio di calcolo e verifica che materiale, taglia, compatibilità, ingredienti e dati simili siano compilati come campi strutturati, non sepolti nella descrizione.',
    },
    { type: 'h3', text: 'Come capisco se gli agenti AI mi portano ordini?' },
    {
      type: 'paragraph',
      text: 'Guarda l’attribuzione dei canali AI negli ordini dell’admin Shopify, aggiungi un gruppo di canali per i referrer AI nelle analytics e fai ogni mese un test con dieci domande da cliente sui principali assistenti AI. Non fermarti ai report last click.',
    },
    { type: 'h3', text: 'Serve un file llms.txt per l’agentic commerce?' },
    {
      type: 'paragraph',
      text: 'No. Costa un pomeriggio e non fa danni, e dati prodotto, dati strutturati e policy chiare contano molto più di un file di testo nella radice del sito.',
    },
    { type: 'h2', text: 'Cosa fare lunedì' },
    {
      type: 'paragraph',
      text: 'Fai il test da 30 minuti, annota gli errori e sistema prima gli attributi. Fai gli altri quattro punti in ordine nel trimestre e salta la lista hype. Se gli ordini degli agenti crescono sei pronto; se no, hai comunque uno store migliore.',
    },
    {
      type: 'paragraph',
      text: 'Lo [Shopify Launch Sprint](/it/sprint-migrazione-shopify) porta il tuo store su Shopify in 14 giorni con il nostro Custom AI System: calendario fisso, prezzo pubblico e 4 garanzie scritte.',
    },
  ],
}

export default article
