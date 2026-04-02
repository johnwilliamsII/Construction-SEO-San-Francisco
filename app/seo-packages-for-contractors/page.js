import Section from '../../components/layout/Section'
import SectionHeading from '../../components/sections/SectionHeading'
import CtaBanner from '../../components/sections/CtaBanner'
import StatCard from '../../components/sections/StatCard'

export const metadata = {
  title: 'Contractor SEO Agency — Packages for Bay Area Trades | contractorseosanfrancisco.com',
  description:
    'We are a contractor SEO agency built for Bay Area trades. See our packages starting at $900/mo — full team, monthly reports, no long-term contracts.',
  alternates: { canonical: '/seo-packages-for-contractors/' },
}

const PACKAGE_FEATURES_LOCAL = [
  'Google Business Profile setup, verification & optimization',
  'Local keyword research by neighborhood, city & zip code',
  'On-page SEO for up to 10 service + location pages',
  'Local citation building across 80+ directories',
  'NAP consistency audit and cleanup',
  'Schema markup (LocalBusiness, Service, Review)',
  'Review acquisition strategy + response templates',
  'Monthly GBP insights report (calls, directions, clicks)',
  'Monthly ranking report with plain-English summary',
  'Dedicated SEO strategist — no account managers',
]

const PACKAGE_FEATURES_STANDARD = [
  'Everything in Local SEO, plus:',
  'Full technical SEO audit and implementation',
  'Content strategy and 2 optimized blog posts/month',
  'Unlimited service + location landing pages',
  'Google Search Console monitoring and error fixes',
  'Core Web Vitals and page speed optimization',
  'Competitor gap analysis (keywords, content, backlinks)',
  'Foundational link building (10+ quality backlinks/month)',
  'Google Analytics 4 setup and conversion tracking',
  'Bi-weekly strategy calls + priority Slack/email support',
]

const ADDONS = [
  {
    icon: '🔗',
    title: 'Link Building',
    description:
      'Scale your domain authority faster with a dedicated link building campaign. High-quality placements in construction trade publications, local Bay Area media, and industry directories.',
    cta: 'Learn about Link Building',
    href: '/link-building-for-contractors/',
  },
  {
    icon: '📞',
    title: 'AI Receptionist',
    description:
      'Never miss a lead again. Our AI receptionist answers calls 24/7, qualifies prospects, and books appointments directly to your calendar — even while you\'re on a job site.',
    cta: 'Learn about AI Receptionist',
    href: '/ai-receptionist-service/',
  },
]

const STATS = [
  { value: '+312%', label: 'Avg. Traffic Growth', detail: '12 months, all clients' },
  { value: '4.8×', label: 'More Leads Per Month', detail: 'Vs. pre-SEO baseline' },
  { value: '–60%', label: 'Cost Per Lead Drop', detail: 'Vs. Angi / HomeAdvisor' },
  { value: '40+', label: 'Contractors Ranking', detail: 'Across the Bay Area' },
]

const FAQS = [
  {
    q: 'What\'s the difference between Local SEO and Standard SEO?',
    a: 'Local SEO is laser-focused on the Google Maps 3-Pack — the map results that appear for searches like "contractor near me" or "HVAC San Francisco." Standard SEO includes everything in Local plus full organic search optimization: blog content, technical SEO, link building, and unlimited landing pages. If you\'re just starting out or primarily want map pack dominance, Local SEO is the right place to begin. If you want to own both the map and organic results, Standard is your package.',
  },
  {
    q: 'Are there long-term contracts?',
    a: 'No. Both packages are month-to-month. We stay accountable to performance, not paperwork. You can cancel with 30 days notice at any time.',
  },
  {
    q: 'How quickly will I see results?',
    a: 'Most contractors see meaningful ranking movement within 60–90 days and significant lead increases within 4–6 months. We show you a realistic, market-specific timeline on your audit call before you commit to anything.',
  },
  {
    q: 'Can I add Link Building or AI Receptionist to any package?',
    a: 'Yes. Both are available as add-ons to either the Local SEO or Standard SEO package. We\'ll recommend the right combination based on your market competitiveness and current lead volume goals.',
  },
]

export default function PricingPage() {
  return (
    <>
      {/* ── Dark Hero ── */}
      <section
        aria-labelledby="pricing-hero-heading"
        style={{
          background:  'linear-gradient(160deg, #16192A 0%, #1A2240 55%, #1C1F32 100%)',
          position:    'relative',
          overflow:    'hidden',
          padding:     'clamp(4rem, 8vw, 6.5rem) 0 clamp(3rem, 6vw, 5rem)',
          textAlign:   'center',
        }}
      >
        <div aria-hidden="true" style={{ position: 'absolute', top: '-80px', right: '-80px', width: '450px', height: '450px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(232,97,26,0.15) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', bottom: '-60px', left: '-60px', width: '300px', height: '300px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '760px', margin: '0 auto' }}>
          <span style={{
            display: 'inline-flex', alignItems: 'center',
            padding: '5px 16px', borderRadius: '9999px',
            background: 'rgba(232,97,26,0.15)', border: '1px solid rgba(232,97,26,0.30)',
            color: '#F4875A', fontSize: '0.72rem', fontWeight: 700,
            letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.25rem',
          }}>
            Pricing & Packages
          </span>

          <h1 id="pricing-hero-heading" style={{
            fontSize: 'clamp(2rem, 4.5vw, 3.2rem)',
            color: '#FFFFFF',
            fontFamily: 'var(--font-manrope)',
            fontWeight: 800,
            lineHeight: 1.15,
            letterSpacing: '-0.02em',
            marginBottom: '1rem',
          }}>
            A Contractor SEO Agency{' '}
            <em style={{ color: 'var(--accent)', fontStyle: 'italic' }}>Built for the Bay Area</em>
          </h1>

          <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.60)', lineHeight: 'var(--leading-relaxed)', maxWidth: '560px', margin: '0 auto 1.75rem' }}>
            Pricing is scoped after your free audit — your market, trade, and competition level all affect what it takes to win. Packages <strong style={{ color: 'rgba(255,255,255,0.85)' }}>start at $900/month.</strong>
          </p>

          {/* Ads vs SEO comparison */}
          <div style={{ display: 'inline-flex', gap: '1rem', background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 'var(--radius-lg)', padding: '0.9rem 1.5rem', flexWrap: 'wrap', justifyContent: 'center', fontSize: '0.88rem' }}>
            <span style={{ color: '#f87171', fontWeight: 600 }}>✗ $900 in ads = 9 days of visibility, then gone</span>
            <span style={{ color: 'rgba(255,255,255,0.30)' }}>vs.</span>
            <span style={{ color: '#6ee7b7', fontWeight: 600 }}>✓ $900/mo with us = 30 days + full team + monthly deliverables</span>
          </div>
        </div>
      </section>

      {/* ── Stats bar ── */}
      <Section variant="subtle" size="sm">
        <div className="grid-4">
          {STATS.map((s) => <StatCard key={s.label} {...s} />)}
        </div>
      </Section>

      {/* ── Packages ── */}
      <Section variant="white" aria-labelledby="packages-heading">
        <SectionHeading
          label="Choose Your Package"
          heading="Both Packages. Zero Long-Term Contracts."
          id="packages-heading"
        />

        <div className="grid-2" style={{ marginTop: '3rem', alignItems: 'start' }}>

          {/* Package 1 — Local SEO */}
          <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', borderTop: '4px solid var(--accent)' }}>
            <div style={{ marginBottom: '1.5rem' }}>
              <span className="badge badge--accent" style={{ marginBottom: '0.75rem' }}>Package 1</span>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Local SEO</h2>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 'var(--leading-relaxed)' }}>
                Own the Google Maps 3-Pack for your trade and service area. The fastest path from invisible to inbound calls.
              </p>
            </div>

            <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '1.25rem', marginBottom: '1.25rem' }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.4rem' }}>
                <span style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--accent)', fontFamily: 'var(--font-manrope)' }}>From $900</span>
                <span style={{ fontSize: '0.9rem', color: 'var(--text-tertiary)' }}>/month</span>
              </div>
              <div style={{ fontSize: '0.82rem', color: 'var(--text-tertiary)', marginTop: '0.25rem' }}>
                Exact quote after your free audit — scoped to your market & trade
              </div>
            </div>

            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '2rem', flexGrow: 1 }}>
              {PACKAGE_FEATURES_LOCAL.map((f) => (
                <li key={f} style={{ display: 'flex', gap: '0.6rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                  <span style={{ color: 'var(--accent)', flexShrink: 0, fontWeight: 700 }}>✓</span>
                  {f}
                </li>
              ))}
            </ul>

            <a href="/free-seo-audit/" className="btn btn-primary" style={{ textAlign: 'center' }}>
              Get a Free Audit — Start Here
            </a>
          </div>

          {/* Package 2 — Standard SEO */}
          <div className="glass-card glass-strong" style={{ display: 'flex', flexDirection: 'column', borderTop: '4px solid var(--text-primary)', position: 'relative' }}>
            <div style={{ position: 'absolute', top: '-14px', left: '1.5rem' }}>
              <span className="badge badge--dark">Most Popular</span>
            </div>
            <div style={{ marginBottom: '1.5rem' }}>
              <span className="badge badge--neutral" style={{ marginBottom: '0.75rem' }}>Package 2</span>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Standard SEO</h2>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 'var(--leading-relaxed)' }}>
                Full-stack organic growth. Own both the map pack and every high-value search result in your market.
              </p>
            </div>

            <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '1.25rem', marginBottom: '1.25rem' }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.4rem' }}>
                <span style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-primary)', fontFamily: 'var(--font-manrope)' }}>From $900</span>
                <span style={{ fontSize: '0.9rem', color: 'var(--text-tertiary)' }}>/month</span>
              </div>
              <div style={{ fontSize: '0.82rem', color: 'var(--text-tertiary)', marginTop: '0.25rem' }}>
                Exact quote after your free audit — based on market size & content scope
              </div>
            </div>

            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '2rem', flexGrow: 1 }}>
              {PACKAGE_FEATURES_STANDARD.map((f, i) => (
                <li key={f} style={{ display: 'flex', gap: '0.6rem', fontSize: '0.9rem', color: i === 0 ? 'var(--text-primary)' : 'var(--text-secondary)', fontWeight: i === 0 ? 600 : 400 }}>
                  {i === 0 ? null : <span style={{ color: 'var(--accent)', flexShrink: 0, fontWeight: 700 }}>✓</span>}
                  {f}
                </li>
              ))}
            </ul>

            <a href="/free-seo-audit/" className="btn btn-secondary" style={{ textAlign: 'center' }}>
              Get a Free Audit — Start Here
            </a>
          </div>

        </div>

        {/* Guarantee note */}
        <div style={{ textAlign: 'center', marginTop: '2rem', padding: '1.25rem', background: 'var(--accent-light)', border: '1px solid var(--accent-border)', borderRadius: 'var(--radius-lg)' }}>
          <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', margin: 0 }}>
            <strong style={{ color: 'var(--accent)' }}>No long-term contracts.</strong> Both packages are month-to-month. No setup fees. No lock-in. Results earn our continued business — not paperwork.
          </p>
        </div>
      </Section>

      {/* ── Add-ons ── */}
      <Section variant="subtle" aria-labelledby="addons-heading">
        <SectionHeading
          label="Power-Ups"
          heading={<>Add Services to <em>Accelerate Growth</em></>}
          body="Both packages pair with our Link Building and AI Receptionist services for contractors who want to compound their results even faster."
          id="addons-heading"
        />

        <div className="grid-2" style={{ marginTop: '3rem' }}>
          {ADDONS.map((addon) => (
            <div key={addon.title} className="glass-card glass-highlight" style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{addon.icon}</div>
              <h3 style={{ marginBottom: '0.75rem' }}>{addon.title}</h3>
              <p style={{ fontSize: '0.93rem', color: 'var(--text-secondary)', lineHeight: 'var(--leading-relaxed)', marginBottom: '1.5rem', flexGrow: 1 }}>
                {addon.description}
              </p>
              <a href={addon.href} style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--accent)', textDecoration: 'none' }}>
                {addon.cta} →
              </a>
            </div>
          ))}
        </div>
      </Section>

      {/* ── FAQ ── */}
      <Section variant="white" aria-labelledby="pkg-faq-heading">
        <SectionHeading
          label="Package Questions"
          heading="Common Questions About Our Packages"
          id="pkg-faq-heading"
        />
        <div style={{ marginTop: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {FAQS.map((faq) => (
            <div key={faq.q} className="glass-card glass-card--sm">
              <h3 style={{ fontSize: '1rem', marginBottom: '0.6rem', color: 'var(--text-primary)' }}>{faq.q}</h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 'var(--leading-relaxed)', margin: 0 }}>{faq.a}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── CTA ── */}
      <CtaBanner
        label="Ready to Start?"
        heading={<>Get Your Free Audit and <em>We&rsquo;ll Build Your Quote</em></>}
        body="We scope every engagement based on your specific market, trade, and competition level. Start with a free audit — no commitment, just honest answers about what it will take."
        primaryCta={{ label: 'Get My Free SEO Audit', href: '/free-seo-audit/' }}
        secondaryCta={{ label: 'Learn About Our Services', href: '/local-seo-for-contractors/' }}
        dark
      />
    </>
  )
}
