import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // ─── Font Families ───────────────────────────────────────────────
      fontFamily: {
        serif:  ['var(--font-dm-serif)', 'Georgia', 'serif'],
        sans:   ['var(--font-syne)', 'system-ui', 'sans-serif'],
        mono:   ['var(--font-jetbrains)', 'Menlo', 'monospace'],
      },

      // ─── Colors (mapped to CSS custom properties) ────────────────────
      colors: {
        // Backgrounds
        'bg-void':     'var(--bg-void)',
        'bg-deep':     'var(--bg-deep)',
        'bg-surface':  'var(--bg-surface)',
        'bg-elevated': 'var(--bg-elevated)',
        'bg-glass':    'var(--bg-glass)',

        // Accent — Electric Cobalt
        'accent':      'var(--accent-primary)',
        'accent-hover':'var(--accent-hover)',
        'accent-glow': 'var(--accent-glow)',

        // Gold
        'gold':        'var(--gold-bright)',
        'gold-muted':  'var(--gold-muted)',
        'gold-subtle': 'var(--gold-subtle)',

        // Text
        'primary':     'var(--text-primary)',
        'secondary':   'var(--text-secondary)',
        'tertiary':    'var(--text-tertiary)',
        'text-gold':   'var(--text-gold)',

        // Borders (used via border-color utilities)
        'border-subtle':  'var(--border-subtle)',
        'border-default': 'var(--border-default)',
        'border-accent':  'var(--border-accent)',
        'border-gold':    'var(--border-gold)',
      },

      // ─── Border Colors (shorthand aliases) ───────────────────────────
      borderColor: {
        subtle:  'var(--border-subtle)',
        default: 'var(--border-default)',
        accent:  'var(--border-accent)',
        gold:    'var(--border-gold)',
      },

      // ─── Typography Scale ─────────────────────────────────────────────
      fontSize: {
        // Eyebrow labels
        'eyebrow': ['0.65rem', { lineHeight: '1', letterSpacing: '0.2em', fontWeight: '700' }],
        // Body
        'body':    ['1.0625rem', { lineHeight: '1.75' }],
        // Section headings range
        'section': ['clamp(2.5rem,4vw,3.5rem)', { lineHeight: '1.1' }],
        // Display / hero — controlled via CSS clamp
        'display': ['clamp(3.5rem,9vw,7.5rem)', { lineHeight: '0.95' }],
      },

      // ─── Spacing ──────────────────────────────────────────────────────
      spacing: {
        '18':  '4.5rem',
        '22':  '5.5rem',
        '26':  '6.5rem',
        '30':  '7.5rem',
        '34':  '8.5rem',
        '38':  '9.5rem',
        '42':  '10.5rem',
        '128': '32rem',
        '144': '36rem',
        '160': '40rem',
      },

      // ─── Max Widths ───────────────────────────────────────────────────
      maxWidth: {
        'site': '1440px',
        'copy': '38rem',
        'wide': '1280px',
      },

      // ─── Animations ───────────────────────────────────────────────────
      keyframes: {
        'word-up': {
          '0%':   { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'reveal': {
          '0%':   { opacity: '0', transform: 'translateY(32px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'gold-pulse': {
          '0%, 100%': { textShadow: '0 0 0px rgba(242,194,78,0)' },
          '50%':       { textShadow: '0 0 24px rgba(242,194,78,0.6)' },
        },
        'bar-draw': {
          '0%':   { width: '0%' },
          '100%': { width: 'var(--bar-target)' },
        },
        'marquee': {
          '0%':   { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'fade-in': {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'drawer-in': {
          '0%':   { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        'word-up':    'word-up 700ms cubic-bezier(0.16,1,0.3,1) both',
        'reveal':     'reveal 600ms ease-out both',
        'gold-pulse': 'gold-pulse 800ms ease-in-out',
        'bar-draw':   'bar-draw 1000ms ease-out both',
        'marquee':    'marquee 28s linear infinite',
        'fade-in':    'fade-in 400ms ease-out both',
        'drawer-in':  'drawer-in 400ms cubic-bezier(0.16,1,0.3,1) both',
      },

      // ─── Transition Timing ────────────────────────────────────────────
      transitionTimingFunction: {
        'spring': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      transitionDuration: {
        '80':  '80ms',
        '200': '200ms',
        '600': '600ms',
        '700': '700ms',
        '1000':'1000ms',
        '1800':'1800ms',
      },

      // ─── Backdrop Blur ────────────────────────────────────────────────
      backdropBlur: {
        'nav': '12px',
      },

      // ─── Box Shadow (glow effects) ────────────────────────────────────
      boxShadow: {
        'glow-cobalt': '0 0 24px rgba(59,123,255,0.25)',
        'glow-gold':   '0 0 24px rgba(242,194,78,0.25)',
        'focus':       '0 0 0 2px rgba(59,123,255,0.6)',
      },

      // ─── Background Image ─────────────────────────────────────────────
      backgroundImage: {
        'hero-cobalt': 'radial-gradient(ellipse 80% 60% at 20% 50%, rgba(59,123,255,0.12) 0%, transparent 70%)',
        'hero-gold':   'radial-gradient(ellipse 50% 40% at 75% 30%, rgba(242,194,78,0.07) 0%, transparent 60%)',
        'divider-gold':'linear-gradient(90deg, transparent, var(--border-gold), transparent)',
        'divider-accent':'linear-gradient(90deg, transparent, var(--border-accent), transparent)',
      },
    },
  },
  plugins: [],
}

export default config
