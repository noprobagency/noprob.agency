// Second line of the direct engine: US stores not on Shopify, in English (D-99).
// Copy is Ada's, approved by Antonio: 1 email and 1 follow-up in the same thread, with a
// CAN-SPAM footer (sender's postal address and a plain way to opt out). us1 from CRM
// ada/negozi-usa/testo-finale.md, us2 (Catarina's style, D-107) from
// ada/negozi-usa/test-stile-catarina.md. The engine sends nothing on this line until
// config.json has `approvedUs` equal to US_VERSION, set only on Antonio's direct ok.

/** Bump on every copy change; the engine sends only an approved version. */
export const US_VERSION = 'us2'

/** D-107: new US first emails use us2 from this day; earlier days still send us1. */
export const US2_FROM = '2026-11-30'

/** Copy version of a new US first email sent on `today` (ISO date). */
export const usVersionOn = (today) => (today >= US2_FROM ? 'us2' : 'us1')

/** Working days after the first email. */
export const US_STEPS = [
  { key: 'e1', day: 0, angle: 'curious' },
  { key: 'e2', day: 4, angle: 'follow-up' },
]

/**
 * @typedef {Record<'e1' | 'e2', (v: { brand: string, firstName: string | null, finding: string }) => { subject: string, lines: string[] }>} UsCopy
 */

/**
 * us1: the curious email with a true finding from the site (D-98). Threads opened with it
 * keep its follow-up.
 * @type {UsCopy}
 */
export const US_COPY_US1 = {
  e1: (v) => ({
    subject: v.brand,
    lines: [
      v.firstName ? `Hey ${v.firstName}! 🙂` : 'Hey there! 🙂',
      `I came across ${v.brand} while browsing and spent a few minutes on it. I work as an eCommerce manager, and one thing jumped out: ${v.finding}.`,
      `I put together short reports that show, step by step, what I'd improve first. Want me to send you one for ${v.brand}?`,
    ],
  }),
  e2: (v) => ({
    subject: v.brand,
    lines: [`Hey ${v.firstName || 'there'}, happy to send that report for ${v.brand} if it's useful 🙂`],
  }),
}

/**
 * us2: Antonio as a person who would like to be their eCommerce manager, Catarina's style
 * (D-107). No finding needed. "€20M" is approved for the US too (D-107, docs/dati-verificati.md).
 * @type {UsCopy}
 */
export const US_COPY_US2 = {
  e1: (v) => ({
    subject: v.brand,
    lines: [
      v.firstName ? `Hi ${v.firstName},` : 'Hi there,',
      `I'm Antonio, and I just came across ${v.brand}. I really like what you're doing.`,
      `I work as an eCommerce manager and run online stores, some up to €20M a year. I'd love to be the eCommerce manager for ${v.brand}.`,
      'Up for a quick call this week or next?',
      "If it's not the right time, just tell me 🙂",
    ],
  }),
  e2: (v) => ({
    subject: v.brand,
    lines: [`Hi ${v.firstName || 'there'}, any chance for a quick call about ${v.brand}? 🙂`],
  }),
}

/** Copy of each version. A thread keeps the version it was opened with. */
export const US_COPIES = { us1: US_COPY_US1, us2: US_COPY_US2 }

/** Copy of the current version. */
export const US_COPY = US_COPIES[US_VERSION]

/**
 * CAN-SPAM footer: postal address of the sender and the opt-out line. Null until confirmed.
 * @type {string | null}
 */
export const US_FOOTER = "30 N Gould St Ste R, Sheridan, WY 82801, USA · if you'd rather not hear from me, just say so"

/** True when copy and footer are both in place. */
export const usReady = () => Boolean(US_COPY && US_FOOTER)

const isoToday = () => new Date().toISOString().slice(0, 10)

/**
 * Subject and plain text body of one US step. Follow-ups reply in the same thread and keep
 * the copy version of their first email; a first email takes the version of the day.
 * @param {Record<string, any>} lead
 * @param {'e1' | 'e2'} stepKey
 * @param {UsCopy} [copy]
 * @param {string | null} [footer]
 * @param {string} [today] ISO date of the send
 */
export function renderUs(lead, stepKey, copy, footer = US_FOOTER, today = isoToday()) {
  const version = stepKey === 'e1' ? usVersionOn(today) : lead.sequence?.version
  const c = copy || US_COPIES[version] || US_COPY_US1
  if (!footer) throw new Error('US line: CAN-SPAM footer not approved yet')
  const { subject, lines } = c[stepKey]({ brand: lead.brand, firstName: lead.firstName || null, finding: lead.finding })
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
