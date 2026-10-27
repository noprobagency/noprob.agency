---
name: seo-revisione
description: Checklist di revisione dei contenuti SEO di noprob.agency (pagine, articoli, casi studio, llms.txt), IT ed EN. Caricata dal revisore del team SEO di Francesca prima di ogni PR di contenuto.
---

# Checklist di revisione

Riferimenti: `.claude/skills/seo-voce/SKILL.md` (voce e schema), `docs/dati-verificati.md` (numeri), `AGENT.md` (regole). Ogni punto è bloccante salvo dove scritto "miglioramento".

## Dati e offerta
1. Ogni numero del testo è in `docs/dati-verificati.md` (stesso valore, stesso contesto). Numeri dei clienti solo come percentuali, moltiplicatori o indici.
2. Lo Sprint è descritto esattamente: 14 giorni, go-live giorno 15-30, 90 giorni di supporto, 4 garanzie scritte, €5.800 / €8.800 / €12.800 in 4 rate. Niente promesse di risultato fuori dalle garanzie.
3. Nessun caso studio attribuito alla piattaforma sbagliata (Nazzi da WooCommerce, Cumini da piattaforma proprietaria, DDglobal non è Shopify).

## Lingue
4. IT ed EN dicono la stessa cosa: stesse sezioni, stesse FAQ, stessi numeri, stessi link (nella lingua giusta: `/it/...` nel testo IT).
5. IT: niente "business", "videochiamata" invece di "call". "Custom AI System" mai tradotto, mai "tema" da solo.
6. Nessun trattino lungo (esegui `pnpm check:em-dash`). Nessuna frase che collochi Antonio o l'azienda in Italia.

## SEO on page
7. Title SEO sotto 65 caratteri, description sotto 160, in entrambe le lingue (conta i caratteri).
8. Keyword principale nel title, nell'H1 e nel primo paragrafo; nessuna ripetizione forzata (miglioramento se manca nelle H2).
9. Un solo H1; H2 e H3 in ordine logico.
10. Link interni: Sprint presente e prima di ogni CTA di contatto, poi la guida alla migrazione, poi un caso studio. Percorsi esistenti (controlla in `lib/i18n/routes.ts`).
11. Almeno 2 link esterni a fonti autorevoli, raggiungibili.
12. Articoli: chiusura obbligatoria presente; `dateModifiedIso` aggiornato se è una modifica; FAQ con risposte brevi e autonome.

## Qualità (miglioramenti)
13. Ogni sezione apre con una frase che risponde da sola alla domanda dell'H2.
14. Il testo serve davvero chi deve migrare (passi concreti, rischi, cosa controllare), niente riempitivo né pagine fotocopia.

Formato della risposta: prima riga `PASSA` o `NON PASSA`; poi una riga per problema: `[bloccante|miglioramento] file:campo · problema · correzione`.
