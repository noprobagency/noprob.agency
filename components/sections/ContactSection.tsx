'use client'

import React, { useRef, useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { siteAssets } from '@/lib/site'
import { ZL_TIERS } from '@/content/zero-loss-migration'
import { contactSchema, ContactFormData } from '@/lib/schemas/contact'

type ContactSectionProps = {
  /** Path to navigate to after a successful submission. Defaults to /thank-you. */
  successRedirect?: string
  /** Locale of the page hosting the form. Forwarded to the API for the welcome email. */
  locale?: 'en' | 'it'
}

const copy = {
  en: {
    trustedBy: 'Trusted by 23+ founders',
    afterTitle: 'What happens after you send the form',
    afterSteps: [
      'A senior eCommerce manager replies within 48 hours.',
      'Together you analyze your current situation.',
      'You leave with clear next steps for your growth.',
    ],
    nameLabel: 'Full name',
    companyLabel: 'Company Name',
    emailLabel: 'Email (we’ll send you more info)',
    phoneLabel: 'Phone number',
    urlLabel: 'Your eCommerce URL',
    interestLabel: 'What are you interested in?',
    interestOptions: [
      'I want to launch my first eCommerce',
      'I want to implement an expert eCommerce team inside my company',
      'I want to build a new Shopify store',
      'I want to migrate to Shopify',
      'AI Accelerator',
      'Other',
    ],
    revenueLabel: 'How much does your eCommerce generate in annual revenue?',
    revenueOptions: [
      'Not generating revenue yet',
      'Less than €100,000',
      'Between €100,000 and €500,000',
      'More than €500,000',
    ],
    adsLabel: 'How much do you currently spend on ads each month?',
    adsOptions: [
      'I’m not spending anything on ads',
      'Less than €2,500/month',
      'Between €2,500 and €5,000/month',
      'More than €5,000/month',
    ],
    additionalLabel: 'Add any additional information or data that could be useful for the call',
    sprintNote: (price: string) =>
      `For migrations there is the Shopify Launch Sprint: public price from ${price}, 4 installments, a reply in 48 hours.`,
    sprintLinkLabel: 'Apply for the Sprint',
    sprintHref: '/shopify-migration-sprint/apply',
    select: 'Select…',
    badgeSupport: '7/7 support',
    badgeNda: 'NDA pre-signed after submission',
    badgeTrial: 'First sprint at half price',
    submit: 'Send Your Request',
    submitting: 'Sending...',
    afterSubmit: 'You’ll get direct access to our eCommerce manager in the next step.',
    genericError: 'Something went wrong. Please try again.',
    networkError: 'Network error. Please try again.',
  },
  it: {
    trustedBy: 'Scelti da oltre 23 founder',
    afterTitle: 'Cosa succede dopo l’invio',
    afterSteps: [
      'Un senior eCommerce manager ti risponde entro 48 ore.',
      'Analizzate insieme la tua situazione attuale.',
      'Esci con i prossimi passi chiari per la tua crescita.',
    ],
    nameLabel: 'Nome e cognome',
    companyLabel: 'Nome azienda',
    emailLabel: 'Email per inviarti maggiori informazioni',
    phoneLabel: 'Numero di telefono',
    urlLabel: 'URL del tuo eCommerce',
    interestLabel: 'A cosa sei interessato?',
    interestOptions: [
      'Voglio lanciare il mio primo eCommerce',
      'Voglio inserire un team eCommerce esperto nella mia azienda',
      'Voglio costruire un nuovo store Shopify',
      'Voglio migrare a Shopify',
      'AI Accelerator',
      'Altro',
    ],
    revenueLabel: 'Quanto fattura annualmente il tuo eCommerce?',
    revenueOptions: [
      'Non genera ancora fatturato',
      'Meno di 100.000 €',
      'Tra 100.000 € e 500.000 €',
      'Più di 500.000 €',
    ],
    adsLabel: 'Quanto spendi attualmente in ads ogni mese?',
    adsOptions: [
      'Non sto spendendo nulla in ads',
      'Meno di 2.500 €/mese',
      'Tra 2.500 € e 5.000 €/mese',
      'Più di 5.000 €/mese',
    ],
    additionalLabel: 'Aggiungi qualsiasi informazione o dato utile per la videochiamata',
    sprintNote: (price: string) =>
      `Per la migrazione c’è lo Shopify Launch Sprint: prezzo pubblico da ${price}, 4 rate, risposta in 48 ore.`,
    sprintLinkLabel: 'Candidati allo Sprint',
    sprintHref: '/it/sprint-migrazione-shopify/candidatura',
    select: 'Seleziona…',
    badgeSupport: 'Supporto 7/7',
    badgeNda: 'NDA pre-firmato dopo l’invio',
    badgeTrial: 'Primo sprint a metà prezzo',
    submit: 'Invia la tua richiesta',
    submitting: 'Invio in corso...',
    afterSubmit: 'Avrai accesso diretto al nostro eCommerce manager nel passaggio successivo.',
    genericError: 'Qualcosa è andato storto. Riprova.',
    networkError: 'Errore di rete. Riprova.',
  },
} as const

const reviews = {
  en: {
    antonio:
      'Collaborating with NoProb Agency for the development of our eCommerce was an <strong>extremely positive experience</strong>. From the very first stages of the project, the team stood out for its clear communication, technical expertise, and listening skills.||Every step, from graphic design to going live, was <strong>handled with professionalism</strong>…',
    cristiana:
      'I am very satisfied with my collaboration with the agency, and especially with Antonio, who <strong>supported me every step</strong> of the way with my website redesign and the promotion of my products via eCommerce.||Whenever I need help, Antonio is always very available, which I really appreciate. <strong>A very positive experience!</strong>',
    camilla:
      'Collaborating with Antonio on the creation of our <strong>eCommerce website</strong> was an extremely positive experience.||He demonstrated great professionalism, technical competence, and remarkable attention to detail, managing to transform our ideas into a functional, modern, and high-performing <strong>eCommerce website</strong>…',
    antonioRole: 'Sfogliate&Sfogliatelle - DTC eCommerce Owner',
    cristianaRole: 'terapiafloreale.it - Supplement eCommerce',
    camillaRole: 'DDglobal Store - B2B eCommerce Owner',
  },
  it: {
    antonio:
      'Collaborare con NoProb Agency per lo sviluppo del nostro eCommerce è stata un’<strong>esperienza estremamente positiva</strong>. Fin dalle prime fasi del progetto, il team si è distinto per chiarezza nella comunicazione, competenza tecnica e capacità di ascolto.||Ogni passaggio, dalla progettazione grafica al go-live, è stato <strong>gestito con professionalità</strong>…',
    cristiana:
      'Sono molto soddisfatta della collaborazione con l’agenzia e in particolare con Antonio, che mi <strong>ha supportata in ogni fase</strong> del rifacimento del mio sito e della promozione dei miei prodotti tramite eCommerce.||Ogni volta che ho bisogno di aiuto, Antonio è sempre molto disponibile, cosa che apprezzo davvero. <strong>Un’esperienza molto positiva!</strong>',
    camilla:
      'Collaborare con Antonio per la creazione del nostro <strong>sito eCommerce</strong> è stata un’esperienza estremamente positiva.||Ha dimostrato grande professionalità, competenza tecnica e una notevole attenzione ai dettagli, riuscendo a trasformare le nostre idee in un <strong>sito eCommerce</strong> funzionale, moderno e performante…',
    antonioRole: 'Sfogliate&Sfogliatelle - Titolare eCommerce DTC',
    cristianaRole: 'terapiafloreale.it - eCommerce di integratori',
    camillaRole: 'DDglobal Store - Titolare eCommerce B2B',
  },
} as const

const avatars = [
  '/images/originals/mEIBGBqwotHJ35YaPhM5ljuLc2U.png',
  '/images/originals/2B9gp2gJnBjBX44Yovd3HRxqiXM.png',
  '/images/originals/B9ROL6BhEMArgbWauFiEj7UZZJY.png',
  '/images/originals/lFzmQ3NzC3LG6q2c7lvBf8kw.png',
  '/images/originals/38I07rfLJ4DXJRQZ7YXCanY6ko.png',
]

function ReviewText({ text }: { text: string }) {
  const html = text
    .split('||')
    .map((p) => p.trim())
    .join('<br /><br />')
  return (
    <p
      className="font-sans text-[1rem] font-normal leading-[1.5em] tracking-[-0.02em] text-noprob-text"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}

export default function ContactSection({
  successRedirect = '/thank-you',
  locale = 'en',
}: ContactSectionProps = {}) {
  const router = useRouter()
  const [serverError, setServerError] = useState<string | null>(null)
  const mountedAtRef = useRef<number>(Date.now())
  const t = copy[locale]
  const r = reviews[locale]
  // Entry tier of the Sprint, from the single source of truth (ZL_TIERS).
  const sprintPrice = `€${String(ZL_TIERS[0].price).replace(/\B(?=(\d{3})+(?!\d))/g, locale === 'it' ? '.' : ',')}`

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  // Watch fields to change color once selected
  const interestValue = watch('interest')
  const revenueValue = watch('revenue')
  const adsSpendValue = watch('adsSpend')

  async function onSubmit(data: ContactFormData) {
    setServerError(null)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, locale, elapsedMs: Date.now() - mountedAtRef.current }),
      })

      if (!res.ok) {
        const { error } = (await res.json().catch(() => ({}))) as { error?: string }
        setServerError(error ?? t.genericError)
        return
      }

      reset()
      router.push(successRedirect)
    } catch (err) {
      console.error('[contact-form] submit error:', err)
      setServerError(t.networkError)
    }
  }

  return (
    <section id="contact-form" className="bg-noprob-bg flex flex-col items-center place-content-center overflow-hidden gap-[20px] max-w-[1200px] mx-auto w-full mt-[20px] mb-[50px] px-[24px] min-[810px]:px-0">
      <div className="flex w-full flex-col items-center place-content-center gap-[30px] overflow-x-clip">
        <div className="flex w-full flex-col-reverse items-start justify-start gap-4 overflow-clip rounded-[16px] border-[6px] border-[#f8f8f8] bg-white p-5 lg:flex-row lg:gap-[50px] lg:p-[50px]">
          {/* Left Column: Info & Trust (Now Second on Mobile) */}
          <div className="flex flex-[1_0_0px] flex-col gap-6 p-0 w-full">
            {/* Consistency Card */}
            <div className="flex flex-col gap-[15px] rounded-[16px] border-[6px] border-[#f8f8f8] bg-white p-[24px]">
              <div className="flex items-center gap-3 lg:gap-6">
                {/* Avatar Stack */}
                <div className="flex -space-x-2 lg:-space-x-3">
                  {avatars.map((src, i) => (
                    <div
                      key={i}
                      className="relative h-8 w-8 overflow-hidden rounded-full border-2 border-white bg-noprob-bg lg:h-11 lg:w-11"
                    >
                      <Image src={src} alt="Founder avatar" fill className="object-cover" />
                    </div>
                  ))}
                </div>
                {/* Stars & Trust */}
                <div className="flex flex-col gap-0.5 lg:gap-1">
                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <svg
                        key={s}
                        className="h-3 w-3 lg:h-[18px] lg:w-[18px]"
                        viewBox="0 0 17 17"
                        fill="#F9C24A"
                        aria-hidden
                      >
                        <path d="M 8.561 13.7 L 4.411 16.2 C 4.228 16.317 4.036 16.367 3.836 16.35 C 3.636 16.333 3.461 16.267 3.311 16.15 C 3.161 16.033 3.044 15.888 2.961 15.713 C 2.878 15.538 2.861 15.342 2.911 15.125 L 4.011 10.4 L 0.336 7.225 C 0.169 7.075 0.065 6.904 0.024 6.712 C -0.017 6.52 -0.005 6.333 0.061 6.15 C 0.127 5.967 0.227 5.817 0.361 5.7 C 0.495 5.583 0.678 5.508 0.911 5.475 L 5.761 5.05 L 7.636 0.6 C 7.719 0.4 7.849 0.25 8.024 0.15 C 8.199 0.05 8.378 0 8.561 0 C 8.744 0 8.923 0.05 9.098 0.15 C 9.273 0.25 9.403 0.4 9.486 0.6 L 11.361 5.05 L 16.211 5.475 C 16.444 5.508 16.628 5.583 16.761 5.7 C 16.894 5.817 16.994 5.967 17.061 6.15 C 17.128 6.333 17.14 6.521 17.099 6.713 C 17.058 6.905 16.953 7.076 16.786 7.225 L 13.111 10.4 L 14.211 15.125 C 14.261 15.342 14.244 15.538 14.161 15.713 C 14.078 15.888 13.961 16.034 13.811 16.15 C 13.661 16.266 13.486 16.333 13.286 16.35 C 13.086 16.367 12.894 16.317 12.711 16.2 Z" />
                      </svg>
                    ))}
                  </div>
                  <span className="font-sans text-[11px] font-semibold tracking-[-0.03em] text-noprob-text lg:text-[13px]">
                    {t.trustedBy}
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-[15px]">
                <h2 className="text-[34px] font-semibold leading-[1.1] tracking-[-0.07em] text-noprob-text">
                  {t.afterTitle}
                </h2>
                <ol className="flex flex-col gap-3">
                  {t.afterSteps.map((step, i) => (
                    <li
                      key={step}
                      className="flex items-start gap-3 font-sans text-[17px] font-medium leading-[1.4em] tracking-[-0.02em] text-noprob-text"
                    >
                      <span className="mt-[2px] flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-noprob-bg text-[13px] font-semibold">
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            {/* Testimonial Card */}
            <article className="flex h-auto flex-col items-start justify-between rounded-[16px] border-[6px] border-[#f8f8f8] bg-noprob-card p-[24px] shadow-none overflow-visible gap-[15px]">
              <ReviewText text={r.antonio} />

              <div className="mt-0 w-full flex flex-col gap-[15px]">
                <div className="h-5 w-auto">
                  <Image
                    src={siteAssets.trustpilotWordmark}
                    alt="Trustpilot rating"
                    width={100}
                    height={20}
                    className="h-full w-auto object-contain object-left"
                  />
                </div>

                <div className="mt-[10px] flex items-center gap-3 text-[#181818]">
                  <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border border-black/5">
                    <Image
                      src="/images/originals/5ZClDWRqPVst2zJqghXyG33cMY0.png"
                      alt="Antonio Cali"
                      fill
                      sizes="48px"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col">
                    <p className="font-sans text-[18px] font-medium leading-[1.3em] tracking-[-0.02em] text-[#363636]">
                      Antonio Cali
                    </p>
                    <p className="font-sans text-[12px] font-medium tracking-[-0.04em] text-noprob-grey">
                      {r.antonioRole}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          </div>

          {/* Right Column: Contact Form (Now First on Mobile) */}
          <div className="flex flex-[1_0_0px] flex-col gap-5 rounded-[16px] border-[6px] border-[#f8f8f8] bg-white p-5 w-full">
            <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
              {/* Honeypot — hidden from real users, bots fill it and get silently dropped */}
              <input
                {...register('hp')}
                type="text"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="absolute left-[-9999px] top-[-9999px] h-0 w-0 opacity-0"
              />

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-[2px]">
                  <label className="font-sans text-[14px] font-medium leading-[1.5] tracking-[-0.04em] text-black">
                    {t.nameLabel}
                  </label>
                  <input
                    {...register('name')}
                    type="text"
                    placeholder="Pieter Lev"
                    className={`w-full rounded-[12px] border bg-white p-[10px] font-sans text-[14px] font-medium leading-[1.2] tracking-[-0.02em] text-[#181818] placeholder:text-[#999999] focus:outline-none ${errors.name ? 'border-red-500' : 'border-black'}`}
                  />
                  {errors.name && <span className="text-[10px] text-red-500">{errors.name.message}</span>}
                </div>
                <div className="flex flex-col gap-[2px]">
                  <label className="font-sans text-[14px] font-medium leading-[1.5] tracking-[-0.04em] text-black">
                    {t.companyLabel}
                  </label>
                  <input
                    {...register('company')}
                    type="text"
                    placeholder="Rossi srl"
                    className={`w-full rounded-[12px] border bg-white p-[10px] font-sans text-[14px] font-medium leading-[1.2] tracking-[-0.02em] text-[#181818] placeholder:text-[#999999] focus:outline-none ${errors.company ? 'border-red-500' : 'border-black'}`}
                  />
                  {errors.company && <span className="text-[10px] text-red-500">{errors.company.message}</span>}
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-[3px]">
                  <label className="font-sans text-[14px] font-medium leading-[1.5] tracking-[-0.04em] text-black">
                    {t.emailLabel}
                  </label>
                  <input
                    {...register('email')}
                    type="email"
                    placeholder="email@company.com"
                    className={`w-full rounded-[12px] border bg-white p-[10px] font-sans text-[14px] font-medium leading-[1.2] tracking-[-0.02em] text-[#181818] placeholder:text-[#999999] focus:outline-none ${errors.email ? 'border-red-500' : 'border-black'}`}
                  />
                  {errors.email && <span className="text-[10px] text-red-500">{errors.email.message}</span>}
                </div>
                <div className="flex flex-col gap-[2px]">
                  <label className="font-sans text-[14px] font-medium leading-[1.5] tracking-[-0.04em] text-black">
                    {t.phoneLabel}
                  </label>
                  <input
                    {...register('phone')}
                    type="tel"
                    placeholder="+39 3204063459"
                    className={`w-full rounded-[12px] border bg-white p-[10px] font-sans text-[14px] font-medium leading-[1.2] tracking-[-0.02em] text-[#181818] placeholder:text-[#999999] focus:outline-none ${errors.phone ? 'border-red-500' : 'border-black'}`}
                  />
                  {errors.phone && <span className="text-[10px] text-red-500">{errors.phone.message}</span>}
                </div>
              </div>

              <div className="flex flex-col gap-[2px]">
                <label className="font-sans text-[14px] font-medium leading-[1.5] tracking-[-0.04em] text-black">
                  {t.urlLabel}
                </label>
                <input
                  {...register('websiteUrl')}
                  type="text"
                  placeholder="company.com"
                  className={`w-full rounded-[12px] border bg-white p-[10px] font-sans text-[14px] font-medium leading-[1.2] tracking-[-0.02em] text-[#181818] placeholder:text-[#999999] focus:outline-none ${errors.websiteUrl ? 'border-red-500' : 'border-black'}`}
                />
                {errors.websiteUrl && <span className="text-[10px] text-red-500">{errors.websiteUrl.message}</span>}
              </div>

              <div className="flex flex-col gap-[2px]">
                <label className="font-sans text-[14px] font-medium leading-[1.5] tracking-[-0.04em] text-black">
                  {t.interestLabel}
                </label>
                <div className="relative">
                  <select
                    {...register('interest')}
                    defaultValue=""
                    className={`w-full appearance-none rounded-[12px] border bg-white p-[10px] font-sans text-[14px] font-medium leading-[1.2] tracking-[-0.02em] focus:outline-none ${errors.interest ? 'border-red-500' : 'border-black'} ${interestValue ? 'text-[#181818]' : 'text-[#999999]'}`}
                  >
                    <option value="" disabled className="text-[#999999]">
                      {t.select}
                    </option>
                    {t.interestOptions.map((opt) => (
                      <option key={opt} value={opt} className="text-[#181818]">
                        {opt}
                      </option>
                    ))}
                  </select>
                  {errors.interest && <span className="text-[10px] text-red-500">{errors.interest.message}</span>}
                </div>
                {interestValue === t.interestOptions[3] && (
                  <p className="mt-1 font-sans text-[13px] font-medium leading-[1.4em] tracking-[-0.02em] text-noprob-text">
                    {t.sprintNote(sprintPrice)}{' '}
                    <Link
                      href={t.sprintHref}
                      data-tracking="contact_sprint_note"
                      className="underline underline-offset-2"
                    >
                      {t.sprintLinkLabel}
                    </Link>
                  </p>
                )}
              </div>

              <div className="flex flex-col gap-[2px]">
                <label className="font-sans text-[14px] font-medium leading-[1.5] tracking-[-0.04em] text-black">
                  {t.revenueLabel}
                </label>
                <div className="relative">
                  <select
                    {...register('revenue')}
                    defaultValue=""
                    className={`w-full appearance-none rounded-[12px] border bg-white p-[10px] font-sans text-[14px] font-medium leading-[1.2] tracking-[-0.02em] focus:outline-none ${errors.revenue ? 'border-red-500' : 'border-black'} ${revenueValue ? 'text-[#181818]' : 'text-[#999999]'}`}
                  >
                    <option value="" disabled className="text-[#999999]">
                      {t.select}
                    </option>
                    {t.revenueOptions.map((opt) => (
                      <option key={opt} value={opt} className="text-[#181818]">
                        {opt}
                      </option>
                    ))}
                  </select>
                  {errors.revenue && <span className="text-[10px] text-red-500">{errors.revenue.message}</span>}
                </div>
              </div>

              <div className="flex flex-col gap-[2px]">
                <label className="font-sans text-[14px] font-medium leading-[1.5] tracking-[-0.04em] text-black">
                  {t.adsLabel}
                </label>
                <div className="relative">
                  <select
                    {...register('adsSpend')}
                    defaultValue=""
                    className={`w-full appearance-none rounded-[12px] border bg-white p-[10px] font-sans text-[14px] font-medium leading-[1.2] tracking-[-0.02em] focus:outline-none ${errors.adsSpend ? 'border-red-500' : 'border-black'} ${adsSpendValue ? 'text-[#181818]' : 'text-[#999999]'}`}
                  >
                    <option value="" disabled className="text-[#999999]">
                      {t.select}
                    </option>
                    {t.adsOptions.map((opt) => (
                      <option key={opt} value={opt} className="text-[#181818]">
                        {opt}
                      </option>
                    ))}
                  </select>
                  {errors.adsSpend && <span className="text-[10px] text-red-500">{errors.adsSpend.message}</span>}
                </div>
              </div>

              <div className="flex flex-col gap-[2px]">
                <label className="font-sans text-[14px] font-medium leading-[1.5] tracking-[-0.04em] text-black">
                  {t.additionalLabel}
                </label>
                <textarea
                  {...register('additionalInfo')}
                  rows={4}
                  className="w-full rounded-[12px] border border-black bg-white p-[10px] font-sans text-[14px] font-medium leading-[1.2] tracking-[-0.02em] text-[#181818] placeholder:text-[#999999] focus:outline-none"
                />
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap items-center justify-center gap-6 py-2">
                <div className="flex items-center gap-2">
                  <svg width="20" height="20" viewBox="0 0 32 32" fill="none" aria-hidden>
                    <path
                      d="M16 3C13.4288 3 10.9154 3.76244 8.77759 5.1909C6.63975 6.61935 4.97351 8.64968 3.98957 11.0251C3.00563 13.4006 2.74819 16.0144 3.2498 18.5362C3.75141 21.0579 4.98953 23.3743 6.80762 25.1924C8.6257 27.0105 10.9421 28.2486 13.4638 28.7502C15.9856 29.2518 18.5995 28.9944 20.9749 28.0104C23.3503 27.0265 25.3807 25.3603 26.8091 23.2224C28.2376 21.0846 29 18.5712 29 16C28.9964 12.5533 27.6256 9.24882 25.1884 6.81163C22.7512 4.37445 19.4467 3.00364 16 3ZM21.7075 13.7075L14.7075 20.7075C14.6146 20.8005 14.5043 20.8742 14.3829 20.9246C14.2615 20.9749 14.1314 21.0008 14 21.0008C13.8686 21.0008 13.7385 20.9749 13.6171 20.9246C13.4957 20.8742 13.3854 20.8005 13.2925 20.7075L10.2925 17.7075C10.1049 17.5199 9.99945 17.2654 9.99945 17C9.99945 16.7346 10.1049 16.4801 10.2925 16.2925C10.4801 16.1049 10.7346 15.9994 11 15.9994C11.2654 15.9994 11.5199 16.1049 11.7075 16.2925L14 18.5863L20.2925 12.2925C20.3854 12.1996 20.4957 12.1259 20.6171 12.0756C20.7385 12.0253 20.8686 11.9994 21 11.9994C21.1314 11.9994 21.2615 12.0253 21.3829 12.0756C21.5043 12.1259 21.6146 12.1996 21.7075 12.2925C21.8004 12.3854 21.8741 12.4957 21.9244 12.6171C21.9747 12.7385 22.0006 12.8686 22.0006 13C22.0006 13.1314 21.9747 13.2615 21.9244 13.3829C21.8741 13.5043 21.8004 13.6146 21.7075 13.7075Z"
                      fill="#121212"
                    />
                  </svg>
                  <span className="font-sans text-[12px] font-medium text-noprob-text">
                    {t.badgeSupport}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <svg width="20" height="20" viewBox="0 0 32 32" fill="none" aria-hidden>
                    <path
                      d="M16 3C13.4288 3 10.9154 3.76244 8.77759 5.1909C6.63975 6.61935 4.97351 8.64968 3.98957 11.0251C3.00563 13.4006 2.74819 16.0144 3.2498 18.5362C3.75141 21.0579 4.98953 23.3743 6.80762 25.1924C8.6257 27.0105 10.9421 28.2486 13.4638 28.7502C15.9856 29.2518 18.5995 28.9944 20.9749 28.0104C23.3503 27.0265 25.3807 25.3603 26.8091 23.2224C28.2376 21.0846 29 18.5712 29 16C28.9964 12.5533 27.6256 9.24882 25.1884 6.81163C22.7512 4.37445 19.4467 3.00364 16 3ZM21.7075 13.7075L14.7075 20.7075C14.6146 20.8005 14.5043 20.8742 14.3829 20.9246C14.2615 20.9749 14.1314 21.0008 14 21.0008C13.8686 21.0008 13.7385 20.9749 13.6171 20.9246C13.4957 20.8742 13.3854 20.8005 13.2925 20.7075L10.2925 17.7075C10.1049 17.5199 9.99945 17.2654 9.99945 17C9.99945 16.7346 10.1049 16.4801 10.2925 16.2925C10.4801 16.1049 10.7346 15.9994 11 15.9994C11.2654 15.9994 11.5199 16.1049 11.7075 16.2925L14 18.5863L20.2925 12.2925C20.3854 12.1996 20.4957 12.1259 20.6171 12.0756C20.7385 12.0253 20.8686 11.9994 21 11.9994C21.1314 11.9994 21.2615 12.0253 21.3829 12.0756C21.5043 12.1259 21.6146 12.1996 21.7075 12.2925C21.8004 12.3854 21.8741 12.4957 21.9244 12.6171C21.9747 12.7385 22.0006 12.8686 22.0006 13C22.0006 13.1314 21.9747 13.2615 21.9244 13.3829C21.8741 13.5043 21.8004 13.6146 21.7075 13.7075Z"
                      fill="#121212"
                    />
                  </svg>
                  <span className="font-sans text-[12px] font-medium text-noprob-text">
                    {t.badgeNda}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <svg width="20" height="20" viewBox="0 0 32 32" fill="none" aria-hidden>
                    <path
                      d="M16 3C13.4288 3 10.9154 3.76244 8.77759 5.1909C6.63975 6.61935 4.97351 8.64968 3.98957 11.0251C3.00563 13.4006 2.74819 16.0144 3.2498 18.5362C3.75141 21.0579 4.98953 23.3743 6.80762 25.1924C8.6257 27.0105 10.9421 28.2486 13.4638 28.7502C15.9856 29.2518 18.5995 28.9944 20.9749 28.0104C23.3503 27.0265 25.3807 25.3603 26.8091 23.2224C28.2376 21.0846 29 18.5712 29 16C28.9964 12.5533 27.6256 9.24882 25.1884 6.81163C22.7512 4.37445 19.4467 3.00364 16 3ZM21.7075 13.7075L14.7075 20.7075C14.6146 20.8005 14.5043 20.8742 14.3829 20.9246C14.2615 20.9749 14.1314 21.0008 14 21.0008C13.8686 21.0008 13.7385 20.9749 13.6171 20.9246C13.4957 20.8742 13.3854 20.8005 13.2925 20.7075L10.2925 17.7075C10.1049 17.5199 9.99945 17.2654 9.99945 17C9.99945 16.7346 10.1049 16.4801 10.2925 16.2925C10.4801 16.1049 10.7346 15.9994 11 15.9994C11.2654 15.9994 11.5199 16.1049 11.7075 16.2925L14 18.5863L20.2925 12.2925C20.3854 12.1996 20.4957 12.1259 20.6171 12.0756C20.7385 12.0253 20.8686 11.9994 21 11.9994C21.1314 11.9994 21.2615 12.0253 21.3829 12.0756C21.5043 12.1259 21.6146 12.1996 21.7075 12.2925C21.8004 12.3854 21.8741 12.4957 21.9244 12.6171C21.9747 12.7385 22.0006 12.8686 22.0006 13C22.0006 13.1314 21.9747 13.2615 21.9244 13.3829C21.8741 13.5043 21.8004 13.6146 21.7075 13.7075Z"
                      fill="#121212"
                    />
                  </svg>
                  <span className="font-sans text-[12px] font-medium text-noprob-text">
                    {t.badgeTrial}
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="button-principal !w-full disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {isSubmitting ? t.submitting : t.submit}
                </button>

                <p className="text-center font-sans text-[12px] font-medium tracking-[-0.04em] text-noprob-text">
                  {t.afterSubmit}
                </p>
                {serverError && (
                  <p className="text-center font-sans text-[10px] font-medium text-red-500">
                    {serverError}
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Reviews Grid under the form block */}
      <div className="mx-auto grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
        {/* Card Cristiana Z. */}
        <article className="flex h-auto flex-col items-start justify-between rounded-[16px] border-[6px] border-[#f8f8f8] bg-white p-[24px] shadow-xl shadow-black/5 overflow-visible gap-[15px]">
          <ReviewText text={r.cristiana} />

          <div className="mt-0 w-full flex flex-col gap-[15px]">
            <div className="h-5 w-auto">
              <Image
                src={siteAssets.trustpilotWordmark}
                alt="Trustpilot rating"
                width={100}
                height={20}
                className="h-full w-auto object-contain object-left"
              />
            </div>

            <div className="mt-0 flex items-center gap-3 text-[#181818]">
              <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border border-black/5">
                <Image
                  src="/images/originals/no-prob-cristiana-z.webp"
                  alt="Cristiana Z."
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col text-[#181818]">
                <p className="font-sans text-[18px] font-medium leading-[1.3em] tracking-[-0.02em] text-[#363636]">
                  Cristiana Z.
                </p>
                <p className="font-sans text-[12px] font-medium tracking-[-0.04em] text-noprob-grey sm:whitespace-nowrap">
                  {r.cristianaRole}
                </p>
              </div>
            </div>
          </div>
        </article>

        {/* Card Camilla Dudine */}
        <article className="flex h-auto flex-col items-start justify-between rounded-[16px] border-[6px] border-[#f8f8f8] bg-white p-[24px] shadow-xl shadow-black/5 overflow-visible gap-[15px]">
          <ReviewText text={r.camilla} />

          <div className="mt-0 w-full flex flex-col gap-[15px]">
            <div className="h-5 w-auto">
              <Image
                src={siteAssets.trustpilotWordmark}
                alt="Trustpilot rating"
                width={100}
                height={20}
                className="h-full w-auto object-contain object-left"
              />
            </div>

            <div className="mt-0 flex items-center gap-3 text-[#181818]">
              <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border border-black/5">
                <Image
                  src="/images/originals/btYlkzRXpOBFU8seMDbnX8BY8.jpeg"
                  alt="Camilla Dudine"
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col text-[#181818]">
                <p className="font-sans text-[18px] font-medium leading-[1.3em] tracking-[-0.02em] text-[#363636]">
                  Camilla Dudine
                </p>
                <p className="font-sans text-[12px] font-medium tracking-[-0.04em] text-noprob-grey">
                  {r.camillaRole}
                </p>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}
