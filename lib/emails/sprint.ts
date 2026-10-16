/**
 * Confirmation email sent to whoever applies for the Shopify Launch Sprint.
 * Same inline-style table layout as `welcome.ts`; the copy repeats the landing
 * promise (reply within 48 hours with the confirmed tier and the first kickoff
 * date) and shows the tier estimated from the form, so the lead never reads a
 * different price than the one on the page.
 */

function esc(value: string): string {
  return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}

export function buildSprintWelcomeEmail({
  name,
  isIT,
  storeUrl,
  tierId,
  price,
  installment,
  addon,
  dashboardUrl,
  waUrl,
  landingUrl,
}: {
  name: string
  isIT: boolean
  storeUrl: string
  tierId: number
  price: string
  installment: string
  addon: boolean
  dashboardUrl: string
  waUrl: string
  landingUrl: string
}): string {
  const t = isIT
    ? {
        title: 'Candidatura ricevuta',
        heading: `Ciao ${esc(name)}, abbiamo ricevuto la candidatura per ${esc(storeUrl)}.`,
        body: 'Leggo ogni candidatura di persona e ti rispondo entro 48 ore con lo scaglione confermato e la prima data di kickoff disponibile. Se la risposta è no, te lo dico lo stesso.',
        tierLabel: 'Il tuo scaglione stimato',
        tier: `Tier ${tierId}: ${price} in 4 rate da ${installment}, IVA esclusa. Lo confermiamo in call.`,
        addon: 'Da quello che ci hai detto potrebbero servire add-on a prezzo fisso (prodotti, lingue o gestionale oltre i limiti dello scaglione): te li dico prima della firma.',
        nextTitle: 'Intanto, se vuoi portarti avanti',
        next: [
          `<a href="${dashboardUrl}" style="color:#121212;">Guarda la dashboard che ricevi il giorno 1</a>: è quella con cui misuriamo le 4 garanzie.`,
          'Prepara la lista degli accessi: piattaforma attuale, DNS, Search Console, GA4 e Meta.',
          `Rileggi calendario, prezzo e garanzie nella <a href="${landingUrl}" style="color:#121212;">pagina dello sprint</a>.`,
        ],
        urgency: 'Hai fretta? Scrivimi direttamente:',
        wa: 'Scrivi su WhatsApp',
        waNote: 'Rispondo di persona',
      }
    : {
        title: 'Application received',
        heading: `Hi ${esc(name)}, we received your application for ${esc(storeUrl)}.`,
        body: 'I read every application myself and reply within 48 hours with your confirmed tier and the first available kickoff date. If the answer is no, I tell you anyway.',
        tierLabel: 'Your estimated tier',
        tier: `Tier ${tierId}: ${price} in 4 installments of ${installment}, VAT excluded. We confirm it on the call.`,
        addon: 'From what you told us, fixed-price add-ons may apply (products, languages or ERP beyond the tier caps): I tell you before you sign.',
        nextTitle: 'Meanwhile, if you want a head start',
        next: [
          `<a href="${dashboardUrl}" style="color:#121212;">See the dashboard you get on day 1</a>: it is the one we measure the 4 guarantees with.`,
          'Prepare the list of accesses: current platform, DNS, Search Console, GA4 and Meta.',
          `Re-read calendar, price and guarantees on the <a href="${landingUrl}" style="color:#121212;">sprint page</a>.`,
        ],
        urgency: 'In a hurry? Write to me directly:',
        wa: 'Write on WhatsApp',
        waNote: 'I reply in person',
      }

  const row = (inner: string, padding = '16px 36px 0') => `<tr><td style="padding:${padding};">${inner}</td></tr>`
  const p = (text: string, extra = '') => `<p style="margin:0;font-size:16px;line-height:1.7;color:#444;${extra}">${text}</p>`

  return `<!DOCTYPE html>
<html lang="${isIT ? 'it' : 'en'}">
<head>
  <meta charset="utf-8"/>
  <meta name="viewport" content="width=device-width,initial-scale=1"/>
  <title>${t.title}</title>
</head>
<body style="margin:0;padding:0;background:#f0f0f0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f0f0f0;padding:40px 16px;">
    <tr><td align="center">
      <table width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:#ffffff;border-radius:16px;overflow:hidden;border:1px solid #e0e0e0;">
        <tr>
          <td style="background:#121212;padding:28px 36px;">
            <img src="https://noprob.agency/images/logo-no-prob-white-1.svg" alt="noprob agency" height="28" style="display:block"/>
          </td>
        </tr>
        ${row(`<span style="display:inline-block;background:#f0f0f0;border-radius:999px;padding:4px 14px;font-size:12px;font-weight:600;letter-spacing:0.02em;color:#444;text-transform:uppercase;">${t.title} · Shopify Launch Sprint</span>`, '32px 36px 0')}
        ${row(`<h1 style="margin:0;font-size:26px;font-weight:700;line-height:1.2;color:#121212;letter-spacing:-0.03em;">${t.heading}</h1>`, '20px 36px 0')}
        ${row(p(t.body))}
        ${row(`<div style="background:#eef8ef;border-left:3px solid #1dcc5d;border-radius:8px;padding:14px 16px;">
          <p style="margin:0 0 4px;font-size:12px;font-weight:600;letter-spacing:0.04em;text-transform:uppercase;color:#1d7a3a;">${t.tierLabel}</p>
          ${p(t.tier, 'font-weight:600;color:#121212;')}
          ${addon ? p(t.addon, 'margin-top:8px;font-size:14px;') : ''}
        </div>`, '20px 36px 0')}
        ${row(`<p style="margin:0 0 10px;font-size:15px;font-weight:600;color:#121212;">${t.nextTitle}</p>
          <ol style="margin:0;padding-left:20px;font-size:15px;line-height:1.7;color:#444;">${t.next.map((item) => `<li>${item}</li>`).join('')}</ol>`, '24px 36px 0')}
        ${row('<div style="border-top:1px solid #e8e8e8;"></div>', '28px 36px 0')}
        ${row(`<p style="margin:0 0 16px;font-size:15px;font-weight:600;color:#121212;">${t.urgency}</p>
          <a href="${waUrl}" style="display:inline-block;background:#121212;color:#f0f0f0;border-radius:50px;padding:12px 22px;text-decoration:none;font-size:15px;font-weight:600;">${t.wa} <span style="font-weight:400;color:#a9a9a9;">· ${t.waNote}</span></a>`, '24px 36px 0')}
        ${row(`<div style="border-top:1px solid #e8e8e8;padding-top:24px;">
            <p style="margin:0;font-size:13px;color:#888;line-height:1.6;">Antonio Manitta, Founder, NoProb Agency<br/>
            <a href="https://noprob.agency" style="color:#888;text-decoration:none;">noprob.agency</a></p>
          </div>`, '32px 36px 36px')}
      </table>
    </td></tr>
  </table>
</body>
</html>`
}
