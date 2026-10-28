# Piano SEO

Roadmap di Francesca. Cosa si fa e in che ordine è in [calendario.md](calendario.md); qui il perché. Posizioni assolute e volumi dettagliati stanno in `SEO/data/` (snapshot `audit/2026-10-27.json`, `keyword.json`). Regole e team in [README.md](README.md).

## Stato

- Fase 0 (casa): fatta il 27 ottobre 2026 (v1.51.0).
- Fase 1 (audit): primo giro fatto il 27 ottobre 2026, due fix in produzione (v1.53.0 robots, v1.54.0 description).
- Fase 2 (keyword e concorrenti): fatta il 27 ottobre 2026 ($0,56). Esito qui sotto, dettagli in `SEO/data/fase2-2026-10-27.json`.
- Calendario: voci 6-13 e 15-24 eseguite il 27 e 28 ottobre 2026 su richiesta di Antonio (llms.txt, cover a puntini, home con lo Sprint in testa, 15 articoli IT ed EN nel blog, v1.61.0 - v1.78.0). Restano la revisione mensile (voce 14, a fine novembre) e l'articolo sul Custom AI System (voce 25, servono i dati di velocità).
- Revisione completa del sito (4 revisori) e implementazione: 28 ottobre 2026 (v1.80.0 - v1.82.0). Sitemap rinviata a Search Console e indicizzazione chiesta per 10 URL; le altre 54 vanno a 10 al giorno con il task `gsc-richiesta-indicizzazione`.
- Roadmap AI e agenti: 28 ottobre 2026 ($0,47), qui sotto. Il calendario da novembre segue quest'ordine.
- Da qui si lavora per voci del calendario, lanciate da Antonio con `/seo prossima`.

## Decisioni di Antonio (27 ottobre 2026)

- Il sito resta com'è: agenzia Shopify con più servizi, lo Sprint come offerta da spingere. Niente cambi drastici di struttura né di offerta. Una verticalizzazione (forse un'offerta CRO o un agent per Shopify) si decide più avanti.
- Unico cambio di struttura: "Shopify Migration" nel menu porta allo Sprint; la pagina `/shopify-migration` resta e diventa la guida alla migrazione.
- Nessun automatismo: ogni voce la lancia Antonio dalla chat; il calendario è una guida, non un obbligo.

## Audit del 27 ottobre 2026

**Tecnica: sana.** 36 URL in sitemap, tutte 200, canonical giusto ovunque, hreflang reciproci IT/EN con x-default, `lang` corretto, un H1 per pagina, title sotto 65, og:image ovunque, redirect http e slash finale in 308. Corretti subito: `robots.txt` bloccava `/_next/` (v1.53.0); description sopra 160 su Sprint IT/EN e articolo CRO IT (v1.54.0).

**Visibilità: quasi zero.** Si posiziona solo per il nome; fuori dalla top 30 su tutte e 6 le ricerche della migrazione misurate (3 IT, 3 US). Search Console, 30 giorni: 11 clic, quasi tutti sul nome.

**Contenuto.** Nelle SERP della migrazione vincono landing di servizio e guide per piattaforma di partenza (WooCommerce, Magento, Wix), più classifiche "best agencies", Reddit e YouTube. Noi abbiamo 3 articoli, nessuno sulla migrazione.

**Cannibalizzazione.** `/shopify-migration` e la landing dello Sprint vendono la stessa offerta (stessi prezzi, stesso form) e puntano alla stessa ricerca. Si risolve con il cambio di struttura qui sotto.

**Domanda di ricerca.** In Italia le ricerche sulla migrazione sono quasi tutte sotto le 10 al mese: lì si vince presto, ma porta pochi contatti. Negli Stati Uniti ci sono volumi veri con CPC da 25 a 60 dollari. Ogni contenuto nasce in IT ed EN; l'ordine delle guide segue soprattutto i dati EN.

## Fase 2 (27 ottobre 2026)

- **USA, le occasioni più grandi a difficoltà bassa**: confronti tra piattaforme ("woocommerce vs shopify", "wix or shopify", "squarespace or shopify", da 590 a 1.000 ricerche al mese ciascuna), migrazione e SEO ("website migration seo" e le varianti "checklist", da 210 a 260), servizi ("shopify migration services", 260-320, difficoltà 4), Magento verso Shopify (3 varianti da 210). Vincono guide e articoli; sui servizi vincono landing e classifiche.
- **Italia**: volumi minimi; i confronti ("shopify o woocommerce", "woocommerce vs shopify") sono le uniche ricerche con un po' di domanda, a difficoltà zero.
- **Concorrenti**: LitExtension e We Are Presta prendono i grandi confronti con un articolo per piattaforma; Optimum7 e The Commerce Shop hanno una pagina per ogni piattaforma di partenza; Craftberry tiene "shopify migration experts" con una classifica. Noi: zero keyword Shopify posizionate.
- **Search Console (90 giorni)**: solo nome e qualche impressione; "shopify migration agency" mostra `/shopify-migration` intorno alla posizione 50 (passerà allo Sprint). Le uniche ricerche non di nome dove compariamo sono sul CRO ("cro ecommerce", "shopify cro"): utile se arriverà un'offerta CRO.
- **Ordine del calendario rivisto** su questi dati: prima i confronti e la migrazione senza perdere la SEO, poi le guide per piattaforma.

## Cluster AI (ricerca del 27 ottobre 2026)

Su richiesta di Antonio: AI, Shopify AI, eCommerce AI, agenti, GEO. Dettagli in `SEO/data/ai-cluster-2026-10-27.json` ($0,42).
- **Volumi molto più alti della migrazione, anche in Italia**: USA "agentic commerce" 5.400, "geo vs seo" 2.900 (difficoltà 9), "geo seo" 2.400, "ai ecommerce" 1.900, "chatgpt shopping" 1.000, "shopify magic" 720 (difficoltà 4); Italia "geo seo" e "ai seo" 480 ciascuna, "seo per ai" 210, "ai ecommerce" 140, quasi tutte a difficoltà bassa.
- **Cosa pubblica Shopify**: Agentic Storefronts (una configurazione per ChatGPT, Perplexity, Copilot), guida all'agentic commerce 2026, dati sugli acquirenti che arrivano dalle AI, Catalog API e UCP per chi costruisce agenti.
- **Concorrenti**: quasi assenti. LitExtension ha una sola pagina Shopify più AI in top 10; nessuna agenzia di migrazione presidia GEO o agentic commerce per Shopify.
- **Spazi vuoti**: nessuna guida su come comparire in ChatGPT shopping con Shopify; GEO per schede prodotto e feed Shopify assente; `llms.txt` per Shopify non coperto; nessuna spiegazione aggiornata di Magic contro Sidekick; in Italia nessuna pagina AI specifica per Shopify.
- **Angolo nostro**: Custom AI System, `llms.txt` già online sul sito, AI Accelerator, l'esperienza di Antonio (intervistatrice).

## Roadmap AI e agenti (28 ottobre 2026)

Richiesta di Antonio: spingere su AI e agenti per eCommerce e Shopify, usando come fonte di idee il suo libro sugli agenti AI (in scrittura, non pubblicato) e scavando di più con treg. Dati in `SEO/data/ai-agenti-2026-10-28.json` e `SEO/data/ai-agenti-2026-10-28.md` (treg, $0,47); idee dal libro in `SEO/data/libro-temi-2026-10-28.md`.

**Cosa dicono i dati**
- **Il buco più grande è MCP.** "shopify mcp" ha 1.000 ricerche al mese negli USA, difficoltà 22, +81% in un anno, e nei primi 7 risultati non c'è Shopify ufficiale. Con "shopify mcp server" (320) e "shopify storefront mcp" fa un solo articolo; nel blog MCP non compare mai.
- **Agenti per eCommerce: domanda piccola ma libera.**
  - "ai agents for ecommerce" (210, difficoltà 0, in SERP Reddit e software) e "shopify ai agent" (170, CPC $15,61, raddoppiato su Trends) vanno in una pagina pilastro.
  - "ai shopping agents" (320, difficoltà 19) rafforza l'articolo sull'agentic commerce.
- **Italia, la crescita più netta.**
  - "agenti ai" ha 1.600 ricerche (+39%), "agenti ai cosa sono" 390, "creare agenti ai" 260 (difficoltà 0, +191%).
  - Le SERP sono di IBM, Google e Microsoft: nessuno parla agli store.
  - Nelle domande frequenti torna il costo: "Quanto costa un agente IA?".
- **Claude e Shopify sono un tema vero ma instabile.**
  - "shopify claude code" è cresciuto del 200%, "claude shopify connector" ha 50 ricerche.
  - Nelle ricerche fatte dentro gli strumenti AI "claude shopify" ha toccato 210 a giugno, poi è sceso a 47.
  - Qui conta l'esperienza vera di Antonio: lavora ogni giorno con agenti su Claude Code.
- **Si cerca sempre di più dentro le AI.** In 12 mesi le ricerche fatte dentro gli strumenti AI sono cresciute così:
  - "agentic commerce" da 23 a 234;
  - "shopify agentic" da 5 a 55;
  - "chatgpt shopping" da 36 a 106.

  Su Google "shopify agentic", "agentic storefront" e "universal commerce protocol" sono di Shopify e Google (difficoltà 44-55): si aggiornano gli articoli esistenti, senza inseguirle.
- **Visibilità nelle risposte AI: zero.**
  - noprob.agency non compare in 9 risposte reali (ChatGPT, Perplexity, AI Mode di Google) né nel database delle menzioni.
  - Chi viene citato come agenzia (Craftberry, Swanky, Atwix, Netalico; in Italia ICT Sviluppo e Advantage Commerce) ci arriva da classifiche di terzi e dalla directory dei partner Shopify: è lavoro di Marco.
  - "Come migro da Magento a Shopify con l'aiuto dell'AI" non cita nessuno: domanda senza padrone, la prende l'articolo sulla migrazione con gli agenti.

**Il libro di Antonio.**
- È una guida operativa ai pattern degli agenti (routing, tool use, reflection, planning, memoria, più agenti, valutazione), con l'esempio di un negozio online che cresce capitolo dopo capitolo.
- Dà la struttura e il ragionamento a una ventina di articoli per chi ha uno store e a una serie sulla migrazione fatta con gli agenti. Gli articoli si scrivono da zero: regole in `.claude/skills/seo-voce` ("Il libro di Antonio").
- Quando Antonio lo conferma, una sua parte diventa lead magnet: il candidato più forte è "La pagella del tuo assistente AI", casi di prova per valutare un assistente, riscritti su uno store Shopify.

**Le tre linee, in ordine (dettaglio nel calendario, voci 30 e 32-41)**
1. **AI e agenti, contenuti con dati**:
   - GEO vs SEO (2.900, difficoltà 9);
   - Shopify MCP;
   - la pagina pilastro sugli agenti AI per Shopify;
   - "Creare un agente AI per il tuo store" (nasce in IT);
   - Claude e Shopify;
   - l'aggiornamento di agentic commerce con agenti d'acquisto, UCP e ACP;
   - Shopify Flow con l'AI.
2. **Agenti e migrazione, il ponte verso lo Sprint**:
   - "Migrare a Shopify con gli agenti AI", che spiega cosa automatizza il nostro Custom AI System e cosa resta a una persona;
   - la mappa dei redirect 301 in cinque passi con il template da scaricare.
3. **Agenti nello store, il ponte verso l'AI Accelerator**:
   - sicurezza e prompt injection;
   - l'assistente per ordini e resi;
   - come valutare un assistente AI, che fa da base al lead magnet.

Nuovo gruppo "Agenti AI" nel blog quando escono i primi tre articoli. Ogni articolo della linea AI ha un link anche all'AI Accelerator.

**Misura (proposta, la paga Antonio).** Ogni voce va decisa da Antonio:
- Citazioni AI una volta al mese, 10 domande su ChatGPT, Perplexity e AI Mode: circa $0,11.
- Posizioni su 40 keyword con AI Overview e People Also Ask: da $0,15 a $0,45 al mese.
- Volumi e ricerche AI aggiornati: circa $0,04 al mese.
- Menzioni ufficiali nelle AI, una volta a trimestre: $0,20.
- Una tantum, per Marco: backlink gap con 3 agenzie citate (circa $0,10) e keyword delle agenzie "AI agents" citate da ChatGPT ($0,04).
- Totale: da $0,3 a $0,7 al mese.
- Da non comprare: classifiche dei brand più citati e clickstream (care e poco utili qui).

## Regole dei contenuti (Antonio, 27 ottobre 2026)

- Ogni guida e ogni articolo va nel blog, è unico e mai ricalcato da altri siti; porta l'esperienza di Antonio (intervista prima della scrittura, quando possibile).
- Magento e PrestaShop: si scrivono comunque, senza casi su quelle piattaforme; la prova sono il nostro processo e i casi Nazzi e Cumini, detto chiaramente.
- Cover del blog standard: colore e pattern a puntini diversi per ogni articolo, nessun testo, generate da uno script.
- Home: la migrazione diventa il primo servizio, con un box nuovo nello stile della landing dello Sprint e l'AI in evidenza.

## Struttura (le uniche modifiche)

1. **Menu verso lo Sprint**: la voce "Shopify Migration" / "Migrazione Shopify" (navbar, footer, card in home, contatto fisso) porta a `/shopify-migration-sprint` e `/it/sprint-migrazione-shopify`. Il pulsante "Sprint" resta.
2. **`/shopify-migration` diventa la guida**: stesso URL, intento informativo ("migrazione a Shopify", "migrate to Shopify"); lo Sprint tiene l'intento commerciale ("shopify migration services", "agenzia migrazione shopify"). Contenuto: piattaforme di partenza, cosa si migra, redirect 301 e SEO, tracking, tempi, rischi, costi (rimando al prezzo pubblico dello Sprint), checklist, casi Nazzi e Cumini, FAQ. Via prezzi e form duplicati; JSON-LD `Article` o `WebPage` + `FAQPage` + `BreadcrumbList` al posto di `Service` + `AggregateOffer`.

## Backlog tecnico

1. Helper condiviso `BreadcrumbList` (oggi solo su AI Accelerator) su servizi, guida, casi studio e articoli.
2. JSON-LD `Service` su `/it/team-ecommerce-dedicato` (l'EN ce l'ha).
3. La CTA in fondo agli articoli porta allo Sprint (oggi al Data-Driven Team), come chiede il runbook.
4. Test Vitest sulle lunghezze di title (65) e description (160) di pagine, articoli e casi studio, e sulle coppie IT/EN delle rotte.
5. `public/llms.txt` con guida, articoli e casi con la piattaforma di partenza.
6. Meta dei casi studio orientate alla ricerca: Nazzi "WooCommerce to Shopify migration", Cumini "custom platform to Shopify".
7. `www.noprob.agency` reindirizza con 307: va messo 308 su Vercel (lo fa Antonio).

## Contenuti

Un contenuto a settimana, IT ed EN insieme, nell'ordine del calendario. Solo dove abbiamo qualcosa di vero da dire: guide per piattaforma con fonti ufficiali; landing di servizio per piattaforma solo dopo la revisione di fine novembre e solo con un caso o un'esperienza dimostrabile. Le classifiche "best agencies" in SERP sono lavoro di Marco (`SEO/data/per-marco.md`).

## Cosa serve da Antonio

- Vercel, Domains: redirect di `www.noprob.agency` permanente (308).
- Per l'articolo sul Custom AI System: dati di velocità prima e dopo di Nazzi e Cumini.
- Sì o no alla misura mensile con treg (citazioni AI, posizioni, volumi: da $0,3 a $0,7 al mese).
- Un'intervista di 20 minuti prima degli articoli su Claude e Shopify e sulla migrazione con gli agenti: come lavori davvero con gli agenti.
- Il libro: quando è confermato, l'ok per il lead magnet e per citarlo sul sito (pagina autore, link dal sito del libro).
