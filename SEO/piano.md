# Piano SEO

Roadmap di Francesca. Cosa si fa e in che ordine è in [calendario.md](calendario.md); qui il perché. Posizioni assolute e volumi dettagliati stanno in `SEO/data/` (snapshot `audit/2026-10-27.json`, `keyword.json`). Regole e team in [README.md](README.md).

## Stato

- Fase 0 (casa): fatta il 27 ottobre 2026 (v1.51.0).
- Fase 1 (audit): primo giro fatto il 27 ottobre 2026, due fix in produzione (v1.53.0 robots, v1.54.0 description).
- Fase 2 (keyword e concorrenti): fatta il 27 ottobre 2026 ($0,56). Esito qui sotto, dettagli in `SEO/data/fase2-2026-10-27.json`.
- Calendario: voci 6-13 e 15-24 eseguite il 27 e 28 ottobre 2026 su richiesta di Antonio (llms.txt, cover a puntini, home con lo Sprint in testa, 15 articoli IT ed EN nel blog, v1.61.0 - v1.78.0). Restano la revisione mensile (voce 14, a fine novembre) e l'articolo sul Custom AI System (voce 25, servono i dati di velocità).
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
