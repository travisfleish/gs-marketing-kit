export const fontFamilies = {
  heading: ['ESKlarheitKurrentTRIAL', 'system-ui', 'sans-serif'],
  body: ['Red Hat Text', 'system-ui', 'sans-serif'],
} as const

export const fontSizes = {
  'brand-h1': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '300' }],
  'brand-h2': ['2.5rem', { lineHeight: '1.15', letterSpacing: '-0.015em', fontWeight: '300' }],
  'brand-h3': ['1.75rem', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '500' }],
  'brand-h4': ['1.25rem', { lineHeight: '1.3', letterSpacing: '-0.005em', fontWeight: '500' }],
  body: ['1rem', { lineHeight: '1.6', fontWeight: '400' }],
  'body-sm': ['0.875rem', { lineHeight: '1.5', fontWeight: '400' }],
  'section-title': ['2.5rem', { lineHeight: '1.15', letterSpacing: '-0.015em', fontWeight: '300' }],
  'section-copy': ['1.125rem', { lineHeight: '1.6', letterSpacing: '0', fontWeight: '400' }],
  /** Was numeric `text-18` — class: `text-lead` */
  lead: ['1.125rem', { lineHeight: '1.6', letterSpacing: '0', fontWeight: '400' }],
  /** Was numeric `text-20` — class: `text-lead-lg` */
  'lead-lg': ['1.25rem', { lineHeight: '1.55', letterSpacing: '0', fontWeight: '400' }],
  /** Was numeric `text-22` (hero subhead) — class: `text-lead-xl` */
  'lead-xl': ['1.375rem', { lineHeight: '1.55', letterSpacing: '0', fontWeight: '400' }],
} as const

export const fontWeights = {
  light: '300',
  normal: '400',
  medium: '500',
  semibold: '500',
  bold: '700',
} as const
