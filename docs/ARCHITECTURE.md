# Architecture

How noprob.agency is built. Rules and runbooks are in [AGENT.md](../AGENT.md),
history in [CHANGELOG.md](CHANGELOG.md), verified figures in
[dati-verificati.md](dati-verificati.md).

## Stack and layout

- Next.js 15 App Router, TypeScript, Tailwind CSS 3, React 19. Hosted on Vercel, production deploys from `main`, built with pnpm (`pnpm-lock.yaml`).
- Two locales with different slugs: EN at the root (`app/(en)`), IT under `/it` (`app/it`). Every public page exists in both.
- Several **root layouts** (route groups), each with its own `<html>`: `app/(en)/layout.tsx` and `app/it/layout.tsx` (global navbar, consent banner, sticky contact pill, analytics), `app/(zl-en)` and `app/(zl-it)` (Shopify Launch Sprint landing and its application and thank-you pages, own `ZlNav`), `app/(funnel)` (paid-traffic application funnel `/af-1-1`). Because there is no `app/layout.tsx`, the 404 for unmatched URLs is `app/global-not-found.tsx` (`experimental.globalNotFound`), and there are no route templates (a root template would nest `<html>` inside a `<div>`, and an opacity fade kept every page invisible until hydration).
- Routes and their IT/EN pairs are declared once in `lib/i18n/routes.ts` (`ROUTE_PATHS`, `getAlternateLocalePath`). The sitemap (`app/sitemap.ts` + `lib/sitemap/routes.ts`), the language switch and hreflang all read from it.
- Copy never sits in components. Modules: `lib/i18n/index.ts` (home, about, contacts, footer, SEO titles, 404), `lib/i18n/{dataTeam,teamRoadmap,sviluppo,migrazione,aiAccelerator,ambassador,legal,blocchi}.ts`, `content/zero-loss-migration.{it,en,shared}.ts` (Sprint landing), `data/articles` (blog), `data/use-cases` (case studies). Each exports a typed getter per locale.
- Design tokens in `lib/design-tokens.ts` and `tailwind.config.ts`; global utilities (buttons, cards, reduced-motion rules) in `app/globals.css`. Fonts are local `@font-face` files in `public/fonts`.
- `lib/site.ts`: `siteConfig` (name, URL, analytics IDs, version from `package.json`), `buildMetadata()` (title, description, canonical, hreflang, OG image, robots; optional `article` for `og:type=article` with dates and author, optional `feedPath` for the RSS `<link rel="alternate">`) and the Organization JSON-LD used by every root layout. Entity constants live here too: `ORGANIZATION_ID`, `FOUNDER_ID` (`@id` of the company and of Antonio, referenced by the blog `author` and `publisher`), `AREA_SERVED` (US, UK, Australia, worldwide), `ORGANIZATION_SAME_AS`, `FOUNDER_SAME_AS` (empty until Antonio's LinkedIn URL is confirmed), `TRUSTPILOT_URL`.

## Forms and API routes

| Form | Component | Endpoint | Notes |
| --- | --- | --- | --- |
| Contact | `components/sections/ContactSection.tsx` | `app/api/contact/route.ts` | admin email + welcome email, redirect to `/thank-you` or `/it/grazie` (TidyCal `noprobagency/contacts`) |
| Migration / Sviluppo / Data Team | `MigrazioneForm` inside `MigrazionePricing` | `app/api/migrazione-lead/route.ts` (classic branch) | `source` selects subject and heading |
| Shopify Launch Sprint | `components/sections/zero-loss/ZlApplicationForm.tsx` (also on the migration page) | `app/api/migrazione-lead/route.ts` (`source: "zero-loss-migration"`) | tier recomputed server-side (`lib/zero-loss/tier.ts`), per-IP rate limit, admin email + confirmation email (`lib/emails/sprint.ts`), redirect to the Sprint thank-you page |
| AI Accelerator | `components/sections/ai/AiApplicationForm.tsx` | `app/api/ai-accelerator-lead/route.ts` | redirect to `/ai-accelerator/thank-you` or `/it/ai-accelerator/grazie` (TidyCal `noprobagency/ai-call`) |
| Funnel `/af-1-1` | `components/funnel/ApplicationFunnel.tsx` | `app/api/funnel-lead/route.ts` | IT only, noindex |

Every endpoint: zod schema in `lib/schemas`, honeypot + time trap (bots get a 200 and nothing is sent), Resend for email, user input HTML-escaped in admin emails. `app/api/meta-capi/route.ts` relays browser events to the Meta Conversions API: same-origin only, fixed event allowlist, per-IP rate limit.

## Analytics, SEO and LLM optimization

- Site live: https://noprob.agency
- Hosting: Vercel (branch main → production)
- Framework: Next.js 15 App Router, route groups `(en)` + `it/`
- Current version: `package.json#version`, exposed by `siteConfig.version` in the footer (bump minor on every change)

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
  - Only `loc`, `lastmod` and alternates: no `priority` or `changefreq` (Google ignores them). `lastmod` is real: fixed pages share `CONTENT_LAST_MODIFIED` (bump it when their copy changes), the blog hub follows its newest article, the 10 blog category pages are added in `app/sitemap.ts` (hreflang pairs, lastmod = the later of `CONTENT_LAST_MODIFIED` and the newest article of the category), articles and cases use their own dates
- Robots: `/robots.txt` (`app/robots.ts`) - explicit allow for the AI crawlers (GPTBot, ChatGPT-User, OAI-SearchBot, ClaudeBot, Claude-SearchBot, Claude-User, anthropic-ai, PerplexityBot, Perplexity-User, Google-Extended, Applebot-Extended), each repeating the `Disallow` of the `*` group
- RSS: `/blog/rss.xml` and `/it/blog/rss.xml` (`lib/seo/rss.ts`, route handlers `app/(en)/blog/rss.xml/route.ts`, `app/it/blog/rss.xml/route.ts`), all articles newest first, advertised with `<link rel="alternate" type="application/rss+xml">` on the blog index
- IndexNow: key file `public/<key>.txt`, `pnpm indexnow` (`scripts/indexnow.mjs`) sends every URL of the live sitemap to `api.indexnow.org` (`--dry-run` prints them, `--file` reads a local sitemap). Run it by hand after each production deploy
- Hreflang: EN root + `/it/` subfolder, `x-default` → EN
- GSC verification: meta tag via env `GSC_VERIFICATION_TOKEN`
- Canonical: self-referencing per page via `buildMetadata()`

### GEO / LLM Optimization

- `llms.txt`: structured document for LLM crawlers (ChatGPT, Claude, Perplexity) at `/llms.txt` (static public file)
- Schema.org Organization JSON-LD in `app/(en)/layout.tsx` body, with `@id` and the founder Person (`@id` `FOUNDER_ID`) inside; blog posts point their `author` and `publisher` to the same `@id`s; the About pages emit the Person and a BreadcrumbList; Sprint, Contacts, blog index, blog category pages and case study index emit a BreadcrumbList (the blog index a `Blog` plus a CollectionPage with its ItemList, each category page a CollectionPage with its ItemList; an article's breadcrumb is Home > Learn > category > article)
- Schema.org Service JSON-LD on `/data-driven-team`, `/shopify-development` and `/ai-accelerator` with offers and pricing
- Entity consistency: founder "Antonio Manitta" + company "NoProb Agency LLC" mentioned cross-page

### GDPR / Consent

- Consent is handled in-house with `vanilla-cookieconsent` (`components/tracking/ConsentBanner.tsx`, IT + EN, opt-in). Iubenda is no longer used.
- `ConsentGate category="analytics|marketing"` mounts GA4 / Meta Pixel only after the matching category is accepted; `trackEvent` sends Meta CAPI only with marketing consent. Revoking a category clears its cookies and reloads the page.
- Privacy Policy and Cookie Policy are in-house pages (`/privacy-policy`, `/cookie-policy`, `/it/privacy-policy`, `/it/cookie-policy`) rendered by `components/sections/legal/LegalPage.tsx`; copy in `lib/i18n/legal.ts`. When a tool, form or cookie is added, update both locales there and bump `LEGAL_LAST_UPDATED`.

## SEO blocks added by the review of 28 Oct 2026

All copy of these blocks is in `lib/i18n/blocchi.ts` (`getBlocchiCopy(locale)`, IT and EN aligned, hrefs expressed as a `route` key or an article slug and resolved by the component).

- **Home "Guides for migrating to Shopify"** (`components/sections/HomeGuides.tsx`), after the pricing section: 6 `ArticleCard`s (anchor = `seoTitle` of the article) and "All guides →" to the blog. The 6 slugs are in `homeGuides.slugs`.
- **Footer** (`components/layout/Footer.tsx`): real link columns Services (Sprint, Development, Data-Driven Team, AI Accelerator), Guides (migration guide, cost, SEO checklist, GEO), Learn / Risorse (the 5 blog categories and "All articles", from `navbar.learn`) and Company (the dictionary `footer.links`), no dropdown; the brand headline is a `<p>`, not an H2; the Ambassador link is `rel="nofollow"`. The `minimal` footer (Sprint landing) is unchanged.
- **Navbar** (`components/layout/Navbar.tsx`): the Services and Learn dropdowns (`NavDropdown`, desktop and mobile accordion) are always in the DOM and hidden with the `hidden` attribute, so the links are in the HTML crawlers read; they open on hover, click or Enter/Space and close on Escape or when focus leaves. "Learn" (EN) / "Risorse" (IT) replaced the "Blog" link: its items are the 5 blog categories and "All articles" (`/blog`, `/it/blog`, unchanged URLs), from `navbar.learn` in `lib/i18n/index.ts` (labels and URLs come from `data/articles/categories.ts`). Order: Services, `navLinks` (About, Use Cases), Learn, `navLinksEnd` (Contacts), Sprint. The first-level "Sprint" item reads `navSprint` ("Sprint migrazione" / "Migration Sprint"). The breadcrumb name of the blog section is `navbar.learn.label` (`routeCrumb('blog')`).
- **Founder blocks** (`components/sections/FounderBlock.tsx`, `variant="sprint"` before the FAQ of the Sprint landing, `variant="about"` on About in place of the duplicated Pricing and FAQ): photo (`siteAssets.heroAntonio`), bio and `components/ui/TrustpilotBadge.tsx` ("10 five-star reviews on Trustpilot", link to `TRUSTPILOT_URL`). The Sprint hero badge links to Trustpilot too.
- **Case study index**: intro paragraph, brand name as H2 on each card (`UseCaseCard` `brand` prop, copy `useCases.brands`) and closing block towards the Sprint (`components/sections/UseCasesIndexBlocks.tsx`).
- **Blog index** (`components/blog/BlogIndex.tsx`, used by both locale pages, title "Shopify, AI and eCommerce Guides" / "Guide su Shopify, AI ed eCommerce"): H1, 2-sentence intro, migration guide card, one H2 section per category (newest article first, up to 6 cards, "See all" link to the category page), closing Sprint band (`RelatedCTA variant="sprint"`), BreadcrumbList + `Blog` + CollectionPage JSON-LD.
- **Blog categories** (5: `migrate`, `shopify`, `ai-agents`, `ai-search`, `growth`): id, label and URL slug per locale in `data/articles/categories.ts` (a light module with no article data, read by the navbar, footer, route map and breadcrumbs); article membership in `data/articles/clusters.ts` (`CLUSTERS`, `getClusterArticles` sorts newest first by `datePublishedIso`). Pages `/blog/category/[category]` (`app/(en)/blog/category/[category]/page.tsx`) and `/it/blog/categoria/[category]` (`app/it/blog/categoria/[category]/page.tsx`), both `generateStaticParams` + `dynamicParams = false`, rendered by `components/blog/CategoryPage.tsx` (server component: breadcrumb, H1, 2-3 sentence intro, grid of `ArticleCard`s, links to the other categories, Sprint band; works with 2 or 15 articles). Copy (meta title and description, H1, intro) in `lib/i18n/categorie.ts` (`getCategoriesCopy`), lengths enforced by `lib/seo/seo-lengths.test.ts`. `getAlternateLocalePath` maps the two slugs for hreflang and the language switch; they are in `public/llms.txt`.
- **Clusters** (`data/articles/clusters.ts`): `CLUSTERS` (= the 5 categories) map every article slug to a cluster, `ARTICLE_PILLS` gives each article a short topic label for the card pill (the technical `articleType` is never shown), `getRelatedArticles(slug, 3)` picks 3 articles of the same cluster, cyclically after the current one so inbound links spread evenly. `ReadNext` (`components/blog/ReadNext.tsx`, "Leggi anche" / "Read next") renders them plus a line to the migration guide, after the author bio. The article template also shows a visible breadcrumb (`Breadcrumb.tsx`, Home > Learn > category > article) and `og:type=article`. **A new article must be added to `CLUSTERS` (its category) and `ARTICLE_PILLS`**: `lib/seo/clusters.test.ts` fails otherwise.
- **Animated headings**: `RevealWords` in `CTA.tsx` puts a real space after every word span, so the HTML text reads "Ready to fix", not "Readytofix".

---

## Blog architecture and SEO

### Pattern blog post

Every new post under `/blog/[slug]` (or `/it/blog/[slugIt]`) must include:

- Cover image SVG + PNG `1200×630` in `public/images/blog/[slug]-cover.{svg,png}`, generated with `pnpm cover <slug>` (`scripts/blog-cover.mjs`: background colour plus dot pattern, no text, deterministic from the slug; `pnpm cover --all` regenerates every article; the script prints a suggested `imageAlt` / `imageAltEn`)
- Article in its own file `data/articles/posts/[slug].ts` (`import type { Article } from '../index'`, `export default article`) plus one import and one entry in the `articles` array in `data/articles/index.ts` (types and the array live there, one article per file, no circular value imports). The entry has: `title`, `excerpt`, `slug`, `image`, `imageAlt`, `articleType`, `date`, `datePublishedIso`, `readingTimeMinutes`, `wordCount`, `articleSection`, `keywordsIt` / `keywordsEn`
- Localized fields when available: `titleIt`, `excerptIt`, `ledeIt`, `slugIt`, `contentIt`, `faqIt`
- BlogPosting JSON-LD via `<StructuredData />` (built from article fields in the page component)
- FAQPage JSON-LD when `faqIt` (or `faqEn`) is populated
- `<BlogPostMeta />` under the H1 (date + author + reading time)
- `<RelatedCTA />` and `<AuthorBio />` after the article body
- Internal links as in the AGENT.md runbook (Sprint first, then migration page, then a case study or the team page)
- At least 2 outbound links to authoritative sources (McKinsey, Bain, HBR, Shopify, etc.)
- One line in `data/articles/clusters.ts` (`CLUSTERS`, i.e. its category) and one in `ARTICLE_PILLS`: category for the blog index sections, the category pages and "Read next", pill label for the cards
- Sitemap and RSS feeds are generated dynamically from the `articles` array in `app/sitemap.ts` and `lib/seo/rss.ts` - no manual entry required

### Internal link building priority (regola fissa per ogni articolo)

Every article (new or updated) **must** include these internal links, in priority order:

1. **Sprint** (massima priorità): almeno 1 link a `/it/sprint-migrazione-shopify` (IT) e `/shopify-migration-sprint` (EN) nel corpo o nella conclusione. La CTA Sprint deve apparire **prima** della CTA generica contatti.
2. **Guida alla migrazione**: almeno 1 link a `/it/migrazione-shopify` (IT) / `/shopify-migration` (EN), la guida completa alla migrazione a Shopify, a meno che l'articolo non linki già lo Sprint.
3. **Casi studio o team page**: almeno 1 link a `/it/casi-studio/[slug]` o `/it/team-ecommerce-dedicato` per social proof.
4. **Altri servizi** (AI Accelerator, ecc.): solo se tematicamente rilevanti, mai a scapito del link Sprint.

**Conclusione pattern (copy da usare o adattare):**
- IT: *"Lo [Shopify Launch Sprint](/it/sprint-migrazione-shopify) porta il tuo store su Shopify in 14 giorni con il nostro Custom AI System: calendario fisso, prezzo pubblico e 4 garanzie scritte."*
- EN: *"The [Shopify Launch Sprint](/shopify-migration-sprint) moves your store to Shopify in 14 days with our Custom AI System: a fixed calendar, a public price and 4 written guarantees."*
- Durations and prices in articles must match the Sprint copy (14 days, €5.800 / €8.800 / €12.800, 90 days of support). Never "10 giorni". No em dashes anywhere in the public copy: `pnpm check:em-dash` scans articles, Sprint copy, i18n dictionaries, use cases and `llms.txt`.

Applica questa regola quando scrivi nuovi articoli E quando modifichi quelli esistenti (le conclusioni di tutti gli articoli correnti sono state aggiornate in v1.2.0).

### Inline content syntax

Paragraphs and list items support markdown-style inline tokens via `parseInline` in `components/article/renderSection.tsx`:

- `[testo](/path)` → internal `<Link>` (no rel/target)
- `[testo](https://...)` → external `<a target="_blank" rel="noopener noreferrer">`
- `**testo**` → `<strong>`

Section types of an article (`ArticleSection` in `data/articles/index.ts`, rendered by `renderSection`): `paragraph`, `h2`, `h3`, `list`, `image`, `metrics`, `cta` and `table` (`{ type: 'table', caption?, headers: string[], rows: string[][] }`). `table` renders a semantic `<table>` (`components/article/ArticleTable.tsx`, Server Component): optional `<caption>`, `<th scope="col">` headers, the first cell of each row is a `<th scope="row">`, cells accept the same inline tokens as paragraphs, the wrapper scrolls horizontally on mobile and is keyboard-focusable. Every row must have as many cells as `headers` and IT/EN must have the same tables (`lib/seo/article-tables.test.ts`). Use it for comparisons and matrices; an empty cell is written `-`.

### Reusable blog components

- `components/blog/StructuredData.tsx` - emits one or more JSON-LD `<script>` tags
- `components/blog/BlogPostMeta.tsx` - author + date + reading time row under H1
- `components/blog/AuthorBio.tsx` - Antonio Manitta bio card (locale-aware)
- `components/blog/RelatedCTA.tsx` - contextual CTA (defaults to Data-Driven Team)
- `components/blog/ReadNext.tsx` - "Read next" (3 articles of the cluster + the migration guide); `components/blog/ArticleCard.tsx` - card shared by the blog index and the home guides; `components/blog/Breadcrumb.tsx` - visible breadcrumb

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

## Migration page (IT `/it/migrazione-shopify` + EN `/shopify-migration`)

- This page is the **complete guide to migrating to Shopify** (informational intent), not a sales page: no prices and no application form. The offer lives on the Sprint landing (`/it/sprint-migrazione-shopify`, `/shopify-migration-sprint`, §18). Rendered by `app/it/migrazione-shopify/page.tsx` and `app/(en)/shopify-migration/page.tsx` (identical structure, `locale` constant on top).
- Section order: `MigrazioneHero` (the only H1; its CTA goes to the Sprint landing through `ROUTE_PATHS.zeroLossMigration`), **`MigrazioneGuide`** (server component, renders the guide with `renderSection` from `components/article/renderSection.tsx` in the same container and typography as a blog article; the H2/H3 come from the copy), `MigrazioneSocialProof` (same case study block as the home), `MigrazioneResults` (the two landing charts), `MigrazioneSprintBanner` ("AI powered" dark card, links to the Sprint landing), `MigrazioneFAQ`, footer.
- Guide sections (H2): platforms people migrate from, what gets migrated, SEO and 301 redirects, tracking and data, timeline, risks, cost, checklist, two real migrations (WooCommerce and a proprietary platform). Cost and Sprint figures must match the Sprint copy and `docs/dati-verificati.md`.
- Copy in `lib/i18n/migrazione.ts` (`getMigrazioneCopy`, typed `MigrazioneCopy`: `hero`, `guide.sections` (`ArticleSection[]`, same inline syntax as blog articles), `charts`, `sprintBanner`, `faq`). Meta in `seo.migrazioneShopify` of `lib/i18n/index.ts` (title and description stay inside the lengths enforced by `lib/seo/seo-lengths.test.ts`). The `MigrazioneProcessCopy`, `MigrazionePricingCopy` and `MigrazioneFormCopy` types are still exported from the same module because the Sviluppo, Data-Driven Team and team roadmap copy reuse `MigrazioneProcess`, `MigrazionePricing` and `MigrazioneForm` (their `copy` prop is required).
- JSON-LD: `Article` (`lib/seo/migrationGuide.ts`: headline and description from `seo.migrazioneShopify`, `inLanguage`, author Person "Antonio Manitta" with the about page URL, publisher Organization like the blog, `datePublished` and `dateModified`, `mainEntityOfPage`), `BreadcrumbList` (`pageBreadcrumbJsonLd`) and `FAQPage` (emitted by `MigrazioneFAQ` from `faq.items`). No `Service` and no offers: prices live only on the Sprint landing. Update `dateModified` in `lib/seo/migrationGuide.ts` and `CONTENT_LAST_MODIFIED` in `lib/sitemap/routes.ts` whenever the guide changes.
- No in-page form: `StickyContact` has no entry for these routes and falls back to the generic "request information" CTA. Every conversion CTA (hero, banner) points to the Sprint landing.

---

## AI Accelerator landing (IT `/it/ai-accelerator` + EN `/ai-accelerator`)

- Bilingual landing built from dedicated `components/sections/ai/*` components, rendered by `app/it/ai-accelerator/page.tsx` and `app/(en)/ai-accelerator/page.tsx`. Copy lives in `lib/i18n/aiAccelerator.ts` (`getAiCopy(locale)`, typed `AiCopy`); only `seo.aiAccelerator` is added to the shared dictionary.
- "Power layer": electric accent `#2F6BFF` scoped via CSS vars (`--ai-accent`, `--ai-accent-glow`, `--ai-accent-text` AA-safe, `--ai-accent-on-dark`) on `.ai-scope` / nav item / header line / sticky bar (see the AI section at the bottom of `app/globals.css`). Decorations: hero neural circuits + side cables + section dividers (`PowerLayer.tsx`), scroll-charged timeline cable (`AiTimeline`), orbiting border on the pricing card (`.ai-tier-live`). Only transform/opacity/dashoffset animated; all frozen under `prefers-reduced-motion`.
- Navbar: since v1.1.0 "AI Accelerator" is the first item of the Services dropdown (`navbar.serviceItems`, also used by the footer); the first-level item and the NEW badge are gone. Electric header bottom line only on the AI pages. Home pages show `AiServiceCard` under the services/pricing grid.
- Multi-step application form `#candidatura` (`AiApplicationForm`, 3 steps, card-style radio options, progress bar, inline success state with TidyCal link `tidycal.com/noprobagency/ai-accelerator`). Schema `lib/schemas/aiAccelerator.ts`, endpoint `app/api/ai-accelerator-lead/route.ts` (Resend admin email `[AI Accelerator] Nuova candidatura`, honeypot + time-trap like migrazione). Lead fired inline via `trackEvent('Lead', {content_name: 'AI Accelerator'})` (Pixel+GA4+CAPI dedup) + custom step events `ai_form_step_1/2`.
- On the AI pages the global `StickyContact` pill is desktop-only; mobile uses the dedicated `AiStickyCta` bottom bar (portal to `<body>` because the page-transition transform breaks `position: fixed`).
- SEO: `ROUTE_PATHS.aiAccelerator` (`/ai-accelerator` both locales), sitemap entry, Service + BreadcrumbList JSON-LD in the pages, FAQPage via reused `MigrazioneFAQ` (accepts a `copy` prop). Dedicated OG images `public/images/og-ai-accelerator-{it,en}.png` (regenerate with `node scripts/generate-ai-og.mjs`).
- Reused components extended with optional backward-compatible props: `CaseStudy` (`heading`), `Testimonials` (`heading`), `MigrazioneFAQ` (`copy`, already existed).

## Ambassador playbook (IT `/it/ambassador` + EN `/ambassador`)

- Referral-partner document, **linked from the global footer** since v1.3.0 ("Ambassador", both locales) but still `noIndex` via `buildMetadata` and NOT in `lib/sitemap/routes.ts`. `ROUTE_PATHS.ambassador` serves the footer link, the language switch and hreflang.
- Single server component `components/sections/ambassador/AmbassadorPlaybook.tsx` (boxed sections, no CTAs, no form); copy in `lib/i18n/ambassador.ts` (`getAmbassadorCopy(locale)`).
- **The offer it describes is the Shopify Launch Sprint (§18)**, nothing else: 14-day sprint, go-live days 15-30, 90 days of support, 4 written guarantees, public price by company revenue in 4 installments. Prices come from `ZL_TIERS` (`AMBASSADOR_TIERS`) and the commission is `ambassadorCommission(price)` = 20% of the tier price (€1.160 / €1.760 / €2.560). No monthly price, no "4 mesi", no 30-day guarantee, no price negotiation: if the Sprint tiers change, the playbook follows automatically.
- Scope: migrations from other platforms only (no Shopify-to-Shopify restyling, no startups). Materials: both Sprint landings, the Nazzi and Cumini case studies and the external Trustpilot profile.
- `StickyContact` is hidden on both ambassador paths.

## Shopify Launch Sprint landing (IT `/it/sprint-migrazione-shopify` + EN `/shopify-migration-sprint`)

- Productized-service landing (ex "Zero-Loss Migration Sprint"), Fletch PMM structure plus our sections. Full docs in `components/sections/zero-loss/README.md`.
- **The offer (source of truth for pages, articles, emails, llms.txt and outreach; updated v1.12.0)**:
  - *Promise*: your eCommerce on Shopify in 14 days. More Google, more sales, more AI. Hero H1: "Il tuo eCommerce su Shopify in 14 giorni. Più posizioni su Google, più vendite, più AI." ("AI" in electric blue, `.np-ai-electric`).
  - *Mechanism, the "secret"*: the **Custom AI System**, our method. The store is rebuilt from scratch, made to measure, with AI in every step: not a simple redesign, not a plain migration. It has six superpowers (blue section `ZlAiSystem`, "Non un semplice redesign. Il tuo store, con i superpoteri dell'AI."): ultra fast, ready for AI agents (ChatGPT, Copilot, Google AI Mode), automatic GEO, development with AI agents (changes live the same day), purchase flow under the X-ray, data mapped in detail (100% reconciliation, server-side tracking, dashboard from day 1). All six confirmed by Antonio, qualitative: no speed number until there is a before/after measure (see `docs/dati-verificati.md`).
  - *Pain it answers* (checklist, one item per superpower): slow changes, fear of losing Google and customers, a site that could be faster, visitors who do not buy, platform numbers that do not match real sales, wanting to be found on ChatGPT and AI.
  - *What you get*: 5 deliverables on day 14 (store ready to publish, built with the Custom AI System, Data Migration Report, 1:1 Redirect Map, Tracking Spec + server-side setup, Go-live Checklist), go-live days 15-30 on your date with zero downtime, 90 days of support, monitoring and improvement, results dashboard from day 1. About 8 hours of the client's time.
  - *Price*: public, by company revenue, 4 installments, VAT excluded: €5.800 (under €2M), €8.800 (€2M-20M), €12.800 (over €20M). Shopify plan and apps are on the client. No discounts, no quotes; fixed-price add-ons above tier caps.
  - *Risk reversal*: 4 written guarantees measured by the dashboard (store ready on day 14 or first installment refunded; organic traffic below baseline at 90 days, we work free until it is back; offline at launch through our fault, we pay one installment; checkout converting less at 90 days, we optimize free until it beats it).
  - *Proof*: case study note "Caso studio: +105% di vendite in 85 giorni" (Nazzi), Cumini +67,7% in 12 months, Nazzi Google position +21% and clicks 2,7x, 0 minutes offline in over 10 migrations.
  - *Wording rules*: say "Custom AI System" (brand name, never translated; it was "Custom AI theme" until v1.11.0, never use the old name), never "tema"/"theme" on its own, never "tema pronto/premium". "Non un semplice redesign": structure and content stay, speed and purchase flow change. Do not promise results, only the guarantees.
- URLs renamed in v0.101.0; the old `/zero-loss-migration`, `/it/zero-loss-migration` (+ `/apply`, `/candidatura`) redirect permanently (`next.config.ts`). Internal names (folder `zero-loss`, copy files, lead `source`, tracking `lp`) intentionally keep `zero-loss-migration`.
- **Indexable**: hardcoded since v1.5.0 (`ZL_INDEXABLE = true`, in `lib/sitemap/routes.ts`); the old `LP_ZERO_LOSS_INDEX` env var is no longer read. The application and thank-you pages stay noindex and out of the sitemap.
- Section order: hero (H1 with "più AI", proof note top right on desktop), offer card + pricing + result cards with stars, checklist (green / orange / red reactions), Custom AI System section (`ZlAiSystem`), deliverables, results first, calendar, guarantees, why now, proof, scope, founder block (`FounderBlock`, "Chi segue il tuo Sprint"), FAQ, application.
- Linked from the global navbar ("Sprint migrazione" / "Migration Sprint" with a green lightning icon, last item after "Contatti") and from the migration page banner. "Ossessionati dai risultati" / "Obsessed with results" block (`ZlResultsFirst`) explains the 14 days. Own route groups `app/(zl-en)`, `app/(zl-it)` with `ZeroLossRootLayout` (own `ZlNav`, no global navbar).
- Copy in `content/zero-loss-migration.{it,en}.ts` (typed `ZlCopy`), constants in `content/zero-loss-migration.shared.ts`. Mobile is app-like (`ZlRail` swipe rails with dots, `ZlStickyCta` bottom bar).
- Application page (`ZeroLossApplyPage`): one screen on desktop (nav, wide card, `Footer bar`), 4-step `ZlApplicationForm` posting to `/api/migrazione-lead` with `source: "zero-loss-migration"` (stop: Shopify origin; under €300k is a soft warning). On success the form redirects to the Sprint confirmation page `ROUTE_PATHS.zeroLossThankYou` (`/it/sprint-migrazione-shopify/grazie`, `/shopify-migration-sprint/thank-you`, `ZeroLossThankYouPage`, noindex): 48-hour promise, demo dashboard, WhatsApp, TidyCal `noprobagency/contacts`. The API also sends the lead a confirmation email (`lib/emails/sprint.ts`) with the estimated tier, the 48-hour promise and the dashboard link. Copy in `ZlCopy.thankYou`.
- SEO: "Migrazione a Shopify in 14 giorni | Shopify Launch Sprint" / "Shopify Migration in 14 Days | Shopify Launch Sprint", Service (+ alternateName) and FAQPage JSON-LD, OG `public/images/og-shopify-migration-sprint-{it,en}.png` (`node scripts/generate-zero-loss-og.mjs`).
- Events in `lib/zero-loss/tracking.ts` (`lp_view`, `cta_click` incl. `whynow` and `sticky`, `checklist_change`, `form_*`) + standard Lead on submit.

---

