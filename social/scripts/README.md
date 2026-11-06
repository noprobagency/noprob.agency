# Pubblicazione automatica di Gabri

Dal 6 novembre 2026, per ordine di Antonio, i post approvati escono da soli ogni giorno. Nessuna AI nel giro: uno script legge la coda e pubblica il post del giorno.

- **Script**: `pubblica.py x|threads [--dry-run]`. La copia che gira sta in `~/Library/Application Support/noprob-gabri/` con `log.txt`. La coda è nel repo privato del CRM, `gabri/coda.json`: lo script fa pull prima di leggere e la aggiorna con il commit del diario. Claudio la legge ogni giorno e manda ad Antonio su Telegram i post di oggi e di domani, anche a Mac spento.
- **Orari** (launchd, ora di Lisbona): X alle 9:30, Threads alle 18:30, tutti i giorni. Se in coda non c'è niente per oggi, non pubblica. Se il Mac dorme, parte al risveglio; se resta spento tutto il giorno, il post salta.
- **X**: con treg (`x.x.post.create`, account @ManittaHello collegato da Antonio), circa $0,015 a post, solo testo.
- **Threads**: API di Meta, token nel Portachiavi (`gabri-threads-token`), account @west_marney. Lo script rinnova il token quando mancano meno di 10 giorni alla scadenza.
- **Fermi**: un post con [quadre] nel testo o con stato diverso da `da_pubblicare` non esce; lo script lo scrive nel diario.
- **Diario**: ogni post pubblicato, fermo o fallito diventa una riga `HH:MM · GABRI` nel diario del CRM, con commit e push.

Job launchd: `~/Library/LaunchAgents/agency.noprob.gabri.x.plist` e `agency.noprob.gabri.threads.plist`. Per fermare tutto:

```bash
launchctl bootout gui/$(id -u)/agency.noprob.gabri.x; launchctl bootout gui/$(id -u)/agency.noprob.gabri.threads
```
