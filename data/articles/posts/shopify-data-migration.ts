import type { Article } from '../index'

const article: Article = {
  slug: 'shopify-data-migration',
  slugIt: 'migrazione-dati-shopify',
  title: 'Shopify Data Migration: How to Prove Nothing Was Lost',
  titleIt: 'Migrazione dati Shopify: come dimostrare che non manca niente',
  seoTitle: 'Shopify Data Migration: Prove Nothing Was Lost',
  seoTitleIt: 'Migrazione dati Shopify: la prova che c’è tutto',
  seoDescription:
    'Shopify data migration: what moves by CSV, app or API, the import order and the reconciliation table that proves every record arrived.',
  seoDescriptionIt:
    'Migrazione dati Shopify: cosa passa con CSV, app o API, l’ordine di import e la tabella di riconciliazione che dimostra che è arrivato tutto.',
  excerpt:
    'A Shopify data migration is finished when you can prove it. What moves by CSV, app or API, the import order, passwords and gift cards, and the reconciliation table: source, Shopify, difference.',
  excerptIt:
    'Una migrazione dati Shopify è finita quando la puoi dimostrare. Cosa passa con CSV, app o API, l’ordine di import, password e gift card, e la tabella di riconciliazione: sorgente, Shopify, differenza.',
  ledeEn:
    'Importing is the easy half. The other half is a table with three columns: what you had, what arrived, the difference. Here is how to fill it in.',
  ledeIt:
    'Importare è la metà facile. L’altra metà è una tabella con tre colonne: cosa avevi, cosa è arrivato, la differenza. Ecco come si compila.',
  image: '/images/blog/shopify-data-migration-cover.png',
  imageAlt: 'Cover astratta a puntini colorati per l’articolo sulla migrazione dei dati a Shopify',
  imageAltEn: 'Abstract dotted cover for the article on Shopify data migration',
  articleType: 'BlogPosting',
  date: '2026-11-17',
  datePublishedIso: '2026-11-17T18:00:00+00:00',
  dateModifiedIso: '2026-11-17T18:00:00+00:00',
  wordCount: 2385,
  articleSection: 'Shopify Migration',
  readingTimeMinutes: 10,
  keywordsEn:
    'shopify data migration, magento to shopify data migration, shopify migration app, shopify migration tool, migrate data to shopify, shopify import historical orders, shopify customer passwords migration, shopify data reconciliation',
  keywordsIt:
    'migrazione dati shopify, migrare i dati su shopify, app di migrazione shopify, importare ordini storici shopify, password clienti shopify migrazione, riconciliazione dati shopify',
  faqEn: [
    {
      question: 'Can I migrate customer passwords to Shopify?',
      answer:
        'No. Shopify says "you can’t migrate customer passwords from another online store using a CSV". On a new store customers sign in with their email address and a 6-digit one-time code, with no password, so what they need is the email address they already use.',
    },
    {
      question: 'Does Shopify import historical orders by CSV?',
      answer:
        'No. Products and customers move by CSV. Historical orders, which for Shopify are orders already fulfilled, move with a migration app, the Order API or the Transaction API. Turn off new-order notifications before the import and back on after it.',
    },
    {
      question: 'How many redirects can a Shopify store have?',
      answer:
        'Up to 100,000 URL redirects, and 20,000,000 on Shopify Plus. You import them by CSV from Content > Menus > URL redirects, and Shopify says to set them up before transferring your domain.',
    },
    {
      question: 'Which app should I use for a Shopify data migration?',
      answer:
        'Start from Shopify’s free Store Migration app if you are on Square, WooCommerce, Etsy, Wix, Amazon, eBay, Clover or Lightspeed R/X: it moves product and customer data. From other platforms, or for orders and gift cards, use a third-party migration app or the API. Whichever you choose, check the result with a reconciliation table.',
    },
    {
      question: 'How long does a Shopify data migration take?',
      answer:
        'In the Shopify Launch Sprint the data moves inside the 14 days in which we rebuild the whole store on Shopify, and go-live falls between day 15 and day 30. The Data Migration Report is part of those 14 days, with source and Shopify counts reconciled at 100%.',
    },
    {
      question: 'How much does it cost to migrate to Shopify?',
      answer:
        'Our price is public: the Shopify Launch Sprint costs €5,800 under €2M in revenue, €8,800 between €2M and €20M and €12,800 above €20M, VAT excluded, in 4 installments. The data migration and its report are part of it. The Shopify plan is paid directly to Shopify.',
    },
  ],
  faqIt: [
    {
      question: 'Posso migrare le password dei clienti su Shopify?',
      answer:
        'No. Shopify scrive che le password dei clienti di un altro store non si migrano con un CSV. Su uno store nuovo i clienti entrano con l’indirizzo email e un codice monouso di 6 cifre, senza password: gli serve l’indirizzo email che usano già.',
    },
    {
      question: 'Shopify importa gli ordini storici da CSV?',
      answer:
        'No. Con il CSV passano prodotti e clienti. Gli ordini storici, che per Shopify sono gli ordini già evasi, passano con un’app di migrazione, con la Order API o con la Transaction API. Spegni le notifiche di nuovo ordine prima dell’import e riaccendile dopo.',
    },
    {
      question: 'Quanti redirect può avere uno store Shopify?',
      answer:
        'Fino a 100.000 redirect URL, 20.000.000 su Shopify Plus. Si importano da CSV in Content > Menus > URL redirects, e Shopify dice di impostarli prima di trasferire il dominio.',
    },
    {
      question: 'Quale app usare per una migrazione dati Shopify?',
      answer:
        'Parti dalla Store Migration app di Shopify, gratuita, se sei su Square, WooCommerce, Etsy, Wix, Amazon, eBay, Clover o Lightspeed R/X: sposta i dati di prodotti e clienti. Dalle altre piattaforme, o per ordini e gift card, usa un’app di migrazione di terzi o le API. Qualunque sia la scelta, controlla il risultato con una tabella di riconciliazione.',
    },
    {
      question: 'Quanto dura una migrazione dati Shopify?',
      answer:
        'Nello Shopify Launch Sprint i dati si spostano dentro i 14 giorni in cui ricostruiamo tutto lo store su Shopify, e il go-live cade tra il giorno 15 e il giorno 30. Il Data Migration Report fa parte di quei 14 giorni, con i conteggi di sorgente e Shopify riconciliati al 100%.',
    },
    {
      question: 'Quanto costa migrare a Shopify?',
      answer:
        'Il nostro prezzo è pubblico: lo Shopify Launch Sprint costa €5.800 sotto i €2M di fatturato, €8.800 tra €2M e €20M e €12.800 sopra i €20M, IVA esclusa, in 4 rate. La migrazione dei dati e il suo report ne fanno parte. Il piano Shopify si paga direttamente a Shopify.',
    },
  ],
  content: [
    {
      type: 'paragraph',
      text: 'A Shopify data migration is finished when you can prove it, and the import bar reaching the end proves very little. Here you get how to import, with Shopify’s own limits for CSV files, apps and APIs, and then the step after: how to show, row by row, that everything arrived.',
    },
    {
      type: 'paragraph',
      text: 'We are noprob agency. Our [Shopify migration service](/shopify-migration-sprint), the Shopify Launch Sprint, ships with a Data Migration Report: for each type of data, the count on the old platform, the count on Shopify and the difference. Below is how that table works and how to build your own. Every Shopify fact here comes from Shopify’s pages, linked and read on 17 November 2026. The method for the whole move is in our [Shopify migration guide](/shopify-migration).',
    },
    { type: 'h2', text: 'What is a Shopify data migration?' },
    {
      type: 'paragraph',
      text: '**A Shopify data migration is the transfer of your store’s records (products, customers, orders, gift cards, content and URLs) from the old platform into Shopify.** It is one part of a migration, next to the storefront, the apps and the tracking, and it is the part you can check with numbers. A design is judged by eye. A customer list either matches or it does not.',
    },
    {
      type: 'paragraph',
      text: 'I work conservatively: a pure migration, from A to B, with no drastic changes. I take what already works and move it. With data, that means migration week is a bad time to rename every product or redraw the catalog. Change one thing at a time and a difference in the count has one possible cause. Change five and you are guessing.',
    },
    { type: 'h2', text: 'Which data moves to Shopify, and which does not?' },
    {
      type: 'paragraph',
      text: '**Products and customers move by CSV; orders, gift cards, blog posts and pages need an app or the API; customer passwords do not move at all.** That is the split in Shopify’s page on [migrating your data](https://help.shopify.com/en/manual/migrating-to-shopify/migrate-data), which says of the CSV route that "some data can’t be migrated this way".',
    },
    {
      type: 'table',
      caption: 'How each type of data reaches Shopify, from Shopify’s documentation read on 17 November 2026',
      headers: ['Data', 'How it moves', 'What to know'],
      rows: [
        ['Products', 'Product CSV or a migration app', 'One file holds up to 15 MB'],
        ['Customers', 'Customer CSV or a migration app', 'File of 15 MB or smaller, passwords not included'],
        [
          'Historical orders',
          'Migration app, Order API or Transaction API',
          'No CSV route. For Shopify these are orders already fulfilled',
        ],
        ['Gift cards, vouchers and store credit', 'Migration app or GiftCard API', 'They go in right before launch'],
        ['Blog posts', 'Migration app, Blog API or Blog Article API', 'Counted like any other record'],
        ['Pages', 'Migration app or Page API', 'Policies "can likely be copied and pasted"'],
        ['Customer passwords', 'They do not move', 'Customers sign in again on the new store'],
        ['Old URLs', 'Redirect CSV', 'Up to 100,000 redirects, 20,000,000 on Plus'],
      ],
    },
    {
      type: 'paragraph',
      text: 'The row people find late is the third one. Orders have no CSV import, so a store that wants its history plans for an app or for API work from the first day, and budgets the time for it.',
    },
    { type: 'h2', text: 'In what order do you import the data?' },
    {
      type: 'paragraph',
      text: '**Products first, then customers, then historical orders: Shopify’s words are "Import your products first, then your customers, and then any historical orders".** The rest can go in any order. The reason is simple: an order points to a customer and to products, and it can only point to records that already exist. Three more steps sit around those, and the short guides skip them.',
    },
    {
      type: 'list',
      items: [
        'Products. First, with their variants and images, because everything else refers to them.',
        'Customers. Second. Look at the email column before anything else: it is how a customer is found again.',
        'Notifications. Off before the orders go in. Shopify warns that whoever receives new-order notifications "will receive a new order email for each imported order". Turn them back on when the import is over.',
        'Historical orders. Third, by app or API.',
        'Redirects. Before the domain moves: Shopify says to "set up URL redirects before transferring your domain".',
        'Gift cards. Last, right before launch. Shopify’s [Plus launch checklist](https://help.shopify.com/en/manual/intro-to-shopify/plus-launch-checklist) puts them right before launch, because once imported they cannot be edited or deleted. And on the old store, balances keep changing until the day you switch.',
      ],
    },
    {
      type: 'paragraph',
      text: 'Count after each step, and never only at the end. If products are short, you want to know before thousands of orders are attached to them.',
    },
    { type: 'h2', text: 'CSV, app or API: which Shopify migration tool fits your store?' },
    {
      type: 'paragraph',
      text: '**The right Shopify migration tool depends on two things: the platform you are leaving and the data you need to bring.** Catalog size comes third. Here are the routes, each with the limit Shopify publishes for it.',
    },
    { type: 'h3', text: 'CSV files' },
    {
      type: 'paragraph',
      text: '**CSV is the route for products and customers, with a limit of 15 MB per file.** Shopify states it for the [product import](https://help.shopify.com/en/manual/products/import-export/import-products) and for the [customer import](https://help.shopify.com/en/manual/customers/import-export-customers). The work happens in the spreadsheet before the upload: each column of the old export mapped to a column of Shopify’s template. It is patient work, and it is where most of the differences in the final count are born.',
    },
    { type: 'h3', text: 'The Shopify migration app' },
    {
      type: 'paragraph',
      text: '**Shopify’s own Shopify migration app is called [Store Migration](https://apps.shopify.com/store-migration): it is free and it moves "product and customer data".** It reads a CSV or connects to your account on Square, WooCommerce, Etsy, Wix, Amazon, eBay, Clover and Lightspeed R/X (Vend). That sentence holds two boundaries: a list of platforms and two types of data. For orders, gift cards and content you look at third-party migration apps. Shopify names one itself: its Plus launch checklist loads B2B data "using Matrixify, a third-party app".',
    },
    {
      type: 'paragraph',
      text: 'An app saves the typing. A green tick at the end of an import is still a claim you have to check.',
    },
    { type: 'h3', text: 'Magento to Shopify data migration' },
    {
      type: 'paragraph',
      text: '**Magento is not on the Store Migration app’s list, so a Magento to Shopify data migration runs on third-party apps, prepared CSV files or the API.** Prepared means the Magento export is reshaped into Shopify’s template before the upload. Attributes that have no native field in Shopify go into [metafields](https://help.shopify.com/en/manual/custom-data/metafields), which extend the data model of products, customers and orders. Product types and store views are in our [Magento to Shopify guide](/blog/magento-to-shopify-migration). Coming from WooCommerce, the object-by-object map is in [WooCommerce to Shopify](/blog/woocommerce-to-shopify-migration).',
    },
    { type: 'h3', text: 'The API and bulk operations' },
    {
      type: 'paragraph',
      text: '**Large catalogs and anything custom go through the Admin API, where [bulk operations](https://shopify.dev/docs/api/usage/bulk-operations/imports) import records in bulk and asynchronously.** You hand Shopify a file of records and collect the result when it is ready. This is developer work: someone writes the script, runs it on a test store first and reads every error it returns.',
    },
    { type: 'h2', text: 'How do you prove nothing was lost? The reconciliation table' },
    {
      type: 'paragraph',
      text: '**You prove it with a reconciliation table: one row per type of data, the count at the source, the count on Shopify and the difference between the two.** In the Shopify Launch Sprint this table is a deliverable with a name, the Data Migration Report: "Products, variants, images, customers, order history, discount codes, reviews. Every count from the old platform compared with Shopify and reconciled at 100%." Here is its shape, with gift cards and redirects added so that it covers the whole move.',
    },
    {
      type: 'table',
      caption:
        'Example of a reconciliation table. The cells hold your own counts; the expected difference is zero, or a number with a written reason',
      headers: ['Data', 'Source', 'Shopify', 'Difference', 'How to check it'],
      rows: [
        ['Products', 'Count in the export', 'Count in the admin', '0 expected', 'Matched by SKU or handle, so a missing product has a name'],
        ['Variants', 'Count', 'Count', '0 expected', 'Counted product by product: a total can match while one product is short'],
        ['Images', 'Count', 'Count', '0 expected', 'Counted product by product, then a sample opened by eye'],
        ['Customers', 'Count', 'Count', '0 expected', 'Matched by email. A record left out on purpose is listed with its reason'],
        [
          'Order history',
          'Count and total value for the agreed period',
          'Count and total value',
          '0 expected',
          'Compared month by month, so a gap points to a date range',
        ],
        ['Discount codes', 'Count of the codes you keep', 'Count', '0 expected', 'Codes dropped on purpose are listed apart'],
        ['Reviews', 'Count', 'Count', '0 expected', 'Counted product by product'],
        ['Gift cards', 'Count and open balance', 'Count and open balance', '0 expected', 'Compared on the day of the import, right before launch'],
        ['Redirects', 'Old URLs in the map', 'Redirects created', '0 expected', 'An automated test requests every old URL and expects a page that answers 200'],
      ],
    },
    {
      type: 'paragraph',
      text: 'Three rules make the table worth the time.',
    },
    {
      type: 'list',
      items: [
        'Count at the source first. Fill in the Source column before the import starts, from the old platform’s own export. A number written afterwards tends to agree with whatever arrived.',
        'A difference needs a name. Test orders, dead discount codes, a product retired years ago: each is a row with a reason, decided by you. A difference nobody can explain keeps the work open.',
        'Count twice. Once after the first full import and once right before launch, because the old store keeps selling in between.',
      ],
    },
    {
      type: 'paragraph',
      text: 'I can foresee most of a migration. The rest comes up along the way. In this table you see it in the Difference column, on a spreadsheet, days before launch, while there is still time to fix it calmly.',
    },
    {
      type: 'paragraph',
      text: 'URLs get the same treatment in a document of their own, the 1:1 Redirect Map: "Every URL that received traffic in the last 12 months has its 301 redirect to a page that answers 200. An automated test checks every one before go-live and again after." A Shopify store holds up to 100,000 redirects, 20,000,000 on Plus, imported by CSV from Content > Menus > URL redirects, as [Shopify’s redirect page](https://help.shopify.com/en/manual/online-store/menus-and-links/url-redirect) explains. How to build the map is in [301 redirects on Shopify](/blog/shopify-301-redirects), and the rest of the search work is in the [migration SEO checklist](/blog/shopify-migration-seo-checklist).',
    },
    { type: 'h2', text: 'What happens to customer accounts, passwords and gift cards?' },
    {
      type: 'paragraph',
      text: '**Customer records move, passwords do not, and gift cards move last.** Shopify is explicit on passwords in its [customer import page](https://help.shopify.com/en/manual/customers/import-export-customers): "you can’t migrate customer passwords from another online store using a CSV", and "you need to invite your customers to create new passwords so that they can register their accounts".',
    },
    {
      type: 'paragraph',
      text: 'On a new store the question is smaller than it sounds. Shopify’s current [customer accounts](https://help.shopify.com/en/manual/customers/customer-accounts) have no password: the customer signs in with an email address and a 6-digit one-time code. The older kind, legacy customer accounts, was [deprecated on 26 February 2026](https://shopify.dev/changelog/posts/legacy-customer-accounts-are-deprecated) and is "no longer available to new stores and existing stores not using it"; the final shutdown date "will be announced later in 2026". So plan the launch around the code. What customers need from you is one clear email on launch day: same address as before, a code in your inbox.',
    },
    {
      type: 'paragraph',
      text: 'Gift cards are your customers’ money, so read that row like a bank statement. They go in through a migration app or the GiftCard API, right before launch, because an imported gift card cannot be edited or deleted. Reconcile count and open balance on the same day.',
    },
    { type: 'h2', text: 'How much order history should you bring to Shopify?' },
    {
      type: 'paragraph',
      text: '**At least the orders inside your return window, and Shopify’s Plus launch checklist recommends more: "import orders from the past 2-5 years".** The minimum serves customer service: someone writes about a return and the order is there. The longer range serves marketing: who bought twice, who bought once two years ago, who is worth writing to.',
    },
    {
      type: 'paragraph',
      text: 'On [Integratori DTC Nazzi](/use-cases/integratori-nazzi-dtc-shopify), moved from WooCommerce and live on Shopify since 19 July 2026, we imported order and customer history from 2023. From go-live to 12 October 2026 returning customers were 2.25 times those of the same days of 2025.',
    },
    {
      type: 'paragraph',
      text: 'Our rule: decide the range by who will use it. Ask customer service how far back they look up an order, and ask whoever runs email which segments they build. Bring that, reconcile it, and keep the rest in an export on file.',
    },
    { type: 'h2', text: 'Frequently asked questions' },
    { type: 'h3', text: 'Can I migrate customer passwords to Shopify?' },
    {
      type: 'paragraph',
      text: 'No. Shopify says "you can’t migrate customer passwords from another online store using a CSV". On a new store customers sign in with their email address and a 6-digit one-time code, with no password, so what they need is the email address they already use.',
    },
    { type: 'h3', text: 'Does Shopify import historical orders by CSV?' },
    {
      type: 'paragraph',
      text: 'No. Products and customers move by CSV. Historical orders, which for Shopify are orders already fulfilled, move with a migration app, the Order API or the Transaction API. Turn off new-order notifications before the import and back on after it.',
    },
    { type: 'h3', text: 'How many redirects can a Shopify store have?' },
    {
      type: 'paragraph',
      text: '**Up to 100,000 URL redirects, and 20,000,000 on Shopify Plus.** You import them by CSV from Content > Menus > URL redirects, and Shopify says to set them up before transferring your domain.',
    },
    { type: 'h3', text: 'Which app should I use for a Shopify data migration?' },
    {
      type: 'paragraph',
      text: '**Start from Shopify’s free Store Migration app if you are on Square, WooCommerce, Etsy, Wix, Amazon, eBay, Clover or Lightspeed R/X: it moves product and customer data.** From other platforms, or for orders and gift cards, use a third-party migration app or the API. Whichever you choose, check the result with a reconciliation table.',
    },
    { type: 'h3', text: 'How long does a Shopify data migration take?' },
    {
      type: 'paragraph',
      text: 'In the Shopify Launch Sprint the data moves inside the 14 days in which we rebuild the whole store on Shopify, and go-live falls between day 15 and day 30. The Data Migration Report is part of those 14 days, with source and Shopify counts reconciled at 100%.',
    },
    { type: 'h3', text: 'How much does it cost to migrate to Shopify?' },
    {
      type: 'paragraph',
      text: '**Our price is public: the Shopify Launch Sprint costs €5,800 under €2M in revenue, €8,800 between €2M and €20M and €12,800 above €20M, VAT excluded, in 4 installments.** The data migration and its report are part of it. The Shopify plan is paid directly to Shopify. To read other quotes, see [how much a Shopify migration costs](/blog/shopify-migration-cost).',
    },
    {
      type: 'paragraph',
      text: 'Already migrating, or about to sign? Send us your store: [apply to the Shopify Launch Sprint](/shopify-migration-sprint) and we reply within 48 hours with your tier, the price and the first available kickoff date.',
    },
    {
      type: 'paragraph',
      text: 'The [Shopify Launch Sprint](/shopify-migration-sprint) moves your store to Shopify in 14 days with our Custom AI System: a fixed calendar, a public price and 4 written guarantees.',
    },
  ],
  contentIt: [
    {
      type: 'paragraph',
      text: 'Una migrazione dati Shopify è finita quando la puoi dimostrare, e la barra dell’import arrivata in fondo dimostra poco. Qui trovi come importare, con i limiti scritti da Shopify per file CSV, app e API, e poi il passo dopo: come far vedere, riga per riga, che è arrivato tutto.',
    },
    {
      type: 'paragraph',
      text: 'Siamo noprob agency. Il nostro [servizio di migrazione a Shopify](/it/sprint-migrazione-shopify), lo Shopify Launch Sprint, consegna un Data Migration Report: per ogni tipo di dato, il conteggio sulla piattaforma vecchia, il conteggio su Shopify e la differenza. Sotto trovi come funziona quella tabella e come costruirti la tua. Tutto ciò che qui riguarda Shopify viene dalle sue pagine, linkate e lette il 17 novembre 2026. Il metodo per l’intero passaggio è nella nostra [guida alla migrazione a Shopify](/it/migrazione-shopify).',
    },
    { type: 'h2', text: 'Cos’è una migrazione dati Shopify?' },
    {
      type: 'paragraph',
      text: '**Una migrazione dati Shopify è il trasferimento dei dati del tuo store (prodotti, clienti, ordini, gift card, contenuti e URL) dalla piattaforma vecchia a Shopify.** È una parte della migrazione, accanto alla vetrina, alle app e al tracking, ed è la parte che puoi controllare con i numeri. Una grafica la giudichi a occhio. Una lista clienti torna oppure non torna.',
    },
    {
      type: 'paragraph',
      text: 'Qui agisco in modo conservativo: una migrazione pura, da A a B, senza cambi drastici. Prendo quello che già funziona e lo sposto. Sui dati vuol dire che il passaggio è la settimana sbagliata per rinominare tutti i prodotti o ridisegnare il catalogo. Se cambi una cosa alla volta, una differenza nel conteggio ha una sola causa possibile. Se ne cambi cinque, tiri a indovinare.',
    },
    { type: 'h2', text: 'Quali dati si spostano su Shopify, e quali no?' },
    {
      type: 'paragraph',
      text: '**Prodotti e clienti passano con il CSV; ordini, gift card, articoli del blog e pagine richiedono un’app o le API; le password dei clienti non passano.** È la divisione che fa Shopify nella pagina sulla [migrazione dei dati](https://help.shopify.com/en/manual/migrating-to-shopify/migrate-data), dove del CSV scrive "some data can’t be migrated this way": alcuni dati per quella strada non passano.',
    },
    {
      type: 'table',
      caption: 'Come arriva su Shopify ogni tipo di dato, dalla documentazione di Shopify letta il 17 novembre 2026',
      headers: ['Dato', 'Come si sposta', 'Cosa sapere'],
      rows: [
        ['Prodotti', 'CSV prodotti o app di migrazione', 'Un file arriva al massimo a 15 MB'],
        ['Clienti', 'CSV clienti o app di migrazione', 'File fino a 15 MB, password escluse'],
        [
          'Ordini storici',
          'App di migrazione, Order API o Transaction API',
          'Il CSV qui non c’è. Per Shopify sono gli ordini già evasi',
        ],
        ['Gift card, buoni e crediti', 'App di migrazione o GiftCard API', 'Entrano subito prima del lancio'],
        ['Articoli del blog', 'App di migrazione, Blog API o Blog Article API', 'Si contano come ogni altro dato'],
        ['Pagine', 'App di migrazione o Page API', 'Le policy di solito si copiano e incollano'],
        ['Password dei clienti', 'Non si spostano', 'I clienti rientrano sul nuovo store'],
        ['Vecchi URL', 'CSV dei redirect', 'Fino a 100.000 redirect, 20.000.000 su Plus'],
      ],
    },
    {
      type: 'paragraph',
      text: 'La riga che si scopre tardi è la terza. Gli ordini non hanno un import da CSV: se vuoi lo storico, metti in conto un’app o un lavoro sulle API dal primo giorno, con il tempo che serve.',
    },
    { type: 'h2', text: 'In che ordine si importano i dati?' },
    {
      type: 'paragraph',
      text: '**Prima i prodotti, poi i clienti, poi gli ordini storici: Shopify scrive "Import your products first, then your customers, and then any historical orders".** Il resto va in qualsiasi ordine. Il motivo è semplice: un ordine punta a un cliente e a dei prodotti, e può puntare solo a ciò che esiste già. Altri tre passi stanno intorno a quei tre, e le guide brevi li saltano.',
    },
    {
      type: 'list',
      items: [
        'Prodotti. Per primi, con varianti e immagini, perché tutto il resto fa riferimento a loro.',
        'Clienti. Per secondi. Guarda la colonna dell’email prima di ogni altra: è da lì che un cliente si ritrova.',
        'Notifiche. Spente prima di caricare gli ordini. Shopify avvisa che chi riceve le notifiche di nuovo ordine "will receive a new order email for each imported order", cioè un’email per ogni ordine importato. Le riaccendi a import finito.',
        'Ordini storici. Per terzi, con un’app o con le API.',
        'Redirect. Prima di spostare il dominio: Shopify dice "set up URL redirects before transferring your domain".',
        'Gift card. Per ultime, subito prima del lancio. La [checklist di lancio Plus](https://help.shopify.com/it/manual/intro-to-shopify/plus-launch-checklist) di Shopify le mette subito prima del lancio, perché una volta importate non si modificano né si eliminano. E sul vecchio store i saldi continuano a cambiare fino al giorno del cambio.',
      ],
    },
    {
      type: 'paragraph',
      text: 'Conta dopo ogni passo, mai solo alla fine. Se mancano dei prodotti, vuoi saperlo prima di averci agganciato migliaia di ordini.',
    },
    { type: 'h2', text: 'CSV, app o API: con cosa migrare i dati su Shopify?' },
    {
      type: 'paragraph',
      text: '**Lo strumento giusto per migrare i dati su Shopify dipende da due cose: la piattaforma da cui parti e i dati che devi portare.** La grandezza del catalogo viene terza. Ecco le strade, ognuna con il limite che Shopify pubblica.',
    },
    { type: 'h3', text: 'I file CSV' },
    {
      type: 'paragraph',
      text: '**Il CSV è la strada per prodotti e clienti, con un limite di 15 MB per file.** Shopify lo scrive per l’[import dei prodotti](https://help.shopify.com/en/manual/products/import-export/import-products) e per l’[import dei clienti](https://help.shopify.com/en/manual/customers/import-export-customers). Il lavoro si fa sul foglio prima del caricamento: ogni colonna del vecchio export abbinata a una colonna del modello di Shopify. È un lavoro di pazienza, ed è lì che nascono quasi tutte le differenze del conteggio finale.',
    },
    { type: 'h3', text: 'L’app di migrazione Shopify' },
    {
      type: 'paragraph',
      text: '**L’app di migrazione Shopify fatta da Shopify si chiama [Store Migration](https://apps.shopify.com/store-migration): è gratuita e sposta "product and customer data", i dati di prodotti e clienti.** Legge un CSV oppure si collega al tuo account su Square, WooCommerce, Etsy, Wix, Amazon, eBay, Clover e Lightspeed R/X (Vend). Quella frase ha due confini: un elenco di piattaforme e due tipi di dato. Per ordini, gift card e contenuti si guarda alle app di migrazione di terzi. Una la nomina Shopify stessa: nella checklist di lancio Plus i dati B2B si caricano "using Matrixify, a third-party app".',
    },
    {
      type: 'paragraph',
      text: 'Un’app ti risparmia la battitura. La spunta verde a fine import resta un’affermazione da controllare.',
    },
    { type: 'h3', text: 'Da Magento a Shopify' },
    {
      type: 'paragraph',
      text: '**Magento non è nell’elenco della Store Migration app, quindi i dati da Magento a Shopify passano con app di terzi, CSV preparati o API.** Preparati vuol dire che l’export di Magento viene riscritto sul modello di Shopify prima del caricamento. Gli attributi che su Shopify non hanno un campo nativo vanno nei [metafield](https://help.shopify.com/en/manual/custom-data/metafields), che estendono il modello dati di prodotti, clienti e ordini. Tipi di prodotto e store view sono nella guida [da Magento a Shopify](/it/blog/migrazione-magento-shopify). Se parti da WooCommerce, la mappa oggetto per oggetto è in [da WooCommerce a Shopify](/it/blog/migrazione-woocommerce-shopify).',
    },
    { type: 'h3', text: 'Le API e le bulk operations' },
    {
      type: 'paragraph',
      text: '**I cataloghi grandi e tutto ciò che è su misura passano dalla Admin API, dove le [bulk operations](https://shopify.dev/docs/api/usage/bulk-operations/imports) importano i dati in blocco e in modo asincrono.** Consegni a Shopify un file di record e ritiri il risultato quando è pronto. È un lavoro da sviluppatore: qualcuno scrive lo script, lo prova prima su uno store di test e legge ogni errore che torna indietro.',
    },
    { type: 'h2', text: 'Come dimostri che non manca niente? La tabella di riconciliazione' },
    {
      type: 'paragraph',
      text: '**Lo dimostri con una tabella di riconciliazione: una riga per tipo di dato, il conteggio alla sorgente, il conteggio su Shopify e la differenza tra i due.** Nello Shopify Launch Sprint questa tabella è un consegnabile con un nome, il Data Migration Report: "Prodotti, varianti, immagini, clienti, storico ordini, codici sconto, recensioni. Ogni conteggio della piattaforma vecchia confrontato con Shopify e riconciliato al 100%." Ecco com’è fatta, con gift card e redirect aggiunti per coprire tutto il passaggio.',
    },
    {
      type: 'table',
      caption:
        'Esempio di tabella di riconciliazione. Nelle celle vanno i tuoi conteggi; la differenza attesa è zero, oppure un numero con il motivo scritto accanto',
      headers: ['Dato', 'Sorgente', 'Shopify', 'Differenza', 'Come si controlla'],
      rows: [
        ['Prodotti', 'Conteggio nell’export', 'Conteggio nell’admin', '0 atteso', 'Abbinati per SKU o handle, così un prodotto che manca ha un nome'],
        ['Varianti', 'Conteggio', 'Conteggio', '0 atteso', 'Contate prodotto per prodotto: il totale può tornare mentre a un prodotto ne manca una'],
        ['Immagini', 'Conteggio', 'Conteggio', '0 atteso', 'Contate prodotto per prodotto, poi un campione aperto a occhio'],
        ['Clienti', 'Conteggio', 'Conteggio', '0 atteso', 'Abbinati per email. Chi resta fuori per scelta è in elenco con il motivo'],
        [
          'Storico ordini',
          'Conteggio e valore totale del periodo concordato',
          'Conteggio e valore totale',
          '0 atteso',
          'Confronto mese per mese, così un buco indica un intervallo di date',
        ],
        ['Codici sconto', 'Conteggio dei codici che tieni', 'Conteggio', '0 atteso', 'I codici lasciati per scelta sono elencati a parte'],
        ['Recensioni', 'Conteggio', 'Conteggio', '0 atteso', 'Contate prodotto per prodotto'],
        ['Gift card', 'Conteggio e saldo aperto', 'Conteggio e saldo aperto', '0 atteso', 'Confronto nel giorno dell’import, subito prima del lancio'],
        ['Redirect', 'Vecchi URL nella mappa', 'Redirect creati', '0 atteso', 'Un test automatico richiede ogni vecchio URL e si aspetta una pagina che risponde 200'],
      ],
    },
    {
      type: 'paragraph',
      text: 'Tre regole perché la tabella valga il tempo che costa.',
    },
    {
      type: 'list',
      items: [
        'Conta prima alla sorgente. Compila la colonna Sorgente prima che parta l’import, dall’export della piattaforma vecchia. Un numero scritto dopo tende a dare ragione a quello che è arrivato.',
        'Ogni differenza ha un nome. Ordini di prova, codici sconto morti, un prodotto ritirato da anni: ognuno è una riga con un motivo, deciso da te. Una differenza che nessuno sa spiegare tiene il lavoro aperto.',
        'Conta due volte. Dopo il primo import completo e di nuovo subito prima del lancio, perché nel frattempo il vecchio store continua a vendere.',
      ],
    },
    {
      type: 'paragraph',
      text: 'Gran parte di una migrazione la prevedo. Il resto esce lungo la strada. Nella tabella lo vedi nella colonna Differenza, su un foglio, giorni prima del lancio, quando c’è ancora il tempo di sistemarlo con calma.',
    },
    {
      type: 'paragraph',
      text: 'Gli URL hanno lo stesso trattamento in un documento a parte, la Redirect Map 1:1: "Ogni URL che ha ricevuto traffico negli ultimi 12 mesi ha il suo redirect 301 verso una pagina che risponde 200. Un test automatico li controlla tutti prima del go-live e di nuovo dopo." Uno store Shopify tiene fino a 100.000 redirect, 20.000.000 su Plus, importati da CSV in Content > Menus > URL redirects, come spiega la [pagina di Shopify sui redirect](https://help.shopify.com/en/manual/online-store/menus-and-links/url-redirect). Come si costruisce la mappa è in [redirect 301 su Shopify](/it/blog/redirect-301-shopify), e il resto del lavoro sulla ricerca è nella [checklist SEO della migrazione](/it/blog/migrazione-shopify-seo-checklist).',
    },
    { type: 'h2', text: 'Che fine fanno account, password e gift card dei clienti?' },
    {
      type: 'paragraph',
      text: '**Le anagrafiche dei clienti passano, le password no, e le gift card passano per ultime.** Sulle password Shopify è esplicita nella pagina sull’[import dei clienti](https://help.shopify.com/en/manual/customers/import-export-customers): "you can’t migrate customer passwords from another online store using a CSV", e i clienti vanno invitati a creare una nuova password per registrare l’account.',
    },
    {
      type: 'paragraph',
      text: 'Su uno store nuovo la questione è più piccola di come suona. Gli [account cliente](https://help.shopify.com/en/manual/customers/customer-accounts) attuali di Shopify non hanno password: il cliente entra con l’indirizzo email e un codice monouso di 6 cifre. Il tipo precedente, gli account cliente legacy, è stato [deprecato il 26 febbraio 2026](https://shopify.dev/changelog/posts/legacy-customer-accounts-are-deprecated) e non è più disponibile per gli store nuovi né per quelli esistenti che non lo usano; la data di chiusura definitiva "will be announced later in 2026". Quindi organizza il lancio intorno al codice. Ai clienti serve da te un’email chiara il giorno del lancio: stesso indirizzo di prima, un codice nella posta.',
    },
    {
      type: 'paragraph',
      text: 'Le gift card sono soldi dei tuoi clienti: leggi quella riga come un estratto conto. Entrano con un’app di migrazione o con la GiftCard API, subito prima del lancio, perché una gift card importata non si modifica né si elimina. Conteggio e saldo aperto si riconciliano lo stesso giorno.',
    },
    { type: 'h2', text: 'Quanto storico ordini conviene portare su Shopify?' },
    {
      type: 'paragraph',
      text: '**Almeno gli ordini dentro la finestra di reso, e la checklist di lancio Plus di Shopify consiglia di più: "import orders from the past 2-5 years", gli ultimi 2-5 anni.** Il minimo serve all’assistenza: qualcuno scrive per un reso e l’ordine c’è. L’intervallo lungo serve al marketing: chi ha comprato due volte, chi una volta due anni fa, a chi vale la pena scrivere.',
    },
    {
      type: 'paragraph',
      text: 'Per [Integratori DTC Nazzi](/it/casi-studio/integratori-nazzi-dtc-shopify), passato da WooCommerce e online su Shopify dal 19 luglio 2026, abbiamo importato lo storico di ordini e clienti dal 2023. Dal go-live al 12 ottobre 2026 i clienti di ritorno sono stati 2,25 volte quelli degli stessi giorni del 2025.',
    },
    {
      type: 'paragraph',
      text: 'La nostra regola: decidi l’intervallo in base a chi lo userà. Chiedi all’assistenza fino a quanto indietro cerca un ordine, e a chi segue le email quali segmenti costruisce. Porta quello, riconcilialo, e tieni il resto in un export in archivio.',
    },
    { type: 'h2', text: 'Domande frequenti' },
    { type: 'h3', text: 'Posso migrare le password dei clienti su Shopify?' },
    {
      type: 'paragraph',
      text: 'No. Shopify scrive che le password dei clienti di un altro store non si migrano con un CSV. Su uno store nuovo i clienti entrano con l’indirizzo email e un codice monouso di 6 cifre, senza password: gli serve l’indirizzo email che usano già.',
    },
    { type: 'h3', text: 'Shopify importa gli ordini storici da CSV?' },
    {
      type: 'paragraph',
      text: 'No. Con il CSV passano prodotti e clienti. Gli ordini storici, che per Shopify sono gli ordini già evasi, passano con un’app di migrazione, con la Order API o con la Transaction API. Spegni le notifiche di nuovo ordine prima dell’import e riaccendile dopo.',
    },
    { type: 'h3', text: 'Quanti redirect può avere uno store Shopify?' },
    {
      type: 'paragraph',
      text: '**Fino a 100.000 redirect URL, 20.000.000 su Shopify Plus.** Si importano da CSV in Content > Menus > URL redirects, e Shopify dice di impostarli prima di trasferire il dominio.',
    },
    { type: 'h3', text: 'Quale app usare per una migrazione dati Shopify?' },
    {
      type: 'paragraph',
      text: '**Parti dalla Store Migration app di Shopify, gratuita, se sei su Square, WooCommerce, Etsy, Wix, Amazon, eBay, Clover o Lightspeed R/X: sposta i dati di prodotti e clienti.** Dalle altre piattaforme, o per ordini e gift card, usa un’app di migrazione di terzi o le API. Qualunque sia la scelta, controlla il risultato con una tabella di riconciliazione.',
    },
    { type: 'h3', text: 'Quanto dura una migrazione dati Shopify?' },
    {
      type: 'paragraph',
      text: 'Nello Shopify Launch Sprint i dati si spostano dentro i 14 giorni in cui ricostruiamo tutto lo store su Shopify, e il go-live cade tra il giorno 15 e il giorno 30. Il Data Migration Report fa parte di quei 14 giorni, con i conteggi di sorgente e Shopify riconciliati al 100%.',
    },
    { type: 'h3', text: 'Quanto costa migrare a Shopify?' },
    {
      type: 'paragraph',
      text: '**Il nostro prezzo è pubblico: lo Shopify Launch Sprint costa €5.800 sotto i €2M di fatturato, €8.800 tra €2M e €20M e €12.800 sopra i €20M, IVA esclusa, in 4 rate.** La migrazione dei dati e il suo report ne fanno parte. Il piano Shopify si paga direttamente a Shopify. Per leggere gli altri preventivi c’è l’articolo sul [costo della migrazione a Shopify](/it/blog/costo-migrazione-shopify).',
    },
    {
      type: 'paragraph',
      text: 'Stai già migrando, o stai per firmare? Mandaci il tuo store: [candidati allo Shopify Launch Sprint](/it/sprint-migrazione-shopify) e rispondiamo entro 48 ore con la tua fascia, il prezzo e la prima data di kickoff disponibile.',
    },
    {
      type: 'paragraph',
      text: 'Lo [Shopify Launch Sprint](/it/sprint-migrazione-shopify) porta il tuo store su Shopify in 14 giorni con il nostro Custom AI System: calendario fisso, prezzo pubblico e 4 garanzie scritte.',
    },
  ],
}

export default article
