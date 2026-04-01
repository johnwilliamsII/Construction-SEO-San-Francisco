/**
 * Badge — Small label/chip for status, categories, labels.
 *
 * Props:
 *   variant  — 'accent' | 'neutral' | 'success' | 'warning' | 'info' | 'dark' | 'glass'
 *   dot      — boolean, shows a colored dot indicator
 *   className
 *   children
 */
export default function Badge({
  variant   = 'accent',
  dot       = false,
  className = '',
  children,
  ...props
}) {
  return (
    <span className={`badge badge--${variant} ${className}`} {...props}>
      {dot && <span className="badge__dot" aria-hidden="true" />}
      {children}
    </span>
  )
}

/**
 * SectionLabel — The orange pill label used above section headings.
 * Alias for <Badge variant="accent"> but with section-label class.
 */
export function SectionLabel({ children, className = '', ...props }) {
  return (
    <span className={`section-label ${className}`} {...props}>
      {children}
    </span>
  )
}
