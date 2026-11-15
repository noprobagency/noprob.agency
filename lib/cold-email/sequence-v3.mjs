// Italy v3 first email (D-100), written by Antonio word for word (CRM dante/testi-v3.md).
// It opens with one true fact about the store's homepage ({frase_dato}): the first rule
// that fires wins, LCP only when two PageSpeed runs in a row are both over 4 s. A lead
// with no fact keeps the v2 first email. A v3 thread has 2 short follow-ups; threads opened
// with v1 or v2 get Antonio's rewritten e2-e5, same days and subject. All of it only when
// config.json has approvedV3 = V3_VERSION.

import { existsSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import { fetchHome, htmlSignals, pagespeed, stableLcp } from '../cold/us-finding.mjs'

export const V3_VERSION = 'v3'

/** Subject of the v3 thread. */
export const v3Subject = (brand) => `${brand}, due cose sulle vendite`

/**
 * The one fact, in Antonio's words, or null when no rule fires.
 * @param {{ lcpMs?: number|null, imageBytes?: number|null, cls?: number|null, hasDescription?: boolean|null, hasH1?: boolean|null }} m lcpMs already confirmed by two runs
 * @returns {{ rule: string, frase: string } | null}
 */
export function fraseDato(m) {
  if (m.lcpMs != null && m.lcpMs > 4000) {
    // Capped like Ada's: the lab test simulates a slow phone, and a freak run must not read as absurd.
    const s = Math.floor(m.lcpMs / 1000)
    return { rule: 'lcp', frase: `ho notato un po' di lentezza, ho provato il test di Google da cellulare e segna ${s > 20 ? 'oltre 20' : `circa ${s}`} secondi prima che la home si veda` }
  }
  if (m.imageBytes != null && m.imageBytes > 3 * 1024 * 1024) {
    return { rule: 'images', frase: `ho notato che la home ci mette un po' a caricare, solo le immagini pesano oltre ${Math.floor(m.imageBytes / (1024 * 1024))} MB` }
  }
  if (m.hasDescription === false) {
    return { rule: 'description', frase: 'ho notato che la home non ha una descrizione per Google, quindi nei risultati di ricerca il vostro negozio si presenta con un testo preso a caso' }
  }
  if (m.hasH1 === false) {
    return { rule: 'h1', frase: 'ho notato che la home non ha un titolo principale, e così Google fa più fatica a capire cosa vendete' }
  }
  if (m.cls != null && m.cls > 0.25) {
    return { rule: 'cls', frase: 'ho notato che da cellulare la home si sposta mentre carica, e si rischia di toccare il bottone sbagliato' }
  }
  return null
}

/** PageSpeed key: env PAGESPEED_API_KEY or the pagespeed.env file Damiano and Ada read. */
export function pagespeedKey() {
  if (process.env.PAGESPEED_API_KEY) return process.env.PAGESPEED_API_KEY
  const env = join(process.env.HOME || '', 'Library/Application Support/noprob-agenti/pagespeed.env')
  return (existsSync(env) && readFileSync(env, 'utf8').match(/^\s*PAGESPEED_API_KEY\s*=\s*["']?([^"'\s]+)/m)?.[1]) || null
}

/**
 * Measures the homepage and picks the fact. A second PageSpeed run happens only when the
 * first one is over 4 s.
 * @param {string} domain
 * @param {string | null} key
 * @returns {Promise<{ rule: string, frase: string } | { error: string } | null>}
 */
export async function measureDato(domain, key) {
  const html = await fetchHome(domain)
  // Site or PageSpeed not answering: a temporary error, the caller retries later.
  if (html === null) return { error: 'site' }
  const a = await pagespeed(domain, key)
  if (key && !a) return { error: 'pagespeed' }
  const b = a?.lcpMs != null && a.lcpMs > 4000 ? await pagespeed(domain, key) : null
  return fraseDato({ ...htmlSignals(html), imageBytes: a?.imageBytes ?? null, cls: a?.cls ?? null, lcpMs: stableLcp(a?.lcpMs, b?.lcpMs) })
}

/** Subject and body of the v3 first email, exactly as Antonio wrote it. */
export function renderV3First(lead, frase) {
  const body = [
    `Ciao${lead.firstName ? ` ${lead.firstName}` : ''} 🙂\nPiacere Antonio!`,
    `Stavo girando su ${lead.brand} ed ${frase}.`,
    'Lavoro con molti negozi come il vostro, sistemare questo e un paio di altri punti di solito porta più ordini dallo stesso traffico, senza spendere di più in pubblicità!',
    'Vi posso inviare un documento su misura che spiega passo passo le modifiche che farei per aumentare traffico e vendite? Di solito è un lavoro che i clienti mi pagano, a voi lo preparo senza impegno 🙂',
    'Antonio\neCommerce manager da 7 anni',
    'PS se non vi interessa, rispondi pure "no" e non ti scrivo più!',
  ].join('\n\n')
  return { subject: v3Subject(lead.brand), body }
}

/** Working days after the first email, in a v3 thread. */
export const V3_STEPS = [
  { key: 'e1', day: 0, angle: 'fact' },
  { key: 'e2', day: 3, angle: 'nudge' },
  { key: 'e3', day: 7, angle: 'last' },
]

const hi = (lead) => `Ciao${lead.firstName ? ` ${lead.firstName}` : ''}`

/** Follow-ups of a v3 thread (CRM dante/testi-v3.md). */
const V3_FOLLOW = {
  e2: (l) => [`${hi(l)}, non vi interessa? 🙂`, `Il documento su ${l.brand} ve lo preparo volentieri, basta un sì.`],
  e3: (l) => [`${hi(l)}, ultima volta che vi scrivo, promesso.`, 'Ve lo mando o lasciamo stare?'],
}

/** e2-e5 rewritten for threads opened with v1 or v2 (CRM dante/testi-v3.md). */
const V2_REWRITE = {
  e2: (l) => [`${hi(l)}, vi è arrivata la mia email? 🙂`, `Su ${l.brand} ho visto un paio di cose che di solito portano più ordini dallo stesso traffico. Se volete ve le scrivo in un documento, gratis.`],
  e3: (l) => [`${hi(l)}, non vi interessa?`, `Nessun problema, ma se volete il documento su ${l.brand} basta un sì 🙂`],
  e4: (l) => [`${hi(l)}, una domanda veloce. Sapete da quale pagina di ${l.brand} se ne vanno più clienti?`, 'Se volete ve lo mostro io.'],
  e5: (l) => [`${hi(l)}, ultima volta che vi scrivo, promesso.`, 'Ve lo mando o lasciamo stare?'],
}

/**
 * Body of a follow-up in Antonio's v3 voice, or null when there is none for that step.
 * @param {Record<string, any>} lead
 * @param {string} stepKey
 */
export function v3FollowUpBody(lead, stepKey) {
  // A v1/v2 thread that never got a v3 follow-up starts with the one that offers the document (e2).
  const first = lead.sequence?.version !== V3_VERSION && !(lead.sequence?.sent || []).some((x) => x.copy === V3_VERSION)
  const lines = (lead.sequence?.version === V3_VERSION ? V3_FOLLOW : V2_REWRITE)[first ? 'e2' : stepKey]?.(lead)
  return lines ? [...lines, 'Antonio'].join('\n\n') : null
}
