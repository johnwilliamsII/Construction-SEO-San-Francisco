/**
 * GlassCard — Base frosted-glass card container.
 *
 * The foundational glass surface for the design system. All other card
 * components build on this or use the .glass-card CSS class directly.
 *
 * Props:
 *   as        — HTML element ('div', 'article', 'aside', etc.)
 *   size      — 'sm' | 'md' | 'lg' — controls padding/radius
 *   accent    — boolean, adds orange accent on hover
 *   shimmer   — boolean, adds the shimmer highlight overlay
 *   className
 *   children
 */
export default function GlassCard({
  as: Tag  = 'div',
  size     = 'md',
  accent   = false,
  shimmer  = true,
  className = '',
  children,
  ...props
}) {
  const classes = [
    'glass-card',
    size !== 'md' ? `glass-card--${size}` : '',
    accent        ? 'glass-card--accent'  : '',
    shimmer       ? 'glass-highlight'     : '',
    className,
  ].filter(Boolean).join(' ')

  return (
    <Tag className={classes} {...props}>
      {children}
    </Tag>
  )
}
