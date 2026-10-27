# Piano SEO

Roadmap di Francesca, aggiornata a ogni fase. Posizioni assolute e volumi stanno in `SEO/data/` (snapshot `audit/2026-10-27.json`, `keyword.json`), non qui. Regole in [README.md](README.md).

## Stato

- Fase 0 (casa): fatta il 27 ottobre 2026 (v1.51.0).
- Fase 1 (audit): primo giro fatto il 27 ottobre 2026. Due fix in produzione (v1.53.0 robots, v1.54.0 description).
- Fase 2 (keyword e concorrenti): prossima.

## Audit del 27 ottobre 2026

**Tecnica: sana.** 36 URL in sitemap, tutte 200, canonical giusto ovunque, hreflang reciproci IT/EN con x-default, `lang` corretto, un H1 per pagina, title sotto 65, og:image ovunque, redirect http e slash finale in 308.

Corretti subito:
- `robots.txt` bloccava `/_next/`: Googlebot non poteva caricare JS, CSS e `/_next/image` (v1.53.0).
- Description sopra 160 sulla landing dello Sprint (IT e EN) e sull'articolo CRO IT (v1.54.0).

Restano (piccoli, nel piano sotto):
- `www` reindirizza con 307 (temporaneo) invece di 308: impostazione del dominio su Vercel, la fa Antonio.
- BreadcrumbList solo su AI Accelerator: manca su servizi, casi studio e blog.
- `/it/team-ecommerce-dedicato` senza JSON-LD Service (l'EN ce l'ha).
- `/shopify-development` e `/shopify-migration` ricevono solo 3 e 4 link interni.

**Visibilità: quasi zero.** Il dominio si posiziona solo per il nome ("no prob") e per una keyword di blog in seconda pagina. Fuori dalla top 30 su tutte e 6 le ricerche della migrazione misurate (3 IT, 3 US).

**Contenuto: manca proprio quello che vince.** Nelle SERP della migrazione vincono due tipi di pagina: landing di servizio per piattaforma di partenza (es. "Magento to Shopify migration": 4 su 4 in testa sono landing di agenzie) e guide per piattaforma (WooCommerce, Wix). Noi abbiamo una pagina migrazione generica, la landing dello Sprint e 3 articoli di blog, nessuno sulla migrazione.

**Cannibalizzazione possibile.** `/it/migrazione-shopify` ("Migrazione Shopify senza perdere vendite") e `/it/sprint-migrazione-shopify` ("Migrazione a Shopify in 14 giorni") puntano alla stessa ricerca. Stesso in EN.

**Posizionamento dei testi chiave.** Title della home ("Shopify Development & eCommerce Agency", "Agenzia Shopify per Brand eCommerce") e apertura di `public/llms.txt` ("Shopify technical partner for B2C brands") non dicono "migrazione": per Google e per le risposte AI non siamo ancora l'agenzia della migrazione.

**Domanda di ricerca: è in inglese.** In Italia le ricerche sulla migrazione a Shopify sono quasi tutte sotto le 10 al mese (unica eccezione rilevante: "agenzia shopify"). Negli Stati Uniti ci sono volumi veri e CPC da 25 a 60 dollari (intento commerciale forte): "shopify migration services", "migrate woocommerce to shopify", "magento to shopify migration", "wix to shopify", "shopify vs woocommerce". Proposta: in italiano si vince presto (pochi concorrenti) ma porta pochi contatti; il traffico vero è in inglese. Decide Antonio l'ordine.

## Priorità (prima stesura, si raffina con la Fase 2)

| # | Cosa | Keyword principale | Pagina | Impatto | Sforzo | Dati verificati che servono |
|---|---|---|---|---|---|---|
| 1 | Landing "WooCommerce to Shopify migration", EN e IT | migrate woocommerce to shopify, woocommerce to shopify migration | nuova | alto | medio | caso Nazzi (WooCommerce a Shopify) |
| 2 | `/shopify-migration` diventa l'hub della migrazione (servizi, piattaforme, guide, casi, Sprint) e smette di competere con lo Sprint | shopify migration services, shopify migration agency | da modificare | alto | medio | nessun dato nuovo |
| 3 | Landing "Magento to Shopify migration", EN e IT | magento to shopify migration | nuova | alto | medio | serve contenuto vero su Magento: verificare con Antonio un progetto o competenza dimostrabile |
| 4 | Home e `llms.txt` con la migrazione in testa (title, H1, prima frase) | shopify migration agency, agenzia migrazione shopify | da modificare | medio | basso | nessuno |
| 5 | Guida "Shopify vs WooCommerce", EN e IT | shopify vs woocommerce | nuova (blog) | medio | medio | fonti esterne autorevoli |
| 6 | Guida "Wix to Shopify", EN | wix to shopify | nuova (blog) | medio | medio | fonti esterne |
| 7 | Guida migrazione senza perdere SEO, redirect 301 su Shopify | website migration seo, shopify 301 redirects | nuova (blog) | medio | medio | caso Cumini (indici, non assoluti) |
| 8 | BreadcrumbList su servizi, casi studio e blog; Service sul team IT | | tecnico | basso | basso | nessuno |
| 9 | Asset linkabile: checklist di migrazione (poi la promuove Marco) | shopify migration checklist | nuova | medio | medio | nessuno |

Una pagina o un fix per PR, dall'alto. Niente landing per piattaforme dove non abbiamo contenuto vero.

## Cosa serve da Antonio

- Collegare Search Console e GA4 a treg: `treg connections connect --provider google-search-console` e `treg connections connect --provider google-analytics` (consenso Google nel browser).
- Vercel, Domains: `www.noprob.agency` con redirect permanente (308) verso `noprob.agency`.
- Decidere se partire dall'inglese.
