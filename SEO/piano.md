# Piano SEO

Roadmap di Francesca. Cosa si fa e in che ordine è in [calendario.md](calendario.md); qui il perché. Posizioni assolute e volumi dettagliati stanno in `SEO/data/` (snapshot `audit/2026-10-27.json`, `keyword.json`). Regole e team in [README.md](README.md).

## Stato

- Fase 0 (casa): fatta il 27 ottobre 2026 (v1.51.0).
- Fase 1 (audit): primo giro fatto il 27 ottobre 2026, due fix in produzione (v1.53.0 robots, v1.54.0 description).
- Fase 2 (keyword e concorrenti): in corso.
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
- Per le guide Magento e PrestaShop: confermare se abbiamo esperienza vera su quelle piattaforme.
- Per l'articolo sul Custom AI System: dati di velocità prima e dopo di Nazzi e Cumini.
