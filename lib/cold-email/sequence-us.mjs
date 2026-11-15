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
 * @type {null | Record<'e1' | 'e2', (v: { brand: string, firstName: string | null }) => { subject: string, lines: string[] }>}
 */
export const US_COPY = null

/**
 * CAN-SPAM footer: postal address of the sender and the opt-out line. Null until confirmed.
 * @type {string | null}
 */
export const US_FOOTER = null

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
  const { subject, lines } = copy[stepKey]({ brand: lead.brand, firstName: lead.firstName || null })
  const body = [...lines, '', 'Antonio', '', footer].join('\n\n').replace(/\n\n\n\n/g, '\n\n')
  return { subject: stepKey === 'e1' ? subject : `Re: ${subject}`, body }
}
