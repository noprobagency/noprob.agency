import { NextRequest, NextResponse } from 'next/server'
import crypto from 'crypto'

export const runtime = 'nodejs'

const PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID
const ACCESS_TOKEN = process.env.META_CAPI_ACCESS_TOKEN
const TEST_EVENT_CODE = process.env.META_CAPI_TEST_EVENT_CODE

/** Only the events the site itself sends (lib/analytics/events.ts and the forms). */
const ALLOWED_EVENTS = new Set([
  'PageView',
  'ViewContent',
  'Lead',
  'Contact',
  'InitiateCheckout',
  'Schedule',
  'AiAcceleratorApplication',
])

// Best-effort per-IP rate limit (in-memory, per serverless instance), like the
// Sprint form: the endpoint is public by nature, this keeps a script from
// flooding the pixel from one address.
const RATE_WINDOW_MS = 60 * 1000
const RATE_MAX = 60
const hitsByIp = new Map<string, number[]>()

function rateLimited(ip: string): boolean {
  const now = Date.now()
  const hits = (hitsByIp.get(ip) ?? []).filter((t) => now - t < RATE_WINDOW_MS)
  hits.push(now)
  hitsByIp.set(ip, hits)
  if (hitsByIp.size > 5000) hitsByIp.clear()
  return hits.length > RATE_MAX
}

/**
 * The endpoint only serves the site's own pages: the Origin (or, failing that,
 * the Referer) must point at the host that received the request. This holds
 * on production, Vercel previews and localhost without any configuration.
 */
function isSameOrigin(req: NextRequest): boolean {
  const host = req.headers.get('x-forwarded-host') ?? req.headers.get('host')
  if (!host) return false
  const source = req.headers.get('origin') ?? req.headers.get('referer')
  if (!source) return false
  try {
    return new URL(source).host === host
  } catch {
    return false
  }
}

function hash(value: string | undefined): string | undefined {
  if (!value) return undefined
  return crypto.createHash('sha256').update(value.trim().toLowerCase()).digest('hex')
}

export async function POST(req: NextRequest) {
  // Reject foreign or malformed requests before looking at the configuration,
  // so the guard behaves the same on an environment without CAPI credentials.
  if (!isSameOrigin(req)) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
  }

  const ip =
    req.headers.get('x-forwarded-for')?.split(',')[0].trim() ||
    req.headers.get('x-real-ip') ||
    ''
  if (rateLimited(ip || 'unknown')) {
    return NextResponse.json({ error: 'Too many requests' }, { status: 429 })
  }

  let body: {
    eventName?: string
    eventId?: string
    timestamp?: number
    customData?: Record<string, unknown>
    sourceUrl?: string
    userData?: { email?: string; phone?: string }
  }

  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const { eventName, eventId, timestamp, customData, sourceUrl, userData } = body

  if (typeof eventName !== 'string' || !ALLOWED_EVENTS.has(eventName)) {
    return NextResponse.json({ error: 'Unknown event' }, { status: 400 })
  }
  if (typeof eventId !== 'string' || eventId.length === 0 || eventId.length > 64) {
    return NextResponse.json({ error: 'Missing eventId' }, { status: 400 })
  }
  if (sourceUrl !== undefined && (typeof sourceUrl !== 'string' || sourceUrl.length > 2048)) {
    return NextResponse.json({ error: 'Invalid sourceUrl' }, { status: 400 })
  }

  if (!PIXEL_ID || !ACCESS_TOKEN) {
    return NextResponse.json({ error: 'CAPI not configured' }, { status: 500 })
  }

  const userAgent = req.headers.get('user-agent') || ''

  const payload = {
    data: [
      {
        event_name: eventName,
        event_time: typeof timestamp === 'number' ? timestamp : Math.floor(Date.now() / 1000),
        event_id: eventId,
        event_source_url: sourceUrl,
        action_source: 'website',
        user_data: {
          client_user_agent: userAgent,
          client_ip_address: ip,
          em: hash(userData?.email),
          ph: hash(userData?.phone),
        },
        custom_data: customData && typeof customData === 'object' ? customData : {},
      },
    ],
    ...(TEST_EVENT_CODE ? { test_event_code: TEST_EVENT_CODE } : {}),
  }

  try {
    const resp = await fetch(
      `https://graph.facebook.com/v19.0/${PIXEL_ID}/events?access_token=${ACCESS_TOKEN}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      }
    )

    const data = await resp.json()

    if (!resp.ok) {
      console.error('[CAPI] Meta API error:', data)
      return NextResponse.json({ error: 'Upstream error' }, { status: 502 })
    }

    return NextResponse.json({ ok: true, received: data.events_received })
  } catch (err) {
    console.error('[CAPI] fetch error:', err)
    return NextResponse.json({ error: 'Network error' }, { status: 500 })
  }
}
