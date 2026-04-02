'use client'

import { useState } from 'react'
import FormField from '../../components/forms/FormField'

const TRADES = [
  'General Contractors', 'HVAC', 'Remodeling Contractors', 'Roofing', 'Plumbing',
  'Electrical', 'Landscaping', 'Concrete & Foundation', 'Flooring', 'Painting',
  'Deck & Fencing', 'ADU / Room Additions', 'Design-Build Firms', 'Other Trade',
]

export default function AuditForm() {
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    setErrorMsg('')

    const data = Object.fromEntries(new FormData(e.target).entries())
    data.formType = 'Free SEO Audit'

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      const json = await res.json()
      if (!res.ok || !json.ok) throw new Error(json.error || 'Unknown error')
      setStatus('success')
    } catch (err) {
      setStatus('error')
      setErrorMsg(err.message || 'Something went wrong. Please try again.')
    }
  }

  if (status === 'success') {
    return (
      <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</div>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '0.75rem', color: 'var(--navy)' }}>
          Request Received!
        </h2>
        <p style={{ color: 'var(--gray)', fontSize: '0.95rem', maxWidth: '420px', margin: '0 auto 1.5rem' }}>
          Thanks for reaching out. We&rsquo;ll review your info and follow up within 1 business day
          to schedule your free consultation.
        </p>
        <a href="/" className="btn btn-primary" style={{ display: 'inline-flex' }}>
          Back to Home →
        </a>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
    >
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        <FormField label="First Name" name="first_name" required placeholder="James" />
        <FormField label="Last Name"  name="last_name"  required placeholder="Moreno" />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        <FormField label="Phone" name="phone" type="tel" required placeholder="(415) 555-0100" />
        <FormField label="Email" name="email" type="email" required placeholder="james@company.com" />
      </div>

      <FormField label="Business Name" name="business_name" required placeholder="Moreno Construction Co." />
      <FormField label="Website URL"   name="website_url"   type="url" placeholder="https://yoursite.com" />

      <div className="form-group">
        <label className="form-label form-label--required" htmlFor="trade_type">Trade / Service Type</label>
        <select id="trade_type" name="trade_type" className="form-select" required defaultValue="">
          <option value="" disabled>Select your trade...</option>
          {TRADES.map((t) => <option key={t} value={t}>{t}</option>)}
        </select>
      </div>

      <FormField
        label="Primary Service Area"
        name="service_area"
        required
        placeholder="e.g. San Francisco, Oakland, South Bay"
        hint="City or region where you most want to rank"
      />

      <FormField
        label="Target Keywords (optional)"
        name="target_keywords"
        as="textarea"
        rows={2}
        placeholder="e.g. general contractor San Francisco, kitchen remodel Oakland..."
        hint="What searches do you most want to show up for?"
      />

      <FormField
        label="Current SEO Strategy (optional)"
        name="current_strategy"
        as="textarea"
        rows={2}
        placeholder="e.g. We run Google Ads, have a basic website, use Angi for leads..."
        hint="What are you currently doing to get found online?"
      />

      {status === 'error' && (
        <p style={{ color: '#dc2626', fontSize: '0.88rem', margin: 0, padding: '10px 14px', background: '#fef2f2', borderRadius: '8px', border: '1px solid #fecaca' }}>
          ⚠️ {errorMsg}
        </p>
      )}

      <button
        type="submit"
        className="btn btn-primary"
        disabled={status === 'sending'}
        style={{ width: '100%', justifyContent: 'center', marginTop: '0.5rem', fontSize: '1rem', padding: '15px', opacity: status === 'sending' ? 0.7 : 1 }}
      >
        {status === 'sending' ? 'Sending...' : 'Book My Free Consultation →'}
      </button>

      <p style={{ fontSize: '0.78rem', color: 'var(--gray)', textAlign: 'center', margin: 0 }}>
        No commitment. No spam. Honest data about your market.
      </p>
    </form>
  )
}
