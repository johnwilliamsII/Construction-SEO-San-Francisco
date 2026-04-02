import AuditForm from './AuditForm'

export const metadata = {
  title: 'Free SEO Audit Near Me for Contractors | contractorseobayarea.com',
  description:
    'Get a free SEO audit near me for Bay Area contractors. We show your rankings, top competitors, and a clear path to page one — no pitch, no pressure.',
  alternates: { canonical: 'https://www.contractorseobayarea.com/free-seo-audit/' },
}

const WHAT_HAPPENS = [
  { icon: '🔍', text: 'We audit your keyword rankings for your top 20 terms' },
  { icon: '🗺️', text: 'We check your Google Business Profile against top competitors' },
  { icon: '🏆', text: 'We map a competitor gap analysis before the call' },
  { icon: '📋', text: 'You get a 90-day priority action list — no fluff' },
]

export default function FreeAuditPage() {
  return (
    <main>

      {/* ── Page Header ── */}
      <section style={{
        background: 'linear-gradient(rgba(13,27,42,0.60), rgba(13,27,42,0.55)), url(https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=80) center/cover no-repeat',
        padding: 'clamp(3.5rem, 7vw, 5rem) 0',
        textAlign: 'center',
      }}>
        <div className="container" style={{ maxWidth: '680px' }}>
          <span style={{
            display: 'inline-block', padding: '4px 14px', borderRadius: '9999px',
            background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.30)',
            color: '#fff', fontSize: '0.72rem', fontWeight: 700,
            letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem',
          }}>
            Free SEO Consultation
          </span>
          <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: '#fff', fontFamily: 'var(--font-manrope)', fontWeight: 800, lineHeight: 1.15, marginBottom: '1rem' }}>
            Free SEO Audit Near Me for Bay Area Contractors
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.80)', fontSize: '1.05rem', lineHeight: 1.7 }}>
            Before you spend a dollar on SEO, know the truth: what&rsquo;s broken, who&rsquo;s beating you, and why.
            We research your specific business and market before the call — no templates, no guesswork.
          </p>
        </div>
      </section>

      {/* ── Main Content: Form + Info ── */}
      <section style={{ background: '#F8FAFC', padding: 'clamp(3rem, 6vw, 5rem) 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1.4fr) minmax(0,1fr)', gap: '3rem', alignItems: 'start' }}>

            {/* Left — Form */}
            <div style={{ background: '#fff', borderRadius: '16px', padding: '2.5rem', boxShadow: '0 4px 24px rgba(13,27,42,0.08)', borderTop: '4px solid var(--yellow)' }}>
              <h2 style={{ fontSize: '1.35rem', marginBottom: '0.4rem' }}>Send Us a Message</h2>
              <p style={{ color: 'var(--gray)', fontSize: '0.9rem', marginBottom: '2rem' }}>
                Takes 2 minutes. We&rsquo;ll follow up within 1 business day to schedule your consultation.
              </p>
              <AuditForm />
            </div>

            {/* Right — Info Panel */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

              {/* Contact Info card */}
              <div style={{ background: '#fff', borderRadius: '16px', padding: '2rem', boxShadow: '0 4px 24px rgba(13,27,42,0.08)' }}>
                <h3 style={{ fontSize: '1.15rem', marginBottom: '1.25rem' }}>Contact Information</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '1.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <span style={{ fontSize: '1.1rem' }}>✉️</span>
                    <a href="mailto:partners@contractorseobayarea.com" style={{ color: 'var(--navy)', fontSize: '0.92rem', fontWeight: 500 }}>
                      partners@contractorseobayarea.com
                    </a>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <span style={{ fontSize: '1.1rem' }}>🕐</span>
                    <span style={{ color: 'var(--gray)', fontSize: '0.92rem' }}>Response within 1 business day</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <span style={{ fontSize: '1.1rem' }}>📍</span>
                    <span style={{ color: 'var(--gray)', fontSize: '0.92rem' }}>Headquartered in San Francisco, CA</span>
                  </div>
                </div>
                <a href="mailto:partners@contractorseobayarea.com" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', display: 'flex', fontSize: '0.95rem' }}>
                  Email Us Directly →
                </a>
              </div>

              {/* What happens next */}
              <div style={{ background: '#fff', borderRadius: '16px', padding: '2rem', boxShadow: '0 4px 24px rgba(13,27,42,0.08)' }}>
                <h3 style={{ fontSize: '1.15rem', marginBottom: '1.25rem' }}>What Your Audit Covers</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {WHAT_HAPPENS.map((item) => (
                    <div key={item.text} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                      <span style={{ fontSize: '1rem', flexShrink: 0, marginTop: '1px' }}>{item.icon}</span>
                      <span style={{ fontSize: '0.9rem', color: 'var(--slate)', lineHeight: 1.5 }}>{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why choose us */}
              <div style={{ background: 'var(--navy)', borderRadius: '16px', padding: '2rem' }}>
                <h3 style={{ fontSize: '1.1rem', color: '#fff', marginBottom: '1.25rem' }}>Why Choose Us?</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  {[
                    'Construction-only SEO — we know your trade',
                    'We research your market before the call',
                    'Month-to-month, no lock-in contracts',
                    'Plain-English reporting every month',
                    '40+ Bay Area contractors served',
                  ].map((item) => (
                    <div key={item} style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}>
                      <span style={{ color: 'var(--yellow)', fontWeight: 700, flexShrink: 0 }}>✓</span>
                      <span style={{ color: 'rgba(255,255,255,0.80)', fontSize: '0.88rem', lineHeight: 1.5 }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

    </main>
  )
}
