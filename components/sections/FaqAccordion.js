'use client'

import { useState } from 'react'

/**
 * FaqAccordion — Accessible expand/collapse FAQ list.
 *
 * Props:
 *   items — array of { question: string, answer: string | JSX }
 *           If omitted, renders the default Construction SEO FAQ.
 *
 * Usage:
 *   <FaqAccordion />                         // default FAQ
 *   <FaqAccordion items={customFaqItems} />  // custom items
 */

const DEFAULT_ITEMS = [
  {
    question: 'How long does it take to rank on Google in the Bay Area?',
    answer:
      'Most clients see meaningful ranking improvements within 60–90 days and significant traffic growth within 4–6 months. Bay Area is competitive, but our hyper-local targeting gets results faster than generic national SEO approaches.',
  },
  {
    question: 'Do I need a website to benefit from SEO?',
    answer:
      'For Google Business Profile optimization, no — you can start getting local calls without a website. For full local SEO and content strategies, a website amplifies results significantly. We can work with what you have.',
  },
  {
    question: 'What types of construction companies do you work with?',
    answer:
      'General contractors, remodeling companies, roofing, plumbing, HVAC, electrical, kitchen & bath specialists, ADU builders, design-build firms, and specialty trades across the SF Bay Area.',
  },
  {
    question: 'How is this different from Angi, HomeAdvisor, or Houzz?',
    answer:
      'Angi and HomeAdvisor charge you per lead — often $50–$200 per contact — with no exclusivity. You compete with 5 other contractors for the same lead. SEO builds assets you own. Once you rank, leads are essentially free and go directly to you.',
  },
  {
    question: 'What does a monthly engagement cost?',
    answer:
      'Engagements range from $800–$2,500/month depending on service scope, competition in your niche, and target area. Every engagement starts with a free audit so you know exactly what you\'re investing in before spending a dollar.',
  },
  {
    question: 'Can SEO help if I only work in specific Bay Area neighborhoods or cities?',
    answer:
      'Absolutely — hyper-local targeting is one of our strengths. We build pages and citations specifically for the neighborhoods, cities, and zip codes you serve, so you attract exactly the right customers.',
  },
]

export default function FaqAccordion({ items }) {
  const faqItems = items || DEFAULT_ITEMS
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (i) => setOpenIndex(prev => prev === i ? null : i)

  return (
    <div className="faq-wrap">
      {faqItems.map((item, i) => {
        const isOpen = openIndex === i
        const itemId = `faq-item-${i}`
        const answerId = `faq-answer-${i}`

        return (
          <div
            key={i}
            className={`faq-item${isOpen ? ' open' : ''}`}
            id={itemId}
          >
            <button
              className="faq-q"
              onClick={() => toggle(i)}
              aria-expanded={isOpen}
              aria-controls={answerId}
              id={`faq-trigger-${i}`}
            >
              <span>{item.question}</span>
              <span className="faq-icon" aria-hidden="true">+</span>
            </button>

            {isOpen && (
              <div
                id={answerId}
                className="faq-answer"
                role="region"
                aria-labelledby={`faq-trigger-${i}`}
              >
                {typeof item.answer === 'string' ? <p>{item.answer}</p> : item.answer}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
