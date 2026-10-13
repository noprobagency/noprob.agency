import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'cdn.sanity.io' },
      { protocol: 'https', hostname: 'framerusercontent.com' },
    ],
    formats: ['image/avif', 'image/webp'],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
    ]
  },
  async redirects() {
    return [
      // Shopify Launch Sprint landing renamed (zero-loss-migration -> sprint slugs)
      { source: '/zero-loss-migration', destination: '/shopify-migration-sprint', permanent: true },
      { source: '/zero-loss-migration/apply', destination: '/shopify-migration-sprint/apply', permanent: true },
      { source: '/it/zero-loss-migration', destination: '/it/sprint-migrazione-shopify', permanent: true },
      { source: '/it/zero-loss-migration/candidatura', destination: '/it/sprint-migrazione-shopify/candidatura', permanent: true },
      // Nazzi case study renamed (Farmacia Nazzi -> Integratori Nazzi DTC)
      { source: '/use-cases/farmacia-nazzi-integratori-shopify', destination: '/use-cases/integratori-nazzi-dtc-shopify', permanent: true },
      { source: '/it/casi-studio/farmacia-nazzi-integratori-shopify', destination: '/it/casi-studio/integratori-nazzi-dtc-shopify', permanent: true },
      // Legacy English-named IT paths -> SEO-optimized Italian slugs
      { source: '/it/about',                  destination: '/it/chi-siamo',                permanent: true },
      { source: '/it/about/:path*',           destination: '/it/chi-siamo/:path*',         permanent: true },
      { source: '/it/use-cases',              destination: '/it/casi-studio',              permanent: true },
      { source: '/it/use-cases/:path*',       destination: '/it/casi-studio/:path*',       permanent: true },
      { source: '/it/contacts',               destination: '/it/contatti',                 permanent: true },
      { source: '/it/data-driven-team',       destination: '/it/team-ecommerce-dedicato',  permanent: true },
      { source: '/it/data-driven-team/:path*',destination: '/it/team-ecommerce-dedicato/:path*', permanent: true },
      { source: '/it/ecommerce-rebuild',      destination: '/it/sviluppo-shopify',         permanent: true },
      { source: '/it/ecommerce-rebuild/:path*',destination: '/it/sviluppo-shopify/:path*',  permanent: true },
      // Rebuild page repositioned as Shopify Development (slug + intent change)
      { source: '/it/rifacimento-ecommerce',  destination: '/it/sviluppo-shopify',         permanent: true },
      { source: '/it/rifacimento-ecommerce/:path*', destination: '/it/sviluppo-shopify/:path*', permanent: true },
      { source: '/ecommerce-rebuild',         destination: '/shopify-development',          permanent: true },
      { source: '/ecommerce-rebuild/:path*',  destination: '/shopify-development/:path*',   permanent: true },
      // Misclassified content moved from use-cases to blog (single-hop to current slug)
      { source: '/use-cases/ecommerce-growth-secrets',         destination: '/blog/ecommerce-growth-strategy-long-term', permanent: true },
      { source: '/it/casi-studio/ecommerce-growth-secrets',    destination: '/it/blog/strategia-ecommerce-long-term',    permanent: true },
      // Blog post slugs rebranded to SEO-optimized (every historical slug points
      // directly at the current slug - no redirect chains)
      { source: '/blog/ecommerce-growth-secrets',              destination: '/blog/ecommerce-growth-strategy-long-term', permanent: true },
      { source: '/blog/ecommerce-long-term-strategy',          destination: '/blog/ecommerce-growth-strategy-long-term', permanent: true },
      { source: '/it/blog/ecommerce-growth-secrets',           destination: '/it/blog/strategia-ecommerce-long-term',    permanent: true },
      // Defensive: any IT visitor hitting /it/thank-you lands on the IT page
      { source: '/it/thank-you',                               destination: '/it/grazie',                                permanent: true },
    ]
  },
}

export default nextConfig
