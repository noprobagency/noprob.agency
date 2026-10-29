// Dante's leads (Gojiberry campaign 46398, 3 emails from hello@) in the CRM shape that
// scripts/cold-email-crm.mjs exports, next to the direct channel's leads. Pure.

import { domainOf } from './leads.mjs'

// Days after the previous email, as set in the campaign (1, 7, 14): the first email
// goes out the day after approval.
export const DANTE_DELAYS = [1, 7, 14]

const addDays = (iso, days) => {
  const d = new Date(`${iso}T12:00:00Z`)
  d.setUTCDate(d.getUTCDate() + days)
  return d.toISOString().slice(0, 10)
}

/**
 * @param {Record<string, any>} c Gojiberry contact of Dante's list
 * @param {number} campaignId Dante's campaign
 * @param {string} brand company name as written in the subject (cleanCompany)
 */
export function danteLead(c, campaignId, brand) {
  const steps = (c.campaignStatus || []).filter((s) => s.campaignId === campaignId && s.type === 'email')
  const sent = steps
    .filter((s) => ['sent', 'delivered', 'answered', 'opened'].includes(s.state))
    .sort((a, b) => a.stepNumber - b.stepNumber)
    .map((s) => ({ step: `e${s.stepNumber + 1}`, date: s.createdAt.slice(0, 10) }))
  const answered = steps.some((s) => s.state === 'answered') || c.state === 'answered'
  const out = c.unsubscribed || c.bounced || c.state === 'excluded' || c.rejectedAt
  const reason = c.bounced ? 'bounce' : c.unsubscribed || c.state === 'excluded' ? 'opt-out' : c.rejectedAt ? 'scartato' : null
  const segment = answered ? 'warm' : out ? 'suppressed' : 'target'
  const last = sent.at(-1)
  const nextDate = segment === 'target' && last && sent.length < DANTE_DELAYS.length ? addDays(last.date, DANTE_DELAYS[sent.length]) : null
  return {
    channel: 'hello@',
    total: DANTE_DELAYS.length,
    brand: brand || c.company,
    domain: domainOf(c.website),
    contact: c.fullName || [c.firstName, c.lastName].filter(Boolean).join(' ') || null,
    email: c.email || null,
    lang: 'it',
    platform: null,
    php: null,
    segment,
    reason,
    priority: answered ? 1 : null,
    note: answered ? 'Risposta a Dante, leggila in hello@' : null,
    reply: null,
    sent,
    nextDate,
    stopReason: answered ? 'reply' : reason,
  }
}
