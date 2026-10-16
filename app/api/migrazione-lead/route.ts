import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

import { migrazioneSchema } from '@/lib/schemas/migrazione'
import { buildWelcomeEmail } from '@/lib/emails/welcome'
import { buildSprintWelcomeEmail } from '@/lib/emails/sprint'
import { ROUTE_PATHS } from '@/lib/i18n/routes'
import { siteConfig } from '@/lib/site'
import { zeroLossSchema } from '@/lib/schemas/zeroLoss'
import { estimateTier } from '@/lib/zero-loss/tier'
import { ZL_SOURCE_ID } from '@/content/zero-loss-migration'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const ADMIN_FROM = 'noprob agency <noreply@noprob.agency>'
const ADMIN_TO = 'antonio@noprob.agency'
const WELCOME_FROM = 'Antonio @ NoProb <antonio@noprob.agency>'
const WELCOME_REPLY_TO = 'antonio@noprob.agency'

const WA_TEXT_EN =
  'Hi%20Antonio%2C%20I%20just%20applied%20for%20the%20Shopify%20migration%20on%20noprob.agency%20and%20wanted%20to%20connect%20directly.'
const WA_TEXT_IT =
  'Ciao%20Antonio%2C%20ho%20appena%20inviato%20la%20candidatura%20per%20la%20migrazione%20a%20Shopify%20su%20noprob.agency.'
const BOOKING_URL_EN = 'https://noprob.agency/thank-you'
const BOOKING_URL_IT = 'https://noprob.agency/it/grazie'

// --- Zero-Loss Migration Sprint branch -------------------------------------
// The landing /zero-loss-migration posts to this same endpoint with
// `source: "zero-loss-migration"`. Its form has different fields, so it gets
// its own schema + admin email; the original migrazione/sviluppo/datateam
// flow below is untouched.

// Best-effort per-IP rate limit (in-memory, per serverless instance): the
// landing has no visible captcha, so this plus honeypot + time trap is the
// anti-spam layer.
const ZL_RATE_WINDOW_MS = 10 * 60 * 1000
const ZL_RATE_MAX = 5
const zlRate = new Map<string, number[]>()

function zlRateLimited(ip: string): boolean {
  const now = Date.now()
  const hits = (zlRate.get(ip) ?? []).filter((t) => now - t < ZL_RATE_WINDOW_MS)
  hits.push(now)
  zlRate.set(ip, hits)
  if (zlRate.size > 5000) zlRate.clear()
  return hits.length > ZL_RATE_MAX
}

function esc(value: unknown): string {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

async function handleZeroLoss(req: NextRequest, body: unknown) {
  const parsed = zeroLossSchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json(
      { error: 'Campi non validi. Controlla i dati inseriti.', issues: parsed.error.flatten().fieldErrors },
      { status: 400 }
    )
  }
  const d = parsed.data

  // Never accept what the client already stops: Shopify origin.
  if (d.platform === 'shopify') {
    return NextResponse.json({ error: 'Not eligible' }, { status: 422 })
  }

  const isBot = (d.hp ?? '').trim() !== '' || (typeof d.elapsedMs === 'number' && d.elapsedMs < 2500)
  if (isBot) {
    console.warn('[migrazione-lead][zero-loss] Dropped spam submission (honeypot/timing)')
    return NextResponse.json({ ok: true })
  }

  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown'
  if (zlRateLimited(ip)) {
    return NextResponse.json({ error: 'Too many requests' }, { status: 429 })
  }

  // Recompute the tier server-side so the email never shows a tampered price.
  const estimate = estimateTier({ revenue: d.revenue_band, products: d.products, languages: d.languages, erp: d.erp })
  if (!estimate) return NextResponse.json({ error: 'Not eligible' }, { status: 422 })
  const { tier, addon } = estimate

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.error('[migrazione-lead][zero-loss] RESEND_API_KEY missing')
    return NextResponse.json({ error: 'Email service not configured' }, { status: 500 })
  }
  const resend = new Resend(apiKey)

  const siteHref = /^https?:\/\//i.test(d.websiteUrl) ? d.websiteUrl : `https://${d.websiteUrl}`
  const utm = [d.utm_source, d.utm_medium, d.utm_campaign, d.utm_term, d.utm_content].filter(Boolean).join(' / ') || '-'
  const eur = (n: number) => `€${n.toLocaleString('it-IT')}`

  try {
    const { error } = await resend.emails.send({
      from: ADMIN_FROM,
      to: [ADMIN_TO],
      replyTo: d.email,
      subject: `[Zero-Loss Sprint] Tier ${tier.id} · ${d.platform} · ${d.websiteUrl}`,
      html: `
        <p style="font-family:system-ui,sans-serif;font-size:15px;font-weight:600;margin:0 0 8px;padding:8px 12px;background:#eef8ef;border-left:3px solid #1dcc5d">
          Tier ${tier.id} · ${eur(tier.price)} (4 x ${eur(tier.installment)}, IVA esclusa)${addon ? ' · possibili add-on' : ''} · ${esc(d.revenue_band)} · ${esc(d.platform)} · ${esc(d.start_timing)}
        </p>
        <p style="font-family:system-ui,sans-serif;font-size:13px;margin:0 0 12px;padding:0 12px">
          Store: <a href="${esc(siteHref)}">${esc(d.websiteUrl)}</a>${d.phone ? ` · Tel: <a href="tel:${esc(d.phone.replace(/[^\d+]/g, ''))}">${esc(d.phone)}</a>` : ''}
        </p>
        <h2>Nuova candidatura Zero-Loss Migration Sprint</h2>
        <table cellpadding="6" cellspacing="0" style="border-collapse:collapse;font-family:system-ui,sans-serif;font-size:14px">
          <tr><td><strong>Nome:</strong></td><td>${esc(d.name)}</td></tr>
          <tr><td><strong>Email:</strong></td><td>${esc(d.email)}</td></tr>
          <tr><td><strong>Telefono:</strong></td><td>${esc(d.phone || '-')}</td></tr>
          <tr><td><strong>Store:</strong></td><td>${esc(d.websiteUrl)}</td></tr>
          <tr><td><strong>Piattaforma:</strong></td><td>${esc(d.platform)}</td></tr>
          <tr><td><strong>Fatturato aziendale:</strong></td><td>${esc(d.revenue_band)}</td></tr>
          <tr><td><strong>Prodotti attivi:</strong></td><td>${esc(d.products)}</td></tr>
          <tr><td><strong>Lingue e valute:</strong></td><td>${esc(d.languages)}</td></tr>
          <tr><td><strong>Gestionale / ERP:</strong></td><td>${d.erp === 'yes' ? esc(d.erpName || 'sì') : 'no'}</td></tr>
          <tr><td><strong>Quando partire:</strong></td><td>${esc(d.start_timing)}</td></tr>
          <tr><td valign="top"><strong>Perché Shopify:</strong></td><td>${esc(d.reason)}</td></tr>
          <tr><td><strong>Scaglione stimato:</strong></td><td>Tier ${tier.id} · ${eur(tier.price)} · 4 rate da ${eur(tier.installment)}${addon ? ' · add-on da valutare (prodotti/lingue/gestionale oltre il cap)' : ''}</td></tr>
          <tr><td><strong>Lingua:</strong></td><td>${esc(d.locale)}</td></tr>
          <tr><td><strong>UTM:</strong></td><td>${esc(utm)}</td></tr>
          <tr><td><strong>Source:</strong></td><td>${ZL_SOURCE_ID}</td></tr>
        </table>
      `,
    })

    if (error) {
      console.error('[migrazione-lead][zero-loss] Admin email Resend error:', error)
      return NextResponse.json({ error: 'Failed to send email' }, { status: 502 })
    }
  } catch (err) {
    console.error('[migrazione-lead][zero-loss] Admin email unexpected error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }

  // 2) Confirmation to the lead - best-effort, never fails the request. It
  // repeats the 48-hour promise and the estimated tier shown in the form.
  const isIT = d.locale === 'it'
  try {
    const waText = isIT
      ? 'Ciao Antonio, ho appena inviato la candidatura allo Shopify Launch Sprint su noprob.agency.'
      : 'Hi Antonio, I just applied for the Shopify Launch Sprint on noprob.agency.'
    const { error } = await resend.emails.send({
      from: WELCOME_FROM,
      to: [d.email],
      replyTo: WELCOME_REPLY_TO,
      subject: isIT ? 'Candidatura ricevuta · Shopify Launch Sprint' : 'Application received · Shopify Launch Sprint',
      html: buildSprintWelcomeEmail({
        name: d.name,
        isIT,
        storeUrl: d.websiteUrl,
        tierId: tier.id,
        price: eur(tier.price),
        installment: eur(tier.installment),
        addon,
        dashboardUrl: `${siteConfig.url}${ROUTE_PATHS.demoDashboard[isIT ? 'it' : 'en']}`,
        waUrl: `https://wa.me/393204063459?text=${encodeURIComponent(waText)}`,
        landingUrl: `${siteConfig.url}${ROUTE_PATHS.zeroLossMigration[isIT ? 'it' : 'en']}`,
      }),
    })
    if (error) console.error('[migrazione-lead][zero-loss] Lead email Resend error:', error)
  } catch (err) {
    console.error('[migrazione-lead][zero-loss] Lead email unexpected error:', err)
  }

  return NextResponse.json({ ok: true, tier: tier.id })
}

export async function POST(req: NextRequest) {
  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  if (body && typeof body === 'object' && (body as { source?: unknown }).source === ZL_SOURCE_ID) {
    return handleZeroLoss(req, body)
  }

  const parsed = migrazioneSchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json(
      { error: 'Campi non validi. Controlla i dati inseriti.', issues: parsed.error.flatten().fieldErrors },
      { status: 400 }
    )
  }

  // Anti-spam gate: honeypot filled OR submitted implausibly fast = bot.
  // Runs before anything else. Respond 200 so the bot thinks it succeeded,
  // but send nothing.
  const isBot =
    (parsed.data.hp ?? '').trim() !== '' ||
    (typeof parsed.data.elapsedMs === 'number' && parsed.data.elapsedMs < 2500)
  if (isBot) {
    console.warn('[migrazione-lead] Dropped spam submission (honeypot/timing)')
    return NextResponse.json({ ok: true })
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.error('[migrazione-lead] RESEND_API_KEY missing')
    return NextResponse.json({ error: 'Email service not configured' }, { status: 500 })
  }
  const resend = new Resend(apiKey)

  const { name, email, brand, websiteUrl, platform, revenue, timeline, reason } = parsed.data
  const locale = parsed.data.locale ?? 'it'
  const source = parsed.data.source ?? 'migrazione'
  const SUBJECTS: Record<string, string> = {
    migrazione: `Nuova candidatura migrazione: ${brand.replace(/[\r\n]+/g, ' ')}`,
    sviluppo: `Nuova candidatura sviluppo: ${brand.replace(/[\r\n]+/g, ' ')}`,
    datateam: `Nuova candidatura Data Team: ${brand.replace(/[\r\n]+/g, ' ')}`,
  }
  const HEADINGS: Record<string, string> = {
    migrazione: 'Nuova candidatura migrazione Shopify',
    sviluppo: 'Nuova candidatura sviluppo Shopify',
    datateam: 'Nuova candidatura Data-Driven Team',
  }
  const adminSubject = SUBJECTS[source] ?? SUBJECTS.migrazione
  const adminHeading = HEADINGS[source] ?? HEADINGS.migrazione

  // 1) Admin notification - must succeed for the request to be considered OK
  try {
    const { error } = await resend.emails.send({
      from: ADMIN_FROM,
      to: [ADMIN_TO],
      replyTo: email,
      subject: adminSubject,
      html: `
        <h2>${adminHeading}</h2>
        <table cellpadding="6" cellspacing="0" style="border-collapse:collapse;font-family:system-ui,sans-serif;font-size:14px">
          <tr><td><strong>Nome:</strong></td><td>${esc(name)}</td></tr>
          <tr><td><strong>Brand:</strong></td><td>${esc(brand)}</td></tr>
          <tr><td><strong>Email:</strong></td><td>${esc(email)}</td></tr>
          <tr><td><strong>Sito attuale:</strong></td><td>${esc(websiteUrl)}</td></tr>
          <tr><td><strong>Piattaforma:</strong></td><td>${esc(platform)}</td></tr>
          <tr><td><strong>Fatturato annuo:</strong></td><td>${esc(revenue)}</td></tr>
          <tr><td><strong>Partenza:</strong></td><td>${esc(timeline)}</td></tr>
          <tr><td valign="top"><strong>Motivo:</strong></td><td>${esc(reason)}</td></tr>
          <tr><td><strong>Lingua:</strong></td><td>${esc(locale)}</td></tr>
        </table>
      `,
    })

    if (error) {
      console.error('[migrazione-lead] Admin email Resend error:', error)
      return NextResponse.json({ error: 'Failed to send email' }, { status: 502 })
    }
  } catch (err) {
    console.error('[migrazione-lead] Admin email unexpected error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }

  // 2) Welcome email to the lead - best-effort (never fails the request)
  const isIT = locale === 'it'
  try {
    const { error } = await resend.emails.send({
      from: WELCOME_FROM,
      to: [email],
      replyTo: WELCOME_REPLY_TO,
      subject: isIT ? 'Candidatura ricevuta · NoProb Agency' : 'Application received · NoProb Agency',
      html: buildWelcomeEmail({
        name,
        isIT,
        waUrl: `https://wa.me/393204063459?text=${isIT ? WA_TEXT_IT : WA_TEXT_EN}`,
        bookingUrl: isIT ? BOOKING_URL_IT : BOOKING_URL_EN,
      }),
    })

    if (error) {
      console.error('[migrazione-lead] Welcome email Resend error:', error)
    }
  } catch (err) {
    console.error('[migrazione-lead] Welcome email unexpected error:', err)
  }

  return NextResponse.json({ ok: true })
}
