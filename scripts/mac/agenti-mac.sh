#!/bin/bash
# Agenti NoProb sul Mac: stessi passi dei workflow GitHub del CRM, senza consumare minuti.
# Uso: agenti-mac.sh damiano | cold [--dry]
# Lavora su cloni propri, non tocca le cartelle di lavoro. GitHub resta l'ultima sponda:
# il job "cold" scrive state/mac-heartbeat e la routine "Claudio · avvio invii" salta se è recente.
# Sorgente versionata: scripts/mac/agenti-mac.sh nel repo del sito; si installa con
# scripts/mac/installa-agenti-mac.sh (mai sopra un giro in corso).
# D-107: gli invii non aspettano mai la pubblicazione dello stato. Un conflitto di push si
# riprova con pull --rebase fino a 3 volte, poi si pubblica al giro dopo; il giro parte
# comunque dalla copia locale, che ha lo stato più recente.
set -u
JOB="${1:-}"; DRY_ARG="${2:-}"
BASE="$HOME/Library/Application Support/noprob-agenti"
export PATH="/opt/homebrew/opt/node@20/bin:/opt/homebrew/bin:$HOME/.local/bin:/usr/bin:/bin"
export TZ=Europe/Lisbon
case "$JOB" in damiano|cold) ;; *) echo "uso: $0 damiano|cold [--dry]"; exit 2;; esac
DIR="$BASE/$JOB"; PIDF="$BASE/$JOB.pid"; mkdir -p "$DIR"
log() { echo "$(date '+%F %H:%M') $JOB: $*"; }
if [ -f "$PIDF" ] && kill -0 "$(cat "$PIDF")" 2>/dev/null; then log "già in corso"; exit 0; fi
echo $$ > "$PIDF"; trap 'rm -f "$PIDF"' EXIT

# pubblica <clone> [tentativi]: pull --rebase e push, fino a N tentativi (3). Un rebase
# fallito si annulla, così il clone resta com'era. Esce 1 se non riesce: si riprova al giro dopo.
pubblica() {
  local dest="$1" n="${2:-3}" t
  for t in $(seq 1 "$n"); do
    git -C "$dest" pull --rebase --autostash -q origin main && git -C "$dest" push -q origin HEAD:main && return 0
    git -C "$dest" rebase --abort 2>/dev/null
    [ "$t" -lt "$n" ] && /bin/sleep $((t*5))
  done
  return 1
}

prepara() {
  local url="https://github.com/noprobagency/$1.git" dest="$DIR/$2"
  [ -d "$dest/.git" ] || git clone -q --depth 1 --branch main "$url" "$dest" || return 1
  # Stato lasciato non salvato da un giro interrotto: si salva, mai buttato da un reset.
  local p paths=(); for p in state data; do [ -e "$dest/$p" ] && paths+=("$p"); done
  if [ "${#paths[@]}" -gt 0 ] && [ -n "$(git -C "$dest" status --porcelain -- "${paths[@]}" 2>/dev/null)" ]; then
    git -C "$dest" add -A -- "${paths[@]}"
    git -C "$dest" commit -q -m "chore(state): recupero stato non salvato $(date -u '+%F %H:%M')" && log "$2: stato non salvato recuperato"
  fi
  if ! git -C "$dest" fetch -q --depth 1 origin main; then
    log "$2: fetch non riuscito, giro con la copia locale"; return 0
  fi
  # Revisione 15/11: mai reset --hard sopra commit locali (una push non riuscita).
  # D-107: se non si riesce a spingerli, il giro va avanti con la copia locale.
  if [ -n "$(git -C "$dest" log --oneline origin/main..HEAD 2>/dev/null)" ]; then
    if ! pubblica "$dest"; then
      log "$2: commit locali non spinti dopo 3 tentativi, giro con la copia locale, pubblico al giro dopo"; return 0
    fi
    git -C "$dest" fetch -q --depth 1 origin main || return 0
  fi
  git -C "$dest" reset -q --hard origin/main
}
prepara crm-noprobagency crm || { log "clone CRM non riuscito"; exit 1; }
prepara noprob.agency site || { log "clone sito non riuscito"; exit 1; }
git -C "$DIR/crm" config user.name noprobagency
git -C "$DIR/crm" config user.email hello@noprob.agency
mkdir -p "$DIR/site/cold-email" "$DIR/site/docs/cold"
ln -sfn "$DIR/crm/state" "$DIR/site/cold-email/data"
ln -sfn "$DIR/crm/state/suppressed.txt" "$DIR/site/docs/cold/suppressed.txt"
ln -sfn "$DIR/crm/state/damiano" "$DIR/site/docs/cold/damiano"

salva() { # salva [-1] <messaggio> <percorsi...>  (-1: un solo tentativo, prima degli invii)
  local n=3; [ "$1" = -1 ] && { n=1; shift; }
  local msg="$1"; shift
  cd "$DIR/crm" || return 1
  git add "$@"; git diff --cached --quiet && return 0
  git commit -q -m "$msg"
  pubblica "$DIR/crm" "$n" && return 0
  log "push non riuscita, pubblico al giro dopo"; return 0
}

if [ "$JOB" = damiano ]; then
  # Italia: massimo 3 giri al giorno (D-59). USA: contatore a parte, massimo 2 giri al giorno e
  # solo fuori dagli orari di invio (prima delle 9:00 e dalle 16:45 di Lisbona), perché la misura
  # PageSpeed usa la stessa chiave di Dante (decisione di Claudio, 25/11: niente 429 negli invii,
  # spesa sotto $2,50 al giorno).
  OGGI=$(date +%F); F="$BASE/damiano.giri"; FU="$BASE/damiano-us.giri"; N=0; NU=0
  [ "$(cut -d' ' -f1 "$F" 2>/dev/null)" = "$OGGI" ] && N=$(cut -d' ' -f2 "$F")
  [ "$(cut -d' ' -f1 "$FU" 2>/dev/null)" = "$OGGI" ] && NU=$(cut -d' ' -f2 "$FU")
  HM=$((10#$(date +%H)*60 + 10#$(date +%M)))
  IT_OK=0; [ "$N" -lt 3 ] && IT_OK=1
  US_OK=0; [ "$NU" -lt 2 ] && { [ "$HM" -lt 540 ] || [ "$HM" -ge 1005 ]; } && US_OK=1
  if [ "$IT_OK" = 0 ] && [ "$US_OK" = 0 ]; then
    log "niente da fare (Italia $N/3, USA $NU/2, USA solo prima delle 9:00 o dalle 16:45)"; exit 0
  fi
  [ -f "$DIR/crm/state/damiano/state.json" ] || { log "stato mancante"; exit 1; }
  cd "$DIR/site" || exit 1
  ST=0
  if [ "$IT_OK" = 1 ]; then
    echo "$OGGI $((N+1))" > "$F"
    CI=true node scripts/damiano-scrape.mjs --add 50 --spend 0.65 > "$BASE/damiano-summary.json" 2> "$BASE/damiano-progress.log"
    ST=$?
  fi
  if [ "$US_OK" = 1 ]; then
    # D-99: negozi USA per Ada. Si ferma da solo sotto $1 di saldo treg.
    echo "$OGGI $((NU+1))" > "$FU"
    CI=true node scripts/damiano-scrape.mjs --market us --add 100 --spend 1.00 > "$BASE/damiano-us-summary.json" 2> "$BASE/damiano-us-progress.log"
    STU=$?
  fi
  salva "chore(state): Damiano Mac $(date -u '+%F %H:%M')" state/damiano
  [ "$US_OK" = 1 ] && log "giro USA $((NU+1)) finito, esito $STU, $(node -e 'try{const s=require(process.argv[1]);console.log(JSON.stringify({leads:s.leads,spentUsd:s.spentUsd}))}catch{console.log("nessun riepilogo")}' "$BASE/damiano-us-summary.json")"
  [ "$IT_OK" = 1 ] && log "giro $((N+1)) finito, esito $ST, $(node -e 'try{const s=require(process.argv[1]);console.log(JSON.stringify({leads:s.leads,spentUsd:s.spentUsd,supply:s.supply}))}catch{console.log("nessun riepilogo")}' "$BASE/damiano-summary.json")"
  exit $ST
fi

# Job cold: revisione di Dante alle 8, invii antonio@ dalle 9 alle 16, solo nei giorni feriali.
G=$(date +%u); H=$((10#$(date +%H))); OGGI=$(date +%F)
[ "$G" -gt 5 ] && { log "weekend"; exit 0; }
[ "$H" -lt 8 ] || [ "$H" -gt 16 ] && { log "fuori orario"; exit 0; }
FLAG=""; [ "$(cat "$DIR/crm/state/cloud-live" 2>/dev/null)" = 1 ] || FLAG=--dry
[ "$DRY_ARG" = --dry ] && FLAG=--dry
export COLD_CRM_PATH="$DIR/crm"
if [ -z "$FLAG" ]; then
  date -u +%FT%TZ > "$DIR/crm/state/mac-heartbeat"
  salva -1 "chore(state): Mac al lavoro" state/mac-heartbeat
fi
cd "$DIR/site" || exit 1
ULTIMA=$(node -e 'try{console.log(require(process.argv[1]).lastRun.slice(0,10))}catch{console.log("")}' "$DIR/crm/state/gjb-state.json")
if [ "$H" -le 10 ] && [ "$ULTIMA" != "$(date -u +%F)" ]; then
  log "revisione $FLAG"
  node scripts/cold-email-gjb.mjs $FLAG >> "$BASE/cold.log" 2>&1 || log "revisione con errori"
  [ -z "$FLAG" ] && salva "chore(state): cold email review Mac $(date -u '+%F %H:%M')" state data
fi
if [ "$H" -ge 9 ]; then
  ORA="$OGGI-$H"
  if [ "$(cat "$BASE/send.last" 2>/dev/null)" = "$ORA" ] && [ -z "$FLAG" ]; then log "invio già fatto in quest'ora"; exit 0; fi
  SLOTS=$((17-H)); [ "$SLOTS" -lt 1 ] && SLOTS=1
  log "invio $FLAG slots $SLOTS"
  [ -z "$FLAG" ] && echo "$ORA" > "$BASE/send.last"
  cd "$DIR/site" || exit 1  # salva() lascia la shell nel CRM dopo la revisione
  node scripts/cold-email-daily.mjs --slots "$SLOTS" --gap 15,45 $FLAG >> "$BASE/cold.log" 2>&1 || log "invio con errori"
  [ -z "$FLAG" ] && salva "chore(state): cold email send Mac $(date -u '+%F %H:%M')" state data
fi
log "fatto"
