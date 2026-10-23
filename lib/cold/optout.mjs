// Opt-out detection for the cold outreach replies (LinkedIn Unibox, email).
// Rule agreed with the lawyer: whoever says they do not want to be contacted is
// excluded at once and never written again, on any channel. When in doubt we
// exclude: a lost lead costs less than one unwanted email.
// Pure functions, no network: scripts/cold-daily.mjs does the fetching.

const PATTERNS = [
  // English
  /\bunsubscribe\b/i,
  /\bopt[ -]?out\b/i,
  /\b(remove|take) me\b/i,
  /\bstop (emailing|messaging|writing|contacting|sending)\b/i,
  /\b(don'?t|do not|please don'?t|never) (email|message|write|contact|text) (me|us)\b/i,
  /\bnot interested\b/i,
  /\bno thanks?\b/i,
  /\bno,? thank you\b/i,
  /\bleave me alone\b/i,
  /\bspam\b/i,
  // Italian
  /\bdisiscriv/i,
  /\bcancellami\b/i,
  /\b(cancella|rimuovi|togli)(mi)? (il mio|la mia|i miei|dalla|dalle|dai|dal)\b/i,
  /\bnon (mi |ci )?(scrivere|scrivermi|scriverci|contattare|contattarmi|contattarci|mandare|inviare)\b/i,
  /\bnon (mi |ci )?(interessa|interessano|siamo interessati|sono interessat)/i,
  /\bnon sono interessat/i,
  /\bno,? grazie\b/i,
  /\bbasta (email|mail|messaggi)\b/i,
  /\bsmetti(la)? di\b/i,
]

/** A short bare refusal ("no", "No.", "stop", "nope") is an opt-out too. */
const BARE = /^\s*(no+|nope|stop|basta|no grazie|no thanks?)\s*[.!]*\s*$/i

/** True when a reply asks not to be contacted again. */
export function isOptOut(text) {
  if (!text || typeof text !== 'string') return false
  // Only the new part of an email reply: drop quoted lines and the quoted thread.
  const fresh = text
    .split(/\n\s*(On .+ wrote:|Il giorno .+ ha scritto:|-----Original Message-----|From: )/i)[0]
    .split('\n')
    .filter((line) => !line.trim().startsWith('>'))
    .join('\n')
  return BARE.test(fresh) || PATTERNS.some((re) => re.test(fresh))
}
