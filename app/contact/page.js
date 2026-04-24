import Script from 'next/script'
import SectionHeading from '../../components/sections/SectionHeading'
import StatCard from '../../components/sections/StatCard'
import Section from '../../components/layout/Section'

export const metadata = {
  title: 'Get a Free SEO Audit | Construction SEO San Francisco',
  description:
    'Book a free, no-obligation SEO audit for your Bay Area construction company. We\'ll show you where you rank, who\'s beating you, and what it takes to reach #1.',
  alternates: { canonical: 'https://www.contractorseobayarea.com/contact/' },
}

const TRUST_STATS = [
  { value: '40+',   label: 'Contractors Helped' },
  { value: '4.8×',  label: 'Average Lead Growth' },
  { value: '100%',  label: 'Construction Focus'  },
]

export default function ContactPage() {
  return (
    <>
      {/* ── Header ── */}
      <Section variant="gradient" size="lg" aria-labelledby="contact-heading">
        <SectionHeading
          as="h1"
          label="Free SEO Audit"
          heading={<>Book Your <em>Free</em> Bay Area SEO Audit</>}
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

      {/* ── TidyCal Booking ── */}
      <Section variant="subtle">
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>

          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Schedule Your Free Audit</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
              Pick a time that works for you — we&apos;ll review your Google presence before the call.
            </p>
          </div>

          <div className="glass-card glass-highlight" style={{ padding: '2rem' }}>
            <div className="tidycal-embed" data-path="3og59pd/30-minute-meeting-m2xdyw7" />
            <Script
              src="https://asset-tidycal.b-cdn.net/js/embed.js"
              strategy="lazyOnload"
            />
          </div>

          {/* Prefer email fallback */}
          <div className="glass-card glass-card--sm glass-highlight" style={{ marginTop: '1.5rem', textAlign: 'center' }}>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', margin: 0 }}>
              Prefer email?{' '}
              <a href="mailto:partners@contractorseobayarea.com" style={{ color: 'var(--accent)', fontWeight: 600 }}>
                partners@contractorseobayarea.com
              </a>
              {' '}— we respond within 1 business day.
            </p>
          </div>

        </div>
      </Section>
    </>
  )
}
