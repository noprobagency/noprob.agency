import type { Article } from "../index";

const article: Article = {
  slug: "build-ai-agent-shopify",
  slugIt: "creare-agente-ai-shopify",
  title: "AI Agent Cost for Shopify: How to Build One, and When Not To",
  titleIt:
    "Creare agenti AI per il tuo store Shopify: cosa serve, quanto costa, quando no",
  seoTitle: "AI Agent Cost for Shopify: How to Build One",
  seoTitleIt: "Creare un agente AI per Shopify: quanto costa",
  seoDescription:
    "AI agent cost for Shopify and how to build one: the two questions to ask first, what you need, the routes, the cost drivers and when you do not need an agent.",
  seoDescriptionIt:
    "Come creare un agente AI per il tuo store Shopify: le due domande prima di costruirlo, cosa serve, le strade, da cosa dipende il costo e quando non serve.",
  excerpt:
    "How to build an AI agent for a Shopify store: do you need one, what it takes (clean data, tools, instructions, evaluation), the four routes, what drives the cost with official model prices, and when a workflow is enough.",
  excerptIt:
    "Come creare un agente AI per uno store Shopify: se ti serve davvero, cosa occorre (dati puliti, strumenti, istruzioni, valutazione), le quattro strade, da cosa dipende il costo con i prezzi ufficiali dei modelli e quando basta un workflow.",
  ledeEn:
    "How to build an AI agent for a Shopify store starts with two questions, not a tool. Here is what you need, the routes you can take, what drives the AI agent cost, and when you should not build one.",
  ledeIt:
    "Creare agenti AI per uno store Shopify comincia da due domande, non da uno strumento. Ecco come creare un agente AI: cosa serve, quali strade ci sono, da cosa dipende il costo e quando non serve.",
  image: "/images/blog/build-ai-agent-shopify-cover.png",
  imageAlt: "Copertina astratta, sfondo verde bosco, con fasce diagonali di puntini",
  imageAltEn: "Abstract cover, forest green background with diagonal bands of dots",
  articleType: "BlogPosting",
  date: "2026-10-29",
  datePublishedIso: "2026-10-29T09:00:00+00:00",
  dateModifiedIso: "2026-10-29T09:00:00+00:00",
  wordCount: 2600,
  articleSection: "AI agents",
  readingTimeMinutes: 11,
  keywordsEn:
    "ai agent cost, how to build an ai agent, build ai agent shopify, ai agents for ecommerce, ai agent for shopify, do i need an ai agent, ai agent vs workflow",
  keywordsIt:
    "creare agenti ai, come creare un agente ai, quanto costa un agente ai, agenti ai cosa sono, agente ai shopify, serve un agente ai ecommerce, agente ai o workflow",
  content: [
    {
      type: "paragraph",
      text: "**To build an AI agent for your Shopify store, answer two questions before you touch a tool: do you need an agent at all, and would a plain workflow do the job?** After that you need four things (clean data, tools the agent may use, written instructions and limits, a way to evaluate it), you pick one of four routes, and you work out the cost from five factors instead of a price list.",
    },
    {
      type: "paragraph",
      text: "We are noprob agency. If your store is not on Shopify yet, the first thing worth building is a clean base: the [Shopify Launch Sprint](/shopify-migration-sprint) moves your store to Shopify in 14 days with our Custom AI System. If you are already on Shopify, the [AI Accelerator](/ai-accelerator) is 30 days one-to-one to find where AI pays in your store and switch on the first solutions. Either way, this guide gives you the method, with the official source for every price it mentions.",
    },
    {
      type: "h2",
      text: "What is an AI agent, and how is it different from a workflow?",
    },
    {
      type: "paragraph",
      text: "**An AI agent is a model that decides its own next step, calling tools until the job is done. A workflow follows a path you wrote in advance.** Anthropic draws the same line in [Building effective agents](https://www.anthropic.com/engineering/building-effective-agents): look for the simplest solution that works and add complexity only when needed, because agentic systems often trade latency and cost for better results.",
    },
    {
      type: "paragraph",
      text: "In a store the difference is easy to see. “Where is my order?” is a workflow: find the order, read the date, answer. A customer who writes that a gift arrived broken, after the return window, and asks for a replacement is where an agent can earn its place. It has to read your policy, check the order, weigh the exception and decide whether a person should take over. A chatbot answers, a workflow acts along a fixed path, an agent chooses the path. The full comparison is in [AI agents for Shopify: chatbot, workflow or agent](/blog/ai-agents-for-shopify).",
    },
    {
      type: "h2",
      text: "Do you actually need an AI agent? Two questions before you build",
    },
    {
      type: "paragraph",
      text: "**Ask the objective question first and the personal one second: do the numbers hold, and is it worth it for you?** The order matters. If you start from “I want one”, you read every number looking for the ones that agree with you.",
    },
    { type: "h3", text: "Question one: do the numbers hold?" },
    {
      type: "list",
      items: [
        "**Volume:** how many requests arrive each week, and of what kind (order status, returns, sizing, product questions)?",
        "**Cost of the time today:** who answers, and how many hours a week does it take?",
        "**Cost of a mistake:** what happens if the answer is wrong, a refund granted by error or a delivery date promised and missed?",
        "**Speed:** how fast does the customer expect an answer, and does a late one cost you sales?",
        "**Coverage of a fixed path:** how much of the volume could a set of rules handle without any judgement?",
      ],
    },
    { type: "h3", text: "Question two: is it worth it for you?" },
    {
      type: "list",
      items: [
        "What kind of store do you want to be: the one that answers in seconds at midnight, or the one where a person reads every complaint?",
        "Who will read the agent’s failures every week and update its instructions when a policy changes?",
        "Could you explain how it works to the person who takes over from you?",
      ],
    },
    {
      type: "paragraph",
      text: "Two opposite stores show why both questions count. In the first, the owner reads ten messages a week: no agent will pay for itself, and the owner’s reading is part of the service. In the second, support takes a person every day and most messages are order status, returns and sizing: automation pays, and most of it is a workflow, with an agent only for the hard cases.",
    },
    {
      type: "paragraph",
      text: "My rule, as a developer by training: if you have not done the numbers, do them first. If they do not hold, look for a smaller version, and if there is none, stop. If they hold but nobody wants to maintain it, do not start. If both hold, build, and write down what “enough” means before you begin: how many test cases must pass, how long a customer may wait, how much you will spend a month.",
    },
    { type: "h2", text: "When do you not need an AI agent?" },
    {
      type: "paragraph",
      text: "**You do not need an agent when a fixed path covers the request, when the volume is low, or when nobody will check its work.** The usual cases:",
    },
    {
      type: "list",
      items: [
        "**A few requests a week.** A person answers better and the cost of building never pays back.",
        "**The answer must be identical every time.** Shipping terms and your returns policy belong on a page and in a reply template, not in a model.",
        "**The job is “when X happens, do Y”.** That is [Shopify Flow](/blog/shopify-flow-ai), with no model in the loop.",
        "**You need drafts, summaries or reports for your own team.** Sidekick or Shopify Magic with a human review is enough: see [Shopify Magic and Sidekick](/blog/shopify-magic-sidekick).",
        "**Your data is not reliable.** An agent repeats wrong stock, wrong sizes and an old returns policy fluently, which is worse than repeating them badly.",
        "**Nobody owns the weekly review.** An agent nobody checks drifts.",
      ],
    },
    {
      type: "paragraph",
      text: "In each of these cases the useful move is smaller and cheaper than an agent. That is why the AI Accelerator starts by mapping where AI pays in your store, before any tool is chosen.",
    },
    {
      type: "h2",
      text: "What do you need to build an AI agent for a Shopify store?",
    },
    {
      type: "paragraph",
      text: "**You need four things: clean data, tools the agent may call, written instructions and limits, and a way to evaluate it.** Skip the fourth and you will not know whether the other three work.",
    },
    { type: "h3", text: "Clean data" },
    {
      type: "paragraph",
      text: "The agent can only be as right as what it reads: product attributes, variants, metafields, policies, order data. Wrong stock or an outdated returns page becomes a confident wrong answer. Cleaning is the unglamorous half of the project, and a migration is the cheapest moment to do it, because every product is touched anyway. The [Shopify Launch Sprint](/shopify-migration-sprint) runs in 14 days with go-live between day 15 and 30, and the Custom AI System behind it is built for AI agents, with the data of your catalog mapped in detail. Our [guide to migrating to Shopify](/shopify-migration) shows the steps.",
    },
    {
      type: "paragraph",
      text: "Measurement belongs to the same discipline. On [Cumini](/use-cases/cumini-luxury-fashion-ecommerce), the tracking audit score went from 31 to 92 out of 100 around the migration. The rule holds for an agent too: take the baseline first, because you cannot judge it against a number you never took.",
    },
    { type: "h3", text: "Tools" },
    {
      type: "paragraph",
      text: "Tools are what the agent can do: read an order, search the catalog, open a return, tag a ticket, hand over to a person. Each tool is a permission, so start with read-only ones and add write actions one at a time. Shopify’s Universal Commerce Protocol (UCP) is how agents work with a store: its MCP tools cover catalog search, cart and checkout, and the old catalog and cart tools on /api/mcp have been replaced by UCP at /api/ucp/mcp. The [agent documentation](https://shopify.dev/docs/agents) and the [Storefront MCP page](https://shopify.dev/docs/apps/build/storefront-mcp), which covers the move, list what exists; [Shopify MCP explained](/blog/shopify-mcp) covers what it changes. What an agent may touch is a security decision, treated in [AI agent security on Shopify](/blog/ai-agent-security-shopify).",
    },
    { type: "h3", text: "Instructions and limits" },
    {
      type: "paragraph",
      text: "Write down the role, the tone, the policies, what the agent must never do, when it must hand over to a person, the refund amount above which a human decides, and the maximum number of steps per request. These are files in a repository, versioned like code, not a prompt someone pastes into a box.",
    },
    { type: "h3", text: "Evaluation" },
    {
      type: "paragraph",
      text: "Collect real past requests with the right answer next to each, starting from a first set of ten and growing it, and run them again after every change. If the score does not move, the change did nothing, whatever it felt like. Track the cost per conversation in the same run. The method is in [how to evaluate an AI assistant for your store](/blog/evaluate-ai-assistant-ecommerce).",
    },
    {
      type: "h2",
      text: "Which route should you take: Flow and Sidekick, an app, a custom agent or the Custom AI System?",
    },
    {
      type: "paragraph",
      text: "**Take the smallest route that covers the job: Shopify’s own tools first, then an app, then a custom agent.** Each step adds control and adds work.",
    },
    { type: "h3", text: "Shopify Flow and Sidekick" },
    {
      type: "paragraph",
      text: "[Shopify Flow](https://help.shopify.com/en/manual/shopify-flow) is a free app available on the Basic, Grow, Advanced and Plus plans; you build workflows from triggers, conditions and actions. The Send HTTP Request action is available on Grow, Advanced and Plus, which means a Flow can call a service of your own. [Sidekick](https://help.shopify.com/en/manual/shopify-admin/productivity-tools/sidekick) is included with your plan (Shopify says features and usage limits vary by plan), can build Flow workflows for you and presents changes for your review before applying them. This route fits internal work and fixed rules. More in [Shopify Flow and AI: ready workflows](/blog/shopify-flow-ai).",
    },
    { type: "h3", text: "An app from the Shopify App Store" },
    {
      type: "paragraph",
      text: "For customer-facing support or recommendations, an app is the quickest start. Read which store data it can access, ask what happens when it does not know, and test it on your own evaluation set before you pay for a year. The price is set by the developer on the app page.",
    },
    { type: "h3", text: "A custom agent on Claude or another model" },
    {
      type: "paragraph",
      text: "You, or a developer, write the instructions, the tools and the checks, and call a model such as Claude, GPT or Gemini through its API. It is worth it when your process is specific: unusual policies, a back office that is not standard, cases with several steps. We build with AI agents on Claude Code every day, and it shapes how we design them: small steps, written limits, tests before anything touches a customer.",
    },
    { type: "h3", text: "The Custom AI System" },
    {
      type: "paragraph",
      text: "The Custom AI System is the store itself, written from scratch for your shop and ready for AI agents, with an automatic GEO layer and data mapped in detail. It does not replace the three routes above: it makes every one of them start from data that is already clean. It comes with the Shopify Launch Sprint.",
    },
    { type: "h2", text: "How much does an AI agent for a Shopify store cost?" },
    {
      type: "paragraph",
      text: "**An AI agent for a Shopify store costs the sum of five things: your Shopify plan, the model usage, the setup, the apps, and the time to maintain and check it. Only the first two have public prices.** Use this as a checklist for any quote you receive:",
    },
    {
      type: "list",
      items: [
        "**Shopify plan.** Basic €19, Grow €56 and Advanced €289 a month with yearly billing, Plus from €2,100 a month ([Shopify pricing](https://www.shopify.com/pricing), as shown on 29 October 2026; prices vary by country). Sidekick is included in the plan and Flow is a free app.",
        "**Model usage.** Billed per million tokens, input and output separately. Prices below.",
        "**Setup.** Developer hours for instructions, tools, tests and the connection to your store. No official price exists: ask for a quote that lists hours per piece.",
        "**Apps.** Each app has its own plan on its App Store page.",
        "**Maintenance and review.** The weekly reading of failures and the update of instructions when policies or models change.",
      ],
    },
    { type: "h3", text: "What does the model cost?" },
    {
      type: "paragraph",
      text: "Official prices, checked on 29 October 2026, per million tokens (input / output). On [Anthropic’s pricing page](https://platform.claude.com/docs/en/about-claude/pricing): Claude Haiku 5.5 $0.10 / $0.50 (prompts up to 100,000 tokens), Claude Sonnet 5.5 $2 / $10, Claude Fable 5.1 $10 / $50. On [OpenAI’s pricing page](https://developers.openai.com/api/docs/pricing): gpt-6-luna $0.10 / $0.50, gpt-6-astra $10 / $50. Between a small and a top model of the same maker the input price differs by 100 times at both makers, so “always the most powerful model” is a spending decision, not a safety measure. Prices change often: check the pages before you budget.",
    },
    {
      type: "paragraph",
      text: "Two levers lower the bill without touching the answers. Prompt caching: the instructions and tool descriptions repeat on every call, and a cache read costs a fraction of the base input price at Anthropic (10% on Claude Haiku 5.5, 5% on Claude Sonnet 5.5, 2.5% on Claude Fable 5.1). Batch processing: work nobody waits for, such as nightly test runs, is billed at 50% of the standard price at both Anthropic and OpenAI.",
    },
    { type: "h3", text: "An example you can redo with your own numbers" },
    {
      type: "paragraph",
      text: "This is an illustration, not a measurement. Assume a support conversation needs 4 model calls, each with 3,000 input tokens (instructions, tool descriptions, history) and 400 output tokens: 12,000 input and 1,600 output tokens in total. On Claude Haiku 5.5 that is about $0.002 per conversation, on Claude Sonnet 5.5 about $0.04, on Claude Fable 5.1 about $0.20. For 1,000 conversations a month: about $2, $40 and $200. Change the calls and the tokens to match your own requests.",
    },
    {
      type: "paragraph",
      text: "The pattern is the useful part: in this example the model is the small line. The big lines are the setup and the hours of whoever checks the agent, so budget for people’s time before you budget for tokens. If you want your own figures, with the tool and the order of work, the AI Accelerator ends with a priority document and a 90-day roadmap including tool costs; its price is fixed and public on its page.",
    },
    { type: "h2", text: "Where should you start this week?" },
    {
      type: "paragraph",
      text: "**Start with the numbers and the smallest route, not with a tool.** In this order:",
    },
    {
      type: "list",
      items: [
        "Count your support requests for two weeks and sort them: status, returns, sizing, product questions, exceptions.",
        "Note the hours spent and the cost of the worst mistake in each group.",
        "Check which groups a Shopify Flow or a reply template already covers.",
        "Fix the data an agent would read: attributes, stock, the returns and shipping pages.",
        "Write a first set of ten real requests with the right answer: the start of your evaluation set.",
        "Write down what “enough” means: pass rate, waiting time, monthly spend. Then pick a route.",
      ],
    },
    { type: "h2", text: "Frequently asked questions" },
    { type: "h3", text: "How much does an AI agent cost?" },
    {
      type: "paragraph",
      text: "It is the sum of your Shopify plan, model usage, setup, apps and ongoing review. Model usage is billed per million tokens at public prices: in our example about $2, $40 or $200 for 1,000 conversations depending on the model. Setup and maintenance are the larger lines and depend on the quote.",
    },
    {
      type: "h3",
      text: "How do I build an AI agent for my store without coding?",
    },
    {
      type: "paragraph",
      text: "Start with Shopify Flow and Sidekick, which need no code, or with an app from the App Store. A custom agent that calls a model and your store data needs a developer. Whatever you pick, write the instructions and a set of test requests yourself, because they define what “right” means.",
    },
    { type: "h3", text: "What are AI agents, in one line?" },
    {
      type: "paragraph",
      text: "An AI agent is a model that chooses its next step and uses tools, such as reading an order, until the task is done. A workflow follows a fixed path, and a chatbot only answers. Agents suit tasks with exceptions and several steps.",
    },
    { type: "h3", text: "Is an AI agent free?" },
    {
      type: "paragraph",
      text: "Parts of the stack are: Sidekick is included in your Shopify plan and Flow is a free app. A custom agent is not, because the model is billed per use and someone has to set it up and check it. The model is often the smallest cost.",
    },
    { type: "h3", text: "Can I buy a ready-made AI agent for my store?" },
    {
      type: "paragraph",
      text: "Yes, as an app from the Shopify App Store or as a service from a developer. Test it on your own real requests before committing, and check which store data it can read and which actions it can take.",
    },
    { type: "h3", text: "Are AI agents worth it for a small store?" },
    {
      type: "paragraph",
      text: "It depends on the numbers, not on the size. A store with few requests rarely gains from an agent, while one where support fills a person’s day usually does, mostly through workflows and a few agent steps. Run the two questions in this guide before you spend anything.",
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
      text: "**Creare agenti AI per il tuo store Shopify significa rispondere a due domande prima di toccare uno strumento: ti serve davvero un agente, e un workflow non basterebbe?** Dopo servono quattro cose (dati puliti, strumenti che l’agente può usare, istruzioni e limiti scritti, un modo per valutarlo), si sceglie una di quattro strade e il costo si calcola da cinque voci, non da un listino.",
    },
    {
      type: "paragraph",
      text: "Siamo noprob agency. Se il tuo store non è ancora su Shopify, la prima cosa da costruire è una base pulita: lo [Shopify Launch Sprint](/it/sprint-migrazione-shopify) porta il tuo store su Shopify in 14 giorni con il nostro Custom AI System. Se sei già su Shopify, l’[AI Accelerator](/it/ai-accelerator) sono 30 giorni one-to-one per trovare dove l’AI rende nel tuo store e attivare le prime soluzioni. In entrambi i casi qui trovi il metodo, con la fonte ufficiale di ogni prezzo citato.",
    },
    {
      type: "h2",
      text: "Agenti AI: cosa sono e in cosa si distinguono da un workflow?",
    },
    {
      type: "paragraph",
      text: "**Un agente AI è un modello che decide da solo il passo successivo e chiama degli strumenti finché il lavoro è fatto. Un workflow segue un percorso che hai scritto tu in anticipo.** Anthropic traccia la stessa linea in [Building effective agents](https://www.anthropic.com/engineering/building-effective-agents): cerca la soluzione più semplice che funziona e aggiungi complessità solo quando serve, perché i sistemi agentici spesso scambiano latenza e costo con risultati migliori.",
    },
    {
      type: "paragraph",
      text: "In uno store la differenza si vede subito. “Dov’è il mio ordine?” è un workflow: trovi l’ordine, leggi la data, rispondi. Un cliente che scrive che il regalo è arrivato rotto, oltre il termine del reso, e chiede la sostituzione è il caso in cui un agente può servire. Deve leggere la tua policy, controllare l’ordine, pesare l’eccezione e decidere se passare la pratica a una persona. Un chatbot risponde, un workflow esegue un percorso fisso, un agente sceglie il percorso. Il confronto completo è in [Agenti AI per Shopify: chatbot, workflow o agente](/it/blog/agenti-ai-shopify).",
    },
    {
      type: "h2",
      text: "Ti serve davvero un agente AI? Due domande prima di costruirlo",
    },
    {
      type: "paragraph",
      text: "**Fai prima la domanda oggettiva e poi quella personale: i numeri reggono, e vale la pena per te?** L’ordine conta. Se parti da “ne voglio uno”, leggi ogni numero cercando quelli che ti danno ragione.",
    },
    { type: "h3", text: "Prima domanda: i numeri reggono?" },
    {
      type: "list",
      items: [
        "**Volume:** quante richieste arrivano a settimana e di che tipo (stato ordine, resi, taglie, domande sul prodotto)?",
        "**Costo del tempo oggi:** chi risponde e quante ore a settimana ci vogliono?",
        "**Costo di un errore:** cosa succede se la risposta è sbagliata, un rimborso concesso per sbaglio o una data di consegna promessa e mancata?",
        "**Velocità:** in quanto tempo il cliente si aspetta una risposta, e una risposta tardiva ti costa vendite?",
        "**Copertura di un percorso fisso:** quanta parte del volume gestirebbe un insieme di regole senza alcun giudizio?",
      ],
    },
    { type: "h3", text: "Seconda domanda: vale la pena per te?" },
    {
      type: "list",
      items: [
        "Che store vuoi essere: quello che risponde in pochi secondi a mezzanotte, o quello in cui una persona legge ogni reclamo?",
        "Chi leggerà ogni settimana gli errori dell’agente e aggiornerà le istruzioni quando cambia una policy?",
        "Sapresti spiegare come funziona a chi prenderà il tuo posto?",
      ],
    },
    {
      type: "paragraph",
      text: "Due store opposti mostrano perché servono tutte e due. Nel primo il titolare legge dieci messaggi a settimana: nessun agente si ripaga, e la lettura del titolare fa parte del servizio. Nel secondo l’assistenza occupa una persona ogni giorno e quasi tutti i messaggi sono stato ordine, resi e taglie: l’automazione ripaga, e quasi tutta è workflow, con un agente solo per i casi difficili.",
    },
    {
      type: "paragraph",
      text: "La mia regola, da sviluppatore di formazione: se non hai fatto i conti, falli prima. Se non reggono, cerca una versione più piccola, e se non c’è, fermati. Se reggono ma nessuno vuole mantenerlo, non cominciare. Se reggono tutti e due, costruisci, e scrivi prima cosa vuol dire “abbastanza”: quanti casi di prova devono passare, quanto può aspettare un cliente, quanto spendi al mese.",
    },
    { type: "h2", text: "Quando non serve un agente AI?" },
    {
      type: "paragraph",
      text: "**Non serve un agente quando un percorso fisso copre la richiesta, quando il volume è basso o quando nessuno controllerà il suo lavoro.** I casi più comuni:",
    },
    {
      type: "list",
      items: [
        "**Poche richieste a settimana.** Una persona risponde meglio e il costo di costruire non rientra mai.",
        "**La risposta deve essere identica ogni volta.** Tempi di spedizione e policy dei resi stanno in una pagina e in un modello di risposta, non in un modello AI.",
        "**Il lavoro è “quando succede X, fai Y”.** È [Shopify Flow](/it/blog/shopify-flow-ai), senza modello nel mezzo.",
        "**Ti servono bozze, riassunti o report per il tuo team.** Bastano Sidekick o Shopify Magic con una revisione umana: vedi [Shopify Magic e Sidekick](/it/blog/shopify-magic-sidekick).",
        "**I tuoi dati non sono affidabili.** Un agente ripete con eleganza scorte sbagliate, taglie sbagliate e una vecchia policy dei resi, ed è peggio che ripeterle male.",
        "**Nessuno ha in carico la revisione settimanale.** Un agente che nessuno controlla va alla deriva.",
      ],
    },
    {
      type: "paragraph",
      text: "In tutti questi casi la mossa utile è più piccola e più economica di un agente. Per questo l’AI Accelerator parte dalla mappa di dove l’AI rende nel tuo store, prima di scegliere qualsiasi strumento.",
    },
    {
      type: "h2",
      text: "Cosa serve per creare un agente AI per uno store Shopify?",
    },
    {
      type: "paragraph",
      text: "**Servono quattro cose: dati puliti, strumenti che l’agente può chiamare, istruzioni e limiti scritti, e un modo per valutarlo.** Senza la quarta non saprai se le altre tre funzionano.",
    },
    { type: "h3", text: "Dati puliti" },
    {
      type: "paragraph",
      text: "L’agente può avere ragione solo quanto ciò che legge: attributi prodotto, varianti, metafield, policy, dati degli ordini. Una scorta sbagliata o una pagina resi vecchia diventano una risposta sbagliata detta con sicurezza. La pulizia è la metà poco appariscente del progetto, e la migrazione è il momento più economico per farla, perché ogni prodotto viene toccato comunque. Lo [Shopify Launch Sprint](/it/sprint-migrazione-shopify) dura 14 giorni con go-live tra il giorno 15 e il 30, e il Custom AI System che c’è dietro è pronto per gli agenti AI, con i dati del catalogo mappati nel dettaglio. La nostra [guida alla migrazione a Shopify](/it/migrazione-shopify) mostra i passi.",
    },
    {
      type: "paragraph",
      text: "La misurazione fa parte della stessa disciplina. Su [Cumini](/it/casi-studio/cumini-luxury-fashion-ecommerce) il punteggio dell’audit tracking è passato da 31 a 92 su 100 attorno alla migrazione. La regola vale anche per l’agente: prendi prima la base di partenza, perché non puoi giudicarlo rispetto a un numero che non hai mai preso.",
    },
    { type: "h3", text: "Strumenti" },
    {
      type: "paragraph",
      text: "Gli strumenti sono ciò che l’agente può fare: leggere un ordine, cercare nel catalogo, aprire un reso, aggiungere un tag, passare la pratica a una persona. Ogni strumento è un permesso, quindi parti da quelli in sola lettura e aggiungi le azioni di scrittura una alla volta. Lo Universal Commerce Protocol (UCP) di Shopify è il modo in cui gli agenti lavorano con uno store: i suoi strumenti MCP coprono ricerca nel catalogo, carrello e checkout, e i vecchi strumenti catalogo e carrello su /api/mcp sono stati sostituiti da UCP su /api/ucp/mcp. La [documentazione per gli agenti](https://shopify.dev/docs/agents) e la [pagina di Storefront MCP](https://shopify.dev/docs/apps/build/storefront-mcp), che racconta il passaggio, elencano cosa esiste; [Shopify MCP spiegato](/it/blog/shopify-mcp) racconta cosa cambia. Cosa può toccare un agente è una decisione di sicurezza, trattata in [sicurezza degli agenti AI su Shopify](/it/blog/sicurezza-agenti-ai-shopify).",
    },
    { type: "h3", text: "Istruzioni e limiti" },
    {
      type: "paragraph",
      text: "Scrivi il ruolo, il tono, le policy, cosa l’agente non deve mai fare, quando deve passare a una persona, l’importo di rimborso oltre il quale decide un umano e il numero massimo di passi per richiesta. Sono file in un repository, versionati come il codice, non un prompt che qualcuno incolla in una casella.",
    },
    { type: "h3", text: "Valutazione" },
    {
      type: "paragraph",
      text: "Raccogli richieste vere del passato, ciascuna con la risposta giusta accanto, partendo da un primo insieme di dieci e facendolo crescere, e rilanciale dopo ogni modifica. Se il punteggio non si muove, la modifica non ha fatto nulla, qualunque sensazione tu abbia. Nella stessa prova segna il costo per conversazione. Il metodo è in [come valutare un assistente AI per il tuo store](/it/blog/valutare-assistente-ai-ecommerce).",
    },
    {
      type: "h2",
      text: "Quale strada scegliere: Flow e Sidekick, un’app, un agente su misura o il Custom AI System?",
    },
    {
      type: "paragraph",
      text: "**Prendi la strada più piccola che copre il lavoro: prima gli strumenti di Shopify, poi un’app, poi un agente su misura.** Ogni gradino aggiunge controllo e aggiunge lavoro.",
    },
    { type: "h3", text: "Shopify Flow e Sidekick" },
    {
      type: "paragraph",
      text: "[Shopify Flow](https://help.shopify.com/en/manual/shopify-flow) è un’app gratuita disponibile sui piani Basic, Grow, Advanced e Plus; costruisci i workflow con trigger, condizioni e azioni. L’azione Send HTTP Request è disponibile su Grow, Advanced e Plus, quindi un Flow può chiamare un servizio tuo. [Sidekick](https://help.shopify.com/en/manual/shopify-admin/productivity-tools/sidekick) è incluso nel piano (Shopify scrive che funzioni e limiti d’uso variano per piano), può costruire workflow Flow al posto tuo e ti mostra le modifiche da approvare prima di applicarle. Questa strada va bene per il lavoro interno e per le regole fisse. Di più in [Shopify Flow e AI: workflow pronti](/it/blog/shopify-flow-ai).",
    },
    { type: "h3", text: "Un’app dallo Shopify App Store" },
    {
      type: "paragraph",
      text: "Per assistenza ai clienti o raccomandazioni, un’app è la partenza più rapida. Leggi a quali dati dello store accede, chiedi cosa succede quando non sa rispondere e provala sul tuo insieme di valutazione prima di pagare un anno. Il prezzo lo decide lo sviluppatore, sulla pagina dell’app.",
    },
    { type: "h3", text: "Un agente su misura con Claude o un altro modello" },
    {
      type: "paragraph",
      text: "Tu, o uno sviluppatore, scrivi istruzioni, strumenti e controlli e chiami un modello come Claude, GPT o Gemini tramite la sua API. Vale la pena quando il tuo processo è particolare: policy fuori dal comune, un gestionale non standard, casi con più passaggi. Noi lavoriamo ogni giorno con agenti AI costruiti su Claude Code, e questo orienta come li progettiamo: passi piccoli, limiti scritti, test prima che qualcosa tocchi un cliente.",
    },
    { type: "h3", text: "Il Custom AI System" },
    {
      type: "paragraph",
      text: "Il Custom AI System è lo store stesso, scritto da zero per il tuo negozio e pronto per gli agenti AI, con un livello GEO automatico e dati mappati nel dettaglio. Non sostituisce le tre strade qui sopra: fa sì che ognuna parta da dati già puliti. Arriva con lo Shopify Launch Sprint.",
    },
    { type: "h2", text: "Quanto costa un agente AI per uno store Shopify?" },
    {
      type: "paragraph",
      text: "**Un agente AI per uno store Shopify costa la somma di cinque voci: il piano Shopify, il consumo del modello, il setup, le app e il tempo per mantenerlo e controllarlo. Solo le prime due hanno prezzi pubblici.** Usa questo elenco come controllo per qualsiasi preventivo ricevi:",
    },
    {
      type: "list",
      items: [
        "**Piano Shopify.** Basic 19 €, Grow 56 € e Advanced 289 € al mese con fatturazione annuale, Plus da 2.100 € al mese ([prezzi Shopify](https://www.shopify.com/it/prezzi), come mostrati il 29 ottobre 2026; variano per paese). Sidekick è incluso nel piano e Flow è un’app gratuita.",
        "**Consumo del modello.** Si paga per milione di token, input e output separati. Prezzi qui sotto.",
        "**Setup.** Ore di sviluppo per istruzioni, strumenti, test e collegamento allo store. Non esiste un prezzo ufficiale: chiedi un preventivo che elenchi le ore per ogni pezzo.",
        "**App.** Ogni app ha il suo piano sulla propria pagina dell’App Store.",
        "**Manutenzione e revisione.** La lettura settimanale degli errori e l’aggiornamento delle istruzioni quando cambiano policy o modelli.",
      ],
    },
    { type: "h3", text: "Quanto costa il modello?" },
    {
      type: "paragraph",
      text: "Prezzi ufficiali, controllati il 29 ottobre 2026, per milione di token (input / output). Sulla [pagina prezzi di Anthropic](https://platform.claude.com/docs/en/about-claude/pricing): Claude Haiku 5.5 $0,10 / $0,50 (prompt fino a 100.000 token), Claude Sonnet 5.5 $2 / $10, Claude Fable 5.1 $10 / $50. Sulla [pagina prezzi di OpenAI](https://developers.openai.com/api/docs/pricing): gpt-6-luna $0,10 / $0,50, gpt-6-astra $10 / $50. Tra un modello piccolo e uno di punta dello stesso produttore il prezzo in ingresso cambia di 100 volte per entrambi, quindi “sempre il modello più potente” è una scelta di spesa, non una garanzia. I prezzi cambiano spesso: controlla le pagine prima di fare il budget.",
    },
    {
      type: "paragraph",
      text: "Due leve abbassano il conto senza toccare le risposte. La cache del prompt: istruzioni e descrizioni degli strumenti si ripetono a ogni chiamata e leggerle dalla cache costa una frazione del prezzo base in ingresso da Anthropic (il 10% su Claude Haiku 5.5, il 5% su Claude Sonnet 5.5, il 2,5% su Claude Fable 5.1). I lotti: il lavoro che nessuno aspetta, come le prove notturne, si paga il 50% del prezzo standard, sia da Anthropic sia da OpenAI.",
    },
    { type: "h3", text: "Un esempio da rifare con i tuoi numeri" },
    {
      type: "paragraph",
      text: "È un’illustrazione, non una misura. Supponi che una conversazione di assistenza richieda 4 chiamate al modello, ciascuna con 3.000 token in ingresso (istruzioni, descrizioni degli strumenti, storico) e 400 in uscita: 12.000 token in ingresso e 1.600 in uscita in totale. Su Claude Haiku 5.5 sono circa $0,002 a conversazione, su Claude Sonnet 5.5 circa $0,04, su Claude Fable 5.1 circa $0,20. Per 1.000 conversazioni al mese: circa $2, $40 e $200. Cambia chiamate e token in base alle tue richieste.",
    },
    {
      type: "paragraph",
      text: "Conta lo schema: in questo esempio il modello è la voce piccola. Le voci grandi sono il setup e le ore di chi controlla l’agente, quindi fai il budget del tempo delle persone prima di quello dei token. Se vuoi le tue cifre, con lo strumento e l’ordine dei lavori, l’AI Accelerator si chiude con un documento delle priorità e una roadmap a 90 giorni che include i costi degli strumenti; il suo prezzo è fisso e pubblico sulla sua pagina.",
    },
    { type: "h2", text: "Da dove cominciare questa settimana?" },
    {
      type: "paragraph",
      text: "**Comincia dai numeri e dalla strada più piccola, non da uno strumento.** In quest’ordine:",
    },
    {
      type: "list",
      items: [
        "Conta le richieste di assistenza per due settimane e dividile: stato ordine, resi, taglie, domande sul prodotto, eccezioni.",
        "Segna le ore spese e il costo dell’errore peggiore in ogni gruppo.",
        "Verifica quali gruppi sono già coperti da uno Shopify Flow o da un modello di risposta.",
        "Sistema i dati che un agente leggerebbe: attributi, scorte, pagine resi e spedizioni.",
        "Scrivi un primo insieme di dieci richieste vere con la risposta giusta: la base della tua valutazione.",
        "Scrivi cosa vuol dire “abbastanza”: percentuale di casi superati, tempo di attesa, spesa mensile. Poi scegli la strada.",
      ],
    },
    { type: "h2", text: "Domande frequenti" },
    { type: "h3", text: "Quanto costa un agente AI?" },
    {
      type: "paragraph",
      text: "È la somma di piano Shopify, consumo del modello, setup, app e revisione continua. Il modello si paga per milione di token a prezzi pubblici: nel nostro esempio circa $2, $40 o $200 per 1.000 conversazioni, a seconda del modello. Setup e manutenzione sono le voci più grandi e dipendono dal preventivo.",
    },
    {
      type: "h3",
      text: "Come creare un agente AI per il mio store senza programmare?",
    },
    {
      type: "paragraph",
      text: "Parti da Shopify Flow e Sidekick, che non richiedono codice, o da un’app dell’App Store. Un agente su misura che chiama un modello e i dati del tuo store richiede uno sviluppatore. Qualunque strada scegli, istruzioni e richieste di prova scrivile tu, perché definiscono cosa vuol dire “giusto”.",
    },
    { type: "h3", text: "Agenti AI: cosa sono, in una riga?" },
    {
      type: "paragraph",
      text: "Un agente AI è un modello che sceglie il passo successivo e usa degli strumenti, come leggere un ordine, finché il compito è finito. Un workflow segue un percorso fisso e un chatbot si limita a rispondere. Gli agenti servono nei compiti con eccezioni e più passaggi.",
    },
    { type: "h3", text: "Un agente AI è gratis?" },
    {
      type: "paragraph",
      text: "Una parte dello stack sì: Sidekick è incluso nel piano Shopify e Flow è un’app gratuita. Un agente su misura no, perché il modello si paga a consumo e qualcuno deve configurarlo e controllarlo. Spesso il modello è il costo più piccolo.",
    },
    {
      type: "h3",
      text: "Posso comprare un agente AI già pronto per il mio store?",
    },
    {
      type: "paragraph",
      text: "Sì, come app dello Shopify App Store o come servizio di uno sviluppatore. Provalo sulle tue richieste vere prima di impegnarti e controlla quali dati dello store può leggere e quali azioni può eseguire.",
    },
    { type: "h3", text: "Un agente AI vale la pena per un piccolo eCommerce?" },
    {
      type: "paragraph",
      text: "Dipende dai numeri, non dalle dimensioni. Uno store con poche richieste raramente guadagna da un agente, mentre uno in cui l’assistenza riempie la giornata di una persona di solito sì, soprattutto con workflow e qualche passo da agente. Fai le due domande di questa guida prima di spendere qualcosa.",
    },
    {
      type: "paragraph",
      text: "Lo Sprint ha un prezzo pubblico per fatturato: 5.800 € sotto i 2 milioni, 8.800 € da 2 a 20 milioni, 12.800 € oltre i 20 milioni, IVA esclusa, in 4 rate.",
    },
    {
      type: "paragraph",
      text: "Lo [Shopify Launch Sprint](/it/sprint-migrazione-shopify) porta il tuo store su Shopify in 14 giorni con il nostro Custom AI System: calendario fisso, prezzo pubblico e 4 garanzie scritte.",
    },
  ],
  faqEn: [
    {
      question: "How much does an AI agent cost?",
      answer:
        "It is the sum of your Shopify plan, model usage, setup, apps and ongoing review. Model usage is billed per million tokens at public prices: in our illustrative example about $2, $40 or $200 for 1,000 conversations depending on the model. Setup and maintenance are the larger lines and depend on the quote.",
    },
    {
      question: "How do I build an AI agent for my store without coding?",
      answer:
        "Start with Shopify Flow and Sidekick, which need no code, or with an app from the Shopify App Store. A custom agent that calls a model and your store data needs a developer. Whatever you pick, write the instructions and a set of test requests yourself, because they define what “right” means.",
    },
    {
      question: "What are AI agents, in one line?",
      answer:
        "An AI agent is a model that chooses its next step and uses tools, such as reading an order, until the task is done. A workflow follows a fixed path, and a chatbot only answers. Agents suit tasks with exceptions and several steps.",
    },
    {
      question: "Is an AI agent free?",
      answer:
        "Parts of the stack are: Sidekick is included in your Shopify plan and Flow is a free app. A custom agent is not, because the model is billed per use and someone has to set it up and check it. The model is often the smallest cost.",
    },
    {
      question: "Can I buy a ready-made AI agent for my store?",
      answer:
        "Yes, as an app from the Shopify App Store or as a service from a developer. Test it on your own real requests before committing, and check which store data it can read and which actions it can take.",
    },
    {
      question: "Are AI agents worth it for a small store?",
      answer:
        "It depends on the numbers, not on the size. A store with few requests rarely gains from an agent, while one where support fills a person’s day usually does, mostly through workflows and a few agent steps. Run the two questions in this guide before you spend anything.",
    },
  ],
  faqIt: [
    {
      question: "Quanto costa un agente AI?",
      answer:
        "È la somma di piano Shopify, consumo del modello, setup, app e revisione continua. Il modello si paga per milione di token a prezzi pubblici: nel nostro esempio illustrativo circa $2, $40 o $200 per 1.000 conversazioni, a seconda del modello. Setup e manutenzione sono le voci più grandi e dipendono dal preventivo.",
    },
    {
      question: "Come creare un agente AI per il mio store senza programmare?",
      answer:
        "Parti da Shopify Flow e Sidekick, che non richiedono codice, o da un’app dell’App Store. Un agente su misura che chiama un modello e i dati del tuo store richiede uno sviluppatore. Qualunque strada scegli, istruzioni e richieste di prova scrivile tu, perché definiscono cosa vuol dire “giusto”.",
    },
    {
      question: "Agenti AI: cosa sono, in una riga?",
      answer:
        "Un agente AI è un modello che sceglie il passo successivo e usa degli strumenti, come leggere un ordine, finché il compito è finito. Un workflow segue un percorso fisso e un chatbot si limita a rispondere. Gli agenti servono nei compiti con eccezioni e più passaggi.",
    },
    {
      question: "Un agente AI è gratis?",
      answer:
        "Una parte dello stack sì: Sidekick è incluso nel piano Shopify e Flow è un’app gratuita. Un agente su misura no, perché il modello si paga a consumo e qualcuno deve configurarlo e controllarlo. Spesso il modello è il costo più piccolo.",
    },
    {
      question: "Posso comprare un agente AI già pronto per il mio store?",
      answer:
        "Sì, come app dello Shopify App Store o come servizio di uno sviluppatore. Provalo sulle tue richieste vere prima di impegnarti e controlla quali dati dello store può leggere e quali azioni può eseguire.",
    },
    {
      question: "Un agente AI vale la pena per un piccolo eCommerce?",
      answer:
        "Dipende dai numeri, non dalle dimensioni. Uno store con poche richieste raramente guadagna da un agente, mentre uno in cui l’assistenza riempie la giornata di una persona di solito sì, soprattutto con workflow e qualche passo da agente. Fai le due domande di questa guida prima di spendere qualcosa.",
    },
  ],
};

export default article;
