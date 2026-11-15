// Italy v3 first email (D-100), written by Antonio word for word (CRM dante/testi-v3.md).
// It opens with one true fact about the store's homepage ({frase_dato}): the first rule
// that fires wins, LCP only when two PageSpeed runs in a row are both over 4 s. A lead
// with no fact keeps the v2 first email. Follow-ups stay v2 until Antonio approves new ones;
// in a v3 thread they keep the v3 subject. Sent only when config.json has approvedV3 = V3_VERSION.

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
    return { rule: 'lcp', frase: `ho notato un po' di lentezza, ho provato il test di Google da cellulare e segna circa ${Math.floor(m.lcpMs / 1000)} secondi prima che la home si veda` }
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
 * @returns {Promise<{ rule: string, frase: string } | null>}
 */
export async function measureDato(domain, key) {
  const html = await fetchHome(domain)
  if (html === null) return null
  const a = await pagespeed(domain, key)
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
