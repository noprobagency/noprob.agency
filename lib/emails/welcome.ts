/**
 * Locale-aware HTML body sent to the lead immediately after they submit the
 * contact form. Email clients have very limited CSS support, so the layout
 * relies on inline styles + nested tables. The WhatsApp icon is inlined as an
 * SVG data URI so the email renders identically without depending on a
 * publicly hosted asset.
 */

const WHATSAPP_ICON_DATA_URI =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white'%3E%3Cpath d='M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z'/%3E%3C/svg%3E"

function esc(value: string): string {
  return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}

export function buildWelcomeEmail({
  name,
  isIT,
  waUrl,
  bookingUrl,
}: {
  name: string
  isIT: boolean
  waUrl: string
  bookingUrl: string
}): string {
  return `<!DOCTYPE html>
<html lang="${isIT ? 'it' : 'en'}">
<head>
  <meta charset="utf-8"/>
  <meta name="viewport" content="width=device-width,initial-scale=1"/>
  <title>${isIT ? 'Richiesta ricevuta' : 'Request received'}</title>
</head>
<body style="margin:0;padding:0;background:#f0f0f0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">

  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f0f0f0;padding:40px 16px;">
    <tr><td align="center">
      <table width="100%" cellpadding="0" cellspacing="0"
             style="max-width:560px;background:#ffffff;border-radius:16px;overflow:hidden;border:1px solid #e0e0e0;">

        <!-- HEADER -->
        <tr>
          <td style="background:#121212;padding:28px 36px;">
            <img src="https://noprob.agency/images/logo-no-prob-white-1.svg"
                 alt="noprob agency" height="28" style="display:block"/>
          </td>
        </tr>

        <!-- BADGE -->
        <tr>
          <td style="padding:32px 36px 0;">
            <span style="display:inline-block;background:#f0f0f0;border-radius:999px;padding:4px 14px;font-size:12px;font-weight:600;letter-spacing:0.02em;color:#444;text-transform:uppercase;">
              ${isIT ? 'Richiesta ricevuta' : 'Request received'}
            </span>
          </td>
        </tr>

        <!-- HEADING -->
        <tr>
          <td style="padding:20px 36px 0;">
            <h1 style="margin:0;font-size:26px;font-weight:700;line-height:1.2;color:#121212;letter-spacing:-0.03em;">
              ${isIT ? `Ciao ${esc(name)}, abbiamo ricevuto la tua richiesta.` : `Hi ${esc(name)}, we got your request.`}
            </h1>
          </td>
        </tr>

        <!-- BODY TEXT -->
        <tr>
          <td style="padding:16px 36px 0;">
            <p style="margin:0;font-size:16px;line-height:1.7;color:#444;">
              ${
                isIT
                  ? "Esaminerò personalmente i tuoi dettagli e ti contatterò entro 24 ore per organizzare una videochiamata introduttiva."
                  : "I'll personally review your details and get back to you within 24 hours to schedule an intro call."
              }
            </p>
          </td>
        </tr>

        <!-- DIVIDER -->
        <tr>
          <td style="padding:28px 36px 0;">
            <div style="border-top:1px solid #e8e8e8;"></div>
          </td>
        </tr>

        <!-- CTA SECTION -->
        <tr>
          <td style="padding:24px 36px 0;">
            <p style="margin:0 0 20px;font-size:15px;font-weight:600;color:#121212;">
              ${isIT ? 'Hai urgenza? Contattami direttamente:' : 'Have urgency? Reach me directly:'}
            </p>

            <a href="${waUrl}" style="display:inline-flex;align-items:center;gap:10px;background:#121212;color:#f0f0f0;border-radius:50px;padding:10px 22px 10px 10px;text-decoration:none;font-size:15px;font-weight:600;margin-bottom:12px;">
              <span style="display:inline-flex;align-items:center;justify-content:center;width:34px;height:34px;border-radius:50%;background:#25D366;flex-shrink:0;">
                <img src="${WHATSAPP_ICON_DATA_URI}" width="18" height="18" alt="" style="display:block;"/>
              </span>
              <span>
                ${isIT ? 'Scrivi su WhatsApp' : 'Write on WhatsApp'}
                <span style="display:block;font-size:12px;font-weight:400;color:#a9a9a9;margin-top:1px;">
                  ${isIT ? 'Antonio risponde di persona' : 'Antonio replies personally'}
                </span>
              </span>
            </a>
          </td>
        </tr>

        <!-- BOOKING CTA -->
        <tr>
          <td style="padding:8px 36px 0;">
            <p style="margin:0 0 14px;font-size:15px;color:#444;line-height:1.6;">
              ${isIT ? 'Oppure prenota direttamente una videochiamata usando il calendario:' : 'Or book a call directly using the calendar:'}
            </p>
            <a href="${bookingUrl}" style="display:inline-block;background:#f0f0f0;color:#121212;border-radius:8px;padding:12px 24px;text-decoration:none;font-size:15px;font-weight:600;border:1px solid #d0d0d0;">
              ${isIT ? 'Prenota una videochiamata →' : 'Book a call →'}
            </a>
          </td>
        </tr>

        <!-- FOOTER -->
        <tr>
          <td style="padding:32px 36px 36px;">
            <div style="border-top:1px solid #e8e8e8;padding-top:24px;">
              <p style="margin:0;font-size:13px;color:#888;line-height:1.6;">
                Antonio Manitta &mdash; Founder, NoProb Agency<br/>
                <a href="https://noprob.agency" style="color:#888;text-decoration:none;">noprob.agency</a>
              </p>
            </div>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>

</body>
</html>`
}
