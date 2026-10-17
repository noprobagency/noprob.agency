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

        <div className="mt-6 max-w-[1040px] xl:max-w-none">
          <h1 className="font-display text-[2.2rem] font-semibold leading-[1.02em] tracking-[-0.06em] text-np-dark min-[810px]:text-[3.6rem] lg:text-[4.2rem]">
            {copy.h1}
          </h1>
        </div>

        {/* Proof strip: the claim under the H1 is social proof, so it is a card
            with the two verified results and a link to the charts. Plain flex +
            wrap: one line on desktop, three stacked rows on phones. */}
        <a
          href="#prove"
          className="group mt-5 inline-flex max-w-full flex-wrap items-center gap-x-4 gap-y-2 rounded-[18px] border border-black/[0.08] bg-white py-2 pl-3 pr-4 shadow-[0_1px_3px_rgba(0,0,0,0.06)] transition-[transform,box-shadow,border-color] hover:-translate-y-[1px] hover:border-black/20 hover:shadow-[0_6px_18px_rgba(0,0,0,0.08)] min-[810px]:mt-6 min-[810px]:rounded-full min-[810px]:py-2 min-[810px]:pl-4 min-[810px]:pr-5"
        >
          <span className="inline-flex items-center gap-2 font-sans text-[14px] font-semibold tracking-[-0.03em] text-np-dark min-[810px]:text-[15px]">
            <span aria-hidden className="relative inline-flex h-[10px] w-[10px] shrink-0">
              <span className="absolute inset-0 animate-ping rounded-full bg-[#1dcc5d] opacity-60 motion-reduce:hidden" />
              <span className="relative inline-flex h-[10px] w-[10px] rounded-full bg-[#1dcc5d]" />
            </span>
            {copy.proofNote}
          </span>
          <span className="flex flex-wrap items-center gap-2">
            {copy.proofStats.map((stat) => (
              <span
                key={stat.value}
                className="inline-flex items-baseline gap-[6px] rounded-full bg-np-bg px-3 py-[5px] font-sans text-[12px] font-medium tracking-[-0.02em] text-np-grey min-[810px]:text-[13px]"
              >
                <span className="font-display text-[15px] font-bold tracking-[-0.04em] text-np-dark min-[810px]:text-[16px]">{stat.value}</span>
                {stat.label}
              </span>
            ))}
          </span>
          <span className="ml-auto inline-flex items-center gap-1 font-sans text-[13px] font-semibold tracking-[-0.02em] text-np-dark underline-offset-4 group-hover:underline min-[810px]:ml-0">
            {copy.proofCta}
            <span aria-hidden className="transition-transform group-hover:translate-x-[2px]">→</span>
          </span>
        </a>

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
