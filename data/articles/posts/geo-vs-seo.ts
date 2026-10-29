import type { Article } from '../index'

const article: Article = {
  slug: 'geo-vs-seo',
  slugIt: 'geo-vs-seo',
  title: 'GEO vs SEO for Shopify Stores: What Changes and What to Do First',
  titleIt: 'GEO vs SEO per uno store Shopify: cosa cambia e cosa fare prima',
  seoTitle: 'GEO vs SEO for Shopify Stores: What to Do First',
  seoTitleIt: 'GEO vs SEO per Shopify: cosa fare prima',
  seoDescription:
    'GEO vs SEO for a Shopify store: what each task does for Google and for ChatGPT, Perplexity and AI Overviews, and the order to do them in.',
  seoDescriptionIt:
    'GEO vs SEO per uno store Shopify: cosa fa ogni attività per Google e per ChatGPT, Perplexity e AI Overviews, e in che ordine farle.',
  excerpt:
    'GEO vs SEO for a Shopify store, task by task: product data, schema, reviews, feeds, llms.txt and mentions on other sites, with the effect of each on Google and on AI answers, and the rule for what to do first.',
  excerptIt:
    'GEO vs SEO per uno store Shopify, attività per attività: dati prodotto, schema, recensioni, feed, llms.txt e menzioni su altri siti, con l’effetto di ciascuna su Google e sulle risposte AI, e la regola su cosa fare prima.',
  ledeEn:
    'GEO vs SEO, for a Shopify store, is not a choice between two jobs. It is one list of tasks, and each task helps Google, the AI assistants or both. Here is the list, task by task, and the order we would do it in.',
  ledeIt:
    'GEO vs SEO, per uno store Shopify, non è una scelta tra due lavori. È un’unica lista di attività, e ognuna aiuta Google, gli assistenti AI o tutti e due. Ecco la lista, attività per attività, e l’ordine in cui la faremmo.',
  image: '/images/blog/geo-vs-seo-cover.png',
  imageAlt: 'Copertina astratta, sfondo sabbia sfumato, con un’onda di puntini di dimensione variabile',
  imageAltEn: 'Abstract cover, softly graded sand background with a wave of dots changing size',
  articleType: 'BlogPosting',
  date: '2026-10-29',
  datePublishedIso: '2026-10-29T09:00:00+00:00',
  dateModifiedIso: '2026-10-29T09:00:00+00:00',
  wordCount: 2200,
  articleSection: 'AI search and GEO',
  readingTimeMinutes: 9,
  keywordsEn:
    'geo vs seo, geo vs seo for shopify, aeo vs seo, generative engine optimization, geo seo, is geo replacing seo, llms.txt shopify',
  keywordsIt:
    'geo vs seo, differenza tra seo e geo, geo seo shopify, aeo e geo, generative engine optimization, ai seo, llms.txt shopify',
  content: [
    {
      type: 'paragraph',
      text: '**GEO vs SEO comes down to the goal: SEO earns a ranking and a click on Google, GEO (generative engine optimization) earns a mention or a citation inside an answer from ChatGPT, Perplexity, Copilot or Google’s AI Overviews.** On a Shopify store most tasks serve both goals and a few serve only one. This guide sorts them, so you know what to do first.',
    },
    {
      type: 'paragraph',
      text: 'It is the comparison and the priorities. The hands-on guide, with the four layers of a Shopify store and what we did on our own site, is [GEO for Shopify](/blog/geo-for-shopify): read it after this one.',
    },
    { type: 'h2', text: 'What is the difference between GEO and SEO on a Shopify store?' },
    {
      type: 'paragraph',
      text: '**SEO is built to win a position in a list of links; GEO is built to be picked as the source of a sentence.** In classic search a shopper sees ten results and chooses. In an AI answer the assistant reads several pages, writes one reply and names a few sources or a few products. Your page can be excellent and still be left out of that reply.',
    },
    { type: 'paragraph', text: 'For a store, four things change:' },
    {
      type: 'list',
      items: [
        '**The unit.** SEO ranks pages. An assistant lifts a passage or a product record, so every section and every product has to make sense on its own.',
        '**The prize.** SEO pays in clicks. GEO pays in being named, sometimes with no visit, sometimes with a purchase inside the chat.',
        '**The inputs.** SEO reads your pages and your links. Assistants also read your catalog data and what other sites say about you.',
        '**The measurement.** A ranking is a number. A citation is a sample of an answer that changes between runs.',
      ],
    },
    {
      type: 'paragraph',
      text: 'The channel is growing: AI-driven traffic and orders to Shopify stores tripled year over year in the second quarter of 2026, a platform-wide figure that [Digital Commerce 360](https://www.digitalcommerce360.com/2026/08/06/how-shopify-is-approaching-agentic-ai-2026/) attributes to Shopify’s president on the earnings call. It says nothing about your store, but it tells you where the attention is going.',
    },
    { type: 'h2', text: 'Are GEO, AEO and AI SEO the same thing?' },
    {
      type: 'paragraph',
      text: '**Mostly yes: they are different names for the work of getting your content used inside AI answers.** GEO (generative engine optimization) is the name most used for AI assistants in general. AEO (answer engine optimization) is the older label for winning the answer box, and “AI SEO” is the loose version of both. For a store the label changes nothing, because the tasks below are the same. We say GEO, and when a search says AEO or AI SEO we mean the same list.',
    },
    { type: 'h2', text: 'Is GEO replacing SEO, and is SEO dead?' },
    {
      type: 'paragraph',
      text: '**No. GEO sits on top of SEO, and an AI answer built on Google’s index cannot quote a page that is not in it.** Google states that a page must be [indexed and eligible to be shown in Google Search with a snippet](https://developers.google.com/search/docs/appearance/ai-features) to be a supporting link in AI Overviews or AI Mode, and that there are no additional requirements or special optimizations. Clicks from these features are counted in the Web search type of your Performance report. Google’s [guide to optimizing for generative AI search](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide) says the same from the other side: you need no new files and no special markup to appear.',
    },
    {
      type: 'paragraph',
      text: 'The other assistants have their own gate. [OpenAI’s crawler documentation](https://developers.openai.com/api/docs/bots) says a site that opts out of OAI-SearchBot will not appear in ChatGPT search answers, and that each crawler setting is independent of the others. So “SEO is dead” is the wrong reading. The right one: a closed door in your robots.txt now costs you in more than one place.',
    },
    {
      type: 'h2',
      text: 'Same Shopify task, different effect: what does each one do for SEO and for GEO?',
    },
    {
      type: 'paragraph',
      text: '**Most Shopify tasks help both channels, but not equally, and one of them does nothing for Google.** These are the eight we sort in every project, with the effect on each side.',
    },
    {
      type: 'table',
      headers: ['Task', 'SEO', 'GEO'],
      rows: [
        [
          '**1. Product facts written as text** (material, size, ingredients, how to use it, what is in the box, shipping, returns)',
          'Gives the page the words shoppers type, so it matches long and specific queries.',
          'This is the main input, because shoppers ask AI for products by attribute, and a fact that lives only in an image or in a late-loading accordion cannot be quoted.',
        ],
        [
          '**2. Structured data (JSON-LD) that matches the page**',
          'Makes the page eligible for rich results; Google’s [Product structured data](https://developers.google.com/search/docs/appearance/structured-data/product) page separates product snippets from merchant listings with shipping and returns.',
          'Google says no special schema is needed for its AI features, so the gain is indirect, unambiguous facts for any machine reading the page. Shopify’s [structured_data filter](https://shopify.dev/docs/api/liquid/filters/structured_data) outputs Product, or ProductGroup when the product has variants: check that your Shopify theme uses it and that price and availability equal what the shopper sees.',
        ],
        [
          '**3. Real reviews inside the product page**',
          'Fresh text on the page, and review details that product snippets can show.',
          'A review in the page text is a passage an assistant can quote about real use; a widget that loads in a pop-up may never be read.',
        ],
        [
          '**4. Product feeds and AI channels** (Google Merchant Center, Shopify Agentic Storefronts)',
          'Merchant Center data is how products reach Google’s shopping results.',
          'Google’s guide names Merchant Center as a way for products to be visible in AI responses, and Shopify’s [Agentic Storefronts](https://www.shopify.com/news/winter-26-edition-agentic-storefronts) publish your catalog to ChatGPT, Perplexity and Microsoft Copilot from one setup, with you remaining the merchant of record. Here the catalog is the page.',
        ],
        [
          '**5. Citable content** (collection intros, buying guides, shipping, returns and sizing pages)',
          'Pages that rank for the broad and informational queries.',
          'The passage is the unit, so each section opens with its own answer and the policies are real, crawlable pages with plain sentences.',
        ],
        [
          '**6. Crawl access** (robots.txt, apps and firewalls in front of the store)',
          'Googlebot has to reach and index the page.',
          'OAI-SearchBot decides whether you appear in ChatGPT search, GPTBot relates to training, and you can allow one and block the other.',
        ],
        [
          '**7. Mentions on other sites** (directories, press, partner listings, customer reviews, forums)',
          'Links from them are a ranking signal.',
          'Assistants tend to lean on what third parties say about you, so a brand that others name is easier to name. Google adds a warning: seeking inauthentic mentions is not as helpful as it might seem. Earn them, do not manufacture them.',
        ],
        [
          '**8. llms.txt**',
          'Nothing, [Google says](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide) Google Search does not use these files.',
          'No guaranteed effect, other agents may read it. Cost: about an hour. Shopify already serves a platform-generated one on the stores we checked on 27 October 2026, as explained in [GEO for Shopify](/blog/geo-for-shopify).',
        ],
      ],
    },
    {
      type: 'paragraph',
      text: 'Look at the pattern. Tasks 1 to 6 do something for Google and for the assistants. Task 7 is slow and partly out of your hands. Task 8 does nothing for Google at all. That already gives you the order of work.',
    },
    { type: 'h2', text: 'What should a Shopify store do first: SEO or GEO?' },
    {
      type: 'paragraph',
      text: '**Do first the tasks that help both channels, and leave for last the ones that help only the newest one.** My rule: a task that serves Google and the assistants always comes before a task that serves only one of them, and a file that Google does not read never comes before a product page that nobody can find. In order:',
    },
    {
      type: 'list',
      items: [
        '**Indexing and access.** Key pages indexed, no app or firewall blocking the crawlers you want, redirects intact if you migrated (our [SEO checklist for a Shopify migration](/blog/shopify-migration-seo-checklist) covers it).',
        '**Product facts as text and matching Product markup,** best sellers first.',
        '**Reviews in the page, answer-first intros on the main collections, real shipping, returns and sizing pages.**',
        '**Catalog feeds:** Merchant Center and Agentic Storefronts, with complete attributes and variants and accurate price and availability.',
        '**Mentions on other sites,** earned over months: directories, press, partner listings, customer reviews.',
        '**llms.txt and a monthly list of prompts** to track what the assistants say.',
      ],
    },
    {
      type: 'paragraph',
      text: 'The first three steps cost time and no money, and they pay whether or not any assistant ever sends you a visit. That is why they come first. If you are about to migrate, they come even earlier: a migration touches every product anyway, so it is the cheapest moment to fix the data.',
    },
    { type: 'h2', text: 'What does a real llms.txt look like, and where does it rank?' },
    {
      type: 'paragraph',
      text: '**A useful llms.txt is a short plain-text brief about your business, written to be quoted, and in our list it comes last.** Ours is at [noprob.agency/llms.txt](https://noprob.agency/llms.txt), following the [llms.txt proposal](https://llmstxt.org). It contains:',
    },
    {
      type: 'list',
      items: [
        'a one-paragraph definition of what noprob agency does;',
        'an About block: company, founding year, founder, main platform, languages;',
        'each service with its public price and a link to its page;',
        'key differentiators;',
        'proof points with the date of the last check and the rule that we publish percentages, never client revenue;',
        'the ideal client, the contact, and links to guides, case studies and articles.',
      ],
    },
    {
      type: 'paragraph',
      text: 'Why keep it, if [Google does not use it](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)? Because it is the one place where price and proof are stated exactly the way we want them quoted, and any agent that reads it finds the same facts as our site. We do not count it as SEO and we do not count on it for GEO. For a store the same idea applies to your policies and your catalog facts: open `yourstore.com/llms.txt` first, see what Shopify serves, and spend the hour on a product page instead.',
    },
    { type: 'h2', text: 'How do you measure GEO next to SEO?' },
    {
      type: 'paragraph',
      text: '**Measure SEO with Search Console and GEO with a short list of prompts, and never merge them into one number.** Google reports AI features inside the Web performance report, so that traffic is already in your SEO figures. For ChatGPT, Perplexity and Copilot, look at referral sources in your analytics (some visits carry no referrer, so you will undercount) and, with Agentic Storefronts, at the AI channel in the Shopify admin. Then add ten prompts a customer would ask and run them by hand every month. The details are in [GEO for Shopify](/blog/geo-for-shopify).',
    },
    { type: 'h2', text: 'How do we build both into a Shopify store?' },
    {
      type: 'paragraph',
      text: '**In the [Shopify Launch Sprint](/shopify-migration-sprint), our Custom AI System builds the data side into the store from day one: product data, structured data and an automatic GEO layer, in a store ready for AI agents.** Every new product is born with schema and data. A migration is also the riskiest moment for SEO, so the redirects come first: see our [guide to migrating to Shopify](/shopify-migration). The Sprint takes 14 days, go-live is between day 15 and 30, and 90 days of support follow.',
    },
    {
      type: 'paragraph',
      text: 'On [Nazzi](/use-cases/integratori-nazzi-dtc-shopify), a supplement brand moved from WooCommerce, we published a discovery sitemap for agents. Separately, Search Console shows Google clicks in the 28 days to 9 October 2026 at 2.7 times the same days of 2025. Both channels rest on the same foundations. If your store is already on Shopify, the [AI Accelerator](/ai-accelerator) is the lighter route: 30 days one-to-one to find the growth opportunities of your store and switch on the first AI solutions with your team.',
    },
    {
      type: 'paragraph',
      text: 'To go deeper on the AI side: [agentic commerce for Shopify](/blog/agentic-commerce-shopify), [ChatGPT shopping for Shopify](/blog/chatgpt-shopping-shopify), [Shopify MCP explained](/blog/shopify-mcp) and [AI agents for Shopify](/blog/ai-agents-for-shopify).',
    },
    { type: 'h2', text: 'Frequently asked questions' },
    { type: 'h3', text: 'What is the difference between GEO and SEO?' },
    {
      type: 'paragraph',
      text: 'SEO aims at a ranking and a click on a search engine. GEO aims at being mentioned or cited inside an AI answer. Most of the work is shared: crawlable, indexed, original pages with accurate product data.',
    },
    { type: 'h3', text: 'Is GEO replacing SEO, and is SEO dead with AI?' },
    {
      type: 'paragraph',
      text: 'No. Google says a page must be indexed and eligible to show with a snippet to be linked in AI Overviews and AI Mode, with no special optimization required. GEO builds on SEO; it does not replace it.',
    },
    { type: 'h3', text: 'Is AI SEO the same as GEO, and what about AEO?' },
    {
      type: 'paragraph',
      text: 'In practice yes. GEO, AEO (answer engine optimization) and AI SEO are names for the same work: making your content and data easy for AI answers to use. For a Shopify store the task list does not change with the label.',
    },
    { type: 'h3', text: 'Do I need an llms.txt file on Shopify?' },
    {
      type: 'paragraph',
      text: 'No. [Google says](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide) Google Search does not use llms.txt, and Shopify already serves a platform-generated one on the stores we checked. Check yourstore.com/llms.txt first and put your effort into product facts, schema and answer-first pages.',
    },
    { type: 'h3', text: 'What should I do first, GEO or SEO?' },
    {
      type: 'paragraph',
      text: 'Start with what helps both: indexed pages, open crawler access, product facts written as text, matching Product markup and real reviews on the page. Do llms.txt and the monthly prompt check last.',
    },
    { type: 'h3', text: 'Can I measure GEO like SEO?' },
    {
      type: 'paragraph',
      text: 'Only partly. Search Console includes Google’s AI features in the Web report, analytics shows referrals from chatgpt.com or perplexity.ai, and Shopify attributes orders from Agentic Storefronts. Add a fixed list of prompts you run by hand every month.',
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
      text: '**GEO vs SEO si riduce all’obiettivo: la SEO guadagna una posizione e un clic su Google, la GEO (generative engine optimization) guadagna una menzione o una citazione dentro la risposta di ChatGPT, Perplexity, Copilot o delle AI Overviews di Google.** Su uno store Shopify quasi tutte le attività servono a tutti e due gli obiettivi e poche servono a uno solo. Questa guida le ordina, così sai cosa fare prima.',
    },
    {
      type: 'paragraph',
      text: 'È il confronto con le priorità. La guida operativa, con i quattro livelli di uno store Shopify e ciò che abbiamo fatto sul nostro sito, è [GEO SEO per Shopify](/it/blog/geo-seo-shopify): leggila dopo questa.',
    },
    { type: 'h2', text: 'Qual è la differenza tra SEO e GEO su uno store Shopify?' },
    {
      type: 'paragraph',
      text: '**La SEO serve a vincere una posizione in un elenco di link; la GEO serve a farsi scegliere come fonte di una frase.** Nella ricerca classica chi compra vede dieci risultati e sceglie. In una risposta AI l’assistente legge più pagine, scrive una risposta sola e nomina poche fonti o pochi prodotti. La tua pagina può essere ottima e restare fuori da quella risposta.',
    },
    { type: 'paragraph', text: 'Per uno store cambiano quattro cose:' },
    {
      type: 'list',
      items: [
        '**L’unità.** La SEO posiziona pagine. Un assistente preleva un passaggio o una scheda dati, quindi ogni sezione e ogni prodotto devono avere senso da soli.',
        '**Il premio.** La SEO paga in clic. La GEO paga in citazioni, a volte senza visita, a volte con un acquisto dentro la chat.',
        '**Gli ingressi.** La SEO legge le tue pagine e i tuoi link. Gli assistenti leggono anche i dati del catalogo e ciò che dicono di te gli altri siti.',
        '**La misura.** Una posizione è un numero. Una citazione è il campione di una risposta che cambia da una volta all’altra.',
      ],
    },
    {
      type: 'paragraph',
      text: 'Il canale cresce: traffico e ordini generati dall’AI verso gli store Shopify sono triplicati su base annua nel secondo trimestre 2026, un dato dell’intera piattaforma che [Digital Commerce 360](https://www.digitalcommerce360.com/2026/08/06/how-shopify-is-approaching-agentic-ai-2026/) attribuisce al presidente di Shopify nella presentazione dei risultati. Non dice nulla sul tuo store, ma indica dove va l’attenzione.',
    },
    { type: 'h2', text: 'GEO, AEO e AI SEO sono la stessa cosa?' },
    {
      type: 'paragraph',
      text: '**In gran parte sì: sono nomi diversi dello stesso lavoro, far usare i tuoi contenuti dalle risposte AI.** GEO (generative engine optimization) è il nome più usato per gli assistenti AI in generale. AEO (answer engine optimization) è l’etichetta più vecchia per vincere il riquadro della risposta, e “AI SEO” è la versione generica di entrambe. Per uno store l’etichetta non cambia nulla, perché le attività qui sotto sono le stesse. Noi diciamo GEO, e quando una ricerca dice AEO o AI SEO intendiamo la stessa lista.',
    },
    { type: 'h2', text: 'La GEO sostituisce la SEO? La SEO è morta?' },
    {
      type: 'paragraph',
      text: '**No. La GEO sta sopra la SEO, e una risposta AI costruita sull’indice di Google non può citare una pagina che nell’indice non c’è.** Google dice che una pagina deve essere [indicizzata e idonea a comparire in Google Search con uno snippet](https://developers.google.com/search/docs/appearance/ai-features) per essere un link di supporto in AI Overviews o AI Mode, e che non ci sono requisiti aggiuntivi né ottimizzazioni speciali. I clic da queste funzioni sono conteggiati nel tipo di ricerca Web del rapporto Rendimento. La [guida di Google all’ottimizzazione per la ricerca con AI generativa](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide) dice lo stesso dall’altro lato: non servono nuovi file né markup speciali per comparire.',
    },
    {
      type: 'paragraph',
      text: 'Gli altri assistenti hanno la loro porta. La [documentazione dei crawler di OpenAI](https://developers.openai.com/api/docs/bots) dice che un sito che esclude OAI-SearchBot non compare nelle risposte della ricerca di ChatGPT, e che ogni impostazione dei crawler è indipendente dalle altre. Quindi “la SEO è morta” è la lettura sbagliata. Quella giusta: una porta chiusa nel robots.txt ora costa in più di un posto.',
    },
    {
      type: 'h2',
      text: 'Stessa attività su Shopify, effetto diverso: cosa fa ognuna per la SEO e per la GEO?',
    },
    {
      type: 'paragraph',
      text: '**La maggior parte delle attività su Shopify aiuta entrambi i canali, ma non allo stesso modo, e una non fa nulla per Google.** Sono le otto che ordiniamo in ogni progetto, con l’effetto su ciascun lato.',
    },
    {
      type: 'table',
      headers: ['Attività', 'SEO', 'GEO'],
      rows: [
        [
          '**1. Fatti del prodotto scritti come testo** (materiale, misure, ingredienti, modo d’uso, cosa c’è nella confezione, spedizione, resi)',
          'Dà alla pagina le parole che chi cerca digita, quindi risponde a query lunghe e specifiche.',
          'È l’ingresso principale, perché chi compra chiede i prodotti all’AI per caratteristiche, e un fatto che sta solo in un’immagine o in una fisarmonica che si carica in ritardo non si può citare.',
        ],
        [
          '**2. Dati strutturati (JSON-LD) coerenti con la pagina**',
          'Rendono la pagina idonea ai risultati multimediali; la pagina di Google sui [dati strutturati Product](https://developers.google.com/search/docs/appearance/structured-data/product) distingue gli snippet di prodotto dalle schede del commerciante con spedizione e resi.',
          'Google dice che per le sue funzioni AI non serve nessuno schema speciale, quindi il vantaggio è indiretto, fatti non ambigui per qualunque macchina legga la pagina. Il [filtro structured_data](https://shopify.dev/docs/api/liquid/filters/structured_data) di Shopify produce Product, o ProductGroup se il prodotto ha varianti: verifica che il tuo tema Shopify lo usi e che prezzo e disponibilità coincidano con ciò che vede chi compra.',
        ],
        [
          '**3. Recensioni vere dentro la scheda prodotto**',
          'Testo fresco sulla pagina e dettagli di recensione che gli snippet di prodotto possono mostrare.',
          'Una recensione nel testo della pagina è un passaggio che un assistente può citare sull’uso reale; un widget che si apre in un pop-up potrebbe non essere mai letto.',
        ],
        [
          '**4. Feed prodotto e canali AI** (Google Merchant Center, Agentic Storefronts di Shopify)',
          'I dati di Merchant Center sono la via con cui i prodotti arrivano nei risultati shopping di Google.',
          'La guida di Google cita Merchant Center come modo per rendere visibili i prodotti nelle risposte AI, e gli [Agentic Storefronts](https://www.shopify.com/news/winter-26-edition-agentic-storefronts) di Shopify pubblicano il catalogo su ChatGPT, Perplexity e Microsoft Copilot con un’unica configurazione, e tu resti il merchant of record. Qui il catalogo è la pagina.',
        ],
        [
          '**5. Contenuti citabili** (introduzioni delle collezioni, guide all’acquisto, pagine di spedizione, resi e taglie)',
          'Pagine che si posizionano sulle query ampie e informative.',
          'L’unità è il passaggio, quindi ogni sezione apre con la sua risposta e le policy sono pagine vere, scansionabili, con frasi semplici.',
        ],
        [
          '**6. Accesso dei crawler** (robots.txt, app e firewall davanti allo store)',
          'Googlebot deve raggiungere e indicizzare la pagina.',
          'OAI-SearchBot decide se compari nella ricerca di ChatGPT, GPTBot riguarda l’addestramento, e puoi consentire l’uno e bloccare l’altro.',
        ],
        [
          '**7. Menzioni su altri siti** (directory, stampa, elenchi dei partner, recensioni dei clienti, forum)',
          'I link da quei siti sono un segnale di posizionamento.',
          'Gli assistenti tendono ad appoggiarsi su ciò che dicono di te i terzi, quindi un brand nominato da altri è più facile da nominare. Google avverte: cercare menzioni non autentiche non aiuta quanto sembra. Falle arrivare, non fabbricarle.',
        ],
        [
          '**8. llms.txt**',
          'Niente, [Google dice](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide) che Google Search non usa questi file.',
          'Nessun effetto garantito, altri agenti potrebbero leggerlo. Costo: circa un’ora. Shopify ne serve già uno generato dalla piattaforma sugli store che abbiamo controllato il 27 ottobre 2026, come spieghiamo in [GEO SEO per Shopify](/it/blog/geo-seo-shopify).',
        ],
      ],
    },
    {
      type: 'paragraph',
      text: 'Guarda lo schema. Le attività da 1 a 6 fanno qualcosa per Google e per gli assistenti. La 7 è lenta e in parte fuori dal tuo controllo. La 8 non fa nulla per Google. Questo ti dà già l’ordine del lavoro.',
    },
    { type: 'h2', text: 'Cosa deve fare prima uno store Shopify: SEO o GEO?' },
    {
      type: 'paragraph',
      text: '**Fai prima le attività che aiutano entrambi i canali e lascia per ultime quelle che aiutano solo il più nuovo.** La mia regola: un’attività che serve a Google e agli assistenti viene sempre prima di una che serve a uno solo, e un file che Google non legge non viene mai prima di una scheda prodotto che nessuno riesce a trovare. In ordine:',
    },
    {
      type: 'list',
      items: [
        '**Indicizzazione e accesso.** Pagine chiave indicizzate, nessuna app o firewall che blocchi i crawler che vuoi, redirect intatti se hai migrato (la nostra [checklist SEO per la migrazione a Shopify](/it/blog/migrazione-shopify-seo-checklist) lo copre).',
        '**Fatti del prodotto come testo e markup Product coerente,** a partire dai più venduti.',
        '**Recensioni nella pagina, introduzioni che aprono con la risposta sulle collezioni principali, pagine vere di spedizione, resi e taglie.**',
        '**Feed del catalogo:** Merchant Center e Agentic Storefronts, con attributi e varianti completi e prezzo e disponibilità corretti.',
        '**Menzioni su altri siti,** guadagnate in mesi: directory, stampa, elenchi dei partner, recensioni dei clienti.',
        '**llms.txt e una lista mensile di prompt** per vedere cosa dicono gli assistenti.',
      ],
    },
    {
      type: 'paragraph',
      text: 'I primi tre passi costano tempo e nessun denaro, e rendono anche se nessun assistente ti manderà mai una visita. Per questo vengono per primi. Se stai per migrare vengono ancora prima: una migrazione tocca comunque ogni prodotto, quindi è il momento più economico per sistemare i dati.',
    },
    { type: 'h2', text: 'Com’è fatto un llms.txt vero, e dove sta nella lista?' },
    {
      type: 'paragraph',
      text: '**Un llms.txt utile è una breve scheda in testo semplice sulla tua attività, scritta per essere citata, e nella nostra lista viene per ultimo.** Il nostro è su [noprob.agency/llms.txt](https://noprob.agency/llms.txt) e segue la [proposta llms.txt](https://llmstxt.org). Contiene:',
    },
    {
      type: 'list',
      items: [
        'una definizione in un paragrafo di ciò che fa noprob agency;',
        'un blocco About: società, anno di fondazione, fondatore, piattaforma principale, lingue;',
        'ogni servizio con il suo prezzo pubblico e il link alla pagina;',
        'i punti di differenza;',
        'le prove, con la data dell’ultimo controllo e la regola che pubblichiamo percentuali, mai il fatturato dei clienti;',
        'il cliente ideale, il contatto e i link a guide, casi studio e articoli.',
      ],
    },
    {
      type: 'paragraph',
      text: 'Perché tenerlo, se [Google non lo usa](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)? Perché è l’unico posto in cui prezzi e prove sono scritti esattamente come vogliamo che vengano citati, e qualunque agente lo legga trova gli stessi fatti del nostro sito. Non lo contiamo come SEO e non ci contiamo per la GEO. Per uno store vale la stessa idea con policy e fatti del catalogo: apri prima `tuostore.com/llms.txt`, guarda cosa serve Shopify, e spendi quell’ora su una scheda prodotto.',
    },
    { type: 'h2', text: 'Come si misura la GEO accanto alla SEO?' },
    {
      type: 'paragraph',
      text: '**Misura la SEO con Search Console e la GEO con una lista corta di prompt, e non fonderle mai in un solo numero.** Google riporta le funzioni AI dentro il rapporto sul rendimento Web, quindi quel traffico è già nei tuoi dati SEO. Per ChatGPT, Perplexity e Copilot guarda le fonti di referral in analytics (alcune visite non hanno referrer, quindi sottostimi) e, con gli Agentic Storefronts, il canale AI nell’admin di Shopify. Poi aggiungi dieci prompt che farebbe un cliente e lanciali a mano ogni mese. I dettagli sono in [GEO SEO per Shopify](/it/blog/geo-seo-shopify).',
    },
    { type: 'h2', text: 'Come costruiamo entrambe in uno store Shopify?' },
    {
      type: 'paragraph',
      text: '**Nello [Shopify Launch Sprint](/it/sprint-migrazione-shopify) il nostro Custom AI System costruisce la parte di dati nello store fin dal primo giorno: dati prodotto, dati strutturati e un livello GEO automatico, in uno store pronto per gli agenti AI.** Ogni nuovo prodotto nasce con schema e dati. Una migrazione è anche il momento più rischioso per la SEO, quindi i redirect vengono prima: vedi la nostra [guida alla migrazione a Shopify](/it/migrazione-shopify). Lo Sprint dura 14 giorni, il go-live è tra il giorno 15 e il 30, e seguono 90 giorni di supporto.',
    },
    {
      type: 'paragraph',
      text: 'Su [Nazzi](/it/casi-studio/integratori-nazzi-dtc-shopify), un brand di integratori passato da WooCommerce, abbiamo pubblicato una sitemap di discovery per gli agenti. Separatamente, Search Console mostra i clic da Google nei 28 giorni fino al 9 ottobre 2026 a 2,7 volte gli stessi giorni del 2025. Entrambi i canali poggiano sulle stesse fondamenta. Se il tuo store è già su Shopify, l’[AI Accelerator](/it/ai-accelerator) è la strada più leggera: 30 giorni uno a uno per trovare le opportunità di crescita del tuo store e attivare con il tuo team le prime soluzioni AI.',
    },
    {
      type: 'paragraph',
      text: 'Per approfondire il lato AI: [agentic commerce per Shopify](/it/blog/agentic-commerce-shopify), [ChatGPT shopping per Shopify](/it/blog/chatgpt-shopping-shopify), [Shopify MCP spiegato](/it/blog/shopify-mcp) e [agenti AI per Shopify](/it/blog/agenti-ai-shopify).',
    },
    { type: 'h2', text: 'Domande frequenti' },
    { type: 'h3', text: 'Qual è la differenza tra SEO e GEO?' },
    {
      type: 'paragraph',
      text: 'La SEO punta a una posizione e a un clic su un motore di ricerca. La GEO punta a essere citati o menzionati dentro una risposta AI. Gran parte del lavoro è comune: pagine scansionabili, indicizzate, originali, con dati prodotto corretti.',
    },
    { type: 'h3', text: 'La GEO sostituisce la SEO? La SEO è morta con l’AI?' },
    {
      type: 'paragraph',
      text: 'No. Google dice che una pagina deve essere indicizzata e idonea a comparire con uno snippet per avere un link in AI Overviews e AI Mode, senza ottimizzazioni speciali. La GEO si appoggia sulla SEO, non la sostituisce.',
    },
    { type: 'h3', text: 'AI SEO e GEO sono la stessa cosa? E l’AEO?' },
    {
      type: 'paragraph',
      text: 'In pratica sì. GEO, AEO (answer engine optimization) e AI SEO sono nomi dello stesso lavoro: rendere contenuti e dati facili da usare per le risposte AI. Per uno store Shopify la lista delle attività non cambia con l’etichetta.',
    },
    { type: 'h3', text: 'Serve un file llms.txt su Shopify?' },
    {
      type: 'paragraph',
      text: 'No. [Google dice](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide) che Google Search non usa llms.txt, e Shopify ne serve già uno generato dalla piattaforma sugli store che abbiamo controllato. Apri prima tuostore.com/llms.txt e metti lo sforzo su fatti del prodotto, schema e pagine che aprono con la risposta.',
    },
    { type: 'h3', text: 'Cosa devo fare prima, GEO o SEO?' },
    {
      type: 'paragraph',
      text: 'Parti da ciò che aiuta entrambe: pagine indicizzate, accesso aperto ai crawler, fatti del prodotto scritti come testo, markup Product coerente e recensioni vere nella pagina. llms.txt e il controllo mensile dei prompt vengono per ultimi.',
    },
    { type: 'h3', text: 'Si può misurare la GEO come la SEO?' },
    {
      type: 'paragraph',
      text: 'Solo in parte. Search Console include le funzioni AI di Google nel rapporto Web, analytics mostra i referral da chatgpt.com o perplexity.ai e Shopify attribuisce gli ordini degli Agentic Storefronts. Aggiungi una lista fissa di prompt da lanciare a mano ogni mese.',
    },
    {
      type: 'paragraph',
      text: 'Lo Sprint ha un prezzo pubblico per fatturato: €5.800 sotto i 2 milioni, €8.800 da 2 a 20 milioni, €12.800 sopra i 20 milioni, IVA esclusa, in 4 rate.',
    },
    {
      type: 'paragraph',
      text: 'Lo [Shopify Launch Sprint](/it/sprint-migrazione-shopify) porta il tuo store su Shopify in 14 giorni con il nostro Custom AI System: calendario fisso, prezzo pubblico e 4 garanzie scritte.',
    },
  ],
  faqEn: [
    {
      question: 'What is the difference between GEO and SEO?',
      answer:
        'SEO aims at a ranking and a click on a search engine. GEO aims at being mentioned or cited inside an AI answer. Most of the work is shared: crawlable, indexed, original pages with accurate product data.',
    },
    {
      question: 'Is GEO replacing SEO, and is SEO dead with AI?',
      answer:
        'No. Google says a page must be indexed and eligible to show with a snippet to be linked in AI Overviews and AI Mode, with no special optimization required. GEO builds on SEO; it does not replace it.',
    },
    {
      question: 'Is AI SEO the same as GEO, and what about AEO?',
      answer:
        'In practice yes. GEO, AEO (answer engine optimization) and AI SEO are names for the same work: making your content and data easy for AI answers to use. For a Shopify store the task list does not change with the label.',
    },
    {
      question: 'Do I need an llms.txt file on Shopify?',
      answer:
        'No. Google says Google Search does not use llms.txt, and Shopify already serves a platform-generated one on the stores we checked. Check yourstore.com/llms.txt first and put your effort into product facts, schema and answer-first pages.',
    },
    {
      question: 'What should I do first, GEO or SEO?',
      answer:
        'Start with what helps both: indexed pages, open crawler access, product facts written as text, matching Product markup and real reviews on the page. Do llms.txt and the monthly prompt check last.',
    },
    {
      question: 'Can I measure GEO like SEO?',
      answer:
        'Only partly. Search Console includes Google’s AI features in the Web report, analytics shows referrals from chatgpt.com or perplexity.ai, and Shopify attributes orders from Agentic Storefronts. Add a fixed list of prompts you run by hand every month.',
    },
  ],
  faqIt: [
    {
      question: 'Qual è la differenza tra SEO e GEO?',
      answer:
        'La SEO punta a una posizione e a un clic su un motore di ricerca. La GEO punta a essere citati o menzionati dentro una risposta AI. Gran parte del lavoro è comune: pagine scansionabili, indicizzate, originali, con dati prodotto corretti.',
    },
    {
      question: 'La GEO sostituisce la SEO? La SEO è morta con l’AI?',
      answer:
        'No. Google dice che una pagina deve essere indicizzata e idonea a comparire con uno snippet per avere un link in AI Overviews e AI Mode, senza ottimizzazioni speciali. La GEO si appoggia sulla SEO, non la sostituisce.',
    },
    {
      question: 'AI SEO e GEO sono la stessa cosa? E l’AEO?',
      answer:
        'In pratica sì. GEO, AEO (answer engine optimization) e AI SEO sono nomi dello stesso lavoro: rendere contenuti e dati facili da usare per le risposte AI. Per uno store Shopify la lista delle attività non cambia con l’etichetta.',
    },
    {
      question: 'Serve un file llms.txt su Shopify?',
      answer:
        'No. Google dice che Google Search non usa llms.txt, e Shopify ne serve già uno generato dalla piattaforma sugli store che abbiamo controllato. Apri prima tuostore.com/llms.txt e metti lo sforzo su fatti del prodotto, schema e pagine che aprono con la risposta.',
    },
    {
      question: 'Cosa devo fare prima, GEO o SEO?',
      answer:
        'Parti da ciò che aiuta entrambe: pagine indicizzate, accesso aperto ai crawler, fatti del prodotto scritti come testo, markup Product coerente e recensioni vere nella pagina. llms.txt e il controllo mensile dei prompt vengono per ultimi.',
    },
    {
      question: 'Si può misurare la GEO come la SEO?',
      answer:
        'Solo in parte. Search Console include le funzioni AI di Google nel rapporto Web, analytics mostra i referral da chatgpt.com o perplexity.ai e Shopify attribuisce gli ordini degli Agentic Storefronts. Aggiungi una lista fissa di prompt da lanciare a mano ogni mese.',
    },
  ],
}

export default article
