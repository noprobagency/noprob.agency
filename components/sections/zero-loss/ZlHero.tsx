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

export default function ZlHero({ copy }: { copy: ZlCopy['hero'] }) {
  return (
    <section className="pt-10 min-[810px]:pt-16">
      <div className="container-noprob">
        <span className="np-eyebrow !normal-case">{copy.eyebrow}</span>

        {/* H1 + hand-drawn note under it: the arrow points up at the last line
            ("più vendite." / "more sales."), same doodles as the other LPs. Block
            layout, so it never depends on where the H1 wraps. */}
        <div className="mt-6 max-w-[1040px] xl:max-w-none">
          <h1 className="font-display text-[2.2rem] font-semibold leading-[1.02em] tracking-[-0.06em] text-np-dark min-[810px]:text-[3.6rem] lg:text-[4.2rem]">
            {copy.h1}
          </h1>
          <a href="#prove" className="group mt-1 inline-flex items-end gap-3 pl-[6px] min-[810px]:pl-3">
            <span aria-hidden className="relative block h-[44px] w-[30px] shrink-0 min-[810px]:h-[52px] min-[810px]:w-[34px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/doddle-2.svg"
                alt=""
                className="absolute left-1/2 top-1/2 h-[28px] w-auto max-w-none -translate-x-1/2 -translate-y-1/2 -rotate-[78deg] opacity-50 min-[810px]:h-[32px]"
              />
            </span>
            <span className="relative mb-[2px] inline-block px-[10px] py-[6px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/doddle-1.svg"
                alt=""
                aria-hidden
                className="pointer-events-none absolute inset-0 h-full w-full max-w-none object-fill opacity-40 transition-opacity group-hover:opacity-70"
              />
              <span className="relative whitespace-nowrap font-sans text-[12px] font-medium leading-[1.4em] tracking-[-0.02em] text-[#363636] min-[810px]:text-[13px]">
                {copy.proofNote}
              </span>
            </span>
          </a>
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
