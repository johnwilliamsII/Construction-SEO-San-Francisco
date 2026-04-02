import Section from '../components/layout/Section'
import SectionHeading from '../components/sections/SectionHeading'
import StatCard from '../components/sections/StatCard'
import TestimonialCard from '../components/sections/TestimonialCard'
import CtaBanner from '../components/sections/CtaBanner'
import FaqAccordion from '../components/sections/FaqAccordion'

export const metadata = {
  title: 'Contractor SEO Bay Area | contractorseosanfrancisco.com',
  description:
    'Get contractor SEO Bay Area services that rank your business at the top of Google. More calls, more jobs, no lead-renting. Packages from $1,200/mo.',
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
    body: 'We map your rankings, competitors, and best keywords — free.',
  },
  {
    num: '02',
    title: 'We Build Your SEO Foundation',
    body: 'We build the technical foundation your site needs to rank.',
  },
  {
    num: '03',
    title: 'Rankings Climb, Calls Come In',
    body: 'Positions climb. Your phone rings. You own the traffic.',
  },
  {
    num: '04',
    title: 'You Scale on Owned Traffic',
    body: 'Rankings compound monthly. We maintain them so they hold.',
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
            Contractor SEO Bay Area: <em style={{ color: 'var(--yellow)', fontStyle: 'italic' }}>Get More Bay Area Jobs</em>
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
            <a href="/link-building-for-contractors/" className="btn" style={{
              fontSize: '1rem', padding: '15px 32px',
              background: 'rgba(255,255,255,0.15)', border: '2px solid rgba(255,255,255,0.45)',
              color: '#fff', backdropFilter: 'blur(8px)',
            }}>
              Order Now
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
          <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 'var(--leading-relaxed)', marginBottom: '1.5rem' }}>
            SEO is the opposite. You build rankings the way you build a structure — starting with a foundation. Once you own the #1 spot for &ldquo;general contractor San Francisco,&rdquo; that traffic arrives every day without another dollar changing hands. The asset compounds. The leads are yours.
          </p>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 'var(--leading-relaxed)', marginBottom: '2rem' }}>
            But a foundation alone doesn&rsquo;t hold forever. Rankings are a living thing — links age, algorithms shift, competitors push back. What you don&rsquo;t actively maintain will slowly yield to the sites that do. We exist for one standing mission: get your site to #1 and keep it there. We refresh your link profile, build new content, monitor technical health, and keep your code and security current — so the asset you&rsquo;ve built never quietly erodes while your attention is on the job site.
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
            <div className="glass-card" style={{ padding: '1.25rem', borderTop: '3px solid #22C55E' }}>
              <div style={{ fontWeight: 700, marginBottom: '0.5rem', color: '#22C55E' }}>Owning SEO Rankings</div>
              <ul style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                <li>✓ Leads come in automatically</li>
                <li>✓ Own the asset — not rent it</li>
                <li>✓ Exclusive inbound calls</li>
                <li>✓ Maintained and held at #1</li>
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

      {/* ── WHY US / VALUE SECTION ── */}
      <Section variant="white" aria-labelledby="value-heading">
        <div style={{ maxWidth: '920px', margin: '0 auto', textAlign: 'center' }}>
          <span className="section-label">The Smarter Investment</span>
          <h2 id="value-heading" style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)', marginBottom: '1rem' }}>
            Why Pay $10,000/mo for a Big Agency When You Can <em>Own Google for $2,500?</em>
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 'var(--leading-relaxed)', maxWidth: '620px', margin: '0 auto 2.75rem' }}>
            Most contractors assume getting to the top of Google is expensive. Compared to your alternatives, it&rsquo;s the best deal in the trades.
          </p>

          {/* Pricing comparison 3-col */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', marginBottom: '3rem', textAlign: 'left' }}>
            <div className="glass-card" style={{ padding: '1.5rem', borderTop: '3px solid #E53E3E' }}>
              <div style={{ fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.07em', color: '#E53E3E', marginBottom: '0.5rem' }}>Hire In-House</div>
              <div style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--navy)', lineHeight: 1, marginBottom: '0.3rem' }}>$8,500<span style={{ fontSize: '0.85rem', fontWeight: 500 }}>/mo</span></div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', marginBottom: '1rem', lineHeight: 1.5 }}>Average SEO manager salary + benefits. One person. One skill set.</div>
              <ul style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                <li>✗ Months to find & hire</li>
                <li>✗ Benefits, taxes, overhead on top</li>
                <li>✗ Sick days, turnover risk</li>
                <li>✗ Still only one person's knowledge</li>
              </ul>
            </div>

            <div className="glass-card" style={{ padding: '1.5rem', borderTop: '3px solid #E53E3E' }}>
              <div style={{ fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.07em', color: '#E53E3E', marginBottom: '0.5rem' }}>Big Marketing Agency</div>
              <div style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--navy)', lineHeight: 1, marginBottom: '0.3rem' }}>$10,000<span style={{ fontSize: '0.85rem', fontWeight: 500 }}>/mo+</span></div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', marginBottom: '1rem', lineHeight: 1.5 }}>Industry avg. for a full-service agency retainer. Generalists, not trade specialists.</div>
              <ul style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                <li>✗ Junior staff on your account</li>
                <li>✗ Cookie-cutter playbook</li>
                <li>✗ Long-term contracts required</li>
                <li>✗ Quarterly check-ins if you&rsquo;re lucky</li>
              </ul>
            </div>

            <div style={{ padding: '1.5rem', borderRadius: '12px', background: '#16192A', borderTop: '3px solid #22C55E', textAlign: 'left', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: '14px', right: '14px', background: '#22C55E', color: '#fff', fontSize: '0.62rem', fontWeight: 700, padding: '3px 10px', borderRadius: '9999px', textTransform: 'uppercase', letterSpacing: '0.07em' }}>Best Value</div>
              <div style={{ fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.07em', color: '#22C55E', marginBottom: '0.5rem' }}>Contractor SEO SF</div>
              <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#fff', lineHeight: 1, marginBottom: '0.3rem' }}>$2,500<span style={{ fontSize: '0.85rem', fontWeight: 500, color: 'rgba(255,255,255,0.6)' }}>/mo</span></div>
              <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.6)', marginBottom: '1rem', lineHeight: 1.5 }}>Full team. Contractor-only focus. One mission: get you to #1.</div>
              <ul style={{ fontSize: '0.82rem', listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                <li style={{ color: '#22C55E' }}>✓ Specialists who know the trades</li>
                <li style={{ color: '#22C55E' }}>✓ Monthly reports + growth roadmap</li>
                <li style={{ color: '#22C55E' }}>✓ Month-to-month. No lock-in.</li>
                <li style={{ color: '#22C55E' }}>✓ Results you can see and measure</li>
              </ul>
            </div>
          </div>

          {/* Benefit cards 2×2 */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', marginBottom: '2.5rem', textAlign: 'left' }}>
            {[
              {
                icon: '📞',
                title: 'More Calls From People Ready to Hire',
                body: "We're not here to make your Google dashboard look pretty. We're here to make your phone ring with real homeowners in your city who are ready to book a job — today.",
              },
              {
                icon: '📍',
                title: 'Your Name Shows Up First on Google',
                body: "When someone in your service area searches for a contractor, your business is the first thing they see — on the map, in the results, and before any competitor gets a chance.",
              },
              {
                icon: '📊',
                title: "You're Always in the Loop",
                body: 'No black box. Every month you get a plain-English report and a forward-looking growth roadmap — so you know exactly what we did, what worked, and what we\'re building next.',
              },
              {
                icon: '🔨',
                title: 'A Full Team for Less Than One Salary',
                body: "Strategists, content writers, link builders, and technical experts — all working on your site every month. The output of an entire team, at a fraction of what one in-house hire costs.",
              },
            ].map((b) => (
              <div key={b.title} className="glass-card glass-highlight" style={{ padding: '1.5rem' }}>
                <div style={{ fontSize: '1.6rem', marginBottom: '0.6rem' }}>{b.icon}</div>
                <h3 style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>{b.title}</h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 'var(--leading-relaxed)', margin: 0 }}>{b.body}</p>
              </div>
            ))}
          </div>

          {/* Closing caveat */}
          <div style={{ background: '#16192A', borderRadius: '16px', padding: '2rem 2.5rem' }}>
            <p style={{ fontSize: '1.2rem', fontWeight: 700, color: '#fff', marginBottom: '0.6rem', lineHeight: 1.4 }}>
              You&rsquo;re not buying SEO. You&rsquo;re buying jobs on the calendar.
            </p>
            <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.62)', lineHeight: 'var(--leading-relaxed)', margin: 0 }}>
              More calls from people in your city, searching for exactly what you do, ready to hire. That&rsquo;s the output. Rankings, links, content, technical health — those are just the engine. The destination is a full pipeline with your name at the top of Google. That&rsquo;s what we deliver, and it&rsquo;s the only metric we care about.
            </p>
          </div>
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
