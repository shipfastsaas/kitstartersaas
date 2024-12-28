"use client"

import { useState } from 'react'
import * as Icons from '@heroicons/react/24/outline'

const faqs = [
  {
    question: "What's included in the starter kit?",
    answer: "Our starter kit includes everything you need to launch a SaaS: Authentication system, database setup with Prisma, Stripe payment integration, email templates, SEO optimization, responsive UI components, and TypeScript support. All components are built with Next.js 14 and follow the latest best practices."
  },
  {
    question: "Do I need to be an expert in Next.js?",
    answer: "No, you don't need to be an expert. While experience with React and Next.js is helpful, our codebase is well-documented and follows a clean, intuitive structure. We provide detailed documentation and examples to help you get started quickly."
  },
  {
    question: "Can I use this for commercial projects?",
    answer: "Yes, absolutely! Once you purchase the starter kit, you can use it for both personal and commercial projects. There are no additional fees or licenses required. Each purchase is valid for one end product."
  },
  {
    question: "What kind of support do you provide?",
    answer: "We provide comprehensive support through our dedicated Discord community. You'll get access to direct support from our team, regular updates, bug fixes, and the ability to request new features. Premium plan users also receive priority support."
  },
  {
    question: "Are updates included?",
    answer: "Yes! The Standard plan includes 6 months of updates, while the Premium plan includes lifetime updates. Updates include new features, security patches, and compatibility updates with the latest Next.js versions."
  },
  {
    question: "Can I request refund?",
    answer: "Yes, we offer a 30-day money-back guarantee. If you're not satisfied with the starter kit, simply reach out to our support team within 30 days of your purchase, and we'll process your refund, no questions asked."
  },
  {
    question: "How do I customize the design?",
    answer: "The starter kit uses Tailwind CSS for styling, making it easy to customize colors, typography, and layout. All components are built with customization in mind, and we provide a theme configuration file where you can adjust the global design system."
  },
  {
    question: "What about SEO?",
    answer: "SEO is built into the core of our starter kit. We include Next.js App Router with static and dynamic metadata, structured data, OpenGraph tags, and automatic sitemap generation. The codebase follows SEO best practices out of the box."
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
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
              Got questions?
            </span>
          </div>
          <h2 className="mt-6 text-4xl font-outfit font-bold tracking-tight text-gray-900 sm:text-5xl">
            Frequently asked{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              questions
            </span>
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 max-w-[40ch] mx-auto">
            Everything you need to know about our Next.js starter kit. Can't find the answer you're looking for? Reach out to our support team.
          </p>
        </div>

        {/* FAQ list */}
        <div className="mx-auto mt-16 max-w-3xl">
          <div className="divide-y divide-gray-200">
            {faqs.map((faq, index) => (
              <div key={faq.question} className="py-6">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="flex w-full items-start justify-between text-left"
                >
                  <span className="text-lg font-outfit font-semibold leading-7 text-gray-900">
                    {faq.question}
                  </span>
                  <span className="ml-6 flex h-7 items-center">
                    {openIndex === index ? (
                      <Icons.MinusSmallIcon className="h-6 w-6 text-primary" />
                    ) : (
                      <Icons.PlusSmallIcon className="h-6 w-6 text-gray-400" />
                    )}
                  </span>
                </button>
                {openIndex === index && (
                  <div className="mt-4">
                    <p className="text-base leading-7 text-gray-600">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact support */}
          <div className="mt-16 text-center">
            <a
              href="#support"
              className="inline-flex items-center gap-2 rounded-full bg-gray-900 px-6 py-3 text-sm font-outfit font-semibold text-white shadow-lg transition-all duration-300 hover:bg-gray-800 hover:shadow-xl hover:-translate-y-0.5"
            >
              <Icons.ChatBubbleLeftRightIcon className="h-4 w-4" />
              <span>Contact Support</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom decoration */}
      <div className="absolute inset-x-0 -bottom-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-bottom-80" aria-hidden="true">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-secondary to-primary opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
      </div>
    </div>
  )
}
