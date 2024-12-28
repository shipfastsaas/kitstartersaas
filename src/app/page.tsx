import Image from "next/image";
import HeroSection from '@/components/HeroSection'
import Features from '@/components/Features'
import Pricing from '@/components/Pricing'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import Mission from '@/components/Mission'
import Footer from '@/components/Footer'
import CTASection from '@/components/CTASection'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Features />
      <Mission />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTASection />
      <Footer />
    </main>
  )
}

const features = [
  {
    name: 'Modern Stack',
    description: 'Built with Next.js 13+, TypeScript, and Tailwind CSS for a modern development experience.',
  },
  {
    name: 'Conversion Optimized',
    description: 'Designed with conversion in mind, featuring clear CTAs and optimized user flows.',
  },
  {
    name: 'Production Ready',
    description: 'Enterprise-grade architecture with built-in SEO, performance, and security best practices.',
  },
]
