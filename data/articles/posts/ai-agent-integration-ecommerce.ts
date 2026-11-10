import type { Article } from '../index'

const article: Article = {
  slug: 'ai-agent-integration-ecommerce',
  slugIt: 'integrazione-agenti-ai-ecommerce',
  title: 'AI Agent Integration for Ecommerce: What to Connect, What to Approve, What to Test',
  titleIt: 'Integrazione di agenti AI in un eCommerce: cosa collegare, cosa approvare, cosa testare',
  seoTitle: 'AI Agent Integration for an Ecommerce Store',
  seoTitleIt: 'Integrazione di agenti AI in un eCommerce',
  seoDescription:
    'AI agent integration for an ecommerce store: what the agent must see, read-only access, the first task, human approval and how to test it.',
  seoDescriptionIt:
    'Integrazione di agenti AI in un eCommerce: cosa deve vedere l’agente, accessi in sola lettura, primo compito, approvazione umana e test.',
  excerpt:
    'AI agent integration for an ecommerce store comes down to four decisions: what the agent sees, which access it gets (read-only first), who approves irreversible actions and how you test it on real cases.',
  excerptIt:
    'L’integrazione di agenti AI in un eCommerce si riduce a quattro decisioni: cosa vede l’agente, quale accesso ottiene (prima in sola lettura), chi approva le azioni irreversibili e come lo testi su casi veri.',
  ledeEn:
    'AI agent integration is not a widget you add to a page. It is four decisions about data, access, approval and tests. Here is what to ask for before you buy or build.',
  ledeIt:
    'Integrare un agente AI non vuol dire aggiungere un widget a una pagina. Sono quattro decisioni su dati, accessi, approvazione e test. Ecco cosa chiedere prima di comprare o costruire.',
  image: '/images/blog/ai-agent-integration-ecommerce-cover.png',
  imageAlt: 'Copertina astratta con puntini beige che si dissolvono in modo radiale su sfondo sabbia sfumato, senza testo',
  imageAltEn: 'Abstract cover with beige dots fading out radially on a soft sand gradient background, no text',
  articleType: 'BlogPosting',
  date: '2026-11-10',
  datePublishedIso: '2026-11-10T09:00:00+00:00',
  dateModifiedIso: '2026-11-10T09:00:00+00:00',
  wordCount: 2314,
  readingTimeMinutes: 10,
  articleSection: 'AI agents',
  keywordsEn:
    'ai agent integration, ai agents for ecommerce, ecommerce ai agents, ai agent integration ecommerce, integrate an ai agent in an online store, ai agent read-only access, ai agent human approval, evaluate an ai agent',
  keywordsIt:
    'integrazione agenti ai, agenti ai per ecommerce, agenti ai ecommerce, integrare un agente ai nello store, agente ai accesso in sola lettura, approvazione umana agente ai, valutare un agente ai',
  faqEn: [
    {
      question: 'What is AI agent integration?',
      answer:
        'AI agent integration is connecting an agent to your store data and tools, with limited access, a person who approves irreversible actions and a set of real cases that proves it works. It is more than a chat widget: the agent works on your data, not only on text it was given.',
    },
    {
      question: 'What access does an AI agent need to my ecommerce store?',
      answer:
        'Start with read-only access to the sources of its first job, through a separate account with limited permissions. Add write permissions one at a time, each with its own approval rule, after the agent passes your test cases.',
    },
    {
      question: 'What should the first AI agent do in an ecommerce store?',
      answer:
        'A read-and-report job that repeats every week and can be checked against data you trust: a weekly sales and ads readout, a stock watch, reply drafts for customer support or an SEO check. Let it act only after it has earned that on test cases.',
    },
    {
      question: 'Which actions need human approval?',
      answer:
        'Anything that moves money, makes a promise to a customer or cannot be undone: refunds, price and discount changes, bulk catalog edits, messages to customers or to the whole mailing list, and deletions. OWASP and the MCP specification both call for a person in the loop on these steps.',
    },
    {
      question: 'How do I know an AI agent is working?',
      answer:
        'Run a fixed set of real cases before launch and after every change. Anthropic calls 20-50 simple tasks drawn from real failures a great start. Then compare task time, corrections by the approver and handoffs with the weeks before the agent.',
    },
    {
      question: 'Are ecommerce AI agents the same as chatbots?',
      answer:
        'No. A chatbot answers from the text it was given. An agent reads your store data and uses tools to act toward a goal, which is why it needs access rules, an approver and tests.',
    },
  ],
  faqIt: [
    {
      question: 'Cos’è l’integrazione di agenti AI?',
      answer:
        'L’integrazione di un agente AI è il collegamento dell’agente ai dati e agli strumenti del tuo store, con accessi limitati, una persona che approva le azioni irreversibili e un insieme di casi veri che dimostra che funziona. È più di un widget di chat: l’agente lavora sui tuoi dati, non solo sul testo che gli hanno dato.',
    },
    {
      question: 'Che accessi servono a un agente AI sul mio eCommerce?',
      answer:
        'Parti da un accesso in sola lettura alle fonti del suo primo compito, con un account separato e permessi limitati. Aggiungi i permessi di scrittura uno alla volta, ciascuno con la sua regola di approvazione, dopo che l’agente ha superato i tuoi casi di prova.',
    },
    {
      question: 'Cosa deve fare il primo agente AI in un eCommerce?',
      answer:
        'Un lavoro di lettura e report che si ripete ogni settimana e si può controllare con dati di cui ti fidi: un resoconto settimanale di vendite e pubblicità, un controllo del magazzino, bozze di risposta per l’assistenza clienti o un controllo SEO. Lo lasci agire solo dopo che se l’è guadagnato sui casi di prova.',
    },
    {
      question: 'Quali azioni richiedono l’approvazione di una persona?',
      answer:
        'Tutto ciò che muove denaro, fa una promessa a un cliente o non si può annullare: rimborsi, cambi di prezzo e di sconti, modifiche di massa al catalogo, messaggi ai clienti o a tutta la lista email e cancellazioni. OWASP e la specifica MCP chiedono entrambi una persona nel ciclo su questi passi.',
    },
    {
      question: 'Come capisco se un agente AI funziona?',
      answer:
        'Fai girare un insieme fisso di casi veri prima del lancio e dopo ogni modifica. Per Anthropic 20-50 compiti semplici presi da errori reali sono un ottimo inizio. Poi confronta tempo del compito, correzioni di chi approva e passaggi a una persona con le settimane prima dell’agente.',
    },
    {
      question: 'Gli agenti AI per l’eCommerce sono la stessa cosa dei chatbot?',
      answer:
        'No. Un chatbot risponde con il testo che gli hanno dato. Un agente legge i dati del tuo store e usa strumenti per raggiungere un obiettivo, ed è per questo che servono regole di accesso, chi approva e test.',
    },
  ],
  content: [
    {
      type: 'paragraph',
      text: '**AI agent integration means connecting an agent to the data it has to read, the tools it is allowed to use and a person who approves what cannot be undone, then proving on real cases that it does the job.** Four decisions cover it, in this order: what the agent sees, what it can touch, who signs off and how you know it works. The model, the vendor and the name on the box come after.',
    },
    {
      type: 'paragraph',
      text: 'We are noprob agency, and we work every day with AI agents built on Claude Code. This guide is the buyer’s version: what to connect, what to approve and what to test. If you would rather have it done for you, our [AI agent integration service](/ai-agents-for-ecommerce) integrates one agent in your store or sets the whole store up for agents. The difference between a chatbot, a workflow and an agent is in [AI agents for Shopify](/blog/ai-agents-for-shopify), so we do not repeat it here.',
    },
    { type: 'h2', text: 'What does AI agent integration include, beyond the model?' },
    {
      type: 'paragraph',
      text: '**It includes five things around the model: a job, eyes, hands, a signature and a scorecard.** A chatbot widget has none of them. It sits on the page and answers from text it was given. An integrated agent sits behind the store and works on its data.',
    },
    {
      type: 'list',
      items: [
        '**A job.** One task in one sentence, with a person who owns the result.',
        '**Eyes.** The data the agent reads to do that task, and nothing else.',
        '**Hands.** The actions it may take, listed one by one, each with its own permission.',
        '**A signature.** The person who approves what moves money, makes a promise or cannot be undone.',
        '**A scorecard.** Real cases the agent has to pass before launch and after every change.',
      ],
    },
    {
      type: 'paragraph',
      text: 'The model is not on the list on purpose. Anthropic’s guide [Building effective agents](https://www.anthropic.com/engineering/building-effective-agents) says to look for the simplest solution that works and to add complexity only when it improves the outcome. Most of integration is engineering around the model: access, rules, logs and tests.',
    },
    { type: 'h2', text: 'What should an ecommerce AI agent be able to see?' },
    {
      type: 'paragraph',
      text: '**Only what its first job needs, usually from five sources: sales, ads, stock, customer support and SEO.** Ecommerce AI agents earn their keep when they read these together, because a drop in sales is rarely explained by one dashboard.',
    },
    {
      type: 'table',
      caption: 'What an agent reads, source by source',
      headers: ['Source', 'What it reads', 'A first question it can answer'],
      rows: [
        ['Sales', 'Orders, refunds, products and analytics', 'What moved this week, and in which products?'],
        ['Ads', 'Spend and results from each ad platform, with campaign names', 'Where is spend going up while orders are not?'],
        ['Stock', 'Inventory by product and variant', 'Which products are close to selling out?'],
        ['Customer support', 'Messages, order status and your written policies', 'Which questions repeat, and what does the policy say?'],
        ['SEO', 'Search Console data, your page list and a crawl', 'Which pages lost visibility, and what changed on them?'],
      ],
    },
    {
      type: 'paragraph',
      text: 'On Shopify, the [Shopify connector for Claude](https://help.shopify.com/en/manual/ai-powered-tools/connecting-ai-tools/shopify-connector-for-claude) shows how this split looks in practice: it can write to products, collections, inventory and percentage discount codes, and it is read-only on orders, customers and analytics. The sales sources start on the safe side. The write list is where the decisions begin.',
    },
    {
      type: 'paragraph',
      text: 'Two rules for the data. First, fix it before the agent reads it: an agent does not repair bad numbers, it reads them faster, so if orders and analytics disagree, find out why first. Second, give it the fewest customer details that do the job. Shopify’s rules on [protected customer data](https://shopify.dev/docs/apps/launch/protected-customer-data) (names, addresses, emails, phone numbers) say to use only the minimum necessary, and the same logic holds for an agent: it does not need names and addresses to count returns.',
    },
    { type: 'h2', text: 'Which access should you give an AI agent, and why read-only first?' },
    {
      type: 'paragraph',
      text: '**Give it read-only access to the sources of its first job, through its own account, and add write permissions one at a time.** A wrong read costs a wrong answer. A wrong write costs a wrong store.',
    },
    {
      type: 'paragraph',
      text: 'Shopify keeps the two apart: its [access scopes](https://shopify.dev/docs/api/usage/access-scopes) are separate for reading and writing, for example read_orders, write_orders and read_customers. With the connector the first choice matters even more, because [Shopify’s page on authorizing access](https://help.shopify.com/en/manual/ai-powered-tools/connecting-ai-tools/authorizing-access) says access is granted as read-only or as write, cannot be reduced afterward (you uninstall and authorize again) and follows the permissions of the staff member who authorizes it.',
    },
    { type: 'paragraph', text: 'A sensible setup, step by step:' },
    {
      type: 'list',
      items: [
        '**A separate account for the agent**, with a [staff role](https://help.shopify.com/en/manual/your-account/staff-accounts/staff-permissions) limited to what the first job needs. Never the owner login.',
        '**Read permissions only**, on the sources of the first job. Sales and stock first, customer details last.',
        '**A log of every call**, so you can read what the agent did and why.',
        '**One write permission at a time**, each added only after the scorecard cases pass and each with its own approval rule.',
      ],
    },
    {
      type: 'paragraph',
      text: 'Treat whatever the agent reads from outside as untrusted. Reviews, emails and support messages are written by strangers and can carry instructions. OWASP ranks [prompt injection](https://genai.owasp.org/llmrisk/llm01-prompt-injection/) first among the risks for LLM applications, and Anthropic’s advice is to [filter what tools return and limit access to sensitive data and actions](https://platform.claude.com/docs/en/test-and-evaluate/strengthen-guardrails/mitigate-jailbreaks). In practice: the agent that reads strangers’ text does not hold write access. The same goes for the tools you plug in: Claude Code’s [MCP documentation](https://code.claude.com/docs/en/mcp) warns that servers that fetch external content can expose the agent to prompt injection. More in [AI agent security for Shopify](/blog/ai-agent-security-shopify).',
    },
    { type: 'h2', text: 'How do you choose the first task for an AI agent?' },
    {
      type: 'paragraph',
      text: '**Choose a task that repeats every week, has several steps, can be checked against data you already trust and does no lasting damage if it goes wrong.** That points at jobs that read and report. One for each source works well:',
    },
    {
      type: 'list',
      items: [
        '**Sales and ads:** a Monday readout of what moved and which spend did not bring orders.',
        '**Stock:** a daily list of products close to selling out, with the open orders against them.',
        '**Customer support:** drafts of replies, with the order and the policy attached, that a person sends.',
        '**SEO:** a weekly look at pages that lost visibility, with what changed on each.',
      ],
    },
    {
      type: 'paragraph',
      text: 'Our rule: the first agent reads and reports, the second drafts, the third acts, and each step is earned by the one before. And ask first whether you need an agent at all. If you can draw the path in advance, a workflow does it for less: [Shopify Flow](https://help.shopify.com/en/manual/shopify-flow) is free on Basic, Grow, Advanced and Plus. The two questions to ask first, and what drives the cost, are in [building an AI agent for your Shopify store](/blog/build-ai-agent-shopify).',
    },
    { type: 'h2', text: 'Where does human approval go?' },
    {
      type: 'paragraph',
      text: '**At the action, not at the answer: the agent may read and draft freely, and anything that moves money, makes a promise or cannot be undone stops at a person who sees the evidence.** Two sources say the same. The [OWASP AI Agent Security Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/AI_Agent_Security_Cheat_Sheet.html) asks for approval on high-impact and irreversible actions, and the [MCP specification](https://modelcontextprotocol.io/specification/2026-07-28/server/tools) says there should always be a person who can deny a tool call.',
    },
    {
      type: 'paragraph',
      text: 'Shopify’s own design shows the pattern. Its [returnRequest](https://shopify.dev/docs/api/admin-graphql/latest/mutations/returnRequest) mutation creates a return that waits for the merchant’s approval (status REQUESTED): the agent files, a person approves. And the connector edits a large batch one item at a time and can stop halfway, so a big batch needs a preview and a record of what changed before anyone says yes.',
    },
    { type: 'paragraph', text: 'Put an approval step on:' },
    {
      type: 'list',
      items: [
        '**Refunds and store credit.** The agent prepares the case with order, reason and policy attached. A person decides.',
        '**Price changes and discount codes.** The agent proposes the change and shows what it touches.',
        '**Bulk edits** to the catalog or the stock.',
        '**Messages** to customers and to the whole mailing list.',
        '**Deletions** of anything.',
      ],
    },
    {
      type: 'paragraph',
      text: 'Design the approval to be fast. The agent sends what it wants to do, why, the evidence and what will change, and the approver has one button each way. Name the approver in advance. Keep every refusal: they are the best material for your next test cases.',
    },
    { type: 'h2', text: 'How do you measure whether an integrated AI agent works?' },
    {
      type: 'paragraph',
      text: '**Write test cases from real situations, run them before launch and after every change, and compare the results with how the task went before.** Anthropic’s guide to [evals for AI agents](https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents) sets the bar low on purpose: “20-50 simple tasks drawn from real failures is a great start.” [OpenAI’s evaluation guidance](https://developers.openai.com/api/docs/guides/evaluation-best-practices) adds what to cover: typical, edge and adversarial cases, not a judgment by feel.',
    },
    { type: 'paragraph', text: 'Write each case with four fields:' },
    {
      type: 'list',
      items: [
        '**The situation,** taken from a real week, order or message.',
        '**What the agent sees,** exactly the sources it will have in production.',
        '**What must be true** in the output, not the exact words.',
        '**What counts as an error,** and whether it blocks the launch.',
      ],
    },
    {
      type: 'paragraph',
      text: 'A reporting agent is the easiest to test: take a past week where you know what happened, ask the agent and compare. Then keep three measures, each against the weeks before the agent: how long the task took, how often the approver corrected the output and how often the agent handed over when it should have. Judge it on the cases that hurt, not on the average. The full method is in [how to evaluate an AI assistant for your store](/blog/evaluate-ai-assistant-ecommerce).',
    },
    {
      type: 'h2',
      text: 'What changes between integrating an agent and preparing the whole store for agents?',
    },
    {
      type: 'paragraph',
      text: '**Integrating an agent gives one job to one agent that works for you inside the store. Preparing the whole store makes your data, access and rules ready for any agent, yours or your customer’s.** The first is a project. The second is a base.',
    },
    {
      type: 'table',
      caption: 'Two scopes, side by side',
      headers: ['Question', 'Integrate one agent', 'Prepare the whole store'],
      rows: [
        ['Whose agent is it?', 'Yours, working for the store', 'Yours, and the ones your customers send'],
        [
          'What you set up',
          'One job, its data, its permissions, its approvals and its test cases',
          'Clean product data, roles and permissions, logs, one set of approval rules and a catalog agents can read',
        ],
        ['Where it starts', 'The task that repeats every week', 'The data every agent will read'],
      ],
    },
    {
      type: 'paragraph',
      text: 'The second direction is no longer theoretical. Shopify’s [Agentic Storefronts](https://www.shopify.com/news/winter-26-edition-agentic-storefronts) publish a catalog to ChatGPT, Perplexity and Microsoft Copilot from one configuration, and the merchant stays the merchant of record. [Digital Commerce 360](https://www.digitalcommerce360.com/2026/08/06/how-shopify-is-approaching-agentic-ai-2026/) reports that Shopify’s president said on the earnings call that traffic and orders from AI to Shopify stores tripled year over year in the second quarter of 2026.',
    },
    {
      type: 'paragraph',
      text: 'Both directions need the same base: product data that is complete, permissions that are narrow and rules on who approves what. That is why the base comes first. Our Custom AI System is code written from scratch for one store and designed for the AI agents that work on it, which also makes the store ready for the agents that visit it. The outside agents are in [agentic commerce for Shopify](/blog/agentic-commerce-shopify) and [Shopify MCP explained](/blog/shopify-mcp); being cited in AI answers is in [GEO vs SEO](/blog/geo-vs-seo). If a platform change is also on the table, the order matters: our [Shopify migration service](/shopify-migration-sprint) rebuilds the store first, and the agents come after, on a clean base.',
    },
    { type: 'h2', text: 'How does noprob agency integrate AI agents for ecommerce?' },
    {
      type: 'paragraph',
      text: '**We start from one job, read-only access and an approval written down before the first run, and we test on your real cases.** noprob agency works every day with AI agents built on Claude Code, and the [AI agents for eCommerce](/ai-agents-for-ecommerce) page describes the two paths: one agent integrated in your store, or your whole store set up so agents can watch sales, ads, stock, customer support and SEO. It is custom work on your data, your access and your rules.',
    },
    {
      type: 'paragraph',
      text: 'If you first want to find where AI pays in your store, the [AI Accelerator](/ai-accelerator) is 30 days one-to-one. If you already know the job, start from the [AI agent integration service](/ai-agents-for-ecommerce).',
    },
    { type: 'h2', text: 'Frequently asked questions' },
    { type: 'h3', text: 'What is AI agent integration?' },
    {
      type: 'paragraph',
      text: 'AI agent integration is connecting an agent to your store data and tools, with limited access, a person who approves irreversible actions and a set of real cases that proves it works. It is more than a chat widget: the agent works on your data, not only on text it was given.',
    },
    { type: 'h3', text: 'What access does an AI agent need to my ecommerce store?' },
    {
      type: 'paragraph',
      text: 'Start with read-only access to the sources of its first job, through a separate account with limited permissions. Add write permissions one at a time, each with its own approval rule, after the agent passes your test cases.',
    },
    { type: 'h3', text: 'What should the first AI agent do in an ecommerce store?' },
    {
      type: 'paragraph',
      text: 'A read-and-report job that repeats every week and can be checked against data you trust: a weekly sales and ads readout, a stock watch, reply drafts for customer support or an SEO check. Let it act only after it has earned that on test cases.',
    },
    { type: 'h3', text: 'Which actions need human approval?' },
    {
      type: 'paragraph',
      text: 'Anything that moves money, makes a promise to a customer or cannot be undone: refunds, price and discount changes, bulk catalog edits, messages to customers or to the whole mailing list, and deletions. OWASP and the MCP specification both call for a person in the loop on these steps.',
    },
    { type: 'h3', text: 'How do I know an AI agent is working?' },
    {
      type: 'paragraph',
      text: 'Run a fixed set of real cases before launch and after every change. Anthropic calls 20-50 simple tasks drawn from real failures a great start. Then compare task time, corrections by the approver and handoffs with the weeks before the agent.',
    },
    { type: 'h3', text: 'Are ecommerce AI agents the same as chatbots?' },
    {
      type: 'paragraph',
      text: 'No. A chatbot answers from the text it was given. An agent reads your store data and uses tools to act toward a goal, which is why it needs access rules, an approver and tests.',
    },
    {
      type: 'paragraph',
      text: 'The [Shopify Launch Sprint](/shopify-migration-sprint) moves your store to Shopify in 14 days with our Custom AI System: a fixed calendar, a public price and 4 written guarantees.',
    },
  ],
  contentIt: [
    {
      type: 'paragraph',
      text: '**L’integrazione di agenti AI in un eCommerce significa collegare l’agente ai dati che deve leggere, agli strumenti che può usare e a una persona che approva ciò che non si può annullare, poi dimostrare su casi veri che fa il suo lavoro.** Quattro decisioni coprono tutto, in quest’ordine: cosa vede l’agente, cosa può toccare, chi firma e come sai che funziona. Il modello, il fornitore e il nome sulla scatola vengono dopo.',
    },
    {
      type: 'paragraph',
      text: 'Siamo noprob agency e lavoriamo ogni giorno con agenti AI costruiti su Claude Code. Questa guida è la versione di chi deve comprare: cosa collegare, cosa approvare e cosa testare. Se preferisci che lo facciamo noi, il nostro [servizio di integrazione di agenti AI](/it/agenti-ai-per-ecommerce) integra un agente nel tuo store oppure prepara l’intero store per gli agenti. La differenza tra chatbot, workflow e agente è in [agenti AI per Shopify](/it/blog/agenti-ai-shopify), quindi qui non la ripetiamo.',
    },
    { type: 'h2', text: 'Cosa include l’integrazione di agenti AI, oltre al modello?' },
    {
      type: 'paragraph',
      text: '**Include cinque cose intorno al modello: un compito, occhi, mani, una firma e un banco di prova.** Un chatbot da pagina non ne ha nessuna. Sta sul sito e risponde con il testo che gli hanno dato. Un agente integrato sta dietro lo store e lavora sui suoi dati.',
    },
    {
      type: 'list',
      items: [
        '**Un compito.** Un lavoro descritto in una frase, con una persona che risponde del risultato.',
        '**Occhi.** I dati che l’agente legge per svolgerlo, e nient’altro.',
        '**Mani.** Le azioni che può compiere, elencate una per una, ciascuna con il suo permesso.',
        '**Una firma.** La persona che approva ciò che muove denaro, fa una promessa o non si può annullare.',
        '**Un banco di prova.** Casi veri che l’agente deve superare prima del lancio e dopo ogni modifica.',
      ],
    },
    {
      type: 'paragraph',
      text: 'Il modello non è nell’elenco di proposito. La guida di Anthropic [Building effective agents](https://www.anthropic.com/engineering/building-effective-agents) dice di cercare la soluzione più semplice che funziona e di aggiungere complessità solo quando migliora il risultato. Gran parte dell’integrazione è ingegneria intorno al modello: accessi, regole, log e test.',
    },
    { type: 'h2', text: 'Cosa deve poter vedere un agente AI per un eCommerce?' },
    {
      type: 'paragraph',
      text: '**Solo ciò che serve al suo primo compito, di solito da cinque fonti: vendite, pubblicità, magazzino, assistenza clienti e SEO.** Gli agenti AI per un eCommerce rendono quando leggono queste fonti insieme, perché un calo delle vendite raramente lo spiega una sola dashboard.',
    },
    {
      type: 'table',
      caption: 'Cosa legge un agente, fonte per fonte',
      headers: ['Fonte', 'Cosa legge', 'Una prima domanda a cui può rispondere'],
      rows: [
        ['Vendite', 'Ordini, rimborsi, prodotti e analytics', 'Cosa si è mosso questa settimana, e su quali prodotti?'],
        ['Pubblicità', 'Spesa e risultati di ogni piattaforma pubblicitaria, con i nomi delle campagne', 'Dove la spesa sale mentre gli ordini no?'],
        ['Magazzino', 'Giacenze per prodotto e variante', 'Quali prodotti stanno per finire?'],
        ['Assistenza clienti', 'Messaggi, stato degli ordini e le tue policy scritte', 'Quali domande si ripetono, e cosa dice la policy?'],
        ['SEO', 'Dati di Search Console, l’elenco delle pagine e una scansione', 'Quali pagine hanno perso visibilità, e cosa è cambiato su di loro?'],
      ],
    },
    {
      type: 'paragraph',
      text: 'Su Shopify il [connettore Shopify per Claude](https://help.shopify.com/en/manual/ai-powered-tools/connecting-ai-tools/shopify-connector-for-claude) mostra come appare questa divisione nella pratica: può scrivere su prodotti, collezioni, inventario e codici sconto a percentuale, ed è in sola lettura su ordini, clienti e analytics. Le fonti delle vendite partono dal lato sicuro. È nell’elenco delle scritture che iniziano le decisioni.',
    },
    {
      type: 'paragraph',
      text: 'Due regole per i dati. Prima: sistemali prima che l’agente li legga. Un agente non ripara i numeri sbagliati, li legge più in fretta, quindi se ordini e analytics non coincidono, scopri prima perché. Seconda: dagli solo i dettagli sui clienti che servono al lavoro. Le regole di Shopify sui [dati cliente protetti](https://shopify.dev/docs/apps/launch/protected-customer-data) (nomi, indirizzi, email, telefoni) dicono di usare solo il minimo necessario, e la logica vale anche per un agente: per contare i resi non gli servono nomi e indirizzi.',
    },
    { type: 'h2', text: 'Che accessi dare a un agente AI, e perché prima in sola lettura?' },
    {
      type: 'paragraph',
      text: '**Dagli accesso in sola lettura alle fonti del suo primo compito, con un account suo, e aggiungi i permessi di scrittura uno alla volta.** Una lettura sbagliata costa una risposta sbagliata. Una scrittura sbagliata costa uno store sbagliato.',
    },
    {
      type: 'paragraph',
      text: 'Shopify tiene separate le due cose: i suoi [ambiti di accesso](https://shopify.dev/docs/api/usage/access-scopes) sono distinti per lettura e scrittura, per esempio read_orders, write_orders e read_customers. Con il connettore la prima scelta pesa ancora di più, perché la [pagina di Shopify sull’autorizzazione dell’accesso](https://help.shopify.com/en/manual/ai-powered-tools/connecting-ai-tools/authorizing-access) dice che l’accesso si concede in sola lettura o in scrittura, non si può ridurre dopo (si disinstalla e si autorizza di nuovo) e segue i permessi del collaboratore che autorizza.',
    },
    { type: 'paragraph', text: 'Un’impostazione sensata, passo per passo:' },
    {
      type: 'list',
      items: [
        '**Un account separato per l’agente**, con un [ruolo staff](https://help.shopify.com/en/manual/your-account/staff-accounts/staff-permissions) limitato a ciò che serve al primo compito. Mai il login del titolare.',
        '**Solo permessi di lettura**, sulle fonti del primo compito. Prima vendite e magazzino, per ultimi i dettagli dei clienti.',
        '**Un log di ogni chiamata**, così puoi leggere cosa ha fatto l’agente e perché.',
        '**Un permesso di scrittura alla volta**, aggiunto solo dopo che i casi del banco di prova passano e ciascuno con la sua regola di approvazione.',
      ],
    },
    {
      type: 'paragraph',
      text: 'Tratta come non affidabile tutto ciò che l’agente legge da fuori. Recensioni, email e messaggi all’assistenza li scrivono degli sconosciuti e possono contenere istruzioni. OWASP mette la [prompt injection](https://genai.owasp.org/llmrisk/llm01-prompt-injection/) al primo posto tra i rischi delle applicazioni LLM, e il consiglio di Anthropic è di [filtrare ciò che gli strumenti restituiscono e limitare l’accesso a dati e azioni sensibili](https://platform.claude.com/docs/en/test-and-evaluate/strengthen-guardrails/mitigate-jailbreaks). In pratica: l’agente che legge i testi di sconosciuti non ha accesso in scrittura. Vale anche per gli strumenti che colleghi: la [documentazione MCP](https://code.claude.com/docs/en/mcp) di Claude Code avverte che i server che leggono contenuti esterni possono esporre l’agente alla prompt injection. Di più in [sicurezza degli agenti AI su Shopify](/it/blog/sicurezza-agenti-ai-shopify).',
    },
    { type: 'h2', text: 'Come si sceglie il primo compito per un agente AI?' },
    {
      type: 'paragraph',
      text: '**Scegli un compito che si ripete ogni settimana, ha più passi, si può controllare con dati di cui ti fidi già e non fa danni duraturi se va male.** Questo porta ai lavori di lettura e report. Uno per ogni fonte funziona bene:',
    },
    {
      type: 'list',
      items: [
        '**Vendite e pubblicità:** un resoconto del lunedì su cosa si è mosso e quale spesa non ha portato ordini.',
        '**Magazzino:** un elenco quotidiano dei prodotti che stanno per finire, con gli ordini aperti su ciascuno.',
        '**Assistenza clienti:** bozze di risposta, con ordine e policy allegati, che una persona invia.',
        '**SEO:** uno sguardo settimanale alle pagine che hanno perso visibilità, con ciò che è cambiato su ognuna.',
      ],
    },
    {
      type: 'paragraph',
      text: 'La nostra regola: il primo agente legge e fa il report, il secondo scrive le bozze, il terzo agisce, e ogni passo se lo guadagna con quello prima. E chiediti prima se ti serve davvero un agente. Se puoi disegnare la strada in anticipo, un workflow lo fa a meno: [Shopify Flow](https://help.shopify.com/en/manual/shopify-flow) è gratuito su Basic, Grow, Advanced e Plus. Le due domande da farsi prima, e da cosa dipende il costo, sono in [creare un agente AI per il tuo store Shopify](/it/blog/creare-agente-ai-shopify).',
    },
    { type: 'h2', text: 'Dove va l’approvazione di una persona?' },
    {
      type: 'paragraph',
      text: '**Sull’azione, non sulla risposta: l’agente può leggere e scrivere bozze liberamente, e tutto ciò che muove denaro, fa una promessa o non si può annullare si ferma davanti a una persona che vede le prove.** Due fonti dicono la stessa cosa. L’[OWASP AI Agent Security Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/AI_Agent_Security_Cheat_Sheet.html) chiede l’approvazione per le azioni ad alto impatto e irreversibili, e la [specifica MCP](https://modelcontextprotocol.io/specification/2026-07-28/server/tools) dice che ci deve sempre essere una persona che può negare una chiamata a uno strumento.',
    },
    {
      type: 'paragraph',
      text: 'Il disegno di Shopify mostra lo schema. La sua mutazione [returnRequest](https://shopify.dev/docs/api/admin-graphql/latest/mutations/returnRequest) crea un reso che aspetta l’approvazione del merchant (stato REQUESTED): l’agente apre la pratica, una persona approva. E il connettore modifica un lotto grande un elemento alla volta e può fermarsi a metà, quindi un lotto grande ha bisogno di un’anteprima e di un registro di ciò che è cambiato prima che qualcuno dica sì.',
    },
    { type: 'paragraph', text: 'Metti un passo di approvazione su:' },
    {
      type: 'list',
      items: [
        '**Rimborsi e credito negozio.** L’agente prepara la pratica con ordine, motivo e policy allegati. Una persona decide.',
        '**Cambi di prezzo e codici sconto.** L’agente propone la modifica e mostra cosa tocca.',
        '**Modifiche di massa** a catalogo o magazzino.',
        '**Messaggi** ai clienti e a tutta la lista email.',
        '**Cancellazioni** di qualsiasi cosa.',
      ],
    },
    {
      type: 'paragraph',
      text: 'Progetta l’approvazione perché sia veloce. L’agente invia cosa vuole fare, perché, le prove e cosa cambierà, e chi approva ha un pulsante per ogni risposta. Scegli prima chi approva. Conserva ogni rifiuto: è il materiale migliore per i tuoi prossimi casi di prova.',
    },
    { type: 'h2', text: 'Come si misura se un agente AI integrato funziona?' },
    {
      type: 'paragraph',
      text: '**Scrivi casi di prova da situazioni vere, falli girare prima del lancio e dopo ogni modifica, e confronta i risultati con come andava il compito prima.** La guida di Anthropic alle [valutazioni degli agenti AI](https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents) mette l’asticella bassa di proposito: “20-50 simple tasks drawn from real failures is a great start”, cioè 20-50 compiti semplici presi da errori reali sono un ottimo inizio. Le [indicazioni di OpenAI sulla valutazione](https://developers.openai.com/api/docs/guides/evaluation-best-practices) aggiungono cosa coprire: casi tipici, limite e avversari, non un giudizio a sensazione.',
    },
    { type: 'paragraph', text: 'Scrivi ogni caso con quattro campi:' },
    {
      type: 'list',
      items: [
        '**La situazione,** presa da una settimana, un ordine o un messaggio veri.',
        '**Cosa vede l’agente,** esattamente le fonti che avrà in produzione.',
        '**Cosa deve essere vero** nel risultato, non le parole esatte.',
        '**Cosa conta come errore,** e se blocca il lancio.',
      ],
    },
    {
      type: 'paragraph',
      text: 'Un agente che fa report è il più facile da testare: prendi una settimana passata di cui sai cos’è successo, chiedi all’agente e confronta. Poi tieni tre misure, ciascuna contro le settimane prima dell’agente: quanto è durato il compito, quante volte chi approva ha corretto il risultato e quante volte l’agente ha passato la mano quando doveva. Giudicalo sui casi che fanno male, non sulla media. Il metodo completo è in [come valutare un assistente AI per il tuo store](/it/blog/valutare-assistente-ai-ecommerce).',
    },
    {
      type: 'h2',
      text: 'Cosa cambia tra integrare un agente e preparare l’intero store per gli agenti?',
    },
    {
      type: 'paragraph',
      text: '**Integrare un agente affida un compito a un agente che lavora per te dentro lo store. Preparare l’intero store rende dati, accessi e regole pronti per qualsiasi agente, il tuo o quello dei tuoi clienti.** Il primo è un progetto. Il secondo è una base.',
    },
    {
      type: 'table',
      caption: 'Due ambiti, a confronto',
      headers: ['Domanda', 'Integrare un agente', 'Preparare l’intero store'],
      rows: [
        ['Di chi è l’agente?', 'Tuo, e lavora per lo store', 'Tuo, e quelli che mandano i tuoi clienti'],
        [
          'Cosa prepari',
          'Un compito, i suoi dati, i suoi permessi, le sue approvazioni e i suoi casi di prova',
          'Dati prodotto puliti, ruoli e permessi, log, un solo insieme di regole di approvazione e un catalogo che gli agenti possono leggere',
        ],
        ['Da dove parte', 'Dal compito che si ripete ogni settimana', 'Dai dati che ogni agente leggerà'],
      ],
    },
    {
      type: 'paragraph',
      text: 'La seconda direzione non è più teoria. Gli [Agentic Storefronts](https://www.shopify.com/news/winter-26-edition-agentic-storefronts) di Shopify pubblicano un catalogo su ChatGPT, Perplexity e Microsoft Copilot da un’unica configurazione, e il merchant resta merchant of record. [Digital Commerce 360](https://www.digitalcommerce360.com/2026/08/06/how-shopify-is-approaching-agentic-ai-2026/) riporta che il presidente di Shopify ha detto nella presentazione dei risultati trimestrali che traffico e ordini dall’AI verso gli store Shopify sono triplicati su base annua nel secondo trimestre 2026.',
    },
    {
      type: 'paragraph',
      text: 'Entrambe le direzioni hanno bisogno della stessa base: dati prodotto completi, permessi stretti e regole su chi approva cosa. Per questo la base viene prima. Il nostro Custom AI System è codice scritto da zero per un solo store e pensato per gli agenti AI che ci lavorano, e rende lo store pronto anche per gli agenti che lo visitano. Gli agenti che arrivano da fuori sono in [agentic commerce per Shopify](/it/blog/agentic-commerce-shopify) e in [Shopify MCP spiegato](/it/blog/shopify-mcp); farsi citare nelle risposte AI è in [GEO vs SEO](/it/blog/geo-vs-seo). Se è sul tavolo anche un cambio di piattaforma, l’ordine conta: il nostro [servizio di migrazione a Shopify](/it/sprint-migrazione-shopify) ricostruisce prima lo store, e gli agenti arrivano dopo, su una base pulita.',
    },
    { type: 'h2', text: 'Come integra gli agenti AI noprob agency per l’eCommerce?' },
    {
      type: 'paragraph',
      text: '**Partiamo da un compito, da un accesso in sola lettura e da un’approvazione scritta prima della prima esecuzione, e testiamo sui tuoi casi veri.** noprob agency lavora ogni giorno con agenti AI costruiti su Claude Code, e la pagina [agenti AI per eCommerce](/it/agenti-ai-per-ecommerce) descrive le due strade: un agente integrato nel tuo store, oppure l’intero store preparato perché gli agenti possano tenere d’occhio vendite, pubblicità, magazzino, assistenza clienti e SEO. È un lavoro su misura sui tuoi dati, i tuoi accessi e le tue regole.',
    },
    {
      type: 'paragraph',
      text: 'Se prima vuoi capire dove l’AI rende nel tuo store, l’[AI Accelerator](/it/ai-accelerator) è un percorso one-to-one di 30 giorni. Se il compito lo conosci già, parti dal [servizio di integrazione di agenti AI](/it/agenti-ai-per-ecommerce).',
    },
    { type: 'h2', text: 'Domande frequenti' },
    { type: 'h3', text: 'Cos’è l’integrazione di agenti AI?' },
    {
      type: 'paragraph',
      text: 'L’integrazione di un agente AI è il collegamento dell’agente ai dati e agli strumenti del tuo store, con accessi limitati, una persona che approva le azioni irreversibili e un insieme di casi veri che dimostra che funziona. È più di un widget di chat: l’agente lavora sui tuoi dati, non solo sul testo che gli hanno dato.',
    },
    { type: 'h3', text: 'Che accessi servono a un agente AI sul mio eCommerce?' },
    {
      type: 'paragraph',
      text: 'Parti da un accesso in sola lettura alle fonti del suo primo compito, con un account separato e permessi limitati. Aggiungi i permessi di scrittura uno alla volta, ciascuno con la sua regola di approvazione, dopo che l’agente ha superato i tuoi casi di prova.',
    },
    { type: 'h3', text: 'Cosa deve fare il primo agente AI in un eCommerce?' },
    {
      type: 'paragraph',
      text: 'Un lavoro di lettura e report che si ripete ogni settimana e si può controllare con dati di cui ti fidi: un resoconto settimanale di vendite e pubblicità, un controllo del magazzino, bozze di risposta per l’assistenza clienti o un controllo SEO. Lo lasci agire solo dopo che se l’è guadagnato sui casi di prova.',
    },
    { type: 'h3', text: 'Quali azioni richiedono l’approvazione di una persona?' },
    {
      type: 'paragraph',
      text: 'Tutto ciò che muove denaro, fa una promessa a un cliente o non si può annullare: rimborsi, cambi di prezzo e di sconti, modifiche di massa al catalogo, messaggi ai clienti o a tutta la lista email e cancellazioni. OWASP e la specifica MCP chiedono entrambi una persona nel ciclo su questi passi.',
    },
    { type: 'h3', text: 'Come capisco se un agente AI funziona?' },
    {
      type: 'paragraph',
      text: 'Fai girare un insieme fisso di casi veri prima del lancio e dopo ogni modifica. Per Anthropic 20-50 compiti semplici presi da errori reali sono un ottimo inizio. Poi confronta tempo del compito, correzioni di chi approva e passaggi a una persona con le settimane prima dell’agente.',
    },
    { type: 'h3', text: 'Gli agenti AI per l’eCommerce sono la stessa cosa dei chatbot?' },
    {
      type: 'paragraph',
      text: 'No. Un chatbot risponde con il testo che gli hanno dato. Un agente legge i dati del tuo store e usa strumenti per raggiungere un obiettivo, ed è per questo che servono regole di accesso, chi approva e test.',
    },
    {
      type: 'paragraph',
      text: 'Lo [Shopify Launch Sprint](/it/sprint-migrazione-shopify) porta il tuo store su Shopify in 14 giorni con il nostro Custom AI System: calendario fisso, prezzo pubblico e 4 garanzie scritte.',
    },
  ],
}

export default article
