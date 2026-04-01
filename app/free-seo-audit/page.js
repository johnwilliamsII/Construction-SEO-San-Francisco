import Section from '../../components/layout/Section'
import SectionHeading from '../../components/sections/SectionHeading'
import FormField from '../../components/forms/FormField'

export const metadata = {
  title: 'Free Contractor SEO Audit Bay Area | contractorseobayarea.com',
  description:
    'Get a free SEO audit for your Bay Area contracting business. See exactly why your competitors are ranking above you and what it will take to get to #1 on Google.',
}

const AUDIT_INCLUDES = [
  {
    icon: '🔍',
    title: 'Google Rankings Analysis',
    body: 'We pull your current keyword rankings for your top 20 most important search terms — map pack and organic. You see exactly where you stand vs. competitors.',
  },
  {
    icon: '🗺️',
    title: 'Google Business Profile Review',
    body: 'We audit every field of your GBP for optimization gaps — categories, services, photos, reviews, Q&A. Most contractors are leaving map pack spots on the table.',
  },
  {
    icon: '⚡',
    title: 'Website Technical Audit',
    body: 'Page speed, mobile performance, indexability, Core Web Vitals. We flag every technical issue that\'s costing you rankings in plain, non-technical language.',
  },
  {
    icon: '🏆',
    title: 'Competitor Gap Analysis',
    body: 'We identify who\'s outranking you and specifically why — their content, their links, their GBP. You get a clear picture of what it will take to beat them.',
  },
  {
    icon: '🔑',
    title: 'Keyword Opportunity Map',
    body: 'We map your top 30–50 keyword opportunities by trade, city, and neighborhood. This shows you the exact searches driving real jobs in your market right now.',
  },
  {
    icon: '📋',
    title: 'Actionable Priority List',
    body: 'Not just findings — a ranked list of actions you can take this month, next month, and over the next 90 days to start moving rankings. Whether you work with us or not.',
  },
]

const TRADES = [
  'General Contractors', 'HVAC', 'Remodeling Contractors', 'Roofing', 'Plumbing',
  'Electrical', 'Landscaping', 'Concrete & Foundation', 'Flooring', 'Painting',
  'Deck & Fencing', 'ADU / Room Additions', 'Design-Build Firms', 'Other Trade',
]

const PROCESS_STEPS = [
  {
    num: '01',
    title: 'Submit This Form',
    body: 'Takes 2 minutes. We need your website URL, service area, and trade type to do meaningful research before we talk.',
  },
  {
    num: '02',
    title: 'We Build Your Audit',
    body: 'Within 1 business day, our team runs your full analysis — rankings, GBP, technical, competitors, and keyword opportunities.',
  },
  {
    num: '03',
    title: 'Strategy Call',
    body: 'We walk through the findings together. You\'ll see exactly why competitors rank above you and what your specific path to #1 looks like.',
  },
  {
    num: '04',
    title: 'You Decide, No Pressure',
    body: 'If we\'re a fit, we\'ll show you a package recommendation. If not, you walk away with a full audit and priority list — completely free.',
  },
]

export default function FreeAuditPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="hero-section" aria-labelledby="audit-hero-heading">
        <div className="container" style={{ padding: '5rem var(--space-6) 3rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>

            {/* Left — Copy */}
            <div>
              <span className="section-label">Free SEO Audit</span>
              <h1 id="audit-hero-heading">
                Free SEO Audit for <em>Bay Area Contractors</em>
              </h1>
              <p style={{ fontSize: '1.2rem', fontWeight: 600, color: 'var(--text-primary)', margin: '1rem 0 0.75rem', lineHeight: 'var(--leading-snug)' }}>
                See Exactly Why Your Competitors Are Ranking Above You
              </p>
              <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 'var(--leading-relaxed)', marginBottom: '1.5rem' }}>
                Before you spend a dollar on SEO, you deserve to know the truth about your current Google presence — what&rsquo;s working, what&rsquo;s broken, and who&rsquo;s beating you and why.
              </p>
              <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 'var(--leading-relaxed)' }}>
                Our free audit covers your keyword rankings, Google Business Profile, website technical health, competitor gaps, and a 30-day action plan. No commitment. No sales pitch. Just honest data about your specific market.
              </p>

              <div style={{ display: 'flex', gap: '1.5rem', marginTop: '2rem', flexWrap: 'wrap' }}>
                {[
                  { num: '40+', label: 'Audits completed' },
                  { num: '1 day', label: 'Turnaround time' },
                  { num: '$0', label: 'Cost, always' },
                ].map((s) => (
                  <div key={s.label}>
                    <div style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--accent)', fontFamily: 'var(--font-manrope)' }}>{s.num}</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Form */}
            <div className="glass-card glass-strong" style={{ borderTop: '4px solid var(--accent)' }}>
              <h2 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Request Your Free Audit</h2>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                Takes 2 minutes. We&rsquo;ll follow up within 1 business day.
              </p>

              <form
                name="free-seo-audit"
                method="POST"
                action="/free-seo-audit/thank-you/"
                style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
              >
                <input type="hidden" name="form-name" value="free-seo-audit" />

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <FormField label="First Name" name="first_name" required placeholder="e.g. James" />
                  <FormField label="Last Name" name="last_name" required placeholder="e.g. Moreno" />
                </div>

                <FormField
                  label="Business Name"
                  name="business_name"
                  required
                  placeholder="e.g. Moreno Construction Co."
                />

                <FormField
                  label="Website URL"
                  name="website_url"
                  type="url"
                  required
                  placeholder="https://yoursite.com"
                />

                <FormField
                  label="Phone Number"
                  name="phone"
                  type="tel"
                  required
                  placeholder="(415) 555-0100"
                />

                <FormField
                  label="Email Address"
                  name="email"
                  type="email"
                  required
                  placeholder="james@morenoconstruction.com"
                />

                <div>
                  <label className="form-label form-label--required" htmlFor="trade_type">
                    Trade / Service Type
                  </label>
                  <select
                    id="trade_type"
                    name="trade_type"
                    className="form-input"
                    required
                    defaultValue=""
                  >
                    <option value="" disabled>Select your trade...</option>
                    {TRADES.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
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
                  rows={3}
                  placeholder="e.g. Competitors are always above me on Google Maps..."
                />

                <button type="submit" className="btn btn-primary" style={{ marginTop: '0.5rem', width: '100%', justifyContent: 'center' }}>
                  Send My Free Audit Request →
                </button>

                <p style={{ fontSize: '0.78rem', color: 'var(--text-tertiary)', textAlign: 'center', margin: 0 }}>
                  No commitment. No spam. Honest answers about your rankings.
                </p>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* ── What the audit includes ── */}
      <Section variant="subtle" aria-labelledby="audit-includes-heading">
        <SectionHeading
          label="What You'll Get"
          heading={<>Six Things Your Audit <em>Covers in Detail</em></>}
          body="This isn't a generic checklist. We research your specific business, market, and competitors before the call."
          id="audit-includes-heading"
        />
        <div className="grid-3" style={{ marginTop: '3rem' }}>
          {AUDIT_INCLUDES.map((item) => (
            <div key={item.title} className="glass-card glass-highlight">
              <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{item.icon}</div>
              <h3 style={{ fontSize: '1.05rem', marginBottom: '0.6rem' }}>{item.title}</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 'var(--leading-relaxed)', margin: 0 }}>{item.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Process ── */}
      <Section variant="white" aria-labelledby="audit-process-heading">
        <SectionHeading
          label="How It Works"
          heading="From Form to Findings in 24 Hours"
          id="audit-process-heading"
        />
        <div className="process-grid" style={{ marginTop: '3rem' }}>
          {PROCESS_STEPS.map((step) => (
            <div key={step.num} className="process-card">
              <div className="process-num">{step.num}</div>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Trust signals ── */}
      <Section variant="subtle" size="sm" aria-label="Trust signals">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
          {[
            { icon: '🔒', label: 'No commitment required' },
            { icon: '📞', label: 'No cold calls, ever' },
            { icon: '📊', label: 'Real data, not estimates' },
            { icon: '🤝', label: 'Honest if we\'re not a fit' },
          ].map((trust) => (
            <div key={trust.label} className="glass-card glass-card--sm" style={{ textAlign: 'center', padding: '1.25rem' }}>
              <div style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>{trust.icon}</div>
              <div style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-primary)' }}>{trust.label}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Bottom CTA ── */}
      <Section variant="white" size="md">
        <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
          <span className="section-label">Still Deciding?</span>
          <h2 style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', margin: '0.75rem 0 1rem' }}>
            The Audit Is Free. The Insight Is Invaluable.
          </h2>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 'var(--leading-relaxed)', marginBottom: '2rem' }}>
            Most Bay Area contractors are leaving significant lead volume on the table because of fixable issues in their GBP and on-page SEO. The audit shows you what those are — no charge, no pressure, no gotcha.
          </p>
          <a href="#audit-hero-heading" className="btn btn-primary">
            Request My Free SEO Audit →
          </a>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-tertiary)', marginTop: '1rem' }}>
            Or call us directly — we&rsquo;re happy to chat before the audit.
          </p>
        </div>
      </Section>
    </>
  )
}
