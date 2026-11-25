#!/bin/bash
# Installa scripts/mac/agenti-mac.sh nel runner del Mac. Mai sopra un giro in corso: bash
# legge lo script mentre gira, quindi il file nuovo entra con un mv (nuovo inode).
set -eu
BASE="$HOME/Library/Application Support/noprob-agenti"
SRC="$(cd "$(dirname "$0")" && pwd)/agenti-mac.sh"
for job in cold damiano; do
  if [ -f "$BASE/$job.pid" ] && kill -0 "$(cat "$BASE/$job.pid")" 2>/dev/null; then
    echo "giro $job in corso: riprova dopo"; exit 1
  fi
done
bash -n "$SRC"
cp "$SRC" "$BASE/agenti-mac.sh.new" && chmod +x "$BASE/agenti-mac.sh.new"
mv -f "$BASE/agenti-mac.sh.new" "$BASE/agenti-mac.sh"
echo "installato: $BASE/agenti-mac.sh"
