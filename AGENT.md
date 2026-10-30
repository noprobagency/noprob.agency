# AGENT.md

Rules for anyone (human or agent) working on `noprob.agency`. Architecture is in
[docs/ARCHITECTURE.md](docs/ARCHITECTURE.md), history in
[docs/CHANGELOG.md](docs/CHANGELOG.md), every public number with its source in
[docs/dati-verificati.md](docs/dati-verificati.md). Read those before touching
copy, routes or tracking. Cold email and LinkedIn outreach with Gojiberry (rules, MCP tools,
sequences, limits, compliance) are in [docs/COLD-OUTREACH.md](docs/COLD-OUTREACH.md): read it before
any outbound work. The direct cold email channel (email only from antonio@, its own
rules, engine and CRM) is in [cold-email/README.md](cold-email/README.md).
Backlinks and platform visibility (Marco, `/backlink`: directories, marketplaces such as
Fiverr, community, PR) are in [backlink/README.md](backlink/README.md), with the only texts to
use in [backlink/scheda.md](backlink/scheda.md).
SEO of the site (Francesca, `/seo`: on page, technical, content, keywords, site structure) is in
[SEO/README.md](SEO/README.md), with the roadmap in [SEO/piano.md](SEO/piano.md).
The team manager (Claudio, `/claudio`: cadences, alert thresholds, decisions, daily diary) is in
[manager/README.md](manager/README.md). Rule for every agent (Ada, Dante, Damiano, Marco, Francesca):
whenever something changes (a batch, a reply, a fix, a block, an order Antonio gave you directly),
append a short section `## HH:MM · <Agent>` with the numbers to `manager/data/diario/<today>.md`,
publish it (`git -C cold-email/data/crm add manager && git -C cold-email/data/crm -c user.name=noprobagency -c user.email=hello@noprob.agency commit -qm "<Agent>: diario" && git -C cold-email/data/crm pull -q --rebase origin main && git -C cold-email/data/crm push -q`)
and, if your session is open, tell Claudio with a SendMessage to "CLAUDIO manager". Aggregates only, never lead data.

## Project context

- Next.js 15 App Router, TypeScript, Tailwind CSS 3, React 19. Live on Vercel from `main` (pnpm).
- Status: live and indexable since 13 Oct 2026. Current version: `package.json#version` (shown in the footer through `siteConfig.version`).
- Two locales, EN at the root and IT under `/it`, with different slugs declared once in `lib/i18n/routes.ts`.
- Products and their public pages: Shopify Launch Sprint (`/shopify-migration-sprint`, `/it/sprint-migrazione-shopify`, plus the migration product page), Shopify Development, Data-Driven Team, AI Accelerator, the Ambassador playbook (footer, noindex).

## Working rules

1. **Verified data only.** Every public number (pages, blog, landings, `public/llms.txt`, emails) must be in `docs/dati-verificati.md` with its source; if it is not there, verify it or remove it. Client figures only as percentages, multipliers or ratios, never absolute revenue, orders or customers, and never absolute traffic volumes (clicks, impressions, sessions) or point average positions: charts are indexed (100 = baseline before go-live) and the data files shipped to the browser hold only the index. Prices are in the "Listino" section of the same file: change them there and in every place it lists.
2. **One offer, one description.** The Sprint is 14 days, go-live on days 15-30, 90 days of support, 4 written guarantees, public price by company revenue (`ZL_TIERS` in `content/zero-loss-migration.shared.ts`) in 4 installments. Every page that mentions it (migration page, home, blog conclusions, ambassador, `llms.txt`, emails) must say exactly that. Never "10 giorni", "4 mesi", "garanzia 30 giorni" for the Sprint.
3. **No em dashes** in any public copy (articles, Sprint copy, dictionaries, use cases, `llms.txt`): commas, parentheses or colons. `pnpm check:em-dash` enforces it.
4. **Copy lives in the copy modules**, never hardcoded in components. IT and EN must say the same thing. House style IT: no "business", "call" becomes "videochiamata" (except "pre-call"), "noi" voice.
5. **Server Components by default.** Client components only where interaction needs them. Do not derive locale or copy from `usePathname()` inside layouts (the server-side pathname differs on not-found renders): layouts pass `locale` down.
6. **Visual language**: light theme, `#f0f0f0` page background, white and off-white cards, black primary actions and black footer, green Trustpilot accents, Source Serif 4 italic for emphasis, Inter / Inter Display hierarchy. Tokens in `lib/design-tokens.ts`; no inline styles when a Tailwind or CSS-variable solution exists.
7. **Every image is a local asset** under `public/`; no remote image hosts.
8. **Legal pages** (`lib/i18n/legal.ts`): when a tool, form, email or cookie is added, update both locales and bump `LEGAL_LAST_UPDATED`.
9. **Never commit `.env.local`.** Secrets stay in Vercel.

## Ship workflow

- Branch from `main`, one PR per change, squash-merge to `main`; Vercel deploys production from `main`.
- Bump the minor in `package.json#version` on every change (content or code). Read the number from `origin/main` right before opening the PR, not when you start. Main requires the branch to be up to date: before merging run `gh pr update-branch <n>`, wait for the checks, then `gh pr merge --squash --delete-branch`. If the version check fails, bump again.
- Before opening the PR, all green: `pnpm lint`, `pnpm typecheck`, `pnpm check:em-dash`, `pnpm test`, `pnpm build`. GitHub Actions runs the same on every push and PR.
- Before deleting any file under `public/`, grep for its file name across `app`, `components`, `lib`, `content`, `data`, `scripts` and CSS, including inside remote URLs that end with the same hash. After any asset or `next.config.ts` image change, crawl the pages of `sitemap.xml` and check that every `src`, `srcset` and `/_next/image` URL answers 200 (a broken image does not fail lint, typecheck or build).
- Verify in the browser what the change touches (production build with `pnpm build && pnpm start`): status codes, console, mobile.
- Add an entry on top of `docs/CHANGELOG.md`; update `docs/ARCHITECTURE.md` when structure, routes, forms or tracking change; update `docs/dati-verificati.md` when a number changes.

## Runbooks

### New indexable page

1. Create `app/(en)/[route]/page.tsx` and `app/it/[route]/page.tsx` with `buildMetadata()`.
2. Add the pair to `ROUTE_PATHS` in `lib/i18n/routes.ts` and to `ROUTE_DEFS` in `lib/sitemap/routes.ts`; bump `CONTENT_LAST_MODIFIED` there.
3. Add `seo.[pageKey]` (title under 65 chars, description under 160) in `lib/i18n/index.ts`.
4. Service page: add Service (+ BreadcrumbList) JSON-LD in the page.

### New or updated blog post

- Follow the article pattern in `docs/ARCHITECTURE.md` (cover image, `data/articles` entry with dates, `dateModifiedIso` on every update, JSON-LD, meta, related CTA, author bio).
- Internal links, in priority order: the Sprint landing first, then the migration page, then a case study or the team page; the Sprint CTA comes before the generic contact CTA. Closing pattern, IT: *"Lo [Shopify Launch Sprint](/it/sprint-migrazione-shopify) porta il tuo store su Shopify in 14 giorni con il nostro Custom AI System: calendario fisso, prezzo pubblico e 4 garanzie scritte."* EN: *"The [Shopify Launch Sprint](/shopify-migration-sprint) moves your store to Shopify in 14 days with our Custom AI System: a fixed calendar, a public price and 4 written guarantees."*
- Add one row in `data/articles/clusters.ts` (cluster and pill) for the new article, so it appears in its blog section and in the "Read next" block.
- At least 2 outbound links to authoritative sources. No numbers about clients that are not in `docs/dati-verificati.md`.

### Price or offer change

Update, in this order: `ZL_TIERS` (Sprint) or the product copy module, `docs/dati-verificati.md` "Listino", `public/llms.txt`, JSON-LD offers in the pages, the ambassador playbook (derives from `ZL_TIERS` automatically), the blog closing pattern above, `components/dashboard/DemoDashboard.tsx` if it names the offer.

### New form, tool or email

Schema in `lib/schemas`, honeypot + time trap, HTML-escape every user value in admin emails, Resend sender from the existing constants, redirect to a thank-you page, legal pages updated (rule 8), tracking event listed in `docs/ARCHITECTURE.md`.

## Checks that must stay green

```bash
pnpm lint && pnpm typecheck && pnpm check:em-dash && pnpm test && pnpm build
```
