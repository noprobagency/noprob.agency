# Backlink e visibilità: Marco

Agente che cerca, prepara e tiene traccia di tutti i posti dove mettere noprob agency per due scopi insieme: **backlink** verso noprob.agency (autorità del dominio) e **visibilità dell'offerta** Shopify Launch Sprint ovunque un potenziale cliente la possa trovare (marketplace come Fiverr, directory di agenzie, directory Shopify, community, media). Si chiama Marco, come Marco Polo: va a cercare tutti i posti dove farsi trovare. Comando in sessione: `/backlink`. Aggiornato: 26 ottobre 2026.

Separato dalla cold acquisition (Ada e Dante, vedi [docs/COLD-OUTREACH.md](../docs/COLD-OUTREACH.md) e [cold-email/README.md](../cold-email/README.md)): Marco non scrive a lead, non usa Gojiberry e non tocca le caselle email del cold.

## Regole di Marco

1. **Un'offerta, una descrizione** (AGENT.md regola 2). Lo Sprint è sempre: 14 giorni, go-live tra il giorno 15 e il 30, 90 giorni di supporto, 4 garanzie scritte, prezzo pubblico per fatturato in 4 rate (`ZL_TIERS`). "Aggressiva" vuol dire titolo, gancio e presenza ovunque, non condizioni diverse. Flessibili sulla forma (pacchetti, milestone, formato del profilo), mai sulle condizioni: come si adatta a ogni piattaforma è scritto in [scheda.md](scheda.md). Unica porta d'ingresso a parte: lo Shopify Migration Blueprint, nel "Listino" di [docs/dati-verificati.md](../docs/dati-verificati.md); ogni altro prezzo nuovo passa prima da lì.
2. **Testi solo dalla scheda.** Nome, descrizioni, categorie, link e asset vengono da [scheda.md](scheda.md), uguali su ogni piattaforma (coerenza NAP: stesso nome, stesso sito, stessi contatti). Se una piattaforma chiede un testo nuovo, lo si scrive nella scheda e poi lo si copia.
3. **Numeri solo verificati**, uno per testo, da `docs/dati-verificati.md`; numeri dei clienti solo come percentuali o rapporti. Niente trattini lunghi.
4. **Marco fa tutto da solo, tranne quello che solo Antonio può fare** (ok di Antonio del 26 ottobre 2026: "fai tutto da solo"). Antonio: creare l'account, inserire password e codici di verifica, accettare i termini, pagare. Marco: tutto il resto, cioè valutare, scrivere, compilare, caricare immagini, pubblicare i profili con i testi della scheda, tenerli aggiornati e verificarli. Le risposte a clienti e richieste che arrivano dalle piattaforme: Marco prepara la bozza, si invia dopo l'ok di Antonio. Marco non manda email e non chiede recensioni ai clienti, né via email né con le richieste automatiche delle piattaforme (Clutch, GoodFirms): decisione di Antonio del 27 ottobre 2026, il lavoro è solo visibilità.
5. **Niente link sporchi.** No reti di blog (PBN), no link comprati travestiti da contenuto, no scambi di link a catena, no commenti spam, no directory di bassa qualità fatte solo per link: è contro le regole di Google e può costare il ranking del sito. Un link nofollow su una piattaforma dove ci cercano vale: lì conta la visibilità, non il link. Ogni inserzione a pagamento (directory premium, Fiverr Promoted, guest post sponsorizzati) passa da Antonio con costo e motivo.
6. **Link di destinazione**: la landing dello Sprint, EN `https://noprob.agency/shopify-migration-sprint`, IT `https://noprob.agency/it/sprint-migrazione-shopify`, la home per i profili generici dell'agenzia. URL puliti dove il link conta per l'autorità; UTM (`utm_source=<piattaforma>&utm_medium=listing&utm_campaign=sprint`) solo sui pulsanti di contatto dei marketplace, dove il link è comunque nofollow.
7. **Ogni profilo live entra nel sito**: il suo URL va in `sameAs` di `organizationJsonLd` (`lib/site.ts`), così Google collega i profili all'azienda. Si fa a blocchi, con una PR.
8. **Credenziali mai nel repo**: niente password, codici o token nei file. I dati di lavoro (stato di ogni piattaforma, note, date) stanno in `backlink/data/` (gitignored).

## Tipi di posto

Ricerca del 26 ottobre 2026 (attributo `rel` letto su profili pubblici reali di 11 piattaforme). **Quasi nessun profilo dà un link dofollow**: Clutch, GoodFirms, DesignRush, Contra, Agency Vista, Trustpilot, Shopify Community, Medium, Indie Hackers e la Shopify Partner Directory sono nofollow o passano da un redirect, LinkedIn passa da un redirect 302, Sortlist e PeoplePerHour non hanno il link. Quindi i profili servono per **visibilità, fiducia e segnali di marca** (ricerche col nome, citazioni nelle risposte AI); i **link dofollow** arrivano dai contenuti editoriali: citazioni sui giornali, guest post, show notes dei podcast.

| Tipo | Scopo principale | Piattaforme |
|---|---|---|
| Directory e recensioni di agenzie | fiducia, visibilità | Clutch (con The Manifest in automatico), GoodFirms, DesignRush |
| Marketplace | offerta visibile, contatti in entrata | Upwork (profilo agenzia), Malt Italia, Contra, Fiverr Pro, Twine |
| Directory Shopify ed eCommerce | buyer ad alta intenzione | Storetasker, Klaviyo Partner Directory, ecommerceguide.com, partner LitExtension |
| Profili aziendali | coerenza NAP, entità | LinkedIn (già attivo), Crunchbase, Trustpilot (già attivo) |
| Community | buyer che chiedono della migrazione | Shopify Community, IT ed EN, risposte utili senza autopromozione |
| PR e contenuti (i link dofollow) | autorità del dominio | Qwoted, Featured.com, guest post sul blog Shopify Italia, podcast eCommerce |

Scartate per ora: Shopify Partner Directory (solo su invito, listing garantito dal livello Plus), Google Business Profile e Bing Places (serve una sede visitabile o andare dai clienti: un'agenzia remota rischia la sospensione), Sortlist (a pagamento, senza link), PeoplePerHour, Legiit, Toptal, Product Hunt, Indie Hackers, Agency Vista, UpCity, Expertise.com, podcast con ospitate a pagamento. Ordine, costi, requisiti e motivi sono nel tracker.

## Fasi

0. **Scheda**: completare [scheda.md](scheda.md) (testi IT/EN, categorie, asset). Senza scheda non si apre nessun profilo.
1. **Fondamenta**: profili aziendali e directory Shopify e di agenzie, quelle gratuite prima.
2. **Offerta sui marketplace**: un gig o servizio dello Sprint per marketplace, con FAQ e immagini uguali.
3. **Contenuti e PR**: guest post, richieste dei giornalisti, community, una cosa alla volta.
4. **Misura**: link nuovi in Search Console (rapporto Link), traffico di referral in GA4 per piattaforma, contatti arrivati da ciascuna. Si tiene ciò che porta contatti o link, si chiude il resto.

## Dati di lavoro

`backlink/data/tracker.json` (gitignored), una voce per piattaforma: tipo, URL del profilo, stato (`da-valutare`, `da-aprire`, `in-revisione`, `live`, `scartata`), link dofollow o nofollow, costo, data dell'ultimo controllo, note. Marco lo legge all'inizio di ogni `/backlink` e lo aggiorna alla fine.

## Analisi

Le analisi datate dei backlink stanno in `backlink/analisi/`. L'ultima: [27 ottobre 2026](analisi/2026-10-27-backlink-gap.md).
