import type { Article } from '../index'

const article: Article = {
  slug: 'shopify-migration-seo-checklist',
  slugIt: 'migrazione-shopify-seo-checklist',
  title: 'Website Migration SEO: The Shopify Checklist That Protects Your Rankings',
  titleIt: 'Migrazione sito SEO: la checklist per passare a Shopify senza perdere posizioni',
  seoTitle: 'Website Migration SEO Checklist for Shopify',
  seoTitleIt: 'Migrazione sito SEO: checklist per Shopify',
  seoDescription:
    'A website migration SEO checklist for Shopify in three phases: before, launch day and the 90 days after. Redirect map, canonicals, hreflang, Search Console.',
  seoDescriptionIt:
    'Checklist di migrazione sito SEO per Shopify in tre fasi: prima, giorno del lancio e i 90 giorni dopo. Redirect 301, canonical, hreflang e Search Console.',
  excerpt:
    'A website migration SEO checklist built for Shopify: before launch, launch day and the 90 days after, with the redirect map, canonicals, hreflang and Search Console steps.',
  excerptIt:
    'Una checklist di migrazione sito SEO pensata per Shopify: prima del lancio, il giorno del lancio e i 90 giorni dopo, con mappa dei redirect, canonical, hreflang e Search Console.',
  ledeEn:
    'A Shopify migration is won or lost on the URLs. This is the working checklist: three phases, the Shopify-specific traps, and what to watch for 90 days.',
  ledeIt:
    'Una migrazione a Shopify si vince o si perde sugli URL. È la checklist di lavoro: tre fasi, le trappole specifiche di Shopify e cosa controllare per 90 giorni.',
  image: '/images/blog/shopify-migration-seo-checklist-cover.png',
  imageAlt: 'Copertina astratta, sfondo azzurro sfumato, con un’onda di puntini di dimensione variabile',
  imageAltEn: 'Abstract cover, softly graded sky blue background with a wave of dots changing size',
  articleType: 'BlogPosting',
  date: '2026-10-27',
  datePublishedIso: '2026-10-27T09:00:00+00:00',
  dateModifiedIso: '2026-10-27T09:00:00+00:00',
  wordCount: 2160,
  readingTimeMinutes: 9,
  articleSection: 'Shopify migration',
  keywordsEn:
    'website migration seo, seo website migration checklist, shopify 301 redirects, shopify migration seo, shopify redirect map, shopify change of address',
  keywordsIt:
    'migrazione sito seo, redirect 301 shopify, migrazione shopify seo, checklist migrazione seo, mappa dei redirect, cambio di indirizzo search console',
  faqEn: [
    {
      question: 'Will I lose my Google rankings if I migrate to Shopify?',
      answer:
        'Rankings usually move for a while after any migration, including well-run ones, and a complete 301 redirect map is what decides how fast they come back. In the Sprint, organic traffic at 90 days is one of the 4 written guarantees: below the baseline, we work for free until it comes back. Google itself says visibility can fluctuate temporarily during a site move and should settle over time.',
    },
    {
      question: 'Do I need Search Console’s Change of Address tool when I move to Shopify?',
      answer:
        'Only if the domain or subdomain changes. Google says the tool is not needed for HTTP to HTTPS, www to non-www, or moving paths within the same domain. A same-domain migration to Shopify uses redirects, a new sitemap and monitoring instead.',
    },
    {
      question: 'Can Shopify do wildcard or regex redirects?',
      answer:
        'Shopify’s help page on URL redirects does not document wildcard or regex support, so plan one row per URL in the redirect map. Pattern-based rows (for example every old product URL) are easy to generate in a spreadsheet and import as a CSV.',
    },
    {
      question: 'Why is my Shopify redirect not working?',
      answer:
        'Shopify redirects only work on URLs that return a 404. If the old path still loads a valid page on the new store, the redirect is ignored. Other common causes: a reserved path (such as /cart or /collections), a query string in the source URL, or a redirect that Shopify deleted when a hidden collection was made visible again.',
    },
    {
      question: 'How long should I keep 301 redirects after a migration?',
      answer:
        'Google recommends keeping them for at least a year so signals can transfer to the new URLs, and says you can keep them indefinitely. In practice, never delete a redirect that still receives crawls, clicks or backlinks.',
    },
    {
      question: 'How long until rankings recover after a Shopify migration?',
      answer:
        'Google says small to medium sites may take a few weeks for most pages to move, and larger sites take longer. We watch crawling first, then indexing, then clicks, over the 90 days after launch. The redirect map, content parity and tracking set the pace, and organic traffic at 90 days is one of the Sprint’s 4 written guarantees.',
    },
  ],
  faqIt: [
    {
      question: 'Perderò le posizioni su Google se migro a Shopify?',
      answer:
        'Il posizionamento di solito si muove per un periodo dopo qualunque migrazione, anche quelle fatte bene, ed è la mappa completa dei redirect 301 a decidere quanto in fretta recupera. Nello Sprint il traffico organico a 90 giorni è una delle 4 garanzie scritte: sotto la baseline, lavoriamo gratis finché non torna. Lo dice anche Google: durante un trasferimento di sito la visibilità può fluttuare temporaneamente e poi si assesta.',
    },
    {
      question: 'Devo usare lo strumento Cambio di indirizzo di Search Console per passare a Shopify?',
      answer:
        'Solo se cambia il dominio o il sottodominio. Per Google lo strumento non serve per il passaggio da HTTP a HTTPS, da www a non-www o per lo spostamento di percorsi nello stesso dominio. Una migrazione a Shopify sullo stesso dominio usa redirect, nuova sitemap e monitoraggio.',
    },
    {
      question: 'Shopify supporta redirect con caratteri jolly o regex?',
      answer:
        'La pagina di aiuto di Shopify sui redirect URL non documenta il supporto a caratteri jolly o regex, quindi conviene prevedere una riga per ogni URL nella mappa. Le righe per schema (per esempio tutti i vecchi URL prodotto) si generano facilmente in un foglio di calcolo e si importano da CSV.',
    },
    {
      question: 'Perché il mio redirect 301 su Shopify non funziona?',
      answer:
        'I redirect di Shopify funzionano solo sugli URL che restituiscono 404. Se il vecchio percorso carica ancora una pagina valida sul nuovo store, il redirect viene ignorato. Altre cause comuni: un percorso riservato (come /cart o /collections), una query string nell’URL di partenza, o un redirect che Shopify ha cancellato quando una collezione nascosta è tornata visibile.',
    },
    {
      question: 'Per quanto tempo vanno tenuti i redirect 301 dopo una migrazione?',
      answer:
        'Google consiglia di tenerli almeno un anno, perché i segnali passino ai nuovi URL, e dice che si possono tenere anche per sempre. Nella pratica non si cancella mai un redirect che riceve ancora scansioni, clic o backlink.',
    },
    {
      question: 'Quanto tempo serve per recuperare le posizioni dopo la migrazione a Shopify?',
      answer:
        'Secondo Google per i siti piccoli e medi servono alcune settimane perché la maggior parte delle pagine si sposti, per i siti grandi di più. Noi controlliamo prima la scansione, poi l’indicizzazione, poi i clic, nei 90 giorni dopo il lancio. Il ritmo lo danno mappa dei redirect, contenuti conservati e tracking, e il traffico organico a 90 giorni è una delle 4 garanzie scritte dello Sprint.',
    },
  ],
  content: [
    {
      type: 'paragraph',
      text: 'A website migration SEO plan for Shopify comes down to one document and three phases. The document is the redirect map, which tells Google where every old URL lives now. The phases are before launch, launch day and the 90 days after. When we run a migration inside the [Shopify Launch Sprint](/shopify-migration-sprint), this is the SEO work running underneath it.',
    },
    {
      type: 'paragraph',
      text: 'Our [Shopify migration guide](/shopify-migration) covers the whole project. This article goes deeper on the SEO part and gives you the checklist itself, to use with us, with another team, or alone.',
    },
    {
      type: 'paragraph',
      text: 'Rankings move during every migration. What you control is how complete the map is and how fast you notice gaps: that decides the recovery, and in the Sprint organic traffic at 90 days is one of the 4 written guarantees.',
    },
    { type: 'h2', text: 'What does moving to Shopify change for SEO?' },
    {
      type: 'paragraph',
      text: 'Moving to Shopify changes three things Google cares about: the URL structure, which Shopify fixes; the templates that output your titles, canonicals and markup; and the sitemap, which Shopify generates for you.',
    },
    {
      type: 'list',
      items: [
        '**URLs have fixed prefixes.** Products live at /products/handle, collections at /collections/handle, pages at /pages/handle and blog posts at /blogs/blog-handle/article-handle. There are no root-level pages and no custom prefixes, so a page at /about-us becomes /pages/about-us.',
        '**Products have two paths.** A product loads at /products/handle and under its collection, but the canonical points to /products/handle. Link to that one.',
        '**The sitemap is automatic.** Shopify builds /sitemap.xml for you. You submit it, you do not edit it.',
      ],
    },
    {
      type: 'paragraph',
      text: 'That is why old URLs almost never survive, even when the domain stays the same. Our real migrations are from WooCommerce (Nazzi) and from a proprietary platform tied to the ERP (Cumini). URL patterns differ on every platform, the method below does not, and we start from each platform’s official documentation.',
    },
    { type: 'h2', text: 'Phase 1: what do you do before the migration starts?' },
    {
      type: 'paragraph',
      text: 'Before the migration you do five things: take a baseline, build the URL inventory and the redirect map, match each page’s on-page SEO, and keep the new store out of Google until launch.',
    },
    { type: 'h3', text: '1. Take a baseline you can compare against' },
    {
      type: 'list',
      items: [
        'Export Search Console performance by page and by query. Check the property returns real history.',
        'Crawl the old site and save the file: status, title, meta description, H1, canonical, word count and internal links per URL.',
        'Export organic revenue by landing page from analytics, not just sessions.',
        'Audit the tracking before you touch anything. A baseline you cannot trust is not a baseline.',
      ],
    },
    { type: 'h3', text: '2. Build the URL inventory from several sources, not one' },
    {
      type: 'paragraph',
      text: 'The old sitemap lies: it lists what the platform wanted to show, not what Google and customers use. Take the union of these and remove duplicates:',
    },
    {
      type: 'list',
      items: [
        'the crawl of the old site (pagination and parameter URLs included) and its sitemaps;',
        'every page with impressions in Search Console over the past year;',
        'URLs with backlinks, from a backlink tool;',
        'landing pages in analytics, and server logs if you can get them;',
        'the redirects already on the old platform: they are where chains come from.',
      ],
    },
    {
      type: 'paragraph',
      text: 'On the Nazzi migration we checked 215 archived WooCommerce URLs against the new store and delivered the 301 redirect CSV for import into Shopify. Mark each URL keep, merge or retire. Every row needs a destination.',
    },
    { type: 'h3', text: '3. Build the redirect map' },
    {
      type: 'paragraph',
      text: 'Map every old URL to the closest equivalent on Shopify, one to one. The rules we apply:',
    },
    {
      type: 'list',
      items: [
        'Same product to same product; variant URLs to the parent product.',
        'A discontinued product goes to the collection it belonged to, not the homepage. Google asks the same: do not send unrelated old URLs to one page.',
        'Merged categories and old tag or filter URLs go to the nearest collection.',
        'Blog posts go to the same post under /blogs/; keep the handle if you can.',
        'Point every row at the final URL. If A already redirected to B on the old platform, A goes straight to the new B.',
      ],
    },
    {
      type: 'paragraph',
      text: 'For a WooCommerce store the pattern rows look like this: /product/blue-shirt goes to /products/blue-shirt, /product-category/shirts goes to /collections/shirts, /2024/05/size-guide goes to /blogs/news/size-guide, and /shop goes to /collections/all. Generate those rows in a spreadsheet; do the exceptions by hand.',
    },
    { type: 'h3', text: '4. Match the on-page SEO, page by page' },
    {
      type: 'paragraph',
      text: 'Keep titles, meta descriptions, H1s and body copy close to what ranks today, and keep image file names and alt text: image URLs move to Shopify’s CDN, so image search starts again. Our opinion: rewriting copy and changing URLs in the same weekend makes any drop impossible to diagnose. Improve the pages that rank in a second project.',
    },
    { type: 'h3', text: '5. Keep the new store out of Google until launch' },
    {
      type: 'paragraph',
      text: 'Keep the storefront behind Shopify’s password page while you build, and remove it on launch day. Google’s site move guide also says to remove temporary noindex rules once redirects are live: check both.',
    },
    { type: 'h2', text: 'How do Shopify 301 redirects work, and how do you import them in bulk?' },
    {
      type: 'paragraph',
      text: 'Shopify 301 redirects live under Content > Menus > View URL Redirects, where you create them one at a time or import a CSV with one column for the old URL and one for the new one. Download the sample CSV from the import screen and keep its headers.',
    },
    {
      type: 'paragraph',
      text: 'The rules that catch people out come from [Shopify’s help page on URL redirects](https://help.shopify.com/en/manual/online-store/menus-and-links/url-redirect):',
    },
    {
      type: 'list',
      items: [
        '**Redirects only work on 404s.** If the old path still loads a valid page on the new store, the redirect is ignored. Check collisions before you import.',
        '**Use relative paths** on your primary domain; a full URL only for destinations outside it.',
        '**No wildcards are documented, and query strings may not behave.** One row per clean URL.',
        '**Some paths cannot be redirected:** /products, /collections and /collections/all, reserved prefixes such as /cart, /apps and /orders, and collection tag-filter URLs. A .html URL also cannot redirect to the same path without .html. Decide these cases before launch.',
        '**Language and market subfolders:** the help page says one redirect applies to all of them, but its limitations section says otherwise. Test one redirect in each subfolder before you trust it.',
        '**301s are cached** by browsers and search engines, so a wrong redirect does not vanish when you delete it. Test before launch.',
      ],
    },
    {
      type: 'paragraph',
      text: 'When you change a handle in the admin, check whether the editor offers to redirect the previous URL; if not, add the redirect yourself. After the import, export the redirects as a CSV: that file is your record of what was live.',
    },
    { type: 'h2', text: 'How do canonicals, hreflang, internal links and structured data work after a move?' },
    {
      type: 'paragraph',
      text: 'After a move, canonicals, hreflang annotations, internal links and structured data must all point at the new URLs; Google’s [guide on site moves with URL changes](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes) lists that step between the map and the redirects.',
    },
    {
      type: 'list',
      items: [
        '**Canonicals.** Open a product reached through a collection and confirm its canonical is /products/handle. Search the theme and SEO apps for hand-written canonicals or old domains.',
        '**Hreflang.** If you sell in several languages, [Shopify adds hreflang tags automatically](https://shopify.dev/docs/storefronts/themes/seo/hreflang) when the store uses Shopify Markets: check Online store > Preferences for the setting, and make sure no theme or app adds a second set. Google needs them [reciprocal](https://developers.google.com/search/docs/specialty/international/localized-versions), or the tags are ignored. Check a page in each language.',
        '**Internal links.** Menus, footer, descriptions, blog bodies and emails still carry old URLs. Update them: after launch, a crawl should show no internal link ending in a redirect.',
        '**Structured data.** The theme outputs Product markup; reviews and SEO apps can add a second copy. Keep one source and validate it against Google’s [Product structured data](https://developers.google.com/search/docs/appearance/structured-data/product) requirements.',
      ],
    },
    {
      type: 'paragraph',
      text: 'Structured data is also what AI shopping answers read: see our [GEO for Shopify guide](/blog/geo-for-shopify). If you come from WooCommerce, the [WooCommerce to Shopify migration guide](/blog/woocommerce-to-shopify-migration) has the platform side.',
    },
    { type: 'h2', text: 'Phase 2: what do you check on launch day?' },
    {
      type: 'paragraph',
      text: 'On launch day you check that the redirects fire, that Google can crawl the new store and that nothing from the build is left behind. Launch early in the week and away from a campaign peak, so someone is watching for the first 48 hours.',
    },
    {
      type: 'list',
      items: [
        '**Before the DNS switch:** the map is imported and tested on a sample; the primary domain is chosen (www or not); the storefront password is off; no noindex; robots.txt is clean; canonicals are right on a product, a collection and a post.',
        '**At the switch:** run the full old-URL list against the live store. Each row should return one 301, then a 200 on the destination in the map. Open the top landing pages by hand.',
        '**Search Console:** open the Domain property, submit the new /sitemap.xml and run a live URL Inspection on the homepage, a top collection and a top product. Warnings in the old sitemap about redirects are normal.',
        '**404 page, checkout and tracking:** the 404 page works, a test order goes through, and the purchase event fires in analytics and your ad platforms.',
        '**Outside the store:** update ad final URLs, the Google Merchant Center feed, email templates and social profiles.',
      ],
    },
    { type: 'h2', text: 'Phase 3: what do you monitor in the 90 days after launch?' },
    {
      type: 'paragraph',
      text: 'In the 90 days after launch you watch crawling first, then indexing, then clicks, because each one only moves after the one before it.',
    },
    {
      type: 'list',
      items: [
        '**Days 1 to 7: crawl.** Re-run the old-URL list every day. In Search Console, old URLs should show as redirected, not as “Not found (404)”. Any missing row gets a redirect the same day: Shopify says redirects work immediately.',
        '**Weeks 2 to 4: indexing.** Are the new URLs getting indexed? Look for “Crawled, currently not indexed” concentrated in one template. Compare impressions by page group (collections, products, posts) with the baseline. Ask your best linking sites to update their links.',
        '**Days 30 to 60: clicks.** Compare clicks and organic revenue by page group. Check “Duplicate, Google chose different canonical”. Flatten any redirect chain.',
        '**Days 60 to 90: review.** Write down what recovered and what did not. For groups still down, check content parity against the baseline crawl. Keep every redirect: Google says at least a year.',
      ],
    },
    {
      type: 'paragraph',
      text: 'This phase lines up with the 90 days of support in the Shopify Launch Sprint, and organic traffic at 90 days is one of its 4 written guarantees.',
    },
    { type: 'h2', text: 'Do you need Search Console’s Change of Address tool?' },
    {
      type: 'paragraph',
      text: 'No: the Change of Address tool is only for moving to a different domain or subdomain, and a Shopify migration on the same domain does not use it. Google says it is not needed for HTTP to HTTPS, www to non-www, or paths that move inside the same domain.',
    },
    {
      type: 'paragraph',
      text: 'It does apply when the address changes, for example from a retired brand domain to a new one. The order is: verify both properties, set up and check the 301 redirects, and only then submit the tool from the old property. Keep the old domain registered.',
    },
    {
      type: 'paragraph',
      text: 'For a same-domain move keep your existing Domain property verified by DNS (it covers every protocol and subdomain variant, and its history stays), the new sitemap and the monitoring above. If you can, do not change domain and platform in the same project: two moves make any drop harder to explain.',
    },
    { type: 'h2', text: 'When should you worry about rankings after a Shopify migration?' },
    {
      type: 'paragraph',
      text: 'Worry when a whole group of pages stays down while the rest recovers, or old URLs return 404 in volume; a dip in daily clicks in the first weeks is not that.',
    },
    {
      type: 'list',
      items: [
        'Old URLs with traffic still return 404 or end in a loop.',
        'One template (say collections) is down while products are back: a content or title parity problem, not a redirect problem.',
        'New URLs sit in “Discovered” or “Crawled, currently not indexed” well beyond the first few weeks.',
        'Google keeps choosing the old URL as canonical, or a noindex from the build survived launch.',
      ],
    },
    {
      type: 'paragraph',
      text: 'Google says expect fluctuation, and investigate large or unexpected drops for redirect errors or blocked crawling. Our own rule of thumb: a page group that has not moved after the “few weeks” Google mentions for small to medium sites needs a named owner and a fix.',
    },
    { type: 'h3', text: 'What it looked like on Nazzi and Cumini' },
    {
      type: 'paragraph',
      text: 'The comparison that tells you whether the checklist worked is not against last year but against the weeks right before go-live, because that isolates the move itself. On Integratori DTC Nazzi (WooCommerce to Shopify), the 28 days to 9 October against the 28 days before go-live show clicks up 41%, impressions at 2.2x and average position improved by 21%. That is the number to put in your 90-day review: the year-on-year view and the August dip are in the [migration guide](/shopify-migration) and the [Nazzi case study](/use-cases/integratori-nazzi-dtc-shopify).',
    },
    {
      type: 'paragraph',
      text: 'Cumini moved from a proprietary platform tied to its ERP. From June 2025 to May 2026 its online sales were up 67.7% on the previous 12 months, and the tracking score went from 31/100 to 92/100 between the audits before and after. That is the result of the whole project, not of SEO alone. See the [Cumini case study](/use-cases/cumini-luxury-fashion-ecommerce).',
    },
    {
      type: 'paragraph',
      text: 'The [Shopify Launch Sprint](/shopify-migration-sprint) moves your store to Shopify in 14 days with our Custom AI System: a fixed calendar, a public price and 4 written guarantees.',
    },
  ],
  contentIt: [
    {
      type: 'paragraph',
      text: 'Un piano di migrazione sito SEO per Shopify si riduce a un documento e tre fasi. Il documento è la mappa dei redirect, che dice a Google dove vive oggi ogni vecchio URL. Le fasi sono prima del lancio, giorno del lancio e i 90 giorni dopo. Quando facciamo una migrazione dentro lo [Shopify Launch Sprint](/it/sprint-migrazione-shopify), questo è il lavoro SEO che gira sotto.',
    },
    {
      type: 'paragraph',
      text: 'La nostra [guida alla migrazione a Shopify](/it/migrazione-shopify) copre tutto il progetto. Qui approfondiamo la parte SEO e ti diamo la checklist, da usare con noi, con un altro team o da solo.',
    },
    {
      type: 'paragraph',
      text: 'Il posizionamento si muove in ogni migrazione. Controlli quanto è completa la mappa e quanto in fretta vedi i buchi: questo decide il recupero, e nello Sprint il traffico organico a 90 giorni è una delle 4 garanzie scritte.',
    },
    { type: 'h2', text: 'Cosa cambia per la SEO in una migrazione Shopify?' },
    {
      type: 'paragraph',
      text: 'Passare a Shopify cambia tre cose che contano per Google: la struttura degli URL, che Shopify fissa; i template che producono titoli, canonical e markup; la sitemap, che Shopify genera da sola.',
    },
    {
      type: 'list',
      items: [
        '**Gli URL hanno prefissi fissi.** I prodotti stanno in /products/handle, le collezioni in /collections/handle, le pagine in /pages/handle e gli articoli in /blogs/handle-del-blog/handle-articolo. Non esistono pagine alla radice né prefissi personalizzati: una pagina /chi-siamo diventa /pages/chi-siamo.',
        '**I prodotti hanno due percorsi.** Un prodotto si apre da /products/handle e dentro la sua collezione, ma il canonical punta a /products/handle. Linka quello.',
        '**La sitemap è automatica.** Shopify costruisce /sitemap.xml da sola. La invii, non la modifichi.',
      ],
    },
    {
      type: 'paragraph',
      text: 'Per questo i vecchi URL quasi mai sopravvivono, anche se il dominio resta lo stesso. Le nostre migrazioni vere: da WooCommerce (Nazzi) e da una piattaforma proprietaria legata al gestionale (Cumini). Gli schemi di URL cambiano da una piattaforma all’altra, il metodo qui sotto no, e partiamo dalla documentazione ufficiale di ciascuna.',
    },
    { type: 'h2', text: 'Fase 1: cosa si fa prima di iniziare la migrazione?' },
    {
      type: 'paragraph',
      text: 'Prima della migrazione si fanno cinque cose: una baseline, l’inventario degli URL e la mappa dei redirect, la parità SEO pagina per pagina e il nuovo store tenuto fuori da Google fino al lancio.',
    },
    { type: 'h3', text: '1. Prendi una baseline con cui confrontarti' },
    {
      type: 'list',
      items: [
        'Esporta da Search Console le prestazioni per pagina e per query. Verifica che la proprietà abbia uno storico vero.',
        'Fai il crawl del vecchio sito e salva il file: stato, title, meta description, H1, canonical, parole e link interni per URL.',
        'Esporta da analytics il fatturato organico per pagina di destinazione, non solo le sessioni.',
        'Fai un audit del tracking prima di toccare altro: una baseline di cui non ti fidi non è una baseline.',
      ],
    },
    { type: 'h3', text: '2. Costruisci l’inventario degli URL da più fonti, non da una' },
    {
      type: 'paragraph',
      text: 'La vecchia sitemap mente: elenca ciò che la piattaforma voleva mostrare, non ciò che usano Google e i clienti. Unisci queste fonti ed elimina i doppioni:',
    },
    {
      type: 'list',
      items: [
        'il crawl del vecchio sito (con paginazioni e parametri) e le sue sitemap;',
        'ogni pagina con impressioni in Search Console nell’ultimo anno;',
        'gli URL con backlink, da un tool di backlink;',
        'le pagine di destinazione in analytics e, se riesci a ottenerli, i log del server;',
        'i redirect già presenti sulla vecchia piattaforma: da lì nascono le catene.',
      ],
    },
    {
      type: 'paragraph',
      text: 'Nella migrazione di Nazzi abbiamo controllato 215 URL WooCommerce archiviati rispetto al nuovo store e consegnato il CSV dei redirect 301 da importare in Shopify. Segna ogni URL come tieni, unisci o ritira. Ogni riga ha una destinazione.',
    },
    { type: 'h3', text: '3. Costruisci la mappa dei redirect' },
    {
      type: 'paragraph',
      text: 'Mappa ogni vecchio URL sul suo equivalente più vicino su Shopify, uno a uno. Le nostre regole:',
    },
    {
      type: 'list',
      items: [
        'Stesso prodotto allo stesso prodotto; gli URL delle varianti al prodotto padre.',
        'Un prodotto fuori catalogo va alla collezione a cui apparteneva, non alla home. Lo chiede anche Google: non mandare URL non correlati a una sola pagina.',
        'Le categorie unite e i vecchi URL di tag o filtri vanno alla collezione più vicina.',
        'Gli articoli vanno allo stesso articolo sotto /blogs/; se puoi, mantieni l’handle.',
        'Ogni riga punta all’URL finale. Se A già reindirizzava a B sulla vecchia piattaforma, A va direttamente al nuovo B.',
      ],
    },
    {
      type: 'paragraph',
      text: 'Per un negozio WooCommerce le righe per schema sono così: /prodotto/camicia-blu va a /products/camicia-blu, /categoria-prodotto/camicie va a /collections/camicie, /2024/05/guida-taglie va a /blogs/news/guida-taglie e /negozio va a /collections/all. Genera queste righe in un foglio di calcolo; le eccezioni a mano.',
    },
    { type: 'h3', text: '4. Conserva la SEO on-page, pagina per pagina' },
    {
      type: 'paragraph',
      text: 'Tieni title, meta description, H1 e testi vicini a quelli che oggi si posizionano, e conserva nomi file e testo alternativo delle immagini: gli URL delle immagini passano sulla CDN di Shopify, quindi la ricerca immagini riparte. Opinione nostra: riscrivere i testi e cambiare gli URL insieme rende impossibile capire da dove viene un calo. Migliora le pagine che si posizionano in un secondo progetto.',
    },
    { type: 'h3', text: '5. Tieni il nuovo store fuori da Google fino al lancio' },
    {
      type: 'paragraph',
      text: 'Tieni la vetrina dietro la password di Shopify mentre costruisci e toglila al lancio. Google chiede anche di rimuovere i noindex temporanei quando i redirect sono attivi: controlla entrambe le cose.',
    },
    { type: 'h2', text: 'Come si caricano in blocco i redirect 301 su Shopify?' },
    {
      type: 'paragraph',
      text: 'I redirect 301 su Shopify si gestiscono da Contenuto > Menu > URL Redirects: si creano uno alla volta oppure si importa un CSV con una colonna per il vecchio URL e una per il nuovo. Scarica il CSV di esempio dalla schermata di importazione e tieni le sue intestazioni.',
    },
    {
      type: 'paragraph',
      text: 'Le regole che fanno inciampare, dalla [pagina di aiuto di Shopify sui redirect URL](https://help.shopify.com/en/manual/online-store/menus-and-links/url-redirect):',
    },
    {
      type: 'list',
      items: [
        '**I redirect funzionano solo sui 404.** Se il vecchio percorso carica ancora una pagina valida sul nuovo store, il redirect viene ignorato. Controlla le collisioni prima di importare.',
        '**Usa percorsi relativi** sul dominio principale; l’URL completo solo per destinazioni esterne.',
        '**I caratteri jolly non sono documentati e le query string possono non comportarsi come ti aspetti.** Una riga per URL pulito.',
        '**Alcuni percorsi non si possono reindirizzare:** /products, /collections e /collections/all, prefissi riservati come /cart, /apps e /orders, e gli URL di collezione con filtro per tag. Un URL .html non può reindirizzare allo stesso percorso senza .html. Decidi questi casi prima del lancio.',
        '**Sottocartelle di lingua e mercato:** la pagina di aiuto dice che un redirect vale per tutte, ma la sezione sui limiti dice altro. Prova un redirect in ogni sottocartella prima di fidarti.',
        '**I 301 vengono messi in cache** da browser e motori di ricerca, quindi un redirect sbagliato non sparisce quando lo cancelli. Testa prima del lancio.',
      ],
    },
    {
      type: 'paragraph',
      text: 'Quando cambi un handle dall’admin, controlla se l’editor propone di reindirizzare il vecchio URL; se no, aggiungi tu il redirect. Dopo l’importazione esporta il CSV: è il registro di cosa era attivo.',
    },
    { type: 'h2', text: 'Come gestire canonical, hreflang, link interni e dati strutturati dopo il trasferimento?' },
    {
      type: 'paragraph',
      text: 'Dopo il trasferimento canonical, hreflang, link interni e dati strutturati puntano tutti ai nuovi URL; la [guida di Google sui trasferimenti di sito con cambio di URL](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes) mette questo passaggio tra la mappa e i redirect.',
    },
    {
      type: 'list',
      items: [
        '**Canonical.** Apri un prodotto raggiunto da una collezione e verifica che il canonical sia /products/handle. Cerca nel template e nelle app SEO canonical scritti a mano o vecchi domini.',
        '**Hreflang.** Se vendi in più lingue, [Shopify aggiunge i tag hreflang in automatico](https://shopify.dev/docs/storefronts/themes/seo/hreflang) quando lo store usa Shopify Markets: controlla l’impostazione in Online store > Preferences e verifica che nessun tema o app ne aggiunga una seconda serie. Google li vuole [reciproci](https://developers.google.com/search/docs/specialty/international/localized-versions), altrimenti i tag vengono ignorati. Controlla una pagina per ogni lingua.',
        '**Link interni.** Menu, footer, descrizioni, testi del blog ed email portano ancora i vecchi URL. Aggiornali: dopo il lancio nessun link interno deve finire in un redirect.',
        '**Dati strutturati.** Il markup Product arriva dal template; le app di recensioni e SEO possono aggiungerne una seconda copia. Tieni una sola fonte e validala rispetto ai requisiti Google sui [dati strutturati Product](https://developers.google.com/search/docs/appearance/structured-data/product).',
      ],
    },
    {
      type: 'paragraph',
      text: 'I dati strutturati li leggono anche le risposte di shopping delle AI: vedi la [guida alla GEO per Shopify](/it/blog/geo-seo-shopify). Se vieni da WooCommerce, la [guida alla migrazione da WooCommerce a Shopify](/it/blog/migrazione-woocommerce-shopify) ha il lato della piattaforma.',
    },
    { type: 'h2', text: 'Fase 2: cosa si controlla il giorno del lancio?' },
    {
      type: 'paragraph',
      text: 'Il giorno del lancio si controlla che i redirect scattino, che Google possa scansionare il nuovo store e che non resti nulla della costruzione. Lancia a inizio settimana e lontano dai picchi di campagna, così qualcuno guarda per le prime 48 ore.',
    },
    {
      type: 'list',
      items: [
        '**Prima del cambio DNS:** la mappa è importata e testata su un campione; il dominio principale è scelto (con www o senza); la password della vetrina è tolta; nessun noindex; robots.txt pulito; canonical giusti su un prodotto, una collezione e un articolo.',
        '**Al cambio:** esegui la lista dei vecchi URL sullo store live. Ogni riga deve restituire un solo 301, poi un 200 sulla destinazione della mappa. Apri a mano le pagine di destinazione principali.',
        '**Search Console:** apri la proprietà Dominio, invia la nuova /sitemap.xml ed esegui un’ispezione URL live su home, una collezione principale e un prodotto principale. Gli avvisi nella vecchia sitemap sui redirect sono normali.',
        '**Pagina 404, checkout e tracking:** la 404 funziona, un ordine di prova va a buon fine e l’evento di acquisto scatta in analytics e nelle piattaforme pubblicitarie.',
        '**Fuori dallo store:** aggiorna gli URL finali degli annunci, il feed di Google Merchant Center, i template email e i profili social.',
      ],
    },
    { type: 'h2', text: 'Fase 3: cosa si monitora nei 90 giorni dopo il lancio?' },
    {
      type: 'paragraph',
      text: 'Nei 90 giorni dopo il lancio si guarda prima la scansione, poi l’indicizzazione, poi i clic, perché ognuna si muove solo dopo la precedente.',
    },
    {
      type: 'list',
      items: [
        '**Giorni da 1 a 7: scansione.** Rilancia la lista dei vecchi URL ogni giorno. In Search Console i vecchi URL devono risultare reindirizzati, non “Non trovata (404)”. Ogni riga mancante riceve subito un redirect: Shopify dice che funzionano da subito.',
        '**Settimane da 2 a 4: indicizzazione.** Controlla che i nuovi URL vengano indicizzati. Cerca “Scansionata, attualmente non indicizzata” concentrata in un solo template. Confronta le impressioni per gruppo (collezioni, prodotti, articoli) con la baseline. Chiedi ai siti che ti linkano di più di aggiornare i link.',
        '**Giorni da 30 a 60: clic.** Confronta clic e fatturato organico per gruppo di pagine. Controlla “Duplicata, Google ha scelto una pagina canonica diversa”. Appiattisci ogni catena di redirect.',
        '**Giorni da 60 a 90: revisione.** Scrivi cosa è tornato e cosa no. Per i gruppi ancora in calo, confronta i contenuti con il crawl di baseline. Tieni tutti i redirect: Google dice almeno un anno.',
      ],
    },
    {
      type: 'paragraph',
      text: 'Questa fase coincide con i 90 giorni di supporto dello Shopify Launch Sprint, che tra le 4 garanzie scritte ha il traffico organico a 90 giorni.',
    },
    { type: 'h2', text: 'Serve lo strumento Cambio di indirizzo di Search Console?' },
    {
      type: 'paragraph',
      text: 'No: lo strumento Cambio di indirizzo serve solo per passare a un dominio o a un sottodominio diverso, e una migrazione a Shopify sullo stesso dominio non lo usa. Per Google non serve per il passaggio da HTTP a HTTPS, da www a non-www o per i percorsi che si spostano dentro lo stesso dominio.',
    },
    {
      type: 'paragraph',
      text: 'Vale quando l’indirizzo cambia, per esempio da un vecchio dominio di marca a uno nuovo. L’ordine è: verifica entrambe le proprietà, imposta e controlla i redirect 301, e solo dopo invia lo strumento dalla vecchia proprietà. Tieni registrato il vecchio dominio.',
    },
    {
      type: 'paragraph',
      text: 'Per uno spostamento sullo stesso dominio tieni la proprietà Dominio già verificata via DNS (copre ogni variante di protocollo e sottodominio e ne resta lo storico), la nuova sitemap e il monitoraggio qui sopra. Se puoi, non cambiare dominio e piattaforma nello stesso progetto: due spostamenti rendono più difficile spiegare un calo.',
    },
    { type: 'h2', text: 'Quando preoccuparsi per le posizioni dopo una migrazione a Shopify?' },
    {
      type: 'paragraph',
      text: 'Ci si preoccupa quando un gruppo di pagine resta in calo mentre il resto recupera, o i vecchi URL restituiscono 404 in massa; non per un calo dei clic giornalieri nelle prime settimane.',
    },
    {
      type: 'list',
      items: [
        'Vecchi URL con traffico che restituiscono ancora 404 o finiscono in un loop.',
        'Un template (per esempio le collezioni) è in calo mentre i prodotti sono tornati: è un problema di parità di contenuti o di title, non di redirect.',
        'Nuovi URL fermi in “Rilevata” o “Scansionata, attualmente non indicizzata” ben oltre le prime settimane.',
        'Google continua a scegliere il vecchio URL come canonical, oppure un noindex della costruzione è sopravvissuto al lancio.',
      ],
    },
    {
      type: 'paragraph',
      text: 'Per Google le oscillazioni sono attese; i cali grandi o inattesi vanno indagati cercando errori di redirect o scansione bloccata. Regola pratica nostra: un gruppo di pagine fermo dopo le “alcune settimane” che Google indica per i siti piccoli e medi ha bisogno di un responsabile e di una correzione.',
    },
    { type: 'h3', text: 'Com’è andata su Nazzi e Cumini' },
    {
      type: 'paragraph',
      text: 'Il confronto che ti dice se la checklist ha funzionato non è con l’anno scorso ma con le settimane subito prima del go-live, perché isola il passaggio in sé. Su Integratori DTC Nazzi (da WooCommerce a Shopify), i 28 giorni al 9 ottobre rispetto ai 28 giorni prima del go-live mostrano clic +41%, impressioni 2,2 volte e posizione media migliorata del 21%. È il numero da mettere nella revisione dei 90 giorni: il confronto con l’anno prima e il calo di agosto sono nella [guida alla migrazione](/it/migrazione-shopify) e nel [caso studio Nazzi](/it/casi-studio/integratori-nazzi-dtc-shopify).',
    },
    {
      type: 'paragraph',
      text: 'Cumini veniva da una piattaforma proprietaria legata al gestionale. Da giugno 2025 a maggio 2026 le sue vendite online sono salite del 67,7% sui 12 mesi precedenti, e il punteggio del tracking è passato da 31/100 a 92/100 tra l’audit prima e dopo. È il risultato dell’intero progetto, non della sola SEO. Vedi il [caso studio Cumini](/it/casi-studio/cumini-luxury-fashion-ecommerce).',
    },
    {
      type: 'paragraph',
      text: 'Lo [Shopify Launch Sprint](/it/sprint-migrazione-shopify) porta il tuo store su Shopify in 14 giorni con il nostro Custom AI System: calendario fisso, prezzo pubblico e 4 garanzie scritte.',
    },
  ],
}

export default article
