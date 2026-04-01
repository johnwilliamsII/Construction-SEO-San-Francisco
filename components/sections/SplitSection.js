/**
 * SplitSection — Two-column layout with text and a visual/media block.
 * Commonly used for service highlights, about sections, and case study previews.
 *
 * Props:
 *   visual    — JSX rendered in the visual column (image, card, etc.)
 *   reverse   — boolean, flips the visual to the left
 *   align     — 'center' | 'top' — vertical alignment of columns
 *   id        — HTML id
 *   as        — HTML element for the outer wrapper
 *   className
 *   children  — text content column
 */
export default function SplitSection({
  visual,
  reverse   = false,
  align     = 'center',
  id,
  as: Tag   = 'section',
  className = '',
  children,
  ...props
}) {
  return (
    <Tag
      id={id}
      className={[
        'split-section',
        reverse ? 'split-section--reverse' : '',
        className,
      ].filter(Boolean).join(' ')}
      style={{ alignItems: align === 'top' ? 'flex-start' : 'center' }}
      {...props}
    >
      <div className="split-section__text">
        {children}
      </div>

      <div className="split-section__visual">
        {visual}
      </div>
    </Tag>
  )
}
