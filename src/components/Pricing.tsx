"use client"

import { useState } from 'react'
import * as Icons from '@heroicons/react/24/outline'
import EmailModal from './EmailModal'
import { loadStripe } from '@stripe/stripe-js'

// Make sure to add your publishable key in .env.local
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || '')

const plans = [
  {
    name: 'Standard',
    price: 169,
    description: 'Everything you need to build your next startup',
    features: [
      'Authentication Ready',
      'Database Integration',
      'Payment Processing',
      'Email Templates',
      'SEO Optimized',
      'Modern UI Components',
      'Responsive Design',
      'TypeScript Support',
    ],
    cta: 'Get Standard',
    gradient: 'from-primary to-secondary',
    planId: 'standard'
  },
  {
    name: 'Premium',
    price: 199,
    description: 'Best for long-term projects with lifetime updates',
    features: [
      'Everything in Standard',
      'Lifetime Updates',
      'Priority Support',
      'Early Access to New Features',
      'Premium UI Components',
      'AI Integration',
      'Performance Optimization',
      'Custom Branding Options',
    ],
    cta: 'Get Premium',
    gradient: 'from-[#7C3AED] to-[#DB2777]',
    popular: true,
    planId: 'premium'
  },
]

export default function Pricing() {
  const [isLoading, setIsLoading] = useState<string | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState<{
    id: string
    name: string
  } | null>(null)

  const handlePlanSelect = (planId: string, planName: string) => {
    setSelectedPlan({ id: planId, name: planName })
    setIsModalOpen(true)
  }

  const handleEmailSubmit = async (email: string) => {
    if (!selectedPlan) return

    try {
      setIsLoading(selectedPlan.id)
      
      // Create checkout session
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          plan: selectedPlan.id,
          email,
        }),
      })

      const { url, error } = await response.json()

      if (error) {
        throw new Error(error)
      }

      // Redirect to Stripe Checkout
      window.location.href = url
    } catch (err) {
      console.error('Checkout error:', err)
      alert('Something went wrong. Please try again.')
    } finally {
      setIsLoading(null)
      setIsModalOpen(false)
      setSelectedPlan(null)
    }
  }

  return (
    <>
      <div className="relative isolate overflow-hidden py-24 sm:py-32">
        {/* Background decoration */}
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary to-secondary opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Section header */}
          <div className="mx-auto max-w-2xl lg:text-center">
            <div className="flex items-center justify-center">
              <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20">
                Simple Pricing
              </span>
            </div>
            <h2 className="mt-6 text-4xl font-outfit font-bold tracking-tight text-gray-900 sm:text-5xl">
              Choose your perfect{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                starter kit
              </span>
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-[40ch] mx-auto">
              Start building your SaaS project today with our production-ready Next.js template
            </p>
          </div>

          {/* Pricing cards */}
          <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative flex flex-col rounded-3xl bg-white p-8 shadow-xl ring-1 ring-gray-200/50 transition-all duration-300 hover:shadow-2xl ${
                  plan.popular ? 'lg:scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-5 right-8">
                    <div className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#DB2777] px-4 py-1 text-sm font-medium text-white shadow-lg">
                      <Icons.SparklesIcon className="h-4 w-4" />
                      <span>Most Popular</span>
                    </div>
                  </div>
                )}

                {/* Plan header */}
                <div className="flex-1">
                  <h3 className="text-2xl font-outfit font-bold text-gray-900">
                    {plan.name}
                  </h3>
                  <div className="mt-6 flex items-baseline">
                    <span className="text-5xl font-outfit font-bold tracking-tight text-gray-900">
                      ${plan.price}
                    </span>
                    <span className="ml-1 text-sm font-semibold leading-6 text-gray-600">
                      one-time
                    </span>
                  </div>
                  <p className="mt-4 text-base leading-7 text-gray-600">
                    {plan.description}
                  </p>

                  {/* Features */}
                  <ul role="list" className="mt-8 space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <Icons.CheckCircleIcon className={`h-5 w-5 flex-none ${
                          plan.popular ? 'text-[#7C3AED]' : 'text-primary'
                        }`} />
                        <span className="text-sm leading-6 text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Call to action */}
                <button
                  onClick={() => handlePlanSelect(plan.planId, plan.name)}
                  disabled={isLoading === plan.planId}
                  className={`mt-8 block w-full rounded-full px-6 py-4 text-center text-sm font-semibold leading-6 text-white shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 disabled:opacity-75 disabled:cursor-not-allowed ${
                    plan.popular
                      ? 'bg-gradient-to-r from-[#7C3AED] to-[#DB2777]'
                      : 'bg-gradient-to-r from-primary to-secondary'
                  }`}
                >
                  {isLoading === plan.planId ? (
                    <div className="flex items-center justify-center">
                      <Icons.ArrowPathIcon className="h-5 w-5 animate-spin" />
                      <span className="ml-2">Processing...</span>
                    </div>
                  ) : (
                    plan.cta
                  )}
                </button>
              </div>
            ))}
          </div>

          {/* Money back guarantee */}
          <p className="mt-12 text-center text-sm leading-6 text-gray-500">
            30-day money-back guarantee · No questions asked
          </p>
        </div>

        {/* Bottom decoration */}
        <div className="absolute inset-x-0 -bottom-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-bottom-80" aria-hidden="true">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-secondary to-primary opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
        </div>
      </div>

      {/* Email Modal */}
      <EmailModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false)
          setSelectedPlan(null)
        }}
        onSubmit={handleEmailSubmit}
        planName={selectedPlan?.name || ''}
      />
    </>
  )
}
