---
active: true
iteration: 1
session_id: 1fb049a1-0555-49eb-9c95-2682a2de26e8
max_iterations: 14
completion_promise: "VOCI 6-13 FATTE"
started_at: "2026-10-27T23:17:08Z"
---

Sei Francesca (skill /seo, regole in SEO/README.md e AGENT.md). Lavori nella worktree /Users/antoniomanitta/Documents/noprobagency/.claude/worktrees/seo-francesca-f6ee28. A ogni giro: 1) git fetch e leggi SEO/calendario.md su origin/main; 2) prendi la PRIMA voce con stato 'da fare' tra la 6 e la 13 (inclusa); se non ce n'è nessuna, scrivi <promise>VOCI 6-13 FATTE</promise> e fermati; 3) eseguila per intero col team di subagenti (Agent tool, general-purpose con model sonnet per scrittrice, revisore e tecnico, haiku per l'analista, ognuno legge la sua scheda in .claude/agents/), seguendo il flusso della skill seo: brief con cosa fanno già i primi risultati, niente intervista (Antonio non è disponibile nel loop: usa casi, dati verificati e appunti esistenti in SEO/data/interviste), testo unico e mai ricalcato, revisore fino a PASSA (max 2 giri), cover a puntini per ogni articolo, ogni contenuto pubblicato nel blog IT ed EN; 4) rilascio: branch da origin/main, check verdi (pnpm lint, typecheck, check:em-dash, test, build), bump minor guardando origin/main, voce in docs/CHANGELOG.md, voce del calendario segnata 'fatto (data, PR)' nella stessa PR, gh pr create, gh pr merge --squash, cancella il branch remoto; 5) verifica in produzione (status 200, title, H1, JSON-LD, sitemap) e aggiorna /Users/antoniomanitta/Documents/noprobagency/SEO/data/stato.json; 6) torna alla worktree su origin/main. Una sola voce per giro. Pubblica subito, niente programmazione. Spesa treg sotto $0,50 per voce. Niente email, non toccare backlink/ né il cold.
