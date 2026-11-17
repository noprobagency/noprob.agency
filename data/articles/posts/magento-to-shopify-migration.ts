import type { Article } from '../index'

const article: Article = {
  slug: 'magento-to-shopify-migration',
  slugIt: 'migrazione-magento-shopify',
  title: 'Magento to Shopify Migration: Where Magento Does Not Map One to One',
  titleIt: 'Migrazione Magento Shopify: dove Magento non si traduce uno a uno',
  seoTitle: 'Magento to Shopify Migration: Steps and Cost',
  seoTitleIt: 'Migrazione da Magento a Shopify: passi e costi',
  seoDescription:
    'Migrate from Magento to Shopify: how product types, store views, B2B, extensions and .html URLs map across, what it costs and how a 14-day Sprint runs it.',
  seoDescriptionIt:
    'Migrare da Magento a Shopify: come passano tipi di prodotto, store view, B2B, estensioni e URL .html, quanto costa e come lo fa uno Sprint di 14 giorni.',
  excerpt:
    'A Magento to Shopify migration is decided where Magento does not map one to one: product types, store views, customer groups, extensions and URL rewrites. The redirect map, the extension inventory and the Sprint calendar.',
  excerptIt:
    'Una migrazione da Magento a Shopify si decide dove Magento non si traduce uno a uno: tipi di prodotto, store view, gruppi clienti, estensioni e URL rewrite. Con la mappa dei redirect, l’inventario delle estensioni e il calendario dello Sprint.',
  ledeEn:
    'When you migrate from Magento to Shopify, most of the work is translation. This article sorts what translates from what does not on Magento 2 and Adobe Commerce, then gives the cost and the calendar we work with.',
  ledeIt:
    'Migrare da Magento a Shopify è soprattutto un lavoro di traduzione. Qui separiamo ciò che si traduce da ciò che no su Magento 2 e Adobe Commerce, poi diamo i costi e il calendario con cui lavoriamo.',
  image: '/images/blog/magento-to-shopify-migration-cover.png',
  imageAlt: 'Copertina astratta, sfondo menta, con una dissolvenza radiale di puntini più grandi ai bordi',
  imageAltEn: 'Abstract cover, mint background with a radial fade of dots growing toward the edges',
  articleType: 'BlogPosting',
  date: '2026-10-23',
  datePublishedIso: '2026-10-23T13:40:00+01:00',
  dateModifiedIso: '2026-11-17T10:30:00+00:00',
  wordCount: 3530,
  readingTimeMinutes: 12,
  articleSection: 'Shopify migration',
  keywordsEn:
    'migrate from magento to shopify, magento to shopify migration, migrating from magento to shopify, adobe commerce to shopify, magento to shopify plus, magento 2 to shopify, magento 1 to shopify, magento to shopify product migration, magento to shopify migration service, magento to shopify migration cost',
  keywordsIt:
    'migrazione magento shopify, da magento a shopify, migrare da magento a shopify, adobe commerce a shopify, magento 2 shopify, da magento a shopify plus, magento 1 shopify, importare prodotti da magento a shopify, costo migrazione magento shopify, servizio migrazione magento shopify',
  faqEn: [
    {
      question: 'Will I lose my Google rankings migrating from Magento to Shopify?',
      answer:
        'Rankings usually move for a few weeks after any migration. What decides how fast they settle is a complete 301 redirect map, built from Magento’s URL rewrite table plus a crawl and Search Console, and tested before and after go-live. In the Shopify Launch Sprint the SEO guarantee is written in the contract: "Organic traffic below the baseline 90 days after go-live? We work for free until it comes back."',
    },
    {
      question: 'Is Shopify better than Magento?',
      answer:
        'Shopify is better when you want to stop paying for patches, hosting and developer time. Magento is better when custom B2B logic tied to an ERP is your edge. Decide from your module inventory, not from the platform name.',
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
        'Language and currency store views usually become Shopify Markets on one store. Websites with separate catalogs or prices under the same brand may need separate stores, which is where Plus and its expansion stores come in.',
    },
    {
      question: 'Is there an app to migrate from Magento to Shopify?',
      answer:
        'Yes. The Shopify App Store has migration apps that move products, customers and historical orders, and they suit a medium catalog with standard product types. Validate the mapping before the run and test the output: configurable products, attribute sets and store views do not map one to one.',
    },
    {
      question: 'Can I migrate from Magento 1 to Shopify?',
      answer:
        'Yes, with the same method as Magento 2: export the data, clean it, load products, then customers, then orders, inventory the modules and write the redirect map. Adobe ended support for Magento 1 on 30 June 2020.',
    },
    {
      question: 'How much does it cost to migrate from Magento to Shopify?',
      answer:
        'With the Shopify Launch Sprint the migration costs €5,800 under €2M in revenue, €8,800 from €2M to €20M and €12,800 above €20M, VAT excluded, in 4 installments. The Shopify plan is billed separately by Shopify, which lists Shopify Plus from €2,100 a month and the standard plans below that. Custom modules, store views and B2B rules are what make the work grow.',
    },
    {
      question: 'How long does a Magento to Shopify migration take?',
      answer:
        'It depends on store views, custom modules, B2B rules, ERP connections and catalog data quality. With the Shopify Launch Sprint the store is ready on day 14 and go-live falls between day 15 and 30, followed by 90 days of support.',
    },
    {
      question: 'Can you migrate from Shopify to Magento?',
      answer:
        'Yes, a store can migrate from Shopify to Magento, and it is the same job in the other direction: data, storefront, integrations and redirects. It pays off when custom B2B logic tied to an ERP is your edge, or when your websites carry genuinely different catalogs. You also take back the patches, hosting and upgrades that Shopify handles for you.',
    },
  ],
  faqIt: [
    {
      question: 'Perderò le posizioni su Google migrando da Magento a Shopify?',
      answer:
        'Il posizionamento di solito si muove per qualche settimana dopo qualunque migrazione. Quanto in fretta si assesta lo decide una mappa completa dei redirect 301, costruita dalla tabella degli URL rewrite di Magento più una scansione e Search Console, e testata prima e dopo il go-live. Nello Shopify Launch Sprint la garanzia SEO è scritta nel contratto: "Traffico organico sotto la baseline a 90 giorni dal go-live? Lavoriamo gratis finché non torna."',
    },
    {
      question: 'Shopify è meglio di Magento?',
      answer:
        'Shopify è meglio quando vuoi smettere di pagare patch, hosting e ore di sviluppo. Magento è meglio quando la logica B2B su misura legata a un gestionale è il tuo vantaggio. Decidi dall’inventario dei moduli, non dal nome della piattaforma.',
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
        'Le store view per lingua e valuta di solito diventano Shopify Markets su un solo store. I website con cataloghi o prezzi separati sotto lo stesso brand possono richiedere store distinti, ed è qui che entrano Plus e gli expansion store.',
    },
    {
      question: 'Esiste un’app per migrare da Magento a Shopify?',
      answer:
        'Sì. Sullo Shopify App Store ci sono app di migrazione che spostano prodotti, clienti e storico ordini, adatte a un catalogo medio con tipi di prodotto standard. Valida la mappatura prima dell’esecuzione e testa il risultato: prodotti configurabili, attribute set e store view non si traducono uno a uno.',
    },
    {
      question: 'Posso migrare da Magento 1 a Shopify?',
      answer:
        'Sì, con lo stesso metodo di Magento 2: esporti i dati, li pulisci, carichi prodotti, poi clienti, poi ordini, fai l’inventario dei moduli e scrivi la mappa dei redirect. Adobe ha chiuso il supporto a Magento 1 il 30 giugno 2020.',
    },
    {
      question: 'Quanto costa migrare da Magento a Shopify?',
      answer:
        'Con lo Shopify Launch Sprint la migrazione costa €5.800 sotto i €2M di fatturato, €8.800 tra €2M e €20M e €12.800 oltre i €20M, IVA esclusa, in 4 rate. Il piano Shopify si paga a parte: Shopify indica Shopify Plus da €2.100 al mese e i piani standard sotto quella cifra. Il lavoro cresce con moduli personalizzati, store view e regole B2B.',
    },
    {
      question: 'Quanto dura una migrazione da Magento a Shopify?',
      answer:
        'Dipende da store view, moduli personalizzati, regole B2B, collegamenti al gestionale e qualità dei dati di catalogo. Con lo Shopify Launch Sprint lo store è pronto al giorno 14 e il go-live cade tra il giorno 15 e il 30, seguito da 90 giorni di supporto.',
    },
    {
      question: 'Si può migrare da Shopify a Magento?',
      answer:
        'Sì, uno store può migrare da Shopify a Magento, ed è lo stesso lavoro nell’altra direzione: dati, vetrina, integrazioni e redirect. Conviene quando la logica B2B su misura legata a un gestionale è il tuo vantaggio, o quando i tuoi website hanno cataloghi davvero diversi. Ti riprendi anche patch, hosting e aggiornamenti, che su Shopify non sono a tuo carico.',
    },
  ],
  content: [
    {
      type: 'paragraph',
      text: 'To migrate from Magento to Shopify, you rebuild the storefront on Shopify, move products, customers and order history across, replace every custom module and extension with an app, a native feature or a little code, and give every old Magento URL a 301 redirect. The data moves easily. What does not map one to one is how Magento models products, stores, customer groups and URLs, and that is where the project is decided.',
    },
    {
      type: 'paragraph',
      text: 'We are noprob agency, and we run these moves with our [Magento to Shopify migration service](/shopify-migration-sprint), the Shopify Launch Sprint. The method is the same on every store: inventory, decisions in writing, a tested redirect map. This article covers only what is specific to Magento 2 and Adobe Commerce. For the parts that are the same on every platform, read our [guide to migrating to Shopify](/shopify-migration), the [migration SEO checklist](/blog/shopify-migration-seo-checklist), [what a Shopify migration costs](/blog/shopify-migration-cost) and [how to choose a Shopify migration agency](/blog/choose-shopify-migration-agency).',
    },
    {
      type: 'paragraph',
      text: 'Coming from another platform? Read the guides for [WooCommerce](/blog/woocommerce-to-shopify-migration), [PrestaShop](/blog/prestashop-to-shopify-migration) and [BigCommerce](/blog/bigcommerce-to-shopify-migration).',
    },
    { type: 'h2', text: 'Why do stores migrate from Magento to Shopify?' },
    {
      type: 'paragraph',
      text: '**Stores migrate from Magento to Shopify mostly because of what it takes to keep Magento running.** Magento, in its Open Source or Adobe Commerce form, is flexible and powerful. The cost sits around it:',
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
      text: 'Our view: the people cost more than the license. A store that needs a developer on call just to stay safe spends that money on maintenance.',
    },
    { type: 'h2', text: 'When is staying on Magento the better call?' },
    {
      type: 'paragraph',
      text: 'Staying on Magento is the better call when the logic in your custom modules is your competitive edge and rebuilding it would cost more than the maintenance you would save: deep B2B pricing and approval rules tied to an ERP, or websites with genuinely different catalogs. Shopify can reach much of this with B2B, Markets, Shopify Functions and apps, but you rebuild that logic on the Shopify side. The same two cases explain most moves in the other direction, from Shopify to Magento.',
    },
    { type: 'h2', text: 'How do Magento product types map to Shopify?' },
    {
      type: 'paragraph',
      text: '**Magento has several product types and Shopify has one product with options and variants, so the mapping is done type by type.** Adobe lists the types in its [product types documentation](https://experienceleague.adobe.com/en/docs/commerce-admin/inventory/basics/product-types).',
    },
    {
      type: 'list',
      items: [
        'Simple products become Shopify products. This is the easy part.',
        'Configurable products become one Shopify product with options (size, color) and one variant per combination. In Magento each combination is a separate simple product with its own SKU, so the import must fold the children into the parent. Shopify limits how many options a product can have ([how variants work](https://help.shopify.com/en/manual/products/variants)), so a configurable with more attributes needs a decision before import: split it or turn some attributes into separate products.',
        'Grouped products, where several standalone items sit on one page, have no direct equivalent. You choose between a collection, a bundle, or the [Combined Listings app](https://help.shopify.com/en/manual/products/combined-listings-app), which presents separate products as one listing and is available only on Plus and enterprise commerce plans.',
        'Bundle products (build-your-own sets) move to a bundles app: [Shopify’s help](https://help.shopify.com/en/manual/products/bundles) says bundles need a bundles app installed.',
      ],
    },
    {
      type: 'paragraph',
      text: 'Attribute sets are the other half: Magento attribute sets and custom attributes become [metafields and metaobjects](https://help.shopify.com/en/manual/custom-data). Our rule: keep the attributes a customer sees or filters by, and drop the rest. Navigation is decided here too: Shopify’s storefront filters are built from product data, so Magento’s layered navigation is rebuilt on the attributes you keep.',
    },
    { type: 'h2', text: 'How do you import Magento products into Shopify: CSV, app or API?' },
    {
      type: 'paragraph',
      text: '**You import Magento products into Shopify in one of three ways: a product CSV, a migration app from the Shopify App Store, or a custom migration through Shopify’s APIs.** [Shopify’s Magento guide](https://www.shopify.com/enterprise/blog/magento-to-shopify-migration) matches the method to the store: CSV for a small catalog with simple pricing, an app for a medium catalog with standard product types, and the API with a partner for heavy customization or ERP sync. [Shopify’s migration documentation](https://help.shopify.com/en/manual/migrating-to-shopify/store-importer) lists what each route can carry:',
    },
    {
      type: 'table',
      caption: 'Bulk migration options for each type of data, according to Shopify',
      headers: ['Data', 'Bulk migration options'],
      rows: [
        ['Products', 'Product CSV, migration apps'],
        ['Customers', 'Customer CSV, migration apps, Customer API'],
        ['Historical orders', 'Migration apps, Order API, Transaction API'],
        ['Gift cards and store credit', 'Migration apps, GiftCard API'],
        ['Blog posts and pages', 'Migration apps, Blog, Article and Page APIs'],
      ],
    },
    {
      type: 'paragraph',
      text: 'Two things follow. Historical orders are not on the CSV route, so a store that needs them plans for an app or the API. And an app still needs checking: Shopify’s guide says to validate the data mappings before the run and test the output. On Magento we check configurable products, attribute sets and store view content first, because those are the structures that do not map one to one.',
    },
    { type: 'h3', text: 'Magento 2 and Adobe Commerce' },
    {
      type: 'paragraph',
      text: '**From Magento 2, Open Source or Adobe Commerce, the migration to Shopify follows the same steps, and two things set its size: how much B2B you use and, on Adobe Commerce, how close your release is to the end of support.** Adobe Commerce adds B2B features on top of the core: company accounts, shared catalogs with prices per company, negotiable quotes, requisition lists and purchase order approvals ([Adobe’s B2B documentation](https://experienceleague.adobe.com/en/docs/commerce-admin/b2b/introduction)). Each one you use gets a line in the inventory, next to the Shopify B2B feature, app or code that takes over its job.',
    },
    {
      type: 'paragraph',
      text: 'The release you run decides the timing. Adobe gives each Adobe Commerce version three years of standard support from its release date ([lifecycle policy](https://experienceleague.adobe.com/en/docs/commerce-operations/release/planning/lifecycle-policy)), and its [versions page](https://experienceleague.adobe.com/en/docs/commerce-operations/release/versions) shows that regular support for the 2.4.6 line ended on 11 August 2026 and that the 2.4.7 line ends on 31 May 2027. Our rule: if a Magento upgrade is due anyway, get the migration priced before you pay for the upgrade.',
    },
    { type: 'h3', text: 'Magento 1' },
    {
      type: 'paragraph',
      text: '**From Magento 1 the destination and the method are the same as from any later version.** Adobe [ended support for Magento 1 on 30 June 2020](https://www.helpnetsecurity.com/2020/06/29/magento-1-eol/) and warned that stores still running it take on more responsibility for security and PCI compliance. Export the data, clean it, then load products, customers and orders in that order; the module inventory and the redirect map below apply as they are.',
    },
    { type: 'h2', text: 'What happens to store views, websites and customer groups?' },
    {
      type: 'paragraph',
      text: '**Magento’s website, store and store view hierarchy does not exist in Shopify as such, so you replace it with Markets, separate stores where needed, and B2B for customer groups.** In Adobe Commerce, [websites contain stores and stores contain store views](https://experienceleague.adobe.com/en/docs/commerce-admin/start/setup/websites-stores-views), and settings, catalogs, prices and base currencies can differ by scope.',
    },
    {
      type: 'list',
      items: [
        'Store views by language or currency map to [Shopify Markets](https://help.shopify.com/en/manual/markets), where you set language, currency, pricing and domain per market on one store.',
        'Websites with separate catalogs or prices under the same brand are a decision: one store with markets, or separate Shopify stores. [Shopify Plus](https://help.shopify.com/en/manual/intro-to-shopify/pricing-plans/plans-features/shopify-plus-plan) supports expansion stores for this. Decide website by website.',
        'Customer groups with tier prices map to [Shopify B2B](https://help.shopify.com/en/manual/b2b), where customers are set up as companies with their own pricing, products, payment and shipping methods. Shopify says B2B is available on Basic, Grow, Advanced and Plus, so check which B2B features each plan includes against your price lists.',
      ],
    },
    { type: 'h2', text: 'What happens to Magento extensions and custom modules?' },
    {
      type: 'paragraph',
      text: '**Every Magento extension and custom module ends in one of four ways on Shopify: a native feature, an app, code written in the store, or retirement.** None of them transfers.',
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
      text: '**Magento URLs become a redirect map by exporting Magento’s own URL rewrite table, flattening the paths to Shopify’s fixed prefixes, and checking every row against the pages Google knows.** Magento keeps the URLs it has generated in a url_rewrite table (request path, target path, redirect type and store), the same data you see in the admin under Marketing, SEO & Search, URL Rewrites ([Adobe’s URL rewrites documentation](https://experienceleague.adobe.com/en/docs/commerce-admin/marketing/seo/url-rewrites/url-rewrite)). Export it per store, then add a crawl, Search Console pages and backlinks, as in our [SEO checklist](/blog/shopify-migration-seo-checklist).',
    },
    { type: 'paragraph', text: 'These are the Magento patterns to expect, and where they usually land:' },
    {
      type: 'list',
      items: [
        'Product URLs with a suffix. The [suffix is configurable](https://experienceleague.adobe.com/en/docs/commerce-admin/catalog/catalog/catalog-urls) (html or htm, or none). /blue-shirt.html goes to /products/blue-shirt.',
        'Product URLs with a category path. Adobe warns that including category paths can make several URLs point at one page. /men/shirts/blue-shirt.html and /blue-shirt.html both go to the same /products/blue-shirt.',
        'Category URLs. /men/shirts.html goes to a collection. Shopify collections are flat, so nested categories are decided one by one: keep as a collection, merge, or retire.',
        'Old redirects. Rows in the table with a 301 type are chains waiting to happen. Point every one at the final Shopify URL.',
        'System paths. /catalog/product/view/id/34 and /catalog/category/view/id/12 get a row if Search Console shows impressions.',
        'Store codes in the path (/default/, a language code): one set of rows per store view.',
        'Filter and sort URLs (color, price, sort order, page number). Do not write a row per combination. Send the base path to its collection and let the rest go.',
      ],
    },
    {
      type: 'paragraph',
      text: 'Google’s [site move guide](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes) says to map each old URL to its matching new one, not everything to the homepage, and to keep the redirects generally at least a year. Shopify imports them from a CSV through [URL redirects](https://help.shopify.com/en/manual/online-store/menus-and-links/url-redirect).',
    },
    { type: 'h2', text: 'Shopify or Shopify Plus for a Magento or Adobe Commerce store?' },
    {
      type: 'paragraph',
      text: '**For a Magento store, the choice between Shopify and Shopify Plus comes down to four requirements, not to revenue: B2B depth, several storefronts, checkout changes and combined listings.** If they point to Plus, our [Shopify Plus migration](/blog/shopify-plus-migration) article covers checkout dates, contract and costs.',
    },
    {
      type: 'list',
      items: [
        '**B2B:** available on Basic, Grow, Advanced and Plus. Compare the features with your price lists, not only the availability.',
        '**Several storefronts:** Markets covers language, currency, pricing and domain on one store. Separate catalogs under the same brand point to more stores, which means [Plus expansion stores](https://help.shopify.com/en/manual/organization-settings/expansion-stores). Several brands point to a multi-brand agreement, with one Plus subscription per brand.',
        '**Checkout:** if your Magento checkout has custom rules, test how much Shopify Functions reproduce before you choose. Shopify says [advanced checkout customization](https://help.shopify.com/en/manual/checkout-settings/checkout-extensibility) is available only on Plus.',
        '**Grouped products as one listing:** the Combined Listings app is available only on Plus and enterprise commerce plans.',
      ],
    },
    {
      type: 'paragraph',
      text: 'Our opinion: write the requirement list before you ask for any quote, and check plan prices on Shopify’s site, because they change. The Sprint price is public, from €5,800 excl. VAT in 4 installments and set by your revenue tier: see the [Sprint page](/shopify-migration-sprint).',
    },
    { type: 'h2', text: 'How much does a Magento to Shopify migration cost?' },
    {
      type: 'paragraph',
      text: '**A Magento to Shopify migration with the Shopify Launch Sprint costs €5,800, €8,800 or €12,800 excluding VAT, by revenue tier, in 4 installments.** The price is public and you know it before the first conversation.',
    },
    {
      type: 'table',
      caption: 'Shopify Launch Sprint price by revenue tier, VAT excluded',
      headers: ['Annual revenue', 'Sprint price', 'Payment'],
      rows: [
        ['Under €2M', '€5,800', '4 installments'],
        ['From €2M to €20M', '€8,800', '4 installments'],
        ['Above €20M', '€12,800', '4 installments'],
      ],
    },
    {
      type: 'paragraph',
      text: 'The Shopify plan is a second line, paid to Shopify. On annual billing [Shopify’s pricing page](https://www.shopify.com/pricing) lists Basic at €19, Grow at €56 and Advanced at €289 a month, and Shopify Plus from €2,100 a month. Prices vary by country, so check the page for yours. Paid apps are a third line, billed by each vendor.',
    },
    {
      type: 'paragraph',
      text: 'Three things make the work grow on Magento:',
    },
    {
      type: 'list',
      items: [
        '**Custom modules:** every module with no native feature or app behind it is code to write and test.',
        '**Store views and websites:** each one brings its own content, its own rows in the redirect map and a market or a store to configure.',
        '**B2B:** customer groups, tier prices and company accounts are rebuilt as companies and catalogs in Shopify B2B, and they can move you up a plan.',
      ],
    },
    {
      type: 'paragraph',
      text: 'This is why the inventory comes before the signature: you read what is rebuilt, what becomes an app and what is retired, then you decide. For how quotes are put together on any platform, and the lines some of them leave out, read [what a Shopify migration costs](/blog/shopify-migration-cost).',
    },
    { type: 'h2', text: 'How long does a Magento to Shopify migration take?' },
    {
      type: 'paragraph',
      text: '**A Magento to Shopify migration runs in six steps, and the Sprint puts them on a fixed calendar: store ready on day 14, go-live between day 15 and 30, then 90 days of support.** Store views, custom modules, B2B rules, ERP connections and catalog data quality are what stretch it.',
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
    { type: 'h2', text: 'Magento to Shopify migration checklist' },
    {
      type: 'paragraph',
      text: '**A Magento to Shopify migration checklist has eight checks, in this order.** Each one comes from a section above, so you can use it as the working list for your own store.',
    },
    {
      type: 'list',
      items: [
        'List every module from app/code and composer.json, with its job in one sentence.',
        'Give each module one of four outcomes: native feature, app, store code or retirement.',
        'Export the data of the apps you will replace, such as reviews and loyalty points.',
        'Map every product type (configurable, grouped, bundle) and keep only the attributes customers see or filter by.',
        'Decide each store view and website: a market on one store, or a separate store.',
        'Choose Shopify or Plus from your B2B, multi-store and checkout requirements.',
        'Export the url_rewrite table per store, add a crawl, Search Console pages and backlinks, and write the redirect CSV.',
        'Import products, then customers, then orders, place test orders, check tracking and only then switch the domain.',
      ],
    },
    { type: 'h2', text: 'Magento to Shopify migration services: how we run it in 14 days' },
    {
      type: 'paragraph',
      text: '**Our Magento to Shopify migration service is the Shopify Launch Sprint: store ready on day 14, go-live between day 15 and 30, then 90 days of support, at a public price and with 4 written guarantees.** The order of work is the same on every store: inventory first, decisions in writing, the new store built while Magento keeps selling, a tested redirect map and a fixed go-live date. Antonio brings more than 7 years of eCommerce projects and several migrations with 0 minutes offline.',
    },
    {
      type: 'paragraph',
      text: 'The four guarantees are one page of the contract:',
    },
    {
      type: 'list',
      items: [
        'Store ready on day 14 or we refund the first installment.',
        'Organic traffic below the baseline 90 days after go-live? We work for free until it comes back.',
        'Store offline at launch because of us? We pay one installment.',
        'Checkout converting less than before at 90 days? We optimize it for free until it beats it.',
      ],
    },
    {
      type: 'paragraph',
      text: 'Two projects we publish in full show the process at work. [Nazzi](/use-cases/integratori-nazzi-dtc-shopify), a supplement brand, went from WooCommerce to Shopify on 19 July 2026 and, from go-live to 12 October, sold 105% more online than in the same days of 2025, with orders up 77%; for its URLs we checked 215 archived addresses and delivered the 301 redirect CSV. [Cumini](/use-cases/cumini-luxury-fashion-ecommerce), a luxury multibrand boutique, went live on 19 May 2025 from a proprietary platform tied to the ERP, and from June 2025 to May 2026 online sales were up 67.7% on the 12 months before; we built the solution that connects Shopify to that ERP, the kind of dependency a heavily customized Magento store often carries.',
    },
    {
      type: 'paragraph',
      text: 'For your store, we run the inventory first and tell you, before you sign, which modules map to native features and which are real rebuild work.',
    },
    { type: 'h2', text: 'Frequently asked questions' },
    { type: 'h3', text: 'Will I lose my Google rankings migrating from Magento to Shopify?' },
    {
      type: 'paragraph',
      text: '**Rankings usually move for a few weeks after any migration.** What decides how fast they settle is a complete 301 redirect map, built from Magento’s URL rewrite table plus a crawl and Search Console, and tested before and after go-live. In the Shopify Launch Sprint the SEO guarantee is written in the contract: "Organic traffic below the baseline 90 days after go-live? We work for free until it comes back."',
    },
    { type: 'h3', text: 'Is Shopify better than Magento?' },
    {
      type: 'paragraph',
      text: '**Shopify is better when you want to stop paying for patches, hosting and developer time.** Magento is better when custom B2B logic tied to an ERP is your edge. Decide from your module inventory, not from the platform name.',
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
      text: '**Customers and historical orders can be imported with CSV files, migration apps or the Shopify APIs, products first, then customers, then orders.** Passwords cannot be moved in a usable form, so customers get an activation email or a password reset after launch.',
    },
    { type: 'h3', text: 'How do I replace Magento store views and websites on Shopify?' },
    {
      type: 'paragraph',
      text: '**Language and currency store views usually become Shopify Markets on one store.** Websites with separate catalogs or prices under the same brand may need separate stores, which is where Plus and its expansion stores come in.',
    },
    { type: 'h3', text: 'Is there an app to migrate from Magento to Shopify?' },
    {
      type: 'paragraph',
      text: 'Yes. The Shopify App Store has migration apps that move products, customers and historical orders, and they suit a medium catalog with standard product types. Validate the mapping before the run and test the output: configurable products, attribute sets and store views do not map one to one.',
    },
    { type: 'h3', text: 'Can I migrate from Magento 1 to Shopify?' },
    {
      type: 'paragraph',
      text: '**Yes, with the same method as Magento 2: export the data, clean it, load products, then customers, then orders, inventory the modules and write the redirect map.** Adobe ended support for Magento 1 on 30 June 2020.',
    },
    { type: 'h3', text: 'How much does it cost to migrate from Magento to Shopify?' },
    {
      type: 'paragraph',
      text: '**With the Shopify Launch Sprint the migration costs €5,800 under €2M in revenue, €8,800 from €2M to €20M and €12,800 above €20M, VAT excluded, in 4 installments.** The Shopify plan is billed separately by Shopify, which lists Shopify Plus from €2,100 a month and the standard plans below that. Custom modules, store views and B2B rules are what make the work grow. The full list of quote lines is in [what a Shopify migration costs](/blog/shopify-migration-cost).',
    },
    { type: 'h3', text: 'How long does a Magento to Shopify migration take?' },
    {
      type: 'paragraph',
      text: '**It depends on store views, custom modules, B2B rules, ERP connections and catalog data quality.** With the Shopify Launch Sprint the store is ready on day 14 and go-live falls between day 15 and 30, followed by 90 days of support.',
    },
    { type: 'h3', text: 'Can you migrate from Shopify to Magento?' },
    {
      type: 'paragraph',
      text: '**Yes, a store can migrate from Shopify to Magento, and it is the same job in the other direction: data, storefront, integrations and redirects.** It pays off when custom B2B logic tied to an ERP is your edge, or when your websites carry genuinely different catalogs. You also take back the patches, hosting and upgrades that Shopify handles for you. The section "When is staying on Magento the better call?" above describes both cases.',
    },
    { type: 'h2', text: 'The two hard parts of leaving Magento: modules and URLs' },
    {
      type: 'paragraph',
      text: '**Moving from Magento is a translation job with two hard parts: the logic hidden in modules and the URLs Google already knows.** An inventory finds both before anyone quotes a price.',
    },
    {
      type: 'paragraph',
      text: 'The Sprint has a public price by revenue: €5,800 under €2M, €8,800 from €2M to €20M, €12,800 above €20M, VAT excluded, in 4 installments.',
    },
    {
      type: 'paragraph',
      text: 'Next step. Send us your store: [apply to the Shopify Launch Sprint](/shopify-migration-sprint) and we reply within 48 hours with your tier, the price and the first available kickoff date.',
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
      text: 'Siamo noprob agency e facciamo questi passaggi con il nostro [servizio di migrazione da Magento a Shopify](/it/sprint-migrazione-shopify), lo Shopify Launch Sprint. Il metodo è lo stesso su ogni store: inventario, decisioni per iscritto, mappa dei redirect testata. Questo articolo copre solo ciò che è specifico di Magento 2 e Adobe Commerce. Per le parti uguali su ogni piattaforma leggi la [guida alla migrazione a Shopify](/it/migrazione-shopify), la [checklist SEO](/it/blog/migrazione-shopify-seo-checklist), [quanto costa migrare](/it/blog/costo-migrazione-shopify) e [come scegliere un’agenzia](/it/blog/scegliere-agenzia-migrazione-shopify).',
    },
    {
      type: 'paragraph',
      text: 'Arrivi da un’altra piattaforma? Leggi le guide per [WooCommerce](/it/blog/migrazione-woocommerce-shopify), [PrestaShop](/it/blog/migrazione-prestashop-shopify) e [BigCommerce](/it/blog/migrazione-bigcommerce-shopify).',
    },
    { type: 'h2', text: 'Perché si passa da Magento a Shopify?' },
    {
      type: 'paragraph',
      text: '**Si passa da Magento a Shopify soprattutto per quello che serve a tenere in piedi Magento.** Magento, Open Source o Adobe Commerce, è flessibile e potente. Il costo sta intorno:',
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
      text: 'La nostra opinione: le persone costano più della licenza. Uno store che ha bisogno di uno sviluppatore a disposizione solo per restare sicuro spende quei soldi in manutenzione.',
    },
    { type: 'h2', text: 'Quando conviene restare su Magento?' },
    {
      type: 'paragraph',
      text: 'Conviene restare su Magento quando la logica dei moduli personalizzati è il tuo vantaggio competitivo e rifarla costerebbe più della manutenzione che risparmi: prezzi B2B profondi e regole legate al gestionale, o website con cataloghi davvero diversi. Shopify arriva a gran parte di questo con B2B, Markets, Functions e app, ma quella logica si ricostruisce lato Shopify. Gli stessi due casi spiegano quasi tutti i passaggi al contrario, da Shopify a Magento.',
    },
    { type: 'h2', text: 'Come si traducono i tipi di prodotto di Magento su Shopify?' },
    {
      type: 'paragraph',
      text: '**Magento ha più tipi di prodotto e Shopify ha un solo prodotto con opzioni e varianti, quindi la corrispondenza si fa tipo per tipo.** Adobe elenca i tipi nella sua [documentazione sui tipi di prodotto](https://experienceleague.adobe.com/en/docs/commerce-admin/inventory/basics/product-types).',
    },
    {
      type: 'list',
      items: [
        'Prodotti semplici diventano prodotti Shopify. È la parte facile.',
        'Prodotti configurabili diventano un unico prodotto Shopify con opzioni (taglia, colore) e una variante per ogni combinazione. In Magento ogni combinazione è un prodotto semplice con il suo SKU, quindi l’import deve ripiegare i figli nel padre. Shopify limita le opzioni per prodotto ([come funzionano le varianti](https://help.shopify.com/it/manual/products/variants)), quindi un configurabile con più attributi richiede una decisione prima: dividerlo o trasformare alcuni attributi in prodotti separati.',
        'Prodotti raggruppati, dove più articoli autonomi stanno su una pagina, non hanno un equivalente diretto. Scegli tra una collezione, un bundle o l’[app Combined Listings](https://help.shopify.com/it/manual/products/combined-listings-app), che presenta prodotti separati come una scheda ed è disponibile solo su Plus e sui piani enterprise.',
        'Prodotti bundle (set componibili) passano a un’app per bundle: l’[aiuto di Shopify](https://help.shopify.com/it/manual/products/bundles) dice che serve un’app per bundle installata.',
      ],
    },
    {
      type: 'paragraph',
      text: 'Gli attribute set sono l’altra metà: attribute set e attributi personalizzati diventano [metafield e metaobject](https://help.shopify.com/it/manual/custom-data). La nostra regola: tieni gli attributi che il cliente vede o usa per filtrare, e butta il resto. Anche la navigazione si decide qui: i filtri della vetrina Shopify nascono dai dati di prodotto, quindi la navigazione a livelli di Magento si ricostruisce sugli attributi che tieni.',
    },
    { type: 'h2', text: 'Come si importano i prodotti da Magento a Shopify: CSV, app o API?' },
    {
      type: 'paragraph',
      text: '**I prodotti Magento si importano su Shopify in tre modi: un CSV di prodotto, un’app di migrazione dallo Shopify App Store, oppure una migrazione su misura tramite le API di Shopify.** La [guida di Shopify su Magento](https://www.shopify.com/enterprise/blog/magento-to-shopify-migration) abbina il metodo allo store: CSV per un catalogo piccolo con prezzi semplici, app per un catalogo medio con tipi di prodotto standard, API con un partner per personalizzazioni pesanti o sincronizzazione col gestionale. La [documentazione di Shopify sulla migrazione](https://help.shopify.com/it/manual/migrating-to-shopify) elenca cosa può portare ogni strada:',
    },
    {
      type: 'table',
      caption: 'Opzioni di migrazione massiva per tipo di dato, secondo Shopify',
      headers: ['Dato', 'Opzioni di migrazione massiva'],
      rows: [
        ['Prodotti', 'CSV prodotti, app di migrazione'],
        ['Clienti', 'CSV clienti, app di migrazione, Customer API'],
        ['Storico ordini', 'App di migrazione, Order API, Transaction API'],
        ['Gift card e credito store', 'App di migrazione, GiftCard API'],
        ['Articoli del blog e pagine', 'App di migrazione, API Blog, Article e Page'],
      ],
    },
    {
      type: 'paragraph',
      text: 'Ne seguono due cose. Lo storico ordini non passa dal CSV, quindi chi ne ha bisogno mette in conto un’app o le API. E un’app va comunque controllata: la guida di Shopify dice di validare la mappatura dei dati prima dell’esecuzione e di testare il risultato. Su Magento controlliamo per primi prodotti configurabili, attribute set e contenuti delle store view, perché sono le strutture che non si traducono uno a uno.',
    },
    { type: 'h3', text: 'Magento 2 e Adobe Commerce' },
    {
      type: 'paragraph',
      text: '**Da Magento 2, Open Source o Adobe Commerce, la migrazione a Shopify segue gli stessi passi, e due cose ne decidono la misura: quanto B2B usi e, su Adobe Commerce, quanto è vicina la fine del supporto della tua versione.** Adobe Commerce aggiunge al nucleo le funzioni B2B: account aziendali, cataloghi condivisi con prezzi per azienda, preventivi negoziabili, liste di richiesta e approvazione degli ordini d’acquisto ([documentazione B2B di Adobe](https://experienceleague.adobe.com/en/docs/commerce-admin/b2b/introduction)). Ognuna di quelle che usi ha una riga nell’inventario, accanto alla funzione B2B di Shopify, all’app o al codice che ne prende il posto.',
    },
    {
      type: 'paragraph',
      text: 'La versione su cui sei decide i tempi. Adobe dà a ogni versione di Adobe Commerce tre anni di supporto standard dalla data di rilascio ([politica sul ciclo di vita](https://experienceleague.adobe.com/en/docs/commerce-operations/release/planning/lifecycle-policy)), e la [pagina delle versioni](https://experienceleague.adobe.com/en/docs/commerce-operations/release/versions) indica che il supporto regolare della linea 2.4.6 è finito l’11 agosto 2026 e che quello della 2.4.7 finisce il 31 maggio 2027. La nostra regola: se un aggiornamento di Magento è comunque in arrivo, fatti dare il prezzo della migrazione prima di pagare l’aggiornamento.',
    },
    { type: 'h3', text: 'Magento 1' },
    {
      type: 'paragraph',
      text: '**Da Magento 1 destinazione e metodo sono gli stessi delle versioni successive.** Adobe ha [chiuso il supporto a Magento 1 il 30 giugno 2020](https://www.helpnetsecurity.com/2020/06/29/magento-1-eol/) e ha avvertito che chi resta su quella versione si assume più responsabilità su sicurezza e conformità PCI. Esporta i dati, puliscili, poi carica prodotti, clienti e ordini in quest’ordine; l’inventario dei moduli e la mappa dei redirect qui sotto valgono uguali.',
    },
    { type: 'h2', text: 'Che fine fanno store view, website e gruppi clienti?' },
    {
      type: 'paragraph',
      text: '**In Shopify non esiste la gerarchia di website, store e store view di Magento: la si sostituisce con Markets, store separati dove serve e B2B per i gruppi clienti.** In Adobe Commerce [i website contengono gli store e gli store contengono le store view](https://experienceleague.adobe.com/en/docs/commerce-admin/start/setup/websites-stores-views), e impostazioni, cataloghi e prezzi possono cambiare per ambito.',
    },
    {
      type: 'list',
      items: [
        'Le store view per lingua o valuta corrispondono a [Shopify Markets](https://help.shopify.com/it/manual/markets), dove imposti lingua, valuta, prezzi e dominio per mercato su un solo store.',
        'I website con cataloghi o prezzi separati sotto lo stesso brand sono una decisione: un solo store con più mercati, o store Shopify separati. [Shopify Plus](https://help.shopify.com/it/manual/intro-to-shopify/pricing-plans/plans-features/shopify-plus-plan) prevede gli expansion store per questo. Si decide website per website.',
        'I gruppi clienti con prezzi a scaglioni passano a [Shopify B2B](https://help.shopify.com/it/manual/b2b), dove i clienti sono aziende con prezzi, prodotti, pagamenti e spedizioni propri. Shopify dice che è disponibile su Basic, Grow, Advanced e Plus: confronta le funzioni di ogni piano con i tuoi listini.',
      ],
    },
    { type: 'h2', text: 'Che fine fanno estensioni e moduli personalizzati di Magento?' },
    {
      type: 'paragraph',
      text: '**Ogni estensione e ogni modulo personalizzato di Magento finisce in uno di quattro modi su Shopify: una funzione nativa, un’app, codice scritto nello store o dismissione.** Nessuno si trasferisce.',
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
      text: '**Dagli URL di Magento si arriva alla mappa dei redirect esportando la tabella degli URL rewrite, appiattendo i percorsi sui prefissi fissi di Shopify e controllando ogni riga con le pagine che Google conosce.** Magento conserva gli URL generati in una tabella url_rewrite (percorso richiesto, destinazione, tipo di redirect e store), gli stessi dati che vedi nell’admin sotto Marketing, SEO & Search, URL Rewrites ([documentazione Adobe](https://experienceleague.adobe.com/en/docs/commerce-admin/marketing/seo/url-rewrites/url-rewrite)). Esportala per store, poi aggiungi una scansione, Search Console e i backlink, come nella nostra [checklist SEO](/it/blog/migrazione-shopify-seo-checklist).',
    },
    { type: 'paragraph', text: 'Questi sono gli schemi di Magento da aspettarsi e dove di solito vanno a finire:' },
    {
      type: 'list',
      items: [
        'URL prodotto con suffisso. Il [suffisso è configurabile](https://experienceleague.adobe.com/en/docs/commerce-admin/catalog/catalog/catalog-urls) (html, htm o nessuno). /camicia-blu.html va a /products/camicia-blu.',
        'URL prodotto con percorso di categoria. Adobe avverte che includere i percorsi di categoria può far puntare più URL alla stessa pagina. /uomo/camicie/camicia-blu.html e /camicia-blu.html vanno entrambi allo stesso /products/camicia-blu.',
        'URL di categoria. /uomo/camicie.html va a una collezione. Le collezioni Shopify sono piatte, quindi le categorie annidate si decidono una per una: tenerle come collezione, unirle o dismetterle.',
        'Vecchi redirect. Le righe di tipo 301 sono catene in attesa di succedere: punta ognuna all’URL finale.',
        'Percorsi di sistema. /catalog/product/view/id/34 e /catalog/category/view/id/12 hanno una riga se Search Console mostra impressioni.',
        'Codici store nel percorso (/default/, un codice lingua): un insieme di righe per store view.',
        'URL di filtro e ordinamento (colore, prezzo, ordine, numero di pagina). Niente riga per combinazione: il percorso base va alla sua collezione.',
      ],
    },
    {
      type: 'paragraph',
      text: 'La [guida di Google ai cambi di sito](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes) dice di mappare ogni vecchio URL sul nuovo corrispondente, non tutto sulla home, e di tenere i redirect in genere almeno un anno. Importali da CSV negli [URL redirect](https://help.shopify.com/it/manual/online-store/menus-and-links/url-redirect).',
    },
    { type: 'h2', text: 'Shopify o Shopify Plus per uno store Magento o Adobe Commerce?' },
    {
      type: 'paragraph',
      text: '**Per uno store Magento la scelta tra Shopify e Shopify Plus dipende da quattro requisiti, non dal fatturato: profondità del B2B, più vetrine, modifiche al checkout e schede combinate.** Se portano a Plus, il nostro articolo sulla [migrazione a Shopify Plus](/it/blog/migrazione-shopify-plus) copre date del checkout, contratto e costi.',
    },
    {
      type: 'list',
      items: [
        '**B2B:** disponibile su Basic, Grow, Advanced e Plus. Confronta le funzioni con i tuoi listini, non solo la disponibilità.',
        '**Più vetrine:** Markets copre lingua, valuta, prezzi e dominio su un solo store. Cataloghi separati sotto lo stesso brand portano a più store, cioè gli [expansion store di Plus](https://help.shopify.com/en/manual/organization-settings/expansion-stores). Più brand portano a un accordo multi-brand, con un abbonamento Plus per brand.',
        '**Checkout:** se il checkout di Magento ha regole su misura, prova quanto riproducono Shopify Functions prima di scegliere. Shopify dice che la [personalizzazione avanzata del checkout](https://help.shopify.com/it/manual/checkout-settings/checkout-extensibility) è disponibile solo su Plus.',
        '**Prodotti raggruppati come una sola scheda:** l’app Combined Listings è disponibile solo su Plus e sui piani enterprise.',
      ],
    },
    {
      type: 'paragraph',
      text: 'La nostra opinione: scrivi i requisiti prima di chiedere un preventivo e controlla i prezzi dei piani sul sito di Shopify, perché cambiano. Il prezzo dello Sprint è pubblico, da €5.800 IVA esclusa in 4 rate, e dipende dal tuo scaglione di fatturato: vedi la [pagina dello Sprint](/it/sprint-migrazione-shopify).',
    },
    { type: 'h2', text: 'Quanto costa una migrazione da Magento a Shopify?' },
    {
      type: 'paragraph',
      text: '**Una migrazione da Magento a Shopify con lo Shopify Launch Sprint costa €5.800, €8.800 o €12.800 IVA esclusa, in base al fatturato, in 4 rate.** Il prezzo è pubblico e lo conosci prima della prima videochiamata.',
    },
    {
      type: 'table',
      caption: 'Prezzo dello Shopify Launch Sprint per scaglione di fatturato, IVA esclusa',
      headers: ['Fatturato annuo', 'Prezzo dello Sprint', 'Pagamento'],
      rows: [
        ['Sotto i €2M', '€5.800', '4 rate'],
        ['Tra €2M e €20M', '€8.800', '4 rate'],
        ['Oltre i €20M', '€12.800', '4 rate'],
      ],
    },
    {
      type: 'paragraph',
      text: 'Il piano Shopify è una seconda voce e si paga a Shopify. Con fatturazione annuale la [pagina prezzi di Shopify](https://www.shopify.com/it/prezzi) indica Basic a €19, Grow a €56 e Advanced a €289 al mese, e Shopify Plus da €2.100 al mese. I prezzi cambiano da paese a paese: controlla la pagina per il tuo. Le app a pagamento sono una terza voce e le fattura ogni fornitore.',
    },
    {
      type: 'paragraph',
      text: 'Su Magento il lavoro cresce per tre cose:',
    },
    {
      type: 'list',
      items: [
        '**Moduli personalizzati:** ogni modulo senza una funzione nativa o un’app che lo sostituisca è codice da scrivere e testare.',
        '**Store view e website:** ognuno porta i suoi contenuti, le sue righe nella mappa dei redirect e un mercato o uno store da configurare.',
        '**B2B:** gruppi clienti, prezzi a scaglioni e account aziendali si ricostruiscono come aziende e cataloghi in Shopify B2B, e possono farti salire di piano.',
      ],
    },
    {
      type: 'paragraph',
      text: 'Per questo l’inventario viene prima della firma: leggi cosa si ricostruisce, cosa diventa un’app e cosa si dismette, poi decidi tu. Per capire come nasce un preventivo su qualsiasi piattaforma, e le voci che alcuni lasciano fuori, leggi [quanto costa una migrazione a Shopify](/it/blog/costo-migrazione-shopify).',
    },
    { type: 'h2', text: 'Quanto dura una migrazione da Magento a Shopify?' },
    {
      type: 'paragraph',
      text: '**Una migrazione da Magento a Shopify procede in sei passi, e lo Sprint li mette su un calendario fisso: store pronto al giorno 14, go-live tra il giorno 15 e il 30, poi 90 giorni di supporto.** Lo allungano store view, moduli personalizzati, regole B2B, collegamenti al gestionale e qualità dei dati di catalogo.',
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
    { type: 'h2', text: 'Checklist della migrazione da Magento a Shopify' },
    {
      type: 'paragraph',
      text: '**La checklist della migrazione da Magento a Shopify ha otto controlli, in quest’ordine.** Ognuno viene da una sezione qui sopra, quindi puoi usarla come elenco di lavoro per il tuo store.',
    },
    {
      type: 'list',
      items: [
        'Elenca ogni modulo da app/code e composer.json, con il suo compito in una frase.',
        'Dai a ogni modulo uno dei quattro esiti: funzione nativa, app, codice nello store o dismissione.',
        'Esporta i dati delle app che sostituirai, come recensioni e punti fedeltà.',
        'Fai corrispondere ogni tipo di prodotto (configurabile, raggruppato, bundle) e tieni solo gli attributi che il cliente vede o usa per filtrare.',
        'Decidi ogni store view e website: un mercato su un solo store o uno store separato.',
        'Scegli Shopify o Plus dai requisiti su B2B, multi-store e checkout.',
        'Esporta la tabella url_rewrite per store, aggiungi una scansione, le pagine di Search Console e i backlink, e scrivi il CSV dei redirect.',
        'Importa prima i prodotti, poi i clienti, poi gli ordini, esegui gli ordini di prova, controlla il tracking e solo allora sposta il dominio.',
      ],
    },
    { type: 'h2', text: 'Servizio di migrazione da Magento a Shopify: come lo facciamo in 14 giorni' },
    {
      type: 'paragraph',
      text: '**Il nostro servizio di migrazione da Magento a Shopify è lo Shopify Launch Sprint: store pronto al giorno 14, go-live tra il giorno 15 e il 30, poi 90 giorni di supporto, a prezzo pubblico e con 4 garanzie scritte.** L’ordine del lavoro è lo stesso su ogni store: prima l’inventario, le decisioni per iscritto, il nuovo store costruito mentre Magento continua a vendere, una mappa dei redirect testata e una data di go-live fissa. Antonio porta oltre 7 anni di progetti eCommerce e diverse migrazioni con 0 minuti offline.',
    },
    {
      type: 'paragraph',
      text: 'Le quattro garanzie stanno su una pagina del contratto:',
    },
    {
      type: 'list',
      items: [
        'Store pronto al giorno 14 o ti rimborsiamo la prima rata.',
        'Traffico organico sotto la baseline a 90 giorni dal go-live? Lavoriamo gratis finché non torna.',
        'Store offline al lancio per colpa nostra? Una rata la paghiamo noi.',
        'Il checkout converte meno di prima a 90 giorni? Lo ottimizziamo gratis finché non supera.',
      ],
    },
    {
      type: 'paragraph',
      text: 'Due progetti che pubblichiamo per intero mostrano il processo al lavoro. [Nazzi](/it/casi-studio/integratori-nazzi-dtc-shopify), un brand di integratori, è passato da WooCommerce a Shopify il 19 luglio 2026 e, dal go-live al 12 ottobre, ha venduto online il 105% in più degli stessi giorni del 2025, con gli ordini in crescita del 77%; per i suoi URL abbiamo controllato 215 indirizzi archiviati e consegnato il CSV dei redirect 301. [Cumini](/it/casi-studio/cumini-luxury-fashion-ecommerce), una boutique multibrand di lusso, è andata online il 19 maggio 2025 da una piattaforma proprietaria legata al gestionale, e da giugno 2025 a maggio 2026 le vendite online sono state il 67,7% in più dei 12 mesi prima; abbiamo costruito la soluzione che collega Shopify a quel gestionale, lo stesso tipo di dipendenza che spesso ha uno store Magento molto personalizzato.',
    },
    {
      type: 'paragraph',
      text: 'Per il tuo store facciamo prima l’inventario e ti diciamo, prima che tu firmi, quali moduli corrispondono a funzioni native e quali sono vero lavoro di ricostruzione.',
    },
    { type: 'h2', text: 'Domande frequenti' },
    { type: 'h3', text: 'Perderò le posizioni su Google migrando da Magento a Shopify?' },
    {
      type: 'paragraph',
      text: '**Il posizionamento di solito si muove per qualche settimana dopo qualunque migrazione.** Quanto in fretta si assesta lo decide una mappa completa dei redirect 301, costruita dalla tabella degli URL rewrite di Magento più una scansione e Search Console, e testata prima e dopo il go-live. Nello Shopify Launch Sprint la garanzia SEO è scritta nel contratto: "Traffico organico sotto la baseline a 90 giorni dal go-live? Lavoriamo gratis finché non torna."',
    },
    { type: 'h3', text: 'Shopify è meglio di Magento?' },
    {
      type: 'paragraph',
      text: '**Shopify è meglio quando vuoi smettere di pagare patch, hosting e ore di sviluppo.** Magento è meglio quando la logica B2B su misura legata a un gestionale è il tuo vantaggio. Decidi dall’inventario dei moduli, non dal nome della piattaforma.',
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
      text: '**Clienti e ordini storici si importano con CSV, app di migrazione o API di Shopify, prima i prodotti, poi i clienti, poi gli ordini.** Le password non si possono spostare in forma utilizzabile, quindi dopo il lancio i clienti ricevono un’email di attivazione o di reimpostazione.',
    },
    { type: 'h3', text: 'Come si sostituiscono store view e website di Magento su Shopify?' },
    {
      type: 'paragraph',
      text: '**Le store view per lingua e valuta di solito diventano Shopify Markets su un solo store.** I website con cataloghi o prezzi separati sotto lo stesso brand possono richiedere store distinti, ed è qui che entrano Plus e gli expansion store.',
    },
    { type: 'h3', text: 'Esiste un’app per migrare da Magento a Shopify?' },
    {
      type: 'paragraph',
      text: 'Sì. Sullo Shopify App Store ci sono app di migrazione che spostano prodotti, clienti e storico ordini, adatte a un catalogo medio con tipi di prodotto standard. Valida la mappatura prima dell’esecuzione e testa il risultato: prodotti configurabili, attribute set e store view non si traducono uno a uno.',
    },
    { type: 'h3', text: 'Posso migrare da Magento 1 a Shopify?' },
    {
      type: 'paragraph',
      text: '**Sì, con lo stesso metodo di Magento 2: esporti i dati, li pulisci, carichi prodotti, poi clienti, poi ordini, fai l’inventario dei moduli e scrivi la mappa dei redirect.** Adobe ha chiuso il supporto a Magento 1 il 30 giugno 2020.',
    },
    { type: 'h3', text: 'Quanto costa migrare da Magento a Shopify?' },
    {
      type: 'paragraph',
      text: '**Con lo Shopify Launch Sprint la migrazione costa €5.800 sotto i €2M di fatturato, €8.800 tra €2M e €20M e €12.800 oltre i €20M, IVA esclusa, in 4 rate.** Il piano Shopify si paga a parte: Shopify indica Shopify Plus da €2.100 al mese e i piani standard sotto quella cifra. Il lavoro cresce con moduli personalizzati, store view e regole B2B. L’elenco completo delle voci di un preventivo è in [quanto costa una migrazione a Shopify](/it/blog/costo-migrazione-shopify).',
    },
    { type: 'h3', text: 'Quanto dura una migrazione da Magento a Shopify?' },
    {
      type: 'paragraph',
      text: '**Dipende da store view, moduli personalizzati, regole B2B, collegamenti al gestionale e qualità dei dati di catalogo.** Con lo Shopify Launch Sprint lo store è pronto al giorno 14 e il go-live cade tra il giorno 15 e il 30, seguito da 90 giorni di supporto.',
    },
    { type: 'h3', text: 'Si può migrare da Shopify a Magento?' },
    {
      type: 'paragraph',
      text: '**Sì, uno store può migrare da Shopify a Magento, ed è lo stesso lavoro nell’altra direzione: dati, vetrina, integrazioni e redirect.** Conviene quando la logica B2B su misura legata a un gestionale è il tuo vantaggio, o quando i tuoi website hanno cataloghi davvero diversi. Ti riprendi anche patch, hosting e aggiornamenti, che su Shopify non sono a tuo carico. I due casi sono descritti sopra, in "Quando conviene restare su Magento?".',
    },
    { type: 'h2', text: 'Le due parti difficili di lasciare Magento: moduli e URL' },
    {
      type: 'paragraph',
      text: '**Lasciare Magento è un lavoro di traduzione con due parti difficili: la logica nei moduli e gli URL che Google conosce già.** Un inventario le trova entrambe, prima di qualsiasi preventivo.',
    },
    {
      type: 'paragraph',
      text: 'Lo Sprint ha un prezzo pubblico per fatturato: €5.800 sotto i €2M, €8.800 tra €2M e €20M, €12.800 oltre i €20M, IVA esclusa, in 4 rate.',
    },
    {
      type: 'paragraph',
      text: 'Prossimo passo. Mandaci il tuo store: [candidati allo Shopify Launch Sprint](/it/sprint-migrazione-shopify) e rispondiamo entro 48 ore con la tua fascia, il prezzo e la prima data di kickoff disponibile.',
    },
    {
      type: 'paragraph',
      text: 'Lo [Shopify Launch Sprint](/it/sprint-migrazione-shopify) porta il tuo store su Shopify in 14 giorni con il nostro Custom AI System: calendario fisso, prezzo pubblico e 4 garanzie scritte.',
    },
  ],
}

export default article
