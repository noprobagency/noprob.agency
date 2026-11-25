#!/bin/bash
# Installa scripts/mac/agenti-mac.sh nel runner del Mac. Mai sopra un giro in corso: bash
# legge lo script mentre gira, quindi il file nuovo entra con un mv (nuovo inode).
# Se il file del runner è stato cambiato a mano dopo l'ultima installazione, si ferma:
# prima la modifica va portata nel repo con una PR, poi si installa (--forza per sovrascrivere).
set -eu
BASE="$HOME/Library/Application Support/noprob-agenti"
SRC="$(cd "$(dirname "$0")" && pwd)/agenti-mac.sh"
DST="$BASE/agenti-mac.sh"; SHA="$BASE/agenti-mac.sh.installato"
for job in cold damiano; do
  if [ -f "$BASE/$job.pid" ] && kill -0 "$(cat "$BASE/$job.pid")" 2>/dev/null; then
    echo "giro $job in corso: riprova dopo"; exit 1
  fi
done
if [ "${1:-}" != --forza ] && [ -f "$DST" ] && [ -f "$SHA" ] && [ "$(shasum "$DST" | cut -d' ' -f1)" != "$(cat "$SHA")" ]; then
  echo "agenti-mac.sh del runner cambiato a mano dopo l'ultima installazione: portalo nel repo, poi riprova"; exit 1
fi
bash -n "$SRC"
cp "$DST" "$BASE/agenti-mac.sh.prima" 2>/dev/null || true
cp "$SRC" "$DST.new" && chmod +x "$DST.new" && mv -f "$DST.new" "$DST"
shasum "$DST" | cut -d' ' -f1 > "$SHA"
echo "installato: $DST (copia precedente: agenti-mac.sh.prima)"
