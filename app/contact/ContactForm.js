'use client'

import { useState } from 'react'
import FormField from '../../components/forms/FormField'

const SERVICE_OPTIONS = [
  { value: '',           label: 'Select a service…' },
  { value: 'local-seo',  label: 'Local SEO' },
  { value: 'gbp',        label: 'Google Business Profile' },
  { value: 'both',       label: 'Both Services' },
  { value: 'not-sure',   label: 'Not sure yet' },
]

export default function ContactForm() {
  const [status, setStatus]   = useState('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    setErrorMsg('')

    const data = Object.fromEntries(new FormData(e.target).entries())
    data.formType = 'Contact / SEO Audit'

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
        <h2 style={{ fontSize: '1.4rem', marginBottom: '0.75rem' }}>Audit Request Received!</h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', maxWidth: '380px', margin: '0 auto 1.5rem' }}>
          We&apos;ll review your Google presence and follow up within 1 business day.
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
      style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
    >
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        <FormField id="first-name" label="First Name"  type="text"  required placeholder="James" name="first_name" />
        <FormField id="last-name"  label="Last Name"   type="text"  required placeholder="Moreno" name="last_name" />
      </div>
      <FormField id="email"   label="Email Address"  type="email" required placeholder="james@morenoconstruction.com" name="email" />
      <FormField id="phone"   label="Phone Number"   type="tel"            placeholder="(415) 555-0123" hint="Optional — for faster follow-up" name="phone" />
      <FormField id="company" label="Company Name"   type="text"  required placeholder="Moreno Construction Co." name="company" />
      <FormField
        id="service"
        label="What service are you interested in?"
        type="select"
        options={SERVICE_OPTIONS}
        name="service"
      />
      <FormField
        id="message"
        label="Anything else we should know?"
        type="textarea"
        placeholder="Tell us about your business, service area, or current Google situation…"
        hint="Optional but helpful"
        name="message"
      />

      {status === 'error' && (
        <p style={{ color: '#dc2626', fontSize: '0.88rem', margin: 0, padding: '10px 14px', background: '#fef2f2', borderRadius: '8px', border: '1px solid #fecaca' }}>
          ⚠️ {errorMsg}
        </p>
      )}

      <button
        type="submit"
        className="btn btn-primary btn--lg btn--full"
        disabled={status === 'sending'}
        style={{ opacity: status === 'sending' ? 0.7 : 1 }}
      >
        {status === 'sending' ? 'Sending…' : 'Request My Free Audit →'}
      </button>
    </form>
  )
}
