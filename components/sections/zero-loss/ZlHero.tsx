import Image from 'next/image'

import PartnerLogos from '@/components/ui/PartnerLogos'
import { siteAssets, TRUSTPILOT_URL } from '@/lib/site'
import type { ZlCopy } from '@/content/zero-loss-migration'
import ZlCta from './ZlCta'

function TrustpilotBadge({ score, label }: { score: string; label: string }) {
  return (
    <a
      href={TRUSTPILOT_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 whitespace-nowrap no-underline transition-opacity hover:opacity-80"
    >
      <Image src={siteAssets.trustpilotWordmark} alt="Trustpilot" width={72} height={16} className="h-4 w-auto object-contain" />
      <span className="font-sans text-[13px] font-semibold tracking-[-0.03em] text-np-green-trust">{score}</span>
      <span className="font-sans text-[12px] font-medium tracking-[-0.03em] text-np-grey">{label}</span>
    </a>
  )
}

/**
 * Hand-drawn style annotation in the brand serif italic with a curved arrow.
 * The arrow always opens the note. On phones the note sits under the H1 and
 * the arrow points up at the claim; from 810px it sits top right above the H1,
 * pushed right so it sticks out past the end of the claim, and the arrow is
 * flipped to point down. Inline SVG (no asset).
 */
function ProofNote({ label }: { label: string }) {
  return (
    <a
      href="#prove"
      className="group mt-3 flex w-fit items-center gap-[0.2em] font-serif text-[15px] font-normal italic leading-[1.25em] tracking-[-0.02em] text-np-green-trust no-underline [transform:rotate(-2deg)] min-[810px]:order-first min-[810px]:mb-2 min-[810px]:ml-auto min-[810px]:mt-0 min-[810px]:text-[clamp(15px,1.6vw,22px)] min-[810px]:[transform:translateX(12%)_rotate(-2deg)]"
    >
      <svg
        aria-hidden
        viewBox="0 0 32 32"
        className="h-[1.35em] w-[1.35em] shrink-0 transition-transform duration-300 group-hover:-translate-x-[2px] group-hover:-translate-y-[2px] min-[810px]:-scale-y-100 min-[810px]:group-hover:translate-y-[2px]"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M27 27c-7-1-15-7-20-19" />
        <path d="M5.3 15.8 7 8l6.8 4.3" />
      </svg>
      <span className="underline-offset-[0.18em] group-hover:underline">{label}</span>
    </a>
  )
}

/** The electric "AI" at the end of the claim: blue gradient text with a soft
 *  shimmer and a small pulsing spark, styles in `.np-ai-electric` (app/globals.css). */
function AiWord({ word }: { word: string }) {
  return (
    <span className="np-ai-electric">
      {word}
      <svg aria-hidden viewBox="0 0 16 16" className="np-ai-badge-spark np-ai-electric-spark">
        <path d="M8 1Q8.9 7.1 15 8Q8.9 8.9 8 15Q7.1 8.9 1 8Q7.1 7.1 8 1Z" fill="currentColor" />
      </svg>
    </span>
  )
}

/** "Il tuo eCommerce su Shopify in 14 giorni. Più posizioni su Google, più vendite, più AI." →
 *  lead = first sentence, claim = the rest. */
function splitHeadline(h1: string): { lead: string; claim: string } {
  const cut = h1.indexOf('. ')
  return cut === -1 ? { lead: '', claim: h1 } : { lead: h1.slice(0, cut + 2), claim: h1.slice(cut + 2) }
}

/** "Più posizioni su Google, più vendite, più AI." with "AI" electric. */
function Claim({ claim }: { claim: string }) {
  return <>{claim.split(/(AI)/).map((part, i) => (part === 'AI' ? <AiWord key={i} word={part} /> : part))}</>
}

export default function ZlHero({ copy }: { copy: ZlCopy['hero'] }) {
  const { lead, claim } = splitHeadline(copy.h1)
  return (
    <section className="overflow-x-clip pt-10 min-[810px]:pt-16">
      <div className="container-noprob">
        <span className="np-eyebrow !normal-case">{copy.eyebrow}</span>

        {/* H1 in two parts. From 810px the claim ("Più posizioni su Google, più
            vendite, più AI.") is its own line and never wraps: the font size scales
            with the viewport so it always fits (the IT claim is ~16.4em wide, the
            container 78px narrower than the viewport, max 1128px). On phones it
            wraps normally. The wrapper is as wide as the H1, so the proof note
            can sit top right, above the end of the claim. */}
        <div className="mt-6 min-[810px]:flex min-[810px]:w-fit min-[810px]:flex-col">
          <h1 className="font-display text-[2.2rem] font-semibold leading-[1.02em] tracking-[-0.06em] text-np-dark min-[810px]:text-[clamp(2rem,calc((100vw-78px)/17.1),4.2rem)]">
            {lead}
            <span className="min-[810px]:block min-[810px]:whitespace-nowrap">
              <Claim claim={claim} />
            </span>
          </h1>
          <ProofNote label={copy.proofNote} />
        </div>

        <p className="mt-4 max-w-[760px] font-sans text-[17px] font-medium leading-[1.45em] tracking-[-0.02em] text-np-text min-[810px]:text-[19px]">
          {copy.paragraph}
        </p>

        <div className="mt-8 flex flex-col items-start gap-3 min-[810px]:flex-row min-[810px]:items-center min-[810px]:gap-4">
          <div className="flex flex-col items-start gap-[6px]">
            <ZlCta label={copy.ctaPrimary} position="hero" />
            <span className="pl-1 font-sans text-[12px] font-medium tracking-[-0.03em] text-np-grey">{copy.ctaNote}</span>
          </div>
          <a href="#prove" className="button-secondary min-[810px]:self-start">
            {copy.ctaSecondary}
          </a>
        </div>

        {/* Partner logos, fixed (no marquee), right under the two CTAs */}
        <div className="mt-10 border-t border-black/[0.06] pt-6 min-[810px]:mt-12">
          <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2">
            <p className="font-sans text-[13px] font-medium tracking-[-0.03em] text-np-dark min-[810px]:text-[14px]">{copy.logosLabel}</p>
            <TrustpilotBadge score={copy.trustpilotScore} label={copy.trustpilotLabel} />
          </div>
          <PartnerLogos className="mt-5 max-w-[720px] justify-items-start" />
        </div>
      </div>
    </section>
  )
}
