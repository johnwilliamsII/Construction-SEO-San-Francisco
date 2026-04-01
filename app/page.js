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
      <section id="hero" className="hero-section" aria-labelledby="hero-heading">
        <div className="container hero-grid">

          <div className="hero-text">
            <span className="section-label">Bay Area Contractor SEO</span>
            <h1 id="hero-heading">
              SEO for Contractors <em>in the Bay Area</em>
            </h1>
            <p className="hero-subhead">
              Dominate Bay Area Local Search and Stop Renting Your Leads
            </p>
            <p className="hero-body">
              We help San Francisco contractors, GCs, and specialty trades own Google search —
              map pack, organic rankings, and inbound calls that compound month after month.
              No ads. No Angi. No HomeAdvisor tax.
            </p>
            <div className="hero-actions">
              <a href="/free-seo-audit/" className="btn btn-primary">Get Your Free SEO Audit</a>
              <a href="#how-it-works" className="btn btn-outline-dark">See How It Works</a>
            </div>
            <div className="hero-trust">
              <div className="hero-trust-icons">
                <div className="avatar">JM</div>
                <div className="avatar">RT</div>
                <div className="avatar">SK</div>
                <div className="avatar">AL</div>
              </div>
              <span>Trusted by 40+ Bay Area contractors</span>
            </div>
          </div>

          <div className="hero-card" aria-hidden="true">
            <div className="hero-card-title">Live Ranking Snapshot — SF Bay Area</div>
            <div className="stat-row">
              <div className="stat-box">
                <span className="num">+312%</span>
                <div className="lbl">Organic Traffic</div>
              </div>
              <div className="stat-box">
                <span className="num">4.8×</span>
                <div className="lbl">More Leads / Mo</div>
              </div>
            </div>
            <div className="rank-bar">
              <span className="rank-bar-label">&ldquo;General contractor San Francisco&rdquo;</span>
              <span className="rank-badge">#1</span>
            </div>
            <div className="rank-bar">
              <span className="rank-bar-label">&ldquo;Remodeling contractor Bay Area&rdquo;</span>
              <span className="rank-badge">#2</span>
            </div>
            <div className="rank-bar">
              <span className="rank-bar-label">&ldquo;Kitchen remodel contractor SF&rdquo;</span>
              <span className="rank-badge">#1</span>
            </div>
            <div className="rank-bar">
              <span className="rank-bar-label">&ldquo;HVAC contractor San Francisco&rdquo;</span>
              <span className="rank-badge">#1</span>
            </div>
            <div className="rank-bar">
              <span className="rank-bar-label">&ldquo;Commercial construction Oakland&rdquo;</span>
              <span className="rank-badge">#3</span>
            </div>
          </div>

        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section id="services" aria-labelledby="services-heading">
        <div className="container">
          <div className="section-header">
            <span className="section-label">What We Do</span>
            <h2 id="services-heading">Every Service Bay Area Contractors Need to Win on Google</h2>
            <p>From local rankings to AI-powered lead capture — our full suite is built exclusively for the construction industry.</p>
          </div>

          <div className="services-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>

            <article className="service-card">
              <div className="service-icon">📍</div>
              <h3>Local SEO for Contractors</h3>
              <p>
                Dominate &ldquo;contractor near me&rdquo; searches across SF neighborhoods, Oakland, the Peninsula, and every city you serve.
              </p>
              <ul className="service-features">
                <li>City &amp; neighborhood landing pages</li>
                <li>Local citations across 80+ directories</li>
                <li>Schema markup + competitor gap analysis</li>
                <li>Monthly ranking reports</li>
              </ul>
              <a href="/services/local-seo/" className="service-card-cta">Local SEO details →</a>
            </article>

            <article className="service-card">
              <div className="service-icon">🗺️</div>
              <h3>Google Business Profile (GBP)</h3>
              <p>
                The Maps 3-Pack gets 44% of all local clicks. We optimize and actively manage your GBP to own that prime real estate.
              </p>
              <ul className="service-features">
                <li>Full GBP setup, verification &amp; categories</li>
                <li>Weekly Google Posts &amp; photo strategy</li>
                <li>Review acquisition &amp; response management</li>
                <li>GBP Insights reporting</li>
              </ul>
              <a href="/services/gbp/" className="service-card-cta">GBP Optimization details →</a>
            </article>

            <article className="service-card">
              <div className="service-icon">🔍</div>
              <h3>Keyword Research</h3>
              <p>
                Know exactly what Bay Area buyers type into Google before hiring a contractor — then build your entire strategy around those terms.
              </p>
              <ul className="service-features">
                <li>Trade-specific keyword mapping</li>
                <li>Neighborhood &amp; city-level opportunities</li>
                <li>Search volume &amp; competition scoring</li>
                <li>Content roadmap delivery</li>
              </ul>
              <a href="/services/keyword-research/" className="service-card-cta">Keyword Research details →</a>
            </article>

            <article className="service-card">
              <div className="service-icon">🔗</div>
              <h3>Link Building</h3>
              <p>
                Authority links from Bay Area publications, trade associations, and local directories tell Google your business is the real deal.
              </p>
              <ul className="service-features">
                <li>Local &amp; industry-relevant link outreach</li>
                <li>Contractor directory placements</li>
                <li>Digital PR for completed projects</li>
                <li>Zero spammy link schemes</li>
              </ul>
              <a href="/services/link-building/" className="service-card-cta">Link Building details →</a>
            </article>

            <article className="service-card">
              <div className="service-icon">📦</div>
              <h3>SEO Packages</h3>
              <p>
                Bundled monthly plans designed for contractors at every stage — from new businesses building visibility to established firms scaling fast.
              </p>
              <ul className="service-features">
                <li>Starter, Growth &amp; Pro tiers</li>
                <li>Everything included — no à la carte surprises</li>
                <li>Month-to-month, no lock-in contracts</li>
                <li>Clear deliverables &amp; reporting every month</li>
              </ul>
              <a href="/services/seo-packages/" className="service-card-cta">View SEO Packages →</a>
            </article>

            <article className="service-card">
              <div className="service-icon">🤖</div>
              <h3>AI Receptionist</h3>
              <p>
                Never miss a lead again. Our AI receptionist answers calls, qualifies prospects, and books estimates — 24/7, even when you&apos;re on the job.
              </p>
              <ul className="service-features">
                <li>24/7 call answering &amp; lead qualification</li>
                <li>Estimate booking directly to your calendar</li>
                <li>Trained on construction industry scripts</li>
                <li>Instant SMS follow-up to every caller</li>
              </ul>
              <a href="/services/ai-receptionist/" className="service-card-cta">AI Receptionist details →</a>
            </article>

          </div>
        </div>
      </section>

      {/* ===== PROCESS ===== */}
      <section id="process" aria-labelledby="process-heading">
        <div className="container">
          <div className="section-header">
            <span className="section-label">How It Works</span>
            <h2 id="process-heading">Simple Process. <em>Real Results.</em></h2>
            <p>No jargon, no mystery. Three steps from zero visibility to ranking at the top of Google for Bay Area construction searches.</p>
          </div>

          <div className="process-grid">

            <div className="process-card">
              <div className="process-num">01</div>
              <h3>Free Audit &amp; Strategy Call</h3>
              <p>
                We analyze your current Google presence, map out your top competitors, and identify exactly which keywords are driving jobs in your service area. You get a clear picture before spending a dollar.
              </p>
            </div>

            <div className="process-card">
              <div className="process-num">02</div>
              <h3>We Build Your SEO Foundation</h3>
              <p>
                On-page optimization, GBP setup, local citations, content, and schema — all built to Google&apos;s guidelines. We do the work so you can focus on running jobs.
              </p>
            </div>

            <div className="process-card">
              <div className="process-num">03</div>
              <h3>You Rank, Get Calls, Win Work</h3>
              <p>
                Rankings climb, inbound calls increase, and your pipeline fills with qualified Bay Area leads. Monthly reports keep you informed, with plain-English explanations — no fluff.
              </p>
            </div>
          ))}
        </div>
      </Section>

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
