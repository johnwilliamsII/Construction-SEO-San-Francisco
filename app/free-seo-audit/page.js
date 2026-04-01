export const metadata = {
  title: 'Free SEO Audit for Bay Area Contractors | Construction SEO San Francisco',
  description: 'Get a free, no-obligation SEO audit for your construction company. See exactly where your Google rankings stand, who outranks you, and what it takes to reach #1.',
}

export default function FreeAuditPage() {
  return (
    <main>

      {/* ===== HERO ===== */}
      <section style={{ background: 'var(--navy)', color: '#fff', padding: '80px 0 60px' }}>
        <div className="container" style={{ maxWidth: '680px', textAlign: 'center' }}>
          <span className="section-label">Free Offer</span>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', margin: '12px 0 20px', color: '#fff' }}>
            Your Free Bay Area Construction SEO Audit
          </h1>
          <p style={{ color: '#CBD5E1', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '32px' }}>
            In 20 minutes, we&apos;ll show you exactly where your Google rankings stand, who&apos;s beating you and why,
            and what a clear path to #1 looks like for your business. No fluff, no pitch — just honest data.
          </p>
          <a href="mailto:hello@constructionseo.sf?subject=Free SEO Audit Request" className="btn btn-primary" style={{ fontSize: '1rem', padding: '16px 36px' }}>
            Request My Free Audit →
          </a>
          <p style={{ color: '#94A3B8', marginTop: '16px', fontSize: '0.9rem' }}>No commitment. No spam. Responses within 1 business day.</p>
        </div>
      </section>

      {/* ===== WHAT YOU GET ===== */}
      <section style={{ padding: '72px 0' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-label">What&apos;s Included</span>
            <h2>Four Things Your Free Audit Covers</h2>
            <p>We don&apos;t run your domain through a generic tool and hand you a 40-page PDF. This is a manual audit by someone who knows Bay Area construction SEO.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px', marginTop: '48px' }}>

            <div className="process-card">
              <div className="process-num">01</div>
              <h3>Current Ranking Snapshot</h3>
              <p>We check where you currently rank for your most important keywords — your trade + your cities. You&apos;ll see your exact position for 10–15 target terms right now.</p>
            </div>

            <div className="process-card">
              <div className="process-num">02</div>
              <h3>Competitor Analysis</h3>
              <p>We identify the 3–5 contractors outranking you, show you why they rank (backlinks, content, GBP strength), and map the gap between where you are and where they are.</p>
            </div>

            <div className="process-card">
              <div className="process-num">03</div>
              <h3>GBP Health Check</h3>
              <p>We audit your Google Business Profile against the top-ranking competitors in your area — categories, reviews, photo count, post frequency, and completeness score.</p>
            </div>

            <div className="process-card">
              <div className="process-num">04</div>
              <h3>Top 3 Priority Fixes</h3>
              <p>We don&apos;t just show you problems — we tell you the 3 highest-impact actions you can take right now, whether you work with us or not. Honest, actionable, specific.</p>
            </div>

          </div>
        </div>
      </section>

      {/* ===== WHO IT'S FOR ===== */}
      <section style={{ background: '#F8FAFC', padding: '60px 0' }}>
        <div className="container" style={{ maxWidth: '680px' }}>
          <div className="section-header">
            <span className="section-label">Who This Is For</span>
            <h2>This Audit Is a Fit If You&apos;re a Bay Area Contractor Who:</h2>
          </div>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '32px' }}>
            {[
              "Isn't showing up on the first page of Google for your trade + city",
              "Has a Google Business Profile that isn't generating calls",
              "Is spending money on Angi or HomeAdvisor and wants to reduce that dependency",
              "Recently launched a website and isn't sure how to get it ranking",
              "Has done SEO before but didn't see results and wants to understand why",
              "Wants to expand into new Bay Area cities and service areas",
            ].map((item) => (
              <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '1.05rem' }}>
                <span style={{ color: 'var(--yellow)', fontWeight: 700, flexShrink: 0, marginTop: '2px' }}>✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section id="contact" style={{ background: 'var(--navy)', color: '#fff', padding: '80px 0', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '580px' }}>
          <span className="section-label">Get Your Audit</span>
          <h2 style={{ color: '#fff', margin: '12px 0 16px' }}>Ready to See Where You Stand?</h2>
          <p style={{ color: '#CBD5E1', marginBottom: '12px' }}>
            Email us with your business name, website (if you have one), and the city + trade you most want to rank for.
            We&apos;ll send your audit within 1 business day.
          </p>
          <p style={{ color: '#94A3B8', marginBottom: '32px', fontSize: '0.95rem' }}>
            Or if you&apos;d prefer to talk through it live, just say so — we&apos;re happy to walk through the audit on a quick call.
          </p>
          <a
            href="mailto:hello@constructionseo.sf?subject=Free SEO Audit Request"
            className="btn btn-primary"
            style={{ fontSize: '1rem', padding: '16px 36px' }}
          >
            Email Us for Your Free Audit →
          </a>
          <p style={{ color: '#94A3B8', marginTop: '16px', fontSize: '0.85rem' }}>
            hello@constructionseo.sf &nbsp;|&nbsp; No commitment. No spam.
          </p>
        </div>
      </section>

    </main>
  )
}
