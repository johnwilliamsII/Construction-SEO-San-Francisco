import FaqAccordion from '../components/FaqAccordion'

export default function Home() {
  return (
    <main>

      {/* ===== HERO ===== */}
      <section id="hero" aria-labelledby="hero-heading">
        <div className="container hero-grid">

          <div className="hero-text">
            <span className="section-label">Bay Area Construction SEO</span>
            <h1 id="hero-heading">
              Rank <em>#1 on Google</em> and Fill Your Pipeline With Bay Area Jobs
            </h1>
            <p>
              We help San Francisco contractors, GCs, and specialty trades dominate local
              search — more calls, more bids, more booked work. No bloated retainers. No guessing.
            </p>
            <div className="hero-actions">
              <a href="#contact" className="btn btn-primary">Get Your Free SEO Audit</a>
              <a href="#services" className="btn btn-outline-dark">See How It Works</a>
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

          </div>
        </div>
      </section>

      {/* ===== BENEFITS ===== */}
      <section id="benefits" aria-labelledby="benefits-heading">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Why Choose Us</span>
            <h2 id="benefits-heading">We Only Work With Contractors. <em>That Makes All the Difference.</em></h2>
            <p>
              Generic SEO agencies don&apos;t understand construction. We&apos;ve spent years studying how
              Bay Area homeowners and project managers search for contractors.
            </p>
          </div>

          <div className="benefits-grid">
            <div className="benefit-card">
              <span className="benefit-num">Industry Keywords</span>
              <h3>We Know How Buyers Search</h3>
              <p>
                We know the difference between &ldquo;GC,&rdquo; &ldquo;remodeling contractor,&rdquo; and &ldquo;design-build firm&rdquo; — and exactly which terms Bay Area buyers use at each stage of their search.
              </p>
            </div>
            <div className="benefit-card">
              <span className="benefit-num">Bay Area Market</span>
              <h3>One of the Most Competitive Markets in the US</h3>
              <p>
                We know which SF neighborhoods, East Bay cities, and Peninsula zip codes drive the highest-value projects — and we target them precisely.
              </p>
            </div>
            <div className="benefit-card">
              <span className="benefit-num">Lead Quality</span>
              <h3>We Optimize for Calls, Not Just Clicks</h3>
              <p>
                We track phone calls, contact form submissions, and Google Maps direction requests — the signals that actually mean new business, not vanity metrics.
              </p>
            </div>
            <div className="benefit-card">
              <span className="benefit-num">No Lock-In</span>
              <h3>Month-to-Month Engagements</h3>
              <p>
                Results earn our continued business — not contracts. We stay accountable to performance, not paperwork.
              </p>
            </div>
            <div className="benefit-card">
              <span className="benefit-num">Reporting</span>
              <h3>Clear Monthly Reports</h3>
              <p>
                Rankings moved, traffic gained, leads generated. Google Analytics, Search Console, and GBP Insights in one clean dashboard every month.
              </p>
            </div>
            <div className="benefit-card">
              <span className="benefit-num">White-Hat Only</span>
              <h3>Built to Last Through Algorithm Updates</h3>
              <p>
                No shady link schemes. No keyword stuffing. 100% Google-compliant strategies that compound over time instead of collapsing on the next update.
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
                &ldquo;Within 4 months we went from page 3 to the #1 spot for &lsquo;general contractor San Francisco.&rsquo; Our inbound calls doubled. The team knows construction — they actually talk our language.&rdquo;
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
                &ldquo;We had zero Google presence before. Now we&apos;re in the Maps 3-Pack for &lsquo;kitchen remodel Oakland&rsquo; and &lsquo;bathroom remodel East Bay.&rsquo; Booked out 3 months ahead.&rdquo;
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
                &ldquo;As a specialty roofing company competing with Angi and HomeAdvisor, I was skeptical. Six months later our GBP gets 200+ monthly calls and our cost per lead dropped 60%.&rdquo;
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
            <p>Straight answers to the questions we get most from construction business owners.</p>
          </div>
          <FaqAccordion />
        </div>
      </section>

      {/* ===== CONTACT / CTA ===== */}
      <section id="contact" aria-labelledby="contact-heading">
        <div className="container">
          <span className="section-label">Limited Spots Available</span>
          <h2 id="contact-heading">
            Ready to Own Page 1 for <em>Bay Area Construction</em> Searches?
          </h2>
          <p>
            Get a free, no-obligation SEO audit of your current online presence. We&apos;ll show you
            exactly where you stand, who&apos;s outranking you, and what it takes to get to #1.
          </p>
          <a href="mailto:hello@constructionseo.sf" className="btn btn-primary" style={{ fontSize: '1rem', padding: '16px 36px' }}>
            Get My Free SEO Audit →
          </a>
          <p className="contact-sub">No commitment. No spam. Just honest answers about your Google rankings.</p>
        </div>
      </section>

    </main>
  )
}
