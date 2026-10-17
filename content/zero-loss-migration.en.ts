import type { ZlCopy } from './zero-loss-migration.shared'
import { ZL_SOURCES } from './zero-loss-migration.shared'

/*
  English copy of the Shopify Launch Sprint landing (formerly Zero-Loss Migration Sprint). Translated from the
  Italian source keeping structure, tone and length. "Shopify Launch
  Sprint" stays untranslated. No em dashes. Client figures only as ratios. [[X]] tokens are
  placeholders rendered as "[DA CONFERMARE]" until confirmed.
*/

export const zeroLossEn: ZlCopy = {
  meta: {
    title: 'Shopify Migration in 14 Days | Shopify Launch Sprint',
    description:
      'Move your eCommerce to Shopify in 14 days without losing Google rankings or sales. Fixed price, 4 written guarantees, 90 days of support, measured results.',
    ogAlt: 'Shopify Launch Sprint: your eCommerce on Shopify in 14 days, more SEO and more sales',
  },
  nav: {
    cta: 'Apply for the sprint',
    langSwitchLabel: 'Switch language',
    logoLabel: 'noprob agency, go to the homepage',
  },
  hero: {
    eyebrow: 'Shopify Launch Sprint',
    h1: 'Your eCommerce on Shopify in 14 days. Higher on Google, more sales.',
    proofNote: 'We can prove it 😉',
    paragraph:
      'We move your store to Shopify without stopping sales and make it easier to find and to buy from. Our latest clients: +105% sales in 85 days for Supplement DTC Nazzi, +67.7% in 12 months for Cumini. Fixed price, 4 guarantees, 0 minutes offline.',
    ctaPrimary: 'Apply for the sprint',
    ctaNote: 'We reply within 48 hours',
    ctaSecondary: 'See the results',
    logosLabel: 'Chosen by Fashion, Supplements and DTC brands',
    trustpilotScore: '5/5',
    trustpilotLabel: '10 reviews on Trustpilot',
  },
  overview: {
    h2: 'Shopify Launch Sprint',
    paragraph:
      'Fourteen days, a fixed calendar, one point of contact. On day 1 you give us the accesses, on day 14 your store is on Shopify, ready to publish. It is not a redesign: it is your store, faster, stronger on Google and with a checkout built to sell more.',
    cta: 'Apply for the sprint',
    deliverablesTitle: 'What you get on day 14',
    deliverables: [
      {
        title: 'Shopify store ready to publish',
        line: '1:1 replica on a premium theme, bugs fixed, our purchase-flow checklist applied.',
      },
      {
        title: 'Data Migration Report',
        line: 'Products, variants, customers and order history reconciled at 100%.',
      },
      {
        title: '1:1 Redirect Map',
        line: 'Every old URL mapped to the new one and tested automatically. No organic click lost.',
      },
      {
        title: 'Tracking Spec + server-side setup',
        line: 'GA4, Meta CAPI via Stape, email, consent mode. Data that matches your orders.',
      },
      {
        title: 'Go-live Checklist with a date',
        line: 'You pick the day, we do the rest. Never a second offline.',
      },
    ],
    afterLine:
      'After the sprint: zero-downtime go-live in the window you choose and 90 days of support, monitoring & improvement: bug fixes, changes, SEO and tracking checks and new optimizations every week.',
    pricingTitle: 'Priced by the size of your company',
    pricingSub: 'and the store complexity that comes with it',
    tiers: [
      { label: 'Company revenue under €2M', price: '€5,800', under: '4 installments of €1,450, VAT excluded' },
      { label: 'Revenue between €2M and €20M', price: '€8,800', under: '4 installments of €2,200, VAT excluded' },
      { label: 'Revenue over €20M', price: '€12,800', under: '4 installments of €3,200, VAT excluded' },
    ],
    pricingNote:
      'First installment at kickoff, second at go-live, third and fourth during the support months. Shopify plan, theme and apps are on you. No discounts, no quotes: this is the price.',
    results: [
      { value: '+105% online sales in the first 85 days on Shopify', attribution: 'Supplement DTC Nazzi' },
      { value: '+67.7% online sales in the 12 months after the migration', attribution: 'Cumini, luxury multibrand' },
      { value: 'Google position improved by 21%, clicks 2.7 times the year before', attribution: 'Supplement DTC Nazzi, Search Console' },
      { value: '0 minutes offline across over 10 migrations', attribution: 'noprob agency' },
    ],
  },
  checklist: {
    h2: 'Sound familiar? Be honest.',
    sub: 'tick the ones that are true',
    items: [
      'To change a banner you open a ticket and wait for the developer',
      'You know you would sell more on Shopify, but you are afraid of losing Google and customers in the move',
      'The site froze or slowed down right during sales or Black Friday',
      'Meta and GA4 say one thing, real orders say another, and you decide on gut feeling',
      'You pay for hosting, plugins and maintenance every month, and the site never changes',
      'You want to use AI to sell and work better, but on your platform you do not even know where to start',
    ],
    reactionNone: 'All green, for now. Tick the true ones: one is enough and you are already losing sales.',
    reactionMid: 'Every tick is an order that is not coming in today. And it does not show in the reports.',
    reactionHigh: 'No prob. This is exactly what we fix in 14 days.',
    reactionHighCta: 'Apply for the sprint',
    countLabel: 'ticked',
  },
  deliverables: {
    h2: 'The solution: a 2-week sprint',
    sub: 'here is what you receive, one by one',
    labelPrefix: 'Deliverable',
    items: [
      {
        title: 'Data Migration Report',
        short: 'Data Migration Report',
        paragraph:
          'Products, variants, images, customers, order history, discount codes, reviews. Every count from the old platform compared with Shopify and reconciled at 100%. If there is a difference, it is written down and explained.',
        imageAlt: 'Data Migration Report table with source, Shopify and difference columns',
        mockup: 'report',
      },
      {
        title: 'Your store, ready to publish on Shopify',
        short: 'Store ready to publish',
        paragraph:
          'Your store rebuilt 1:1 on Shopify: same pages, same structure, same content. We fix the bugs and errors you have been carrying for years and apply our purchase-flow checklist: search, product page, cart, checkout. It is not a restyling. It is your store, faster and shorter to buy from.',
        imageAlt: 'Screenshot of the Shopify staging next to the current site, with the checklist overlaid',
        mockup: 'staging',
      },
      {
        title: 'Tracking Spec and server-side setup',
        short: 'Tracking Spec',
        paragraph:
          'GA4, Meta Conversions API via Stape, Google Ads, email platform, consent mode. One document with every event and how we verify it: deduplicated purchase, Meta Event Match Quality above 8, gap between Shopify and GA4 orders under 3%.',
        imageAlt: 'Tracking Spec page and Event Match Quality screenshot',
        mockup: 'tracking',
      },
      {
        title: '1:1 Redirect Map',
        short: 'Redirect Map',
        paragraph:
          'Every URL that received traffic in the last 12 months has its 301 redirect to a page that answers 200. Not by hand: with an automated test that runs before go-live and after. It is the reason organic traffic does not get lost.',
        imageAlt: 'Redirect Map CSV and automated test output with 100% green',
        mockup: 'redirects',
      },
      {
        title: 'Go-live Checklist with your date',
        short: 'Go-live Checklist',
        paragraph:
          'DNS, TTL, sitemap, Search Console, uptime monitor, rollback plan. You sign it with the date you choose, from day 15 to day 30. On launch day your store does not stop for a second.',
        imageAlt: 'Signed Go-live Checklist with the date highlighted',
        mockup: 'checklist',
      },
    ],
  },
  calendar: {
    h2: 'Here is exactly how the sprint works',
    prework: {
      label: 'Pre-work',
      yourTeamTitle: 'Your team',
      yourTeam: 'You fill in the intake form (30 minutes), prepare the list of accesses and the catalog and order exports.',
      ourTeamTitle: 'Our team',
      ourTeam:
        'We open the dedicated channel, prepare the development store and the import plan. Kickoff starts only when we have every access. We do not start halfway.',
    },
    weeks: [
      {
        badge: 'Week 01',
        title: 'Build',
        days: [
          {
            day: 'Monday',
            title: 'Kickoff and credentials',
            duration: '90 minutes',
            detail: 'Access to platform, DNS, Search Console, GA4 and Meta. Exports. We freeze the traffic and sales baseline.',
          },
          {
            day: 'Tuesday',
            title: 'Inventory and import',
            detail: 'Inventory of every URL with traffic in the last 12 months, data map. Import of products, customers and orders into staging.',
          },
          {
            day: 'Wednesday',
            title: 'Reconciliation and structure',
            duration: '10 minutes',
            detail: 'Source and Shopify counts at 100%. Theme, navigation, collections. You get a Loom.',
            deliverables: [1],
          },
          {
            day: 'Thursday',
            title: 'Template replication',
            detail: 'Home, collection, product and search replicated 1:1. First version of the Redirect Map.',
          },
          {
            day: 'Friday',
            title: 'Staging v1',
            duration: '30 minutes',
            detail: 'We send you the staging link and a 10-minute Loom. Feedback by Monday.',
            deliverables: [2],
          },
        ],
      },
      {
        badge: 'Week 02',
        title: 'Refinement and delivery',
        days: [
          {
            day: 'Monday',
            title: 'Live review and fixes',
            duration: '60 minutes',
            detail: 'Call on the staging, then cart, checkout and account.',
          },
          {
            day: 'Tuesday',
            title: 'Tracking and integrations',
            detail: 'Stape, GA4, Meta CAPI, email, consent mode. Payments and shipping.',
            deliverables: [3],
          },
          {
            day: 'Wednesday',
            title: 'Purchase flow',
            detail: 'The purchase-flow checklist on search, product page, cart and checkout. Speed. Technical SEO: meta, schema, sitemap.',
          },
          {
            day: 'Thursday',
            title: 'QA and testing',
            detail: 'Automated 301 test on every URL, end-to-end test orders, 3 devices, tracking validation.',
            deliverables: [4],
          },
          {
            day: 'Friday',
            title: 'Sprint delivery',
            duration: '45 minutes',
            detail: 'Store ready to publish, Redirect Map, Tracking Spec, Go-live Checklist. We set the date.',
            deliverables: [5],
          },
        ],
      },
    ],
    durationLabel: 'for you',
    after: {
      title: 'After the sprint',
      rows: [
        {
          phase: 'Days 15-30',
          title: 'Go-live, you pick the date',
          detail: 'DNS switch, redirects live, sitemap and Search Console. 48 hours on watch.',
        },
        {
          phase: '90 days from go-live',
          title: 'Support, monitoring & improvement',
          detail: 'Bug fixes, minor changes, SEO and tracking monitoring and new optimizations. Weekly 10-minute Loom. Report on day 90.',
        },
      ],
      dashboard: {
        phase: 'From day 1',
        title: 'Results dashboard',
        detail: 'Net sales, MER, ROAS and retention connected from kickoff: it is the dashboard we measure the 4 guarantees with.',
        cta: 'See the demo dashboard',
      },
    },
    closing: 'Total time required from you: about 8 hours. We do the rest.',
  },
  guarantees: {
    h2: 'If it does not work, we pay.',
    sub: 'Four guarantees, measured by the dashboard you receive on day 1. Not by opinions.',
    cards: [
      { key: 'Sprint', text: 'Store ready on day 14 or we refund the first installment.' },
      { key: 'SEO', text: 'Organic traffic below the baseline 90 days after go-live? We work for free until it comes back.' },
      { key: 'Go-live', text: 'Store offline at launch because of us? We pay one installment.' },
      { key: 'Checkout', text: 'Checkout converting less than before at 90 days? We optimize it for free until it beats it.' },
    ],
    line: 'The full terms are in the contract, written on one page. No hidden asterisks.',
  },
  resultsFirst: {
    label: 'Obsessed with results',
    h2: '14 days is not a rush. It is a whole team on your store.',
    paragraph:
      'On Shopify in 14 days because it is not one person doing it: a whole team gets on it, one specialist for every area, all at the same time. So you get everything right away, no bottlenecks and the first results as soon as possible. Every area has a number to move up, and we do not stop until it does.',
    areas: ['Shopify development', 'SEO and redirects', 'Tracking and data', 'Checkout and CRO', 'Design', 'AI'],
    line: 'We work in parallel, not in line.',
  },
  sticky: {
    prefix: 'Fixed price from',
    note: 'On Shopify in 14 days',
    cta: 'Apply for the sprint',
  },
  whyNow: {
    eyebrow: 'Why now',
    h2: 'Your competitors are already moving to Shopify. Every month you wait, the advantage is theirs.',
    paragraph:
      'It is not a trend, it is a mass migration. With Shopify and AI a change takes minutes, a promo goes live the same day and your catalog is already inside ChatGPT. Those who start first stack up months of tests, data and Google positions that latecomers never get back.',
    sourceLabel: 'Source',
    stats: [
      {
        value: '≈300',
        label: 'stores a day leave their platform for Shopify: 27,247 in the last 90 days.',
        source: { label: 'Store Leads, October 2026', href: ZL_SOURCES.storeLeads },
      },
      {
        value: '9,204',
        label: 'of them come from WooCommerce, in just 90 days. It is the platform people leave the most.',
        source: { label: 'Store Leads, October 2026', href: ZL_SOURCES.storeLeads },
      },
      {
        value: '+32%',
        label: 'volume sold on Shopify in one year. The market moves where people sell more.',
        source: { label: 'Shopify, Q2 2026 results', href: ZL_SOURCES.shopifyQ2 },
      },
      {
        value: '3x',
        label: 'traffic and orders brought by AI agents to Shopify stores, year over year.',
        source: { label: 'Digital Commerce 360', href: ZL_SOURCES.digitalCommerce360 },
      },
    ],
    race: {
      title: 'Same store, two speeds',
      colOld: 'On your own, on the old platform',
      colNew: 'With us, on Shopify + AI',
      rows: [
        { task: 'Maintenance', old: 'Hosting, plugins and developers paid separately', now: 'All included: updates, fixes and changes are on us' },
        { task: 'Support', old: 'A ticket and days of waiting', now: 'Support 7 days a week, straight from the team' },
        { task: 'Speed', old: 'Every change turns into a project', now: 'Changes and tests the same day, with AI on our side' },
        { task: 'Vision', old: 'Different vendors, nobody sees the big picture', now: 'A growth partner who sees every area: SEO, ads, email, tracking and AI' },
        { task: 'AI', old: 'You wait for a plugin that may never come', now: 'Catalog already in ChatGPT, Copilot and Google AI Mode' },
        { task: 'Growth', old: 'The site stands still while the market runs', now: 'Every month a step forward, measured on Google and on sales' },
      ],
    },
    cardsTitle: 'And AI commerce is born on Shopify',
    cards: [
      {
        text: 'Shopify made every store "agent-ready by default": merchant catalogs are already inside ChatGPT, Microsoft Copilot and Google AI Mode through a single channel in the admin.',
        sources: [
          { label: 'Shopify', href: ZL_SOURCES.shopifyAgentic },
          { label: 'Yahoo Finance', href: ZL_SOURCES.yahooFinance },
        ],
      },
      {
        text: 'In the second quarter of 2026, traffic and orders brought by AI agents to Shopify stores tripled year over year.',
        sources: [{ label: 'Digital Commerce 360', href: ZL_SOURCES.digitalCommerce360 }],
      },
      {
        text: 'The standard for agentic commerce, UCP, is written by Shopify together with Google. Other platforms adopt it later, via plugin.',
        sources: [{ label: 'Shopify', href: ZL_SOURCES.shopifyAgentic }],
      },
    ],
    closing: 'The sooner you start, the sooner you see results. The sprint lasts 14 days: two weeks from now the advantage is yours, not your competitor’s.',
    cta: 'Apply for the sprint',
  },
  proof: {
    h2: 'After the migration: higher on Google, more sales',
    sub: 'Real data from our clients, with the source of every number. Revenue figures stay theirs: sales are shown as an index.',
    charts: {
      caseLink: 'Read the case study',
      items: [
        {
          key: 'cuminiSales',
          title: 'Cumini, eCommerce sales growth since 2023',
          subtitle: 'Monthly net sales and orders, 3-month moving average, as an index: 100 is the average of the 12 months before Shopify. Source: Shopify backend of cumini.com, with the previous platform history imported, May 2023 to September 2026.',
          kpis: [
            { label: 'Sales, 12 months after', value: '+67.7%' },
            { label: 'Orders, 12 months after', value: '+49.4%' },
            { label: 'Average order value', value: '+12.2%' },
            { label: 'Last 12 months vs before', value: '2.08x' },
          ],
          legend: ['Sales', 'Orders'],
          migrationLabel: 'Migration',
          goLiveLabel: 'Live on Shopify, May 19, 2025',
          href: '/use-cases/cumini-luxury-fashion-ecommerce',
        },
        {
          key: 'nazziGsc',
          title: 'Supplement DTC Nazzi, organic traffic from Google',
          subtitle: 'Daily clicks and impressions, 7-day moving average, indexed: 100 is the daily average of the 28 days before go-live. Source: Google Search Console, Supplement DTC Nazzi site property, September 2025 to October 2026. The volumes stay with the client.',
          kpis: [
            { label: 'Clicks, 28 days after go-live', value: '+41%' },
            { label: 'Impressions, 28 days after', value: '2.2x' },
            { label: 'Clicks vs 2025', value: '2.7x' },
            { label: 'Google position', value: '+21%' },
          ],
          legend: ['Clicks', 'Impressions'],
          migrationLabel: 'Migration',
          goLiveLabel: 'Live on Shopify, Jul 19',
          href: '/use-cases/integratori-nazzi-dtc-shopify',
        },
      ],
    },
    testimonialsHeading: 'What clients say',
    testimonials: [
      {
        name: 'Antonio Cali',
        role: 'Sfogliate&Sfogliatelle - DTC eCommerce Owner',
        image: '/images/originals/5ZClDWRqPVst2zJqghXyG33cMY0.png',
        quote:
          'Collaborating with NoProb Agency for the development of our eCommerce was an extremely positive experience. From the very first stages of the project, the team stood out for its clear communication, technical expertise, and listening skills. Every step, from graphic design to going live, was handled with professionalism…',
      },
      {
        name: 'Camilla Dudine',
        role: 'DDglobal Store - B2B eCommerce Owner',
        image: '/images/originals/btYlkzRXpOBFU8seMDbnX8BY8.jpeg',
        quote:
          'Collaborating with Antonio on the creation of our eCommerce website was an extremely positive experience. He demonstrated great professionalism, technical competence, and remarkable attention to detail, managing to transform our ideas into a functional, modern, and high-performing eCommerce website.',
      },
      // Slots for the next migration testimonials: hidden while `hidden` is true.
      { name: '', role: '', image: '', quote: '', hidden: true },
      { name: '', role: '', image: '', quote: '', hidden: true },
      { name: '', role: '', image: '', quote: '', hidden: true },
    ],
  },
  scope: {
    h2: 'What we do. And what we do not.',
    includedTitle: 'Included in the sprint',
    included: [
      'Migration of products, customers and order history',
      '1:1 SEO redirects and on-site technical SEO',
      'Server-side tracking and consent mode',
      'Setup of payments, shipping, email and the platforms you already use',
      '1:1 replica, bug fixes, optimized purchase flow',
      'Zero-downtime go-live and 90 days of support, monitoring & improvement',
    ],
    partnersTitle: 'With dedicated partners, after go-live',
    partners: [
      'Custom design and rebranding',
      'Meta and Google advertising',
      'Email marketing and CRM',
      'Product photography, copywriting, translations',
      'Marketplaces, POS, complex B2B portals',
    ],
    line: 'Above the limits of your tier (products, languages, ERP) fixed-price add-ons apply, never an open quote. We tell you on the call, before you sign.',
  },
  faq: {
    h2: 'Frequently asked questions',
    cta: 'Apply for the sprint',
    items: [
      {
        question: 'How much time do I need?',
        answer:
          'About 8 hours in total: 30 minutes for the form, 90 for the kickoff, 60 for the staging review, 45 at delivery, a few 10-minute Looms, being reachable on go-live day. We do the rest.',
      },
      {
        question: 'Does my store stay online during the sprint?',
        answer:
          'Yes. We work in staging, your current site is not touched. You go live when you decide, between day 15 and day 30.',
      },
      {
        question: 'Will I lose Google rankings?',
        answer:
          'No, if the migration is managed. Every URL with traffic has its 1:1 redirect, tested automatically before and after launch, and we monitor Search Console for 90 days. If organic traffic stays below the baseline at 90 days, we work for free until it comes back.',
      },
      {
        question: 'Will the site look the same as before?',
        answer:
          'Yes, and that is the point. We replicate your store 1:1, fix bugs and errors and optimize the purchase flow with our checklist. It is not a redesign: if you want to change your look, that comes later, with a partner.',
      },
      {
        question: 'Which platforms do you migrate from?',
        answer:
          'WooCommerce, PrestaShop, Magento, custom platforms, management systems and ERPs with an integrated store. If you are already on Shopify and only want a restyling, this is not the right sprint.',
      },
      {
        question: 'What happens if the accesses do not arrive in time?',
        answer: 'The kickoff waits until we have everything. The sprint starts only when it can finish in 14 days.',
      },
      {
        question: 'What happens if my store exceeds the tier limits?',
        answer:
          'Extras (languages, currencies, custom ERP, a very large blog) have a fixed list price and we tell you on the call, before signing. No open quotes.',
      },
      {
        question: 'How do I pay?',
        answer:
          'Four installments: the first at kickoff, the second at go-live, the third and fourth during the support months. Prices exclude VAT. Shopify plan, theme and apps you pay directly to Shopify.',
      },
      {
        question: 'How do the guarantees work?',
        answer:
          'There are four, measured by the dashboard: store ready on day 14 or refund of the first installment; organic traffic below the baseline at 90 days and we work for free until it comes back; store offline at launch because of us and we pay one installment; checkout converting less than before at 90 days and we optimize it for free until it beats it. The terms are in the contract, on one page.',
      },
      {
        question: 'What happens after the 90 days?',
        answer:
          'The store is yours, solid, with clean data. You can continue on your own, with a package of hours, or with partners for advertising, email and design. No lock-in.',
      },
      {
        question: 'When can I start?',
        answer:
          'Apply: we reply within 48 hours with your tier and the first available kickoff date.',
      },
      {
        question: 'Why does the price depend on my company’s revenue?',
        answer:
          'Because revenue and store complexity go together: more products, languages, integrations and people to align. It is the same criterion the best productized consultancies use. You see the price of your tier here, before talking to us.',
      },
      {
        question: 'What is the dashboard I receive on day 1?',
        answer:
          'It is a monitoring dashboard for the key metrics of your eCommerce (MER, contribution margin, ROAS, net sales, orders, CPA and retention). At kickoff we connect Shopify, your ad platforms and tracking to freeze your initial baseline, and we use it during and after the sprint to track our written guarantees in real time.',
      },
    ],
  },
  finalCta: {
    h2: 'Your store on Shopify in 14 days. Apply now.',
    paragraph:
      'We reply within 48 hours, even if the answer is no. If you meet the criteria, the answer is your tier, the price and the first available kickoff date.',
    bullets: ['Store ready on day 14', '4 guarantees written in the contract', '90 days of support, monitoring & improvement'],
    cta: 'Apply for the sprint',
  },
  apply: {
    metaTitle: 'Apply for the Shopify Launch Sprint | noprob agency',
    metaDescription: 'Four steps, two minutes. We reply within 48 hours with your tier, the price and the first available kickoff date.',
    back: 'Back to the sprint page',
    trustedBy: '5/5 on Trustpilot',
    h1Pre: 'Your store on Shopify in',
    h1Em: '14 days.',
    description:
      'A whole team, fully focused on your store. We move it to Shopify at the highest quality in just 14 days and get it ready for a performance sprint across every area: the next step for your eCommerce business.',
    badges: ['Reply within 48 hours', '7/7 support', 'Fixed price, no quotes'],
  },
  form: {
    progressLabel: 'Step {step} of {total}',
    replyNote: 'We reply within 48 hours',
    next: 'Next',
    back: 'Back',
    submit: 'Send the application',
    submitting: 'Sending...',
    requiredMark: 'required',
    steps: [{ title: 'Your store' }, { title: 'Size' }, { title: 'Timing and reason' }, { title: 'Contacts' }],
    step1: {
      urlLabel: 'Store URL',
      urlPlaceholder: 'https://www.yourstore.com',
      platformLabel: 'Current platform',
      platforms: [
        { value: 'woocommerce', label: 'WooCommerce' },
        { value: 'prestashop', label: 'PrestaShop' },
        { value: 'magento', label: 'Magento' },
        { value: 'custom', label: 'Custom' },
        { value: 'erp', label: 'ERP / management system' },
        { value: 'other', label: 'Other' },
        { value: 'shopify', label: 'Shopify' },
      ],
      shopifyStop:
        'The sprint is for stores coming from another platform. If you only want to improve a store already on Shopify, write to us from the contacts page.',
      shopifyStopLink: 'Go to the contacts page',
    },
    step2: {
      revenueLabel: 'Annual company revenue',
      revenues: [
        { value: 'under300k', label: 'Under €300k' },
        { value: '300k-2m', label: '€300k-2M' },
        { value: '2m-20m', label: '€2M-20M' },
        { value: 'over20m', label: 'Over €20M' },
      ],
      productsLabel: 'Active products in the catalog',
      products: [
        { value: 'under2000', label: 'Under 2,000' },
        { value: '2000-10000', label: '2,000-10,000' },
        { value: 'over10000', label: 'Over 10,000' },
      ],
      languagesLabel: 'Languages and currencies',
      languages: [
        { value: '1', label: '1' },
        { value: '2-3', label: '2-3' },
        { value: '4plus', label: '4 or more' },
      ],
      erpLabel: 'Connected ERP or management system',
      erpNo: 'No',
      erpYes: 'Yes',
      erpWhichLabel: 'Which one?',
      erpWhichPlaceholder: 'Name of the ERP or management system',
      revenueStop: 'Under €300k the sprint requires an initial assessment. You can still apply and we will evaluate feasibility together.',
      revenueNotice: 'Note: for stores under €300k, the sprint requires a feasibility assessment to ensure the investment is sustainable. You can still complete and submit your application: we will evaluate feasibility together before starting.',
    },
    step3: {
      timingLabel: 'When do you want to start',
      timings: [
        { value: 'now', label: 'Right away' },
        { value: '1-3months', label: 'Within 1-3 months' },
        { value: 'evaluating', label: 'Still evaluating' },
      ],
      reasonLabel: 'Why do you want to move to Shopify',
      reasonPlaceholder: 'Rigid platform, slow site, fear of losing SEO, broken tracking... say it in your own words',
      reasonCounter: '{count}/{max}',
    },
    step4: {
      summaryTitle: 'Your tier',
      summary:
        'Based on what you told us, your tier is {tier}: {price} in 4 installments of {installment}, VAT excluded. We confirm it on the call.',
      addonLine: 'Some extras may carry a fixed-price add-on: we tell you on the call.',
      nameLabel: 'Full name',
      namePlaceholder: 'John Smith',
      emailLabel: 'Business email',
      emailPlaceholder: 'name@yourcompany.com',
      phoneLabel: 'Phone (optional)',
      phonePrefixLabel: 'Prefix',
      phonePlaceholder: '7700 000000',
      privacyBefore: 'I have read the ',
      privacyLinkLabel: 'Privacy Policy',
      tierLabel: 'Tier',
    },
    errors: {
      url: 'Enter your store URL, for example https://www.yourstore.com',
      choice: 'Pick an option',
      erpName: 'Tell us which ERP or management system you use',
      reason: 'Write two lines on why you want to move to Shopify',
      reasonMax: 'Maximum 500 characters',
      name: 'Enter your full name',
      email: 'Enter a valid email address',
      emailFree: 'Use your business email, so we know it is you',
      phone: 'Check the phone number',
      privacy: 'You must accept the Privacy Policy',
      generic: 'Something went wrong. Try again: your answers are still here.',
      network: 'No connection. Try again in a moment: your answers are still here.',
    },
    success: {
      title: 'Application received.',
      text: 'We reply within 48 hours to {email} with your tier and the first available kickoff date.',
      dashboardCta: 'See the dashboard you receive on day 1',
    },
    retry: 'Try again',
  },
  thankYou: {
    metaTitle: 'Application received | Shopify Launch Sprint',
    badge: 'Application received',
    h1Pre: 'Done. We reply',
    h1Em: 'within 48 hours.',
    text:
      'Antonio reads every application himself. He writes to the address you left us with your confirmed tier and the first available kickoff date. If the answer is no, we tell you anyway.',
    nextTitle: 'Meanwhile, if you want a head start',
    next: [
      'Look at the dashboard you get on day 1: it is the one we measure the 4 guarantees with.',
      'Prepare the list of accesses: current platform, DNS, Search Console, GA4 and Meta.',
      'In a hurry? Book a call below or write on WhatsApp.',
    ],
    dashboardCta: 'See the day 1 dashboard',
    whatsapp: 'Write on WhatsApp',
    whatsappNote: 'Antonio replies in person',
    whatsappText: 'Hi Antonio, I just applied for the Shopify Launch Sprint on noprob.agency.',
    bookTitle: 'Want to bring the call forward?',
    bookText: 'Pick a slot: we talk about your store and the sprint calendar.',
    back: 'Back to the sprint page',
  },
  footer: {
    backToSite: 'Back to noprob.agency',
  },
}
