'use client'

import Header from '@/components/Header'
import Hero from '@/components/Hero'
import TrustBar from '@/components/TrustBar'
import About from '@/components/About'
import Services from '@/components/Services'
import WhyChoose from '@/components/WhyChoose'
import Offers from '@/components/Offers'
import Gallery from '@/components/Gallery'
import Location from '@/components/Location'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-black">
      <Header />
      <Hero />
      <TrustBar />
      <About />
      <Services />
      <WhyChoose />
      <Offers />
      <Gallery />
      <Location />
      <FinalCTA />
      <Footer />
    </main>
  )
}
