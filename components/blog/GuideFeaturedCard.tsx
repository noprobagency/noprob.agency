import Image from 'next/image'
import Link from 'next/link'

import type { MigrazioneBlogCard } from '@/lib/i18n/migrazione'

/**
 * Featured card at the top of the blog listings. Same card style as the
 * article cards (6px #f8f8f8 border, 24px radius, soft shadow), laid out
 * as a wide row on desktop.
 */
export default function GuideFeaturedCard({ card }: { card: MigrazioneBlogCard }) {
  return (
    <Link
      href={card.href}
      className="group grid overflow-hidden rounded-[24px] bg-white no-underline lg:grid-cols-2"
      style={{
        border: '6px solid #f8f8f8',
        boxShadow:
          'rgba(108, 113, 128, 0.08) 0px 2px 4px 0px, rgba(108, 113, 128, 0.07) 0px 7px 7px 0px, rgba(108, 113, 128, 0.04) 0px 17px 10px 0px, rgba(108, 113, 128, 0.01) 0px 29px 12px 0px, rgba(108, 113, 128, 0) 0px 46px 13px 0px',
      }}
    >
      <div className="relative w-full overflow-hidden rounded-[16px_16px_0_0] bg-[#f5f5f5] lg:rounded-[16px_0_0_16px]">
        <div className="relative w-full" style={{ aspectRatio: '1200/630' }}>
          <Image
            src={card.image}
            alt={card.imageAlt}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 600px"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
          />
        </div>
        <div
          className="absolute left-4 top-4 flex items-center rounded-full px-3 py-1"
          style={{ backdropFilter: 'blur(24px)', backgroundColor: '#f0f0f0' }}
        >
          <span className="font-sans text-[12px] font-medium tracking-[-0.03em] text-[#181818]">
            {card.pill}
          </span>
        </div>
      </div>

      <div className="flex flex-col justify-center gap-3 p-5 lg:p-8">
        <h2 className="font-sans text-[22px] font-semibold leading-[1.25em] tracking-[-0.02em] text-black lg:text-[28px]">
          {card.title}
        </h2>
        <p
          className="font-sans text-[14px] font-medium leading-[1.4em] tracking-[-0.02em] lg:text-[16px]"
          style={{ color: '#7c7c7c' }}
        >
          {card.description}
        </p>
        <span className="font-sans text-[14px] font-semibold tracking-[-0.02em] text-black underline-offset-4 group-hover:underline">
          {card.cta}
        </span>
      </div>
    </Link>
  )
}
