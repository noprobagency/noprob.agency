import { parseInline } from '@/components/article/renderSection'
import { type Locale } from '@/lib/i18n'
import { getAgentsCopy } from '@/lib/i18n/agentsEcommerce'

/** Daily practice with agents: short statement, no figures. */
export default function AgentsProof({ locale }: { locale: Locale }) {
  const d = getAgentsCopy(locale).proof

  return (
    <section className="px-5 py-10 min-[810px]:px-9 min-[810px]:py-14">
      <div className="mx-auto max-w-[1000px] rounded-card border-2 border-[#d6d6d6] bg-[#f0f0f0] p-6 min-[810px]:p-10">
        <h2 className="text-np-h2 max-w-[760px] text-np-dark">{d.heading}</h2>
        <p className="mt-4 max-w-[760px] font-sans text-body-lg font-medium text-noprob-text">
          {parseInline(d.body)}
        </p>
      </div>
    </section>
  )
}
