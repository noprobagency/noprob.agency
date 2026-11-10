import Link from 'next/link'

import { parseInline } from '@/components/article/renderSection'
import { type Locale } from '@/lib/i18n'
import { getShopifySeoCopy } from '@/lib/i18n/shopifySeo'

/** Search Console results of a real store, as percentages with the period stated. */
export default function ShopifySeoProof({ locale }: { locale: Locale }) {
  const d = getShopifySeoCopy(locale).proof

  return (
    <section className="px-5 py-10 min-[810px]:px-9 min-[810px]:py-14">
      <div className="mx-auto max-w-[1000px] rounded-card border-2 border-[#d6d6d6] bg-[#f0f0f0] p-6 min-[810px]:p-10">
        <h2 className="text-np-h2 max-w-[760px] text-np-dark">{d.heading}</h2>
        <p className="mt-4 max-w-[760px] font-sans text-body-lg font-medium text-noprob-text">
          {parseInline(d.body)}
        </p>
        <div className="mt-8 grid gap-4 min-[810px]:grid-cols-2">
          {d.items.map((item) => (
            <div key={item.client} className="flex flex-col gap-3 rounded-card border-2 border-[#d6d6d6] bg-white p-6">
              <h3 className="font-display text-[20px] font-semibold leading-[1.2em] tracking-[-0.04em] text-np-dark">
                <Link
                  href={item.href}
                  className="underline decoration-[#1c1c1c]/40 underline-offset-4 transition-colors hover:decoration-[#1c1c1c]"
                >
                  {item.client}
                </Link>
              </h3>
              <p className="font-sans text-[16px] font-medium leading-[1.5em] text-np-dark">{item.result}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
