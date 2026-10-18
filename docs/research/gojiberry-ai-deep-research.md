# Gojiberry.ai — Studio approfondito per noprob.agency

Data: 17 ottobre 2026. Scopo: usare Gojiberry per promuovere il servizio dell'agency (cold email, follow-up automatici, LinkedIn outreach, copy e icebreaker, outbound) e collegarlo a Claude via MCP.

Legenda affidabilità:
- ✅ verificato su fonte ufficiale Gojiberry (sito, help center, OpenAPI, endpoint MCP interrogato direttamente)
- 🟡 fonte terza (recensioni, blog di concorrenti) o dato non confermato: da verificare in app
- ⚠️ discrepanza tra fonti ufficiali

---

## 0. Verdetto in breve

- Gojiberry non è un "sender" tipo Instantly o lemlist. È un **agente che decide chi contattare** (segnali di intent su LinkedIn + ICP scoring), arricchisce i contatti, e poi fa outreach LinkedIn + email con messaggi scritti dall'AI per ogni lead. ✅
- Per un'agency come la tua il valore sta in tre cose: (1) trovare brand e-commerce **nel momento giusto** (assumono un e-commerce manager, usano Shopify/Klaviyo, interagiscono con contenuti o competitor), (2) scrivere icebreaker contestuali senza lavoro manuale, (3) gestire LinkedIn + email in un'unica sequenza con stop automatico alla risposta. ✅
- Limiti reali: 2 sender LinkedIn e 2 agenti sul piano base, circa 1.800 prospect contattati al mese, scoring poco trasparente, copy AI che va guidato con template e prompt. 🟡/✅
- MCP ufficiale esiste e funziona con Claude Code: un comando `claude mcp add`. Espone contatti, liste, campagne, agenti, unibox. Più una REST API completa con OpenAPI (52 endpoint) e webhook. ✅
- Compliance in Italia: la cold email a indirizzi nominativi è l'area a rischio (art. 130 Codice Privacy). LinkedIn e caselle generiche sono più tranquilli. Serve una LIA scritta, opt-out in ogni mail, informativa linkata. 🟡 (fonti legali terze, da validare con un legale)
- Costo d'ingresso: 99 $/mese, trial 7 giorni con carta, nessun rimborso. ✅

---

## 1. Azienda e prodotto

| Voce | Dato | Fonte |
|---|---|---|
| Nome legale | SUPERFRUITS SAS, Parigi | gojiberry.ai/llm ✅ |
| Fondazione | 2025 | YC profile ✅ |
| Team | 7 persone | YC profile ✅ |
| Fondatori | Pierre-Eliott Lallemant (CEO), Romàn Czerny (CMO), Dylan Teixeira (CTO). Czerny e Lallemant hanno fondato e venduto CoCo AI, un'app Shopify (~500K $ ARR). Teixeira ha venduto Edusign. | YC profile ✅ |
| YC batch | Spring 2026 | YC profile ✅ |
| Finanziamento | Bootstrapped, nessun round esterno dichiarato dai founder; un aggregatore riporta 500K $ | arr.club, vcbacked 🟡 |
| ARR | ~2,5 M$ in 10 mesi (profilo YC); ~5 M$ a ottobre 2026 (post founder su X riportato da arr.club) | 🟡 |
| Clienti | 2.000+ (YC) / 3.500+ (sito) | ✅ (numeri del vendor) |
| Hosting dati | AWS Parigi (eu-west-3) | help center ✅ |
| Lingue app | inglese, francese. Messaggi di outreach in qualsiasi lingua impostata per campagna (italiano incluso) | ✅ |
| Supporto | live chat in app, 1 call 1:1 al mese per i paganti | ✅ |
| Status | status.gojiberry.ai | ✅ |

Dettaglio interessante per te: due dei tre founder vengono dall'ecosistema Shopify (CoCo AI). Il loro playbook di crescita, raccontato pubblicamente, è esattamente quello che vuoi replicare: ICP strettissimo ("founder di SaaS da 20 persone che stanno per assumere il primo SDR"), outbound su segnali (utenti dei competitor, cambio lavoro, funding, chi si lamenta pubblicamente del problema), reply rate dichiarato dall'1-2% al 25-40%. 🟡 (dichiarazioni del founder)

---

## 2. Architettura: come ragiona il prodotto

Tre oggetti fondamentali, confermati sia dall'help center sia dalla OpenAPI: ✅

1. **Source agent** (lead finder): cerca lead tramite segnali, li confronta con l'ICP, li scora, li deduplica, li mette in una **List**. Gira 3-4 volte al giorno, ogni lancio usa uno dei segnali configurati. Fino a 15 segnali per agente (l'API accetta 4-15).
2. **List**: il collegamento tra source agent e campagna. Può essere riempita anche da CSV, import LinkedIn, AI Search, API.
3. **Campaign agent** (outreach): esegue la sequenza sui contatti delle liste collegate. Gira 2 volte al giorno negli orari di lancio del sender.

Un **Full Cycle agent** = List + Source agent + Campaign agent. Un source agent senza campagna appare come "legacy agent" e trova lead senza contattarli (errore comune n.1 degli utenti nuovi). ✅

Altri concetti:
- **Review Mode**: i lead trovati finiscono in coda di approvazione prima dell'outreach. Rifiutare un lead non consuma crediti né limiti. Si attiva per campagna. Consigliato quando si testano segnali nuovi. ✅
- **Copilot / Autopilot tab**: dove rivedi azioni e messaggi in programma. Il "daily Copilot limit" si può resettare con 50 crediti. ✅
- **Unibox**: conversazioni LinkedIn + email di tutti gli account, sync in tempo reale (anche messaggi inviati direttamente su LinkedIn), stop automatico della sequenza alla risposta, AI Draft Reply (mai inviata in automatico), alert Slack, risposta a LinkedIn da Slack. ✅
- **Campaign cannibalization**: più agenti sullo stesso account LinkedIn condividono i limiti; Gojiberry assegna le azioni ai lead con ranking più alto a prescindere dall'agente. È voluto. Si ribilancia mettendo in pausa la campagna dominante. ✅
- **ICP filtering mode**: High Precision (default consigliato), Broader, Skip. Via API: `minLeadScore` 0-1 (tipicamente 0.6 o 0.8) e score contatti 0-3. ✅

---

## 3. I segnali (lista completa)

Dall'help center + enum dell'API `intentType`. ✅ Il marketing dice "15+" o "30+"; i tipi effettivi nell'API sono 22.

| Segnale | Cosa trova | Note per noprob |
|---|---|---|
| COMPETITOR_PAGE_URL | chi mette like/commenta sui contenuti della pagina LinkedIn di un competitor | metti le agency e-commerce italiane che fanno più rumore su LinkedIn |
| SEARCH_KEYWORD (+ _POST/_LIKE/_COMMENT) | chi pubblica o interagisce con post su una keyword (1-3 parole, tra virgolette) | "Klaviyo", "email marketing", "Shopify", "Meta Ads", "CRO", in italiano e inglese |
| INFLUENCER_PAGE_URL | chi interagisce con i post di un creator | creator italiani di e-commerce / DTC |
| EVENT_KEYWORD, GROUP_KEYWORD | eventi e gruppi LinkedIn per keyword | eventi e-commerce (Netcomm Forum ecc.) |
| YOUR_PROFILE / VISITED_PROFILE | chi visita il tuo profilo | gratis come intent, richiede account connesso |
| YOUR_COMPANY / YOUR_COMPANY_FOLLOWERS | follower della pagina azienda | |
| RECENT_ACTIVITY | profili più attivi nell'ICP | |
| RECENTLY_CHANGED_JOB | cambio lavoro negli ultimi 90 giorni | nuovo Head of E-commerce = budget nuovo |
| NEW_DECISION_MAKER | decision maker assunti di recente | |
| RECENT_FUNDING_EVENT | round recente | |
| HIRING / HIRING_SURGE / JOB_SEARCH | aziende con posizioni aperte o picchi di assunzioni | "E-commerce manager", "CRM specialist", "Performance marketing" |
| TECHNOLOGY | aziende che usano una tecnologia (da job posting + scan sito) | `shopify`, `klaviyo`: in minuscolo. L'articolo non elenca le tecnologie coperte, verifica in app ⚠️ |
| LOOKALIKE | simili ai tuoi migliori clienti (da profilo LinkedIn o dominio) | parti dai clienti dei case study |
| WEBSITE_VISITOR | aziende che visitano il tuo sito (script, livello azienda, 4 crediti per azienda nuova, max 5 domini) | utile con Meta Ads: vedi sezione 16 |
| First-party (senza intentType) | eventi tuoi via API: demo prenotata, lead magnet scaricato, webinar | sezione 11 |

Consigli ufficiali: pochi segnali forti (competitor rilevanti, hiring, engagement su contenuti ICP) battono molti segnali deboli; keyword specifiche funzionano meglio di keyword generiche; lascia girare qualche giorno prima di cambiare. ✅

---

## 4. ICP e scoring

- Campi: job roles (riconosce varianti vicine: "Head of Sales" copre "VP Sales", ma "Account Executive" va aggiunto a parte), industries, company type, company size, locations. ✅
- **Mandatory keywords**: filtro duro, logica OR, parola intera nel profilo o descrizione azienda. Usa più varianti (es. "Shopify", "e-commerce", "ecommerce", "DTC", "negozio online"). ✅
- Esclusioni: competitor, keyword, blocklist contatti/aziende, service provider, freelance e consulenti, Open to Work. ✅
- Errori tipici: troppi filtri subito, una sola mandatory keyword, restringere location prima di guardare i risultati. Regola: parti largo, restringi un criterio alla volta. ✅
- I lead da CSV non vengono scorati. ✅

---

## 5. Canali e sequenze

### 5.1 LinkedIn

Step disponibili (API): `invitation`, `invitationNote`, `message`, `voiceMessage`, `visitProfile`, `likePosts`, `email`. Regole: max una connection request, l'invito non può seguire un messaggio, `delayAfterLastStep` almeno 1 giorno. Con una connection request i collegamenti di 1° grado sono esclusi di default (si disattiva per campagne ai contatti esistenti). ✅

Sequenza tipica generata dall'AI: connection request, poi messaggi a giorno 1, 3, 6. L'icebreaker parte un'ora dopo l'accettazione se cade negli orari di lancio. ✅

**Metodo di connessione** (Settings → LinkedIn Accounts): ✅
1. Credentials login (email + password + codice di verifica).
2. Infinite login: 2FA via app authenticator, incolli il secret key in Gojiberry (così la sessione non scade).
3. Email link.
4. Estensione Chrome "Socials Cookie Viewer": copi i cookie di sessione senza inserire password.
Gojiberry dichiara di non conservare la password; sessioni e secret 2FA cifrati AES-256. Non è un'estensione che gira nel tuo browser: è una sessione cloud con **proxy nel paese che scegli** (imposta Italia nei sender settings) e possibilità di proxy proprio. ✅

**Limiti e sicurezza**: ✅
- I numeri esatti sono in immagini dell'help center e non li ho potuti leggere ⚠️. Testo disponibile: ~100 inviti/settimana per account standard, 100-180 per account Sales Navigator "forti"; parti con 5-10 inviti/giorno e sali gradualmente; >500 inviti pendenti è un flag; acceptance <20% è un flag; ritira inviti non accettati dopo 3-4 settimane (lo fa in automatico); restrizione temporanea tipica 24-72 ore.
- Non usare altri tool/estensioni di automazione LinkedIn in parallelo. Conta anche l'outreach manuale nei limiti.
- Prerequisiti profilo: foto, esperienze, attività, 100-500 collegamenti prima di scalare.
- Funziona con LinkedIn standard e Sales Navigator (import diretto da URL di ricerca Sales Nav).
- Recensori terzi stimano 15-25 richieste/giorno per seat come zona sicura. 🟡

### 5.2 Email

- Mailbox: Google Workspace o Microsoft 365 su dominio tuo. Ogni campagna multicanale usa **un** sender email; le campagne email-only ruotano su più mailbox (fino a 100 via API, "nessun cap" via UI). ✅
- Prima dello step email il lead viene arricchito (1 credito se trova email verificata; se non la trova lo step viene saltato gratis). ✅
- Follow-up nello stesso thread. Email fallback: se non accetta l'invito LinkedIn entro X giorni, passa a email. ✅
- **Ramp-up** (tutte le mailbox collegate): parte da 2/giorno, +2 al giorno fino a 30. Limite manuale 1-500. Raccomandazione: ~30/giorno per mailbox, per 150/giorno servono 5 mailbox. ✅
- **Warm-up** vero (rete di mailbox): solo per le mailbox Done-For-You. Per mailbox tue c'è "Smart warm-up" gratis attivo di default (l'articolo "mailbox that lands in the inbox" lo descrive; l'articolo ramp-up vs warm-up dice che il warm-up è solo DFY). ⚠️ Chiarire in app.
- **Done-For-You**: dominio 15 $ una tantum + 9 $/mese per inbox con warm-up incluso, max 3 inbox per dominio, pronte in 1-48 ore, DNS/redirect/SPF/DKIM/DMARC fatti da loro. ✅
- Checklist deliverability ufficiale: un solo record SPF, DKIM attivo, DMARC `p=quarantine` con rua poi `p=reject`, MX corretti, dominio secondario che redirige al principale se mandi più di qualche centinaio di mail a settimana, nome reale come sender, firma semplice con un link, open tracking off le prime settimane, unsubscribe link attivo, solo indirizzi verificati, volume costante. ✅
- Verifica email tramite BounceBan (subprocessor list) e waterfall su FullEnrich, AirScale, Findymail. ✅

### 5.3 Voice note LinkedIn

Note vocali generate per ogni lead con la tua voce clonata (ElevenLabs), solo a collegamenti di 1° grado, 2 crediti l'una, italiano supportato tra le 6 lingue, max 3 voci, registrazione 1-3 minuti. ✅ Differenziante forte per un'agency italiana: pochi lo fanno.

---

## 6. Copywriting AI: come si governa

Input che l'AI usa per ogni messaggio: profilo LinkedIn del lead (ruolo, azienda, headline, attività recente), il segnale che l'ha fatto emergere, la **descrizione azienda nel Workspace** (l'input più importante), l'AI template, l'AI prompt, i messaggi precedenti della sequenza. ✅

**Workspace (Settings → Workspace)**: nome, sito, settore, dimensione, descrizione lunga e dettagliata, pain point dei clienti e come li risolvi, key feature con spiegazione, social proof (risultati, nomi clienti). Esempio ufficiale: non "filtriamo i lead" ma "i lead vengono confrontati con il profilo del buyer ideale prima dell'outreach". ✅

**AI template** (Settings → AI Outreach Templates): per canale (email/LinkedIn) e step (IceBreaker, Follow-up, Closing). Corpo del template (struttura) + AI Instructions (tono, regole, contesto). Variabili: FirstName, LastName, Company, JobTitle, Intent, campi sender e custom con fallback. Template corto = l'AI espande; vincoli dettagliati = l'AI segue. Va **assegnato allo step della campagna**, altrimenti non fa nulla. Anteprima per contatto da "View message". ✅

**Prompt efficace** (struttura ufficiale): ruolo, obiettivo, tono, ricerca (un contesto rilevante), personalizzazione solo se aggiunge valore, un solo outcome positivo, CTA come domanda a bassa pressione. ✅

**Le 4 strategie ufficiali**: ✅
1. Lead magnet: offri una risorsa (analisi gratuita, case study), chiedi il permesso di inviarla, non chiedere una call.
2. Intent-based observation: apri citando il trigger (ha commentato un post del competitor, ha cambiato lavoro), domanda morbida, max 4 frasi.
3. Pain point & pivot: una frustrazione tipica del ruolo, validata senza criticare, domanda aperta su come la gestiscono. Funziona meglio su LinkedIn.
4. Soft-ask curiosity hook: 3 righe, un risultato positivo senza spiegare il come, domanda semplice. Adatta alle cold email.

**Do / Don't**: prima persona, conversazionale, 3-4 righe, riferimento al contesto, domanda morbida. Non iniziare con "Io" o con il nome, non pitchare il prodotto nel primo messaggio, niente link nei primi messaggi, niente tono corporate, niente placeholder tipo [industry] (vengono inviati così come sono). ✅

**Lingua**: default account in Settings → Account → Preferred Language, override per campagna. ✅

Altri strumenti: AI Draft Reply (bozze di risposta con link di scheduling e 500 caratteri di istruzioni, mai inviate da sola), ASK assistant (chat sui tuoi dati: trova lead, report campagne, review ICP, bozze messaggi; 75k token/giorno, reset con 50 crediti, sperimentale). ✅

Tool gratuiti sul sito: ICP generator, persona generator, Sales Navigator filter generator, outreach message analyzer, icebreaker generator, cold email generator, subject line generator, follow-up generator. ✅

---

## 7. Fonti di lead oltre ai segnali

| Fonte | Come | Costo |
|---|---|---|
| AI Search (beta) | descrizione in linguaggio naturale → filtri + ricerca web per criteri non filtrabili (es. "ha aperto un nuovo store") | ricerca gratis, 0,5 crediti per prospect aggiunto, +1 email, +10 telefono |
| Directory API | `/v1/directory/leads/search` gratis (preview), `/reveal` 0,5 crediti | ✅ |
| Import LinkedIn / Sales Navigator | incolla l'URL della ricerca, scegli quanti | costo non dichiarato ⚠️ ("Import from Lead Search: 2 lead per credito" nell'articolo crediti) |
| Post engagers | URL del post, like/commenti | 30 lead per credito |
| CSV | colonne obbligatorie: First Name, Last Name, LinkedIn URL. Niente scoring ICP | gratis |
| Lookalike | profilo LinkedIn o dominio di riferimento | non dichiarato |
| Website visitors | script, 5 domini, limite mensile aziende | 4 crediti per azienda nuova |
| Liste HubSpot | import con scope lists | |
| Collegamenti 1° grado | agente "Existing leads", manual setup, togli invito, disattiva esclusione 1° grado | |

---

## 8. Crediti: tabella costi ✅

| Azione | Crediti |
|---|---|
| Email trovata e verificata | 1 (rimborsata se non trovata) |
| Telefono | 10 |
| Lancio manuale "launch now" di un agente | 10 (i lanci programmati sono gratis) |
| Prospect da AI Search / directory | 0,5 |
| Post engagers | 1 ogni 30 |
| Voice message | 2 |
| Website visitor, azienda nuova | 4 |
| Reset limite Copilot giornaliero | 50 |
| Reset quota ASK | 50 |

Crediti non usati si accumulano; i pacchetti comprati non scadono; pacchetti da 500 a 20.000 (es. 1.000 ≈ 47 $, 5.000 ≈ 199 $); a saldo zero le azioni a crediti si fermano ma gli agenti continuano. ✅

---

## 9. Pricing, trial, rimborsi

| Voce | Dato |
|---|---|
| Piano | uno solo, "Pro", 99 $/mese. Custom per team 3+ / agency (demo call) ✅ |
| Incluso | 2 AI agents, 2 LinkedIn seats, email sender multipli per agente, ~1.800 prospect contattati/mese, enrichment waterfall, unibox, CRM/API/MCP ✅ |
| Crediti inclusi | **200/mese** (articolo pricing) ma **100/mese** (articolo Send Email step e una versione precedente dell'articolo pricing) ⚠️ verifica in app |
| Add-on | AI Outreach Agent 59 $/mese (1 ICP, 1 sender LinkedIn, più sender email, ~900 prospect/mese); Automated Lead Source 29 $/mese (2 inclusi); Organization Member 99 $/mese (workspace separato con login, campagne e agenti propri, paga il main account); crediti da 25 $/mese ✅. Una versione precedente citava 49 $ per seat/agente extra 🟡 |
| Trial | 7 giorni, **carta richiesta**, conversione automatica ✅. Fonti terze dicono "1 $" o "senza carta": smentite dal refund policy ufficiale ❌ |
| Rimborsi | nessuno, pagamenti finali; errori di fatturazione corretti ✅ |
| Cancellazione | ferma solo i rinnovi futuri; workspace "on hold" con dati conservati ✅ |
| "Elite 249 $" | citato da directory terze, non esiste sul sito ❌ |
| Fattura con P.IVA | contatta il supporto **prima** del primo pagamento per VAT ID ✅ |

Costo per prospect a pieno regime: ~5,5 cent (1.800/mese). 🟡 calcolo di un recensore.

Per agency multi-cliente: la struttura è **Organization Member = un workspace per cliente a 99 $/mese** (con i suoi 2 seat e 2 agenti), oppure Custom plan. Il Reddit roundup di un concorrente cita un'agency con 10 clienti che ottiene ~180 prospect/cliente/mese sul piano singolo: la matematica non torna se metti tutti i clienti in un workspace. 🟡 Per promuovere **la tua** agency basta un workspace.

---

## 10. Integrazioni ✅

| Categoria | Tool | Note |
|---|---|---|
| CRM | HubSpot, Salesforce, Pipedrive, Zoho, Folk, Attio, Breakcold | push automatico o manuale; HubSpot match per LinkedIn URL poi email; risposte loggate come note (HubSpot, Salesforce, Pipedrive, Attio); HubSpot via Service Key con scope contacts/companies (+deals per escludere per stage, +lists per importare) |
| Outreach tools | Instantly, Smartlead, SmartReach, HeyReach | "manda i lead Gojiberry nelle campagne del tuo tool". SmartReach documenta un'integrazione nativa via API key con auto-send dei nuovi contatti (richiede Auto Enrich email). Per Instantly/Smartlead/HeyReach non ho trovato guida passo-passo ⚠️; un concorrente (HeyReach) nega che esistano 🟡 |
| Dati / automazione | Clay, Zapier (5.000-7.000+ app), webhook (contact created, contact updated, "altri eventi"; header `x-gojiberry-user-id`; test con webhook.site; trigger manuale dalla pagina Contacts; retry non documentati) | |
| Team | Slack (alert, daily report, rispondi a LinkedIn da Slack) | |
| Mailbox | Google Workspace, Microsoft 365 | |
| Calendar | Google Meet via Zapier | |
| AI | Claude, ChatGPT, Grok, Codex, Muse, Dots, qualsiasi client MCP | |

Non c'è integrazione nativa con lemlist, La Growth Machine, Apollo, Resend, Klaviyo: passi da Zapier/Make/n8n o API. ✅

---

## 11. MCP e API: controllare tutto da Claude

### 11.1 MCP server ufficiale ✅

Due fonti ufficiali, entrambe valide: l'help center (metodo API key) e la developer doc `dev.gojiberry.ai/mcp-server` (metodo sign-in nel browser, più recente).

- Endpoint: `https://mcp.gojiberry.ai/mcp`. Transport Streamable HTTP. Serve un piano attivo (il trial conta come attivo).
- Ho interrogato l'endpoint: senza token risponde 401 con `www-authenticate: Bearer resource_metadata=.../.well-known/oauth-protected-resource/mcp, scope="mcp:tools claudeai"`; il metadata dichiara `authorization_servers: ["https://mcp.gojiberry.ai"]`. Quindi OAuth è supportato davvero.
- **Metodo A, sign-in (consigliato)**: aggiungi il server, clicca Connect, fai login su Gojiberry nel browser. Gojiberry crea una key "MCP - <nome app>" in Settings → API; per scollegare cancelli quella key. Nessuna chiave da copiare.
- **Metodo B, API key**: Settings → API → Create API Key (mostrata una sola volta), header `Authorization: Bearer <key>` (lo spazio dopo Bearer è obbligatorio).
- Client custom devono mandare un header `User-Agent` non vuoto, altrimenti 403.
- I rate limit sono condivisi con le API key: 100 richieste/minuto e 100.000/giorno per account, 429 con `Retry-After`.

**Claude Code** (metodo B, documentato dall'help center):

```bash
claude mcp add --transport http --header "Authorization: Bearer <API_KEY>" Gojiberry https://mcp.gojiberry.ai/mcp
```

Oppure metodo A: `claude mcp add --transport http Gojiberry https://mcp.gojiberry.ai/mcp` e poi autenticazione OAuth dal comando `/mcp` nella CLI interattiva (non testato qui, ma il server pubblica il metadata OAuth necessario).

**Claude desktop / claude.ai**: Settings → Connectors → Add custom connector → nome "Gojiberry", URL `https://mcp.gojiberry.ai/mcp` → Connect → login. In alternativa, Authentication "No sign-in" e header `authorization: Bearer <API_KEY>`. Poi in chat: + → Connectors → attiva Gojiberry. Codex: `codex mcp add gojiberry --url https://mcp.gojiberry.ai/mcp`. ChatGPT e Grok: app Gojiberry nella directory.

**Tool esposti** (nomi esatti dalla developer doc): ✅

| Area | Tool | Note |
|---|---|---|
| Contacts | `list_contacts`, `get_contact`, `create_contact`, `update_contact`, `reject_contact`, `unreject_contact`, `enrich_contact_email`, `enrich_contact_phone`, `get_intent_type_counts` | enrich consuma crediti (1 email, 10 telefono) |
| Lists | `list_lists`, `get_list`, `create_list`, `add_contacts_to_list`, `remove_contacts_from_list` | aggiungere a una lista collegata a una campagna = iscrivere alla campagna |
| Source agents | `list_agents`, `get_agent`, `get_agent_logs`, `create_agent`, `update_agent` | |
| Campaigns | `list_campaigns`, `get_campaign`, `get_campaign_logs`, `create_campaign`, `update_campaign`, `activate_campaign`, `pause_campaign`, `list_email_seats` | |
| Directory | `get_directory_industries`, `search_leads`, `search_companies` (gratis), `reveal_leads`, `reveal_companies` (0,5 crediti l'uno) | |
| LinkedIn inbox | `list_unibox_threads`, `get_unibox_thread_messages`, `send_unibox_message` | **send è irreversibile**: manda un messaggio LinkedIn vero |
| Organization | `get_organization`, `list_organization_members`, `impersonate_user` | solo owner; resta sul membro finché non torni indietro |

Prompt di esempio ufficiali: "Who should I contact today, and why?", "Summarize the LinkedIn replies I got this week and draft answers to the interested ones", "Create a list, a source agent for Heads of Sales at French SaaS companies, and a campaign for it", "Show me my 20 most qualified contacts from this month", "Pause Marie Dupont's outreach", "Refine my ICP: ...", "What did I last say to John Smith?".

Tutorial ufficiali (dev.gojiberry.ai/tutorials): sync inbox LinkedIn, CRM sync bidirezionale (push contatti + segnali custom, mirror dei rifiutati per non ricontattare), full outbound play da un prompt (lista → agente → campagna → attiva), directory search & reveal. ✅

### 11.2 REST API ✅ (OpenAPI scaricata: `https://ext.gojiberry.ai/openapi.json`; docs: `https://dev.gojiberry.ai`, indice `llms.txt`)

Base `https://ext.gojiberry.ai`, `Authorization: Bearer <key>`, JSON. Rate limit: 100/min e 100.000/giorno per account, condivisi tra key e MCP, alcuni endpoint più bassi, 429 + `Retry-After`. Header `x-impersonate-user-id` per agire come un Organization Member (solo key dell'owner; `GET /v1/organization/members` per gli id).

Endpoint (52):
- Contacts: create, list con filtri (search, agent, date, score 0-3, intentType, listId, paginazione), get, patch (fit `qualified|unknown|out-of-scope`, state `paused|finished|1stnetwork|excluded|answered`, `readyForCampaign` per approvare in review mode, `personalizedMessages` per step), delete, add/remove da lista, intent-type counts, enrich email/phone (sync e async), reject/unreject, **add signal (first-party)**.
- Campaigns: create (steps, listIds, linkedinSeatId, emailSeatIds, language, active), list, get, patch (solo testi e modalità AI/fissa degli step), delete, logs, queue LinkedIn, email-queue, status on/off.
- Lists: create, list, get.
- Source agents: create (ICP, agentType `autopilot|lookalike|website-visitor`, variables 4-15 segnali, mandatoryKeywords, ignoredCompanies, excludeServiceProviders, skipIcpFilter, includeOpenToWorkProfiles, leadWaterfall, minLeadScore, paused), list, get, patch, delete, logs.
- Directory: industries, locations, leads search/reveal, companies search/reveal.
- Unibox: messaggi per contatto, threads, messaggi di un thread, **send LinkedIn message** (anche con file o voice), download allegati.
- Organization, members, user/me, permissions, email seats.

**Webhook**: eventi contact created, contact updated e "altri"; POST con il contatto completo; header `x-gojiberry-user-id`, e con signing secret configurato `x-gojiberry-timestamp` + `x-gojiberry-signature` = `sha256=` HMAC-SHA256 di `timestamp.body`; tolleranza replay consigliata 5 minuti; retry non documentati. ✅

### 11.3 Cosa puoi automatizzare da Claude (idee concrete)

1. **Lead routing con first-party signals**: quando qualcuno prenota una call, scarica un lead magnet o apre 3 volte una mail, `POST /v1/contact/{id}/signals` con intent "Ha scaricato la checklist Klaviyo" (via Zapier/n8n o uno script). Il segnale appare accanto a quelli rilevati da Gojiberry e l'AI lo usa nei messaggi.
2. **Review mode da Claude**: "Mostrami i lead in attesa di approvazione dell'agente Shopify Italia, scarta quelli senza e-commerce, approva gli altri" → Claude legge, ragiona, setta `readyForCampaign=true` o `reject`.
3. **QA del copy**: Claude legge i `personalizedMessages` dei prossimi 20 lead in coda, li riscrive in italiano naturale secondo le tue regole, li salva.
4. **Report settimanale**: Claude tira `campaign/{id}/logs` + unibox threads, calcola accept/reply rate per segnale e job title, scrive il report.
5. **Risposte**: Claude legge il thread unibox, propone la risposta, tu approvi, `send-message`.
6. **Sync verso Klaviyo/Resend/CRM tuo**: webhook contact.updated → quando state=`answered` crea il deal.
7. **Creazione campagne da prompt**: "crea lista + agente + campagna per i founder DTC italiani che assumono un e-commerce manager, 3 step LinkedIn + 2 email, lingua it".

---

## 12. Recensioni, critiche, rischi

| Fonte | Rating | Note |
|---|---|---|
| Trustpilot | 4,4-4,5 su 93 recensioni (86% 5 stelle, 12% 1 stella) | lodi: supporto velocissimo, setup facile, lead in target. Critica visibile (1 ott 2026): "AI copywriting shockingly bad", ruolo/settore sbagliati nei messaggi; risposta del vendor: template non raffinati. 🟡 |
| G2 | 4,6-5,0 su 11-15 recensioni | campione troppo piccolo 🟡 |
| Reddit (roundup di un concorrente) | | sicurezza LinkedIn "dipende dai volumi", segnali di like = "curiosi più che compratori", email arricchite che a volte rimbalzano, sorpresa per i 29 $ del lead source extra 🟡 |

Critiche ricorrenti nelle review di concorrenti (HeyReach, SalesRobot, Salesforge, Cleverly, SyncGTM, toflow, sbl.so: tutte parti interessate 🟡):
- 2 sender / 1.800 prospect al mese: cap stretto per agency multi-cliente.
- Scoring opaco: non vedi né regoli i pesi dei segnali; un like può valere quanto un webinar del competitor.
- Copy AI ripetitivo se non guidato; serve 2-4 settimane di tuning dei segnali.
- Metodo di automazione LinkedIn non dichiarato nel dettaglio (è cloud + proxy, vedi 5.1).
- Dipende dall'attività LinkedIn del target: debole per settori "offline".
- Alcuni dicono "niente email nativo": **falso** oggi, l'email step esiste ❌ (recensioni datate).
- Pochi dati pubblici su accuratezza enrichment.
- SOC 2 in corso, non certificato. ✅

Rischi pratici per te:
- Restrizione LinkedIn: mitigata da proxy Italia, ramp-up, niente altri tool. Account aziendale vs personale: usa il profilo personale di chi firma i messaggi.
- Deliverability email: non mandare dal dominio noprob.agency principale. Dominio secondario o DFY.
- Lock-in dati: export leads disponibile, API completa, cancellazione contatti via API. ✅

---

## 13. Compliance: Italia e UE 🟡 (fonti legali terze, da validare con un consulente)

**Posizione di Gojiberry**: base giuridica "legittimo interesse" per i dati B2B; tu sei titolare, loro responsabile; DPA su richiesta; dati su AWS Parigi; trasferimenti extra-UE con SCC/DPF (OpenAI, Anthropic, Intercom, Stripe, provider di enrichment); opt-out su gojiberry.ai/optout con cancellazione in 30 giorni e suppression list; i tuoi dati non addestrano modelli. ✅

**Italia, cold email**: le fonti divergono.
- Lettura restrittiva (privacy-legale.it, avvocatoflash): art. 130 Codice Privacy richiede consenso preventivo per email automatizzate a persone fisiche, incluse le nominative aziendali `nome.cognome@azienda.it` e le ditte individuali/liberi professionisti; il Garante ha più volte respinto il legittimo interesse per il direct marketing via email.
- Lettura operativa (venditeb2b.it, clientium.it): legittimo interesse art. 6.1.f per contatti aziendali su temi del loro ruolo, con LIA scritta per campagna, opt-out un click in ogni mail, informativa art. 13-14 linkata, fonte dei dati tracciabile, cancellazione rapida, registro trattamenti "prospezione commerciale B2B". Caselle generiche `info@`, `commerciale@` sono fuori dal GDPR (persone giuridiche). Soft opt-in art. 130.4 solo per clienti esistenti e servizi analoghi. Provvedimenti citati: 124/2024, 312/2024, 87/2025 (non li ho verificati sul sito del Garante ⚠️). Registro Opposizioni Imprese esteso a email/PEC da gennaio 2026 🟡.
- Punti di consenso: nominative = dato personale; niente liste comprate; informativa entro un mese se i dati vengono da terzi (art. 14); mai scraping massivo senza informativa.

**LinkedIn**: i messaggi e le richieste di collegamento non passano da art. 130 nella lettura più comune (non sono email), ma l'automazione viola i ToS LinkedIn come per qualunque tool: rischio commerciale (restrizione), non sanzionatorio. 🟡

Implicazione operativa per noprob: LinkedIn come canale principale, email come follow-up verso decision maker con LIA documentata, opt-out, informativa nel footer, volumi bassi e messaggi pertinenti al ruolo; per le PMI piccole preferisci le caselle generiche o passa da LinkedIn. Fatti scrivere una LIA da un legale prima di partire con l'email.

---

## 14. Piano pre-account per noprob.agency

### Prima di creare l'account (2-3 giorni)

1. **ICP scritto** (lo userai nel Workspace, nei prompt e nelle LIA):
   - Chi: founder / CEO / Head of E-commerce / Marketing manager di brand DTC su Shopify (e simili), Italia, 5-200 dipendenti, fatturato online indicativo da 500K a 20M.
   - Esclusioni: agenzie, freelance, consulenti, software vendor, marketplace puri, Open to Work, i tuoi clienti attuali.
   - Mandatory keywords (OR): Shopify, e-commerce, ecommerce, DTC, "negozio online", brand, retail online, Klaviyo.
2. **Descrizione Workspace** lunga: cosa fa noprob, i pain (email che non vendono, ROAS che cala, nessuna dashboard di marginalità), le feature spiegate dal lato del buyer, social proof con soli numeri verificati e in percentuale (regola già in docs/dati-verificati.md).
3. **Segnali iniziali (8-10)**: 3 competitor page (agency e-commerce italiane visibili su LinkedIn), 3 keyword ("Klaviyo", "email marketing ecommerce", "Meta Ads"), 2 creator italiani e-commerce, HIRING ("e-commerce manager", "CRM manager"), TECHNOLOGY shopify + klaviyo, RECENTLY_CHANGED_JOB. Lookalike dai clienti dei case study (Cumini, Nazzi).
4. **LinkedIn**: profilo personale completo e attivo, 2FA via app authenticator (per Infinite Login), Sales Navigator se ce l'hai (import ricerche + limiti più alti), niente altri tool di automazione attivi, ritira inviti pendenti vecchi.
5. **Email**: compra un dominio secondario (es. noprob-agency.it o getnoprob.it) che redirige al sito; 2-3 mailbox Google Workspace con nome reale; SPF/DKIM/DMARC; pagina privacy per la prospezione; testo di opt-out. In alternativa DFY (15 $ + 9 $/mese per inbox). Inizia la ramp-up dal giorno 1 anche se le campagne email partono dopo.
6. **LIA + informativa** per cold email B2B (sezione 13).
7. **Template e prompt** pronti in italiano: icebreaker LinkedIn (strategia 2 e 3), follow-up, closing, email icebreaker (strategia 1 lead magnet: audit gratuito dell'email marketing o del funnel), email follow-up. Lead magnet reale pronto.
8. **Blocklist**: clienti attuali, partner, concorrenti amici.
9. **Integrazioni**: decidi CRM (anche solo HubSpot free) e canale Slack; prepara un endpoint webhook (n8n/Make o Vercel function) se vuoi il routing.
10. **Partita IVA per fattura**: scrivi al supporto prima del primo pagamento.

### Giorno 0 (trial, 7 giorni con carta)

- Registrazione con il sito: l'AI compila Workspace, ICP e segnali. Correggi tutto con il materiale sopra.
- Connetti LinkedIn (Infinite Login), imposta paese Italia nel proxy, limiti bassi (5-10 inviti/giorno), orari 9-18 lun-ven, timezone tua.
- Crea API key, collega MCP a Claude Code, verifica `tools/list`.
- Primo agente Full Cycle in **Review Mode**, LinkedIn-only, sequenza: invito senza nota (o con nota corta) → icebreaker a +1g → follow-up a +3g → closing a +6g. Niente link.
- Preview 5 lead, lancia. Controlla Activity tab dopo qualche ora.

### Giorni 1-7

- Ogni giorno 5 minuti: Copilot (approva/rifiuta/edita), Unibox (tab Interested).
- Da Claude: "lista dei lead in review con segnale e fit, proponi approva/rifiuta".
- Non cambiare ICP prima di 3-4 giorni. Poi un criterio alla volta.
- Aggiungi lo step email solo quando le mailbox hanno almeno 2 settimane di ramp-up.

### Giorni 7-30

- Alza i limiti gradualmente verso 20-25 inviti/giorno se acceptance >25%.
- Secondo agente: email-only verso una lista costruita con AI Search (decision maker, caselle verificate), strategia soft-ask.
- Insights settimanali: tieni i segnali che portano risposte, spegni gli altri.
- Attiva Website visitors con lo script sul sito (vedi 16).

---

## 15. Playbook per i tuoi 5 use case

**Cold email**: Gojiberry copre enrichment, verifica, ramp-up, threading, stop alla risposta, rotazione mailbox su email-only. Non è un cold email tool da 10 mailbox e 500 mail/giorno: se vuoi quei volumi usa Gojiberry per trovare e qualificare e manda da Instantly/Smartlead/SmartReach (SmartReach ha integrazione nativa documentata). Per il tuo volume (decine al giorno, molto mirate) basta Gojiberry.

**Follow-up e messaggistica automatica**: sequenze multicanale con delay per step, email fallback se l'invito non viene accettato, follow-up nello stesso thread, AI Draft Reply con link di prenotazione, Slack per rispondere al volo. Da Claude: triage dell'unibox e invio risposte.

**LinkedIn cold outreach**: il cuore del prodotto. Profilo visita → like → invito → messaggi → voice note in italiano. Limiti condivisi tra agenti, proxy Italia, niente altri tool.

**Copywriting e icebreaker**: Workspace dettagliato + AI template per step + prompt in italiano con le 4 strategie + review in Copilot. Da Claude: riscrittura batch dei `personalizedMessages` e creazione di varianti di template; l'ASK interno è più limitato.

**Outbound in generale**: pipeline = segnali → lista → campagna → unibox → CRM. First-party signals via API per unire inbound (Meta Ads, blog, lead magnet) e outbound nello stesso scoring.

---

## 16. Sinergie con Meta Ads e blog

- **Website visitors + Meta Ads**: lo script di Gojiberry identifica le aziende che visitano il sito (livello azienda, non persona) e aggiunge fino a 20 persone ICP per azienda come lead con segnale "visited your website". Una campagna Meta che porta traffico qualificato B2B sul sito diventa quindi una fonte di lead outbound. Serve cookie banner con consenso (lo script ha modalità consent-gated) e una riga nella privacy policy. Costo 4 crediti per azienda nuova, imposta un cap mensile (50-100). ✅
- **Blog come lead magnet**: ogni articolo utile (es. checklist Klaviyo, benchmark e-mail e-commerce) diventa la "risorsa" della strategia 1 e un first-party signal quando viene scaricato (`POST /contact/{id}/signals` da un form Zapier/n8n). I post LinkedIn che ripubblicano il blog alimentano il segnale "engaging with you". ✅
- **Retargeting**: Gojiberry non esporta audience verso Meta. Puoi però esportare i contatti (CSV/API) con email aziendali e caricarli come custom audience; match rate basso su email aziendali, ma l'audience "lead contattati su LinkedIn" per ads di social proof è un classico. 🟡 (uso tuo, non funzionalità Gojiberry)
- **Dati dai segnali per contenuti**: gli Insights dicono quali keyword e competitor generano risposte; sono anche i temi su cui scrivere sul blog e far girare ads.

---

## 17. Da verificare in app al giorno 0

1. Crediti inclusi: 100 o 200. Limiti LinkedIn numerici consigliati nei sender settings. Tecnologie disponibili nel segnale TECHNOLOGY (Shopify, Klaviyo, WooCommerce?). Se "Smart warm-up" è attivo per mailbox proprie o solo DFY. Lista paesi proxy (Italia). Integrazioni Instantly/Smartlead/HeyReach nella pagina Integrations. Rate limit API nella reference.

---

## 18. Fonti principali

Ufficiali: gojiberry.ai, gojiberry.ai/llm, gojiberry.ai/faq, gojiberry.ai/how-to-do-outreach-claude-linkedin-mcp, help.gojiberry.ai (collezioni: Getting Started, Connecting LinkedIn, Finding & Adding Leads, Campaigns & Outreach, Troubleshooting, Billing & plans, Technical & API, Privacy Security & Compliance, Full Tutorial Course), ext.gojiberry.ai/openapi.json, mcp.gojiberry.ai (risposta 401 + metadata OAuth), ycombinator.com/companies/gojiberry-ai, status.gojiberry.ai.

Terze: Trustpilot, G2 (bloccato, numeri da fonti secondarie), cleverly.co, syncgtm.com, toflow.ai, heyreach.io, salesforge.ai, salesrobot.co, tomba.io, sbl.so, arr.club, vcbacked.co, help.smartreach.io, instantly.ai/marketplace, venditeb2b.it, privacy-legale.it, clientium.it, avvocatoflash.it.
