// The direct cold email sequence: 5 emails in one Gmail thread, spread over
// working days, stopped by any reply. Copy is Antonio's voice: short, friendly,
// blunt, no dashes and no colons. Numbers only from docs/dati-verificati.md.
// The PHP hook is CERT-EU advisory 2026-018 (21 Oct 2026, PHP2Shell, CVSS 9.2):
// it is used only for stores on a PHP platform, and a version is quoted only when
// the store's own server exposes it.

import { PHP_PLATFORMS, platformLabel } from './leads.mjs'
import { phpStatus } from '../cold/detect-platform.mjs'

/** Bump on every copy change; the engine sends only an approved version. */
export const SEQUENCE_VERSION = 'v2'

/** Working days after the first email. */
export const STEPS = [
  { key: 'e1', day: 0, angle: 'hook' },
  { key: 'e2', day: 3, angle: 'migration' },
  { key: 'e3', day: 7, angle: 'case study' },
  { key: 'e4', day: 12, angle: 'direct question' },
  { key: 'e5', day: 18, angle: 'last' },
]

export const CERT_EU_URL = 'https://cert.europa.eu/publications/security-advisories/2026-018/'
const LANDING = { it: 'noprob.agency/it/migra', en: 'noprob.agency/migrate' }

const CASES = {
  it: {
    fashion:
      'Cumini, boutique luxury multibrand, è passata a Shopify con noi e nei 12 mesi dopo la migrazione ha fatto +67,7% di vendite online.',
    dtc: 'Integratori DTC Nazzi è passata da WooCommerce a Shopify con noi a luglio e nei primi 85 giorni ha fatto +105% di vendite online sugli stessi giorni dell’anno prima.',
  },
  en: {
    fashion:
      'Cumini, a luxury multibrand boutique, moved to Shopify with us and grew online sales by 67.7% in the 12 months after the migration.',
    dtc: 'Integratori DTC Nazzi moved from WooCommerce to Shopify with us in July and grew online sales by 105% in the first 85 days, against the same days a year before.',
  },
}

function vars(lead) {
  const plat = platformLabel(lead.platform)
  const status = lead.php ? phpStatus(lead.php) : null
  const exposed = status && status !== 'patched' ? { version: lead.php, eol: status === 'eol' } : null
  return {
    hi: lead.lang === 'it' ? (lead.firstName ? `Ciao ${lead.firstName},` : 'Ciao,') : lead.firstName ? `Hi ${lead.firstName},` : 'Hi,',
    // Only the first email opens like Antonio's own replies, emoticon included.
    hello: lead.lang === 'it' ? `Buongiorno${lead.firstName ? ` ${lead.firstName}` : ''}! :)` : `Hi${lead.firstName ? ` ${lead.firstName}` : ''}! :)`,
    brand: lead.brand,
    // Named PHP platform, or null for a custom site whose server exposes PHP.
    plat: PHP_PLATFORMS.has(lead.platform) ? plat : null,
    // PHP hook: a PHP platform or an exposed PHP version, never when PHP is already patched.
    php: status !== 'patched' && (PHP_PLATFORMS.has(lead.platform) || Boolean(exposed)),
    exposed,
    caseStudy: CASES[lead.lang][lead.category] || CASES[lead.lang].dtc,
    landing: LANDING[lead.lang],
  }
}

const COPY = {
  it: {
    subject: (v) => (v.php ? `${v.brand} e la falla di PHP` : `${v.brand} e l’AI`),
    subjectV1: (v) => (v.php ? `${v.brand} e la falla di PHP` : `${v.brand} su Shopify?`),
    e1: (v) =>
      v.php
        ? [
            v.hello,
            `Ho guardato il sito di ${v.brand} e vedo che gira su ${v.plat || 'PHP'}. Il 21 ottobre il CERT dell’Unione Europea ha segnalato due falle critiche in PHP e l’unica soluzione è aggiornare il server. Non è colpa di nessuno, ma a ogni falla si ricomincia.`,
            'Lo avete già sistemato? Se vuoi ti mando una preview di come sarebbe il vostro eCommerce su Shopify, dove questo pensiero non c’è più 😁',
            'Se preferisci non ricevere altre mie email, basta dirmelo.',
          ]
        : [
            v.hello,
            `Ho guardato il sito di ${v.brand} e vedo che non siete su Shopify. Ti scrivo per questo, perché con l’AI oggi le opportunità per un eCommerce sono davvero tante e su Shopify si colgono molto più velocemente.`,
            'State già valutando qualcosa? Se vuoi ti mando una preview di cosa farei per potenziare il vostro eCommerce 😁',
            'Se preferisci non ricevere altre mie email, basta dirmelo.',
          ],
    e2: (v) => [
      v.hi,
      'ti riscrivo con un esempio concreto. Fino all’anno scorso cambiare piattaforma voleva dire mesi di lavoro e tanta paura per Google. Adesso con l’AI lo facciamo in 14 giorni, spostando prima quello che già funziona.',
      'Poi valuti tu e decidi tu. Ti mando una preview?',
    ],
    e3: (v) => [
      v.hi,
      `numeri alla mano, ti lascio un caso vero. ${v.caseStudy}`,
      `Non ho la palla magica e ogni store è diverso. Però ti posso dire passo passo cosa farei su ${v.brand}, se ti va.`,
    ],
    e4: (v) => [
      v.hi,
      'ti faccio una domanda diretta, così non ti disturbo per niente. È un tema di tempo, di budget o semplicemente non è il momento?',
      'Basta una parola, anche solo per capire se ha senso risentirci più avanti.',
    ],
    e5: (v) => [
      v.hi,
      'ultima email, promesso. Se per ora restate dove siete va benissimo, davvero.',
      `Se un giorno volete dare un’occhiata, qui c’è tutto, prezzo compreso ${v.landing}`,
      `Buon lavoro e in bocca al lupo per ${v.brand}!`,
    ],
    sign: 'Antonio',
  },
  en: {
    subject: (v) => (v.php ? `${v.brand} and the PHP flaw` : `${v.brand} and AI`),
    subjectV1: (v) => (v.php ? `${v.brand} and the PHP flaw` : `${v.brand} on Shopify?`),
    e1: (v) =>
      v.php
        ? [
            v.hello,
            `I had a look at the ${v.brand} site and I see it runs on ${v.plat || 'PHP'}. On 21 October the EU’s CERT flagged two critical flaws in PHP and the only fix is updating the server. It’s nobody’s fault, but with every flaw you start over.`,
            'Have you sorted it already? If you like I’ll send you a preview of your store on Shopify, where this stops being your worry 😁',
            'If you’d rather not hear from me again, just say so.',
          ]
        : [
            v.hello,
            `I had a look at the ${v.brand} site and I see you’re not on Shopify. That’s why I’m writing, the opportunities AI opens up for an eCommerce store today are huge and on Shopify you get to them much faster.`,
            'Are you already looking at something? If you like I’ll send you a preview of what I’d do to power up your store 😁',
            'If you’d rather not hear from me again, just say so.',
          ],
    e2: (v) => [
      v.hi,
      'writing again with a concrete example. Until last year changing platform meant months of work and a lot of fear about Google. Now with AI we do it in 14 days, moving first what already works.',
      'Then you weigh it up and you decide. Shall I send you a preview?',
    ],
    e3: (v) => [
      v.hi,
      `numbers in hand, here’s a real case. ${v.caseStudy}`,
      `I don’t have a crystal ball and every store is different. But I can tell you step by step what I’d do on ${v.brand}, if you like.`,
    ],
    e4: (v) => [
      v.hi,
      'a direct question, so I don’t bother you for nothing. Is it about time, budget, or just not the moment?',
      'One word is enough, even just to know if it makes sense to talk later on.',
    ],
    e5: (v) => [
      v.hi,
      'last email, promise. If you stay where you are for now that’s totally fine.',
      `If one day you want to take a look, everything is here, price included ${v.landing}`,
      `All the best and good luck with ${v.brand}!`,
    ],
    sign: 'Antonio',
  },
}

/** Subject and plain text body of one step for one lead. Follow-ups reply in the same thread. */
export function render(lead, stepKey) {
  const copy = COPY[lead.lang] || COPY.en
  const v = vars(lead)
  // A thread opened with the old subject keeps it, so the reply stays in the same conversation.
  const subject = stepKey !== 'e1' && lead.sequence?.version === 'v1' ? copy.subjectV1(v) : copy.subject(v)
  const body = [...copy[stepKey](v), '', copy.sign].join('\n\n').replace(/\n\n\n\n/g, '\n\n')
  return { subject: stepKey === 'e1' ? subject : `Re: ${subject}`, body }
}

const isWorkingDay = (d) => d.getUTCDay() !== 0 && d.getUTCDay() !== 6

/** ISO date `n` working days after `iso` (Mon-Fri). */
export function addWorkingDays(iso, n) {
  const d = new Date(`${iso}T12:00:00Z`)
  let added = 0
  while (added < n) {
    d.setUTCDate(d.getUTCDate() + 1)
    if (isWorkingDay(d)) added++
  }
  return d.toISOString().slice(0, 10)
}

/**
 * Next step due for a lead on `today`, or null. The sequence stops for good on a
 * reply, a bounce or an opt-out (sequence.stoppedAt), and runs only on working days.
 * A one-shot lead (sequence.oneShot) got a single hand-picked email: no follow-ups, replies still read.
 */
export function dueStep(lead, today) {
  if (lead.segment !== 'target' || lead.sequence.stoppedAt || lead.sequence.oneShot) return null
  if (!isWorkingDay(new Date(`${today}T12:00:00Z`))) return null
  const next = STEPS[lead.sequence.sent.length]
  if (!next) return null
  if (next.day === 0) return next
  const first = lead.sequence.sent[0].date
  return addWorkingDays(first, next.day) <= today ? next : null
}

/** ISO date a step was due: follow-ups go out oldest first. */
export const dueDate = (lead, step) => addWorkingDays(lead.sequence.sent[0].date, step.day)
