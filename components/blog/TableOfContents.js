'use client'

import { useState, useEffect } from 'react'

export default function TableOfContents({ items }) {
  const [activeId, setActiveId] = useState(items[0]?.id || '')

  useEffect(() => {
    if (!items.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting)
        if (visible.length > 0) {
          setActiveId(visible[0].target.id)
        }
      },
      { rootMargin: '-10% 0% -60% 0%', threshold: 0 }
    )

    items.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [items])

  if (!items.length) return null

  return (
    <nav aria-label="Table of contents" style={{ position: 'sticky', top: '88px' }}>
      <div
        style={{
          background: 'var(--bg-glass-strong)',
          border: '1px solid var(--border-glass)',
          borderRadius: 'var(--radius-lg)',
          padding: '1.25rem',
          backdropFilter: 'var(--blur-md)',
          WebkitBackdropFilter: 'var(--blur-md)',
          boxShadow: 'var(--shadow-glass)',
        }}
      >
        <div
          style={{
            fontSize: '0.68rem',
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--accent)',
            marginBottom: '1rem',
            paddingBottom: '0.75rem',
            borderBottom: '1px solid var(--border-subtle)',
          }}
        >
          Table of Contents
        </div>

        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '2px' }}>
          {items.map(({ id, label, level }) => {
            const isActive = activeId === id
            return (
              <li key={id}>
                <a
                  href={`#${id}`}
                  style={{
                    display: 'block',
                    padding: `5px 10px 5px ${level === 3 ? '22px' : '10px'}`,
                    fontSize: '0.83rem',
                    lineHeight: 1.4,
                    color: isActive ? 'var(--accent)' : 'var(--text-secondary)',
                    background: isActive ? 'var(--accent-light)' : 'transparent',
                    borderLeft: `2px solid ${isActive ? 'var(--accent)' : 'transparent'}`,
                    borderRadius: `0 var(--radius-sm) var(--radius-sm) 0`,
                    transition: 'all 0.18s ease',
                    textDecoration: 'none',
                    fontWeight: isActive ? 600 : 400,
                  }}
                >
                  {label}
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}
