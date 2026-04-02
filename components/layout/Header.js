'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  {
    label: 'Services', href: '/services/',
    children: [
      { label: 'SEO Packages',    href: '/seo-packages-for-contractors/', desc: 'Local SEO & Standard SEO plans' },
      { label: 'KW Research',     href: '/keyword-research-for-contractors/', desc: 'Keyword mapping for your trade & market' },
      { label: 'Link Building',   href: '/link-building-for-contractors/', desc: 'Authority backlinks for contractors' },
      { label: 'AI Receptionist', href: '/ai-receptionist-service/', desc: '24/7 call answering & lead qualification' },
    ],
  },
  { label: 'Case Studies', href: '/case-studies/' },
  { label: 'Blog',         href: '/blog/' },
  { label: 'About',        href: '/bay-area-seo-company/' },
]

export default function Header() {
  const [scrolled,           setScrolled]           = useState(false)
  const [mobileOpen,         setMobileOpen]         = useState(false)
  const [ddOpen,             setDdOpen]             = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const pathname = usePathname()
  const ddRef    = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const handler = (e) => {
      if (ddRef.current && !ddRef.current.contains(e.target)) setDdOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setDdOpen(false)
  }, [pathname])

  const isActive = (href) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  return (
    <header className={`nav-header${scrolled ? ' nav-scrolled' : ''}`}>
      <nav className="nav-bar" aria-label="Main navigation">

        {/* Skip link */}
        <a href="#main-content" className="skip-link">Skip to content</a>

        {/* Logo */}
        <Link href="/" className="nav-logo" aria-label="Contractor SEO Bay Area — Home">
          contractor<span>seo</span>bayarea<em>.com</em>
        </Link>

        {/* Desktop nav */}
        <div className="nav-desktop" aria-hidden={mobileOpen}>
          <ul className="nav-links" role="list">
            {NAV_LINKS.map((link) => (
              <li key={link.href} className="nav-item" ref={link.children ? ddRef : null}>
                {link.children ? (
                  <>
                    <button
                      className={`nav-link${isActive(link.href) ? ' nav-active' : ''}`}
                      aria-expanded={ddOpen}
                      aria-haspopup="true"
                      onClick={() => setDdOpen(v => !v)}
                    >
                      {link.label}
                      <svg
                        className={`dd-caret${ddOpen ? ' open' : ''}`}
                        width="14" height="14" viewBox="0 0 14 14" fill="none"
                        aria-hidden="true"
                      >
                        <path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>

                    {ddOpen && (
                      <div className="nav-dropdown" role="menu">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="nav-dropdown-item"
                            role="menuitem"
                          >
                            <div>{child.label}</div>
                            {child.desc && (
                              <div className="nav-dropdown-item__desc">{child.desc}</div>
                            )}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={link.href}
                    className={`nav-link${isActive(link.href) ? ' nav-active' : ''}`}
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Desktop CTA */}
        <Link href="/free-seo-audit/" className="btn btn-primary nav-cta">
          Free SEO Audit
        </Link>

        {/* Hamburger */}
        <button
          className="nav-hamburger"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          onClick={() => setMobileOpen(v => !v)}
        >
          <span className="ham-line" style={mobileOpen ? { transform: 'translateY(7px) rotate(45deg)' } : {}} />
          <span className="ham-line" style={mobileOpen ? { opacity: 0 } : {}} />
          <span className="ham-line" style={mobileOpen ? { transform: 'translateY(-7px) rotate(-45deg)' } : {}} />
        </button>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div id="mobile-nav" className="nav-mobile-drawer" aria-label="Mobile navigation">
          <ul role="list">
            <li>
              <Link href="/" className="nav-mobile-link">Home</Link>
            </li>

            <li>
              <button
                className="nav-mobile-link"
                aria-expanded={mobileServicesOpen}
                onClick={() => setMobileServicesOpen(v => !v)}
              >
                Services
                <svg
                  width="16" height="16" viewBox="0 0 16 16" fill="none"
                  style={{ transform: mobileServicesOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}
                  aria-hidden="true"
                >
                  <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              {mobileServicesOpen && (
                <div className="nav-mobile-sub">
                  <Link href="/seo-packages-for-contractors/"      className="nav-mobile-sub-link">SEO Packages</Link>
                  <Link href="/keyword-research-for-contractors/"  className="nav-mobile-sub-link">KW Research</Link>
                  <Link href="/link-building-for-contractors/"     className="nav-mobile-sub-link">Link Building</Link>
                  <Link href="/ai-receptionist-service/"           className="nav-mobile-sub-link">AI Receptionist</Link>
                </div>
              )}
            </li>

            <li><Link href="/case-studies/"         className="nav-mobile-link">Case Studies</Link></li>
            <li><Link href="/blog/"                 className="nav-mobile-link">Blog</Link></li>
            <li><Link href="/bay-area-seo-company/" className="nav-mobile-link">About</Link></li>
          </ul>

          <Link href="/free-seo-audit/" className="btn btn-primary nav-mobile-cta" style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'center' }}>
            Get My Free SEO Audit
          </Link>
        </div>
      )}
    </header>
  )
}
