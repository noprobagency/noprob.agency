import type { Article } from '../index'

const article: Article = {
  slug: 'magento-to-shopify-migration',
  slugIt: 'migrazione-magento-shopify',
  title: 'Magento to Shopify Migration: Where Magento Does Not Map One to One',
  titleIt: 'Migrazione Magento Shopify: dove Magento non si traduce uno a uno',
  seoTitle: 'Magento to Shopify Migration: What Changes',
  seoTitleIt: 'Migrazione Magento Shopify: cosa cambia',
  seoDescription:
    'Migrate from Magento to Shopify: how product types, store views, B2B, extensions and .html URLs map across, Shopify vs Plus, and our method.',
  seoDescriptionIt:
    'Migrazione da Magento a Shopify: come passano tipi di prodotto, store view, B2B, estensioni e URL .html, Shopify o Plus, e l’esperienza dietro il nostro metodo.',
  excerpt:
    'A Magento to Shopify migration is decided where Magento does not map one to one: product types, store views, customer groups, extensions and URL rewrites. The Sprint method applied to it, backed by two real migrations.',
  excerptIt:
    'Una migrazione da Magento a Shopify si decide dove Magento non si traduce uno a uno: tipi di prodotto, store view, gruppi clienti, estensioni e URL rewrite. Il metodo dello Sprint applicato, con due migrazioni reali alle spalle.',
  ledeEn:
    'Moving from Magento 2 or Adobe Commerce to Shopify is mostly a translation job. Here is what translates, what does not, and the method we use.',
  ledeIt:
    'Passare da Magento 2 o Adobe Commerce a Shopify è soprattutto un lavoro di traduzione. Cosa si traduce, cosa no, e il metodo con cui lo facciamo.',
  image: '/images/blog/magento-to-shopify-migration-cover.png',
  imageAlt: 'Copertina astratta, sfondo menta, con una dissolvenza radiale di puntini più grandi ai bordi',
  imageAltEn: 'Abstract cover, mint background with a radial fade of dots growing toward the edges',
  articleType: 'BlogPosting',
  date: '2026-10-27',
  datePublishedIso: '2026-10-27T09:00:00+00:00',
  dateModifiedIso: '2026-10-27T09:00:00+00:00',
  wordCount: 2190,
  readingTimeMinutes: 9,
  articleSection: 'Shopify migration',
  keywordsEn:
    'migrate from magento to shopify, magento to shopify migration, migrating from magento to shopify, adobe commerce to shopify, magento to shopify plus, magento 2 to shopify',
  keywordsIt:
    'migrazione magento shopify, da magento a shopify, migrare da magento a shopify, adobe commerce a shopify, magento 2 shopify, da magento a shopify plus',
  faqEn: [
    {
      question: 'Will I lose my Google rankings migrating from Magento to Shopify?',
      answer:
        'Rankings usually move for a while after any migration, and in the Sprint organic traffic at 90 days is one of the 4 written guarantees. A complete 301 redirect map, built from Magento’s URL rewrite table plus a crawl and Search Console, decides how fast they settle.',
    },
    {
      question: 'Do I need Shopify Plus to leave Magento?',
      answer:
        'Not always. Plus is needed for specific things: the Combined Listings app, expansion stores and the deepest checkout changes. Choose the plan from your B2B, multi-store and checkout requirements, not from your revenue.',
    },
    {
      question: 'What happens to my Magento extensions on Shopify?',
      answer:
        'They do not transfer. Each extension and custom module ends in one of four ways: a native Shopify feature, an app, code written in the store, or retirement. Start from the job each one does, not from its name.',
    },
    {
      question: 'Can I move customers, passwords and order history from Magento?',
      answer:
        'Customers and historical orders can be imported with CSV files, migration apps or the Shopify APIs, products first, then customers, then orders. Passwords cannot be moved in a usable form, so customers get an activation email or a password reset after launch.',
    },
    {
      question: 'How do I replace Magento store views and websites on Shopify?',
      answer:
        'Language and currency store views usually become Shopify Markets on one store. Websites with separate catalogs, prices or legal entities may need separate stores, which is where Plus and its expansion stores come in.',
    },
    {
      question: 'How long does a Magento to Shopify migration take?',
      answer:
        'It depends on store views, custom modules, B2B rules, ERP connections and catalog data quality. With the Shopify Launch Sprint the store is ready on day 14 and go-live falls between day 15 and 30, followed by 90 days of support.',
    },
  ],
  faqIt: [
    {
      question: 'Perderò le posizioni su Google migrando da Magento a Shopify?',
      answer:
        'Il posizionamento di solito si muove per un periodo dopo qualunque migrazione; nello Sprint il traffico organico a 90 giorni è una delle 4 garanzie scritte. Una mappa completa dei redirect 301, costruita dalla tabella degli URL rewrite di Magento più una scansione e Search Console, decide quanto in fretta si assesta.',
    },
    {
      question: 'Serve Shopify Plus per lasciare Magento?',
      answer:
        'Non sempre. Plus serve per cose precise: l’app Combined Listings, gli expansion store e le modifiche più profonde al checkout. Scegli il piano dai requisiti su B2B, multi-store e checkout, non dal fatturato.',
    },
    {
      question: 'Che fine fanno le estensioni di Magento su Shopify?',
      answer:
        'Non si trasferiscono. Ogni estensione e ogni modulo personalizzato finisce in uno di quattro modi: una funzione nativa di Shopify, un’app, codice scritto nello store o dismissione. Si parte dal compito che svolge, non dal nome.',
    },
    {
      question: 'Posso spostare clienti, password e storico ordini da Magento?',
      answer:
        'Clienti e ordini storici si importano con CSV, app di migrazione o API di Shopify, prima i prodotti, poi i clienti, poi gli ordini. Le password non si possono spostare in forma utilizzabile, quindi dopo il lancio i clienti ricevono un’email di attivazione o di reimpostazione.',
    },
    {
      question: 'Come si sostituiscono store view e website di Magento su Shopify?',
      answer:
        'Le store view per lingua e valuta di solito diventano Shopify Markets su un solo store. I website con cataloghi, prezzi o società separati possono richiedere store distinti, ed è qui che entrano Plus e gli expansion store.',
    },
    {
      question: 'Quanto dura una migrazione da Magento a Shopify?',
      answer:
        'Dipende da store view, moduli personalizzati, regole B2B, collegamenti al gestionale e qualità dei dati di catalogo. Con lo Shopify Launch Sprint lo store è pronto al giorno 14 e il go-live cade tra il giorno 15 e il 30, seguito da 90 giorni di supporto.',
    },
  ],
  content: [
    {
      type: 'paragraph',
      text: 'To migrate from Magento to Shopify, you rebuild the storefront on Shopify, move products, customers and order history across, replace every custom module and extension with an app, a native feature or a little code, and give every old Magento URL a 301 redirect. The data moves easily. What does not map one to one is how Magento models products, stores, customer groups and URLs, and that is where the project is decided.',
    },
    {
      type: 'paragraph',
      text: 'We are noprob agency, and we run these moves with the [Shopify Launch Sprint](/shopify-migration-sprint). This article covers only what is specific to Magento 2 and Adobe Commerce. For the parts that are the same on every platform, read our [guide to migrating to Shopify](/shopify-migration), the [migration SEO checklist](/blog/shopify-migration-seo-checklist), [what a Shopify migration costs](/blog/shopify-migration-cost) and [how to choose a Shopify migration agency](/blog/choose-shopify-migration-agency).',
    },
    {
      type: 'paragraph',
      text: 'Our two real migrations are [Integratori DTC Nazzi](/use-cases/integratori-nazzi-dtc-shopify), from WooCommerce, and [Cumini](/use-cases/cumini-luxury-fashion-ecommerce), from a proprietary platform tied to the ERP. This article rests on those, on our process, and on Adobe’s and Shopify’s official documentation.',
    },
    { type: 'h2', text: 'Why do stores migrate from Magento to Shopify?' },
    {
      type: 'paragraph',
      text: 'Stores migrate from Magento to Shopify mostly because of what it takes to keep Magento running, not because of what it can do. Magento, in its Open Source or Adobe Commerce form, is flexible and powerful. The cost sits around it:',
    },
    {
      type: 'list',
      items: [
        '**Patches and upgrades.** Adobe publishes security patches regularly, recommends the latest one for your release, and gives every release line a support end date ([versions page](https://experienceleague.adobe.com/en/docs/commerce-operations/release/versions)). Someone has to apply, test and deploy each one.',
        '**The stack underneath.** PHP, the database, the search engine and caching are yours or your host’s to keep current. If your Magento runs on PHP, as Magento does, note that CERT-EU advisory 2026-018 (21 October 2026) describes two PHP flaws rated CVSS 9.2 that allow remote code execution without authentication, and says PHP 8.1 and earlier have no official fix. Whether it affects your store depends on the PHP version it runs on: check it, or ask your host.',
        '**Developer dependence.** Extensions conflict, modules are custom, and few people know your codebase. Every change becomes a ticket for the same one or two developers.',
      ],
    },
    {
      type: 'paragraph',
      text: 'Our view: the license is rarely the real number, the people are. A store that needs a developer on call just to stay safe is paying for maintenance instead of growth.',
    },
    { type: 'h2', text: 'When is staying on Magento the better call?' },
    {
      type: 'paragraph',
      text: 'Staying on Magento is the better call when the logic in your custom modules is your competitive edge and rebuilding it would cost more than the maintenance you would save: deep B2B pricing and approval rules tied to an ERP, or websites with genuinely different catalogs. Shopify can reach much of this with B2B, Markets, Shopify Functions and apps, but that is a rebuild of the logic, not a transfer.',
    },
    { type: 'h2', text: 'How do Magento product types map to Shopify?' },
    {
      type: 'paragraph',
      text: 'Magento has several product types and Shopify has one product with options and variants, so the mapping is done type by type. Adobe lists the types in its [product types documentation](https://experienceleague.adobe.com/en/docs/commerce-admin/inventory/basics/product-types).',
    },
    {
      type: 'list',
      items: [
        '**Simple products** become Shopify products. This is the easy part.',
        '**Configurable products** become one Shopify product with options (size, color) and one variant per combination. In Magento each combination is a separate simple product with its own SKU, so the import must fold the children into the parent. Shopify limits how many options a product can have ([how variants work](https://help.shopify.com/en/manual/products/variants)), so a configurable with more attributes needs a decision before import: split it or turn some attributes into separate products.',
        '**Grouped products**, where several standalone items sit on one page, have no direct equivalent. You choose between a collection, a bundle, or the [Combined Listings app](https://help.shopify.com/en/manual/products/combined-listings-app), which presents separate products as one listing and is available only on Plus and enterprise commerce plans.',
        '**Bundle products** (build-your-own sets) move to a bundles app: [Shopify’s help](https://help.shopify.com/en/manual/products/bundles) says bundles need a bundles app installed.',
      ],
    },
    {
      type: 'paragraph',
      text: 'Attribute sets are the other half: Magento attribute sets and custom attributes become [metafields and metaobjects](https://help.shopify.com/en/manual/custom-data). Our rule: keep the attributes a customer sees or filters by, and drop the rest. Navigation is decided here too: Shopify’s storefront filters are built from product data, so Magento’s layered navigation is rebuilt on the attributes you keep.',
    },
    { type: 'h2', text: 'What happens to store views, websites and customer groups?' },
    {
      type: 'paragraph',
      text: 'Magento’s website, store and store view hierarchy does not exist in Shopify as such, so you replace it with Markets, separate stores where needed, and B2B for customer groups. In Adobe Commerce, [websites contain stores and stores contain store views](https://experienceleague.adobe.com/en/docs/commerce-admin/start/setup/websites-stores-views), and settings, catalogs, prices and base currencies can differ by scope.',
    },
    {
      type: 'list',
      items: [
        '**Store views by language or currency** map to [Shopify Markets](https://help.shopify.com/en/manual/markets), where you set language, currency, pricing and domain per market on one store.',
        '**Websites with separate catalogs, prices or legal entities** are a decision: one store with markets, or separate Shopify stores. [Shopify Plus](https://help.shopify.com/en/manual/intro-to-shopify/pricing-plans/plans-features/shopify-plus-plan) supports expansion stores for this. Decide website by website.',
        '**Customer groups with tier prices** map to [Shopify B2B](https://help.shopify.com/en/manual/b2b), where customers are set up as companies with their own pricing, products, payment and shipping methods. Shopify says B2B is available on Basic, Grow, Advanced and Plus, so check which B2B features each plan includes against your price lists.',
      ],
    },
    { type: 'h2', text: 'What happens to Magento extensions and custom modules?' },
    {
      type: 'paragraph',
      text: 'Every Magento extension and custom module ends in one of four ways on Shopify: a native feature, an app, code written in the store, or retirement. None of them transfers.',
    },
    {
      type: 'list',
      items: [
        '**Native feature:** discounts, gift cards, basic SEO fields, blog and redirects are built in.',
        '**App:** reviews, loyalty, subscriptions, advanced filters. Export the app data first, because reviews and loyalty points are data, not settings.',
        '**Store code:** custom discount, shipping or payment logic can run as [Shopify Functions](https://shopify.dev/docs/apps/build/functions); anything storefront-specific is code in the store.',
        '**Retire:** modules installed for a campaign years ago and never removed.',
      ],
    },
    {
      type: 'paragraph',
      text: 'Start the inventory from your code, not from memory: list what sits in the app/code folder and in composer.json, and write each module’s job in one sentence. In the Sprint we write the store’s code from scratch for your store only: no dead code, no apps slowing it down, which is why we retire as much as possible before the build.',
    },
    { type: 'h2', text: 'How do Magento URLs become a redirect map?' },
    {
      type: 'paragraph',
      text: 'Magento URLs become a redirect map by exporting Magento’s own URL rewrite table, flattening the paths to Shopify’s fixed prefixes, and checking every row against the pages Google knows. Magento keeps the URLs it has generated in a url_rewrite table (request path, target path, redirect type and store), the same data you see in the admin under Marketing, SEO & Search, URL Rewrites ([Adobe’s URL rewrites documentation](https://experienceleague.adobe.com/en/docs/commerce-admin/marketing/seo/url-rewrites/url-rewrite)). Export it per store, then add a crawl, Search Console pages and backlinks, as in our [SEO checklist](/blog/shopify-migration-seo-checklist).',
    },
    { type: 'paragraph', text: 'These are the Magento patterns to expect, and where they usually land:' },
    {
      type: 'list',
      items: [
        '**Product URLs with a suffix.** The [suffix is configurable](https://experienceleague.adobe.com/en/docs/commerce-admin/catalog/catalog/catalog-urls) (html or htm, or none). /blue-shirt.html goes to /products/blue-shirt.',
        '**Product URLs with a category path.** Adobe warns that including category paths can make several URLs point at one page. /men/shirts/blue-shirt.html and /blue-shirt.html both go to the same /products/blue-shirt.',
        '**Category URLs.** /men/shirts.html goes to a collection. Shopify collections are flat, so nested categories are decided one by one: keep as a collection, merge, or retire.',
        '**Old redirects.** Rows in the table with a 301 type are chains waiting to happen. Point every one at the final Shopify URL.',
        '**System paths.** /catalog/product/view/id/34 and /catalog/category/view/id/12 get a row if Search Console shows impressions.',
        '**Store codes in the path** (/default/, a language code): one set of rows per store view.',
        '**Filter and sort URLs** (color, price, sort order, page number). Do not write a row per combination. Send the base path to its collection and let the rest go.',
      ],
    },
    {
      type: 'paragraph',
      text: 'Google’s [site move guide](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes) says to map each old URL to its matching new one, not everything to the homepage, and to keep the redirects generally at least a year. Shopify imports them from a CSV through [URL redirects](https://help.shopify.com/en/manual/online-store/menus-and-links/url-redirect).',
    },
    { type: 'h2', text: 'Shopify or Shopify Plus for a Magento store?' },
    {
      type: 'paragraph',
      text: 'For a Magento store, the choice between Shopify and Shopify Plus comes down to four requirements, not to revenue: B2B depth, several storefronts, checkout changes and combined listings.',
    },
    {
      type: 'list',
      items: [
        '**B2B:** available on Basic, Grow, Advanced and Plus. Compare the features with your price lists, not only the availability.',
        '**Several storefronts:** Markets covers language, currency, pricing and domain on one store. Separate catalogs or legal entities point to more stores, which means Plus expansion stores.',
        '**Checkout:** if your Magento checkout has custom rules, test how much Shopify Functions reproduce before you choose. Shopify says [advanced checkout customization](https://help.shopify.com/en/manual/checkout-settings/checkout-extensibility) is available only on Plus.',
        '**Grouped products as one listing:** the Combined Listings app is available only on Plus and enterprise commerce plans.',
      ],
    },
    {
      type: 'paragraph',
      text: 'Our opinion: write the requirement list before you ask for any quote, and check plan prices on Shopify’s site, because they change. The Sprint price is public, from €5,800 excl. VAT in 4 installments and set by your revenue tier: see the [Sprint page](/shopify-migration-sprint).',
    },
    { type: 'h2', text: 'How long does a Magento to Shopify migration take?' },
    {
      type: 'paragraph',
      text: 'A Magento to Shopify migration runs in six steps, and the Sprint puts them on a fixed calendar: store ready on day 14, go-live between day 15 and 30, then 90 days of support. Store views, custom modules, B2B rules, ERP connections and catalog data quality are what stretch it.',
    },
    {
      type: 'list',
      items: [
        'Inventory: modules, product types, attributes, store views, customer groups and the url_rewrite export.',
        'Decisions in writing: plan, markets, what is rebuilt, what is retired.',
        'Build the new store while Magento keeps selling, as at Nazzi, built in May and June while the old store kept selling.',
        'Import products first, then customers, then historical orders, as [Shopify’s migration guide](https://help.shopify.com/en/manual/migrating-to-shopify) recommends. Passwords cannot be moved in a usable form ([Shopify’s Magento guide](https://www.shopify.com/enterprise/blog/magento-to-shopify-migration)), so plan activation emails.',
        'Load the redirect CSV and place test orders.',
        'Cutover: import what changed since the first import, switch the domain, check tracking, crawl the old URL list again and watch Search Console.',
      ],
    },
    { type: 'h2', text: 'What experience do we bring to a Magento migration?' },
    {
      type: 'paragraph',
      text: 'Our experience is a process tested on two real migrations. Nazzi, a supplement brand, went from WooCommerce to Shopify on 19 July 2026 and, from go-live to 12 October, sold 105% more online than in the same days of 2025, with orders up 77%. For its URLs we checked 215 archived WooCommerce addresses and delivered the 301 redirect CSV.',
    },
    {
      type: 'paragraph',
      text: 'Cumini, a luxury multibrand boutique, went live on Shopify on 19 May 2025 after being on a proprietary platform tied to the ERP, and from June 2025 to May 2026 online sales were up 67.7% on the 12 months before. That platform resembles a heavily customized Magento store in one way: it was tied to an external vendor and to the ERP, with little room to change anything. We built a solution that connects Shopify to that ERP.',
    },
    {
      type: 'paragraph',
      text: 'What it means for you: we run the inventory first and tell you, before you sign, which modules map to native features and which are real rebuild work.',
    },
    { type: 'h2', text: 'Frequently asked questions' },
    { type: 'h3', text: 'Will I lose my Google rankings migrating from Magento to Shopify?' },
    {
      type: 'paragraph',
      text: 'Rankings usually move for a while after any migration, and in the Sprint organic traffic at 90 days is one of the 4 written guarantees. A complete 301 redirect map, built from Magento’s URL rewrite table plus a crawl and Search Console, decides how fast they settle.',
    },
    { type: 'h3', text: 'Do I need Shopify Plus to leave Magento?' },
    {
      type: 'paragraph',
      text: 'Not always. Plus is needed for specific things: the Combined Listings app, expansion stores and the deepest checkout changes. Choose the plan from your B2B, multi-store and checkout requirements, not from your revenue.',
    },
    { type: 'h3', text: 'What happens to my Magento extensions on Shopify?' },
    {
      type: 'paragraph',
      text: 'They do not transfer. Each extension and custom module ends in one of four ways: a native Shopify feature, an app, code written in the store, or retirement. Start from the job each one does, not from its name.',
    },
    { type: 'h3', text: 'Can I move customers, passwords and order history from Magento?' },
    {
      type: 'paragraph',
      text: 'Customers and historical orders can be imported with CSV files, migration apps or the Shopify APIs, products first, then customers, then orders. Passwords cannot be moved in a usable form, so customers get an activation email or a password reset after launch.',
    },
    { type: 'h3', text: 'How do I replace Magento store views and websites on Shopify?' },
    {
      type: 'paragraph',
      text: 'Language and currency store views usually become Shopify Markets on one store. Websites with separate catalogs, prices or legal entities may need separate stores, which is where Plus and its expansion stores come in.',
    },
    { type: 'h3', text: 'How long does a Magento to Shopify migration take?' },
    {
      type: 'paragraph',
      text: 'It depends on store views, custom modules, B2B rules, ERP connections and catalog data quality. With the Shopify Launch Sprint the store is ready on day 14 and go-live falls between day 15 and 30, followed by 90 days of support.',
    },
    { type: 'h2', text: 'A Final Note' },
    {
      type: 'paragraph',
      text: 'Moving from Magento is a translation job with two hard parts: the logic hidden in modules and the URLs Google already knows. Both are found by an inventory, not by a quote.',
    },
    {
      type: 'paragraph',
      text: 'The [Shopify Launch Sprint](/shopify-migration-sprint) moves your store to Shopify in 14 days with our Custom AI System: a fixed calendar, a public price and 4 written guarantees.',
    },
  ],
  contentIt: [
    {
      type: 'paragraph',
      text: 'Una migrazione Magento Shopify, cioè il passaggio da Magento a Shopify, ricostruisce il negozio su Shopify, sposta prodotti, clienti e storico ordini, sostituisce ogni modulo e ogni estensione con un’app, una funzione nativa o un po’ di codice, e dà a ogni vecchio URL un redirect 301. I dati si spostano facilmente. Non si traduce uno a uno il modo in cui Magento modella prodotti, store, gruppi clienti e URL, ed è lì che si decide il progetto.',
    },
    {
      type: 'paragraph',
      text: 'Siamo noprob agency e facciamo questi passaggi con lo [Shopify Launch Sprint](/it/sprint-migrazione-shopify). Questo articolo copre solo ciò che è specifico di Magento 2 e Adobe Commerce. Per le parti uguali su ogni piattaforma leggi la [guida alla migrazione a Shopify](/it/migrazione-shopify), la [checklist SEO](/it/blog/migrazione-shopify-seo-checklist), [quanto costa migrare](/it/blog/costo-migrazione-shopify) e [come scegliere un’agenzia](/it/blog/scegliere-agenzia-migrazione-shopify).',
    },
    {
      type: 'paragraph',
      text: 'Le nostre due migrazioni vere sono [Integratori DTC Nazzi](/it/casi-studio/integratori-nazzi-dtc-shopify), da WooCommerce, e [Cumini](/it/casi-studio/cumini-luxury-fashion-ecommerce), da una piattaforma proprietaria legata al gestionale. Questo articolo si regge su quelle, sul nostro processo e sulla documentazione ufficiale.',
    },
    { type: 'h2', text: 'Perché si passa da Magento a Shopify?' },
    {
      type: 'paragraph',
      text: 'Si passa da Magento a Shopify soprattutto per quello che serve a tenere in piedi Magento, non per quello che sa fare. Magento, Open Source o Adobe Commerce, è flessibile e potente. Il costo sta intorno:',
    },
    {
      type: 'list',
      items: [
        '**Patch e aggiornamenti.** Adobe pubblica patch di sicurezza con regolarità, consiglia l’ultima per la tua versione e dà a ogni linea di rilascio una data di fine supporto ([pagina delle versioni](https://experienceleague.adobe.com/en/docs/commerce-operations/release/versions)). Qualcuno deve applicarle, testarle e metterle online.',
        '**Lo stack sotto.** PHP, database, motore di ricerca e cache restano a tuo carico o del tuo hosting. Se il tuo Magento gira su PHP, come fa Magento, l’advisory 2026-018 del CERT-EU (21 ottobre 2026) descrive due falle di PHP con CVSS 9.2 che permettono l’esecuzione di codice da remoto senza autenticazione, e indica che PHP 8.1 e precedenti non hanno un fix ufficiale. Se ti riguarda dipende dalla versione di PHP del tuo store: controllala, o chiedi al tuo hosting.',
        '**Dipendenza dagli sviluppatori.** Le estensioni entrano in conflitto, i moduli sono su misura e pochi conoscono il codice. Ogni modifica è un ticket per le stesse persone.',
      ],
    },
    {
      type: 'paragraph',
      text: 'La nostra opinione: la licenza raramente è il numero vero, lo sono le persone. Uno store che ha bisogno di uno sviluppatore a disposizione solo per restare sicuro paga manutenzione, non crescita.',
    },
    { type: 'h2', text: 'Quando conviene restare su Magento?' },
    {
      type: 'paragraph',
      text: 'Conviene restare su Magento quando la logica dei moduli personalizzati è il tuo vantaggio competitivo e rifarla costerebbe più della manutenzione che risparmi: prezzi B2B profondi e regole legate al gestionale, o website con cataloghi davvero diversi. Shopify arriva a gran parte di questo con B2B, Markets, Functions e app, ma è una ricostruzione, non un trasferimento.',
    },
    { type: 'h2', text: 'Come si traducono i tipi di prodotto di Magento su Shopify?' },
    {
      type: 'paragraph',
      text: 'Magento ha più tipi di prodotto e Shopify ha un solo prodotto con opzioni e varianti, quindi la corrispondenza si fa tipo per tipo. Adobe elenca i tipi nella sua [documentazione sui tipi di prodotto](https://experienceleague.adobe.com/en/docs/commerce-admin/inventory/basics/product-types).',
    },
    {
      type: 'list',
      items: [
        '**Prodotti semplici** diventano prodotti Shopify. È la parte facile.',
        '**Prodotti configurabili** diventano un unico prodotto Shopify con opzioni (taglia, colore) e una variante per ogni combinazione. In Magento ogni combinazione è un prodotto semplice con il suo SKU, quindi l’import deve ripiegare i figli nel padre. Shopify limita le opzioni per prodotto ([come funzionano le varianti](https://help.shopify.com/it/manual/products/variants)), quindi un configurabile con più attributi richiede una decisione prima: dividerlo o trasformare alcuni attributi in prodotti separati.',
        '**Prodotti raggruppati**, dove più articoli autonomi stanno su una pagina, non hanno un equivalente diretto. Scegli tra una collezione, un bundle o l’[app Combined Listings](https://help.shopify.com/it/manual/products/combined-listings-app), che presenta prodotti separati come una scheda ed è disponibile solo su Plus e sui piani enterprise.',
        '**Prodotti bundle** (set componibili) passano a un’app per bundle: l’[aiuto di Shopify](https://help.shopify.com/it/manual/products/bundles) dice che serve un’app per bundle installata.',
      ],
    },
    {
      type: 'paragraph',
      text: 'Gli attribute set sono l’altra metà: attribute set e attributi personalizzati diventano [metafield e metaobject](https://help.shopify.com/it/manual/custom-data). La nostra regola: tieni gli attributi che il cliente vede o usa per filtrare, e butta il resto. Anche la navigazione si decide qui: i filtri della vetrina Shopify nascono dai dati di prodotto, quindi la navigazione a livelli di Magento si ricostruisce sugli attributi che tieni.',
    },
    { type: 'h2', text: 'Che fine fanno store view, website e gruppi clienti?' },
    {
      type: 'paragraph',
      text: 'In Shopify non esiste la gerarchia di website, store e store view di Magento: la si sostituisce con Markets, store separati dove serve e B2B per i gruppi clienti. In Adobe Commerce [i website contengono gli store e gli store contengono le store view](https://experienceleague.adobe.com/en/docs/commerce-admin/start/setup/websites-stores-views), e impostazioni, cataloghi e prezzi possono cambiare per ambito.',
    },
    {
      type: 'list',
      items: [
        '**Le store view per lingua o valuta** corrispondono a [Shopify Markets](https://help.shopify.com/it/manual/markets), dove imposti lingua, valuta, prezzi e dominio per mercato su un solo store.',
        '**I website con cataloghi, prezzi o società separati** sono una decisione: un solo store con più mercati, o store Shopify separati. [Shopify Plus](https://help.shopify.com/it/manual/intro-to-shopify/pricing-plans/plans-features/shopify-plus-plan) prevede gli expansion store per questo. Si decide website per website.',
        '**I gruppi clienti con prezzi a scaglioni** passano a [Shopify B2B](https://help.shopify.com/it/manual/b2b), dove i clienti sono aziende con prezzi, prodotti, pagamenti e spedizioni propri. Shopify dice che è disponibile su Basic, Grow, Advanced e Plus: confronta le funzioni di ogni piano con i tuoi listini.',
      ],
    },
    { type: 'h2', text: 'Che fine fanno estensioni e moduli personalizzati di Magento?' },
    {
      type: 'paragraph',
      text: 'Ogni estensione e ogni modulo personalizzato di Magento finisce in uno di quattro modi su Shopify: una funzione nativa, un’app, codice scritto nello store o dismissione. Nessuno si trasferisce.',
    },
    {
      type: 'list',
      items: [
        '**Funzione nativa:** sconti, gift card, campi SEO di base, blog e redirect sono già inclusi.',
        '**App:** recensioni, fedeltà, abbonamenti, filtri avanzati. Esporta prima i dati: recensioni e punti fedeltà non sono impostazioni.',
        '**Codice nello store:** una logica personalizzata di sconti, spedizioni o pagamenti può girare come [Shopify Functions](https://shopify.dev/docs/apps/build/functions); ciò che riguarda la vetrina è codice nello store.',
        '**Dismissione:** i moduli installati per una campagna di anni fa e mai tolti.',
      ],
    },
    {
      type: 'paragraph',
      text: 'Parti dal codice, non dalla memoria: elenca cosa c’è in app/code e in composer.json e scrivi in una frase il compito di ogni modulo. Nello Sprint scriviamo il codice da zero, solo per il tuo store: niente codice morto, niente app che lo rallentano. Per questo si dismette il più possibile prima.',
    },
    { type: 'h2', text: 'Come si passa dagli URL di Magento alla mappa dei redirect?' },
    {
      type: 'paragraph',
      text: 'Dagli URL di Magento si arriva alla mappa dei redirect esportando la tabella degli URL rewrite, appiattendo i percorsi sui prefissi fissi di Shopify e controllando ogni riga con le pagine che Google conosce. Magento conserva gli URL generati in una tabella url_rewrite (percorso richiesto, destinazione, tipo di redirect e store), gli stessi dati che vedi nell’admin sotto Marketing, SEO & Search, URL Rewrites ([documentazione Adobe](https://experienceleague.adobe.com/en/docs/commerce-admin/marketing/seo/url-rewrites/url-rewrite)). Esportala per store, poi aggiungi una scansione, Search Console e i backlink, come nella nostra [checklist SEO](/it/blog/migrazione-shopify-seo-checklist).',
    },
    { type: 'paragraph', text: 'Questi sono gli schemi di Magento da aspettarsi e dove di solito vanno a finire:' },
    {
      type: 'list',
      items: [
        '**URL prodotto con suffisso.** Il [suffisso è configurabile](https://experienceleague.adobe.com/en/docs/commerce-admin/catalog/catalog/catalog-urls) (html, htm o nessuno). /camicia-blu.html va a /products/camicia-blu.',
        '**URL prodotto con percorso di categoria.** Adobe avverte che includere i percorsi di categoria può far puntare più URL alla stessa pagina. /uomo/camicie/camicia-blu.html e /camicia-blu.html vanno entrambi allo stesso /products/camicia-blu.',
        '**URL di categoria.** /uomo/camicie.html va a una collezione. Le collezioni Shopify sono piatte, quindi le categorie annidate si decidono una per una: tenerle come collezione, unirle o dismetterle.',
        '**Vecchi redirect.** Le righe di tipo 301 sono catene in attesa di succedere: punta ognuna all’URL finale.',
        '**Percorsi di sistema.** /catalog/product/view/id/34 e /catalog/category/view/id/12 hanno una riga se Search Console mostra impressioni.',
        '**Codici store nel percorso** (/default/, un codice lingua): un insieme di righe per store view.',
        '**URL di filtro e ordinamento** (colore, prezzo, ordine, numero di pagina). Niente riga per combinazione: il percorso base va alla sua collezione.',
      ],
    },
    {
      type: 'paragraph',
      text: 'La [guida di Google ai cambi di sito](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes) dice di mappare ogni vecchio URL sul nuovo corrispondente, non tutto sulla home, e di tenere i redirect in genere almeno un anno. Importali da CSV negli [URL redirect](https://help.shopify.com/it/manual/online-store/menus-and-links/url-redirect).',
    },
    { type: 'h2', text: 'Shopify o Shopify Plus per uno store Magento?' },
    {
      type: 'paragraph',
      text: 'Per uno store Magento la scelta tra Shopify e Shopify Plus dipende da quattro requisiti, non dal fatturato: profondità del B2B, più vetrine, modifiche al checkout e schede combinate.',
    },
    {
      type: 'list',
      items: [
        '**B2B:** disponibile su Basic, Grow, Advanced e Plus. Confronta le funzioni con i tuoi listini, non solo la disponibilità.',
        '**Più vetrine:** Markets copre lingua, valuta, prezzi e dominio su un solo store. Cataloghi o società separati portano a più store, cioè gli expansion store di Plus.',
        '**Checkout:** se il checkout di Magento ha regole su misura, prova quanto riproducono Shopify Functions prima di scegliere. Shopify dice che la [personalizzazione avanzata del checkout](https://help.shopify.com/it/manual/checkout-settings/checkout-extensibility) è disponibile solo su Plus.',
        '**Prodotti raggruppati come una sola scheda:** l’app Combined Listings è disponibile solo su Plus e sui piani enterprise.',
      ],
    },
    {
      type: 'paragraph',
      text: 'La nostra opinione: scrivi i requisiti prima di chiedere un preventivo e controlla i prezzi dei piani sul sito di Shopify, perché cambiano. Il prezzo dello Sprint è pubblico, da €5.800 IVA esclusa in 4 rate, e dipende dal tuo scaglione di fatturato: vedi la [pagina dello Sprint](/it/sprint-migrazione-shopify).',
    },
    { type: 'h2', text: 'Quanto dura una migrazione da Magento a Shopify?' },
    {
      type: 'paragraph',
      text: 'Una migrazione da Magento a Shopify procede in sei passi, e lo Sprint li mette su un calendario fisso: store pronto al giorno 14, go-live tra il giorno 15 e il 30, poi 90 giorni di supporto. Lo allungano store view, moduli personalizzati, regole B2B, collegamenti al gestionale e qualità dei dati di catalogo.',
    },
    {
      type: 'list',
      items: [
        'Inventario: moduli, tipi di prodotto, attributi, store view, gruppi clienti ed esportazione di url_rewrite.',
        'Decisioni per iscritto: piano, mercati, cosa si ricostruisce, cosa si dismette.',
        'Costruire il nuovo store mentre Magento continua a vendere, come a Nazzi, costruito tra maggio e giugno mentre il vecchio store vendeva.',
        'Importare prima i prodotti, poi i clienti, poi gli ordini storici, come consiglia la [guida alla migrazione di Shopify](https://help.shopify.com/it/manual/migrating-to-shopify). Le password non si spostano in forma utilizzabile ([guida Shopify su Magento](https://www.shopify.com/enterprise/blog/magento-to-shopify-migration)): prevedi email di attivazione.',
        'Caricare il CSV dei redirect ed eseguire gli ordini di prova.',
        'Passaggio: importare ciò che è cambiato dal primo import, spostare il dominio, controllare il tracking, scansionare di nuovo l’elenco dei vecchi URL e seguire Search Console.',
      ],
    },
    { type: 'h2', text: 'Quale esperienza portiamo in una migrazione da Magento?' },
    {
      type: 'paragraph',
      text: 'La nostra esperienza è un processo collaudato su due migrazioni vere. Nazzi, un brand di integratori, è passato da WooCommerce a Shopify il 19 luglio 2026 e, dal go-live al 12 ottobre, ha venduto online il 105% in più degli stessi giorni del 2025, con gli ordini in crescita del 77%. Per i suoi URL abbiamo controllato 215 indirizzi WooCommerce archiviati e consegnato il CSV dei redirect 301.',
    },
    {
      type: 'paragraph',
      text: 'Cumini, una boutique multibrand di lusso, è andata online su Shopify il 19 maggio 2025 dopo una piattaforma proprietaria legata al gestionale, e da giugno 2025 a maggio 2026 le vendite online sono state il 67,7% in più dei 12 mesi prima. Quella piattaforma somiglia a uno store Magento molto personalizzato in un punto: era legata a un fornitore esterno e al gestionale, con poco margine per cambiare qualcosa. Abbiamo collegato Shopify a quel gestionale.',
    },
    {
      type: 'paragraph',
      text: 'Cosa significa per te: facciamo prima l’inventario e ti diciamo, prima che tu firmi, quali moduli corrispondono a funzioni native e quali sono vero lavoro di ricostruzione.',
    },
    { type: 'h2', text: 'Domande frequenti' },
    { type: 'h3', text: 'Perderò le posizioni su Google migrando da Magento a Shopify?' },
    {
      type: 'paragraph',
      text: 'Il posizionamento di solito si muove per un periodo dopo qualunque migrazione; nello Sprint il traffico organico a 90 giorni è una delle 4 garanzie scritte. Una mappa completa dei redirect 301, costruita dalla tabella degli URL rewrite di Magento più una scansione e Search Console, decide quanto in fretta si assesta.',
    },
    { type: 'h3', text: 'Serve Shopify Plus per lasciare Magento?' },
    {
      type: 'paragraph',
      text: 'Non sempre. Plus serve per cose precise: l’app Combined Listings, gli expansion store e le modifiche più profonde al checkout. Scegli il piano dai requisiti su B2B, multi-store e checkout, non dal fatturato.',
    },
    { type: 'h3', text: 'Che fine fanno le estensioni di Magento su Shopify?' },
    {
      type: 'paragraph',
      text: 'Non si trasferiscono. Ogni estensione e ogni modulo personalizzato finisce in uno di quattro modi: una funzione nativa di Shopify, un’app, codice scritto nello store o dismissione. Si parte dal compito che svolge, non dal nome.',
    },
    { type: 'h3', text: 'Posso spostare clienti, password e storico ordini da Magento?' },
    {
      type: 'paragraph',
      text: 'Clienti e ordini storici si importano con CSV, app di migrazione o API di Shopify, prima i prodotti, poi i clienti, poi gli ordini. Le password non si possono spostare in forma utilizzabile, quindi dopo il lancio i clienti ricevono un’email di attivazione o di reimpostazione.',
    },
    { type: 'h3', text: 'Come si sostituiscono store view e website di Magento su Shopify?' },
    {
      type: 'paragraph',
      text: 'Le store view per lingua e valuta di solito diventano Shopify Markets su un solo store. I website con cataloghi, prezzi o società separati possono richiedere store distinti, ed è qui che entrano Plus e gli expansion store.',
    },
    { type: 'h3', text: 'Quanto dura una migrazione da Magento a Shopify?' },
    {
      type: 'paragraph',
      text: 'Dipende da store view, moduli personalizzati, regole B2B, collegamenti al gestionale e qualità dei dati di catalogo. Con lo Shopify Launch Sprint lo store è pronto al giorno 14 e il go-live cade tra il giorno 15 e il 30, seguito da 90 giorni di supporto.',
    },
    { type: 'h2', text: 'Una nota finale' },
    {
      type: 'paragraph',
      text: 'Lasciare Magento è un lavoro di traduzione con due parti difficili: la logica nei moduli e gli URL che Google conosce già. Si trovano con un inventario, non con un preventivo.',
    },
    {
      type: 'paragraph',
      text: 'Lo [Shopify Launch Sprint](/it/sprint-migrazione-shopify) porta il tuo store su Shopify in 14 giorni con il nostro Custom AI System: calendario fisso, prezzo pubblico e 4 garanzie scritte.',
    },
  ],
}

export default article
