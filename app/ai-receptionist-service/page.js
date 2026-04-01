import Section from '../../components/layout/Section'
import SectionHeading from '../../components/sections/SectionHeading'
import StatCard from '../../components/sections/StatCard'
import TestimonialCard from '../../components/sections/TestimonialCard'
import CtaBanner from '../../components/sections/CtaBanner'
import FaqAccordion from '../../components/sections/FaqAccordion'

export const metadata = {
  title: 'AI Receptionist for Contractors | contractorseosanfrancisco.com',
  description:
    'Never miss a lead again. Our AI receptionist answers calls 24/7, qualifies prospects, and books appointments directly to your calendar — even when you\'re on a job site.',
}

const FEATURES = [
  {
    icon: '📞',
    title: '24/7 Call Answering',
    body: 'Every call gets answered — at 2pm or 2am. No voicemail. No "we\'ll call you back." A live AI trained on your services greets every caller immediately.',
  },
  {
    icon: '✅',
    title: 'Lead Qualification',
    body: 'The AI asks the right questions — project type, timeline, budget range, location — so you only spend time on qualified leads, not tire-kickers.',
  },
  {
    icon: '📅',
    title: 'Appointment Booking',
    body: 'Qualified leads get booked directly to your calendar. No back-and-forth. No phone tag. The job is on your schedule before you ever pick up the phone.',
  },
  {
    icon: '💬',
    title: 'SMS Follow-Up',
    body: 'Callers who hang up before qualifying get an automatic SMS follow-up sequence — capturing leads that would have been lost to voicemail.',
  },
  {
    icon: '🔔',
    title: 'Instant Lead Notifications',
    body: 'You get a text and email the moment a new lead is qualified and booked — with the full call summary, project details, and contact info.',
  },
  {
    icon: '📊',
    title: 'CRM Integration & Tracking',
    body: 'Every call, qualification, and booking syncs to your CRM. Full visibility into lead volume, conversion rates, and missed call recovery over time.',
  },
]

const STATS = [
  { value: '24/7',  label: 'Call Coverage',        detail: 'Including nights and weekends' },
  { value: '–40%',  label: 'Missed Lead Rate',      detail: 'Vs. voicemail-only contractors' },
  { value: '2×',    label: 'Lead-to-Booking Rate',  detail: 'Immediate response vs. callback' },
  { value: '< 2s',  label: 'Answer Time',           detail: 'Faster than any human can pick up' },
]

const STEPS = [
  {
    num: '01',
    title: 'We Train It on Your Business',
    body: 'We configure the AI with your services, pricing ranges, service area, booking process, and any FAQs. It sounds like YOUR business, not a generic call center.',
  },
  {
    num: '02',
    title: 'Forward Your Calls (or Use a Dedicated Number)',
    body: 'You can forward your existing business line or use a dedicated number we provision. Setup takes one day.',
  },
  {
    num: '03',
    title: 'Leads Get Qualified and Booked',
    body: 'Callers get answers, qualified leads get booked, and everyone else gets a callback scheduled. You get the summary.',
  },
  {
    num: '04',
    title: 'You Only Talk to Ready-to-Hire Prospects',
    body: 'By the time a lead reaches you, they\'ve been qualified, informed about your process, and have an appointment confirmed. Your close rate goes up.',
  },
]

const TESTIMONIALS = [
  {
    quote: "We were losing leads every weekend because nobody answered. Now the AI catches every call Saturday and Sunday. It booked 4 qualified appointments last weekend while I was on a job.",
    name: 'Marcus Webb',
    role: 'Owner, Webb General Contracting — San Francisco',
    initials: 'MW',
    stars: 5,
  },
  {
    quote: "The qualification is the game-changer. I used to spend 20 minutes on every call just figuring out if someone was serious. Now I only talk to people who are ready to move forward.",
    name: 'Steve Kim',
    role: 'Owner, Peninsula Roofing — San Mateo',
    initials: 'SK',
    stars: 5,
  },
]

const FAQ_ITEMS = [
  {
    question: "Will callers know they're talking to an AI?",
    answer: "Callers experience a natural, helpful interaction trained specifically on your business. They know they\'re speaking with a receptionist for your company. The AI doesn\'t claim to be human — it operates as a professional virtual assistant representing your brand.",
  },
  {
    question: 'What types of calls does it handle?',
    answer: 'New lead inquiries, existing customer questions, appointment rescheduling, basic service and pricing inquiries, and emergency service triage (routing urgent calls appropriately). Complex technical questions get escalated to you with a full call summary.',
  },
  {
    question: 'Is it compatible with my existing phone number?',
    answer: 'Yes. You can forward your existing business line to the AI when you\'re unavailable, or use it as a full-time receptionist on a dedicated number. Most contractors set up full-time forwarding so every call gets answered, then receive a summary of all calls daily.',
  },
  {
    question: 'Can I use this standalone or does it need to be with an SEO package?',
    answer: 'It\'s available standalone or as an add-on to any SEO package. Many contractors use it alongside our SEO packages because the combination is highly effective: SEO brings more calls, the AI captures every one of them.',
  },
  {
    question: 'How quickly can it be set up?',
    answer: 'We can have a fully trained AI receptionist live within 24–48 hours of completing your onboarding form. We collect information about your services, process, and common questions — then configure and test before going live.',
  },
]

export default function AIReceptionistPage() {
  return (
    <>
      {/* ── Dark Hero ── */}
      <section
        aria-labelledby="ai-hero-heading"
        style={{
          background:  'linear-gradient(160deg, #16192A 0%, #1A2240 55%, #1C1F32 100%)',
          position:    'relative',
          overflow:    'hidden',
          padding:     'clamp(4rem, 8vw, 6.5rem) 0 clamp(3rem, 6vw, 5rem)',
        }}
      >
        <div aria-hidden="true" style={{ position: 'absolute', top: '-80px', right: '-80px', width: '450px', height: '450px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(232,97,26,0.15) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div aria-hidden="true" style={{ position: 'absolute', bottom: '-60px', left: '-60px', width: '300px', height: '300px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: '700px' }}>
            <span style={{
              display: 'inline-flex', alignItems: 'center',
              padding: '5px 16px', borderRadius: '9999px',
              background: 'rgba(232,97,26,0.15)', border: '1px solid rgba(232,97,26,0.30)',
              color: '#F4875A', fontSize: '0.72rem', fontWeight: 700,
              letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.25rem',
            }}>
              AI Receptionist for Contractors
            </span>

            <h1 id="ai-hero-heading" style={{
              fontSize: 'clamp(2rem, 4.5vw, 3.2rem)',
              color: '#FFFFFF',
              fontFamily: 'var(--font-manrope)',
              fontWeight: 800,
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
              marginBottom: '1rem',
            }}>
              Never Miss a Lead Again.{' '}
              <em style={{ color: 'var(--accent)', fontStyle: 'italic' }}>Every Call Answered. Every Lead Captured.</em>
            </h1>

            <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.60)', lineHeight: 'var(--leading-relaxed)', maxWidth: '560px', marginBottom: '2rem' }}>
              You&rsquo;re on a job site. A homeowner calls. They don&rsquo;t leave a voicemail — they just call your competitor next. Our AI receptionist answers 24/7, qualifies the lead, and books the appointment. You find out when it&rsquo;s done.
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="/free-seo-audit/" className="btn btn-primary">Get Started — Free Consult</a>
              <a href="/seo-packages-for-contractors/" style={{
                display: 'inline-flex', alignItems: 'center', padding: '13px 24px',
                borderRadius: 'var(--radius-md)', border: '1.5px solid rgba(255,255,255,0.25)',
                color: 'rgba(255,255,255,0.80)', fontSize: 'var(--text-sm)',
                fontWeight: 600, textDecoration: 'none', background: 'transparent',
              }}>
                View Packages
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <Section variant="subtle" size="sm">
        <div className="grid-4">
          {STATS.map((s) => <StatCard key={s.label} {...s} />)}
        </div>
      </Section>

      {/* ── Features ── */}
      <Section variant="white" aria-labelledby="ai-features-heading">
        <SectionHeading
          label="What It Does"
          heading={<>Six Ways Your AI Receptionist <em>Captures Every Lead</em></>}
          body="Trained on your specific services, process, and market — it handles every call like a seasoned front-desk professional."
          id="ai-features-heading"
        />
        <div className="grid-3" style={{ marginTop: '2.5rem' }}>
          {FEATURES.map((f) => (
            <div key={f.title} className="glass-card glass-highlight">
              <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{f.icon}</div>
              <h3 style={{ fontSize: '1.05rem', marginBottom: '0.5rem' }}>{f.title}</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 'var(--leading-relaxed)', margin: 0 }}>{f.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── How It Works ── */}
      <Section variant="subtle" aria-labelledby="ai-process-heading">
        <SectionHeading
          label="Setup Process"
          heading={<>Live in <em>24–48 Hours</em></>}
          body="Four simple steps from signup to your AI receptionist answering calls."
          id="ai-process-heading"
        />
        <div className="process-grid" style={{ marginTop: '2.5rem' }}>
          {STEPS.map((step) => (
            <div key={step.num} className="process-card">
              <div className="process-num">{step.num}</div>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── The math ── */}
      <Section variant="white" aria-labelledby="ai-math-heading">
        <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
          <span className="section-label">The Numbers</span>
          <h2 id="ai-math-heading" style={{ marginBottom: '1.25rem' }}>
            How Many Leads Are You Losing <em>Right Now?</em>
          </h2>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 'var(--leading-relaxed)', marginBottom: '2rem' }}>
            The average contractor misses 40% of inbound calls during business hours and nearly all calls after hours. In a Bay Area market where an average project is worth $15K–$80K, a single missed lead can cost more than months of receptionist fees.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
            {[
              { stat: '40%', desc: 'of contractor calls go to voicemail or unanswered' },
              { stat: '78%', desc: 'of buyers call the first business that responds' },
              { stat: '5×',  desc: 'higher contact rate when responding in under 1 minute' },
            ].map((item) => (
              <div key={item.stat} className="glass-card" style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--accent)', fontFamily: 'var(--font-manrope)', marginBottom: '0.5rem' }}>{item.stat}</div>
                <p style={{ fontSize: '0.83rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.5 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── Testimonials ── */}
      <Section variant="subtle" aria-labelledby="ai-testi-heading">
        <SectionHeading label="What Clients Say" heading={<>Contractors Who <em>Stopped Missing Leads</em></>} id="ai-testi-heading" />
        <div className="testimonials-grid" style={{ marginTop: '2.5rem' }}>
          {TESTIMONIALS.map((t) => <TestimonialCard key={t.name} {...t} />)}
        </div>
      </Section>

      {/* ── FAQ ── */}
      <Section variant="white" aria-labelledby="ai-faq-heading">
        <SectionHeading label="Questions" heading="AI Receptionist FAQs" id="ai-faq-heading" />
        <div style={{ marginTop: '2rem' }}>
          <FaqAccordion items={FAQ_ITEMS} />
        </div>
      </Section>

      <CtaBanner
        label="Never Miss Another Lead"
        heading={<>Get Your AI Receptionist <em>Live in 48 Hours</em></>}
        body="Start with a free consultation. We'll show you how many calls you're currently missing and configure your AI receptionist to capture every one of them."
        primaryCta={{ label: 'Get Started — Free Consult', href: '/free-seo-audit/' }}
        secondaryCta={{ label: 'View SEO Packages', href: '/seo-packages-for-contractors/' }}
        dark
      />
    </>
  )
}
