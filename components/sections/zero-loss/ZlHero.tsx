import Image from 'next/image'

import PartnerLogos from '@/components/ui/PartnerLogos'
import { siteAssets } from '@/lib/site'
import type { ZlCopy } from '@/content/zero-loss-migration'
import ZlCta from './ZlCta'

function TrustpilotBadge({ score, label }: { score: string; label: string }) {
  return (
    <span className="inline-flex items-center gap-2 whitespace-nowrap">
      <Image src={siteAssets.trustpilotWordmark} alt="Trustpilot" width={72} height={16} className="h-4 w-auto object-contain" />
      <span className="font-sans text-[13px] font-semibold tracking-[-0.03em] text-np-green-trust">{score}</span>
      <span className="font-sans text-[12px] font-medium tracking-[-0.03em] text-np-grey">{label}</span>
    </span>
  )
}

/**
 * Hand-drawn style annotation after the last word of the H1: a curved arrow
 * pointing back at the word, then the note in the brand serif italic. Inline
 * SVG (no asset), sized in em so it scales with the headline.
 */
function ProofNote({ label }: { label: string }) {
  return (
    <a
      href="#prove"
      className="group ml-[0.3em] inline-flex items-center gap-[0.12em] align-baseline font-serif text-[0.42em] font-normal italic tracking-[-0.02em] text-np-green-trust no-underline [transform:translateY(0.18em)_rotate(-2deg)] min-[810px]:text-[0.36em]"
    >
      <svg
        aria-hidden
        viewBox="0 0 32 32"
        className="h-[1.35em] w-[1.35em] shrink-0 transition-transform duration-300 group-hover:-translate-x-[2px] group-hover:-translate-y-[2px]"
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

/** "Il tuo eCommerce su Shopify in 14 giorni. Più posizioni su Google, più vendite." →
 *  lead = first sentence, claim = the rest; the note hooks to the claim's last word. */
function splitHeadline(h1: string): { lead: string; claimHead: string; claimLastWord: string } {
  const cut = h1.indexOf('. ')
  const lead = cut === -1 ? '' : h1.slice(0, cut + 2)
  const claim = cut === -1 ? h1 : h1.slice(cut + 2)
  const space = claim.trimEnd().lastIndexOf(' ')
  return { lead, claimHead: claim.slice(0, space + 1), claimLastWord: claim.slice(space + 1) }
}

export default function ZlHero({ copy }: { copy: ZlCopy['hero'] }) {
  const { lead, claimHead, claimLastWord } = splitHeadline(copy.h1)
  return (
    <section className="pt-10 min-[810px]:pt-16">
      <div className="container-noprob">
        <span className="np-eyebrow !normal-case">{copy.eyebrow}</span>

        {/* H1 in two parts: the claim ("Più posizioni su Google, più vendite.")
            carries the proof note. The note is inline, glued to the last word with
            `whitespace-nowrap`, so it always sits right after "vendite." / "sales."
            and wraps together with it: no absolute positioning, nothing to break. */}
        <div className="mt-6 max-w-[1040px] xl:max-w-none">
          <h1 className="font-display text-[2.2rem] font-semibold leading-[1.02em] tracking-[-0.06em] text-np-dark min-[810px]:text-[3.6rem] lg:text-[4.2rem]">
            {lead}
            {claimHead}
            <span className="whitespace-nowrap">
              {claimLastWord}
              <ProofNote label={copy.proofNote} />
            </span>
          </h1>
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
