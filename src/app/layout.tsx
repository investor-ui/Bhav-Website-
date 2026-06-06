import type { Metadata, Viewport } from 'next'
import { DM_Serif_Display, Syne, JetBrains_Mono } from 'next/font/google'
import './globals.css'

// ─── Font Loading ─────────────────────────────────────────────────────────
const dmSerifDisplay = DM_Serif_Display({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--font-dm-serif',
  display: 'swap',
  preload: true,
})

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-syne',
  display: 'swap',
  preload: true,
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-jetbrains',
  display: 'swap',
  preload: true,
})

// ─── Metadata ────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: {
    default: 'BhavCapital — Deep-Tech Venture',
    template: '%s — BhavCapital',
  },
  description:
    'BhavCapital is a $1.2B deep-tech venture fund backing the defining infrastructure of the next industrial era. Targeting institutional LPs, family offices, and sovereign wealth funds.',
  keywords: [
    'venture capital',
    'deep tech',
    'institutional LP',
    'family office',
    'sovereign wealth',
    'BhavCapital',
  ],
  authors: [{ name: 'BhavCapital' }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'BhavCapital',
    title: 'BhavCapital — Deep-Tech Venture',
    description:
      'A $1.2B deep-tech venture fund targeting institutional LPs, family offices, and sovereign wealth funds.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BhavCapital — Deep-Tech Venture',
    description: 'A $1.2B deep-tech venture fund.',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#080F24',
}

// ─── Root Layout ──────────────────────────────────────────────────────────
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${dmSerifDisplay.variable} ${syne.variable} ${jetbrainsMono.variable}`}
    >
      <body className="font-sans antialiased bg-bg-deep text-primary">
        {children}
      </body>
    </html>
  )
}
