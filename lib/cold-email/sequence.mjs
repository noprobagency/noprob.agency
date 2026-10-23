// The direct cold email sequence: 5 emails in one Gmail thread, spread over
// working days, stopped by any reply. Copy is Antonio's voice: short, friendly,
// blunt, no dashes and no colons. Numbers only from docs/dati-verificati.md.
// The PHP hook is CERT-EU advisory 2026-018 (21 Oct 2026, PHP2Shell, CVSS 9.2):
// it is used only for stores on a PHP platform, and a version is quoted only when
// the store's own server exposes it.

import { PHP_PLATFORMS, platformLabel } from './leads.mjs'
import { phpStatus } from '../cold/detect-platform.mjs'

/** Bump on every copy change; the engine sends only an approved version. */
export const SEQUENCE_VERSION = 'v1'

/** Working days after the first email. */
export const STEPS = [
  { key: 'e1', day: 0, angle: 'hook' },
  { key: 'e2', day: 3, angle: 'migration' },
  { key: 'e3', day: 7, angle: 'case study' },
  { key: 'e4', day: 12, angle: 'scarcity' },
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
    subject: (v) => (v.php ? `${v.brand} e la falla di PHP` : `${v.brand} su Shopify?`),
    e1: (v) =>
      v.php
        ? [
            v.hi,
            v.plat ? `ti scrivo diretto perché ho visto che ${v.brand} gira ancora su ${v.plat}.` : `ti scrivo diretto perché ho visto che il sito di ${v.brand} gira ancora su PHP.`,
            `Il 21 ottobre il CERT dell’Unione Europea ha segnalato due falle critiche in PHP${v.plat ? `, il linguaggio su cui gira ${v.plat},` : ''} e l’unica soluzione è aggiornare il server.` +
              (v.exposed
                ? ` Dal vostro sito risulta PHP ${v.exposed.version}, ${v.exposed.eol ? 'una versione che non riceve più aggiornamenti' : 'che è tra le versioni esposte'}.`
                : ''),
            'Lo avete già fatto? Se vuoi ti giro l’avviso ufficiale.',
            'PS se non ti interessa scrivimi no e chiudo qui',
          ]
        : [
            v.hi,
            `ti scrivo diretto perché ho visto che ${v.brand} non è su Shopify.`,
            'È una scelta o ci state pensando? Te lo chiedo perché facciamo solo migrazioni a Shopify e in queste settimane si stanno muovendo in tanti.',
            'PS se non ti interessa scrivimi no e chiudo qui',
          ],
    e2: (v) => [
      v.hi,
      v.php
        ? `ti riscrivo perché la falla di PHP è solo l’ultimo caso. Con ${v.plat || 'un sito su PHP'} sicurezza, server e plugin restano sulle vostre spalle e ogni volta è una corsa. Su Shopify questa parte non esiste, la gestiscono loro.`
        : 'ti riscrivo perché su Shopify sicurezza, server e aggiornamenti non sono più un vostro problema, li gestiscono loro.',
      'Noi facciamo solo migrazioni a Shopify, in 14 giorni e senza perdere posizionamento su Google né vendite.',
      `Ha senso parlarne per ${v.brand}?`,
    ],
    e3: (v) => [
      v.hi,
      `ti lascio un caso concreto. ${v.caseStudy}`,
      `Se vuoi ti mando come abbiamo lavorato e cosa cambierebbe per ${v.brand}.`,
    ],
    e4: (v) => [
      v.hi,
      'in queste settimane si stanno muovendo in tanti e sto seguendo diverse migrazioni in parallelo.',
      'Prima di fine anno riesco a prenderne ancora poche, poi si parte a gennaio.',
      `Se ${v.brand} ci sta pensando conviene bloccare adesso. Ti va una videochiamata di 20 minuti questa settimana?`,
    ],
    e5: (v) => [
      v.hi,
      'ultima email, promesso.',
      v.php
        ? `Se restate ${v.plat ? `su ${v.plat}` : 'dove siete'} va benissimo, ma almeno aggiornate PHP alla versione corretta.`
        : 'Se per ora restate dove siete va benissimo.',
      `Se invece volete passare a Shopify qui c’è tutto, prezzo compreso ${v.landing}`,
      'Buon lavoro',
    ],
    sign: 'Antonio',
  },
  en: {
    subject: (v) => (v.php ? `${v.brand} and the PHP flaw` : `${v.brand} on Shopify?`),
    e1: (v) =>
      v.php
        ? [
            v.hi,
            v.plat ? `I’ll be direct, I noticed ${v.brand} still runs on ${v.plat}.` : `I’ll be direct, I noticed the ${v.brand} site still runs on PHP.`,
            `On 21 October the EU’s CERT flagged two critical flaws in PHP${v.plat ? `, the language ${v.plat} runs on,` : ''} and the only fix is updating the server.` +
              (v.exposed
                ? ` Your site reports PHP ${v.exposed.version}, ${v.exposed.eol ? 'a version that no longer gets updates' : 'which is one of the affected versions'}.`
                : ''),
            'Has that been done already? Happy to send you the official advisory.',
            'PS if this isn’t relevant just reply no and I’ll stop here',
          ]
        : [
            v.hi,
            `I’ll be direct, I noticed ${v.brand} isn’t on Shopify.`,
            'Is that a choice or are you thinking about it? I ask because we only do migrations to Shopify and a lot of brands are moving right now.',
            'PS if this isn’t relevant just reply no and I’ll stop here',
          ],
    e2: (v) => [
      v.hi,
      v.php
        ? `writing again because the PHP flaw is just the latest one. With ${v.plat || 'a PHP site'} security, servers and plugins stay on your plate and every time it’s a rush. On Shopify that part doesn’t exist, they handle it.`
        : 'writing again because on Shopify security, servers and updates stop being your problem, they handle it.',
      'We only do migrations to Shopify, in 14 days, without losing Google rankings or sales.',
      `Worth a chat for ${v.brand}?`,
    ],
    e3: (v) => [v.hi, `a concrete example. ${v.caseStudy}`, `Want me to send how we worked and what it would mean for ${v.brand}?`],
    e4: (v) => [
      v.hi,
      'a lot of brands are moving these weeks and I’m running several migrations in parallel.',
      'I can take on only a few more before the end of the year, then the next start is January.',
      `If ${v.brand} is thinking about it, now is the time to book. Up for a 20 minute video call this week?`,
    ],
    e5: (v) => [
      v.hi,
      'last email, promise.',
      v.php ? `If you stay ${v.plat ? `on ${v.plat}` : 'where you are'} that’s fine, just make sure PHP is updated.` : 'If you stay where you are for now, that’s fine.',
      `If you ever want to move to Shopify everything is here, price included ${v.landing}`,
      'All the best',
    ],
    sign: 'Antonio',
  },
}

/** Subject and plain text body of one step for one lead. Follow-ups reply in the same thread. */
export function render(lead, stepKey) {
  const copy = COPY[lead.lang] || COPY.en
  const v = vars(lead)
  const subject = copy.subject(v)
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
 */
export function dueStep(lead, today) {
  if (lead.segment !== 'target' || lead.sequence.stoppedAt) return null
  if (!isWorkingDay(new Date(`${today}T12:00:00Z`))) return null
  const next = STEPS[lead.sequence.sent.length]
  if (!next) return null
  if (next.day === 0) return next
  const first = lead.sequence.sent[0].date
  return addWorkingDays(first, next.day) <= today ? next : null
}
