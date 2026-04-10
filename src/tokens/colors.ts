/**
 * Source of truth for marketing palette + semantic aliases.
 * Keep `tokens/tokens.css` in sync (see tokens/MIGRATION.md).
 */
export const colors = {
  navy: '#0d1226',
  blue: '#0000dc',
  purple: '#4337a8',
  orange: '#fa5d00',
  lightGrey: '#f6f7f9',
  snow: '#fafafa',
  white: '#ffffff',

  /** Canonical accent — replaces legacy #1D26FF usages */
  accent: '#0011e1',
  accentHover: '#131bdb',

  gsPrimary700: '#0d1226',
  gsAccent500: '#0000dc',
  gsAccent600: '#0011e1',
  gsNeon: '#00ffcc',

  text: '#0d1226',
  textMuted: '#5b6472',
  border: '#e5e7eb',
  success: '#17b26a',

  heroBg: '#0A1330',
  heroTile: '#0011e1',
  heroTileAlt: '#0014ff',
  seqBg: '#0a0a1a',
  seqCard: '#12122a',
  seqAccent: '#6B4EFF',
  seqLabel: '#8B7FFF',
  proofBarAlt: '#1EC971',
  accordionGreen: '#18C971',
  modalAccent: '#66d29f',
  howitworksAccent: '#7dd3fc',
  geniusBlue: '#0011e1',

  overlayBackdrop: 'rgba(13,18,38,0.62)',
} as const

export type ColorToken = keyof typeof colors

/** Tailwind `theme.extend.colors` literals (non–CSS-var entries) */
export const tailwindColorLiterals = {
  navy: colors.navy,
  blue: colors.blue,
  purple: colors.purple,
  orange: colors.orange,
  lightGrey: colors.lightGrey,
  snow: colors.snow,
  'gs-primary-700': colors.gsPrimary700,
  'gs-accent-500': colors.gsAccent500,
  'gs-accent-600': colors.gsAccent600,
  'gs-neon': colors.gsNeon,
  text: colors.text,
  'text-muted': colors.textMuted,
  border: colors.border,
  success: colors.success,
} as const
