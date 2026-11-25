// Italy it-cat test (D-107, 25/11/2026): Catarina's message on the noprob mailboxes.
// Antonio as a person (eCommerce manager, lives in Lisbon, stores up to €20M a year), no
// fact about the site, no link, no brand. Half of the new Italian first emails get it,
// the other half stays on the current copy (v3, or v2 when no fact is found) as control.
// Text from CRM manager/consegne/dante.md, approved in D-107. Nothing goes out until
// config.json has approvedItCat = ITCAT_VERSION, set only after the seed test.

export const ITCAT_VERSION = 'it-cat'

/** Working days after the first email. */
export const ITCAT_STEPS = [
  { key: 'e1', day: 0, angle: 'person' },
  { key: 'e2', day: 3, angle: 'nudge' },
  { key: 'e3', day: 7, angle: 'last' },
]

const hi = (lead) => `Ciao${lead.firstName ? ` ${lead.firstName}` : ''}`

const COPY = {
  e1: (l) => [
    `${hi(l)},`,
    "sono Antonio, italiano, vivo a Lisbona e faccio l'eCommerce manager da 7 anni. Ho gestito negozi online che fatturavano fino a 20 milioni l'anno.",
    `Ho visto ${l.brand}, mi piace molto quello che state facendo e mi piacerebbe seguirlo io, come vostro eCommerce manager.`,
    'Ti va una videochiamata di 15 minuti?',
    'Se non è il momento, dimmelo pure 🙂',
  ],
  e2: (l) => [`${hi(l)}, ti è arrivata la mia email? 🙂`],
  e3: (l) => [`${hi(l)}, ultimo messaggio, promesso. Se un giorno vi serve una mano sull'eCommerce, scrivimi.`],
}

/**
 * Subject and plain text body of one it-cat step. Follow-ups reply in the same thread.
 * @param {Record<string, any>} lead
 * @param {string} stepKey
 */
export function renderItCat(lead, stepKey) {
  const lines = COPY[stepKey]?.(lead)
  if (!lines) throw new Error(`it-cat: no step ${stepKey}`)
  const body = [...lines, 'Antonio'].join('\n\n')
  return { subject: stepKey === 'e1' ? lead.brand : `Re: ${lead.brand}`, body }
}

/** Arms of the test on new Italian first emails. */
export const ARMS = /** @type {const} */ (['it-cat', 'control'])

/**
 * Arm for the next Italian first email of a mailbox: the one that has fewer first emails
 * so far, it-cat on a tie. Keeps the split 50/50 inside each mailbox, day after day.
 * @param {Record<string, any>[]} leads all leads
 * @param {string} mailbox mailbox key (antonio, hello)
 */
export function nextArm(leads, mailbox) {
  let itcat = 0
  let control = 0
  for (const l of leads) {
    const arm = l.sequence?.arm
    if (!arm || (l.sequence.mailbox || 'antonio') !== mailbox) continue
    if (arm === 'it-cat') itcat++
    else control++
  }
  return itcat <= control ? 'it-cat' : 'control'
}
