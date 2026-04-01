/**
 * Section — Page section wrapper with consistent spacing and background variants.
 *
 * Props:
 *   id        — HTML id attribute (for anchor navigation)
 *   as        — HTML element to render ('section', 'div', 'article', etc.) — default 'section'
 *   variant   — background style: 'light' | 'white' | 'subtle' | 'gradient' | 'dark' — default 'light'
 *   size      — vertical padding: 'sm' | 'md' | 'lg' | 'xl' — default 'md'
 *   narrow    — constrain container to content width (760px)
 *   tight     — constrain container to narrow width (560px)
 *   className — additional CSS classes
 *   aria-labelledby — for accessibility
 *   children
 */
export default function Section({
  id,
  as: Tag = 'section',
  variant = 'light',
  size = 'md',
  narrow = false,
  tight = false,
  className = '',
  children,
  ...props
}) {
  const sectionClass = [
    'section',
    size !== 'md' ? `section--${size}` : '',
    variant !== 'light' ? `section--${variant}` : '',
    className,
  ].filter(Boolean).join(' ')

  const containerClass = [
    'container',
    narrow ? 'container--narrow' : '',
    tight  ? 'container--tight'  : '',
  ].filter(Boolean).join(' ')

  return (
    <Tag id={id} className={sectionClass} {...props}>
      <div className={containerClass}>
        {children}
      </div>
    </Tag>
  )
}
