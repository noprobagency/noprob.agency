import { parseInline } from '@/components/article/renderSection'
import { type Locale } from '@/lib/i18n'
import { getAgentsCopy } from '@/lib/i18n/agentsEcommerce'

/** Chatbot, workflow, AI agent: what each does and where it stops. */
export default function AgentsContrast({ locale }: { locale: Locale }) {
  const d = getAgentsCopy(locale).contrast
  const lastIndex = d.rows.length - 1

  return (
    <section className="px-5 py-10 min-[810px]:px-9 min-[810px]:py-14">
      <div className="mx-auto max-w-[1000px]">
        <h2 className="text-np-h2 max-w-[760px] text-np-dark">{d.heading}</h2>
        <p className="mt-4 max-w-[760px] font-sans text-body-lg font-medium text-noprob-text">
          {parseInline(d.intro)}
        </p>
        <div className="mt-8 grid gap-4 min-[810px]:grid-cols-3">
          {d.rows.map((row, i) => (
            <div
              key={row.label}
              className={
                i === lastIndex
                  ? 'flex flex-col gap-3 rounded-card border-2 border-[#121212] bg-white p-6'
                  : 'flex flex-col gap-3 rounded-card border-2 border-[#d6d6d6] bg-[#f6f6f6] p-6'
              }
            >
              <h3 className="font-display text-[22px] font-semibold tracking-[-0.04em] text-np-dark">{row.label}</h3>
              <p className="font-sans text-[16px] font-medium leading-[1.5em] text-np-dark">{parseInline(row.does)}</p>
              <p className="font-sans text-[15px] font-medium leading-[1.5em] text-noprob-grey">{row.limit}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
