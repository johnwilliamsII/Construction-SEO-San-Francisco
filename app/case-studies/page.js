import TestimonialCard from '../../components/sections/TestimonialCard'
import CtaBanner from '../../components/sections/CtaBanner'
import Section from '../../components/layout/Section'

export const metadata = {
  title: 'Case Studies | Construction SEO San Francisco',
  description:
    'Real results from real Bay Area contractors. See how we\'ve helped construction companies rank #1 on Google, fill their pipelines, and reduce cost per lead.',
  alternates: { canonical: 'https://www.contractorseobayarea.com/case-studies/' },
}

const STATS = [
  {
    value:  '+312%',
    label:  'Average Organic Traffic Growth',
    detail: 'Measured within the first 6–12 months',
  },
  {
    value:  '4.8×',
    label:  'More Qualified Leads Per Month',
    detail: 'Compared to pre-SEO baseline',
  },
  {
    value:  '−60%',
    label:  'Lower Cost Per Lead',
    detail: 'Vs. paid platforms like Angi and HomeAdvisor',
  },
  {
    value:  '40+',
    label:  'Bay Area Contractors Currently Ranking',
    detail: 'Across San Francisco, Oakland, East Bay & Peninsula',
  },
]

const TESTIMONIALS = [
  {
    quote:    "Within 4 months we went from page 3 to the #1 spot for 'general contractor San Francisco.' Our inbound calls doubled. The team knows construction — they actually talk our language.",
    name:     'James Moreno',
    role:     'Owner, Moreno Construction Co. — San Francisco',
    initials: 'JM',
    stars:    5,
  },
  {
    quote:    "We had zero Google presence before. Now we're in the Maps 3-Pack for 'kitchen remodel Oakland' and 'bathroom remodel East Bay.' Booked out 3 months ahead.",
    name:     'Rachel Torres',
    role:     'Co-Owner, Bay Craft Remodeling — Oakland',
    initials: 'RT',
    stars:    5,
  },
  {
    quote:    "As a specialty roofing company competing with Angi and HomeAdvisor, I was skeptical. Six months later our GBP gets 200+ monthly calls and our cost per lead dropped 60%.",
    name:     'Steve Kim',
    role:     'Owner, Peninsula Roofing — San Mateo',
    initials: 'SK',
    stars:    5,
  },
]

const TRUST_POINTS = [
  {
    bold: 'We speak the trade.',
    body: 'The language in your content reflects how real clients search — not how a generic copywriter imagines they do.',
  },
  {
    bold: 'We know your geography.',
    body: 'The Bay Area is not one market. San Francisco, Oakland, San Jose, Marin, the Peninsula — each has its own search patterns, competition levels, and customer intent. We treat them accordingly.',
  },
  {
    bold: 'We target buyers, not browsers.',
    body: 'We\'re not chasing traffic for its own sake. Every keyword we pursue maps to someone who is actively looking to hire.',
  },
  {
    bold: 'We measure what moves revenue.',
    body: 'Rankings are a milestone, not the finish line. We track calls, form fills, and lead quality — the numbers that actually affect your business.',
  },
]

const RANKING_BENEFITS = [
  {
    heading: 'More inbound calls — from people ready to hire.',
    body:    'Not tire-kickers browsing Houzz. Homeowners and project managers who searched for exactly what you do, in the city where you work, and clicked on you first.',
  },
  {
    heading: 'A full schedule without paid ad dependency.',
    body:    'Every dollar you spend on Angi or Google Ads stops working the moment you stop spending. Organic search compounds. The rankings you build this year pay off next year too.',
  },
  {
    heading: 'A competitive moat that\'s hard to reverse.',
    body:    'Once you own the top positions in your market, a competitor can\'t simply outbid you. They have to outwork months or years of earned authority. That\'s a meaningful business advantage.',
  },
  {
    heading: 'Credibility at the moment it matters most.',
    body:    'When a homeowner Googles your company name after a referral, what do they find? A strong Google Business Profile, consistent reviews, and a professional web presence close the deal before you ever pick up the phone.',
  },
]

export default function CaseStudiesPage() {
  return (
    <>
      {/* ─────────────────────────────────────────────────────────────────
          SECTION 1 — Dark Hero
      ───────────────────────────────────────────────────────────────── */}
      <section
        aria-labelledby="cs-heading"
        style={{
          background:  'linear-gradient(160deg, #16192A 0%, #1A2240 55%, #1C1F32 100%)',
          position:    'relative',
          overflow:    'hidden',
          padding:     'clamp(4rem, 8vw, 6.5rem) 0 clamp(3rem, 6vw, 5rem)',
          textAlign:   'center',
        }}
      >
        <div aria-hidden="true" style={{ position: 'absolute', top: '-100px', right: '-80px', width: '480px', height: '480px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(232,97,26,0.14) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', bottom: '-60px', left: '-60px', width: '320px', height: '320px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <div className="container" style={{ maxWidth: '720px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
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
            fontSize:      'clamp(2rem, 4.5vw, 3.2rem)',
            color:         '#FFFFFF',
            fontFamily:    'var(--font-manrope)',
            fontWeight:    800,
            lineHeight:    1.15,
            letterSpacing: '-0.02em',
            marginBottom:  '1.25rem',
          }}>
            Real Rankings.{' '}
            <em style={{ color: 'var(--accent)', fontStyle: 'italic' }}>Real Revenue.</em>{' '}
            Real Bay Area Contractors.
          </h1>

          <p style={{
            fontSize:     '1.05rem',
            color:        'rgba(255,255,255,0.60)',
            lineHeight:   'var(--leading-relaxed)',
            maxWidth:     '580px',
            margin:       '0 auto',
          }}>
            We don&rsquo;t make promises we can&rsquo;t back up. Every number below came from a real contractor, in a real Bay Area market, competing against the same Angi listings, HomeAdvisor ads, and established local players you&rsquo;re up against right now.
          </p>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────
          SECTION 2 — By the Numbers
      ───────────────────────────────────────────────────────────────── */}
      <Section variant="subtle" aria-labelledby="stats-heading">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span style={{
            display: 'inline-flex', alignItems: 'center',
            padding: '4px 14px', borderRadius: '9999px',
            background: 'var(--accent-light)', border: '1px solid var(--accent-border)',
            color: 'var(--accent)', fontSize: '0.72rem', fontWeight: 700,
            letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.85rem',
          }}>
            By the Numbers
          </span>
          <h2 id="stats-heading" style={{
            fontSize:      'clamp(1.5rem, 3vw, 2.2rem)',
            fontFamily:    'var(--font-manrope)',
            fontWeight:    800,
            color:         'var(--text-primary)',
            letterSpacing: '-0.02em',
            marginBottom:  '0.75rem',
          }}>
            These averages are drawn from active clients
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', maxWidth: '520px', margin: '0 auto', lineHeight: 'var(--leading-relaxed)' }}>
            Construction and home improvement companies operating across San Francisco, Oakland, the East Bay, and the Peninsula.
          </p>
        </div>

        <div className="grid-4">
          {STATS.map((stat) => (
            <div
              key={stat.value}
              className="glass-card glass-card--sm"
              style={{ textAlign: 'center', padding: '2rem 1.5rem' }}
            >
              <div style={{
                fontSize:    'clamp(2rem, 4vw, 2.8rem)',
                fontWeight:  800,
                color:       'var(--accent)',
                fontFamily:  'var(--font-manrope)',
                lineHeight:  1,
                marginBottom: '0.6rem',
              }}>
                {stat.value}
              </div>
              <div style={{
                fontSize:     '0.9rem',
                fontWeight:   700,
                color:        'var(--text-primary)',
                marginBottom: '0.4rem',
                lineHeight:   'var(--leading-snug)',
              }}>
                {stat.label}
              </div>
              <div style={{
                fontSize:  '0.78rem',
                color:     'var(--text-tertiary)',
                lineHeight: 'var(--leading-relaxed)',
              }}>
                {stat.detail}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ─────────────────────────────────────────────────────────────────
          SECTION 3 — What Our Clients Say
      ───────────────────────────────────────────────────────────────── */}
      <Section variant="white" aria-labelledby="testimonials-heading">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span style={{
            display: 'inline-flex', alignItems: 'center',
            padding: '4px 14px', borderRadius: '9999px',
            background: 'var(--accent-light)', border: '1px solid var(--accent-border)',
            color: 'var(--accent)', fontSize: '0.72rem', fontWeight: 700,
            letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.85rem',
          }}>
            What Our Clients Say
          </span>
          <h2 id="testimonials-heading" style={{
            fontSize:      'clamp(1.5rem, 3vw, 2.2rem)',
            fontFamily:    'var(--font-manrope)',
            fontWeight:    800,
            color:         'var(--text-primary)',
            letterSpacing: '-0.02em',
            marginBottom:  '0.75rem',
          }}>
            5 Stars Across the Board
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', maxWidth: '500px', margin: '0 auto', lineHeight: 'var(--leading-relaxed)' }}>
            Full case studies are being documented. In the meantime, here are the reviews we&rsquo;ve earned.
          </p>
        </div>

        <div className="testimonials-grid">
          {TESTIMONIALS.map((t) => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        </div>
      </Section>

      {/* ─────────────────────────────────────────────────────────────────
          SECTION 4 — Why Contractors Trust This Process
      ───────────────────────────────────────────────────────────────── */}
      <Section variant="subtle" aria-labelledby="trust-heading">
        <div style={{
          display:   'grid',
          gridTemplateColumns: 'clamp(280px, 38%, 420px) 1fr',
          gap:       'clamp(2rem, 5vw, 4rem)',
          alignItems: 'start',
        }}>

          {/* Left — heading + context */}
          <div>
            <span style={{
              display: 'inline-flex', alignItems: 'center',
              padding: '4px 14px', borderRadius: '9999px',
              background: 'var(--accent-light)', border: '1px solid var(--accent-border)',
              color: 'var(--accent)', fontSize: '0.72rem', fontWeight: 700,
              letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.85rem',
            }}>
              Our Approach
            </span>
            <h2 id="trust-heading" style={{
              fontSize:      'clamp(1.5rem, 3vw, 2.2rem)',
              fontFamily:    'var(--font-manrope)',
              fontWeight:    800,
              color:         'var(--text-primary)',
              letterSpacing: '-0.02em',
              lineHeight:    1.2,
              marginBottom:  '1.25rem',
            }}>
              Why Contractors Trust This Process
            </h2>
            <p style={{ fontSize: '0.97rem', color: 'var(--text-secondary)', lineHeight: 'var(--leading-relaxed)' }}>
              Most SEO agencies treat construction like any other industry. They don&rsquo;t know the difference between a ground-up build and a gut renovation. They&rsquo;ve never heard a client ask about permit timelines, and they don&rsquo;t understand why &ldquo;general contractor near me&rdquo; and &ldquo;licensed GC San Francisco&rdquo; are two completely different searches.
            </p>
            <p style={{ fontSize: '0.97rem', color: 'var(--text-secondary)', lineHeight: 'var(--leading-relaxed)', marginTop: '0.75rem' }}>
              We built this practice specifically for contractors. That means:
            </p>
          </div>

          {/* Right — 4 trust points */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {TRUST_POINTS.map((point, i) => (
              <div
                key={i}
                className="glass-card glass-card--sm"
                style={{
                  display:    'flex',
                  gap:        '1rem',
                  alignItems: 'flex-start',
                  padding:    '1.25rem 1.5rem',
                }}
              >
                <div style={{
                  flexShrink:   0,
                  width:        '32px',
                  height:       '32px',
                  borderRadius: '8px',
                  background:   'var(--accent-light)',
                  border:       '1px solid var(--accent-border)',
                  display:      'flex',
                  alignItems:   'center',
                  justifyContent: 'center',
                  fontSize:     '0.75rem',
                  fontWeight:   800,
                  color:        'var(--accent)',
                  fontFamily:   'var(--font-manrope)',
                }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div>
                  <p style={{ margin: 0, fontSize: '0.95rem', color: 'var(--text-primary)', lineHeight: 'var(--leading-relaxed)' }}>
                    <strong style={{ color: 'var(--text-primary)' }}>{point.bold}</strong>{' '}{point.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ─────────────────────────────────────────────────────────────────
          SECTION 5 — What "Ranking" Actually Gets You
      ───────────────────────────────────────────────────────────────── */}
      <Section variant="white" aria-labelledby="ranking-heading">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span style={{
            display: 'inline-flex', alignItems: 'center',
            padding: '4px 14px', borderRadius: '9999px',
            background: 'var(--accent-light)', border: '1px solid var(--accent-border)',
            color: 'var(--accent)', fontSize: '0.72rem', fontWeight: 700,
            letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.85rem',
          }}>
            The Real Value
          </span>
          <h2 id="ranking-heading" style={{
            fontSize:      'clamp(1.5rem, 3vw, 2.2rem)',
            fontFamily:    'var(--font-manrope)',
            fontWeight:    800,
            color:         'var(--text-primary)',
            letterSpacing: '-0.02em',
            marginBottom:  '0.75rem',
          }}>
            What &ldquo;Ranking&rdquo; Actually Gets You
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', maxWidth: '520px', margin: '0 auto', lineHeight: 'var(--leading-relaxed)' }}>
            There&rsquo;s a difference between showing up on Google and dominating the searches that matter. Here&rsquo;s what our clients experience once their rankings take hold.
          </p>
        </div>

        <div className="grid-2">
          {RANKING_BENEFITS.map((benefit, i) => (
            <div
              key={i}
              className="glass-card glass-highlight"
              style={{ padding: '2rem' }}
            >
              {/* Orange accent rule */}
              <div style={{
                width:        '36px',
                height:       '3px',
                background:   'var(--accent)',
                borderRadius: '9999px',
                marginBottom: '1.1rem',
              }} />
              <h3 style={{
                fontSize:     '1.02rem',
                fontWeight:   700,
                color:        'var(--text-primary)',
                lineHeight:   'var(--leading-snug)',
                marginBottom: '0.65rem',
                fontFamily:   'var(--font-manrope)',
              }}>
                {benefit.heading}
              </h3>
              <p style={{
                fontSize:   '0.92rem',
                color:      'var(--text-secondary)',
                lineHeight: 'var(--leading-relaxed)',
                margin:     0,
              }}>
                {benefit.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* ─────────────────────────────────────────────────────────────────
          SECTION 6 — Your Turn (CTA)
      ───────────────────────────────────────────────────────────────── */}
      <CtaBanner
        label="Your Turn"
        heading={<>Ready to Find Out What&rsquo;s Possible <em>for Your Business</em>?</>}
        body="Start with a free SEO audit. We'll analyze your current Google Business Profile, identify the keywords your competitors are ranking for that you're not, and show you the realistic gap between where you are and where you could be. No pitch deck. No sales call. No vague promises. Just a clear-eyed look at your actual opportunity in the Bay Area market — delivered straight to your inbox."
        primaryCta={{ label: 'Get My Free SEO Audit', href: '/free-seo-audit/' }}
        secondaryCta={{ label: 'View Packages', href: '/seo-packages-for-contractors/' }}
      />
    </>
  )
}
