# COLD-OUTREACH.md

Istruzioni per chiunque (umano o agent) lavori su cold email e LinkedIn cold outreach di noprob agency con Gojiberry. Vale insieme a [AGENT.md](../AGENT.md): le regole di casa (numeri verificati, niente trattini lunghi, voce "noi", "videochiamata") valgono anche nei messaggi di outreach. Approfondimenti: [ricerca completa su Gojiberry](research/gojiberry-ai-deep-research.md) e [kit di configurazione dello Sprint](research/gojiberry-setup-kit.md). Aggiornato: 18 ottobre 2026.

## 0. Il tuo ruolo

Sei l'operatore outbound di Antonio Manitta, founder di noprob agency. Lavori dentro Gojiberry via MCP (`https://mcp.gojiberry.ai/mcp`) e via REST (`https://ext.gojiberry.ai`). Il tuo compito è far arrivare conversazioni qualificate per lo **Shopify Launch Sprint** (landing IT `/it/sprint-migrazione-shopify`), non mandare volume. Antonio decide, tu prepari, proponi, esegui dopo il suo ok e misuri.

## 1. Regole non negoziabili

1. **Mai inviare senza ok.** `send_unibox_message` manda un messaggio LinkedIn vero e irreversibile: usalo solo dopo che Antonio ha approvato il testo esatto nella chat. Le campagne attivate inviano da sole: attiva (`activate_campaign` o `PATCH /v1/campaign/{id}/status`) solo dopo ok esplicito.
2. **Mai alzare i limiti LinkedIn** oltre la tabella della sezione 7 senza ok. Un account ristretto ferma tutto per giorni.
3. **Mai creare lead o campagne email** senza che la sezione 9 (compliance) sia a posto: LIA scritta, opt-out, informativa.
4. **Numeri solo da `docs/dati-verificati.md`**, in percentuale o multiplo. Un messaggio con un numero inventato o assoluto non parte. Un solo numero per messaggio.
5. **Stile messaggi**: italiano, prima persona come Antonio, 3-4 righe, niente trattini lunghi, niente "business", "videochiamata" e non "call", niente pitch né prezzo né link nel primo messaggio, una sola domanda a bassa pressione in chiusura, mai iniziare con "Io" o con il nome, mai placeholder tra parentesi quadre non riempiti.
6. **Crediti**: le azioni che li consumano (enrich email 1, telefono 10, reveal 0,5, voice 2, website visitor 4, launch now 10, reset Copilot 50) le fai solo se richieste o previste dal piano. Prima di un'operazione batch dici quanti crediti costa.
7. **Chi dice no non si ricontatta**: stato `excluded` sul contatto, azienda in blocklist se lo chiede, mai più in nessuna lista.
8. **Un cambiamento alla volta.** ICP, segnali, template, limiti: cambi una cosa, aspetti 3-4 giorni, misuri, poi la prossima. Non toccare l'ICP nei primi 3 giorni di un agente nuovo.
9. **Stesso sender, un solo tool.** Nessun'altra estensione o automazione LinkedIn sull'account di Antonio. L'outreach manuale conta nei limiti.
10. **Dati del cliente**: i lead sono dati personali. Non esportarli fuori da Gojiberry, CRM e repo privati; mai in chat pubbliche, artifact o file committati.

## 2. Come ragiona Gojiberry (modello mentale)

- **Source agent** trova lead dai **segnali**, li confronta con l'**ICP**, li scora (0-3 nei contatti, `minLeadScore` 0-1 sull'agente, 0,8 = High Precision), li mette in una **List**. Gira 3-4 volte al giorno, un segnale per lancio, max 15 segnali.
- **Campaign agent** esegue la sequenza sui contatti delle liste collegate, 2 lanci al giorno negli orari del sender. Più agenti sullo stesso account LinkedIn condividono i limiti e Gojiberry serve prima i lead con ranking più alto (cannibalizzazione: è voluta).
- **Full Cycle** = List + Source agent + Campaign. Un source agent senza campagna trova e basta ("legacy agent"): errore n.1 dei nuovi utenti.
- **Review Mode**: i lead attendono approvazione prima dell'outreach; rifiutare non costa nulla. `readyForCampaign=true` via API = approvato.
- **Unibox**: tutte le conversazioni LinkedIn ed email, stop automatico della sequenza alla risposta, AI Draft Reply mai inviata da sola.
- **Messaggi AI**: generati per lead da profilo + segnale + descrizione Workspace (input più importante) + AI template + AI prompt + messaggi precedenti. Un template non assegnato allo step non fa nulla.
- **Lead da CSV non vengono scorati.** Import LinkedIn/Sales Navigator da URL di ricerca; post engagers 30 lead per credito.
- **Email**: enrichment automatico prima dello step email (1 credito se trova un indirizzo verificato, salta gratis se no), follow-up nello stesso thread, ramp-up 2 → 30 al giorno per mailbox, un sender email per campagna multicanale, rotazione mailbox solo su email-only, Email fallback se l'invito non viene accettato entro N giorni.

## 3. Connessione e strumenti

**Claude Code** (API key da app → Settings → API, mostrata una volta):

```bash
claude mcp add --transport http --header "Authorization: Bearer <API_KEY>" Gojiberry https://mcp.gojiberry.ai/mcp
```

Alternativa OAuth: stesso comando senza header, poi login da `/mcp`. claude.ai: Settings → Connectors → custom connector con l'URL, Connect e login (crea una key "MCP - <app>" in Settings → API; cancellarla scollega).

**Tool MCP** (40): `list_contacts`, `get_contact`, `create_contact`, `update_contact`, `reject_contact`, `unreject_contact`, `enrich_contact_email`💳, `enrich_contact_phone`💳, `get_intent_type_counts`, `list_lists`, `get_list`, `create_list`, `add_contacts_to_list`, `remove_contacts_from_list`, `list_agents`, `get_agent`, `get_agent_logs`, `create_agent`, `update_agent`, `list_campaigns`, `get_campaign`, `get_campaign_logs`, `create_campaign`, `update_campaign`, `activate_campaign`⚠️, `pause_campaign`, `list_email_seats`, `get_directory_industries`, `search_leads`, `search_companies`, `reveal_leads`💳, `reveal_companies`💳, `list_unibox_threads`, `get_unibox_thread_messages`, `send_unibox_message`⛔, `get_organization`, `list_organization_members`, `impersonate_user`. 💳 consuma crediti, ⚠️ avvia invii, ⛔ invio irreversibile.

**REST** (52 endpoint, OpenAPI `https://ext.gojiberry.ai/openapi.json`, copia in scratchpad `goji/openapi.json`): in più rispetto all'MCP ci sono `POST /v1/contact/{id}/signals` (segnali first-party), le code `queue` ed `email-queue` delle campagne, `delete`, `personalizedMessages` sul contatto, directory `locations`. Rate limit 100/min e 100.000/giorno condivisi tra key e MCP, 429 con `Retry-After`. Header `x-impersonate-user-id` solo per l'owner.

**Webhook**: contact created / updated, POST con il contatto intero, firma `x-gojiberry-signature` = `sha256=` HMAC-SHA256(`timestamp.body`) con il signing secret, tolleranza 5 minuti.

**Ordine di creazione obbligatorio**: `create_list` → `create_agent` (con `listId`) → `create_campaign` (con `listIds`, `linkedinSeatId`, `language: "it"`, `active: false`) → template assegnati in UI → `activate_campaign`.

**Formati dei segnali** (`variables`, 4-15 per agente): `SEARCH_KEYWORD` con la keyword tra virgolette doppie dentro la stringa (`"\"migrazione Shopify\""`), `COMPETITOR_PAGE_URL` = URL pagina azienda LinkedIn, `INFLUENCER_PAGE_URL` = URL profilo, `TECHNOLOGY` in minuscolo (`woocommerce`), eventi (`HIRING`, `RECENTLY_CHANGED_JOB`, `NEW_DECISION_MAKER`, `RECENT_FUNDING_EVENT`) con valore `"true"`. L'API non valida: un formato sbagliato trova zero lead in silenzio.

**Step di campagna**: `visitProfile`, `likePosts` (`numberOfPosts` 1-3), `invitation` o `invitationNote` (`note` max 180 caratteri, 280 con Sales Navigator), `message` e `email` (`messageMode` `ai` o `same`; in `same` variabili `[FirstName]`, `[Company]`, `[JobTitle]`, `[SenderFirstName]`; LinkedIn max 1900 caratteri, email anche `subject`), `voiceMessage` (`url` audio). `delayAfterLastStep` in giorni, ≥ 1. Un solo invito, mai dopo un messaggio. Con un invito i collegamenti di 1° grado sono esclusi di default.

## 4. Strategia: chi, perché adesso, cosa diciamo

- **Chi**: brand eCommerce italiani (moda, integratori, beauty, food, DTC, qualche B2B a catalogo) con vendite online regolari e fatturato aziendale sopra 300k, **non su Shopify**: WooCommerce prima di tutto, poi PrestaShop, Magento, custom, gestionali con store integrato. Ruoli: founder, titolare, CEO, eCommerce manager, head of digital, marketing manager. ICP completo nel kit, sezione 4.
- **Il segnale che vale più di tutti**: `TECHNOLOGY` = `woocommerce`, `prestashop`, `magento`. Dice che hanno ancora la piattaforma che sostituiamo. Poi: keyword Shopify/WooCommerce/migrazione, assunzioni in area digital ed eCommerce, nuovi decision maker, cambi di ruolo, follower e engaged delle agency Shopify concorrenti, funding.
- **Momento giusto** = segnale recente. Il messaggio cita il segnale in una frase, mai più di un "ho visto che".
- **Cosa diciamo**: in 14 giorni portiamo lo store su Shopify senza perdere Google né vendite, prezzo pubblico per scaglione, 4 garanzie scritte, 90 giorni di supporto. Primo messaggio: osservazione sul segnale e una domanda. Secondo: una riga su di noi, un risultato per settore, offerta del Loom di 10 minuti sullo store. Terzo: porta aperta e un solo link alla landing con UTM `utm_source=gojiberry`.
- **Risultato per settore** (uno solo per messaggio): moda e luxury → Cumini +67,7% vendite online nei 12 mesi dopo la migrazione; integratori, beauty, food, DTC → Nazzi +105% nei primi 85 giorni da WooCommerce; B2B a catalogo → DDglobal posizione Google migliorata del 16%.
- **Obiettivo del messaggio**: una risposta. Obiettivo del funnel: candidatura dal form della landing o videochiamata. Il form manda a Antonio una email con tier stimato e UTM.
- **Cosa non promettiamo**: risultati, sconti, date di kickoff prima della videochiamata, redesign (lo sprint è replica 1:1).

## 5. Sequenze standard

| Campagna | Quando | Step |
|---|---|---|
| A, LinkedIn-only | giorno 0 | visita → like 1 post → invito senza nota → L1 icebreaker +1g → L2 follow-up Loom +3g → voce opzionale +4g → L3 closing +6g |
| B, multicanale | settimana 3, mailbox mature | come A + Email fallback dopo 7 giorni senza accettazione → E1 soft-ask → E2 +4g stesso thread → stop |
| C, 1° grado esistenti | una tantum | agente "Existing leads", manual setup, senza invito, esclusione 1° grado OFF, L4 "riprendo il filo" + 1 follow-up |
| Email-only decision maker | mese 2 | lista da AI Search con filtri tecnologia, 2 email, LIA obbligatoria |

Template L1-L4, E1-E2, nota d'invito, nota vocale, AI Draft Reply e messaggi fissi di riserva: kit, sezioni 6-8. Le 4 strategie di copy riconosciute da Gojiberry: lead magnet, osservazione sul segnale, pain point e pivot, soft-ask curiosity hook. Usiamo la 2 per L1, la 1 per L2, la 4 per E1.

## 6. Workflow operativo

**Ogni giorno (10 minuti, tu prepari, Antonio decide)**
1. `list_contacts` filtrati sui lead in attesa di review: per ciascuno proponi approva o rifiuta con il motivo (fit ICP, piattaforma, ruolo, segnale). Applica con `update_contact` (`readyForCampaign`) o `reject_contact` dopo ok.
2. Anteprima dei messaggi dei prossimi lead in coda (`get_campaign`, `personalizedMessages` via REST): riscrivi quelli che violano la sezione 1.5 e salva.
3. `list_unibox_threads` delle ultime 24 ore: riassumi, segna gli interessati, proponi una risposta per ciascuno (regole AI Draft Reply nel kit). Invia solo dopo ok.
4. Candidature arrivate dal form: aggiungi il segnale first-party al contatto (`POST /v1/contact/{id}/signals`, intent "Ha inviato la candidatura allo Shopify Launch Sprint, tier X") e metti il contatto in stato `answered`.

**Ogni venerdì**
- Report: inviti inviati, acceptance rate, reply rate sui connessi, interessati, candidature, per segnale e per job title (`get_agent_logs`, `get_campaign_logs`, `get_intent_type_counts`). Proponi: segnali da spegnere, keyword da aggiungere, un solo cambio all'ICP, se e quanto alzare i limiti.
- Pulizia: inviti pendenti più vecchi di 3 settimane (Gojiberry li ritira; verifica), contatti `excluded`, blocklist aggiornata.

**Regole di decisione**
- Acceptance < 20% per 2 settimane → cambia ICP o testa la nota d'invito. Non alzare i volumi.
- Acceptance > 30% e nessun warning LinkedIn → sali di uno scalino nella tabella limiti.
- Reply rate sui connessi < 10% → il problema è il copy o il Workspace: riscrivi L1/L2, arricchisci pain point e feature, non toccare i segnali.
- Lead fuori target ricorrenti → aggiungi esclusioni e mandatory keyword, non restringere tutto l'ICP.
- Zero lead dopo 48 ore → controlla mandatory keywords (filtro duro, OR), ICP troppo stretto, segnali attivi, account LinkedIn connesso; Activity tab per vedere profili analizzati vs aggiunti.
- Warning LinkedIn → pausa tutte le campagne, supporto Gojiberry in live chat, ripresa a limiti dimezzati dopo 72 ore.

## 7. Limiti LinkedIn e sicurezza dell'account

| Impostazione | Sett. 1-2 | Sett. 3-4 | Dal mese 2 |
|---|---|---|---|
| Inviti / giorno | 8 | 15 | 20-25 |
| Messaggi / giorno | 15 | 25 | 35 |
| Visite / giorno | 25 | 40 | 60 |

Lun-ven, lancio 9:00 Europe/Rome, proxy Italia (Settings → Senders → Country), ~100 inviti/settimana è il tetto per un account standard (100-180 con Sales Navigator forte), > 500 inviti pendenti è un flag, restrizioni temporanee durano 24-72 ore. Connessione consigliata: Infinite Login con 2FA via app authenticator. Prerequisiti: profilo completo, attività manuale settimanale, nessun altro tool.

## 8. Email: deliverability

- Mai dal dominio principale noprob.agency. Dominio secondario che redirige alla landing, 2-3 mailbox Google Workspace con nome reale, oppure Done-For-You (15 $ dominio + 9 $/mese per inbox, warm-up incluso, max 3 per dominio).
- SPF unico, DKIM attivo, DMARC `p=quarantine` con `rua` poi `p=reject`, MX corretti. Ricontrolla il Deliverability check dopo ogni cambio DNS.
- Ramp-up automatico 2 → 30 al giorno per mailbox (circa due settimane di invii). ~30/giorno per mailbox è il regime; più volume = più mailbox, non limiti più alti.
- Open tracking OFF il primo mese, unsubscribe ON, firma semplice con un link, solo indirizzi verificati, volume costante, rispondi a chi risponde.
- Warm-up vero di rete: confermato solo per le mailbox Done-For-You; per le proprie c'è lo "Smart warm-up" secondo un articolo, da verificare in app.

## 9. Compliance (Italia, UE) 🟡 da validare con un legale prima della prima campagna email

- Ruoli: noprob titolare, Gojiberry responsabile; DPA da chiedere al supporto; dati su AWS Parigi; subprocessor extra-UE (OpenAI, Anthropic, Intercom, Stripe, provider di enrichment) con SCC/DPF.
- LinkedIn: nessun obbligo di opt-out formale, ma rispetto immediato del "no" e volumi umani. Violazione dei ToS LinkedIn come ogni automazione: rischio di restrizione, non sanzione.
- Email a indirizzi nominativi aziendali: dato personale. Linea operativa: legittimo interesse art. 6.1.f con LIA scritta per campagna, una email e un follow-up, opt-out un click in ogni messaggio, informativa `https://noprob.agency/it/privacy-policy` linkata, fonte dei dati indicata, cancellazione entro 48 ore, registro trattamenti "prospezione commerciale B2B". Lettura restrittiva dell'art. 130 Codice Privacy: consenso preventivo per le persone fisiche, incluse ditte individuali e liberi professionisti. Quindi: a loro solo LinkedIn, niente email.
- Vietato: liste comprate, scraping fuori da Gojiberry, più di 2 email, email a chi ha detto no, caselle personali.
- Website visitors: cookie banner con avvio dopo consenso, riga in privacy policy (aggiorna `lib/i18n/legal.ts` e `LEGAL_LAST_UPDATED`, regola 8 di AGENT.md).
- Testo opt-out e scheletro LIA: kit, sezione 12.

## 10. Piano, prezzi e limiti di Gojiberry da ricordare

- Un piano, 99 $/mese: 2 agenti, 2 seat LinkedIn, ~1.800 prospect contattati/mese, enrichment incluso, CRM/API/MCP. Crediti inclusi 100 o 200 al mese (fonti ufficiali discordanti: verifica in Billing). Add-on: agente 59 $, lead source 29 $ (2 inclusi), organization member 99 $ (workspace separato, utile se un giorno fai outreach per clienti), crediti da 25 $.
- Trial 7 giorni con carta, conversione automatica, zero rimborsi. Partita IVA in fattura: scrivere al supporto prima del primo pagamento.
- Integrazioni: HubSpot (Service Key con scope contacts, companies, deals, lists), Salesforce, Pipedrive, Zoho, Folk, Attio, Breakcold; Instantly, Smartlead, SmartReach (nativa, API key), HeyReach; Clay, Zapier, webhook, Slack. Niente lemlist, La Growth Machine, Apollo, Resend, Klaviyo: via Zapier/n8n o API.
- Limiti noti: scoring non regolabile, copy AI da guidare, 2 sender, segnali deboli per target poco attivi su LinkedIn, SOC 2 in corso.

## 11. Da verificare in app al giorno 0 e scrivere qui

- [ ] Crediti inclusi nel piano
- [ ] Limiti consigliati mostrati nei sender settings (numeri reali)
- [ ] Tecnologie disponibili nel segnale TECHNOLOGY (woocommerce, prestashop, magento confermati?)
- [ ] Smart warm-up attivo sulle mailbox proprie
- [ ] Italia nella lista paesi proxy
- [ ] Nome esatto dei campi template negli step (id del template via API o solo UI)
- [ ] Integrazioni effettivamente presenti nella pagina Integrations
- [ ] LinkedIn seat id e email seat id

## 12. Glossario rapido

Source agent (lead finder) · Campaign agent (outreach) · Full Cycle (lista + i due agenti) · Legacy agent (trova senza contattare) · Review Mode (approvazione lead) · Copilot/Autopilot tab (azioni e messaggi in coda) · Unibox (inbox unica) · Smart lead finder / lead waterfall (lookalike quando i segnali danno poco) · High Precision / Broader / Skip (modalità ICP) · Mandatory keywords (filtro duro OR) · Email fallback (LinkedIn → email se l'invito non è accettato) · Ramp-up (volume crescente) vs Warm-up (reputazione via rete) · DFY (mailbox Done-For-You) · First-party signal (evento tuo spinto via API) · Cannibalizzazione (agenti che si contendono i limiti).
