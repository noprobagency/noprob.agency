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

        {/* Inline H1 + hand-drawn note: the note follows "più vendite." on the same line
            when it fits (desktop) and wraps under it on small screens. */}
        <div className="mt-6 max-w-[1040px] xl:max-w-none">
          <h1 className="inline font-display text-[2.2rem] font-semibold leading-[1.02em] tracking-[-0.06em] text-np-dark min-[810px]:text-[3.6rem] lg:text-[4.2rem]">
            {copy.h1}
          </h1>
          <a
            href="#prove"
            className="group ml-1 mt-3 inline-flex items-start gap-2 align-bottom min-[810px]:ml-3 min-[810px]:mt-0 min-[810px]:align-[0.35em]"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/doddle-2.svg"
              alt=""
              aria-hidden
              className="mt-[-6px] h-[26px] w-auto -scale-x-100 rotate-[-12deg] opacity-50 min-[810px]:h-[31px]"
            />
            <span className="relative mt-[6px] inline-block px-1">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/doddle-1.svg"
                alt=""
                aria-hidden
                className="pointer-events-none absolute -bottom-[16px] -left-[18px] -right-[20px] -top-[11px] h-[calc(100%+27px)] w-[calc(100%+38px)] max-w-none opacity-40 transition-opacity group-hover:opacity-70"
              />
              <span className="relative whitespace-nowrap font-sans text-[12px] font-medium leading-[1.4em] tracking-[-0.02em] text-[#363636] min-[810px]:text-[13px]">
                {copy.proofNote}
              </span>
            </span>
          </a>
        </div>

        <p className="mt-6 max-w-[760px] font-sans text-[17px] font-medium leading-[1.45em] tracking-[-0.02em] text-np-text min-[810px]:text-[19px]">
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
