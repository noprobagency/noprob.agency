import type { Article } from "../index";

const article: Article = {
  slug: "ai-agents-for-shopify",
  slugIt: "agenti-ai-shopify",
  title:
    "AI Agents for Ecommerce: Is Your Shopify AI Agent a Chatbot, a Workflow or an Agent?",
  titleIt:
    "Agenti AI per Shopify: chatbot, workflow o agente? Come riconoscerli sul tuo store",
  seoTitle: "AI Agents for Ecommerce: Shopify AI Agent Guide",
  seoTitleIt: "Agenti AI per Shopify: chatbot, workflow, agente",
  seoDescription:
    "AI agents for ecommerce explained for Shopify: tell a chatbot, a workflow and a Shopify AI agent apart, what to hand over, what to keep, what to ask vendors.",
  seoDescriptionIt:
    "Agenti AI per Shopify: come distinguere chatbot, workflow e agente AI su uno store, cosa affidare, cosa no e le domande da fare a un fornitore.",
  excerpt:
    "The criterion that separates a chatbot, a workflow and an AI agent on a Shopify store, five questions for any vendor, what makes sense to hand to an agent today and what does not, and the five patterns behind most agents.",
  excerptIt:
    "Il criterio che separa chatbot, workflow e agente AI su uno store Shopify, cinque domande per ogni fornitore, cosa ha senso affidare a un agente oggi e cosa no, e i cinque pattern dietro la maggior parte degli agenti.",
  ledeEn:
    "AI agents for ecommerce are everywhere in sales pages and rare in practice. Here is how to tell a chatbot, a workflow and a Shopify AI agent apart, and where each one belongs.",
  ledeIt:
    "Gli agenti AI per Shopify compaiono ovunque nelle pagine di vendita e raramente nella pratica. Ecco come distinguere chatbot, workflow e agente AI, e dove ha senso ciascuno.",
  image: "/images/blog/ai-agents-for-shopify-cover.png",
  imageAlt: "Copertina astratta, sfondo verde salvia sfumato, con una dissolvenza radiale di puntini più grandi ai bordi",
  imageAltEn: "Abstract cover, softly graded sage green background with a radial fade of dots growing toward the edges",
  articleType: "BlogPosting",
  date: "2026-10-29",
  datePublishedIso: "2026-10-29T09:00:00+00:00",
  dateModifiedIso: "2026-10-29T09:00:00+00:00",
  wordCount: 2900,
  articleSection: "AI agents",
  readingTimeMinutes: 12,
  keywordsEn:
    "ai agents for ecommerce, shopify ai agent, ai agent for shopify, ai agent vs chatbot, ai agent vs workflow, ai agents in ecommerce, shopify ai automation, ai agent patterns",
  keywordsIt:
    "agenti ai, agente ai shopify, agenti ai ecommerce, agenti ai cosa sono, differenza chatbot e agente ai, chatbot workflow agente, agenti ai per shopify, pattern agenti ai",
  content: [
    {
      type: "paragraph",
      text: "**AI agents for ecommerce are systems that choose their next step from what they find, using tools on your store data: a Shopify AI agent might read an order, check your policy and prepare a return, where a chatbot only answers and a workflow follows a path drawn in advance.** One question tells the three apart: is the path already written?",
    },
    {
      type: "paragraph",
      text: "We are noprob agency. We work every day with AI agents built on Claude Code: they write and test the code of the stores we build with the [Shopify Launch Sprint](/shopify-migration-sprint), and they read store data for us. This page is the map for our series on agents: the criterion to tell the three forms apart, the questions to ask a vendor, what to hand to an agent and what to keep, and the five patterns behind most of what is for sale. Each section points to the article that goes deeper.",
    },
    {
      type: "h2",
      text: "What are AI agents, and what do they mean for an ecommerce store?",
    },
    {
      type: "paragraph",
      text: "**An AI agent is a system that perceives a situation, decides what to do and acts toward a goal, usually in several steps, adapting each step to what the previous one turned up.** The language model inside it is only one part.",
    },
    {
      type: "paragraph",
      text: "Take Claude. There is Claude the model, the engine that turns text into text; Claude the chat app, which adds an interface, some memory and a few tools; and Claude Code, an agent. You give it a goal such as “refactor this checkout script and run the tests”, and it reads files, runs commands, looks at the result and decides what to do next, until it is done or needs your decision. Same family of model, three different systems.",
    },
    {
      type: "paragraph",
      text: "For a store, the lesson is that the word on the box tells you nothing: a vendor can call a chat window with one extra button an agent. Look at what the system does. The model keeps nothing between calls, so whatever the system remembers about an order or a half-finished job lives outside it, in code and data somebody built. An agent on Shopify is mostly engineering around a model: instructions, tools, access to your data, a place to keep state and rules about when to stop.",
    },
    {
      type: "paragraph",
      text: "Keep two directions apart. This page is about agents that work for the store: answering, sorting, checking, preparing. Agents that shop for your customers through ChatGPT or Copilot are in [agentic commerce for Shopify](/blog/agentic-commerce-shopify), and Shopify documents its side at [shopify.dev/docs/agents](https://shopify.dev/docs/agents). For the wider view of what AI does well in a store, read [AI for ecommerce](/blog/ai-for-ecommerce). We do not repeat it here.",
    },
    {
      type: "h2",
      text: "AI agent vs chatbot vs workflow: how do you tell them apart on a store?",
    },
    {
      type: "paragraph",
      text: "**Ask whether the path is already written. A chatbot has one move (answer), a workflow has several paths all drawn in advance, and an AI agent has a goal and tools and chooses the path step by step.** Anthropic draws the same line in [Building effective agents](https://www.anthropic.com/engineering/building-effective-agents): workflows run through predefined code paths, agents direct their own process and tool use.",
    },
    {
      type: "paragraph",
      text: "The clearest way to see it is one message handled three ways. A customer writes: “I bought this jacket as a gift, it is the wrong size, can I swap it?”",
    },
    {
      type: "list",
      items: [
        "**Chatbot.** It replies from the text it was given: your returns policy and a link to the form. It never looks at the order. Fast, cheap and identical for every customer.",
        "**Workflow.** A router labels the message “return”, the system looks up the order in Shopify, sends the return instructions, and anything that does not fit a label goes to a person. Every branch was drawn before the customer wrote. [Shopify Flow](https://help.shopify.com/en/manual/shopify-flow) works this way: triggers, conditions, actions.",
        "**AI agent.** It has the goal “resolve this request within policy” and tools to read orders, read the policy and check stock. It finds the order, sees it was a gift and is still inside the return window, checks that the right size is in stock, proposes an exchange, prepares the request and stops at the step that needs a person. The route depended on what it found. Nobody wrote it.",
      ],
    },
    {
      type: "paragraph",
      text: "The workflow handles the cases you foresaw and parks the rest. The agent copes with the unforeseen, at a price: every step is a model call, so it is slower and costs more, and a path you did not write is harder to check.",
    },
    {
      type: "paragraph",
      text: "My rule: start with the simplest form that solves the case and climb only when it stops being enough. Anthropic gives the same advice: find the simplest solution and add complexity only when it demonstrably improves the outcome. Most store tasks end up as a workflow with one agent step inside.",
    },
    {
      type: "h2",
      text: "Which of the three fits each case on a Shopify store?",
    },
    {
      type: "paragraph",
      text: "**For each task, pick the simplest form that still handles the cases you actually meet.** This is the matrix we use when we look at a store, eight typical cases:",
    },
    {
      type: "list",
      items: [
        "**“Where is my order?”** Workflow with a tool: look up the order and tracking, write the reply. A chatbot with no order access cannot answer it; an agent is more than the job needs.",
        "**Questions on shipping, returns and sizing.** Chatbot over your written policies, quoting the page it used. If the policy pages are vague, fix them first.",
        "**A return request.** Workflow for the standard case. Agent when gifts, late requests or damaged items make the next step depend on what it finds. The refund stays with a person.",
        "**Product advice (“which one for rain?”).** Chatbot or agent that searches your catalog. Quality depends on your product data far more than on the model.",
        "**Abandoned cart.** Workflow in Flow or your email platform: trigger, wait, condition, message. An agent adds cost and no value.",
        "**Product descriptions for a large catalog.** A fixed pipeline: take the facts from the supplier sheet, write only from them, check that nothing was added, import a sample a person reads.",
        "**Catalog cleanup and migration mapping.** Agent, because every source store is different and the next step depends on the last finding. Code reconciles counts and totals.",
        "**“Why did sales drop on Tuesday?”** Agent: it looks at orders, ads and tracking and decides where to look next. Only worth trusting when the tracking is right.",
      ],
    },
    {
      type: "paragraph",
      text: "The pattern is easy to remember: fixed jobs are workflows, investigative jobs are agents, plain questions are a chatbot with the right data.",
    },
    {
      type: "h2",
      text: "Which five questions should you ask a vendor who sells an “AI agent”?",
    },
    {
      type: "paragraph",
      text: "**Five questions separate an agent from a chatbot with a new label, and they work on any vendor.**",
    },
    {
      type: "list",
      items: [
        "**“Show me the path of one real request, step by step.”** A workflow shows a diagram. An agent shows a trace of what it did and why. If they can show neither, you are buying a chatbot.",
        "**“Which tools does it call on my store, and with which permissions?”** Reading orders is not editing them. Ask for the list, and start with read-only access.",
        "**“What can it do alone, and what waits for a person?”** Refunds, discounts, price changes and promises to customers should wait. The vendor should name the approval step, not describe good intentions.",
        "**“What happens when it does not know?”** The right answer is a handoff to a person with the context attached, not a confident guess.",
        "**“How do I test it before and after every change?”** A fixed set of real cases with a pass mark. Our guide to [evaluating an AI assistant for your store](/blog/evaluate-ai-assistant-ecommerce) gives you the cases.",
      ],
    },
    {
      type: "paragraph",
      text: "Questions two and three are also your security review. OWASP calls the failure [excessive agency](https://genai.owasp.org/llmrisk/llm062025-excessive-agency/): too many tools, too many permissions, too much autonomy. The remedy is minimal functions, narrow permissions and a person approving high-impact actions. More in [AI agent security for Shopify](/blog/ai-agent-security-shopify).",
    },
    {
      type: "h2",
      text: "What does it make sense to give an AI agent on Shopify today?",
    },
    {
      type: "paragraph",
      text: "**Give an agent work that has several steps, can be checked and can be undone. Customer care, catalog, migration and analysis fit that description; money and promises do not.**",
    },
    { type: "h3", text: "Customer care" },
    {
      type: "paragraph",
      text: "**In customer care, an agent can look up the order, read your policy, draft the answer and prepare the case, while a person approves anything that costs money.** Start with drafts that a person sends, and widen the agent’s freedom only as your test cases pass. The full design is in [an AI assistant for orders and returns on Shopify](/blog/ai-customer-service-shopify).",
    },
    { type: "h3", text: "Catalog" },
    {
      type: "paragraph",
      text: "**In the catalog, AI works first as a checked pipeline and only second as an agent.** An agent earns its place when supplier sheets are messy and each needs a different decision. In my own projects I use Shopify’s built-in AI with clean data and a person reviewing the output. The built-in tools are in [Shopify Magic and Sidekick](/blog/shopify-magic-sidekick), and the fixed jobs you can run without code are in [Shopify Flow and AI](/blog/shopify-flow-ai).",
    },
    { type: "h3", text: "Migration" },
    {
      type: "paragraph",
      text: "**Migration is where agents fit best, because the work is wide, repetitive and verifiable.** Agents are good at the checkable parts: reading the source store, mapping fields, drafting the redirect map, comparing counts and totals. A person decides the exceptions, and in the Sprint we reconcile counts and totals of products, customers and orders before anything is switched on. The method is in [migrating to Shopify with AI agents](/blog/shopify-migration-ai-agents) and the [301 redirects guide](/blog/shopify-301-redirects); the whole process is in the [guide to migrating to Shopify](/shopify-migration). [Integratori DTC Nazzi](/use-cases/integratori-nazzi-dtc-shopify) moved from WooCommerce and [Cumini](/use-cases/cumini-luxury-fashion-ecommerce) from a proprietary platform tied to its ERP.",
    },
    { type: "h3", text: "Analysis" },
    {
      type: "paragraph",
      text: "**In analysis, an agent can watch the numbers you would not open every day and tell you what moved, provided the tracking is right.** An agent reading a broken dashboard gives you a confident wrong answer, only faster. On Cumini the tracking audit score went from 31 to 92 out of 100 around the migration: an agent reading numbers is only as good as that baseline. Working with Claude on a store is in [Claude and Claude Code on Shopify](/blog/claude-shopify) and [Claude Duet for a Shopify ecommerce](/blog/claude-duet-shopify).",
    },
    { type: "h2", text: "What should you not hand to an AI agent?" },
    {
      type: "paragraph",
      text: "**Keep with people anything that moves money, makes a promise to a customer or cannot be undone. The agent prepares, a person decides.**",
    },
    {
      type: "list",
      items: [
        "**Refunds and exceptions.** The agent opens the case with the order, the reason and the policy attached. A person approves.",
        "**Price, discount and shipping-rule changes.** The agent proposes the change with a preview of what it touches.",
        "**Promises.** Delivery dates, remedies the customer or the law is entitled to choose, anything that commits the store.",
        "**Claims in regulated categories.** Health, safety and legal statements are checked by someone who answers for them.",
        "**Anything irreversible.** Deleting products or customers, or sending to the whole mailing list.",
      ],
    },
    {
      type: "paragraph",
      text: "A practical test: could you undo it in a minute? If yes, an agent can do it and you review later. If not, it waits for a click. Begin with read-only access and add write tools one at a time, each with its own approval rule.",
    },
    {
      type: "h2",
      text: "Which patterns sit behind most AI agents, and what do they look like on a Shopify store?",
    },
    {
      type: "paragraph",
      text: "**Five patterns cover most of what is sold as an AI agent: routing, tool use, reflection, planning and multiple agents. Each solves one problem, so add one only when you have that problem.** Anthropic’s guide uses a slightly different vocabulary (prompt chaining, routing, parallelization, orchestrator-workers, evaluator-optimizer), but the ideas overlap.",
    },
    { type: "h3", text: "Routing" },
    {
      type: "paragraph",
      text: "**Routing sorts an input and sends it down the right path.** On a store, each customer message is labeled order, return, product question, complaint or other, and each label has its own handling. Keep a fallback route for everything else and read what lands there every week: it shows the route you have not built yet.",
    },
    { type: "h3", text: "Tool use" },
    {
      type: "paragraph",
      text: "**Tool use lets the model ask the system to do something, and the system does it under your rules.** The model proposes “look up the order for this email”, your code runs it with the permissions you granted. Begin with read-only tools. Shopify exposes the buyer side the same way: its Order MCP fetches the current status of an order on demand. See [Shopify MCP explained](/blog/shopify-mcp).",
    },
    { type: "h3", text: "Reflection" },
    {
      type: "paragraph",
      text: "**Reflection adds a second reader: a checker that reviews the draft against written criteria before it goes out.** “Read it again” is not a criterion. Useful ones can be checked: every fact comes from the order or the product page, no promise belongs to a person, an unhappy customer is acknowledged. Give the checker its own context and switch it on only where a mistake costs something, such as refunds, dates and promises. Anthropic calls the pattern evaluator-optimizer.",
    },
    { type: "h3", text: "Planning" },
    {
      type: "paragraph",
      text: "**Planning is for requests with several steps, where the next step depends on the last result.** A gift arrives damaged, the return window has closed and the customer wants a different size: nobody can script that in advance. Plan only the next step, look at the result, plan again, and write the limits in code: a maximum number of steps and a way out to a person.",
    },
    { type: "h3", text: "Multiple agents" },
    {
      type: "paragraph",
      text: "**Several agents make sense when work has to be kept apart, and rarely otherwise.** Anthropic’s guidance on [building multi-agent systems](https://claude.com/resources/articles/building-multi-agent-systems-when-and-how-to-use-them) names three situations where they beat one agent: context that gets polluted, tasks that can run in parallel, and real specialization. Outside those, it says, coordination costs typically exceed the benefits, and it advises dividing along context boundaries, not job titles.",
    },
    {
      type: "paragraph",
      text: "On a store that looks like this: one read-only agent gathers order and policy facts, while a second one with write access never reads text written by strangers, such as reviews. Decisions stay in one place. For most stores a workflow with one agent step is enough; what building an agent costs, and when you do not need one, is in [building an AI agent for your Shopify store](/blog/build-ai-agent-shopify).",
    },
    {
      type: "h2",
      text: "Where do Sidekick, Flow and agentic commerce fit in this map?",
    },
    {
      type: "paragraph",
      text: "**Shopify already ships pieces of each form, so check them before you build or buy.** [Shopify Flow](https://help.shopify.com/en/manual/shopify-flow) is the workflow form: the app is free on the Basic, Grow, Advanced and Plus plans, and Send HTTP Request is available on Grow, Advanced and Plus. Sidekick and the built-in AI are an assistant for the merchant inside the admin, covered in [Shopify Magic and Sidekick](/blog/shopify-magic-sidekick).",
    },
    {
      type: "paragraph",
      text: "AI also reaches your store from outside. Agents that shop for customers are in [agentic commerce for Shopify](/blog/agentic-commerce-shopify) and [ChatGPT shopping for Shopify](/blog/chatgpt-shopping-shopify); getting cited in AI answers is in [GEO for Shopify](/blog/geo-for-shopify) and [GEO vs SEO](/blog/geo-vs-seo).",
    },
    {
      type: "h2",
      text: "How do the AI Accelerator, the Sprint and the Custom AI System fit in?",
    },
    {
      type: "paragraph",
      text: "**If your store is live on Shopify, the [AI Accelerator](/ai-accelerator) is the route: 30 days one-to-one, up to two quick wins switched on with you, and three deliverables that stay yours. If you are changing platform, the [Shopify Launch Sprint](/shopify-migration-sprint) rebuilds your store on Shopify in 14 days with the Custom AI System.**",
    },
    {
      type: "paragraph",
      text: "The Custom AI System is code written from scratch for one store and designed for the AI agents that work on it, which also makes the store ready for the agents that visit it. In the Sprint, go-live falls between day 15 and 30, followed by 90 days of support. In the AI Accelerator we help you decide which of the cases above deserve a workflow, an agent or nothing yet.",
    },
    { type: "h2", text: "Frequently asked questions" },
    {
      type: "h3",
      text: "What is the difference between an AI agent and a chatbot?",
    },
    {
      type: "paragraph",
      text: "A chatbot answers; an AI agent pursues a goal in several steps and chooses each step from what it finds. The test is whether the path is already written. A chatbot follows one move, a workflow follows paths drawn in advance, and an agent builds the path as it goes using tools on your data.",
    },
    { type: "h3", text: "What are AI agents in ecommerce?" },
    {
      type: "paragraph",
      text: "In ecommerce, AI agents are systems that act on store data to reach a goal, such as resolving a return request, cleaning a catalog or explaining a drop in sales. Money, promises and irreversible actions should still wait for a person.",
    },
    { type: "h3", text: "Do I need an AI agent for my Shopify store?" },
    {
      type: "paragraph",
      text: "Probably not as a first step. Many store tasks need a workflow or a chatbot with the right data, which cost less and are easier to check. An agent is worth it when the next step genuinely depends on what the last one found.",
    },
    { type: "h3", text: "Which AI agents are best for ecommerce?" },
    {
      type: "paragraph",
      text: "There is no best agent, only the right form for each job. Use Shopify’s built-in tools such as Flow and Sidekick for what they cover, consider a custom agent only for work that is multi-step, checkable and reversible, and judge any vendor with the five questions above.",
    },
    {
      type: "h3",
      text: "What is an AI assistant, and is it different from an agent?",
    },
    {
      type: "paragraph",
      text: "“AI assistant” is a loose label for software you talk to. It can be a chatbot that only answers or an agent that uses tools, so judge it by what it does.",
    },
    {
      type: "paragraph",
      text: "The Sprint has a public price by revenue: €5,800 under €2M, €8,800 from €2M to €20M, €12,800 above €20M, VAT excluded, in 4 installments.",
    },
    {
      type: "paragraph",
      text: "The [Shopify Launch Sprint](/shopify-migration-sprint) moves your store to Shopify in 14 days with our Custom AI System: a fixed calendar, a public price and 4 written guarantees.",
    },
  ],
  contentIt: [
    {
      type: "paragraph",
      text: "**Gli agenti AI per un eCommerce sono sistemi che scelgono il passo successivo in base a ciò che trovano, usando strumenti sui dati del tuo store: un agente AI Shopify può leggere un ordine, controllare la tua policy e preparare un reso, dove un chatbot risponde soltanto e un workflow segue un percorso disegnato prima.** Una domanda separa le tre forme: la strada è già scritta?",
    },
    {
      type: "paragraph",
      text: "Siamo noprob agency. Lavoriamo ogni giorno con agenti AI costruiti su Claude Code: scrivono e testano il codice degli store che costruiamo con lo [Shopify Launch Sprint](/it/sprint-migrazione-shopify) e leggono i dati dello store per noi. Questa pagina è la mappa della nostra serie sugli agenti: il criterio per distinguere le tre forme, le domande da fare a un fornitore, cosa affidare a un agente e cosa tenere, e i cinque pattern dietro quasi tutto ciò che si vende. Ogni sezione rimanda all’articolo che va più a fondo.",
    },
    {
      type: "h2",
      text: "Agenti AI: cosa sono e cosa cambiano per un eCommerce?",
    },
    {
      type: "paragraph",
      text: "**Un agente AI è un sistema che percepisce una situazione, decide cosa fare e agisce per raggiungere un obiettivo, di solito in più passi, adattando ogni passo a ciò che ha trovato in quello prima.** Il modello linguistico che ha dentro è soltanto un pezzo.",
    },
    {
      type: "paragraph",
      text: "Prendi Claude. C’è Claude il modello, il motore che trasforma testo in testo; Claude l’app di chat, che aggiunge un’interfaccia, un po’ di memoria e qualche strumento; e Claude Code, che è un agente. Gli dai un obiettivo come “riscrivi questo script del checkout ed esegui i test”, e lui legge i file, lancia comandi, guarda il risultato e decide cosa fare dopo, finché ha finito o gli serve una tua decisione. Stesso tipo di modello, tre sistemi diversi.",
    },
    {
      type: "paragraph",
      text: "Per uno store la lezione è che la parola sulla scatola non dice niente: un fornitore può chiamare agente una finestra di chat con un pulsante in più. Guarda cosa fa il sistema. Il modello tra una chiamata e l’altra non ricorda nulla, quindi ciò che il sistema sa di un ordine vive fuori, in codice e dati che qualcuno ha costruito. Un agente AI su Shopify è soprattutto ingegneria intorno a un modello: istruzioni, strumenti, accesso ai tuoi dati, uno stato e regole su quando fermarsi.",
    },
    {
      type: "paragraph",
      text: "Tieni separate due direzioni. Questa pagina parla degli agenti che lavorano per lo store: rispondere, smistare, controllare, preparare. Gli agenti che comprano per i tuoi clienti tramite ChatGPT o Copilot sono in [agentic commerce per Shopify](/it/blog/agentic-commerce-shopify), e Shopify documenta la sua parte su [shopify.dev/docs/agents](https://shopify.dev/docs/agents). Per la visione generale su cosa fa bene l’AI in uno store leggi [AI per eCommerce](/it/blog/ai-per-ecommerce). Qui non la ripetiamo.",
    },
    {
      type: "h2",
      text: "Differenza tra chatbot, workflow e agente AI: come si riconoscono su uno store?",
    },
    {
      type: "paragraph",
      text: "**Chiediti se la strada è già scritta. Un chatbot ha una sola mossa (rispondere), un workflow ha più strade tutte disegnate prima, un agente AI ha un obiettivo e degli strumenti e sceglie la strada un passo alla volta.** Anthropic traccia la stessa linea in [Building effective agents](https://www.anthropic.com/engineering/building-effective-agents): i workflow seguono percorsi di codice definiti prima, gli agenti dirigono da soli il proprio processo e l’uso degli strumenti.",
    },
    {
      type: "paragraph",
      text: "Il modo più chiaro per vederlo è un messaggio gestito in tre modi. Un cliente scrive: “Ho comprato questa giacca come regalo, la taglia è sbagliata, posso cambiarla?”",
    },
    {
      type: "list",
      items: [
        "**Chatbot.** Risponde con il testo che gli hanno dato: la tua policy sui resi e il link al modulo. L’ordine non lo guarda mai. Veloce, economico e identico per tutti i clienti.",
        "**Workflow.** Un router etichetta il messaggio come “reso”, il sistema cerca l’ordine in Shopify, manda le istruzioni di reso, e tutto ciò che non rientra in un’etichetta passa a una persona. Ogni ramo è stato disegnato prima che il cliente scrivesse. [Shopify Flow](https://help.shopify.com/en/manual/shopify-flow) funziona così: trigger, condizioni, azioni.",
        "**Agente AI.** Ha l’obiettivo “risolvi questa richiesta nel rispetto della policy” e strumenti per leggere gli ordini, leggere la policy e controllare le scorte. Trova l’ordine, vede che era un regalo ed è ancora nei termini di reso, verifica che la taglia giusta sia disponibile, propone un cambio, prepara la pratica e si ferma al passo che richiede una persona. La strada dipendeva da ciò che ha trovato. Nessuno l’ha scritta.",
      ],
    },
    {
      type: "paragraph",
      text: "Il workflow gestisce i casi che avevi previsto e parcheggia gli altri. L’agente se la cava con l’imprevisto, a un prezzo: ogni passo è una chiamata al modello, quindi è più lento e costa di più, e una strada che non hai scritto è più difficile da controllare.",
    },
    {
      type: "paragraph",
      text: "La mia regola: parti dalla forma più semplice che risolve il caso e sali solo quando smette di bastare. Anthropic dà lo stesso consiglio: cerca la soluzione più semplice e aggiungi complessità solo quando migliora in modo dimostrabile il risultato. La maggior parte dei compiti di uno store finisce come un workflow con dentro un passo da agente.",
    },
    { type: "h2", text: "Quale forma serve per ogni caso su Shopify?" },
    {
      type: "paragraph",
      text: "**Per ogni compito scegli la forma più semplice che gestisce ancora i casi che incontri davvero.** È la matrice che usiamo quando guardiamo uno store, otto casi tipici:",
    },
    {
      type: "list",
      items: [
        "**“Dov’è il mio ordine?”** Workflow con uno strumento: cerca ordine e tracking, scrive la risposta. Un chatbot senza accesso all’ordine non può rispondere; un agente è più di quanto serva.",
        "**Domande su spedizioni, resi e taglie.** Chatbot sulle tue policy scritte, che cita la pagina usata. Se le pagine di policy sono vaghe, sistemale prima.",
        "**Una richiesta di reso.** Workflow per il caso standard. Agente quando regali, richieste tardive o prodotti danneggiati fanno dipendere il passo dopo da ciò che trova. Il rimborso resta a una persona.",
        "**Consigli di prodotto (“quale va bene per la pioggia?”).** Chatbot o agente che cerca nel catalogo. La qualità dipende dai dati prodotto molto più che dal modello.",
        "**Carrello abbandonato.** Workflow in Flow o nella piattaforma email: trigger, attesa, condizione, messaggio. Un agente aggiunge costo e nessun valore.",
        "**Descrizioni prodotto per un catalogo grande.** Una pipeline fissa: prendi i fatti dalla scheda del fornitore, scrivi solo da quelli, controlla che non sia stato aggiunto nulla, importa un campione che una persona legge.",
        "**Pulizia del catalogo e mappatura per una migrazione.** Agente, perché ogni store di partenza è diverso e il passo dopo dipende da ciò che ha trovato il precedente. Conteggi e totali li riconcilia il codice.",
        "**“Perché martedì le vendite sono calate?”** Agente: guarda ordini, pubblicità e tracking e decide dove guardare dopo. Ci si può fidare solo se il tracking è corretto.",
      ],
    },
    {
      type: "paragraph",
      text: "Lo schema è facile da ricordare: i lavori fissi sono workflow, i lavori d’indagine sono agenti, le domande semplici sono un chatbot con i dati giusti.",
    },
    {
      type: "h2",
      text: "Quali cinque domande fare a chi ti vende un “agente AI”?",
    },
    {
      type: "paragraph",
      text: "**Cinque domande separano un agente da un chatbot con un’etichetta nuova, e valgono con qualsiasi fornitore.**",
    },
    {
      type: "list",
      items: [
        "**“Fammi vedere il percorso di una richiesta vera, passo per passo.”** Un workflow mostra un diagramma. Un agente mostra la traccia di cosa ha fatto e perché. Se non possono mostrare né l’uno né l’altra, stai comprando un chatbot.",
        "**“Quali strumenti chiama sul mio store e con quali permessi?”** Leggere gli ordini non è modificarli. Chiedi l’elenco e parti con accesso in sola lettura.",
        "**“Cosa fa da solo e cosa aspetta una persona?”** Rimborsi, sconti, cambi di prezzo e promesse ai clienti devono aspettare. Il fornitore deve indicare il passo di approvazione, non descrivere buone intenzioni.",
        "**“Cosa succede quando non sa?”** La risposta giusta è il passaggio a una persona con il contesto allegato, non un’ipotesi detta con sicurezza.",
        "**“Come lo testo prima e dopo ogni modifica?”** Un insieme fisso di casi veri con una soglia da superare. La nostra guida per [valutare un assistente AI per il tuo store](/it/blog/valutare-assistente-ai-ecommerce) ti dà i casi.",
      ],
    },
    {
      type: "paragraph",
      text: "Le domande due e tre sono anche la tua revisione di sicurezza. OWASP chiama il difetto [excessive agency](https://genai.owasp.org/llmrisk/llm062025-excessive-agency/): troppi strumenti, troppi permessi, troppa autonomia. Il rimedio sono funzioni minime, permessi stretti e una persona che approva le azioni ad alto impatto. Altro in [sicurezza degli agenti AI su Shopify](/it/blog/sicurezza-agenti-ai-shopify).",
    },
    {
      type: "h2",
      text: "Cosa conviene affidare a un agente AI su Shopify oggi?",
    },
    {
      type: "paragraph",
      text: "**Affida a un agente un lavoro che ha più passi, si può controllare e si può annullare. Assistenza clienti, catalogo, migrazione e analisi rientrano nella descrizione; denaro e promesse no.**",
    },
    { type: "h3", text: "Assistenza clienti" },
    {
      type: "paragraph",
      text: "**Nell’assistenza clienti un agente può cercare l’ordine, leggere la tua policy, scrivere la bozza e preparare la pratica, mentre una persona approva tutto ciò che costa denaro.** Parti da bozze che una persona invia e allarga la libertà dell’agente solo man mano che i casi di prova passano. Il disegno completo è in [assistente AI per ordini e resi su Shopify](/it/blog/assistente-ai-ordini-resi-shopify).",
    },
    { type: "h3", text: "Catalogo" },
    {
      type: "paragraph",
      text: "**Nel catalogo l’AI lavora prima come pipeline controllata e solo dopo come agente.** L’agente si guadagna il posto quando le schede dei fornitori sono disordinate e ognuna richiede una decisione diversa. Nei miei progetti uso l’AI integrata di Shopify con dati puliti e una persona che rivede il risultato. Gli strumenti integrati sono in [Shopify Magic e Sidekick](/it/blog/shopify-magic-sidekick), e i lavori fissi che puoi far girare senza codice sono in [Shopify Flow e AI](/it/blog/shopify-flow-ai).",
    },
    { type: "h3", text: "Migrazione" },
    {
      type: "paragraph",
      text: "**La migrazione è dove gli agenti si adattano meglio, perché il lavoro è ampio, ripetitivo e verificabile.** Gli agenti vanno bene nelle parti controllabili: leggere lo store di partenza, mappare i campi, abbozzare la mappa dei redirect, confrontare conteggi e totali. Le eccezioni le decide una persona, e nello Sprint riconciliamo conteggi e totali di prodotti, clienti e ordini prima di accendere qualsiasi cosa. Il metodo è in [migrare a Shopify con gli agenti AI](/it/blog/migrazione-shopify-agenti-ai) e nella [guida ai redirect 301](/it/blog/redirect-301-shopify); il processo è nella [guida alla migrazione a Shopify](/it/migrazione-shopify). [Integratori DTC Nazzi](/it/casi-studio/integratori-nazzi-dtc-shopify) è arrivato da WooCommerce, [Cumini](/it/casi-studio/cumini-luxury-fashion-ecommerce) da una piattaforma proprietaria collegata al gestionale.",
    },
    { type: "h3", text: "Analisi" },
    {
      type: "paragraph",
      text: "**Nell’analisi un agente può tenere d’occhio i numeri che tu non apriresti ogni giorno e dirti cosa si è mosso, a patto che il tracking sia corretto.** Un agente che legge una dashboard sbagliata ti dà una risposta sbagliata e sicura, solo più in fretta. Su Cumini il punteggio dell’audit del tracking è passato da 31 a 92 su 100 intorno alla migrazione: un agente che legge i numeri vale quanto quella base di partenza. Lavorare con Claude su uno store è in [Claude e Claude Code su Shopify](/it/blog/claude-shopify) e in [Claude Duet per un eCommerce Shopify](/it/blog/claude-duet-shopify).",
    },
    { type: "h2", text: "Cosa non va affidato a un agente AI?" },
    {
      type: "paragraph",
      text: "**Tieni alle persone tutto ciò che muove denaro, fa una promessa a un cliente o non si può annullare. L’agente prepara, una persona decide.**",
    },
    {
      type: "list",
      items: [
        "**Rimborsi ed eccezioni.** L’agente apre la pratica con ordine, motivo e policy allegati. Una persona approva.",
        "**Cambi di prezzo, sconti e regole di spedizione.** L’agente propone la modifica con un’anteprima di ciò che tocca.",
        "**Promesse.** Date di consegna, rimedi che spetta al cliente o alla legge scegliere, tutto ciò che impegna lo store.",
        "**Affermazioni in categorie regolamentate.** Dichiarazioni su salute, sicurezza e questioni legali le controlla chi ne risponde.",
        "**Tutto ciò che è irreversibile.** Cancellare prodotti o clienti, o scrivere a tutta la lista email.",
      ],
    },
    {
      type: "paragraph",
      text: "Un test pratico: potresti annullarlo in un minuto? Se sì, un agente può farlo e tu rivedi dopo. Se no, aspetta un clic. Comincia con accesso in sola lettura e aggiungi gli strumenti di scrittura uno alla volta, ciascuno con la sua regola di approvazione.",
    },
    {
      type: "h2",
      text: "Quali pattern ci sono dietro gli agenti AI, e come sono su uno store Shopify?",
    },
    {
      type: "paragraph",
      text: "**Cinque pattern coprono quasi tutto ciò che si vende come agente AI: routing, tool use, reflection, planning e più agenti. Ognuno risolve un problema, quindi aggiungine uno solo quando hai quel problema.** La guida di Anthropic usa un vocabolario un po’ diverso (prompt chaining, routing, parallelization, orchestrator-workers, evaluator-optimizer), ma le idee si sovrappongono.",
    },
    { type: "h3", text: "Routing" },
    {
      type: "paragraph",
      text: "**Il routing smista un input e lo manda sulla strada giusta.** Su uno store ogni messaggio del cliente viene etichettato come ordine, reso, domanda sul prodotto, reclamo o altro, e ogni etichetta ha la sua gestione. Tieni una strada di riserva per tutto il resto e leggi ogni settimana cosa ci finisce: ti mostra la strada che non hai ancora costruito.",
    },
    { type: "h3", text: "Tool use" },
    {
      type: "paragraph",
      text: "**Il tool use permette al modello di chiedere al sistema di fare qualcosa, e il sistema lo fa secondo le tue regole.** Il modello propone “cerca l’ordine di questa email”, il tuo codice lo esegue con i permessi che hai concesso. Comincia con strumenti in sola lettura. Shopify espone così anche il lato acquirente: il suo Order MCP recupera su richiesta lo stato attuale di un ordine. Vedi [Shopify MCP spiegato](/it/blog/shopify-mcp).",
    },
    { type: "h3", text: "Reflection" },
    {
      type: "paragraph",
      text: "**La reflection aggiunge un secondo lettore: un controllore che rivede la bozza con criteri scritti prima che parta.** “Rileggila” non è un criterio. I criteri utili si possono verificare: ogni fatto viene dall’ordine o dalla scheda prodotto, nessuna promessa spetta a una persona, il cliente scontento viene riconosciuto. Dai al controllore un contesto suo e accendilo solo dove un errore costa qualcosa, come rimborsi, date e promesse. Anthropic chiama il pattern evaluator-optimizer.",
    },
    { type: "h3", text: "Planning" },
    {
      type: "paragraph",
      text: "**Il planning serve per richieste con più passi, dove il passo dopo dipende dall’ultimo risultato.** Un regalo arriva danneggiato, il periodo di reso è chiuso e il cliente vuole un’altra taglia: nessuno può scriverlo prima. Pianifica solo il passo successivo, guarda il risultato, pianifica di nuovo, e scrivi i limiti nel codice: un numero massimo di passi e una via d’uscita verso una persona.",
    },
    { type: "h3", text: "Più agenti" },
    {
      type: "paragraph",
      text: "**Più agenti hanno senso quando il lavoro va tenuto separato, e raramente altrimenti.** La guida di Anthropic sui [sistemi multi-agente](https://claude.com/resources/articles/building-multi-agent-systems-when-and-how-to-use-them) indica tre situazioni in cui battono un agente solo: contesto che si inquina, compiti in parallelo e vera specializzazione. Fuori da quelle, dice, i costi di coordinamento di solito superano i benefici, e consiglia di dividere lungo i confini del contesto, non lungo i ruoli.",
    },
    {
      type: "paragraph",
      text: "Su uno store si traduce così: un agente in sola lettura raccoglie i fatti su ordini e policy, mentre un secondo con accesso in scrittura non legge mai testi scritti da sconosciuti, come le recensioni. Le decisioni restano in un posto solo. Per la maggior parte degli store basta un workflow con un passo da agente; quanto costa costruire un agente, e quando non serve, è in [creare un agente AI per il tuo store Shopify](/it/blog/creare-agente-ai-shopify).",
    },
    {
      type: "h2",
      text: "Dove stanno Sidekick, Flow e agentic commerce in questa mappa?",
    },
    {
      type: "paragraph",
      text: "**Shopify offre già pezzi di ogni forma, quindi controllali prima di costruire o comprare.** [Shopify Flow](https://help.shopify.com/en/manual/shopify-flow) è la forma workflow: l’app è gratuita sui piani Basic, Grow, Advanced e Plus, e Send HTTP Request è disponibile su Grow, Advanced e Plus. Sidekick e l’AI integrata sono un assistente per il merchant dentro l’admin, raccontati in [Shopify Magic e Sidekick](/it/blog/shopify-magic-sidekick).",
    },
    {
      type: "paragraph",
      text: "L’AI arriva al tuo store anche da fuori. Gli agenti che comprano per i clienti sono in [agentic commerce per Shopify](/it/blog/agentic-commerce-shopify) e in [ChatGPT shopping per Shopify](/it/blog/chatgpt-shopping-shopify); farsi citare nelle risposte AI è in [GEO SEO per Shopify](/it/blog/geo-seo-shopify) e in [GEO vs SEO](/it/blog/geo-vs-seo).",
    },
    {
      type: "h2",
      text: "Come entrano in gioco AI Accelerator, Sprint e Custom AI System?",
    },
    {
      type: "paragraph",
      text: "**Se il tuo store è già su Shopify, la strada è l’[AI Accelerator](/it/ai-accelerator): 30 giorni one-to-one, fino a due quick win attivati con te e tre deliverable che restano tuoi. Se stai cambiando piattaforma, lo [Shopify Launch Sprint](/it/sprint-migrazione-shopify) ricostruisce il tuo store su Shopify in 14 giorni con il Custom AI System.**",
    },
    {
      type: "paragraph",
      text: "Il Custom AI System è codice scritto da zero per un solo store e pensato per gli agenti AI che ci lavorano, e rende lo store pronto anche per gli agenti che lo visitano. Nello Sprint il go-live cade tra il giorno 15 e il 30, seguito da 90 giorni di supporto. Nell’AI Accelerator ti aiutiamo a decidere quali dei casi qui sopra meritano un workflow, un agente o per ora niente.",
    },
    { type: "h2", text: "Domande frequenti" },
    { type: "h3", text: "Che differenza c’è tra un agente AI e un chatbot?" },
    {
      type: "paragraph",
      text: "Un chatbot risponde; un agente AI persegue un obiettivo in più passi e sceglie ogni passo da ciò che trova. Il test è se la strada è già scritta. Un chatbot ha una sola mossa, un workflow segue strade disegnate prima, un agente costruisce la strada mentre procede usando strumenti sui tuoi dati.",
    },
    { type: "h3", text: "Cosa sono gli agenti AI nell’eCommerce?" },
    {
      type: "paragraph",
      text: "Nell’eCommerce gli agenti AI sono sistemi che agiscono sui dati dello store per raggiungere un obiettivo, come risolvere una richiesta di reso, ripulire un catalogo o spiegare un calo delle vendite. Denaro, promesse e azioni irreversibili devono comunque aspettare una persona.",
    },
    { type: "h3", text: "Mi serve un agente AI per il mio store Shopify?" },
    {
      type: "paragraph",
      text: "Probabilmente non come primo passo. Molti compiti di uno store richiedono un workflow o un chatbot con i dati giusti, che costano meno e si controllano meglio. Un agente vale la pena quando il passo successivo dipende davvero da ciò che ha trovato il precedente.",
    },
    { type: "h3", text: "Quali sono i migliori agenti AI per l’eCommerce?" },
    {
      type: "paragraph",
      text: "Non esiste un agente migliore, esiste la forma giusta per ogni lavoro. Usa gli strumenti integrati di Shopify come Flow e Sidekick per ciò che coprono, valuta un agente su misura solo per un lavoro a più passi, controllabile e reversibile, e giudica ogni fornitore con le cinque domande qui sopra.",
    },
    {
      type: "h3",
      text: "Cos’è un assistente AI, e come si distingue da un agente?",
    },
    {
      type: "paragraph",
      text: "“Assistente AI” è un’etichetta generica per un software con cui parli. Può essere un chatbot che risponde soltanto o un agente che usa strumenti, quindi giudicalo da ciò che fa.",
    },
    {
      type: "paragraph",
      text: "Lo Sprint ha un prezzo pubblico per fatturato: €5.800 sotto i €2M, €8.800 tra €2M e €20M, €12.800 oltre i €20M, IVA esclusa, in 4 rate.",
    },
    {
      type: "paragraph",
      text: "Lo [Shopify Launch Sprint](/it/sprint-migrazione-shopify) porta il tuo store su Shopify in 14 giorni con il nostro Custom AI System: calendario fisso, prezzo pubblico e 4 garanzie scritte.",
    },
  ],
  faqEn: [
    {
      question: "What is the difference between an AI agent and a chatbot?",
      answer:
        "A chatbot answers; an AI agent pursues a goal in several steps and chooses each step from what it finds. The test is whether the path is already written. A chatbot follows one move, a workflow follows paths drawn in advance, and an agent builds the path as it goes using tools on your data.",
    },
    {
      question: "What are AI agents in ecommerce?",
      answer:
        "In ecommerce, AI agents are systems that act on store data to reach a goal, such as resolving a return request, cleaning a catalog or explaining a drop in sales. Money, promises and irreversible actions should still wait for a person.",
    },
    {
      question: "Do I need an AI agent for my Shopify store?",
      answer:
        "Probably not as a first step. Many store tasks need a workflow or a chatbot with the right data, which cost less and are easier to check. An agent is worth it when the next step genuinely depends on what the last one found.",
    },
    {
      question: "Which AI agents are best for ecommerce?",
      answer:
        "There is no best agent, only the right form for each job. Use Shopify’s built-in tools such as Flow and Sidekick for what they cover, consider a custom agent only for work that is multi-step, checkable and reversible, and judge any vendor with the five questions above.",
    },
    {
      question: "What is an AI assistant, and is it different from an agent?",
      answer:
        "“AI assistant” is a loose label for software you talk to. It can be a chatbot that only answers or an agent that uses tools, so judge it by what it does.",
    },
  ],
  faqIt: [
    {
      question: "Che differenza c’è tra un agente AI e un chatbot?",
      answer:
        "Un chatbot risponde; un agente AI persegue un obiettivo in più passi e sceglie ogni passo da ciò che trova. Il test è se la strada è già scritta. Un chatbot ha una sola mossa, un workflow segue strade disegnate prima, un agente costruisce la strada mentre procede usando strumenti sui tuoi dati.",
    },
    {
      question: "Cosa sono gli agenti AI nell’eCommerce?",
      answer:
        "Nell’eCommerce gli agenti AI sono sistemi che agiscono sui dati dello store per raggiungere un obiettivo, come risolvere una richiesta di reso, ripulire un catalogo o spiegare un calo delle vendite. Denaro, promesse e azioni irreversibili devono comunque aspettare una persona.",
    },
    {
      question: "Mi serve un agente AI per il mio store Shopify?",
      answer:
        "Probabilmente non come primo passo. Molti compiti di uno store richiedono un workflow o un chatbot con i dati giusti, che costano meno e si controllano meglio. Un agente vale la pena quando il passo successivo dipende davvero da ciò che ha trovato il precedente.",
    },
    {
      question: "Quali sono i migliori agenti AI per l’eCommerce?",
      answer:
        "Non esiste un agente migliore, esiste la forma giusta per ogni lavoro. Usa gli strumenti integrati di Shopify come Flow e Sidekick per ciò che coprono, valuta un agente su misura solo per un lavoro a più passi, controllabile e reversibile, e giudica ogni fornitore con le cinque domande qui sopra.",
    },
    {
      question: "Cos’è un assistente AI, e come si distingue da un agente?",
      answer:
        "“Assistente AI” è un’etichetta generica per un software con cui parli. Può essere un chatbot che risponde soltanto o un agente che usa strumenti, quindi giudicalo da ciò che fa.",
    },
  ],
};

export default article;
