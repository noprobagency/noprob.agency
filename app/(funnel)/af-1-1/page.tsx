import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import ApplicationFunnel from '@/components/funnel/ApplicationFunnel'
import PartnerLogos from '@/components/ui/PartnerLogos'
import { siteAssets } from '@/lib/site'
import { ROUTE_PATHS } from '@/lib/i18n/routes'

export const metadata: Metadata = {
  title: 'Candidatura | Step 1',
  description:
    'Candidati per una call con noprob: il team eCommerce dedicato per brand Shopify di Moda, Integratori e DTC.',
  robots: { index: false, follow: false },
}

const PRIVACY_URL = ROUTE_PATHS.privacyPolicy.it
const COOKIE_URL = ROUTE_PATHS.cookiePolicy.it

function Stars({ size = 12 }: { size?: number }) {
  return (
    <span className="flex items-center gap-[1px]" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width={size} height={size} viewBox="0 0 24 24" fill="rgb(36,143,98)">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </span>
  )
}

export default function Af11Page() {
  return (
    <div className="relative min-h-screen overflow-x-clip">
      {/* Soft brand blobs (green / purple marks) */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-[180px] -top-[160px] h-[520px] w-[520px] rounded-full bg-np-mark-green opacity-70 blur-[110px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-[200px] top-[520px] h-[560px] w-[560px] rounded-full bg-np-mark-purple opacity-70 blur-[120px]"
      />

      {/* Floating header */}
      <header className="sticky top-3 z-40 px-3 min-[810px]:px-5">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between rounded-[16px] border border-np-border bg-white/90 px-4 py-[10px] shadow-[0_4px_20px_rgba(0,0,0,0.06)] backdrop-blur-md min-[810px]:px-6">
          <Link href="/it" aria-label="noprob agency" className="inline-flex h-[28px] items-center min-[810px]:h-[32px]">
            <Image
              src={siteAssets.logoBlack}
              alt="noprob agency logo"
              width={128}
              height={32}
              className="h-full w-auto"
              priority
            />
          </Link>
          <a href="#candidatura" data-tracking="af11_header_cta" className="button-header">
            Prenota una call
          </a>
        </div>
      </header>

      <main className="relative z-10 px-4 pb-16 pt-12 min-[810px]:pt-16">
        {/* Hero */}
        <section className="relative mx-auto flex max-w-[860px] flex-col items-center text-center">
          <Image
            src="/images/doddle-1.svg"
            alt=""
            aria-hidden
            width={90}
            height={90}
            className="pointer-events-none absolute -left-4 top-[110px] hidden w-[70px] opacity-80 min-[810px]:block"
          />
          <Image
            src="/images/doddle-2.svg"
            alt=""
            aria-hidden
            width={90}
            height={90}
            className="pointer-events-none absolute -right-2 top-[20px] hidden w-[80px] opacity-80 min-[810px]:block"
          />

          {/* Social proof pill */}
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              {[siteAssets.heroAntonio, '/images/originals/btYlkzRXpOBFU8seMDbnX8BY8.jpeg'].map((src) => (
                <Image
                  key={src}
                  src={src}
                  alt=""
                  width={30}
                  height={30}
                  className="h-[30px] w-[30px] rounded-full border-2 border-white object-cover"
                />
              ))}
            </div>
            <div className="flex items-center gap-[6px] rounded-pill border border-np-border-pill bg-white px-3 py-[5px]">
              <Stars />
              <span className="font-sans text-[12px] font-semibold tracking-[-0.03em] text-np-dark">
                5/5 su Trustpilot
              </span>
            </div>
          </div>

          <h1 className="mt-6 font-display text-[34px] font-semibold leading-[1.1em] tracking-[-0.06em] text-black min-[810px]:text-[3.6rem]">
            Il team eCommerce dedicato che fa crescere il tuo Shopify,{' '}
            <em className="relative whitespace-nowrap font-serif font-semibold italic">
              mese dopo mese
              <span
                aria-hidden
                className="absolute inset-x-0 bottom-[0.06em] -z-10 h-[0.32em] rounded-[4px] bg-np-mark-green"
              />
            </em>
            .
          </h1>

          <p className="mt-5 max-w-[340px] font-sans min-[810px]:max-w-none text-[15px] font-medium leading-[1.4em] tracking-[-0.02em] text-np-text min-[810px]:text-[18px]">
            <span aria-hidden>🔒 </span>
            <strong className="font-semibold text-black">Non sei soddisfatto nei primi 30 giorni? Ti rimborsiamo.</strong>{' '}
            <span className="text-np-grey">Semplice.</span>
          </p>

          <p className="mt-4 flex items-center gap-2 font-sans text-[13px] font-medium tracking-[-0.02em] text-np-grey">
            <span className="hidden h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full bg-white min-[810px]:flex shadow-[0_1px_3px_rgba(0,0,0,0.1)]">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#121212" strokeWidth="2" aria-hidden>
                <rect x="3" y="4" width="18" height="18" rx="2" />
                <path d="M16 2v4M8 2v4M3 10h18M9 16l2 2 4-4" />
              </svg>
            </span>
            Rispondi alle domande qui sotto, così arriviamo alla call già preparati.
          </p>
        </section>

        {/* Application form */}
        <section className="mx-auto mt-10 max-w-[760px]">
          <ApplicationFunnel source="af-1-1" />
        </section>

        {/* Trust block */}
        <section className="mx-auto mt-14 flex max-w-[720px] flex-col items-center gap-5 text-center">
          <p className="font-sans text-[13px] font-medium tracking-[-0.03em] text-np-dark">
            Scelti da brand di Moda, Integratori e DTC eCommerce
          </p>
          <div className="w-full max-w-[420px]">
            <PartnerLogos />
          </div>
          <h2 className="mt-6 font-display text-[26px] font-semibold leading-[1.15em] tracking-[-0.05em] text-black min-[810px]:text-[2.2rem]">
            Non l’ennesimo fornitore: un solo partner per sviluppo, dati e crescita del tuo{' '}
            <em className="font-serif font-semibold italic">eCommerce</em>.
          </h2>
          <p className="font-sans text-[14px] font-medium tracking-[-0.02em] text-np-grey">
            (Garanzia 30 giorni: se non sei convinto, ti rimborsiamo. Nessuna domanda.)
          </p>
          <div className="flex items-center gap-2">
            <Stars size={14} />
            <span className="font-sans text-[13px] font-semibold tracking-[-0.03em] text-np-green-trust">
              10 recensioni a 5 stelle su Trustpilot
            </span>
          </div>
          <a href="#candidatura" data-tracking="af11_bottom_cta" className="button-principal mt-2">
            Candidati ora
          </a>
        </section>
      </main>

      <footer className="relative z-10 border-t border-np-border px-4 py-6">
        <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-2 text-center font-sans text-[12px] font-medium tracking-[-0.02em] text-np-grey min-[810px]:flex-row">
          <p>noprob agency™ è un marchio di NOPROB AGENCY LLC® • © Tutti i diritti riservati · EIN 365136989</p>
          <div className="flex gap-4">
            <a href={PRIVACY_URL} target="_blank" rel="noopener noreferrer" className="hover:text-black">
              Privacy Policy
            </a>
            <a href={COOKIE_URL} target="_blank" rel="noopener noreferrer" className="hover:text-black">
              Cookie Policy
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
