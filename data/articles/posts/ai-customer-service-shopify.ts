import type { Article } from '../index'

const article: Article = {
  slug: 'ai-customer-service-shopify',
  slugIt: 'assistente-ai-ordini-resi-shopify',
  title: 'Shopify AI Chatbot for Orders and Returns: How It Is Built and Where It Must Stop',
  titleIt: 'Assistente AI per ordini e resi su Shopify: come è fatto e dove deve fermarsi',
  seoTitle: 'Shopify AI Chatbot for Orders and Returns',
  seoTitleIt: 'Chatbot ecommerce AI: ordini e resi su Shopify',
  seoDescription:
    'A Shopify AI chatbot for orders and returns: the five parts, what it does alone, what a person decides, and the real options on Shopify before you build.',
  seoDescriptionIt:
    'Chatbot ecommerce con AI per ordini e resi su Shopify: i cinque pezzi, cosa fa da solo, cosa decide una persona e le opzioni reali prima di costruire.',
  excerpt:
    'A Shopify AI chatbot that is safe with customers sorts the message, looks in the right documents, reads orders without changing them, opens a return request and leaves refunds to a person. Here is the blueprint, a decision table and the real options on Shopify.',
  excerptIt:
    'Un assistente AI che puoi lasciare ai clienti smista il messaggio, cerca nei documenti giusti, legge gli ordini senza modificarli, apre la richiesta di reso e lascia i rimborsi a una persona. Ecco lo schema, la tabella delle decisioni e le opzioni reali su Shopify.',
  ledeEn:
    'A Shopify AI chatbot for orders and returns is not one prompt. It is five parts, and the last decision, the refund, stays with a person. Here is how it is built, what each part does and where the assistant must stop.',
  ledeIt:
    'Un chatbot ecommerce con AI per ordini e resi su Shopify non è un prompt solo. Sono cinque pezzi, e l’ultima decisione, il rimborso, resta a una persona. Ecco come è fatto, cosa fa ogni pezzo e dove l’assistente deve fermarsi.',
  image: '/images/blog/ai-customer-service-shopify-cover.png',
  imageAlt: 'Copertina astratta, sfondo rosa cipria sfumato, con una griglia regolare di puntini',
  imageAltEn: 'Abstract cover, softly graded blush pink background with a regular dot grid',
  articleType: 'BlogPosting',
  date: '2026-10-29',
  datePublishedIso: '2026-10-29T09:00:00+00:00',
  dateModifiedIso: '2026-10-29T09:00:00+00:00',
  wordCount: 2700,
  articleSection: 'AI agents',
  readingTimeMinutes: 11,
  keywordsEn:
    'shopify ai chatbot, ai customer service shopify, ecommerce chatbot, shopify inbox ai, ai customer support ecommerce, ai returns automation, shopify returns ai assistant',
  keywordsIt:
    'chatbot ecommerce, assistente ai ecommerce, chatbot shopify, chatbot ai ecommerce, chatbot resi ordini, assistente ai shopify, resi shopify con ai',
  content: [
    {
      type: 'paragraph',
      text: '**A Shopify AI chatbot you can leave alone with customers does four things and refuses a fifth: it answers “where is my order”, explains your policies, answers product and size questions, opens a return request, and never decides a refund or an exception.** That last line is the whole design. Everything else in this article is how to build it so the line holds in code, not just in a prompt.',
    },
    {
      type: 'paragraph',
      text: 'We are noprob agency. We build with AI agents every day (our Custom AI System includes development with AI agents) and we move stores to Shopify with the [Shopify Launch Sprint](/shopify-migration-sprint). I am a developer by training, with more than 7 years of eCommerce projects behind me. This is the blueprint I would hand to a store owner who has to talk to whoever builds the assistant, or who has to judge the app that promises one.',
    },
    { type: 'h2', text: 'AI customer service for Shopify: what should the assistant actually do?' },
    {
      type: 'paragraph',
      text: '**It should take the repetitive, checkable questions and hand over everything that involves money, judgment or an angry customer.** Shopify’s own [guide to AI chatbots for customer service](https://www.shopify.com/blog/ai-chatbot-customer-service) says the same thing from the vendor side: chatbots can check live order data, explain the return policy and start a return, but they cannot fully replace people, so important conversations go to a human and handoff rules are part of the setup.',
    },
    {
      type: 'paragraph',
      text: 'In practice, a store gets four kinds of message. Where is my order. I want to send something back. I have a question about a product, a size or the shipping. And everything else: a complaint, a gift, a question nobody planned for. The first three are where an assistant earns its keep. The fourth is where it has to know it is out of its depth.',
    },
    { type: 'h2', text: 'How is a Shopify AI chatbot built? Five parts' },
    {
      type: 'paragraph',
      text: '**The assistant is a chain of five parts: a router that sorts the message, a knowledge base it searches, read-only tools for orders, a return request that waits for approval, and a check on the answer before it is sent.** Each part exists because the one before it is not enough. Skip one and you can usually name the failure it would have prevented.',
    },
    { type: 'h3', text: '1. The router: order, return, product or other' },
    {
      type: 'paragraph',
      text: 'The router reads the message and decides which road it takes: order, return, product, or “other”. It can be a rule (the message contains an order number), a small classifier, or a language model that writes one label. Rules are instant and free but read signs, not meaning: a furious complaint also contains an order number. A model understands the complaint, at the price of one more call. A common mix: rules for the obvious cases, a model for the rest.',
    },
    {
      type: 'paragraph',
      text: 'Two details matter more than the choice of router. First, **the “other” road must exist and must lead to a person.** Without it, a message like “do you ship to Madeira?” gets forced onto the nearest road, or stalls silently while the customer waits. Count what lands there: it shows you the next road to build. Second, the router may ask a question. “I’m not sure about this jacket” could be a return, a complaint or a size question; one line, “Do you want to send it back, or is something wrong with it?”, is cheaper than guessing.',
    },
    { type: 'h3', text: '2. The knowledge base: policy, shipping, sizes' },
    {
      type: 'paragraph',
      text: 'The knowledge base is the set of documents the assistant reads before it answers, so it quotes your policy instead of inventing one. Keep it in two layers: a short instruction file that is always loaded (who the assistant is, who it works for, what it never does, where to look for the rest) and separate documents it opens only when needed: returns, shipping times by country, size charts, warranty text.',
    },
    {
      type: 'paragraph',
      text: 'Most mistakes here are retrieval mistakes, not model mistakes. The assistant reads the size chart of the wrong product, or an old shipping page that still says five days. A few rules fix most of it: one document per topic, one owner, a date on each page, and a size chart per product line rather than one generic table. Shopify’s guide also describes a Knowledge Base app that generates store facts so AI shopping agents describe your store accurately. Whatever tool reads your documents, their quality decides the quality of the answers.',
    },
    { type: 'h3', text: '3. Read-only tools: the order lookup' },
    {
      type: 'paragraph',
      text: 'A tool is a function the assistant can call, and the first one it needs is “look up this order”. Give it read access only. Shopify decides what an app may do through access scopes, and the Admin API mutation that creates refunds, [refundCreate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/refundCreate), sits behind the orders access scope. An assistant whose app was only ever granted the read side cannot refund anything, however persuasive the customer is. To open returns it needs only the write_returns scope, never the orders scope that refundCreate requires. That is a constraint in code, worth more than ten lines of “never promise refunds” in a prompt. [OWASP](https://genai.owasp.org/llmrisk/llm062025-excessive-agency/) lists the same remedies under excessive agency: fewer tools, narrower permissions and human approval for high-impact actions.',
    },
    {
      type: 'paragraph',
      text: 'Four checks wrap every call, and all four live in code:',
    },
    {
      type: 'list',
      items: [
        '**Input.** Does the order exist, and does it belong to the person writing? Match order number and email, or use a signed-in customer. When the customer gives no number, models tend to fill the gap with a plausible one, so the system must refuse to guess.',
        '**Outcome.** Read what came back. If the tool returned an error, the customer is never told “done”.',
        '**Errors and waits.** How many retries, and what the customer sees when the order system does not answer, is decided in advance, with a limit.',
        '**Confirmation for what cannot be undone.** Anything irreversible waits for a person (next part).',
      ],
    },
    {
      type: 'paragraph',
      text: 'The data matters as much as the permission: an assistant is as reliable as the order, tracking and product data it reads. That is one reason our [Shopify Launch Sprint](/shopify-migration-sprint) maps data in detail during a migration (see the [Shopify migration guide](/shopify-migration)), and why order data should be clean before any assistant reads it. For a migration from a proprietary platform tied to a management system, see the [Cumini case study](/use-cases/cumini-luxury-fashion-ecommerce).',
    },
    { type: 'h3', text: '4. AI returns automation: the assistant opens the request, a person approves it' },
    {
      type: 'paragraph',
      text: '**Opening a return is reversible, so the assistant may do it; paying a refund is not, so it may not.** Shopify’s API draws the line for you. The [returnRequest](https://shopify.dev/docs/api/admin-graphql/latest/mutations/returnRequest) mutation, in the documentation’s words, “creates a return request that requires merchant approval before processing”: the return is created with status REQUESTED and the merchant approves or declines it. For a return that should be open immediately there is a different mutation, returnCreate. Pick the first for the assistant and the second only for staff.',
    },
    {
      type: 'paragraph',
      text: 'So the flow is: the assistant checks the order and the policy, opens a return request, tells the customer what happens next, and puts the case in a queue where a person approves or declines it and, if money is due, issues the refund. The reversible road (look up, open a request, send instructions) runs on its own. The irreversible road (refund, store credit, exception) stops at a desk.',
    },
    { type: 'h3', text: '5. The check before sending' },
    {
      type: 'paragraph',
      text: 'The last part is a second reader that checks the draft against written criteria before the customer sees it. “Reread this, is it fine?” is not a criterion: the model will say the reply is clear and polite, and it will be right. The defects are a fact nobody supplied and a promise nobody may make. Give the checker the tool results and three questions: is every fact in the reply present in the tool results or the documents? Does the reply promise something a person decides, such as a refund, a discount or a date? If the customer is upset, does the reply acknowledge it?',
    },
    {
      type: 'paragraph',
      text: 'Example. Draft: “Your jacket ships Tuesday and arrives in two days. I’ve started your return and you’ll get your refund within five days.” The checker flags “two days” (not in the tracking data) and “refund within five days” (a promise). The second draft passes: “Your order shipped on Tuesday and the carrier shows it in transit. I’ve opened your return request; someone on the team approves it and confirms the refund by email.” Make the checker a separate call, with only the draft, the criteria and the facts, not the whole conversation, and where possible a different model from the one that wrote: models tend to favor their own text.',
    },
    { type: 'h2', text: 'Which requests does the AI handle, and which does a person decide?' },
    {
      type: 'paragraph',
      text: '**The rule of thumb is simple: the AI handles what it can look up and what can be undone; a person decides what costs money, bends a rule or involves a frustrated customer.** This is the matrix we would put in any brief for a support assistant. Copy it and edit it to your policy.',
    },
    {
      type: 'table',
      headers: ['Request', 'What the AI does', 'What a person decides'],
      rows: [
        [
          '**“Where is my order?”**',
          'The AI reads the order and the tracking and replies with what the data says.',
          'A person steps in only if the carrier shows the parcel lost or stuck.',
        ],
        [
          '**Product, size and shipping questions**',
          'The AI answers from product data, the size chart and the shipping page. If the sources disagree or say nothing, it says it will check and passes the question on.',
          '-',
        ],
        [
          '**Return within policy**',
          'The AI checks the order against your policy, opens a return request and sends the instructions.',
          'A person approves the request.',
        ],
        [
          '**Return outside policy, gift, no order number**',
          'The AI explains the policy without promising anything and hands over a summary.',
          'A person decides the exception.',
        ],
        [
          '**Refund**',
          'The AI never executes or promises it; it says a person confirms.',
          'A person approves and issues it.',
        ],
        [
          '**Damaged or defective item**',
          'The AI collects order, photos and a description, and opens the case.',
          'A person decides between repair, replacement and refund.',
        ],
        [
          '**Complaint, legal threat, chargeback, request about personal data**',
          '-',
          'Straight to a person, with the conversation attached.',
        ],
        [
          '**Discounts, price matching, anything “just this once”**',
          '-',
          'A person, always.',
        ],
      ],
    },
    {
      type: 'paragraph',
      text: 'Notice what the matrix does not contain: any case where the AI “almost” decides. When a case is borderline, it is a person’s case. Anthropic, in its guide to [building effective agents](https://www.anthropic.com/engineering/building-effective-agents), calls customer support a natural fit for agents and says to start with the simplest solution. In a store that means a router, two or three fixed roads for the most frequent requests, and a reliable road to a person.',
    },
    { type: 'h2', text: 'Which Shopify AI chatbot options exist before you build?' },
    {
      type: 'paragraph',
      text: '**You have three real routes on Shopify: Shopify’s own Inbox, a helpdesk or chatbot app from the App Store, or an assistant built for your store.** We do not rank them: which one fits depends on your volume, languages and how many exceptions your policy has. What follows is what the official pages say.',
    },
    {
      type: 'list',
      items: [
        '**Shopify Inbox.** Shopify’s guide describes it as free and AI-assisted, with instant answers, automated first replies and conversation labels. In the [instant answers](https://help.shopify.com/en/manual/inbox/chat-settings-and-appearance/instant-answers) documentation, the “Track my order” option requires the customer to sign in to review an existing order, and AI-generated instant answer suggestions are only available in English. [Suggested replies](https://help.shopify.com/en/manual/inbox/chat-settings-and-appearance/shopify-magic) are a writing aid for staff: they appear in the composer, the team reviews them before sending, and they do not drive the automatic replies. Shopify adds that you are responsible for the accuracy of what you publish.',
        '**Helpdesk apps with an AI agent.** [Gorgias](https://www.gorgias.com/) presents an AI Agent plus a helpdesk, with a Shopify integration that pulls orders, customers and products into the ticket, order actions such as cancelling an order, and escalation to your team with context. [Tidio](https://apps.shopify.com/tidio-chat) offers an AI agent called Lyro that answers FAQs and order status questions, with Shopify actions on its paid plan. Shopify’s guide also lists Gladly, Reamaze, Rep AI and Moose, with prices that change often: check each vendor.',
        '**An assistant built for your store.** Same five parts as above, written around your policy, your data and your approval queue. More on when it pays off below.',
      ],
    },
    {
      type: 'paragraph',
      text: 'Before you install anything, ask the vendor four questions. Which actions can the assistant execute on its own, and can each be switched off? Which access scopes does the app request at install? What does a human receive on handoff? Can you see full conversations and tool calls? If an app can refund by itself and you cannot turn that off, you have your answer.',
    },
    { type: 'h2', text: 'When do you need a custom assistant instead of an app?' },
    {
      type: 'paragraph',
      text: '**You need a custom assistant when your rules do not fit a helpdesk’s settings: policies with exceptions, data outside Shopify, several languages, or an approval queue that must live in your own tools.** If you answer a few dozen messages a week, mostly FAQs and “where is my order”, Inbox or an app is the sensible start, and a custom assistant starts paying off when the rules below appear.',
    },
    {
      type: 'list',
      items: [
        'Your returns depend on the product type, the market or the customer, and the exceptions are the real work.',
        'Order truth sits in several systems (Shopify, an ERP, a warehouse, a carrier) and the assistant has to read all of them.',
        'You sell in several languages and the policy text differs by country.',
        'You want every refund or exception to land in a queue your team already uses, with the case summarized.',
        'You need fixed test cases that run after every change, so a new prompt cannot quietly break an old rule.',
      ],
    },
    {
      type: 'paragraph',
      text: 'Not everything needs an assistant either. A path that never changes (a return is approved, so tag the order and email the customer) is a workflow, and [Shopify Flow with AI](/blog/shopify-flow-ai) covers many of those. Whether you need a chatbot, a workflow or an agent is the question we answer in [AI agents for Shopify](/blog/ai-agents-for-shopify), and what it takes to build one is in [how to build an AI agent for your store](/blog/build-ai-agent-shopify). I use Shopify Magic and Sidekick in projects the same way I would run an assistant for customers: clean data first, human review after. If you want to build one with us, the [AI Accelerator](/ai-accelerator) is where we start.',
    },
    { type: 'h2', text: 'What to do before the first customer talks to it' },
    {
      type: 'paragraph',
      text: '**Before launch, write the cases it must pass and decide what it can read.** Take 20 to 50 real messages from your inbox, including the awkward ones (a gift, a wrong size, an order that never arrived, a message about something else entirely), and write for each what must be true in the reply, not the exact words. Run them after every change. How to do it step by step is in [how to evaluate an AI assistant for your store](/blog/evaluate-ai-assistant-ecommerce).',
    },
    {
      type: 'paragraph',
      text: 'And remember who writes to you. The assistant reads text written by strangers (messages, reviews, imported descriptions) while it has access to orders and customer emails. That combination is what attackers look for, and the defense that holds is to remove one side: the assistant sees only the orders of the person writing and writes only to that person. We cover it in [AI agent security on Shopify](/blog/ai-agent-security-shopify). For a broader view of AI in the store, see [AI for eCommerce: what works](/blog/ai-for-ecommerce) and [Shopify Magic and Sidekick](/blog/shopify-magic-sidekick).',
    },
    { type: 'h2', text: 'Frequently asked questions' },
    { type: 'h3', text: 'Can you add an AI chatbot to Shopify?' },
    {
      type: 'paragraph',
      text: 'Yes. You can turn on Shopify Inbox, install a helpdesk or chatbot app from the Shopify App Store, or build an assistant connected to the Admin API. Whichever you pick, give it read access to orders, let it open return requests only, and keep refunds with a person.',
    },
    { type: 'h3', text: 'Is there an AI for Shopify?' },
    {
      type: 'paragraph',
      text: 'Yes, several. Shopify has Sidekick and Shopify Magic for the merchant, AI-generated instant answers and suggested replies in Inbox, and the App Store has chatbot and helpdesk apps with their own AI agents. Merchant tools help you work; customer-facing assistants talk to your shoppers and need much stricter limits.',
    },
    { type: 'h3', text: 'Can an AI chatbot process refunds on Shopify?' },
    {
      type: 'paragraph',
      text: 'Technically it can, if its app has permission to call the refund mutation. It should not. A refund moves money and cannot be undone, so the assistant should open a return request and let a person approve it and issue the refund.',
    },
    { type: 'h3', text: 'Does Shopify Inbox have AI?' },
    {
      type: 'paragraph',
      text: 'Yes, in a limited form. Per Shopify’s documentation, Inbox offers AI-generated instant answer suggestions and suggested replies for staff, both only in English, and the merchant stays responsible for the accuracy of what is published and sent.',
    },
    { type: 'h3', text: 'When should the chatbot hand the conversation to a person?' },
    {
      type: 'paragraph',
      text: 'On refunds, exceptions, damaged items, complaints, legal or personal-data requests, and whenever the router does not recognize the request. Send the case with a short summary so the customer does not have to repeat themselves.',
    },
    { type: 'h3', text: 'Do I need a custom AI assistant or is an app enough?' },
    {
      type: 'paragraph',
      text: 'An app is enough when your questions are repetitive and your policy is simple. A custom assistant pays off when exceptions, several data sources or several languages make the rules too specific for an app’s settings.',
    },
    {
      type: 'paragraph',
      text: 'If you are still on another platform, the right order is to migrate first and add the assistant on clean data: see our [Shopify migration guide](/shopify-migration). The Sprint has a public price by revenue: €5.800 under €2M, €8.800 between €2M and €20M, €12.800 above €20M, VAT excluded, in 4 installments.',
    },
    {
      type: 'paragraph',
      text: 'The [Shopify Launch Sprint](/shopify-migration-sprint) moves your store to Shopify in 14 days with our Custom AI System: a fixed calendar, a public price and 4 written guarantees.',
    },
  ],
  contentIt: [
    {
      type: 'paragraph',
      text: '**Un chatbot ecommerce con AI che puoi lasciare da solo con i clienti fa quattro cose e ne rifiuta una: risponde a “dov’è il mio ordine”, spiega le tue policy, risponde su prodotti e taglie, apre la richiesta di reso, e non decide mai un rimborso o un’eccezione.** Quest’ultima riga è tutto il progetto. Il resto dell’articolo spiega come costruirlo perché il limite regga nel codice, non solo in un prompt.',
    },
    {
      type: 'paragraph',
      text: 'Siamo noprob agency. Lavoriamo ogni giorno con agenti AI (il nostro Custom AI System include lo sviluppo con agenti AI) e portiamo gli store su Shopify con lo [Shopify Launch Sprint](/it/sprint-migrazione-shopify). Io sono sviluppatore di formazione e ho oltre 7 anni di progetti eCommerce alle spalle. Questo è lo schema che darei a un responsabile eCommerce che deve parlare con chi costruisce l’assistente, o giudicare l’app che ne promette uno.',
    },
    { type: 'h2', text: 'Assistente AI per l’assistenza clienti di uno store Shopify: cosa deve fare davvero?' },
    {
      type: 'paragraph',
      text: '**Deve prendere le domande ripetitive e verificabili e passare a una persona tutto ciò che riguarda soldi, giudizio o un cliente arrabbiato.** La [guida di Shopify ai chatbot AI per l’assistenza clienti](https://www.shopify.com/blog/ai-chatbot-customer-service) dice la stessa cosa dal lato del fornitore: i chatbot possono controllare i dati ordine in tempo reale, spiegare la policy dei resi e avviare un reso, ma non sostituiscono del tutto le persone, quindi le conversazioni importanti vanno a un operatore e le regole di passaggio fanno parte dell’installazione.',
    },
    {
      type: 'paragraph',
      text: 'In pratica uno store riceve quattro tipi di messaggio. Dov’è il mio ordine. Voglio restituire un prodotto. Ho una domanda su un prodotto, una taglia o la spedizione. E tutto il resto: un reclamo, un regalo, una domanda che nessuno aveva previsto. I primi tre sono il terreno dove un assistente rende. Il quarto è dove deve sapere di non farcela.',
    },
    { type: 'h2', text: 'Come è fatto un chatbot ecommerce con AI? Cinque pezzi' },
    {
      type: 'paragraph',
      text: '**L’assistente è una catena di cinque pezzi: un router che smista il messaggio, una base di conoscenza in cui cerca, strumenti di sola lettura per gli ordini, una richiesta di reso che aspetta l’approvazione e un controllo della risposta prima dell’invio.** Ogni pezzo c’è perché quello prima non basta. Se ne togli uno, di solito sai dire quale errore avrebbe evitato.',
    },
    { type: 'h3', text: '1. Il router: ordine, reso, prodotto o altro' },
    {
      type: 'paragraph',
      text: 'Il router legge il messaggio e decide su quale strada va: ordine, reso, prodotto oppure “altro”. Può essere una regola (nel messaggio c’è un numero d’ordine), un piccolo classificatore o un modello linguistico che scrive un’etichetta. Le regole sono istantanee e gratuite ma leggono i segni, non il senso: anche un reclamo furioso contiene un numero d’ordine. Un modello capisce il reclamo, al prezzo di una chiamata in più. Mix comune: regole per i casi ovvi, modello per il resto.',
    },
    {
      type: 'paragraph',
      text: 'Due dettagli contano più della scelta del router. Il primo: **la strada “altro” deve esistere e portare a una persona.** Senza, un messaggio come “spedite a Madeira?” viene spinto sulla strada meno lontana, oppure si ferma in silenzio mentre il cliente aspetta. Conta cosa ci finisce: ti indica la prossima strada da costruire. Il secondo: il router può fare una domanda. “Non sono convinto di questa giacca” può essere un reso, un reclamo o una domanda sulla taglia; una riga, “Vuoi rimandarla indietro o c’è qualcosa che non va?”, costa meno di indovinare.',
    },
    { type: 'h3', text: '2. La base di conoscenza: policy, spedizioni, taglie' },
    {
      type: 'paragraph',
      text: 'La base di conoscenza è l’insieme di documenti che l’assistente legge prima di rispondere, così cita la tua policy invece di inventarne una. Tienila su due livelli: un file di istruzioni breve, sempre caricato (chi è l’assistente, per chi lavora, cosa non fa mai, dove trovare il resto) e documenti separati che apre solo quando servono: resi, tempi di spedizione per paese, guide alle taglie, testo della garanzia.',
    },
    {
      type: 'paragraph',
      text: 'La maggior parte degli errori qui sono errori di ricerca, non del modello. L’assistente legge la guida taglie del prodotto sbagliato, o una vecchia pagina spedizioni che dice ancora cinque giorni. Poche regole risolvono quasi tutto: un documento per argomento, un responsabile, una data su ogni pagina, una guida taglie per linea di prodotto invece di una tabella generica. La guida di Shopify descrive anche un’app Knowledge Base che genera informazioni sullo store perché gli agenti di acquisto AI lo descrivano bene. Qualunque strumento legga i tuoi documenti, la qualità delle risposte è quella dei documenti.',
    },
    { type: 'h3', text: '3. Strumenti di sola lettura: la ricerca dell’ordine' },
    {
      type: 'paragraph',
      text: 'Uno strumento è una funzione che l’assistente può chiamare, e il primo che gli serve è “cerca questo ordine”. Dagli solo accesso in lettura. Shopify decide cosa può fare un’app con gli access scope, e la mutation dell’Admin API che crea i rimborsi, [refundCreate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/refundCreate), sta dietro lo scope degli ordini. Un assistente la cui app ha ricevuto solo il lato lettura non può rimborsare niente, per quanto sia convincente il cliente. Per aprire i resi gli serve solo lo scope write_returns, mai lo scope degli ordini che richiede refundCreate. È un vincolo nel codice, e vale più di dieci righe di “non promettere rimborsi” in un prompt. [OWASP](https://genai.owasp.org/llmrisk/llm062025-excessive-agency/) elenca gli stessi rimedi sotto “excessive agency”: meno strumenti, permessi più stretti e approvazione umana per le azioni ad alto impatto.',
    },
    {
      type: 'paragraph',
      text: 'Quattro controlli avvolgono ogni chiamata, e stanno tutti nel codice:',
    },
    {
      type: 'list',
      items: [
        '**Ingresso.** L’ordine esiste ed è di chi scrive? Confronta numero d’ordine ed email, oppure usa un cliente con login. Quando il cliente non dà il numero, i modelli tendono a riempire il vuoto con uno plausibile: il sistema deve rifiutarsi di indovinare.',
        '**Esito.** Leggi cosa è tornato. Se lo strumento ha dato errore, al cliente non si scrive mai “fatto”.',
        '**Errori e attese.** Quante volte riprovare, e cosa vede il cliente se il sistema ordini non risponde, si decide prima, con un limite.',
        '**Conferma per ciò che non si annulla.** Ogni azione irreversibile aspetta una persona (punto successivo).',
      ],
    },
    {
      type: 'paragraph',
      text: 'Conta quanto il permesso anche il dato: un assistente è affidabile quanto i dati di ordini, tracking e prodotti che legge. È uno dei motivi per cui nel nostro [Shopify Launch Sprint](/it/sprint-migrazione-shopify) mappiamo i dati al dettaglio (vedi la [guida alla migrazione a Shopify](/it/migrazione-shopify)), e per cui i dati ordine vanno puliti prima che un assistente li legga. Per una migrazione da una piattaforma proprietaria legata al gestionale, vedi il [caso studio Cumini](/it/casi-studio/cumini-luxury-fashion-ecommerce).',
    },
    { type: 'h3', text: '4. Resi automatizzati con l’AI: la richiesta la apre l’assistente, la approva una persona' },
    {
      type: 'paragraph',
      text: '**Aprire un reso è reversibile, quindi l’assistente può farlo; pagare un rimborso no, quindi non può.** L’API di Shopify traccia la linea per te. La mutation [returnRequest](https://shopify.dev/docs/api/admin-graphql/latest/mutations/returnRequest), nelle parole della documentazione, “crea una richiesta di reso che richiede l’approvazione del merchant prima dell’elaborazione”: il reso nasce con stato REQUESTED e il merchant lo approva o lo rifiuta. Per un reso che deve essere aperto subito c’è un’altra mutation, returnCreate. Usa la prima per l’assistente e la seconda solo per il personale.',
    },
    {
      type: 'paragraph',
      text: 'Il flusso quindi è: l’assistente controlla ordine e policy, apre una richiesta di reso, dice al cliente cosa succede dopo e mette la pratica in una coda dove una persona la approva o la rifiuta e, se c’è da pagare, emette il rimborso. La strada reversibile (cercare, aprire una richiesta, mandare le istruzioni) va da sola. La strada irreversibile (rimborso, buono, eccezione) si ferma a una scrivania.',
    },
    { type: 'h3', text: '5. Il controllo prima dell’invio' },
    {
      type: 'paragraph',
      text: 'L’ultimo pezzo è una seconda lettura che confronta la bozza con criteri scritti, prima che la veda il cliente. “Rileggi, va bene?” non è un criterio: il modello dirà che la risposta è chiara e cortese, e avrà ragione. I difetti sono un fatto che nessuno ha fornito e una promessa che nessuno può fare. Dai al controllore i risultati degli strumenti e tre domande: ogni fatto della risposta è nei risultati o nei documenti? La risposta promette qualcosa che decide una persona, come un rimborso, uno sconto o una data? Se il cliente è scontento, la risposta lo riconosce?',
    },
    {
      type: 'paragraph',
      text: 'Un esempio. Bozza: “La tua giacca parte martedì e arriva in due giorni. Ho avviato il reso e il rimborso arriva entro cinque giorni.” Il controllore segnala “in due giorni” (non è nel tracking) e “rimborso entro cinque giorni” (una promessa). La seconda bozza passa: “Il tuo ordine è partito martedì e il corriere lo segna in transito. Ho aperto la richiesta di reso: la approva una persona del team, che ti conferma il rimborso per email.” Fai del controllore una chiamata separata, con solo la bozza, i criteri e i fatti, non l’intera conversazione, e se puoi un modello diverso da quello che ha scritto: i modelli tendono a preferire i propri testi.',
    },
    { type: 'h2', text: 'Quali richieste gestisce l’AI e quali decide una persona?' },
    {
      type: 'paragraph',
      text: '**La regola pratica è semplice: l’AI gestisce ciò che può verificare e ciò che si può annullare; una persona decide ciò che costa denaro, piega una regola o riguarda un cliente arrabbiato.** È la matrice che metteremmo in ogni brief per un assistente di assistenza clienti. Copiala e adattala alla tua policy.',
    },
    {
      type: 'table',
      headers: ['Richiesta', 'Cosa fa l’AI', 'Cosa decide una persona'],
      rows: [
        [
          '**“Dov’è il mio ordine?”**',
          'L’AI legge ordine e tracking e risponde con ciò che dicono i dati.',
          'Una persona interviene solo se il corriere segna il pacco smarrito o fermo.',
        ],
        [
          '**Domande su prodotto, taglie e spedizione**',
          'L’AI risponde da dati prodotto, guida taglie e pagina spedizioni. Se le fonti si contraddicono o tacciono, dice che verifica e passa la domanda.',
          '-',
        ],
        [
          '**Reso entro la policy**',
          'L’AI controlla l’ordine rispetto alla policy, apre la richiesta di reso e manda le istruzioni.',
          'Una persona approva la richiesta.',
        ],
        [
          '**Reso fuori policy, regalo, senza numero d’ordine**',
          'L’AI spiega la policy senza promettere nulla e passa un riepilogo.',
          'Una persona decide l’eccezione.',
        ],
        [
          '**Rimborso**',
          'L’AI non lo esegue né lo promette; dice che lo conferma una persona.',
          'Una persona lo approva e lo emette.',
        ],
        [
          '**Prodotto danneggiato o difettoso**',
          'L’AI raccoglie ordine, foto e descrizione e apre la pratica.',
          'Una persona decide tra riparazione, sostituzione e rimborso.',
        ],
        [
          '**Reclamo, minaccia legale, chargeback, richiesta sui dati personali**',
          '-',
          'Direttamente a una persona, con la conversazione allegata.',
        ],
        [
          '**Sconti, allineamento prezzo, qualsiasi “solo per questa volta”**',
          '-',
          'Sempre una persona.',
        ],
      ],
    },
    {
      type: 'paragraph',
      text: 'Guarda cosa non c’è nella matrice: nessun caso in cui l’AI decide “quasi”. Se un caso è al limite, è il caso di una persona. Anthropic, nella sua guida a [come costruire agenti efficaci](https://www.anthropic.com/engineering/building-effective-agents) definisce l’assistenza clienti un terreno naturale per gli agenti e consiglia di partire dalla soluzione più semplice. In uno store vuol dire un router, due o tre strade fisse per le richieste più frequenti e una strada affidabile verso una persona.',
    },
    { type: 'h2', text: 'Chatbot ecommerce su Shopify: quali opzioni ci sono prima di costruire?' },
    {
      type: 'paragraph',
      text: '**Su Shopify hai tre strade reali: Shopify Inbox, un’app di helpdesk o chatbot dall’App Store, oppure un assistente costruito per il tuo store.** Non facciamo classifiche: quale conviene dipende da volumi, lingue e da quante eccezioni ha la tua policy. Qui sotto cosa dicono le pagine ufficiali.',
    },
    {
      type: 'list',
      items: [
        '**Shopify Inbox.** La guida di Shopify lo descrive come gratuito e assistito dall’AI, con risposte istantanee, prime risposte automatiche ed etichette alle conversazioni. Nella documentazione sulle [risposte istantanee](https://help.shopify.com/en/manual/inbox/chat-settings-and-appearance/instant-answers), l’opzione “Track my order” richiede che il cliente acceda al suo account per vedere un ordine esistente, e i suggerimenti di risposte istantanee generati dall’AI sono disponibili solo in inglese. Le [risposte suggerite](https://help.shopify.com/en/manual/inbox/chat-settings-and-appearance/shopify-magic) sono un aiuto alla scrittura per il personale: compaiono nel campo di composizione, il team le rilegge prima di inviarle e non guidano le risposte automatiche. Shopify aggiunge che sei responsabile dell’accuratezza di ciò che pubblichi.',
        '**App di helpdesk con agente AI.** [Gorgias](https://www.gorgias.com/) presenta un AI Agent con un helpdesk, un’integrazione con Shopify che porta ordini, clienti e prodotti nel ticket, azioni sugli ordini come l’annullamento e l’escalation al team con il contesto. [Tidio](https://apps.shopify.com/tidio-chat) offre un agente AI chiamato Lyro che risponde alle FAQ e allo stato ordine, con azioni Shopify nel piano a pagamento. La guida di Shopify cita anche Gladly, Reamaze, Rep AI e Moose, con prezzi che cambiano spesso: controllali presso ogni fornitore.',
        '**Un assistente costruito per il tuo store.** Gli stessi cinque pezzi di sopra, scritti attorno alla tua policy, ai tuoi dati e alla tua coda di approvazione. Sotto, quando conviene.',
      ],
    },
    {
      type: 'paragraph',
      text: 'Prima di installare qualunque cosa, fai al fornitore quattro domande. Quali azioni può eseguire da sola l’assistente, e puoi spegnerle una per una? Quali access scope chiede l’app all’installazione? Cosa riceve una persona al passaggio? Puoi vedere conversazioni intere e chiamate agli strumenti? Se un’app può rimborsare da sola e non puoi spegnerlo, hai già la risposta.',
    },
    { type: 'h2', text: 'Quando serve un assistente su misura invece di un’app?' },
    {
      type: 'paragraph',
      text: '**Serve un assistente su misura quando le tue regole non stanno nelle impostazioni di un helpdesk: policy con eccezioni, dati fuori da Shopify, più lingue, o una coda di approvazione che deve vivere nei tuoi strumenti.** Se rispondi a qualche decina di messaggi a settimana, per lo più FAQ e “dov’è il mio ordine”, Inbox o un’app sono la partenza sensata, e un assistente su misura inizia a ripagarsi quando compaiono le regole qui sotto.',
    },
    {
      type: 'list',
      items: [
        'I resi dipendono dal tipo di prodotto, dal mercato o dal cliente, e le eccezioni sono il lavoro vero.',
        'La verità sugli ordini sta in più sistemi (Shopify, un gestionale, un magazzino, un corriere) e l’assistente deve leggerli tutti.',
        'Vendi in più lingue e il testo della policy cambia da paese a paese.',
        'Vuoi che ogni rimborso o eccezione finisca in una coda che il tuo team già usa, con il caso riassunto.',
        'Ti servono casi di prova fissi che girano a ogni modifica, così un nuovo prompt non rompe in silenzio una vecchia regola.',
      ],
    },
    {
      type: 'paragraph',
      text: 'Nemmeno tutto richiede un assistente. Un percorso che non cambia mai (un reso viene approvato, quindi tagga l’ordine e scrivi al cliente) è un workflow, e [Shopify Flow con l’AI](/it/blog/shopify-flow-ai) ne copre molti. Se ti serve un chatbot, un workflow o un agente è la domanda a cui rispondiamo in [agenti AI per Shopify](/it/blog/agenti-ai-shopify), e cosa serve per costruirne uno è in [come creare un agente AI per lo store](/it/blog/creare-agente-ai-shopify). Io uso Shopify Magic e Sidekick nei progetti con la stessa regola che vale per un assistente rivolto ai clienti: prima dati puliti, poi revisione umana. Se vuoi costruirne uno con noi, si parte dall’[AI Accelerator](/it/ai-accelerator).',
    },
    { type: 'h2', text: 'Resi in Italia: cosa dice la legge e cosa significa per l’assistente' },
    {
      type: 'paragraph',
      text: '**Per un acquisto online, il Codice del consumo dà al consumatore quattordici giorni per recedere ([art. 52](https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2005-09-06;206~art52)), e basta una dichiarazione esplicita, non serve un modulo ([art. 54](https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2005-09-06;206~art54)), salvo le eccezioni dell’[art. 59](https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2005-09-06;206~art59) (per esempio i beni su misura o chiaramente personalizzati).** Questa parte vale per chi vende ai consumatori in Italia e non è consulenza legale: verifica le tue condizioni con chi ti segue sul piano legale. Le norme sono pubblicate su [Normattiva](https://www.normattiva.it/), il portale ufficiale della normativa italiana.',
    },
    {
      type: 'list',
      items: [
        '**Quattordici giorni.** L’[art. 52 del Codice del consumo](https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2005-09-06;206~art52) prevede “un periodo di quattordici giorni per recedere da un contratto a distanza”; per i beni il termine decorre dal giorno in cui il consumatore (o un terzo da lui designato, diverso dal vettore) ne prende possesso fisico.',
        '**Una dichiarazione basta.** L’[art. 54](https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2005-09-06;206~art54) permette di usare il modulo tipo oppure “qualsiasi altra dichiarazione esplicita”, purché inviata prima della scadenza del termine.',
        '**Difetto di conformità.** È un’altra cosa dal recesso. L’[art. 135-bis](https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2005-09-06;206~art135bis) dice che il consumatore può scegliere tra riparazione e sostituzione, salvo che il rimedio sia impossibile o costi al venditore in modo sproporzionato; per i contratti conclusi dal 31 luglio 2026 il venditore deve anche informarlo di questa scelta.',
      ],
    },
    {
      type: 'paragraph',
      text: 'Da queste norme discendono tre scelte di progetto nostre. Primo: noi facciamo passare a una persona ogni messaggio che può essere una dichiarazione di recesso. Un “voglio restituirlo” scritto in chat può esserlo ([art. 54](https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2005-09-06;206~art54) parla di qualsiasi dichiarazione esplicita), quindi l’assistente non lo archivia come domanda: apre la richiesta, registra data e ora e la passa. Secondo: nel difetto di conformità non facciamo mai scegliere all’assistente tra riparazione e sostituzione. La scelta spetta al cliente, salvo i limiti dell’[art. 135-bis](https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2005-09-06;206~art135bis) (rimedio impossibile o con costi sproporzionati), quindi l’assistente raccoglie i fatti, non offre una soluzione al posto dell’altra, non dice “vi mandiamo un buono” e passa il caso. Terzo: la tua policy può essere più generosa dei quattordici giorni, ma nei nostri sistemi l’assistente non risponde mai “sei fuori policy” a un messaggio che una persona potrebbe leggere come recesso: nel dubbio, passa. Queste scelte non sono consulenza legale: le condizioni del tuo store vanno verificate con chi ti segue sul piano legale.',
    },
    { type: 'h2', text: 'Cosa fare prima che il primo cliente ci parli' },
    {
      type: 'paragraph',
      text: '**Prima del lancio scrivi i casi che deve superare e decidi cosa può leggere.** Prendi da 20 a 50 messaggi veri dalla tua casella, compresi quelli scomodi (un regalo, una taglia sbagliata, un ordine mai arrivato, un messaggio che non c’entra niente), e per ognuno scrivi cosa deve essere vero nella risposta, non le parole esatte. Rilanciali a ogni modifica. Come farlo passo per passo è in [come valutare un assistente AI per il tuo store](/it/blog/valutare-assistente-ai-ecommerce).',
    },
    {
      type: 'paragraph',
      text: 'E ricorda chi ti scrive. L’assistente legge testi scritti da sconosciuti (messaggi, recensioni, descrizioni importate) mentre ha accesso a ordini ed email dei clienti. È la combinazione che cercano gli attaccanti, e la difesa che regge è togliere un lato: l’assistente vede solo gli ordini di chi scrive e scrive solo a lui. Ne parliamo in [sicurezza degli agenti AI su Shopify](/it/blog/sicurezza-agenti-ai-shopify). Per uno sguardo più ampio sull’AI nello store, vedi [AI per eCommerce: cosa funziona davvero](/it/blog/ai-per-ecommerce) e [Shopify Magic e Sidekick](/it/blog/shopify-magic-sidekick).',
    },
    { type: 'h2', text: 'Domande frequenti' },
    { type: 'h3', text: 'Si può aggiungere un chatbot AI a Shopify?' },
    {
      type: 'paragraph',
      text: 'Sì. Puoi attivare Shopify Inbox, installare un’app di helpdesk o chatbot dallo Shopify App Store, oppure costruire un assistente collegato all’Admin API. Qualunque strada scegli, dagli accesso in lettura agli ordini, fagli aprire solo richieste di reso e lascia i rimborsi a una persona.',
    },
    { type: 'h3', text: 'Esiste un’AI per Shopify?' },
    {
      type: 'paragraph',
      text: 'Sì, più di una. Shopify ha Sidekick e Shopify Magic per il merchant, i suggerimenti di risposte istantanee e le risposte suggerite in Inbox, e nell’App Store ci sono app di chatbot e helpdesk con i propri agenti AI. Gli strumenti per il merchant ti aiutano a lavorare; gli assistenti rivolti ai clienti parlano con i tuoi acquirenti e hanno bisogno di limiti molto più stretti.',
    },
    { type: 'h3', text: 'Un chatbot AI può eseguire rimborsi su Shopify?' },
    {
      type: 'paragraph',
      text: 'Tecnicamente sì, se la sua app ha il permesso di chiamare la mutation dei rimborsi. Non dovrebbe. Un rimborso sposta denaro e non si annulla, quindi l’assistente deve aprire una richiesta di reso e lasciare a una persona l’approvazione e l’emissione del rimborso.',
    },
    { type: 'h3', text: 'Shopify Inbox ha funzioni AI?' },
    {
      type: 'paragraph',
      text: 'Sì, in forma limitata. Secondo la documentazione di Shopify, Inbox offre suggerimenti di risposte istantanee generati dall’AI e risposte suggerite per il personale, entrambi solo in inglese, e il merchant resta responsabile dell’accuratezza di ciò che pubblica e invia.',
    },
    { type: 'h3', text: 'Quando il chatbot deve passare la conversazione a una persona?' },
    {
      type: 'paragraph',
      text: 'Su rimborsi, eccezioni, prodotti danneggiati, reclami, richieste legali o sui dati personali, e ogni volta che il router non riconosce la richiesta. Manda la pratica con un breve riepilogo, così il cliente non deve ripetersi.',
    },
    { type: 'h3', text: 'Quanto tempo ha un cliente per restituire un acquisto online in Italia?' },
    {
      type: 'paragraph',
      text: 'Per un contratto a distanza il Codice del consumo (art. 52) prevede quattordici giorni per recedere; per i beni decorrono da quando il consumatore ne prende possesso. Il recesso si può comunicare con qualsiasi dichiarazione esplicita (art. 54). Verifica le tue condizioni con chi ti segue sul piano legale.',
    },
    { type: 'h3', text: 'Serve un assistente AI su misura o basta un’app?' },
    {
      type: 'paragraph',
      text: 'Basta un’app quando le domande sono ripetitive e la policy è semplice. Un assistente su misura conviene quando eccezioni, più fonti di dati o più lingue rendono le regole troppo specifiche per le impostazioni di un’app.',
    },
    {
      type: 'paragraph',
      text: 'Se sei ancora su un’altra piattaforma, l’ordine giusto è migrare prima e aggiungere l’assistente su dati puliti: vedi la nostra [guida alla migrazione a Shopify](/it/migrazione-shopify). Lo Sprint ha un prezzo pubblico per fatturato: €5.800 sotto i €2M, €8.800 tra €2M e €20M, €12.800 oltre i €20M, IVA esclusa, in 4 rate.',
    },
    {
      type: 'paragraph',
      text: 'Lo [Shopify Launch Sprint](/it/sprint-migrazione-shopify) porta il tuo store su Shopify in 14 giorni con il nostro Custom AI System: calendario fisso, prezzo pubblico e 4 garanzie scritte.',
    },
  ],
  faqEn: [
    {
      question: 'Can you add an AI chatbot to Shopify?',
      answer:
        'Yes. You can turn on Shopify Inbox, install a helpdesk or chatbot app from the Shopify App Store, or build an assistant connected to the Admin API. Whichever you pick, give it read access to orders, let it open return requests only, and keep refunds with a person.',
    },
    {
      question: 'Is there an AI for Shopify?',
      answer:
        'Yes, several. Shopify has Sidekick and Shopify Magic for the merchant, AI-generated instant answers and suggested replies in Inbox, and the App Store has chatbot and helpdesk apps with their own AI agents. Merchant tools help you work; customer-facing assistants talk to shoppers and need much stricter limits.',
    },
    {
      question: 'Can an AI chatbot process refunds on Shopify?',
      answer:
        'Technically it can, if its app has permission to call the refund mutation. It should not. A refund moves money and cannot be undone, so the assistant should open a return request and let a person approve it and issue the refund.',
    },
    {
      question: 'Does Shopify Inbox have AI?',
      answer:
        'Yes, in a limited form. Per Shopify’s documentation, Inbox offers AI-generated instant answer suggestions and suggested replies for staff, both only in English, and the merchant stays responsible for the accuracy of what is published and sent.',
    },
    {
      question: 'When should the chatbot hand the conversation to a person?',
      answer:
        'On refunds, exceptions, damaged items, complaints, legal or personal-data requests, and whenever the router does not recognize the request. Send the case with a short summary so the customer does not have to repeat themselves.',
    },
    {
      question: 'Do I need a custom AI assistant or is an app enough?',
      answer:
        'An app is enough when your questions are repetitive and your policy is simple. A custom assistant pays off when exceptions, several data sources or several languages make the rules too specific for an app’s settings.',
    },
  ],
  faqIt: [
    {
      question: 'Si può aggiungere un chatbot AI a Shopify?',
      answer:
        'Sì. Puoi attivare Shopify Inbox, installare un’app di helpdesk o chatbot dallo Shopify App Store, oppure costruire un assistente collegato all’Admin API. Qualunque strada scegli, dagli accesso in lettura agli ordini, fagli aprire solo richieste di reso e lascia i rimborsi a una persona.',
    },
    {
      question: 'Esiste un’AI per Shopify?',
      answer:
        'Sì, più di una. Shopify ha Sidekick e Shopify Magic per il merchant, i suggerimenti di risposte istantanee e le risposte suggerite in Inbox, e nell’App Store ci sono app di chatbot e helpdesk con i propri agenti AI. Gli strumenti per il merchant ti aiutano a lavorare; gli assistenti rivolti ai clienti hanno bisogno di limiti molto più stretti.',
    },
    {
      question: 'Un chatbot AI può eseguire rimborsi su Shopify?',
      answer:
        'Tecnicamente sì, se la sua app ha il permesso di chiamare la mutation dei rimborsi. Non dovrebbe. Un rimborso sposta denaro e non si annulla, quindi l’assistente deve aprire una richiesta di reso e lasciare a una persona l’approvazione e l’emissione del rimborso.',
    },
    {
      question: 'Shopify Inbox ha funzioni AI?',
      answer:
        'Sì, in forma limitata. Secondo la documentazione di Shopify, Inbox offre suggerimenti di risposte istantanee generati dall’AI e risposte suggerite per il personale, entrambi solo in inglese, e il merchant resta responsabile dell’accuratezza di ciò che pubblica e invia.',
    },
    {
      question: 'Quando il chatbot deve passare la conversazione a una persona?',
      answer:
        'Su rimborsi, eccezioni, prodotti danneggiati, reclami, richieste legali o sui dati personali, e ogni volta che il router non riconosce la richiesta. Manda la pratica con un breve riepilogo, così il cliente non deve ripetersi.',
    },
    {
      question: 'Serve un assistente AI su misura o basta un’app?',
      answer:
        'Basta un’app quando le domande sono ripetitive e la policy è semplice. Un assistente su misura conviene quando eccezioni, più fonti di dati o più lingue rendono le regole troppo specifiche per le impostazioni di un’app.',
    },
    {
      question: 'Quanto tempo ha un cliente per restituire un acquisto online in Italia?',
      answer:
        'Per un contratto a distanza il Codice del consumo (art. 52) prevede quattordici giorni per recedere; per i beni decorrono da quando il consumatore ne prende possesso. Il recesso si comunica con qualsiasi dichiarazione esplicita (art. 54). Verifica le tue condizioni con chi ti segue sul piano legale.',
    },
  ],
}

export default article
