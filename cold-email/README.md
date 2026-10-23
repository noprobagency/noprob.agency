# Cold email diretta

Canale di acquisizione a freddo **solo email**, da antonio@noprob.agency, in parallelo e separato da Gojiberry (LinkedIn + email, vedi [docs/COLD-OUTREACH.md](../docs/COLD-OUTREACH.md)). Obiettivo: store che **non** sono su Shopify, offerta Shopify Launch Sprint. Gli store già su Shopify restano da parte per una campagna futura. Aggiornato: 23 ottobre 2026.

## Regole di questo canale

Valgono qui e solo qui; Gojiberry tiene le sue.

1. **Mittente**: antonio@noprob.agency (non è la casella personale di Antonio, che è hello@antoniomanitta.it). hello@noprob.agency è pronta come seconda casella per quando il volume sale.
2. **Sequenza di 5 email** nello stesso thread, giorni lavorativi 0, 3, 7, 12, 18. Si ferma per sempre alla prima risposta umana o al primo bounce; le risposte automatiche (fuori ufficio) non la fermano.
3. **Chi dice no non si riscrive mai**: segmento `suppressed`. Ogni prima email chiude con la riga "PS se non ti interessa scrivimi no e chiudo qui".
4. **Mai due canali sullo stesso store**: ogni domani lo script legge (solo GET) le liste Sprint di Gojiberry, Ada 63200 e Leonardo 64866, e salta i domini che Gojiberry sta già lavorando. Questo canale non scrive mai su Gojiberry.
5. **Un lead per dominio**: una persona con nome vince su info@.
6. **Fonti**: vecchio CRM (aprile-agosto 2026) e, da qui in avanti, liste costruite fuori da Gojiberry (scraping consentito in questo canale). Ogni sito passa dal controllo piattaforma prima di entrare.
7. **Numeri**: solo da [docs/dati-verificati.md](../docs/dati-verificati.md), uno per email. **Fatti**: il gancio PHP cita solo l'avviso [CERT-EU 2026-018](https://cert.europa.eu/publications/security-advisories/2026-018/) e vale solo per piattaforme PHP (WooCommerce, WordPress, Magento, PrestaShop, Shopware); la versione PHP si nomina solo quando il server del lead la espone (header `X-Powered-By`).
8. **Stile**: voce di Antonio, prima persona, poche righe, amichevole e schietto, niente trattini, niente due punti nel corpo, nessun link prima della quinta email.
9. **Dati dei lead**: solo in `cold-email/data/` (gitignored) e nel CRM privato. Mai in file versionati, artifact o chat esterne.

## Sequenza (lib/cold-email/sequence.mjs)

| Step | Giorno | Angolo |
|---|---|---|
| E1 | 0 | Gancio. Store PHP: falla PHP del 21 ottobre (CERT-EU), "lo avete già fatto?". Altri: "non siete su Shopify, scelta o ci state pensando?" |
| E2 | +3 | Migrazione: su Shopify server e sicurezza non sono più un problema vostro, 14 giorni senza perdere Google né vendite |
| E3 | +7 | Caso studio per categoria (moda → Cumini +67,7%, resto → Nazzi +105% nei primi 85 giorni da WooCommerce) |
| E4 | +12 | Scarsità: tanti si muovono, poche migrazioni ancora prima di fine anno, poi gennaio |
| E5 | +18 | Chiusura con l'unico link, noprob.agency/it/migra (EN /migrate), `utm_source=cold-email` per tenerlo separato da Gojiberry |

Ogni cambio ai testi alza `SEQUENCE_VERSION`. Lo script invia solo se `cold-email/data/config.json` ha `"approved"` uguale alla versione corrente: l'ok di Antonio sui testi è quel campo.

## Segmenti (lib/cold-email/leads.mjs)

`target` in sequenza · `warm` ha risposto, si gestisce a mano con priorità · `shopify` messo da parte · `review` da guardare (sito irraggiungibile, stesso dominio, già in Gojiberry) · `suppressed` bounce, opt-out, no.

## Comandi

```bash
node scripts/cold-email-import.mjs <prospects.json>      # import dal vecchio CRM, controllo piattaforma e PHP
node scripts/cold-email-daily.mjs --dry                  # cosa partirebbe oggi, senza inviare
node scripts/cold-email-daily.mjs                        # giro vero (lo fa launchd lun-ven 9:30)
node scripts/cold-email-crm.mjs cold-email/data/crm --push   # aggiorna il CRM
node scripts/cold-email-auth.mjs <client_secret.json>    # una volta: collega Gmail
```

## Automazione

- `scripts/cold-email-daily.mjs` gira lun-ven alle 9:30 Europe/Lisbon (launchd `agency.noprob.cold-email`, file in `cold-email/agency.noprob.cold-email.plist`). Gojiberry manda le sue email alle 9:00 dalla stessa casella.
- Gmail API, non il Gmail MCP: l'MCP funziona solo dentro una sessione Claude, lo script deve girare da solo. Credenziali nel Portachiavi (`cold-email-gmail-client`, `cold-email-gmail-token`).
- Tetto giornaliero in `config.json` (`dailyCap`, partenza 20, poi 30, poi la seconda casella), pausa casuale tra un invio e l'altro (`gapSeconds`).
- Log: una riga al giorno in `cold-email/data/log.md`. CRM: https://crm-noprob.vercel.app (vecchio CRM in `/v2`).

## In sessione con Claude

Il Gmail MCP serve per leggere i thread e rispondere ai caldi: Claude prepara la bozza, Antonio dà l'ok, poi si invia. Prima di toccare i testi della sequenza: cambio in `sequence.mjs`, test verdi (`pnpm test`), anteprima ad Antonio, nuova versione approvata in `config.json`.
