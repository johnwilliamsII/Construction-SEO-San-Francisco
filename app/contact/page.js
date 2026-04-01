import SectionHeading from '../../components/sections/SectionHeading'
import FormField from '../../components/forms/FormField'
import StatCard from '../../components/sections/StatCard'
import Section from '../../components/layout/Section'

export const metadata = {
  title: 'Get a Free SEO Audit | Construction SEO San Francisco',
  description:
    'Request a free, no-obligation SEO audit for your Bay Area construction company. We\'ll show you where you rank, who\'s beating you, and what it takes to reach #1.',
}

/* NOTE: This form uses a static mailto fallback for the static export.
   Wire up a real form handler (Formspree, Netlify Forms, etc.) before launch. */

const TRUST_STATS = [
  { value: '40+',   label: 'Contractors Helped' },
  { value: '4.8×',  label: 'Average Lead Growth' },
  { value: '100%',  label: 'Construction Focus'  },
]

const SERVICE_OPTIONS = [
  { value: '',              label: 'Select a service…' },
  { value: 'local-seo',     label: 'Local SEO' },
  { value: 'gbp',           label: 'Google Business Profile' },
  { value: 'both',          label: 'Both Services' },
  { value: 'not-sure',      label: 'Not sure yet' },
]

export default function ContactPage() {
  return (
    <>
      {/* ── Header ── */}
      <Section variant="gradient" size="lg" aria-labelledby="contact-heading">
        <SectionHeading
          label="Free SEO Audit"
          heading={<>Get Your <em>Free</em> Bay Area SEO Audit</>}
          body="No commitment. No spam. Just an honest look at where your construction business stands on Google — and what it takes to reach #1."
          id="contact-heading"
        />
      </Section>

      {/* ── Stats ── */}
      <Section variant="white" size="sm">
        <div className="grid-3" style={{ maxWidth: '680px', margin: '0 auto' }}>
          {TRUST_STATS.map((s) => <StatCard key={s.label} value={s.value} label={s.label} />)}
        </div>
      </Section>

      {/* ── Contact form ── */}
      <Section variant="subtle">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(2rem, 6vw, 5rem)', alignItems: 'start', maxWidth: '1000px', margin: '0 auto' }}>

          {/* Form */}
          <div className="glass-card glass-highlight">
            <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Request Your Free Audit</h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '0.95rem' }}>
              We&apos;ll review your Google presence within 1 business day.
            </p>

            {/* Static export: use a mailto or Formspree action */}
            <form
              action="mailto:hello@constructionseo.sf"
              method="POST"
              encType="text/plain"
              style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
            >
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <FormField id="first-name" label="First Name"   type="text"  required placeholder="James" />
                <FormField id="last-name"  label="Last Name"    type="text"  required placeholder="Moreno" />
              </div>
              <FormField id="email"    label="Email Address"    type="email" required placeholder="james@morenoconstruction.com" />
              <FormField id="phone"    label="Phone Number"     type="tel"            placeholder="(415) 555-0123" hint="Optional — for faster follow-up" />
              <FormField id="company"  label="Company Name"     type="text"  required placeholder="Moreno Construction Co." />
              <FormField
                id="service"
                label="What service are you interested in?"
                type="select"
                options={SERVICE_OPTIONS}
              />
              <FormField
                id="message"
                label="Anything else we should know?"
                type="textarea"
                placeholder="Tell us about your business, service area, or current Google situation…"
                hint="Optional but helpful"
              />

              <button type="submit" className="btn btn-primary btn--lg btn--full">
                Request My Free Audit →
              </button>
            </form>
          </div>

          {/* Info panel */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div className="glass-card glass-card--sm glass-highlight">
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.75rem' }}>What You&apos;ll Get</h3>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {[
                  'Current rankings for your top 10 keywords',
                  'Competitor analysis — who\'s beating you and why',
                  'GBP health check and 3-Pack eligibility',
                  'Top 3 quick wins you can implement immediately',
                  'Honest assessment of what SEO can do for your business',
                ].map((item) => (
                  <li key={item} style={{ display: 'flex', gap: '0.75rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                    <span style={{ color: 'var(--accent)', fontWeight: 700, flexShrink: 0 }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass-card glass-card--sm glass-highlight">
              <h3 style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>Prefer Email?</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '0.75rem' }}>
                Reach us directly at{' '}
                <a href="mailto:hello@constructionseo.sf" style={{ color: 'var(--accent)', fontWeight: 600 }}>
                  hello@constructionseo.sf
                </a>
              </p>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)' }}>
                We respond within 1 business day, usually faster.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}
