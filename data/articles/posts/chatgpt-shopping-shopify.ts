import type { Article } from '../index'

const article: Article = {
  slug: 'chatgpt-shopping-shopify',
  slugIt: 'chatgpt-shopping-shopify',
  title: 'ChatGPT Shopping on Shopify: How to Sell on ChatGPT',
  titleIt: 'ChatGPT shopping su Shopify: come vendere su ChatGPT',
  seoTitle: 'ChatGPT Shopping and Instant Checkout on Shopify',
  seoTitleIt: 'ChatGPT shopping e Instant Checkout su Shopify',
  seoDescription:
    'ChatGPT shopping on Shopify as of October 2026: what happened to Instant Checkout, how ACP works, what you control and how to check. Official sources.',
  seoDescriptionIt:
    'ChatGPT shopping su Shopify a ottobre 2026: cosa è successo a Instant Checkout, come funziona ACP, cosa controlli e come verificarlo. Fonti ufficiali.',
  excerpt:
    'Your Shopify products can show up in ChatGPT shopping without a feed. What happened to ChatGPT Instant Checkout, what is confirmed as of October 2026, what you control, and how to check.',
  excerptIt:
    'I prodotti del tuo store Shopify possono comparire nel ChatGPT shopping senza un feed. Cosa è successo a ChatGPT Instant Checkout, cosa è confermato a ottobre 2026, cosa controlli e come verificarlo.',
  ledeEn:
    'How products from a Shopify store reach ChatGPT shopping, what happened to ChatGPT Instant Checkout, what a merchant can do today and what to watch next. Checked against OpenAI and Shopify pages on 29 October 2026.',
  ledeIt:
    'Come i prodotti di uno store Shopify arrivano nel ChatGPT shopping, cosa è successo a ChatGPT Instant Checkout, cosa può fare oggi un merchant e cosa tenere d’occhio. Verificato su pagine OpenAI e Shopify al 29 ottobre 2026.',
  image: '/images/blog/chatgpt-shopping-shopify-cover.png',
  imageAlt: 'Copertina astratta, sfondo melanzana sfumato, con una dissolvenza radiale di puntini più grandi ai bordi',
  imageAltEn: 'Abstract cover, softly graded aubergine background with a radial fade of dots growing toward the edges',
  articleType: 'BlogPosting',
  date: '2026-10-08',
  datePublishedIso: '2026-10-08T11:50:00+01:00',
  dateModifiedIso: '2026-10-29T09:00:00+00:00',
  wordCount: 3200,
  articleSection: 'AI e GEO',
  readingTimeMinutes: 13,
  keywordsEn:
    'chatgpt shopping, chatgpt instant checkout, chatgpt instant checkout shopify, chatgpt shopify, sell on chatgpt, agentic commerce protocol, shopify catalog, OAI-SearchBot, chatgpt product feed',
  keywordsIt:
    'chatgpt shopping, chatgpt instant checkout, vendere su chatgpt, chatgpt ecommerce, chatgpt shopify, agentic commerce protocol, shopify catalog, OAI-SearchBot',
  faqEn: [
    {
      question: 'Can I sell on ChatGPT with Shopify?',
      answer:
        'Your products can appear in ChatGPT shopping through Shopify Catalog if your store and products are eligible. As of October 2026, Shopify’s Help Center says shoppers buy on your own online store checkout, and Shopify’s guide says it is live for merchants that sell to US buyers. Shopify and ChatGPT decide what appears, and what you control is the quality of your catalog data.',
    },
    {
      question: 'What happened to ChatGPT Instant Checkout?',
      answer:
        'On 24 March 2026 OpenAI stepped back from the first version of Instant Checkout, the feature for paying inside ChatGPT. It now lets merchants use their own checkout and focuses on product discovery. For Shopify stores, ChatGPT sends the shopper to your checkout in an in-app browser.',
    },
    {
      question: 'What is the Agentic Commerce Protocol (ACP)?',
      answer:
        'ACP is an open standard, maintained by OpenAI and Stripe, that lets an AI agent such as ChatGPT run a checkout on a merchant’s own systems through three flows: a product feed, a checkout session and a delegated payment token. On Shopify you do not implement it, because Catalog and your own checkout take its place.',
    },
    {
      question: 'Do I need to build a product feed for ChatGPT?',
      answer:
        'Not on Shopify. Eligible products reach ChatGPT through Shopify Catalog with no extra app or manual feed. OpenAI also offers a direct feed for other merchants, but its developer documentation says feed onboarding is limited to approved partners, who apply at chatgpt.com/merchants.',
    },
    {
      question: 'Does selling through ChatGPT cost extra on Shopify?',
      answer:
        'Shopify’s 24 March 2026 announcement says selling to ChatGPT users through Agentic Storefronts has no separate integrations, no apps and no transaction fees beyond standard processing rates. Earlier press coverage of a fee on ChatGPT checkout sales came before that announcement. Read the Agentic Storefronts Supplemental Terms of Service you accept.',
    },
    {
      question: 'Should I block GPTBot in robots.txt?',
      answer:
        'GPTBot is about training, not shopping visibility. [OpenAI says](https://developers.openai.com/api/docs/bots) each bot is controlled separately, so you can disallow GPTBot and still allow OAI-SearchBot, the bot that helps sites appear in ChatGPT search. Do not block OAI-SearchBot if you want to be found.',
    },
    {
      question: 'How do I know whether ChatGPT shows my products?',
      answer:
        'Check three places: the Shopify admin (Sales channels, Agentic: check what Catalog shows for your products, and per-channel orders), ChatGPT itself with the questions your customers ask, and your analytics for referrals from chatgpt.com. One answer in ChatGPT is not a ranking, because results depend on the query and context.',
    },
    {
      question: 'Can ChatGPT make purchases?',
      answer:
        'On a Shopify store, ChatGPT helps the shopper choose and sends them to your checkout to pay, in an in-app browser or a new tab. Some retailers add an app inside ChatGPT with their own account linking and payments. The questions shoppers ask before paying decide whether they click through.',
    },
    {
      question: 'Which guarantees does the Shopify Launch Sprint include?',
      answer:
        'Four, in writing: store ready on day 14 or the first installment refunded; organic traffic back to the baseline at 90 days or we work for free; go-live without being offline because of us, or we pay one installment; checkout that converts at least as well as before at 90 days, or we optimize it for free. In the Sprint we also build the catalog and structured data so the store is ready for AI agents.',
    },
  ],
  faqIt: [
    {
      question: 'Posso vendere su ChatGPT con Shopify?',
      answer:
        'I tuoi prodotti possono comparire nel ChatGPT shopping tramite Shopify Catalog, se store e prodotti sono idonei. A ottobre 2026 il Centro assistenza Shopify dice che il cliente compra nel checkout del tuo store online, e la guida di Shopify dice che è attivo per i merchant che vendono a clienti statunitensi. Shopify e ChatGPT decidono cosa compare, e tu controlli la qualità dei dati del catalogo.',
    },
    {
      question: 'Cosa è successo a ChatGPT Instant Checkout?',
      answer:
        'Il 24 marzo 2026 OpenAI ha fatto un passo indietro sulla prima versione di Instant Checkout, la funzione per pagare dentro ChatGPT. Ora lascia ai merchant il proprio checkout e si concentra sulla scoperta dei prodotti. Per gli store Shopify, ChatGPT manda il cliente al tuo checkout in un browser interno.',
    },
    {
      question: 'Cos’è l’Agentic Commerce Protocol (ACP)?',
      answer:
        'ACP è uno standard aperto, mantenuto da OpenAI e Stripe, che permette a un agente AI come ChatGPT di eseguire un checkout sui sistemi del merchant con tre flussi: un feed prodotti, una sessione di checkout e un token di pagamento delegato. Su Shopify non lo implementi tu, perché al suo posto ci sono Catalog e il tuo checkout.',
    },
    {
      question: 'Devo creare un feed prodotti per ChatGPT?',
      answer:
        'Su Shopify no. I prodotti idonei arrivano a ChatGPT tramite Shopify Catalog, senza app aggiuntive né feed manuali. OpenAI offre anche un feed diretto per i merchant non Shopify, ma la documentazione per sviluppatori dice che l’onboarding è limitato ai partner approvati, che si candidano su chatgpt.com/merchants.',
    },
    {
      question: 'Vendere tramite ChatGPT costa di più su Shopify?',
      answer:
        'L’annuncio di Shopify del 24 marzo 2026 dice che vendere agli utenti di ChatGPT tramite gli Agentic Storefronts non richiede integrazioni, app né commissioni sulle transazioni oltre i costi standard di elaborazione. Le notizie di stampa su una commissione per le vendite dal checkout di ChatGPT sono precedenti a quell’annuncio. Leggi i Termini supplementari degli Agentic Storefronts che accetti.',
    },
    {
      question: 'Devo bloccare GPTBot nel robots.txt?',
      answer:
        'GPTBot riguarda l’addestramento, non la visibilità negli acquisti. [OpenAI dice](https://developers.openai.com/api/docs/bots) che ogni bot si controlla separatamente: puoi bloccare GPTBot e consentire OAI-SearchBot, il bot che aiuta i siti a comparire nella ricerca di ChatGPT. Non bloccare OAI-SearchBot se vuoi essere trovato.',
    },
    {
      question: 'Come capisco se ChatGPT mostra i miei prodotti?',
      answer:
        'Guarda tre posti: l’admin Shopify (Canali di vendita, Agentic: controlla cosa mostra Catalog per i tuoi prodotti, e gli ordini per canale), ChatGPT stesso con le domande dei tuoi clienti, e le analytics per i referral da chatgpt.com. Una risposta di ChatGPT non è una classifica, perché i risultati dipendono da domanda e contesto.',
    },
    {
      question: 'ChatGPT può fare acquisti?',
      answer:
        'In uno store Shopify, ChatGPT aiuta chi compra a scegliere e lo manda al tuo checkout per pagare, in un browser interno o in una nuova scheda. Alcuni rivenditori aggiungono un’app dentro ChatGPT con collegamento account e pagamenti propri. Le domande che si fanno prima di pagare decidono se il cliente clicca.',
    },
    {
      question: 'Quali garanzie include lo Shopify Launch Sprint?',
      answer:
        'Quattro, per iscritto: store pronto al giorno 14 o rimborso della prima rata; traffico organico di nuovo alla baseline a 90 giorni o lavoriamo gratis; go-live senza store offline per colpa nostra, altrimenti paghiamo una rata; checkout che converte almeno quanto prima a 90 giorni, o lo ottimizziamo gratis. Nello Sprint prepariamo anche catalogo e dati strutturati perché lo store sia pronto per gli agenti AI.',
    },
  ],
  content: [
    {
      type: 'paragraph',
      text: '**ChatGPT shopping** lets people ask ChatGPT what to buy and get product results with prices, images and merchants. If you run a Shopify store, your products can show up there without you building anything, because Shopify passes eligible products to ChatGPT through its Shopify Catalog. That is the short answer to how you sell on ChatGPT with Shopify. This guide covers the longer one: what actually happens and what you control.',
    },
    {
      type: 'paragraph',
      text: 'The page is dated on purpose. How ChatGPT handles shopping changed between 2025 and 2026, and many articles still describe the old version. Everything below is checked against official OpenAI and Shopify pages as of 29 October 2026, and press coverage is labeled as press. We are noprob agency: we build Shopify stores and run the [Shopify Launch Sprint](/shopify-migration-sprint). We build the stores and the data that AI agents read, and everything about ChatGPT below is traced to its source.',
    },
    { type: 'paragraph', text: 'The short version:' },
    {
      type: 'list',
      items: [
        'On Shopify, eligible products reach ChatGPT through Shopify Catalog. There is no feed to build.',
        'ChatGPT Instant Checkout, paying inside the chat, was [stepped back on 24 March 2026](https://www.cnbc.com/2026/03/24/openai-revamps-shopping-experience-in-chatgpt-after-instant-checkout.html). As of October 2026, [Shopify’s Help Center](https://help.shopify.com/en/manual/online-sales-channels/agentic-storefronts) says ChatGPT sends shoppers to your own checkout, and Shopify says there are [no transaction fees beyond standard processing rates](https://www.shopify.com/news/agentic-commerce-momentum).',
        'It is [live for Shopify merchants that sell to US buyers](https://www.shopify.com/blog/how-agentic-commerce-works), wherever the store is.',
        'Shopify and OpenAI decide whether a product appears and where it ranks. A place cannot be bought.',
        'What you control: product data, availability, reviews, policies, structured data, and not blocking OpenAI’s search bot.',
      ],
    },
    { type: 'h2', text: 'What does it mean to sell on ChatGPT in October 2026?' },
    {
      type: 'paragraph',
      text: 'Selling on ChatGPT today means being found in ChatGPT’s shopping results, with the shopper usually finishing the purchase on your own Shopify checkout instead of paying inside the chat.',
    },
    {
      type: 'paragraph',
      text: 'Stripe and OpenAI [announced Instant Checkout](https://stripe.com/newsroom/news/stripe-openai-instant-checkout), payment inside ChatGPT, on 29 September 2025. On 10 December 2025 Shopify announced [Agentic Storefronts](https://www.shopify.com/news/winter-26-edition-agentic-storefronts), one admin setup for AI channels, and the details are in [agentic commerce on Shopify](/blog/agentic-commerce-shopify). On 24 March 2026 OpenAI announced a new shopping experience and, as [CNBC](https://www.cnbc.com/2026/03/24/openai-revamps-shopping-experience-in-chatgpt-after-instant-checkout.html) reports, stepped back from the first version of Instant Checkout: merchants can use their own checkout while OpenAI focuses on product discovery. The same day Shopify [announced](https://www.shopify.com/news/agentic-commerce-momentum) that millions of its merchants could sell to ChatGPT users through Agentic Storefronts. Shopify’s [Help Center](https://help.shopify.com/en/manual/online-sales-channels/agentic-storefronts) describes ChatGPT, as of October 2026, as a discovery-focused referrer: customers buy on your online store checkout, in an in-app browser inside ChatGPT or in a new tab.',
    },
    {
      type: 'paragraph',
      text: 'OpenAI has a separate route for merchants who are not on Shopify: a structured product feed. Its [developer documentation](https://developers.openai.com/commerce/guides/get-started) says feed onboarding is currently limited to approved partners, who apply at chatgpt.com/merchants. Shopify merchants do not need it: their eligible products reach ChatGPT through Shopify Catalog ([Shopify](https://www.shopify.com/news/agentic-commerce-momentum)).',
    },
    {
      type: 'paragraph',
      text: 'Shopify’s [guide](https://www.shopify.com/blog/how-agentic-commerce-works), updated in June 2026, says ChatGPT is live for merchants that sell to US buyers, regardless of where the store is. For your own store, check Sales channels, then Agentic, in your admin.',
    },
    { type: 'h2', text: 'What happened to ChatGPT Instant Checkout on Shopify?' },
    {
      type: 'paragraph',
      text: '**ChatGPT Instant Checkout, the feature that let people pay without leaving ChatGPT, was stepped back on 24 March 2026: OpenAI now lets merchants use their own checkout and concentrates on product discovery.** It launched on 29 September 2025, together with the Agentic Commerce Protocol built with Stripe ([Stripe](https://stripe.com/newsroom/news/stripe-openai-instant-checkout)). For a Shopify merchant, in practice:',
    },
    {
      type: 'list',
      items: [
        '**Nothing to switch on or off.** The route Shopify describes sends the shopper to your checkout, in ChatGPT’s in-app browser; on desktop ChatGPT links out to your store in a new tab. Your payment methods, pricing logic and checkout customizations carry over ([Shopify](https://www.shopify.com/news/agentic-commerce-momentum)).',
        '**The checkout spec is documented but not open to everyone.** OpenAI’s developer documentation still describes the checkout flow, and says onboarding product feeds in ChatGPT is currently available to approved partners ([OpenAI](https://developers.openai.com/commerce/guides/get-started)).',
        '**More control means an app.** Merchants who want a deeper integration can build a custom app inside ChatGPT; CNBC reports that Walmart launched one that day, with account linking and Walmart payments.',
      ],
    },
    { type: 'h2', text: 'How does the Agentic Commerce Protocol (ACP) work?' },
    {
      type: 'paragraph',
      text: '**The Agentic Commerce Protocol (ACP) is an open standard, maintained by OpenAI and Stripe, that lets an AI agent such as ChatGPT run a checkout on a merchant’s own systems.** OpenAI’s documentation splits it into three flows ([Key concepts](https://developers.openai.com/commerce/guides/key-concepts)):',
    },
    {
      type: 'list',
      items: [
        '**Product feed.** A CSV or JSON feed with identifiers, price, inventory, media and fulfillment options, refreshed with a full snapshot at least daily.',
        '**Checkout.** ChatGPT calls the merchant’s endpoints to create and update a checkout session. The merchant validates, calculates tax, checks risk, charges with its own processor, and accepts or declines the order.',
        '**Payment.** OpenAI passes the merchant’s processor a one-time token with a maximum amount and an expiry. Stripe’s Shared Payment Token was the first compatible implementation.',
      ],
    },
    {
      type: 'paragraph',
      text: '**What is an ACP payment?** A payment where the agent never holds the card number: it passes a single-use token, scoped in Stripe’s version to a specific merchant and cart ([Stripe](https://stripe.com/newsroom/news/stripe-openai-instant-checkout)). The merchant stays the merchant of record, and refunds and chargebacks stay with the merchant ([OpenAI](https://developers.openai.com/commerce/guides/production)). The specification is open source under the Apache License 2.0 ([agenticcommerce.dev](https://www.agenticcommerce.dev)), in beta, and the latest released version on [GitHub](https://github.com/agentic-commerce-protocol/agentic-commerce-protocol) is 2026-04-17. On Shopify you implement none of it: Catalog and your own checkout take its place. How ACP compares with the Universal Commerce Protocol that Google and Shopify built is in [agentic commerce on Shopify](/blog/agentic-commerce-shopify).',
    },
    { type: 'h2', text: 'How do products from a Shopify store get into ChatGPT?' },
    {
      type: 'paragraph',
      text: 'Products reach ChatGPT through Shopify Catalog, a structured source Shopify builds from the eligible products of Shopify stores and shares with AI channels through Agentic Storefronts.',
    },
    {
      type: 'paragraph',
      text: 'Per Shopify’s [Catalog documentation](https://help.shopify.com/en/manual/promoting-marketing/seo/shopify-catalog), if your store and products meet the requirements they are included automatically, with titles, descriptions, images, pricing, options and availability. You choose the AI channels from Sales channels, then Agentic, and Shopify’s [Help Center](https://help.shopify.com/en/manual/online-sales-channels/agentic-storefronts) says agentic storefronts are active by default for eligible stores. You can stop an individual agentic storefront from accessing your products through Shopify Catalog, but the documentation says you cannot opt out of Shopify Catalog itself. Using agentic storefronts requires accepting the Agentic Storefronts Supplemental Terms of Service, so read them. As of October 2026 no official page says how long a change to Catalog access takes to apply, so do not assume it is instant.',
    },
    {
      type: 'paragraph',
      text: 'Shopify decides what goes in. ChatGPT decides what shows. Shopify says each channel decides how to rank, word and display products, and that inclusion does not guarantee an appearance or a position ([Shopify Catalog documentation](https://help.shopify.com/en/manual/promoting-marketing/seo/shopify-catalog)). So you cannot buy a place. You can be a complete, available, fairly priced source.',
    },
    { type: 'h2', text: 'Is your Shopify store eligible for ChatGPT shopping?' },
    {
      type: 'paragraph',
      text: 'A store is eligible when it is on a Starter plan or higher, is not password-protected, is in good standing, and its products meet the Catalog requirements.',
    },
    {
      type: 'list',
      items: [
        'Each product needs a title, at least one image and a price above zero.',
        'It must be published to the online store (or Hydrogen or Headless) with a product URL, and not set to Unlisted or hidden from search engines.',
        'Stores restricted to B2B customers are not eligible.',
        'Some categories are excluded, such as alcohol, tobacco and vaping, prescription and medical, weapons, adult content, services, event tickets and uncategorized products.',
      ],
    },
    {
      type: 'paragraph',
      text: 'The [requirements page](https://help.shopify.com/en/manual/promoting-marketing/seo/shopify-catalog/requirements) also says Shopify reviews account standing over time. To see your own status, open Sales channels, then Agentic, in your Shopify admin and check what Catalog shows for your products. To hide a product from agentic storefronts, use the Unlisted status or the seo.hidden metafield.',
    },
    { type: 'h2', text: 'Which product data decides how ChatGPT presents you?' },
    {
      type: 'paragraph',
      text: 'ChatGPT can only repeat what your data says, so the work is making titles, attributes, images, price, availability, reviews and policies complete, consistent and true.',
    },
    {
      type: 'paragraph',
      text: 'Shopify asks for accurate, detailed product information and says inclusion does not guarantee an appearance. Use the points below as your checklist.',
    },
    {
      type: 'paragraph',
      text: '**Titles and descriptions.** Write the title the way a person asks for the product: type, brand, the attribute that matters. Describe in plain sentences what it is, who it is for, what it is made of and how it is used.',
    },
    {
      type: 'paragraph',
      text: '**Attributes and variants.** Shopify Catalog infers categories, extracts attributes and consolidates variants, and lets you group by standard attributes and metafields. OpenAI’s [product feed specification](https://developers.openai.com/commerce/specs/file-upload/products) shows what an AI shopping system expects: brand, GTIN, MPN, color, size, material, gender, age group, dimensions, weight, condition. Fill the ones that apply, and never invent a GTIN.',
    },
    {
      type: 'paragraph',
      text: '**Images.** One image is the minimum. Add a clean main shot, then context and detail, with alt text that says what is shown.',
    },
    {
      type: 'paragraph',
      text: '**Price and availability.** Both can weigh on which merchant is listed first (see above), so they must be true. Shopify keeps prices and inventory current across agents, but only from what is in your admin. If stock comes from an ERP, the sync is the real source of truth.',
    },
    {
      type: 'paragraph',
      text: '**Reviews and policies.** OpenAI’s feed lists review count, star rating and return policy as recommended fields. Collect real reviews, show them on the product page, and publish shipping, returns, privacy and terms.',
    },
    {
      type: 'paragraph',
      text: '**Structured data.** Keep Product markup (price, availability, brand, identifiers, ratings) correct, following [Google Search Central](https://developers.google.com/search/docs/appearance/structured-data/product). None of the OpenAI or Shopify pages we read says ChatGPT reads your JSON-LD. We keep it right because Google reads it, and the visible page, the catalog and the markup must say the same thing. On AI answers in general, see [GEO for Shopify](/blog/geo-for-shopify).',
    },
    { type: 'h2', text: 'Which OpenAI crawlers should your robots.txt allow?' },
    {
      type: 'paragraph',
      text: 'For shopping visibility, keep OAI-SearchBot allowed, because it is the bot that surfaces sites in ChatGPT search, and treat GPTBot, which is about training, as a separate decision. The robots.txt rules, bot by bot, are in [GEO for Shopify](/blog/geo-for-shopify), and how GEO differs from SEO in [GEO vs SEO](/blog/geo-vs-seo).',
    },
    { type: 'h2', text: 'How do you check whether your products appear in ChatGPT?' },
    {
      type: 'paragraph',
      text: 'There is no official ranking report, so check three places: the Shopify admin, ChatGPT itself and your analytics.',
    },
    {
      type: 'list',
      items: [
        '**Shopify admin.** Sales channels, Agentic: check what Catalog shows for your products. Per-channel reports show sales, orders, online store sessions and conversion, and orders carry the AI channel as attribution.',
        '**ChatGPT.** Ask the questions your customers ask, on different days, and log what appears in a sheet. Results vary with the query and context, so one answer is a sample, not a rank.',
        '**Analytics.** Look for referrals from chatgpt.com in your acquisition reports and compare with the orders attributed in Shopify.',
      ],
    },
    { type: 'h2', text: 'What do shoppers ask ChatGPT before they pay?' },
    {
      type: 'paragraph',
      text: '**Can ChatGPT make purchases? On a Shopify store, ChatGPT helps the shopper choose and sends them to your checkout to pay, so the questions asked before paying decide whether the shopper clicks.** Some retailers go further with an app inside ChatGPT: Walmart’s supports account linking and Walmart payments ([CNBC](https://www.cnbc.com/2026/03/24/openai-revamps-shopping-experience-in-chatgpt-after-instant-checkout.html)). Each question has a place in your store where the answer must live:',
    },
    {
      type: 'list',
      items: [
        '**“Does it ship to me, and what does it cost?”** Shipping destinations and rates, on a real page and in the knowledge base.',
        '**“Can I return it?”** Return window, return shipping and refund method, on a real page and in the knowledge base.',
        '**“Is it in stock in my size?”** Availability at variant level, in sync with your ERP or warehouse system.',
        '**“What is it made of?”** Material, ingredients and compatibility as structured fields.',
        '**“Is the price final?”** The same price in catalog, page and checkout, with tax and shipping visible before payment.',
        '**“Can I trust this store?”** Real reviews, contact details and published policies.',
      ],
    },
    {
      type: 'paragraph',
      text: 'Run these six as prompts once a month (the 30-minute test is in [agentic commerce on Shopify](/blog/agentic-commerce-shopify)) and fix what ChatGPT gets wrong at the source.',
    },
    { type: 'h2', text: 'What should you do this week to be ready for ChatGPT shopping?' },
    {
      type: 'list',
      items: [
        '**Check eligibility.** Sales channels, then Agentic: the Fall ’26 Edition of 28 October 2026 added a view that shows whether your store qualifies for Catalog, with links to fixes ([Shopify](https://www.shopify.com/news/fall-26-edition-merchant)).',
        '**Publish the facts agents ask about.** In the knowledge base on the same page, review return windows, shipping destinations and gift services. Shopify drafts them, and nothing reaches an agent without your sign-off.',
        '**Fix the product data** as in the section above: titles, attributes, variants, images, price, availability.',
        '**Walk the purchase as a shopper.** Open your product from a ChatGPT result and go through checkout up to the payment step, on mobile and desktop.',
        '**Keep OAI-SearchBot allowed** in robots.txt, and measure with AI channel attribution in the admin orders and referrals from chatgpt.com.',
        '**Skip** a separate product feed, an Instant Checkout integration, and anyone selling a ChatGPT ranking.',
      ],
    },
    { type: 'h2', text: 'What do we do in the Sprint to get a store ready for AI agents?' },
    {
      type: 'paragraph',
      text: 'A shopping assistant can only repeat what your store hands it. In the [Shopify Launch Sprint](/shopify-migration-sprint) the Custom AI System rebuilds your store so that it hands over clean product data, with prices and availability that match what the product page says. The wider readiness plan is in [agentic commerce for Shopify](/blog/agentic-commerce-shopify).',
    },
    {
      type: 'paragraph',
      text: 'Concretely: the store is rebuilt 1:1 on Shopify in 14 days, with go-live between day 15 and 30 and 90 days of support. One day goes to the purchase flow and technical SEO: meta, schema, sitemap. Every product, customer and order is reconciled, so the data an agent reads matches the store. We published an agentic discovery sitemap on the [Integratori DTC Nazzi](/use-cases/integratori-nazzi-dtc-shopify) store, migrated from WooCommerce. The [Cumini](/use-cases/cumini-luxury-fashion-ecommerce) case, from a proprietary platform tied to an ERP, is about sales and tracking. The cases show what the migration did; the catalog work is part of the Sprint.',
    },
    {
      type: 'paragraph',
      text: 'If your store is already on Shopify, the route is the [AI Accelerator](/ai-accelerator): 30 days one-to-one in which we analyze sales, acquisition and processes with you and switch on the first AI solutions that pay back, catalog readiness included. If you are on another platform, the [Shopify Launch Sprint](/shopify-migration-sprint) moves you to Shopify and builds the catalog for AI channels from day one. How we migrate is in the [Shopify migration guide](/shopify-migration).',
    },
    { type: 'h2', text: 'Our opinion: build the data, not a ChatGPT strategy' },
    {
      type: 'paragraph',
      text: '**Treat ChatGPT as one reader of your catalog.** Shopify’s admin puts ChatGPT, Copilot, Google AI Mode, the Gemini app and Shop in one view. Each ranks and words things its own way, but the data work is the same, and it helps on Google too. More in [agentic commerce on Shopify](/blog/agentic-commerce-shopify).',
    },
    {
      type: 'paragraph',
      text: '**Do not pay for a promised ChatGPT ranking.** Shopify says inclusion is no guarantee and each channel decides its own ranking. There is no lever to sell.',
    },
    {
      type: 'paragraph',
      text: '**Your checkout decides what the traffic is worth.** If the shopper lands on your store, your conversion rate sets the value. That is why the [CRO guide](/blog/shopify-cro-guide) matters as much as the catalog. For AI inside your own admin, see [Shopify Magic and Sidekick](/blog/shopify-magic-sidekick) and [AI for ecommerce](/blog/ai-for-ecommerce).',
    },
    {
      type: 'paragraph',
      text: '**ChatGPT also works the other way round.** Shopify connectors now let you manage products, inventory and orders from [nine agents, ChatGPT and Claude among them](https://www.shopify.com/news/fall-26-edition-merchant): a different job from selling to shoppers, covered in [Claude and Claude Code on Shopify](/blog/claude-shopify), [Shopify MCP explained](/blog/shopify-mcp) and [AI agents for Shopify](/blog/ai-agents-for-shopify).',
    },
    {
      type: 'paragraph',
      text: '**Do not build a ChatGPT integration yourself.** OpenAI’s own feed onboarding is limited to approved partners, and on Shopify the connection is already made. Fix the data and wait.',
    },
    { type: 'h2', text: 'What to watch next as of October 2026' },
    {
      type: 'paragraph',
      text: 'These points can change after this page is published:',
    },
    {
      type: 'list',
      items: [
        'Countries: Shopify’s guide (June 2026) says ChatGPT shopping is live for merchants that sell to US buyers. Check Sales channels, then Agentic, in your admin to see where it is live for your store.',
        'Whether paying inside the chat returns. As of October 2026, Shopify’s Help Center says ChatGPT purchases happen on your store’s checkout, and, per CNBC, OpenAI is focusing on discovery. No official page announces a return of in-chat payment.',
        'Fees. [Shopify’s 24 March 2026 announcement](https://www.shopify.com/news/agentic-commerce-momentum) says no transaction fees beyond standard processing rates; earlier press coverage of a fee on ChatGPT checkout sales came before it. Read the supplemental terms you accept.',
        'ChatGPT advertising. Shopify’s [Spring ’26 Edition](https://www.shopify.com/news/spring-26-edition-merchant) (17 June 2026) lists ChatGPT as a Shop Campaigns channel, and ChatGPT Ads as coming soon in Campaign Autopilot, now in early access.',
      ],
    },
    { type: 'h2', text: 'Frequently Asked Questions' },
    { type: 'h3', text: 'Can I sell on ChatGPT with Shopify?' },
    {
      type: 'paragraph',
      text: 'Yes, through Shopify Catalog if your store and products are eligible. As of October 2026 shoppers buy on your own checkout ([Shopify Help Center](https://help.shopify.com/en/manual/online-sales-channels/agentic-storefronts)), it is [live for merchants that sell to US buyers](https://www.shopify.com/blog/how-agentic-commerce-works), and appearing is not guaranteed.',
    },
    { type: 'h3', text: 'What happened to ChatGPT Instant Checkout?' },
    {
      type: 'paragraph',
      text: 'On [24 March 2026](https://www.cnbc.com/2026/03/24/openai-revamps-shopping-experience-in-chatgpt-after-instant-checkout.html) OpenAI stepped back from the first version of Instant Checkout, the feature for paying inside ChatGPT. It now lets merchants use their own checkout and focuses on product discovery. For Shopify stores, ChatGPT sends the shopper to your checkout in an in-app browser ([Shopify](https://www.shopify.com/news/agentic-commerce-momentum)).',
    },
    { type: 'h3', text: 'What is the Agentic Commerce Protocol (ACP)?' },
    {
      type: 'paragraph',
      text: 'ACP is an open standard, maintained by OpenAI and Stripe, that lets an AI agent such as ChatGPT run a checkout on a merchant’s own systems through a product feed, a checkout session and a delegated payment token. On Shopify you do not implement it, because Catalog and your own checkout take its place.',
    },
    { type: 'h3', text: 'Does selling through ChatGPT cost extra on Shopify?' },
    {
      type: 'paragraph',
      text: 'Shopify says selling to ChatGPT users through Agentic Storefronts has [no transaction fees beyond standard processing rates](https://www.shopify.com/news/agentic-commerce-momentum) (announcement of 24 March 2026). Earlier press coverage of a fee on ChatGPT checkout sales came before that announcement. Read the supplemental terms you accept.',
    },
    { type: 'h3', text: 'Do I need to build a product feed for ChatGPT?' },
    {
      type: 'paragraph',
      text: 'Not on Shopify: Shopify Catalog does it. OpenAI’s direct feed is limited to approved partners.',
    },
    { type: 'h3', text: 'Should I block GPTBot in robots.txt?' },
    {
      type: 'paragraph',
      text: 'GPTBot is about training. You can disallow it and still allow OAI-SearchBot, which helps sites appear in ChatGPT search.',
    },
    { type: 'h3', text: 'How do I know whether ChatGPT shows my products?' },
    {
      type: 'paragraph',
      text: 'Use the Shopify admin, ask ChatGPT your customers’ questions and watch referrals from chatgpt.com. One answer is not a ranking.',
    },
    { type: 'h3', text: 'Can ChatGPT make purchases?' },
    {
      type: 'paragraph',
      text: 'On a Shopify store, ChatGPT helps the shopper choose and sends them to your checkout to pay. Some retailers add an app inside ChatGPT with their own payments.',
    },
    { type: 'h3', text: 'Which guarantees does the Shopify Launch Sprint include?' },
    {
      type: 'paragraph',
      text: 'Four, in writing: store ready on day 14 or the first installment refunded; organic traffic back to the baseline at 90 days or we work for free; go-live without being offline because of us, or we pay one installment; checkout that converts at least as well as before at 90 days, or we optimize it for free. In the Sprint we also build the catalog and structured data so the store is ready for AI agents.',
    },
    { type: 'h2', text: 'A final note' },
    {
      type: 'paragraph',
      text: 'We update this page when OpenAI or Shopify change what they say. Last checked on 29 October 2026.',
    },
    {
      type: 'paragraph',
      text: 'The Sprint has a public price by revenue: €5,800 under €2M, €8,800 from €2M to €20M, €12,800 above €20M, VAT excluded, in 4 installments.',
    },
    {
      type: 'paragraph',
      text: 'The [Shopify Launch Sprint](/shopify-migration-sprint) moves your store to Shopify in 14 days with our Custom AI System: a fixed calendar, a public price and 4 written guarantees.',
    },
  ],
  contentIt: [
    {
      type: 'paragraph',
      text: 'Il **ChatGPT shopping** permette di chiedere a ChatGPT cosa comprare e ricevere prodotti con prezzi, immagini e venditori. Se hai uno store Shopify, i tuoi prodotti possono comparire senza che tu costruisca nulla, perché Shopify passa i prodotti idonei a ChatGPT tramite Shopify Catalog. È la risposta breve a come vendere su ChatGPT con Shopify. La guida dà quella lunga: cosa succede e cosa controlli.',
    },
    {
      type: 'paragraph',
      text: 'La pagina è datata di proposito. Il modo in cui ChatGPT gestisce gli acquisti è cambiato tra il 2025 e il 2026 e molti articoli descrivono ancora la versione vecchia. Quello che leggi è verificato su pagine ufficiali OpenAI e Shopify al 29 ottobre 2026, e la stampa è indicata come stampa. Siamo noprob agency: costruiamo store Shopify e facciamo lo [Shopify Launch Sprint](/it/sprint-migrazione-shopify). Costruiamo gli store e i dati che leggono gli agenti AI, e tutto ciò che riguarda ChatGPT qui sotto è riportato alla sua fonte.',
    },
    { type: 'paragraph', text: 'In breve:' },
    {
      type: 'list',
      items: [
        'Su Shopify i prodotti idonei arrivano a ChatGPT tramite Shopify Catalog. Non c’è nessun feed da costruire.',
        'ChatGPT Instant Checkout, il pagamento dentro la chat, è stato [ridimensionato il 24 marzo 2026](https://www.cnbc.com/2026/03/24/openai-revamps-shopping-experience-in-chatgpt-after-instant-checkout.html). A ottobre 2026 il [Centro assistenza Shopify](https://help.shopify.com/en/manual/online-sales-channels/agentic-storefronts) dice che ChatGPT manda il cliente al tuo checkout, e Shopify dice che [non ci sono commissioni sulle transazioni oltre i costi standard di elaborazione](https://www.shopify.com/news/agentic-commerce-momentum).',
        'È [attivo per i merchant Shopify che vendono a clienti statunitensi](https://www.shopify.com/blog/how-agentic-commerce-works), ovunque sia lo store.',
        'Shopify e OpenAI decidono se un prodotto compare e in che posizione. Un posto non si compra.',
        'Controlli tu: dati prodotto, disponibilità, recensioni, policy, dati strutturati e il bot di ricerca di OpenAI.',
      ],
    },
    { type: 'h2', text: 'Cosa significa vendere su ChatGPT a ottobre 2026?' },
    {
      type: 'paragraph',
      text: 'Vendere su ChatGPT oggi significa farsi trovare nei risultati di acquisto di ChatGPT, con il cliente che di solito conclude l’acquisto nel checkout del tuo store Shopify invece di pagare dentro la chat.',
    },
    {
      type: 'paragraph',
      text: 'Stripe e OpenAI hanno [annunciato Instant Checkout](https://stripe.com/newsroom/news/stripe-openai-instant-checkout), il pagamento dentro ChatGPT, il 29 settembre 2025. Il 10 dicembre 2025 Shopify ha presentato gli [Agentic Storefronts](https://www.shopify.com/news/winter-26-edition-agentic-storefronts), un setup unico nell’admin per i canali AI, e i dettagli sono in [agentic commerce su Shopify](/it/blog/agentic-commerce-shopify). Il 24 marzo 2026 OpenAI ha annunciato una nuova esperienza di shopping e, come riporta [CNBC](https://www.cnbc.com/2026/03/24/openai-revamps-shopping-experience-in-chatgpt-after-instant-checkout.html), ha fatto un passo indietro sulla prima versione di Instant Checkout: i merchant possono usare il proprio checkout mentre OpenAI si concentra sulla scoperta dei prodotti. Lo stesso giorno Shopify ha [annunciato](https://www.shopify.com/news/agentic-commerce-momentum) che milioni dei suoi merchant potevano vendere agli utenti di ChatGPT tramite gli Agentic Storefronts. Il [Centro assistenza Shopify](https://help.shopify.com/en/manual/online-sales-channels/agentic-storefronts) descrive, a ottobre 2026, ChatGPT come un canale che porta traffico: il cliente compra nel checkout del tuo store, in un browser interno a ChatGPT o in una nuova scheda.',
    },
    {
      type: 'paragraph',
      text: 'OpenAI ha una via separata per chi non è su Shopify: un feed prodotti strutturato. La [documentazione per sviluppatori](https://developers.openai.com/commerce/guides/get-started) dice che l’onboarding dei feed è per ora limitato ai partner approvati, che si candidano su chatgpt.com/merchants. I merchant Shopify non ne hanno bisogno: i loro prodotti idonei arrivano a ChatGPT tramite Shopify Catalog ([Shopify](https://www.shopify.com/news/agentic-commerce-momentum)).',
    },
    {
      type: 'paragraph',
      text: 'La [guida](https://www.shopify.com/blog/how-agentic-commerce-works) di Shopify, aggiornata a giugno 2026, dice che ChatGPT è attivo per i merchant che vendono a clienti statunitensi, indipendentemente da dove si trovi lo store. Per il tuo store controlla in Canali di vendita, poi Agentic.',
    },
    { type: 'h2', text: 'Cosa è successo a ChatGPT Instant Checkout su Shopify?' },
    {
      type: 'paragraph',
      text: '**ChatGPT Instant Checkout, la funzione che permetteva di pagare senza uscire da ChatGPT, è stato ridimensionato il 24 marzo 2026: OpenAI ora lascia ai merchant il proprio checkout e si concentra sulla scoperta dei prodotti.** È stato lanciato il 29 settembre 2025, insieme all’Agentic Commerce Protocol costruito con Stripe ([Stripe](https://stripe.com/newsroom/news/stripe-openai-instant-checkout)). Per un merchant Shopify, in pratica:',
    },
    {
      type: 'list',
      items: [
        '**Niente da attivare o disattivare.** Il percorso descritto da Shopify manda il cliente al tuo checkout, nel browser interno di ChatGPT; su desktop ChatGPT rimanda al tuo store in una nuova scheda. Metodi di pagamento, logiche di prezzo e personalizzazioni del checkout restano ([Shopify](https://www.shopify.com/news/agentic-commerce-momentum)).',
        '**La specifica di checkout è documentata ma non aperta a tutti.** La documentazione per sviluppatori di OpenAI descrive ancora il flusso di checkout e dice che l’onboarding dei feed prodotti in ChatGPT è per ora disponibile ai partner approvati ([OpenAI](https://developers.openai.com/commerce/guides/get-started)).',
        '**Più controllo significa un’app.** Chi vuole un’integrazione più profonda può costruire un’app dentro ChatGPT; CNBC riporta che Walmart ne ha lanciata una quel giorno, con collegamento account e pagamenti Walmart.',
      ],
    },
    { type: 'h2', text: 'Come funziona l’Agentic Commerce Protocol (ACP)?' },
    {
      type: 'paragraph',
      text: '**L’Agentic Commerce Protocol (ACP) è uno standard aperto, mantenuto da OpenAI e Stripe, che permette a un agente AI come ChatGPT di eseguire un checkout sui sistemi del merchant.** La documentazione di OpenAI lo divide in tre flussi ([Key concepts](https://developers.openai.com/commerce/guides/key-concepts)):',
    },
    {
      type: 'list',
      items: [
        '**Feed prodotti.** Un feed CSV o JSON con identificativi, prezzo, giacenza, media e opzioni di consegna, aggiornato con uno snapshot completo almeno ogni giorno.',
        '**Checkout.** ChatGPT chiama gli endpoint del merchant per creare e aggiornare una sessione di checkout. Il merchant convalida, calcola le tasse, valuta il rischio, addebita con il proprio processore e accetta o rifiuta l’ordine.',
        '**Pagamento.** OpenAI passa al processore del merchant un token monouso con importo massimo e scadenza. Lo Shared Payment Token di Stripe è stata la prima implementazione compatibile.',
      ],
    },
    {
      type: 'paragraph',
      text: '**Cos’è un pagamento ACP?** Un pagamento in cui l’agente non ha mai il numero della carta: passa un token monouso, che nella versione di Stripe vale per un merchant e un carrello specifici ([Stripe](https://stripe.com/newsroom/news/stripe-openai-instant-checkout)). Il merchant resta il merchant of record, e rimborsi e chargeback restano suoi ([OpenAI](https://developers.openai.com/commerce/guides/production)). La specifica è open source con licenza Apache 2.0 ([agenticcommerce.dev](https://www.agenticcommerce.dev)), in beta, e l’ultima versione rilasciata su [GitHub](https://github.com/agentic-commerce-protocol/agentic-commerce-protocol) è la 2026-04-17. Su Shopify non implementi nulla: al suo posto ci sono Catalog e il tuo checkout. Il confronto con l’Universal Commerce Protocol costruito da Google e Shopify è in [agentic commerce su Shopify](/it/blog/agentic-commerce-shopify).',
    },
    { type: 'h2', text: 'Come arrivano i prodotti di uno store Shopify su ChatGPT?' },
    {
      type: 'paragraph',
      text: 'I prodotti arrivano a ChatGPT tramite Shopify Catalog, una fonte strutturata che Shopify costruisce con i prodotti idonei degli store Shopify e condivide con i canali AI attraverso gli Agentic Storefronts.',
    },
    {
      type: 'paragraph',
      text: 'Secondo la [documentazione di Shopify Catalog](https://help.shopify.com/en/manual/promoting-marketing/seo/shopify-catalog), se store e prodotti rispettano i requisiti sono inclusi in automatico, con titoli, descrizioni, immagini, prezzi, opzioni e disponibilità. I canali AI si scelgono da Canali di vendita, poi Agentic, e il [Centro assistenza Shopify](https://help.shopify.com/en/manual/online-sales-channels/agentic-storefronts) dice che gli agentic storefront sono attivi di default per gli store idonei. Puoi impedire a un singolo agentic storefront di accedere ai tuoi prodotti tramite Shopify Catalog, ma la documentazione dice che non puoi uscire da Shopify Catalog stesso. Per usare gli agentic storefront devi accettare i Termini supplementari degli Agentic Storefronts, quindi leggili. A ottobre 2026 nessuna pagina ufficiale indica in quanto tempo una modifica all’accesso a Catalog diventa effettiva, quindi non darla per immediata.',
    },
    {
      type: 'paragraph',
      text: 'Shopify decide cosa entra, ChatGPT cosa mostrare: per Shopify ogni canale decide come ordinare, descrivere e mostrare i prodotti, e l’inclusione non garantisce né la comparsa né una posizione ([documentazione di Shopify Catalog](https://help.shopify.com/en/manual/promoting-marketing/seo/shopify-catalog)). Un posto non si compra: si può solo essere una fonte completa, disponibile e con un prezzo corretto.',
    },
    { type: 'h2', text: 'Il tuo store Shopify è idoneo al ChatGPT shopping?' },
    {
      type: 'paragraph',
      text: 'Uno store è idoneo se ha un piano Starter o superiore, non è protetto da password, è in regola con l’account e i suoi prodotti rispettano i requisiti di Catalog.',
    },
    {
      type: 'list',
      items: [
        'Ogni prodotto ha titolo, almeno un’immagine e un prezzo maggiore di zero.',
        'Deve essere pubblicato nello store online (o in Hydrogen o Headless) con un URL, e non essere Non in elenco né nascosto ai motori di ricerca.',
        'Gli store riservati ai clienti B2B non sono idonei.',
        'Alcune categorie sono escluse: alcol, tabacco e svapo, farmaci e prodotti medici, armi, contenuti per adulti, servizi, biglietti per eventi, prodotti senza categoria.',
      ],
    },
    {
      type: 'paragraph',
      text: 'La [pagina dei requisiti](https://help.shopify.com/en/manual/promoting-marketing/seo/shopify-catalog/requirements) aggiunge che Shopify valuta nel tempo lo stato dell’account. Per vedere il tuo stato apri Canali di vendita, poi Agentic, nel tuo admin Shopify e controlla cosa mostra Catalog per i tuoi prodotti. Per nascondere un prodotto usa lo stato Non in elenco o il metafield seo.hidden.',
    },
    { type: 'h2', text: 'Quali dati prodotto decidono come ti presenta ChatGPT?' },
    {
      type: 'paragraph',
      text: 'ChatGPT può ripetere solo ciò che dicono i tuoi dati, quindi il lavoro è rendere titoli, attributi, immagini, prezzo, disponibilità, recensioni e policy completi, coerenti e veri.',
    },
    {
      type: 'paragraph',
      text: 'Shopify chiede informazioni accurate e dettagliate e precisa che l’inclusione non garantisce la comparsa. Usa i punti qui sotto come checklist.',
    },
    {
      type: 'paragraph',
      text: '**Titoli e descrizioni.** Scrivi il titolo come una persona chiede il prodotto: tipo, marca, attributo che conta. Descrivi in frasi semplici cos’è, a chi serve, di cosa è fatto e come si usa.',
    },
    {
      type: 'paragraph',
      text: '**Attributi e varianti.** Shopify Catalog deduce le categorie, estrae gli attributi, unisce le varianti e ti lascia raggruppare per attributi standard e metafield. La [specifica del feed prodotti di OpenAI](https://developers.openai.com/commerce/specs/file-upload/products) mostra cosa si aspetta un sistema di acquisto AI: marca, GTIN, MPN, colore, taglia, materiale, genere, fascia d’età, dimensioni, peso, condizione. Compila quelli che servono e non inventare mai un GTIN.',
    },
    {
      type: 'paragraph',
      text: '**Immagini.** Una è il minimo. Aggiungi una foto principale pulita, poi contesto e dettaglio, con un testo alternativo che dice cosa si vede.',
    },
    {
      type: 'paragraph',
      text: '**Prezzo e disponibilità.** Entrambi possono pesare su quale venditore compare per primo (vedi sopra), quindi devono essere veri. Shopify tiene aggiornati prezzi e giacenze sugli agenti, ma solo partendo da ciò che c’è nel tuo admin. Se le giacenze arrivano da un gestionale, la sincronizzazione è la vera fonte.',
    },
    {
      type: 'paragraph',
      text: '**Recensioni e policy.** Il feed OpenAI indica numero di recensioni, valutazione e politica di reso tra i campi consigliati. Raccogli recensioni vere, mostrale nella scheda prodotto e pubblica spedizioni, resi, privacy e termini.',
    },
    {
      type: 'paragraph',
      text: '**Dati strutturati.** Tieni corretto il markup Product (prezzo, disponibilità, marca, identificativi, valutazioni) seguendo [Google Search Central](https://developers.google.com/search/docs/appearance/structured-data/product). Nessuna pagina OpenAI o Shopify che abbiamo letto dice che ChatGPT legge il tuo JSON-LD. Lo teniamo giusto perché lo legge Google, e pagina, catalogo e markup devono dire la stessa cosa. Sulle risposte AI in generale c’è la guida alla [GEO per Shopify](/it/blog/geo-seo-shopify).',
    },
    { type: 'h2', text: 'Quali crawler OpenAI deve consentire il tuo robots.txt?' },
    {
      type: 'paragraph',
      text: 'Per la visibilità negli acquisti, tieni consentito OAI-SearchBot, perché è il bot che fa comparire i siti nella ricerca di ChatGPT, e tratta GPTBot, che riguarda l’addestramento, come una decisione separata. Le regole del robots.txt, bot per bot, sono nella guida alla [GEO per Shopify](/it/blog/geo-seo-shopify), e la differenza tra GEO e SEO in [GEO vs SEO](/it/blog/geo-vs-seo).',
    },
    { type: 'h2', text: 'Come verifichi se i tuoi prodotti compaiono su ChatGPT?' },
    {
      type: 'paragraph',
      text: 'Non esiste un report ufficiale di posizionamento: guarda l’admin Shopify, ChatGPT stesso e le tue analytics.',
    },
    {
      type: 'list',
      items: [
        '**Admin Shopify.** Canali di vendita, Agentic: controlla cosa mostra Catalog per i tuoi prodotti. I report per canale mostrano vendite, ordini, sessioni e conversione, e gli ordini riportano il canale AI come attribuzione.',
        '**ChatGPT.** Fai le domande che fanno i tuoi clienti, in giorni diversi, e annota in un foglio cosa compare. I risultati variano con domanda e contesto, quindi una risposta è un campione, non una posizione.',
        '**Analytics.** Cerca i referral da chatgpt.com nei report di acquisizione e confrontali con gli ordini attribuiti in Shopify.',
      ],
    },
    { type: 'h2', text: 'Cosa chiedono i clienti a ChatGPT prima di pagare?' },
    {
      type: 'paragraph',
      text: '**ChatGPT può fare acquisti? In uno store Shopify, ChatGPT aiuta chi compra a scegliere e lo manda al tuo checkout per pagare, quindi sono le domande che si fanno prima di pagare a decidere se il cliente clicca.** Alcuni rivenditori vanno oltre con un’app dentro ChatGPT: quella di Walmart supporta collegamento account e pagamenti Walmart ([CNBC](https://www.cnbc.com/2026/03/24/openai-revamps-shopping-experience-in-chatgpt-after-instant-checkout.html)). Ogni domanda ha un posto nello store in cui la risposta deve stare:',
    },
    {
      type: 'list',
      items: [
        '**“Spedisce da me e quanto costa?”** Destinazioni e tariffe di spedizione, in una pagina vera e nella knowledge base.',
        '**“Posso rendere?”** Periodo di reso, spedizione di ritorno e metodo di rimborso, in una pagina vera e nella knowledge base.',
        '**“È disponibile nella mia taglia?”** Disponibilità a livello di variante, allineata al gestionale o al magazzino.',
        '**“Di cosa è fatto?”** Materiale, ingredienti e compatibilità come campi strutturati.',
        '**“Il prezzo è quello finale?”** Lo stesso prezzo in catalogo, pagina e checkout, con tasse e spedizione visibili prima del pagamento.',
        '**“Mi posso fidare di questo store?”** Recensioni vere, contatti e policy pubblicate.',
      ],
    },
    {
      type: 'paragraph',
      text: 'Fai queste sei domande come prompt una volta al mese (il test da 30 minuti è in [agentic commerce su Shopify](/it/blog/agentic-commerce-shopify)) e correggi alla fonte ciò che ChatGPT sbaglia.',
    },
    { type: 'h2', text: 'Cosa fare questa settimana per essere pronto al ChatGPT shopping?' },
    {
      type: 'list',
      items: [
        '**Controlla l’idoneità.** Canali di vendita, poi Agentic: la Fall ’26 Edition del 28 ottobre 2026 ha aggiunto una vista che mostra se il tuo store è idoneo a Catalog, con i link alle correzioni ([Shopify](https://www.shopify.com/news/fall-26-edition-merchant)).',
        '**Pubblica i fatti che chiedono gli agenti.** Nella knowledge base della stessa pagina rivedi periodo di reso, paesi di spedizione e servizi regalo. Li bozza Shopify, e nulla arriva a un agente senza la tua approvazione.',
        '**Sistema i dati prodotto** come nella sezione qui sopra: titoli, attributi, varianti, immagini, prezzo, disponibilità.',
        '**Percorri l’acquisto come un cliente.** Apri il tuo prodotto da un risultato di ChatGPT e arriva fino al passaggio del pagamento, da mobile e da desktop.',
        '**Tieni consentito OAI-SearchBot** nel robots.txt, e misura con l’attribuzione del canale AI negli ordini dell’admin e i referral da chatgpt.com.',
        '**Salta** un feed prodotti separato, un’integrazione di Instant Checkout e chiunque venda una posizione su ChatGPT.',
      ],
    },
    { type: 'h2', text: 'Cosa facciamo nello Sprint per preparare lo store agli agenti AI?' },
    {
      type: 'paragraph',
      text: 'Un assistente di acquisto può ripetere solo ciò che il tuo store gli consegna. Nello [Shopify Launch Sprint](/it/sprint-migrazione-shopify) il Custom AI System ricostruisce il tuo store perché consegni dati prodotto puliti, con prezzi e disponibilità coerenti con quanto dice la scheda prodotto. Il piano di preparazione più ampio è in [agentic commerce per Shopify](/it/blog/agentic-commerce-shopify).',
    },
    {
      type: 'paragraph',
      text: 'In concreto: lo store viene ricostruito 1:1 su Shopify in 14 giorni, con go-live tra il giorno 15 e il 30 e 90 giorni di supporto. Una giornata va a flusso d’acquisto e SEO tecnica: meta, schema, sitemap. Ogni prodotto, cliente e ordine viene riconciliato, così i dati che legge un agente coincidono con lo store. Sullo store di [Integratori DTC Nazzi](/it/casi-studio/integratori-nazzi-dtc-shopify), migrato da WooCommerce, abbiamo pubblicato una sitemap per l’agentic discovery. Il caso [Cumini](/it/casi-studio/cumini-luxury-fashion-ecommerce), da una piattaforma proprietaria legata al gestionale, parla di vendite e tracking. I casi mostrano cosa ha fatto la migrazione; il lavoro sul catalogo fa parte dello Sprint.',
    },
    {
      type: 'paragraph',
      text: 'Se il tuo store è già su Shopify, la strada è l’[AI Accelerator](/it/ai-accelerator): 30 giorni one-to-one in cui analizziamo con te vendite, acquisizione e processi e attiviamo le prime soluzioni AI che si ripagano, compresa la preparazione del catalogo. Se sei su un’altra piattaforma, lo [Shopify Launch Sprint](/it/sprint-migrazione-shopify) ti porta su Shopify e costruisce il catalogo per i canali AI fin dal primo giorno. Come migriamo: [guida alla migrazione a Shopify](/it/migrazione-shopify).',
    },
    { type: 'h2', text: 'La nostra opinione: costruisci i dati, non una strategia ChatGPT' },
    {
      type: 'paragraph',
      text: '**Tratta ChatGPT come un lettore del tuo catalogo.** L’admin Shopify mette ChatGPT, Copilot, Google AI Mode, l’app Gemini e Shop in una sola vista. Ognuno ordina e descrive a modo suo, ma il lavoro sui dati è lo stesso e aiuta anche su Google. Approfondimento: [agentic commerce su Shopify](/it/blog/agentic-commerce-shopify).',
    },
    {
      type: 'paragraph',
      text: '**Non pagare chi promette una posizione su ChatGPT.** Shopify dice che l’inclusione non è una garanzia e che ogni canale decide da sé l’ordine. Non esiste una leva da vendere.',
    },
    {
      type: 'paragraph',
      text: '**Il tuo checkout decide quanto vale il traffico.** Se il cliente arriva sul tuo store, conta il tasso di conversione. Per questo la [guida al CRO](/it/blog/cro-ecommerce) conta quanto il catalogo. Per l’AI dentro il tuo admin vedi [Shopify Magic e Sidekick](/it/blog/shopify-magic-sidekick) e [AI per eCommerce](/it/blog/ai-per-ecommerce).',
    },
    {
      type: 'paragraph',
      text: '**ChatGPT funziona anche al contrario.** I connettori Shopify ora ti fanno gestire prodotti, giacenze e ordini da [nove agenti, tra cui ChatGPT e Claude](https://www.shopify.com/news/fall-26-edition-merchant): un lavoro diverso dal vendere a chi compra, che trovi in [Claude e Claude Code su Shopify](/it/blog/claude-shopify), [Shopify MCP spiegato](/it/blog/shopify-mcp) e [Agenti AI per Shopify](/it/blog/agenti-ai-shopify).',
    },
    {
      type: 'paragraph',
      text: '**Non costruirti da solo un’integrazione con ChatGPT.** L’onboarding dei feed di OpenAI è limitato ai partner approvati e su Shopify il collegamento c’è già. Sistema i dati e aspetta.',
    },
    { type: 'h2', text: 'Cosa tenere d’occhio a ottobre 2026' },
    {
      type: 'paragraph',
      text: 'Questi punti possono cambiare dopo la pubblicazione di questa pagina:',
    },
    {
      type: 'list',
      items: [
        'Paesi: la guida di Shopify (giugno 2026) dice che il ChatGPT shopping è attivo per i merchant che vendono a clienti statunitensi. Controlla Canali di vendita, poi Agentic, nel tuo admin per vedere dove è attivo per il tuo store.',
        'Se il pagamento dentro la chat tornerà. A ottobre 2026 il Centro assistenza Shopify dice che gli acquisti da ChatGPT avvengono nel checkout del tuo store, e, secondo CNBC, OpenAI si concentra sulla scoperta. Nessuna pagina ufficiale annuncia un ritorno del pagamento in chat.',
        'Le commissioni. [L’annuncio di Shopify del 24 marzo 2026](https://www.shopify.com/news/agentic-commerce-momentum) dice nessuna commissione sulle transazioni oltre i costi standard di elaborazione; le notizie di stampa su una commissione per le vendite dal checkout di ChatGPT sono precedenti. Leggi i termini supplementari che accetti.',
        'La pubblicità: la [Spring ’26 Edition](https://www.shopify.com/news/spring-26-edition-merchant) di Shopify (17 giugno 2026) elenca ChatGPT tra i canali di Shop Campaigns e ChatGPT Ads in arrivo in Campaign Autopilot, ora in accesso anticipato.',
      ],
    },
    { type: 'h2', text: 'Domande frequenti' },
    { type: 'h3', text: 'Posso vendere su ChatGPT con Shopify?' },
    {
      type: 'paragraph',
      text: 'Sì, tramite Shopify Catalog, se store e prodotti sono idonei. A ottobre 2026 il cliente compra nel tuo checkout ([Centro assistenza Shopify](https://help.shopify.com/en/manual/online-sales-channels/agentic-storefronts)), è [attivo per i merchant che vendono a clienti statunitensi](https://www.shopify.com/blog/how-agentic-commerce-works) e comparire non è garantito.',
    },
    { type: 'h3', text: 'Cosa è successo a ChatGPT Instant Checkout?' },
    {
      type: 'paragraph',
      text: 'Il [24 marzo 2026](https://www.cnbc.com/2026/03/24/openai-revamps-shopping-experience-in-chatgpt-after-instant-checkout.html) OpenAI ha fatto un passo indietro sulla prima versione di Instant Checkout, la funzione per pagare dentro ChatGPT. Ora lascia ai merchant il proprio checkout e si concentra sulla scoperta dei prodotti. Per gli store Shopify, ChatGPT manda il cliente al tuo checkout in un browser interno ([Shopify](https://www.shopify.com/news/agentic-commerce-momentum)).',
    },
    { type: 'h3', text: 'Cos’è l’Agentic Commerce Protocol (ACP)?' },
    {
      type: 'paragraph',
      text: 'ACP è uno standard aperto, mantenuto da OpenAI e Stripe, che permette a un agente AI come ChatGPT di eseguire un checkout sui sistemi del merchant con un feed prodotti, una sessione di checkout e un token di pagamento delegato. Su Shopify non lo implementi tu, perché al suo posto ci sono Catalog e il tuo checkout.',
    },
    { type: 'h3', text: 'Vendere tramite ChatGPT costa di più su Shopify?' },
    {
      type: 'paragraph',
      text: 'Shopify dice che vendere agli utenti di ChatGPT tramite gli Agentic Storefronts ha [nessuna commissione sulle transazioni oltre i costi standard di elaborazione](https://www.shopify.com/news/agentic-commerce-momentum) (annuncio del 24 marzo 2026). Le notizie di stampa su una commissione per le vendite dal checkout di ChatGPT sono precedenti a quell’annuncio. Leggi i termini supplementari che accetti.',
    },
    { type: 'h3', text: 'Devo creare un feed prodotti per ChatGPT?' },
    {
      type: 'paragraph',
      text: 'Su Shopify no: ci pensa Shopify Catalog. Il feed diretto di OpenAI è limitato ai partner approvati.',
    },
    { type: 'h3', text: 'Devo bloccare GPTBot nel robots.txt?' },
    {
      type: 'paragraph',
      text: 'GPTBot riguarda l’addestramento. Puoi bloccarlo e consentire comunque OAI-SearchBot, che aiuta i siti a comparire nella ricerca di ChatGPT.',
    },
    { type: 'h3', text: 'Come capisco se ChatGPT mostra i miei prodotti?' },
    {
      type: 'paragraph',
      text: 'Usa l’admin Shopify, fai a ChatGPT le domande dei tuoi clienti e guarda i referral da chatgpt.com. Una risposta non è una classifica.',
    },
    { type: 'h3', text: 'ChatGPT può fare acquisti?' },
    {
      type: 'paragraph',
      text: 'In uno store Shopify, ChatGPT aiuta chi compra a scegliere e lo manda al tuo checkout per pagare. Alcuni rivenditori aggiungono un’app dentro ChatGPT con pagamenti propri.',
    },
    { type: 'h3', text: 'Quali garanzie include lo Shopify Launch Sprint?' },
    {
      type: 'paragraph',
      text: 'Quattro, per iscritto: store pronto al giorno 14 o rimborso della prima rata; traffico organico di nuovo alla baseline a 90 giorni o lavoriamo gratis; go-live senza store offline per colpa nostra, altrimenti paghiamo una rata; checkout che converte almeno quanto prima a 90 giorni, o lo ottimizziamo gratis. Nello Sprint prepariamo anche catalogo e dati strutturati perché lo store sia pronto per gli agenti AI.',
    },
    { type: 'h2', text: 'Una nota finale' },
    {
      type: 'paragraph',
      text: 'Aggiorniamo questa pagina quando OpenAI o Shopify cambiano ciò che dicono. Ultima verifica il 29 ottobre 2026.',
    },
    {
      type: 'paragraph',
      text: 'Lo Sprint ha un prezzo pubblico per fatturato: €5.800 sotto i €2M, €8.800 tra €2M e €20M, €12.800 oltre i €20M, IVA esclusa, in 4 rate.',
    },
    {
      type: 'paragraph',
      text: 'Lo [Shopify Launch Sprint](/it/sprint-migrazione-shopify) porta il tuo store su Shopify in 14 giorni con il nostro Custom AI System: calendario fisso, prezzo pubblico e 4 garanzie scritte.',
    },
  ],
}

export default article
