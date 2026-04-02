import Section from '../../components/layout/Section'
import SectionHeading from '../../components/sections/SectionHeading'
import StatCard from '../../components/sections/StatCard'
import TestimonialCard from '../../components/sections/TestimonialCard'
import CtaBanner from '../../components/sections/CtaBanner'

export const metadata = {
  title: 'Bay Area SEO Company for Contractors | contractorseosanfrancisco.com',
  description:
    'We are the Bay Area SEO company built for contractors only. One trade focus, one market — helping Bay Area construction businesses dominate Google.',
  alternates: { canonical: 'https://www.contractorseobayarea.com/bay-area-seo-company/' },
}

const STATS = [
  { value: '40+', label: 'Bay Area Contractors', detail: 'Served and ranking' },
  { value: '+312%', label: 'Avg. Traffic Growth', detail: 'Across clients, 12 months' },
  { value: '12+', label: 'California Trades', detail: 'We specialize in' },
  { value: '100%', label: 'Contractor-Focused', detail: 'We don\'t work with other industries' },
]

const DIFFERENCES = [
  {
    title: 'We Only Work With Contractors',
    body: 'Every client is a contractor. No distractions. No divided focus.',
  },
  {
    title: 'We Know the Bay Area Market',
    body: 'We know which neighborhoods, cities, and searches drive real jobs.',
  },
  {
    title: 'Strategy First, Always',
    body: 'Expert human strategy behind every decision — no cookie-cutter playbooks.',
  },
  {
    title: 'We Optimize for Calls, Not Clicks',
    body: 'Rankings mean nothing if your phone isn\'t ringing. Ours make it ring.',
  },
  {
    title: 'No Long-Term Contracts, Ever',
    body: 'Month-to-month only. Our results earn your business — not paperwork.',
  },
  {
    title: 'Reporting You Can Actually Read',
    body: 'Plain-English monthly reports: rankings moved, calls gained, what\'s next.',
  },
]

const SERVICES = [
  { title: 'Local SEO', href: '/local-seo-for-contractors/', description: 'Own the Google Maps results for every high-value search in your service area.' },
  { title: 'Link Building', href: '/link-building-for-contractors/', description: 'Earn authoritative backlinks that push your site above every competitor.' },
  { title: 'Keyword Research', href: '/keyword-research-for-contractors/', description: 'Map every buyer-intent search across your trade, cities, and neighborhoods.' },
  { title: 'AI Receptionist', href: '/ai-receptionist-service/', description: 'Answer calls 24/7 and qualify leads automatically — no job slips through.' },
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
    quote: 'Most agencies threw generic packages at us. These guys came in knowing what "design-build remodel" searches look like in Oakland. Night and day difference.',
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
      <section
        aria-labelledby="about-hero-heading"
        style={{
          position: 'relative',
          overflow: 'hidden',
          padding: 'clamp(5rem, 10vw, 8rem) 0 clamp(4rem, 8vw, 6rem)',
          backgroundImage:
            'linear-gradient(rgba(13,27,42,0.65), rgba(13,27,42,0.60)), url(https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1600&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center 40%',
        }}
      >
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: '680px' }}>

            <span style={{
              display: 'inline-flex', alignItems: 'center',
              padding: '5px 16px', borderRadius: '9999px',
              background: 'rgba(232,97,26,0.18)', border: '1px solid rgba(232,97,26,0.35)',
              color: '#F4875A', fontSize: '0.72rem', fontWeight: 700,
              letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.25rem',
            }}>
              Bay Area SEO Company
            </span>

            <h1 id="about-hero-heading" style={{
              fontSize: 'clamp(2rem, 4.5vw, 3.2rem)',
              color: '#FFFFFF',
              fontFamily: 'var(--font-manrope)',
              fontWeight: 800,
              lineHeight: 1.12,
              letterSpacing: '-0.02em',
              marginBottom: '1.1rem',
            }}>
              Your Bay Area SEO Company{' '}
              <em style={{ color: 'var(--accent)', fontStyle: 'italic' }}>for Contractors</em>
            </h1>

            <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.82)', lineHeight: 'var(--leading-relaxed)', marginBottom: '0.75rem', maxWidth: '560px' }}>
              We are not a generalist agency that happens to have a few contractor clients.
            </p>
            <p style={{ fontSize: '0.97rem', color: 'rgba(255,255,255,0.55)', lineHeight: 'var(--leading-relaxed)', maxWidth: '560px', marginBottom: '2rem' }}>
              Every strategy, every piece of content, every link we earn is built for one type of business — construction companies, GCs, and specialty trades in the Bay Area who are done paying for leads they don&rsquo;t own.
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="/free-seo-audit/" className="btn btn-primary">Get a Free SEO Audit</a>
              <a href="/seo-packages-for-contractors/" style={{
                display: 'inline-flex', alignItems: 'center', padding: '13px 24px',
                borderRadius: 'var(--radius-md)', border: '1.5px solid rgba(255,255,255,0.28)',
                color: 'rgba(255,255,255,0.82)', fontSize: 'var(--text-sm)',
                fontWeight: 600, textDecoration: 'none',
                background: 'transparent',
              }}>
                View Packages
              </a>
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
              We Exist to End the Lead-Renting Economy for Bay Area Contractors
            </h2>
            <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 'var(--leading-relaxed)', marginBottom: '1rem' }}>
              Angi, HomeAdvisor, Yelp, and Google Ads have built a model that keeps contractors permanently dependent on paying for access to their own customers. We think that&rsquo;s backwards.
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 'var(--leading-relaxed)', marginBottom: '1rem' }}>
              Our mission is to help every Bay Area contractor we work with build an owned pipeline through Google search — so their phone rings without a middleman taking a cut.
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 'var(--leading-relaxed)' }}>
              We focus exclusively on contractors because that&rsquo;s where we can go deepest. We know how construction buyers search, what they click, and what makes them call. That focus is our edge.
            </p>
          </div>
          <div className="glass-card glass-strong" style={{ padding: '2rem' }}>
            <h3 style={{ fontSize: '1.05rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>What Makes Us Different</h3>
            {[
              'We speak construction. You never explain what a GC does.',
              'We know Bay Area submarkets — not just "local SEO" in theory.',
              'We\'ve built strategies for GCs, HVAC, roofing, plumbing, electrical, and more.',
              'Every piece of content is written for your buyer — not generic homeowners.',
              'Our case studies come from contractors. Our benchmarks are contractor benchmarks.',
            ].map((point) => (
              <div key={point} style={{ display: 'flex', gap: '0.75rem', marginBottom: '0.9rem', alignItems: 'flex-start' }}>
                <span style={{ color: 'var(--accent)', fontWeight: 700, flexShrink: 0 }}>✓</span>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 'var(--leading-relaxed)' }}>{point}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── Why Choose Us ── */}
      <Section variant="subtle" aria-labelledby="diff-heading">
        <SectionHeading
          label="Why Choose Us"
          heading={<>Six Reasons Contractors Choose Us <em>Over Generic Agencies</em></>}
          id="diff-heading"
        />
        <div className="grid-3" style={{ marginTop: '3rem' }}>
          {DIFFERENCES.map((d, i) => (
            <div key={d.title} className="glass-card glass-highlight">
              <div style={{
                width: '36px', height: '36px', borderRadius: '8px',
                background: 'var(--accent)', display: 'flex', alignItems: 'center',
                justifyContent: 'center', marginBottom: '1rem',
                fontSize: '0.8rem', fontWeight: 800, color: '#fff',
              }}>
                {String(i + 1).padStart(2, '0')}
              </div>
              <h3 style={{ fontSize: '1.02rem', marginBottom: '0.55rem' }}>{d.title}</h3>
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
