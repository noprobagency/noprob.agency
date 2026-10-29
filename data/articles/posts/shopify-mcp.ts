import type { Article } from '../index'

const article: Article = {
  slug: 'shopify-mcp',
  slugIt: 'shopify-mcp',
  title: 'Shopify MCP Explained: Which Server Does What for Your Store',
  titleIt: 'Shopify MCP spiegato: quale server fa cosa nel tuo store',
  seoTitle: 'Shopify MCP Explained: Servers, Uses and Risks',
  seoTitleIt: 'Shopify MCP spiegato: server, usi e rischi',
  seoDescription:
    'Shopify MCP explained for merchants: which servers exist, what each does for your store, what you need to connect them and which permissions to give.',
  seoDescriptionIt:
    'Shopify MCP spiegato a chi gestisce uno store: quali server esistono, cosa fa ciascuno, cosa serve per collegarli e quali permessi dare all’AI.',
  excerpt:
    'Shopify MCP is not one server but a family. A plain-language map for merchants and eCommerce leads: the connector for your own store, the developer tools, the agent servers, what you need to connect them and the permissions to give.',
  excerptIt:
    'Shopify MCP non è un server solo ma una famiglia. Una mappa in parole semplici per chi gestisce uno store: il connettore per il tuo store, gli strumenti per sviluppatori, i server per gli agenti, cosa serve per collegarli e i permessi da dare.',
  ledeEn:
    'Shopify MCP is a family of servers, and most guides are written for developers. Here is which one does what for your store, what you need to connect it and where the risks are.',
  ledeIt:
    'Shopify MCP è una famiglia di server e quasi tutte le guide sono scritte per sviluppatori. Ecco quale fa cosa nel tuo store, cosa serve per collegarlo e dove stanno i rischi.',
  image: '/images/blog/shopify-mcp-cover.png',
  imageAlt: 'Copertina astratta, sfondo rosa cipria, con un’onda di puntini di dimensione variabile',
  imageAltEn: 'Abstract cover, blush pink background with a wave of dots changing size',
  articleType: 'BlogPosting',
  date: '2026-10-29',
  datePublishedIso: '2026-10-29T09:00:00+00:00',
  dateModifiedIso: '2026-10-29T09:00:00+00:00',
  wordCount: 2600,
  articleSection: 'AI agents',
  readingTimeMinutes: 9,
  keywordsEn:
    'shopify mcp, shopify mcp server, shopify dev mcp, shopify storefront mcp, shopify mcp claude, shopify mcp claude code, model context protocol shopify, shopify ucp',
  keywordsIt:
    'shopify mcp, mcp shopify, model context protocol shopify, server mcp shopify, shopify dev mcp, shopify mcp claude, protocollo mcp ecommerce, shopify ucp',
  faqEn: [
    {
      question: 'What is MCP in Shopify?',
      answer:
        'MCP (Model Context Protocol) is an open standard that lets an AI app such as Claude call tools on an outside system in a uniform way. In Shopify it means servers that let an AI tool read and, with your approval, change your store, or let shopping assistants search a catalog and build a cart.',
    },
    {
      question: 'Is Shopify MCP free?',
      answer:
        'Shopify’s help center says there is no extra Shopify fee for the connector: you pay your Shopify plan and the subscription of your AI tool. Shopify’s pages for the developer and agent servers mention no fee, but any assistant you build pays its own AI model costs.',
    },
    {
      question: 'Which Shopify MCP server do I need?',
      answer:
        'If you run a store and want to manage it from a chat, the Shopify connector for Claude or another AI tool. If you or your agency write code, Dev MCP and the AI Toolkit. If you build an assistant that serves shoppers, the catalog, cart, checkout, Ask, order and customer account servers.',
    },
    {
      question: 'Can I use Shopify MCP with Claude or Claude Code?',
      answer:
        'Yes. Merchants add the Shopify connector from Claude’s connector directory and approve access in the Shopify admin. Developers can add Dev MCP to Claude Code with one command, or install the AI Toolkit plugin. Both are covered above.',
    },
    {
      question: 'Is it safe to connect an AI tool to my Shopify store?',
      answer:
        'It is safe if you control the permissions. Start read-only, use a staff account with only the access the job needs, keep refunds and other money actions out of reach, and review every change. Shopify’s connector already blocks refunds, order cancellation and live theme edits.',
    },
    {
      question: 'Does the old Storefront MCP endpoint still work?',
      answer:
        'Not for catalog and cart. Shopify’s migration page says the catalog and cart tools on the old /api/mcp endpoint were removed and replaced by UCP-based tools at /api/ucp/mcp. The Customer Accounts MCP server is unchanged.',
    },
  ],
  faqIt: [
    {
      question: 'Cos’è MCP in Shopify?',
      answer:
        'MCP (Model Context Protocol) è uno standard aperto che permette a un’app AI come Claude di usare strumenti di un sistema esterno sempre nello stesso modo. In Shopify sono i server che fanno leggere e, con la tua approvazione, modificare lo store a uno strumento AI, o che fanno cercare un catalogo e creare un carrello agli assistenti d’acquisto.',
    },
    {
      question: 'Shopify MCP è gratis?',
      answer:
        'Il centro assistenza di Shopify dice che per il connettore non c’è un costo Shopify aggiuntivo: paghi il tuo piano Shopify e l’abbonamento dello strumento AI. Le pagine dei server per sviluppatori e per agenti non indicano costi, ma ogni assistente che costruisci paga i costi del proprio modello AI.',
    },
    {
      question: 'Quale server Shopify MCP mi serve?',
      answer:
        'Se gestisci uno store e vuoi lavorarci da una chat, il connettore Shopify per Claude o per un altro strumento AI. Se tu o la tua agenzia scrivete codice, Dev MCP e AI Toolkit. Se costruisci un assistente per i clienti, i server di catalogo, carrello, checkout, Ask, ordini e account cliente.',
    },
    {
      question: 'Posso usare Shopify MCP con Claude o Claude Code?',
      answer:
        'Sì. Chi gestisce uno store aggiunge il connettore Shopify dalla directory dei connettori di Claude e approva l’accesso nell’admin di Shopify. Gli sviluppatori aggiungono Dev MCP a Claude Code con un comando, oppure installano il plugin AI Toolkit. Entrambi sono spiegati sopra.',
    },
    {
      question: 'È sicuro collegare uno strumento AI al mio store Shopify?',
      answer:
        'È sicuro se controlli i permessi. Parti in sola lettura, usa un account staff con solo l’accesso che serve al lavoro, tieni fuori portata rimborsi e altre azioni sui soldi, e controlla ogni modifica. Il connettore di Shopify blocca già rimborsi, annullamento degli ordini e modifiche al tema pubblicato.',
    },
    {
      question: 'Il vecchio endpoint Storefront MCP funziona ancora?',
      answer:
        'Non per catalogo e carrello. La pagina di migrazione di Shopify dice che gli strumenti di catalogo e carrello sul vecchio endpoint /api/mcp sono stati rimossi e sostituiti da strumenti basati su UCP su /api/ucp/mcp. Il server Customer Accounts MCP è invariato.',
    },
  ],
  content: [
    {
      type: 'paragraph',
      text: '**Shopify MCP is the set of servers that let an AI tool such as Claude read and act on a Shopify store through the Model Context Protocol (MCP).** There is no single “Shopify MCP”. There is one for merchants who manage their own store from a chat, one for developers, and a group of agent servers that let shopping assistants search a catalog and build a cart. This guide is for a merchant or eCommerce lead, and it follows Shopify’s documentation as of 29 October 2026.',
    },
    {
      type: 'paragraph',
      text: 'We are noprob agency and we sell the [Shopify Launch Sprint](/shopify-migration-sprint). Our team works every day with AI agents built on Claude Code. The plan: what MCP is in two sentences, then every Shopify server one by one, what you need to connect them and the permissions we would give.',
    },
    { type: 'h2', text: 'What is MCP, in two sentences?' },
    {
      type: 'paragraph',
      text: '**MCP is an open standard that lets an AI app ask an outside system to run a tool, in the same way every time.** [MCP’s own introduction](https://modelcontextprotocol.io/docs/getting-started/intro) compares it to a USB-C port: one standard plug instead of one cable for every pair of devices.',
    },
    {
      type: 'paragraph',
      text: 'A model on its own only writes text. To read your orders or change a price it needs a tool, and a tool needs a connection. With MCP, the system publishes a server that lists its tools (search products, get an order, update a product) and any compatible AI app can call them. Anthropic created MCP and in December 2025 [moved it to the Agentic AI Foundation](https://www.anthropic.com/news/donating-the-model-context-protocol-and-establishing-of-the-agentic-ai-foundation), under the Linux Foundation, which it co-founded with Block and OpenAI.',
    },
    {
      type: 'paragraph',
      text: 'What MCP does not do: decide the rules. It standardizes the plug, not who may call what, which actions need your confirmation or what happens when the model gets it wrong. That part stays yours. The [MCP specification](https://modelcontextprotocol.io/specification/2026-07-28/server/tools) itself says there should always be a human who can deny a tool call.',
    },
    { type: 'h2', text: 'Which Shopify MCP servers exist today?' },
    {
      type: 'paragraph',
      text: '**Shopify MCP comes in three families: the connector for your own store, the developer tools, and the agent servers for assistants that serve shoppers.** Here is the map, with what each does, who uses it and what you need.',
    },
    {
      type: 'table',
      headers: ['Server', 'What it does', 'Who uses it', 'What you need'],
      rows: [
        [
          '**Shopify connector (Claude and other AI tools)**',
          'Lets you manage your own store from a chat (products, collections, inventory, discounts, orders, analytics).',
          'Merchants and eCommerce leads.',
          'Access to the Shopify admin, an account with the AI tool and your approval of the data access it requests.',
        ],
        [
          '**Dev MCP and AI Toolkit**',
          'Give an AI coding assistant Shopify’s current documentation, API schemas and code checks.',
          'Developers and agencies.',
          'Node.js and one command or plugin install; Dev MCP needs no authentication.',
        ],
        [
          '**Storefront Catalog MCP**',
          'Searches and looks up one store’s products and physical locations; no tool changes anything.',
          'Builders of shopping assistants and on-site agents.',
          'As a merchant, Shopify’s page describes no setup; the agent must present an agent profile.',
        ],
        [
          '**Global Catalog MCP**',
          'Searches products across Shopify merchants from one endpoint.',
          'Agents that compare stores.',
          'As a merchant, no opt-in step is described; what you control is the quality of your product data.',
        ],
        [
          '**Cart MCP and Checkout MCP**',
          'Build a cart over several turns ([Cart MCP](https://shopify.dev/docs/agents/carts-and-checkout/cart-mcp)), then turn it into a checkout ([Checkout MCP](https://shopify.dev/docs/agents/carts-and-checkout/checkout-mcp)).',
          'Agents shopping for a buyer.',
          'The agent needs a profile, and Checkout also needs a token or a signed request.',
        ],
        [
          '**Ask MCP and Order MCP**',
          '[Ask](https://shopify.dev/docs/agents/ask) answers questions on policies such as returns and shipping, and Shopify marks it as a draft capability; [Order](https://shopify.dev/docs/agents/orders/order-mcp) reads the current state of an order, only for orders placed through the agent.',
          'Support and order-status assistants.',
          'The agent’s profile, and for Order a token with the order-read scope.',
        ],
        [
          '**Customer Accounts MCP**',
          'Handles tasks for a logged-in customer, such as order status and account preferences.',
          'Developers of assistants for existing customers.',
          'A custom domain, approval for protected customer data and customer account login.',
        ],
      ],
    },
    {
      type: 'paragraph',
      text: 'The name “Storefront MCP” is the one that confuses people. It used to be one server at your store’s /api/mcp address. Shopify’s [migration page](https://shopify.dev/docs/apps/build/storefront-mcp) says its catalog and cart tools were removed and replaced by the same capabilities on the Universal Commerce Protocol (UCP) at /api/ucp/mcp, so a guide that still shows the old endpoint is out of date.',
    },
    {
      type: 'paragraph',
      text: 'UCP is the commerce vocabulary those servers speak. [ucp.dev](https://ucp.dev) presents it as the common language for platforms, agents and businesses, co-developed by industry leaders including Google, Shopify, Etsy, Walmart, Amazon and Stripe, and covering catalog search, cart, checkout, identity and orders. MCP is how an AI app talks to the server; UCP is what the server says about shopping. The wider picture of agents that buy is in [agentic commerce for Shopify](/blog/agentic-commerce-shopify).',
    },
    { type: 'h2', text: 'What can a merchant do with the Shopify connector for Claude?' },
    {
      type: 'paragraph',
      text: '**With the connector you can run daily catalog and reporting work from a chat, with write access to products, collections, inventory and percentage-off discount codes, and read-only access to orders, customers and analytics.** That split comes from [Shopify’s help center](https://help.shopify.com/en/manual/ai-powered-tools/connecting-ai-tools/shopify-connector-for-claude), and it is a good one.',
    },
    {
      type: 'paragraph',
      text: 'Examples of work that fits (the examples are ours, the capabilities are Shopify’s):',
    },
    {
      type: 'list',
      items: [
        'Find products with no description and draft the text, which you review before it goes live.',
        'List variants with low stock and propose the inventory changes. The connector reads the current quantity first, so an update stops if the count has changed.',
        'Ask an analytics question, such as which products sold most in the last 30 days.',
        'Create a percentage-off discount code for a campaign.',
        'Work on an unpublished copy of a theme, never on the live one.',
      ],
    },
    {
      type: 'paragraph',
      text: 'What it cannot do, even with write access: refunds, order cancellation or capture, marking an order paid, returns, gift cards, and changes to plan, payments, taxes or domains. It cannot edit or delete your live theme, and it asks you to confirm before publishing a theme or making certain Admin API changes. Those limits are a feature. They are the reason we are comfortable suggesting it to a store owner.',
    },
    {
      type: 'paragraph',
      text: 'Setup is short: install it from Claude’s [connector directory](https://claude.com/marketplace/connectors/shopify), not from the Shopify App Store, use a desktop browser, and approve the access in your Shopify admin. What it can do depends on the permissions of the staff account you approve it with. Shopify’s help page does not call it MCP; the connector address on Claude’s listing ends in /mcp. Shopify says [other AI tools can connect too](https://help.shopify.com/en/manual/ai-powered-tools/connecting-ai-tools), among them ChatGPT, Gemini and Microsoft Copilot. The Claude side, including Claude Code, is in [Claude and Claude Code on Shopify](/blog/claude-shopify). Shopify’s own assistant inside the admin is covered in [Shopify Magic and Sidekick](/blog/shopify-magic-sidekick).',
    },
    { type: 'h2', text: 'What do Dev MCP and the AI Toolkit do?' },
    {
      type: 'paragraph',
      text: '**Dev MCP and the AI Toolkit give an AI coding assistant Shopify’s current documentation and checks, so it writes Liquid, GraphQL and extensions against the real schema instead of its memory.** They are for the person building the store, not for the person selling in it.',
    },
    {
      type: 'paragraph',
      text: 'The [Dev MCP server](https://shopify.dev/docs/apps/build/devmcp) runs on your computer and needs no authentication. In Claude Code the page gives one command: claude mcp add --transport stdio shopify-dev-mcp -- npx -y @shopify/dev-mcp@latest. The [AI Toolkit](https://shopify.dev/docs/apps/build/ai-toolkit) is the plugin route: documentation, API schemas, validation of GraphQL, Liquid and extensions, and store-management tasks that run through Shopify CLI, when you choose to run them. Shopify is explicit that it does not remove the need to review and test the result.',
    },
    {
      type: 'paragraph',
      text: 'For a merchant the useful question is a different one: if you hire a developer or an agency, do their agents work from current Shopify documentation, and who reviews what the agent writes? In our Custom AI System, “development with AI agents” is one of the six superpowers, and the review stays with people.',
    },
    { type: 'h2', text: 'How do shopping agents use Storefront, Cart, Checkout and Ask MCP?' },
    {
      type: 'paragraph',
      text: '**Shopping agents use the catalog servers to find products, Cart and Checkout MCP to prepare the purchase, and Ask and Order MCP for policy and order questions, and Shopify limits each agent by how well it identifies itself.** Shopify’s page on [auth and rate limiting](https://shopify.dev/docs/agents/profiles/auth-and-rate-limiting) describes three levels: an agent with a Dev Dashboard credential, one that signs its requests, and an anonymous one. Only the first can complete purchases or read orders, and only with the right permission, and Checkout is limited more strictly than Cart.',
    },
    {
      type: 'paragraph',
      text: 'The Storefront Catalog server is read-only in practice: its tools are [search and lookup](https://shopify.dev/docs/agents/catalog/storefront-catalog), at an address on your store domain, and the page describes no merchant setup. The [Global Catalog](https://shopify.dev/docs/agents/catalog/global-catalog) does the same across merchants. Cart MCP builds carts and does not take payment; [Checkout MCP](https://shopify.dev/docs/agents/carts-and-checkout/checkout-mcp) hands the buyer to your storefront to finish unless a trusted agent has been granted permission to complete it. The [Customer Accounts server](https://shopify.dev/docs/apps/build/storefront-mcp/servers/customer-account) needs a custom domain, approval to use protected customer data and an OAuth login.',
    },
    {
      type: 'paragraph',
      text: 'For you, the work is data, not connection: complete attributes, accurate prices and stock, readable policies. That is the same work as in [GEO for Shopify](/blog/geo-for-shopify), and it is easiest during a migration, when every product is touched anyway: see our [guide to migrating to Shopify](/shopify-migration). On [Nazzi’s store](/use-cases/integratori-nazzi-dtc-shopify) we published a sitemap for agentic discovery. If you want your own assistant on top of these servers, the choice between chatbot, workflow and agent is in [AI agents for Shopify](/blog/ai-agents-for-shopify).',
    },
    { type: 'h2', text: 'What do you need to connect a Shopify MCP server?' },
    {
      type: 'paragraph',
      text: '**What you need depends on the server, but it is always an account, a permission and a decision about who owns the connection.** In order:',
    },
    {
      type: 'list',
      items: [
        'For the connector: a Shopify staff account with the right permissions, an account with the AI tool and a desktop browser for the first setup.',
        'For Dev MCP and the AI Toolkit: Node.js (the Toolkit asks for version 18 or higher) and one command or plugin install in Claude Code, Codex, Cursor or VS Code.',
        'For agent servers: an agent profile hosted at a public address, credentials from the Dev Dashboard for the highest level and, for checkout, a token or a signed request.',
        'For Customer Accounts: a custom domain, approval for protected customer data and customer account login configured in the app.',
        'For all of them: one named owner, who reviews what the AI changed and knows how to revoke the access.',
      ],
    },
    { type: 'h2', text: 'What are the risks, and which permissions should you give?' },
    {
      type: 'paragraph',
      text: '**The main risks are an AI changing data you did not mean it to, an AI following instructions hidden in content it reads, and access that outlives the person who set it up.** The answer to all three is the same: least privilege, read-only first, and confirmation on every action that matters. Our rules:',
    },
    {
      type: 'list',
      items: [
        '**Start read-only.** In the connector, orders, customers and analytics already are. Keep it that way for the first weeks and use it to ask questions.',
        '**Give the connection its own staff account** with only the permissions the job needs. The connector’s reach follows the staff account it uses.',
        '**Write only where you can undo.** Product drafts and unpublished themes yes; prices on the whole catalog in one go, no. [Shopify notes](https://help.shopify.com/en/manual/ai-powered-tools/connecting-ai-tools/shopify-connector-for-claude) that a large batch changes items one at a time and can stop partway.',
        '**Keep money out of reach.** Refunds, cancellations and returns are blocked in the connector. If you build your own, do the same and require a human approval, as the MCP specification recommends.',
        '**Watch the update calls.** [Cart MCP](https://shopify.dev/docs/agents/carts-and-checkout/cart-mcp) says update_cart replaces the cart’s full state and removes any field you omit; [Checkout MCP](https://shopify.dev/docs/agents/carts-and-checkout/checkout-mcp) says the same of update_checkout. An agent that sends half a cart deletes the other half.',
        '**Treat everything the agent reads as untrusted.** Reviews, product text and customer messages can carry instructions. [OWASP](https://genai.owasp.org/llmrisk/llm01-prompt-injection/) lists prompt injection as a top risk for LLM apps and recommends least-privilege access and human approval for high-risk actions. The full picture is in [AI agent security for Shopify](/blog/ai-agent-security-shopify).',
        '**Check the output, and know where the data goes.** Shopify’s [considerations page](https://help.shopify.com/en/manual/ai-powered-tools/connecting-ai-tools/considerations) says you are responsible for wrong changes and that the data you share is processed by the AI tool’s company under its own terms.',
      ],
    },
    {
      type: 'paragraph',
      text: 'Our method for a first project is a ladder: questions only, then drafts you approve, then small writes with a log, and money actions never delegated.',
    },
    { type: 'h2', text: 'Where should you start this week?' },
    {
      type: 'paragraph',
      text: '**Start with the connector in read-only use, and fix your product data in parallel.** In this order:',
    },
    {
      type: 'list',
      items: [
        'Pick one owner and one dedicated staff account with limited permissions.',
        'Connect the Shopify connector and ask five questions about sales, stock and products. Change nothing.',
        'Let it draft descriptions for ten products and review them yourself.',
        'Check your product data and policy pages, because every agent server reads them.',
        'Ask your developer or agency which of Dev MCP, the AI Toolkit or another tool they use and how they review the output.',
      ],
    },
    { type: 'h2', text: 'How does this fit with the Shopify Launch Sprint and the AI Accelerator?' },
    {
      type: 'paragraph',
      text: 'In the [Shopify Launch Sprint](/shopify-migration-sprint), **the Custom AI System leaves the store ready for AI agents, with clean and mapped data.** “Ready for AI agents” and “data mapped in detail” are two of its six superpowers, and they are what the catalog, cart and Ask servers read. The Sprint takes 14 days, with go-live between day 15 and 30 and 90 days of support. If you are still on another platform, start from our [guide to migrating to Shopify](/shopify-migration). If your store is already on Shopify, the [AI Accelerator](/ai-accelerator) is the lighter route.',
    },
    { type: 'h2', text: 'Frequently asked questions' },
    { type: 'h3', text: 'What is MCP in Shopify?' },
    {
      type: 'paragraph',
      text: 'MCP (Model Context Protocol) is an open standard that lets an AI app such as Claude call tools on an outside system in a uniform way. In Shopify it means servers that let an AI tool read and, with your approval, change your store, or let shopping assistants search a catalog and build a cart.',
    },
    { type: 'h3', text: 'Is Shopify MCP free?' },
    {
      type: 'paragraph',
      text: 'Shopify’s help center says there is no extra Shopify fee for the connector: you pay your Shopify plan and the subscription of your AI tool. Shopify’s pages for the developer and agent servers mention no fee, but any assistant you build pays its own AI model costs.',
    },
    { type: 'h3', text: 'Which Shopify MCP server do I need?' },
    {
      type: 'paragraph',
      text: 'If you run a store and want to manage it from a chat, the Shopify connector for Claude or another AI tool. If you or your agency write code, Dev MCP and the AI Toolkit. If you build an assistant that serves shoppers, the catalog, cart, checkout, Ask, order and customer account servers.',
    },
    { type: 'h3', text: 'Can I use Shopify MCP with Claude or Claude Code?' },
    {
      type: 'paragraph',
      text: 'Yes. Merchants add the Shopify connector from Claude’s connector directory and approve access in the Shopify admin. Developers can add Dev MCP to Claude Code with one command, or install the AI Toolkit plugin. Both are covered above.',
    },
    { type: 'h3', text: 'Is it safe to connect an AI tool to my Shopify store?' },
    {
      type: 'paragraph',
      text: 'It is safe if you control the permissions. Start read-only, use a staff account with only the access the job needs, keep refunds and other money actions out of reach, and review every change. Shopify’s connector already blocks refunds, order cancellation and live theme edits.',
    },
    { type: 'h3', text: 'Does the old Storefront MCP endpoint still work?' },
    {
      type: 'paragraph',
      text: 'Not for catalog and cart. Shopify’s migration page says the catalog and cart tools on the old /api/mcp endpoint were removed and replaced by UCP-based tools at /api/ucp/mcp. The Customer Accounts MCP server is unchanged.',
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
      text: '**Shopify MCP è l’insieme dei server che permettono a uno strumento AI come Claude di leggere e agire su uno store Shopify attraverso il Model Context Protocol (MCP).** Non esiste un unico “Shopify MCP”. Ce n’è uno per chi gestisce il proprio store da una chat, uno per gli sviluppatori e un gruppo di server per agenti che fanno cercare un catalogo e creare un carrello agli assistenti d’acquisto. Questa guida è per chi gestisce uno store o guida l’eCommerce e segue la documentazione di Shopify al 29 ottobre 2026.',
    },
    {
      type: 'paragraph',
      text: 'Siamo noprob agency e vendiamo lo [Shopify Launch Sprint](/it/sprint-migrazione-shopify). Il nostro team lavora ogni giorno con agenti AI costruiti su Claude Code. Il percorso: cos’è MCP in due frasi, poi ogni server Shopify uno per uno, cosa serve per collegarli e i permessi che daremmo noi.',
    },
    { type: 'h2', text: 'Cos’è MCP, in due frasi?' },
    {
      type: 'paragraph',
      text: '**MCP è uno standard aperto che permette a un’app AI di chiedere a un sistema esterno di eseguire uno strumento, sempre nello stesso modo.** [L’introduzione ufficiale di MCP](https://modelcontextprotocol.io/docs/getting-started/intro) lo paragona a una porta USB-C: una presa standard al posto di un cavo diverso per ogni coppia di dispositivi.',
    },
    {
      type: 'paragraph',
      text: 'Un modello da solo scrive solo testo. Per leggere i tuoi ordini o cambiare un prezzo gli serve uno strumento, e allo strumento serve una connessione. Con MCP il sistema pubblica un server che elenca i suoi strumenti (cerca prodotti, leggi un ordine, aggiorna un prodotto) e qualsiasi app AI compatibile può usarli. MCP l’ha creato Anthropic, che a dicembre 2025 l’ha [affidato alla Agentic AI Foundation](https://www.anthropic.com/news/donating-the-model-context-protocol-and-establishing-of-the-agentic-ai-foundation), sotto la Linux Foundation, cofondata con Block e OpenAI.',
    },
    {
      type: 'paragraph',
      text: 'Cosa MCP non fa: decidere le regole. Standardizza la presa, non chi può chiamare cosa, quali azioni richiedono la tua conferma o cosa succede quando il modello sbaglia. Quella parte resta tua. La stessa [specifica di MCP](https://modelcontextprotocol.io/specification/2026-07-28/server/tools) dice che ci dovrebbe sempre essere una persona in grado di negare una chiamata a uno strumento.',
    },
    { type: 'h2', text: 'Quali server Shopify MCP esistono oggi?' },
    {
      type: 'paragraph',
      text: '**Shopify MCP si divide in tre famiglie: il connettore per il tuo store, gli strumenti per sviluppatori e i server per agenti degli assistenti che servono i clienti.** Ecco la mappa, con cosa fa ciascuno, chi lo usa e cosa ti serve.',
    },
    {
      type: 'table',
      headers: ['Server', 'A cosa serve', 'Chi lo usa', 'Cosa ti serve'],
      rows: [
        [
          '**Connettore Shopify (Claude e altri strumenti AI)**',
          'Gestire il tuo store da una chat (prodotti, collezioni, inventario, sconti, ordini, analytics).',
          'Chi gestisce lo store e chi guida l’eCommerce.',
          'Accesso all’admin di Shopify, un account sullo strumento AI e la tua approvazione dell’accesso ai dati che richiede.',
        ],
        [
          '**Dev MCP e AI Toolkit**',
          'Danno a un assistente AI per il codice la documentazione aggiornata di Shopify, gli schemi delle API e i controlli sul codice.',
          'Sviluppatori e agenzie.',
          'Node.js e un comando o l’installazione di un plugin; Dev MCP non richiede autenticazione.',
        ],
        [
          '**Storefront Catalog MCP**',
          'Cercare e consultare i prodotti di un solo store e i suoi punti vendita fisici; nessuno strumento modifica qualcosa.',
          'Chi costruisce assistenti d’acquisto e agenti sul sito.',
          'Come merchant la pagina di Shopify non descrive nessuna configurazione; è l’agente che deve presentare un profilo agente.',
        ],
        [
          '**Global Catalog MCP**',
          'Cercare prodotti tra tutti i merchant Shopify da un unico endpoint.',
          'Gli agenti che confrontano gli store.',
          'Come merchant non è descritto nessun passaggio di adesione; quello che controlli tu è la qualità dei dati prodotto.',
        ],
        [
          '**Cart MCP e Checkout MCP**',
          'Costruire un carrello in più passaggi ([Cart MCP](https://shopify.dev/docs/agents/carts-and-checkout/cart-mcp)) e poi trasformarlo in checkout ([Checkout MCP](https://shopify.dev/docs/agents/carts-and-checkout/checkout-mcp)).',
          'Gli agenti che comprano per conto di un cliente.',
          'All’agente serve un profilo, e per il checkout anche un token o una richiesta firmata.',
        ],
        [
          '**Ask MCP e Order MCP**',
          '[Ask](https://shopify.dev/docs/agents/ask) risponde alle domande sulle policy, come resi e spedizioni, e Shopify lo indica come funzione in bozza; [Order](https://shopify.dev/docs/agents/orders/order-mcp) legge lo stato attuale di un ordine, solo per gli ordini fatti tramite l’agente.',
          'Assistenti di supporto e di stato ordine.',
          'Il profilo dell’agente e, per Order, un token con il permesso di lettura degli ordini.',
        ],
        [
          '**Customer Accounts MCP**',
          'Operazioni per un cliente che ha fatto l’accesso, come stato ordine e preferenze dell’account.',
          'Chi sviluppa assistenti per i clienti già registrati.',
          'Un dominio personalizzato, l’approvazione per i dati protetti dei clienti e l’accesso agli account cliente.',
        ],
      ],
    },
    {
      type: 'paragraph',
      text: 'Il nome “Storefront MCP” è quello che crea più confusione. Era un unico server all’indirizzo /api/mcp del tuo store. La [pagina di migrazione](https://shopify.dev/docs/apps/build/storefront-mcp) di Shopify dice che i suoi strumenti di catalogo e carrello sono stati rimossi e sostituiti dalle stesse funzioni sullo Universal Commerce Protocol (UCP) all’indirizzo /api/ucp/mcp, quindi una guida che mostra ancora il vecchio endpoint è superata.',
    },
    {
      type: 'paragraph',
      text: 'UCP è il vocabolario del commercio che quei server parlano. [ucp.dev](https://ucp.dev) lo presenta come il linguaggio comune per piattaforme, agenti e aziende, sviluppato insieme da grandi nomi del settore tra cui Google, Shopify, Etsy, Walmart, Amazon e Stripe, e copre ricerca nel catalogo, carrello, checkout, identità e ordini. MCP è il modo in cui un’app AI parla al server; UCP è ciò che il server dice sullo shopping. Il quadro più ampio degli agenti che comprano è in [agentic commerce per Shopify](/it/blog/agentic-commerce-shopify).',
    },
    { type: 'h2', text: 'Cosa può fare chi gestisce uno store con il connettore Shopify per Claude?' },
    {
      type: 'paragraph',
      text: '**Con il connettore porti il lavoro quotidiano su catalogo e report dentro una chat, con scrittura su prodotti, collezioni, inventario e codici sconto in percentuale, e sola lettura su ordini, clienti e analytics.** Questa divisione viene dal [centro assistenza di Shopify](https://help.shopify.com/en/manual/ai-powered-tools/connecting-ai-tools/shopify-connector-for-claude) ed è una buona divisione.',
    },
    {
      type: 'paragraph',
      text: 'Esempi di lavoro che ci sta bene (gli esempi sono nostri, le funzioni sono di Shopify):',
    },
    {
      type: 'list',
      items: [
        'Trovare i prodotti senza descrizione e preparare il testo, che controlli tu prima della pubblicazione.',
        'Elencare le varianti con poche scorte e proporre le modifiche all’inventario. Il connettore legge prima la quantità attuale, quindi l’aggiornamento si ferma se il conteggio è cambiato.',
        'Fare una domanda di analytics, per esempio quali prodotti hanno venduto di più negli ultimi 30 giorni.',
        'Creare un codice sconto in percentuale per una campagna.',
        'Lavorare su una copia non pubblicata di un tema, mai su quello online.',
      ],
    },
    {
      type: 'paragraph',
      text: 'Cosa non può fare, nemmeno con accesso in scrittura: rimborsi, annullamento o cattura degli ordini, segnare un ordine come pagato, resi, gift card e modifiche a piano, pagamenti, tasse o domini. Non può modificare né eliminare il tema pubblicato e chiede conferma prima di pubblicare un tema o di fare certe modifiche tramite Admin API. Questi limiti sono un pregio: sono il motivo per cui ci sentiamo di consigliarlo a chi gestisce uno store.',
    },
    {
      type: 'paragraph',
      text: 'L’installazione è breve: lo aggiungi dalla [directory dei connettori](https://claude.com/marketplace/connectors/shopify) di Claude, non dallo Shopify App Store, usi un browser da computer e approvi l’accesso nell’admin di Shopify. Ciò che può fare dipende dai permessi dell’account staff con cui lo approvi. La pagina di Shopify non lo chiama MCP; l’indirizzo del connettore nella scheda di Claude finisce con /mcp. Shopify dice che [si possono collegare anche altri strumenti AI](https://help.shopify.com/en/manual/ai-powered-tools/connecting-ai-tools), tra cui ChatGPT, Gemini e Microsoft Copilot. Il lato Claude, Claude Code compreso, è in [Claude e Claude Code su Shopify](/it/blog/claude-shopify). L’assistente di Shopify dentro l’admin è in [Shopify Magic e Sidekick](/it/blog/shopify-magic-sidekick).',
    },
    { type: 'h2', text: 'A cosa servono Dev MCP e AI Toolkit?' },
    {
      type: 'paragraph',
      text: '**Dev MCP e AI Toolkit danno a un assistente AI per il codice la documentazione e i controlli aggiornati di Shopify, così scrive Liquid, GraphQL ed estensioni sullo schema vero invece che a memoria.** Sono per chi costruisce lo store, non per chi ci vende.',
    },
    {
      type: 'paragraph',
      text: 'Il [server Dev MCP](https://shopify.dev/docs/apps/build/devmcp) gira sul tuo computer e non richiede autenticazione. Per Claude Code la pagina dà un solo comando: claude mcp add --transport stdio shopify-dev-mcp -- npx -y @shopify/dev-mcp@latest. L’[AI Toolkit](https://shopify.dev/docs/apps/build/ai-toolkit) è la via del plugin: documentazione, schemi delle API, validazione di GraphQL, Liquid ed estensioni e attività di gestione dello store che passano da Shopify CLI, quando decidi tu di eseguirle. Shopify è esplicita: non elimina la necessità di controllare e testare il risultato.',
    },
    {
      type: 'paragraph',
      text: 'Per chi gestisce uno store la domanda utile è un’altra: se ti affidi a uno sviluppatore o a un’agenzia, i loro agenti lavorano sulla documentazione Shopify aggiornata, e chi controlla ciò che l’agente scrive? Nel nostro Custom AI System lo “sviluppo con agenti AI” è uno dei sei superpoteri, e il controllo resta alle persone.',
    },
    { type: 'h2', text: 'Come usano Storefront, Cart, Checkout e Ask MCP gli agenti che fanno shopping?' },
    {
      type: 'paragraph',
      text: '**Gli agenti usano i server di catalogo per trovare prodotti, Cart e Checkout MCP per preparare l’acquisto, Ask e Order MCP per le domande su policy e ordini, e Shopify limita ogni agente in base a quanto bene si identifica.** La pagina di Shopify su [autenticazione e limiti di frequenza](https://shopify.dev/docs/agents/profiles/auth-and-rate-limiting) descrive tre livelli: un agente con una credenziale del Dev Dashboard, uno che firma le richieste e uno anonimo. Solo il primo può completare acquisti o leggere ordini, e solo con il permesso giusto, e il checkout è limitato più del carrello.',
    },
    {
      type: 'paragraph',
      text: 'Il server Storefront Catalog è in sola lettura nei fatti: i suoi strumenti sono [ricerca e consultazione](https://shopify.dev/docs/agents/catalog/storefront-catalog), a un indirizzo sul dominio del tuo store, e la pagina non descrive nessuna configurazione per il merchant. Il [Global Catalog](https://shopify.dev/docs/agents/catalog/global-catalog) fa lo stesso tra tutti i merchant. Cart MCP costruisce carrelli e non incassa; [Checkout MCP](https://shopify.dev/docs/agents/carts-and-checkout/checkout-mcp) manda il cliente a finire sul tuo storefront, a meno che un agente fidato abbia il permesso di completare l’acquisto. Il [server Customer Accounts](https://shopify.dev/docs/apps/build/storefront-mcp/servers/customer-account) richiede un dominio personalizzato, l’approvazione per i dati protetti dei clienti e un accesso OAuth.',
    },
    {
      type: 'paragraph',
      text: 'Per te il lavoro è sui dati, non sulla connessione: attributi completi, prezzi e scorte corretti, policy leggibili. È lo stesso lavoro di [GEO SEO per Shopify](/it/blog/geo-seo-shopify), ed è più semplice durante una migrazione, quando ogni prodotto viene toccato comunque: vedi la nostra [guida alla migrazione a Shopify](/it/migrazione-shopify). Su [Nazzi](/it/casi-studio/integratori-nazzi-dtc-shopify) abbiamo pubblicato una sitemap per l’agentic discovery. Se vuoi un tuo assistente sopra questi server, la scelta tra chatbot, workflow e agente è in [agenti AI per Shopify](/it/blog/agenti-ai-shopify).',
    },
    { type: 'h2', text: 'Cosa serve per collegare un server Shopify MCP?' },
    {
      type: 'paragraph',
      text: '**Cosa serve dipende dal server, ma sono sempre un account, un permesso e una decisione su chi è responsabile della connessione.** In ordine:',
    },
    {
      type: 'list',
      items: [
        'Per il connettore: un account staff Shopify con i permessi giusti, un account sullo strumento AI e un browser da computer per la prima configurazione.',
        'Per Dev MCP e AI Toolkit: Node.js (il Toolkit chiede la versione 18 o successiva) e un comando o l’installazione di un plugin in Claude Code, Codex, Cursor o VS Code.',
        'Per i server per agenti: un profilo agente pubblicato a un indirizzo pubblico, le credenziali del Dev Dashboard per il livello più alto e, per il checkout, un token o una richiesta firmata.',
        'Per Customer Accounts: un dominio personalizzato, l’approvazione per i dati protetti dei clienti e l’accesso agli account cliente configurato nell’app.',
        'Per tutti: un responsabile con nome e cognome, che controlla cosa ha cambiato l’AI e sa come revocare l’accesso.',
      ],
    },
    { type: 'h2', text: 'Quali sono i rischi e quali permessi dare?' },
    {
      type: 'paragraph',
      text: '**I rischi principali sono tre: un’AI che cambia dati che non volevi toccare, un’AI che segue istruzioni nascoste nei contenuti che legge, e un accesso che sopravvive alla persona che l’ha configurato.** La risposta è la stessa per tutti e tre: privilegio minimo, prima la sola lettura, conferma su ogni azione che conta. Le nostre regole:',
    },
    {
      type: 'list',
      items: [
        '**Parti in sola lettura.** Nel connettore ordini, clienti e analytics lo sono già. Tienili così per le prime settimane e usali per fare domande.',
        '**Dai alla connessione un account staff dedicato** con solo i permessi che servono al lavoro. Ciò che il connettore può fare segue l’account staff che usa.',
        '**Scrivi solo dove puoi tornare indietro.** Bozze di prodotto e temi non pubblicati sì; i prezzi di tutto il catalogo in un colpo solo, no. [Shopify ricorda](https://help.shopify.com/en/manual/ai-powered-tools/connecting-ai-tools/shopify-connector-for-claude) che un lotto grande cambia gli elementi uno alla volta e può fermarsi a metà.',
        '**Tieni i soldi fuori portata.** Rimborsi, annullamenti e resi sono bloccati nel connettore. Se costruisci qualcosa di tuo, fai lo stesso e richiedi l’approvazione di una persona, come raccomanda la specifica di MCP.',
        '**Attenzione alle chiamate di aggiornamento.** [Cart MCP](https://shopify.dev/docs/agents/carts-and-checkout/cart-mcp) dice che update_cart sostituisce l’intero stato del carrello e rimuove i campi omessi; [Checkout MCP](https://shopify.dev/docs/agents/carts-and-checkout/checkout-mcp) dice lo stesso di update_checkout. Un agente che invia metà carrello cancella l’altra metà.',
        '**Tratta tutto ciò che l’agente legge come non fidato.** Recensioni, testi dei prodotti e messaggi dei clienti possono contenere istruzioni. [OWASP](https://genai.owasp.org/llmrisk/llm01-prompt-injection/) mette la prompt injection tra i rischi principali delle app basate su LLM e raccomanda accesso con privilegio minimo e approvazione umana per le azioni ad alto rischio. Il quadro completo è in [sicurezza degli agenti AI su Shopify](/it/blog/sicurezza-agenti-ai-shopify).',
        '**Controlla il risultato e sappi dove vanno i dati.** La [pagina delle considerazioni](https://help.shopify.com/en/manual/ai-powered-tools/connecting-ai-tools/considerations) di Shopify dice che sei responsabile delle modifiche sbagliate e che i dati che condividi sono trattati dall’azienda dello strumento AI secondo le sue condizioni.',
      ],
    },
    {
      type: 'paragraph',
      text: 'Il nostro metodo per un primo progetto è una scala: solo domande, poi bozze che approvi tu, poi piccole scritture con un registro, e le azioni sui soldi mai delegate.',
    },
    { type: 'h2', text: 'Da dove partire questa settimana?' },
    {
      type: 'paragraph',
      text: '**Parti dal connettore in sola lettura e, in parallelo, sistema i dati prodotto.** In quest’ordine:',
    },
    {
      type: 'list',
      items: [
        'Scegli un responsabile e un account staff dedicato con permessi limitati.',
        'Collega il connettore Shopify e fai cinque domande su vendite, scorte e prodotti. Non cambiare nulla.',
        'Fagli preparare le descrizioni di dieci prodotti e controllale tu.',
        'Controlla dati prodotto e pagine di policy, perché ogni server per agenti li legge.',
        'Chiedi al tuo sviluppatore o alla tua agenzia quale tra Dev MCP, AI Toolkit o altri strumenti usa e come controlla il risultato.',
      ],
    },
    { type: 'h2', text: 'Come si collega tutto questo allo Shopify Launch Sprint e all’AI Accelerator?' },
    {
      type: 'paragraph',
      text: 'Nello [Shopify Launch Sprint](/it/sprint-migrazione-shopify) **il Custom AI System lascia lo store pronto per gli agenti AI, con dati puliti e mappati.** “Pronto per gli agenti AI” e “dati mappati al dettaglio” sono due dei suoi sei superpoteri, e sono ciò che leggono i server di catalogo, carrello e Ask. Lo Sprint dura 14 giorni, con go-live tra il giorno 15 e il 30 e 90 giorni di supporto. Se sei ancora su un’altra piattaforma, parti dalla nostra [guida alla migrazione a Shopify](/it/migrazione-shopify). Se il tuo store è già su Shopify, la strada più leggera è l’[AI Accelerator](/it/ai-accelerator).',
    },
    { type: 'h2', text: 'Domande frequenti' },
    { type: 'h3', text: 'Cos’è MCP in Shopify?' },
    {
      type: 'paragraph',
      text: 'MCP (Model Context Protocol) è uno standard aperto che permette a un’app AI come Claude di usare strumenti di un sistema esterno sempre nello stesso modo. In Shopify sono i server che fanno leggere e, con la tua approvazione, modificare lo store a uno strumento AI, o che fanno cercare un catalogo e creare un carrello agli assistenti d’acquisto.',
    },
    { type: 'h3', text: 'Shopify MCP è gratis?' },
    {
      type: 'paragraph',
      text: 'Il centro assistenza di Shopify dice che per il connettore non c’è un costo Shopify aggiuntivo: paghi il tuo piano Shopify e l’abbonamento dello strumento AI. Le pagine dei server per sviluppatori e per agenti non indicano costi, ma ogni assistente che costruisci paga i costi del proprio modello AI.',
    },
    { type: 'h3', text: 'Quale server Shopify MCP mi serve?' },
    {
      type: 'paragraph',
      text: 'Se gestisci uno store e vuoi lavorarci da una chat, il connettore Shopify per Claude o per un altro strumento AI. Se tu o la tua agenzia scrivete codice, Dev MCP e AI Toolkit. Se costruisci un assistente per i clienti, i server di catalogo, carrello, checkout, Ask, ordini e account cliente.',
    },
    { type: 'h3', text: 'Posso usare Shopify MCP con Claude o Claude Code?' },
    {
      type: 'paragraph',
      text: 'Sì. Chi gestisce uno store aggiunge il connettore Shopify dalla directory dei connettori di Claude e approva l’accesso nell’admin di Shopify. Gli sviluppatori aggiungono Dev MCP a Claude Code con un comando, oppure installano il plugin AI Toolkit. Entrambi sono spiegati sopra.',
    },
    { type: 'h3', text: 'È sicuro collegare uno strumento AI al mio store Shopify?' },
    {
      type: 'paragraph',
      text: 'È sicuro se controlli i permessi. Parti in sola lettura, usa un account staff con solo l’accesso che serve al lavoro, tieni fuori portata rimborsi e altre azioni sui soldi, e controlla ogni modifica. Il connettore di Shopify blocca già rimborsi, annullamento degli ordini e modifiche al tema pubblicato.',
    },
    { type: 'h3', text: 'Il vecchio endpoint Storefront MCP funziona ancora?' },
    {
      type: 'paragraph',
      text: 'Non per catalogo e carrello. La pagina di migrazione di Shopify dice che gli strumenti di catalogo e carrello sul vecchio endpoint /api/mcp sono stati rimossi e sostituiti da strumenti basati su UCP su /api/ucp/mcp. Il server Customer Accounts MCP è invariato.',
    },
    {
      type: 'paragraph',
      text: 'Lo Sprint ha un prezzo pubblico in base al fatturato: €5.800 sotto i €2M, €8.800 tra €2M e €20M, €12.800 oltre i €20M, IVA esclusa, in 4 rate.',
    },
    {
      type: 'paragraph',
      text: 'Lo [Shopify Launch Sprint](/it/sprint-migrazione-shopify) porta il tuo store su Shopify in 14 giorni con il nostro Custom AI System: calendario fisso, prezzo pubblico e 4 garanzie scritte.',
    },
  ],
}

export default article
