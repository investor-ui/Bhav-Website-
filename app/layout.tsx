import type { Metadata } from 'next'
import { Playfair_Display, Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'BHAV Acquisition Corp | NASDAQ: BHAVU',
  description: '$100M SPAC targeting Advanced Robotics, Electric Vehicles, Drones & UAS, and Fintech. Listed on NASDAQ under ticker BHAVU.',
  keywords: 'BHAV Acquisition Corp, BHAVU, SPAC, NASDAQ, robotics, EV, drones, fintech, IPO',
  openGraph: {
    title: 'BHAV Acquisition Corp | NASDAQ: BHAVU',
    description: 'The Intelligent Machines Capital Vehicle — $100M SPAC focused on Advanced Robotics, EVs, Drones & UAS, and Fintech.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`scroll-smooth ${playfairDisplay.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}
