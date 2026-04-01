import Section from '../components/layout/Section'
import SectionHeading from '../components/sections/SectionHeading'
import StatCard from '../components/sections/StatCard'
import TestimonialCard from '../components/sections/TestimonialCard'
import CtaBanner from '../components/sections/CtaBanner'
import FaqAccordion from '../components/sections/FaqAccordion'

export const metadata = {
  title: 'SEO for Contractors in the Bay Area | contractorseosanfrancisco.com',
  description:
    'Dominate Bay Area local search and stop renting your leads from Angi, Yelp, and HomeAdvisor. SEO built exclusively for Bay Area construction companies and contractors.',
}

const SERVICES = [
  {
    icon: '📍',
    title: 'Local SEO for Contractors',
    description:
      'Capture homeowners and project managers who are searching "contractor near me" right now. We engineer every local signal so your business owns the top of San Francisco and Bay Area search results.',
    features: [
      'Hyper-local keyword research by SF neighborhood, city & zip',
      'On-page optimization for service + location pages',
      'Local citation building across 80+ directories',
      'Schema markup for contractors (LocalBusiness, Service, Review)',
      'Monthly ranking reports with plain-English explanations',
    ],
    href: '/local-seo-for-contractors/',
  },
  {
    icon: '🔗',
    title: 'Link Building for Contractors',
    description:
      "Authority is everything in competitive Bay Area markets. We earn high-quality backlinks from industry publications, local news, and trade organizations that signal to Google you're the real deal.",
    features: [
      'Industry-relevant backlinks from construction & trade sites',
      'Local Bay Area press and directory citations',
      'Competitor backlink gap analysis',
      'White-hat outreach — no PBNs, no spam',
      'Authority tracking month over month',
    ],
    href: '/link-building-for-contractors/',
  },
  {
    icon: '🔍',
    title: 'Keyword Research for Contractors',
    description:
      'Stop guessing which terms your buyers use. We map every high-intent keyword across your service types, cities, and neighborhoods — so every page you build has a clear path to traffic and leads.',
    features: [
      'Full keyword mapping by trade, city, and neighborhood',
      'Search volume and competition scoring',
      'Buyer-intent keyword prioritization',
      'Content gap analysis vs. top competitors',
      'Ongoing keyword expansion as you grow',
    ],
    href: '/keyword-research-for-contractors/',
  },
  {
    icon: '📞',
    title: 'AI Receptionist for Contractors',
    description:
      "Never miss a lead again. Our AI receptionist answers calls, qualifies prospects, and books appointments 24/7 — so you capture every job even when you're on a job site.",
    features: [
      '24/7 call answering trained on your services',
      'Lead qualification before you pick up the phone',
      'Appointment booking directly to your calendar',
      'SMS follow-up sequences for missed calls',
      'CRM integration and lead tracking',
    ],
    href: '/ai-receptionist-service/',
  },
]

const TESTIMONIALS = [
  {
    quote:
      'Within 4 months we went from page 3 to the #1 spot for "general contractor San Francisco." Our inbound calls doubled. The team knows construction — they actually talk our language.',
    name: 'James Moreno',
    role: 'Owner, Moreno Construction Co. — San Francisco (General Contractor)',
    initials: 'JM',
    stars: 5,
  },
  {
    quote:
      'We had zero Google presence before. Now we\'re in the Maps 3-Pack for "kitchen remodel Oakland" and "bathroom remodel East Bay." Booked out 3 months ahead.',
    name: 'Rachel Torres',
    role: 'Co-Owner, Bay Craft Remodeling — Oakland (Remodeling Contractor)',
    initials: 'RT',
    stars: 5,
  },
  {
    quote:
      'As a roofing company competing with Angi and HomeAdvisor, I was skeptical. Six months later our GBP gets 200+ monthly calls and our cost per lead dropped 60%.',
    name: 'Steve Kim',
    role: 'Owner, Peninsula Roofing — San Mateo (Specialty Roofing)',
    initials: 'SK',
    stars: 5,
  },
]

const STEPS = [
  {
    num: '01',
    title: 'Free Audit & Strategy Call',
    body: 'We analyze your current Google presence, map your top competitors, and identify exactly which keywords are driving jobs in your service area. You get a clear picture before spending a dollar.',
  },
  {
    num: '02',
    title: 'We Build Your SEO Foundation',
    body: 'Keyword research, on-page optimization, local citations, content, and schema — all engineered to Google\'s guidelines. We do the work so you can focus on running jobs.',
  },
  {
    num: '03',
    title: 'Rankings Climb, Calls Come In',
    body: 'Organic positions rise, inbound calls increase, and your pipeline fills with qualified Bay Area leads. No renting. No platform dependency. You own the traffic.',
  },
  {
    num: '04',
    title: 'You Scale on Owned Traffic',
    body: 'Unlike ads that stop the moment you stop paying, SEO compounds. Month 6 is better than month 3. Year 2 is better than year 1. You build an asset — not a monthly bill.',
  },
]

const STATS = [
  { value: '+312%', label: 'Avg. Traffic Growth', detail: 'Across all clients, 12 months' },
  { value: '4.8×', label: 'Avg. Lead Multiplier', detail: 'Leads per month vs. baseline' },
  { value: '–60%', label: 'Cost Per Lead Reduction', detail: 'Vs. paid directory listings' },
  { value: '40+', label: 'Bay Area Contractors', detail: 'Served and ranking' },
]

const FAQ_ITEMS = [
  {
    question: 'How long does SEO take to show results for a Bay Area contractor?',
    answer:
      'Most contractors see meaningful ranking movement in 60–90 days and significant lead increases within 4–6 months. The Bay Area is a competitive market, but because most contractor websites are poorly optimized, a focused effort moves fast. We show you a realistic timeline on your free audit call.',
  },
  {
    question: 'Do I need a new website to work with you?',
    answer:
      'No. We work with your existing site in most cases. We\'ll recommend a rebuild only if the technical foundation is holding rankings back — and we\'ll be honest with you about that in the audit.',
  },
  {
    question: 'What\'s the difference between your SEO and just paying for Google Ads?',
    answer:
      'Google Ads is renting visibility. The moment you stop paying, you disappear. SEO builds an owned asset — your rankings don\'t vanish when you pause a payment. Most of our clients reduce or eliminate their ads spend within 12 months because organic traffic is filling their pipeline.',
  },
  {
    question: 'Do you work with all types of Bay Area contractors?',
    answer:
      'Yes. We work with general contractors, remodeling companies, HVAC, roofing, plumbing, electrical, landscaping, and specialty trades across the Bay Area. Our keyword research and content strategy is tailored to your specific trade and target market.',
  },
  {
    question: 'How is your reporting structured?',
    answer:
      'Monthly reports include keyword ranking movement, organic traffic, Google Business Profile metrics (calls, directions, clicks), and lead volume. Everything in plain English — no vanity metrics, no jargon.',
  },
  {
    question: 'Do you lock clients into long-term contracts?',
    answer:
      'No long-term contracts. We operate month-to-month because we believe results should earn your business — not paperwork. We stay accountable to performance.',
  },
]

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section
        id="hero"
        aria-labelledby="hero-heading"
        style={{
          position: 'relative',
          overflow: 'hidden',
          padding: 'clamp(5rem, 10vw, 8rem) 0 clamp(4rem, 8vw, 6rem)',
          backgroundImage: 'linear-gradient(rgba(13,27,42,0.58), rgba(13,27,42,0.52)), url(https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container" style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>

          {/* Badge */}
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: '6px',
            padding: '5px 16px', borderRadius: '9999px',
            background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.30)',
            color: '#fff', fontSize: '0.75rem', fontWeight: 600,
            letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '1.5rem',
          }}>
            🏗️ Construction SEO &bull; San Francisco, California
          </span>

          <h1 id="hero-heading" style={{
            fontSize: 'clamp(2.2rem, 5vw, 3.6rem)',
            color: '#fff',
            fontFamily: 'var(--font-manrope)',
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            marginBottom: '1.25rem',
            maxWidth: '780px',
          }}>
            SEO for Contractors <em style={{ color: 'var(--yellow)', fontStyle: 'italic' }}>in the Bay Area</em>
          </h1>

          <p style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.82)', maxWidth: '580px', lineHeight: 1.7, marginBottom: '0.75rem' }}>
            Dominate Bay Area local search and stop renting your leads
          </p>
          <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.65)', maxWidth: '540px', lineHeight: 1.7, marginBottom: '2.25rem' }}>
            We help San Francisco contractors, GCs, and specialty trades own Google search —
            map pack, organic rankings, and inbound calls that compound month after month.
            No ads. No Angi. No HomeAdvisor tax.
          </p>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '2.5rem' }}>
            <a href="/free-seo-audit/" className="btn btn-primary" style={{ fontSize: '1rem', padding: '15px 32px' }}>
              Get Your Free SEO Audit
            </a>
            <a href="#how-it-works" className="btn" style={{
              fontSize: '1rem', padding: '15px 32px',
              background: 'rgba(255,255,255,0.15)', border: '2px solid rgba(255,255,255,0.45)',
              color: '#fff', backdropFilter: 'blur(8px)',
            }}>
              See How It Works
            </a>
          </div>

          {/* Trust */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '3rem' }}>
            <div style={{ display: 'flex' }}>
              {['JM','RT','SK','AL'].map((i) => (
                <div key={i} className="avatar" style={{ border: '2px solid rgba(255,255,255,0.5)', marginLeft: '-8px' }}>{i}</div>
              ))}
            </div>
            <span style={{ color: 'rgba(255,255,255,0.80)', fontSize: '0.9rem' }}>Trusted by 40+ Bay Area contractors</span>
          </div>

          {/* How It Works strip */}
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px',
            background: 'rgba(255,255,255,0.15)', borderRadius: '12px', overflow: 'hidden',
            width: '100%', maxWidth: '680px',
          }}>
            {[
              { num: '1', label: 'Free Consultation' },
              { num: '2', label: 'Custom Strategy' },
              { num: '3', label: 'Get Results' },
            ].map((step, i) => (
              <div key={step.num} style={{
                background: 'rgba(255,255,255,0.10)',
                backdropFilter: 'blur(8px)',
                padding: '1rem',
                display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px',
                borderRight: i < 2 ? '1px solid rgba(255,255,255,0.15)' : 'none',
              }}>
                <div style={{
                  width: '32px', height: '32px', borderRadius: '50%',
                  background: 'var(--yellow)', color: 'var(--navy)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontWeight: 800, fontSize: '0.9rem',
                }}>{step.num}</div>
                <span style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.85rem', fontWeight: 600 }}>{step.label}</span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── BELIEF-BREAKER: Ads = Renting ── */}
      <Section variant="white" aria-labelledby="belief-heading">
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <span className="section-label">The Real Problem</span>
          <h2 id="belief-heading" style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)', marginBottom: '1.5rem' }}>
            Running Ads and Paying Lead Sites? <em>You&rsquo;re Renting Your Own Business.</em>
          </h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 'var(--leading-relaxed)', marginBottom: '1.5rem' }}>
            Every dollar you pay Angi, HomeAdvisor, Yelp, or Google Ads buys you one lead. One. Stop paying and the pipeline goes cold overnight. There&rsquo;s no equity, no asset, and no path to independence.
          </p>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 'var(--leading-relaxed)', marginBottom: '2rem' }}>
            SEO is the opposite. You build rankings the way you build a building — with a foundation. Once you own the #1 spot for &ldquo;general contractor San Francisco,&rdquo; that traffic comes to you every day without another dollar changing hands. The asset compounds. The leads are yours.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', maxWidth: '560px', margin: '0 auto' }}>
            <div className="glass-card" style={{ padding: '1.25rem', borderTop: '3px solid var(--error)' }}>
              <div style={{ fontWeight: 700, marginBottom: '0.5rem', color: 'var(--error)' }}>Paying for Leads</div>
              <ul style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                <li>✗ Pay per lead, forever</li>
                <li>✗ Stop paying → pipeline dies</li>
                <li>✗ Same lead sold to 5 competitors</li>
                <li>✗ Platform controls your pricing</li>
              </ul>
            </div>
            <div className="glass-card" style={{ padding: '1.25rem', borderTop: '3px solid var(--accent)' }}>
              <div style={{ fontWeight: 700, marginBottom: '0.5rem', color: 'var(--accent)' }}>Owning SEO Rankings</div>
              <ul style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                <li>✓ Leads come in automatically</li>
                <li>✓ Rankings stay when you pause</li>
                <li>✓ Exclusive inbound calls</li>
                <li>✓ You own the asset, not rent it</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* ── STATS ── */}
      <Section variant="subtle" aria-label="Client results summary">
        <div className="grid-4">
          {STATS.map((s) => <StatCard key={s.label} {...s} />)}
        </div>
      </Section>

      {/* ── SERVICES GRID ── */}
      <Section variant="white" id="services" aria-labelledby="services-heading">
        <SectionHeading
          label="What We Do"
          heading={<>Four Services. One Goal: <em>Owning Bay Area Search.</em></>}
          body="Every service we offer feeds into the same outcome — your phone rings with qualified Bay Area leads from people who searched for your trade and found you first."
          id="services-heading"
        />

        <div className="grid-2" style={{ marginTop: '3rem' }}>
          {SERVICES.map((svc) => (
            <article key={svc.title} className="glass-card glass-highlight" style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{svc.icon}</div>
              <h3 style={{ marginBottom: '0.75rem', fontSize: '1.15rem' }}>{svc.title}</h3>
              <p style={{ fontSize: '0.93rem', color: 'var(--text-secondary)', lineHeight: 'var(--leading-relaxed)', marginBottom: '1rem' }}>{svc.description}</p>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.4rem', marginBottom: '1.5rem', flexGrow: 1 }}>
                {svc.features.map((f) => (
                  <li key={f} style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', display: 'flex', gap: '0.5rem' }}>
                    <span style={{ color: 'var(--accent)', flexShrink: 0 }}>✓</span>{f}
                  </li>
                ))}
              </ul>
              <a href={svc.href} style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--accent)', textDecoration: 'none' }}>
                Learn more →
              </a>
            </article>
          ))}
        </div>
      </Section>

      {/* ── HOW IT WORKS ── */}
      <Section variant="subtle" id="how-it-works" aria-labelledby="process-heading">
        <SectionHeading
          label="What Happens Next"
          heading={<>Four Steps From Invisible <em>to Dominant</em></>}
          body="No jargon. No mystery. Here's exactly what we do and what you get."
          id="process-heading"
        />

        <div className="process-grid" style={{ marginTop: '3rem' }}>
          {STEPS.map((step) => (
            <div key={step.num} className="process-card">
              <div className="process-num">{step.num}</div>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── TESTIMONIALS ── */}
      <Section variant="white" aria-labelledby="testi-heading">
        <SectionHeading
          label="Client Results"
          heading={<>Bay Area Contractors <em>Love the Results</em></>}
          body="Real feedback from construction businesses we've helped rank and grow across the Bay Area."
          id="testi-heading"
        />
        <div className="testimonials-grid" style={{ marginTop: '3rem' }}>
          {TESTIMONIALS.map((t) => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        </div>
      </Section>

      {/* ── FAQ ── */}
      <Section variant="subtle" aria-labelledby="faq-heading">
        <SectionHeading
          label="Common Questions"
          heading="FAQ for Bay Area Contractors"
          body="Straight answers to the questions we get most from construction business owners."
          id="faq-heading"
        />
        <div style={{ marginTop: '2.5rem' }}>
          <FaqAccordion items={FAQ_ITEMS} />
        </div>
      </Section>

      {/* ── FINAL CTA ── */}
      <CtaBanner
        label="Limited Spots Available"
        heading={<>Ready to Own Page 1 for <em>Bay Area Construction</em> Searches?</>}
        body="Get a free, no-obligation SEO audit of your current online presence. We'll show you exactly where you stand, who's outranking you, and what it takes to get to #1."
        primaryCta={{ label: 'Get My Free SEO Audit', href: '/free-seo-audit/' }}
        secondaryCta={{ label: 'View Packages & Pricing', href: '/seo-packages-for-contractors/' }}
        dark
      />
    </>
  )
}
