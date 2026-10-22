# Changelog and project history

Newest first. Rules live in [AGENT.md](../AGENT.md), the current architecture in
[ARCHITECTURE.md](ARCHITECTURE.md). Every entry here is history: do not update
old entries, add a new one on top.

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
