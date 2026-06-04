import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#050E1C',
          900: '#0A1628',
          800: '#0D1F3C',
          700: '#112548',
          600: '#163460',
          500: '#3C5878',
          400: '#5A7898',
          300: '#8AAABF',
          200: '#B8CCDC',
          100: '#D8E6F0',
          50: '#EEF4FA',
        },
        sand: {
          50: '#FDFCFA',
          100: '#F8F7F3',
          200: '#F2F0EB',
          300: '#E8E4DC',
          400: '#D5CFC4',
        },
        gold: {
          300: '#F0CF7A',
          400: '#D4A843',
          500: '#C49030',
          600: '#A07210',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        sans: ['var(--font-body)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      animation: {
        'ticker': 'ticker 40s linear infinite',
        'pulse-slow': 'pulse-slow 2.8s ease-in-out infinite',
      },
      keyframes: {
        ticker: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'pulse-slow': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.35' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}

export default config
