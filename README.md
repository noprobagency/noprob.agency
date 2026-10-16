# noprob.agency

Marketing site of NoProb Agency: Shopify partner for fashion, supplement and DTC brands. Next.js 15 (App Router), TypeScript, Tailwind CSS 3, hosted on Vercel.

## Run it

```bash
pnpm install
pnpm dev          # http://localhost:3000
pnpm build && pnpm start
```

Copy `.env.example` to `.env.local` for analytics IDs, Resend and the Meta Conversions API token. Without them the site runs; forms return a 500 until `RESEND_API_KEY` is set.

## Checks

```bash
pnpm lint
pnpm typecheck
pnpm check:em-dash   # no em dashes in the public copy
pnpm test            # Vitest: Sprint tiers, locale routes, form schemas
```

The same five steps run in GitHub Actions on every push and pull request.

## Where things are

| | |
| --- | --- |
| Rules and runbooks | [AGENT.md](AGENT.md) |
| Architecture (routes, layouts, copy modules, forms, tracking, landings) | [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) |
| History and changelog | [docs/CHANGELOG.md](docs/CHANGELOG.md) |
| Every public number with its source | [docs/dati-verificati.md](docs/dati-verificati.md) |
| Pages | `app/(en)` (EN, root), `app/it` (IT), `app/(zl-en)` and `app/(zl-it)` (Shopify Launch Sprint), `app/(funnel)` |
| Copy | `lib/i18n/*.ts`, `content/zero-loss-migration.*.ts`, `data/articles`, `data/use-cases` |
| Forms and email | `lib/schemas`, `app/api/*`, `lib/emails` |

## Ship

One PR per change, squash-merged to `main`; bump the minor in `package.json#version`; Vercel deploys production from `main`.
