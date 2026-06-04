import type { Metadata } from 'next'
import './globals.css'

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#0a0e1a] text-white antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}
