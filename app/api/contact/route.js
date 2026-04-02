import nodemailer from 'nodemailer'

/* ── Nodemailer transporter — Hostinger SMTP ── */
function createTransporter() {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: process.env.SMTP_SECURE === 'true', // true = SSL on 465
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })
}

export async function POST(request) {
  try {
    const body = await request.json()

    const {
      formType = 'Contact Form',
      first_name, last_name, email, phone,
      business_name, website_url, trade_type,
      service_area, target_keywords, current_strategy,
      company, service, message,
    } = body

    /* ── Build plain-text summary of all submitted fields ── */
    const fields = [
      first_name && `Name: ${first_name} ${last_name || ''}`.trim(),
      email        && `Email: ${email}`,
      phone        && `Phone: ${phone}`,
      business_name && `Business: ${business_name}`,
      company      && `Company: ${company}`,
      website_url  && `Website: ${website_url}`,
      trade_type   && `Trade: ${trade_type}`,
      service      && `Service Interest: ${service}`,
      service_area && `Service Area: ${service_area}`,
      target_keywords && `Target Keywords:\n${target_keywords}`,
      current_strategy && `Current Strategy:\n${current_strategy}`,
      message      && `Message:\n${message}`,
    ].filter(Boolean).join('\n\n')

    const transporter = createTransporter()

    await transporter.sendMail({
      from: `"Contractor SEO Bay Area" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_TO,
      replyTo: email || process.env.SMTP_USER,
      subject: `[${formType}] New submission from ${first_name || company || 'a visitor'}`,
      text: `New form submission from contractorseobayarea.com\n\n${fields}\n\n---\nSent via contractorseobayarea.com`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
          <div style="background:#0D1B2A;padding:20px 30px;border-radius:8px 8px 0 0;">
            <h2 style="color:#FFD700;margin:0;font-size:1.1rem;">New ${formType} Submission</h2>
            <p style="color:rgba(255,255,255,0.7);margin:4px 0 0;font-size:0.85rem;">contractorseobayarea.com</p>
          </div>
          <div style="background:#fff;padding:30px;border:1px solid #e5e7eb;border-top:none;border-radius:0 0 8px 8px;">
            ${fields.split('\n\n').map(f => `<p style="margin:0 0 14px;font-size:0.95rem;color:#374151;"><strong>${f.includes(':\n') ? f.split(':\n')[0] + ':' : ''}</strong><br>${f.includes(':\n') ? f.split(':\n')[1] : f}</p>`).join('')}
            <hr style="border:none;border-top:1px solid #e5e7eb;margin:20px 0;">
            <p style="font-size:0.8rem;color:#9ca3af;margin:0;">Sent via contractorseobayarea.com contact form</p>
          </div>
        </div>
      `,
    })

    return Response.json({ ok: true }, { status: 200 })
  } catch (err) {
    console.error('[contact/route] SMTP error:', err)
    return Response.json({ ok: false, error: 'Failed to send. Please email us directly.' }, { status: 500 })
  }
}
