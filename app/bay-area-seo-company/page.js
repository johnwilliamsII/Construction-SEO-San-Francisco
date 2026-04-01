import Section from '../../components/layout/Section'
import SectionHeading from '../../components/sections/SectionHeading'
import StatCard from '../../components/sections/StatCard'
import TestimonialCard from '../../components/sections/TestimonialCard'
import CtaBanner from '../../components/sections/CtaBanner'

export const metadata = {
  title: 'Bay Area SEO Company for Contractors | contractorseobayarea.com',
  description:
    'We are the Bay Area SEO company built exclusively for contractors. Not a generic agency — a focused team that only works with construction companies, trades, and home service businesses.',
}

const STATS = [
  { value: '40+', label: 'Bay Area Contractors', detail: 'Served and ranking' },
  { value: '+312%', label: 'Avg. Traffic Growth', detail: 'Across clients, 12 months' },
  { value: '12+', label: 'California Trades', detail: 'We specialize in' },
  { value: '100%', label: 'Contractor-Focused', detail: 'We don\'t work with other industries' },
]

const DIFFERENCES = [
  {
    icon: '🏗️',
    title: 'We Only Work With Contractors',
    body: 'We don\'t have restaurant clients, e-commerce stores, or law firms. Every client we have is a contractor. That means our keyword research, content strategy, and link building playbooks are built from years of working exclusively in the construction and home services space.',
  },
  {
    icon: '🗺️',
    title: 'We Know the Bay Area Market Specifically',
    body: 'The Bay Area is one of the most competitive local markets in the country. We know which SF neighborhoods, East Bay cities, Peninsula zip codes, and South Bay communities drive the highest-value projects — and we target them with precision.',
  },
  {
    icon: '🤝',
    title: 'Human Strategy + AI Efficiency',
    body: 'We use AI tools to move faster on execution, but every strategy, content edit, and recommendation is reviewed by a human SEO who understands your trade. You get the speed of automation and the judgment of an expert.',
  },
  {
    icon: '📊',
    title: 'We Optimize for Calls, Not Just Rankings',
    body: 'Rankings are a means to an end. We track what matters: inbound calls, contact form submissions, and Google Maps direction requests. The metrics that mean actual new business — not vanity numbers.',
  },
  {
    icon: '🔒',
    title: 'No Long-Term Contracts, Ever',
    body: 'We operate month-to-month. If our work isn\'t generating results, you should be able to leave. This keeps us accountable and keeps the incentives aligned. We earn your business every single month.',
  },
  {
    icon: '📋',
    title: 'Transparent Reporting, Plain English',
    body: 'No jargon-filled reports you need an SEO degree to read. Monthly: keyword rankings moved, traffic gained, leads generated. Everything explained in plain English with clear next steps.',
  },
]

const SERVICES = [
  { title: 'Local SEO', href: '/local-seo-for-contractors/', description: 'Own the Google Maps 3-Pack for every high-value keyword in your service area.' },
  { title: 'Link Building', href: '/link-building-for-contractors/', description: 'Earn authoritative backlinks that build your domain authority and outrank competitors.' },
  { title: 'Keyword Research', href: '/keyword-research-for-contractors/', description: 'Map every buyer-intent keyword across your trade, cities, and neighborhoods.' },
  { title: 'AI Receptionist', href: '/ai-receptionist-service/', description: 'Answer calls 24/7 and qualify leads automatically so no job slips through.' },
]

const TESTIMONIALS = [
  {
    quote: 'They only work with contractors. That was the deciding factor. They understood my trade from day one — no explaining what a GC does, no learning curve, just strategy.',
    name: 'Marcus Webb',
    role: 'Owner, Webb General Contracting — San Francisco',
    initials: 'MW',
    stars: 5,
  },
  {
    quote: 'Most agencies threw generic SEO packages at us. These guys came in knowing what "design-build remodel" searches look like in Oakland. Night and day difference.',
    name: 'Rachel Torres',
    role: 'Co-Owner, Bay Craft Remodeling — Oakland',
    initials: 'RT',
    stars: 5,
  },
  {
    quote: 'The reporting is actually useful. I can see my rankings for "HVAC San Francisco," how many calls came from Google, and what\'s next. I forward it to my office manager.',
    name: 'David Nguyen',
    role: 'Owner, Bay HVAC Solutions — South Bay',
    initials: 'DN',
    stars: 5,
  },
]

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="hero-section" aria-labelledby="about-hero-heading">
        <div className="container" style={{ padding: '5rem var(--space-6) 3rem' }}>
          <div style={{ maxWidth: '760px' }}>
            <span className="section-label">About Us</span>
            <h1 id="about-hero-heading">
              Your Bay Area SEO Company <em>for Contractors</em>
            </h1>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: 'var(--leading-relaxed)', marginTop: '1rem', maxWidth: '640px' }}>
              Built for Trades. Not Generic Agencies.
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 'var(--leading-relaxed)', marginTop: '1rem', maxWidth: '640px' }}>
              We are a Bay Area SEO company with a single focus: helping construction companies, GCs, and specialty trades dominate Google search. Every strategy we build, every piece of content we write, and every link we earn is designed for one type of business — yours.
            </p>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap' }}>
              <a href="/free-seo-audit/" className="btn btn-primary">Get a Free SEO Audit</a>
              <a href="/seo-packages-for-contractors/" className="btn btn-outline-dark">View Packages</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <Section variant="subtle" size="sm">
        <div className="grid-4">
          {STATS.map((s) => <StatCard key={s.label} {...s} />)}
        </div>
      </Section>

      {/* ── Mission ── */}
      <Section variant="white" aria-labelledby="mission-heading">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
          <div>
            <span className="section-label">Our Mission</span>
            <h2 id="mission-heading" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', marginBottom: '1.25rem' }}>
              We Exist to Kill the Lead-Renting Economy for Contractors
            </h2>
            <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 'var(--leading-relaxed)', marginBottom: '1rem' }}>
              Angi, HomeAdvisor, Yelp, and Google Ads have built a business model that keeps contractors permanently dependent on paying for access to their own customers. We think that&rsquo;s backwards.
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 'var(--leading-relaxed)', marginBottom: '1rem' }}>
              Our mission is to help every Bay Area contractor we work with build an owned lead generation asset through SEO — so their phone rings without a middleman taking a cut.
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 'var(--leading-relaxed)' }}>
              We focus exclusively on contractors because that&rsquo;s where we can go deepest. We know how construction buyers search, what they click, and what makes them call. That specialization is our edge.
            </p>
          </div>
          <div className="glass-card glass-strong" style={{ padding: '2rem' }}>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>The Contractor Advantage</h3>
            {[
              'We speak construction. You never explain what a GC does.',
              'We know Bay Area submarkets — not just "local SEO" in general.',
              'We\'ve built playbooks for GCs, HVAC, roofing, remodeling, plumbing, electrical, and more.',
              'Every content piece is written for your buyer — not generic homeowners.',
              'Our case studies are from contractors. Our benchmarks are contractor benchmarks.',
            ].map((point) => (
              <div key={point} style={{ display: 'flex', gap: '0.75rem', marginBottom: '0.9rem', alignItems: 'flex-start' }}>
                <span style={{ color: 'var(--accent)', fontWeight: 700, flexShrink: 0 }}>✓</span>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 'var(--leading-relaxed)' }}>{point}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── What Makes Us Different ── */}
      <Section variant="subtle" aria-labelledby="diff-heading">
        <SectionHeading
          label="Why Choose Us"
          heading={<>Six Reasons Contractors Choose Us <em>Over Generic Agencies</em></>}
          id="diff-heading"
        />
        <div className="grid-3" style={{ marginTop: '3rem' }}>
          {DIFFERENCES.map((d) => (
            <div key={d.title} className="glass-card glass-highlight">
              <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{d.icon}</div>
              <h3 style={{ fontSize: '1.05rem', marginBottom: '0.6rem' }}>{d.title}</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 'var(--leading-relaxed)', margin: 0 }}>{d.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Services ── */}
      <Section variant="white" aria-labelledby="about-services-heading">
        <SectionHeading
          label="What We Do"
          heading="Four Services. One Focus: Your Rankings."
          id="about-services-heading"
        />
        <div className="grid-2" style={{ marginTop: '2.5rem' }}>
          {SERVICES.map((svc) => (
            <a
              key={svc.title}
              href={svc.href}
              className="glass-card glass-highlight"
              style={{ textDecoration: 'none', display: 'block' }}
            >
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>{svc.title}</h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 'var(--leading-relaxed)', margin: '0 0 1rem' }}>{svc.description}</p>
              <span style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--accent)' }}>Learn more →</span>
            </a>
          ))}
        </div>
      </Section>

      {/* ── Testimonials ── */}
      <Section variant="subtle" aria-labelledby="about-testi-heading">
        <SectionHeading
          label="What Clients Say"
          heading={<>Contractors Who Chose to Stop <em>Renting Their Leads</em></>}
          id="about-testi-heading"
        />
        <div className="testimonials-grid" style={{ marginTop: '3rem' }}>
          {TESTIMONIALS.map((t) => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        </div>
      </Section>

      {/* ── CTA ── */}
      <CtaBanner
        label="Work With Us"
        heading={<>Ready to Work With a Bay Area SEO Company That <em>Actually Knows Construction</em>?</>}
        body="Start with a free audit. We'll show you exactly what's possible in your specific market and trade — no pitch, no pressure, just honest analysis."
        primaryCta={{ label: 'Get My Free SEO Audit', href: '/free-seo-audit/' }}
        secondaryCta={{ label: 'View Packages & Pricing', href: '/seo-packages-for-contractors/' }}
        dark
      />
    </>
  )
}
