'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'

import { funnelSchema, type FunnelData } from '@/lib/schemas/funnel'
import { ROUTE_PATHS } from '@/lib/i18n/routes'

const PRIVACY_URL = ROUTE_PATHS.privacyPolicy.it
const THANK_YOU_PATH = '/it/grazie'

type Field = keyof Pick<
  FunnelData,
  'qualified' | 'firstName' | 'lastName' | 'email' | 'phone' | 'websiteUrl' | 'revenue' | 'reason'
>

type Step =
  | { kind: 'choice'; field: Field; title: string; hint?: string; options: { value: string; label: string }[] }
  | {
      kind: 'input'
      field: Field
      title: string
      hint?: string
      type: 'text' | 'email' | 'tel' | 'url'
      placeholder: string
      autoComplete?: string
    }
  | { kind: 'textarea'; field: Field; title: string; hint?: string; placeholder: string }

const STEPS: Step[] = [
  {
    kind: 'choice',
    field: 'qualified',
    title: 'Il tuo eCommerce fattura almeno 100.000 € all’anno?',
    hint: 'Se no, questa videochiamata oggi non fa per te: lavoriamo con brand già avviati che vogliono scalare.',
    options: [
      { value: 'si', label: 'Sì' },
      { value: 'no', label: 'No' },
    ],
  },
  { kind: 'input', field: 'firstName', title: 'Nome', type: 'text', placeholder: 'Scrivi qui la tua risposta...', autoComplete: 'given-name' },
  { kind: 'input', field: 'lastName', title: 'Cognome', type: 'text', placeholder: 'Scrivi qui la tua risposta...', autoComplete: 'family-name' },
  { kind: 'input', field: 'email', title: 'Email', type: 'email', placeholder: 'nome@brand.com', autoComplete: 'email' },
  {
    kind: 'input',
    field: 'phone',
    title: 'Qual è il tuo numero di cellulare?',
    hint: 'Ti scriviamo su WhatsApp solo per organizzare la videochiamata.',
    type: 'tel',
    placeholder: '+39 320 123 4567',
    autoComplete: 'tel',
  },
  { kind: 'input', field: 'websiteUrl', title: 'L’URL del tuo eCommerce', type: 'url', placeholder: 'www.tuobrand.com', autoComplete: 'url' },
  {
    kind: 'choice',
    field: 'revenue',
    title: 'Quanto ha fatturato online il tuo brand negli ultimi 12 mesi?',
    options: [
      { value: '< 100k', label: 'Meno di 100.000 €' },
      { value: '100k - 300k', label: 'Da 100.000 € a 300.000 €' },
      { value: '300k - 1M', label: 'Da 300.000 € a 1 milione' },
      { value: '1M - 3M', label: 'Da 1 a 3 milioni' },
      { value: '3M+', label: 'Oltre 3 milioni' },
    ],
  },
  {
    kind: 'textarea',
    field: 'reason',
    title: 'Raccontaci qualcosa del tuo brand e di cosa ti ha spinto a candidarti per questa videochiamata.',
    hint: '(Ci aiuta a capire se siamo il partner giusto e come possiamo esserti utili da subito)',
    placeholder: 'Scrivi qui la tua risposta',
  },
]

const LETTERS = 'ABCDEFGH'

type Values = Partial<Record<Field, string>>

export default function ApplicationFunnel({ source = 'af-1-1' }: { source?: string }) {
  const router = useRouter()
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(1)
  const [values, setValues] = useState<Values>({})
  const [privacy, setPrivacy] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [submitting, setSubmitting] = useState(false)
  const [disqualified, setDisqualified] = useState(false)
  const [hp, setHp] = useState('')
  const mountedAtRef = useRef<number>(Date.now())
  const inputRef = useRef<HTMLInputElement & HTMLTextAreaElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const step = STEPS[index]
  const isLast = index === STEPS.length - 1
  const value = values[step.field] ?? ''

  useEffect(() => {
    // Focus the field on step change, but not on first paint (keeps hero in view).
    if (index > 0) inputRef.current?.focus({ preventScroll: true })
  }, [index])

  function validate(field: Field, v: string): string | null {
    const res = funnelSchema.shape[field].safeParse(v)
    return res.success ? null : res.error.issues[0]?.message ?? 'Campo non valido'
  }

  function go(to: number) {
    setDirection(to > index ? 1 : -1)
    setError(null)
    setIndex(to)
  }

  async function submit(finalValues: Values) {
    const payload = {
      ...finalValues,
      privacy,
      source,
      hp,
      elapsedMs: Date.now() - mountedAtRef.current,
    }
    const parsed = funnelSchema.safeParse(payload)
    if (!parsed.success) {
      const first = parsed.error.issues[0]
      const badStep = STEPS.findIndex((s) => s.field === first?.path[0])
      if (badStep >= 0 && badStep !== index) go(badStep)
      setError(first?.message ?? 'Controlla i dati inseriti.')
      return
    }
    setSubmitting(true)
    setError(null)
    try {
      const res = await fetch('/api/funnel-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(parsed.data),
      })
      if (!res.ok) {
        const { error: msg } = (await res.json().catch(() => ({}))) as { error?: string }
        setError(msg ?? 'Qualcosa è andato storto. Riprova tra poco.')
        setSubmitting(false)
        return
      }
      router.push(THANK_YOU_PATH)
    } catch {
      setError('Connessione assente. Controlla la rete e riprova.')
      setSubmitting(false)
    }
  }

  function next(override?: string) {
    const v = override ?? value
    const err = validate(step.field, v)
    if (err) {
      setError(err)
      return
    }
    const nextValues = { ...values, [step.field]: v }
    setValues(nextValues)

    if (step.field === 'qualified' && v === 'no') {
      setDisqualified(true)
      return
    }
    if (isLast) {
      if (!privacy) {
        setError('Devi accettare la privacy policy per continuare.')
        return
      }
      void submit(nextValues)
      return
    }
    go(index + 1)
  }

  function choose(v: string) {
    setValues((prev) => ({ ...prev, [step.field]: v }))
    setError(null)
    // Short delay so the selected state is visible before advancing (Tally-like).
    window.setTimeout(() => next(v), 220)
  }

  function onKeyDown(e: React.KeyboardEvent) {
    if (step.kind === 'choice') {
      const i = LETTERS.indexOf(e.key.toUpperCase())
      if (i >= 0 && i < step.options.length) {
        e.preventDefault()
        choose(step.options[i].value)
      }
      return
    }
    if (e.key === 'Enter' && (step.kind === 'input' || e.metaKey || e.ctrlKey)) {
      e.preventDefault()
      next()
    }
  }

  return (
    <div id="candidatura" className="scroll-mt-28">
      <div
        ref={containerRef}
        onKeyDown={onKeyDown}
        className="relative rounded-[20px] border-2 border-np-dark bg-white shadow-[8px_8px_0_0_#121212] min-[810px]:rounded-[24px]"
      >
        {/* Progress segments */}
        <div className="flex gap-[6px] px-5 pt-5 min-[810px]:px-7 min-[810px]:pt-6" aria-hidden>
          {STEPS.map((_, i) => (
            <span
              key={i}
              className={`h-[4px] flex-1 rounded-full transition-colors duration-300 ${
                disqualified || i <= index ? 'bg-np-dark' : 'bg-np-border'
              }`}
            />
          ))}
        </div>

        {/* Honeypot: hidden from real users, bots fill it and get silently dropped */}
        <input
          type="text"
          name="company_website"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          value={hp}
          onChange={(e) => setHp(e.target.value)}
          className="absolute left-[-9999px] top-[-9999px] h-0 w-0 opacity-0"
        />

        <div className="relative min-h-[380px] overflow-hidden px-5 pb-7 pt-10 min-[810px]:min-h-[420px] min-[810px]:px-14 min-[810px]:pb-10 min-[810px]:pt-14">
          <AnimatePresence mode="wait" custom={direction} initial={false}>
            {disqualified ? (
              <motion.div
                key="dq"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col gap-4"
              >
                <h3 className="font-display text-[22px] font-semibold leading-[1.25em] tracking-[-0.04em] text-black min-[810px]:text-[26px]">
                  Grazie per la sincerità.
                </h3>
                <p className="max-w-[540px] font-sans text-[15px] font-medium leading-[1.5em] tracking-[-0.02em] text-np-text">
                  Oggi probabilmente non siamo il partner giusto: il nostro team lavora al meglio con brand che hanno
                  già un fatturato online avviato. Nel frattempo trovi guide pratiche su Shopify, CRO e tracciamento
                  nel nostro blog.
                </p>
                <div className="mt-2 flex flex-wrap gap-3">
                  <Link href="/it/blog" data-tracking="af11_dq_blog" className="button-principal">
                    Leggi il blog
                  </Link>
                  <button
                    type="button"
                    onClick={() => {
                      setDisqualified(false)
                      go(0)
                    }}
                    className="rounded-[12px] border border-np-dark px-5 py-2 font-sans text-[15px] font-medium tracking-[-0.03em] text-np-dark transition-colors hover:bg-np-bg"
                  >
                    Ho sbagliato risposta
                  </button>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key={index}
                custom={direction}
                initial={{ opacity: 0, y: direction * 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: direction * -24 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="flex flex-col"
              >
                <label
                  htmlFor={`f-${step.field}`}
                  className="flex items-start gap-2 font-display text-[19px] font-semibold leading-[1.3em] tracking-[-0.03em] text-black min-[810px]:text-[22px]"
                >
                  <span className="mt-[3px] shrink-0 font-sans text-[13px] font-semibold text-np-grey">
                    {index + 1}→
                  </span>
                  <span>
                    {step.title}
                    <span className="ml-1 text-np-green-trust">*</span>
                  </span>
                </label>
                {step.hint && (
                  <p className="mt-2 pl-7 font-sans text-[14px] font-medium italic leading-[1.5em] tracking-[-0.02em] text-np-grey">
                    {step.hint}
                  </p>
                )}

                <div className="mt-6 pl-7">
                  {step.kind === 'choice' && (
                    <div className="flex flex-col items-start gap-[10px]" role="radiogroup" aria-labelledby={`f-${step.field}`}>
                      {step.options.map((opt, i) => {
                        const selected = value === opt.value
                        return (
                          <button
                            key={opt.value}
                            type="button"
                            role="radio"
                            aria-checked={selected}
                            data-tracking={`af11_${step.field}_${opt.value}`}
                            onClick={() => choose(opt.value)}
                            className={`flex min-w-[140px] items-center gap-3 rounded-[10px] border px-3 py-[9px] text-left font-sans text-[15px] font-medium tracking-[-0.02em] transition-all ${
                              selected
                                ? 'border-np-dark bg-np-dark text-white'
                                : 'border-np-border bg-np-card-soft text-np-dark hover:border-np-dark'
                            }`}
                          >
                            <span
                              className={`flex h-[20px] w-[20px] shrink-0 items-center justify-center rounded-[5px] border text-[11px] font-semibold ${
                                selected ? 'border-white bg-white text-np-dark' : 'border-np-dark bg-white text-np-dark'
                              }`}
                            >
                              {LETTERS[i]}
                            </span>
                            {opt.label}
                          </button>
                        )
                      })}
                    </div>
                  )}

                  {step.kind === 'input' && (
                    <input
                      ref={inputRef}
                      id={`f-${step.field}`}
                      type={step.type}
                      inputMode={step.type === 'tel' ? 'tel' : step.type === 'email' ? 'email' : undefined}
                      autoComplete={step.autoComplete}
                      placeholder={step.placeholder}
                      value={value}
                      onChange={(e) => {
                        setValues((prev) => ({ ...prev, [step.field]: e.target.value }))
                        if (error) setError(null)
                      }}
                      className="w-full border-0 border-b-2 border-np-border bg-transparent pb-2 font-sans text-[20px] font-medium tracking-[-0.03em] text-np-dark placeholder:text-[#bdbdbd] focus:border-np-dark focus:outline-none min-[810px]:text-[24px]"
                    />
                  )}

                  {step.kind === 'textarea' && (
                    <>
                      <textarea
                        ref={inputRef}
                        id={`f-${step.field}`}
                        rows={4}
                        placeholder={step.placeholder}
                        value={value}
                        onChange={(e) => {
                          setValues((prev) => ({ ...prev, [step.field]: e.target.value }))
                          if (error) setError(null)
                        }}
                        className="w-full resize-none rounded-[12px] border border-np-border bg-np-card-soft p-3 font-sans text-[16px] font-medium leading-[1.5em] tracking-[-0.02em] text-np-dark placeholder:text-[#bdbdbd] focus:border-np-dark focus:outline-none"
                      />
                      <label className="mt-4 flex items-start gap-2">
                        <input
                          type="checkbox"
                          checked={privacy}
                          onChange={(e) => {
                            setPrivacy(e.target.checked)
                            if (error) setError(null)
                          }}
                          className="mt-[3px] h-4 w-4 shrink-0 accent-[#121212]"
                        />
                        <span className="font-sans text-[12px] font-medium leading-[1.5em] tracking-[-0.02em] text-np-text">
                          Ho letto e accetto la{' '}
                          <a href={PRIVACY_URL} target="_blank" rel="noopener noreferrer" className="underline hover:opacity-70">
                            privacy policy
                          </a>
                          .
                        </span>
                      </label>
                    </>
                  )}

                  {error && (
                    <p role="alert" className="mt-3 font-sans text-[13px] font-medium text-red-600">
                      {error}
                    </p>
                  )}

                  {step.kind !== 'choice' && (
                    <div className="mt-6 flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() => next()}
                        disabled={submitting}
                        data-tracking={isLast ? `${source.replace(/-/g, '')}_form_submit` : undefined}
                        className="button-principal disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        {isLast ? (submitting ? 'Invio in corso...' : 'Invia candidatura') : 'OK ✓'}
                      </button>
                      {!isLast && (
                        <span className="hidden font-sans text-[12px] font-medium text-np-grey min-[810px]:inline">
                          premi <strong className="text-np-dark">Invio ↵</strong>
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Back / step counter */}
        {!disqualified && (
          <div className="flex items-center justify-between border-t border-np-border px-5 py-3 min-[810px]:px-7">
            <button
              type="button"
              onClick={() => go(index - 1)}
              disabled={index === 0 || submitting}
              className="font-sans text-[13px] font-medium text-np-dark transition-opacity hover:opacity-60 disabled:invisible"
            >
              ← Indietro
            </button>
            <span className="font-sans text-[12px] font-medium text-np-grey">
              {index + 1} / {STEPS.length}
            </span>
          </div>
        )}
      </div>
    </div>
  )
}
