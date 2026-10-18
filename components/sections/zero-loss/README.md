# Shopify Launch Sprint landing (ex Zero-Loss Migration Sprint)

Product renamed in v0.68.0, URLs renamed in v0.101.0. Internal names (this folder,
copy files, lead `source`, tracking `lp`) stay `zero-loss-migration` on purpose.

Standalone landing that sells one productized service. Routes:

- EN: `/shopify-migration-sprint` (`app/(zl-en)/shopify-migration-sprint/page.tsx`)
- IT: `/it/sprint-migrazione-shopify` (`app/(zl-it)/it/sprint-migrazione-shopify/page.tsx`)
- Application page, always noindex: `/shopify-migration-sprint/apply`, `/it/sprint-migrazione-shopify/candidatura`
  (`ZeroLossApplyPage.tsx`, one screen on desktop). Every CTA (`ZlCta`) links there keeping
  the query string; the page fires `form_view`. Primary CTAs use the `.zl-cta` effect.
- Old `/zero-loss-migration` URLs (+ `/apply`, `/candidatura`) redirect permanently (`next.config.ts`).
- Results (#prove): `ZlSeoCharts.tsx`, two charts (Supplement DTC Nazzi Search Console daily
  clicks/impressions from the API, Cumini sales index since 2023) from
  `data/use-cases/nazzi-gsc-daily.json` and `data/zero-loss/seo-charts.ts`. Only index values,
  never absolute client figures (sources in `docs/dati-verificati.md`).

Linked from the global navbar ("Sprint", green lightning icon) and from the "AI powered"
banner on `/it/migrazione-shopify` and `/shopify-migration`.

## Indexing

The landing is public and indexable since 13 Oct 2026: `index, follow` and in
`/sitemap.xml` (EN + IT with hreflang), hardcoded in `lib/zero-loss/metadata.ts`
(`ZL_INDEXABLE = true`) and `lib/sitemap/routes.ts`. The application and
thank-you pages stay noindex and out of the sitemap. The old `LP_ZERO_LOSS_INDEX`
environment variable is no longer read (v1.5.0).

## Structure

- Own root layouts (`app/(zl-en)/layout.tsx`, `app/(zl-it)/layout.tsx`, both
  wrapping `ZeroLossRootLayout`), same pattern as the `(funnel)` group: no global
  navbar, no sticky contact pill, no preloader. Consent banner + analytics
  provider are included.
- Copy: `content/zero-loss-migration.it.ts`, `content/zero-loss-migration.en.ts`
  (typed `ZlCopy`), constants/types/tiers in `content/zero-loss-migration.shared.ts`,
  entry point `content/zero-loss-migration.ts` (`getZeroLossCopy(locale)`).
  Components never hardcode text.
- Page composition: `ZeroLossPage.tsx` (section order: nav, hero + logo strip,
  overview, checklist, Custom AI theme, deliverables, results first, calendar,
  guarantees, why now, proof, scope, FAQ, application form, minimal footer).
- Reused site pieces: `Testimonials`
  (new optional `items` / `tone` / `className` props), `Accordion` (new optional
  `renderText` prop), `Footer` (new `minimal` prop), `PartnerLogos` (fixed partner row under the hero CTAs),
  partner/client logo assets, Trustpilot wordmark, `.button-principal`,
  `.button-secondary`, `.np-eyebrow`, `.section-card`, `container-noprob`.
- Form: `ZlApplicationForm.tsx` (4 steps, in-memory state on back, honeypot +
  time trap, per-step validation, zod schema `lib/schemas/zeroLoss.ts`, tier
  logic `lib/zero-loss/tier.ts`). Posts to `/api/migrazione-lead` with
  `source: "zero-loss-migration"`; the route has a dedicated branch
  (`handleZeroLoss`) with its own schema, server-side tier recompute, in-memory
  rate limit (5 requests / 10 min / IP) and admin email. The original
  migrazione/sviluppo/datateam flow of that route is unchanged. No welcome
  email is sent for this source (the landing promises a personal reply within
  48 hours and has no booking step).
- Tracking (`lib/zero-loss/tracking.ts`): dataLayer + GA4 `gtag` events
  `lp_view`, `cta_click{position}`, `checklist_change{checked_count}`,
  `form_start`, `form_step{step}`, `form_disqualified{reason}`,
  `form_submit{tier, estimated_price, platform, revenue_band, start_timing}`,
  `dashboard_demo_click{position}`. Every event carries `lp: "zero-loss-migration"`.
  A standard `Lead` (Pixel + GA4 + CAPI, shared event_id) also fires on a
  successful submit, like the other forms. `utm_*` are captured from the URL,
  kept in `sessionStorage` and sent with the payload.
- OG images: `public/images/og-shopify-migration-sprint-{it,en}.png`, regenerate with
  `node scripts/generate-zero-loss-og.mjs`.

## Placeholders ("[DA CONFERMARE]")

Values Antonio has not confirmed are `[[TOKEN]]` markers in the copy files and
render as `[DA CONFERMARE]` through `renderCopy()` (`Placeholder.tsx`). The
marker is highlighted in yellow everywhere except the Vercel **production**
environment (`NEXT_PUBLIC_VERCEL_ENV !== 'production'`).

### Open data

| What | Where |
| --- | --- |
| Demo dashboard URL | `ZL_DEMO_DASHBOARD_URL` in `content/zero-loss-migration.shared.ts` (link hidden while `null`) |
| Next migration testimonials | 3 `hidden: true` slots in the copy files |
| Real deliverable screenshots | `ZlMockup` in `ZlDeliverables.tsx` (JSX mockups shown) |

## QA notes

- Indexing: production answers `index, follow` and lists both locales in
  `/sitemap.xml`; locally (flag unset) the page answers `noindex, nofollow`.
- Locally, without `RESEND_API_KEY`, a submit returns 500 "Email service not
  configured": the form shows the inline error with "Riprova" and keeps the data.
  On Vercel the key exists and the admin email lands in the same inbox as
  `/shopify-migration` leads, subject `[Zero-Loss Sprint] Tier N · platform · store`.
