// Second line of the direct engine: US stores not on Shopify, in English (D-99).
// Copy is Ada's, approved by Antonio: 1 email and 1 follow-up in the same thread, with a
// CAN-SPAM footer (sender's postal address and a plain way to opt out). Until the copy
// and the footer are filled in here and config.json has `approvedUs` equal to US_VERSION,
// the engine sends nothing on this line.

/** Bump on every copy change; the engine sends only an approved version. */
export const US_VERSION = 'us1'

/** Working days after the first email. */
export const US_STEPS = [
  { key: 'e1', day: 0, angle: 'curious' },
  { key: 'e2', day: 4, angle: 'follow-up' },
]

/**
 * Approved copy, one function per step returning { subject, lines }. Null until Antonio
 * approves Ada's English texts.
 * @type {null | Record<'e1' | 'e2', (v: { brand: string, firstName: string | null, finding: string }) => { subject: string, lines: string[] }>}
 */
export const US_COPY = {
  // Approved by Antonio on 15 Nov 2026 (D-99), CRM ada/negozi-usa/testo-finale.md
  e1: ({ brand, firstName, finding }) => ({
    subject: brand,
    lines: [
      firstName ? `Hey ${firstName}! 🙂` : 'Hey there! 🙂',
      `I came across ${brand} while browsing and spent a few minutes on it. I work as an eCommerce manager, and one thing jumped out: ${finding}.`,
      `I put together short reports that show, step by step, what I'd improve first. Want me to send you one for ${brand}?`,
    ],
  }),
  e2: ({ brand, firstName }) => ({
    subject: brand,
    lines: [`Hey${firstName ? ` ${firstName}` : ''}, happy to send that report for ${brand} if it's useful 🙂`],
  }),
}

/**
 * CAN-SPAM footer: postal address of the sender and the opt-out line. Null until confirmed.
 * @type {string | null}
 */
export const US_FOOTER = 'NOPROB AGENCY LLC, 30 N Gould St Ste R, Sheridan, WY 82801, USA\nNot for you? Reply "no" and I won\'t email you again.'

/** True when copy and footer are both in place. */
export const usReady = () => Boolean(US_COPY && US_FOOTER)

/**
 * Subject and plain text body of one US step. Follow-ups reply in the same thread.
 * @param {Record<string, any>} lead
 * @param {'e1' | 'e2'} stepKey
 * @param {typeof US_COPY} [copy]
 * @param {string | null} [footer]
 */
export function renderUs(lead, stepKey, copy = US_COPY, footer = US_FOOTER) {
  if (!copy || !footer) throw new Error('US line: copy or CAN-SPAM footer not approved yet')
  const { subject, lines } = copy[stepKey]({ brand: lead.brand, firstName: lead.firstName || null, finding: lead.finding })
  const body = [...lines, '', 'Antonio', '', footer].join('\n\n').replace(/\n\n\n\n/g, '\n\n')
  return { subject: stepKey === 'e1' ? subject : `Re: ${subject}`, body }
}

/** US recipients read their email on New York time: first emails and follow-ups go out 8:00-18:00 there. */
export const US_ZONE = 'America/New_York'

/** True when it is sending time in New York (Mon-Fri checks stay with dueStep). */
export function usHours(now = new Date()) {
  const h = Number(now.toLocaleTimeString('en-GB', { timeZone: US_ZONE, hour12: false }).split(':')[0])
  return h >= 8 && h < 18
}
