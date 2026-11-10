import type { Locale } from '@/lib/i18n'

/**
 * Copy module for the "AI Agents for eCommerce" landing page.
 * Routes: en -> /ai-agents-for-ecommerce, it -> /it/agenti-ai-per-ecommerce.
 *
 * Offer decided by Antonio (D-79): no price, CTA to a call. Two paths: one agent
 * integrated in the store, or the whole store set up so agents can monitor
 * sales, ads, stock, customer support and SEO. Not the Shopify Launch Sprint and
 * not the AI Accelerator (30-day program that finds and ranks opportunities).
 *
 * Facts used (docs/dati-verificati.md): chatbot / workflow / agent distinction
 * (Anthropic, Building effective agents), human approval for irreversible
 * actions and excessive agency (OWASP), and Antonio's statement that noprob
 * works every day with AI agents built on Claude Code and that the site is
 * developed and maintained with agents. No figures, no clients, no results.
 *
 * Markdown links `[text](/path)` are allowed in string values. EN leads, IT is
 * the same content adapted (house style IT: "videochiamata", no "business").
 */

export type AgentsCopy = {
  hero: {
    eyebrow: string
    h1: string
    paragraph: string
    ctaPrimary: string
    ctaSecondary: string
  }
  contrast: {
    heading: string
    intro: string
    rows: { label: string; does: string; limit: string }[]
  }
  paths: {
    heading: string
    intro: string
    items: { title: string; body: string; bullets: string[] }[]
  }
  monitors: {
    heading: string
    intro: string
    items: { area: string; watches: string; flags: string; yourCall: string }[]
  }
  method: {
    heading: string
    steps: { title: string; body: string }[]
  }
  control: { heading: string; body: string; bullets: string[] }
  proof: { heading: string; body: string }
  faq: { heading: string; items: { q: string; a: string }[] }
  finalCta: { heading: string; body: string; button: string; secondary: string }
}

const en: AgentsCopy = {
  hero: {
    eyebrow: 'AI agents for eCommerce',
    h1: 'AI agents for eCommerce, built into your store',
    paragraph:
      'We build AI agents for eCommerce brands in two ways: we integrate one agent into your store, or we set up your whole store so agents can watch sales, ads, stock, customer support and SEO. It is custom work on your data, your access and your rules, not a chatbot sold off the shelf.',
    ctaPrimary: 'Book a call',
    ctaSecondary: 'See the two ways we work',
  },
  contrast: {
    heading: 'Chatbot, workflow or AI agent: what are you actually buying?',
    intro:
      'The question that tells them apart is whether the path is already written. Anthropic draws the same line in [Building effective agents](https://www.anthropic.com/engineering/building-effective-agents): workflows run through predefined code paths, agents direct their own process and tool use. Most store tasks need the simplest form that works, so we start there.',
    rows: [
      {
        label: 'Chatbot',
        does: 'Answers questions from the text it was given: your policies, your FAQ, your product pages.',
        limit:
          'It does not look at the order, so it cannot tell a customer where their package is.',
      },
      {
        label: 'Workflow',
        does: 'Follows paths drawn in advance: a trigger, conditions, actions. [Shopify Flow](https://help.shopify.com/en/manual/shopify-flow) works this way.',
        limit:
          'It handles the cases someone foresaw. Anything outside the diagram goes to a person.',
      },
      {
        label: 'AI agent',
        does: 'Gets a goal and tools on your store data, then chooses its next step from what it finds.',
        limit:
          'It needs defined access, a narrow task and a person on the actions that matter. That is the part we build.',
      },
    ],
  },
  paths: {
    heading: 'Two ways to work with us',
    intro:
      'Both start from your store, not from a template. We look at your data, your access and who is responsible for what, then we build the version that fits.',
    items: [
      {
        title: 'Integrate an agent into your store',
        body: 'We take one job in your store and build an agent that does it, connected to your data and to the people who own the outcome.',
        bullets: [
          'One defined task, for example order questions, returns, catalog cleanup or reporting',
          'Connected to your store with only the access that task needs',
          'Instructions, tools, a place to keep state and rules for when it stops',
          'A handoff to your team, with the context attached, when it does not know',
        ],
      },
      {
        title: 'Set up the whole store for agents',
        body: 'An agent can only watch what it can read. We organize your store so agents can see everything that matters, in one picture: sales, ads, stock, customer support and SEO.',
        bullets: [
          'Your sources connected, with read access',
          'Tracking and data checked and mapped, so what the agents see is right',
          'For each area, a definition of what is normal and what to flag',
          'A base you can add agents to, one at a time',
        ],
      },
    ],
  },
  monitors: {
    heading: 'What agents can watch across your store',
    intro:
      'With the store set up for it, agents keep an eye on the areas that take your team the most attention. They report and flag. The decision stays with you.',
    items: [
      {
        area: 'Sales',
        watches:
          'Orders, revenue, conversion and product performance against your own recent pattern.',
        flags:
          'A drop or a spike that does not fit the pattern, with the likely place to look.',
        yourCall: 'What to do about it.',
      },
      {
        area: 'Ads',
        watches: 'Spend, campaigns and results across your ad accounts.',
        flags:
          'Spend running with no matching orders, campaigns that stopped delivering.',
        yourCall: 'Budgets and campaign changes.',
      },
      {
        area: 'Stock',
        watches: 'Inventory levels and sell-through by product and variant.',
        flags:
          'Best sellers running low, products about to go out of stock, stock that is not moving.',
        yourCall: 'Reorders and pricing.',
      },
      {
        area: 'Customer support',
        watches: 'Incoming tickets and messages, with the order behind each one.',
        flags:
          'Repeated complaints about one product, requests that need a person, messages waiting too long.',
        yourCall: 'Refunds and anything promised to a customer.',
      },
      {
        area: 'SEO',
        watches:
          'Indexing, page titles, redirects and the pages that bring in search traffic.',
        flags:
          'Pages dropping out of the index, broken redirects, products with missing metadata.',
        yourCall: 'What gets published.',
      },
    ],
  },
  method: {
    heading: 'How we build AI agents for your store',
    steps: [
      {
        title: 'Access and data first',
        body: 'We start from your store: which systems hold the data, who owns each access, and what every agent is allowed to see.',
      },
      {
        title: 'One defined task',
        body: 'Each agent gets one job and a clear definition of done. A narrow task is easier to test and easier to trust.',
      },
      {
        title: 'Read-only before anything else',
        body: 'The agent starts with read access. We compare what it reports with what you know is true, before it can change anything.',
      },
      {
        title: 'Approvals where it matters',
        body: 'Every action that changes something gets an approval step. Together we decide which actions run alone and which wait for a person.',
      },
      {
        title: 'Delivery your team can run',
        body: 'You receive the setup, the instructions, the list of accesses and a way to review what the agent did, so everyone knows who is responsible for what.',
      },
    ],
  },
  control: {
    heading: 'A person approves what cannot be undone',
    body: 'OWASP names [excessive agency](https://genai.owasp.org/llmrisk/llm062025-excessive-agency/) (too many tools, too many permissions, too much autonomy) as a risk for AI systems, and its [AI Agent Security Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/AI_Agent_Security_Cheat_Sheet.html) calls for human approval on high-impact and irreversible actions. Our approach follows the same principle. More in [AI agent security for Shopify](/blog/ai-agent-security-shopify).',
    bullets: [
      'Only the tools the task needs',
      'The narrowest permissions that work, read-only to begin with',
      'Refunds, discounts, price changes and promises to customers wait for a person',
      'When the agent does not know, it hands over to your team with the context attached',
    ],
  },
  proof: {
    heading: 'We work with agents every day',
    body: 'noprob works every day with AI agents built on Claude Code, and this site is developed and maintained with agents. We bring that day-to-day practice to your store. For the thinking behind the three forms, read our guide to [AI agents for Shopify](/blog/ai-agents-for-shopify).',
  },
  faq: {
    heading: 'AI agents for eCommerce: questions we get asked',
    items: [
      {
        q: 'How much does an AI agent for eCommerce cost?',
        a: 'There is no price list, because the work depends on your store: the data, the access and the task. We define scope and cost on a call, after we have seen your store.',
      },
      {
        q: 'Is it a chatbot?',
        a: 'No. A chatbot answers from the text it was given. An agent has a goal and tools on your store data and chooses its next step from what it finds. We also tell you when a simple workflow does the job better, because the simplest form that works is the right one.',
      },
      {
        q: 'Does the agent act without approval?',
        a: 'Not on anything that cannot be undone. Refunds, discounts, price changes and promises to customers wait for a person. Agents start read-only, and together we decide which actions, if any, run on their own.',
      },
      {
        q: 'Do we need to be on Shopify?',
        a: 'We build on Shopify first. If your store runs on another platform, tell us on the call and we will say what is possible on your setup. If you are thinking about moving to Shopify, that is a separate project: the [Shopify Launch Sprint](/shopify-migration-sprint).',
      },
      {
        q: 'How is this different from the AI Accelerator?',
        a: 'The [AI Accelerator](/ai-accelerator) is a 30-day program that finds and ranks the AI opportunities in your store. This page is about building and integrating: an agent in your store, or the whole store set up for agents. They fit together, and you can do either one without the other.',
      },
      {
        q: 'What do you need from us?',
        a: 'A call to look at your store, access to the systems the agent will use, and one person on your side who owns the outcome. We handle the setup, the build and the handover.',
      },
      {
        q: 'Which area should we start with?',
        a: 'The one where your team spends the most repetitive attention: usually customer support, reporting or stock. We pick it together on the call and start with one task.',
      },
    ],
  },
  finalCta: {
    heading: 'Tell us which task you want off your team’s plate',
    body: 'On the call we look at your store, pick the first task and tell you which of the two ways fits. No template, no package: a plan for your store.',
    button: 'Book a call',
    secondary:
      'Want the background first? Read [AI agents for Shopify](/blog/ai-agents-for-shopify).',
  },
}

const it: AgentsCopy = {
  hero: {
    eyebrow: 'Agenti AI per eCommerce',
    h1: 'Agenti AI per eCommerce, costruiti dentro il tuo store',
    paragraph:
      'Costruiamo agenti AI per brand eCommerce in due modi: integriamo un agente nel tuo store, oppure impostiamo l’intero store perché gli agenti possano tenere d’occhio vendite, ads, stock, customer care e SEO. È lavoro su misura, sui tuoi dati, sui tuoi accessi e sulle tue regole, non un chatbot venduto a pacchetto.',
    ctaPrimary: 'Prenota una videochiamata',
    ctaSecondary: 'Vedi le due strade',
  },
  contrast: {
    heading: 'Chatbot, workflow o agente AI: cosa stai comprando davvero?',
    intro:
      'La domanda che li distingue è se il percorso è già scritto. Anthropic traccia la stessa linea in [Building effective agents](https://www.anthropic.com/engineering/building-effective-agents): i workflow seguono percorsi predefiniti nel codice, gli agenti dirigono da soli il proprio processo e l’uso degli strumenti. Per la maggior parte dei compiti di uno store basta la forma più semplice che funziona, e noi partiamo da lì.',
    rows: [
      {
        label: 'Chatbot',
        does: 'Risponde alle domande dal testo che gli è stato dato: le tue policy, le FAQ, le schede prodotto.',
        limit:
          'Non guarda l’ordine, quindi non sa dire al cliente dov’è il suo pacco.',
      },
      {
        label: 'Workflow',
        does: 'Segue percorsi disegnati in anticipo: un trigger, condizioni, azioni. [Shopify Flow](https://help.shopify.com/en/manual/shopify-flow) funziona così.',
        limit:
          'Gestisce i casi che qualcuno aveva previsto. Ciò che esce dallo schema passa a una persona.',
      },
      {
        label: 'Agente AI',
        does: 'Riceve un obiettivo e strumenti sui dati del tuo store, poi sceglie il passo successivo in base a ciò che trova.',
        limit:
          'Servono accessi definiti, un compito stretto e una persona sulle azioni che contano. Questa è la parte che costruiamo noi.',
      },
    ],
  },
  paths: {
    heading: 'Due modi di lavorare con noi',
    intro:
      'Partono entrambi dal tuo store, non da un modello. Guardiamo i tuoi dati, i tuoi accessi e chi è responsabile di cosa, poi costruiamo la versione che ti serve.',
    items: [
      {
        title: 'Integriamo un agente nel tuo store',
        body: 'Prendiamo un lavoro del tuo store e costruiamo un agente che lo svolge, collegato ai tuoi dati e alle persone che rispondono del risultato.',
        bullets: [
          'Un compito definito, per esempio domande sugli ordini, resi, pulizia del catalogo o reportistica',
          'Collegato al tuo store con i soli accessi che quel compito richiede',
          'Istruzioni, strumenti, un posto dove tenere lo stato e regole su quando fermarsi',
          'Un passaggio al tuo team, con il contesto allegato, quando non sa',
        ],
      },
      {
        title: 'Impostiamo l’intero store per gli agenti',
        body: 'Un agente può controllare solo ciò che riesce a leggere. Organizziamo il tuo store perché gli agenti vedano tutto ciò che conta, in un unico quadro: vendite, ads, stock, customer care e SEO.',
        bullets: [
          'Le tue fonti collegate, con accesso in lettura',
          'Tracking e dati verificati e mappati, così ciò che gli agenti vedono è corretto',
          'Per ogni area, una definizione di cosa è normale e cosa segnalare',
          'Una base a cui aggiungere agenti, uno alla volta',
        ],
      },
    ],
  },
  monitors: {
    heading: 'Cosa possono tenere d’occhio gli agenti nel tuo store',
    intro:
      'Con lo store impostato per questo, gli agenti seguono le aree che assorbono più attenzione del tuo team. Riportano e segnalano. La decisione resta a te.',
    items: [
      {
        area: 'Vendite',
        watches:
          'Ordini, ricavi, conversione e andamento dei prodotti rispetto al tuo andamento recente.',
        flags:
          'Un calo o un picco che non torna con l’andamento, con il punto più probabile da guardare.',
        yourCall: 'Cosa fare.',
      },
      {
        area: 'Ads',
        watches: 'Spesa, campagne e risultati sui tuoi account pubblicitari.',
        flags:
          'Spesa che corre senza ordini corrispondenti, campagne che hanno smesso di erogare.',
        yourCall: 'Budget e modifiche alle campagne.',
      },
      {
        area: 'Stock',
        watches:
          'Livelli di magazzino e velocità di vendita per prodotto e variante.',
        flags:
          'Best seller in esaurimento, prodotti sul punto di finire, giacenze che non si muovono.',
        yourCall: 'Riordini e prezzi.',
      },
      {
        area: 'Customer care',
        watches:
          'Ticket e messaggi in arrivo, con l’ordine che sta dietro a ciascuno.',
        flags:
          'Lamentele ripetute su un prodotto, richieste che servono a una persona, messaggi in attesa da troppo.',
        yourCall: 'Rimborsi e qualsiasi promessa fatta a un cliente.',
      },
      {
        area: 'SEO',
        watches:
          'Indicizzazione, title delle pagine, redirect e le pagine che portano traffico dalla ricerca.',
        flags:
          'Pagine che escono dall’indice, redirect rotti, prodotti senza metadati.',
        yourCall: 'Cosa viene pubblicato.',
      },
    ],
  },
  method: {
    heading: 'Come costruiamo gli agenti AI per il tuo store',
    steps: [
      {
        title: 'Prima accessi e dati',
        body: 'Partiamo dal tuo store: quali sistemi contengono i dati, chi possiede ogni accesso e cosa può vedere ciascun agente.',
      },
      {
        title: 'Un compito definito',
        body: 'Ogni agente ha un lavoro solo e una definizione chiara di “fatto”. Un compito stretto si testa meglio e ispira più fiducia.',
      },
      {
        title: 'Sola lettura prima di tutto',
        body: 'L’agente parte con accesso in lettura. Confrontiamo ciò che riporta con ciò che sai essere vero, prima che possa cambiare qualcosa.',
      },
      {
        title: 'Approvazioni dove servono',
        body: 'Ogni azione che modifica qualcosa ha un passaggio di approvazione. Decidiamo insieme quali azioni girano da sole e quali aspettano una persona.',
      },
      {
        title: 'Consegna che il tuo team sa gestire',
        body: 'Ricevi la configurazione, le istruzioni, l’elenco degli accessi e un modo per rivedere cosa ha fatto l’agente, così tutti sanno chi risponde di cosa.',
      },
    ],
  },
  control: {
    heading: 'Una persona approva ciò che non si può annullare',
    body: 'OWASP indica l’[eccesso di autonomia](https://genai.owasp.org/llmrisk/llm062025-excessive-agency/) (troppi strumenti, troppi permessi, troppa autonomia) come un rischio per i sistemi AI, e la sua [AI Agent Security Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/AI_Agent_Security_Cheat_Sheet.html) chiede l’approvazione umana per le azioni ad alto impatto e irreversibili. Il nostro approccio segue lo stesso principio. Altro in [sicurezza degli agenti AI su Shopify](/it/blog/sicurezza-agenti-ai-shopify).',
    bullets: [
      'Solo gli strumenti che servono al compito',
      'I permessi più stretti che funzionano, in sola lettura all’inizio',
      'Rimborsi, sconti, cambi di prezzo e promesse ai clienti aspettano una persona',
      'Quando l’agente non sa, passa la mano al tuo team con il contesto allegato',
    ],
  },
  proof: {
    heading: 'Lavoriamo con gli agenti ogni giorno',
    body: 'noprob lavora ogni giorno con agenti AI costruiti su Claude Code, e questo sito è sviluppato e curato con agenti. Portiamo la stessa pratica quotidiana nel tuo store. Per il ragionamento dietro le tre forme, leggi la nostra guida agli [agenti AI per Shopify](/it/blog/agenti-ai-shopify).',
  },
  faq: {
    heading: 'Agenti AI per eCommerce: le domande che ci fanno',
    items: [
      {
        q: 'Quanto costa un agente AI per eCommerce?',
        a: 'Non c’è un listino, perché il lavoro dipende dal tuo store: i dati, gli accessi e il compito. Definiamo ambito e costo in videochiamata, dopo aver visto il tuo store.',
      },
      {
        q: 'È un chatbot?',
        a: 'No. Un chatbot risponde dal testo che gli è stato dato. Un agente ha un obiettivo e strumenti sui dati del tuo store e sceglie il passo successivo in base a ciò che trova. Ti diciamo anche quando un semplice workflow fa meglio il lavoro, perché la forma più semplice che funziona è quella giusta.',
      },
      {
        q: 'L’agente agisce senza approvazione?',
        a: 'Non su ciò che non si può annullare. Rimborsi, sconti, cambi di prezzo e promesse ai clienti aspettano una persona. Gli agenti partono in sola lettura, e decidiamo insieme quali azioni, se ce ne sono, girano da sole.',
      },
      {
        q: 'Dobbiamo essere su Shopify?',
        a: 'Costruiamo prima di tutto su Shopify. Se il tuo store gira su un’altra piattaforma, dillo in videochiamata e ti diciamo cosa è possibile sulla tua configurazione. Se stai pensando di passare a Shopify, è un progetto a parte: lo [Shopify Launch Sprint](/it/sprint-migrazione-shopify).',
      },
      {
        q: 'In cosa è diverso dall’AI Accelerator?',
        a: 'L’[AI Accelerator](/it/ai-accelerator) è un programma di 30 giorni che trova e mette in ordine le opportunità AI del tuo store. Questa pagina riguarda costruzione e integrazione: un agente nel tuo store, o l’intero store impostato per gli agenti. Si completano a vicenda e puoi fare l’uno senza l’altro.',
      },
      {
        q: 'Cosa vi serve da parte nostra?',
        a: 'Una videochiamata per guardare il tuo store, l’accesso ai sistemi che l’agente userà e una persona dalla tua parte che risponda del risultato. Alla configurazione, alla costruzione e alla consegna pensiamo noi.',
      },
      {
        q: 'Da quale area conviene partire?',
        a: 'Da quella in cui il tuo team spende più attenzione ripetitiva: di solito customer care, reportistica o stock. La scegliamo insieme in videochiamata e partiamo con un solo compito.',
      },
    ],
  },
  finalCta: {
    heading: 'Dicci quale lavoro vuoi togliere al tuo team',
    body: 'In videochiamata guardiamo il tuo store, scegliamo il primo compito e ti diciamo quale delle due strade ti serve. Nessun modello, nessun pacchetto: un piano per il tuo store.',
    button: 'Prenota una videochiamata',
    secondary:
      'Vuoi prima il contesto? Leggi gli [agenti AI per Shopify](/it/blog/agenti-ai-shopify).',
  },
}

const COPY: Record<Locale, AgentsCopy> = { en, it }

export function getAgentsCopy(locale: Locale): AgentsCopy {
  return COPY[locale]
}
