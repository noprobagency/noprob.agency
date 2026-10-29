import type { Article } from '../index'

const article: Article = {
  slug: 'shopify-migration-ai-agents',
  slugIt: 'migrazione-shopify-agenti-ai',
  title: 'Migrate to Shopify with AI Agents: What You Can Really Automate',
  titleIt: 'Migrazione Shopify con gli agenti AI: cosa si automatizza davvero',
  seoTitle: 'Migrate to Shopify with AI Agents: 6 Phases',
  seoTitleIt: 'Migrare a Shopify con agenti AI: 6 fasi',
  seoDescription:
    'Migrate to Shopify with AI agents: what each phase automates (catalog, 301 redirects, data, tracking, QA) and what stays with a person.',
  seoDescriptionIt:
    'Migrazione Shopify con agenti AI: cosa si automatizza in ogni fase (catalogo, redirect 301, dati, tracking, QA) e cosa resta a una persona.',
  excerpt:
    'Six phases of a Shopify migration, one by one: what an AI agent does, what a person decides, which pattern fits and which check proves it worked.',
  excerptIt:
    'Le sei fasi di una migrazione a Shopify, una per una: cosa fa un agente AI, cosa decide una persona, quale pattern serve e quale controllo dimostra che ha funzionato.',
  ledeEn:
    'To migrate to Shopify with AI agents, give them the repetitive work that can be checked and keep every decision and every irreversible step with a person. Here is the split, phase by phase.',
  ledeIt:
    'Per la migrazione Shopify con gli agenti AI, dai loro il lavoro ripetitivo che si può controllare e tieni a una persona ogni decisione e ogni passo irreversibile. Ecco la divisione, fase per fase.',
  image: '/images/blog/shopify-migration-ai-agents-cover.png',
  imageAlt: 'Copertina astratta, sfondo melanzana, con una dissolvenza radiale di puntini più grandi al centro',
  imageAltEn: 'Abstract cover, aubergine background with a radial fade of dots growing toward the centre',
  articleType: 'BlogPosting',
  date: '2026-10-29',
  datePublishedIso: '2026-10-29T09:00:00+00:00',
  dateModifiedIso: '2026-10-29T09:00:00+00:00',
  wordCount: 2600,
  articleSection: 'Migrate to Shopify',
  readingTimeMinutes: 10,
  keywordsEn:
    'migrate to shopify, shopify migration with ai, ai shopify migration, automate shopify migration, shopify migration tool, how to migrate to shopify, migrate magento to shopify with ai',
  keywordsIt:
    'migrazione shopify, migrazione shopify con ai, automatizzare migrazione shopify, migrazione ecommerce intelligenza artificiale, migrare ecommerce con ai, agenti ai migrazione',
  content: [
    {
      type: 'paragraph',
      text: '**To migrate to Shopify with AI agents, you give the agents the repetitive work that can be checked (inventory, field mapping, redirect matching, data comparison, QA) and you keep every decision and every irreversible step with a person.** That is the whole method. The rest of this piece is the detail, phase by phase.',
    },
    {
      type: 'paragraph',
      text: 'I have done several migrations to Shopify with zero minutes offline, and I am a developer by training (degree in Computer Science). At noprob agency we work every day with AI agents built on Claude Code, and the [Shopify Launch Sprint](/shopify-migration-sprint) moves a store to Shopify in 14 days with our Custom AI System. This article explains the method behind it, so you can judge any migration offer, ours included.',
    },
    {
      type: 'paragraph',
      text: 'The parts that do not depend on AI (scope, timeline, risks) are in our [guide to migrating to Shopify](/shopify-migration). The SEO checks in detail are in the [migration SEO checklist](/blog/shopify-migration-seo-checklist) and in the [301 redirect guide](/blog/shopify-301-redirects).',
    },
    { type: 'h2', text: 'Can AI agents migrate a store to Shopify?' },
    {
      type: 'paragraph',
      text: '**Agents can do most of the typing in a migration, but not the deciding.** Shopify lists [five ways to move a store](https://help.shopify.com/en/manual/migrating-to-shopify): copy and paste, CSV import, migration apps, a Shopify Partner, or a custom solution built on the Shopify API. An agent is not a sixth way. It is a faster worker that uses those same channels (CSV files, the API, apps) as tools, under rules you set.',
    },
    {
      type: 'paragraph',
      text: 'The reason is simple. A migration is a chain of small jobs with a known order, a clear right answer and a cheap way to check it. That is where AI is strong. The same migration also has a few moments where one wrong click cannot be undone: overwriting live products, switching the domain, deleting the old store. Those are not for an agent. My rule: **the agent proposes, a person approves, and nothing irreversible runs without that approval.**',
    },
    { type: 'h2', text: 'Which AI patterns do you use in a migration?' },
    {
      type: 'paragraph',
      text: '**Four patterns cover almost everything: prompt chaining, tool use, reflection with a separate checker, and planning.** Anthropic’s guide [Building effective agents](https://www.anthropic.com/engineering/building-effective-agents) draws the line that matters: a workflow follows paths written in advance, while an agent decides its own steps and tools as it goes. My choice for a migration is a workflow wherever the steps are known, and an agent only where the path depends on what it finds.',
    },
    {
      type: 'list',
      items: [
        '**Prompt chaining:** one job split into steps in a fixed order, with a check between steps. Cleaning a catalog works like this: remove duplicates, normalize attributes, split variants, map to Shopify fields. Each step receives the output of the last one, and a check stops the chain if something looks wrong.',
        '**Tool use:** the agent does not guess, it calls tools. It reads the export of the old store, queries the old site, writes to a Shopify development store through the API or a CSV. What the tools may touch decides how much damage a mistake can do.',
        '**Reflection with a separate checker:** a second pass, run by a checker that did not produce the work, against written criteria (every redirect target answers 200, every product has a price). Anthropic calls it the evaluator-optimizer pattern. The checker must be separate: whoever made the work is the worst person to grade it.',
        '**Planning:** for the part where the path depends on the data, the agent writes its plan first, a person reads it, then it executes. A URL that fits no rule, a variant that does not map: this is where an agent earns its place.',
      ],
    },
    {
      type: 'paragraph',
      text: 'If you want the wider map of chatbots, workflows and agents for a store, read [AI agents for Shopify](/blog/ai-agents-for-shopify). How we use Claude Code on a store is in [Claude and Claude Code on Shopify](/blog/claude-shopify).',
    },
    { type: 'h2', text: 'What does the agent do in each phase of a Shopify migration?' },
    {
      type: 'paragraph',
      text: '**A migration has six phases, and in each one the agent takes the volume while a person keeps the decision.** For every phase below you get what the agent does, what a person decides, and the check that tells you it worked.',
    },
    { type: 'h3', text: '1. Inventory' },
    {
      type: 'paragraph',
      text: '**In the inventory the agent lists everything the old store holds: products, collections, pages, articles, customers, orders, apps, redirects and URLs.** It reads exports, the sitemap and the platform data. Google’s [guide to site moves with URL changes](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes) names more places where URLs hide: server logs, analytics and Search Console.',
    },
    {
      type: 'list',
      items: [
        '**Agent:** collects every source into one inventory and flags what exists in one place and not in another (a product in the sitemap but not in the export).',
        '**Person:** decides what moves, what is archived and what is dropped. A plugin that changes how prices work is a rule of your business, not a row of data.',
        '**Check:** counts per type, signed off by a person before anything else starts.',
      ],
    },
    { type: 'h3', text: '2. Catalog cleanup and mapping' },
    {
      type: 'paragraph',
      text: '**Catalog mapping turns old fields into Shopify fields, and it is the best use of a prompt chain.** Shopify’s [product CSV](https://help.shopify.com/en/manual/products/import-export/using-csv) has precise rules: a product is identified by its handle, variants take up to 3 options, and if the option columns are missing on an update, the existing variants are deleted. Rules like these are why a mapping table is written and checked before any import.',
    },
    {
      type: 'list',
      items: [
        '**Agent:** normalizes duplicates, free-text attributes and codes, splits variants, writes the mapping table (old field, Shopify field) and produces the import file.',
        '**Person:** approves the mapping table and the ambiguous cases the agent lists: a variant that could be two products, an attribute with no Shopify equivalent.',
        '**Check:** a separate checker compares the import file with the source, product by product, against written criteria.',
      ],
    },
    {
      type: 'paragraph',
      text: 'Our case studies report what happened on each store, not what an agent did there. [Cumini](/use-cases/cumini-luxury-fashion-ecommerce)’s store came from a proprietary platform tied to the ERP. Clean data is also what makes [Shopify Magic and Sidekick](/blog/shopify-magic-sidekick) useful afterwards: in my projects I use them on clean data, with a human review.',
    },
    { type: 'h3', text: '3. The 301 redirect map' },
    {
      type: 'paragraph',
      text: '**The redirect map links every old URL to the page that replaces it, and it decides how much search traffic survives the move.** [Google asks for a complete mapping and for permanent redirects](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes) from each old URL to its new one, kept short (no long chains) and never dumped on the home page.',
    },
    {
      type: 'list',
      items: [
        '**Agent:** sorts each old URL by type (product, collection, article, page, other), matches it to the new catalog by handle, title and attributes, and writes the match with a short reason. It also checks that each old URL now answers 404 on the new store, because Shopify [redirects only URLs that show “Page not found”](https://help.shopify.com/en/manual/online-store/menus-and-links/url-redirect) and cannot redirect some reserved paths such as `/cart`.',
        '**Person:** decides the pages with no true equivalent (redirect to the closest collection, or let it be a 404) and verifies a sample by hand.',
        '**Check:** every target answers 200, no chains, no home page as a catch-all, and the sample verified by eye.',
      ],
    },
    {
      type: 'paragraph',
      text: 'Our [Nazzi](/use-cases/integratori-nazzi-dtc-shopify) case study, moved from WooCommerce, reports the outcome of our work on that store, not the work of an agent: 215 archived URLs of the old site checked one by one, 138 with a 301 redirect, 77 in 404, and the CSV of redirects handed over to import in Shopify. Keep the redirects live for a long time: Google says [generally at least one year](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes). The five-step method and a template are in [Shopify 301 redirects](/blog/shopify-301-redirects).',
    },
    { type: 'h3', text: '4. Data migration' },
    {
      type: 'paragraph',
      text: '**Data migration moves products, customers and orders into Shopify in the right order, first on a development store and then on the live one.** [Shopify’s migration page](https://help.shopify.com/en/manual/migrating-to-shopify) says to import products first, then customers, then historical orders, and it lists blogs and pages among the content that can move.',
    },
    {
      type: 'list',
      items: [
        '**Agent:** runs the import on a development store in batches, logs every batch, retries only what failed after checking that it did not already go through (no duplicated products), and writes a reconciliation report, old store against new.',
        '**Person:** reads the reconciliation report line by line and approves the run on the live store, the only step that writes real data.',
        '**Check:** counts and totals old against new, with every difference explained.',
      ],
    },
    { type: 'h3', text: '5. Tracking' },
    {
      type: 'paragraph',
      text: '**Tracking has to work on day one, because after the switch you cannot rebuild numbers you did not record.** This is a comparison job, and agents are good at comparing.',
    },
    {
      type: 'list',
      items: [
        '**Agent:** lists the events of the old store (purchase, add to cart, checkout steps, newsletter signup), compares them with the new store, fires test events and reports what is missing or sends the wrong parameters.',
        '**Person:** decides which events and which attribution rules matter, and what the consent banner allows.',
        '**Check:** a tracking audit before and after. Our [Cumini case study](/use-cases/cumini-luxury-fashion-ecommerce) reports a tracking audit score from 31 to 92 out of 100 around the migration.',
      ],
    },
    { type: 'h3', text: '6. QA before and after go-live' },
    {
      type: 'paragraph',
      text: '**QA runs twice, on the copy before go-live and on the live store after it, and in both cases the checker is not the one who did the work.** [Shopify advises placing test orders before launch](https://help.shopify.com/en/manual/migrating-to-shopify) to check successful and failed payments, refunds, cancellations and fulfillment.',
    },
    {
      type: 'list',
      items: [
        '**Agent:** the checker runs written criteria (prices, variants, images, redirects, status codes, structured data, notification emails). After go-live it crawls the list of old URLs again, watches the 404s in Search Console and checks that events keep firing.',
        '**Person:** places the test orders, looks at the pages that matter on a phone, and gives the go-live approval, which includes the domain switch.',
        '**Check:** a go-live checklist where every blocking item has an owner, and a failed blocking item stops the switch.',
      ],
    },
    { type: 'h3', text: 'The whole split in one list' },
    {
      type: 'table',
      headers: ['Phase', 'Agent', 'Person', 'Check'],
      rows: [
        [
          '**Inventory**',
          'The agent collects',
          'A person decides what moves',
          'The check is a count per type',
        ],
        [
          '**Catalog**',
          'The agent normalizes and maps',
          'A person approves the ambiguous cases',
          'A separate checker compares with the source',
        ],
        [
          '**Redirects**',
          'The agent matches and tests',
          'A person decides the pages with no equivalent',
          'The check is status codes plus a sample by hand',
        ],
        [
          '**Data**',
          'The agent imports in batches on a development store',
          'A person approves the live run',
          'The check is the reconciliation report',
        ],
        [
          '**Tracking**',
          'The agent compares events',
          'A person chooses what matters',
          'The check is the audit before and after',
        ],
        [
          '**QA**',
          'The checker runs the criteria',
          'A person places test orders and approves go-live',
          'The check is the go-live checklist',
        ],
      ],
    },
    { type: 'h2', text: 'What should always stay with a person in a migration?' },
    {
      type: 'paragraph',
      text: '**Decisions, approvals and irreversible actions stay with a person, always.** Decisions: what moves, the URL structure, which old page deserves a redirect, which tools the store keeps. Approvals: the mapping table, the redirect sample, the run on the live store, go-live. Irreversible actions: overwriting live products, deleting anything, switching the domain, closing the old store, sending an email to your customers.',
    },
    {
      type: 'paragraph',
      text: 'The CSV import shows why. In [Shopify’s CSV rules](https://help.shopify.com/en/manual/products/import-export/using-csv), blank columns overwrite existing values and “Overwrite products with matching handles” updates products that already exist. Fast and correct is great; fast and wrong on live data is a bad afternoon. Four rules keep an agent inside the lines:',
    },
    {
      type: 'list',
      items: [
        '**Least privilege:** read-only on the old store, write only on a development store, write on the live store only for one approved run.',
        '**Development store first:** every import runs there before it touches real data.',
        '**Everything logged:** what ran, on which items, with which result, so any step can be traced and undone.',
        '**Imported content is data, never instructions:** a product description or a customer note can contain text that tries to steer a model. OWASP calls it [indirect prompt injection](https://genai.owasp.org/llmrisk/llm01-prompt-injection/) and lists least privilege and human approval among the mitigations.',
      ],
    },
    {
      type: 'paragraph',
      text: 'The full picture of what an agent may touch on a store is in [AI agent security for Shopify](/blog/ai-agent-security-shopify).',
    },
    { type: 'h2', text: 'How do you migrate from Magento or WooCommerce to Shopify with the help of AI?' },
    {
      type: 'paragraph',
      text: '**You follow the same six phases and change only the source: where the data lives and what the old URLs look like.** On Magento the catalog is usually the heavy part (configurable products, many attribute sets, several store views), so mapping and the redirect map take the most care. On WooCommerce a lot lives in plugins and in permalink structures, so the inventory of plugins and of the data they own comes first.',
    },
    {
      type: 'paragraph',
      text: 'Our platform guides go deeper: [Magento to Shopify](/blog/magento-to-shopify-migration) and [WooCommerce to Shopify](/blog/woocommerce-to-shopify-migration), where Nazzi is the reference case. The Sprint covers a migration to Shopify from any platform, and over seven years of eCommerce projects are behind the method.',
    },
    { type: 'h2', text: 'How does this method work in the Shopify Launch Sprint?' },
    {
      type: 'paragraph',
      text: '**The Shopify Launch Sprint applies this method: development with AI agents, a 1:1 redirect map tested automatically and a reconciliation at 100%.** Every URL with traffic gets its 1:1 redirect, tested automatically before and after go-live. Products, variants, customers and order history are reconciled at 100%, with every count from the old platform compared with Shopify. Our specialists keep the decisions.',
    },
    {
      type: 'paragraph',
      text: 'The calendar is fixed: 14 days, go-live between day 15 and 30, 90 days of support and 4 written guarantees. A migration is also the cheapest moment to fix your data, because every product is touched anyway. If your store is already on Shopify, the lightest route is the [AI Accelerator](/ai-accelerator).',
    },
    { type: 'h2', text: 'Frequently asked questions' },
    { type: 'h3', text: 'Can AI migrate my store to Shopify by itself?' },
    {
      type: 'paragraph',
      text: 'No, and it should not. AI agents do the repetitive, checkable work: inventory, mapping, redirect matching, imports on a development store, comparisons and QA. A person decides what moves, approves the mapping and the live run, and gives the go-live.',
    },
    { type: 'h3', text: 'Which parts of a Shopify migration can be automated?' },
    {
      type: 'paragraph',
      text: 'Most of the volume: the inventory, catalog cleanup and mapping, the first draft of the 301 redirect map, batched imports on a development store, the reconciliation report, tracking comparisons and the QA checks. The decisions and the irreversible steps are not automated.',
    },
    { type: 'h3', text: 'Is it safe to give an AI agent access to my store?' },
    {
      type: 'paragraph',
      text: 'It is safe when access is limited: read-only on the old store, a development store for writes, one approved run on the live store, a log of every action. Treat imported content as data, never as instructions, as OWASP recommends for indirect prompt injection.',
    },
    { type: 'h3', text: 'Do I still need a migration app or a CSV?' },
    {
      type: 'paragraph',
      text: 'The agent works through those same channels. Shopify lists CSV import, migration apps, a Partner and a custom solution on the Shopify API as the ways to move a store, and an agent uses them as tools. What it adds is speed, consistency and checks.',
    },
    { type: 'h3', text: 'How does AI help with SEO redirects in a migration?' },
    {
      type: 'paragraph',
      text: 'It sorts every old URL by type, matches it to the new page, tests that each old URL answers 404 on the new store and that each target answers 200, and writes the CSV. A person decides the pages with no equivalent and checks a sample by hand.',
    },
    { type: 'h3', text: 'How long does a migration to Shopify with AI take?' },
    {
      type: 'paragraph',
      text: 'It depends on catalog, integrations and design. The Shopify Launch Sprint runs on a fixed 14-day calendar, with go-live between day 15 and 30 and 90 days of support after it.',
    },
    {
      type: 'paragraph',
      text: 'The Sprint has a public price by company revenue: €5.800 under €2M, €8.800 between €2M and €20M, €12.800 above €20M, VAT excluded, in 4 installments.',
    },
    {
      type: 'paragraph',
      text: 'The [Shopify Launch Sprint](/shopify-migration-sprint) moves your store to Shopify in 14 days with our Custom AI System: a fixed calendar, a public price and 4 written guarantees.',
    },
  ],
  contentIt: [
    {
      type: 'paragraph',
      text: '**Per la migrazione Shopify con gli agenti AI, dai agli agenti il lavoro ripetitivo che si può controllare (inventario, mappatura dei campi, abbinamento dei redirect, confronto dei dati, QA) e tieni a una persona ogni decisione e ogni passo irreversibile.** Questo è tutto il metodo. Il resto del pezzo è il dettaglio, fase per fase.',
    },
    {
      type: 'paragraph',
      text: 'Ho fatto diverse migrazioni a Shopify con 0 minuti offline e sono sviluppatore di formazione (laurea in Informatica). In noprob agency lavoriamo ogni giorno con agenti AI costruiti su Claude Code, e lo [Shopify Launch Sprint](/it/sprint-migrazione-shopify) porta uno store su Shopify in 14 giorni con il nostro Custom AI System. Questo articolo spiega il metodo che c’è dietro, così puoi giudicare qualsiasi offerta di migrazione, la nostra compresa.',
    },
    {
      type: 'paragraph',
      text: 'Le parti che non dipendono dall’AI (perimetro, tempi, rischi) sono nella nostra [guida alla migrazione a Shopify](/it/migrazione-shopify). I controlli SEO nel dettaglio stanno nella [checklist SEO della migrazione](/it/blog/migrazione-shopify-seo-checklist) e nella [guida ai redirect 301](/it/blog/redirect-301-shopify).',
    },
    { type: 'h2', text: 'Gli agenti AI possono migrare uno store su Shopify?' },
    {
      type: 'paragraph',
      text: '**Gli agenti possono fare gran parte della digitazione in una migrazione, ma non il decidere.** Shopify elenca [cinque modi per spostare uno store](https://help.shopify.com/en/manual/migrating-to-shopify): copia e incolla, import CSV, app di migrazione, un Shopify Partner o una soluzione su misura con le API di Shopify. Un agente non è un sesto modo. È un lavoratore più veloce che usa quegli stessi canali (file CSV, API, app) come strumenti, con le regole che gli dai tu.',
    },
    {
      type: 'paragraph',
      text: 'Il motivo è semplice. Una migrazione è una catena di piccoli lavori con un ordine noto, una risposta giusta chiara e un modo economico per controllarla. Lì l’AI è forte. La stessa migrazione ha anche pochi momenti in cui un clic sbagliato non si disfa: sovrascrivere i prodotti online, spostare il dominio, cancellare il vecchio store. Quelli non sono per un agente. La mia regola: **l’agente propone, una persona approva e niente di irreversibile parte senza quell’approvazione.**',
    },
    { type: 'h2', text: 'Quali pattern AI si usano in una migrazione?' },
    {
      type: 'paragraph',
      text: '**Quattro pattern coprono quasi tutto: prompt chaining, tool use, reflection con un controllo separato e planning.** La guida di Anthropic [Building effective agents](https://www.anthropic.com/engineering/building-effective-agents) traccia la linea che conta: un workflow segue percorsi scritti in anticipo, un agente decide da solo passi e strumenti mentre procede. Per una migrazione scelgo un workflow dove i passi sono noti e un agente solo dove il percorso dipende da ciò che trova.',
    },
    {
      type: 'list',
      items: [
        '**Prompt chaining:** un lavoro diviso in passi in ordine fisso, con un controllo tra un passo e l’altro. La pulizia di un catalogo funziona così: togli i duplicati, normalizza gli attributi, separa le varianti, mappa sui campi Shopify. Ogni passo riceve il risultato del precedente e un controllo ferma la catena se qualcosa non torna.',
        '**Tool use:** l’agente non tira a indovinare, chiama strumenti. Legge l’export del vecchio store, interroga il vecchio sito, scrive su uno store di sviluppo Shopify tramite API o CSV. Ciò che gli strumenti possono toccare decide quanto danno può fare un errore.',
        '**Reflection con un controllo separato:** una seconda passata, fatta da un controllore che non ha prodotto il lavoro, su criteri scritti (ogni destinazione dei redirect risponde 200, ogni prodotto ha un prezzo). Anthropic lo chiama pattern evaluator-optimizer. Il controllore deve essere separato: chi ha fatto il lavoro è la persona peggiore per valutarlo.',
        '**Planning:** per la parte in cui il percorso dipende dai dati, l’agente scrive prima il suo piano, una persona lo legge, poi esegue. Un URL che non rientra in nessuna regola, una variante che non si mappa: qui un agente si guadagna il posto.',
      ],
    },
    {
      type: 'paragraph',
      text: 'Se vuoi la mappa più ampia di chatbot, workflow e agenti per uno store, leggi [agenti AI per Shopify](/it/blog/agenti-ai-shopify). Come usiamo Claude Code su uno store è in [Claude e Claude Code su Shopify](/it/blog/claude-shopify).',
    },
    { type: 'h2', text: 'Cosa fa l’agente in ogni fase di una migrazione a Shopify?' },
    {
      type: 'paragraph',
      text: '**Una migrazione ha sei fasi, e in ognuna l’agente prende il volume mentre una persona tiene la decisione.** Per ogni fase qui sotto trovi cosa fa l’agente, cosa decide una persona e il controllo che dice se ha funzionato.',
    },
    { type: 'h3', text: '1. Inventario' },
    {
      type: 'paragraph',
      text: '**Nell’inventario l’agente elenca tutto ciò che contiene il vecchio store: prodotti, collezioni, pagine, articoli, clienti, ordini, app, redirect e URL.** Legge gli export, la sitemap e i dati della piattaforma. La [guida di Google allo spostamento di un sito con cambi di URL](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes) indica altri posti dove si nascondono gli URL: log del server, analytics e Search Console.',
    },
    {
      type: 'list',
      items: [
        '**Agente:** raccoglie ogni fonte in un unico inventario e segnala ciò che esiste in un posto e non in un altro (un prodotto nella sitemap ma non nell’export).',
        '**Persona:** decide cosa si sposta, cosa si archivia e cosa si lascia. Un plugin che cambia il modo di calcolare i prezzi è una regola della tua attività, non una riga di dati.',
        '**Controllo:** conteggi per tipo, firmati da una persona prima di iniziare qualsiasi altra cosa.',
      ],
    },
    { type: 'h3', text: '2. Pulizia e mappatura del catalogo' },
    {
      type: 'paragraph',
      text: '**La mappatura del catalogo trasforma i vecchi campi in campi Shopify ed è l’uso migliore di una catena di prompt.** Il [CSV dei prodotti](https://help.shopify.com/en/manual/products/import-export/using-csv) di Shopify ha regole precise: un prodotto si identifica con il suo handle, le varianti hanno fino a 3 opzioni e, se in un aggiornamento mancano le colonne delle opzioni, le varianti esistenti vengono eliminate. Regole così sono il motivo per cui una tabella di mappatura si scrive e si controlla prima di qualsiasi import.',
    },
    {
      type: 'list',
      items: [
        '**Agente:** normalizza duplicati, attributi a testo libero e codici, separa le varianti, scrive la tabella di mappatura (campo vecchio, campo Shopify) e produce il file di import.',
        '**Persona:** approva la tabella di mappatura e i casi ambigui che l’agente elenca: una variante che potrebbe essere due prodotti, un attributo senza equivalente su Shopify.',
        '**Controllo:** un controllore separato confronta il file di import con la fonte, prodotto per prodotto, su criteri scritti.',
      ],
    },
    {
      type: 'paragraph',
      text: 'I nostri casi studio raccontano cosa è successo su ogni store, non cosa ha fatto un agente. Lo store di [Cumini](/it/casi-studio/cumini-luxury-fashion-ecommerce) veniva da una piattaforma proprietaria legata al gestionale. Dati puliti sono anche ciò che rende utili dopo [Shopify Magic e Sidekick](/it/blog/shopify-magic-sidekick): nei miei progetti li uso su dati puliti, con revisione umana.',
    },
    { type: 'h3', text: '3. La mappa dei redirect 301' },
    {
      type: 'paragraph',
      text: '**La mappa dei redirect collega ogni vecchio URL alla pagina che lo sostituisce e decide quanto traffico di ricerca sopravvive allo spostamento.** [Google chiede una mappatura completa e redirect permanenti](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes) da ogni vecchio URL al nuovo, brevi (niente lunghe catene) e mai riversati sulla home.',
    },
    {
      type: 'list',
      items: [
        '**Agente:** ordina ogni vecchio URL per tipo (prodotto, collezione, articolo, pagina, altro), lo abbina al nuovo catalogo per handle, titolo e attributi e scrive l’abbinamento con una breve motivazione. Controlla anche che ogni vecchio URL risponda 404 sul nuovo store, perché Shopify [reindirizza solo gli URL che mostrano “Page not found”](https://help.shopify.com/en/manual/online-store/menus-and-links/url-redirect) e non può reindirizzare alcuni percorsi riservati come `/cart`.',
        '**Persona:** decide le pagine senza un vero equivalente (redirect alla collezione più vicina, oppure lasciarle in 404) e verifica un campione a mano.',
        '**Controllo:** ogni destinazione risponde 200, nessuna catena, nessuna home come ripiego e il campione verificato a occhio.',
      ],
    },
    {
      type: 'paragraph',
      text: 'Il nostro caso studio [Nazzi](/it/casi-studio/integratori-nazzi-dtc-shopify), passato da WooCommerce, racconta l’esito del nostro lavoro su quello store, non il lavoro di un agente: 215 URL archiviati del vecchio sito controllati uno per uno, 138 con un redirect 301, 77 in 404, e il CSV dei redirect consegnato da importare in Shopify. Tieni i redirect attivi a lungo: Google dice [in genere almeno un anno](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes). Il metodo in cinque passi e un template sono in [redirect 301 su Shopify](/it/blog/redirect-301-shopify).',
    },
    { type: 'h3', text: '4. Migrazione dei dati' },
    {
      type: 'paragraph',
      text: '**La migrazione dei dati porta prodotti, clienti e ordini su Shopify nell’ordine giusto, prima su uno store di sviluppo e poi su quello vero.** [La pagina di Shopify sulla migrazione](https://help.shopify.com/en/manual/migrating-to-shopify) dice di importare prima i prodotti, poi i clienti, poi gli ordini storici, e tra i contenuti che si possono spostare elenca blog e pagine.',
    },
    {
      type: 'list',
      items: [
        '**Agente:** esegue l’import sullo store di sviluppo a lotti, registra ogni lotto, ritenta solo ciò che è fallito dopo aver verificato che non fosse già passato (niente prodotti duplicati) e scrive un report di riconciliazione, vecchio store contro nuovo.',
        '**Persona:** legge il report di riconciliazione riga per riga e approva l’esecuzione sullo store vero, l’unico passo che scrive dati reali.',
        '**Controllo:** conteggi e totali vecchio contro nuovo, con ogni differenza spiegata.',
      ],
    },
    { type: 'h3', text: '5. Tracking' },
    {
      type: 'paragraph',
      text: '**Il tracking deve funzionare dal primo giorno, perché dopo il passaggio non puoi ricostruire numeri che non hai registrato.** È un lavoro di confronto, e gli agenti confrontano bene.',
    },
    {
      type: 'list',
      items: [
        '**Agente:** elenca gli eventi del vecchio store (acquisto, aggiunta al carrello, passi del checkout, iscrizione alla newsletter), li confronta con il nuovo, fa partire eventi di prova e segnala cosa manca o manda parametri sbagliati.',
        '**Persona:** decide quali eventi e quali regole di attribuzione contano e cosa permette il banner dei consensi.',
        '**Controllo:** un audit del tracking prima e dopo. Il nostro [caso studio Cumini](/it/casi-studio/cumini-luxury-fashion-ecommerce) riporta un punteggio dell’audit del tracking da 31 a 92 su 100 attorno alla migrazione.',
      ],
    },
    { type: 'h3', text: '6. QA prima e dopo il go live' },
    {
      type: 'paragraph',
      text: '**Il QA si fa due volte, sulla copia prima del go live e sullo store online dopo, e in entrambi i casi chi controlla non è chi ha fatto il lavoro.** [Shopify consiglia di fare ordini di prova prima del lancio](https://help.shopify.com/en/manual/migrating-to-shopify) per verificare pagamenti riusciti e falliti, rimborsi, annullamenti ed evasione.',
    },
    {
      type: 'list',
      items: [
        '**Agente:** il controllore esegue criteri scritti (prezzi, varianti, immagini, redirect, codici di stato, dati strutturati, email di notifica). Dopo il go live ripassa l’elenco dei vecchi URL, guarda i 404 in Search Console e verifica che gli eventi continuino a partire.',
        '**Persona:** fa gli ordini di prova, guarda da telefono le pagine che contano e dà l’approvazione al go live, che comprende il cambio di dominio.',
        '**Controllo:** una checklist di go live in cui ogni voce bloccante ha un responsabile e una voce bloccante non superata ferma il passaggio.',
      ],
    },
    { type: 'h3', text: 'La divisione completa in un elenco' },
    {
      type: 'table',
      headers: ['Fase', 'Agente', 'Persona', 'Controllo'],
      rows: [
        [
          '**Inventario**',
          'L’agente raccoglie',
          'Una persona decide cosa si sposta',
          'Il controllo è un conteggio per tipo',
        ],
        [
          '**Catalogo**',
          'L’agente normalizza e mappa',
          'Una persona approva i casi ambigui',
          'Un controllore separato confronta con la fonte',
        ],
        [
          '**Redirect**',
          'L’agente abbina e testa',
          'Una persona decide le pagine senza equivalente',
          'Il controllo sono i codici di stato più un campione a mano',
        ],
        [
          '**Dati**',
          'L’agente importa a lotti su uno store di sviluppo',
          'Una persona approva l’esecuzione vera',
          'Il controllo è il report di riconciliazione',
        ],
        [
          '**Tracking**',
          'L’agente confronta gli eventi',
          'Una persona sceglie cosa conta',
          'Il controllo è l’audit prima e dopo',
        ],
        [
          '**QA**',
          'Il controllore esegue i criteri',
          'Una persona fa gli ordini di prova e approva il go live',
          'Il controllo è la checklist di go live',
        ],
      ],
    },
    { type: 'h2', text: 'Cosa deve restare sempre a una persona in una migrazione?' },
    {
      type: 'paragraph',
      text: '**Decisioni, approvazioni e azioni irreversibili restano sempre a una persona.** Decisioni: cosa si sposta, la struttura degli URL, quale vecchia pagina merita un redirect, quali strumenti tiene lo store. Approvazioni: la tabella di mappatura, il campione dei redirect, l’esecuzione sullo store vero, il go live. Azioni irreversibili: sovrascrivere prodotti online, cancellare qualsiasi cosa, spostare il dominio, chiudere il vecchio store, mandare un’email ai tuoi clienti.',
    },
    {
      type: 'paragraph',
      text: 'L’import CSV mostra il perché. Nelle [regole del CSV di Shopify](https://help.shopify.com/en/manual/products/import-export/using-csv) le colonne vuote sovrascrivono i valori esistenti e “Overwrite products with matching handles” aggiorna i prodotti che esistono già. Veloce e giusto è ottimo; veloce e sbagliato su dati veri è un brutto pomeriggio. Quattro regole tengono un agente dentro i confini:',
    },
    {
      type: 'list',
      items: [
        '**Minimo privilegio:** sola lettura sul vecchio store, scrittura solo su uno store di sviluppo, scrittura sullo store vero solo per un’esecuzione approvata.',
        '**Prima lo store di sviluppo:** ogni import gira lì prima di toccare i dati veri.',
        '**Tutto registrato:** cosa è partito, su quali elementi, con quale esito, così ogni passo si può ricostruire e annullare.',
        '**I contenuti importati sono dati, mai istruzioni:** la descrizione di un prodotto o la nota di un cliente può contenere testo che prova a guidare un modello. OWASP lo chiama [prompt injection indiretta](https://genai.owasp.org/llmrisk/llm01-prompt-injection/) e tra le difese elenca il minimo privilegio e l’approvazione umana.',
      ],
    },
    {
      type: 'paragraph',
      text: 'Il quadro completo di ciò che un agente può toccare su uno store è in [sicurezza degli agenti AI su Shopify](/it/blog/sicurezza-agenti-ai-shopify).',
    },
    { type: 'h2', text: 'Come migro da Magento o WooCommerce a Shopify con l’aiuto dell’AI?' },
    {
      type: 'paragraph',
      text: '**Segui le stesse sei fasi e cambia solo la fonte: dove stanno i dati e che aspetto hanno i vecchi URL.** Su Magento il catalogo di solito è la parte pesante (prodotti configurabili, molti set di attributi, più viste dello store), quindi mappatura e mappa dei redirect richiedono più cura. Su WooCommerce molto vive nei plugin e nella struttura dei permalink, quindi viene prima l’inventario dei plugin e dei dati che possiedono.',
    },
    {
      type: 'paragraph',
      text: 'Le nostre guide per piattaforma vanno più a fondo: [Magento su Shopify](/it/blog/migrazione-magento-shopify) e [WooCommerce su Shopify](/it/blog/migrazione-woocommerce-shopify), dove Nazzi è il caso di riferimento. Lo Sprint copre la migrazione a Shopify da qualsiasi piattaforma, e dietro il metodo ci sono oltre sette anni di progetti eCommerce.',
    },
    { type: 'h2', text: 'Come funziona questo metodo nello Shopify Launch Sprint?' },
    {
      type: 'paragraph',
      text: '**Lo Shopify Launch Sprint applica questo metodo: sviluppo con agenti AI, redirect map 1:1 collaudata in automatico e riconciliazione al 100%.** Ogni URL con traffico ha il suo redirect 1:1, testato in automatico prima e dopo il go live. Prodotti, varianti, clienti e storico ordini sono riconciliati al 100%, con ogni conteggio della piattaforma vecchia confrontato con Shopify. I nostri specialisti tengono le decisioni.',
    },
    {
      type: 'paragraph',
      text: 'Il calendario è fisso: 14 giorni, go live tra il giorno 15 e il 30, 90 giorni di supporto e 4 garanzie scritte. Una migrazione è anche il momento più economico per sistemare i dati, perché ogni prodotto viene toccato comunque. Se il tuo store è già su Shopify, la strada più leggera è l’[AI Accelerator](/it/ai-accelerator).',
    },
    { type: 'h2', text: 'Domande frequenti' },
    { type: 'h3', text: 'L’AI può migrare il mio store su Shopify da sola?' },
    {
      type: 'paragraph',
      text: 'No, e non deve. Gli agenti AI fanno il lavoro ripetitivo e controllabile: inventario, mappatura, abbinamento dei redirect, import su uno store di sviluppo, confronti e QA. Una persona decide cosa si sposta, approva la mappatura e l’esecuzione vera e dà il go live.',
    },
    { type: 'h3', text: 'Quali parti di una migrazione a Shopify si possono automatizzare?' },
    {
      type: 'paragraph',
      text: 'Gran parte del volume: l’inventario, la pulizia e la mappatura del catalogo, la prima bozza della mappa dei redirect 301, gli import a lotti su uno store di sviluppo, il report di riconciliazione, i confronti del tracking e i controlli di QA. Le decisioni e i passi irreversibili non si automatizzano.',
    },
    { type: 'h3', text: 'È sicuro dare a un agente AI l’accesso al mio store?' },
    {
      type: 'paragraph',
      text: 'È sicuro quando l’accesso è limitato: sola lettura sul vecchio store, uno store di sviluppo per le scritture, un’unica esecuzione approvata sullo store vero, un registro di ogni azione. Tratta i contenuti importati come dati, mai come istruzioni, come raccomanda OWASP per la prompt injection indiretta.',
    },
    { type: 'h3', text: 'Mi serve ancora un’app di migrazione o un CSV?' },
    {
      type: 'paragraph',
      text: 'L’agente lavora attraverso quegli stessi canali. Shopify elenca import CSV, app di migrazione, un Partner e una soluzione su misura con le API di Shopify come modi per spostare uno store, e un agente li usa come strumenti. Quello che aggiunge è velocità, coerenza e controlli.',
    },
    { type: 'h3', text: 'Come aiuta l’AI con i redirect SEO in una migrazione?' },
    {
      type: 'paragraph',
      text: 'Ordina ogni vecchio URL per tipo, lo abbina alla nuova pagina, verifica che ogni vecchio URL risponda 404 sul nuovo store e che ogni destinazione risponda 200, e scrive il CSV. Una persona decide le pagine senza equivalente e controlla un campione a mano.',
    },
    { type: 'h3', text: 'Quanto dura una migrazione a Shopify con l’AI?' },
    {
      type: 'paragraph',
      text: 'Dipende da catalogo, integrazioni e design. Lo Shopify Launch Sprint segue un calendario fisso di 14 giorni, con go live tra il giorno 15 e il 30 e 90 giorni di supporto dopo.',
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
  faqEn: [
    {
      question: 'Can AI migrate my store to Shopify by itself?',
      answer:
        'No, and it should not. AI agents do the repetitive, checkable work: inventory, mapping, redirect matching, imports on a development store, comparisons and QA. A person decides what moves, approves the mapping and the live run, and gives the go-live.',
    },
    {
      question: 'Which parts of a Shopify migration can be automated?',
      answer:
        'Most of the volume: the inventory, catalog cleanup and mapping, the first draft of the 301 redirect map, batched imports on a development store, the reconciliation report, tracking comparisons and the QA checks. The decisions and the irreversible steps are not automated.',
    },
    {
      question: 'Is it safe to give an AI agent access to my store?',
      answer:
        'It is safe when access is limited: read-only on the old store, a development store for writes, one approved run on the live store, a log of every action. Treat imported content as data, never as instructions, as OWASP recommends for indirect prompt injection.',
    },
    {
      question: 'Do I still need a migration app or a CSV?',
      answer:
        'The agent works through those same channels. Shopify lists CSV import, migration apps, a Partner and a custom solution on the Shopify API as the ways to move a store, and an agent uses them as tools. What it adds is speed, consistency and checks.',
    },
    {
      question: 'How does AI help with SEO redirects in a migration?',
      answer:
        'It sorts every old URL by type, matches it to the new page, tests that each old URL answers 404 on the new store and that each target answers 200, and writes the CSV. A person decides the pages with no equivalent and checks a sample by hand.',
    },
    {
      question: 'How long does a migration to Shopify with AI take?',
      answer:
        'It depends on catalog, integrations and design. The Shopify Launch Sprint runs on a fixed 14-day calendar, with go-live between day 15 and 30 and 90 days of support after it.',
    },
  ],
  faqIt: [
    {
      question: 'L’AI può migrare il mio store su Shopify da sola?',
      answer:
        'No, e non deve. Gli agenti AI fanno il lavoro ripetitivo e controllabile: inventario, mappatura, abbinamento dei redirect, import su uno store di sviluppo, confronti e QA. Una persona decide cosa si sposta, approva la mappatura e l’esecuzione vera e dà il go live.',
    },
    {
      question: 'Quali parti di una migrazione a Shopify si possono automatizzare?',
      answer:
        'Gran parte del volume: l’inventario, la pulizia e la mappatura del catalogo, la prima bozza della mappa dei redirect 301, gli import a lotti su uno store di sviluppo, il report di riconciliazione, i confronti del tracking e i controlli di QA. Le decisioni e i passi irreversibili non si automatizzano.',
    },
    {
      question: 'È sicuro dare a un agente AI l’accesso al mio store?',
      answer:
        'È sicuro quando l’accesso è limitato: sola lettura sul vecchio store, uno store di sviluppo per le scritture, un’unica esecuzione approvata sullo store vero, un registro di ogni azione. Tratta i contenuti importati come dati, mai come istruzioni, come raccomanda OWASP per la prompt injection indiretta.',
    },
    {
      question: 'Mi serve ancora un’app di migrazione o un CSV?',
      answer:
        'L’agente lavora attraverso quegli stessi canali. Shopify elenca import CSV, app di migrazione, un Partner e una soluzione su misura con le API di Shopify come modi per spostare uno store, e un agente li usa come strumenti. Quello che aggiunge è velocità, coerenza e controlli.',
    },
    {
      question: 'Come aiuta l’AI con i redirect SEO in una migrazione?',
      answer:
        'Ordina ogni vecchio URL per tipo, lo abbina alla nuova pagina, verifica che ogni vecchio URL risponda 404 sul nuovo store e che ogni destinazione risponda 200, e scrive il CSV. Una persona decide le pagine senza equivalente e controlla un campione a mano.',
    },
    {
      question: 'Quanto dura una migrazione a Shopify con l’AI?',
      answer:
        'Dipende da catalogo, integrazioni e design. Lo Shopify Launch Sprint segue un calendario fisso di 14 giorni, con go live tra il giorno 15 e il 30 e 90 giorni di supporto dopo.',
    },
  ],
}

export default article
