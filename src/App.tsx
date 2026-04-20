import Hero from '@/sections/Hero'
import Features from '@/sections/Features'
import HowItWorks from '@/sections/HowItWorks'
import Pricing from '@/sections/Pricing'
import CTA from '@/sections/CTA'
import Footer from '@/sections/Footer'
import Navbar from '@/components/Navbar'

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
