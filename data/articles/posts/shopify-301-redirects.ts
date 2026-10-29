import type { Article } from '../index'

const article: Article = {
  slug: 'shopify-301-redirects',
  slugIt: 'redirect-301-shopify',
  title: 'Shopify 301 Redirects: The Five-Step Map and a Free CSV Template',
  titleIt: 'Redirect 301 su Shopify: la mappa in cinque passi e il template CSV',
  seoTitle: 'Shopify 301 Redirects: 5-Step Map and CSV',
  seoTitleIt: 'Redirect 301 Shopify: mappa in 5 passi e CSV',
  seoDescription:
    'Shopify 301 redirects for a migration: the five-step map, Shopify’s limits, the checks after go-live and a free CSV template in the import format.',
  seoDescriptionIt:
    'Redirect 301 su Shopify per una migrazione: la mappa in cinque passi, i limiti di Shopify, i controlli dopo il go-live e un template CSV gratuito.',
  excerpt:
    'How to build and check the Shopify 301 redirect map for a migration: five steps, what Shopify cannot redirect, where an AI agent helps, and a free CSV template in the import format.',
  excerptIt:
    'Come costruire e controllare la mappa dei redirect 301 su Shopify in una migrazione: cinque passi, cosa Shopify non può reindirizzare, dove aiuta un agente AI e un template CSV gratuito nel formato di importazione.',
  ledeEn:
    'Shopify 301 redirects are a CSV with two columns, the old path and the new one. The file takes minutes; the map behind it is the work. Five steps, Shopify’s limits and a free template.',
  ledeIt:
    'I redirect 301 su Shopify sono un CSV con due colonne, il vecchio percorso e il nuovo. Il file si prepara in minuti; la mappa dietro è il lavoro. Cinque passi, i limiti di Shopify e un template gratuito.',
  image: '/images/blog/shopify-301-redirects-cover.png',
  imageAlt: 'Copertina astratta, sfondo verde salvia, con una griglia sfalsata di puntini',
  imageAltEn: 'Abstract cover, sage green background with an offset dot grid',
  articleType: 'BlogPosting',
  date: '2026-10-29',
  datePublishedIso: '2026-10-29T09:00:00+00:00',
  dateModifiedIso: '2026-10-29T09:00:00+00:00',
  wordCount: 2575,
  articleSection: 'Shopify guides',
  readingTimeMinutes: 11,
  keywordsEn:
    'shopify 301 redirects, shopify redirect csv, shopify url redirects import, shopify redirect map, bulk redirects shopify, 301 redirects shopify migration, shopify redirect template',
  keywordsIt:
    'redirect 301 shopify, mappa redirect shopify, importare redirect shopify csv, redirect migrazione shopify, template redirect shopify, redirect in blocco shopify',
  faqEn: [
    {
      question: 'What does a 301 redirect do on Shopify?',
      answer:
        'A 301 redirect is a permanent redirect: it sends visitors and search engines from an old URL to a new one and says the move is for good. Google recommends permanent server-side redirects when URLs change, with one destination for each old URL. In Shopify you create them under Content > Menus > View URL Redirects.',
    },
    {
      question: 'How do I import 301 redirects into Shopify with a CSV?',
      answer:
        'Prepare a CSV with the headers Redirect from and Redirect to and one redirect per row. Then open View URL Redirects, click Import, add the file, upload it, review the import and click Import redirects. Our free template is already in this format.',
    },
    {
      question: 'Why are my Shopify redirects not working?',
      answer:
        'The most common cause is that the old URL still loads a valid page: Shopify only redirects from broken URLs. Other causes are a reserved path such as /cart or /shop, a fixed path such as /collections, a query string in the source URL, or a browser that cached an earlier 301. Test in a private window and check the row for these cases.',
    },
    {
      question: 'Can Shopify redirect /collections, /products or /shop?',
      answer:
        'No. Shopify’s help page says you cannot redirect the fixed paths /products, /collections and /collections/all, nor URLs that begin with prefixes such as /apps, /cart, /orders, /services and /shop. A WooCommerce shop page at /shop is the usual case: decide how to handle it before launch.',
    },
    {
      question: 'How long should I keep 301 redirects?',
      answer:
        'Google’s guide says to keep them for as long as possible, generally at least one year. From a visitor’s point of view you can keep them indefinitely, so my advice is never to delete a redirect that still receives clicks.',
    },
    {
      question: 'Can an AI agent build the redirect map?',
      answer:
        'It can propose most of the rows, especially the ambiguous ones, but it should not approve them. Rules and scripts handle the clean patterns, the agent suggests targets from a closed list of real URLs, and a separate review plus a human sample decide what is imported.',
    },
  ],
  faqIt: [
    {
      question: 'A cosa serve un redirect 301 su Shopify?',
      answer:
        'Un redirect 301 è un reindirizzamento permanente: manda visitatori e motori di ricerca da un vecchio URL a uno nuovo e dice che lo spostamento è definitivo. Google consiglia redirect permanenti lato server quando gli URL cambiano, con una destinazione per ogni vecchio URL. In Shopify si creano in Content > Menus > View URL Redirects.',
    },
    {
      question: 'Come importo i redirect 301 su Shopify con un CSV?',
      answer:
        'Prepara un CSV con le intestazioni Redirect from e Redirect to e un redirect per riga. Poi apri View URL Redirects, clicca Import, aggiungi il file, caricalo, controlla l’importazione e clicca Import redirects. Il nostro template gratuito è già in questo formato.',
    },
    {
      question: 'Perché i miei redirect su Shopify non funzionano?',
      answer:
        'La causa più comune è che il vecchio URL carica ancora una pagina valida: Shopify reindirizza solo da URL rotti. Le altre sono un percorso riservato come /cart o /shop, un percorso fisso come /collections, una query string nell’URL di partenza o un browser che ha in cache un 301 precedente. Prova in una finestra privata e controlla la riga per questi casi.',
    },
    {
      question: 'Shopify può reindirizzare /collections, /products o /shop?',
      answer:
        'No. La pagina di aiuto di Shopify dice che non si possono reindirizzare i percorsi fissi /products, /collections e /collections/all, né gli URL che iniziano con prefissi come /apps, /cart, /orders, /services e /shop. La pagina negozio di WooCommerce su /shop è il caso tipico: decidi come gestirla prima del lancio.',
    },
    {
      question: 'Per quanto tempo vanno tenuti i redirect 301?',
      answer:
        'La guida di Google dice di tenerli il più a lungo possibile, in genere almeno un anno. Dal punto di vista del visitatore si possono tenere per sempre, quindi il mio consiglio è di non cancellare mai un redirect che riceve ancora clic.',
    },
    {
      question: 'Un agente AI può costruire la mappa dei redirect?',
      answer:
        'Può proporre la maggior parte delle righe, soprattutto quelle ambigue, ma non deve approvarle. Regole e script gestiscono gli schemi puliti, l’agente suggerisce le destinazioni da un elenco chiuso di URL veri, e una revisione separata più un campione controllato da una persona decidono cosa si importa.',
    },
  ],
  content: [
    {
      type: 'paragraph',
      text: '**Shopify 301 redirects send visitors and Google from an old URL to its new address, and on a migration you load hundreds of them at once from a CSV with two columns: Redirect from and Redirect to.** The file takes minutes to import. The map behind it is where the work is. This guide gives you the five steps we use to build that map, the limits Shopify enforces, the checks to run after go-live and a [free CSV template](/downloads/shopify-301-redirect-map-template.csv) in Shopify’s import format.',
    },
    {
      type: 'paragraph',
      text: 'We are noprob agency. In the [Shopify Launch Sprint](/shopify-migration-sprint) the 1:1 redirect map is tested automatically before and after go-live, so this is a process we run, not a theory. Our [migration SEO checklist](/blog/shopify-migration-seo-checklist) says what to check across a whole move; this article is the process for producing the one document that checklist depends on. For the full path of a migration, read the [Shopify migration guide](/shopify-migration).',
    },
    {
      type: 'h2',
      text: 'What does a Shopify 301 redirect do, and what does the CSV look like?',
    },
    {
      type: 'paragraph',
      text: '**A 301 is a permanent redirect: it tells browsers and search engines that a page has moved for good and where it lives now.** Google’s guide on [site moves with URL changes](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes) recommends permanent server-side redirects and asks you to decide a destination for every old URL. Shopify’s own help page mentions 301s when it warns that browsers and search engines cache them, which matters when you test.',
    },
    {
      type: 'paragraph',
      text: '**The Shopify import file is a CSV with two headers, Redirect from and Redirect to, and one redirect per row.** Shopify’s sample file, linked from its [URL redirects help page](https://help.shopify.com/en/manual/online-store/menus-and-links/url-redirect), has exactly those two headers and one example row that sends /example_product.php to /products/example-product. The examples on the page use paths that start with a slash, and the help page says to use a relative URL for your primary domain and a full URL only for external destinations.',
    },
    {
      type: 'paragraph',
      text: 'The [template](/downloads/shopify-301-redirect-map-template.csv) has 14 example rows with typical WooCommerce, Magento and PrestaShop patterns: products, categories, pages, a blog post, a brand and a parameter URL. Replace the examples with your rows and keep the two headers untouched. Everything else you need to track lives in a separate working sheet, and you export only two columns from it:',
    },
    {
      type: 'list',
      items: [
        '**Old URL** and **new URL**: the two columns that become the import file.',
        '**Page type:** product, category, page, post, brand, other.',
        '**Source:** where you found the URL (sitemap, Search Console, crawl, backlinks, archive).',
        '**Traffic or links:** why the row matters, so you know where to look twice.',
        '**Decision:** keep, merge or retire.',
        '**Checked:** the date and who checked it.',
      ],
    },
    { type: 'h2', text: 'How do you build the redirect map in five steps?' },
    {
      type: 'paragraph',
      text: '**You build the map in five steps: collect every old URL, match each one to a new URL, decide the cases with no equivalent, import the file, and test after go-live.** The order matters because each step feeds the next, and the first one decides how complete the result can be.',
    },
    {
      type: 'h3',
      text: 'Step 1: Collect every old URL, not only the ones in the sitemap',
    },
    {
      type: 'paragraph',
      text: 'The sitemap shows what the old store wanted Google to see; Google remembers more. So you combine sources, remove duplicates and keep the source in a column.',
    },
    {
      type: 'list',
      items: [
        'All the old sitemaps: products, categories, pages and posts.',
        'Search Console: the performance export for every URL that still gets impressions or clicks, and the Pages report for what Google has indexed.',
        'A crawl of the old site, which also shows internal links and the redirects that already exist.',
        'A backlinks export: the pages other sites link to are the ones you cannot afford to lose.',
        'Archived copies of the old site, for URLs that disappeared before the migration but still collect links.',
        'The landing pages in your analytics over the past year.',
      ],
    },
    {
      type: 'paragraph',
      text: 'My rule: collect while the old store is still online. When the domain stays the same, once the new store is live there is nothing left to crawl.',
    },
    {
      type: 'h3',
      text: 'Step 2: Match each old URL to a new one, by page type',
    },
    {
      type: 'paragraph',
      text: '**Match by page type, because every type has its own rule: products to products, categories to collections, pages to pages and posts to blog articles.** Do the patterns in a spreadsheet and the exceptions by hand. These are the patterns we meet most often, always to be checked against your own settings, because every platform lets you change them:',
    },
    {
      type: 'list',
      items: [
        '**WooCommerce.** /product/blue-cotton-shirt goes to /products/blue-cotton-shirt and /product-category/shirts to /collections/shirts. Those two bases, product and product-category, are the defaults in [WooCommerce’s source code](https://github.com/woocommerce/woocommerce/blob/trunk/plugins/woocommerce/includes/wc-core-functions.php), but a store can change them. Posts live at the root of the domain (or under a date) and go to /blogs/news/. More in [WooCommerce to Shopify](/blog/woocommerce-to-shopify-migration).',
        '**Magento.** /blue-cotton-shirt.html goes to /products/blue-cotton-shirt, and so does the same product with a category path such as /men/shirts/blue-cotton-shirt.html. Categories like /men/shirts.html go to a collection. The [suffix is configurable](https://experienceleague.adobe.com/en/docs/commerce-admin/catalog/catalog/catalog-urls), and system paths like /catalog/product/view/id/34 get a row only if Search Console shows impressions. More in [Magento to Shopify](/blog/magento-to-shopify-migration).',
        '**PrestaShop.** The default product route is {category:/}{id}-{rewrite}.html, so /shirts/7-blue-cotton-shirt.html goes to /products/blue-cotton-shirt; categories (/12-shirts) go to collections, CMS pages (/content/4-delivery) to /pages/, brands (/brand/3-acme) to a vendor collection. The routes are in [PrestaShop’s Dispatcher.php](https://github.com/PrestaShop/PrestaShop/blob/8.2.0/classes/Dispatcher.php). The ID in the address is a reliable key for the join. More in [PrestaShop to Shopify](/blog/prestashop-to-shopify-migration).',
      ],
    },
    {
      type: 'paragraph',
      text: 'Keep the slug identical wherever you can: then the match is mechanical. When the slug changes (renamed products, translated handles), join on product ID or SKU from the two catalog exports instead of guessing from the name. Several old URLs can share one target: variants and category-path versions of the same product all land on one /products/ page.',
    },
    {
      type: 'paragraph',
      text: 'Point every row at the final URL. If /a already redirected to /b on the old platform, /a goes straight to the new /b. Google asks for no chains, and where they cannot be avoided, no more than three hops and always fewer than five. On a new store you can aim for one.',
    },
    { type: 'h3', text: 'Step 3: Decide the cases with no equivalent' },
    {
      type: 'paragraph',
      text: '**When an old page has no twin on the new store, send it to the closest page that serves the same visitor, and if no such page exists, let it return 404.** Google warns that sending many old URLs to one irrelevant destination, such as the home page, can confuse users and may be treated as a soft 404. These are the calls I recommend:',
    },
    {
      type: 'list',
      items: [
        '**Discontinued product:** the collection it lived in, or a replacement only if it solves the same need.',
        '**Two categories merged:** the surviving collection.',
        '**Tag, filter, pagination, author and attachment pages:** the nearest collection if they have links or traffic, otherwise no row.',
        '**Old campaign pages:** the page that carries the offer today, or no row.',
        '**Pages you retire on purpose:** no row. A 404 is an honest answer, and writing "retire" in the Decision column keeps it a decision instead of an omission.',
      ],
    },
    { type: 'h3', text: 'Step 4: Import the file in Shopify' },
    {
      type: 'paragraph',
      text: '**In Shopify you import redirects under Content > Menus > View URL Redirects: click Import, add the CSV file, upload it, review the import and click Import redirects.** Do it before the domain moves: [Shopify’s guide for migrating from WooCommerce](https://help.shopify.com/en/manual/migrating-to-shopify/migrating-from-woocommerce) recommends setting redirects up before you transfer the domain. Shopify allows up to 100,000 redirects, or 20,000,000 on Plus.',
    },
    {
      type: 'paragraph',
      text: 'Before you click, run these four checks on the file:',
    },
    {
      type: 'list',
      items: [
        '**No collisions.** No Redirect from path loads a live page on the new store, because Shopify ignores it.',
        '**Every row is complete.** Both values are present, the source starts with a slash and has no domain, and no source appears twice.',
        '**No reserved paths.** No source falls in the list in the next section.',
        '**Every target is real.** Each Redirect to is a page that answers 200 today, not another redirect and not a typo.',
      ],
    },
    {
      type: 'paragraph',
      text: 'For large or repeated loads there is also the Admin GraphQL API: the [UrlRedirectImport object](https://shopify.dev/docs/api/admin-graphql/latest/objects/UrlRedirectImport) reports how many rows were created, updated and failed, which gives you a count to compare with your file. After the import, export the redirects as a CSV from the same screen: that file is your record of what went live.',
    },
    { type: 'h3', text: 'Step 5: Check after go-live' },
    {
      type: 'paragraph',
      text: '**After go-live you test every old URL, not a sample, and then watch Search Console for what the map missed.** Google’s guide suggests the URL Inspection tool for single URLs and scripts or command-line tools for large sets. Four checks:',
    },
    {
      type: 'list',
      items: [
        '**Run the whole list.** Every old URL in the map should answer with one 301 and then 200 on the new page. Write the rows that fail back into the sheet. Test the version with and without the trailing slash too: WooCommerce addresses end with one.',
        '**Open the top pages by hand.** The URLs with the most traffic and backlinks, in a private window, so a cached redirect does not fool you.',
        '**Watch Search Console.** Submit the new sitemap and follow the Pages report: new "not found" URLs with impressions are rows you missed.',
        '**Come back.** Feed the new 404s into the map after two weeks and again at 90 days, and keep the redirects: Google says generally at least a year.',
      ],
    },
    { type: 'h2', text: 'What can’t Shopify redirect?' },
    {
      type: 'paragraph',
      text: '**Shopify redirects only from URLs that return a 404, and a handful of paths and patterns are off limits, so decide those rows before launch.** All of these come from [Shopify’s URL redirects help page](https://help.shopify.com/en/manual/online-store/menus-and-links/url-redirect):',
    },
    {
      type: 'list',
      items: [
        '**A live page wins.** The page says you can redirect only from broken URLs. If the old path now loads a valid page, the redirect does nothing: that is the collision check in step 4.',
        '**Fixed paths:** /products, /collections and /collections/all cannot be redirected.',
        '**Reserved prefixes:** URLs beginning with /apps, /application, /cart, /carts, /orders, /services and /shop. This hits WooCommerce hard: its cart and its shop page sit on those paths. The page words /shop differently in two places, so test your row. If it does not take, treat it as a case with no equivalent: point your menus and the links you control to /collections/all.',
        '**Collection tag filters:** URLs like /collections/name/tag cannot be redirected, even if no product has the tag.',
        '**.html addresses:** a .html URL cannot be redirected to the same address without .html. It does not stop /blue-cotton-shirt.html going to /products/blue-cotton-shirt.',
        '**Query strings:** Shopify says they might not work as expected. Treat parameter URLs such as /index.php?controller=category&id_category=12 as at risk: our template has one so you can test how your store behaves, and if it fails you drop that row.',
        '**Language and market subfolders:** the page says redirects apply to all of them and, in the limitations, says they do not. Test one redirect in each subfolder before you trust it.',
        '**Cache:** browsers and search engines cache 301s, so a wrong redirect does not vanish when you delete it. Test before the domain moves.',
      ],
    },
    {
      type: 'h2',
      text: 'How does an AI agent speed up the redirect map, and why does it need a separate review?',
    },
    {
      type: 'paragraph',
      text: '**An AI agent speeds up the matching in step 2, the slow middle of the map, but it should propose rows and never approve them: a script and a separate review decide what is imported.** At noprob agency we work every day with agents built on Claude Code (development with AI agents is one of the superpowers of our Custom AI System), and this is the split I recommend for redirect maps.',
    },
    {
      type: 'list',
      items: [
        '**Rules first, no AI.** A script handles the clean patterns by slug. It covers most of the file and it is deterministic.',
        '**The agent takes what is left.** For each remaining URL it receives the old page (title, H1, breadcrumb) and a closed list of valid new URLs from the catalog export. It must pick from that list, give a one-line reason or answer "no equivalent". A closed list is what stops it from inventing addresses.',
        '**Scripts check the output.** Every target exists and answers 200, no chains, no duplicate sources, no reserved paths.',
        '**A separate reviewer.** A second pass, in a fresh context, sees only the old page and the proposed target, with written criteria: same intent, same product and not just a similar one, a collection and never the home page. It does not see the first agent’s reasoning. Rows it flags go to a person.',
        '**A person signs.** Every URL with traffic or backlinks gets human eyes, plus a random slice of the rest.',
      ],
    },
    {
      type: 'paragraph',
      text: 'Why separate? Whoever wrote a row tends to repeat its own logic when it reads the row again, and that holds for a model as for a person. Independence is what finds errors. The same method, applied to the whole migration, is in [Migrating to Shopify with AI agents](/blog/shopify-migration-ai-agents). If you want to build agents like these for your own team, that is the work of the [AI Accelerator](/ai-accelerator).',
    },
    { type: 'h2', text: 'What did this look like on a real migration?' },
    {
      type: 'paragraph',
      text: 'On Nazzi, a WooCommerce store, we checked 215 archived URLs against the new store after go-live and delivered the CSV of 301 redirects, ready to import in Shopify ([case study](/use-cases/integratori-nazzi-dtc-shopify)). The lesson is the one in step 5: the map is not finished when the file is imported. Testing the old addresses one by one is a separate job from building the map, and it is what turns a list of redirects into a result you can trust.',
    },
    { type: 'h2', text: 'Frequently asked questions' },
    { type: 'h3', text: 'What does a 301 redirect do on Shopify?' },
    {
      type: 'paragraph',
      text: 'A 301 redirect is a permanent redirect: it sends visitors and search engines from an old URL to a new one and says the move is for good. Google recommends permanent server-side redirects when URLs change, with one destination for each old URL. In Shopify you create them under Content > Menus > View URL Redirects.',
    },
    {
      type: 'h3',
      text: 'How do I import 301 redirects into Shopify with a CSV?',
    },
    {
      type: 'paragraph',
      text: 'Prepare a CSV with the headers Redirect from and Redirect to and one redirect per row. Then open View URL Redirects, click Import, add the file, upload it, review the import and click Import redirects. Our [free template](/downloads/shopify-301-redirect-map-template.csv) is already in this format.',
    },
    { type: 'h3', text: 'Why are my Shopify redirects not working?' },
    {
      type: 'paragraph',
      text: 'The most common cause is that the old URL still loads a valid page: Shopify only redirects from broken URLs. Other causes are a reserved path such as /cart or /shop, a fixed path such as /collections, a query string in the source URL, or a browser that cached an earlier 301. Test in a private window and check the row for these cases.',
    },
    {
      type: 'h3',
      text: 'Can Shopify redirect /collections, /products or /shop?',
    },
    {
      type: 'paragraph',
      text: 'No. Shopify’s help page says you cannot redirect the fixed paths /products, /collections and /collections/all, nor URLs that begin with prefixes such as /apps, /cart, /orders, /services and /shop. A WooCommerce shop page at /shop is the usual case: decide how to handle it before launch.',
    },
    { type: 'h3', text: 'How long should I keep 301 redirects?' },
    {
      type: 'paragraph',
      text: 'Google’s guide says to keep them for as long as possible, generally at least one year. From a visitor’s point of view you can keep them indefinitely, so my advice is never to delete a redirect that still receives clicks.',
    },
    { type: 'h3', text: 'Can an AI agent build the redirect map?' },
    {
      type: 'paragraph',
      text: 'It can propose most of the rows, especially the ambiguous ones, but it should not approve them. Rules and scripts handle the clean patterns, the agent suggests targets from a closed list of real URLs, and a separate review plus a human sample decide what is imported.',
    },
    {
      type: 'paragraph',
      text: 'The [Shopify Launch Sprint](/shopify-migration-sprint) moves your store to Shopify in 14 days with our Custom AI System: a fixed calendar, a public price and 4 written guarantees.',
    },
  ],
  contentIt: [
    {
      type: 'paragraph',
      text: '**I redirect 301 su Shopify mandano visitatori e Google da un vecchio URL al nuovo indirizzo, e in una migrazione se ne caricano centinaia in una volta da un CSV con due colonne: Redirect from e Redirect to.** Il file si importa in minuti. Il lavoro vero è la mappa che c’è dietro. Questa guida ti dà i cinque passi che usiamo per costruirla, i limiti che Shopify impone, i controlli da fare dopo il go-live e un [template CSV gratuito](/downloads/mappa-redirect-301-shopify-template.csv) nel formato di importazione di Shopify.',
    },
    {
      type: 'paragraph',
      text: 'Siamo noprob agency. Nello [Shopify Launch Sprint](/it/sprint-migrazione-shopify) la mappa dei redirect 1:1 viene collaudata in automatico prima e dopo il go-live, quindi questo è un processo che eseguiamo, non una teoria. La nostra [checklist SEO per la migrazione](/it/blog/migrazione-shopify-seo-checklist) dice cosa controllare in tutto il passaggio; questo articolo è il processo per produrre l’unico documento da cui quella checklist dipende. Per il percorso completo di una migrazione leggi la [guida alla migrazione a Shopify](/it/migrazione-shopify).',
    },
    {
      type: 'h2',
      text: 'Cosa fa un redirect 301 su Shopify e che aspetto ha il CSV?',
    },
    {
      type: 'paragraph',
      text: '**Un 301 è un redirect permanente: dice a browser e motori di ricerca che una pagina si è spostata per sempre e dove si trova ora.** La guida di Google sugli [spostamenti di sito con cambio di URL](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes) consiglia redirect permanenti lato server e chiede di decidere una destinazione per ogni vecchio URL. La pagina di aiuto di Shopify nomina i 301 quando avverte che browser e motori di ricerca li tengono in cache, cosa che conta quando collaudi.',
    },
    {
      type: 'paragraph',
      text: '**Il file di importazione di Shopify è un CSV con due intestazioni, Redirect from e Redirect to, e un redirect per riga.** Il file di esempio di Shopify, collegato dalla sua [pagina di aiuto sui redirect URL](https://help.shopify.com/en/manual/online-store/menus-and-links/url-redirect), ha esattamente quelle due intestazioni e una riga d’esempio che manda /example_product.php su /products/example-product. Gli esempi della pagina usano percorsi che iniziano con la barra, e la pagina dice di usare un URL relativo per il dominio principale e un URL completo solo per le destinazioni esterne.',
    },
    {
      type: 'paragraph',
      text: 'Il [template](/downloads/mappa-redirect-301-shopify-template.csv) ha 14 righe d’esempio con gli schemi tipici di WooCommerce, Magento e PrestaShop: prodotti, categorie, pagine, un articolo del blog, un marchio e un URL con parametri. Sostituisci gli esempi con le tue righe e lascia intatte le due intestazioni. Tutto il resto che devi tracciare sta in un foglio di lavoro a parte, da cui esporti solo due colonne:',
    },
    {
      type: 'list',
      items: [
        '**Vecchio URL** e **nuovo URL**: le due colonne che diventano il file di importazione.',
        '**Tipo di pagina:** prodotto, categoria, pagina, articolo, marchio, altro.',
        '**Fonte:** dove hai trovato l’URL (sitemap, Search Console, crawl, backlink, archivio).',
        '**Traffico o link:** perché la riga conta, così sai dove guardare due volte.',
        '**Decisione:** tieni, unisci o ritira.',
        '**Controllato:** la data e chi ha controllato.',
      ],
    },
    {
      type: 'h2',
      text: 'Come si costruisce la mappa dei redirect in cinque passi?',
    },
    {
      type: 'paragraph',
      text: '**La mappa si costruisce in cinque passi: raccogli tutti i vecchi URL, abbina ciascuno a un nuovo URL, decidi i casi senza equivalente, importa il file e collauda dopo il go-live.** L’ordine conta perché ogni passo alimenta il successivo, e il primo decide quanto può essere completo il risultato.',
    },
    {
      type: 'h3',
      text: 'Passo 1: raccogli tutti i vecchi URL, non solo quelli della sitemap',
    },
    {
      type: 'paragraph',
      text: 'La sitemap mostra ciò che il vecchio store voleva far vedere a Google; Google ricorda di più. Quindi si combinano le fonti, si tolgono i doppioni e si tiene la fonte in una colonna.',
    },
    {
      type: 'list',
      items: [
        'Tutte le vecchie sitemap: prodotti, categorie, pagine e articoli.',
        'Search Console: l’esportazione delle prestazioni per ogni URL che ha ancora impressioni o clic, e il report Pagine per ciò che Google ha indicizzato.',
        'Un crawl del vecchio sito, che mostra anche i link interni e i redirect già presenti.',
        'Un’esportazione dei backlink: le pagine a cui altri siti linkano sono quelle che non puoi permetterti di perdere.',
        'Copie archiviate del vecchio sito, per gli URL spariti prima della migrazione ma che raccolgono ancora link.',
        'Le pagine di destinazione nelle analytics dell’ultimo anno.',
      ],
    },
    {
      type: 'paragraph',
      text: 'La mia regola: raccogli finché il vecchio store è ancora online. Quando il dominio resta lo stesso, a store nuovo online non c’è più niente da scansionare.',
    },
    {
      type: 'h3',
      text: 'Passo 2: abbina ogni vecchio URL a uno nuovo, per tipo di pagina',
    },
    {
      type: 'paragraph',
      text: '**Abbina per tipo di pagina, perché ogni tipo ha la sua regola: prodotti ai prodotti, categorie alle collezioni, pagine alle pagine e articoli agli articoli del blog.** Gli schemi si fanno in un foglio di calcolo, le eccezioni a mano. Questi sono gli schemi che incontriamo più spesso, da verificare sempre sulle tue impostazioni, perché ogni piattaforma permette di cambiarli:',
    },
    {
      type: 'list',
      items: [
        '**WooCommerce.** /product/camicia-blu-cotone va su /products/camicia-blu-cotone e /product-category/camicie su /collections/camicie. Quelle due basi, product e product-category, sono i valori predefiniti nel [codice sorgente di WooCommerce](https://github.com/woocommerce/woocommerce/blob/trunk/plugins/woocommerce/includes/wc-core-functions.php), ma uno store può cambiarle. Gli articoli stanno alla radice del dominio (o sotto una data) e vanno su /blogs/news/. Di più in [da WooCommerce a Shopify](/it/blog/migrazione-woocommerce-shopify).',
        '**Magento.** /camicia-blu-cotone.html va su /products/camicia-blu-cotone, e così lo stesso prodotto con il percorso di categoria come /uomo/camicie/camicia-blu-cotone-cotone.html. Le categorie come /uomo/camicie.html vanno su una collezione. Il [suffisso è configurabile](https://experienceleague.adobe.com/en/docs/commerce-admin/catalog/catalog/catalog-urls), e i percorsi di sistema come /catalog/product/view/id/34 hanno una riga solo se Search Console mostra impressioni. Di più in [da Magento a Shopify](/it/blog/migrazione-magento-shopify).',
        '**PrestaShop.** Lo schema predefinito del prodotto è {category:/}{id}-{rewrite}.html, quindi /camicie/7-camicia-blu-cotone.html va su /products/camicia-blu-cotone; le categorie (/12-camicie) vanno alle collezioni, le pagine CMS (/content/4-spedizioni) a /pages/, i marchi (/brand/3-acme) a una collezione per fornitore. Gli schemi sono nel [Dispatcher.php di PrestaShop](https://github.com/PrestaShop/PrestaShop/blob/8.2.0/classes/Dispatcher.php). L’ID nell’indirizzo è una chiave affidabile per il collegamento. Di più in [da PrestaShop a Shopify](/it/blog/migrazione-prestashop-shopify).',
      ],
    },
    {
      type: 'paragraph',
      text: 'Tieni lo slug identico dove puoi: così l’abbinamento è meccanico. Quando lo slug cambia (prodotti rinominati, handle tradotti), collega con ID prodotto o SKU dalle due esportazioni di catalogo invece di indovinare dal nome. Più vecchi URL possono avere la stessa destinazione: le varianti e le versioni con percorso di categoria dello stesso prodotto finiscono tutte su un’unica pagina /products/.',
    },
    {
      type: 'paragraph',
      text: 'Punta ogni riga all’URL finale. Se /a già reindirizzava a /b sulla vecchia piattaforma, /a va diretto al nuovo /b. Google chiede di evitare le catene e, dove non si può, di non superare tre passaggi e di restare sempre sotto i cinque. Su uno store nuovo puoi puntare a uno.',
    },
    { type: 'h3', text: 'Passo 3: decidi i casi senza equivalente' },
    {
      type: 'paragraph',
      text: '**Quando una vecchia pagina non ha un gemello sul nuovo store, mandala alla pagina più vicina che serve lo stesso visitatore, e se non esiste lascia che risponda 404.** Google avverte che mandare molti vecchi URL a un’unica destinazione non pertinente, come la home page, può confondere gli utenti e può essere trattato come soft 404. Queste sono le scelte che ti consiglio:',
    },
    {
      type: 'list',
      items: [
        '**Prodotto fuori produzione:** la collezione in cui stava, o un sostituto solo se risponde allo stesso bisogno.',
        '**Due categorie unite:** la collezione che resta.',
        '**Pagine di tag, filtri, paginazione, autore e allegati:** la collezione più vicina se hanno link o traffico, altrimenti nessuna riga.',
        '**Vecchie pagine di campagna:** la pagina che oggi porta l’offerta, oppure nessuna riga.',
        '**Pagine che ritiri apposta:** nessuna riga. Un 404 è una risposta onesta, e scrivere "ritira" nella colonna Decisione lo tiene una decisione e non una dimenticanza.',
      ],
    },
    { type: 'h3', text: 'Passo 4: importa il file in Shopify' },
    {
      type: 'paragraph',
      text: '**In Shopify i redirect si importano in Content > Menus > View URL Redirects: clicca Import, aggiungi il file CSV, caricalo, controlla l’importazione e clicca Import redirects.** (I nomi sono quelli dell’admin in inglese.) Fallo prima che il dominio si sposti: la [guida di Shopify per migrare da WooCommerce](https://help.shopify.com/en/manual/migrating-to-shopify/migrating-from-woocommerce) consiglia di impostare i redirect prima di trasferire il dominio. Shopify ammette fino a 100.000 redirect, o 20.000.000 su Plus.',
    },
    {
      type: 'paragraph',
      text: 'Prima di cliccare, fai questi quattro controlli sul file:',
    },
    {
      type: 'list',
      items: [
        '**Nessuna collisione.** Nessun percorso Redirect from carica una pagina viva sul nuovo store, perché Shopify lo ignora.',
        '**Ogni riga è completa.** Ci sono entrambi i valori, l’origine inizia con la barra e non ha dominio, e nessuna origine compare due volte.',
        '**Nessun percorso riservato.** Nessuna origine rientra nell’elenco della sezione successiva.',
        '**Ogni destinazione è vera.** Ogni Redirect to è una pagina che oggi risponde 200, non un altro redirect e non un refuso.',
      ],
    },
    {
      type: 'paragraph',
      text: 'Per carichi grandi o ripetuti c’è anche l’API Admin GraphQL: l’[oggetto UrlRedirectImport](https://shopify.dev/docs/api/admin-graphql/latest/objects/UrlRedirectImport) riporta quante righe sono state create, aggiornate e fallite, e ti dà un numero da confrontare con il tuo file. Dopo l’importazione, esporta i redirect come CSV dalla stessa schermata: quel file è la traccia di ciò che è andato online.',
    },
    { type: 'h3', text: 'Passo 5: controlla dopo il go-live' },
    {
      type: 'paragraph',
      text: '**Dopo il go-live collaudi ogni vecchio URL, non un campione, e poi guardi Search Console per ciò che la mappa ha mancato.** La guida di Google suggerisce lo strumento Controllo URL per i singoli URL e script o strumenti da riga di comando per gli elenchi grandi. Quattro controlli:',
    },
    {
      type: 'list',
      items: [
        '**Fai girare tutto l’elenco.** Ogni vecchio URL della mappa deve rispondere con un solo 301 e poi 200 sulla nuova pagina. Riscrivi nel foglio le righe che falliscono. Prova anche la versione con e senza barra finale: gli indirizzi di WooCommerce ne hanno una.',
        '**Apri a mano le pagine principali.** Gli URL con più traffico e backlink, in una finestra privata, così un redirect in cache non ti inganna.',
        '**Guarda Search Console.** Invia la nuova sitemap e segui il report Pagine: i nuovi URL "non trovato" con impressioni sono righe che hai mancato.',
        '**Torna.** Porta i nuovi 404 nella mappa dopo due settimane e di nuovo a 90 giorni, e tieni i redirect: Google dice in genere almeno un anno.',
      ],
    },
    { type: 'h2', text: 'Cosa non può reindirizzare Shopify?' },
    {
      type: 'paragraph',
      text: '**Shopify reindirizza solo da URL che restituiscono 404, e una manciata di percorsi e schemi è vietata, quindi decidi quelle righe prima del lancio.** Tutto questo viene dalla [pagina di aiuto di Shopify sui redirect URL](https://help.shopify.com/en/manual/online-store/menus-and-links/url-redirect):',
    },
    {
      type: 'list',
      items: [
        '**Una pagina viva vince.** La pagina dice che si può reindirizzare solo da URL rotti. Se il vecchio percorso ora carica una pagina valida, il redirect non fa nulla: è il controllo delle collisioni del passo 4.',
        '**Percorsi fissi:** /products, /collections e /collections/all non si possono reindirizzare.',
        '**Prefissi riservati:** gli URL che iniziano con /apps, /application, /cart, /carts, /orders, /services e /shop. Questo colpisce forte WooCommerce: il carrello e la pagina negozio stanno su quei percorsi. La pagina descrive /shop in modo diverso in due punti, quindi collauda la tua riga. Se non funziona, trattala come un caso senza equivalente: punta i menu e i link che controlli a /collections/all.',
        '**Filtri per tag delle collezioni:** gli URL come /collections/nome/tag non si possono reindirizzare, anche se nessun prodotto ha quel tag.',
        '**Indirizzi .html:** un URL .html non si può reindirizzare allo stesso indirizzo senza .html. Non impedisce a /camicia-blu-cotone.html di andare su /products/camicia-blu-cotone.',
        '**Query string:** Shopify dice che potrebbero non funzionare come previsto. Considera a rischio gli URL con parametri come /index.php?controller=category&id_category=12: il nostro template ne ha uno per provare come si comporta il tuo store, e se fallisce togli quella riga.',
        '**Sottocartelle di lingua e mercato:** la pagina dice che i redirect valgono per tutte e, nelle limitazioni, che non è così. Prova un redirect in ogni sottocartella prima di fidarti.',
        '**Cache:** browser e motori di ricerca tengono in cache i 301, quindi un redirect sbagliato non sparisce quando lo cancelli. Collauda prima che il dominio si sposti.',
      ],
    },
    {
      type: 'h2',
      text: 'Come accelera la mappa un agente AI, e perché serve una revisione separata?',
    },
    {
      type: 'paragraph',
      text: '**Un agente AI accelera l’abbinamento del passo 2, la parte lenta nel mezzo della mappa, ma deve proporre le righe e mai approvarle: uno script e una revisione separata decidono cosa si importa.** In noprob agency lavoriamo ogni giorno con agenti costruiti su Claude Code (lo sviluppo con agenti AI è uno dei superpoteri del nostro Custom AI System), e questa è la divisione che ti consiglio per le mappe dei redirect.',
    },
    {
      type: 'list',
      items: [
        '**Prima le regole, senza AI.** Uno script gestisce gli schemi puliti per slug. Copre la maggior parte del file ed è deterministico.',
        '**L’agente prende ciò che resta.** Per ogni URL rimasto riceve la vecchia pagina (titolo, H1, breadcrumb) e un elenco chiuso di nuovi URL validi dall’esportazione del catalogo. Deve scegliere da quell’elenco, dare un motivo in una riga o rispondere "nessun equivalente". Un elenco chiuso è ciò che gli impedisce di inventare indirizzi.',
        '**Gli script controllano l’output.** Ogni destinazione esiste e risponde 200, nessuna catena, nessuna origine doppia, nessun percorso riservato.',
        '**Un revisore separato.** Un secondo passaggio, in un contesto nuovo, vede solo la vecchia pagina e la destinazione proposta, con criteri scritti: stessa intenzione, stesso prodotto e non solo uno simile, una collezione e mai la home page. Non vede il ragionamento del primo agente. Le righe che segnala vanno a una persona.',
        '**Una persona firma.** Ogni URL con traffico o backlink passa sotto occhi umani, più una fetta casuale del resto.',
      ],
    },
    {
      type: 'paragraph',
      text: 'Perché separata? Chi ha scritto una riga tende a ripetere la propria logica quando la rilegge, e vale per un modello come per una persona. È l’indipendenza che trova gli errori. Lo stesso metodo, applicato a tutta la migrazione, è in [Migrare a Shopify con gli agenti AI](/it/blog/migrazione-shopify-agenti-ai). Se vuoi costruire agenti come questi per il tuo team, è il lavoro dell’[AI Accelerator](/it/ai-accelerator).',
    },
    { type: 'h2', text: 'Come è andata in una migrazione vera?' },
    {
      type: 'paragraph',
      text: 'Su Nazzi, uno store WooCommerce, abbiamo controllato 215 URL archiviati sul nuovo store dopo il go-live e consegnato il CSV dei redirect 301, pronto da importare in Shopify ([caso studio](/it/casi-studio/integratori-nazzi-dtc-shopify)). La lezione è quella del passo 5: la mappa non è finita quando il file è importato. Collaudare i vecchi indirizzi uno per uno è un lavoro separato dal costruire la mappa, ed è ciò che trasforma un elenco di redirect in un risultato di cui fidarsi.',
    },
    { type: 'h2', text: 'Domande frequenti' },
    { type: 'h3', text: 'A cosa serve un redirect 301 su Shopify?' },
    {
      type: 'paragraph',
      text: 'Un redirect 301 è un reindirizzamento permanente: manda visitatori e motori di ricerca da un vecchio URL a uno nuovo e dice che lo spostamento è definitivo. Google consiglia redirect permanenti lato server quando gli URL cambiano, con una destinazione per ogni vecchio URL. In Shopify si creano in Content > Menus > View URL Redirects.',
    },
    { type: 'h3', text: 'Come importo i redirect 301 su Shopify con un CSV?' },
    {
      type: 'paragraph',
      text: 'Prepara un CSV con le intestazioni Redirect from e Redirect to e un redirect per riga. Poi apri View URL Redirects, clicca Import, aggiungi il file, caricalo, controlla l’importazione e clicca Import redirects. Il nostro [template gratuito](/downloads/mappa-redirect-301-shopify-template.csv) è già in questo formato.',
    },
    { type: 'h3', text: 'Perché i miei redirect su Shopify non funzionano?' },
    {
      type: 'paragraph',
      text: 'La causa più comune è che il vecchio URL carica ancora una pagina valida: Shopify reindirizza solo da URL rotti. Le altre sono un percorso riservato come /cart o /shop, un percorso fisso come /collections, una query string nell’URL di partenza o un browser che ha in cache un 301 precedente. Prova in una finestra privata e controlla la riga per questi casi.',
    },
    {
      type: 'h3',
      text: 'Shopify può reindirizzare /collections, /products o /shop?',
    },
    {
      type: 'paragraph',
      text: 'No. La pagina di aiuto di Shopify dice che non si possono reindirizzare i percorsi fissi /products, /collections e /collections/all, né gli URL che iniziano con prefissi come /apps, /cart, /orders, /services e /shop. La pagina negozio di WooCommerce su /shop è il caso tipico: decidi come gestirla prima del lancio.',
    },
    { type: 'h3', text: 'Per quanto tempo vanno tenuti i redirect 301?' },
    {
      type: 'paragraph',
      text: 'La guida di Google dice di tenerli il più a lungo possibile, in genere almeno un anno. Dal punto di vista del visitatore si possono tenere per sempre, quindi il mio consiglio è di non cancellare mai un redirect che riceve ancora clic.',
    },
    { type: 'h3', text: 'Un agente AI può costruire la mappa dei redirect?' },
    {
      type: 'paragraph',
      text: 'Può proporre la maggior parte delle righe, soprattutto quelle ambigue, ma non deve approvarle. Regole e script gestiscono gli schemi puliti, l’agente suggerisce le destinazioni da un elenco chiuso di URL veri, e una revisione separata più un campione controllato da una persona decidono cosa si importa.',
    },
    {
      type: 'paragraph',
      text: 'Lo [Shopify Launch Sprint](/it/sprint-migrazione-shopify) porta il tuo store su Shopify in 14 giorni con il nostro Custom AI System: calendario fisso, prezzo pubblico e 4 garanzie scritte.',
    },
  ],
}

export default article
