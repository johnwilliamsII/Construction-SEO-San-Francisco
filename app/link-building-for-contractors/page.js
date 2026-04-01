import Section from '../../components/layout/Section'
import SectionHeading from '../../components/sections/SectionHeading'
import StatCard from '../../components/sections/StatCard'
import TestimonialCard from '../../components/sections/TestimonialCard'
import CtaBanner from '../../components/sections/CtaBanner'
import FaqAccordion from '../../components/sections/FaqAccordion'

export const metadata = {
  title: 'Link Building for Contractors | contractorseosanfrancisco.com',
  description:
    'High-quality backlinks for Bay Area contractors. We earn industry-relevant, locally-authoritative links that tell Google your business is the real deal — not spam, not shortcuts.',
}

const LINK_TYPES = [
  {
    icon: '📰',
    title: 'Industry Trade Publications',
    body: 'Links from construction trade publications, home improvement media, and contractor industry sites that Google considers authoritative in your space.',
  },
  {
    icon: '📍',
    title: 'Local Bay Area Press & Directories',
    body: 'Citations and editorial mentions from Bay Area news outlets, neighborhood blogs, local business directories, and Chamber of Commerce listings.',
  },
  {
    icon: '🏗️',
    title: 'Supplier & Partner Links',
    body: 'Links from material suppliers, subcontractors, architects, and design-build partners you work with — contextually relevant and editorially earned.',
  },
  {
    icon: '🎓',
    title: 'Resource & Guide Placements',
    body: 'We create shareable contractor resources (cost guides, permit explainers, project checklists) that naturally attract links from local homeowner and real estate sites.',
  },
  {
    icon: '🔍',
    title: 'Competitor Backlink Replication',
    body: 'We audit every link your top-ranking competitors have and identify which ones we can earn for you — then systematically go get them.',
  },
  {
    icon: '🚫',
    title: 'Zero Spammy Links, Ever',
    body: 'No PBNs, no link farms, no paid link schemes. Every link we build is editorially earned and would survive any Google algorithm update.',
  },
]

const STATS = [
  { value: '10+',  label: 'Quality Links/Month',   detail: 'Per active campaign' },
  { value: '0',    label: 'Spammy Links Built',     detail: 'White-hat only, always' },
  { value: '2–4×', label: 'DA Improvement',         detail: 'Over 6-month campaigns' },
  { value: '40+',  label: 'Contractors Ranking',    detail: 'Using our link strategy' },
]

const TESTIMONIALS = [
  {
    quote: "Our domain authority went from 8 to 24 in 6 months. More importantly, we started ranking for competitive terms like 'general contractor San Francisco' that we could never touch before.",
    name: 'James Moreno',
    role: 'Owner, Moreno Construction Co. — San Francisco',
    initials: 'JM',
    stars: 5,
  },
  {
    quote: "They found and secured placements on 3 Bay Area home improvement blogs and a local news site. Each one brought referral traffic AND helped our organic rankings climb.",
    name: 'Sarah Chen',
    role: 'Owner, SF Kitchen & Bath — San Francisco',
    initials: 'SC',
    stars: 5,
  },
]

const FAQ_ITEMS = [
  {
    question: 'What makes a "quality" backlink for a contractor?',
    answer: 'A quality link comes from a site that is relevant to construction, home improvement, or local Bay Area businesses — and has its own established authority. A link from a local SF news outlet writing about a project you completed is infinitely more valuable than 100 links from generic directories. We target relevance and authority, not volume.',
  },
  {
    question: 'How many links do you build per month?',
    answer: 'Quality over quantity. We typically build 8–15 high-quality, editorially earned links per month depending on your campaign scope and market competitiveness. We never manufacture volume for its own sake.',
  },
  {
    question: 'How long before link building affects rankings?',
    answer: 'Google takes time to crawl and value new links. You typically start seeing ranking movement 60–120 days after a link campaign begins. The effect compounds — links built in month 2 still benefit you in month 12 and beyond.',
  },
  {
    question: 'Is link building included in the SEO packages?',
    answer: 'Foundational link building (10+ links/month) is included in the Standard SEO package. More aggressive campaigns are available as an add-on to either package. We\'ll recommend the right level based on your market competition.',
  },
]

export default function LinkBuildingPage() {
  return (
    <>
      {/* ── Dark Hero ── */}
      <section
        aria-labelledby="lb-hero-heading"
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
              Link Building for Contractors
            </span>

            <h1 id="lb-hero-heading" style={{
              fontSize: 'clamp(2rem, 4.5vw, 3.2rem)',
              color: '#FFFFFF',
              fontFamily: 'var(--font-manrope)',
              fontWeight: 800,
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
              marginBottom: '1rem',
            }}>
              Build the Authority That Makes{' '}
              <em style={{ color: 'var(--accent)', fontStyle: 'italic' }}>Competitive Rankings Possible.</em>
            </h1>

            <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.60)', lineHeight: 'var(--leading-relaxed)', maxWidth: '560px', marginBottom: '2rem' }}>
              In the Bay Area, the top-ranking contractors aren&rsquo;t just optimized — they&rsquo;re authoritative. We earn high-quality backlinks from industry publications, local press, and trade partners that signal to Google your business belongs at the top.
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="/free-seo-audit/" className="btn btn-primary">Get a Free Link Audit</a>
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

      {/* ── Link Types ── */}
      <Section variant="white" aria-labelledby="lb-types-heading">
        <SectionHeading
          label="What We Build"
          heading={<>Six Types of Links. <em>All Editorially Earned.</em></>}
          body="Every link we secure is relevant to construction, earned through genuine outreach or content, and would survive any Google algorithm update."
          id="lb-types-heading"
        />
        <div className="grid-3" style={{ marginTop: '2.5rem' }}>
          {LINK_TYPES.map((lt) => (
            <div key={lt.title} className="glass-card glass-highlight">
              <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{lt.icon}</div>
              <h3 style={{ fontSize: '1.05rem', marginBottom: '0.5rem' }}>{lt.title}</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 'var(--leading-relaxed)', margin: 0 }}>{lt.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Why Authority Matters ── */}
      <Section variant="subtle" aria-labelledby="lb-why-heading">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3.5rem', alignItems: 'center' }}>
          <div>
            <span className="section-label">Why It Matters</span>
            <h2 id="lb-why-heading" style={{ marginBottom: '1.25rem' }}>
              Great On-Page SEO Has a{' '}
              <em>Ceiling. Authority Breaks Through It.</em>
            </h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 'var(--leading-relaxed)', marginBottom: '1rem' }}>
              You can have perfectly optimized pages, great keywords, and fast site speed — and still get stuck on page 2. Often that&rsquo;s because your top competitors have accumulated more authoritative backlinks over time.
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 'var(--leading-relaxed)', marginBottom: '1.5rem' }}>
              Google treats backlinks as votes of confidence. A construction business with 50 high-quality links from relevant industry sources will consistently outrank one with zero links, even with similar on-page optimization. Link building is the long-term moat.
            </p>
            <a href="/free-seo-audit/" className="btn btn-primary">See Your Link Profile vs. Competitors →</a>
          </div>
          <div className="glass-card glass-strong" style={{ padding: '2rem' }}>
            <h3 style={{ fontSize: '1rem', marginBottom: '1.25rem' }}>What a Link Audit Reveals</h3>
            {[
              'How many links your top 3 competitors have that you don\'t',
              'Which of your existing links are helping vs. hurting',
              'The specific sites and publications we can target for you',
              'Your current domain authority vs. the market leaders',
              'A prioritized list of link acquisition targets',
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
      <Section variant="white" aria-labelledby="lb-testi-heading">
        <SectionHeading label="What Clients Say" heading={<>Link Building That <em>Moves Rankings</em></>} id="lb-testi-heading" />
        <div className="testimonials-grid" style={{ marginTop: '2.5rem' }}>
          {TESTIMONIALS.map((t) => <TestimonialCard key={t.name} {...t} />)}
        </div>
      </Section>

      {/* ── FAQ ── */}
      <Section variant="subtle" aria-labelledby="lb-faq-heading">
        <SectionHeading label="Questions" heading="Link Building FAQs" id="lb-faq-heading" />
        <div style={{ marginTop: '2rem' }}>
          <FaqAccordion items={FAQ_ITEMS} />
        </div>
      </Section>

      <CtaBanner
        label="Build Your Authority"
        heading={<>See How Your Link Profile Compares to the <em>Market Leaders</em></>}
        body="Free audit includes a full competitor backlink analysis. We show you exactly what links they have that you don't — and build a plan to close the gap."
        primaryCta={{ label: 'Get My Free Link Audit', href: '/free-seo-audit/' }}
        secondaryCta={{ label: 'View SEO Packages', href: '/seo-packages-for-contractors/' }}
        dark
      />
    </>
  )
}
