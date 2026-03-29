'use client'
import { useState } from 'react'

const FAQS = [
  {
    q: 'How long does it take to rank on Google in the Bay Area?',
    a: 'Most clients see measurable movement in rankings within 60–90 days. Reaching page 1 for competitive terms like "general contractor San Francisco" typically takes 4–8 months of consistent work. GBP and Google Maps rankings often move faster — some clients see 3-Pack inclusion within 30–45 days for mid-competition keywords.',
  },
  {
    q: 'Do I need a website to benefit from SEO?',
    a: 'For GBP optimization you don\'t strictly need a website — your Google Business Profile can rank on its own. But a well-optimized website dramatically accelerates and broadens your rankings. If you don\'t have one yet, we can build a lean, fast, SEO-ready site as part of your engagement.',
  },
  {
    q: 'What types of construction companies do you work with?',
    a: 'General contractors, remodeling companies, specialty trades (roofing, plumbing, HVAC, electrical, flooring, painting), design-build firms, commercial construction companies, and home builders — any licensed contractor doing work in the SF Bay Area. We focus exclusively on construction so our strategies are battle-tested for your industry.',
  },
  {
    q: 'How is this different from Angi, HomeAdvisor, or Houzz?',
    a: 'Lead platforms charge you per lead — often $30–$150 per lead — and you\'re competing with 3–5 other contractors for the same job. SEO builds an asset you own: when someone Googles "remodel contractor SF" and finds you organically, that click is free. After the first 6–12 months, your cost per lead drops dramatically and keeps falling over time as rankings compound.',
  },
  {
    q: 'What does a monthly engagement cost?',
    a: 'Engagements are customized based on market competition, number of target keywords, and scope of services. We offer a free audit and strategy call first so you know exactly what\'s needed and what to expect before committing to anything. Most Bay Area contractor SEO programs start in the $1,200–$2,500/month range.',
  },
  {
    q: 'Can SEO help if I only work in specific Bay Area neighborhoods or cities?',
    a: 'Absolutely — and hyper-local targeting is one of our strengths. We build dedicated landing pages and optimize your GBP service area for every neighborhood or city you serve: Noe Valley, Pacific Heights, the Sunset District, Marin, Palo Alto, the Peninsula, East Bay, and more. Precise local targeting means you attract the exact jobs you want.',
  },
]

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(null)

  function toggle(i) {
    setOpenIndex(openIndex === i ? null : i)
  }

  return (
    <div className="faq-wrap">
      {FAQS.map((faq, i) => (
        <div key={i} className={`faq-item${openIndex === i ? ' open' : ''}`}>
          <button
            className="faq-q"
            aria-expanded={openIndex === i}
            onClick={() => toggle(i)}
          >
            {faq.q}
            <span className="faq-icon" aria-hidden="true">+</span>
          </button>
          {openIndex === i && (
            <div className="faq-answer">{faq.a}</div>
          )}
        </div>
      ))}
    </div>
  )
}
