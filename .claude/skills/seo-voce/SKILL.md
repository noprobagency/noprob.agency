---
name: seo-voce
description: Voce e regole di scrittura dei testi pubblici di noprob.agency (pagine, articoli del blog, casi studio, llms.txt), IT ed EN. Caricata dalla scrittrice del team SEO di Francesca; utile a chiunque scriva copy del sito.
---

# Voce del sito noprob.agency

Fonti: `AGENT.md` (regole 1-4, runbook blog), `docs/ARCHITECTURE.md` ("Blog architecture and SEO"), `docs/dati-verificati.md`. In caso di dubbio vincono loro.

## Voce

- Parliamo come **noi** (il team), diretti e concreti, a un founder o responsabile eCommerce. Frasi brevi, fatti, nessuna enfasi da agenzia.
- Promettiamo solo ciò che garantiamo per iscritto, mai risultati ("+30% di vendite" mai come promessa).
- IT: niente "business"; "call" diventa "videochiamata" (tranne "pre-call"). EN: plain, specifico, niente gergo.
- **Niente trattini lunghi** (né em dash né en dash come inciso): virgole, parentesi o due punti. `pnpm check:em-dash` lo blocca.
- "Custom AI System" non si traduce mai. Mai "tema" o "theme" da solo, mai "tema pronto" o "premium", mai "Custom AI theme".
- Residenza: mai scrivere o far intendere che Antonio o l'azienda siano o operino in Italia (niente "agenzia italiana", sedi o indirizzi italiani). Scrivere in italiano per brand italiani va bene.
- IT ed EN dicono la stessa cosa, adattati alla lingua (non tradotti parola per parola), con la keyword di ciascuna lingua.

Esempi della voce (dalla landing dello Sprint e dal blog):
- "Store offline al lancio per colpa nostra? Una rata la paghiamo noi."
- "Store ready on day 14 or we refund the first installment."
- "Code written from scratch for your store only: no dead code, no apps slowing it down."
- "Quattordici giorni, un calendario fisso, un referente."
- "Alcuni ti faranno cambiare qualcosa oggi."

## Originalità (regola di Antonio, 27 ottobre 2026)

Ogni guida e ogni articolo è **diverso e unico**: mai riscrivere, parafrasare o ricalcare la struttura di altri siti, nemmeno dei primi risultati di Google. Il brief dice cosa fanno già i primi risultati: serve a fare altro, non a copiarli.
- Parti dall'angolo che solo noi abbiamo: gli appunti dell'intervista ad Antonio (`/Users/antoniomanitta/Documents/noprobagency/SEO/data/interviste/`), i casi Nazzi e Cumini, il nostro processo (Sprint, Custom AI System), opinioni chiare anche controcorrente.
- Struttura propria: titoli, ordine ed esempi pensati per questo pezzo, non la scaletta standard del tema.
- Le fonti esterne si citano e si linkano per i fatti, non si riassumono.
- Le frasi di Antonio dagli appunti si usano quasi alla lettera: sono la sua voce. Ciò che è segnato `da verificare` non va online.

## Lo Sprint, sempre uguale

Shopify Launch Sprint: migrazione a Shopify in **14 giorni** con il nostro Custom AI System, go-live tra il **giorno 15 e il 30**, **90 giorni** di supporto, **4 garanzie scritte**, prezzo pubblico per fatturato (**€5.800, €8.800, €12.800**, IVA esclusa) in **4 rate**. Mai "10 giorni", "4 mesi", "garanzia 30 giorni". Landing: IT `/it/sprint-migrazione-shopify`, EN `/shopify-migration-sprint`.

## Numeri

Solo quelli in `docs/dati-verificati.md`, con la fonte che indica. Clienti solo in percentuali, moltiplicatori o indici, mai valori assoluti (fatturato, ordini, clienti, clic, sessioni). Prova disponibile: Nazzi (da WooCommerce), Cumini (da piattaforma proprietaria legata all'ERP), DDglobal (da WordPress a sito nuovo, non Shopify). Su Magento, PrestaShop, Shopware, BigCommerce, Wix, Squarespace non si citano casi: si parla del metodo dello Sprint, dell'esperienza (oltre 7 anni di progetti eCommerce) e della documentazione ufficiale, senza mai dire che il caso manca.

## Mai negativo su di noi (Antonio, 28 ottobre 2026)

Niente frasi che giocano contro di noi: mancanze ("non abbiamo casi su...", "non ancora", "nessun dato pubblico"), scuse, limiti, toni dimessi o autoironici, meta-frasi tipo "l'articolo lo dice chiaramente". Si toglie, oppure si scrive in positivo: esperienza tecnica alta, metodo, garanzie dello Sprint come sono scritte, casi veri. Cosa non promettiamo si dice come cosa garantiamo. Le critiche agli altri (piattaforme, agenzie generiche) vanno bene.

## Articolo del blog (schema)

- Voce in un file `data/articles/posts/<slug>.ts` (un articolo per file, più una riga di import in `data/articles/index.ts`) con: `slug` (EN) e `slugIt`, `title`/`titleIt`, `seoTitle`/`seoTitleIt` (sotto 65 caratteri, senza il brand: lo aggiunge il template), `seoDescription`/`seoDescriptionIt` (sotto 160), `excerpt`/`excerptIt`, `ledeEn`/`ledeIt`, `content`/`contentIt` (sezioni tipizzate, guarda un articolo esistente), `faqEn`/`faqIt`, `keywordsEn`/`keywordsIt`, `articleSection`, `date`, `datePublishedIso`, `dateModifiedIso`, `readingTimeMinutes`, `wordCount`, `image` (cover standard in `public/images/blog/[slug]-cover.{svg,png}` 1200x630: sfondo a colore con pattern a puntini, senza testo, generata dal tecnico con lo script delle cover), `imageAlt`.
- Keyword principale nel title SEO, nell'H1 (`title`) e nel primo paragrafo; varianti negli H2.
- Testo inline: `[testo](/percorso)` link interno, `[testo](https://...)` link esterno, `**testo**` grassetto.
- **Link interni, in ordine**: 1) lo Sprint, nel corpo o nella conclusione, prima di qualunque CTA di contatto; 2) la guida alla migrazione (IT `/it/migrazione-shopify`, EN `/shopify-migration`); 3) un caso studio pertinente (`/it/casi-studio/<slug>`, `/use-cases/<slug>`).
- **Almeno 2 link esterni** a fonti autorevoli (Shopify help center o blog, Google Search Central, documentazione ufficiale della piattaforma, studi riconosciuti).
- FAQ: 4-6 domande vere che la gente cerca, risposte brevi e citabili (finiscono nel JSON-LD FAQPage e nelle risposte AI).
- **Chiusura obbligatoria**:
  - IT: "Lo [Shopify Launch Sprint](/it/sprint-migrazione-shopify) porta il tuo store su Shopify in 14 giorni con il nostro Custom AI System: calendario fisso, prezzo pubblico e 4 garanzie scritte."
  - EN: "The [Shopify Launch Sprint](/shopify-migration-sprint) moves your store to Shopify in 14 days with our Custom AI System: a fixed calendar, a public price and 4 written guarantees."

## Scrivere per le risposte AI

Ogni sezione apre con una frase che risponde da sola alla domanda dell'H2 (citabile senza contesto), poi i dettagli. Entità chiare: "noprob agency", "Shopify Launch Sprint", "Custom AI System", nomi delle piattaforme scritti per intero.
