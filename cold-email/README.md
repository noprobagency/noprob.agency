# Cold email diretta

Canale di acquisizione a freddo **solo email**, da antonio@noprob.agency, in parallelo e separato da Gojiberry (LinkedIn + email, vedi [docs/COLD-OUTREACH.md](../docs/COLD-OUTREACH.md)). Obiettivo: store che **non** sono su Shopify, offerta Shopify Launch Sprint. Gli store già su Shopify restano da parte per una campagna futura. Aggiornato: 23 ottobre 2026.

## Regole di questo canale

Valgono qui e solo qui; Gojiberry tiene le sue.

1. **Mittente**: antonio@noprob.agency (non è la casella personale di Antonio, che è hello@antoniomanitta.it). hello@noprob.agency è pronta come seconda casella per quando il volume sale.
2. **Sequenza di 5 email** nello stesso thread, giorni lavorativi 0, 3, 7, 12, 18. Si ferma per sempre alla prima risposta umana o al primo bounce; le risposte automatiche (fuori ufficio) non la fermano.
3. **Chi dice no non si riscrive mai, su nessun canale** (regola del legale): segmento `suppressed`. Lista condivisa con Gojiberry `docs/cold/suppressed.txt` (gitignored, una email o `@dominio` per riga): lo script non scrive a nessuno che ci sia dentro e ci aggiunge chi dice no qui; lo sweep orario di Gojiberry la legge. Ogni prima email chiude con la riga "PS se non ti interessa scrivimi no e chiudo qui".
4. **Mai due canali sullo stesso store**: ogni domani lo script legge (solo GET) le liste Sprint di Gojiberry, Ada 63200 e Leonardo 64866, e salta i domini che Gojiberry sta già lavorando. Questo canale non scrive mai su Gojiberry.
5. **Di massa sullo stesso negozio**: più persone dello stesso store possono essere in sequenza, anche con casella privata (gmail, yahoo...), per scelta di Antonio. Al massimo una prima email al giorno per negozio, e appena una persona del negozio risponde si ferma la sequenza di tutte le altre (segmento `review`, "store replied").
6. **Fonti**: vecchio CRM (aprile-agosto 2026) e, da qui in avanti, liste costruite fuori da Gojiberry (scraping consentito in questo canale). Ogni sito passa dal controllo piattaforma prima di entrare.
7. **Numeri**: solo da [docs/dati-verificati.md](../docs/dati-verificati.md), uno per email. **Fatti**: il gancio PHP cita solo l'avviso [CERT-EU 2026-018](https://cert.europa.eu/publications/security-advisories/2026-018/) e vale solo per piattaforme PHP (WooCommerce, WordPress, Magento, PrestaShop, Shopware); la versione PHP si nomina solo quando il server del lead la espone (header `X-Powered-By`).
8. **Stile**: voce di Antonio, prima persona, poche righe, amichevole e schietto, niente trattini, niente due punti nel corpo, nessun link prima della quinta email.
9. **Dati dei lead**: solo in `cold-email/data/` (gitignored) e nel CRM privato. Mai in file versionati, artifact o chat esterne.

## Agente Gojiberry solo email: Dante

Secondo motore del canale, su Gojiberry e da **hello@noprob.agency** (antonio@ resta al canale diretto e alla campagna LinkedIn). Decisione di Antonio del 26 ottobre: LinkedIn resta alla sessione Gojiberry, l'email a freddo (compreso questo agente) è di questo canale.

| Oggetto | Id | Note |
|---|---|---|
| Agente sorgente | 41228 "Dante · Email Italia" | ex Leonardo, Italia, titolari ed eCommerce più ruoli tecnici (CTO, IT, web manager), segnali tecnologia (WooCommerce, Magento, PrestaShop, Shopware, SFCC) ed eventi, punteggio minimo 0,6 |
| Lista | 65682 | solo questo agente |
| Campagna | 46398 | 3 email fisse, giorni 0, +7 e +21 (ritardi 1, 7, 14), lun-ven 9:00, Review Mode attivo, oggetto "[Company] su Shopify?" e follow-up nello stesso thread |
| Casella | hello@ (cercata per indirizzo, seat 11595 dal 26/10) | casella già usata in passato: 30 al giorno da subito (ramp-up spento), smart warm-up e open tracking spenti, link di disiscrizione attivo |

**Sequenza Dante (v2, regola Cannonball: osservazione → valore → proposta, si parla di loro)**

| Email | Giorno | Contenuto |
|---|---|---|
| E1 osservazione | 0 | L'email che ha avuto risposta il 23/10: "ho visto che [Company] non è su Shopify, è una scelta o ci state pensando?", PS opt-out |
| E2 valore | +7 | "A ottobre" il CERT UE ha segnalato due falle critiche in PHP (WooCommerce, Magento, PrestaShop), su Shopify server e sicurezza non sono più un loro pensiero, offerta di controllare in due minuti se il sito risulta esposto |
| E3 proposta | +21 | Per [Company] 14 giorni su Shopify senza perdere Google né vendite, prezzo pubblico e 4 garanzie scritte, link /it/shopify-sprint |

Versione EN pronta (stessi testi tradotti, link `noprob.agency/shopify-sprint`) per una campagna Dante EN: serve un altro slot campagna in Gojiberry (2 attive per account più una per add-on).

Il 26/10 la lista 65682 ha preso i 95 italiani della lista ex Leonardo (64866, campagna 45770 in pausa): solo visite al profilo, nessun messaggio né email; approvazioni azzerate, passano dalla stessa revisione.

`scripts/cold-email-gjb.mjs` gira lun-ven alle 8:30 (launchd `agency.noprob.cold-email-gjb`), prima del lancio delle 9:00: Shopify nella lista 64769 (riserva per il futuro), scartati i negozi già lavorati su LinkedIn (63200, 64866), dal canale diretto o nella lista opt-out, una persona per negozio, approvazioni al giorno pari al limite di hello@ (50 dal 29 ottobre) meno le email già in coda per oggi. Gojiberry cerca l'email (1 credito) solo dei lead approvati.

**Eccedenza al canale diretto** (dal 29 ottobre, decisione di Antonio: massimo potenziale). L'agente trova più italiani di quanti hello@ ne possa scrivere: i lead che passano la stessa revisione quando Dante è pieno vanno al canale diretto. Gojiberry cerca l'email (1 credito se la trova), il contatto passa nella lista 66757 "DIRETTO" (fuori da Dante, così nessuno store riceve due canali) e il lead entra in `cold-email/data/leads.json` con la sequenza da 5 email di antonio@, finché le prime email in attesa arrivano a `directPool` (config, 55).

**Caselle al massimo** (29 ottobre, Antonio: "spremiamo entrambe le caselle"). hello@ approva ogni giorno tanti lead nuovi quanti ne lascia liberi la coda di Gojiberry (limite giornaliero meno follow-up e approvati in attesa). antonio@ arriva a 55 al giorno: il canale diretto prende tutto quello che non è già partito e non è in coda per oggi nella campagna di Ada (45702), così lo spazio che Ada non usa è nostro. Il primo giorno in cui la coda di Ada ha uno step email (stima 7-10 novembre) lo script mette da solo `adaEmailsLive: true` in config e da lì si tiene libero il limite rimanente del seat antonio@ (massimo 25), perché Gojiberry mette in coda le sue email durante il giorno, dopo il giro delle 9:30. I testi si cambiano in Gojiberry (campagna 46398), con l'ok di Antonio.

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

- `scripts/cold-email-daily.mjs` gira lun-ven alle 9:30 Europe/Lisbon (launchd `agency.noprob.cold-email`, file in `cold-email/agency.noprob.cold-email.plist`) e distribuisce gli invii fino alle 17:30 ora italiana (`--until`), e lo script avvia `caffeinate` legato al proprio processo perché il Mac non vada in stop durante il giro (un job launchd con programma `/usr/bin/caffeinate` non parte). Gojiberry manda le sue email alle 9:00 dalla stessa casella.
- Gmail API, non il Gmail MCP: l'MCP funziona solo dentro una sessione Claude, lo script deve girare da solo. Credenziali nel Portachiavi (`cold-email-gmail-client`, `cold-email-gmail-token`).
- **Budget casella**: antonio@noprob.agency al massimo 55 email al giorno in tutto (Gojiberry fino a 25, questo canale, email manuali). Lo script conta le email già inviate oggi dalla casella, tiene libere quelle che la campagna di Ada su Gojiberry deve ancora mandare oggi (limite giornaliero del seat antonio@, che sale col warm-up, meno quelle già partite) e una riserva per quelle a mano (`mailboxMax` 55, `manualReserve` 10). Tetto del canale `dailyCap` (solo sulle **nuove prime email**: i follow-up partono sempre nel loro giorno, limitati solo dal budget della casella): 55 dal 29 ottobre, `manualReserve` 0: la casella va al massimo (55 al giorno) meno quanto Ada ha in coda. Pausa casuale tra un invio e l'altro (`gapSeconds`).
- Log: una riga al giorno in `cold-email/data/log.md`; output ed errori del job in `~/Library/Logs/agency.noprob.cold-email.log` (launchd non può aprire un log in Documenti creato da un processo senza permesso: il job fallisce con exit 78). CRM: https://crm-noprob.vercel.app (vecchio CRM in `/v2`), con i lead di entrambe le caselle: antonio@ (canale diretto) e hello@ (Dante, esportati dalla revisione delle 8:30 in `cold-email/data/dante.json`).

## In sessione con Claude

Recap di stato: cinque o sei righe, numeri prima (inviate, risposte, opt-out, problemi), una riga su cosa serve da Antonio, niente tabelle.


Il Gmail MCP serve per leggere i thread e rispondere ai caldi: Claude prepara la bozza, Antonio dà l'ok, poi si invia. Prima di toccare i testi della sequenza: cambio in `sequence.mjs`, test verdi (`pnpm test`), anteprima ad Antonio, nuova versione approvata in `config.json`.
