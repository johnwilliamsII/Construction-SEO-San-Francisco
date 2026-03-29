import FaqAccordion from '../components/FaqAccordion'

export default function Home() {
  return (
    <>
      {/* ===== NAV ===== */}
      <nav aria-label="Main navigation">
        <div className="container nav-inner">
          <a href="#" className="nav-logo">
            Construction<span>SEO</span>.sf
          </a>
          <ul className="nav-links">
            <li><a href="#services">Services</a></li>
            <li><a href="#benefits">Why Us</a></li>
            <li><a href="#testimonials">Results</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
          <a href="#cta-band" className="btn btn-primary nav-cta">
            Get a Free Audit
          </a>
        </div>
      </nav>

      {/* ===== HERO ===== */}
      <section id="hero" aria-labelledby="hero-heading">
        <div className="container hero-grid">

          <div className="hero-text">
            <div className="hero-eyebrow">Bay Area Construction SEO Specialists</div>
            <h1 id="hero-heading">
              Rank <em>#1 on Google</em> and Fill Your Pipeline With Bay Area Jobs
            </h1>
            <p>
              We help San Francisco contractors, GCs, and specialty trade companies dominate
              local search — more calls, more bids, more revenue. No bloated retainers. No guessing.
            </p>
            <div className="hero-actions">
              <a href="#cta-band" className="btn btn-primary">Get Your Free SEO Audit</a>
              <a href="#services" className="btn btn-outline">See How It Works</a>
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
            <div className="hero-card-title">Live Ranking Results — SF Bay Area</div>
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
            <h2 id="services-heading">SEO Built for Bay Area Contractors</h2>
            <p>Two focused services that move the needle — local map rankings and site-wide organic growth.</p>
          </div>

          <div className="services-grid">

            <article className="service-card">
              <div className="service-icon">📍</div>
              <h3>Local SEO for Construction Companies</h3>
              <p>
                Capture homeowners and project managers who are searching &ldquo;contractor near me&rdquo; right now.
                We optimize every local signal so your business appears at the top of San Francisco and
                Bay Area search results.
              </p>
              <ul className="service-features">
                <li>Hyper-local keyword research (SF neighborhoods, cities, zip codes)</li>
                <li>On-page SEO for city &amp; service landing pages</li>
                <li>Local citation building &amp; NAP consistency across 80+ directories</li>
                <li>Competitor gap analysis — see exactly who outranks you and why</li>
                <li>Schema markup for contractors (LocalBusiness, Service, Review)</li>
                <li>Monthly ranking reports with plain-English explanations</li>
              </ul>
              <a href="#cta-band" className="service-card-cta">Start ranking locally →</a>
            </article>

            <article className="service-card">
              <div className="service-icon">🗺️</div>
              <h3>Google Business Profile (GBP) Optimization</h3>
              <p>
                The Google Maps &ldquo;3-Pack&rdquo; gets 44% of all clicks for local searches. We fully optimize
                and actively manage your GBP so you own that prime real estate for every high-value
                construction keyword.
              </p>
              <ul className="service-features">
                <li>Complete GBP setup, verification &amp; category optimization</li>
                <li>Keyword-rich service descriptions and Q&amp;A population</li>
                <li>Weekly Google Posts (offers, projects, news)</li>
                <li>Photo strategy — before/afters, job sites, team photos</li>
                <li>Review acquisition system + response management</li>
                <li>GBP insights reporting — calls, directions, website clicks</li>
              </ul>
              <a href="#cta-band" className="service-card-cta">Dominate Google Maps →</a>
            </article>

          </div>
        </div>
      </section>

      {/* ===== BENEFITS ===== */}
      <section id="benefits" aria-labelledby="benefits-heading">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Why Construction SEO SF</span>
            <h2 id="benefits-heading">
              We Only Work With Contractors.<br />That Makes All the Difference.
            </h2>
            <p>
              Generic SEO agencies don&apos;t understand construction. We&apos;ve spent years studying how
              Bay Area homeowners and project managers search for contractors.
            </p>
          </div>

          <div className="benefits-grid">
            <div className="benefit-card">
              <span className="benefit-num">01</span>
              <h3>Industry-Specific Keywords</h3>
              <p>
                We know the difference between &ldquo;general contractor,&rdquo; &ldquo;GC,&rdquo; &ldquo;remodeling contractor,&rdquo;
                and &ldquo;design-build firm&rdquo; — and exactly which terms Bay Area buyers use at each stage
                of their search.
              </p>
            </div>
            <div className="benefit-card">
              <span className="benefit-num">02</span>
              <h3>SF Bay Area Market Knowledge</h3>
              <p>
                The Bay Area is one of the most competitive local markets in the country. We know which
                neighborhoods, cities, and zip codes drive the highest-value projects — and we target them.
              </p>
            </div>
            <div className="benefit-card">
              <span className="benefit-num">03</span>
              <h3>Lead Quality Over Vanity Metrics</h3>
              <p>
                We don&apos;t brag about clicks. We optimize for phone calls, contact form submissions, and
                Google Maps direction requests — the signals that actually mean new business for you.
              </p>
            </div>
            <div className="benefit-card">
              <span className="benefit-num">04</span>
              <h3>No Long-Term Lock-In</h3>
              <p>
                Results earn our continued business — not contracts. Month-to-month engagements mean we
                stay accountable to performance, not paperwork.
              </p>
            </div>
            <div className="benefit-card">
              <span className="benefit-num">05</span>
              <h3>Transparent Monthly Reporting</h3>
              <p>
                Every month you get a clear report: rankings moved, traffic gained, leads generated.
                We connect Google Analytics, Search Console, and GBP Insights into one clean dashboard.
              </p>
            </div>
            <div className="benefit-card">
              <span className="benefit-num">06</span>
              <h3>Built on Google&apos;s Own Guidelines</h3>
              <p>
                No shady link schemes. No keyword stuffing. 100% white-hat strategies that build rankings
                that last — not ones that vanish the next time Google updates its algorithm.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section id="testimonials" aria-labelledby="testi-heading">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Client Results</span>
            <h2 id="testi-heading">Bay Area Contractors Love the Results</h2>
            <p>Real feedback from construction businesses we&apos;ve helped rank and grow across the Bay Area.</p>
          </div>

          <div className="testimonials-grid">

            <article className="testi-card">
              <div className="stars">★★★★★</div>
              <p className="testi-body">
                &ldquo;Within 4 months we went from page 3 to the #1 spot for &lsquo;general contractor San
                Francisco.&rsquo; Our inbound calls doubled. The team knows construction — they actually
                talk our language.&rdquo;
              </p>
              <div className="testi-author">
                <div className="testi-avatar">JM</div>
                <div>
                  <div className="testi-name">James Moreno</div>
                  <div className="testi-role">Owner, Moreno Construction Co. — San Francisco</div>
                </div>
              </div>
            </article>

            <article className="testi-card">
              <div className="stars">★★★★★</div>
              <p className="testi-body">
                &ldquo;We had zero Google presence before. Now we&apos;re in the Maps 3-Pack for &lsquo;kitchen remodel
                Oakland&rsquo; and &lsquo;bathroom remodel East Bay.&rsquo; We&apos;re booked out 3 months ahead.&rdquo;
              </p>
              <div className="testi-author">
                <div className="testi-avatar">RT</div>
                <div>
                  <div className="testi-name">Rachel Torres</div>
                  <div className="testi-role">Co-Owner, Bay Craft Remodeling — Oakland</div>
                </div>
              </div>
            </article>

            <article className="testi-card">
              <div className="stars">★★★★★</div>
              <p className="testi-body">
                &ldquo;As a specialty roofing company in a market full of Angi and HomeAdvisor ads, I was
                skeptical. Six months later our GBP gets 200+ monthly calls and our cost per lead
                dropped by 60%.&rdquo;
              </p>
              <div className="testi-author">
                <div className="testi-avatar">SK</div>
                <div>
                  <div className="testi-name">Steve Kim</div>
                  <div className="testi-role">Owner, Peninsula Roofing — San Mateo</div>
                </div>
              </div>
            </article>

          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section id="faq" aria-labelledby="faq-heading">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Common Questions</span>
            <h2 id="faq-heading">FAQ for Bay Area Contractors</h2>
            <p>Straight answers to the questions we get most often from construction business owners.</p>
          </div>
          <FaqAccordion />
        </div>
      </section>

      {/* ===== CTA BAND ===== */}
      <section id="cta-band" aria-labelledby="cta-heading">
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="section-label" style={{ color: 'var(--navy-mid)' }}>
            Limited Spots Available
          </span>
          <h2 id="cta-heading">
            Ready to Own Page 1 for Bay Area Construction Searches?
          </h2>
          <p>
            Get a free, no-obligation SEO audit of your current online presence. We&apos;ll show you
            exactly where you stand, who&apos;s outranking you, and what it takes to get to #1.
          </p>
          <a
            href="mailto:hello@constructionseo.sf"
            className="btn btn-dark"
          >
            Get My Free SEO Audit →
          </a>
          <p style={{ marginTop: '16px', fontSize: '.85rem', color: 'rgba(13,27,42,.55)' }}>
            No commitment. No spam. Just honest answers about your Google rankings.
          </p>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer>
        <div className="container">
          <p>
            &copy; 2026 Construction SEO San Francisco &nbsp;|&nbsp;
            Serving: SF, Oakland, San Jose, Marin, Peninsula, East Bay, South Bay
            &nbsp;|&nbsp;
            <a href="mailto:hello@constructionseo.sf">hello@constructionseo.sf</a>
          </p>
        </div>
      </footer>
    </>
  )
}
