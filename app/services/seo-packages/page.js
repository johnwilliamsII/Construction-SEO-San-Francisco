export const metadata = {
  title: 'SEO Packages for Contractors | Construction SEO San Francisco',
  description: 'Monthly SEO packages built for Bay Area construction companies. Starter, Growth, and Pro tiers — all-inclusive, month-to-month, with no hidden fees.',
}

export default function SEOPackagesPage() {
  return (
    <main>

      {/* ===== HERO ===== */}
      <section style={{ background: 'var(--navy)', color: '#fff', padding: '80px 0 60px' }}>
        <div className="container" style={{ maxWidth: '720px' }}>
          <span className="section-label">Service</span>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', margin: '12px 0 20px', color: '#fff' }}>
            SEO Packages Built for Bay Area Contractors
          </h1>
          <p style={{ color: '#CBD5E1', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '32px' }}>
            Whether you&apos;re a specialty trade just starting to build your Google presence or an established GC ready
            to dominate every city in the Bay Area, there&apos;s a package built for your stage. All-inclusive monthly plans,
            no long-term contracts, no surprise invoices.
          </p>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <a href="/free-seo-audit/" className="btn btn-primary">Get a Free Audit First →</a>
          </div>
        </div>
      </section>

      {/* ===== PACKAGES ===== */}
      <section style={{ padding: '72px 0' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-label">Pricing</span>
            <h2>Three Tiers. One Focus: More Jobs.</h2>
            <p>Every package includes a free strategy call and audit before you commit. We&apos;ll tell you which tier fits your market and goals — honestly, even if it means recommending the lower tier.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginTop: '48px' }}>

            {/* Starter */}
            <div className="service-card" style={{ borderTop: '4px solid #CBD5E1' }}>
              <div style={{ marginBottom: '8px' }}>
                <span className="section-label" style={{ background: '#F1F5F9', color: '#475569' }}>Starter</span>
              </div>
              <h3 style={{ fontSize: '1.4rem', margin: '12px 0 4px' }}>$1,200 / month</h3>
              <p style={{ color: 'var(--gray)', marginBottom: '20px', fontSize: '0.9rem' }}>Best for new businesses and specialty trades entering Google search.</p>
              <ul className="service-features">
                <li>GBP setup, optimization &amp; monthly management</li>
                <li>On-page SEO audit &amp; fixes (up to 10 pages)</li>
                <li>Keyword research for 1 primary trade + 3 cities</li>
                <li>Local citation building (40 directories)</li>
                <li>2 city/service landing pages</li>
                <li>Monthly ranking report</li>
              </ul>
              <a href="/free-seo-audit/" className="service-card-cta" style={{ marginTop: '24px', display: 'block' }}>Start with a free audit →</a>
            </div>

            {/* Growth */}
            <div className="service-card" style={{ borderTop: '4px solid var(--yellow)', position: 'relative' }}>
              <div style={{ position: 'absolute', top: '-1px', right: '24px', background: 'var(--yellow)', color: '#fff', fontSize: '0.75rem', fontWeight: 700, padding: '4px 12px', borderRadius: '0 0 8px 8px', letterSpacing: '0.05em' }}>
                MOST POPULAR
              </div>
              <div style={{ marginBottom: '8px' }}>
                <span className="section-label">Growth</span>
              </div>
              <h3 style={{ fontSize: '1.4rem', margin: '12px 0 4px' }}>$1,800 / month</h3>
              <p style={{ color: 'var(--gray)', marginBottom: '20px', fontSize: '0.9rem' }}>For established contractors ready to dominate their primary market.</p>
              <ul className="service-features">
                <li>Everything in Starter, plus:</li>
                <li>Keyword research for 2 trades + all Bay Area cities you serve</li>
                <li>5 city/service landing pages per month</li>
                <li>Local citation building (80+ directories)</li>
                <li>4 Google Posts/month + photo strategy</li>
                <li>Link building (5 quality backlinks/month)</li>
                <li>Competitor gap analysis (quarterly)</li>
                <li>Google Analytics + Search Console dashboard</li>
              </ul>
              <a href="/free-seo-audit/" className="service-card-cta" style={{ marginTop: '24px', display: 'block' }}>Start with a free audit →</a>
            </div>

            {/* Pro */}
            <div className="service-card" style={{ borderTop: '4px solid #0D1B2A' }}>
              <div style={{ marginBottom: '8px' }}>
                <span className="section-label" style={{ background: '#F1F5F9', color: '#0D1B2A' }}>Pro</span>
              </div>
              <h3 style={{ fontSize: '1.4rem', margin: '12px 0 4px' }}>$2,500 / month</h3>
              <p style={{ color: 'var(--gray)', marginBottom: '20px', fontSize: '0.9rem' }}>For GCs and high-volume contractors who want to own the entire Bay Area.</p>
              <ul className="service-features">
                <li>Everything in Growth, plus:</li>
                <li>10 city/service landing pages per month</li>
                <li>AI Receptionist add-on included</li>
                <li>Blog content strategy + 2 posts/month</li>
                <li>Link building (10+ quality backlinks/month)</li>
                <li>Digital PR for 1 project feature per quarter</li>
                <li>Weekly ranking check-ins</li>
                <li>Dedicated account manager</li>
                <li>Priority support &amp; strategy calls</li>
              </ul>
              <a href="/free-seo-audit/" className="service-card-cta" style={{ marginTop: '24px', display: 'block' }}>Start with a free audit →</a>
            </div>

          </div>
        </div>
      </section>

      {/* ===== WHAT'S ALWAYS INCLUDED ===== */}
      <section style={{ background: '#F8FAFC', padding: '72px 0' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-label">In Every Package</span>
            <h2>The Things We Never Compromise On</h2>
            <p>Regardless of tier, every client gets the same commitment to quality, transparency, and real results.</p>
          </div>
          <div className="benefits-grid">
            <div className="benefit-card">
              <span className="benefit-num">No Lock-In</span>
              <h3>Month-to-Month Only</h3>
              <p>We don&apos;t believe in trapping clients in long contracts. If we&apos;re not delivering results, you should be free to walk. We stay accountable to performance.</p>
            </div>
            <div className="benefit-card">
              <span className="benefit-num">White-Hat Only</span>
              <h3>Zero Risky Tactics</h3>
              <p>No link farms. No keyword stuffing. No tricks that work for 3 months and then tank your rankings. Everything we do is Google-compliant and built to last.</p>
            </div>
            <div className="benefit-card">
              <span className="benefit-num">Monthly Reports</span>
              <h3>Plain-English Progress Updates</h3>
              <p>You&apos;ll always know exactly where your rankings stand, what traffic you&apos;re getting, and what we&apos;re working on next. No jargon, no fluff.</p>
            </div>
            <div className="benefit-card">
              <span className="benefit-num">Free Audit First</span>
              <h3>We Recommend the Right Fit</h3>
              <p>We&apos;ll never upsell you into a package you don&apos;t need. The audit tells us what your market requires — and we recommend accordingly, even if that&apos;s a smaller plan.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section style={{ padding: '72px 0' }}>
        <div className="container" style={{ maxWidth: '720px' }}>
          <div className="section-header">
            <span className="section-label">Common Questions</span>
            <h2>Pricing FAQs</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {[
              {
                q: 'Do I need to sign a contract?',
                a: 'No. All packages are month-to-month. We ask for 30 days notice to cancel so we can wrap up ongoing work cleanly — but there are no lock-in periods or cancellation fees.'
              },
              {
                q: 'When will I see results?',
                a: 'Most clients see measurable ranking movement in months 2–3. Competitive page 1 rankings for primary keywords typically happen between months 4–8, depending on your market and current starting point.'
              },
              {
                q: 'Are the prices fixed or customized?',
                a: 'The tiers above are our starting points. For contractors with multiple locations, multi-trade businesses, or very competitive markets, we may scope a custom plan. We\'ll always be upfront about what&apos;s included.'
              },
              {
                q: 'What if I want to start small and upgrade?',
                a: 'Absolutely. Many clients start on Starter, see results, and upgrade to Growth or Pro as their business grows. There\'s no penalty to upgrade or change plans.'
              },
            ].map(({ q, a }) => (
              <div key={q} style={{ borderBottom: '1px solid #E2E8F0', paddingBottom: '24px' }}>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '8px' }}>{q}</h3>
                <p style={{ color: 'var(--gray)', margin: 0 }}>{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section id="contact" style={{ background: 'var(--navy)', color: '#fff', padding: '80px 0', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '640px' }}>
          <span className="section-label">Get Started</span>
          <h2 style={{ color: '#fff', margin: '12px 0 20px' }}>Not Sure Which Package? Start With a Free Audit.</h2>
          <p style={{ color: '#CBD5E1', marginBottom: '32px', fontSize: '1.05rem' }}>
            We&apos;ll analyze your current Google presence, your competitors, and your target markets — then tell you exactly which package makes sense. No pressure, no commitment.
          </p>
          <a href="/free-seo-audit/" className="btn btn-primary" style={{ fontSize: '1rem', padding: '16px 36px' }}>
            Get My Free SEO Audit →
          </a>
          <p style={{ color: '#94A3B8', marginTop: '16px', fontSize: '0.9rem' }}>No contracts. No spam. Just honest data.</p>
        </div>
      </section>

    </main>
  )
}
