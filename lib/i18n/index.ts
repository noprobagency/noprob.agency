export type Locale = 'en' | 'it'

export type Dictionary = {
  navbar: {
    services: string
    reserveCta: string
    menuOpen: string
    menuClose: string
    navLinks: { label: string; href: string }[]
    serviceItems: { label: string; href: string }[]
    langSwitcher: { label: string; display: string }
  }
  hero: {
    trustpilotLabel: string
    line1: string
    line2: string
    line3pre: string
    line3em: string
    description: string
    ctaPrimary: string
    ctaPrimaryHref: string
    ctaSecondary: string
    ctaSecondaryHref: string
    quote: string
    quoteAuthor: string
  }
  problem: {
    label: string
    heading: string
    headingStrike: string
    body: string
    items: { title: string; description: string }[]
  }
  solution: {
    label: string
    headingPre: string
    headingMark: string
    items: { title: string; description: string }[]
  }
  caseStudy: {
    label: string
    heading: string
    category: string
    description: string
    metric: string
    metricNote: string
    cta: string
    ctaHref: string
    /** Second card (Integratori Nazzi DTC), same layout as Cumini. */
    second: {
      category: string
      description: string
      metric: string
      metricNote: string
      cta: string
      ctaHref: string
      tags: string[]
    }
  }
  pricing: {
    label: string
    heading: string
    subheading: string
    plans: {
      badge: string
      name: string
      price: string
      period: string
      description: string
      features: string[]
      cta: string
      ctaHref: string
      secondary: string
      secondaryHref: string
    }[]
    from: string
    trustpilotLabel: string
  }
  ecommerceRebuild: {
    hero: {
      features: string[]
      doodle: string
      trustLabel: string
      titlePart1: string
      titlePart2: string
      descriptionPart1: string
      descriptionPart2: string
      cta: string
      trustedCount: string
    }
    problem: {
      label: string
      heading: string
      headingEm: string
      description: string
      items: { title: string; description: string }[]
    }
    solution: {
      label: string
      headingPart1: string
      headingPart2: string
      items: { title: string; description: string }[]
    }
    process: {
      label: string
      headingPart1: string
      headingPart2: string
      headingPart3: string
      description: string
      phases: { duration: string; number: string; title: string; description: string }[]
    }
    whyUs: {
      label: string
      heading: string
      description: string
      agencyLabel: string
      agencyItems: string[]
      nobrobItems: string[]
      featuresDescription: string
      features: string[]
    }
  }
  dataDrivenTeam: {
    hero: {
      features: string[]
      doodle: string
      trustLabel: string
      titlePart1: string
      titlePart2: string
      titleEm: string
      description: string
      cta: string
      trustedCount: string
    }
    problem: {
      label: string
      heading: string
      headingEm: string
      description: string
      items: { title: string; description: string }[]
    }
    solution: {
      label: string
      heading: string
      headingMark: string
      description: string
      items: { title: string; description: string }[]
    }
  }
  faq: {
    label: string
    heading: string
    headingEm: string
    subheading: string
    items: { question: string; answer: string }[]
  }
  cta: {
    heading: string
    headingSub?: string
    headingEm: string
    headingPost: string
    buttonLabel: string
    availability: string
  }
  footer: {
    headingPre: string
    headingEm: string
    description: string
    links: { label: string; href: string }[]
    privacyPolicy: string
    cookiePolicy: string
  }
  seo: {
    home: { title: string; description: string }
    about: { title: string; description: string }
    contacts: { title: string; description: string }
    blog: { title: string; description: string }
    useCases: { title: string; description: string }
    dataDrivenTeam: { title: string; description: string }
    sviluppoShopify: { title: string; description: string }
    migrazioneShopify: { title: string; description: string }
    aiAccelerator: { title: string; description: string }
  }
  about: {
    hero: {
      trustLabel: string
      h1pre: string
      h1em: string
      body1: string
      body2: string
    }
    principles: {
      heading: string
      card1Title: string
      card1Body: string
      card2Title: string
      card2Body: string
      card3Title: string
      card3Body1: string
      card3Body2: string
    }
    testimonials: {
      heading: string
      items: { name: string; role: string; image: string; quote: string }[]
    }
  }
}

const en: Dictionary = {
  navbar: {
    services: 'Services',
    reserveCta: 'Book a call',
    menuOpen: 'Menu',
    menuClose: 'Close',
    navLinks: [
      { label: 'About', href: '/about' },
      { label: 'Use Case', href: '/use-cases' },
      { label: 'Blog', href: '/blog' },
      { label: 'Contacts', href: '/contacts' },
    ],
    serviceItems: [
      { label: 'Shopify Development', href: '/shopify-development' },
      { label: 'Data Drive Team', href: '/data-driven-team' },
      { label: 'Shopify Migration', href: '/shopify-migration' },
    ],
    langSwitcher: { label: 'Switch to Italian', display: 'EN' },
  },
  hero: {
    trustpilotLabel: 'Chosen by Fashion, Supplements and DTC brands',
    line1: 'Your Brand is premium.',
    line2: 'Your eCommerce',
    line3pre: 'partner should be ',
    line3em: 'too',
    description:
      'We build, improve and grow your eCommerce on Shopify, with a dedicated team in development, marketing and strategy. Together or separately, based on your needs.',
    ctaPrimary: 'Book a call',
    ctaPrimaryHref: '/contacts',
    ctaSecondary: 'Explore what we do',
    ctaSecondaryHref: '/#pricing',
    quote: 'Success comes from long-term thinking and a team that truly knows your industry and each other',
    quoteAuthor: 'Antonio Manitta',
  },
  problem: {
    label: 'Problem',
    heading: 'Forget the',
    headingStrike: 'All in one marketing agency',
    body: 'Sure, everyone wants a killer eCommerce. But if you trust the hype, you end up juggling bug fixes, random data, and support that vanishes. Solid quality in every basic area beats magic tricks in just one spot.',
    items: [
      {
        title: 'Fragmented Tech Stack',
        description: 'Multiple vendors, endless handoffs, constant chaos. No single expert fully responsible or a manager.',
      },
      {
        title: 'Blind decisions',
        description: 'Before its Shopify migration, Cumini’s tracking scored 31 out of 100. With data like that, decisions are blind and results are random.',
      },
      {
        title: 'Patchwork \u201cSupport\u201d',
        description: 'Marketing agencies improvise fixes and rush development, causing bugs and lost quality. We fix that.',
      },
    ],
  },
  solution: {
    label: 'Solution',
    headingPre: 'Stop settling.\nYour eCommerce deserves a ',
    headingMark: 'true technical partner',
    items: [
      {
        title: 'Tech Integration\nZero Chaos',
        description: 'All-in-one partner. Full-stack team: development, design, data and strategy. Everything managed for you.',
      },
      {
        title: 'Real Support\nReal Results',
        description: 'Response in minutes, not days. Proactive problem-solvers in Branding & Dev. We support your growth',
      },
      {
        title: 'Clean Data That\nDrives Growth',
        description: 'Professional tracking, complete analytics, actionable dashboards. Decisions on real numbers, not hope.',
      },
    ],
  },
  caseStudy: {
    label: 'Case Studies',
    heading: 'What happens when tech meets execution and consistency.',
    category: 'eCommerce Luxury Fashion Retail',
    description:
      'Started with no tech team or structure. Built, launched, and scaled eCommerce with a dedicated team, turning a marginal channel into a key driver of brand growth.',
    metric: '\u2191 67.7% online sales after moving to Shopify',
    metricNote: 'In the 12 months after the migration, compared with the 12 months before',
    cta: 'Read the Cumini case study',
    ctaHref: '/use-cases/cumini-luxury-fashion-ecommerce',
    second: {
      category: 'eCommerce Supplements DTC',
      description:
        'From WooCommerce to Shopify without stopping sales. Blog, customer history and tracking moved to the new store, plus a quiz that recommends the right supplement.',
      metric: '\u2191 105% online sales after moving to Shopify',
      metricNote: 'In the first 85 days on Shopify, compared with the same days of 2025',
      cta: 'Read the Integratori Nazzi DTC case study',
      ctaHref: '/use-cases/integratori-nazzi-dtc-shopify',
      tags: ['WooCommerce → Shopify', 'SEO', 'Meta Ads', 'Klaviyo', 'Shopify'],
    },
  },
  pricing: {
    label: 'Pricing',
    heading: 'Smart plans for serious eCommerce brands',
    subheading:
      'Whether your eCommerce is running and growing or you need to build it from scratch, our tech team will guide you every step of the way.',
    plans: [
      {
        badge: 'Already with a good eCommerce?',
        name: 'Data-Driven Team',
        price: '',
        period: '',
        description:
          'A tailor-made eCommerce team led by an eCommerce Manager who is your single point of contact. You focus on the brand, we coordinate everything else.',
        features: ['Fast support, 7 days a week', 'One dedicated eCommerce Manager', 'First sprint at half price'],
        cta: 'Get Your custom Data Team',
        ctaHref: '/data-driven-team',
        secondary: 'Contact us',
        secondaryHref: '/contacts',
      },
      {
        badge: 'Want to build your eCommerce?',
        name: 'Shopify Development',
        price: '',
        period: '',
        description:
          'We build your eCommerce on Shopify from design to tracking, ready to convert from day one. Lifetime maintenance included.',
        features: ['Pay over 3 months', 'Lifetime maintenance included', '30-day guarantee'],
        cta: 'Apply for the project',
        ctaHref: '/shopify-development',
        secondary: 'Contact us',
        secondaryHref: '/contacts',
      },
      {
        badge: 'Need to migrate to Shopify?',
        name: 'Shopify Migration',
        price: '',
        period: '',
        description:
          'We migrate your eCommerce to Shopify without losing sales or customers. 1:1 redirects, no downtime, managed end to end with a single point of contact.',
        features: ['1:1 SEO redirects', 'Your store never goes down', '30-day guarantee'],
        cta: 'Apply for your migration',
        ctaHref: '/shopify-migration',
        secondary: 'Contact us',
        secondaryHref: '/contacts',
      },
    ],
    from: 'From',
    trustpilotLabel: 'Chosen by Fashion, Supplements and DTC brands',
  },
  ecommerceRebuild: {
    hero: {
      features: [
        'Fast support, 7 days a week',
        'Lifetime Maintenance Included',
        '30-day Refund Guarantee',
      ],
      doodle: 'So it finally matches your brand',
      trustLabel: 'Chosen by Fashion, Supplements and DTC brands',
      titlePart1: "Let's rebuild your messy eCommerce with ",
      titlePart2: 'noprob',
      descriptionPart1:
        'We recreate your eCommerce from the ground up, creating a fast, stable, and conversion-ready store. You focus on growth. ',
      descriptionPart2: 'We take care of the technical work.',
      cta: 'I want a rebuild',
      trustedCount: 'Chosen by Fashion, Supplements and DTC brands',
    },
    problem: {
      label: 'problem',
      heading: 'Your tech stack is bloated.',
      headingEm: 'Your growth is stuck.',
      description:
        "You've outgrown your Shopify or WooCommerce setup, but you're still duct-taping fixes, relying on scattered freelancers, and wasting money on tracking that doesn't track.",
      items: [
        {
          title: 'Endless dev tickets, zero ownership',
          description:
            "Most brands rely on dirty data. Tracking is broken, decisions are random, growth isn't sustainable.",
        },
        {
          title: "Tracking data? Broken. You're scaling blind.",
          description:
            'Before its Shopify migration, Cumini’s tracking scored 31 out of 100. With data like that, decisions are blind and results are random.',
        },
        {
          title: "No one's really responsible. Your team knows it",
          description:
            "Agencies rush fixes and cause bugs. Your team doesn't trust the process anymore.",
        },
      ],
    },
    solution: {
      label: 'Solution',
      headingPart1: "You don't need another agency. You need a true ",
      headingPart2: 'Technical Growth Partner',
      items: [
        {
          title: 'Unified team, led by performance',
          description:
            'Full-stack team for dev, CRO, and analytics. Guided by an eCommerce Manager focused on results, not just delivery.',
        },
        {
          title: 'Fixed cost, full-stack execution',
          description:
            'Response in minutes, not days. No delays, no scopes. Just work that moves fast.',
        },
        {
          title: 'Analytics that actually guide decisions',
          description:
            'Clean tracking, real dashboards, zero guesswork. We turn insights into action.',
        },
      ],
    },
    process: {
      label: 'how we work',
      headingPart1: 'Our standardized 90-day process.',
      headingPart2: 'No price surprises.',
      headingPart3: 'No missed deadlines.',
      description:
        "In 7+ years we've obsessively refined our internal workflows so every rebuild runs on a clear, repeatable process. You get top-tier quality, predictable timings, and zero surprise extra costs or last-minute deadline drama.",
      phases: [
        {
          number: '01',
          duration: '1 Week',
          title: 'Onboarding & Access',
          description: 'Kickoff call, full access collection, and alignment on priorities and goals.',
        },
        {
          number: '02',
          duration: '7 - 14 DAYS',
          title: 'Audit & Priorities',
          description:
            'We analyze your current tech, data, and performance setup to identify blockers and quick wins.',
        },
        {
          number: '03',
          duration: '14 - 21 DAYS',
          title: 'Strategy & Roadmap',
          description:
            'You get a clear action plan focused on what drives ROI, built around your growth targets.',
        },
        {
          number: '04',
          duration: '21 - 56 DAYS',
          title: 'Execution & Tracking',
          description: 'Our team works in sprints. We handle everything from implementation to measurement.',
        },
        {
          number: '05',
          duration: '56 - 90 DAYS',
          title: 'Ongoing Optimization',
          description:
            'Continuous support, performance reports, and priority-based improvements. Always aligned.',
        },
      ],
    },
    whyUs: {
      label: 'why us',
      heading: 'Why Our Model Works Better',
      description:
        'A direct comparison between the noprob approach and traditional agencies or freelancers. The goal is to reinforce trust and show why your structure delivers better long-term results.',
      agencyLabel: 'Other<br />Agency',
      agencyItems: [
        'Slow response times and unclear coordination',
        'Generic strategies with limited flexibility',
        'Often lack dedicated eCommerce specialization',
        'Fragmented teams, poor collaboration',
        'Long delivery times and shifting timelines',
      ],
      nobrobItems: [
        'Always led by a Senior eCommerce Manager for full oversight',
        'Constant, responsive support, 7/7 availability',
        'Expert eCommerce copywriter involved in every build',
        'Quick turnaround, delivery in days, not weeks',
        "Modular team built around your brand's real goals",
      ],
      featuresDescription:
        "We don't just deliver tasks, we build eCommerce infrastructures brands can rely on. Below are some of the reasons clients stay with us for the long haul.",
      features: [
        'Specialized in fashion, beauty & DTC verticals',
        'Lifetime maintenance on all builds',
        'Trial discount available to start with confidence',
        'Fixed monthly pricing, no unexpected fees',
        'Optional NDA for full confidentiality',
        'Performance-first mindset, tech built to convert',
        'Fully independent team, zero onboarding on your side',
        'Access to industry-leading tools, dashboards & reporting',
        'Every collaboration structured for long-term brand growth',
      ],
    },
  },
  dataDrivenTeam: {
    hero: {
      features: [
        'Fast support, 7 days a week',
        'One dedicated eCommerce Manager',
        'First sprint at half price',
      ],
      doodle: 'So it finally matches your brand',
      trustLabel: 'Chosen by Fashion, Supplements and DTC brands',
      titlePart1: 'Stop juggling freelancers.',
      titlePart2: 'Get a dedicated eCommerce',
      titleEm: 'Growth Team.',
      description:
        'Hiring one person gets you one skill. With us you get a full team, led by an eCommerce Manager who coordinates everything. One point of contact, every skill your growth needs.',
      cta: 'Apply for your eCommerce team',
      trustedCount: 'Chosen by Fashion, Supplements and DTC brands',
    },
    problem: {
      label: 'problem',
      heading: 'Too many hands on your growth.',
      headingEm: 'No one is truly accountable.',
      description:
        'Scattered freelancers, agencies to coordinate, tech you wait on. Your store works, but growth stalls because there is no single direction.',
      items: [
        {
          title: 'Fragmented skills',
          description:
            'One freelancer for the site, one for ads, one for design. None of them talk to each other, none of them see the whole picture.',
        },
        {
          title: 'No real owner',
          description:
            'When something breaks, everyone blames someone else. Coordination stays on your plate.',
        },
        {
          title: 'Decisions without data',
          description:
            'Campaigns and choices made on gut feeling, with no real sense of what drives profit and what does not.',
        },
      ],
    },
    solution: {
      label: 'solution',
      heading: 'What if you had',
      headingMark: 'one partner?',
      description:
        'A complete eCommerce team, led by an eCommerce Manager who becomes your point of reference. We do not hand off tasks and disappear: we join the project as partners and stay.',
      items: [
        {
          title: 'A partner, not a vendor',
          description:
            'We become your eCommerce team. One point of contact accountable for the whole project, from strategy to execution.',
        },
        {
          title: 'Every area covered',
          description:
            'Development, tracking and CRO, but also branding, photography, shooting and sales. We find and coordinate the right people for every need.',
        },
        {
          title: 'Driven by data',
          description:
            'Custom dashboards, sheets and CRM with every metric that matters. We always know when we are profitable and where to act. Clear goals, continuous review.',
        },
      ],
    },
  },
  faq: {
    label: 'FAQs',
    heading: 'Everything you ',
    headingEm: 'need to know',
    subheading: 'The Agency that turns data and vision into high-performing eCommerce.',
    items: [
      {
        question: 'Who do you work with?',
        answer:
          'We work exclusively with established eCommerce brands in Fashion, Supplements, and DTC sectors operating on Shopify. We select partners carefully to ensure long-term aligned growth.',
      },
      {
        question: 'What does support and maintenance include, and how often do you intervene?',
        answer:
          'Support is 7/7 with response in minutes, not days. We handle everything from bug fixes to performance optimization, proactively managing your eCommerce infrastructure.',
      },
      {
        question: 'How do you approach data and KPI management?',
        answer:
          'We implement professional tracking from day one: GA4, Meta Pixel, server-side Conversions API, and custom dashboards. Every decision is based on real numbers, not assumptions.',
      },
      {
        question: 'What are the contract terms and flexibility options?',
        answer:
          'We offer flexible monthly retainers with fixed, predictable costs. No hidden fees, no surprise invoices. You can scale your team up or down based on your needs.',
      },
      {
        question: 'What\u2019s the difference between Data Driven Team and Shopify Development?',
        answer:
          'Data-Driven Team is a monthly retainer for brands with an existing eCommerce that want a dedicated team. Shopify Development is a full build project for brands starting from scratch or wanting to do it right from day one.',
      },
      {
        question: 'Who will be my main point of contact, and how is communication handled?',
        answer:
          'Your eCommerce Manager is your single point of contact. They lead your dedicated team and handle all communication, reporting, and strategic decisions.',
      },
      {
        question: 'How does the onboarding process work, and how long does it take?',
        answer:
          'Onboarding takes one to two weeks and includes an initial audit, team setup, tool integration, and a kickoff sprint. You will be fully operational within the first month.',
      },
      {
        question: 'Do you guarantee results or refunds?',
        answer:
          'We offer a 100% Risk-Free guarantee on our Shopify Development plan. If we do not deliver what we promised, you get a full refund. Our Data-Driven Team plan includes a trial discount for new clients.',
      },
      {
        question: 'Do you also work with new brands that don\u2019t have an eCommerce yet?',
        answer:
          'Yes. Our Shopify Development plan covers brands starting from zero, from design to launch and beyond. We build your entire eCommerce infrastructure from the ground up.',
      },
      {
        question: 'What\u2019s included (and not included) in your team\u2019s work?',
        answer:
          'Included: development, design, data and analytics, paid advertising management, email marketing, and SEO. Not included: product photography, content creation, or influencer management. We focus on what drives technical and revenue growth.',
      },
    ],
  },
  cta: {
    heading: "Ready to fix what's ",
    headingSub: "",
    headingEm: "slowing",
    headingPost: ' you down?',
    buttonLabel: 'Book a call',
    availability: 'Limited slots available',
  },
  footer: {
    headingPre: 'Consistency\nThat\u2019s ',
    headingEm: 'noprobagency',
    description:
      'We build, improve and grow your eCommerce on Shopify, with a dedicated team in development, marketing and strategy. Together or separately, based on your needs.',
    links: [
      { label: 'AI Accelerator', href: '/ai-accelerator' },
      { label: 'About', href: '/about' },
      { label: 'Use Case', href: '/use-cases' },
      { label: 'Blog', href: '/blog' },
      { label: 'Contacts', href: '/contacts' },
    ],
    privacyPolicy: 'Privacy Policy',
    cookiePolicy: 'Cookie Policy',
  },
  seo: {
    home: { title: 'Shopify Development & eCommerce Agency | noprob agency™', description: 'Shopify Partner for fashion, supplement, and DTC brands. We build, migrate, and manage eCommerce stores as your long-term technical partner.' },
    about: { title: 'Your Technical eCommerce Partner', description: 'Meet the team behind NoProb. A technical Shopify partner helping B2C brands scale with development, migration, and dedicated retainer teams.' },
    contacts: { title: 'Contact Us & Book a Call', description: 'Start a conversation with NoProb. Book a call to build your eCommerce on Shopify or activate a long-term dedicated team.' },
    blog: { title: 'Shopify, eCommerce & Growth Blog', description: 'Articles on Shopify development, migration, tracking, and CRO for fashion, supplement, and DTC brands. Written by the NoProb team.' },
    useCases: { title: 'eCommerce Case Studies & Results', description: 'Real results from long-term Shopify partnerships. See how we helped fashion and DTC brands grow revenue, improve MER, and scale eCommerce operations.' },
    dataDrivenTeam: { title: 'Dedicated eCommerce Team on Retainer', description: 'Your dedicated eCommerce team on retainer. One point of contact, a full team behind you. For Shopify brands that want to scale without hiring in-house.' },
    sviluppoShopify: { title: 'Shopify Development Services', description: 'Shopify development services to build your eCommerce from design to tracking, optimized to convert from day one. Lifetime maintenance included.' },
    migrazioneShopify: { title: 'Shopify Migration Without Losing Sales', description: 'Migrate your eCommerce to Shopify in 4 months without losing sales or customers. 1:1 redirects, no downtime, one point of contact. 30-day money-back guarantee.' },
    aiAccelerator: { title: 'AI Accelerator: unlock your company’s bottleneck with AI', description: 'A 30-day one-to-one program: we analyze your company, rank your priorities and tackle the first bottleneck with AI. Fixed price, no lock-in.' },
  },
  about: {
    hero: {
      trustLabel: 'Chosen by Fashion, Supplements and DTC brands',
      h1pre: 'Your technical partner that makes eCommerce ',
      h1em: 'simple',
      body1: 'A 7/7 team of developers, designers, and strategists combining code, data, and creativity to help Shopify brands scale without stress.',
      body2: 'We are not an agency you \u201cdelegate execution\u201d to, we become part of your project at 360\u00b0.',
    },
    principles: {
      heading: "We don\u2019t work with just anyone. Every project must align with these three core principles:",
      card1Title: 'Seamless Integration & Proven Team',
      card1Body: 'We plug directly into your structure with aligned workflows, vetted specialists, and a methodology that delivers. You\u2019ll work with a tight-knit, stable team shaped by long-term growth partnerships. When needed, we also source the right talent for your exact eCommerce needs.',
      card2Title: 'Long-Term Vision & Strategic Focus',
      card2Body: "We\u2019re built for Fashion, Supplements, and DTC brands. Our approach values quality over noise: stable growth, data-led decisions, and a consistent strategic partner over time. Our 2026 goal? Be the most trusted performance ally in your space.",
      card3Title: 'Substance, Stability & Experience',
      card3Body1: 'With 7+ years of international execution and a model based on predictable, fixed costs, we help you scale without margin surprises. No fluff, just infrastructure, strategy, and industry-native talent.',
      card3Body2: 'That\u2019s why we work exclusively with a highly selected group of brands.',
    },
    testimonials: {
      heading: 'Trusted by established business owners',
      items: [
        {
          name: 'Antonio Cali',
          role: 'Sfogliate&Sfogliatelle - DTC eCommerce Owner',
          image: '/images/originals/5ZClDWRqPVst2zJqghXyG33cMY0.png',
          quote: 'Collaborating with NoProb Agency for the development of our eCommerce was an extremely positive experience. From the very first stages of the project, the team stood out for its clear communication, technical expertise, and listening skills. Every step, from graphic design to going live, was handled with professionalism\u2026',
        },
        {
          name: 'Camilla Dudine',
          role: 'DDglobal Store - B2B eCommerce Owner',
          image: '/images/originals/btYlkzRXpOBFU8seMDbnX8BY8.jpeg',
          quote: 'Collaborating with Antonio on the creation of our eCommerce website was an extremely positive experience. He demonstrated great professionalism, technical competence, and remarkable attention to detail, managing to transform our ideas into a functional, modern, and high-performing eCommerce website.',
        },
      ],
    },
  },
}

const it: Dictionary = {
  navbar: {
    services: 'Servizi',
    reserveCta: 'Prenota una call',
    menuOpen: 'Menu',
    menuClose: 'Chiudi',
    navLinks: [
      { label: 'Chi Siamo', href: '/it/chi-siamo' },
      { label: 'Casi Studio', href: '/it/casi-studio' },
      { label: 'Blog', href: '/it/blog' },
      { label: 'Contatti', href: '/it/contatti' },
    ],
    serviceItems: [
      { label: 'Sviluppo Shopify', href: '/it/sviluppo-shopify' },
      { label: 'Data Drive Team', href: '/it/team-ecommerce-dedicato' },
      { label: 'Migrazione Shopify', href: '/it/migrazione-shopify' },
    ],
    langSwitcher: { label: 'Passa alla versione inglese', display: 'IT' },
  },
  hero: {
    trustpilotLabel: 'Scelti da brand di Moda, Integratori e DTC eCommerce',
    line1: 'Al tuo brand serve un',
    line2: 'partner eCommerce,',
    line3pre: "non l'ennesimo ",
    line3em: 'fornitore',
    description:
      'Costruiamo, miglioriamo e facciamo crescere il tuo eCommerce su Shopify, con un team dedicato in sviluppo, marketing e strategia. Insieme o separatamente, in base alle tue esigenze.',
    ctaPrimary: 'Prenota una call',
    ctaPrimaryHref: '/it/contatti',
    ctaSecondary: 'Scopri cosa facciamo',
    ctaSecondaryHref: '/it#pricing',
    quote: 'I risultati concreti vengono dal pensiero a lungo termine e da un team che conosce davvero il tuo settore e se stesso',
    quoteAuthor: 'Antonio Manitta',
  },
  problem: {
    label: 'Problema',
    heading: 'Dimentica la',
    headingStrike: 'agenzia marketing all-in-one',
    body: 'Certo, tutti vogliono un eCommerce che spacca. Ma se ti fidi dell\u2019hype, finisci a rincorrere bug, dati inutili e un supporto che sparisce. Una base solida in ogni area conta pi\u00f9 di un singolo trucco che brilla.',
    items: [
      {
        title: 'Stack Tecnologico Frammentato',
        description: 'Pi\u00f9 fornitori, handoff infiniti, caos costante. Nessun esperto responsabile del quadro completo.',
      },
      {
        title: 'Decisioni al buio',
        description: 'Prima della migrazione su Shopify, il tracking di Cumini segnava 31 su 100. Con dati cos\u00ec le decisioni sono cieche e i risultati casuali.',
      },
      {
        title: 'Supporto \u201cpatchwork\u201d',
        description: 'Le agenzie improvvisano fix e forzano i tempi di sviluppo, generando bug e perdita di qualit\u00e0. Noi lo risolviamo.',
      },
    ],
  },
  solution: {
    label: 'Soluzione',
    headingPre: 'Smettila di accontentarti.\nIl tuo eCommerce merita un ',
    headingMark: 'vero partner tecnico',
    items: [
      {
        title: 'Integrazione Tech. Zero Caos',
        description: 'Un unico partner. Team full-stack: sviluppo, design, dati e strategia. Tutto gestito per te.',
      },
      {
        title: 'Supporto Reale, Risultati Reali',
        description: 'Risposta in minuti, non giorni. Problem-solver proattivi in Branding & Dev. Siamo al tuo fianco nella crescita.',
      },
      {
        title: 'Dati Puliti che Guidano la Crescita',
        description: 'Tracking professionale, analytics completa, dashboard azionabili. Decisioni basate su numeri veri, non speranze.',
      },
    ],
  },
  caseStudy: {
    label: 'Case Study',
    heading: 'Cosa succede quando la tecnologia incontra l\u2019esecuzione e la costanza.',
    category: 'eCommerce Fashion Retail di Lusso',
    description:
      'Partiti senza team tecnico n\u00e9 struttura. Costruito, lanciato e scalato un eCommerce con un team dedicato, trasformando un canale marginale in un driver chiave della crescita del brand.',
    metric: '\u2191 67,7% vendite online dopo la migrazione a Shopify',
    metricNote: 'Nei 12 mesi dopo la migrazione, rispetto ai 12 mesi prima',
    cta: 'Leggi il caso studio Cumini',
    ctaHref: '/it/casi-studio/cumini-luxury-fashion-ecommerce',
    second: {
      category: 'eCommerce Integratori DTC',
      description:
        'Da WooCommerce a Shopify senza fermare le vendite. Blog, storico clienti e tracciamento portati sul nuovo store, e un quiz che consiglia l\u2019integratore giusto.',
      metric: '\u2191 105% vendite online dopo la migrazione a Shopify',
      metricNote: 'Nei primi 85 giorni su Shopify, rispetto agli stessi giorni del 2025',
      cta: 'Leggi il caso studio Integratori Nazzi DTC',
      ctaHref: '/it/casi-studio/integratori-nazzi-dtc-shopify',
      tags: ['WooCommerce → Shopify', 'SEO', 'Meta Ads', 'Klaviyo', 'Shopify'],
    },
  },
  pricing: {
    label: 'Pricing',
    heading: 'Piani intelligenti per brand eCommerce seri',
    subheading: 'Che il tuo eCommerce stia crescendo o sia ancora tutto da costruire, il nostro team tecnico ti guida a ogni passo.',
    plans: [
      {
        badge: 'Hai gi\u00e0 un buon eCommerce?',
        name: 'Data-Driven Team',
        price: '',
        period: '',
        description:
          'Un team eCommerce su misura, guidato da un eCommerce Manager che \u00e8 il tuo unico punto di riferimento. Tu pensi al brand, noi coordiniamo tutto il resto.',
        features: ['Supporto rapido, 7 giorni su 7', 'Un unico eCommerce Manager', 'Primo sprint a metà prezzo'],
        cta: 'Ottieni il tuo Data Team',
        ctaHref: '/it/team-ecommerce-dedicato',
        secondary: 'Contattaci',
        secondaryHref: '/it/contatti',
      },
      {
        badge: 'Vuoi costruire il tuo eCommerce?',
        name: 'Sviluppo Shopify',
        price: '',
        period: '',
        description:
          'Sviluppiamo il tuo eCommerce su Shopify dal design al tracciamento, pronto a convertire dal primo giorno. Manutenzione a vita inclusa.',
        features: ['Paga in 3 mesi', 'Manutenzione a vita inclusa', 'Garanzia 30 giorni'],
        cta: 'Candidati per il progetto',
        ctaHref: '/it/sviluppo-shopify',
        secondary: 'Contattaci',
        secondaryHref: '/it/contatti',
      },
      {
        badge: 'Devi migrare a Shopify?',
        name: 'Migrazione Shopify',
        price: '',
        period: '',
        description:
          'Migriamo il tuo eCommerce su Shopify senza perdere vendite o clienti. Redirect 1:1, nessuna interruzione, gestita end to end con un solo interlocutore.',
        features: ['Redirect SEO 1:1', 'Il sito non si ferma mai', 'Garanzia 30 giorni'],
        cta: 'Candidati per la migrazione',
        ctaHref: '/it/migrazione-shopify',
        secondary: 'Contattaci',
        secondaryHref: '/it/contatti',
      },
    ],
    from: 'A partire da',
    trustpilotLabel: 'Scelti da brand di Moda, Integratori e DTC eCommerce',
  },
  ecommerceRebuild: {
    hero: {
      features: [
        'Supporto rapido, 7 giorni su 7',
        'Manutenzione a vita inclusa',
        '30 giorni di garanzia di rimborso',
      ],
      doodle: 'Perché finalmente rispecchi il tuo brand',
      trustLabel: 'Scelti da brand di Moda, Integratori e DTC eCommerce',
      titlePart1: 'Ricostruiamo il tuo eCommerce caotico con ',
      titlePart2: 'noprob',
      descriptionPart1:
        'Ricostruiamo il tuo eCommerce dalle fondamenta, creando uno store veloce, stabile e pronto a convertire. Tu concentrati sulla crescita. ',
      descriptionPart2: 'Noi ci occupiamo del lavoro tecnico.',
      cta: 'Voglio un rebuild',
      trustedCount: 'Scelti da brand di Moda, Integratori e DTC eCommerce',
    },
    problem: {
      label: 'problema',
      heading: 'Il tuo tech stack è gonfio.',
      headingEm: 'La tua crescita è bloccata.',
      description:
        'Il tuo setup Shopify o WooCommerce ti sta stretto, ma continui a tamponare con fix temporanei, affidandoti a freelancer sparsi e sprecando budget in tracking che non traccia.',
      items: [
        {
          title: 'Ticket infiniti, nessuna responsabilità',
          description:
            'La maggior parte dei brand lavora su dati sporchi. Il tracking è rotto, le decisioni sono casuali, la crescita non è sostenibile.',
        },
        {
          title: 'Tracking rotto? Stai scalando alla cieca.',
          description:
            'Prima della migrazione su Shopify, il tracking di Cumini segnava 31 su 100. Con dati così le decisioni sono cieche e i risultati casuali.',
        },
        {
          title: 'Responsabile? Nessuno lo è davvero.',
          description:
            'Le agenzie forzano i tempi di sviluppo e generano bug. Il tuo team non si fida più del processo.',
        },
      ],
    },
    solution: {
      label: 'soluzione',
      headingPart1: "Non hai bisogno di un'altra agenzia. Ti serve un vero ",
      headingPart2: 'Partner Tecnico per la Crescita',
      items: [
        {
          title: 'Team unificato, guidato dalle performance',
          description:
            'Team full-stack per sviluppo, CRO e analytics. Guidato da un eCommerce Manager focalizzato sui risultati.',
        },
        {
          title: 'Costo fisso, esecuzione full-stack',
          description:
            'Risposta in minuti, non giorni. Niente ritardi, niente scope infiniti. Solo lavoro che procede veloce.',
        },
        {
          title: 'Analytics che guidano le decisioni',
          description:
            'Tracking pulito, dashboard reali, zero supposizioni. Trasformiamo i dati in azioni concrete.',
        },
      ],
    },
    process: {
      label: 'come lavoriamo',
      headingPart1: 'Il nostro processo standardizzato di 90 giorni.',
      headingPart2: 'Nessuna sorpresa sui prezzi.',
      headingPart3: 'Nessuna scadenza mancata.',
      description:
        'In oltre 7 anni abbiamo perfezionato i nostri workflow interni affinché ogni rebuild segua un processo chiaro e ripetibile. Ottieni qualità eccellente, tempi prevedibili e zero costi extra a sorpresa o ritardi dell\'ultimo minuto.',
      phases: [
        {
          number: '01',
          duration: '1 Settimana',
          title: 'Onboarding & Accessi',
          description: 'Call di kickoff, raccolta accessi e allineamento su priorità e obiettivi.',
        },
        {
          number: '02',
          duration: '7 - 14 GIORNI',
          title: 'Audit & Priorità',
          description:
            'Analizziamo il setup tecnico, i dati e le performance per identificare blocchi e quick win.',
        },
        {
          number: '03',
          duration: '14 - 21 GIORNI',
          title: 'Strategia & Roadmap',
          description:
            'Ricevi un piano d\'azione chiaro focalizzato sul ROI, costruito sui tuoi obiettivi di crescita.',
        },
        {
          number: '04',
          duration: '21 - 56 GIORNI',
          title: 'Esecuzione & Tracking',
          description: 'Il nostro team lavora in sprint. Gestiamo tutto, dall\'implementazione alla misurazione.',
        },
        {
          number: '05',
          duration: '56 - 90 GIORNI',
          title: 'Ottimizzazione Continua',
          description:
            'Supporto costante, report sulle performance e miglioramenti basati sulle priorità.',
        },
      ],
    },
    whyUs: {
      label: 'perché noi',
      heading: 'Perché il nostro modello funziona meglio',
      description:
        "Un confronto diretto tra l'approccio noprob e le agenzie tradizionali o i freelancer. L'obiettivo è mostrare perché la nostra struttura offre risultati migliori a lungo termine.",
      agencyLabel: 'Altre<br />Agenzie',
      agencyItems: [
        'Risposte lente e coordinamento poco chiaro',
        'Strategie generiche con flessibilità limitata',
        'Spesso mancano di specializzazione eCommerce dedicata',
        'Team frammentati, scarsa collaborazione',
        'Tempi di consegna lunghi e scadenze mobili',
      ],
      nobrobItems: [
        'Sempre guidati da un Senior eCommerce Manager',
        'Supporto reattivo e costante, disponibilità 7/7',
        'Copywriter eCommerce esperto in ogni build',
        'Consegne rapide, giorni, non settimane',
        'Team modulare costruito sui tuoi obiettivi reali',
      ],
      featuresDescription:
        "Non ci limitiamo a consegnare task, costruiamo infrastrutture eCommerce su cui i brand possono contare. Ecco perché i nostri clienti restano con noi a lungo.",
      features: [
        'Specializzati in verticali fashion, beauty & DTC',
        'Manutenzione a vita su ogni build',
        'Sconto trial disponibile per iniziare con fiducia',
        'Prezzi mensili fissi, niente costi imprevisti',
        'Optional NDA per la massima riservatezza',
        'Mindset performance-first, tech costruito per convertire',
        'Team completamente indipendente, zero onboarding lato tuo',
        'Accesso a strumenti, dashboard e report leader di settore',
        'Ogni collaborazione strutturata per la crescita del brand',
      ],
    },
  },
  dataDrivenTeam: {
    hero: {
      features: [
        'Supporto rapido, 7 giorni su 7',
        'Un unico eCommerce Manager',
        'Primo sprint a metà prezzo',
      ],
      doodle: 'al costo di un dipendente',
      trustLabel: 'Scelti da brand di Moda, Integratori e DTC eCommerce',
      titlePart1: 'Un team eCommerce completo,',
      titlePart2: 'dedicato alla',
      titleEm: 'crescita',
      description:
        'Assumere una persona ti dà una competenza sola. Con noi hai un team completo, guidato da un eCommerce Manager che coordina tutto. Un solo interlocutore, tutte le competenze che servono per crescere.',
      cta: 'Candidati per il tuo team eCommerce',
      trustedCount: 'Scelti da brand di Moda, Integratori e DTC eCommerce',
    },
    problem: {
      label: 'problema',
      heading: 'Troppe persone mettono mano alla tua crescita.',
      headingEm: 'Nessuno ne è davvero responsabile.',
      description:
        'Gestire freelancer sparsi, coordinare agenzie, aspettare i tecnici. Il tuo store funziona, ma la crescita resta ferma perché manca una regia unica.',
      items: [
        {
          title: 'Competenze frammentate',
          description:
            'Un freelancer per il sito, uno per le ads, uno per la grafica. Nessuno che parli con gli altri, nessuno che guardi il quadro completo.',
        },
        {
          title: 'Nessun vero responsabile',
          description:
            'Quando qualcosa non funziona, ognuno dà la colpa all’altro. Il coordinamento resta sulle tue spalle.',
        },
        {
          title: 'Decisioni senza dati',
          description:
            'Campagne e scelte fatte a sensazione, senza sapere davvero cosa porta profitto e cosa no.',
        },
      ],
    },
    solution: {
      label: 'soluzione',
      heading: 'E se avessi un',
      headingMark: 'unico partner?',
      description:
        'Un team eCommerce completo, coordinato da un eCommerce Manager che diventa il tuo punto di riferimento. Non consegniamo task e spariamo: entriamo nel progetto come partner e restiamo.',
      items: [
        {
          title: 'Un partner, non un fornitore',
          description:
            'Diventiamo il tuo team eCommerce. Un solo interlocutore che risponde di tutto il progetto, dalla strategia all’esecuzione.',
        },
        {
          title: 'Ogni area coperta',
          description:
            'Sviluppo, tracciamento e CRO, ma anche branding, fotografia, shooting e parte commerciale. Troviamo e coordiniamo le persone giuste per ogni esigenza.',
        },
        {
          title: 'Tutto guidato dai dati',
          description:
            'Dashboard, fogli e CRM su misura con ogni metrica che conta. Sappiamo sempre quando siamo in profitto e dove intervenire. Obiettivi chiari, revisione continua.',
        },
      ],
    },
  },
  faq: {
    label: 'FAQ',
    heading: 'Tutto quello che ',
    headingEm: 'devi sapere',
    subheading: 'L\u2019agenzia che trasforma dati e visione in eCommerce ad alte prestazioni.',
    items: [
      {
        question: 'Con chi lavorate?',
        answer:
          'Lavoriamo esclusivamente con brand eCommerce affermati nei settori Moda, Integratori e DTC operanti su Shopify. Selezioniamo i partner con cura per garantire una crescita allineata nel lungo periodo.',
      },
      {
        question: 'Cosa include il supporto e la manutenzione, e con quale frequenza intervenite?',
        answer:
          'Il supporto \u00e8 attivo 7/7 con risposta in minuti, non giorni. Gestiamo tutto, dai bug fix all\u2019ottimizzazione delle performance, amministrando proattivamente la tua infrastruttura eCommerce.',
      },
      {
        question: 'Come gestite i dati e i KPI?',
        answer:
          'Implementiamo tracking professionale dal giorno uno: GA4, Meta Pixel, Conversions API server-side e dashboard personalizzate. Ogni decisione si basa su numeri reali, non su ipotesi.',
      },
      {
        question: 'Quali sono i termini contrattuali e le opzioni di flessibilit\u00e0?',
        answer:
          'Offriamo retainer mensili flessibili con costi fissi e prevedibili. Zero commissioni nascoste, zero fatture a sorpresa. Puoi scalare il team verso l\u2019alto o il basso in base alle tue esigenze.',
      },
      {
        question: 'Qual \u00e8 la differenza tra Data Driven Team e Sviluppo Shopify?',
        answer:
          'Il Data-Driven Team \u00e8 un retainer mensile per brand con un eCommerce esistente che vogliono un team dedicato. Lo Sviluppo Shopify \u00e8 un progetto completo di costruzione dello store per brand che partono da zero o vogliono finalmente farlo bene.',
      },
      {
        question: 'Chi sar\u00e0 il mio principale punto di contatto e come viene gestita la comunicazione?',
        answer:
          'Il tuo eCommerce Manager \u00e8 il tuo unico punto di riferimento. Guida il tuo team dedicato e gestisce tutta la comunicazione, il reporting e le decisioni strategiche.',
      },
      {
        question: 'Come funziona il processo di onboarding e quanto tempo richiede?',
        answer:
          'L\u2019onboarding richiede una o due settimane e include un audit iniziale, setup del team, integrazione degli strumenti e un kickoff sprint. Sarai pienamente operativo entro il primo mese.',
      },
      {
        question: 'Garantite risultati o rimborsi?',
        answer:
          'Offriamo una garanzia 100% Risk-Free sul piano Sviluppo Shopify. Se non manteniamo quanto promesso, ottieni un rimborso completo. Il piano Data-Driven Team include uno sconto trial per i nuovi clienti.',
      },
      {
        question: 'Lavorate anche con brand nuovi che non hanno ancora un eCommerce?',
        answer:
          'S\u00ec. Il piano Sviluppo Shopify copre i brand che partono da zero, dal design al lancio e oltre. Costruiamo l\u2019intera infrastruttura eCommerce dalle fondamenta.',
      },
      {
        question: 'Cosa \u00e8 incluso (e cosa no) nel lavoro del vostro team?',
        answer:
          'Incluso: sviluppo, design, dati e analytics, gestione advertising a pagamento, email marketing e SEO. Non incluso: fotografia di prodotto, produzione di contenuti o gestione influencer. Ci concentriamo su ci\u00f2 che genera crescita tecnica e di fatturato.',
      },
    ],
  },
  cta: {
    heading: "Pronto a risolvere",
    headingSub: "ciò che ti ",
    headingEm: "frena",
    headingPost: '?',
    buttonLabel: 'Prenota una call',
    availability: 'Slot disponibili',
  },
  footer: {
    headingPre: 'Consistency\nThat\u2019s ',
    headingEm: 'noprobagency',
    description:
      'Costruiamo, miglioriamo e facciamo crescere il tuo eCommerce su Shopify, con un team dedicato in sviluppo, marketing e strategia. Insieme o separatamente, in base alle tue esigenze.',
    links: [
      { label: 'AI Accelerator', href: '/it/ai-accelerator' },
      { label: 'Chi Siamo', href: '/it/chi-siamo' },
      { label: 'Casi Studio', href: '/it/casi-studio' },
      { label: 'Blog', href: '/it/blog' },
      { label: 'Contatti', href: '/it/contatti' },
    ],
    privacyPolicy: 'Privacy Policy',
    cookiePolicy: 'Cookie Policy',
  },
  seo: {
    home: { title: 'Agenzia Shopify per Brand eCommerce | noprob agency™', description: 'Partner tecnico Shopify per brand fashion, integratori e DTC. Sviluppo, migrazione e gestione eCommerce con un team dedicato a lungo termine.' },
    about: { title: 'Chi Siamo: partner tecnico eCommerce', description: 'Il team dietro NoProb. Partner tecnico Shopify che aiuta i brand B2C a scalare con sviluppo, migrazioni e team dedicati in retainer.' },
    contacts: { title: 'Contattaci: prenota una call', description: 'Apri una conversazione con NoProb. Prenota una call per costruire il tuo eCommerce su Shopify o attivare un team dedicato a lungo termine.' },
    blog: { title: 'Blog Shopify, eCommerce e Crescita', description: 'Guide e articoli su sviluppo Shopify, migrazioni, tracking server-side e CRO per brand fashion, integratori e DTC. Scritti dal team tecnico NoProb.' },
    useCases: { title: "Casi d'Uso eCommerce e Risultati Reali", description: 'Risultati concreti da partnership Shopify a lungo termine. Come abbiamo fatto crescere brand fashion e DTC su fatturato, MER e operations eCommerce.' },
    dataDrivenTeam: { title: 'Retainer eCommerce Dedicato', description: 'Il tuo team eCommerce dedicato in retainer. Un solo interlocutore, un team completo dietro di te. Per brand Shopify che vogliono scalare.' },
    sviluppoShopify: { title: 'Sviluppo Shopify: creiamo il tuo eCommerce', description: 'Sviluppiamo il tuo eCommerce su Shopify dal design al tracciamento, ottimizzato per convertire dal primo giorno. Manutenzione a vita inclusa.' },
    migrazioneShopify: { title: 'Migrazione a Shopify senza perdere vendite', description: 'Migra il tuo eCommerce su Shopify in 4 mesi senza perdere vendite o clienti. Redirect 1:1, nessuna interruzione, un solo interlocutore. Garanzia 30 giorni.' },
    aiAccelerator: { title: 'AI Accelerator: sblocca con l’AI il collo di bottiglia della tua azienda', description: "Percorso one-to-one di 30 giorni: studiamo la tua azienda, mettiamo in fila le priorità e attacchiamo con l'AI il primo collo di bottiglia. Prezzo fisso." },
  },
  about: {
    hero: {
      trustLabel: 'Scelti da brand di Moda, Integratori e DTC eCommerce',
      h1pre: "Il tuo partner tecnico che rende l\u2019eCommerce ",
      h1em: 'semplice',
      body1: 'Un team 7/7 di sviluppatori, designer e strategist che unisce codice, dati e creativit\u00e0 per aiutare i brand Shopify a scalare senza stress.',
      body2: 'Non siamo un\u2019agenzia a cui \u201cdelegare l\u2019esecuzione\u201d, diventiamo parte del tuo progetto a 360\u00b0.',
    },
    principles: {
      heading: 'Non lavoriamo con chiunque. Ogni progetto deve essere allineato a questi tre principi:',
      card1Title: 'Integrazione fluida e team consolidato',
      card1Body: 'Ci integriamo direttamente nella tua struttura con workflow allineati, specialisti verificati e una metodologia che funziona. Lavorerai con un team stabile e coeso, costruito su partnership di crescita di lungo periodo. Quando serve, attiviamo anche il talento giusto per le esigenze specifiche del tuo eCommerce.',
      card2Title: 'Visione a lungo termine e focus strategico',
      card2Body: 'Siamo costruiti per brand Fashion, Integratori e DTC. Il nostro approccio valorizza la qualit\u00e0 sopra il rumore: crescita stabile, decisioni guidate dai dati, un partner strategico costante nel tempo. Il nostro obiettivo per il 2026? Essere il partner di performance pi\u00f9 affidabile nel tuo settore.',
      card3Title: 'Sostanza, stabilit\u00e0 ed esperienza',
      card3Body1: 'Con oltre 7 anni di esecuzione internazionale e un modello basato su costi fissi e prevedibili, ti aiutiamo a scalare senza sorprese sui margini. Niente fuffa, solo infrastruttura, strategia e talenti nativi del settore.',
      card3Body2: 'Per questo lavoriamo esclusivamente con un gruppo selezionato di brand.',
    },
    testimonials: {
      heading: 'Scelti da imprenditori affermati',
      items: [
        {
          name: 'Antonio Cali',
          role: 'Sfogliate&Sfogliatelle - DTC eCommerce Owner',
          image: '/images/originals/5ZClDWRqPVst2zJqghXyG33cMY0.png',
          quote: "Collaborare con NoProb Agency per lo sviluppo del nostro eCommerce \u00e8 stata un\u2019esperienza estremamente positiva. Fin dalle prime fasi del progetto, il team si \u00e8 distinto per chiarezza nella comunicazione, competenza tecnica e capacit\u00e0 di ascolto. Ogni passaggio, dalla progettazione grafica al go-live, \u00e8 stato gestito con professionalit\u00e0\u2026",
        },
        {
          name: 'Camilla Dudine',
          role: 'DDglobal Store - B2B eCommerce Owner',
          image: '/images/originals/btYlkzRXpOBFU8seMDbnX8BY8.jpeg',
          quote: 'Collaborare con Antonio per la creazione del nostro sito eCommerce \u00e8 stata un\u2019esperienza estremamente positiva. Ha dimostrato grande professionalit\u00e0, competenza tecnica e una notevole attenzione al dettaglio, riuscendo a trasformare le nostre idee in un eCommerce funzionale, moderno e performante.',
        },
      ],
    },
  },
}

const dictionaries = { en, it } as const

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale]
}
