# Changelog and project history

Newest first. Rules live in [AGENT.md](../AGENT.md), the current architecture in
[ARCHITECTURE.md](ARCHITECTURE.md). Every entry here is history: do not update
old entries, add a new one on top.

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
