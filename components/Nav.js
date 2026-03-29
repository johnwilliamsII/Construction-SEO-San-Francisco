'use client'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

// ─── UPDATE THESE when you have final service names ───────────────────────────
const SERVICES = [
  { label: 'Local SEO for Contractors',      href: '/services/local-seo/' },
  { label: 'Google Business Profile (GBP)',  href: '/services/gbp/' },
]
// ──────────────────────────────────────────────────────────────────────────────

const NAV_LINKS = [
  { label: 'Home',         href: '/' },
  { label: 'Services',     href: null,              dropdown: SERVICES },
  { label: 'Blog',         href: '/blog/' },
  { label: 'About',        href: '/about/' },
  { label: 'Process',      href: '/#process' },
  { label: 'Testimonials', href: '/#testimonials' },
  { label: 'Contact',      href: '/#contact' },
]

export default function Nav() {
  const pathname      = usePathname()
  const [open, setOpen]       = useState(false)       // mobile menu
  const [ddOpen, setDdOpen]   = useState(false)       // services dropdown
  const [scrolled, setScrolled] = useState(false)
  const ddRef = useRef(null)

  // shadow on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // close dropdown on outside click
  useEffect(() => {
    function handler(e) {
      if (ddRef.current && !ddRef.current.contains(e.target)) setDdOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  // close mobile menu on route change
  useEffect(() => { setOpen(false); setDdOpen(false) }, [pathname])

  function isActive(href) {
    if (!href) return false
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  return (
    <header className={`nav-header${scrolled ? ' nav-scrolled' : ''}`}>
      <div className="container nav-inner">

        {/* Logo */}
        <Link href="/" className="nav-logo">
          Construction<span>SEO</span><em>.sf</em>
        </Link>

        {/* Desktop nav */}
        <nav className="nav-desktop" aria-label="Main navigation">
          <ul className="nav-links">
            {NAV_LINKS.map((item) =>
              item.dropdown ? (
                <li key="services" className="nav-item nav-has-dd" ref={ddRef}>
                  <button
                    className={`nav-link nav-dd-trigger${ddOpen ? ' active' : ''}`}
                    aria-expanded={ddOpen}
                    aria-haspopup="true"
                    onClick={() => setDdOpen(!ddOpen)}
                  >
                    {item.label}
                    <svg className={`dd-caret${ddOpen ? ' open' : ''}`} width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                      <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  {ddOpen && (
                    <ul className="nav-dropdown" role="menu">
                      {item.dropdown.map((sub) => (
                        <li key={sub.href} role="none">
                          <Link
                            href={sub.href}
                            className="nav-dropdown-item"
                            role="menuitem"
                            onClick={() => setDdOpen(false)}
                          >
                            {sub.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ) : (
                <li key={item.label} className="nav-item">
                  <Link
                    href={item.href}
                    className={`nav-link${isActive(item.href) ? ' nav-active' : ''}`}
                  >
                    {item.label}
                  </Link>
                </li>
              )
            )}
          </ul>
        </nav>

        {/* Desktop CTA */}
        <Link href="/#contact" className="btn btn-primary nav-cta">
          Get Free Audit
        </Link>

        {/* Mobile hamburger */}
        <button
          className="nav-hamburger"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span className={`ham-line${open ? ' open' : ''}`} />
          <span className={`ham-line${open ? ' open' : ''}`} />
          <span className={`ham-line${open ? ' open' : ''}`} />
        </button>

      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="nav-mobile-drawer">
          <ul>
            {NAV_LINKS.map((item) =>
              item.dropdown ? (
                <li key="services-mob">
                  <button
                    className="nav-mobile-link nav-mobile-dd-trigger"
                    onClick={() => setDdOpen(!ddOpen)}
                  >
                    Services
                    <svg className={`dd-caret${ddOpen ? ' open' : ''}`} width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                      <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  {ddOpen && (
                    <ul className="nav-mobile-sub">
                      {item.dropdown.map((sub) => (
                        <li key={sub.href}>
                          <Link href={sub.href} className="nav-mobile-sub-link">
                            {sub.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ) : (
                <li key={item.label}>
                  <Link href={item.href} className="nav-mobile-link">
                    {item.label}
                  </Link>
                </li>
              )
            )}
            <li>
              <Link href="/#contact" className="btn btn-primary" style={{ width: '100%', textAlign: 'center', marginTop: '8px' }}>
                Get Free Audit
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
