import type { Article } from '../index'

const article: Article = {
  slug: 'prestashop-to-shopify-migration',
  slugIt: 'migrazione-prestashop-shopify',
  title: 'Migrate PrestaShop to Shopify: What Maps, What Does Not, and What to Redirect',
  titleIt: 'Migrazione PrestaShop Shopify: cosa si mappa, cosa no e come fare i redirect',
  seoTitle: 'Migrate PrestaShop to Shopify: Practical Guide',
  seoTitleIt: 'Migrazione PrestaShop Shopify: guida pratica',
  seoDescription:
    'PrestaShop to Shopify: how combinations, groups and modules map, the redirect map for old URLs, and EU invoicing. We have no PrestaShop case and say so.',
  seoDescriptionIt:
    'Da PrestaShop a Shopify: come si mappano combinazioni, gruppi e moduli, i redirect degli URL e le fatture UE. Non abbiamo un caso PrestaShop e lo diciamo.',
  excerpt:
    'What changes when you migrate PrestaShop to Shopify: combinations, groups, multistore and modules, the redirect map for PrestaShop URLs, and EU payments and invoicing. We have no PrestaShop case and say so.',
  excerptIt:
    'Cosa cambia nella migrazione da PrestaShop a Shopify: combinazioni, gruppi, multistore e moduli, la mappa dei redirect degli URL PrestaShop, pagamenti e fatture UE. Non abbiamo un caso PrestaShop e lo diciamo.',
  ledeEn:
    'PrestaShop does a lot natively or through modules, and Shopify does it differently. This is the map of what carries over, what needs a decision, and which old URLs need a redirect. We have not migrated a PrestaShop store, and we say so.',
  ledeIt:
    'PrestaShop fa molte cose nativamente o con i moduli, e Shopify le fa in modo diverso. Questa è la mappa di cosa passa, cosa richiede una decisione e quali vecchi URL vanno rediretti. Non abbiamo migrato uno store PrestaShop e lo diciamo.',
  image: '/images/blog/prestashop-to-shopify-migration-cover.png',
  imageAlt: 'Copertina astratta, sfondo grigio chiaro, con fasce diagonali di puntini',
  imageAltEn: 'Abstract cover, light grey background with diagonal bands of dots',
  articleType: 'BlogPosting',
  date: '2026-10-27',
  datePublishedIso: '2026-10-27T09:00:00+00:00',
  dateModifiedIso: '2026-10-27T09:00:00+00:00',
  wordCount: 2000,
  articleSection: 'Shopify migration',
  readingTimeMinutes: 10,
  keywordsEn:
    'prestashop to shopify, migrate prestashop to shopify, shopify vs prestashop, prestashop to shopify migration, prestashop redirect map, prestashop combinations shopify variants',
  keywordsIt:
    'migrazione prestashop shopify, da prestashop a shopify, prestashop o shopify, passare da prestashop a shopify, redirect prestashop shopify, combinazioni prestashop varianti shopify',
  faqEn: [
    {
      question: 'Can I import PrestaShop products into Shopify?',
      answer:
        'Yes, through a CSV file or a migration app. Shopify lists CSV import, App Store apps, a Partner or the API as the options. Check combinations first: Shopify has limits on options and variants per product (see its documentation), and your export may give a combination’s price as a difference from the base price instead of the final one, so verify prices on a sample.',
    },
    {
      question: 'Do customers keep their passwords when I move from PrestaShop to Shopify?',
      answer:
        'No. Shopify imports customer records and addresses but not passwords, so everyone starts with a fresh sign-in. Send a short email before launch explaining that they will set a new password or use a one-time code.',
    },
    {
      question: 'Will I lose my Google rankings migrating from PrestaShop to Shopify?',
      answer:
        'Not if every old URL that has a real successor gets a 301 redirect, and the content and titles carry over. Rankings can still move for a few weeks and nobody can promise a result. The PrestaShop IDs in your old URLs make the redirect map reliable.',
    },
    {
      question: 'Do my PrestaShop modules work on Shopify?',
      answer:
        'No. Modules are PHP code for PrestaShop. Each one is replaced by a native Shopify feature, a Shopify app or custom code, or retired. Audit the modules before you migrate, because the list is the real scope of the project.',
    },
    {
      question: 'What happens to my PrestaShop multistore?',
      answer:
        'It depends on what each shop is. Shops that are really countries or languages usually become markets in one Shopify store. Shops that are separate brands with separate catalogs usually become separate Shopify stores.',
    },
    {
      question: 'How much does a PrestaShop to Shopify migration cost?',
      answer:
        'The Shopify Launch Sprint has a public price by annual revenue: €5,800, €8,800 or €12,800, VAT excluded, in 4 installments. Our guide on migration cost explains what drives a quote up or down.',
    },
  ],
  faqIt: [
    {
      question: 'Posso importare i prodotti di PrestaShop su Shopify?',
      answer:
        'Sì, con un file CSV o con un’app di migrazione. Shopify indica come opzioni l’import CSV, le app dell’App Store, un Partner o l’API. Controlla prima le combinazioni: Shopify ha dei limiti su opzioni e varianti per prodotto (vedi la sua documentazione) e il tuo export può riportare il prezzo di una combinazione come differenza dal prezzo base invece del prezzo finale, quindi verifica i prezzi su un campione.',
    },
    {
      question: 'I clienti mantengono la password passando da PrestaShop a Shopify?',
      answer:
        'No. Shopify importa anagrafiche e indirizzi ma non le password, quindi tutti ripartono con un accesso nuovo. Manda una breve email prima del lancio per spiegare che dovranno scegliere una nuova password o usare un codice monouso.',
    },
    {
      question: 'Perderò il posizionamento passando da PrestaShop a Shopify?',
      answer:
        'Non se ogni vecchio URL che ha un successore reale riceve un redirect 301 e contenuti e titoli passano con lui. Le posizioni possono comunque muoversi per qualche settimana e nessuno può promettere un risultato. Gli ID di PrestaShop negli URL rendono affidabile la mappa dei redirect.',
    },
    {
      question: 'I moduli di PrestaShop funzionano su Shopify?',
      answer:
        'No. I moduli sono codice PHP per PrestaShop. Ognuno viene sostituito da una funzione nativa di Shopify, da un’app, da codice su misura oppure eliminato. Fai l’audit dei moduli prima di migrare, perché la lista è il vero perimetro del progetto.',
    },
    {
      question: 'Che fine fa il multistore di PrestaShop?',
      answer:
        'Dipende da cosa è ogni shop. Gli shop che in realtà sono paesi o lingue diventano di solito mercati dentro un solo store Shopify. Gli shop che sono brand separati con cataloghi separati diventano di solito store Shopify separati.',
    },
    {
      question: 'Quanto costa migrare da PrestaShop a Shopify?',
      answer:
        'Lo Shopify Launch Sprint ha un prezzo pubblico per fatturato annuo: €5.800, €8.800 o €12.800, IVA esclusa, in 4 rate. La nostra guida sul costo della migrazione spiega cosa fa salire o scendere un preventivo.',
    },
  ],
  content: [
    {
      type: 'paragraph',
      text: '**Migrating PrestaShop to Shopify means moving a catalog built on combinations, customer groups and modules into a platform with variants, collections and apps, and giving every old PrestaShop URL a 301 redirect to its new address.** The product data is the easy part. The decisions sit in the things PrestaShop does natively or through modules that Shopify does differently.',
    },
    {
      type: 'paragraph',
      text: 'We are noprob agency and we run these moves with the [Shopify Launch Sprint](/shopify-migration-sprint). This guide covers only what is specific to PrestaShop. For what is the same on every platform, read our [guide to migrating to Shopify](/shopify-migration). For rankings, use the [migration SEO checklist](/blog/shopify-migration-seo-checklist). For the budget, see [how much a Shopify migration costs](/blog/shopify-migration-cost). If you are coming from a different PHP platform, the [WooCommerce to Shopify guide](/blog/woocommerce-to-shopify-migration) covers that one.',
    },
    { type: 'h2', text: 'Shopify vs PrestaShop: why do merchants switch?' },
    {
      type: 'paragraph',
      text: '**Most merchants leave PrestaShop because of the running cost around the software, not the software itself.** PrestaShop is open source and its core is free. What you pay for is everything that turns it into a shop: modules, a developer who knows them, and hosting that keeps up. Four things come up again and again.',
    },
    {
      type: 'list',
      items: [
        '**The module stack.** Each paid module is a licence, an update cycle and a possible clash with another module that changes the same template or class. The stack grows one useful feature at a time and nobody owns the whole list.',
        '**Upgrades between major versions.** Moving from one major version to the next (1.7 to 8, 8 to 9) is a project: theme, modules and custom code must all be compatible, and the one that is not blocks the rest.',
        '**Hosting and PHP.** The server and its PHP version are yours to keep current, and each PrestaShop release supports only some PHP versions (see the [system requirements](https://devdocs.prestashop-project.org/9/basics/installation/system-requirements/)). If your store runs on PHP, check yours: CERT-EU’s [advisory 2026-018](https://cert.europa.eu/publications/security-advisories/2026-018/) describes two flaws rated CVSS 9.2 that allow remote code execution without authentication. Fixes exist in PHP 8.5.12, 8.4.27, 8.3.36 and 8.2.35, and PHP 8.1 and earlier have no official fix. On Shopify there is no PHP server for you to patch.',
        '**Developer dependency.** Changing a template, a checkout step or a price rule often means asking the one person who understands the overrides.',
      ],
    },
    {
      type: 'paragraph',
      text: 'PrestaShop is not a bad platform. Native multistore, customer groups and per-country behaviour are real strengths, and below we say where Shopify needs more work to match them. If your store is stable, on a supported version, with a developer you trust and few modules, there is no urgency. The case for moving is when the module bill and the fear of the next upgrade are the main things you manage.',
    },
    { type: 'h2', text: 'Do we have a PrestaShop case study?' },
    {
      type: 'paragraph',
      text: '**No. We have not migrated a PrestaShop store, and we will not present another platform’s result as if it were one.** Our two real Shopify migrations are [Integratori DTC Nazzi](/use-cases/integratori-nazzi-dtc-shopify), from WooCommerce, and [Cumini](/use-cases/cumini-luxury-fashion-ecommerce), from a proprietary platform tied to the ERP. Nazzi is the closest profile: PHP, self-hosted, a stack of plugins, and a history of orders and URLs to carry across. That is a similarity, not proof that PrestaShop behaves the same.',
    },
    {
      type: 'paragraph',
      text: 'What we bring is a process that is the same on every platform: inventory, data mapping, redirect map, test orders and a go-live date on the calendar. Everything PrestaShop-specific below you can check against PrestaShop’s own documentation, which we link as we go.',
    },
    { type: 'h2', text: 'Which PrestaShop concepts have no one-to-one match in Shopify?' },
    {
      type: 'paragraph',
      text: '**Six: combinations, attributes and features, the category tree, customer groups with specific prices, multistore, and carriers.** Each needs a decision before any CSV is imported, because the answer changes the data you export.',
    },
    { type: 'h3', text: 'Combinations become variants, with lower limits' },
    {
      type: 'paragraph',
      text: 'A PrestaShop combination is a version of a product built from attributes such as size, colour or capacity. Shopify’s equivalent is a variant, and the ceiling is lower: Shopify has limits on options and variants per product, which you should read in [its variants documentation](https://help.shopify.com/en/manual/products/variants) before planning. A product with many attribute groups may not fit as it is. For each one decide: split it into separate products, drop an attribute, or collect it as a line item property through an app.',
    },
    {
      type: 'paragraph',
      text: 'One trap is the price. A PrestaShop combination can carry its price as a difference from the product’s base price, so an export may show that difference instead of the final price. Check in your export which one you have, rebuild the final prices if needed and verify a sample before importing the full catalog.',
    },
    { type: 'h3', text: 'Attributes and features: one builds variants, the other describes' },
    {
      type: 'paragraph',
      text: 'PrestaShop’s own documentation draws the line: [attributes](https://docs.prestashop-project.org/v.8-documentation/user-guide/selling/managing-catalog/managing-product-attributes) create combinations, while features appear as an information table. In Shopify, the attributes that change price or stock become options. Features such as material, composition or weight become metafields, which the theme can display and filters can use ([Shopify metafields](https://help.shopify.com/en/manual/products/metafields)).',
    },
    { type: 'h3', text: 'The category tree becomes collections plus menus' },
    {
      type: 'paragraph',
      text: 'PrestaShop categories are a tree, and a product’s default category shapes its URL. Shopify collections are flat. Keep the tree in the navigation menu, build each collection from product tags or conditions, and use the default category mainly to decide where the old URL redirects.',
    },
    { type: 'h3', text: 'Customer groups and specific prices raise the B2B question' },
    {
      type: 'paragraph',
      text: 'PrestaShop [customer groups](https://docs.prestashop-project.org/v.8-documentation/user-guide/configuring-shop/shop-parameters/customer-settings/groups) carry a percentage discount, a tax-included or tax-excluded price display and the option to hide prices, and products can add specific prices on top. Shopify has no identical object. If your groups are loyalty tiers, discounts and customer tags do the job. If they are wholesale buyers with their own prices and tax display, look at [Shopify’s B2B features](https://help.shopify.com/en/manual/b2b) and check which plans include them. Before building anything, count the groups and specific prices you really use: stores often carry rules nobody remembers.',
    },
    { type: 'h3', text: 'Multistore is where Shopify asks for more work' },
    {
      type: 'paragraph',
      text: 'PrestaShop’s [multistore](https://docs.prestashop-project.org/v.8-documentation/user-guide/configuring-shop/advanced-parameters/multistore) runs several shops from one back office. In Shopify, shops that are really countries or languages usually become [markets](https://help.shopify.com/en/manual/international/markets) inside one store, with their own currencies, languages and domains. Shops that are separate brands with separate catalogs become separate Shopify stores. Decide which is which before planning the work, because it changes both the scope and the redirect map.',
    },
    { type: 'h3', text: 'Carriers and shipping rules become shipping profiles' },
    {
      type: 'paragraph',
      text: 'PrestaShop carriers, zones and price or weight ranges have to be rebuilt in [Shopify’s shipping settings](https://help.shopify.com/en/manual/shipping), which work with shipping profiles and rates per zone. In PrestaShop these rules are spread across carrier, zone and range pages. Write them down in one table first, then rebuild them and test each with an order.',
    },
    { type: 'h2', text: 'How do you audit PrestaShop modules before migrating?' },
    {
      type: 'paragraph',
      text: '**Sort every installed module into one of four buckets: native in Shopify, a Shopify app, custom code, or retire.** Do it before touching data, because the module list is the real scope of the project.',
    },
    {
      type: 'list',
      items: [
        '**Native:** discounts, gift cards, abandoned checkout emails, SEO fields, redirects and the blog already exist in Shopify.',
        '**App:** reviews, subscriptions, advanced filters, wishlists. You pay a monthly fee, so compare it with the licence you pay today.',
        '**Custom code:** the ERP or warehouse sync and the rules that exist only in your store. With our Custom AI System, code is written from scratch for your store only, without piling apps on top.',
        '**Retire:** modules installed for a campaign years ago, three modules doing the same job, a module that exists only to fix another module. In plugin-based stores this bucket is usually bigger than the owner expects.',
      ],
    },
    {
      type: 'paragraph',
      text: 'A migration is the cheapest moment to delete modules. Do not rebuild one you do not remember installing.',
    },
    { type: 'h2', text: 'How do you build the redirect map from PrestaShop URLs?' },
    {
      type: 'paragraph',
      text: '**Build it from the PrestaShop database IDs, not from a crawl alone: friendly URLs carry the ID of each product and category, which gives you a reliable key to join old addresses to new Shopify handles.** The default product route documented by PrestaShop is {category:/}{id}-{rewrite}{-:ean13}.html, which produces addresses such as /summer-dresses/7-printed-chiffon-dress.html. The schema is editable under Shop Parameters, Traffic and SEO ([SEO and URLs](https://docs.prestashop-project.org/v.8-documentation/user-guide/configuring-shop/shop-parameters/traffic/seo-and-urls)), so read yours there before assuming anything. That page documents only the product route: the other patterns below are what we would expect, not something we have verified on a PrestaShop store.',
    },
    {
      type: 'list',
      items: [
        '**Products:** /category/ID-name.html. Export the catalog with ID, URL rewrite and default category, rebuild each old path, and map it to /products/new-handle.',
        '**Categories:** commonly /ID-name. Map to /collections/handle.',
        '**CMS pages:** commonly /content/ID-name. Map to /pages/handle.',
        '**Brands and suppliers:** commonly /brand/ID-name and /supplier/ID-name. Map to a vendor collection if you keep brand pages, otherwise to the nearest collection.',
        '**Language prefixes:** /it/, /en/ and so on. Every language needs its own rows.',
        '**Combination URLs:** depending on the schema they may carry the combination ID. They all point to one Shopify product, so several rows share one target.',
        '**Filter and sort parameters** from faceted navigation: do not map them one by one. Redirect the base category and let Google drop the rest.',
      ],
    },
    {
      type: 'paragraph',
      text: 'Apart from the product route, the patterns above are unverified expectations, and your schema decides: check each one in your back office and against the real URLs in Search Console before you write the file. Shopify imports redirects from a CSV in the admin, one row per old URL. It redirects only from URLs that are broken on the new store, cannot redirect some reserved paths, and limits how many redirects a store can hold, so check the limit for your plan ([URL redirects](https://help.shopify.com/en/manual/online-store/menus-and-links/url-redirect)).',
    },
    {
      type: 'paragraph',
      text: 'Not every old URL deserves a redirect. On Nazzi’s archived WooCommerce addresses we checked 215 URLs one by one and delivered the CSV of 301 redirects. The logic is the same here: redirect what has a real successor, and let pages with no equivalent disappear. For the method, see [Google’s guidance on site moves with URL changes](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes) and our [SEO checklist](/blog/shopify-migration-seo-checklist).',
    },
    { type: 'h2', text: 'How do you set up payments, invoicing and taxes for an EU store?' },
    {
      type: 'paragraph',
      text: '**Set them up in this order: taxes, payment provider, shipping rates, then invoicing, and test each with a real order before the domain switches.** The details depend on your country, so we stay general and point to the official pages.',
    },
    {
      type: 'list',
      items: [
        '**Taxes:** Shopify offers [Shopify Tax in the EU and UK](https://help.shopify.com/en/manual/taxes/eu-vat) or manual rates. How VAT and the One-Stop Shop scheme apply to you is a question for your accountant: the platform only applies the rates you choose.',
        '**Payments:** check whether [Shopify Payments](https://help.shopify.com/en/manual/payments/shopify-payments) is available in your country and which local methods your customers use. If you keep your current provider, connect it in Shopify and run a test order.',
        '**Invoicing:** PrestaShop produces numbered PDF invoices from the back office ([Invoices](https://docs.prestashop-project.org/v.8-documentation/user-guide/selling/managing-orders/invoices)). Do not assume Shopify’s default order documents satisfy your country’s invoice rules. Settle it with your accountant and pick the app or accounting integration before go-live.',
        '**Invoice history:** export past PDF invoices before the old server is switched off. Importing orders does not move your invoice archive.',
      ],
    },
    { type: 'h2', text: 'How long does a PrestaShop to Shopify migration take?' },
    {
      type: 'paragraph',
      text: '**With the Shopify Launch Sprint the store is ready on day 14 and go live falls between day 15 and 30, the same calendar we use on every platform.** With PrestaShop the first days go to the module audit, the combination decisions, the group and carrier rules and the redirect map. The earlier those are settled, the less the calendar moves. One honest limit: the 14 days are the Sprint’s calendar, not a timing measured on a PrestaShop project, because we have not done one.',
    },
    { type: 'h2', text: 'Frequently asked questions' },
    { type: 'h3', text: 'Can I import PrestaShop products into Shopify?' },
    {
      type: 'paragraph',
      text: 'Yes, through a CSV file or a migration app. [Shopify’s migration page](https://help.shopify.com/en/manual/migrating-to-shopify) lists the options and recommends importing products first, then customers, then orders. PrestaShop’s [import documentation](https://docs.prestashop-project.org/v.8-documentation/user-guide/configuring-shop/advanced-parameters/import) shows the file structure it uses for products and combinations.',
    },
    { type: 'h3', text: 'Do my PrestaShop modules work on Shopify?' },
    {
      type: 'paragraph',
      text: 'No. Modules are PHP code for PrestaShop. Each one becomes a native feature, an app, custom code or nothing at all.',
    },
    { type: 'h2', text: 'A final note' },
    {
      type: 'paragraph',
      text: 'Most of the risk in leaving PrestaShop sits in what nobody wrote down: a module installed years ago, a customer group with its own prices, a carrier rule, an old URL with links. Write that list before you plan anything else, and the rest of the project gets much more predictable.',
    },
    {
      type: 'paragraph',
      text: 'The [Shopify Launch Sprint](/shopify-migration-sprint) moves your store to Shopify in 14 days with our Custom AI System: a fixed calendar, a public price and 4 written guarantees.',
    },
  ],
  contentIt: [
    {
      type: 'paragraph',
      text: '**La migrazione da PrestaShop a Shopify sposta un catalogo costruito su combinazioni, gruppi clienti e moduli in una piattaforma con varianti, collezioni e app, e dà a ogni vecchio URL di PrestaShop un redirect 301 verso il nuovo indirizzo.** I dati dei prodotti sono la parte facile. Le decisioni stanno in ciò che PrestaShop fa nativamente o con i moduli e che Shopify fa in un altro modo.',
    },
    {
      type: 'paragraph',
      text: 'Siamo noprob agency e facciamo questi passaggi con lo [Shopify Launch Sprint](/it/sprint-migrazione-shopify). Questa guida copre solo ciò che è specifico di PrestaShop. Per ciò che è uguale su ogni piattaforma leggi la nostra [guida alla migrazione a Shopify](/it/migrazione-shopify). Per il posizionamento usa la [checklist SEO della migrazione](/it/blog/migrazione-shopify-seo-checklist). Per il budget, [quanto costa migrare a Shopify](/it/blog/costo-migrazione-shopify). Se arrivi da un’altra piattaforma PHP, la [guida da WooCommerce a Shopify](/it/blog/migrazione-woocommerce-shopify) copre quel caso.',
    },
    { type: 'h2', text: 'PrestaShop o Shopify: perché si cambia?' },
    {
      type: 'paragraph',
      text: '**Si lascia PrestaShop soprattutto per il costo di gestione che sta intorno al software, non per il software.** PrestaShop è open source e il core è gratuito. Si paga tutto ciò che lo trasforma in uno store: i moduli, uno sviluppatore che li conosce e un hosting all’altezza. Quattro cose tornano sempre.',
    },
    {
      type: 'list',
      items: [
        '**La pila di moduli.** Ogni modulo a pagamento è una licenza, un ciclo di aggiornamenti e un possibile conflitto con un altro modulo che modifica lo stesso template o la stessa classe. La pila cresce una funzione utile alla volta e nessuno possiede l’elenco intero.',
        '**Gli aggiornamenti tra versioni maggiori.** Passare da una versione maggiore alla successiva (da 1.7 a 8, da 8 a 9) è un progetto: tema, moduli e codice su misura devono essere tutti compatibili, e quello che non lo è blocca gli altri.',
        '**Hosting e PHP.** Il server e la sua versione di PHP vanno tenuti aggiornati da te, e ogni release di PrestaShop supporta solo alcune versioni di PHP (vedi i [requisiti di sistema](https://devdocs.prestashop-project.org/9/basics/installation/system-requirements/)). Se il tuo store gira su PHP, controlla la versione: l’[advisory 2026-018](https://cert.europa.eu/publications/security-advisories/2026-018/) di CERT-EU descrive due falle con CVSS 9.2 che permettono l’esecuzione di codice da remoto senza autenticazione. Le correzioni esistono in PHP 8.5.12, 8.4.27, 8.3.36 e 8.2.35, mentre PHP 8.1 e precedenti non hanno una correzione ufficiale. Su Shopify non c’è un server PHP da aggiornare.',
        '**La dipendenza dallo sviluppatore.** Cambiare un template, un passaggio del checkout o una regola di prezzo spesso vuol dire chiedere all’unica persona che capisce gli override.',
      ],
    },
    {
      type: 'paragraph',
      text: 'PrestaShop non è una brutta piattaforma. Il multistore nativo, i gruppi clienti e il comportamento per paese sono punti di forza reali, e più sotto diciamo dove Shopify richiede più lavoro per eguagliarli. Se il tuo store è stabile, su una versione supportata, con uno sviluppatore di cui ti fidi e pochi moduli, non c’è urgenza. Conviene muoversi quando la spesa dei moduli e la paura del prossimo aggiornamento sono la cosa principale che gestisci.',
    },
    { type: 'h2', text: 'Abbiamo un caso studio su PrestaShop?' },
    {
      type: 'paragraph',
      text: '**No. Non abbiamo migrato uno store PrestaShop e non presenteremo il risultato di un’altra piattaforma come se lo fosse.** Le nostre due migrazioni reali su Shopify sono [Integratori DTC Nazzi](/it/casi-studio/integratori-nazzi-dtc-shopify), da WooCommerce, e [Cumini](/it/casi-studio/cumini-luxury-fashion-ecommerce), da una piattaforma proprietaria legata al gestionale. Nazzi è il profilo più vicino: PHP, self-hosted, una pila di plugin e uno storico di ordini e URL da portare dall’altra parte. È una somiglianza, non la prova che PrestaShop si comporti allo stesso modo.',
    },
    {
      type: 'paragraph',
      text: 'Quello che portiamo è un processo uguale su ogni piattaforma: inventario, mappatura dei dati, mappa dei redirect, ordini di prova e una data di go-live sul calendario. Tutto ciò che è specifico di PrestaShop qui sotto puoi verificarlo nella documentazione ufficiale di PrestaShop, che linkiamo man mano.',
    },
    { type: 'h2', text: 'Quali concetti di PrestaShop non hanno un equivalente uno a uno su Shopify?' },
    {
      type: 'paragraph',
      text: '**Sei: combinazioni, attributi e caratteristiche, l’albero delle categorie, gruppi clienti con prezzi specifici, multistore e corrieri.** Ognuno richiede una decisione prima di importare qualsiasi CSV, perché la risposta cambia i dati che esporti.',
    },
    { type: 'h3', text: 'Le combinazioni diventano varianti, con limiti più bassi' },
    {
      type: 'paragraph',
      text: 'Una combinazione di PrestaShop è una versione di un prodotto costruita da attributi come taglia, colore o capacità. L’equivalente su Shopify è la variante, e il tetto è più basso: Shopify ha dei limiti su opzioni e varianti per prodotto, da leggere nella [documentazione sulle varianti](https://help.shopify.com/en/manual/products/variants) prima di pianificare. Un prodotto con molti gruppi di attributi può non entrare così com’è. Per ognuno decidi: separarlo in prodotti distinti, eliminare un attributo, oppure raccoglierlo come proprietà della riga d’ordine con un’app.',
    },
    {
      type: 'paragraph',
      text: 'Una trappola è il prezzo. Una combinazione di PrestaShop può riportare il prezzo come differenza dal prezzo base del prodotto, quindi un export può mostrare la differenza invece del prezzo finale. Controlla nel tuo export quale dei due hai, ricostruisci i prezzi finali se serve e verifica un campione prima di importare tutto il catalogo.',
    },
    { type: 'h3', text: 'Attributi e caratteristiche: uno costruisce le varianti, l’altro descrive' },
    {
      type: 'paragraph',
      text: 'La documentazione di PrestaShop traccia il confine: gli [attributi](https://docs.prestashop-project.org/v.8-documentation/user-guide/selling/managing-catalog/managing-product-attributes) creano le combinazioni, le caratteristiche compaiono come tabella informativa. Su Shopify gli attributi che cambiano prezzo o giacenza diventano opzioni. Le caratteristiche come materiale, composizione o peso diventano metafield, che il tema può mostrare e i filtri possono usare ([metafield di Shopify](https://help.shopify.com/en/manual/products/metafields)).',
    },
    { type: 'h3', text: 'L’albero delle categorie diventa collezioni più menu' },
    {
      type: 'paragraph',
      text: 'Le categorie di PrestaShop sono un albero, e la categoria predefinita di un prodotto determina il suo URL. Le collezioni di Shopify sono piatte. Tieni l’albero nel menu di navigazione, costruisci ogni collezione da tag o condizioni sui prodotti e usa la categoria predefinita soprattutto per decidere dove va il redirect del vecchio URL.',
    },
    { type: 'h3', text: 'Gruppi clienti e prezzi specifici portano alla domanda sul B2B' },
    {
      type: 'paragraph',
      text: 'I [gruppi clienti](https://docs.prestashop-project.org/v.8-documentation/user-guide/configuring-shop/shop-parameters/customer-settings/groups) di PrestaShop hanno uno sconto percentuale, la visualizzazione dei prezzi con o senza tasse e la possibilità di nascondere i prezzi, e i prodotti possono aggiungere prezzi specifici. Shopify non ha un oggetto identico. Se i tuoi gruppi sono livelli fedeltà, bastano sconti e tag dei clienti. Se sono acquirenti all’ingrosso con prezzi e visualizzazione fiscale propri, guarda le [funzioni B2B di Shopify](https://help.shopify.com/en/manual/b2b) e verifica quali piani le includono. Prima di costruire qualcosa, conta i gruppi e i prezzi specifici che usi davvero: negli store si trovano spesso regole che nessuno ricorda.',
    },
    { type: 'h3', text: 'Il multistore è dove Shopify chiede più lavoro' },
    {
      type: 'paragraph',
      text: 'Il [multistore](https://docs.prestashop-project.org/v.8-documentation/user-guide/configuring-shop/advanced-parameters/multistore) di PrestaShop gestisce più shop da un solo back office. Su Shopify gli shop che in realtà sono paesi o lingue diventano di solito [mercati](https://help.shopify.com/en/manual/international/markets) dentro un solo store, con valute, lingue e domini propri. Gli shop che sono brand separati con cataloghi separati diventano store Shopify separati. Decidi quale è quale prima di pianificare il lavoro, perché cambia sia il perimetro sia la mappa dei redirect.',
    },
    { type: 'h3', text: 'Corrieri e regole di spedizione diventano profili di spedizione' },
    {
      type: 'paragraph',
      text: 'Corrieri, zone e fasce di prezzo o peso di PrestaShop vanno ricostruiti nelle [impostazioni di spedizione di Shopify](https://help.shopify.com/en/manual/shipping), che lavorano con profili di spedizione e tariffe per zona. In PrestaShop queste regole sono sparse tra le pagine di corrieri, zone e fasce. Scrivile prima in un’unica tabella, poi ricostruiscile e prova ognuna con un ordine.',
    },
    { type: 'h2', text: 'Come si fa l’audit dei moduli PrestaShop prima di migrare?' },
    {
      type: 'paragraph',
      text: '**Metti ogni modulo installato in uno di quattro gruppi: nativo in Shopify, app di Shopify, codice su misura oppure da eliminare.** Fallo prima di toccare i dati, perché l’elenco dei moduli è il vero perimetro del progetto.',
    },
    {
      type: 'list',
      items: [
        '**Nativo:** sconti, gift card, email di carrello abbandonato, campi SEO, redirect e blog esistono già in Shopify.',
        '**App:** recensioni, abbonamenti, filtri avanzati, liste desideri. Si paga un canone mensile, quindi confrontalo con la licenza che paghi oggi.',
        '**Codice su misura:** la sincronizzazione con gestionale o magazzino e le regole che esistono solo nel tuo store. Con il nostro Custom AI System il codice è scritto da zero solo per il tuo store, senza accumulare app.',
        '**Da eliminare:** moduli installati anni fa per una campagna, tre moduli che fanno lo stesso lavoro, un modulo che esiste solo per correggerne un altro. Negli store basati su plugin questo gruppo di solito è più grande di quanto il titolare si aspetti.',
      ],
    },
    {
      type: 'paragraph',
      text: 'La migrazione è il momento più economico per eliminare moduli. Non ricostruire quello che non ricordi di aver installato.',
    },
    { type: 'h2', text: 'Come si costruisce la mappa dei redirect dagli URL di PrestaShop?' },
    {
      type: 'paragraph',
      text: '**Costruiscila dagli ID del database di PrestaShop, non solo da un crawl: gli URL semplificati contengono l’ID di ogni prodotto e categoria, e questo ti dà una chiave affidabile per collegare i vecchi indirizzi ai nuovi handle di Shopify.** Lo schema predefinito del prodotto documentato da PrestaShop è {category:/}{id}-{rewrite}{-:ean13}.html, che produce indirizzi come /summer-dresses/7-printed-chiffon-dress.html. Lo schema è modificabile in Parametri Shop, Traffico e SEO ([SEO e URL](https://docs.prestashop-project.org/v.8-documentation/user-guide/configuring-shop/shop-parameters/traffic/seo-and-urls)), quindi leggi il tuo lì prima di dare qualcosa per scontato. Quella pagina documenta solo il percorso del prodotto: gli altri modelli qui sotto sono ciò che ci aspettiamo, non qualcosa che abbiamo verificato su uno store PrestaShop.',
    },
    {
      type: 'list',
      items: [
        '**Prodotti:** /categoria/ID-nome.html. Esporta il catalogo con ID, URL riscritto e categoria predefinita, ricostruisci ogni vecchio percorso e mappalo su /products/nuovo-handle.',
        '**Categorie:** di solito /ID-nome. Mappa su /collections/handle.',
        '**Pagine CMS:** di solito /content/ID-nome. Mappa su /pages/handle.',
        '**Marchi e fornitori:** di solito /brand/ID-nome e /supplier/ID-nome. Mappa su una collezione per marchio se mantieni le pagine dei brand, altrimenti sulla collezione più vicina.',
        '**Prefissi di lingua:** /it/, /en/ e così via. Ogni lingua ha le sue righe.',
        '**URL delle combinazioni:** a seconda dello schema possono contenere l’ID della combinazione. Puntano tutti a un solo prodotto Shopify, quindi più righe condividono la stessa destinazione.',
        '**Parametri di filtro e ordinamento** della navigazione a faccette: non mapparli uno per uno. Redirigi la categoria di base e lascia che Google scarti il resto.',
      ],
    },
    {
      type: 'paragraph',
      text: 'A parte il percorso del prodotto, i modelli qui sopra sono aspettative non verificate e decide il tuo schema: controlla ognuno nel tuo back office e sugli URL reali in Search Console prima di scrivere il file. Shopify importa i redirect da un CSV nell’admin, una riga per vecchio URL. Redirige solo da URL che sul nuovo store risultano rotti, non può rediregere alcuni percorsi riservati e pone un limite al numero di redirect di uno store, da verificare per il tuo piano ([redirect URL](https://help.shopify.com/en/manual/online-store/menus-and-links/url-redirect)).',
    },
    {
      type: 'paragraph',
      text: 'Non ogni vecchio URL merita un redirect. Sugli indirizzi WooCommerce archiviati di Nazzi abbiamo controllato 215 URL uno per uno e consegnato il CSV dei redirect 301. La logica qui è la stessa: redirigi ciò che ha un successore reale e lascia sparire le pagine senza equivalente. Per il metodo, vedi la [guida di Google sugli spostamenti di sito con cambio di URL](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes) e la nostra [checklist SEO](/it/blog/migrazione-shopify-seo-checklist).',
    },
    { type: 'h2', text: 'Come si configurano pagamenti, fatture e tasse per uno store UE?' },
    {
      type: 'paragraph',
      text: '**Configurali in quest’ordine: tasse, fornitore di pagamenti, tariffe di spedizione, poi fatturazione, e prova ognuno con un ordine vero prima di spostare il dominio.** I dettagli dipendono dal tuo paese, quindi restiamo generali e rimandiamo alle pagine ufficiali.',
    },
    {
      type: 'list',
      items: [
        '**Tasse:** Shopify offre [Shopify Tax nell’UE e nel Regno Unito](https://help.shopify.com/en/manual/taxes/eu-vat) oppure aliquote manuali. Come si applicano a te l’IVA e lo sportello unico (OSS) è una domanda per il tuo commercialista: la piattaforma applica solo le aliquote che scegli.',
        '**Pagamenti:** verifica se [Shopify Payments](https://help.shopify.com/en/manual/payments/shopify-payments) è disponibile nel tuo paese e quali metodi locali usano i tuoi clienti. Se mantieni il fornitore attuale, collegalo a Shopify e fai un ordine di prova.',
        '**Fatturazione:** PrestaShop produce fatture PDF numerate dal back office ([Fatture](https://docs.prestashop-project.org/v.8-documentation/user-guide/selling/managing-orders/invoices)). Non dare per scontato che i documenti d’ordine predefiniti di Shopify rispettino le regole del tuo paese sulle fatture. Chiarisci con il commercialista e scegli l’app o l’integrazione contabile prima del go-live.',
        '**Storico fatture:** esporta le fatture PDF passate prima di spegnere il vecchio server. Importare gli ordini non sposta l’archivio delle fatture.',
      ],
    },
    { type: 'h2', text: 'Quanto dura la migrazione da PrestaShop a Shopify?' },
    {
      type: 'paragraph',
      text: '**Con lo Shopify Launch Sprint lo store è pronto al giorno 14 e il go-live cade tra il giorno 15 e il 30, lo stesso calendario che usiamo su ogni piattaforma.** Con PrestaShop i primi giorni vanno all’audit dei moduli, alle decisioni sulle combinazioni, alle regole di gruppi e corrieri e alla mappa dei redirect. Più presto sono chiusi, meno si sposta il calendario. Un limite onesto: i 14 giorni sono il calendario dello Sprint, non un tempo misurato su un progetto PrestaShop, perché non ne abbiamo fatti.',
    },
    { type: 'h2', text: 'Domande frequenti' },
    { type: 'h3', text: 'Posso importare i prodotti di PrestaShop su Shopify?' },
    {
      type: 'paragraph',
      text: 'Sì, con un file CSV o con un’app di migrazione. La [pagina di Shopify sulla migrazione](https://help.shopify.com/en/manual/migrating-to-shopify) elenca le opzioni e consiglia di importare prima i prodotti, poi i clienti, poi gli ordini. La [documentazione di import di PrestaShop](https://docs.prestashop-project.org/v.8-documentation/user-guide/configuring-shop/advanced-parameters/import) mostra la struttura dei file che usa per prodotti e combinazioni.',
    },
    { type: 'h3', text: 'I moduli di PrestaShop funzionano su Shopify?' },
    {
      type: 'paragraph',
      text: 'No. I moduli sono codice PHP per PrestaShop. Ognuno diventa una funzione nativa, un’app, codice su misura oppure niente.',
    },
    { type: 'h2', text: 'Una nota finale' },
    {
      type: 'paragraph',
      text: 'Gran parte del rischio nel lasciare PrestaShop sta in ciò che nessuno ha scritto: un modulo installato anni fa, un gruppo clienti con prezzi propri, una regola dei corrieri, un vecchio URL con dei link. Scrivi prima questa lista e il resto del progetto diventa molto più prevedibile.',
    },
    {
      type: 'paragraph',
      text: 'Lo [Shopify Launch Sprint](/it/sprint-migrazione-shopify) porta il tuo store su Shopify in 14 giorni con il nostro Custom AI System: calendario fisso, prezzo pubblico e 4 garanzie scritte.',
    },
  ],
}

export default article
