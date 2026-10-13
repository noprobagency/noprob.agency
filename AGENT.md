# AGENT.md

## Project Context

- Project: `noprob.agency`
- Stack target: Next.js 15, TypeScript, Tailwind CSS, App Router
- Priority: replicate the current `https://noprob.agency` homepage as faithfully as possible while setting up strong SEO and tracking foundations
- Status: **v1.0.0, live and indexable** (13 Oct 2026). Pre-launch audit passed on all 36 sitemap URLs: 200, unique title ≤ ~65 chars, description ≤ 160, self canonical, hreflang IT/EN/x-default, one H1, valid JSON-LD, OG image, 0 broken internal links (see §19).
- Ship workflow: every change goes to `main` via squash-merged PR, `siteConfig.version` bumped each time, Vercel deploys production from `main`.

## Working Rules

- Do not invent metrics or brand claims. Every public number (pages, blog, landing pages, `public/llms.txt`) must be listed with its source in `docs/dati-verificati.md`; if it is not there, verify it or remove it. Client figures are published only as percentages, multipliers or ratios, never absolute revenue, orders or customers.
- Default to Server Components. Use client components only when interaction requires them.
- Avoid inline styles whenever a Tailwind or CSS-variable solution is practical.
- Keep the visual language consistent with the live site:
  - light theme
  - `#f0f0f0` page background with white and off-white cards
  - black primary actions and black footer/pricing section
  - green Trustpilot/status accents
  - Source Serif 4 italic for emphasis and section personality
  - Inter / Inter Display typographic hierarchy from the Framer export
- Increment `siteConfig.version` in `lib/site.ts` on every content or code change so the footer always exposes the latest shipped version.
- End each completed change with `pnpm tsc --noEmit`, `pnpm build`, a clear conventional-style git commit, and `git push`.
- Do not commit `.env.local`
- Update this file as work is completed

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

## 13. Stack Analytics, SEO & LLM Optimization

- Site live: https://noprob.agency
- Hosting: Vercel (branch main → production)
- Framework: Next.js 15 App Router, route groups `(en)` + `it/`
- Current version: see `siteConfig.version` in `lib/site.ts` (source of truth; bump minor on every change)

### Analytics active

- Google Analytics 4 - ID: G-JD0T1HWWWV (env: `NEXT_PUBLIC_GA4_ID`)
- Meta Pixel - ID: 1174058738142037 (env: `NEXT_PUBLIC_META_PIXEL_ID`)
- Meta Conversions API server-side (endpoint: `/api/meta-capi`)
  - Token in env `META_CAPI_ACCESS_TOKEN` (server-only, never exposed)
  - Deduplication browser Pixel + CAPI via `event_id` UUID shared per event
  - Test event code env `META_CAPI_TEST_EVENT_CODE` active only in Preview environment

### Event tracking

Helper in `lib/analytics/events.ts`:
- `trackEvent(name, params)` - fires Pixel + GA4 + CAPI with same `event_id`
- `trackPageView(url)` - automatic on route change via `RouteChangeTracker`
- `trackContactClick(location)` - triggered on CTA clicks
- `trackPricingView()`, `trackCaseStudyView(slug)` - content-specific events
- `ClickTrackingDelegator` intercepts all `[data-tracking]` elements in DOM

### SEO infrastructure

- Sitemap: `/sitemap.xml` generated from `app/sitemap.ts` + `lib/sitemap/routes.ts`
  - Single source of truth: add page to `ROUTES` array → sitemap auto-updates
  - Includes hreflang `en`/`it`/`x-default` alternates inline
- Robots: `/robots.txt` (`app/robots.ts`) - explicit allow for GPTBot, ClaudeBot, PerplexityBot, Google-Extended
- Hreflang: EN root + `/it/` subfolder, `x-default` → EN
- GSC verification: meta tag via env `GSC_VERIFICATION_TOKEN`
- Canonical: self-referencing per page via `buildMetadata()`

### GEO / LLM Optimization

- `llms.txt`: structured document for LLM crawlers (ChatGPT, Claude, Perplexity) at `/llms.txt` (static public file)
- Schema.org Organization JSON-LD in `app/(en)/layout.tsx` body
- Schema.org Service JSON-LD on `/data-driven-team` and `/ecommerce-rebuild` with offers and pricing
- Entity consistency: founder "Antonio Manitta" + company "NoProb Agency LLC" mentioned cross-page

### GDPR / Consent

- Consent is handled in-house with `vanilla-cookieconsent` (`components/tracking/ConsentBanner.tsx`, IT + EN, opt-in). Iubenda is no longer used.
- `ConsentGate category="analytics|marketing"` mounts GA4 / Meta Pixel only after the matching category is accepted; `trackEvent` sends Meta CAPI only with marketing consent. Revoking a category clears its cookies and reloads the page.
- Privacy Policy and Cookie Policy are in-house pages (`/privacy-policy`, `/cookie-policy`, `/it/privacy-policy`, `/it/cookie-policy`) rendered by `components/sections/legal/LegalPage.tsx`; copy in `lib/i18n/legal.ts`. When a tool, form or cookie is added, update both locales there and bump `LEGAL_LAST_UPDATED`.

### Runbook - Adding a new indexable page

1. Create page under `app/(en)/[route]/page.tsx` AND `app/it/[route]/page.tsx`
2. Add entry in `lib/sitemap/routes.ts`
3. Add `seo.[pageKey]` (title + description EN/IT) in `lib/i18n/index.ts`
4. Sitemap auto-updates on next build
5. If service page, add Service JSON-LD schema in the page component

### Analytics files created

- `components/analytics/GoogleAnalytics.tsx`
- `components/analytics/MetaPixel.tsx`
- `components/analytics/ConsentGate.tsx`
- `components/analytics/AnalyticsProvider.tsx`
- `components/analytics/RouteChangeTracker.tsx`
- `components/analytics/ClickTrackingDelegator.tsx`
- `lib/analytics/events.ts`
- `app/api/meta-capi/route.ts`
- `app/sitemap.ts` (replaced - now uses `lib/sitemap/routes.ts`)
- `app/robots.ts` (updated - LLM crawlers explicitly allowed)
- `lib/sitemap/routes.ts`
- `public/llms.txt`

---

## 14. Blog Architecture & SEO

### Pattern blog post

Every new post under `/blog/[slug]` (or `/it/blog/[slugIt]`) must include:

- Cover image SVG + PNG `1200×630` in `public/images/blog/[slug]-cover.{svg,png}`
- Article entry in `data/articles/index.ts` with: `title`, `excerpt`, `slug`, `image`, `imageAlt`, `articleType`, `date`, `datePublishedIso`, `readingTimeMinutes`, `wordCount`, `articleSection`, `keywordsIt` / `keywordsEn`
- Localized fields when available: `titleIt`, `excerptIt`, `ledeIt`, `slugIt`, `contentIt`, `faqIt`
- BlogPosting JSON-LD via `<StructuredData />` (built from article fields in the page component)
- FAQPage JSON-LD when `faqIt` (or `faqEn`) is populated
- `<BlogPostMeta />` under the H1 (date + author + reading time)
- `<RelatedCTA />` and `<AuthorBio />` after the article body
- At least 2 internal links to service pages (`/it/team-ecommerce-dedicato`, `/it/rifacimento-ecommerce`, `/it/casi-studio`, `/it/contatti`)
- At least 2 outbound links to authoritative sources (McKinsey, Bain, HBR, Shopify, etc.)
- Sitemap is generated dynamically from the `articles` array in `app/sitemap.ts` - no manual entry required

### Internal link building priority (regola fissa per ogni articolo)

Every article (new or updated) **must** include these internal links, in priority order:

1. **Sprint** (massima priorità): almeno 1 link a `/it/sprint-migrazione-shopify` (IT) e `/shopify-migration-sprint` (EN) nel corpo o nella conclusione. La CTA Sprint deve apparire **prima** della CTA generica contatti.
2. **Servizio migrazione**: almeno 1 link a `/it/migrazione-shopify` (IT) / `/shopify-migration` (EN) — a meno che l'articolo non linki già lo Sprint, che rimanda alla stessa offerta.
3. **Casi studio o team page**: almeno 1 link a `/it/casi-studio/[slug]` o `/it/team-ecommerce-dedicato` per social proof.
4. **Altri servizi** (AI Accelerator, ecc.): solo se tematicamente rilevanti, mai a scapito del link Sprint.

**Conclusione pattern (copy da usare o adattare):**
- IT: *"Lo [Shopify Launch Sprint](/it/sprint-migrazione-shopify) ti dà una migrazione strutturata in 10 giorni, con timeline fissa, prezzo pubblico e 4 garanzie scritte."*
- EN: *"The [Shopify Launch Sprint](/shopify-migration-sprint) gives you a fixed-calendar migration with a public price and 4 written guarantees."*

Applica questa regola quando scrivi nuovi articoli E quando modifichi quelli esistenti (le conclusioni di tutti gli articoli correnti sono state aggiornate in v1.2.0).

### Inline content syntax

Paragraphs and list items support markdown-style inline tokens via `parseInline` in `components/article/renderSection.tsx`:

- `[testo](/path)` → internal `<Link>` (no rel/target)
- `[testo](https://...)` → external `<a target="_blank" rel="noopener noreferrer">`
- `**testo**` → `<strong>`

### Reusable blog components

- `components/blog/StructuredData.tsx` - emits one or more JSON-LD `<script>` tags
- `components/blog/BlogPostMeta.tsx` - author + date + reading time row under H1
- `components/blog/AuthorBio.tsx` - Antonio Manitta bio card (locale-aware)
- `components/blog/RelatedCTA.tsx` - contextual CTA (defaults to Data-Driven Team)

### Keyword strategy primaria (Italia)

- Topic primario: "strategia ecommerce" (150 vol/mo, KD 2)
- Topic secondari: "kpi ecommerce", "gestire un ecommerce", "ottimizzazione ecommerce"
- Keyword commerciali fondo funnel: "agenzia shopify" (150 vol KD 0), "consulente ecommerce" (150 vol KD 0)
- Keyword da NON targettizzare: "scalare ecommerce" (0 vol IT), "crescita ecommerce" (10 vol IT)

### Primo articolo pubblicato (riferimento)

- IT: `/it/blog/strategia-ecommerce-long-term`
- EN slug originale: `/blog/ecommerce-growth-secrets` (traduzione EN da rifare)
- Pubblicato: 2026-04-29
- Reading time: 9 min · Word count: ~2600
- Target keyword: "strategia ecommerce"

### Locale-specific slugs

- Article fields: `slug` (EN, required), `slugIt` (IT override, optional)
- IT routes match on `slugIt ?? slug`
- 301 redirect from any old IT slug lives in `next.config.ts > redirects()`

---

## Notes

- The Sanity CLI syntax has changed from the one in the brief, so a local Sanity scaffold was created manually with `sanity.config.ts`, `sanity.cli.ts`, and an empty schema entrypoint to keep the codebase ready without blocking the homepage sprint.
- Visual reference for this redesign was taken from the live `https://noprob.agency` homepage plus the Framer-extracted CSS/HTML values provided in the brief.
- The temporary zip-export mounting phase has been fully rolled back in favor of a local pure-component build, so future work should extend the React sections/routes directly rather than reintroducing static Framer exports.

---

## 15. Migration landing (IT `/it/migrazione-shopify` + EN `/shopify-migration`)

- Bilingual product page for the Shopify migration, rendered by `app/it/migrazione-shopify/page.tsx` and `app/(en)/shopify-migration/page.tsx` from `components/sections/Migrazione*`. Copy in `lib/i18n/migrazione.ts` (`getMigrazioneCopy`, typed `MigrazioneCopy`); meta in `seo.migrazioneShopify` of `lib/i18n/index.ts`.
- Aligned with the Shopify Launch Sprint (§18): 14-day sprint, go-live days 15-30 on the client's date, 90 days of support, monitoring and improvement, 4 written guarantees, same price tiers (€5.800 / €8.800 / €12.800, 4 installments).
- Section order: Hero, Problem, Solution, social proof, Process (Sprint / Go-live / Supporto e crescita + "Perché bastano 14 giorni?"), **`MigrazioneSprintBanner`** ("AI powered" dark card with flickering green sparks, links to the sprint landing), `MigrazioneSprintPricing` (landing tiers + the same 4-step `ZlApplicationForm`), `MigrazioneResults` (the two landing charts), FAQ.
- Leads from this page post to `/api/migrazione-lead` with the zero-loss source, so they land in the same inbox as the landing.

---

## 16. AI Accelerator landing (IT `/it/ai-accelerator` + EN `/ai-accelerator`)

- Bilingual landing built from dedicated `components/sections/ai/*` components, rendered by `app/it/ai-accelerator/page.tsx` and `app/(en)/ai-accelerator/page.tsx`. Copy lives in `lib/i18n/aiAccelerator.ts` (`getAiCopy(locale)`, typed `AiCopy`); only `seo.aiAccelerator` is added to the shared dictionary.
- "Power layer": electric accent `#2F6BFF` scoped via CSS vars (`--ai-accent`, `--ai-accent-glow`, `--ai-accent-text` AA-safe, `--ai-accent-on-dark`) on `.ai-scope` / nav item / header line / sticky bar (see the AI section at the bottom of `app/globals.css`). Decorations: hero neural circuits + side cables + section dividers (`PowerLayer.tsx`), scroll-charged timeline cable (`AiTimeline`), orbiting border on the pricing card (`.ai-tier-live`). Only transform/opacity/dashoffset animated; all frozen under `prefers-reduced-motion`.
- Navbar: since v1.1.0 "AI Accelerator" is the first item of the Services dropdown (`navbar.serviceItems`, also used by the footer); the first-level item and the NEW badge are gone. Electric header bottom line only on the AI pages. Home pages show `AiServiceCard` under the services/pricing grid.
- Multi-step application form `#candidatura` (`AiApplicationForm`, 3 steps, card-style radio options, progress bar, inline success state with TidyCal link `tidycal.com/noprobagency/ai-accelerator`). Schema `lib/schemas/aiAccelerator.ts`, endpoint `app/api/ai-accelerator-lead/route.ts` (Resend admin email `[AI Accelerator] Nuova candidatura`, honeypot + time-trap like migrazione). Lead fired inline via `trackEvent('Lead', {content_name: 'AI Accelerator'})` (Pixel+GA4+CAPI dedup) + custom step events `ai_form_step_1/2`.
- On the AI pages the global `StickyContact` pill is desktop-only; mobile uses the dedicated `AiStickyCta` bottom bar (portal to `<body>` because the page-transition transform breaks `position: fixed`).
- SEO: `ROUTE_PATHS.aiAccelerator` (`/ai-accelerator` both locales), sitemap entry, Service + BreadcrumbList JSON-LD in the pages, FAQPage via reused `MigrazioneFAQ` (accepts a `copy` prop). Dedicated OG images `public/images/og-ai-accelerator-{it,en}.png` (regenerate with `node scripts/generate-ai-og.mjs`).
- Reused components extended with optional backward-compatible props: `CaseStudy` (`heading`), `Testimonials` (`heading`), `MigrazioneFAQ` (`copy`, already existed).

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

## 17. Ambassador playbook (IT `/it/ambassador` + EN `/ambassador`)

- Private referral-partner document, shared by hand: `noIndex` via `buildMetadata`, NOT in `lib/sitemap/routes.ts`, not linked from nav/footer. `ROUTE_PATHS.ambassador` exists only for the language switch/hreflang.
- Single server component `components/sections/ambassador/AmbassadorPlaybook.tsx` (boxed sections, no CTAs, no form); copy in `lib/i18n/ambassador.ts` (`getAmbassadorCopy(locale)`).
- Money figures are derived from `AMBASSADOR_TERMS` (monthly price, months, 20% rate, tiers, payout days, referral validity, contact email/WhatsApp) via `ambassadorCommission()` / `formatEur()`. No minimum commission (removed in v2). When the migration price or tiers change in `lib/i18n/migrazione.ts`, update `AMBASSADOR_TERMS` too.
- Scope: Shopify migrations only (no Shopify-to-Shopify rebuilds, no startups). Recurring commissions (from the 5th client) intentionally not written yet.
- `StickyContact` is hidden on both ambassador paths.
- v2: hero has 3 stats; €5.800 is the minimum price and ambassadors who close themselves may sell higher (20% on the actual price); tier table removed; offer describes a UX review for conversion rate (not a full visual redesign, the public migration landing still says "design"); "ideal contact = already decided to migrate" card; "Chi c'è dietro" block with `public/images/shopify-partners.png`, Antonio bio (Computer Science degree, 7+ years, SaaS/apps) and the 7-person Shopify team; Cumini proof without numbers; materials moved right after the offer.
- Migration price moved to €1.450/month (tier "Clienti 11-20") in the landing copy, both JSON-LD Offers and `public/llms.txt`.

---

## 18. Shopify Launch Sprint landing (IT `/it/sprint-migrazione-shopify` + EN `/shopify-migration-sprint`)

- Productized-service landing (ex "Zero-Loss Migration Sprint"), Fletch PMM structure plus our sections. Full docs in `components/sections/zero-loss/README.md`.
- URLs renamed in v0.101.0; the old `/zero-loss-migration`, `/it/zero-loss-migration` (+ `/apply`, `/candidatura`) redirect permanently (`next.config.ts`). Internal names (folder `zero-loss`, copy files, lead `source`, tracking `lp`) intentionally keep `zero-loss-migration`.
- **Indexable**: `LP_ZERO_LOSS_INDEX=true` is set in Vercel production (index, follow + in the sitemap with hreflang). The application pages stay noindex and out of the sitemap.
- Linked from the global navbar ("Sprint" with a green lightning icon, last item after "Contatti") and from the migration page banner. "Ossessionati dai risultati" / "Obsessed with results" block (`ZlResultsFirst`) explains the 14 days. Own route groups `app/(zl-en)`, `app/(zl-it)` with `ZeroLossRootLayout` (own `ZlNav`, no global navbar).
- Copy in `content/zero-loss-migration.{it,en}.ts` (typed `ZlCopy`), constants in `content/zero-loss-migration.shared.ts`. Mobile is app-like (`ZlRail` swipe rails with dots, `ZlStickyCta` bottom bar).
- Application page (`ZeroLossApplyPage`): one screen on desktop (nav, wide card, `Footer bar`), 4-step `ZlApplicationForm` posting to `/api/migrazione-lead` with `source: "zero-loss-migration"` (stops: Shopify origin, revenue under €300k).
- SEO: "Migrazione a Shopify in 14 giorni | Shopify Launch Sprint" / "Shopify Migration in 14 Days | Shopify Launch Sprint", Service (+ alternateName) and FAQPage JSON-LD, OG `public/images/og-shopify-migration-sprint-{it,en}.png` (`node scripts/generate-zero-loss-og.mjs`).
- Events in `lib/zero-loss/tracking.ts` (`lp_view`, `cta_click` incl. `whynow` and `sticky`, `checklist_change`, `form_*`) + standard Lead on submit.

---

## 19. Launch status (v1.2.0, 13 Oct 2026)

- Live on `https://noprob.agency`, 36 URLs in `/sitemap.xml` (IT + EN), `robots.txt` and `llms.txt` served.
- Audit script (pre-launch): crawl of the sitemap checking status, title, description, canonical, hreflang, H1, OG image, JSON-LD and every internal link. Result: 0 issues.
- Case studies and blog posts have short Google titles/descriptions via optional `seoTitle`/`seoDescription` fields (`data/use-cases`, `data/articles`), the H1 keeps the long title.
- Verified data: every public number is in `docs/dati-verificati.md`.
- Open (owner): Madotto and Sfogliate metrics once their results are visible.

### Changelog v1.2.0 (13 Oct 2026)

- **Dashboard Demo Giorno 1**: `/it/demo-dashboard` + `/demo-dashboard` (EN), noindex, dati inventati stile Nazzi. Link da `ZlProof` e dalla schermata successo del form Sprint. `ZL_DEMO_DASHBOARD_URL` settato in `content/zero-loss-migration.shared.ts`.
- **Form Sprint → thank-you redirect**: dopo submit del form ZeroLoss/Sprint, `router.push` rimanda a `/it/grazie` (IT) o `/thank-you` (EN) che ha già TidyCal embed (`components/thank-you/TidyCalEmbed.tsx`).
- **Warning soft <300k**: il band `under300k` non blocca più il form; mostra un amber warning box ma lascia proseguire. La dichiarazione di ineleggibilità è rimossa dall'API handler; il tier stimato è Tier 1.
- **SEO internal linking**: aggiunti link allo Sprint nelle conclusioni di tutti gli articoli del blog (CRO IT/EN, Cos'è Shopify IT/EN, Strategia eCommerce IT/EN). Regola link building codificata in §14.
- **FAQ Dashboard**: aggiunta FAQ "Cos'è la dashboard che ricevo il Giorno 1?" in IT e EN (`content/zero-loss-migration.it.ts` / `.en.ts`).
