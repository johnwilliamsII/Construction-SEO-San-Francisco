import SectionHeading from '../../components/sections/SectionHeading'
import TestimonialCard from '../../components/sections/TestimonialCard'
import CtaBanner from '../../components/sections/CtaBanner'
import StatCard from '../../components/sections/StatCard'
import ImageBlock from '../../components/sections/ImageBlock'
import Section from '../../components/layout/Section'

export const metadata = {
  title: 'Case Studies | Construction SEO San Francisco',
  description:
    'Real results from real Bay Area contractors. See how we\'ve helped construction companies rank #1 on Google, fill their pipelines, and reduce cost per lead.',
}

/* ── Case study data ────────────────────────────────────────────
   Add full case studies here as they are documented.
   Each: { slug, client, type, location, results, quote, author, role, stats }
──────────────────────────────────────────────────────────────── */
const CASE_STUDIES = []

const SUMMARY_STATS = [
  { value: '+312%', label: 'Avg. Traffic Growth',     detail: 'Across all clients, 12 months' },
  { value: '4.8×',  label: 'Avg. Lead Multiplier',    detail: 'Leads per month vs. baseline' },
  { value: '–60%',  label: 'Cost Per Lead Reduction', detail: 'Vs. paid directory listings' },
  { value: '40+',   label: 'Bay Area Contractors',     detail: 'Served and ranking' },
]

const TESTIMONIALS = [
  {
    quote: "Within 4 months we went from page 3 to the #1 spot for 'general contractor San Francisco.' Our inbound calls doubled. The team knows construction — they actually talk our language.",
    name: 'James Moreno',
    role: 'Owner, Moreno Construction Co. — San Francisco',
    initials: 'JM',
    stars: 5,
  },
  {
    quote: "We had zero Google presence before. Now we're in the Maps 3-Pack for 'kitchen remodel Oakland' and 'bathroom remodel East Bay.' Booked out 3 months ahead.",
    name: 'Rachel Torres',
    role: 'Co-Owner, Bay Craft Remodeling — Oakland',
    initials: 'RT',
    stars: 5,
  },
  {
    quote: "As a specialty roofing company competing with Angi and HomeAdvisor, I was skeptical. Six months later our GBP gets 200+ monthly calls and our cost per lead dropped 60%.",
    name: 'Steve Kim',
    role: 'Owner, Peninsula Roofing — San Mateo',
    initials: 'SK',
    stars: 5,
  },
]

export default function CaseStudiesPage() {
  return (
    <>
      {/* ── Dark Hero ── */}
      <section
        aria-labelledby="cs-heading"
        style={{
          background:   'linear-gradient(160deg, #16192A 0%, #1A2240 55%, #1C1F32 100%)',
          position:     'relative',
          overflow:     'hidden',
          padding:      'clamp(4rem, 8vw, 6.5rem) 0 clamp(3rem, 6vw, 5rem)',
          textAlign:    'center',
        }}
      >
        <div aria-hidden="true" style={{ position: 'absolute', top: '-100px', right: '-80px', width: '480px', height: '480px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(232,97,26,0.14) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', bottom: '-60px', left: '-60px', width: '320px', height: '320px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <div className="container" style={{ maxWidth: '760px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <span style={{
            display: 'inline-flex', alignItems: 'center',
            padding: '5px 16px', borderRadius: '9999px',
            background: 'rgba(232,97,26,0.15)', border: '1px solid rgba(232,97,26,0.30)',
            color: '#F4875A', fontSize: '0.72rem', fontWeight: 700,
            letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.25rem',
          }}>
            Client Results
          </span>

          <h1 id="cs-heading" style={{
            fontSize: 'clamp(2rem, 4.5vw, 3.2rem)',
            color: '#FFFFFF',
            fontFamily: 'var(--font-manrope)',
            fontWeight: 800,
            lineHeight: 1.15,
            letterSpacing: '-0.02em',
            marginBottom: '1.25rem',
          }}>
            Real Rankings.{' '}
            <em style={{ color: 'var(--accent)', fontStyle: 'italic' }}>Real Revenue.</em>{' '}
            Real Bay Area Contractors.
          </h1>

          <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.55)', lineHeight: 'var(--leading-relaxed)', maxWidth: '560px', margin: '0 auto 2.5rem' }}>
            We don&rsquo;t promise results. We show them. Here&rsquo;s what happens when construction companies invest in SEO that actually understands the industry.
          </p>

          {/* Inline stat strip */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2.5rem', flexWrap: 'wrap' }}>
            {[
              { num: '+312%', label: 'Avg. Traffic Growth' },
              { num: '4.8×',  label: 'More Leads / Month' },
              { num: '–60%', label: 'Lower Cost Per Lead' },
              { num: '40+',   label: 'Contractors Ranking' },
            ].map((s) => (
              <div key={s.label} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--accent)', fontFamily: 'var(--font-manrope)', lineHeight: 1.1 }}>{s.num}</div>
                <div style={{ color: 'rgba(255,255,255,0.40)', fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.06em', marginTop: '0.2rem' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ── Case studies grid ── */}
      <Section variant="subtle" aria-labelledby="cs-grid-heading">
        <SectionHeading
          label="Featured Results"
          heading="Case Studies"
          id="cs-grid-heading"
        />

        {CASE_STUDIES.length > 0 ? (
          <div className="grid-2">
            {CASE_STUDIES.map((cs) => (
              <article key={cs.slug} className="glass-card glass-highlight">
                <ImageBlock src={cs.image} alt={`${cs.client} case study`} ratio="card" />
                <div style={{ padding: '1.5rem 0.25rem 0.25rem' }}>
                  <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
                    <span className="badge badge--accent">{cs.type}</span>
                    <span className="badge badge--neutral">{cs.location}</span>
                  </div>
                  <h3 style={{ marginBottom: '0.75rem' }}>{cs.client}</h3>
                  <div className="grid-2" style={{ gap: '0.75rem', marginBottom: '1.25rem' }}>
                    {cs.stats?.map((stat) => (
                      <div key={stat.label} style={{ background: 'var(--accent-light)', border: '1px solid var(--accent-border)', borderRadius: 'var(--radius-md)', padding: '0.75rem', textAlign: 'center' }}>
                        <span style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--accent)', display: 'block' }}>{stat.value}</span>
                        <span style={{ fontSize: '0.78rem', color: 'var(--text-tertiary)' }}>{stat.label}</span>
                      </div>
                    ))}
                  </div>
                  <a href={`/case-studies/${cs.slug}/`} className="btn btn-secondary btn--sm">
                    Read Full Case Study →
                  </a>
                </div>
              </article>
            ))}
          </div>
        ) : (
          /* Empty state — show testimonials while full case studies are written */
          <div>
            <p style={{ textAlign: 'center', color: 'var(--text-tertiary)', marginBottom: '2.5rem', fontStyle: 'italic', fontSize: '0.95rem' }}>
              Full written case studies are being documented. In the meantime, here&apos;s what our clients say:
            </p>
            <div className="testimonials-grid">
              {TESTIMONIALS.map((t) => (
                <TestimonialCard key={t.name} {...t} />
              ))}
            </div>
          </div>
        )}
      </Section>

      {/* ── CTA ── */}
      <CtaBanner
        label="Your Turn"
        heading={<>Ready to Be Our Next <em>Success Story</em>?</>}
        body="Start with a free audit. We'll show you exactly what's possible for your construction business in the Bay Area market."
        primaryCta={{ label: 'Get My Free SEO Audit', href: '/contact/' }}
        secondaryCta={{ label: 'See Our Services', href: '/services/' }}
      />
    </>
  )
}
