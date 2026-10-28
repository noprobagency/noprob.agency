import Image from 'next/image'
import Link from 'next/link'

import SectionLabel from '@/components/ui/SectionLabel'
import { cn } from '@/lib/utils'
import { siteAssets } from '@/lib/site'
import { type Locale } from '@/lib/i18n'
import {
  AMBASSADOR_TERMS as T,
  AMBASSADOR_TIERS,
  ambassadorCommission,
  formatEur,
  getAmbassadorCopy,
} from '@/lib/i18n/ambassador'

/**
 * Ambassador playbook (IT `/it/ambassador`, EN `/ambassador`), linked from the
 * footer, noindex. A long, text-first document split into boxed sections. No
 * CTAs, no form: the offer it describes is the Shopify Launch Sprint.
 */

const CARD_BASE = 'rounded-card shadow-card p-6 min-[810px]:p-8'
const CARD = `${CARD_BASE} border-card-thick bg-noprob-card`
const tinted = (border: string) => `${CARD_BASE} border-[6px] bg-noprob-card ${border}`
const CARD_YELLOW = tinted('border-[rgb(255_222_0_/_30%)]')
const CARD_GREEN = tinted('border-[rgb(206_232_204)]')
const CARD_RED = tinted('border-[rgb(245_214_214)]')
const CARD_PURPLE = tinted('border-[rgb(219_204_232)]')
const CARD_DARK = 'rounded-card border border-np-border-dk bg-[#111] p-6 min-[810px]:p-8'
const BODY = 'font-sans text-body-sm font-medium leading-[1.6em] text-noprob-text'
const BODY_DARK = 'font-sans text-body-sm font-medium leading-[1.6em] text-[#cfcfcf]'
const CARD_TITLE = 'text-np-h3 text-noprob-text'

function Section({
  id,
  label,
  heading,
  headingEm,
  intro,
  dark = false,
  children,
}: {
  id: string
  label: string
  heading: string
  headingEm: string
  intro?: string
  dark?: boolean
  children: React.ReactNode
}) {
  return (
    <section
      id={id}
      data-header-theme={dark ? 'dark' : undefined}
      className={cn('scroll-mt-28 py-[40px] min-[810px]:py-[56px]', dark && 'bg-black')}
    >
      <div className="container-noprob">
        <div className="mx-auto max-w-[900px]">
          <div className="mx-auto max-w-[720px] text-center">
            <SectionLabel>{label}</SectionLabel>
            <h2 className={cn('mt-5 text-np-h2 text-center', dark ? 'text-[#f9f9f9]' : 'text-np-dark')}>
              {heading}
              <em className="font-serif italic">{headingEm}</em>
            </h2>
            {intro && (
              <p
                className={cn(
                  'mt-5 font-sans text-body-lg font-medium',
                  dark ? 'text-[#f9f9f9]' : 'text-noprob-text'
                )}
              >
                {intro}
              </p>
            )}
          </div>
          <div className="mt-8 flex flex-col gap-4">{children}</div>
        </div>
      </div>
    </section>
  )
}

function Check({ tone = 'green' }: { tone?: 'green' | 'red' | 'dark' }) {
  if (tone === 'red') {
    return (
      <svg viewBox="0 0 20 20" className="mt-[2px] h-[18px] w-[18px] shrink-0" aria-hidden>
        <circle cx="10" cy="10" r="10" fill="rgb(245,214,214)" />
        <path d="M6.5 6.5l7 7M13.5 6.5l-7 7" stroke="#b42318" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    )
  }
  return (
    <svg viewBox="0 0 20 20" className="mt-[2px] h-[18px] w-[18px] shrink-0" aria-hidden>
      <circle cx="10" cy="10" r="10" fill={tone === 'dark' ? '#121212' : 'rgb(206,232,204)'} />
      <path
        d="M6 10.3l2.6 2.6L14 7.5"
        stroke={tone === 'dark' ? '#fff' : 'rgb(24,24,24)'}
        strokeWidth="1.8"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function CheckList({ items, tone }: { items: string[]; tone?: 'green' | 'red' | 'dark' }) {
  return (
    <ul className="flex flex-col gap-3">
      {items.map((item) => (
        <li key={item} className={cn('flex gap-3', BODY)}>
          <Check tone={tone} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

function Num({ n, dark = false }: { n: number; dark?: boolean }) {
  return (
    <span
      className={cn(
        'inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full font-display text-[14px] font-bold',
        dark ? 'bg-white text-black' : 'bg-np-mark-green text-np-dark'
      )}
    >
      {n}
    </span>
  )
}

export default function AmbassadorPlaybook({ locale = 'it' }: { locale?: Locale }) {
  const d = getAmbassadorCopy(locale)
  const eur = (n: number) => formatEur(n, locale)
  const commission = ambassadorCommission(AMBASSADOR_TIERS[0].price)
  const landingHref = d.materials.links[0].href

  return (
    <main className="pb-10">
      {/* Hero */}
      <section className="flex flex-col items-center px-5 pb-[24px] pt-[90px] min-[810px]:px-[34px] min-[810px]:pt-[120px]">
        <div
          className="flex w-full flex-col items-center gap-6 rounded-card border-2 border-np-border px-5 pb-8 pt-10 min-[810px]:max-w-[1200px] min-[810px]:px-10"
          style={{ background: 'linear-gradient(rgb(240, 240, 240) 40%, rgba(91, 191, 71, 0.26) 100%)' }}
        >
          <div className="flex flex-wrap items-center justify-center gap-2">
            <SectionLabel>{d.hero.label}</SectionLabel>
            <span className="inline-flex items-center gap-[6px] rounded-pill border border-np-border bg-white px-3 py-[7px] font-sans text-[12px] font-semibold tracking-[-0.02em] text-noprob-text">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden>
                <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
                <path d="M8 12.3l2.6 2.6L16 9.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {d.hero.badge}
            </span>
          </div>
          <h1 className="max-w-[860px] text-center text-np-hero text-np-dark">
            {d.hero.titlePart1}
            <em className="font-serif italic">{d.hero.titleEm}</em>
          </h1>
          <p className="max-w-[720px] text-center font-sans text-body-lg font-medium text-noprob-text">
            {d.hero.lead}
          </p>

          <dl className="grid w-full max-w-[900px] gap-3 min-[810px]:grid-cols-3">
            {d.hero.stats.map((s) => (
              <div key={s.label} className="flex flex-col gap-1 rounded-card border-card-thick bg-white p-4 shadow-card">
                <dt className="order-2 font-sans text-[13px] font-medium leading-[1.4em] text-noprob-grey">
                  {s.label}
                </dt>
                <dd className="order-1 font-display text-[26px] font-bold tracking-[-0.04em] text-np-dark min-[810px]:text-[30px]">
                  {s.value}
                </dd>
              </div>
            ))}
          </dl>

          <nav aria-label={d.hero.tocLabel} className="w-full max-w-[900px]">
            <p className="mb-3 text-center font-serif text-[14px] font-semibold italic text-noprob-grey">
              {d.hero.tocLabel}
            </p>
            <ol className="flex flex-wrap justify-center gap-2">
              {d.hero.toc.map((item, i) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="inline-flex items-center gap-[6px] rounded-pill border border-np-border bg-white/80 px-3 py-[6px] font-sans text-[13px] font-medium text-noprob-text transition-colors hover:border-np-dark"
                  >
                    <span className="text-noprob-grey">{String(i + 1).padStart(2, '0')}</span>
                    {item.label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </div>
      </section>

      {/* In short */}
      <Section id="come-funziona" label={d.summary.label} heading={d.summary.heading} headingEm={d.summary.headingEm}>
        <div className="grid gap-4 min-[810px]:grid-cols-2">
          {d.summary.steps.map((step, i) => (
            <article key={step.title} className={cn(CARD, 'flex gap-4')}>
              <Num n={i + 1} />
              <div className="flex flex-col gap-2">
                <h3 className={CARD_TITLE}>{step.title}</h3>
                <p className={BODY}>{step.description}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* Commission */}
      <Section
        id="commissioni"
        label={d.commission.label}
        heading={d.commission.heading}
        headingEm={d.commission.headingEm}
        dark
      >
        <div className={cn(CARD_DARK, 'flex flex-col items-center gap-3 text-center')}>
          <span className="font-display text-[72px] font-bold leading-none tracking-[-0.05em] text-white min-[810px]:text-[96px]">
            {d.commission.rateLabel}
          </span>
          <p className="max-w-[520px] font-sans text-body-lg font-medium text-[#f9f9f9]">{d.commission.rateNote}</p>
          <p className="mt-2 rounded-[10px] bg-white/10 px-4 py-3 font-sans text-body-sm font-semibold text-white">
            {d.commission.formula.before}
            <a href="#prezzo" className="underline underline-offset-4">
              {d.commission.formula.linkLabel}
            </a>
            {d.commission.formula.after}
          </p>
        </div>

        <div className={CARD_DARK}>
          <h3 className="text-np-h3 text-white">{d.commission.simulationTitle}</h3>
          <p className={cn(BODY_DARK, 'mt-1')}>{d.commission.simulationNote}</p>
          <dl className="mt-5 grid grid-cols-2 gap-3 min-[810px]:grid-cols-4">
            {d.commission.simulation.map((row) => (
              <div key={row.count} className="rounded-[12px] border border-np-border-dk p-4">
                <dt className="font-sans text-[13px] font-medium text-[#a9a9a9]">{row.label}</dt>
                <dd className="mt-1 font-display text-[24px] font-bold tracking-[-0.04em] text-white">
                  {eur(commission * row.count)}
                </dd>
              </div>
            ))}
          </dl>
          <p className={cn(BODY_DARK, 'mt-4')}>{d.commission.tierNote}</p>
        </div>

        <div className="grid gap-4 min-[810px]:grid-cols-2">
          {d.commission.rules.map((rule) => (
            <article key={rule.title} className={CARD_DARK}>
              <h3 className="text-np-h3 text-white">{rule.title}</h3>
              <p className={cn(BODY_DARK, 'mt-2')}>{rule.description}</p>
            </article>
          ))}
        </div>
      </Section>

      {/* Offer */}
      <Section
        id="offerta"
        label={d.offer.label}
        heading={d.offer.heading}
        headingEm={d.offer.headingEm}
        intro={d.offer.intro}
      >
        <article className={CARD}>
          <h3 className={CARD_TITLE}>{d.offer.includedTitle}</h3>
          <div className="mt-4">
            <CheckList items={d.offer.included} />
          </div>
        </article>

        <article className={CARD}>
          <h3 className={CARD_TITLE}>{d.offer.phasesTitle}</h3>
          <ol className="mt-4 grid gap-3 min-[810px]:grid-cols-3">
            {d.offer.phases.map((phase, i) => (
              <li key={phase.name} className="flex flex-col gap-2 rounded-[12px] bg-noprob-card-soft p-4">
                <span className="font-sans text-[12px] font-bold tracking-[0.04em] text-noprob-grey">
                  {String(i + 1).padStart(2, '0')} · {phase.duration}
                </span>
                <span className="font-serif text-[22px] font-medium tracking-[-0.04em] text-noprob-text">
                  {phase.name}
                </span>
                <p className={BODY}>{phase.description}</p>
              </li>
            ))}
          </ol>
        </article>

        <Link
          href={landingHref}
          target="_blank"
          className={cn(CARD_GREEN, 'group flex flex-col gap-1 transition-transform hover:-translate-y-[2px]')}
        >
          <span className="flex items-center justify-between gap-3 text-np-h3 text-noprob-text">
            {d.offer.landingLabel}
            <span aria-hidden className="text-noprob-grey transition-colors group-hover:text-np-dark">
              ↗
            </span>
          </span>
          <span className={BODY}>{d.offer.landingNote}</span>
          <span className="mt-1 break-all font-sans text-[12px] font-medium text-noprob-grey">
            noprob.agency{landingHref}
          </span>
        </Link>

        <div className="grid gap-4 min-[810px]:grid-cols-2">
          <article className={CARD}>
            <h3 className={CARD_TITLE}>{d.offer.platformsTitle}</h3>
            <p className={cn(BODY, 'mt-2')}>{d.offer.platforms}</p>
          </article>
          <article className={CARD_YELLOW}>
            <h3 className={CARD_TITLE}>{d.offer.whyTitle}</h3>
            <p className={cn(BODY, 'mt-2')}>{d.offer.why}</p>
          </article>
        </div>
      </Section>

      {/* Materials */}
      <Section
        id="materiali"
        label={d.materials.label}
        heading={d.materials.heading}
        headingEm={d.materials.headingEm}
        intro={d.materials.intro}
      >
        <div className="grid gap-4 min-[810px]:grid-cols-2">
          {d.materials.links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              target="_blank"
              rel={link.href.startsWith('http') ? 'nofollow noopener noreferrer' : undefined}
              className={cn(CARD, 'group flex flex-col gap-1 transition-transform hover:-translate-y-[2px]')}
            >
              <span className="flex items-center justify-between gap-3 text-np-h3 text-noprob-text">
                {link.label}
                <span aria-hidden className="text-noprob-grey transition-colors group-hover:text-np-dark">
                  ↗
                </span>
              </span>
              <span className={BODY}>{link.description}</span>
              <span className="mt-1 break-all font-sans text-[12px] font-medium text-noprob-grey">
                {link.href.startsWith('http') ? link.href.replace(/^https?:\/\/(www\.)?/, '') : `noprob.agency${link.href}`}
              </span>
            </Link>
          ))}
        </div>

      </Section>
      {/* Pricing */}
      <Section id="prezzo" label={d.pricing.label} heading={d.pricing.heading} headingEm={d.pricing.headingEm}>
        <article className={CARD}>
          <h3 className={CARD_TITLE}>{d.pricing.tiersTitle}</h3>
          <ol className="mt-4 flex flex-col divide-y divide-np-border">
            {d.pricing.tiers.map((tier, i) => (
              <li key={tier.label} className="flex flex-wrap items-center justify-between gap-x-6 gap-y-1 py-4">
                <div className="flex min-w-[220px] flex-1 flex-col gap-[2px]">
                  <span className="font-sans text-[12px] font-bold tracking-[0.04em] text-noprob-grey">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="font-sans text-body-sm font-semibold text-noprob-text">{tier.label}</span>
                  <span className="font-sans text-[13px] font-medium text-noprob-grey">{tier.under}</span>
                </div>
                <div className="flex flex-col items-end gap-[2px] text-right">
                  <span className="font-display text-[32px] font-bold leading-none tracking-[-0.05em] text-np-dark min-[810px]:text-[40px]">
                    {tier.price}
                  </span>
                  <span className="rounded-pill bg-np-mark-green px-3 py-[4px] font-sans text-[12px] font-semibold text-np-dark">
                    {tier.commission}
                  </span>
                </div>
              </li>
            ))}
          </ol>
          <div className="mt-6 w-full text-left">
            <CheckList items={d.pricing.points} />
          </div>
        </article>

        <div className="grid gap-4 min-[810px]:grid-cols-2">
          <article className={CARD}>
            <h3 className={CARD_TITLE}>{d.pricing.externalTitle}</h3>
            <p className={cn(BODY, 'mt-2')}>{d.pricing.external}</p>
            <a
              href="https://www.shopify.com/pricing"
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="mt-3 inline-block font-sans text-body-sm font-semibold text-noprob-text underline underline-offset-4"
            >
              {d.pricing.externalLinkLabel} ↗
            </a>
          </article>
          <article className={CARD_YELLOW}>
            <h3 className={CARD_TITLE}>{d.pricing.argumentTitle}</h3>
            <p className={cn(BODY, 'mt-2')}>{d.pricing.argument}</p>
          </article>
        </div>
      </Section>

      {/* Target */}
      <Section
        id="target"
        label={d.target.label}
        heading={d.target.heading}
        headingEm={d.target.headingEm}
        intro={d.target.intro}
      >
        <div className="grid gap-4 min-[810px]:grid-cols-2">
          <article className={CARD_GREEN}>
            <h3 className={CARD_TITLE}>{d.target.yesTitle}</h3>
            <div className="mt-4">
              <CheckList items={d.target.yes} />
            </div>
          </article>
          <article className={CARD_RED}>
            <h3 className={CARD_TITLE}>{d.target.noTitle}</h3>
            <div className="mt-4">
              <CheckList items={d.target.no} tone="red" />
            </div>
          </article>
        </div>
        <article className={CARD_YELLOW}>
          <h3 className={CARD_TITLE}>{d.target.doubtTitle}</h3>
          <p className={cn(BODY, 'mt-2')}>{d.target.doubt}</p>
        </article>
      </Section>

      {/* Pains */}
      <Section
        id="problemi"
        label={d.pains.label}
        heading={d.pains.heading}
        headingEm={d.pains.headingEm}
        intro={d.pains.intro}
      >
        <div className="grid gap-4 min-[810px]:grid-cols-3">
          {d.pains.items.map((pain) => (
            <article key={pain.title} className={cn(CARD, 'flex flex-col gap-3 !p-6')}>
              <h3 className={CARD_TITLE}>{pain.title}</h3>
              <div>
                <p className="font-sans text-[11px] font-bold uppercase tracking-[0.06em] text-noprob-grey">
                  {d.pains.quoteLabel}
                </p>
                <p className="mt-1 font-serif text-[17px] font-medium italic leading-[1.35em] tracking-[-0.02em] text-noprob-text">
                  {pain.quote}
                </p>
              </div>
              <div className="mt-auto border-t border-np-border pt-3">
                <p className="font-sans text-[11px] font-bold uppercase tracking-[0.06em] text-np-green-trust">
                  {d.pains.fixLabel}
                </p>
                <p className={cn(BODY, 'mt-1')}>{pain.fix}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* Prospecting */}
      <Section
        id="dove-trovarli"
        label={d.prospecting.label}
        heading={d.prospecting.heading}
        headingEm={d.prospecting.headingEm}
      >
        <article className={cn(CARD_YELLOW, 'flex flex-col gap-2')}>
          <h3 className={CARD_TITLE}>{d.prospecting.idealTitle}</h3>
          <p className={BODY}>{d.prospecting.ideal}</p>
        </article>
        <div className="grid gap-4 min-[810px]:grid-cols-2">
          <article className={CARD}>
            <h3 className={CARD_TITLE}>{d.prospecting.signalsTitle}</h3>
            <div className="mt-4">
              <CheckList items={d.prospecting.signals} />
            </div>
          </article>
          <article className={CARD}>
            <h3 className={CARD_TITLE}>{d.prospecting.networkTitle}</h3>
            <div className="mt-4">
              <CheckList items={d.prospecting.network} />
            </div>
          </article>
        </div>
        <article className={CARD_PURPLE}>
          <h3 className={CARD_TITLE}>{d.prospecting.checkTitle}</h3>
          <ol className="mt-4 flex flex-col gap-3">
            {d.prospecting.check.map((step, i) => (
              <li key={step} className={cn('flex items-start gap-3', BODY)}>
                <Num n={i + 1} />
                <span className="pt-[5px]">{step}</span>
              </li>
            ))}
          </ol>
        </article>
      </Section>

      {/* Pitch */}
      <Section id="pitch" label={d.pitch.label} heading={d.pitch.heading} headingEm={d.pitch.headingEm}>
        <article className={cn(CARD, 'flex flex-col gap-6')}>
          <div className="flex flex-col items-start gap-4 min-[810px]:flex-row min-[810px]:items-center min-[810px]:gap-8">
            <Image
              src="/images/shopify-partners.png"
              alt={d.pitch.partnerAlt}
              width={638}
              height={192}
              className="h-auto w-[200px] shrink-0 min-[810px]:w-[240px]"
            />
            <div className="flex flex-col gap-2">
              <h3 className={CARD_TITLE}>{d.pitch.whoTitle}</h3>
              <p className={BODY}>{d.pitch.partnerText}</p>
            </div>
          </div>
          <dl className="grid grid-cols-2 gap-3 min-[810px]:grid-cols-4">
            {d.pitch.authorityStats.map((s) => (
              <div key={s.label} className="flex flex-col gap-1 rounded-[12px] bg-noprob-card-soft p-4">
                <dt className="order-2 font-sans text-[13px] font-medium leading-[1.4em] text-noprob-grey">
                  {s.label}
                </dt>
                <dd className="order-1 font-display text-[26px] font-bold tracking-[-0.04em] text-np-dark">
                  {s.value}
                </dd>
              </div>
            ))}
          </dl>
        </article>

        <div className="grid gap-4 min-[810px]:grid-cols-2">
          <article className={cn(CARD, 'flex flex-col gap-4')}>
            <div className="flex items-center gap-4">
              <div className="relative h-[72px] w-[72px] shrink-0 overflow-hidden rounded-full bg-np-mark-green">
                <Image
                  src={siteAssets.heroAntonio}
                  alt={d.pitch.antonio.name}
                  fill
                  sizes="72px"
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-serif text-[24px] font-medium tracking-[-0.04em] text-noprob-text">
                  {d.pitch.antonio.name}
                </p>
                <p className="font-sans text-[13px] font-medium text-noprob-grey">{d.pitch.antonio.role}</p>
              </div>
            </div>
            <p className={BODY}>{d.pitch.antonio.bio}</p>
            <CheckList items={d.pitch.antonio.points} />
          </article>
          <article className={cn(CARD_PURPLE, 'flex flex-col gap-4')}>
            <h3 className="font-serif text-[24px] font-medium tracking-[-0.04em] text-noprob-text">
              {d.pitch.team.title}
            </h3>
            <p className={BODY}>{d.pitch.team.description}</p>
            <ul className="flex flex-wrap gap-2">
              {d.pitch.team.skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-pill border border-np-border bg-white px-3 py-[6px] font-sans text-[13px] font-medium text-noprob-text"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </article>
        </div>

        <article className={`${CARD_BASE} border-[6px] border-np-dark bg-np-dark`}>
          <h3 className="text-np-h3 text-white">{d.pitch.pitchTitle}</h3>
          <p className="mt-3 font-serif text-[19px] font-medium italic leading-[1.5em] tracking-[-0.02em] text-white min-[810px]:text-[21px]">
            {d.pitch.pitch}
          </p>
        </article>

        <div className="grid gap-4 min-[810px]:grid-cols-2">
          <article className={CARD}>
            <h3 className={CARD_TITLE}>{d.pitch.messagesTitle}</h3>
            <ol className="mt-4 flex flex-col gap-3">
              {d.pitch.messages.map((m, i) => (
                <li key={m} className={cn('flex items-start gap-3', BODY)}>
                  <Num n={i + 1} />
                  <span className="pt-[5px]">{m}</span>
                </li>
              ))}
            </ol>
          </article>
          <article className={CARD}>
            <h3 className={CARD_TITLE}>{d.pitch.proofTitle}</h3>
            <p className={cn(BODY, 'mt-2')}>{d.pitch.proof}</p>
            <p className={cn(BODY, 'mt-4')}>{d.pitch.proofFoot}</p>
          </article>
        </div>

        <article className={CARD}>
          <h3 className={CARD_TITLE}>{d.pitch.objectionsTitle}</h3>
          <dl className="mt-4 grid gap-3 min-[810px]:grid-cols-2">
            {d.pitch.objections.map((o) => (
              <div key={o.question} className="rounded-[12px] bg-noprob-card-soft p-4">
                <dt className="font-serif text-[18px] font-medium italic tracking-[-0.03em] text-noprob-text">
                  {o.question}
                </dt>
                <dd className={cn(BODY, 'mt-2')}>{o.answer}</dd>
              </div>
            ))}
          </dl>
        </article>
      </Section>

      {/* Qualify */}
      <Section
        id="qualificare"
        label={d.qualify.label}
        heading={d.qualify.heading}
        headingEm={d.qualify.headingEm}
        intro={d.qualify.intro}
      >
        <article className={CARD}>
          <ol className="flex flex-col divide-y divide-np-border">
            {d.qualify.questions.map((q, i) => (
              <li key={q.question} className="flex items-start gap-4 py-4 first:pt-0 last:pb-0">
                <Num n={i + 1} />
                <div className="flex flex-col gap-1 pt-[4px]">
                  <p className="font-sans text-body-lg font-semibold tracking-[-0.02em] text-noprob-text">
                    {q.question}
                  </p>
                  <p className="font-sans text-body-sm font-medium text-noprob-grey">
                    <span className="font-semibold">{d.qualify.whyLabel}:</span> {q.why}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </article>
      </Section>

      {/* Two ways to sell */}
      <Section
        id="vendita"
        label={d.modes.label}
        heading={d.modes.heading}
        headingEm={d.modes.headingEm}
        intro={d.modes.intro}
      >
        <div className="grid gap-4 min-[810px]:grid-cols-2">
          {d.modes.items.map((mode, idx) => (
            <article
              key={mode.title}
              className={idx === 0 ? CARD_GREEN : CARD_PURPLE}
            >
              <span
                className={cn(
                  'inline-flex rounded-[8px] px-3 py-[5px] font-sans text-[12px] font-bold tracking-[0.04em] text-np-dark',
                  idx === 0 ? 'bg-np-mark-green' : 'bg-np-mark-purple'
                )}
              >
                {mode.tag}
              </span>
              <h3 className="mt-3 font-serif text-[24px] font-medium tracking-[-0.04em] text-noprob-text">
                {mode.title}
              </h3>
              <p className={cn(BODY, 'mt-1 text-noprob-grey')}>{mode.forWho}</p>
              <ol className="mt-4 flex flex-col gap-3">
                {mode.steps.map((step, i) => (
                  <li key={step} className={cn('flex items-start gap-3', BODY)}>
                    <Num n={i + 1} />
                    <span className="pt-[5px]">{step}</span>
                  </li>
                ))}
              </ol>
            </article>
          ))}
        </div>
        <article className={CARD_YELLOW}>
          <h3 className={CARD_TITLE}>{d.modes.hotLeadTitle}</h3>
          <p className={cn(BODY, 'mt-2')}>{d.modes.hotLead}</p>
        </article>
      </Section>

      {/* Promotion */}
      <Section
        id="promozione"
        label={d.promotion.label}
        heading={d.promotion.heading}
        headingEm={d.promotion.headingEm}
        intro={d.promotion.intro}
      >
        <div className="grid gap-4 min-[810px]:grid-cols-2">
          <article className={CARD}>
            <h3 className={CARD_TITLE}>{d.promotion.ideasTitle}</h3>
            <div className="mt-4">
              <CheckList items={d.promotion.ideas} />
            </div>
          </article>
          <article className={CARD_RED}>
            <h3 className={CARD_TITLE}>{d.promotion.rulesTitle}</h3>
            <div className="mt-4">
              <CheckList items={d.promotion.rules} tone="dark" />
            </div>
          </article>
        </div>
      </Section>

      {/* Attribution */}
      <Section
        id="regole"
        label={d.attribution.label}
        heading={d.attribution.heading}
        headingEm={d.attribution.headingEm}
      >
        <div className="grid gap-4 min-[810px]:grid-cols-2">
          {d.attribution.items.map((item, i) => (
            <article
              key={item.title}
              className={cn(CARD, i === d.attribution.items.length - 1 && 'min-[810px]:col-span-2')}
            >
              <h3 className={CARD_TITLE}>{item.title}</h3>
              <p className={cn(BODY, 'mt-2')}>{item.description}</p>
            </article>
          ))}
        </div>
      </Section>

      {/* Handoff */}
      <Section id="segnalare" label={d.handoff.label} heading={d.handoff.heading} headingEm={d.handoff.headingEm}>
        <div className="grid gap-4 min-[810px]:grid-cols-[1.4fr_1fr]">
          <article className={CARD}>
            <h3 className={CARD_TITLE}>{d.handoff.fieldsTitle}</h3>
            <div className="mt-4">
              <CheckList items={d.handoff.fields} />
            </div>
          </article>
          <article className={cn(CARD, 'flex flex-col gap-4')}>
            <h3 className={CARD_TITLE}>{d.handoff.channelsTitle}</h3>
            <div className="rounded-[12px] bg-noprob-card-soft p-4">
              <p className="font-sans text-[12px] font-semibold uppercase tracking-[0.04em] text-noprob-grey">
                {d.handoff.emailLabel}
              </p>
              <a
                href={`mailto:${T.contactEmail}`}
                className="mt-1 block break-all font-sans text-body-lg font-semibold text-noprob-text underline underline-offset-4"
              >
                {T.contactEmail}
              </a>
            </div>
            <div className="rounded-[12px] bg-noprob-card-soft p-4">
              <p className="font-sans text-[12px] font-semibold uppercase tracking-[0.04em] text-noprob-grey">
                {d.handoff.whatsappLabel}
              </p>
              <a
                href={T.whatsappUrl}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="mt-1 block font-sans text-body-lg font-semibold text-noprob-text underline underline-offset-4"
              >
                {T.whatsappDisplay}
              </a>
            </div>
            <p className={cn(BODY, 'text-noprob-grey')}>{d.handoff.subjectHint}</p>
            <p className={cn(BODY, 'text-noprob-grey')}>{d.handoff.privacy}</p>
          </article>
        </div>
      </Section>

      {/* FAQ */}
      <Section id="faq" label={d.faq.label} heading={d.faq.heading} headingEm={d.faq.headingEm}>
        <div className="grid gap-4 min-[810px]:grid-cols-2">
          {d.faq.items.map((item) => (
            <article key={item.question} className={CARD}>
              <h3 className={CARD_TITLE}>{item.question}</h3>
              <p className={cn(BODY, 'mt-2')}>{item.answer}</p>
            </article>
          ))}
        </div>
      </Section>

      {/* Closing */}
      <div className="container-noprob py-[40px]">
        <div className="mx-auto flex max-w-[640px] flex-col items-center gap-2 text-center">
          <p className="font-sans text-body-lg font-medium text-noprob-text">{d.materials.closing}</p>
          <p className="font-serif text-[18px] font-medium italic text-noprob-text">{d.materials.signature}</p>
          <p className="mt-4 font-sans text-[12px] font-medium text-noprob-grey">
            {d.materials.updated} · {d.materials.terms}
          </p>
        </div>
      </div>
    </main>
  )
}

