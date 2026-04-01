/**
 * SectionHeading — Consistent heading block used at the top of every section.
 *
 * Props:
 *   label    — small badge/pill label above the heading (e.g., "What We Do")
 *   heading  — main section h2 (supports JSX for <em> accents)
 *   body     — optional supporting paragraph
 *   align    — 'center' | 'left' — default 'center'
 *   id       — id for aria-labelledby on the parent section
 *   as       — heading element: 'h1' | 'h2' | 'h3' — default 'h2'
 *   className
 */
export default function SectionHeading({
  label,
  heading,
  body,
  align     = 'center',
  id,
  as: Tag   = 'h2',
  className = '',
}) {
  return (
    <div
      className={`section-header${align === 'left' ? ' section-header--left' : ''} ${className}`}
    >
      {label && <span className="section-label">{label}</span>}
      {heading && <Tag id={id}>{heading}</Tag>}
      {body   && <p>{body}</p>}
    </div>
  )
}
