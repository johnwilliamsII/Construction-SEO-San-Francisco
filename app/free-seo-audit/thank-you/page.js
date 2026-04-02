export const metadata = {
  title: 'Request Received | Contractor SEO Bay Area',
  description: "Thanks for reaching out. We'll review your info and follow up within 1 business day.",
  robots: 'noindex',
  alternates: { canonical: 'https://www.contractorseobayarea.com/free-seo-audit/thank-you/' },
}

export default function ThankYouPage() {
  return (
    <main>
      <section style={{
        background: 'linear-gradient(rgba(13,27,42,0.65), rgba(13,27,42,0.60)), url(https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=80) center/cover no-repeat',
        padding: 'clamp(5rem, 10vw, 8rem) 0',
        textAlign: 'center',
        minHeight: '60vh',
        display: 'flex',
        alignItems: 'center',
      }}>
        <div className="container" style={{ maxWidth: '600px' }}>
          <div style={{ fontSize: '3.5rem', marginBottom: '1.25rem' }}>✅</div>
          <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', color: '#fff', fontFamily: 'var(--font-manrope)', fontWeight: 800, lineHeight: 1.15, marginBottom: '1rem' }}>
            We Got Your Request!
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '2rem' }}>
            Thanks for reaching out. We&rsquo;ll review your business info and follow up within
            1 business day to schedule your free consultation.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/" className="btn btn-primary" style={{ display: 'inline-flex' }}>
              Back to Home →
            </a>
            <a href="/blog/" className="btn" style={{ display: 'inline-flex', background: 'rgba(255,255,255,0.15)', color: '#fff', border: '1px solid rgba(255,255,255,0.35)' }}>
              Read Our Blog
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
