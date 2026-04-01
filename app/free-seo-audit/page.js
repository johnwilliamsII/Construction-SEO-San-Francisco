import Section from '../../components/layout/Section'
import FormField from '../../components/forms/FormField'

export const metadata = {
  title: 'Free Contractor SEO Audit | contractorseosanfrancisco.com',
  description:
    'Get a free SEO audit for your Bay Area contracting business. See exactly why your competitors are ranking above you and what it takes to get to #1 on Google.',
}

const TRADES = [
  'General Contractors', 'HVAC', 'Remodeling Contractors', 'Roofing', 'Plumbing',
  'Electrical', 'Landscaping', 'Concrete & Foundation', 'Flooring', 'Painting',
  'Deck & Fencing', 'ADU / Room Additions', 'Design-Build Firms', 'Other Trade',
]

const AUDIT_COVERS = [
  { icon: '🔍', label: 'Keyword rankings for your top 20 terms' },
  { icon: '🗺️', label: 'Google Business Profile gaps' },
  { icon: '⚡', label: 'Website technical & Core Web Vitals' },
  { icon: '🏆', label: 'Competitor gap analysis' },
  { icon: '🔑', label: '30–50 keyword opportunities mapped' },
  { icon: '📋', label: '90-day priority action list' },
]

export default function FreeAuditPage() {
  return (
    <>
      {/* ── Dark Hero + Form ── */}
      <section
        aria-labelledby="audit-hero-heading"
        style={{
          background: 'linear-gradient(160deg, #16192A 0%, #1A2240 55%, #1C1F32 100%)',
          position:   'relative',
          overflow:   'hidden',
          padding:    'clamp(4rem, 8vw, 6.5rem) 0 clamp(3rem, 6vw, 5rem)',
        }}
      >
        <div aria-hidden="true" style={{ position: 'absolute', top: '-80px', right: '-80px', width: '450px', height: '450px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(232,97,26,0.15) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', bottom: '-60px', left: '-60px', width: '300px', height: '300px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>

            {/* Left — Copy */}
            <div>
              <span style={{
                display: 'inline-flex', alignItems: 'center',
                padding: '5px 16px', borderRadius: '9999px',
                background: 'rgba(232,97,26,0.15)', border: '1px solid rgba(232,97,26,0.30)',
                color: '#F4875A', fontSize: '0.72rem', fontWeight: 700,
                letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.25rem',
              }}>
                Free SEO Audit
              </span>

              <h1 id="audit-hero-heading" style={{
                fontSize: 'clamp(2rem, 4.5vw, 3.2rem)',
                color: '#FFFFFF',
                fontFamily: 'var(--font-manrope)',
                fontWeight: 800,
                lineHeight: 1.15,
                letterSpacing: '-0.02em',
                marginBottom: '1rem',
              }}>
                See Exactly Why Competitors Are{' '}
                <em style={{ color: 'var(--accent)', fontStyle: 'italic' }}>Ranking Above You.</em>
              </h1>

              <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.60)', lineHeight: 'var(--leading-relaxed)', marginBottom: '2rem' }}>
                Before you spend a dollar on SEO, know the truth: what&rsquo;s broken, who&rsquo;s beating you, and why. We research your specific business and market before the call. No templates, no guesswork.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', marginBottom: '2rem' }}>
                {AUDIT_COVERS.map((item) => (
                  <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <span style={{ fontSize: '1.1rem', flexShrink: 0 }}>{item.icon}</span>
                    <span style={{ fontSize: '0.92rem', color: 'rgba(255,255,255,0.75)' }}>{item.label}</span>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '2rem' }}>
                {[
                  { num: '40+', label: 'Audits done' },
                  { num: '1 day', label: 'Turnaround' },
                  { num: '$0', label: 'Always free' },
                ].map((s) => (
                  <div key={s.label}>
                    <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--accent)', fontFamily: 'var(--font-manrope)' }}>{s.num}</div>
                    <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.40)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Form */}
            <div style={{
              background: 'rgba(255,255,255,0.97)',
              borderRadius: 'var(--radius-lg)',
              padding: '2rem',
              borderTop: '4px solid var(--accent)',
              boxShadow: 'var(--shadow-lg)',
            }}>
              <h2 style={{ fontSize: '1.2rem', marginBottom: '0.4rem', color: 'var(--text-primary)' }}>Request Your Free Audit</h2>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                Takes 2 minutes. We&rsquo;ll follow up within 1 business day.
              </p>

              <form
                name="free-seo-audit"
                method="POST"
                action="/free-seo-audit/thank-you/"
                style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}
              >
                <input type="hidden" name="form-name" value="free-seo-audit" />

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.9rem' }}>
                  <FormField label="First Name" name="first_name" required placeholder="James" />
                  <FormField label="Last Name" name="last_name" required placeholder="Moreno" />
                </div>

                <FormField label="Business Name" name="business_name" required placeholder="Moreno Construction Co." />
                <FormField label="Website URL" name="website_url" type="url" required placeholder="https://yoursite.com" />
                <FormField label="Phone" name="phone" type="tel" required placeholder="(415) 555-0100" />
                <FormField label="Email" name="email" type="email" required placeholder="james@morenoconstruction.com" />

                <div>
                  <label className="form-label form-label--required" htmlFor="trade_type">Trade / Service Type</label>
                  <select id="trade_type" name="trade_type" className="form-input" required defaultValue="">
                    <option value="" disabled>Select your trade...</option>
                    {TRADES.map((t) => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>

                <FormField
                  label="Primary Service Area"
                  name="service_area"
                  required
                  placeholder="e.g. San Francisco, Oakland, South Bay"
                  hint="City or region where you want to rank"
                />

                <FormField
                  label="Biggest SEO Challenge (optional)"
                  name="challenge"
                  as="textarea"
                  rows={2}
                  placeholder="e.g. Competitors always show above me on Google Maps..."
                />

                <button type="submit" className="btn btn-primary" style={{ marginTop: '0.25rem', width: '100%', justifyContent: 'center' }}>
                  Send My Free Audit Request →
                </button>

                <p style={{ fontSize: '0.76rem', color: 'var(--text-tertiary)', textAlign: 'center', margin: 0 }}>
                  No commitment. No spam. Honest data about your market.
                </p>
              </form>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
