import { parseInline } from '@/components/article/renderSection'
import { type Locale } from '@/lib/i18n'
import { getShopifySeoCopy } from '@/lib/i18n/shopifySeo'

/** What Shopify fixes on its own and what we do about it: one card per topic. */
export default function ShopifySeoWhy({ locale }: { locale: Locale }) {
  const d = getShopifySeoCopy(locale).why

  return (
    <section className="px-5 py-10 min-[810px]:px-9 min-[810px]:py-14">
      <div className="mx-auto max-w-[1000px]">
        <h2 className="text-np-h2 max-w-[760px] text-np-dark">{d.heading}</h2>
        <p className="mt-4 max-w-[760px] font-sans text-body-lg font-medium text-noprob-text">
          {parseInline(d.intro)}
        </p>
        <div className="mt-8 grid gap-4 min-[810px]:grid-cols-2">
          {d.rows.map((row) => (
            <div key={row.label} className="flex flex-col gap-3 rounded-card border-2 border-[#d6d6d6] bg-[#f6f6f6] p-6">
              <h3 className="font-display text-[22px] font-semibold tracking-[-0.04em] text-np-dark">{row.label}</h3>
              <p className="font-sans text-[15px] font-medium leading-[1.5em] text-noprob-grey">{parseInline(row.problem)}</p>
              <p className="font-sans text-[16px] font-medium leading-[1.5em] text-np-dark">{parseInline(row.whatWeDo)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
