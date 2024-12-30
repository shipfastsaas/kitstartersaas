import HeroSection from '@/components/HeroSection'
import Features from '@/components/Features'
import Mission from '@/components/Mission'
import Footer from '@/components/Footer'
import CTASection from '@/components/CTASection'
import HowItWorksSection from '@/components/HowItWorksSection'
import ComparisonSection from '@/components/ComparisonSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import FaqSection from '@/components/FaqSection'
import ScrollProgress from '@/components/ui/ScrollProgress'
import SalesNotification from '@/components/ui/SalesNotification'
import LiveChat from '@/components/ui/LiveChat'

export default function Home() {
  return (
    <main>
      <ScrollProgress />
      <SalesNotification />
      <LiveChat />
      <HeroSection />
      <Features />
      <HowItWorksSection />
      <ComparisonSection />
      <TestimonialsSection />
      <Mission />
      <FaqSection />
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
