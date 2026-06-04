import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Thesis from '@/components/Thesis'
import Deal from '@/components/Deal'
import Team from '@/components/Team'
import Timeline from '@/components/Timeline'
import News from '@/components/News'
import Governance from '@/components/Governance'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Thesis />
      <Deal />
      <Team />
      <Timeline />
      <News />
      <Governance />
      <Contact />
      <Footer />
    </main>
  )
}
