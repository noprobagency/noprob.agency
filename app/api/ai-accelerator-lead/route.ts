import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

import { aiSchema } from '@/lib/schemas/aiAccelerator'

function esc(value: unknown): string {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const ADMIN_FROM = 'noprob agency <noreply@noprob.agency>'
const ADMIN_TO = 'antonio@noprob.agency'

export async function POST(req: NextRequest) {
  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const parsed = aiSchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json(
      { error: 'Campi non validi. Controlla i dati inseriti.', issues: parsed.error.flatten().fieldErrors },
      { status: 400 }
    )
  }

  // Anti-spam gate: honeypot filled OR submitted implausibly fast = bot.
  // Same mechanism as /api/migrazione-lead: respond 200 so the bot thinks it
  // succeeded, but send nothing.
  const isBot =
    (parsed.data.hp ?? '').trim() !== '' ||
    (typeof parsed.data.elapsedMs === 'number' && parsed.data.elapsedMs < 2500)
  if (isBot) {
    console.warn('[ai-accelerator-lead] Dropped spam submission (honeypot/timing)')
    return NextResponse.json({ ok: true })
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.error('[ai-accelerator-lead] RESEND_API_KEY missing')
    return NextResponse.json({ error: 'Email service not configured' }, { status: 500 })
  }
  const resend = new Resend(apiKey)

  const { businessType, role, aiUsage, mainPain, name, email, legalName, phone, website } = parsed.data
  const locale = parsed.data.locale ?? 'it'
  const siteHref = /^https?:\/\//i.test(website) ? website : `https://${website}`

  try {
    const { error } = await resend.emails.send({
      from: ADMIN_FROM,
      to: [ADMIN_TO],
      replyTo: email,
      subject: `[AI Accelerator] Nuova candidatura: ${legalName.replace(/[\r\n]+/g, ' ')}`,
      html: `
        <p style="font-family:system-ui,sans-serif;font-size:15px;font-weight:600;margin:0 0 8px;padding:8px 12px;background:#eef3ff;border-left:3px solid #2f6bff">
          ${esc(businessType)} \u00b7 ${esc(role)} \u00b7 ${esc(aiUsage)} \u00b7 ${esc(legalName)}
        </p>
        <p style="font-family:system-ui,sans-serif;font-size:13px;margin:0 0 12px;padding:0 12px">
          Sito: <a href="${esc(siteHref)}">${esc(website)}</a>${phone ? ` \u00b7 Tel: <a href="tel:${esc(phone.replace(/[^\d+]/g, ''))}">${esc(phone)}</a>` : ''}
        </p>
        <h2>Nuova candidatura AI Accelerator</h2>
        <table cellpadding="6" cellspacing="0" style="border-collapse:collapse;font-family:system-ui,sans-serif;font-size:14px">
          <tr><td><strong>Nome:</strong></td><td>${esc(name)}</td></tr>
          <tr><td><strong>Ragione sociale:</strong></td><td>${esc(legalName)}</td></tr>
          <tr><td><strong>Email:</strong></td><td>${esc(email)}</td></tr>
          <tr><td><strong>Telefono:</strong></td><td>${phone || '-'}</td></tr>
          <tr><td><strong>Sito web:</strong></td><td>${esc(website)}</td></tr>
          <tr><td><strong>Tipo attività:</strong></td><td>${esc(businessType)}</td></tr>
          <tr><td><strong>Ruolo:</strong></td><td>${esc(role)}</td></tr>
          <tr><td><strong>Uso attuale AI:</strong></td><td>${esc(aiUsage)}</td></tr>
          <tr><td valign="top"><strong>Obiettivo / contesto:</strong></td><td>${esc(mainPain)}</td></tr>
          <tr><td><strong>Lingua:</strong></td><td>${esc(locale)}</td></tr>
        </table>
      `,
    })

    if (error) {
      console.error('[ai-accelerator-lead] Admin email Resend error:', error)
      return NextResponse.json({ error: 'Failed to send email' }, { status: 502 })
    }
  } catch (err) {
    console.error('[ai-accelerator-lead] Admin email unexpected error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }

  return NextResponse.json({ ok: true })
}
