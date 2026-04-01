import Section from '../../components/layout/Section'
import SectionHeading from '../../components/sections/SectionHeading'
import StatCard from '../../components/sections/StatCard'
import TestimonialCard from '../../components/sections/TestimonialCard'
import CtaBanner from '../../components/sections/CtaBanner'
import FaqAccordion from '../../components/sections/FaqAccordion'

export const metadata = {
  title: 'Local SEO for Contractors | contractorseosanfrancisco.com',
  description:
    'Rank #1 in every Bay Area market you serve. Hyper-local SEO for contractors — city pages, GBP optimization, citations, and schema that puts you at the top when buyers are searching.',
}

const FEATURES = [
  {
    icon: '🗺️',
    title: 'Hyper-Local Keyword Research',
    body: 'We map every search term Bay Area homeowners and property managers use — by neighborhood, city, and zip — so every page targets searches that actually drive job inquiries.',
  },
  {
    icon: '📄',
    title: 'City & Service Landing Pages',
    body: 'Dedicated pages for each service + location combination you want to rank for. "Roofing contractor Oakland" and "roofing contractor San Jose" need separate pages — we build them.',
  },
  {
    icon: '📍',
    title: 'Google Business Profile Optimization',
    body: 'Every field, category, service, photo, and post optimized. Most contractors ranking below you have a better-optimized GBP. We close that gap in week one.',
  },
  {
    icon: '📋',
    title: 'Local Citation Building',
    body: 'NAP consistency across 80+ Bay Area directories. Google weights consistent business information heavily for map pack rankings — we ensure yours is locked in.',
  },
  {
    icon: '⚙️',
    title: 'Schema Markup for Contractors',
    body: 'LocalBusiness, Service, and Review schema signals tell Google precisely what you do and where. Structured data is a ranking factor many contractors skip entirely.',
  },
  {
    icon: '📊',
    title: 'Monthly Ranking Reports',
    body: 'Plain-English reports showing exactly where your rankings moved, what traffic you gained, and what\'s coming next — every month, on schedule.',
  },
]

const STATS = [
  { value: '+312%', label: 'Avg. Traffic Growth',     detail: 'Measured over 12 months' },
  { value: '60–90', label: 'Days to First Rankings',  detail: 'Typical Bay Area timeline' },
  { value: '4.8×',  label: 'Lead Multiplier',         detail: 'Vs. pre-SEO baseline' },
  { value: '80+',   label: 'Citation Sources',        detail: 'Built per engagement' },
]

const TESTIMONIALS = [
  {
    quote: "Within 4 months we went from page 3 to the map pack for 'general contractor San Francisco'. Three of the last five projects came directly from Google searches.",
    name: 'Robert Vasquez',
    role: 'Owner, Vasquez Build Group — San Francisco',
    initials: 'RV',
    stars: 5,
  },
  {
    quote: "They built out city pages for every market we serve in the East Bay. We're now getting calls from cities we weren't even targeting before. The ROI is obvious.",
    name: 'Linda Park',
    role: 'Owner, East Bay Home Remodeling — Oakland',
    initials: 'LP',
    stars: 5,
  },
]

const FAQ_ITEMS = [
  {
    question: 'What is local SEO for contractors?',
    answer: 'Local SEO is the process of optimizing your website, Google Business Profile, and online presence so your business appears at the top of Google when Bay Area buyers search for contractors in your area. It includes on-page optimization, citation building, GBP management, content strategy, and technical fixes — all working together.',
  },
  {
    question: 'How long before I see local ranking improvements?',
    answer: 'Most clients see movement in targeted keywords within 60–90 days and meaningful traffic growth within 4–6 months. More competitive keywords — like "general contractor San Francisco" — can take 6–9 months to reach the top 3. The work compounds: rankings and authority built in month 3 continue paying off in month 18.',
  },
  {
    question: 'Do you cover all Bay Area cities?',
    answer: 'Yes — we target SF neighborhoods (Castro, Marina, Pacific Heights, etc.), Oakland, Berkeley, San Jose, South Bay, the Peninsula, Marin, and East Bay. We build location-specific pages for every market you want to serve, not just broad metro terms.',
  },
  {
    question: 'What\'s the difference between Local SEO and your Standard SEO package?',
    answer: 'Our Local SEO Package focuses on the foundational elements: GBP optimization, city pages, citation building, on-page optimization, and keyword strategy. The Standard SEO Package adds aggressive link building (10+ high-authority links/month), significantly accelerating rankings in competitive markets. We\'ll recommend the right level based on your competition.',
  },
  {
    question: 'Is local SEO included in your packages or separate?',
    answer: 'Local SEO is the foundation of both our SEO packages. Everything described here — GBP, city pages, citations, schema, monthly reporting — is included in our Local SEO Package starting at $900/month.',
  },
]

export default function LocalSEOPage() {
  return (
    <>
      {/* ── Dark Hero ── */}
      <section
        aria-labelledby="ls-hero-heading"
        style={{
          background:  'linear-gradient(160deg, #16192A 0%, #1A2240 55%, #1C1F32 100%)',
          position:    'relative',
          overflow:    'hidden',
          padding:     'clamp(4rem, 8vw, 6.5rem) 0 clamp(3rem, 6vw, 5rem)',
        }}
      >
        <div aria-hidden="true" style={{ position: 'absolute', top: '-80px', right: '-80px', width: '450px', height: '450px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(232,97,26,0.15) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', bottom: '-60px', left: '-60px', width: '300px', height: '300px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: '700px' }}>
            <span style={{
              display: 'inline-flex', alignItems: 'center',
              padding: '5px 16px', borderRadius: '9999px',
              background: 'rgba(232,97,26,0.15)', border: '1px solid rgba(232,97,26,0.30)',
              color: '#F4875A', fontSize: '0.72rem', fontWeight: 700,
              letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.25rem',
            }}>
              Local SEO for Contractors
            </span>

            <h1 id="ls-hero-heading" style={{
              fontSize: 'clamp(2rem, 4.5vw, 3.2rem)',
              color: '#FFFFFF',
              fontFamily: 'var(--font-manrope)',
              fontWeight: 800,
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
              marginBottom: '1rem',
            }}>
              Rank #1 in Every Bay Area Market{' '}
              <em style={{ color: 'var(--accent)', fontStyle: 'italic' }}>You Serve.</em>
            </h1>

            <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.60)', lineHeight: 'var(--leading-relaxed)', maxWidth: '560px', marginBottom: '2rem' }}>
              When a homeowner in the Castro or a PM in Oakland searches for a contractor right now, they find one of your competitors. We change that — with hyper-local keyword targeting, GBP optimization, and city pages built to rank.
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="/free-seo-audit/" className="btn btn-primary">Get a Free Local SEO Audit</a>
              <a href="/seo-packages-for-contractors/" style={{
                display: 'inline-flex', alignItems: 'center', padding: '13px 24px',
                borderRadius: 'var(--radius-md)', border: '1.5px solid rgba(255,255,255,0.25)',
                color: 'rgba(255,255,255,0.80)', fontSize: 'var(--text-sm)',
                fontWeight: 600, textDecoration: 'none', background: 'transparent',
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

      {/* ── Features ── */}
      <Section variant="white" aria-labelledby="ls-features-heading">
        <SectionHeading
          label="What's Included"
          heading={<>Six-Part Local SEO Strategy — <em>Built for Bay Area Contractors</em></>}
          body="Not a generic package. Every element is specific to your trade, your service cities, and how Bay Area buyers actually search for contractors."
          id="ls-features-heading"
        />
        <div className="grid-3" style={{ marginTop: '2.5rem' }}>
          {FEATURES.map((f) => (
            <div key={f.title} className="glass-card glass-highlight">
              <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{f.icon}</div>
              <h3 style={{ fontSize: '1.05rem', marginBottom: '0.5rem' }}>{f.title}</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 'var(--leading-relaxed)', margin: 0 }}>{f.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Why Local SEO ── */}
      <Section variant="subtle" aria-labelledby="ls-why-heading">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3.5rem', alignItems: 'center' }}>
          <div>
            <span className="section-label">Why It Matters</span>
            <h2 id="ls-why-heading" style={{ marginBottom: '1.25rem' }}>
              Your Competitors Are Ranking Because They{' '}
              <em>Did the Work You Haven&rsquo;t Done Yet.</em>
            </h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 'var(--leading-relaxed)', marginBottom: '1rem' }}>
              The top-ranking contractors in your market didn&rsquo;t get there by accident. They have more city-specific pages, stronger GBP profiles, more consistent citations, and more authoritative backlinks. That gap is closeable — but only with a systematic approach.
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 'var(--leading-relaxed)', marginBottom: '1.5rem' }}>
              A free audit shows you exactly where the gaps are and which fixes will move rankings fastest. No estimates — we pull your actual data.
            </p>
            <a href="/free-seo-audit/" className="btn btn-primary">See Your Ranking Gaps →</a>
          </div>
          <div className="glass-card glass-strong" style={{ padding: '2rem' }}>
            <h3 style={{ fontSize: '1rem', marginBottom: '1.25rem' }}>What Your Free Audit Shows</h3>
            {[
              'Your current keyword rankings for top 20 search terms',
              'Google Business Profile optimization gaps vs. top competitors',
              'Technical issues holding back your rankings',
              'How many city + service pages your competitors have that you don\'t',
              'Your domain authority vs. the market leaders',
              'A prioritized 90-day action list',
            ].map((item) => (
              <div key={item} style={{ display: 'flex', gap: '0.75rem', marginBottom: '0.8rem', alignItems: 'flex-start' }}>
                <span style={{ color: 'var(--accent)', fontWeight: 700, flexShrink: 0 }}>✓</span>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.5 }}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── Testimonials ── */}
      <Section variant="white" aria-labelledby="ls-testi-heading">
        <SectionHeading label="What Clients Say" heading={<>Local SEO That <em>Moves the Needle</em></>} id="ls-testi-heading" />
        <div className="testimonials-grid" style={{ marginTop: '2.5rem' }}>
          {TESTIMONIALS.map((t) => <TestimonialCard key={t.name} {...t} />)}
        </div>
      </Section>

      {/* ── FAQ ── */}
      <Section variant="subtle" aria-labelledby="ls-faq-heading">
        <SectionHeading label="Questions" heading="Local SEO FAQs" id="ls-faq-heading" />
        <div style={{ marginTop: '2rem' }}>
          <FaqAccordion items={FAQ_ITEMS} />
        </div>
      </Section>

      <CtaBanner
        label="Own Your Market"
        heading={<>See Exactly Where You Stand vs. the <em>Top-Ranked Contractors</em></>}
        body="Free audit includes your current keyword rankings, GBP gaps, competitor analysis, and a prioritized action list. We show you the gap — and how to close it."
        primaryCta={{ label: 'Get My Free Local SEO Audit', href: '/free-seo-audit/' }}
        secondaryCta={{ label: 'View SEO Packages', href: '/seo-packages-for-contractors/' }}
        dark
      />
    </>
  )
}
