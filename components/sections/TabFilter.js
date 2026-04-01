'use client'

import { useState } from 'react'

/**
 * TabFilter — Pill-style tab bar that shows/hides content panels.
 * Useful for filtering services, blog categories, case study types, etc.
 *
 * Props:
 *   tabs      — array of { id: string, label: string, content: JSX }
 *   defaultTab — id of initially active tab (defaults to first tab)
 *   align     — 'left' | 'center' | 'right' — alignment of tab bar
 *   className
 */
export default function TabFilter({
  tabs       = [],
  defaultTab,
  align      = 'left',
  className  = '',
}) {
  const [active, setActive] = useState(defaultTab || tabs[0]?.id)

  if (!tabs.length) return null

  const justifyMap = { left: 'flex-start', center: 'center', right: 'flex-end' }

  return (
    <div className={className}>
      {/* Tab bar */}
      <div
        className="tabs"
        role="tablist"
        style={{ justifyContent: justifyMap[align], marginBottom: '2rem' }}
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            role="tab"
            id={`tab-${tab.id}`}
            aria-selected={active === tab.id}
            aria-controls={`tabpanel-${tab.id}`}
            className={`tab-button${active === tab.id ? ' active' : ''}`}
            onClick={() => setActive(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Panels */}
      {tabs.map((tab) => (
        <div
          key={tab.id}
          id={`tabpanel-${tab.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${tab.id}`}
          className={`tab-panel${active === tab.id ? ' active' : ''}`}
          hidden={active !== tab.id}
        >
          {tab.content}
        </div>
      ))}
    </div>
  )
}
