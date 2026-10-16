'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

import type { Locale } from '@/lib/i18n'
import { ROUTE_PATHS } from '@/lib/i18n/routes'
import { trackEvent } from '@/lib/analytics/events'
import {
  ZL_SOURCE_ID,
  formatZlEur,
  type ZlCopy,
  type ZlLanguageBand,
  type ZlPlatform,
  type ZlProductBand,
  type ZlRevenueBand,
  type ZlStartTiming,
} from '@/content/zero-loss-migration'
import { ZL_REASON_MAX, isBusinessEmail, isStoreUrl, makeZeroLossSchema } from '@/lib/schemas/zeroLoss'
import { estimateTier } from '@/lib/zero-loss/tier'
import { readUtm, zlTrack } from '@/lib/zero-loss/tracking'
import { ZL_FORM_FIRST_FIELD_ID, ZL_FORM_ID } from './ZlCta'
import ZlDashboardLink from './ZlDashboardLink'

const TOTAL_STEPS = 4
const PHONE_PREFIXES = ['+39', '+41', '+44', '+33', '+34', '+49', '+43', '+31', '+32', '+351', '+1'] as const

type Values = {
  websiteUrl: string
  platform: ZlPlatform | ''
  revenue: ZlRevenueBand | ''
  products: ZlProductBand | ''
  languages: ZlLanguageBand | ''
  erp: 'yes' | 'no' | ''
  erpName: string
  timing: ZlStartTiming | ''
  reason: string
  name: string
  email: string
  phonePrefix: string
  phone: string
}

const EMPTY: Values = {
  websiteUrl: '',
  platform: '',
  revenue: '',
  products: '',
  languages: '',
  erp: '',
  erpName: '',
  timing: '',
  reason: '',
  name: '',
  email: '',
  phonePrefix: '+39',
  phone: '',
}

type FieldKey = keyof Values | 'privacy'
type Errors = Partial<Record<FieldKey, string>>

const inputClass = (hasError: boolean) =>
  `w-full rounded-[12px] border bg-white px-3 py-[11px] font-sans text-[15px] font-medium leading-[1.2] tracking-[-0.02em] text-np-text placeholder:text-[#999999] focus:outline-none focus-visible:ring-2 focus-visible:ring-np-dark ${
    hasError ? 'border-red-600' : 'border-black'
  }`
const labelClass = 'font-sans text-[15px] font-semibold leading-[1.4em] tracking-[-0.03em] text-np-dark'
const errorClass = 'font-sans text-[12px] font-medium text-red-600'

function fill(template: string, vars: Record<string, string | number>) {
  return template.replace(/\{(\w+)\}/g, (_, k) => String(vars[k] ?? ''))
}

/** Card-style radio group built on real radio inputs (keyboard + screen reader friendly). */
function Choice<K extends string>({
  name,
  label,
  options,
  value,
  onChange,
  error,
  columns = 2,
}: {
  name: string
  label: string
  options: { value: K; label: string }[]
  value: K | ''
  onChange: (v: K) => void
  error?: string
  columns?: 2 | 3
}) {
  const errorId = `${name}-error`
  return (
    <fieldset className="flex flex-col gap-2" aria-describedby={error ? errorId : undefined} aria-invalid={!!error}>
      <legend className={`mb-2 ${labelClass}`}>{label}</legend>
      <div className={`grid gap-2 ${columns === 3 ? 'grid-cols-2 min-[520px]:grid-cols-3' : 'min-[520px]:grid-cols-2'}`}>
        {options.map((opt) => (
          <label key={opt.value} className="cursor-pointer">
            <input
              type="radio"
              name={name}
              value={opt.value}
              checked={value === opt.value}
              onChange={() => onChange(opt.value)}
              className="peer sr-only"
            />
            <span className="block rounded-[12px] border border-np-border bg-white px-3 py-[10px] font-sans text-[14px] font-medium min-[520px]:px-4 min-[520px]:py-3 min-[520px]:text-[15px] tracking-[-0.02em] text-np-dark transition-colors hover:border-np-grey peer-checked:border-np-dark peer-checked:bg-np-dark peer-checked:text-white peer-focus-visible:ring-2 peer-focus-visible:ring-np-dark peer-focus-visible:ring-offset-2">
              {opt.label}
            </span>
          </label>
        ))}
      </div>
      {error && (
        <span id={errorId} role="alert" className={errorClass}>
          {error}
        </span>
      )}
    </fieldset>
  )
}

export default function ZlApplicationForm({ locale, copy }: { locale: Locale; copy: ZlCopy['form'] }) {
  const router = useRouter()
  const [step, setStep] = useState(0)
  const [values, setValues] = useState<Values>(EMPTY)
  const [privacy, setPrivacy] = useState(false)
  const [errors, setErrors] = useState<Errors>({})
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [serverError, setServerError] = useState<string | null>(null)
  const [hp, setHp] = useState('')
  const mountedAtRef = useRef<number>(Date.now())
  const startedRef = useRef(false)
  const disqualifiedRef = useRef<{ shopify: boolean; revenue: boolean }>({ shopify: false, revenue: false })
  const headingRef = useRef<HTMLHeadingElement>(null)
  const firstRenderRef = useRef(true)

  const schema = useMemo(() => makeZeroLossSchema(copy.errors), [copy.errors])

  const stoppedByShopify = values.platform === 'shopify'
  const stoppedByRevenue = values.revenue === 'under300k'
  const estimate = useMemo(
    () => estimateTier({ revenue: values.revenue, products: values.products, languages: values.languages, erp: values.erp }),
    [values.revenue, values.products, values.languages, values.erp]
  )

  useEffect(() => {
    if (firstRenderRef.current) {
      firstRenderRef.current = false
      return
    }
    headingRef.current?.focus()
  }, [step])

  useEffect(() => {
    if (stoppedByShopify && !disqualifiedRef.current.shopify) {
      disqualifiedRef.current.shopify = true
      zlTrack({ event: 'form_disqualified', reason: 'shopify' })
    }
  }, [stoppedByShopify])

  useEffect(() => {
    if (stoppedByRevenue && !disqualifiedRef.current.revenue) {
      disqualifiedRef.current.revenue = true
      zlTrack({ event: 'form_disqualified', reason: 'revenue_under_300k' })
    }
  }, [stoppedByRevenue])

  function markStarted() {
    if (startedRef.current) return
    startedRef.current = true
    zlTrack({ event: 'form_start', locale })
  }

  function set<K extends keyof Values>(field: K, v: Values[K]) {
    markStarted()
    setValues((prev) => ({ ...prev, [field]: v }))
    setErrors((prev) => ({ ...prev, [field]: undefined }))
    setServerError(null)
  }

  function validateStep(s: number): boolean {
    const e = copy.errors
    const errs: Errors = {}
    if (s === 0) {
      if (!isStoreUrl(values.websiteUrl)) errs.websiteUrl = e.url
      if (!values.platform) errs.platform = e.choice
    }
    if (s === 1) {
      if (!values.revenue) errs.revenue = e.choice
      if (!values.products) errs.products = e.choice
      if (!values.languages) errs.languages = e.choice
      if (!values.erp) errs.erp = e.choice
      if (values.erp === 'yes' && !values.erpName.trim()) errs.erpName = e.erpName
    }
    if (s === 2) {
      if (!values.timing) errs.timing = e.choice
      if (!values.reason.trim()) errs.reason = e.reason
      else if (values.reason.length > ZL_REASON_MAX) errs.reason = e.reasonMax
    }
    if (s === 3) {
      if (values.name.trim().length < 2) errs.name = e.name
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) errs.email = e.email
      else if (!isBusinessEmail(values.email)) errs.email = e.emailFree
      if (values.phone.trim() && (values.phone.match(/\d/g) ?? []).length < 6) errs.phone = e.phone
      if (!privacy) errs.privacy = e.privacy
    }
    setErrors((prev) => ({ ...prev, ...errs }))
    return Object.keys(errs).length === 0
  }

  function next() {
    if (!validateStep(step)) return
    zlTrack({ event: 'form_step', step: (step + 1) as 1 | 2 | 3 })
    setStep(step + 1)
  }

  function back() {
    setServerError(null)
    setStep(Math.max(0, step - 1))
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    if (!validateStep(3)) return
    if (!estimate) {
      setStep(1)
      return
    }

    const phone = values.phone.trim() ? `${values.phonePrefix} ${values.phone.trim()}` : undefined
    const payload = {
      websiteUrl: values.websiteUrl.trim(),
      platform: values.platform,
      revenue_band: values.revenue,
      products: values.products,
      languages: values.languages,
      erp: values.erp,
      erpName: values.erp === 'yes' ? values.erpName.trim() : undefined,
      start_timing: values.timing,
      reason: values.reason.trim(),
      name: values.name.trim(),
      email: values.email.trim(),
      phone,
      privacy,
      tier: estimate.tier.id,
      estimated_price: estimate.tier.price,
      locale,
      source: ZL_SOURCE_ID,
      ...readUtm(),
      hp,
      elapsedMs: Date.now() - mountedAtRef.current,
    }

    const parsed = schema.safeParse(payload)
    if (!parsed.success) {
      const errs: Errors = {}
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as string
        const map: Record<string, FieldKey> = { revenue_band: 'revenue', start_timing: 'timing' }
        const field = (map[key] ?? key) as FieldKey
        if (!errs[field]) errs[field] = issue.message
      }
      setErrors(errs)
      if (errs.websiteUrl || errs.platform) setStep(0)
      else if (errs.revenue || errs.products || errs.languages || errs.erp || errs.erpName) setStep(1)
      else if (errs.timing || errs.reason) setStep(2)
      return
    }

    setStatus('submitting')
    setServerError(null)
    try {
      const res = await fetch('/api/migrazione-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(parsed.data),
      })
      if (!res.ok) {
        const { error } = (await res.json().catch(() => ({}))) as { error?: string }
        setServerError(error ?? copy.errors.generic)
        setStatus('error')
        return
      }
      zlTrack({ event: 'form_step', step: 4 })
      zlTrack({
        event: 'form_submit',
        tier: estimate.tier.id,
        estimated_price: estimate.tier.price,
        platform: values.platform,
        revenue_band: values.revenue,
        start_timing: values.timing,
      })
      // Standard Lead on Pixel + GA4 + CAPI (shared event_id), like the other forms.
      void trackEvent('Lead', { content_category: 'zero-loss-migration', content_name: 'Zero-Loss Migration Sprint' })
      setStatus('success')
      router.push(ROUTE_PATHS.zeroLossThankYou[locale])
    } catch (err) {
      console.error('[zero-loss-form] submit error:', err)
      setServerError(copy.errors.network)
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div id={ZL_FORM_ID} className="scroll-mt-24" aria-live="polite">
        <h3 className="font-display text-[1.6rem] font-semibold leading-[1.2em] tracking-[-0.05em] text-np-dark min-[810px]:text-[2rem]">
          {copy.success.title}
        </h3>
        <p className="mt-3 font-sans text-[16px] font-medium leading-[1.55em] tracking-[-0.02em] text-np-text">
          {fill(copy.success.text, { email: values.email.trim() })}
        </p>
        <div className="mt-6">
          <ZlDashboardLink label={copy.success.dashboardCta} position="success" locale={locale} />
        </div>
      </div>
    )
  }

  const stopped = step === 0 && stoppedByShopify
  const stepTitle = copy.steps[step]?.title ?? ''

  return (
    <div id={ZL_FORM_ID} className="scroll-mt-24">
      {/* Progress */}
      <div className="mb-5">
        <div className="flex items-center justify-between">
          <p className="font-sans text-[12px] font-semibold uppercase tracking-[0.08em] text-np-grey">
            {fill(copy.progressLabel, { step: step + 1, total: TOTAL_STEPS })}
          </p>
        </div>
        <div
          role="progressbar"
          aria-valuemin={1}
          aria-valuemax={TOTAL_STEPS}
          aria-valuenow={step + 1}
          aria-label={fill(copy.progressLabel, { step: step + 1, total: TOTAL_STEPS })}
          className="mt-2 h-[4px] w-full overflow-hidden rounded-full bg-black/10"
        >
          <span className="block h-full rounded-full bg-np-dark transition-[width] duration-300" style={{ width: `${((step + 1) / TOTAL_STEPS) * 100}%` }} />
        </div>
      </div>

      <form onSubmit={submit} noValidate className="flex flex-col gap-6">
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

        <h3
          ref={headingRef}
          tabIndex={-1}
          className="font-display text-[1.4rem] font-semibold leading-[1.2em] tracking-[-0.04em] text-np-dark focus:outline-none min-[810px]:text-[1.6rem]"
        >
          {stepTitle}
        </h3>

        {step === 0 && (
          <>
            <div className="flex flex-col gap-[6px]">
              <label htmlFor={ZL_FORM_FIRST_FIELD_ID} className={labelClass}>
                {copy.step1.urlLabel}
              </label>
              <input
                id={ZL_FORM_FIRST_FIELD_ID}
                type="url"
                inputMode="url"
                autoComplete="url"
                required
                value={values.websiteUrl}
                onChange={(e) => set('websiteUrl', e.target.value)}
                placeholder={copy.step1.urlPlaceholder}
                aria-invalid={!!errors.websiteUrl}
                aria-describedby={errors.websiteUrl ? 'zl-websiteUrl-error' : undefined}
                className={inputClass(!!errors.websiteUrl)}
              />
              {errors.websiteUrl && (
                <span id="zl-websiteUrl-error" role="alert" className={errorClass}>
                  {errors.websiteUrl}
                </span>
              )}
            </div>
            <Choice
              name="zl-platform"
              label={copy.step1.platformLabel}
              options={copy.step1.platforms}
              value={values.platform}
              onChange={(v) => set('platform', v)}
              error={errors.platform}
              columns={3}
            />
            {stoppedByShopify && (
              <div role="status" className="rounded-[12px] border border-np-border bg-white p-4">
                <p className="font-sans text-[15px] font-medium leading-[1.5em] tracking-[-0.02em] text-np-text">{copy.step1.shopifyStop}</p>
                <Link href={ROUTE_PATHS.contacts[locale]} className="mt-2 inline-block font-sans text-[14px] font-semibold underline">
                  {copy.step1.shopifyStopLink}
                </Link>
              </div>
            )}
          </>
        )}

        {step === 1 && (
          <>
            <Choice
              name="zl-revenue"
              label={copy.step2.revenueLabel}
              options={copy.step2.revenues}
              value={values.revenue}
              onChange={(v) => set('revenue', v)}
              error={errors.revenue}
            />
            {values.revenue === 'under300k' && (
              <div role="status" className="rounded-[12px] border border-amber-300 bg-amber-50/90 p-4 font-sans text-[14px] font-medium leading-[1.5em] tracking-[-0.02em] text-amber-950">
                {copy.step2.revenueNotice}
              </div>
            )}
            <Choice
              name="zl-products"
              label={copy.step2.productsLabel}
              options={copy.step2.products}
              value={values.products}
              onChange={(v) => set('products', v)}
              error={errors.products}
              columns={3}
            />
            <Choice
              name="zl-languages"
              label={copy.step2.languagesLabel}
              options={copy.step2.languages}
              value={values.languages}
              onChange={(v) => set('languages', v)}
              error={errors.languages}
              columns={3}
            />
            <Choice
              name="zl-erp"
              label={copy.step2.erpLabel}
              options={[
                { value: 'no', label: copy.step2.erpNo },
                { value: 'yes', label: copy.step2.erpYes },
              ]}
              value={values.erp}
              onChange={(v) => set('erp', v)}
              error={errors.erp}
            />
            {values.erp === 'yes' && (
              <div className="flex flex-col gap-[6px]">
                <label htmlFor="zl-erpName" className={labelClass}>
                  {copy.step2.erpWhichLabel}
                </label>
                <input
                  id="zl-erpName"
                  type="text"
                  value={values.erpName}
                  onChange={(e) => set('erpName', e.target.value)}
                  placeholder={copy.step2.erpWhichPlaceholder}
                  aria-invalid={!!errors.erpName}
                  className={inputClass(!!errors.erpName)}
                />
                {errors.erpName && (
                  <span role="alert" className={errorClass}>
                    {errors.erpName}
                  </span>
                )}
              </div>
            )}
          </>
        )}

        {step === 2 && (
          <>
            <Choice
              name="zl-timing"
              label={copy.step3.timingLabel}
              options={copy.step3.timings}
              value={values.timing}
              onChange={(v) => set('timing', v)}
              error={errors.timing}
              columns={3}
            />
            <div className="flex flex-col gap-[6px]">
              <label htmlFor="zl-reason" className={labelClass}>
                {copy.step3.reasonLabel}
              </label>
              <textarea
                id="zl-reason"
                rows={4}
                maxLength={ZL_REASON_MAX}
                value={values.reason}
                onChange={(e) => set('reason', e.target.value)}
                placeholder={copy.step3.reasonPlaceholder}
                aria-invalid={!!errors.reason}
                aria-describedby="zl-reason-counter"
                className={`${inputClass(!!errors.reason)} leading-[1.45]`}
              />
              <div className="flex items-center justify-between">
                {errors.reason ? (
                  <span role="alert" className={errorClass}>
                    {errors.reason}
                  </span>
                ) : (
                  <span />
                )}
                <span id="zl-reason-counter" className="font-sans text-[12px] font-medium text-np-grey">
                  {fill(copy.step3.reasonCounter, { count: values.reason.length, max: ZL_REASON_MAX })}
                </span>
              </div>
            </div>
          </>
        )}

        {step === 3 && (
          <>
            {estimate && (
              <div className="rounded-[12px] bg-np-mark-green p-4">
                <p className="font-sans text-[12px] font-bold uppercase tracking-[0.08em] text-np-dark">{copy.step4.summaryTitle}</p>
                <p className="mt-1 font-sans text-[15px] font-semibold leading-[1.5em] tracking-[-0.02em] text-np-dark">
                  {fill(copy.step4.summary, {
                    tier: `${copy.step4.tierLabel} ${estimate.tier.id}`,
                    price: formatZlEur(estimate.tier.price),
                    installment: formatZlEur(estimate.tier.installment),
                  })}
                </p>
                {estimate.addon && (
                  <p className="mt-1 font-sans text-[13px] font-medium leading-[1.5em] tracking-[-0.02em] text-np-dark">{copy.step4.addonLine}</p>
                )}
              </div>
            )}

            <div className="grid gap-4 min-[520px]:grid-cols-2">
              <div className="flex flex-col gap-[6px]">
                <label htmlFor="zl-name" className={labelClass}>
                  {copy.step4.nameLabel}
                </label>
                <input
                  id="zl-name"
                  type="text"
                  autoComplete="name"
                  required
                  value={values.name}
                  onChange={(e) => set('name', e.target.value)}
                  placeholder={copy.step4.namePlaceholder}
                  aria-invalid={!!errors.name}
                  className={inputClass(!!errors.name)}
                />
                {errors.name && (
                  <span role="alert" className={errorClass}>
                    {errors.name}
                  </span>
                )}
              </div>
              <div className="flex flex-col gap-[6px]">
                <label htmlFor="zl-email" className={labelClass}>
                  {copy.step4.emailLabel}
                </label>
                <input
                  id="zl-email"
                  type="email"
                  autoComplete="email"
                  required
                  value={values.email}
                  onChange={(e) => set('email', e.target.value)}
                  placeholder={copy.step4.emailPlaceholder}
                  aria-invalid={!!errors.email}
                  className={inputClass(!!errors.email)}
                />
                {errors.email && (
                  <span role="alert" className={errorClass}>
                    {errors.email}
                  </span>
                )}
              </div>
            </div>

            <div className="flex flex-col gap-[6px]">
              <label htmlFor="zl-phone" className={labelClass}>
                {copy.step4.phoneLabel}
              </label>
              <div className="grid grid-cols-[110px_1fr] gap-2">
                <select
                  aria-label={copy.step4.phonePrefixLabel}
                  value={values.phonePrefix}
                  onChange={(e) => set('phonePrefix', e.target.value)}
                  className={inputClass(false)}
                >
                  {PHONE_PREFIXES.map((p) => (
                    <option key={p} value={p}>
                      {p}
                    </option>
                  ))}
                </select>
                <input
                  id="zl-phone"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel-national"
                  value={values.phone}
                  onChange={(e) => set('phone', e.target.value)}
                  placeholder={copy.step4.phonePlaceholder}
                  aria-invalid={!!errors.phone}
                  className={inputClass(!!errors.phone)}
                />
              </div>
              {errors.phone && (
                <span role="alert" className={errorClass}>
                  {errors.phone}
                </span>
              )}
            </div>

            <div className="flex flex-col gap-[6px]">
              <label className="flex items-start gap-2">
                <input
                  type="checkbox"
                  required
                  checked={privacy}
                  onChange={(e) => {
                    markStarted()
                    setPrivacy(e.target.checked)
                    setErrors((prev) => ({ ...prev, privacy: undefined }))
                  }}
                  aria-invalid={!!errors.privacy}
                  className="mt-[3px] h-4 w-4 shrink-0 accent-[#121212]"
                />
                <span className="font-sans text-[13px] font-medium leading-[1.5em] tracking-[-0.02em] text-np-text">
                  {copy.step4.privacyBefore}
                  <a href={ROUTE_PATHS.privacyPolicy[locale]} target="_blank" rel="noopener noreferrer" className="underline transition-opacity hover:opacity-70">
                    {copy.step4.privacyLinkLabel}
                  </a>
                  .
                </span>
              </label>
              {errors.privacy && (
                <span role="alert" className={errorClass}>
                  {errors.privacy}
                </span>
              )}
            </div>
          </>
        )}

        <div aria-live="assertive">
          {serverError && (
            <div className="rounded-[12px] border border-red-600/40 bg-[#fff4f2] p-4">
              <p className="font-sans text-[14px] font-medium leading-[1.5em] text-red-700">{serverError}</p>
            </div>
          )}
        </div>

        {/* Actions */}
        {!stopped && (
          <div className="flex flex-col gap-3">
            {/* Distinct keys: React must not reuse the "Avanti" DOM node for the
                submit button, otherwise the click that advances to step 4 lands
                on a node whose type just became "submit" and the form submits. */}
            {step < TOTAL_STEPS - 1 ? (
              <button key="next" type="button" onClick={next} className="button-principal !w-full !py-[12px] !text-[17px]">
                {copy.next}
              </button>
            ) : (
              <button
                key="submit"
                type="submit"
                disabled={status === 'submitting'}
                className="button-principal !w-full !py-[12px] !text-[17px] disabled:cursor-not-allowed disabled:opacity-50"
              >
                {status === 'submitting' ? copy.submitting : status === 'error' ? copy.retry : copy.submit}
              </button>
            )}
            <div className="flex items-center justify-between">
              <button
                type="button"
                onClick={back}
                disabled={step === 0 || status === 'submitting'}
                className="font-sans text-[13px] font-medium text-np-dark underline-offset-2 transition-opacity hover:opacity-60 disabled:invisible"
              >
                {copy.back}
              </button>
              <span className="font-sans text-[12px] font-medium text-np-grey">{copy.replyNote}</span>
            </div>
          </div>
        )}
        {stopped && (
          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={() => (step === 0 ? set('platform', '') : set('revenue', ''))}
              className="font-sans text-[13px] font-medium text-np-dark transition-opacity hover:opacity-60"
            >
              {copy.back}
            </button>
            <span className="font-sans text-[12px] font-medium text-np-grey">{copy.replyNote}</span>
          </div>
        )}
      </form>
    </div>
  )
}
