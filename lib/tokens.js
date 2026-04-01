/**
 * Design System Tokens — JavaScript mirror of CSS custom properties.
 * Use these in JS/JSX where you can't reference CSS variables directly
 * (e.g., inline styles, canvas, chart configs, email templates).
 *
 * Keep in sync with :root in globals.css.
 */

export const colors = {
  // Backgrounds
  bgBase:          '#F7F6F3',
  bgSurface:       '#FFFFFF',
  bgElevated:      '#FAFAF9',
  bgSubtle:        '#F2F1EE',
  bgGlass:         'rgba(255,255,255,0.72)',
  bgGlassStrong:   'rgba(255,255,255,0.88)',
  bgGlassSubtle:   'rgba(255,255,255,0.48)',
  bgGlassDark:     'rgba(22,25,42,0.75)',

  // Text
  textPrimary:     '#16192A',
  textSecondary:   '#52637A',
  textTertiary:    '#8896AB',
  textDisabled:    '#B8C3CF',
  textInverted:    '#FFFFFF',
  textAccent:      '#C8520F',

  // Accent — Construction Orange
  accent:          '#E8611A',
  accentHover:     '#CF5215',
  accentActive:    '#B84811',
  accentLight:     '#FEF0E8',
  accentMuted:     'rgba(232,97,26,0.10)',
  accentGlow:      'rgba(232,97,26,0.22)',
  accentBorder:    'rgba(232,97,26,0.35)',

  // Borders
  borderSubtle:    'rgba(0,0,0,0.05)',
  borderDefault:   'rgba(0,0,0,0.09)',
  borderStrong:    'rgba(0,0,0,0.16)',
  borderGlass:     'rgba(255,255,255,0.60)',

  // Semantic
  success:         '#16A34A',
  successLight:    '#F0FDF4',
  warning:         '#D97706',
  warningLight:    '#FFFBEB',
  info:            '#2563EB',
  infoLight:       '#EFF6FF',
  error:           '#DC2626',
  errorLight:      '#FEF2F2',
}

export const gradients = {
  hero:          'linear-gradient(145deg, #F7F6F3 0%, #EDF1F7 45%, #F4EEE8 100%)',
  surface:       'linear-gradient(180deg, #FFFFFF 0%, #F7F6F3 100%)',
  glassShimmer:  'linear-gradient(135deg, rgba(255,255,255,0.65) 0%, rgba(255,255,255,0.08) 100%)',
  accentGlow:    'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(232,97,26,0.14) 0%, transparent 70%)',
  orangeSubtle:  'linear-gradient(135deg, #FEF0E8 0%, #FDF6F2 100%)',
  darkGlass:     'linear-gradient(135deg, rgba(22,25,42,0.80) 0%, rgba(32,37,62,0.75) 100%)',
}

export const shadows = {
  xs:          '0 1px 3px rgba(22,25,42,0.04), 0 1px 2px rgba(22,25,42,0.04)',
  sm:          '0 2px 8px rgba(22,25,42,0.06), 0 1px 3px rgba(22,25,42,0.04)',
  md:          '0 4px 16px rgba(22,25,42,0.08), 0 2px 6px rgba(22,25,42,0.05)',
  lg:          '0 8px 32px rgba(22,25,42,0.10), 0 4px 12px rgba(22,25,42,0.06)',
  xl:          '0 16px 48px rgba(22,25,42,0.12), 0 8px 20px rgba(22,25,42,0.07)',
  '2xl':       '0 24px 64px rgba(22,25,42,0.14), 0 12px 28px rgba(22,25,42,0.08)',
  glass:       '0 8px 32px rgba(22,25,42,0.08), 0 2px 8px rgba(22,25,42,0.04), inset 0 1px 0 rgba(255,255,255,0.70)',
  glassHover:  '0 16px 48px rgba(22,25,42,0.12), 0 4px 16px rgba(22,25,42,0.07), inset 0 1px 0 rgba(255,255,255,0.80)',
  accent:      '0 4px 24px rgba(232,97,26,0.30), 0 2px 8px rgba(232,97,26,0.20)',
  accentHover: '0 8px 32px rgba(232,97,26,0.40), 0 4px 12px rgba(232,97,26,0.25)',
}

export const radius = {
  xs:   '4px',
  sm:   '8px',
  md:   '12px',
  lg:   '16px',
  xl:   '20px',
  '2xl':'24px',
  '3xl':'32px',
  pill: '9999px',
}

export const typography = {
  fontBody:    "'Inter', sans-serif",
  fontDisplay: "'Manrope', 'Inter', sans-serif",

  // Font sizes (rem)
  textXs:   '0.75rem',
  textSm:   '0.875rem',
  textBase: '1rem',
  textMd:   '1.125rem',
  textLg:   '1.25rem',
  textXl:   '1.5rem',
  text2xl:  '1.875rem',
  text3xl:  '2.25rem',
  text4xl:  '3rem',
  text5xl:  '3.75rem',
  text6xl:  '4.5rem',
}

export const spacing = {
  1:  '0.25rem',
  2:  '0.5rem',
  3:  '0.75rem',
  4:  '1rem',
  5:  '1.25rem',
  6:  '1.5rem',
  8:  '2rem',
  10: '2.5rem',
  12: '3rem',
  16: '4rem',
  20: '5rem',
  24: '6rem',
  32: '8rem',
}

export const breakpoints = {
  sm:  640,
  md:  900,
  lg:  1080,
  xl:  1200,
}

export const motion = {
  easeDefault: 'cubic-bezier(0.40, 0, 0.20, 1)',
  easeSpring:  'cubic-bezier(0.34, 1.56, 0.64, 1)',
  easeSmooth:  'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  durationFast:   150,
  durationNormal: 250,
  durationSlow:   400,
  durationSlower: 600,
}

// Standard aspect ratios for image blocks
export const aspectRatios = {
  hero:   '16/9',
  card:   '3/2',
  square: '1/1',
  tall:   '3/4',
  wide:   '21/9',
  thumb:  '4/3',
}

// Semantic image sizes for <Image> components
export const imageSizes = {
  heroBanner: { width: 1440, height: 810 },
  heroCard:   { width: 720,  height: 480 },
  cardThumb:  { width: 800,  height: 534 },
  teamAvatar: { width: 200,  height: 200 },
  blogHero:   { width: 1200, height: 675 },
  icon:       { width: 64,   height: 64 },
  logo:       { width: 160,  height: 48 },
}

export default {
  colors,
  gradients,
  shadows,
  radius,
  typography,
  spacing,
  breakpoints,
  motion,
  aspectRatios,
  imageSizes,
}
