# Changelog and project history

Newest first. Rules live in [AGENT.md](../AGENT.md), the current architecture in
[ARCHITECTURE.md](ARCHITECTURE.md). Every entry here is history: do not update
old entries, add a new one on top.

### Changelog v1.117.0 (30 Oct 2026)

- **Damiano ready for the cloud**: `scripts/damiano-scrape.mjs` gains `--add N --spend USD`, which are relative to the saved state, for the daily run in crm-noprobagency (`damiano.yml`). The free store check now runs inside the script, before any paid call: the homepage or a usual shop page must show a cart, and B2B signals must not outweigh it. Before, this check was a separate step on the 30 Oct batch. The script now writes `coda.json`, the queue Dante's review reads (v1.116.0). The queue holds only ready leads: a company mailbox in Italy, not in any channel and not in `usati.json`. Each row has `channel` (`hello` with a LinkedIn URL, otherwise `diretto`). The run also stops 6 calls short of the budget, so it ends under it.

### Changelog v1.116.0 (30 Oct 2026)

- **Damiano's nightly queue feeds both channels on its own**: the 8:00 Dante review reads `docs/cold/damiano/coda.json` (in the cloud `state/damiano/coda.json`, written by Damiano's job) and, after the usual dedup, creates contacts in list 65682 for hello@ when fewer than 25 are approved or waiting (up to 50, with a LinkedIn profile, no credit) and adds leads to the direct channel when fewer than 30 first emails are ready (up to 60, platform re-checked live). What it takes goes to `usati.json`, so each file has one writer. `lib/cold-email/damiano.mjs`.

### Changelog v1.115.0 (30 Oct 2026)

- **Main requires an up-to-date branch**: branch protection now needs the `check` status on a branch that includes the latest main, so the version check compares against the real main; before merging run `gh pr update-branch <n>`, wait for green, then merge. Restored from PR #172 (lost in a merge): **cold email scripts ready to run in the private CRM repo** (Dante's review and the direct sends as hourly jobs, state in `state/`, secrets for Gojiberry and Gmail, `COLD_LIVE` switch, trial in parallel with the Mac on 2 Nov).

### Changelog v1.114.0 (30 Oct 2026)

- **Claudio's memory lives in the private CRM repo**: `manager/data` is now a symlink to `manager/` in crm-noprobagency (so the cloud routine can read and write it), the registry push also commits that folder, and the symlink is gitignored.

### Changelog v1.113.0 (30 Oct 2026)

- **CI blocks a PR whose version is not above main**: three times today two PRs took the same number and a CHANGELOG entry was lost in the merge. Restored here: **the CRM registry is rebuilt after every export** (`crm-registry.mjs --gojiberry --push` at the end of `cold-email-gjb.mjs` at 8:30 and `cold-email-daily.mjs` at 17:30; a failure logs one line and the run goes on), from PR #169.

### Changelog v1.112.0 (30 Oct 2026)

- **Damiano skips locations Hunter refuses**: some Italian regions return a 400 `query_failed` ("This region isn't supported in Discover yet", not billed). The query now counts as an empty page instead of stopping the run.

### Changelog v1.111.0 (30 Oct 2026)

- **CRM registry counts hello@ emails and Ada's LinkedIn actions from the Gojiberry steps** (type and state with a timestamp), so the emails-per-day chart is live instead of the 8:30 export; a contact whose step is `answered` becomes `risposto`.

### Changelog v1.110.0 (30 Oct 2026)

- **Damiano searches Italy by region and city**: the national Hunter queries ran dry after 502 leads, so `scripts/damiano-scrape.mjs` now follows them with 10 grouped verticals for each of the 20 regions and 15 cities (350 new queries, all free). Old queries are cached and skip at once. A first test of 50 leads, at a cap of $0.75, measures the yield before the daily run for hello@.

### Changelog v1.107.0 (30 Oct 2026)

- **CRM registry keeps a daily history**: `scripts/crm-registry.mjs` now writes emails sent per working day for the last 15 days and appends one line per day to `data/storia.json` in the CRM, so the trend survives every rebuild. The CRM home is reduced to four numbers (emails today, hot and replies, in progress, ready to contact), one chart and six views.

### Changelog v1.106.0 (30 Oct 2026)

- **Damiano supplies Ada too**: `scripts/damiano-scrape.mjs --market intl` sources US, UK and AU non-Shopify stores for Ada, with the filters she asked for after the first 100-lead test (75 imported, 25 dropped). Each lead is a decision maker with a LinkedIn URL. Accepted titles are founder, CEO, owner, MD, GM, COO and president, but never "president of sales"; also head or director of ecommerce/digital, CMO, and VP marketing or IT. The person must be in the store's market and the company must have 5-999 employees. There is no paid email find unless `--email` is passed. Output goes to `docs/cold/damiano/intl` (gitignored) with Ada's import fields. Both modes now skip the stores and profiles already in the Gojiberry lists 63200, 65682, 66757 and 64769 (read only), and drop the office equipment, office furniture, wholesale and food production industries.

### Changelog v1.105.0 (30 Oct 2026)

- **Single store registry for the CRM**: `scripts/crm-registry.mjs` builds `data/registry.json` in the private CRM (one row per store domain, whatever the source: Damiano, Gojiberry agents 40211 and 41228, the 2026 CRM), with the channel that works it (antonio@, hello@, Ada, none, Shopify reserve), status, contacts, last and next action, and Antonio's lead evaluations from `cold-email/data/crm-note.json`. Gojiberry lists are cached locally so a rebuild needs no API call. The CRM home is now the registry; the cold email page moved to `/email`. Claudio owns the CRM.

### Changelog v1.104.0 (30 Oct 2026)

- **Marco reads Francesca's link opportunities and drops the phone number**: `/backlink` now reads `SEO/data/per-marco.md` at every start and turns each new opportunity into a tracker entry; the +39 number is no longer published on any platform (Antonio's decision of 30 Oct, in line with the "never Italy-based" rule) and `backlink/scheda.md` says so. Marco reports to Claudio.

### Changelog v1.103.0 (30 Oct 2026)

- **Claudio, the team manager**: new skill `/claudio` and folder `manager/` (README versioned, `manager/data/` gitignored) where the manager keeps one short file per purpose: agent cards with check cadences and alert thresholds (`team.md`), last known numbers and open alerts (`stato.json`), open and taken decisions (`decisioni.md`), one diary file per day. Claudio reads the agents' state files, asks their sessions for aggregates, and reports to Antonio in a few lines; it never does the agents' work, sends nothing and spends nothing.

### Changelog v1.102.0 (29 Oct 2026)

- **Damiano, richer leads and a resumable 500 run**: the query set grows to company size × 31 consumer verticals, the free people search adds role searches (founder, CEO, owner, amministratore, general manager, e-commerce manager), non-consumer companies are filtered out before any paid call, and each lead gets a 0-100 score (role, second verified contact, LinkedIn, company size, outdated PHP), a second verified contact while the budget lasts, other decision makers, revenue and company LinkedIn. Hunter's rate limit (403, not billed) now waits and retries instead of stopping the run, and `--export` rewrites the lists from the saved state with no calls. Run so far: 282 leads (226 with the owner or CEO first), 693 Shopify stores set aside, $3.87 on treg.

### Changelog v1.101.0 (29 Oct 2026)

- **Damiano, lead sourcing for non-Shopify stores**: `scripts/damiano-scrape.mjs` finds Italian consumer brands with Hunter Discover (free), checks each homepage with the same detector Ada and Dante use (`lib/cold/fetch-platform.mjs`, error pages never count), keeps Shopify stores in a separate list with a free people search only, and for the rest picks the best decision maker by title (free people search) and pays only for email find + verify through treg. Only verdict `valid` becomes a lead; every answer is cached in `docs/cold/damiano/state.json` (gitignored), so a rerun never pays twice. `--crm` writes the CRM page data (`damiano.html` in the CRM repo). First test: 50 leads, 138 Shopify stores set aside, $0.60 on treg. `.claude/launch.json` gains a `crm` static preview.

### Changelog v1.100.0 (29 Oct 2026)

- **Ada's routine, blocked sites and queue cap**: a store site that answers with an error page (bot wall, 429, 5xx) is never approved; in the cloud those leads stay unprocessed and the Mac job checks them from a home IP. Approvals now top the campaign queue up to 50 approved-not-started leads (`--queue`, at most `--cap` per run), so the cloud job and the Mac job can both run without approving twice.

### Changelog v1.95.0 (29 Oct 2026)

- **Veronica, Antonio's interviewer**: new skill `/veronica` (`.claude/skills/veronica/SKILL.md`), an endless conversation with Antonio, one question at a time, on eCommerce, AI, Shopify and his projects. She keeps her archive in `SEO/data/interviste/` (question queue, daily log, notes by topic, a living "voce di Antonio" style guide) and hands the key points to Francesca in `per-francesca.md`. Francesca integrates them with the new `/seo allinea` (voice skill, content alignment, verified declarations, calendar ideas); the writer reads Antonio's voice guide before writing; the interviewer subagent now feeds Veronica's queue. No change to the site (Francesca).

### Changelog v1.94.0 (29 Oct 2026)

- **Ada's cold routine in the cloud**: `.github/workflows/cold-routine.yml` runs `scripts/cold-daily.mjs` on GitHub Actions every 2 hours, day and night, so the Shopify filter and approvals no longer need the Mac on. State in the Actions cache (env `COLD_STATE`, `COLD_LOG`), the cap is now a daily total (25, Monday to Friday, Lisbon time), the opt-out sweep stays on the Mac (`COLD_NO_SWEEP`), and API errors hide response bodies in CI because run logs are public.

### Changelog v1.93.0 (29 Oct 2026)

- **AI agents series, 13 new articles (IT and EN)**, each with its own treg keyword research, written in Antonio's voice and reviewed: GEO vs SEO, Shopify MCP, AI agents for Shopify (pillar of the AI agents category), building an AI agent for a store and its cost, migrating to Shopify with AI agents, Shopify 301 redirects with a downloadable CSV template (`/downloads/`), Claude and Claude Code on Shopify, Claude Duet for a Shopify eCommerce, Shopify Flow with AI, AI agent security (prompt injection), an AI assistant for orders and returns, how to evaluate an AI assistant, BigCommerce vs Shopify. `agentic-commerce-shopify` and `chatgpt-shopping-shopify` updated (AI shopping agents, UCP vs ACP, Agentic Storefronts, what happened to Instant Checkout). New `table` article section with a semantic, mobile-safe `<table>`; eight articles use it. Covers, categories, `llms.txt`, third-party sources in `docs/dati-verificati.md`; `/shop` redirect note corrected in the WooCommerce guide; AI agents category copy rewritten (Francesca).

### Changelog v1.88.0 (29 Oct 2026)

- **Learn menu and blog categories**: "Blog" in the navbar becomes "Learn" (EN) / "Risorse" (IT), a dropdown with five categories (Migrate to Shopify, Shopify guides, AI agents, AI search and GEO, eCommerce growth) and "All articles"; same links in a new footer column. Ten new indexable category pages (`/blog/category/<slug>`, `/it/blog/categoria/<slug>`) with intro, cards, breadcrumbs and `CollectionPage` + `ItemList` JSON-LD, in the sitemap and `llms.txt`. The blog index is repositioned on Shopify, AI and eCommerce with one section per category. Article breadcrumbs go Home > Learn > category > article. Publication dates of the articles written on 27 and 28 Oct are spread over the previous weeks, never before a fact they cite; `dateModified` stays real. Article and `/blog` URLs unchanged (Francesca).

### Changelog v1.85.0 (29 Oct 2026)

- **Home guides carousel**: the home "guides" block becomes an app-style carousel (native CSS scroll-snap, server-rendered cards with cover, category pill, reading time; 12 most recent articles plus an "All guides" card). A tiny client island adds category chips and prev/next arrows after hydration (about +1 kB First Load JS); without JS it scrolls and links work. Categories and articles come from `data/articles` (Francesca).

### Changelog v1.84.0 (28 Oct 2026)

- **SEO roadmap for AI and agents**: `SEO/piano.md` gets the AI and agents roadmap (treg research of 28 Oct: Shopify MCP, AI agents for ecommerce, Italian "agenti ai" queries, Claude and Shopify, searches inside AI tools, zero citations in AI answers today) and `SEO/calendario.md` is reordered from November (items 30 and 32-42: GEO vs SEO, Shopify MCP, AI agents pillar, building an AI agent, migrating with AI agents, redirect map, Claude and Shopify, agentic commerce refresh, Shopify Flow, agent security, order and returns assistant, assistant evaluation, future lead magnet). `seo-voce` skill: how to use Antonio's book on AI agents as a source. No change to the site (Francesca).

### Changelog v1.83.0 (28 Oct 2026)

- **GoodFirms in Organization sameAs**: the GoodFirms profile is approved and online, so it joins LinkedIn, Trustpilot, Clutch and Contra in the `Organization` JSON-LD (Marco).

### Changelog v1.82.0 (28 Oct 2026)

- **Site review implemented** (`SEO/revisioni/2026-10-28.md`, Antonio's decisions of 28 Oct recorded in `docs/dati-verificati.md`): home hero with Shopify and the Sprint as primary CTA, "Guides for migrating to Shopify" block, footer with Services and Guides columns, Services dropdown always in the DOM, founder block on the Sprint and About, case and blog indexes with intro, cluster sections and pills, "Read next" on every article (`data/articles/clusters.ts`), RSS feed, IndexNow script (`pnpm indexnow`), JSON-LD `@id`, `areaServed`, breadcrumbs. Copy: "10 five-star reviews on Trustpilot" with link instead of "5/5", "several migrations", team of Shopify, marketing, advertising and SEO specialists, maintenance included forever after the 90 days as eCommerce manager, Sprint covers any platform, "videochiamata" everywhere in IT. Articles: third-party numbers sourced or removed, Shopify prices checked on the official page, visible FAQ, sibling links, closing line and public price, new titles and descriptions. New article "Shopify Plus: When It Pays Off and How to Migrate" (Francesca).

### Changelog v1.81.0 (28 Oct 2026)

- **Never negative about us, second pass and full site review**: about 220 more sentences in 17 articles, the Sprint landing, the migration guide, service pages, case studies, the Sprint email and `llms.txt` no longer admit gaps or sound defensive (the choose-an-agency article title drops "Our Own Weak Spots"; slugs unchanged). Added `SEO/revisioni/2026-10-28.md`: the merged report of four reviewers (pages, articles, SEO strategy and link building) with 70 prioritized actions and 13 decisions for Antonio (Francesca).

### Changelog v1.80.0 (28 Oct 2026)

- **Never negative about us**: about 95 sentences in 15 articles, the Nazzi and Cumini case studies, the migration guide, the Sprint copy and `llms.txt` no longer admit gaps ("we have no Magento case study", "no one can promise", "not everything went smoothly"); they now speak about the Sprint method, Antonio's 7+ years of eCommerce projects and the written 90-day SEO guarantee, worded exactly as on the Sprint page. The rule is now in the `seo-voce` skill, check 3b of `seo-revisione` and `SEO/README.md` (Francesca).

### Changelog v1.79.0 (28 Oct 2026)

- **llms.txt lists every article**: the Blog Articles section now has all 18 articles with title, summary and EN and IT URLs, newest first, so AI assistants can find and cite them; `SEO/piano.md` records the calendar run of 27 and 28 October (Francesca).

### Changelog v1.78.0 (27 Oct 2026)

- **New article: BigCommerce to Shopify migration** (`/blog/bigcommerce-to-shopify-migration`, `/it/blog/migrazione-bigcommerce-shopify`): moving between two SaaS platforms as seven translation points between their data models (options and modifiers, custom fields, categories, price lists and B2B, URLs, Stencil and apps, customers), honest that we have no BigCommerce case; standard dotted cover (Francesca, calendar item 24).

### Changelog v1.77.0 (27 Oct 2026)

- **New article: Shopify migration cost** (`/blog/shopify-migration-cost`, `/it/blog/costo-migrazione-shopify`): the components and hidden costs of a migration, the three ways to buy it, how to read a quote, and the Sprint's public price by revenue as the worked example; standard dotted cover (Francesca, calendar item 22).

### Changelog v1.76.0 (27 Oct 2026)

- **New article: How to choose a Shopify migration agency** (`/blog/choose-shopify-migration-agency`, `/it/blog/scegliere-agenzia-migrazione-shopify`): provider types compared without naming competitors, nine criteria with our own answer to each, questions for the first video call, red flags and when we are not the right choice; standard dotted cover (Francesca, calendar item 23).

### Changelog v1.75.0 (27 Oct 2026)

- **New article: Shopify Magic and Sidekick** (`/blog/shopify-magic-sidekick`, `/it/blog/shopify-magic-sidekick`): what Shopify's built-in AI does as of October 2026 (Magic now redirects to Sidekick), what it can do for a merchant, its limits and how it fits with our Custom AI System and the AI Accelerator; standard dotted cover (Francesca, calendar item 19).

### Changelog v1.74.0 (27 Oct 2026)

- **New article: Magento to Shopify migration** (`/blog/magento-to-shopify-migration`, `/it/blog/migrazione-magento-shopify`): why stores leave Magento and Adobe Commerce, what is specific to the move (product types, attribute sets, store views vs Markets, customer groups and B2B, extensions, URL rewrites), Shopify or Shopify Plus, honest that we have no Magento case; standard dotted cover (Francesca, calendar item 16).

### Changelog v1.73.0 (27 Oct 2026)

- **New article: PrestaShop to Shopify migration** (`/blog/prestashop-to-shopify-migration`, `/it/blog/migrazione-prestashop-shopify`): why European merchants leave PrestaShop and what is specific to moving it (combinations, groups and specific prices, modules, carriers, EU invoicing, URLs with IDs and the redirect map), honest that we have no PrestaShop case; standard dotted cover (Francesca, calendar item 21).

### Changelog v1.72.0 (27 Oct 2026)

- **New article: Squarespace or Shopify** (`/blog/squarespace-vs-shopify`, `/it/blog/squarespace-o-shopify`): who should stay on Squarespace, seven questions to ask your own admin, how to keep the design on Shopify, what leaves with you and what stays, URLs and domain; standard dotted cover (Francesca, calendar item 20).

### Changelog v1.71.0 (27 Oct 2026)

- **New article: Wix or Shopify** (`/blog/wix-vs-shopify`, `/it/blog/wix-o-shopify`): when Wix is enough, nine concrete signs a store has outgrown it, and the move to Shopify as four jobs (exports, URLs and redirects, blog and SEO settings, order of the switch), with every Wix and Shopify fact checked on the official help pages; standard dotted cover (Francesca, calendar item 17).

### Changelog v1.70.0 (27 Oct 2026)

- **New article: ChatGPT shopping for Shopify** (`/blog/chatgpt-shopping-shopify`, `/it/blog/chatgpt-shopping-shopify`): how products from a Shopify store can show up when people shop in ChatGPT and what a merchant can do today, with every OpenAI and Shopify claim sourced and dated October 2026; standard dotted cover (Francesca, calendar item 15).

### Changelog v1.69.0 (27 Oct 2026)

- **New article: AI for eCommerce** (`/blog/ai-for-ecommerce`, `/it/blog/ai-per-ecommerce`): where AI pays off in an online store today, where it fails, how to start in 30 days and how to measure it, linked to the AI Accelerator; standard dotted cover (Francesca, calendar item 18).

### Changelog v1.68.0 (27 Oct 2026)

- **New article: Agentic commerce on Shopify** (`/blog/agentic-commerce-shopify`, `/it/blog/agentic-commerce-shopify`): what AI shopping agents change for a Shopify store and a five-step plan centred on an agent that buys (checkout readiness, catalog and stock accuracy, order flow and support, fraud and refunds), with Shopify's Agentic Storefronts and Catalog explained; standard dotted cover (Francesca, calendar item 12).

### Changelog v1.67.0 (27 Oct 2026)

- **New article: WooCommerce to Shopify migration** (`/blog/woocommerce-to-shopify-migration`, `/it/blog/migrazione-woocommerce-shopify`): the hands-on, WooCommerce-specific guide (where each WordPress object lands, migrating jobs instead of plugins, the WordPress redirect map, cutover order), with what the Nazzi migration taught us; standard dotted cover (Francesca, calendar item 13).

### Changelog v1.66.0 (27 Oct 2026)

- **New article: Shopify migration SEO checklist** (`/blog/shopify-migration-seo-checklist`, `/it/blog/migrazione-shopify-seo-checklist`): the before, launch-day and 90-days-after checklist for moving to Shopify without losing rankings (URL inventory, redirect map, Shopify URL patterns, canonical and hreflang, Search Console), with the Nazzi pre and post go-live comparison; the linkable asset for Marco; standard dotted cover (Francesca, calendar item 11).

### Changelog v1.65.0 (27 Oct 2026)

- **Home, the Sprint first**: in the services section the migration service becomes a full-width Shopify Launch Sprint card in the landing's visual language (dark gradient, AI badge): "Your store on Shopify in 14 days", built with our Custom AI System, the 4 key facts, price from €5.800 in 4 installments, CTAs to the Sprint and to the migration guide (new tracking ids `pricing_sprint_primary`, `pricing_sprint_guide`); Data-Driven Team and Shopify Development follow, unchanged (Francesca, calendar item 8).

### Changelog v1.64.0 (27 Oct 2026)

- **New article: Shopify vs WooCommerce** (`/blog/shopify-vs-woocommerce`, `/it/blog/shopify-o-woocommerce`): organised around the five decisions a founder faces (who maintains the store, what breaks, speed of change, cost of growth, ease of leaving), fair about when WooCommerce wins, with the Nazzi case; standard dotted cover (Francesca, calendar item 9).

### Changelog v1.63.0 (27 Oct 2026)

- **New article: GEO for Shopify** (`/blog/geo-for-shopify`, `/it/blog/geo-seo-shopify`): how a Shopify store gets found and cited by ChatGPT, Perplexity and Google's AI answers, with our own `llms.txt` and robots rules as the worked example; standard dotted cover. `robots.txt` now names `OAI-SearchBot` explicitly; the AI traffic row in `docs/dati-verificati.md` now says "AI-driven" as its source does (Francesca, calendar item 10).

### Changelog v1.62.0 (27 Oct 2026)

- **Standard blog covers**: `scripts/blog-cover.mjs` (`pnpm cover <slug>`, `--all`) generates a 1200x630 SVG and PNG per article from its slug, a background colour from a palette of 13 and one of 6 dot patterns, no text; the 3 existing covers are regenerated with the same file names (the long-term one goes from 3.7 MB to 96 KB). Articles now live one per file in `data/articles/posts/`. The migration guide appears as a featured card at the top of the blog (EN and IT) (Francesca, calendar item 7).

### Changelog v1.61.0 (27 Oct 2026)

- **llms.txt and search-led meta**: `public/llms.txt` gets Guides (the migration guide), Case Studies (each with its source platform) and every blog article with EN and IT URLs; Nazzi and Cumini case studies get titles and descriptions built on how people search ("WooCommerce to Shopify migration case study", "custom platform to Shopify"); the EN Sprint title now says "Shopify Migration Services" (Francesca, calendar item 6).

### Changelog v1.60.0 (27 Oct 2026)

- **Francesca, Antonio's new content rules**: new subagent `seo-intervistatrice` (Sonnet) that prepares 3-5 questions for Antonio before a piece and turns his answers into notes (`SEO/data/interviste/`, local); originality rule in `seo-voce` and a blocking check in `seo-revisione` (every guide and article is unique, never modelled on other sites, carries Antonio's experience); every piece is published in the blog with a standard cover (colour and dot pattern, no text). `SEO/calendario.md` grows to 25 items: blog covers, a new home services order with migration first, Magento and PrestaShop guides unblocked, and an AI cluster (GEO for Shopify, agentic commerce, ChatGPT shopping, AI for eCommerce, Shopify Magic and Sidekick) from the keyword research of 27 October, summarised in `SEO/piano.md`. No site change.

### Changelog v1.59.0 (27 Oct 2026)

- **The migration page becomes the guide to migrating to Shopify** (`/shopify-migration`, `/it/migrazione-shopify`): "How to Migrate to Shopify: The Complete Guide" / "Migrazione a Shopify: la guida completa", about 1,900 words per language (platforms, what gets migrated, SEO and 301 redirects, tracking, timeline, risks, cost, checklist, Nazzi and Cumini), rendered with the article renderer (`MigrazioneGuide`). Prices and the application form are gone (they live on the Sprint landing, the page's CTA); JSON-LD is `Article` + `FAQPage` + `BreadcrumbList` instead of `Service` + `AggregateOffer`, so the page no longer competes with the Sprint. Unused sections and copy removed (`MigrazioneProblem`, `MigrazioneSolution`, `MigrazioneSprintPricing`); the floating contact pill is hidden on the guide. Written, reviewed and wired by Francesca's team (calendar item 5).

### Changelog v1.58.0 (27 Oct 2026)

- **Breadcrumbs everywhere**: shared `breadcrumbJsonLd` helper (`lib/seo/breadcrumbs.ts`, names from the navbar labels, new `navbar.homeLabel`) on the service pages, case studies and blog articles; AI Accelerator now uses it too.
- **Service JSON-LD on `/it/team-ecommerce-dedicato`**, as on the EN page.
- **Article closing CTA goes to the Sprint**: `RelatedCTA` gets a `sprint` variant (the AGENT.md runbook puts the Sprint first); the Data-Driven Team variant stays available.
- **SEO length tests**: `lib/seo/seo-lengths.test.ts` fails CI when a rendered title passes 65 characters or a description passes 160 (pages, articles, case studies, Sprint), and checks every route has an EN and IT path.
- **SEO calendar after Phase 2**: comparisons and "migration without losing SEO" move up (most volume at low difficulty in the US), findings in `SEO/piano.md` (Francesca, calendar items 1 and 4).

### Changelog v1.57.0 (27 Oct 2026)

- **"Shopify Migration" goes to the Sprint**: the services menu item (navbar and footer) and the migration card on the home page now link to the Sprint landing (`/shopify-migration-sprint`, `/it/sprint-migrazione-shopify`) instead of the migration page, which will become the guide to migrating to Shopify (Francesca, calendar item 3).

### Changelog v1.56.0 (27 Oct 2026)

- **Francesca, SEO team and calendar**: four subagents in `.claude/agents/`, each with its own model (`seo-analista` on Haiku for treg and Search Console data, `seo-scrittrice`, `seo-revisore` and `seo-tecnico` on Sonnet), two new skills (`seo-voce` for the site voice, `seo-revisione` for the review checklist), `SEO/calendario.md` (ordered list, indicative dates, each item launched by Antonio with `/seo prossima`), `SEO/piano.md` rewritten on Antonio's decisions (site and offer unchanged, "Shopify Migration" to the Sprint, the migration page becomes a guide), crawler in `SEO/strumenti/crawl.py`. No site change.

### Changelog v1.55.0 (27 Oct 2026)

- **SEO plan, first audit**: `SEO/piano.md` records the audit of 27 October (technical base sound, visibility near zero on migration searches, no per-platform pages, possible overlap between the migration page and the Sprint landing, search demand mostly in English) and the first priorities. No site change.

### Changelog v1.54.0 (27 Oct 2026)

- **Meta descriptions under 160 characters**: the Sprint landing (EN 165, IT 169) and the Italian CRO article (168) were cut off in Google results. The Sprint descriptions now open with the target query ("Shopify migration", "Migrazione a Shopify"); the CRO article gets its own `seoDescriptionIt`, the listing excerpt is unchanged (Francesca, audit of 27 October).

### Changelog v1.53.0 (27 Oct 2026)

- **robots.txt, `/_next/` crawlable again**: the rule blocked Googlebot from the JS, CSS and `/_next/image` URLs every page loads, so Google could not render pages fully or index their images. `/api/` and `/admin/` stay blocked (Francesca, audit of 27 October).

### Changelog v1.52.0 (27 Oct 2026)

- **Marco, backlink gap analysis**: `backlink/analisi/2026-10-27-backlink-gap.md` compares noprob.agency with the Italian sites that rank for the migration keywords (referring domains, where their quality links come from), ranks what to recover and where it is worth spending, with insights for Francesca. Data from treg. No site change.
- **ESLint**: ignores `.claude/worktrees/**`, so the worktrees of parallel agent sessions no longer break `pnpm lint` locally.

### Changelog v1.51.0 (27 Oct 2026)

- **SEO agent, Francesca**: new `SEO/` folder with the rules and scope (`README.md`: on page, technical, content, keywords and site structure; links and profiles stay with Marco), the roadmap (`piano.md`), the founding prompt (`FRANCESCA-PROMPT.md`) and the `/seo` skill (stato, audit, keyword, opportunita, scrivi, monitora). Working state in `SEO/data/` (gitignored). No site change.

### Changelog v1.50.0 (27 Oct 2026)

- **Marco, no emails**: Marco never sends emails and never asks clients for reviews, including the automatic review requests of Clutch and GoodFirms; the work is platform visibility only (README rule 4 and skill). No site change.

### Changelog v1.49.0 (27 Oct 2026)

- **Organization JSON-LD, sameAs**: added the live Clutch and Contra profiles, so search engines link them to noprob agency (Marco, README rule 7).

### Changelog v1.48.0 (27 Oct 2026)

- **Marco, assets and monitoring**: `backlink/assets/` holds Antonio's square profile photo and the square logo, loaded by the built-in browser from the public repo when filling platforms; the `/backlink monitora` command checks every live platform (review status, views, messages, orders) and reports one line each. No site change.

### Changelog v1.47.0 (27 Oct 2026)

- **Marco, two rules**: replies to Antonio stay short and concrete; the founder is presented as resident in Lisbon working remotely for the US LLC, never as based in Italy (skill and `backlink/scheda.md`). No site change.

### Changelog v1.46.0 (27 Oct 2026)

- **`/cold` skill, short recaps**: status and recap answers stay within 5-6 lines, numbers first, minimum tokens (Antonio's rule for Ada and Dante).

### Changelog v1.45.0 (27 Oct 2026)

- **Dante, clean company names**: the subject is "[Company] su Shopify?", so the review routine now writes the company as a person would ("UNOAERRE INDUSTRIES SPA" becomes "Unoaerre Industries", legal suffixes and domain endings dropped) when it approves a lead. Tests.

### Changelog v1.44.0 (27 Oct 2026)

- **Direct cold email, network retry**: Gmail calls (and the token refresh) retry network errors up to 5 times with a growing pause; the 9:30 run of 27 October stopped on an ECONNRESET while the Mac's network was waking up. Test.
- **Dante finds hello@ by address**: Gojiberry gave the mailbox a new seat id when it was reconnected on 26 October, so the review routine now looks the seat up by email address.

### Changelog v1.43.0 (26 Oct 2026)

- **Marco, Sprint gig and style**: `backlink/scheda.md` gets the full migration gig at the tier 1 price (€5,800, 4 milestones, tier 1 limits stated in the FAQ), with titles, long descriptions in Antonio's voice (IT and EN), Fiverr versions under 1,200 characters, FAQ and order questions, all matching the Sprint page. New style rule for published texts: Antonio's voice, no dashes, no colons; the agency descriptions are rewritten to follow it. First live profile: Clutch (submitted, under review). No site change.

### Changelog v1.42.0 (26 Oct 2026)

- **Marco, entry offer**: the Shopify Migration Check becomes the **Shopify Migration Blueprint** (€290, 3 working days): the store's bottleneck with its fix, the full migration project (apps, redirect map, data mapping, tracking, SEO risks), go-live date and fixed Sprint tier, a 30-minute video call. Fully credited to the first Sprint installment within 30 days, money back if not useful, the plan stays with the client. "Listino" in `docs/dati-verificati.md` updated. No site change.

### Changelog v1.41.0 (26 Oct 2026)

- **Marco, platform research**: `backlink/README.md` now lists the platforms to open by type, the ones set aside and why, and the main finding: almost every profile link is nofollow or redirected (checked on live profiles), so profiles are for visibility and dofollow links come from press quotes, guest posts and podcasts. No site change.

### Changelog v1.40.0 (26 Oct 2026)

- **Marco, decisions**: public contacts for every platform (hello@noprob.agency, the Italian mobile, the LLC address from the footer, area served where the address can be hidden), how the Sprint fits marketplace packages, milestones and price caps without changing its terms, the other listino products as extra gigs, and a marketplace-only entry product, the Shopify Migration Check at €290 (added to the "Listino" in `docs/dati-verificati.md`). Marco now publishes and maintains profiles on its own; Antonio only creates accounts, signs terms and pays. Live profiles go into `sameAs`. No site change.

### Changelog v1.39.0 (26 Oct 2026)

- **Backlink agent, Marco**: new `backlink/` folder with the rules (`README.md`: one offer, verified numbers, no dirty links, accounts and payments by Antonio), the canonical company profile with every text to paste on platforms (`scheda.md`, IT and EN) and the `/backlink` skill (stato, cerca, valuta, prepara, verifica). Working tracker in `backlink/data/` (gitignored). No site change.

### Changelog v1.38.0 (26 Oct 2026)

- **Dante review, waiting leads**: approved leads count as waiting until they start in Dante's campaign (not another campaign's history), so the daily cap is not exceeded when leads carry an old profile visit.

### Changelog v1.37.0 (26 Oct 2026)

- **Opt-outs on Dante's list**: `optoutSweep` (lib/cold/sweep.mjs) takes the lists to check (default unchanged: Ada's 63200 and 64866); `scripts/cold-email-gjb.mjs` runs it on Dante's list 65682 before every review, so a "no" or an unsubscribe there is excluded in Gojiberry and added to `docs/cold/suppressed.txt`.
- **Direct channel, a "no" is an opt-out**: a reply recognised by `isOptOut` (lib/cold/optout.mjs) now suppresses the lead, stops its store and goes to the shared file, instead of becoming a warm lead. Tests.

### Changelog v1.36.0 (26 Oct 2026)

- **Dante review, Italy check**: the person's location decides (the company's only as a fallback), with an explicit veto for US, UK, Canada and Australia, so "Florence, Alabama" no longer passes as Firenze. Tests.

### Changelog v1.35.0 (26 Oct 2026)

- **Dante review, two more checks**: a lead is approved only if based in Italy (the campaign copy is Italian) and its website matches the company name (`siteMatchesCompany`); otherwise it waits for a human (`hold`). Tests.

### Changelog v1.34.0 (26 Oct 2026)

- **Dante takes over the 95 Italians of the paused ex-Leonardo list**: moved into list 65682 with approvals reset; `scripts/cold-email-gjb.mjs` now counts a lead as started only in Dante's campaign (46398), so leads carrying another campaign's history still go through the review.

### Changelog v1.33.0 (26 Oct 2026)

- **Cold outreach, Ada and Dante**: two Gojiberry agents on the same plan, each with its own Claude session. Ada (this flow) runs LinkedIn plus the spread email sequence from antonio@ for the US, UK and Australia; Dante runs aggressive cold email from hello@ for Italy. Leonardo's Italian campaign is paused (the plan allows 2 active campaigns). `scripts/cold-daily.mjs` now works on Ada's list only (leads outside US, UK, AU are held, nothing moves to the IT list) and checks the email limit of antonio@ only. Skill, guide and shared test log `docs/cold/test-log.md` updated.

### Changelog v1.32.0 (26 Oct 2026)

- **Dante sequence v2 (Cannonball)**: observation (the first email that got a reply), value (PHP flaw "in October", offer to check exposure), proposal (14 days, public price, 4 written guarantees, landing link) on days 0, 7 and 21 from hello@ at 30 a day; the review routine now approves a third of hello@'s daily capacity (3 emails per lead) so follow-ups always fit. Copy in `cold-email/README.md`.
- **Short link** `noprob.agency/shopify-sprint` (EN, `utm_campaign=email-only-en`) for the English version.

### Changelog v1.31.0 (26 Oct 2026)

- **Gojiberry email-only agent (Dante)**: agent 41228 (ex Leonardo) now feeds list 65682 for campaign 46398, three fixed emails from hello@noprob.agency, Review Mode on. `scripts/cold-email-gjb.mjs` (launchd `agency.noprob.cold-email-gjb`, Mon-Fri 8:30) reviews its new leads with `lib/cold-email/approve.mjs`: Shopify stores to the side list 64769, stores already in the LinkedIn lists, the direct channel or the opt-out list rejected, one person per store, approvals capped at what hello@ can send that day. Tests.
- **No store gets two channels**: the direct channel also skips the domains of Dante's list.
- **Short link** `noprob.agency/it/shopify-sprint` (307 to the Italian Sprint landing, `utm_source=gojiberry&utm_medium=email&utm_campaign=email-only-it`).

### Changelog v1.30.0 (26 Oct 2026)

- **One LinkedIn agent for four markets**: Ada's agent now targets the United States, United Kingdom, Australia and Italy with English and Italian titles and keywords; Leonardo's agent is paused and its slot goes to the email-only agent. `scripts/cold-daily.mjs` approves English-language leads only from US, UK and Australia (others stay held), Italians keep moving to Leonardo's list. Docs and `/cold` skill updated.

### Changelog v1.29.0 (26 Oct 2026)

- **Direct cold email, launchd log**: the job still failed to spawn (exit 78) because launchd could not open its log in `~/Documents` (a file created without the macOS access grant). Output and errors now go to `~/Library/Logs/agency.noprob.cold-email.log`; the job runs.

### Changelog v1.28.0 (26 Oct 2026)

- **Direct cold email, launchd fix**: the job failed to spawn on its first scheduled run (exit 78) because its program was `/usr/bin/caffeinate`. launchd now starts node directly, like the Gojiberry jobs, and `scripts/cold-email-daily.mjs` keeps the Mac awake itself with `caffeinate -w <pid>` for as long as the run lives.

### Changelog v1.27.0 (24 Oct 2026)

- **Cold outreach sequence v2 ("Cannonball")**: Ada and Leonardo now run LinkedIn first (days 1, 4, 10: observation, value, proposal) and only then 5 emails (days 17, 21, 28, 35, 45). All copy talks about the lead's company and the value for it, never about noprob. Documented in `docs/COLD-OUTREACH.md` §5 and the `/cold` skill.

### Changelog v1.26.0 (23 Oct 2026)

- **Direct cold email, follow-ups keep their day**: `dailyCap` now limits only new first emails; follow-ups (E2 to E5) go out on their day within the antonio@ mailbox budget (55 a day minus the manual reserve and what was already sent), so a batch of 50 first emails gets its 50 E2s on the same day.
- **Daily run spread over the day**: the launchd job runs with `--until 17:30` (recipients' clock) under `caffeinate`, so the sends are spaced from 9:30 to 17:30 and the Mac does not sleep mid-run.

### Changelog v1.25.0 (23 Oct 2026)

- **Opt-out sweep reads the shared file correctly**: `docs/cold/suppressed.txt` lines like `email # reason` (written by the direct channel) were ignored by the Gojiberry sweep, which only skipped whole-line comments. New `parseSuppressed` strips comments anywhere, with a test. Leads excluded by the sweep now also add their store `@domain` (most Gojiberry leads have no email yet), with a dated comment.
- **`/cold` skill** points to the direct email channel: its log, the shared opt-out file and the 55 a day ceiling on antonio@.

### Changelog v1.24.0 (23 Oct 2026)

- **Direct cold email, Gmail token refresh**: access tokens last one hour; the Gmail client now gets a fresh one on a 401 and retries once (the first run stopped after 13 of 50 sends). Test.
- **Direct cold email, mass per store**: private mailboxes stay in the sequence (flagged `privateMailbox`) and several people of the same store can be in it; a store gets at most one first email a day, and a reply from anyone stops the sequence of everyone else of that store (`stopStore`). Replaces the one-lead-per-domain rule.

### Changelog v1.23.0 (23 Oct 2026)

- **Direct cold email, shared opt-out list**: `lib/cold-email/suppression.mjs` reads `docs/cold/suppressed.txt` (shared with the Gojiberry routine, one email or `@domain` per line): listed leads leave any sequence or list of this channel before every run, and leads who said no or opted out here are appended. Tests.
- **Lead hygiene**: private mailboxes (gmail, yahoo, hotmail...) leave the sequence (`review`), no-reply and ticketing addresses are suppressed, brands are cleaned ("Motivi (Miroglio)" -> "Motivi", broken accents fixed), foreign store domains get the English copy, and a first email never goes to a store Antonio wrote to by hand in the last 60 days (Gmail search before each E1).
- **PHP hook accuracy**: stores whose server already runs a patched PHP get the non-PHP first email; custom sites that expose an old PHP version get the PHP hook with their version.
- **Spread sends over the day**: `--until 18:30` spaces the run's sends evenly until that time on the recipients' clock (Europe/Rome), each gap varied by ±40%.
- **Mailbox budget**: `scripts/cold-email-daily.mjs` counts the emails antonio@ already sent today and sends at most `min(dailyCap, 55 - manual reserve - already sent)`; `dailyCap` now defaults to 10 for the first two weeks of warm-up.

### Changelog v1.22.0 (23 Oct 2026)

- **Cold outreach, opt-out sweep**: `lib/cold/sweep.mjs` excludes at once (`state: excluded`) every Sprint lead who replied with a refusal on LinkedIn (EN and IT patterns in `lib/cold/optout.mjs`, a bare "no" included), is marked unsubscribed in Gojiberry, or matches an email or store domain in `docs/cold/suppressed.txt`, the suppression file shared with the direct email channel. It runs hourly on its own (`scripts/cold-optout.mjs`, launchd `agency.noprob.cold-optout`) and at the start of the daily routine. Tests for both.
- **Shared Gojiberry client**: `lib/cold/gojiberry.mjs` (REST calls, list paging, API key read on the first request so tests need none).
- **Email volume guard**: the daily log line shows the Gojiberry email limit per day and flags it above 25; antonio@noprob.agency stays within 55 emails a day across all channels.
- **Docs**: live 11-step sequence (5 emails, 3 LinkedIn messages), compliance line validated by the lawyer (up to 5 emails, opt-out by reply, immediate exclusion), CERT-EU 2026-018 in `docs/dati-verificati.md`, `/cold` skill updated.

### Changelog v1.21.0 (23 Oct 2026)

- **Direct cold email channel** (`cold-email/README.md`): email only, from antonio@noprob.agency, in parallel with Gojiberry and never on the same store domains (read-only check of the Sprint lists). Five emails in one Gmail thread on working days 0, 3, 7, 12, 18, stopped for good by a human reply or a bounce (out of office does not stop it). First email for stores on PHP platforms uses the CERT-EU advisory 2026-018 (PHP2Shell, 21 Oct 2026) and names the PHP version only when the store's server exposes it. Copy in `lib/cold-email/sequence.mjs`, sent only when its version is approved in the local config.
- **Engine, no AI**: `scripts/cold-email-import.mjs` (old CRM leads, fresh platform and PHP check, segments target / warm / shopify / review / suppressed, one lead per domain), `scripts/cold-email-daily.mjs` (replies and bounces, sends due steps with a daily cap and random gaps, Gmail API with Keychain credentials, launchd Mon-Fri 9:30 via `cold-email/agency.noprob.cold-email.plist`), `scripts/cold-email-auth.mjs` (one-time OAuth), `scripts/cold-email-crm.mjs` (export to the private CRM repo, which now shows a single simple page; the old CRM moved to `/v2`). Lead data in `cold-email/data/` (gitignored).
- **Platform detector reads PHP**: `phpVersion` (X-Powered-By) and `phpStatus` against the first fixed release per branch, with tests.
- **Short links for the direct channel**: `noprob.agency/it/migra` and `/migrate` (307 to the Sprint landings with `utm_source=cold-email`).

### Changelog v1.20.0 (23 Oct 2026)

- **Cold routine, one person per company**: `scripts/cold-daily.mjs` now groups leads by the LinkedIn company page (fallback: the company name without domain suffix), so "Semprefarmacia" and "Semprefarmacia.it" count as the same company and only one person enters the sequence.

### Changelog v1.19.0 (22 Oct 2026)

- **`/cold` skill**: campaigns named Ada (Sprint Global, EN) and Leonardo (Sprint Italia), full sequence with the two email steps and the 7-day email fallback, pointer to the local LIA draft.

### Changelog v1.18.0 (22 Oct 2026)

- **Daily cold outreach routine, no AI**: `scripts/cold-daily.mjs` runs Monday to Friday at 8:00 (macOS launchd, before Gojiberry's 9:00 launch) against the Gojiberry REST API. For new leads in the Sprint lists it moves stores already on Shopify to the side-project segment, moves Italian leads found by the EN agent to the IT list, and approves up to 10 leads per campaign with fixed rules (not Shopify, reachable site matching the company, decision-maker title, total score 2.0 or more, one person per company). One line per run in `docs/cold/daily-log.md`; leads left for a human in `docs/cold/daily-state.json` (gitignored). API key from the env or the macOS Keychain item `gojiberry-api`. `--dry` previews without writing.
- **Shared helpers**: `lib/cold/fetch-platform.mjs` (fetch + detect, concurrency pool), `isPersonalSite` and `siteMatchesCompany` in `lib/cold/detect-platform.mjs`, with tests.

### Changelog v1.17.0 (22 Oct 2026)

- **`/cold` skill, live campaigns**: the skill now lists the live Gojiberry objects (EN and IT campaigns, lists, agents, Shopify side-project segment, LinkedIn seat), the short links, the rule that agent signals are edited only via MCP, and the daily approval routine under Review Mode (non Shopify, decision makers, one person per company, Italian leads to the IT list, weekly batches by score).

### Changelog v1.16.0 (22 Oct 2026)

- **Italian short links for cold outreach**: `noprob.agency/it/sprint` (LinkedIn) and `noprob.agency/it/ai-ready` (email) redirect (307) to the Italian Sprint landing with `utm_source=gojiberry`, `utm_medium=linkedin|email`, `utm_campaign=sprint-it`.

### Changelog v1.15.0 (22 Oct 2026)

- **Curiosity short link for cold emails**: `noprob.agency/ai-ready` replaces `/sprint-mail` (never used in a message): same 307 to the Shopify Launch Sprint landing with `utm_source=gojiberry&utm_medium=email&utm_campaign=sprint-en`. `/sprint` stays for LinkedIn.

### Changelog v1.14.0 (22 Oct 2026)

- **Short links for cold outreach**: `noprob.agency/sprint` and `noprob.agency/sprint-mail` redirect (307, temporary) to the Shopify Launch Sprint landing with the Gojiberry UTMs (`utm_source=gojiberry`, `utm_medium=linkedin` or `email`, `utm_campaign=sprint-en`), so LinkedIn messages and emails carry a short, readable link and the form still receives the UTMs. Defined in `next.config.ts`.

### Changelog v1.13.0 (22 Oct 2026)

- **Cold outreach platform detector**: `scripts/detect-platform.mjs` reads Gojiberry contact exports, fetches each store homepage once (16 in parallel, 10 s timeout) and detects the platform from HTML and headers (`lib/cold/detect-platform.mjs`, tested in `lib/cold/detect-platform.test.ts`): Shopify, Salesforce Commerce Cloud, Magento, WooCommerce, PrestaShop, BigCommerce, Shopware, Wix, Squarespace, Webflow, WordPress. Flags personal sites (domain contains the lead's last name) and unreachable ones. `--ids shopify` prints the contact ids to move out of the Sprint campaign. First run: 301 leads, 271 domains, 56 seconds, 149 already on Shopify.
- **`/cold` skill** (`.claude/skills/cold/SKILL.md`): the session's outbound operator for Gojiberry (setup, daily review, replies, Friday report), with the platform filter as step 0 of the daily routine. Operating state lives in `docs/cold/` (gitignored, never lead data in the repo).
- **Docs**: `docs/COLD-OUTREACH.md` daily routine starts with the platform filter; LinkedIn proxy is Portugal, where Antonio logs in from.

### Changelog v1.12.0 (18 Oct 2026)

- **Custom AI theme renamed Custom AI System, everywhere**: Sprint landing IT and EN (meta description, hero description, overview, deliverable badge and detail, blue section label, scope, FAQ, application page), migration page banner (`lib/i18n/migrazione.ts`), ambassador playbook (`lib/i18n/ambassador.ts`), `llms.txt`, Gojiberry setup kit. Prepositions follow the new name ("con il nostro Custom AI System" / "with our Custom AI System"). The blue section paragraph now ends "Compatto e forte, con sei superpoteri." / "Compact and powerful, with six superpowers." to avoid "System... un sistema".
- **Code**: `ZlAiTheme` is now `ZlAiSystem` (`components/sections/zero-loss/ZlAiSystem.tsx`), copy key `aiTheme` is now `aiSystem`.
- **Docs**: offer source of truth and wording rules in `docs/ARCHITECTURE.md` (always "Custom AI System", never the old name), article closing pattern in `AGENT.md` and `docs/ARCHITECTURE.md`, outreach pitch, verified-claims log, article idea "Cos'è un Custom AI System per Shopify".

### Changelog v1.11.0 (18 Oct 2026)

- **Custom AI theme as the Sprint's "secret"**: new blue section `ZlAiTheme` before the deliverables ("Non un semplice redesign. Il tuo store, con i superpoteri dell'AI." / "Not just a redesign. Your store, with AI superpowers."), same dark card as `ZlResultsFirst` in the electric blue of the AI badge, with six superpowers: ultra fast, ready for AI agents, automatic GEO, development with AI agents, purchase flow under the X-ray, data mapped in detail. Copy in `aiTheme` of `content/zero-loss-migration.{it,en}.ts`. The word "tema"/"theme" is gone from the landing copy: only the name "Custom AI theme" stays.
- **Hero**: H1 claim "Più posizioni su Google, più vendite, più AI." / "Higher on Google, more sales, more AI." with "AI" in animated electric blue (`.np-ai-electric` in `app/globals.css`, static under `prefers-reduced-motion`). From 810px the claim is one line (font size scales with the viewport). The proof note is now "Caso studio: +105% di vendite in 85 giorni 😉" / "Case study: +105% sales in 85 days 😉": under the H1 on phones, top right with the arrow pointing down on desktop. Shorter hero description built around the Custom AI theme.
- **Offer card**: five Trustpilot-green stars on the result cards under the pricing; "Inclusi nel prezzo" now lists the results dashboard from day 1 first (it was wrongly listed "after the sprint").
- **Checklist**: six shorter pains in plain buyer language, one per superpower; reactions green "Tutto verde? Allora non hai bisogno di noprob." / orange "Già solo con questo potremmo migliorare i tuoi risultati." / red unchanged. Solution heading "La soluzione in uno sprint di 2 settimane", sub "andiamo a tappeto, punto per punto".
- **Copy alignment**: Custom AI theme in the meta description, overview, FAQ ("Il sito sarà uguale a prima?"), application page, migration page banner (`lib/i18n/migrazione.ts`) and `llms.txt`.
- **Fix**: the "Guarda la dashboard demo" button in the calendar no longer overflows its column at tablet width.
- **Docs**: offer source of truth in `docs/ARCHITECTURE.md` (Sprint landing section), new article closing pattern in `AGENT.md` and `docs/ARCHITECTURE.md`, outreach pitch in `docs/COLD-OUTREACH.md`, superpowers logged in `docs/dati-verificati.md`, article idea in `docs/articoli-da-scrivere.md`.

### Changelog v1.10.0 (18 Oct 2026)

- **Custom AI theme instead of premium theme**: the Sprint never uses premium or off-the-shelf themes, only custom Shopify themes built from scratch and connected to AI. "Store Shopify pronto a pubblicare" / "Shopify store ready to publish" now reads "Replica 1:1 su un Custom AI theme sviluppato su misura..." / "1:1 replica on a Custom AI theme built from scratch..." on the Sprint landing (deliverable, deliverable detail, scope) and in the ambassador playbook; `docs/research/gojiberry-setup-kit.md` aligned.
- **External costs**: since the theme is ours and included, the theme is no longer listed among the client's external costs (pricing note, payment FAQ, ambassador commission and costs copy): only the Shopify plan and apps.
- **AI badge**: new `ZlAiBadge` (electric-blue pill with a pulsing sparkle and a slow shimmer, `.np-ai-badge` in `app/globals.css`, static under `prefers-reduced-motion`, lighter variant inside `[data-header-theme="dark"]` sections) next to the first deliverable title on both Sprint landings, driven by the optional `badge` field of `overview.deliverables`.

### Changelog v1.9.0 (18 Oct 2026)

- **Cold outreach docs**: new `docs/COLD-OUTREACH.md`, the instruction file for anyone running cold email and LinkedIn outreach with Gojiberry (non-negotiable rules, how the tool works, MCP and REST tools, strategy for the Shopify Launch Sprint, sequences, daily and weekly workflow, LinkedIn limits, email deliverability, compliance, open checks). Linked from `AGENT.md`.
- **Research**: `docs/research/gojiberry-ai-deep-research.md` (full study of Gojiberry.ai: product, signals, pricing, MCP and API, reviews, GDPR in Italy, pre-account plan) and `docs/research/gojiberry-setup-kit.md` (Workspace copy, ICP, signals, AI templates and prompts in Italian, sequences, sender limits, API payloads, day-0 checklist). No site change.

### Changelog v1.8.1 (17 Oct 2026)

- **Sprint hero description**: the paragraph under the H1 now explains the offer in five short sentences (14 days, full team, what moves, checkout and visibility, support after launch on SEO, conversion, AOV and processes, results in 3 months with a custom dashboard, no surprises on costs) instead of quoting the two client results, which stay in the proof section. `hero.paragraph` in `content/zero-loss-migration.{it,en}.ts`.

### Changelog v1.8.0 (17 Oct 2026)

- **Demo dashboard rebuilt on data** (`lib/demo-dashboard.ts`, tests in `lib/demo-dashboard.test.ts`): invented daily series for 2025 and 2026 (to 17 Oct) generated from the monthly bases with a seeded generator, so Day / Week / Month / Year really change the columns, the KPI cards (current period) and the totals; ratios (ROAS, MER, MER €, AOV, CAC, NCAC, retention, CPA break even) are derived from the totals of the period shown. The Quiz AstrumDonna tab is gone; Customers and Email are frozen (disabled, ✕ on hover). The year selector is removed (the Year view compares 2025 and 2026). AOV, CAC and retention are now consistent with sales, orders and customers (the previous hardcoded values were not).
- **Sprint landing**: the dashboard is the third point of "Dopo lo sprint" / "After the sprint" (`calendar.after.dashboard`, with the demo link); the standalone link under the results charts is removed.

### Changelog v1.7.7 (17 Oct 2026)

- **Cumini case study chart**: sales and orders index since 2023 (same series and KPIs as the Sprint landing chart, `cuminiMonthly` in `data/zero-loss/seo-charts.ts`), as PNG `public/images/use-case-cumini/cumini-sales-{it,en}.png` generated by `scripts/generate-cumini-sales-chart.mjs`, placed after the 12-month comparison list with a short caption. Re-run the script when `cuminiMonthly` is updated.

### Changelog v1.7.6 (17 Oct 2026)

- **No absolute traffic volumes online**: the Nazzi Search Console series (landing chart, case study chart PNG, `data/use-cases/nazzi-gsc-daily.json` shipped to the browser) is an index, 100 = daily average of the 28 days before go-live, on one axis; KPIs are +41% clicks and 2.2x impressions (28 days after vs before), 2.7x clicks vs 2025 and +21% average position (9.0 → 7.1, no longer published). Case study text, landing results line and `llms.txt` aligned. Cumini was already indexed; DDglobal shows no axis values. Rule added to AGENT.md and `docs/dati-verificati.md`, which keeps the raw totals and the index baseline.

### Changelog v1.7.5 (17 Oct 2026)

- **Sprint hero note, final form**: the proof strip of v1.7.4 is gone. The note "Lo possiamo dimostrare 😉" / "We can prove it 😉" (serif italic, green, inline SVG arrow pointing back at the word) is glued to the last word of the H1 claim ("vendite." / "sales.") with `whitespace-nowrap`, so it sits right after it at every width and wraps together with it. No positioned elements, no SVG assets; sizes in em of the headline. `ZlHero` splits the H1 at the first sentence end (`splitHeadline`); copy keys `proofStats` / `proofCta` removed.

### Changelog v1.7.4 (17 Oct 2026)

- **Sprint hero proof strip**: the hand-drawn arrow and scribble under the H1 (two positioned SVGs that broke at some widths) are replaced by a plain flex card linking to `#prove`: green dot + "Lo possiamo dimostrare" / "We can prove it", two verified stat chips (+105% Nazzi, +67,7% Cumini) and "Vedi i dati" / "See the data". One line on desktop, stacked card on phones. Copy keys `hero.proofStats` and `hero.proofCta` in `content/zero-loss-migration.*.ts`.

### Changelog v1.7.3 (17 Oct 2026)

- **Sprint landing**: the two result charts sit side by side from 810px (`ZlSeoCharts` `sideBySide`, used by the landing only; the migration page keeps them stacked in its narrower container), Cumini first, Nazzi second. Order comes from `proof.charts.items` in the copy files, so the migration page also shows Cumini first. Mobile behavior unchanged (swipe rail).
- **Brand name**: "Integratori Nazzi DTC" becomes "Integratori DTC Nazzi" in Italian and "Supplement DTC Nazzi" in English everywhere (copy, alts, carousel, ambassador, articles, `llms.txt`, docs); the cover and Search Console chart PNGs are regenerated (the shared cover says "Nazzi DTC, case study"). URL slugs are unchanged.

### Changelog v1.7.2 (17 Oct 2026)

- **DDglobal case study**: the Google position is shown as a percentage (+16%, derived from the verified 9.4 → 7.9) and impressions as 2.7x the same period of 2025, in the copy (IT+EN), the sources, the regenerated GA4 chart PNGs (`node scripts/generate-ddglobal-ga4-chart.mjs`), `llms.txt` and `docs/dati-verificati.md`. The detailed positions are no longer published.

### Changelog v1.7.1 (16 Oct 2026)

- **Fix broken images** (introduced in v1.6.0): the CTA orbit above the footer (24 avatars on every page that ends with the CTA) loaded 18 images from `framerusercontent.com`, and v1.6.0 had removed that host from `images.remotePatterns` and deleted the matching local copies as "unused" (the code referenced the remote URL, not the local path). The 16 deleted files are restored under `public/images/originals` and `CTA.tsx` now points to the local files, so the site has no remote image host. A crawl of the 48 public pages checking every image asset is now part of the release check (see AGENT.md).

### Changelog v1.7.0 (16 Oct 2026)

- **Lighthouse pass** (mobile, production, 16 Oct): home IT 76 / EN 77, Sprint landing 81, migration page 78 on performance, 96-97 accessibility, 100 best practices and SEO. Fixes: the route templates (`app/(en)/template.tsx`, `app/it/template.tsx`) are gone, so the page is in the first paint instead of hidden at `opacity: 0` until hydration; the hero chart (LCP image on the EN home) loads with `priority`; `np-green-trust` is `rgb(31,122,83)` and `np-grey` is `#6b6b6b` so 12-13px labels pass the 4.5:1 contrast ratio on `#f0f0f0`; light-background muted text uses `noprob-grey`; the Sprint chart legends use darker text variants of the brand colors.
- **Alt text**: the results carousel names every brand (Madotto and Sfogliate&Sfogliatelle added) and describes the store screenshots; logos no longer say "Client logo".

### Changelog v1.6.0 (16 Oct 2026)

- **Repository cleanup**: removed the unused Sanity stack (`sanity`, `next-sanity`, `@sanity/*`, `@portabletext/sanity-bridge`, config files and env vars), `styled-components`, `next-sitemap`, `geist`, `@fontsource/*`, `react-intersection-observer`, `@vercel/analytics` and `@vercel/speed-insights` (never mounted), the stale `package-lock.json` (Vercel builds with pnpm), the duplicate `components/tracking/{MetaPixel,GoogleAnalytics}.tsx`, `components/ui/Button.tsx`, the client logo wall assets, scaffold SVGs, `public/icons` and 45 unused Framer originals.
- **Tests and CI**: Vitest with unit tests on the Sprint tier logic, the locale route map and the form schemas (`pnpm test`); GitHub Actions runs lint, typecheck, em-dash check, tests and build on every push and pull request.
- **One version**: `package.json#version` is the source of truth, `siteConfig.version` reads it; `packageManager` pinned to pnpm.
- **Docs split**: AGENT.md keeps only the rules and runbooks; architecture moved to `docs/ARCHITECTURE.md`, history to this file; README rewritten.

### Changelog v1.5.0 (16 Oct 2026)

- **Root `app/template.tsx` moved to `app/(en)/template.tsx`**: at the root it wrapped the route-group root layouts, putting `<html>` inside a `<div>` (invalid HTML, and the real reason every in-layout not-found went blank after hydration). Each root layout now has its own template (`(en)`, `it`); the Sprint and funnel groups have none.
- **Preloader moved into the two homepages** (`app/(en)/page.tsx`, `app/it/page.tsx`), no longer in `BaseLayout`; `Navbar` and `StickyContact` take the `locale` from the layout. Reason: on a not-found render the server-side pathname is not the requested URL, and anything deriving text from `usePathname()` in the layout caused a hydration mismatch that unmounted the 404 page.
- **Custom 404** in both locales: `app/global-not-found.tsx` (`experimental.globalNotFound`, own document, locale picked on the client from the URL by `NotFoundLocale`) for unmatched URLs, plus `app/(en)/not-found.tsx` and `app/it/not-found.tsx` for explicit `notFound()` calls (blog, case studies). Shared UI `NotFoundSection`, copy `notFound` in the dictionary. A catch-all page calling `notFound()` was tried first and went blank after hydration with the multiple root layouts.
- **Organization JSON-LD** also in the IT layout.
- **Security**: user input escaped in every admin email (`/api/contact`, `/api/ai-accelerator-lead`, classic branch of `/api/migrazione-lead`, welcome email) and subjects stripped of line breaks; `/api/meta-capi` accepts only same-origin requests (Origin/Referer host must match the request host), a fixed list of event names, and is rate-limited per IP.
- **Sitemap**: `lastmod` comes from `CONTENT_LAST_MODIFIED` in `lib/sitemap/routes.ts` (bump it when page copy changes) instead of the build time; the Sprint landing is always listed.
- Home CTA orbit renders integer offsets with an explicit sign (no hydration mismatch). `/trustpilot` and `/it/trustpilot` 308 to the Trustpilot profile (page removed).

### Changelog v1.4.0 (16 Oct 2026)

- **Sprint confirmation flow**: dedicated thank-you pages in both locales (`ZeroLossThankYouPage`) and a confirmation email to the lead with the estimated tier (`buildSprintWelcomeEmail`). The generic `/thank-you` and `/it/grazie` stay for the other forms.
- **Copy coherence**: "nei mesi di supporto" instead of "due mesi" (support is 90 days) on the Sprint landing and migration page; home FAQ aligned with the service pages (who we work with, guarantees per product, photography coordinated with partners); nav and footer labels "Data-Driven Team" / "Use Cases"; `llms.txt` target, sectors and model aligned with the pages; Sviluppo tier tags logical.
- **Unsourced claims removed or softened**: Cumini ("primo mese a sei cifre", "migliori di sempre", "record assoluto", "decine di migliaia di euro", "prodotto da 400€"), articles ("Stape score" is the tracking audit score, "competitor ogni 12-18 mesi"). Client facts and founder statements that stay are now listed in `docs/dati-verificati.md`, together with a public price list.
- Articles carry `dateModifiedIso` (BlogPosting `dateModified`); legal pages dated 16 Oct 2026.

### Changelog v1.3.0 (15 Oct 2026)

- **Ambassador on the Sprint**: playbook rewritten on the Shopify Launch Sprint (see §17), linked from the footer in both locales, still noindex. Pricing section shows the 3 revenue tiers with the ambassador commission per tier.
- **Demo dashboard anonymized**: `components/dashboard/DemoDashboard.tsx` no longer names a client or a real domain; every amount and count is rescaled and the footnote states the data is invented. Never put real client figures on this page.
- **Preloader only on the homepages**: `components/ui/Preloader.tsx` renders only on `/` and `/it`, skips with `prefers-reduced-motion` and has a 2.2 s hard timeout so the page can never stay covered.
- **Blog**: Sprint conclusions say 14 days (was "10 giorni"), the CRO conclusion addresses stores not yet on Shopify, em dashes removed from IT and EN; `scripts/check-em-dash.mjs` now scans all public copy.
- AGENT.md: stale slugs (`/ecommerce-rebuild`, `/it/rifacimento-ecommerce`) and the §14 pattern updated.

### Changelog v1.2.0 (13 Oct 2026)

- **Dashboard Demo Giorno 1**: `/it/demo-dashboard` + `/demo-dashboard` (EN), noindex, dati inventati stile Nazzi. Link da `ZlProof` e dalla schermata successo del form Sprint. `ZL_DEMO_DASHBOARD_URL` settato in `content/zero-loss-migration.shared.ts`.
- **Form Sprint → thank-you redirect**: dopo submit del form ZeroLoss/Sprint, `router.push` rimanda a `/it/grazie` (IT) o `/thank-you` (EN) che ha già TidyCal embed (`components/thank-you/TidyCalEmbed.tsx`).
- **Warning soft <300k**: il band `under300k` non blocca più il form; mostra un amber warning box ma lascia proseguire. La dichiarazione di ineleggibilità è rimossa dall'API handler; il tier stimato è Tier 1.
- **SEO internal linking**: aggiunti link allo Sprint nelle conclusioni di tutti gli articoli del blog (CRO IT/EN, Cos'è Shopify IT/EN, Strategia eCommerce IT/EN). Regola link building codificata in §14.
- **FAQ Dashboard**: aggiunta FAQ "Cos'è la dashboard che ricevo il Giorno 1?" in IT e EN (`content/zero-loss-migration.it.ts` / `.en.ts`).

## Launch status history


- Live on `https://noprob.agency`, 36 URLs in `/sitemap.xml` (IT + EN), `robots.txt` and `llms.txt` served.
- Audit script (pre-launch): crawl of the sitemap checking status, title, description, canonical, hreflang, H1, OG image, JSON-LD and every internal link. Result: 0 issues.
- Case studies and blog posts have short Google titles/descriptions via optional `seoTitle`/`seoDescription` fields (`data/use-cases`, `data/articles`), the H1 keeps the long title.
- Verified data: every public number is in `docs/dati-verificati.md`.
- Open (owner): Madotto and Sfogliate metrics once their results are visible.

## AI Accelerator copy versions

### AI Accelerator v2 (B2B repositioning)

- Copy v2 in `lib/i18n/aiAccelerator.ts`: B2B one-to-one positioning ("aziende ed eCommerce già avviati"), IT rules: no "business", "call" -> "videochiamate" (except "pre-call"), "noi" voice; "Chi ti segue" in third person (the MRR claim placeholder was left out pending Antonio's confirmation).
- Section order v2: hero (2-line H1 + lead line), problema, soluzione, per chi è, come si accede, timeline (+ "L'obiettivo del mese" electric box), chi ti segue, case study, **form standalone** (`AiFormSection`), cosa ricevi, incluso, confronto, e dopo, prezzo (tiers only, no embedded form), testimonianze, FAQ (12), CTA finale (`AiFinalCta`).
- Prices v2: tiers €750 / €1.100 (current) / €2.500 / €4.000; card €1.100 una tantum, €550 + €550; JSON-LD Offer 1100; sticky bar and form subtitle carry the price.
- Success state has no TidyCal link (pre-call link is sent manually by email after review); admin email starts with a fit-summary line (tipo attività · ruolo · uso AI · azienda). Navbar "Prenota una call" points to #candidatura on the AI pages.

### AI Accelerator v3 (revenue qualification + fiscal data)

- Threshold copy "almeno €30.000 di fatturato al mese" / "at least €30,000 in monthly revenue" (never "30k") in hero note, "Non fa per te", "Come si accede", form subtitle + helper, pricing card, FAQ #1 (+ FAQPage JSON-LD), final CTA.
- Form step 1 opens with the monthly-revenue question; picking the first option ("Meno di €30.000") shows the under-threshold block (no API call, no Lead, custom event `ai_form_disqualified`), with "Ho sbagliato risposta" resetting only that answer.
- Step 3 asks `legalName` + `vatNumber`: IT normalizes to `IT` + 11 digits (`normalizeItalianVat` in `lib/schemas/aiAccelerator.ts`), EN accepts min 5 alphanumerics. Payload keeps `company` = `legalName`. Admin email summary line starts with monthly revenue and shows the VAT with a registroimprese.it link for IT numbers.
- All landing CTAs (header on this page, sticky, pricing card, final) read "Candida la tua azienda" / "Apply with your company".

### AI Accelerator v3.1 (section order)

- Standalone form section removed (`AiFormSection` deleted). The black pricing section now sits right after the case study and embeds the multi-step form (`#candidatura`) in an electric `.ai-form-card` inside the offer card; testimonials stay under it. Then "E dopo?", cosa ricevi, incluso, confronto, FAQ, CTA finale.

### AI Accelerator v4 (compressed copy)

- Copy cut by ~38% (IT 2,790 -> 1,725 words) keeping the same message; hero has one supporting paragraph (`leadLine`), the duplicated subtitle is gone and the H1 carries two outcomes (time, sales).
- Solution H2: "Un partner AI, non un guru" / "An AI partner, not a guru". FAQ reduced to 9 per locale.
- Qualification is qualitative everywhere ("già avviati, con fatturato consolidato"), no revenue figure. The form no longer asks monthly revenue and has no under-threshold block: the qualification sits in red under "Che tipo di attività è?" (`qBusiness.notice`). `monthlyRevenue` removed from schema, payload and admin email.

### AI Accelerator v5 (booking flow)

- Step 2 open question is now the goal/context ("Cosa vorresti ottenere integrando l'AI…" + helper); payload key stays `mainPain`, admin email labels it "Obiettivo / contesto".
- Step 3: VAT removed; `phone` optional (≥6 digits if filled), `website` required (bare domains accepted). Admin email shows site + tel links under the summary line.
- After a successful submit the form fires Lead (Pixel+GA4+CAPI) and redirects client-side to the dedicated noindex booking page: `/it/ai-accelerator/grazie` · `/ai-accelerator/thank-you` (`ROUTE_PATHS.aiThankYou`, `AiThankYou` component). It embeds TidyCal `noprobagency/ai-call` (`AI_TIDYCAL_PATH`), fires custom `AiAcceleratorApplication` (Pixel) / `ai_accelerator_thank_you` (GA4), has no WhatsApp and hides the floating contact pill. The generic `/it/grazie` / `/thank-you` pages are unchanged for the other forms.
- SEO titles shortened to fit 60 chars (superseded by v6).

### AI Accelerator v6 (eCommerce + opportunities, 13 Oct 2026)

- eCommerce only; positioning on finding growth opportunities and joining the project as a partner, for brands that want to grow but do not know where to start. No "collo di bottiglia / bottleneck" anywhere.
- H1 restored: "Smetti di rincorrere tool. In 30 giorni portiamo l'AI dove il tuo eCommerce può risparmiare tempo e vendere di più." Home card: "Vuoi far crescere il tuo eCommerce ma non sai da dove partire?", CTA "Trova le tue opportunità".
- Form `qBusiness` options are eCommerce types (solo online, online + negozio, online + B2B, marketplace). FAQ "funziona senza eCommerce?" answers no.
- SEO: "AI Accelerator per eCommerce: cresci con l'AI" / "AI Accelerator for eCommerce: Growth with AI"; OG images regenerated with the new H1.

---

## Early build history (Framer replica, March to April 2026)

## Session Checklist

- [x] Bootstrap the Next.js project
- [x] Install core dependencies
- [x] Install dev dependencies
- [x] Initialize Sanity Studio scaffold
- [x] Align base config files
- [x] Build shared UI primitives
- [x] Build layout shell
- [x] Implement homepage sections
- [x] Wire SEO helpers and metadata
- [x] Wire tracking foundations
- [x] Add sitemap and robots
- [x] Add `.env.example`
- [x] Run `pnpm tsc --noEmit`
- [x] Run `pnpm build`
- [x] Remap the design system to the light theme
- [x] Switch the homepage to local assets instead of Framer-hosted dependencies
- [x] Rebuild the hero, pricing, proof sections, and footer around the live light-theme structure
- [x] Replace the homepage tokens with the exact Framer-extracted light design system
- [x] Rebuild navbar and hero from the Framer layout and asset mapping
- [x] Add results carousel, revised problem/solution sections, and case study card
- [x] Rebuild black pricing section with embedded testimonials
- [x] Rebuild logo wall, FAQ card, final orbit CTA, and black footer
- [x] Run a screenshot-based fidelity pass on hero and results carousel details
- [x] Import the original hero chart SVG as a local asset and wire it into the hero card
- [x] Remap the above-the-fold desktop and mobile variants directly from the Framer export
- [x] Remove the temporary static-export / legacy Framer renderer from the Next app
- [x] Restore homepage and supporting routes to pure React/Tailwind components only
- [x] Remove Framer CDN dependencies and serve local assets/fonts only
- [x] Add `lib/design-tokens.ts` as a centralized design-source file
- [x] Rebuild the navbar with semantic HTML, text logo, and responsive drawer behavior
- [x] Add the desktop `Services` dropdown and expand service links in the mobile drawer
- [x] Reduce navbar menu typography to `16px / 400` on both desktop and mobile
- [x] Stabilize the desktop `Services` dropdown hover so it does not close while moving into the panel
- [x] Refine hero CTA sizing, replace the broken Trustpilot icon with an inline star, and normalize partner logo sizing/alignment
- [x] Standardize CTA styling site-wide around a shared black/white responsive pattern
- [x] Increase hero partner logo scale on desktop for better readability

## Decisions

- A local `pnpm` shim was added because `pnpm` was not installed in PATH on this machine. It forwards to `corepack pnpm`.
- The initial `create-next-app@latest` scaffold produced a Next 16 + Tailwind 4 template. The project is being realigned to Next 15 and Tailwind 3 to match the requested config shape.
- The project is now pinned to Next.js `15.5.14`, which is the current maintained Next 15 backport line published on the npm registry.
- Live copy and structure are being taken from the published `https://noprob.agency` homepage and not from invented placeholder content.
- The exact “PARTE 2” source for this file was not included in the prompt, so this document is a working equivalent synthesized from the task brief.
- The homepage now uses locally downloaded assets from `public/images`, including renamed hero partner logos for Shopify, WooCommerce, Google Partner, Meta Business Partner, and Klaviyo Partners.
- The earlier dark-theme draft was intentionally replaced with a light system based on the live site’s warm off-white backgrounds and dark text.
- Footer versioning is now sourced from `siteConfig.version` in `lib/site.ts`; future edits must bump that value before shipping.
- GA4 and Meta are wired behind GDPR consent via `vanilla-cookieconsent`; IDs remain environment-driven through `.env.example`.
- The current homepage refactor is aligned to Framer-export tokens and structure: `#f0f0f0` page background, black pricing/footer blocks, Inter-led typography, and Source Serif 4 italic emphasis.
- The homepage footer is not rendered in `app/layout.tsx`; it remains part of the homepage composition to match the live landing structure.
- The latest polish pass focuses on screenshot fidelity: hero headline breaks, integrated chart/quote card, partner logo scale, and results-carousel badge placement.
- The hero chart now uses the imported original SVG asset `public/images/originals/hero-profit-chart.svg` instead of a hand-drawn approximation.
- The above-the-fold now follows the pasted Framer DOM more literally, including the mobile `Menu` pill, centered mobile hero copy, and the graphic card rendered below the partner logos on phone.
- The temporary static-export fallback has now been removed; the app is back to pure React/Tailwind rendering with local assets only.
- Framer-hosted runtime dependencies are no longer used in the app code or image configuration.
- Local `@font-face` declarations are used from `public/fonts` to avoid shipping Google Fonts or Framer-hosted font dependencies.
- `lib/design-tokens.ts` is now the canonical token reference for palette, type scale, spacing, radius, and reusable component values; new UI work should pull from it instead of hardcoding raw values first.
- The navbar now uses semantic HTML, a text-based `noprob®` logo, responsive desktop/mobile visibility helpers, ESC-to-close mobile behavior, and no HTTP logo asset dependency.
- The navbar logo size has been nudged up to `1.625rem`, and the desktop `Services` item now opens a token-driven hover/click dropdown with direct links to the key service pages.
- Menu typography has been softened to `16px / 400` for desktop links, dropdown items, and mobile drawer links to better match the latest visual direction.
- The `Services` dropdown now keeps a small hover buffer and delayed close behavior so the panel remains stable while moving the cursor from the trigger into the menu.
- The hero CTA pair now uses the larger `14px` radius / `14x28` padding treatment, the Trustpilot badge no longer depends on the broken external SVG icon, and the partner logo row is normalized to a constrained `480px` grid with fixed visual heights.
- CTA buttons now share a unified responsive system: black/white variants, `10px` radius, `16px / 400` desktop typography, and proportionally reduced mobile padding/text sizing defined once in the global button utilities.
- The hero partner logos now step up in size on desktop breakpoints only, so the brand marks read more clearly without crowding the mobile layout.

## Notes

- The Sanity CLI syntax has changed from the one in the brief, so a local Sanity scaffold was created manually with `sanity.config.ts`, `sanity.cli.ts`, and an empty schema entrypoint to keep the codebase ready without blocking the homepage sprint.
- Visual reference for this redesign was taken from the live `https://noprob.agency` homepage plus the Framer-extracted CSS/HTML values provided in the brief.
- The temporary zip-export mounting phase has been fully rolled back in favor of a local pure-component build, so future work should extend the React sections/routes directly rather than reintroducing static Framer exports.

---
