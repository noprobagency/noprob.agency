import { parseInline } from '@/components/article/renderSection'
import { type Locale } from '@/lib/i18n'
import { getAgentsCopy } from '@/lib/i18n/agentsEcommerce'

/** How an AI agent integration runs: numbered steps. */
export default function AgentsMethod({ locale }: { locale: Locale }) {
  const d = getAgentsCopy(locale).method

  return (
    <section className="px-5 py-10 min-[810px]:px-9 min-[810px]:py-14">
      <div className="mx-auto max-w-[1000px]">
        <h2 className="text-np-h2 max-w-[760px] text-np-dark">{d.heading}</h2>
        <ol className="mt-8 flex flex-col">
          {d.steps.map((step, i) => (
            <li
              key={step.title}
              className="grid grid-cols-[44px_1fr] gap-4 border-t border-[#d6d6d6] py-6 last:border-b min-[810px]:grid-cols-[64px_300px_1fr] min-[810px]:gap-8"
            >
              <span className="font-display text-[28px] font-semibold leading-none tracking-[-0.05em] text-np-dark min-[810px]:text-[36px]">
                {i + 1}
              </span>
              <h3 className="font-display text-[20px] font-semibold leading-[1.2em] tracking-[-0.04em] text-np-dark min-[810px]:text-[22px]">
                {step.title}
              </h3>
              <p className="col-start-2 font-sans text-[16px] font-medium leading-[1.55em] text-noprob-text min-[810px]:col-start-auto">
                {parseInline(step.body)}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
