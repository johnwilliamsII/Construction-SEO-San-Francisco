export const metadata = {
  title: 'AI Receptionist for Contractors | Construction SEO San Francisco',
  description: 'Never miss a lead again. Our AI receptionist answers calls, qualifies prospects, and books estimates 24/7 — built specifically for Bay Area construction companies.',
  alternates: { canonical: 'https://www.contractorseobayarea.com/services/ai-receptionist/' },
}

export default function AIReceptionistPage() {
  return (
    <main>

      {/* ===== HERO ===== */}
      <section style={{ background: 'var(--navy)', color: '#fff', padding: '80px 0 60px' }}>
        <div className="container" style={{ maxWidth: '720px' }}>
          <span className="section-label">Service</span>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', margin: '12px 0 20px', color: '#fff' }}>
            AI Receptionist for Construction Companies
          </h1>
          <p style={{ color: '#CBD5E1', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '32px' }}>
            You worked hard to get your phone ringing — don&apos;t let calls go to voicemail. Our AI receptionist
            answers every call instantly, qualifies the lead, and books estimates directly to your calendar, 24/7.
            It&apos;s your best salesperson: always available, never tired, and trained specifically for construction industry conversations.
          </p>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <a href="/free-seo-audit/" className="btn btn-primary">See a Live Demo →</a>
            <a href="/services/seo-packages/" className="btn btn-outline-dark" style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.4)' }}>Included in Pro Package</a>
          </div>
        </div>
      </section>

      {/* ===== THE PROBLEM ===== */}
      <section style={{ padding: '72px 0', background: '#F8FAFC' }}>
        <div className="container" style={{ maxWidth: '720px' }}>
          <div className="section-header">
            <span className="section-label">The Problem</span>
            <h2>Most Contractor Calls Go Unanswered</h2>
            <p>You&apos;re on a job site. It&apos;s 7am or 7pm. A potential client calls about a kitchen remodel or a roof repair. The call goes to voicemail — and 80% of callers won&apos;t leave a message. They move on to the next contractor on Google.</p>
          </div>
          <div className="process-grid" style={{ marginTop: '40px' }}>
            <div className="process-card">
              <div className="process-num">80%</div>
              <h3>Won&apos;t Leave a Voicemail</h3>
              <p>When a lead hits voicemail, the majority hang up and call a competitor. Every missed call is a missed job.</p>
            </div>
            <div className="process-card">
              <div className="process-num">5 min</div>
              <h3>Response Time Matters</h3>
              <p>Leads contacted within 5 minutes of their call are 21× more likely to convert than those contacted after 30 minutes.</p>
            </div>
            <div className="process-card">
              <div className="process-num">24/7</div>
              <h3>When Buyers Search</h3>
              <p>Homeowners research and call contractors outside business hours — evenings, weekends, and early mornings when you&apos;re unavailable.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section style={{ padding: '72px 0' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-label">How It Works</span>
            <h2>Your AI Receptionist, Step by Step</h2>
            <p>Seamlessly integrated with your existing phone number and calendar — no new apps, no learning curve for your team.</p>
          </div>

          <div className="process-grid">
            <div className="process-card">
              <div className="process-num">01</div>
              <h3>Call Answered Instantly</h3>
              <p>When a lead calls your number, our AI picks up immediately — no hold music, no voicemail. It greets callers professionally with your business name and gets right to helping them.</p>
            </div>
            <div className="process-card">
              <div className="process-num">02</div>
              <h3>Lead Qualified Naturally</h3>
              <p>The AI conducts a natural conversation to understand the project type, location, timeline, and budget. It identifies serious buyers vs. price shoppers so you prioritize the best leads.</p>
            </div>
            <div className="process-card">
              <div className="process-num">03</div>
              <h3>Estimate Booked to Your Calendar</h3>
              <p>Qualified leads are offered available times directly from your calendar. They book the estimate during the call — no back-and-forth, no scheduling friction, just a confirmed appointment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FEATURES ===== */}
      <section style={{ padding: '0 0 72px' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-label">Features</span>
            <h2>Built Specifically for the Construction Industry</h2>
            <p>Generic AI call bots stumble on construction terminology and project scoping. Ours is trained on contractor-specific conversations, Bay Area market context, and construction industry scripts.</p>
          </div>

          <div className="services-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>

            <div className="service-card">
              <h3>24/7 Call Answering</h3>
              <p>Never miss a call — morning, evening, weekend, or holiday. Your AI receptionist is always on, even when you&apos;re on a job site, in a meeting, or asleep.</p>
              <ul className="service-features">
                <li>Instant pickup — no hold time</li>
                <li>Consistent, professional greeting every time</li>
                <li>Handles multiple simultaneous calls</li>
                <li>Overflow routing for high-volume periods</li>
              </ul>
            </div>

            <div className="service-card">
              <h3>Construction-Trained Scripts</h3>
              <p>The AI understands roofing, remodeling, plumbing, HVAC, electrical, ADU builds, and more — and asks the right qualifying questions for each trade.</p>
              <ul className="service-features">
                <li>Trade-specific conversation flows</li>
                <li>Project scoping questions (size, timeline, budget)</li>
                <li>Bay Area location qualification</li>
                <li>Custom questions based on your business rules</li>
              </ul>
            </div>

            <div className="service-card">
              <h3>Calendar Integration &amp; Booking</h3>
              <p>Direct integration with your Google Calendar, Calendly, or CRM so qualified leads can book estimates during the call — no manual scheduling required.</p>
              <ul className="service-features">
                <li>Google Calendar &amp; Calendly integration</li>
                <li>Real-time availability checking</li>
                <li>Automatic confirmation texts/emails to clients</li>
                <li>Reminder sequences before the appointment</li>
              </ul>
            </div>

            <div className="service-card">
              <h3>Instant SMS Follow-Up</h3>
              <p>Every caller receives an immediate text after the call — a thank you, a summary of what was discussed, and a link to confirm their booking or request more information.</p>
              <ul className="service-features">
                <li>Automated post-call SMS within 60 seconds</li>
                <li>Booking confirmation links</li>
                <li>Your branding and phone number in every text</li>
                <li>2-way SMS conversation capability</li>
              </ul>
            </div>

            <div className="service-card">
              <h3>Lead Summaries to Your Inbox</h3>
              <p>After every call, you receive a complete summary — who called, what project they need, their timeline and budget, and whether they booked an estimate. Stay informed without picking up the phone.</p>
              <ul className="service-features">
                <li>Real-time email notifications</li>
                <li>Call recording available (with disclosure)</li>
                <li>Lead scoring by project size &amp; readiness</li>
                <li>CRM push integration (optional)</li>
              </ul>
            </div>

            <div className="service-card">
              <h3>After-Hours &amp; Emergency Routing</h3>
              <p>For urgent situations — roof leaks, water damage, emergency repairs — the AI recognizes emergency keywords and can route to an on-call number or capture urgent contact details for immediate callback.</p>
              <ul className="service-features">
                <li>Emergency keyword detection</li>
                <li>On-call routing for urgent requests</li>
                <li>Priority flagging in lead summaries</li>
                <li>Customizable emergency escalation rules</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* ===== BENEFITS ===== */}
      <section style={{ background: '#F8FAFC', padding: '72px 0' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-label">Why It Matters</span>
            <h2>Turn Every Ranking into a Booked Estimate</h2>
            <p>SEO gets your phone ringing. The AI Receptionist makes sure every ring turns into a conversation — and every qualified conversation turns into a booked estimate.</p>
          </div>
          <div className="benefits-grid">
            <div className="benefit-card">
              <span className="benefit-num">More Bookings</span>
              <h3>Convert More of Your SEO Traffic</h3>
              <p>You&apos;re investing in SEO to drive calls. The AI ensures none of those hard-won leads fall through the cracks because you were unavailable.</p>
            </div>
            <div className="benefit-card">
              <span className="benefit-num">Lower Cost</span>
              <h3>Fraction of a Human Receptionist</h3>
              <p>A full-time receptionist costs $40,000–$55,000/year in the Bay Area. Our AI delivers better availability at a fraction of the cost — without sick days or turnover.</p>
            </div>
            <div className="benefit-card">
              <span className="benefit-num">Better Leads</span>
              <h3>Spend Time on Qualified Prospects Only</h3>
              <p>The AI screens out tire-kickers and out-of-area callers before they reach you. You only spend time on leads that match your project criteria.</p>
            </div>
            <div className="benefit-card">
              <span className="benefit-num">Competitive Edge</span>
              <h3>Win the Speed-to-Answer Race</h3>
              <p>While your competitors let calls go to voicemail, you answer instantly and book the estimate. In a competitive market, that alone wins more jobs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section id="contact" style={{ background: 'var(--navy)', color: '#fff', padding: '80px 0', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '640px' }}>
          <span className="section-label">Get Started</span>
          <h2 style={{ color: '#fff', margin: '12px 0 20px' }}>Stop Losing Jobs to Voicemail</h2>
          <p style={{ color: '#CBD5E1', marginBottom: '32px', fontSize: '1.05rem' }}>
            The AI Receptionist is included in our Pro SEO Package, or available as a standalone add-on.
            Schedule a free call and we&apos;ll show you a live demo tailored to your construction business.
          </p>
          <a href="/free-seo-audit/" className="btn btn-primary" style={{ fontSize: '1rem', padding: '16px 36px' }}>
            Book a Free Demo →
          </a>
          <p style={{ color: '#94A3B8', marginTop: '16px', fontSize: '0.9rem' }}>No setup fees. No long-term contracts. Cancel anytime.</p>
        </div>
      </section>

    </main>
  )
}
