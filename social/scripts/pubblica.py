#!/usr/bin/env python3
"""Gabri: publishes today's approved post on X or Threads from the queue.

Runs from launchd (see social/scripts/README.md). No AI, no secrets in files:
X goes through treg (account connected by Antonio), Threads through the Meta
API with the token in the macOS Keychain (service gabri-threads-token).

Usage: pubblica.py x|threads [--dry-run]
"""
import datetime
import json
import os
import socket
import subprocess
import sys
import time
import urllib.parse
import urllib.request

HOME = os.path.expanduser("~")
RUN = os.path.join(HOME, "Library/Application Support/noprob-gabri")
LOG = os.path.join(RUN, "log.txt")
CRM = os.path.join(HOME, "Documents/noprobagency/cold-email/data/crm")
CODA = os.path.join(CRM, "gabri/coda.json")  # in the private CRM repo, read by Claudio for Telegram
TREG = os.path.join(HOME, ".local/bin/treg")
GRAPH = "https://graph.threads.net/v1.0"
TENTATIVI = 3  # attempts on a network error, then an error line in the log (Claudio, 11 Nov 2026)
PAUSA = 180    # seconds between attempts
# Errors where the request never left the Mac (no DNS, no network): retrying cannot double-post.
RETE = ("nodename", "servname", "getaddrinfo", "name resolution", "could not resolve",
        "temporary failure in name", "connection refused", "network is unreachable",
        "no route to host", "dial tcp")


def log(msg):
    line = f"{datetime.datetime.now():%Y-%m-%d %H:%M} {msg}"
    print(line)
    with open(LOG, "a") as f:
        f.write(line + "\n")


def keychain(service):
    return subprocess.run(["security", "find-generic-password", "-s", service, "-w"],
                          capture_output=True, text=True, check=True).stdout.strip()


def http(method, url, params):
    data = urllib.parse.urlencode(params).encode()
    if method == "GET":
        req = urllib.request.Request(url + "?" + data.decode())
    else:
        req = urllib.request.Request(url, data=data, method="POST")
    with urllib.request.urlopen(req, timeout=60) as r:
        return json.load(r)


def post_x(text, handle):
    r = subprocess.run([TREG, "call", "x.x.post.create", "--method", "POST",
                        "--data", json.dumps({"text": text})],
                       capture_output=True, text=True, timeout=120)
    try:
        out = json.loads(r.stdout)
        pid = out["data"]["id"]
    except (ValueError, KeyError, TypeError):
        raise RuntimeError(f"treg: {(r.stderr or r.stdout).strip()[:300]}")
    return pid, f"https://x.com/{handle}/status/{pid}"


def refresh_threads_token(state):
    """Refresh the 60-day token when it has less than 10 days left."""
    exp = state.get("threads_token_scade")
    if exp and datetime.date.fromisoformat(exp) - datetime.date.today() > datetime.timedelta(days=10):
        return
    r = http("GET", "https://graph.threads.net/refresh_access_token",
             {"grant_type": "th_refresh_token", "access_token": keychain("gabri-threads-token")})
    subprocess.run(["security", "add-generic-password", "-U", "-s", "gabri-threads-token",
                    "-a", "antonio", "-w", r["access_token"]], check=True)
    state["threads_token_scade"] = (datetime.date.today()
                                    + datetime.timedelta(seconds=int(r["expires_in"]))).isoformat()
    log(f"threads: token rinnovato, scade {state['threads_token_scade']}")


def post_threads(text):
    tok = keychain("gabri-threads-token")
    c = http("POST", f"{GRAPH}/me/threads", {"media_type": "TEXT", "text": text, "access_token": tok})
    time.sleep(5)
    p = http("POST", f"{GRAPH}/me/threads_publish", {"creation_id": c["id"], "access_token": tok})
    try:  # the post is out: a failure here must never trigger a retry
        link = http("GET", f"{GRAPH}/{p['id']}", {"fields": "permalink", "access_token": tok})
    except Exception:
        link = {}
    return p["id"], link.get("permalink", "")


def errore_di_rete(e):
    if isinstance(e, urllib.error.HTTPError):
        return False
    testo = str(getattr(e, "reason", e)).lower()
    return isinstance(getattr(e, "reason", None), socket.gaierror) or any(m in testo for m in RETE)


def diario(msg):
    day = datetime.date.today().isoformat()
    path = os.path.join(CRM, "manager/diario", f"{day}.md")
    try:
        subprocess.run(["git", "-C", CRM, "pull", "-q", "--rebase"], timeout=60)
        with open(path, "a") as f:
            f.write(f"\n## {datetime.datetime.now():%H:%M} · GABRI\n- {msg}\n")
        subprocess.run(["git", "-C", CRM, "add", path], check=True)
        subprocess.run(["git", "-C", CRM, "commit", "-q", "-m", f"diario: GABRI, {msg[:50]}"], check=True)
        subprocess.run(["git", "-C", CRM, "push", "-q"], timeout=60)
    except Exception as e:  # the post is out anyway; the diary is best effort
        log(f"diario non aggiornato: {e}")


def main():
    canale = sys.argv[1]
    dry = "--dry-run" in sys.argv
    subprocess.run(["git", "-C", CRM, "pull", "-q", "--rebase"], timeout=60)
    coda = json.load(open(CODA))
    today = datetime.date.today().isoformat()
    todo = [p for p in coda["post"] if p["data"] == today and p["canale"] == canale]
    if not todo:
        log(f"{canale}: niente in coda per oggi")
        return
    p = todo[0]
    if p["stato"] == "pubblicato":
        log(f"{canale}: già pubblicato oggi ({p.get('url')})")
        return
    if p["stato"] != "da_pubblicare" or "[" in p["testo"]:
        log(f"{canale}: '{p['tema']}' aspetta Antonio ({p['stato']}), non pubblico")
        if not dry:
            diario(f"{canale}: post di oggi ({p['tema']}) fermo, serve Antonio")
        return
    if dry:
        log(f"{canale}: DRY RUN, pubblicherei '{p['tema']}': {p['testo'][:80]}")
        return
    for n in range(1, TENTATIVI + 1):
        try:
            if canale == "x":
                pid, url = post_x(p["testo"], coda["account"]["x"])
            else:
                refresh_threads_token(coda)
                pid, url = post_threads(p["testo"])
            break
        except Exception as e:
            if n < TENTATIVI and errore_di_rete(e):
                log(f"{canale}: errore di rete, tentativo {n} di {TENTATIVI}, riprovo tra {PAUSA // 60} minuti: {e}")
                time.sleep(PAUSA)
                subprocess.run(["git", "-C", CRM, "pull", "-q", "--rebase"], timeout=60)
                coda = json.load(open(CODA))
                p = [q for q in coda["post"] if q["data"] == today and q["canale"] == canale][0]
                if p["stato"] == "pubblicato":  # never publish twice
                    log(f"{canale}: risulta già pubblicato in coda, non riprovo ({p.get('url')})")
                    return
                continue
            log(f"{canale}: ERRORE dopo {n} tentativi: {e}")
            diario(f"{canale}: pubblicazione di oggi fallita dopo {n} tentativi ({p['tema']}): {str(e)[:120]}")
            return
    p.update(stato="pubblicato", id=pid, url=url, pubblicato_alle=datetime.datetime.now().isoformat(timespec="minutes"))
    json.dump(coda, open(CODA, "w"), indent=1, ensure_ascii=False)
    subprocess.run(["git", "-C", CRM, "add", CODA])
    log(f"{canale}: pubblicato '{p['tema']}' {url}")
    diario(f"Pubblicato su {'X' if canale == 'x' else 'Threads'}: {p['tema']}. {url}")


if __name__ == "__main__":
    main()
