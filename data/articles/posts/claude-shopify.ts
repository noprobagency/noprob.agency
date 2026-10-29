import type { Article } from "../index";

const article: Article = {
  slug: "claude-shopify",
  slugIt: "claude-shopify",
  title: "Shopify Claude Code: Connector, MCP and How We Use Them",
  titleIt: "Claude e Claude Code su Shopify: connettore, MCP e come lo usiamo",
  seoTitle: "Shopify Claude Code: Connector, MCP and Agents",
  seoTitleIt: "Claude Shopify: connettore, MCP e Claude Code",
  seoDescription:
    "Shopify Claude Code explained: the Claude connector for your store, the AI Toolkit and MCP for developers, and agents with human approval. Permissions, limits.",
  seoDescriptionIt:
    "Claude Shopify spiegato: il connettore per lo store, AI Toolkit e MCP per sviluppare con Claude Code, e gli agenti con approvazione umana. Permessi e limiti.",
  excerpt:
    "Claude and Claude Code on Shopify as three setups, checked against Anthropic’s and Shopify’s documentation as of 29 October 2026: the connector for your store, the AI Toolkit and MCP for building, and agents with a person approving each write.",
  excerptIt:
    "Claude e Claude Code su Shopify come tre configurazioni, verificate sulla documentazione di Anthropic e di Shopify al 29 ottobre 2026: il connettore per lo store, AI Toolkit e MCP per sviluppare, e gli agenti con una persona che approva ogni modifica.",
  ledeEn:
    "Shopify Claude Code is really three setups: Claude connected to your store, Claude Code for building on Shopify, and agents that work on the store with your approval. What each does, the permissions, and how we use them.",
  ledeIt:
    "Claude su Shopify sono in realtà tre configurazioni: Claude collegato al tuo store, Claude Code per sviluppare su Shopify e gli agenti che lavorano sullo store con la tua approvazione. Cosa fa ciascuna, i permessi e come le usiamo.",
  image: "/images/blog/claude-shopify-cover.png",
  imageAlt: "Copertina astratta, sfondo rosa cipria, con un’onda di puntini di dimensione variabile",
  imageAltEn: "Abstract cover, blush pink background with a wave of dots changing size",
  articleType: "BlogPosting",
  date: "2026-10-29",
  datePublishedIso: "2026-10-29T09:00:00+00:00",
  dateModifiedIso: "2026-10-29T09:00:00+00:00",
  wordCount: 2700,
  articleSection: "AI agents",
  readingTimeMinutes: 11,
  keywordsEn:
    "shopify claude code, claude shopify connector, shopify mcp claude, shopify mcp claude code, claude shopify plugin, shopify ai toolkit, claude code shopify theme, claude shopify agents",
  keywordsIt:
    "claude shopify, claude code shopify, connettore claude shopify, shopify mcp claude, plugin claude shopify, shopify ai toolkit, agenti claude shopify, sviluppare su shopify con claude code",
  faqEn: [
    {
      question: "Can you give Claude access to Shopify?",
      answer:
        "Yes. Shopify publishes an official connector for Claude: you install it from Claude’s directory, are redirected to your Shopify admin and approve the data access there, read-only or with write permissions. The tool can never do more than the staff account that connects it. Use the official integration, not a home-made API token.",
    },
    {
      question: "Can Claude build a Shopify website for me?",
      answer:
        "It can start one. Per Shopify’s guide, the connector creates a store from a description, on the Canvas theme with sample content, password protected. Claude Code can also write the Liquid, app and Functions code for a store you develop. In both cases you review the result before customers see it.",
    },
    {
      question: "How do you use Claude to create a Shopify store?",
      answer:
        "Open Claude on a desktop browser, name Shopify in your request and make sure the connector is on for the conversation. Describe the business, review the store it returns through the view link and the sample content, then save it. Treat the first version as a draft: Shopify notes that anyone with the address of an unsaved store can view and edit it.",
    },
    {
      question: "Is the Shopify connector for Claude free?",
      answer:
        "Shopify says the connector carries no extra Shopify fee: standard Shopify plan pricing applies to stores you create or run through Claude, and your Claude subscription costs go to Anthropic.",
    },
    {
      question:
        "What is the difference between the connector and Claude Code with the AI Toolkit?",
      answer:
        "The connector is a chat integration for running a store: reports, catalog, inventory, discounts. Claude Code with the Shopify AI Toolkit is for building on Shopify: it works in your code folder with Shopify’s current docs and schemas, validates Liquid, GraphQL and extensions, and can run store tasks through Shopify CLI.",
    },
    {
      question: "Can Claude refund orders or change my live theme?",
      answer:
        "Not through the connector. Shopify’s guide says it cannot refund, cancel or capture orders, process returns, or edit, publish or delete your live theme, even with write access. For Claude Code the limit is the access you approve and your own user permissions, so keep that access narrow.",
    },
  ],
  faqIt: [
    {
      question: "Si può dare a Claude l’accesso a Shopify?",
      answer:
        "Sì. Shopify pubblica un connettore ufficiale per Claude: lo installi dalla directory di Claude, vieni rimandato al tuo admin Shopify e lì approvi l’accesso ai dati, in sola lettura o con permessi di scrittura. Lo strumento non può mai fare più dell’account staff che lo collega. Usa l’integrazione ufficiale, non un token API fatto in casa.",
    },
    {
      question: "Claude può costruire un sito Shopify al posto mio?",
      answer:
        "Può avviarlo. Secondo la guida di Shopify il connettore crea uno store da una descrizione, sul tema Canvas con contenuti di esempio, protetto da password. Claude Code può inoltre scrivere il codice Liquid, delle app e delle Functions di uno store che sviluppi. In entrambi i casi controlli il risultato prima che lo veda un cliente.",
    },
    {
      question: "Come si usa Claude per creare uno store Shopify?",
      answer:
        "Apri Claude da un browser desktop, nomina Shopify nella richiesta e verifica che il connettore sia attivo nella conversazione. Descrivi l’attività, controlla lo store che ti restituisce tramite il link di anteprima e i contenuti di esempio, poi salvalo. Considera la prima versione una bozza: Shopify avverte che chiunque abbia l’indirizzo di uno store non salvato può vederlo e modificarlo.",
    },
    {
      question: "Il connettore Shopify per Claude è gratuito?",
      answer:
        "Shopify dice che il connettore non ha costi Shopify aggiuntivi: valgono i prezzi standard dei piani Shopify per gli store che crei o gestisci tramite Claude, mentre l’abbonamento a Claude va ad Anthropic.",
    },
    {
      question:
        "Che differenza c’è tra il connettore e Claude Code con AI Toolkit?",
      answer:
        "Il connettore è un’integrazione in chat per gestire uno store: report, catalogo, inventario, sconti. Claude Code con lo Shopify AI Toolkit serve a sviluppare su Shopify: lavora nella tua cartella di codice con la documentazione e gli schemi aggiornati di Shopify, valida Liquid, GraphQL ed estensioni e può eseguire attività sullo store tramite Shopify CLI.",
    },
    {
      question: "Claude può rimborsare ordini o cambiare il mio tema online?",
      answer:
        "Non tramite il connettore. La guida di Shopify dice che non può rimborsare, annullare o catturare ordini, gestire resi, né modificare, pubblicare o eliminare il tema online, nemmeno con permessi di scrittura. Con Claude Code il limite è l’accesso che approvi e i tuoi permessi utente, quindi tienilo stretto.",
    },
  ],
  content: [
    {
      type: "paragraph",
      text: "**Shopify Claude Code is really three different setups, and mixing them up is how people end up with the wrong tool.** The first is Claude, the chat app, connected to your store: you ask, it reads and, if you allow it, writes. The second is Claude Code, Anthropic’s coding agent, used to build themes, apps and Functions on Shopify. The third is agents built on Claude that work on your store with a person approving each step. This guide takes them in that order, with the permissions of each, checked against Anthropic’s and Shopify’s own documentation as of 29 October 2026.",
    },
    {
      type: "paragraph",
      text: "We are noprob agency and we sell the [Shopify Launch Sprint](/shopify-migration-sprint), so here is where we stand. We work every day with agents built on Claude Code: the Custom AI System lists development with AI agents among its six superpowers, and this site is built and maintained that way. What follows keeps two things apart: what the documentation says (linked) and the rules we apply (marked as ours). Tool names and limits move fast, so check the linked pages before you rely on a detail.",
    },
    { type: "h2", text: "Which of the three setups do you need?" },
    {
      type: "paragraph",
      text: "**You need the connector if you want to ask questions about your store, Claude Code if you build on Shopify, and an agent if the same task comes back every week.** That is the whole map.",
    },
    {
      type: "list",
      items: [
        "**Claude app with the Shopify connector.** For founders and store managers. You talk to your store in plain language: reports, catalog, inventory, discounts. It needs a staff account and your approval in the Shopify admin.",
        "**Claude Code with the Shopify AI Toolkit.** For developers and agencies. It works inside your code folder: Liquid theme, apps, Functions, checkout extensions. It needs Node.js, a terminal and a development store.",
        "**An agent built on Claude.** For teams with a repeated job, like checking a list every morning. It needs a defined task, narrow tools and an approval step. It costs design time up front.",
      ],
    },
    {
      type: "paragraph",
      text: "None of the three replaces Shopify’s own AI: the connector, says Shopify’s help center, does not replace your admin or Sidekick. Start with what the admin already includes, which we cover in [Shopify Magic and Sidekick](/blog/shopify-magic-sidekick). Our order is always the same: what Shopify includes, then Claude on top, then an agent for the gap.",
    },
    { type: "h2", text: "Can you give Claude access to your Shopify store?" },
    {
      type: "paragraph",
      text: "**Yes: Shopify publishes an official connector for Claude, and you approve what it can access in your Shopify admin.** It is [listed in Claude’s directory](https://claude.com/marketplace/connectors/shopify), made by Shopify and marked as verified by Anthropic. Per [Shopify’s guide](https://help.shopify.com/en/manual/ai-powered-tools/connecting-ai-tools/shopify-connector-for-claude) it is installed from Claude’s directory, not from the Shopify App Store. The setup, as Shopify describes it:",
    },
    {
      type: "list",
      items: [
        "Open Claude on a desktop browser (mobile availability depends on Claude) and ask for something about Shopify, naming it in the request. Check that the connector is on for the conversation.",
        "If it is not installed, add it from the connector page in Claude’s directory.",
        "Claude sends you to your Shopify admin to approve the data access the connector asks for. Shopify makes you confirm in two separate steps.",
        "Choose the access level. We choose read-only first, for the reason explained below.",
        "Ask a first question. To work on another store, ask Claude to switch store and authorize it again, then start a new conversation, because an old one can keep using the previous store.",
      ],
    },
    {
      type: "paragraph",
      text: "The connector can also create a store before you have a Shopify account: you describe the business and it builds one on the Canvas theme with sample content, password protected so nobody can buy. Shopify warns that anyone with the address of an unsaved store can view and edit it. Treat it as a draft and review the sample content before you sell anything. On cost, Shopify says the connector adds no Shopify fee: standard plan pricing applies, and your Claude subscription goes to Anthropic.",
    },
    {
      type: "h2",
      text: "What can Claude do in your store, and what can’t it?",
    },
    {
      type: "paragraph",
      text: "**With the connector Claude can read orders, customers and analytics, and edit products, collections, inventory and unpublished themes, but it cannot touch payments or your live theme.** This is the split in Shopify’s guide.",
    },
    {
      type: "list",
      items: [
        "**Read only:** orders (recent orders or a single one), customers, and analytics through ShopifyQL-based queries. Shopify suggests short questions, one at a time.",
        "**Read and write:** products (create, update, search, set draft, active or archived), collections, inventory by variant and location, and percentage-off discount codes.",
        "**Write with your confirmation:** pages and menus, publishing an unpublished theme (after your confirmation), and discount codes, where you confirm the start date and the eligible customers.",
        "**Themes:** it edits unpublished themes only. To change your storefront, you duplicate the theme in the admin, let the tool edit the copy and publish it yourself.",
        "**Cannot do, even with write access:** change your plan, payments, taxes or domains; edit, publish or delete the live theme; refund, cancel or capture orders, mark them paid or process returns; create or adjust gift cards; edit existing customer records or existing discount codes.",
      ],
    },
    {
      type: "paragraph",
      text: "Look at the design: money and the storefront stay with you, and the writes that remain have a check built in. Inventory updates read the current quantity first and stop if the count has changed. We copy that pattern in our own agents (more below). For the Shopify side of the protocol, read [Shopify MCP explained](/blog/shopify-mcp).",
    },
    { type: "h2", text: "What should you ask Claude about your store first?" },
    {
      type: "paragraph",
      text: "**Start with questions you can check against the admin in five minutes, one at a time, in read-only.** These are ours, built on what the connector reads:",
    },
    {
      type: "list",
      items: [
        '"Compare sales by channel for the last 30 days with the 30 days before." (analytics)',
        '"List the draft products that have no description." (catalog)',
        '"Which variants have the lowest stock in each location?" (inventory)',
        '"Show my most recent orders grouped by shipping country." (orders)',
      ],
    },
    {
      type: "paragraph",
      text: "My rule: the first time, check every answer against the Shopify admin. A report you cannot verify is an opinion. After a week you know which questions Claude answers reliably, and only then does write access for one named task make sense.",
    },
    { type: "h2", text: "How do you set permissions so nothing goes wrong?" },
    {
      type: "paragraph",
      text: "**Give Claude the least access that does the job and start read-only, because Shopify cannot narrow an approved level: you uninstall the integration and approve again.** The rules are on Shopify’s page [Authorizing AI tool access to your store](https://help.shopify.com/en/manual/ai-powered-tools/connecting-ai-tools/authorizing-access):",
    },
    {
      type: "list",
      items: [
        "**Access follows the person.** Staff authorize according to their own admin permissions, and a tool never does more than the user who connects it. Our practice: connect with a staff account whose permissions fit the task, not with the owner.",
        "**Two levels.** Read-only lets the tool view data; write lets it edit and act on your behalf. If a tool later asks for a higher level, you are prompted and you can decline.",
        "**Use the official integration.** Shopify says not to create an API access token or build your own integration for these tools.",
        "**Data leaves Shopify.** Once shared with the AI tool it is governed by that provider’s terms and privacy policy. Decide what customer data you put in front of it.",
        "**Revoking is uninstalling.** You can remove the integration from the admin at any time.",
      ],
    },
    {
      type: "paragraph",
      text: "One more point that is our reading, not a Shopify rule. A store is full of text written by strangers: reviews, order notes, customer messages. [Anthropic’s documentation warns that servers which fetch external content can expose you to prompt injection](https://code.claude.com/docs/en/mcp), meaning instructions hidden in the text. So write access and customer-written text should not meet in the same session. We go deeper in [AI agent security on Shopify](/blog/ai-agent-security-shopify).",
    },
    { type: "h2", text: "How do you use Claude Code to build on Shopify?" },
    {
      type: "paragraph",
      text: "**Claude Code is Anthropic’s coding agent: it reads your codebase, edits files and runs commands, and the Shopify AI Toolkit gives it Shopify’s current documentation and schemas.** [Anthropic’s overview](https://code.claude.com/docs/en/overview) describes it as available in the terminal, in IDEs, in a desktop app and in the browser. [Shopify’s AI Toolkit page](https://shopify.dev/docs/apps/build/ai-toolkit) says the toolkit does three things for an AI coding tool:",
    },
    {
      type: "list",
      items: [
        "**Docs and API schemas:** it looks up the right Shopify API surface instead of relying on the model’s memory.",
        "**Code validation:** it checks GraphQL queries, Liquid templates and Shopify extensions against Shopify’s schemas.",
        "**Store management:** it prepares and runs supported store tasks through the Shopify CLI’s authenticated store context, and you decide when a task runs.",
      ],
    },
    {
      type: "paragraph",
      text: "The requirement on that page is Node.js 18 or higher. There are three ways to install it in Claude Code, all from Shopify’s documentation:",
    },
    {
      type: "list",
      items: [
        "**Plugin (recommended):** `claude plugin install shopify-ai-toolkit@claude-plugins-official`. It bundles everything and updates itself.",
        "**Agent skills:** `npx skills add Shopify/shopify-ai-toolkit`, for when you want to manage skills yourself. These do not update automatically.",
        "**Dev MCP server:** `claude mcp add --transport stdio shopify-dev-mcp -- npx -y @shopify/dev-mcp@latest`, then restart. Shopify says it runs locally and needs no authentication.",
      ],
    },
    {
      type: "paragraph",
      text: "MCP, the Model Context Protocol, is the open standard that connects AI tools to outside data and tools, and [Claude Code adds servers with `claude mcp add`](https://code.claude.com/docs/en/mcp). The Dev MCP server needs no login, so by itself it opens no store: it is the documentation and validation side. The store side goes through the Shopify CLI, which [Shopify’s help center](https://help.shopify.com/en/manual/ai-powered-tools/shopify-cli-connector) presents as the connector for developers on their own machine.",
    },
    {
      type: "h2",
      text: "What is the difference between the Claude connector and the AI Toolkit?",
    },
    {
      type: "paragraph",
      text: "**The connector runs a store from a chat, and the AI Toolkit builds on Shopify from your code folder; they answer different questions.** Side by side:",
    },
    {
      type: 'table',
      headers: ["Aspect", "Connector", "Toolkit"],
      rows: [
        [
          "**Who uses it**",
          "A merchant or store manager.",
          "A developer or an agency.",
        ],
        [
          "**What it does**",
          "Reports, products, collections, inventory, discounts, unpublished themes.",
          "Documentation lookup, code validation, and store tasks through the Shopify CLI.",
        ],
        [
          "**What it needs**",
          "A Shopify staff account and your approval in the admin.",
          "Node.js 18 or higher, a supported tool and, for store tasks, a store you have access to.",
        ],
        [
          "**Where it stops**",
          "The guardrails listed above, such as no refunds and no live theme.",
          "Shopify only promises that access is limited by what you approve and by your user permissions. The connector’s guardrails are the connector’s, so with Claude Code you build the narrow access yourself.",
        ],
      ],
    },
    {
      type: "paragraph",
      text: "The last line is the one to remember. If you give Claude Code a store through the CLI with write access, nobody has pre-removed the refund button from its reach. Your own rules are the guardrail.",
    },
    {
      type: "h2",
      text: "What do we hand to Claude Code on a Shopify project?",
    },
    {
      type: "paragraph",
      text: "**We hand Claude Code the work that is repeatable and checkable: Liquid sections, Functions, extension migrations and tests, always on a development store and always reviewed by a person.** Three examples that Shopify’s own pages support:",
    },
    {
      type: "list",
      items: [
        "**Theme code.** Liquid sections and snippets, written and validated against Shopify’s schemas. In our Custom AI System the theme code is written from scratch for your store only, with no dead code and no app slowing it down, and agents are part of how we develop it.",
        "**Shopify Functions.** [Functions](https://shopify.dev/docs/apps/build/functions) customize Shopify’s backend logic: discounts, payment and delivery options, checkout validation. Shopify notes that custom apps using Function APIs require a Shopify Plus plan, while public apps from the App Store work on any plan.",
        '**Extension migrations.** Shopify’s toolkit page uses this as its example: moving checkout and customer account extensions built on API versions before 2025-10 to Polaris web components, with a prompt as plain as "Migrate the extensions/my-checkout-extension extension to API version 2026-04". Shopify adds that you still review and test the result.',
      ],
    },
    {
      type: "paragraph",
      text: "Our rules sit on top of how Claude Code behaves by default. In its [permission modes](https://code.claude.com/docs/en/permission-modes) the default one asks before edits, shell commands and network access, and plan mode blocks edits until you approve a plan. So: plan mode first on anything that touches checkout; a development store, which Shopify describes as [for development and testing only](https://shopify.dev/docs/api/development-stores); the live store receives code through a reviewed change and a duplicated theme you publish yourself. Anthropic’s [security page](https://code.claude.com/docs/en/security) says who decides: you review proposed code and commands before approval.",
    },
    {
      type: "h2",
      text: "How do agents on Claude work on a store with human approval?",
    },
    {
      type: "paragraph",
      text: "**An agent on Claude is a loop in which the model reads the situation, picks a tool, looks at the result and decides the next step; on a store, the safe version has a person on every write.** Claude Code is one such agent. If you want your own, [Anthropic’s overview](https://code.claude.com/docs/en/overview) says the Agent SDK lets you build agents on Claude Code’s tools with full control over orchestration, tool access and permissions, and that Claude Code can run on a schedule. What you build on top is the design, and this is ours:",
    },
    {
      type: "list",
      items: [
        "**Read tools by default.** The agent lists, searches and compares. Reading is always allowed; writing is a separate decision.",
        "**Writes go through a proposal.** The agent states what it wants to change and why, a person approves, and only then does a narrow tool execute.",
        '**Narrow tools.** "Set this product to draft" is a tool you can approve. "Run any mutation" is a blank check. The connector itself asks for confirmation before changes made through its GraphQL tools, and we go one step narrower.',
        '**A trail.** Every proposal, approval and action is logged, so you can answer "who changed this and why" a month later.',
        "**Start where mistakes are cheap.** Drafts, tags, product copy, internal reports. Prices, refunds and customer messages come last, if at all.",
      ],
    },
    {
      type: "paragraph",
      text: "The full picture, from chatbot to workflow to agent, is in [AI agents for Shopify](/blog/ai-agents-for-shopify). A related read: [Claude Duet for a Shopify store](/blog/claude-duet-shopify).",
    },
    {
      type: "paragraph",
      text: "In migrations this is where agents earn their place: repeated checks that a person then approves. We describe the method in [migrating to Shopify with AI agents](/blog/shopify-migration-ai-agents), and the complete path is in our [Shopify migration guide](/shopify-migration). On Nazzi, the redirect work covered 215 archived WooCommerce URLs, and the delivery was the CSV of 301 redirects ([case study](/use-cases/integratori-nazzi-dtc-shopify)). That is the kind of work where an agent checks and a person signs off. On Cumini the store came from a proprietary platform tied to the ERP, and the solution was integrated with the ERP ([case study](/use-cases/cumini-luxury-fashion-ecommerce)).",
    },
    { type: "h2", text: "Checklist: connect Claude to a live store safely" },
    {
      type: "paragraph",
      text: "**Six steps, in this order, keep a Claude connection useful and reversible.** Print it, or paste it into your team’s notes.",
    },
    {
      type: "list",
      items: [
        "**Name the job.** One sentence: what do you want Claude to answer or change, and who checks it?",
        "**Pick the account.** Connect with a staff account whose permissions match the job, not the owner account.",
        "**Start read-only.** Remember that narrowing later means uninstalling and approving again.",
        "**Ask one question at a time** and check each answer against the admin for the first week.",
        "**Write access for one named task,** and read every confirmation. Theme changes only on a duplicate that you publish yourself.",
        "**Keep customer text away from write sessions,** and uninstall the integration when the job is done.",
      ],
    },
    {
      type: "paragraph",
      text: "If your store is live and you want AI working on it with a plan, the [AI Accelerator](/ai-accelerator) is 30 days one-to-one with an established eCommerce, at a fixed price and with no lock-in. If you are still on another platform, moving comes first.",
    },
    { type: "h2", text: "Frequently asked questions" },
    { type: "h3", text: "Can you give Claude access to Shopify?" },
    {
      type: "paragraph",
      text: "Yes. Shopify’s official connector installs from Claude’s directory, and you approve read-only or write access in your Shopify admin.",
    },
    { type: "h3", text: "Can Claude build a Shopify website for me?" },
    {
      type: "paragraph",
      text: "It can start one: the connector creates a store from a description, and Claude Code can write code for a store you develop. You review everything before customers see it.",
    },
    { type: "h3", text: "How do you use Claude to create a Shopify store?" },
    {
      type: "paragraph",
      text: "On a desktop browser, name Shopify in your request, describe the business, review the store through the view link, then save it. Treat the first version as a draft.",
    },
    { type: "h3", text: "Is the Shopify connector for Claude free?" },
    {
      type: "paragraph",
      text: "Shopify says it has no extra Shopify fee: standard Shopify plan pricing applies, and your Claude subscription costs go to Anthropic.",
    },
    {
      type: "h3",
      text: "What is the difference between the connector and Claude Code with the AI Toolkit?",
    },
    {
      type: "paragraph",
      text: "The connector runs a store from a chat. Claude Code with the [Shopify AI Toolkit](https://shopify.dev/docs/apps/build/ai-toolkit) builds on Shopify from your code folder.",
    },
    { type: "h3", text: "Can Claude refund orders or change my live theme?" },
    {
      type: "paragraph",
      text: "Not through the connector, per Shopify’s guide, even with write access. With Claude Code the limit is the access you approve, so keep it narrow.",
    },
    {
      type: "paragraph",
      text: "The [Shopify Launch Sprint](/shopify-migration-sprint) moves your store to Shopify in 14 days with our Custom AI System: a fixed calendar, a public price and 4 written guarantees.",
    },
  ],
  contentIt: [
    {
      type: "paragraph",
      text: "**Claude su Shopify sono in realtà tre configurazioni diverse, e confonderle è il modo più rapido per scegliere lo strumento sbagliato.** La prima è Claude, l’app di chat, collegato al tuo store: chiedi, lui legge e, se glielo permetti, scrive. La seconda è Claude Code, l’agente di programmazione di Anthropic, usato per sviluppare temi, app e Functions su Shopify. La terza sono gli agenti costruiti su Claude che lavorano sul tuo store con una persona che approva ogni passo. Questa guida le prende in quest’ordine, con i permessi di ciascuna, verificata sulla documentazione di Anthropic e di Shopify al 29 ottobre 2026.",
    },
    {
      type: "paragraph",
      text: "Siamo noprob agency e vendiamo lo [Shopify Launch Sprint](/it/sprint-migrazione-shopify), quindi ti diciamo da dove parliamo. Lavoriamo ogni giorno con agenti costruiti su Claude Code: il Custom AI System include lo sviluppo con agenti AI tra i suoi sei superpoteri e anche questo sito è costruito e curato così. Quello che segue tiene separate due cose: ciò che dice la documentazione (con il link) e le regole che applichiamo noi (segnalate come nostre). Nomi e limiti cambiano in fretta: prima di fare affidamento su un dettaglio, controlla le pagine linkate.",
    },
    { type: "h2", text: "Quale delle tre configurazioni ti serve?" },
    {
      type: "paragraph",
      text: "**Ti serve il connettore se vuoi fare domande al tuo store, Claude Code se sviluppi su Shopify e un agente se lo stesso compito torna ogni settimana.** La mappa è tutta qui.",
    },
    {
      type: "list",
      items: [
        "**App Claude con il connettore Shopify.** Per founder e responsabili di store. Parli con il tuo store in linguaggio naturale: report, catalogo, inventario, sconti. Servono un account staff e la tua approvazione nell’admin di Shopify.",
        "**Claude Code con lo Shopify AI Toolkit.** Per sviluppatori e agenzie. Lavora dentro la tua cartella di codice: tema Liquid, app, Functions, estensioni del checkout. Servono Node.js, un terminale e uno store di sviluppo.",
        "**Un agente costruito su Claude.** Per i team con un compito che si ripete, come controllare una lista ogni mattina. Servono un compito definito, strumenti stretti e un passaggio di approvazione. Costa tempo di progettazione all’inizio.",
      ],
    },
    {
      type: "paragraph",
      text: "Nessuna delle tre sostituisce l’AI di Shopify: il connettore, dice il centro assistenza di Shopify, non sostituisce l’admin né Sidekick. Parti da ciò che l’admin include già, di cui parliamo in [Shopify Magic e Sidekick](/it/blog/shopify-magic-sidekick). Il nostro ordine è sempre lo stesso: ciò che Shopify include, poi Claude sopra, poi un agente per il vuoto che resta.",
    },
    {
      type: "h2",
      text: "Si può dare a Claude l’accesso al tuo store Shopify?",
    },
    {
      type: "paragraph",
      text: "**Sì: Shopify pubblica un connettore ufficiale per Claude e sei tu ad approvare cosa può raggiungere, nell’admin di Shopify.** È [nella directory di Claude](https://claude.com/marketplace/connectors/shopify), realizzato da Shopify e contrassegnato come verificato da Anthropic. Secondo la [guida di Shopify](https://help.shopify.com/en/manual/ai-powered-tools/connecting-ai-tools/shopify-connector-for-claude) si installa dalla directory di Claude, non dallo Shopify App Store. L’installazione, come la descrive Shopify:",
    },
    {
      type: "list",
      items: [
        "Apri Claude da un browser desktop (la disponibilità su mobile dipende da Claude) e chiedi qualcosa su Shopify, nominandolo nella richiesta. Controlla che il connettore sia attivo nella conversazione.",
        "Se non è installato, aggiungilo dalla pagina del connettore nella directory di Claude.",
        "Claude ti manda all’admin di Shopify per approvare l’accesso ai dati che il connettore chiede. Shopify ti fa confermare in due passaggi distinti.",
        "Scegli il livello di accesso. Noi scegliamo prima la sola lettura, per il motivo spiegato più sotto.",
        "Fai una prima domanda. Per lavorare su un altro store chiedi a Claude di cambiare store e autorizza di nuovo, poi apri una nuova conversazione: una vecchia può continuare a usare lo store precedente.",
      ],
    },
    {
      type: "paragraph",
      text: "Il connettore può anche creare uno store prima che tu abbia un account Shopify: descrivi l’attività e ne costruisce uno sul tema Canvas con contenuti di esempio, protetto da password in modo che nessuno possa comprare. Shopify avverte che chiunque abbia l’indirizzo di uno store non salvato può vederlo e modificarlo. Considerala una bozza e controlla i contenuti di esempio prima di vendere qualsiasi cosa. Sui costi, Shopify dice che il connettore non aggiunge costi Shopify: valgono i prezzi standard dei piani, mentre l’abbonamento a Claude va ad Anthropic.",
    },
    { type: "h2", text: "Cosa può fare Claude nel tuo store e cosa no?" },
    {
      type: "paragraph",
      text: "**Con il connettore Claude può leggere ordini, clienti e analytics e modificare prodotti, collezioni, inventario e temi non pubblicati, ma non può toccare i pagamenti né il tema online.** È la divisione che emerge dalla guida di Shopify.",
    },
    {
      type: "list",
      items: [
        "**Sola lettura:** ordini (quelli recenti o uno singolo), clienti e analytics tramite query basate su ShopifyQL. Shopify consiglia domande brevi, una alla volta.",
        "**Lettura e scrittura:** prodotti (crea, aggiorna, cerca, imposta bozza, attivo o archiviato), collezioni, inventario per variante e sede e codici sconto in percentuale.",
        "**Scrittura con la tua conferma:** pagine e menu, pubblicazione di un tema non pubblicato (dopo la tua conferma) e codici sconto, dove confermi la data di inizio e i clienti ammessi.",
        "**Temi:** modifica solo temi non pubblicati. Per cambiare la vetrina duplichi il tema nell’admin, lasci che lo strumento modifichi la copia e lo pubblichi tu.",
        "**Non può fare, nemmeno con permessi di scrittura:** cambiare piano, pagamenti, tasse o domini; modificare, pubblicare o eliminare il tema online; rimborsare, annullare o catturare ordini, segnarli come pagati o gestire resi; creare o modificare gift card; modificare clienti esistenti o codici sconto esistenti.",
      ],
    },
    {
      type: "paragraph",
      text: "Guarda il disegno: i soldi e la vetrina restano a te, e le scritture che rimangono hanno un controllo incorporato. Gli aggiornamenti di inventario leggono prima la quantità attuale e si fermano se il conteggio è cambiato. Copiamo questo schema nei nostri agenti (più sotto). Per il lato Shopify del protocollo, leggi [Shopify MCP spiegato](/it/blog/shopify-mcp).",
    },
    {
      type: "h2",
      text: "Cosa chiedere per prima cosa a Claude sul tuo store?",
    },
    {
      type: "paragraph",
      text: "**Parti da domande che puoi verificare nell’admin in cinque minuti, una alla volta, in sola lettura.** Queste sono nostre, costruite su ciò che il connettore legge:",
    },
    {
      type: "list",
      items: [
        '"Confronta le vendite per canale degli ultimi 30 giorni con i 30 giorni precedenti." (analytics)',
        '"Elenca i prodotti in bozza senza descrizione." (catalogo)',
        '"Quali varianti hanno meno scorte in ogni sede?" (inventario)',
        '"Mostra gli ordini più recenti raggruppati per paese di spedizione." (ordini)',
      ],
    },
    {
      type: "paragraph",
      text: "La mia regola: la prima volta, controlla ogni risposta nell’admin di Shopify. Un report che non puoi verificare è un’opinione. Dopo una settimana sai a quali domande Claude risponde in modo affidabile, e solo allora ha senso dargli la scrittura per un compito con un nome.",
    },
    {
      type: "h2",
      text: "Come imposti i permessi perché non vada storto niente?",
    },
    {
      type: "paragraph",
      text: "**Dai a Claude il minimo accesso che basta al lavoro e parti dalla sola lettura, perché Shopify non permette di restringere un livello già approvato: devi disinstallare l’integrazione e approvare di nuovo.** Le regole sono nella pagina [Authorizing AI tool access to your store](https://help.shopify.com/en/manual/ai-powered-tools/connecting-ai-tools/authorizing-access) di Shopify:",
    },
    {
      type: "list",
      items: [
        "**L’accesso segue la persona.** Lo staff autorizza in base ai propri permessi nell’admin, e uno strumento non fa mai più dell’utente che lo collega. La nostra pratica: collega con un account staff con i permessi adatti al compito, non con quello del proprietario.",
        "**Due livelli.** La sola lettura permette di vedere i dati; la scrittura permette di modificare e di agire per tuo conto. Se uno strumento chiede poi un livello più alto, ti viene richiesto e puoi rifiutare.",
        "**Usa l’integrazione ufficiale.** Shopify dice di non creare un token di accesso API né di costruire un’integrazione propria per questi strumenti.",
        "**I dati escono da Shopify.** Una volta condivisi con lo strumento AI sono regolati dai termini e dall’informativa privacy di quel fornitore. Decidi quali dati dei clienti mettergli davanti.",
        "**Revocare significa disinstallare.** Puoi rimuovere l’integrazione dall’admin in qualsiasi momento.",
      ],
    },
    {
      type: "paragraph",
      text: "Un altro punto è una nostra lettura, non una regola di Shopify. Uno store è pieno di testo scritto da sconosciuti: recensioni, note degli ordini, messaggi dei clienti. [La documentazione di Anthropic avverte che i server che recuperano contenuti esterni possono esporti alla prompt injection](https://code.claude.com/docs/en/mcp), cioè a istruzioni nascoste nel testo. Per questo scrittura e testo scritto dai clienti non dovrebbero incontrarsi nella stessa sessione. Ne parliamo meglio in [sicurezza degli agenti AI su Shopify](/it/blog/sicurezza-agenti-ai-shopify).",
    },
    { type: "h2", text: "Come si usa Claude Code per sviluppare su Shopify?" },
    {
      type: "paragraph",
      text: "**Claude Code è l’agente di programmazione di Anthropic: legge il tuo codice, modifica i file ed esegue comandi, e lo Shopify AI Toolkit gli dà la documentazione e gli schemi aggiornati di Shopify.** La [panoramica di Anthropic](https://code.claude.com/docs/en/overview) lo descrive disponibile nel terminale, negli IDE, in un’app desktop e nel browser. La [pagina dell’AI Toolkit di Shopify](https://shopify.dev/docs/apps/build/ai-toolkit) dice che il toolkit fa tre cose per uno strumento AI di programmazione:",
    },
    {
      type: "list",
      items: [
        "**Documentazione e schemi API:** cerca la superficie API giusta di Shopify invece di affidarsi alla memoria del modello.",
        "**Validazione del codice:** controlla query GraphQL, template Liquid ed estensioni Shopify contro gli schemi di Shopify.",
        "**Gestione dello store:** prepara ed esegue attività supportate sullo store tramite il contesto autenticato di Shopify CLI, e sei tu a decidere quando parte un’attività.",
      ],
    },
    {
      type: "paragraph",
      text: "Il requisito indicato in quella pagina è Node.js 18 o superiore. Ci sono tre modi per installarlo in Claude Code, tutti dalla documentazione di Shopify:",
    },
    {
      type: "list",
      items: [
        "**Plugin (consigliato):** `claude plugin install shopify-ai-toolkit@claude-plugins-official`. Raccoglie tutto e si aggiorna da solo.",
        "**Agent skills:** `npx skills add Shopify/shopify-ai-toolkit`, se vuoi gestire le skill da solo. Non si aggiornano in automatico.",
        "**Server Dev MCP:** `claude mcp add --transport stdio shopify-dev-mcp -- npx -y @shopify/dev-mcp@latest`, poi riavvia. Shopify dice che gira in locale e non richiede autenticazione.",
      ],
    },
    {
      type: "paragraph",
      text: "MCP, il Model Context Protocol, è lo standard aperto che collega gli strumenti AI a dati e strumenti esterni, e [Claude Code aggiunge i server con `claude mcp add`](https://code.claude.com/docs/en/mcp). Il server Dev MCP non richiede login, quindi da solo non apre nessuno store: è il lato di documentazione e validazione. Il lato dello store passa da Shopify CLI, che il [centro assistenza di Shopify](https://help.shopify.com/en/manual/ai-powered-tools/shopify-cli-connector) presenta come il connettore per chi sviluppa dal proprio computer.",
    },
    {
      type: "h2",
      text: "Che differenza c’è tra il connettore Claude e l’AI Toolkit?",
    },
    {
      type: "paragraph",
      text: "**Il connettore gestisce uno store da una chat, l’AI Toolkit sviluppa su Shopify dalla tua cartella di codice: rispondono a domande diverse.** Affiancati:",
    },
    {
      type: 'table',
      headers: ["Aspetto", "Connettore", "Toolkit"],
      rows: [
        [
          "**Chi lo usa**",
          "Un merchant o un responsabile di store.",
          "Uno sviluppatore o un’agenzia.",
        ],
        [
          "**Cosa fa**",
          "Report, prodotti, collezioni, inventario, sconti, temi non pubblicati.",
          "Ricerca nella documentazione, validazione del codice e attività sullo store tramite Shopify CLI.",
        ],
        [
          "**Cosa richiede**",
          "Un account staff Shopify e la tua approvazione nell’admin.",
          "Node.js 18 o superiore, uno strumento supportato e, per le attività sullo store, uno store a cui hai accesso.",
        ],
        [
          "**Dove si ferma**",
          "I limiti elencati sopra, come niente rimborsi e niente tema online.",
          "Shopify promette soltanto che l’accesso è limitato da ciò che approvi e dai tuoi permessi utente. I limiti del connettore sono del connettore, quindi con Claude Code l’accesso stretto lo costruisci tu.",
        ],
      ],
    },
    {
      type: "paragraph",
      text: "L’ultima riga è quella da ricordare. Se dai a Claude Code uno store tramite la CLI con accesso in scrittura, nessuno ha già tolto il pulsante del rimborso dalla sua portata. La guardia sono le tue regole.",
    },
    {
      type: "h2",
      text: "Cosa affidiamo a Claude Code in un progetto Shopify?",
    },
    {
      type: "paragraph",
      text: "**Affidiamo a Claude Code il lavoro ripetibile e controllabile: sezioni Liquid, Functions, migrazioni di estensioni e test, sempre su uno store di sviluppo e sempre rivisto da una persona.** Tre esempi che le pagine di Shopify stesse sostengono:",
    },
    {
      type: "list",
      items: [
        "**Codice del tema.** Sezioni e snippet Liquid, scritti e validati contro gli schemi di Shopify. Nel nostro Custom AI System il codice del tema è scritto da zero solo per il tuo store, senza codice morto e senza app che lo rallentano, e gli agenti sono parte del modo in cui lo sviluppiamo.",
        "**Shopify Functions.** Le [Functions](https://shopify.dev/docs/apps/build/functions) personalizzano la logica backend di Shopify: sconti, opzioni di pagamento e consegna, validazione del checkout. Shopify precisa che le app personalizzate che usano le API delle Functions richiedono il piano Shopify Plus, mentre le app pubbliche dell’App Store funzionano su qualsiasi piano.",
        '**Migrazioni di estensioni.** È l’esempio della pagina del toolkit di Shopify: spostare estensioni di checkout e account cliente costruite su versioni API precedenti a 2025-10 ai componenti web Polaris, con una richiesta semplice come "Migrate the extensions/my-checkout-extension extension to API version 2026-04". Shopify aggiunge che il risultato va comunque rivisto e testato.',
      ],
    },
    {
      type: "paragraph",
      text: "Le nostre regole si appoggiano a come Claude Code si comporta di base. Nelle sue [modalità di permessi](https://code.claude.com/docs/en/permission-modes) quella predefinita chiede prima di modifiche, comandi di shell e accesso alla rete, e la modalità plan blocca le modifiche finché non approvi un piano. Quindi: plan prima su tutto ciò che tocca il checkout; uno store di sviluppo, che Shopify descrive [solo per sviluppo e test](https://shopify.dev/docs/api/development-stores); lo store online riceve il codice tramite una modifica rivista e un tema duplicato che pubblichi tu. La [pagina sulla sicurezza](https://code.claude.com/docs/en/security) di Anthropic dice chi decide: sei tu a rivedere codice e comandi proposti prima di approvarli.",
    },
    {
      type: "h2",
      text: "Come lavorano gli agenti su Claude sullo store, con l’approvazione umana?",
    },
    {
      type: "paragraph",
      text: "**Un agente su Claude è un ciclo in cui il modello legge la situazione, sceglie uno strumento, guarda il risultato e decide il passo dopo; su uno store la versione sicura ha una persona su ogni scrittura.** Claude Code è uno di questi agenti. Se ne vuoi uno tuo, la [panoramica di Anthropic](https://code.claude.com/docs/en/overview) dice che l’Agent SDK permette di costruire agenti sugli strumenti di Claude Code con pieno controllo su orchestrazione, strumenti e permessi, e che Claude Code può girare in modo pianificato. Quello che costruisci sopra è il progetto, e questo è il nostro:",
    },
    {
      type: "list",
      items: [
        "**Strumenti di lettura di default.** L’agente elenca, cerca e confronta. Leggere è sempre permesso; scrivere è una decisione a parte.",
        "**Le scritture passano da una proposta.** L’agente dice cosa vuole cambiare e perché, una persona approva, e solo dopo uno strumento stretto esegue.",
        '**Strumenti stretti.** "Imposta questo prodotto in bozza" è uno strumento che puoi approvare. "Esegui qualsiasi mutation" è un assegno in bianco. Lo stesso connettore chiede conferma prima delle modifiche fatte con i suoi strumenti GraphQL, e noi andiamo un passo più stretti.',
        '**Una traccia.** Proposta, approvazione e azione sono registrate, così sai rispondere a "chi ha cambiato questo e perché" un mese dopo.',
        "**Parti dove sbagliare costa poco.** Bozze, tag, testi dei prodotti, report interni. Prezzi, rimborsi e messaggi ai clienti vengono per ultimi, se vengono.",
      ],
    },
    {
      type: "paragraph",
      text: "Il quadro completo, dal chatbot al workflow all’agente, è in [agenti AI per Shopify](/it/blog/agenti-ai-shopify). Una lettura collegata: [Claude Duet per uno store Shopify](/it/blog/claude-duet-shopify).",
    },
    {
      type: "paragraph",
      text: "Nelle migrazioni è qui che gli agenti si guadagnano il posto: controlli ripetuti che una persona poi approva. Il metodo è descritto in [migrare a Shopify con gli agenti AI](/it/blog/migrazione-shopify-agenti-ai) e il percorso completo è nella nostra [guida alla migrazione a Shopify](/it/migrazione-shopify). Su Nazzi il lavoro sui redirect ha riguardato 215 URL WooCommerce archiviati e la consegna è stata il CSV dei redirect 301 ([caso studio](/it/casi-studio/integratori-nazzi-dtc-shopify)). È il tipo di lavoro in cui un agente controlla e una persona firma. Su Cumini lo store arrivava da una piattaforma proprietaria legata al gestionale e la soluzione è stata integrata con il gestionale ([caso studio](/it/casi-studio/cumini-luxury-fashion-ecommerce)).",
    },
    {
      type: "h2",
      text: "Checklist: collegare Claude a uno store online senza rischi",
    },
    {
      type: "paragraph",
      text: "**Sei passi, in quest’ordine, mantengono utile e reversibile il collegamento con Claude.** Stampala o incollala negli appunti del tuo team.",
    },
    {
      type: "list",
      items: [
        "**Dai un nome al lavoro.** Una frase: cosa vuoi che Claude risponda o cambi, e chi lo controlla?",
        "**Scegli l’account.** Collega con un account staff con permessi adatti al lavoro, non con quello del proprietario.",
        "**Parti in sola lettura.** Ricorda che restringere dopo significa disinstallare e approvare di nuovo.",
        "**Fai una domanda alla volta** e controlla ogni risposta nell’admin per la prima settimana.",
        "**Scrittura per un compito con un nome,** e leggi ogni conferma. Modifiche al tema solo su un duplicato che pubblichi tu.",
        "**Tieni il testo dei clienti lontano dalle sessioni di scrittura** e disinstalla l’integrazione quando il lavoro è finito.",
      ],
    },
    {
      type: "paragraph",
      text: "Se il tuo store è già online e vuoi l’AI al lavoro con un piano, l’[AI Accelerator](/it/ai-accelerator) è un percorso di 30 giorni one-to-one con un eCommerce già avviato, a prezzo fisso e senza vincoli. Se sei ancora su un’altra piattaforma, prima viene il passaggio.",
    },
    { type: "h2", text: "Domande frequenti" },
    { type: "h3", text: "Si può dare a Claude l’accesso a Shopify?" },
    {
      type: "paragraph",
      text: "Sì. Il connettore ufficiale di Shopify si installa dalla directory di Claude e approvi l’accesso in sola lettura o in scrittura nell’admin di Shopify.",
    },
    { type: "h3", text: "Claude può costruire un sito Shopify al posto mio?" },
    {
      type: "paragraph",
      text: "Può avviarlo: il connettore crea uno store da una descrizione e Claude Code può scrivere il codice di uno store che sviluppi. Controlli tutto prima che lo vedano i clienti.",
    },
    { type: "h3", text: "Come si usa Claude per creare uno store Shopify?" },
    {
      type: "paragraph",
      text: "Da un browser desktop nomina Shopify nella richiesta, descrivi l’attività, verifica lo store dal link di anteprima, poi salvalo. Considera la prima versione una bozza.",
    },
    { type: "h3", text: "Il connettore Shopify per Claude è gratuito?" },
    {
      type: "paragraph",
      text: "Shopify dice che non ha costi Shopify aggiuntivi: valgono i prezzi standard dei piani Shopify, mentre l’abbonamento a Claude va ad Anthropic.",
    },
    {
      type: "h3",
      text: "Che differenza c’è tra il connettore e Claude Code con AI Toolkit?",
    },
    {
      type: "paragraph",
      text: "Il connettore gestisce uno store da una chat. Claude Code con lo [Shopify AI Toolkit](https://shopify.dev/docs/apps/build/ai-toolkit) sviluppa su Shopify dalla tua cartella di codice.",
    },
    {
      type: "h3",
      text: "Claude può rimborsare ordini o cambiare il mio tema online?",
    },
    {
      type: "paragraph",
      text: "Non tramite il connettore, secondo la guida di Shopify, nemmeno con permessi di scrittura. Con Claude Code il limite è l’accesso che approvi, quindi tienilo stretto.",
    },
    {
      type: "paragraph",
      text: "Lo [Shopify Launch Sprint](/it/sprint-migrazione-shopify) porta il tuo store su Shopify in 14 giorni con il nostro Custom AI System: calendario fisso, prezzo pubblico e 4 garanzie scritte.",
    },
  ],
};

export default article;
