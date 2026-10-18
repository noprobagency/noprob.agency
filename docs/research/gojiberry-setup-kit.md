# Gojiberry: kit di configurazione per lo Shopify Launch Sprint

Data: 18 ottobre 2026. Tutto quello che va incollato in Gojiberry (Workspace, ICP, segnali, template, prompt, sequenze, limiti) e i payload API per farlo da Claude. Offerta promossa: **Shopify Launch Sprint**, landing IT `https://noprob.agency/it/sprint-migrazione-shopify`, EN `https://noprob.agency/shopify-migration-sprint`.

Regole di casa rispettate in ogni testo: niente trattini lunghi, voce "noi", "videochiamata" e non "call", numeri dei clienti solo in percentuale o multiplo (fonte: docs/dati-verificati.md), nessun numero inventato, nessuna scarsità finta.

Segni: ✅ pronto da incollare · ✏️ da confermare tu prima di incollare.

---

## 1. Strategia in una pagina

**Cosa vendiamo**: una migrazione a Shopify in 14 giorni, prezzo pubblico per scaglione di fatturato (5.800 / 8.800 / 12.800 € + IVA in 4 rate), 4 garanzie scritte, 90 giorni di supporto, go-live a zero downtime.

**A chi**: brand eCommerce italiani (fashion, integratori, beauty, food, DTC in genere, qualche B2B a catalogo) con vendite online regolari e fatturato aziendale sopra i 300k, **che oggi NON sono su Shopify**: WooCommerce prima di tutto (è la piattaforma da cui se ne vanno di più), poi PrestaShop, Magento, custom, gestionali con store integrato.

**Perché Gojiberry e non una lista statica**: il momento giusto esiste ed è leggibile su LinkedIn. Chi assume un eCommerce manager, chi ha appena cambiato ruolo in un brand, chi commenta post su Shopify o sulle migrazioni, chi segue le agency concorrenti, chi ha raccolto un round. Il segnale **TECHNOLOGY = woocommerce / prestashop / magento** è il filtro più importante di tutti: ci dice che l'azienda ha ancora la piattaforma che vogliamo sostituire.

**Canale principale**: LinkedIn dal profilo personale di Antonio. Email solo come follow-up a decision maker, con LIA e opt-out (vedi sezione 12).

**Obiettivo del primo messaggio**: una risposta, non una videochiamata. CTA a bassa pressione: "ti mando un Loom di 10 minuti sul tuo store?".

**Obiettivo del funnel**: candidatura dal form della landing (ti arriva via Resend a antonio@noprob.agency con tier stimato) oppure videochiamata diretta.

**KPI da guardare** (settimanali, dalla tab Insights e da Claude): acceptance rate inviti (obiettivo > 30%), reply rate sui connessi (obiettivo > 15%), risposte "Interested", candidature, videochiamate. Sotto il 20% di acceptance per 2 settimane: cambia ICP o nota d'invito, non alzare i volumi.

---

## 2. Workspace (Settings → Workspace) ✅

**Company name**: noprob agency

**Website**: https://noprob.agency

**Industry**: eCommerce services / Shopify development and migration

**Company size**: 2-10

**Company description** (il campo più importante, lungo apposta):

> noprob agency è un partner tecnico Shopify per brand eCommerce italiani, soprattutto moda, integratori e DTC, con alcuni progetti B2B a catalogo. Fondata nel 2022 da Antonio Manitta, che ha oltre 7 anni di progetti eCommerce. Non siamo un'agenzia marketing "all in one": costruiamo, migriamo e gestiamo store Shopify con un team completo (sviluppo, SEO e redirect, tracking e dati, checkout e CRO, design, AI) e un solo referente.
>
> Il prodotto che promuoviamo è lo Shopify Launch Sprint: in 14 giorni portiamo su Shopify un eCommerce che oggi sta su WooCommerce, PrestaShop, Magento, una piattaforma custom o un gestionale con store integrato. Il giorno 1 il cliente ci dà gli accessi, il giorno 14 ha lo store pronto a pubblicare: replica 1:1 su un Custom AI theme sviluppato su misura (mai temi premium o già pronti) con bug corretti e flusso d'acquisto ottimizzato, Data Migration Report con prodotti, clienti e storico ordini riconciliati al 100%, Redirect Map 1:1 testata in automatico, Tracking Spec con GA4 e Meta Conversions API server-side via Stape e consent mode, Go-live Checklist con la data scelta dal cliente tra il giorno 15 e il 30. Poi 90 giorni di supporto, monitoraggio e miglioramento con un Loom settimanale e una dashboard dei risultati (vendite nette, MER, ROAS, retention) collegata dal giorno 1.
>
> Prezzo pubblico, fisso, in base al fatturato aziendale, IVA esclusa, in 4 rate: 5.800 € sotto i 2 milioni, 8.800 € tra 2 e 20 milioni, 12.800 € oltre i 20 milioni. Nessun preventivo, nessuno sconto. Quattro garanzie scritte nel contratto: store pronto al giorno 14 o rimborso della prima rata; traffico organico sotto la baseline a 90 giorni e lavoriamo gratis finché non torna; store offline al lancio per colpa nostra e una rata la paghiamo noi; checkout che converte meno di prima a 90 giorni e lo ottimizziamo gratis finché non supera.
>
> Al cliente servono circa 8 ore in tutto. Lo store attuale resta online durante lo sprint: lavoriamo in staging. Il sito non cambia faccia: non è un redesign, è lo stesso store più veloce, più forte su Google e con un checkout costruito per vendere di più. Design su misura, advertising, email marketing e marketplace arrivano dopo, con partner dedicati.
>
> Lavoriamo con un massimo di tre clienti long term alla volta. Rispondiamo a ogni candidatura entro 48 ore, anche quando la risposta è no.

**Pain points** (i problemi dei clienti e come li risolviamo):

> 1. Paura di perdere Google e clienti nel passaggio: ogni URL con traffico negli ultimi 12 mesi ha il suo redirect 301 testato in automatico prima e dopo il go-live, e monitoriamo Search Console per 90 giorni. Garanzia scritta sul traffico organico.
> 2. Piattaforma rigida: per cambiare un banner serve un ticket e si aspetta il developer. Su Shopify una modifica si fa in minuti e per 90 giorni le facciamo noi.
> 3. Sito lento o bloccato durante saldi e Black Friday. Shopify regge i picchi, e lo store va live a zero downtime in una data scelta dal cliente.
> 4. Meta e GA4 dicono una cosa, gli ordini veri un'altra: tracking server-side con Stape, purchase deduplicato, Event Match Quality sopra 8, scarto tra ordini Shopify e GA4 sotto il 3%.
> 5. Costi mensili di hosting, plugin, manutenzione e un sito che resta uguale: prezzo fisso pubblico, manutenzione e miglioramenti inclusi per 90 giorni.
> 6. Preventivi vaghi e progetti che durano mesi: calendario fisso di 14 giorni, prezzo visibile in pagina prima di parlarci, condizioni in una pagina di contratto.
> 7. Vorrebbero usare l'AI per vendere ma sulla piattaforma attuale non sanno da dove partire: su Shopify il catalogo è già dentro ChatGPT, Copilot e Google AI Mode.

**Key features**:

> - Replica 1:1 dello store su Shopify, su un Custom AI theme sviluppato su misura, con bug fix e checklist del flusso d'acquisto (ricerca, scheda prodotto, carrello, checkout): stesso store, più corto da comprare.
> - Data Migration Report: prodotti, varianti, clienti, storico ordini, codici sconto e recensioni riconciliati al 100% tra piattaforma vecchia e Shopify.
> - Redirect Map 1:1 con test automatico prima e dopo il lancio: nessun clic organico perso.
> - Tracking Spec e setup server-side: GA4, Meta CAPI via Stape, Google Ads, email, consent mode.
> - Go-live Checklist con data scelta dal cliente (giorni 15-30), DNS, sitemap, Search Console, uptime monitor, piano di rollback. Zero downtime.
> - 90 giorni di supporto, monitoraggio e miglioramento con Loom settimanale e dashboard dei risultati dal giorno 1.
> - Prezzo pubblico per scaglione di fatturato, 4 rate, 4 garanzie scritte.
> - Un team completo in parallelo (sviluppo, SEO, tracking, CRO, design, AI) e un solo referente.

**Social proof**:

> - Cumini, luxury multibrand fashion: +67,7% di vendite online nei 12 mesi dopo la migrazione a Shopify rispetto ai 12 prima, ordini +49,4%, scontrino medio +12,2%, tracking score da 31 a 92 su 100, entrate attribuite Klaviyo +301%. Partnership dal 2022.
> - Integratori DTC Nazzi, da WooCommerce a Shopify il 19 luglio 2026: +105% di vendite online nei primi 85 giorni rispetto agli stessi giorni del 2025, ordini +77%, clienti di ritorno 2,25 volte, clic da Google 2,7 volte l'anno prima, posizione media su Google migliorata del 21%, +46% di vendite in due settimane con le ads spente.
> - DDglobal Store, eCommerce B2B a catalogo migrato con l'AI da WordPress: sessioni GA4 circa 4 volte nel primo mese, posizione media su Google migliorata del 16%, impressioni 2,7 volte lo stesso periodo del 2025.
> - Oltre 10 migrazioni, 0 minuti offline. Trustpilot: 10 recensioni, tutte a 5 stelle. Partner Shopify, Google, Meta e Klaviyo.
> - Casi studio pubblici: https://noprob.agency/it/casi-studio

---

## 3. Chi scrive: il sender ✅

- **Profilo LinkedIn**: Antonio Manitta, founder di noprob agency. Headline consigliata (✏️ se vuoi cambiarla): "Shopify Launch Sprint: il tuo eCommerce su Shopify in 14 giorni, senza perdere Google. Founder @ noprob agency".
- **Nome sender**: Antonio Manitta. Ruolo nei messaggi: "founder di noprob agency" (mai "CEO", mai "sales").
- **Firma email**: Antonio Manitta, founder, noprob agency, un solo link (la landing IT). Niente immagini.
- **Link di prenotazione** per AI Draft Reply: ✏️ l'URL della videochiamata che usi oggi (TidyCal o la pagina /it/grazie).
- **Prima di collegare LinkedIn**: 2FA via app authenticator (serve per Infinite Login), ritira gli inviti pendenti più vecchi di 3 settimane, nessun'altra estensione o tool di automazione attivo, almeno 1 post a settimana sul profilo nelle prossime 4 settimane (il segnale "engaging with you" si alimenta da solo).

---

## 4. Agente 1 "Sprint IT, piattaforme non Shopify" (source agent principale)

### 4.1 ICP ✅

| Campo | Valore |
|---|---|
| Job titles | Founder, Co-founder, CEO, Amministratore delegato, Titolare, Direttore generale, General Manager, eCommerce Manager, E-commerce Director, Head of eCommerce, Head of Digital, Digital Manager, Marketing Manager, Responsabile marketing, CMO, Responsabile eCommerce, Online Store Manager |
| Industries | Retail, Apparel & Fashion, Luxury Goods & Jewelry, Cosmetics, Health Wellness & Fitness (integratori), Food & Beverages, Consumer Goods, Sporting Goods, Furniture, Wholesale (B2B a catalogo) |
| Company type | Privately held, Partnership, Self-owned. Togli Public e Non profit |
| Company size | 11-50, 51-200, 201-500 (2-10 solo se il brand vende online con regolarità: lascialo acceso il primo mese e guarda la qualità) |
| Locations | Italia (poi Ticino e San Marino se vuoi) |
| Mandatory keywords (OR) | ecommerce, e-commerce, eCommerce, "negozio online", "shop online", "vendita online", "online store", DTC, "direct to consumer", brand, retail |
| ICP filtering mode | High Precision il primo mese |
| Review Mode | ON le prime 2 settimane |

**Additional criteria** (campo libero dell'agente) ✅:

> Vogliamo brand che vendono online con un loro eCommerce, non marketplace puri né negozi solo fisici. Preferiamo aziende che oggi usano WooCommerce, PrestaShop, Magento, piattaforme custom o un gestionale con store integrato: sono quelle che possiamo migrare a Shopify. Escludi chi è già su Shopify, le agenzie web e marketing, i freelance, i consulenti, i software vendor, i fornitori di hosting, i recruiter e chi lavora in Shopify o nelle piattaforme eCommerce.

**Esclusioni** ✅: service provider ON, freelance e consulenti ON, Open to Work ON. Keyword escluse: agenzia, agency, web agency, freelance, consulente, consulting, recruiter, HR, Shopify Partner, Shopify Expert, developer, sviluppatore, software, SaaS, hosting, marketplace, Amazon seller. Aziende escluse: Shopify, Amazon, le agency concorrenti che usi come segnale competitor, e tutte le aziende in blocklist (sezione 9).

### 4.2 Segnali (max 15, consigliati 10-12) ✏️ dove c'è un URL

| # | Tipo API | Valore | Perché |
|---|---|---|---|
| 1 | TECHNOLOGY | `woocommerce` | il segnale più prezioso: hanno la piattaforma che sostituiamo |
| 2 | TECHNOLOGY | `prestashop` | idem |
| 3 | TECHNOLOGY | `magento` | idem (brand più grandi, tier 2-3) |
| 4 | SEARCH_KEYWORD | `"WooCommerce"` | chi ne parla o commenta post, in italiano e inglese |
| 5 | SEARCH_KEYWORD | `"migrazione Shopify"` | intenzione esplicita |
| 6 | SEARCH_KEYWORD | `"Shopify"` | ampio: chi interagisce con contenuti Shopify in Italia |
| 7 | SEARCH_KEYWORD | `"eCommerce manager"` | ruolo e conversazioni di settore |
| 8 | HIRING | `true` | aziende con posizioni aperte (digital, eCommerce, marketing) |
| 9 | NEW_DECISION_MAKER | `true` | nuovo responsabile = budget e voglia di cambiare |
| 10 | RECENTLY_CHANGED_JOB | `true` | ultimi 90 giorni |
| 11 | COMPETITOR_PAGE_URL | ✏️ pagina LinkedIn di 2-3 agency Shopify italiane che postano spesso | chi mette like ai loro contenuti sta valutando Shopify |
| 12 | INFLUENCER_PAGE_URL | ✏️ 1-2 creator italiani di eCommerce/Shopify con post frequenti | engagement qualificato |
| 13 | YOUR_PROFILE / YOUR_COMPANY_FOLLOWERS | profilo di Antonio e pagina noprob | gratis, intent alto |
| 14 | RECENT_FUNDING_EVENT | `true` | pochi in Italia ma ottimi: tier 2-3 |

Non mettere ora: EVENT_KEYWORD e GROUP_KEYWORD (rumore), WEBSITE_VISITOR (sezione 10, dopo lo script).

Parola d'ordine dell'help center: lascia girare 3-4 giorni prima di toccare i segnali, poi spegni quelli che portano lead fuori ICP guardando la tab Insights.

### 4.3 Agente 2 "Lookalike clienti" (dalla settimana 2)

Tipo `lookalike`, riferimenti: cumini.com, il dominio di Nazzi, ddglobalstore.com, più i 2 brand del carosello homepage (Madotto, Sfogliate&Sfogliatelle). ✏️ URL LinkedIn dei profili dei titolari se li hai: funziona meglio dei domini.

### 4.4 Agente 3 "Email-only decision maker" (dal mese 2, quando le mailbox sono mature)

Fonte: AI Search con filtri "Head of eCommerce / eCommerce Manager / Founder, Italia, 11-500 dipendenti, industries come sopra, tecnologie woocommerce|prestashop|magento". Outreach: solo email, strategia soft-ask (template E1/E2), 2 step, poi stop. Qui serve la LIA (sezione 12).

---

## 5. Sequenze

### Campagna A, LinkedIn-only (parte il giorno 0) ✅

| Step | Tipo | Delay | Contenuto |
|---|---|---|---|
| 1 | visitProfile | 0 | visita profilo |
| 2 | likePosts | 0 | like a 1 post recente (solo se ne ha) |
| 3 | invitation | 0 | **senza nota** le prime 2 settimane (acceptance più alta). Poi testa la nota N1 su un secondo agente |
| 4 | message, AI template L1 Icebreaker | +1 giorno dall'accettazione | osservazione sul segnale + domanda |
| 5 | message, AI template L2 Follow-up | +3 giorni | lead magnet: il Loom di 10 minuti |
| 6 | voiceMessage (opzionale, 2 crediti) | +4 giorni | voce clonata di Antonio in italiano, 20-30 secondi |
| 7 | message, AI template L3 Closing | +6 giorni | chiusura morbida, porta aperta |

Escludi collegamenti di 1° grado (default). Campagna in **Review Mode** le prime 2 settimane.

### Campagna B, multicanale con fallback email (dalla settimana 3, dopo il ramp-up delle mailbox)

Come A, più: **Email fallback** se l'invito non viene accettato entro 7 giorni → email E1 (soft-ask) → +4 giorni email E2 (follow-up nello stesso thread) → stop. Un solo sender email per campagna.

### Campagna C, collegamenti di 1° grado esistenti (una tantum)

Agente "Existing leads" su una lista costruita esportando i tuoi collegamenti che rientrano nell'ICP (import LinkedIn: URL di una ricerca "I miei collegamenti" filtrata per settore). Manual setup, niente invito, esclusione 1° grado OFF. Un solo messaggio (template L4 "riprendo il filo") + un follow-up a 5 giorni.

---

## 6. Nota d'invito (test dalla settimana 3) ✏️

Max 180 caratteri (280 con seat Sales Navigator), fissa, non AI:

> Ciao [FirstName], seguo da anni gli eCommerce italiani e il vostro store mi è capitato sotto mano. Mi farebbe piacere collegarci, senza pitch. Antonio

Oppure la variante corta:

> Ciao [FirstName], lavoro con brand eCommerce italiani su Shopify. Ci colleghiamo? Antonio

---

## 7. AI Templates e prompt (Settings → AI Outreach Templates) ✅

Ogni template ha due campi: **Template body** (struttura) e **AI Instructions** (regole). Lingua campagna: italiano. Dopo averli creati: Campaign → step → "Use a template" → salva, altrimenti non vengono usati.

### Regole comuni da incollare in testa a ogni AI Instructions

> Scrivi in italiano, in prima persona, come Antonio Manitta, founder di noprob agency, un partner tecnico Shopify per brand eCommerce italiani. Tono: diretto, umano, concreto, zero gergo marketing, zero formule tipo "spero che questo messaggio ti trovi bene". Dai del tu. Niente trattini lunghi: usa virgole, parentesi o due punti. Mai la parola "business", mai "call": si dice "videochiamata". Massimo 3-4 righe. Non iniziare con "Io" né con il nome del destinatario. Non nominare il prezzo, non proporre una videochiamata nel primo messaggio, non inserire link nei primi due messaggi. Non inventare numeri: usa solo i risultati presenti nella social proof del Workspace, sempre in percentuale o multiplo, mai cifre di fatturato. Se il segnale è un cambio di lavoro, una posizione aperta o un commento, citalo in una frase senza sembrare uno stalker. Se non sei sicuro di un dettaglio del lead (piattaforma, settore), non affermarlo: fai una domanda. Mai lasciare placeholder tra parentesi quadre. Chiudi con una sola domanda a bassa pressione.

### L1, LinkedIn Icebreaker (strategia: osservazione sul segnale) 

Template body:

> {{una frase sul contesto del lead: il segnale che lo ha fatto emergere, o il suo ruolo e il suo brand}}
> {{una frase che collega quel contesto a una cosa che vediamo spesso nei brand che migrano a Shopify: piattaforma rigida, paura di perdere Google, tracking che non torna}}
> {{una domanda breve e aperta su come gestiscono oggi quel tema}}

AI Instructions (dopo le regole comuni):

> Obiettivo: ottenere una risposta, non vendere. Parti dal segnale: se ha interagito con contenuti su Shopify o WooCommerce, chiedi se stanno valutando un cambio di piattaforma; se ha cambiato ruolo da poco, fai i complimenti in mezza riga e chiedi cosa trova sul tavolo lato eCommerce; se l'azienda assume in area digital o eCommerce, chiedi se lo store attuale regge il piano di crescita; se usa WooCommerce, PrestaShop o Magento (segnale tecnologia), chiedi come si trovano e quanto tempo passa tra un'idea e la modifica online. Non dire mai "ho visto che" più di una volta. Non citare noprob, lo sprint o i risultati in questo messaggio. Esempio di tono: "Ho notato il commento sul post di X sulle migrazioni: da voi la piattaforma attuale sta reggendo o ogni modifica diventa un ticket?".

### L2, LinkedIn Follow-up (strategia: lead magnet)

Template body:

> {{aggancio di mezza riga al messaggio precedente, senza "ti scrivo di nuovo"}}
> {{una frase su cosa facciamo per brand come il suo, con un solo risultato in percentuale preso dalla social proof}}
> {{offerta: un Loom di 10 minuti sul loro store attuale con quello che guadagnerebbero e quello che rischiano passando a Shopify, gratis e senza impegno}}
> {{domanda: te lo preparo?}}

AI Instructions:

> Obiettivo: un "sì" al Loom. Presentati in una riga: "con noprob agency portiamo brand eCommerce italiani su Shopify in 14 giorni, con redirect testati e tracking server-side". Scegli il risultato più vicino al settore del lead: moda o luxury → Cumini +67,7% di vendite online nei 12 mesi dopo la migrazione; integratori, beauty, food o DTC → Nazzi +105% nei primi 85 giorni, da WooCommerce; B2B a catalogo → DDglobal, posizione Google migliorata del 16%. Un solo numero, mai due. Il Loom è registrato da Antonio, dura 10 minuti, analizza lo store attuale (velocità, URL con traffico, checkout, tracking) e dice cosa cambierebbe. Non chiedere una videochiamata. Non mettere link.

### L3, LinkedIn Closing (porta aperta)

Template body:

> {{una riga che chiude senza colpevolizzare: capisco che non sia il momento}}
> {{una riga su cosa resta disponibile: il Loom quando vuole, o la pagina dello sprint con prezzo e garanzie}}
> {{domanda sì/no o invito a rispondere anche fra mesi}}

AI Instructions:

> Obiettivo: lasciare una buona impressione e una porta aperta. Due righe, massimo tre. Qui puoi inserire un solo link: https://noprob.agency/it/sprint-migrazione-shopify, presentandolo come "la pagina dello sprint, con calendario, prezzo e le 4 garanzie". Esempio di chiusura: "Se un giorno il tema torna sul tavolo, scrivimi anche fra sei mesi: il Loom resta valido.". Nessun senso di urgenza finta, nessun "ultimo tentativo".

### L4, 1° grado, "riprendo il filo" (campagna C)

AI Instructions:

> Siamo già collegati. Non presentarti. Una riga di contesto vero (il suo brand, il settore, qualcosa che ha pubblicato di recente se c'è), una riga su cosa stiamo facendo adesso (lo Shopify Launch Sprint: migrazioni a Shopify in 14 giorni con prezzo pubblico e garanzie), una domanda: "voi su che piattaforma siete oggi?". Tre righe in tutto.

### E1, Email Icebreaker (strategia: soft-ask curiosity hook)

Oggetto (AI, max 6 parole, minuscolo, niente clickbait): esempi "[Company] e Shopify", "store su WooCommerce", "una domanda sul vostro checkout".

Template body:

> {{riga 1: una frase sul brand o sul segnale, senza convenevoli}}
> {{riga 2: un risultato positivo che otteniamo senza spiegare il come, in percentuale, dalla social proof}}
> {{riga 3: domanda semplice: vale la pena che ti mandi un Loom di 10 minuti sul vostro store?}}
> Antonio Manitta, founder, noprob agency

AI Instructions:

> Tre righe, nessun saluto iniziale oltre a "Ciao [FirstName],". Niente link nel corpo. Niente allegati. Il risultato va scelto per settore come in L2. Non parlare di prezzo. Dopo la firma, lascia intatta la riga di opt-out gestita dal sistema.

### E2, Email Follow-up (stesso thread, +4 giorni)

AI Instructions:

> Due righe. Riprendi il filo senza "ti scrivo di nuovo". Aggiungi un dettaglio nuovo: che lo sprint dura 14 giorni, che il prezzo è pubblico in pagina e che ci sono 4 garanzie scritte, tra cui quella sul traffico organico. Qui un solo link: https://noprob.agency/it/sprint-migrazione-shopify. Chiudi con "se non è il momento, dimmelo e non insisto".

### Nota vocale (step 6, testo generato dall'AI, 20-30 secondi)

AI Instructions:

> Parla come Antonio al telefono: "Ciao [FirstName], sono Antonio di noprob, ti ho scritto qualche giorno fa. Niente di urgente: se il tema Shopify è sul tavolo, ti preparo volentieri un Loom di dieci minuti sul vostro store. Dimmi tu. A presto." Adatta la prima frase al segnale se serve. Mai più di 60 parole.

### AI Draft Reply (Agent → Settings → Sender → Settings & Limits, 500 caratteri)

> Rispondi in italiano, breve, in prima persona come Antonio. Se il lead è interessato: ringrazia, chiedi l'URL dello store e la piattaforma attuale, proponi il Loom o una videochiamata di 20 minuti con il link di prenotazione. Se chiede il prezzo: dillo subito, con gli scaglioni per fatturato e le 4 rate, e rimanda alla pagina dello sprint. Se dice "non ora": chiedi quando ha senso risentirsi e chiudi bene. Mai promettere risultati, mai sconti.

---

## 8. Messaggi fissi di riserva (se l'AI delude su un segmento) ✅

**Icebreaker fisso, segnale tecnologia WooCommerce:**

> Ciao [FirstName], ho visto che [Company] è su WooCommerce. Domanda sincera: quanto passa oggi tra "vorrei cambiare questa cosa sul sito" e la modifica online? Da noi è il motivo numero uno per cui i brand passano a Shopify.

**Icebreaker fisso, nuovo ruolo:**

> Ciao [FirstName], complimenti per il nuovo ruolo in [Company]. Di solito nei primi mesi lato eCommerce si trova sul tavolo la piattaforma: vi state tenendo quella attuale o state valutando alternative?

**Follow-up fisso:**

> Ti dico in una riga cosa facciamo: con noprob portiamo brand eCommerce italiani su Shopify in 14 giorni, con ogni redirect testato e il tracking rifatto server-side. Un cliente integratori, da WooCommerce, ha fatto +105% di vendite online nei primi 85 giorni. Ti preparo un Loom di 10 minuti sul vostro store, gratis? Dimmi solo sì.

**Closing fisso:**

> Capisco se non è il momento. La pagina dello sprint con calendario, prezzo e le 4 garanzie resta qui: https://noprob.agency/it/sprint-migrazione-shopify. Se il tema torna, scrivimi anche fra sei mesi.

---

## 9. Blocklist e cosa non toccare ✏️

- Clienti attuali e passati: Cumini, Integratori DTC Nazzi, DDglobal Store, Madotto, Sfogliate&Sfogliatelle (e gli altri che hai in gestione).
- Partner con cui collabori su design, ads, email, foto.
- Le agency usate come segnale competitor (altrimenti contatti i loro dipendenti).
- Chi ha già risposto "no" o si è opposto: lo stato `excluded` via Claude, mai ricontattare.

---

## 10. Lead magnet, landing e tracciamento ✏️

- **Lead magnet**: "Loom di 10 minuti sul tuo store" (velocità, URL con traffico, flusso d'acquisto, tracking, cosa cambierebbe su Shopify). È coerente con il modo in cui lavori già (Loom in sprint). Alternativa più leggera: la demo dashboard `/it/demo-dashboard`.
- **Link unico nei messaggi**: `https://noprob.agency/it/sprint-migrazione-shopify?utm_source=gojiberry&utm_medium=linkedin&utm_campaign=sprint-it` (e `utm_medium=email` per le email). Il form passa le UTM nell'email di candidatura: così vedi quali vengono da qui.
- **Website visitors** (quando attivi lo script): limite 50 aziende/mese, solo Italia, cookie banner con avvio dopo consenso, una riga in privacy policy (regola 8 di AGENT.md: aggiorna legal.ts e LEGAL_LAST_UPDATED).
- **First-party signal**: quando arriva una candidatura dal form, `POST /v1/contact/{id}/signals` con intent "Ha inviato la candidatura allo Shopify Launch Sprint (tier X)". Lo fa Claude, o un hook nel route handler (in un secondo momento).

---

## 11. Limiti e impostazioni sender ✅

| Impostazione | Settimane 1-2 | Settimane 3-4 | Dal mese 2 |
|---|---|---|---|
| Inviti / giorno | 8 | 15 | 20-25 (solo se acceptance > 30%) |
| Messaggi / giorno | 15 | 25 | 35 |
| Visite profilo / giorno | 25 | 40 | 60 |
| Giorni attivi | lun-ven | lun-ven | lun-ven |
| Ora di lancio | 9:00 Europe/Rome | 9:00 | 9:00 |
| Proxy | Italia | Italia | Italia |
| Review Mode | ON | ON sui nuovi segnali | OFF sui segnali collaudati |

Email (quando le mailbox sono pronte): ramp-up automatico 2 → 30 al giorno, open tracking OFF il primo mese, unsubscribe ON, dominio secondario (es. noprob-sprint.it o getnoprob.it, ✏️ scegli tu) con redirect alla landing, SPF/DKIM/DMARC, 2 mailbox Google Workspace o 2 DFY.

---

## 12. Compliance pronta all'uso 🟡 (da validare con un legale prima della campagna email)

**LinkedIn**: nessun opt-out obbligatorio, ma chi dice "non mi interessa" va messo `excluded` e non più toccato.

**Email**, in ogni messaggio:

> Ti scrivo al tuo indirizzo di lavoro perché il tuo ruolo in [Company] riguarda l'eCommerce; base giuridica: legittimo interesse (art. 6.1.f GDPR). Dati dal tuo profilo pubblico LinkedIn e dal sito aziendale. Informativa: https://noprob.agency/it/privacy-policy. Se non vuoi ricevere altre email, rispondi "stop" o usa il link qui sotto: cancelliamo i dati entro 48 ore.

**LIA (scheletro da far compilare al legale)**: finalità (proporre un servizio B2B pertinente al ruolo), necessità (nessun mezzo meno invasivo con la stessa efficacia), bilanciamento (una email + un follow-up, opt-out un click, nessuna profilazione, dati professionali pubblici), garanzie (suppression list, cancellazione 48 ore, registro trattamenti "prospezione commerciale B2B", DPA con Gojiberry richiesto al supporto), revisione trimestrale.

**Cosa NON fare**: email a ditte individuali e liberi professionisti senza consenso (preferisci LinkedIn), liste comprate, più di 2 email, scraping extra fuori da Gojiberry.

---

## 13. Payload API pronti (per Claude via MCP o curl) ✅

Ordine obbligatorio: lista → source agent → campagna. Base `https://ext.gojiberry.ai`, header `Authorization: Bearer <KEY>`. Gli id dei seat li prendi da `GET /v1/email-seat` e dalla pagina sender (LinkedIn seat id visibile anche via `get_campaign` di una campagna creata in UI). Le `variables` con URL LinkedIn sono ✏️ da completare.

```json
POST /v1/list
{ "name": "Sprint IT · piattaforme non Shopify" }
```

```json
POST /v1/agent
{
  "name": "Sprint IT · piattaforme non Shopify",
  "listId": <LIST_ID>,
  "agentType": "autopilot",
  "targetJobTitles": ["Founder","Co-founder","CEO","Amministratore delegato","Titolare","General Manager","eCommerce Manager","E-commerce Director","Head of eCommerce","Head of Digital","Digital Manager","Marketing Manager","Responsabile marketing","CMO","Responsabile eCommerce"],
  "targetIndustries": ["Retail","Apparel & Fashion","Luxury Goods & Jewelry","Cosmetics","Health, Wellness & Fitness","Food & Beverages","Consumer Goods","Sporting Goods","Furniture","Wholesale"],
  "targetCompanySizes": ["2-10","11-50","51-200","201-500"],
  "targetLocations": ["Italy"],
  "targetCompanyTypes": ["Privately Held","Partnership","Self-Owned"],
  "mandatoryKeywords": ["ecommerce","e-commerce","eCommerce","negozio online","shop online","vendita online","online store","DTC","direct to consumer","brand","retail"],
  "ignoredCompanies": ["Shopify","Amazon"],
  "excludeServiceProviders": true,
  "includeOpenToWorkProfiles": false,
  "skipIcpFilter": false,
  "leadWaterfall": true,
  "minLeadScore": 0.8,
  "variables": [
    { "type": "TECHNOLOGY", "value": "woocommerce" },
    { "type": "TECHNOLOGY", "value": "prestashop" },
    { "type": "TECHNOLOGY", "value": "magento" },
    { "type": "SEARCH_KEYWORD", "value": "\"WooCommerce\"" },
    { "type": "SEARCH_KEYWORD", "value": "\"migrazione Shopify\"" },
    { "type": "SEARCH_KEYWORD", "value": "\"Shopify\"" },
    { "type": "SEARCH_KEYWORD", "value": "\"eCommerce manager\"" },
    { "type": "HIRING", "value": "true" },
    { "type": "NEW_DECISION_MAKER", "value": "true" },
    { "type": "RECENTLY_CHANGED_JOB", "value": "true" },
    { "type": "RECENT_FUNDING_EVENT", "value": "true" },
    { "type": "COMPETITOR_PAGE_URL", "value": "https://www.linkedin.com/company/<AGENCY-1>" },
    { "type": "INFLUENCER_PAGE_URL", "value": "https://www.linkedin.com/in/<CREATOR-1>" }
  ]
}
```

```json
POST /v1/campaign
{
  "name": "Sprint IT · LinkedIn A",
  "listIds": [<LIST_ID>],
  "linkedinSeatId": <LINKEDIN_SEAT_ID>,
  "language": "it",
  "active": false,
  "steps": [
    { "type": "visitProfile", "delayAfterLastStep": 1 },
    { "type": "likePosts", "numberOfPosts": 1, "delayAfterLastStep": 1 },
    { "type": "invitation", "delayAfterLastStep": 1 },
    { "type": "message", "messageMode": "ai", "delayAfterLastStep": 1 },
    { "type": "message", "messageMode": "ai", "delayAfterLastStep": 3 },
    { "type": "message", "messageMode": "ai", "delayAfterLastStep": 6 }
  ]
}
```

Dallo schema OpenAPI (campo `steps`): tipi validi `invitation`, `invitationNote`, `message`, `voiceMessage`, `visitProfile`, `likePosts`, `email`; `delayAfterLastStep` in giorni, intero ≥ 1 (default 2); `messageMode` `ai` oppure `same` (testo fisso con variabili `[FirstName]`, `[Company]`, `[JobTitle]`, `[SenderFirstName]`...; LinkedIn max 1900 caratteri, le email vogliono anche `subject`); `invitationNote` richiede `note` (max 180 caratteri, 280 con Sales Navigator); `voiceMessage` richiede `url` dell'audio (la voce AI si imposta in UI); `likePosts` accetta `numberOfPosts` 1-3. L'AI template da usare per step si assegna in UI (Campaign → step → Use a template). Attiva con `PATCH /v1/campaign/{id}/status`.

---

## 14. Prompt da dare a Claude il giorno 0 (dopo `claude mcp add`) ✅

1. "Elenca i tool Gojiberry disponibili e dimmi quali consumano crediti."
2. "Leggi il Workspace e l'ICP dell'agente creato dall'onboarding e confrontali con docs/research/gojiberry-setup-kit.md sezioni 2 e 4: proponi le modifiche e applicale con update_agent dopo il mio ok."
3. "Crea la lista 'Sprint IT · piattaforme non Shopify', l'agente con l'ICP e i segnali della sezione 4 (chiedimi gli URL mancanti), e la campagna A in stato non attivo."
4. "Mostrami i primi 20 lead trovati con segnale, fit e azienda: per ognuno proponi approva o rifiuta e il motivo. Applica dopo il mio ok (readyForCampaign / reject)."
5. "Genera l'anteprima dei messaggi L1 per 5 lead approvati e riscrivili se violano le regole della sezione 7."
6. Ogni mattina: "Riassumi le risposte in unibox di ieri, segna gli Interested, proponi una risposta per ciascuno."
7. Ogni venerdì: "Report della settimana: inviti, acceptance, reply rate per segnale e per job title, lead rifiutati e perché. Proponi i segnali da spegnere."

---

## 15. Checklist giorno 0 ✏️

- [ ] 2FA LinkedIn via app, inviti vecchi ritirati, nessun altro tool attivo
- [ ] Registrazione con https://noprob.agency, correzione di Workspace e ICP con le sezioni 2 e 4
- [ ] Sender: proxy Italia, limiti settimane 1-2, orari 9-18 lun-ven, lingua italiano
- [ ] Template L1, L2, L3 creati e assegnati agli step
- [ ] Review Mode ON, preview 5 lead, lancio
- [ ] API key creata, MCP collegato, `tools/list` verificato
- [ ] Blocklist caricata
- [ ] Supporto: VAT ID per fattura, DPA richiesto
- [ ] Dominio secondario comprato e 2 mailbox in ramp-up (per la settimana 3)
- [ ] URL competitor e creator per i segnali 11-12
- [ ] Testo Loom: scaletta di 10 minuti pronta (velocità, URL con traffico, checkout, tracking, cosa cambierebbe)
