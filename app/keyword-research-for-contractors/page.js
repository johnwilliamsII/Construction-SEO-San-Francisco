import Section from '../../components/layout/Section'
import SectionHeading from '../../components/sections/SectionHeading'
import StatCard from '../../components/sections/StatCard'
import TestimonialCard from '../../components/sections/TestimonialCard'
import CtaBanner from '../../components/sections/CtaBanner'
import FaqAccordion from '../../components/sections/FaqAccordion'

export const metadata = {
  title: 'Keyword Research for Contractors | contractorseosanfrancisco.com',
  description:
    'Stop guessing which terms drive leads. We map every high-intent keyword across your trade, cities, and Bay Area neighborhoods — so every page you build has a direct path to traffic.',
}

const DELIVERABLES = [
  {
    icon: '🗺️',
    title: 'Full Keyword Map by Trade & City',
    body: 'Every search term your buyers use — organized by service type, city, and neighborhood. You see exactly what to target and why.',
  },
  {
    icon: '📊',
    title: 'Search Volume & Competition Scoring',
    body: 'We show you real monthly search numbers and how hard each term is to rank for — so you invest in keywords worth winning.',
  },
  {
    icon: '🎯',
    title: 'Buyer-Intent Prioritization',
    body: 'Not all keywords are equal. We separate "just browsing" searches from "ready to hire" searches and prioritize accordingly.',
  },
  {
    icon: '🔍',
    title: 'Competitor Gap Analysis',
    body: 'We find every high-value keyword your top 3 competitors rank for that you don\'t — and build your map around closing those gaps.',
  },
  {
    icon: '📍',
    title: 'Neighborhood & Zip-Level Targeting',
    body: 'The Bay Area is hyperlocal. We map keywords by SF neighborhood, East Bay city, and Peninsula zip — not just broad metro terms.',
  },
  {
    icon: '📋',
    title: 'Content Blueprint',
    body: 'Every keyword cluster comes with a content recommendation — which page to create, what to say, and how to structure it for rankings.',
  },
]

const STATS = [
  { value: '750+', label: 'Keywords Mapped', detail: 'Across Bay Area contractor clients' },
  { value: '40+',  label: 'Trades Covered',  detail: 'From HVAC to ADU contractors' },
  { value: '3×',   label: 'More Content ROI', detail: 'When strategy precedes writing' },
  { value: '60–90', label: 'Days to First Rankings', detail: 'For properly mapped keywords' },
]

const TESTIMONIALS = [
  {
    quote: "Before the keyword map I was writing blog posts nobody searched for. After, every piece of content I publish is based on what Bay Area homeowners actually type into Google.",
    name: 'David Nguyen',
    role: 'Owner, Bay HVAC Solutions — South Bay',
    initials: 'DN',
    stars: 5,
  },
  {
    quote: "They found 40 keyword opportunities my last agency never touched. The neighborhood-level targeting alone brought in 3 new project leads in the first month.",
    name: 'Priya Sharma',
    role: 'Owner, East Bay Remodeling Co. — Oakland',
    initials: 'PS',
    stars: 5,
  },
]

const FAQ_ITEMS = [
  {
    question: 'What does a keyword research deliverable actually look like?',
    answer: 'You receive a structured spreadsheet organized by service type, location, and buyer intent. Each keyword includes monthly search volume, competition score, current ranking (if any), and a content recommendation. It\'s designed to be immediately actionable — not a raw data dump.',
  },
  {
    question: 'Is keyword research a one-time thing or ongoing?',
    answer: 'We start with a foundational map that covers your core services and top markets. As you expand into new service areas, add trade specialties, or enter new cities, we update the map. Clients on monthly SEO plans get quarterly keyword expansion reviews.',
  },
  {
    question: 'How is this different from just using Google Keyword Planner?',
    answer: 'Keyword Planner shows you raw volume. It doesn\'t show you which terms your specific competitors rank for, which have buyer intent vs. informational intent, or how to cluster them into a content strategy. Our research takes 2–3 days and produces a strategic map, not just a list.',
  },
  {
    question: 'Do you specialize in any particular trades?',
    answer: 'We work exclusively with Bay Area contractors — HVAC, GC, remodeling, roofing, plumbing, electrical, landscaping, flooring, ADU builders, and more. Our keyword libraries are built from years of working in these specific trade categories, not generic marketing knowledge.',
  },
]

export default function KeywordResearchPage() {
  return (
    <>
      {/* ── Dark Hero ── */}
      <section
        aria-labelledby="kw-hero-heading"
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
          <div style={{ maxWidth: '680px' }}>
            <span style={{
              display: 'inline-flex', alignItems: 'center',
              padding: '5px 16px', borderRadius: '9999px',
              background: 'rgba(232,97,26,0.15)', border: '1px solid rgba(232,97,26,0.30)',
              color: '#F4875A', fontSize: '0.72rem', fontWeight: 700,
              letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.25rem',
            }}>
              Keyword Research for Contractors
            </span>

            <h1 id="kw-hero-heading" style={{
              fontSize: 'clamp(2rem, 4.5vw, 3.2rem)',
              color: '#FFFFFF',
              fontFamily: 'var(--font-manrope)',
              fontWeight: 800,
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
              marginBottom: '1rem',
            }}>
              Stop Guessing. Start Ranking the{' '}
              <em style={{ color: 'var(--accent)', fontStyle: 'italic' }}>Terms That Drive Real Jobs.</em>
            </h1>

            <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.60)', lineHeight: 'var(--leading-relaxed)', maxWidth: '560px', marginBottom: '2rem' }}>
              We map every high-intent keyword your Bay Area buyers use — by trade, city, neighborhood, and buyer stage. Every page you build after this has a clear, data-backed path to traffic and leads.
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="/free-seo-audit/" className="btn btn-primary">Get a Free Keyword Audit</a>
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

      {/* ── What's Included ── */}
      <Section variant="white" aria-labelledby="kw-deliverables-heading">
        <SectionHeading
          label="What You Get"
          heading={<>A Complete Keyword Map — Not a <em>Spreadsheet Dump</em></>}
          body="Every keyword comes with volume, competition, buyer intent scoring, and a specific content recommendation. Built to be immediately actionable."
          id="kw-deliverables-heading"
        />
        <div className="grid-3" style={{ marginTop: '2.5rem' }}>
          {DELIVERABLES.map((d) => (
            <div key={d.title} className="glass-card glass-highlight">
              <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{d.icon}</div>
              <h3 style={{ fontSize: '1.05rem', marginBottom: '0.5rem' }}>{d.title}</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 'var(--leading-relaxed)', margin: 0 }}>{d.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Why It Matters ── */}
      <Section variant="subtle" aria-labelledby="kw-why-heading">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3.5rem', alignItems: 'center' }}>
          <div>
            <span className="section-label">Why It Matters</span>
            <h2 id="kw-why-heading" style={{ marginBottom: '1.25rem' }}>
              Most Contractor Content Fails Because It Targets the{' '}
              <em>Wrong Keywords</em>
            </h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 'var(--leading-relaxed)', marginBottom: '1rem' }}>
              Writing blog posts and building landing pages without keyword data is guesswork. You might spend 20 hours producing content that 8 people per month search for — while leaving 10,000-search terms completely unaddressed.
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 'var(--leading-relaxed)', marginBottom: '1.5rem' }}>
              Our keyword maps tell you exactly which terms to target, in what order, and with what type of content. Every hour you spend on SEO after the map is invested — not gambled.
            </p>
            <a href="/free-seo-audit/" className="btn btn-primary">See Your Keyword Opportunities →</a>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              { bad: 'Writing content for terms nobody searches', good: 'Targeting 2,400/mo "HVAC contractor San Francisco"' },
              { bad: 'One generic "services" page', good: '12 city + service landing pages, each targeting a specific term' },
              { bad: 'Guessing which neighborhoods drive leads', good: 'Data showing Castro, Marina, and Nob Hill drive 3× higher ticket size' },
            ].map((item, i) => (
              <div key={i} className="glass-card glass-card--sm" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <div style={{ fontSize: '0.68rem', fontWeight: 700, color: 'var(--error)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.4rem' }}>Before</div>
                  <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.5 }}>{item.bad}</p>
                </div>
                <div>
                  <div style={{ fontSize: '0.68rem', fontWeight: 700, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.4rem' }}>After</div>
                  <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.5 }}>{item.good}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── Testimonials ── */}
      <Section variant="white" aria-labelledby="kw-testi-heading">
        <SectionHeading label="What Clients Say" heading={<>Keyword Research That <em>Actually Leads to Rankings</em></>} id="kw-testi-heading" />
        <div className="testimonials-grid" style={{ marginTop: '2.5rem' }}>
          {TESTIMONIALS.map((t) => <TestimonialCard key={t.name} {...t} />)}
        </div>
      </Section>

      {/* ── FAQ ── */}
      <Section variant="subtle" aria-labelledby="kw-faq-heading">
        <SectionHeading label="Questions" heading="Keyword Research FAQs" id="kw-faq-heading" />
        <div style={{ marginTop: '2rem' }}>
          <FaqAccordion items={FAQ_ITEMS} />
        </div>
      </Section>

      <CtaBanner
        label="Start With Data"
        heading={<>Know Exactly Which Keywords Will <em>Win Your Market</em></>}
        body="Start with a free audit — we'll pull your current rankings, show your top keyword gaps, and map out what it takes to own your Bay Area market."
        primaryCta={{ label: 'Get My Free Keyword Audit', href: '/free-seo-audit/' }}
        secondaryCta={{ label: 'View SEO Packages', href: '/seo-packages-for-contractors/' }}
        dark
      />
    </>
  )
}
