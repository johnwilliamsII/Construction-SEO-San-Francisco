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
      {/* ── Header ── */}
      <Section variant="gradient" size="lg" aria-labelledby="cs-heading">
        <SectionHeading
          label="Client Results"
          heading={<>Real Rankings. <em>Real Revenue.</em> Real Bay Area Contractors.</>}
          body="We don't promise results. We show them. Here's what happens when construction companies invest in SEO that actually understands the industry."
          id="cs-heading"
        />
      </Section>

      {/* ── Summary stats ── */}
      <Section variant="white">
        <div className="grid-4">
          {SUMMARY_STATS.map((s) => <StatCard key={s.label} {...s} />)}
        </div>
      </Section>

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
