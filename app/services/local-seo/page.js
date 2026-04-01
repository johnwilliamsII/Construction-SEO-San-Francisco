import SectionHeading from '../../../components/sections/SectionHeading'
import ServiceCard from '../../../components/sections/ServiceCard'
import StatCard from '../../../components/sections/StatCard'
import FaqAccordion from '../../../components/sections/FaqAccordion'
import CtaBanner from '../../../components/sections/CtaBanner'
import Section from '../../../components/layout/Section'

export const metadata = {
  title: 'Local SEO for Contractors | Construction SEO San Francisco',
  description:
    'Hyper-local SEO for Bay Area construction companies. Rank for "contractor near me" searches across SF neighborhoods, Oakland, San Jose, and the Peninsula.',
}

const FEATURES = [
  { icon: '🗺️', title: 'Hyper-Local Keyword Research',    body: 'We map every search term Bay Area homeowners and PMs use when looking for contractors — by neighborhood, city, and zip code.' },
  { icon: '📄', title: 'City & Service Landing Pages',     body: 'We build and optimize dedicated pages for each service + location combination you want to rank for.' },
  { icon: '📋', title: 'Local Citation Building',          body: 'NAP consistency across 80+ Bay Area directories, ensuring Google trusts your business information.' },
  { icon: '🔍', title: 'Competitor Gap Analysis',          body: 'See exactly which keywords your top competitors rank for that you don\'t — and we fix that.' },
  { icon: '⚙️', title: 'Schema Markup for Contractors',   body: 'LocalBusiness, Service, and Review schema signals help Google understand your offerings precisely.' },
  { icon: '📊', title: 'Monthly Ranking Reports',          body: 'Plain-English reports showing exactly where your rankings moved, what traffic you gained, and what\'s next.' },
]

const STATS = [
  { value: '+312%', label: 'Avg. Organic Traffic Growth',   detail: 'Measured over 12 months' },
  { value: '60–90', label: 'Days to First Ranking Gains',   detail: 'Bay Area timeline' },
  { value: '4.8×',  label: 'Average Lead Multiplier',       detail: 'Vs. pre-SEO baseline' },
  { value: '80+',   label: 'Citation Sources Built',        detail: 'Per client engagement' },
]

const FAQ = [
  {
    question: 'What is local SEO for contractors?',
    answer:
      'Local SEO is the process of optimizing your website and online presence so your construction business appears at the top of Google when Bay Area customers search for contractors in your area. It includes on-page optimization, citation building, schema markup, and content strategy.',
  },
  {
    question: 'How long before I see local ranking improvements?',
    answer:
      'Most clients see movement in targeted keywords within 60–90 days and meaningful traffic growth within 4–6 months. More competitive keywords (like "general contractor San Francisco") can take 6–9 months to reach the top 3.',
  },
  {
    question: 'Do you work in all Bay Area cities?',
    answer:
      'Yes — we target SF neighborhoods, Oakland, Berkeley, San Jose, South Bay, the Peninsula, Marin, and East Bay. We build location-specific pages for every market you want to serve.',
  },
]

export default function LocalSEOPage() {
  return (
    <main>

      {/* ===== HERO ===== */}
      <section style={{ background: 'var(--navy)', color: '#fff', padding: '80px 0 60px' }}>
        <div className="container" style={{ maxWidth: '720px' }}>
          <span className="section-label">Service</span>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', margin: '12px 0 20px', color: '#fff' }}>
            Local SEO for Bay Area Construction Companies
          </h1>
          <p style={{ color: '#CBD5E1', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '32px' }}>
            When a homeowner in Noe Valley or a PM in Oakland types &ldquo;general contractor near me,&rdquo;
            you want to be the first result they see. Our local SEO turns your website into a lead machine
            that works around the clock — targeting every city, neighborhood, and trade keyword that matters to your business.
          </p>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <a href="/free-seo-audit/" className="btn btn-primary">Get Your Free Local SEO Audit →</a>
            <a href="/services/seo-packages/" className="btn btn-outline-dark" style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.4)' }}>View Packages</a>
          </div>
        </div>
      </section>

      {/* ===== WHAT'S INCLUDED ===== */}
      <section style={{ padding: '72px 0' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-label">What We Deliver</span>
            <h2>Everything That Moves You Up on Google</h2>
            <p>Local SEO isn&apos;t one thing — it&apos;s a system. Every component below works together to signal to Google that your business is the most relevant, trustworthy result for Bay Area construction searches.</p>
          </div>

          <div className="services-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>

            <div className="service-card">
              <h3>Hyper-Local Keyword Strategy</h3>
              <p>We map every high-intent keyword your buyers use — from &ldquo;kitchen remodel San Francisco&rdquo; to &ldquo;roofing contractor Fremont&rdquo; — and build your content plan around terms that actually drive calls.</p>
              <ul className="service-features">
                <li>SF neighborhoods: Noe Valley, Pacific Heights, Sunset, Richmond, SOMA</li>
                <li>East Bay: Oakland, Berkeley, Alameda, Fremont, Walnut Creek</li>
                <li>Peninsula &amp; South Bay: San Jose, Palo Alto, Redwood City, San Mateo</li>
                <li>Trade-specific terms (roofing, HVAC, plumbing, framing, ADU, etc.)</li>
              </ul>
            </div>

            <div className="service-card">
              <h3>City &amp; Service Landing Pages</h3>
              <p>Generic websites don&apos;t rank in specific cities. We build dedicated pages for each city and trade combination you want to dominate — fully optimized for local search intent.</p>
              <ul className="service-features">
                <li>Location-specific H1s, meta titles &amp; descriptions</li>
                <li>Unique body copy (no duplicate content)</li>
                <li>Embedded Google Maps &amp; local schema</li>
                <li>Internal linking to city clusters</li>
              </ul>
            </div>

            <div className="service-card">
              <h3>Local Citation Building</h3>
              <p>Your business name, address, and phone number (NAP) must be consistent across the web for Google to trust you. We build and clean up your presence across 80+ directories.</p>
              <ul className="service-features">
                <li>Yelp, Angi, Houzz, Thumbtack, HomeAdvisor, BBB</li>
                <li>Construction-specific directories &amp; associations</li>
                <li>NAP audit &amp; cleanup of duplicate/incorrect listings</li>
                <li>Ongoing citation monitoring</li>
              </ul>
            </div>

            <div className="service-card">
              <h3>On-Page SEO Optimization</h3>
              <p>Every page of your site is optimized so Google can read, understand, and rank it — from title tags to internal links to page speed.</p>
              <ul className="service-features">
                <li>Title tags, meta descriptions, header structure</li>
                <li>Image optimization &amp; alt text</li>
                <li>Core Web Vitals improvement</li>
                <li>Schema markup: LocalBusiness, Service, Review, FAQ</li>
              </ul>
            </div>

            <div className="service-card">
              <h3>Competitor Gap Analysis</h3>
              <p>We analyze exactly who outranks you, why they rank, and what it takes to surpass them. No guesswork — a clear roadmap based on real data.</p>
              <ul className="service-features">
                <li>Top 5 competitor keyword audit</li>
                <li>Backlink gap identification</li>
                <li>Content gap mapping</li>
                <li>Ranking velocity tracking</li>
              </ul>
            </div>

            <div className="service-card">
              <h3>Monthly Ranking Reports</h3>
              <p>Plain-English reports every month so you always know where you stand — no vanity metrics, just the numbers that mean new business.</p>
              <ul className="service-features">
                <li>Keyword ranking movement by city &amp; service</li>
                <li>Organic traffic &amp; lead trends</li>
                <li>Google Search Console insights</li>
                <li>Next-month priority actions</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* ===== WHY LOCAL SEO WORKS ===== */}
      <section style={{ background: '#F8FAFC', padding: '72px 0' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-label">Why It Matters</span>
            <h2>Bay Area Homeowners Search Before They Call</h2>
            <p>97% of consumers search online for local businesses. In the Bay Area — where projects are high-value and competition is fierce — ranking above your competitors isn&apos;t a nice-to-have. It&apos;s the difference between a full pipeline and waiting for referrals.</p>
          </div>

          <div className="benefits-grid">
            <div className="benefit-card">
              <span className="benefit-num">Organic Leads</span>
              <h3>Free Clicks After the Work Is Done</h3>
              <p>Unlike Angi or HomeAdvisor where you pay $50–$150 per lead forever, organic rankings compound. After 6–12 months, every click is free.</p>
            </div>
            <div className="benefit-card">
              <span className="benefit-num">High Intent</span>
              <h3>People Who Are Ready to Hire</h3>
              <p>&ldquo;Kitchen remodel contractor San Francisco&rdquo; is searched by someone ready to spend money — not browsing. Local SEO puts you in front of buyers, not browsers.</p>
            </div>
            <div className="benefit-card">
              <span className="benefit-num">24/7 Visibility</span>
              <h3>Your Best Salesperson Never Sleeps</h3>
              <p>Your Google listing and website work around the clock. Leads come in on weekends, evenings, and during your busiest job weeks.</p>
            </div>
            <div className="benefit-card">
              <span className="benefit-num">Local Authority</span>
              <h3>Become the Trusted Name in Your Area</h3>
              <p>When you rank #1 consistently, homeowners assume you&apos;re the best option before they even call. That&apos;s brand equity you can&apos;t buy with ads.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TIMELINE ===== */}
      <section style={{ padding: '72px 0' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-label">What to Expect</span>
            <h2>Realistic Timeline for Local SEO Results</h2>
            <p>We don&apos;t promise overnight rankings — we promise a system that builds lasting authority. Here&apos;s what the typical progression looks like.</p>
          </div>
          <div className="process-grid">
            <div className="process-card">
              <div className="process-num">Mo 1–2</div>
              <h3>Foundation Built</h3>
              <p>Keyword research complete, on-page optimizations applied, citations submitted, GBP aligned. Google begins indexing the improvements.</p>
            </div>
            <div className="process-card">
              <div className="process-num">Mo 3–4</div>
              <h3>Rankings Start Moving</h3>
              <p>Measurable ranking gains on mid-competition terms. Organic traffic uptick visible in Search Console. Early lead attribution possible.</p>
            </div>
            <div className="process-card">
              <div className="process-num">Mo 5–8</div>
              <h3>Competitive Page 1 Rankings</h3>
              <p>Top 3 positions for primary city + trade combinations. Consistent inbound call growth. Maps 3-Pack visibility for your most important keywords.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section id="contact" style={{ background: 'var(--navy)', color: '#fff', padding: '80px 0', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '640px' }}>
          <span className="section-label">Get Started</span>
          <h2 style={{ color: '#fff', margin: '12px 0 20px' }}>See Where Your Local SEO Stands Today</h2>
          <p style={{ color: '#CBD5E1', marginBottom: '32px', fontSize: '1.05rem' }}>
            We&apos;ll audit your current Google presence, show you who&apos;s outranking you, and map out exactly what it takes to reach #1 in your service area. Free, no commitment.
          </p>
          <a href="/free-seo-audit/" className="btn btn-primary" style={{ fontSize: '1rem', padding: '16px 36px' }}>
            Get My Free Local SEO Audit →
          </a>
          <p style={{ color: '#94A3B8', marginTop: '16px', fontSize: '0.9rem' }}>No contracts. No spam. Just honest data.</p>
        </div>
      </section>

    </main>
  )
}
