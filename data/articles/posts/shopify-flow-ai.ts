import type { Article } from '../index'

const article: Article = {
  slug: 'shopify-flow-ai',
  slugIt: 'shopify-flow-ai',
  title: 'Shopify Flow Examples with AI: 10 Workflows You Can Copy',
  titleIt: 'Shopify Flow e AI: 10 workflow pronti da copiare per il tuo store',
  seoTitle: 'Shopify Flow Examples: 10 AI Workflows to Copy',
  seoTitleIt: 'Shopify Flow e AI: 10 workflow pronti da copiare',
  seoDescription:
    'Shopify Flow examples with AI: 10 workflows with trigger, condition and action, which plans include Flow, and when you need an agent instead.',
  seoDescriptionIt:
    'Shopify Flow con l’AI: 10 workflow con trigger, condizione e azione, quali piani lo includono e quando serve un agente al posto di un workflow.',
  excerpt:
    'Ten Shopify Flow examples with the exact trigger and action names from Shopify’s documentation, three with an AI step, plus the rule for when a workflow is enough and when you need an agent.',
  excerptIt:
    'Dieci workflow di Shopify Flow con i nomi esatti di trigger e azioni dalla documentazione di Shopify, tre con un passaggio AI, e la regola per capire quando basta un workflow e quando serve un agente.',
  ledeEn:
    'The best Shopify Flow examples are dull on purpose. Here are ten you can copy, with the exact trigger and action names, three of them with an AI step, and the rule that tells you when Flow is enough.',
  ledeIt:
    'I migliori esempi di Shopify Flow sono noiosi di proposito. Ecco dieci workflow da copiare, con i nomi esatti di trigger e azioni, tre con un passaggio AI, e la regola che ti dice quando Flow basta.',
  image: '/images/blog/shopify-flow-ai-cover.png',
  imageAlt: 'Copertina astratta, sfondo verde bosco, con fasce diagonali di puntini',
  imageAltEn: 'Abstract cover, forest green background with diagonal bands of dots',
  articleType: 'BlogPosting',
  date: '2026-10-29',
  datePublishedIso: '2026-10-29T09:00:00+00:00',
  dateModifiedIso: '2026-10-29T09:00:00+00:00',
  wordCount: 2300,
  articleSection: 'AI agents',
  readingTimeMinutes: 10,
  keywordsEn:
    'shopify flow examples, shopify flow templates, shopify automation, shopify flow ai, shopify flow automation, shopify workflow automation, shopify flow tutorial',
  keywordsIt:
    'shopify flow, automazioni shopify, workflow shopify, shopify flow ai, shopify flow esempi, template shopify flow, automatizzare shopify con ai',
  content: [
    {
      type: 'paragraph',
      text: '**The best Shopify Flow examples are dull on purpose: one trigger, one condition, one action, no surprises.** Below are ten you can copy, with the exact trigger and action names from Shopify’s documentation, and three where an AI step earns its place. First, the rule that decides whether you need Flow at all or something bigger.',
    },
    {
      type: 'paragraph',
      text: 'We are noprob agency. We build Shopify stores, and we work every day with AI agents built on Claude Code. The costliest mistake in store automation is the wrong shape: an agent built where a workflow would do. This guide is the cheap half of that decision, checked against Shopify’s help center on 29 October 2026.',
    },
    { type: 'h2', text: 'When is a Shopify Flow workflow enough, and when do you need an agent?' },
    {
      type: 'paragraph',
      text: '**A workflow is enough when you can write every path before the first run. You need an agent when the next step depends on what the previous step found.** Anthropic draws the same line in [Building effective agents](https://www.anthropic.com/engineering/building-effective-agents): workflows follow paths fixed in advance by code, while agents decide their own steps and tool use as they go. Its advice is to look for “the simplest solution possible” and add complexity only when needed.',
    },
    {
      type: 'paragraph',
      text: 'Flow sits on the workflow side. It has a trigger, conditions with a True and a False branch, and actions. Put a model inside one step and it is still a workflow, because you drew every road. My rule: start with the workflow and make the agent earn its seat. Four questions settle it in a minute:',
    },
    {
      type: 'list',
      items: [
        '**Can you write every branch before the first run?** If yes, it is Flow. If you keep writing “it depends”, it is not.',
        '**Is the input a field or a sentence?** Status, total, tag and quantity are fields: use a plain condition. A free-text note is a sentence: a model can label it, still inside a workflow.',
        '**What does a wrong decision cost?** Money, stock or a customer’s trust means a person approves. Tags, notes and drafts can be wrong and cost nothing.',
        '**Does the next step depend on what you discover on the way?** Look up the order, read the returns policy, then decide what to say: that is an agent.',
      ],
    },
    {
      type: 'paragraph',
      text: 'Tagging a VIP customer is a workflow. “Where is my order?” is not: it needs the order, the shipping status and the policy before it can answer, which is agent work (we cover it in [AI customer service for Shopify](/blog/ai-customer-service-shopify)). Most stores need both: workflows for everything with a fixed shape, an agent for the conversations. The full map is in [AI agents for Shopify: chatbot, workflow or agent](/blog/ai-agents-for-shopify).',
    },
    { type: 'h2', text: 'Where does AI fit inside Shopify Flow?' },
    {
      type: 'paragraph',
      text: '**Flow has no AI action of its own, so AI gets in through three doors.** On 29 October 2026 we read Shopify’s [actions reference](https://help.shopify.com/en/manual/shopify-flow/reference/actions): it lists dozens of actions, from Add order tags to Wait, and none is an AI action. What exists:',
    },
    {
      type: 'list',
      items: [
        '**Sidekick builds the workflow.** Open Flow, click the Sidekick icon and describe the automation in plain language. Per [Shopify’s help](https://help.shopify.com/en/manual/shopify-flow/create-workflow), it works on desktop only, the result is inactive by default and tagged “sidekick”, and Sidekick might omit business-specific logic in complex workflows, so you review and test before turning it on. Shopify announced it on 11 December 2025 in its [changelog](https://changelog.shopify.com/posts/create-flow-automations-with-sidekick). What Sidekick does in the rest of the admin is in [Shopify Magic and Sidekick](/blog/shopify-magic-sidekick).',
        '**Send HTTP request calls a model.** The [action](https://help.shopify.com/en/manual/shopify-flow/reference/actions/send-http-request) sends a request to any URL: method, headers, body. Flow waits at most 30 seconds, and the response comes back in a variable you use in later steps. It is the only door to an outside model.',
        '**Run code shapes the answer.** The [action](https://help.shopify.com/en/manual/shopify-flow/reference/actions/run-code) runs JavaScript with a 5-second limit and no network access, so it cannot call a model itself. It is where you read the reply and turn it into clean values. The fourth door matters most: a person who reads what the AI wrote.',
      ],
    },
    { type: 'h2', text: 'Which Shopify plans include Flow and the AI steps?' },
    {
      type: 'paragraph',
      text: '**Flow is free on Basic, Grow, Advanced and Plus, but the action that reaches a model is not on Basic.** According to Shopify’s [Flow help page](https://help.shopify.com/en/manual/shopify-flow):',
    },
    {
      type: 'list',
      items: [
        '**Flow itself:** a free app on Basic, Grow, Advanced and Plus. Staff need Flow permissions to turn workflows on.',
        '**Send HTTP request:** Grow, Advanced and Plus. On Basic, Flow has no way of its own to call an outside model.',
        '**Sidekick that builds workflows:** desktop only, on the plans that have Flow.',
        '**Tasks from custom partner apps:** Plus only.',
        '**Usage limits:** they vary by plan and follow Shopify’s API limits.',
        '**Language:** Shopify’s [Flow page](https://www.shopify.com/flow) says the app is available in English only, which matters for the team that will read the run logs.',
      ],
    },
    { type: 'h2', text: 'Which Shopify Flow examples can you copy today?' },
    {
      type: 'paragraph',
      text: '**Ten workflows cover most of what a store needs from Flow in its first month.** You can build them by hand from Apps, Flow, Create workflow, or start from the template library: Browse templates, pick one, review it and click Install. Templates carry placeholder data, so change tags and recipients before you turn them on. Shopify’s developer documentation says the library has hundreds of [templates](https://shopify.dev/docs/apps/build/flow/templates). The names below come from the [triggers](https://help.shopify.com/en/manual/shopify-flow/reference/triggers) and [actions](https://help.shopify.com/en/manual/shopify-flow/reference/actions) references. Three have an AI step and end in a tag, a note or a draft field; the other seven are plain fields and tags, so they deliberately have no model.',
    },
    {
      type: 'table',
      headers: ['Workflow', 'Trigger', 'Condition', 'Action', 'AI step'],
      rows: [
        [
          '**1. VIP tag**',
          'Order paid.',
          'Order total above the threshold you choose.',
          'Add customer tags (“vip”).',
          'None. A prompt like “tag customers as VIP when they place an order over $200” is also the example Shopify itself uses to show [Sidekick building a flow](https://www.shopify.com/blog/flow-automation-updates-2025).',
        ],
        [
          '**2. Low-stock alert**',
          'Product variant inventory quantity changed.',
          'Quantity at or below your threshold and the prior quantity above it, so you get one email and not one per sale.',
          'Send internal email.',
          'None.',
        ],
        [
          '**3. Hide and republish**',
          'Product variant out of stock.',
          'The product has nothing left to sell.',
          'Unpublish product. The mirror workflow starts from Product variant back in stock and ends with Publish product.',
          'None.',
        ],
        [
          '**4. Risky order triage**',
          'Order risk analyzed.',
          'The risk recommendation is Cancel or Investigate.',
          'Add order tags, Hold fulfillment order, Send internal email.',
          'None, on purpose. A person decides whether to cancel.',
        ],
        [
          '**5. Return requested**',
          'Return requested.',
          'The customer has the “vip” tag from workflow 1.',
          'Add order tags (“return-open”), Send internal email to support with priority.',
          'None.',
        ],
        [
          '**6. Subscription payment failed**',
          'Subscription billing attempt failure.',
          '-',
          'Add customer tags (“payment-failed”), Send internal email.',
          'None. Only for stores with subscriptions.',
        ],
        [
          '**7. Order note triage**',
          'Order created.',
          'The order note is Not empty and exists.',
          'Add order tags (“note-to-read”) and Send internal email first, then Send HTTP request with the note, Run code to read the reply, Add order tags with the label.',
          'Sorts the note into a closed list such as gift message, address change, delivery request, other.',
        ],
        [
          '**8. Draft copy for a new product**',
          'Product created.',
          'The description is Empty or does not exist.',
          'Add product tags (“needs-copy”), Send HTTP request with title, type and attributes, Run code, Update product metafield (a draft field).',
          'Writes a draft that a person reads and pastes. It never publishes. Same rule as for Sidekick: clean data in, human review out.',
        ],
        [
          '**9. Customer drifting away**',
          'Customer joined segment (a segment you built for customers who have not ordered in a while).',
          '-',
          'Add customer tags, Send HTTP request, Run code, Update customer note, Send internal email.',
          'Writes a draft message in the customer note. The person who knows the customer sends it, or does not.',
        ],
        [
          '**10. Watch your workflows**',
          'Workflow error occurred.',
          '-',
          'Send internal email, or Send Shopify alert for errors.',
          'None. Build this first. Shopify’s [examples page](https://help.shopify.com/en/manual/shopify-flow/getting-started/workflow-examples) lists templates for both.',
        ],
      ],
    },
    { type: 'h2', text: 'How do you add an AI step to a Flow workflow without breaking it?' },
    {
      type: 'paragraph',
      text: '**Put the AI step last, keep it narrow and let it write only things a person can undo.** The recipe for workflows 7, 8 and 9:',
    },
    {
      type: 'list',
      items: [
        '**Do the essential actions first.** If the request fails (a Fail setting, an unexpected response code or a timeout), [the run fails and later actions do not run](https://help.shopify.com/en/manual/shopify-flow/reference/actions/send-http-request). Tag and notify before you ask a model anything.',
        '**Call your own endpoint, not the model directly.** Send HTTP request needs a URL, headers and a body. An endpoint you control holds the prompt, the validation and the logs in one place, and you can change the model without touching Flow.',
        '**Keep the key in a secret.** Flow stores secrets on its Settings page, [hides them in the interface and redacts them from run logs](https://help.shopify.com/en/manual/shopify-flow/reference/actions/send-http-request). Creating a secret or turning on a workflow that uses one needs the [Manage connections and secrets permission](https://help.shopify.com/en/manual/shopify-flow/reference/actions/send-http-request).',
        '**Send only what the model needs.** For an order note, send the note, not the name, email or address. Customer text can contain personal data, so read your provider’s data terms. The risks are in [AI agent security on Shopify](/blog/ai-agent-security-shopify).',
        '**Ask for a closed list and JSON.** Something like: “Classify this note into one label from this list: gift message, address change, delivery request, other. Reply with JSON only: {"label": "..."}.” A closed list is easy to check; a free sentence is not.',
        '**Validate in Run code.** Parse the body with JSON.parse, and if the label is not in your list, return “other”. Never trust the reply to be well formed.',
        '**Choose the error settings on purpose.** [Retry keeps trying for up to 24 hours](https://help.shopify.com/en/manual/shopify-flow/reference/actions/send-http-request) on 5XX and 429 responses. For a label that would arrive a day late, Ignore is the better choice.',
        '**Keep your tag vocabulary small.** Shopify warns that [conditions on tags may fail past 250 tags](https://help.shopify.com/en/manual/shopify-flow/create-workflow) on one order, product or customer, and that some order fields fill in later, so test before you turn the workflow on.',
      ],
    },
    { type: 'h2', text: 'What should never be a Flow workflow with AI inside?' },
    {
      type: 'paragraph',
      text: '**Never let a workflow with an AI step spend money, cancel, refund or write to a customer on its own.** All four are irreversible or visible. Shopify’s own templates do automate payment capture and cancellation, but they act on the risk signal Shopify computes, for example Capture payment if the order is not high-risk and Cancel and restock high-risk orders, not on a model’s guess.',
    },
    {
      type: 'paragraph',
      text: 'The safe verbs for an AI step are tag, note, draft and notify. If you catch yourself wanting more, you have found a task that probably needs an agent with proper tools and limits, not a longer workflow. That is a build in its own right, and it starts with [how to build an AI agent for your store](/blog/build-ai-agent-shopify).',
    },
    { type: 'h2', text: 'Does your store data support these workflows?' },
    {
      type: 'paragraph',
      text: '**Flow acts on what the store already knows: tags, metafields, statuses and inventory, so messy data gives messy automations.** If two tags mean the same thing, or half the products have no type, every condition above misfires. This is why we map data in detail during a migration. The [Shopify Launch Sprint](/shopify-migration-sprint) moves your store to Shopify in 14 days with our Custom AI System, and tags, metafields and product data are mapped before launch, which is the groundwork your future rules need.',
    },
    {
      type: 'paragraph',
      text: 'If you are still on another platform, the [Shopify migration guide](/shopify-migration) shows what moves and how, and [Nazzi’s migration from WooCommerce](/use-cases/integratori-nazzi-dtc-shopify) is here. The rule is the same everywhere: decide which tags and fields will carry your rules before the first order arrives. Flow is the easy part afterwards.',
    },
    { type: 'h2', text: 'Where do you start this week?' },
    {
      type: 'paragraph',
      text: '**Start with the workflow that watches the others, then add one rule per day.**',
    },
    {
      type: 'list',
      items: [
        'Install Flow from the Shopify App Store and give the right staff Flow permissions.',
        'Build workflow 10 (Workflow error occurred) so failures reach a human.',
        'Add the low-stock alert and the risky order triage, and read the first week of run logs.',
        'Build workflow 7 with a closed list of labels, and review the labels by hand for two weeks before you trust it.',
        'Write down the tasks where you kept saying “it depends”. They are your list for an agent.',
      ],
    },
    { type: 'h2', text: 'Frequently asked questions' },
    { type: 'h3', text: 'What is Shopify Flow?' },
    {
      type: 'paragraph',
      text: 'Shopify Flow is a free automation app that watches your store for an event (the trigger), checks a condition and then runs one or more actions. It is built for fixed rules, not open-ended decisions.',
    },
    { type: 'h3', text: 'Is Shopify Flow free, and which plans have it?' },
    {
      type: 'paragraph',
      text: 'Yes, on Basic, Grow, Advanced and Plus. Send HTTP request needs Grow, Advanced or Plus, and tasks from custom partner apps need Plus.',
    },
    { type: 'h3', text: 'Does Shopify Flow have AI?' },
    {
      type: 'paragraph',
      text: 'Not as an action: Shopify’s actions reference lists none as of 29 October 2026. Sidekick builds workflows, and Send HTTP request calls an outside model.',
    },
    { type: 'h3', text: 'Can Sidekick build a Flow workflow?' },
    {
      type: 'paragraph',
      text: 'Yes, on desktop. The workflow comes out inactive, so you test it and turn it on yourself.',
    },
    { type: 'h3', text: 'Can Shopify Flow call ChatGPT or Claude?' },
    {
      type: 'paragraph',
      text: 'Yes, through Send HTTP request, with a 30-second wait at most. Run code reads the reply but cannot make network calls.',
    },
    { type: 'h3', text: 'When do I need an agent instead of a workflow?' },
    {
      type: 'paragraph',
      text: 'When you cannot write every branch in advance. If a fixed rule solves it, use Flow.',
    },
    {
      type: 'paragraph',
      text: 'If your store is already live, the [AI Accelerator](/ai-accelerator) is 30 days one-to-one: we analyze your processes with you and switch on up to two quick wins together. If you are changing platform, the Sprint comes first.',
    },
    {
      type: 'paragraph',
      text: 'The [Shopify Launch Sprint](/shopify-migration-sprint) moves your store to Shopify in 14 days with our Custom AI System: a fixed calendar, a public price and 4 written guarantees.',
    },
  ],
  contentIt: [
    {
      type: 'paragraph',
      text: '**Gli esempi di Shopify Flow che funzionano sono noiosi di proposito: un trigger, una condizione, un’azione, nessuna sorpresa.** Qui sotto ne trovi dieci da copiare, con i nomi esatti di trigger e azioni dalla documentazione di Shopify, e tre in cui un passaggio AI si guadagna il posto. Prima la regola che decide se ti serve Flow o qualcosa di più grande.',
    },
    {
      type: 'paragraph',
      text: 'Siamo noprob agency. Costruiamo store Shopify e lavoriamo ogni giorno con agenti AI costruiti su Claude Code. L’errore che costa di più nelle automazioni di uno store è sbagliare forma: un agente dove bastava un workflow. Questa guida è la metà economica di quella scelta, controllata sul centro assistenza di Shopify il 29 ottobre 2026.',
    },
    { type: 'h2', text: 'Quando basta un workflow di Shopify Flow e quando serve un agente?' },
    {
      type: 'paragraph',
      text: '**Un workflow basta quando puoi scrivere ogni percorso prima della prima esecuzione. Serve un agente quando il passo successivo dipende da quello che ha trovato il precedente.** Anthropic traccia la stessa linea in [Building effective agents](https://www.anthropic.com/engineering/building-effective-agents): i workflow seguono percorsi fissati in anticipo dal codice, gli agenti decidono da soli i passi e l’uso degli strumenti. Il suo consiglio è cercare “the simplest solution possible” e aggiungere complessità solo quando serve.',
    },
    {
      type: 'paragraph',
      text: 'Flow sta dalla parte dei workflow. Ha un trigger, condizioni con un ramo True e uno False, e azioni. Metti un modello dentro un passaggio e resta un workflow, perché le strade le hai disegnate tu. La mia regola: parti dal workflow e fai guadagnare all’agente il suo posto. Quattro domande lo decidono in un minuto:',
    },
    {
      type: 'list',
      items: [
        '**Riesci a scrivere ogni ramo prima della prima esecuzione?** Se sì, è Flow. Se continui a scrivere “dipende”, non lo è.',
        '**L’input è un campo o una frase?** Stato, totale, tag e quantità sono campi: basta una condizione. Una nota in testo libero è una frase: un modello può darle un’etichetta, restando dentro un workflow.',
        '**Quanto costa una decisione sbagliata?** Se in gioco ci sono soldi, magazzino o la fiducia di un cliente, approva una persona. Tag, note e bozze possono sbagliare senza costare nulla.',
        '**Il passo successivo dipende da ciò che scopri strada facendo?** Cercare l’ordine, leggere la policy dei resi e poi decidere cosa dire: quello è un agente.',
      ],
    },
    {
      type: 'paragraph',
      text: 'Taggare un cliente VIP è un workflow. “Dov’è il mio ordine?” no: servono l’ordine, lo stato della spedizione e la policy prima di poter rispondere, ed è lavoro da agente (ne parliamo in [assistente AI per ordini e resi su Shopify](/it/blog/assistente-ai-ordini-resi-shopify)). La maggior parte degli store ha bisogno di entrambi: workflow per tutto ciò che ha una forma fissa, un agente per le conversazioni. La mappa completa è in [agenti AI per Shopify: chatbot, workflow o agente](/it/blog/agenti-ai-shopify).',
    },
    { type: 'h2', text: 'Dove entra l’AI dentro Shopify Flow?' },
    {
      type: 'paragraph',
      text: '**Flow non ha un’azione AI propria, quindi l’AI entra da tre porte.** Il 29 ottobre 2026 abbiamo letto il [riferimento delle azioni](https://help.shopify.com/en/manual/shopify-flow/reference/actions) di Shopify: elenca decine di azioni, da Add order tags a Wait, e nessuna è un’azione AI. Quello che esiste:',
    },
    {
      type: 'list',
      items: [
        '**Sidekick costruisce il workflow.** Apri Flow, clicca l’icona di Sidekick e descrivi l’automazione a parole. Secondo l’[aiuto di Shopify](https://help.shopify.com/en/manual/shopify-flow/create-workflow) funziona solo da desktop, il risultato è inattivo per impostazione predefinita e col tag “sidekick”, e Sidekick potrebbe omettere la logica specifica della tua attività nei workflow complessi: rivedi e testa prima di attivare. Shopify l’ha annunciato l’11 dicembre 2025 nel [changelog](https://changelog.shopify.com/posts/create-flow-automations-with-sidekick). Cosa fa Sidekick nel resto dell’admin lo trovi in [Shopify Magic e Sidekick](/it/blog/shopify-magic-sidekick).',
        '**Send HTTP request chiama un modello.** L’[azione](https://help.shopify.com/en/manual/shopify-flow/reference/actions/send-http-request) manda una richiesta a un URL qualsiasi: metodo, header, corpo. Flow aspetta al massimo 30 secondi e la risposta torna in una variabile da usare nei passi successivi. È l’unica porta verso un modello esterno.',
        '**Run code dà forma alla risposta.** L’[azione](https://help.shopify.com/en/manual/shopify-flow/reference/actions/run-code) esegue JavaScript con un limite di 5 secondi e senza accesso alla rete, quindi non può chiamare un modello da sola. Serve a leggere la risposta e trasformarla in valori puliti. La quarta porta conta più delle altre: una persona che legge quello che ha scritto l’AI.',
      ],
    },
    { type: 'h2', text: 'Quali piani Shopify includono Flow e i passaggi AI?' },
    {
      type: 'paragraph',
      text: '**Flow è gratuito su Basic, Grow, Advanced e Plus, ma l’azione che raggiunge un modello non c’è su Basic.** Secondo la [pagina di aiuto di Flow](https://help.shopify.com/en/manual/shopify-flow):',
    },
    {
      type: 'list',
      items: [
        '**Flow in sé:** app gratuita su Basic, Grow, Advanced e Plus. Lo staff ha bisogno dei permessi di Flow per attivare i workflow.',
        '**Send HTTP request:** Grow, Advanced e Plus. Su Basic, Flow non ha un modo suo per chiamare un modello esterno.',
        '**Sidekick che costruisce workflow:** solo da desktop, sui piani che hanno Flow.',
        '**Attività create da app partner personalizzate:** solo Plus.',
        '**Limiti di utilizzo:** variano per piano e seguono i limiti API di Shopify.',
        '**Lingua:** la [pagina di Flow](https://www.shopify.com/flow) dice che l’app è disponibile solo in inglese, un dettaglio che conta per chi leggerà i log delle esecuzioni.',
      ],
    },
    { type: 'h2', text: 'Quali esempi di Shopify Flow puoi copiare oggi?' },
    {
      type: 'paragraph',
      text: '**Dieci workflow coprono quasi tutto ciò che a uno store serve da Flow nel primo mese.** Li costruisci a mano da Apps, Flow, Create workflow, oppure parti dalla libreria dei template: Browse templates, ne scegli uno, lo controlli e clicchi Install. I template hanno dati segnaposto, quindi cambia tag e destinatari prima di attivarli. La documentazione per sviluppatori di Shopify dice che la libreria ha centinaia di [template](https://shopify.dev/docs/apps/build/flow/templates). I nomi qui sotto vengono dai riferimenti di [trigger](https://help.shopify.com/en/manual/shopify-flow/reference/triggers) e [azioni](https://help.shopify.com/en/manual/shopify-flow/reference/actions). Tre hanno un passaggio AI e finiscono in un tag, in una nota o in un campo bozza; gli altri sette lavorano su campi e tag, quindi di proposito non hanno un modello.',
    },
    {
      type: 'table',
      headers: ['Workflow', 'Trigger', 'Condizione', 'Azione', 'Passaggio AI'],
      rows: [
        [
          '**1. Tag VIP**',
          'Order paid.',
          'Totale dell’ordine sopra la soglia che scegli.',
          'Add customer tags (“vip”).',
          'Nessuno. Un prompt come “tagga come VIP i clienti che fanno un ordine sopra 200 dollari” è anche l’esempio che Shopify stessa usa per mostrare [Sidekick che costruisce un flusso](https://www.shopify.com/blog/flow-automation-updates-2025).',
        ],
        [
          '**2. Avviso scorte basse**',
          'Product variant inventory quantity changed.',
          'Quantità pari o sotto la soglia e quantità precedente sopra, così ricevi una sola email e non una per ogni vendita.',
          'Send internal email.',
          'Nessuno.',
        ],
        [
          '**3. Nascondi e ripubblica**',
          'Product variant out of stock.',
          'Il prodotto non ha più nulla da vendere.',
          'Unpublish product. Il workflow speculare parte da Product variant back in stock e finisce con Publish product.',
          'Nessuno.',
        ],
        [
          '**4. Smistamento ordini a rischio**',
          'Order risk analyzed.',
          'La raccomandazione di rischio è Cancel o Investigate.',
          'Add order tags, Hold fulfillment order, Send internal email.',
          'Nessuno, di proposito. Se annullare lo decide una persona.',
        ],
        [
          '**5. Reso richiesto**',
          'Return requested.',
          'Il cliente ha il tag “vip” del workflow 1.',
          'Add order tags (“return-open”), Send internal email all’assistenza con priorità.',
          'Nessuno.',
        ],
        [
          '**6. Pagamento dell’abbonamento fallito**',
          'Subscription billing attempt failure.',
          '-',
          'Add customer tags (“payment-failed”), Send internal email.',
          'Nessuno. Solo per store con abbonamenti.',
        ],
        [
          '**7. Smistamento della nota d’ordine**',
          'Order created.',
          'La nota dell’ordine è Not empty and exists.',
          'Prima Add order tags (“note-to-read”) e Send internal email, poi Send HTTP request con la nota, Run code per leggere la risposta, Add order tags con l’etichetta.',
          'Ordina la nota in un elenco chiuso, per esempio messaggio regalo, cambio indirizzo, richiesta di consegna, altro.',
        ],
        [
          '**8. Bozza di testo per un nuovo prodotto**',
          'Product created.',
          'La descrizione è Empty or does not exist.',
          'Add product tags (“needs-copy”), Send HTTP request con titolo, tipo e attributi, Run code, Update product metafield (un campo bozza).',
          'Scrive una bozza che una persona legge e incolla. Non pubblica mai. Vale la regola di Sidekick: dati puliti in ingresso, revisione umana in uscita.',
        ],
        [
          '**9. Cliente che si allontana**',
          'Customer joined segment (un segmento che hai creato per i clienti che non ordinano da un po’).',
          '-',
          'Add customer tags, Send HTTP request, Run code, Update customer note, Send internal email.',
          'Scrive una bozza di messaggio nella nota del cliente. La invia, o non la invia, la persona che conosce il cliente.',
        ],
        [
          '**10. Controlla i tuoi workflow**',
          'Workflow error occurred.',
          '-',
          'Send internal email, oppure Send Shopify alert for errors.',
          'Nessuno. Costruiscilo per primo. La [pagina degli esempi](https://help.shopify.com/en/manual/shopify-flow/getting-started/workflow-examples) di Shopify elenca template per entrambi.',
        ],
      ],
    },
    { type: 'h2', text: 'Come aggiungi un passaggio AI a un workflow di Flow senza romperlo?' },
    {
      type: 'paragraph',
      text: '**Metti il passaggio AI per ultimo, tienilo stretto e fagli scrivere solo cose che una persona può annullare.** La ricetta per i workflow 7, 8 e 9:',
    },
    {
      type: 'list',
      items: [
        '**Fai prima le azioni essenziali.** Se la richiesta fallisce (impostazione Fail, codice di risposta inatteso o timeout), [l’esecuzione fallisce e le azioni successive non partono](https://help.shopify.com/en/manual/shopify-flow/reference/actions/send-http-request). Tagga e avvisa prima di chiedere qualcosa a un modello.',
        '**Chiama un tuo endpoint, non il modello direttamente.** Send HTTP request vuole URL, header e corpo. Un endpoint che controlli tu tiene prompt, validazione e log in un posto solo, e puoi cambiare modello senza toccare Flow.',
        '**Tieni la chiave in un secret.** Flow conserva i secret nella pagina Settings, [li nasconde nell’interfaccia e li oscura nei log delle esecuzioni](https://help.shopify.com/en/manual/shopify-flow/reference/actions/send-http-request). Creare un secret o attivare un workflow che lo usa richiede il [permesso Manage connections and secrets](https://help.shopify.com/en/manual/shopify-flow/reference/actions/send-http-request).',
        '**Manda solo ciò che serve al modello.** Per una nota d’ordine manda la nota, non nome, email o indirizzo. Il testo dei clienti può contenere dati personali, quindi leggi i termini sui dati del tuo fornitore. I rischi sono in [sicurezza degli agenti AI su Shopify](/it/blog/sicurezza-agenti-ai-shopify).',
        '**Chiedi un elenco chiuso e JSON.** Per esempio: “Classifica questa nota con una sola etichetta di questo elenco: messaggio regalo, cambio indirizzo, richiesta di consegna, altro. Rispondi solo con JSON: {"label": "..."}.” Un elenco chiuso si controlla; una frase libera no.',
        '**Valida in Run code.** Leggi il corpo con JSON.parse e, se l’etichetta non è nel tuo elenco, restituisci “altro”. Non fidarti mai che la risposta sia ben formata.',
        '**Scegli le impostazioni di errore con cura.** [Retry riprova fino a 24 ore](https://help.shopify.com/en/manual/shopify-flow/reference/actions/send-http-request) sulle risposte 5XX e 429. Per un’etichetta che arriverebbe con un giorno di ritardo, meglio Ignore.',
        '**Tieni piccolo il vocabolario dei tag.** Shopify avverte che le [condizioni sui tag possono fallire oltre i 250 tag](https://help.shopify.com/en/manual/shopify-flow/create-workflow) su un ordine, un prodotto o un cliente, e che alcuni campi dell’ordine si riempiono dopo, quindi prova prima di attivare il workflow.',
      ],
    },
    { type: 'h2', text: 'Cosa non deve mai essere un workflow di Flow con l’AI dentro?' },
    {
      type: 'paragraph',
      text: '**Non lasciare mai che un workflow con un passaggio AI spenda soldi, annulli, rimborsi o scriva a un cliente da solo.** Tutte e quattro le cose sono irreversibili o visibili. I template di Shopify automatizzano davvero incasso e annullamento, ma agiscono sul segnale di rischio calcolato da Shopify, per esempio Capture payment if the order isn’t high-risk e Cancel and restock high-risk orders, non sull’intuizione di un modello.',
    },
    {
      type: 'paragraph',
      text: 'I verbi sicuri per un passaggio AI sono taggare, annotare, preparare una bozza, avvisare. Se ti accorgi di volerne di più, hai trovato un compito che probabilmente richiede un agente con strumenti e limiti fatti bene, non un workflow più lungo. È un progetto a parte, e parte da [come creare un agente AI per il tuo store](/it/blog/creare-agente-ai-shopify).',
    },
    { type: 'h2', text: 'I dati del tuo store reggono questi workflow?' },
    {
      type: 'paragraph',
      text: '**Flow agisce su ciò che lo store già sa: tag, metafield, stati e inventario, quindi dati disordinati danno automazioni disordinate.** Se due tag significano la stessa cosa, o metà dei prodotti non ha un tipo, ogni condizione qui sopra sbaglia. Per questo mappiamo i dati nel dettaglio durante una migrazione. Lo [Shopify Launch Sprint](/it/sprint-migrazione-shopify) porta il tuo store su Shopify in 14 giorni con il nostro Custom AI System, e tag, metafield e dati prodotto sono mappati prima del lancio: è il terreno su cui poggiano le regole che scriverai.',
    },
    {
      type: 'paragraph',
      text: 'Se sei ancora su un’altra piattaforma, la [guida alla migrazione a Shopify](/it/migrazione-shopify) spiega cosa si sposta e come, e [la migrazione di Nazzi da WooCommerce](/it/casi-studio/integratori-nazzi-dtc-shopify) è qui. La regola vale ovunque: decidi quali tag e campi porteranno le tue regole prima che arrivi il primo ordine. Flow è la parte facile, dopo.',
    },
    { type: 'h2', text: 'Da dove parti questa settimana?' },
    {
      type: 'paragraph',
      text: '**Parti dal workflow che controlla gli altri, poi aggiungi una regola al giorno.**',
    },
    {
      type: 'list',
      items: [
        'Installa Flow dallo Shopify App Store e dai i permessi di Flow allo staff giusto.',
        'Costruisci il workflow 10 (Workflow error occurred), così gli errori arrivano a una persona.',
        'Aggiungi l’avviso scorte basse e lo smistamento degli ordini a rischio, e leggi i log della prima settimana.',
        'Costruisci il workflow 7 con un elenco chiuso di etichette e rivedi le etichette a mano per due settimane prima di fidarti.',
        'Segna i compiti in cui continuavi a dire “dipende”. Sono la tua lista per un agente.',
      ],
    },
    { type: 'h2', text: 'Domande frequenti' },
    { type: 'h3', text: 'Cos’è Shopify Flow?' },
    {
      type: 'paragraph',
      text: 'Shopify Flow è un’app di automazione gratuita che aspetta un evento nel tuo store (il trigger), verifica una condizione e poi esegue una o più azioni. È fatta per regole fisse, non per decisioni aperte.',
    },
    { type: 'h3', text: 'Shopify Flow è gratis e su quali piani c’è?' },
    {
      type: 'paragraph',
      text: 'Sì, su Basic, Grow, Advanced e Plus. Send HTTP request richiede Grow, Advanced o Plus, e le attività di app partner personalizzate richiedono Plus.',
    },
    { type: 'h3', text: 'Shopify Flow ha l’AI?' },
    {
      type: 'paragraph',
      text: 'Non come azione: al 29 ottobre 2026 il riferimento delle azioni di Shopify non ne elenca. Sidekick costruisce workflow e Send HTTP request chiama un modello esterno.',
    },
    { type: 'h3', text: 'Sidekick può costruire un workflow di Flow?' },
    {
      type: 'paragraph',
      text: 'Sì, da desktop. Il workflow esce inattivo, quindi lo provi e lo attivi tu.',
    },
    { type: 'h3', text: 'Shopify Flow può chiamare ChatGPT o Claude?' },
    {
      type: 'paragraph',
      text: 'Sì, con Send HTTP request, che aspetta al massimo 30 secondi. Run code legge la risposta ma non può fare chiamate di rete.',
    },
    { type: 'h3', text: 'Quando mi serve un agente al posto di un workflow?' },
    {
      type: 'paragraph',
      text: 'Quando non riesci a scrivere ogni ramo in anticipo. Se una regola fissa risolve il problema, usa Flow.',
    },
    {
      type: 'paragraph',
      text: 'Se il tuo store è già online, l’[AI Accelerator](/it/ai-accelerator) sono 30 giorni one-to-one: analizziamo con te i processi e attiviamo insieme fino a 2 quick win. Se stai cambiando piattaforma, prima viene lo Sprint.',
    },
    {
      type: 'paragraph',
      text: 'Lo [Shopify Launch Sprint](/it/sprint-migrazione-shopify) porta il tuo store su Shopify in 14 giorni con il nostro Custom AI System: calendario fisso, prezzo pubblico e 4 garanzie scritte.',
    },
  ],
  faqEn: [
    {
      question: 'What is Shopify Flow?',
      answer:
        'Shopify Flow is a free automation app from Shopify. It watches your store for an event (the trigger), checks a condition and then performs one or more actions, inside Shopify or in connected apps. It is built for fixed rules, not open-ended decisions.',
    },
    {
      question: 'Is Shopify Flow free, and which plans have it?',
      answer:
        'Yes. Shopify says Flow is free and available on Basic, Grow, Advanced and Plus. The Send HTTP request action needs Grow, Advanced or Plus, and tasks created by custom partner apps need Plus.',
    },
    {
      question: 'Does Shopify Flow have AI?',
      answer:
        'Not as an action. Sidekick can build a workflow from your description, and you can call an outside model with Send HTTP request on Grow, Advanced and Plus. As of 29 October 2026, Shopify’s actions reference lists no AI action.',
    },
    {
      question: 'Can Sidekick build a Flow workflow?',
      answer:
        'Yes, on desktop. Describe the automation in Flow and Sidekick builds a trigger, conditions and actions. The workflow is inactive by default, so you test it and turn it on yourself, and complex logic often needs a manual fix.',
    },
    {
      question: 'Can Shopify Flow call ChatGPT or Claude?',
      answer:
        'It can call any model that has a web endpoint through Send HTTP request: you set the URL, headers and body and use the reply in later steps. Flow waits 30 seconds at most, and Run code cannot make network calls, so the reply is read there, not fetched there.',
    },
    {
      question: 'When do I need an agent instead of a workflow?',
      answer:
        'When you cannot write every branch in advance because the next step depends on what the previous one found, such as looking up an order and then choosing what to say. If a fixed rule solves it, use Flow.',
    },
  ],
  faqIt: [
    {
      question: 'Cos’è Shopify Flow?',
      answer:
        'Shopify Flow è un’app di automazione gratuita di Shopify. Controlla il tuo store in attesa di un evento (il trigger), verifica una condizione e poi esegue una o più azioni, dentro Shopify o nelle app collegate. È fatta per regole fisse, non per decisioni aperte.',
    },
    {
      question: 'Shopify Flow è gratis e su quali piani c’è?',
      answer:
        'Sì. Shopify dice che Flow è gratuito e disponibile su Basic, Grow, Advanced e Plus. L’azione Send HTTP request richiede Grow, Advanced o Plus, e le attività create da app partner personalizzate richiedono Plus.',
    },
    {
      question: 'Shopify Flow ha l’AI?',
      answer:
        'Non come azione. Sidekick può costruire un workflow dalla tua descrizione, e puoi chiamare un modello esterno con Send HTTP request su Grow, Advanced e Plus. Al 29 ottobre 2026 il riferimento delle azioni di Shopify non elenca nessuna azione AI.',
    },
    {
      question: 'Sidekick può costruire un workflow di Flow?',
      answer:
        'Sì, da desktop. Descrivi l’automazione in Flow e Sidekick costruisce trigger, condizioni e azioni. Il workflow è inattivo per impostazione predefinita, quindi lo provi e lo attivi tu, e la logica complessa richiede spesso una correzione a mano.',
    },
    {
      question: 'Shopify Flow può chiamare ChatGPT o Claude?',
      answer:
        'Può chiamare qualsiasi modello con un endpoint web tramite Send HTTP request: imposti URL, header e corpo e usi la risposta nei passi successivi. Flow aspetta al massimo 30 secondi e Run code non può fare chiamate di rete, quindi la risposta si legge lì, non si scarica lì.',
    },
    {
      question: 'Quando mi serve un agente al posto di un workflow?',
      answer:
        'Quando non riesci a scrivere ogni ramo in anticipo, perché il passo successivo dipende da ciò che ha trovato il precedente, per esempio cercare un ordine e poi scegliere cosa dire. Se una regola fissa risolve il problema, usa Flow.',
    },
  ],
}

export default article
