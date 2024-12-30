'use client'

import { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: 'What\'s included in the template?',
      answer: 'Our template includes authentication system, database integration, payment processing with Stripe, email templates, and beautiful UI components. Everything is production-ready and fully tested.',
    },
    {
      question: 'Do I need to be a developer to use this?',
      answer: 'Basic knowledge of React and Next.js is recommended. However, our detailed documentation and support will help you get started even if you\'re new to these technologies.',
    },
    {
      question: 'Can I use this for commercial projects?',
      answer: 'Yes! Once you purchase the template, you can use it for unlimited commercial projects. There are no additional fees or licenses required.',
    },
    {
      question: 'What kind of support do you provide?',
      answer: 'We provide comprehensive documentation, email support, and access to our Discord community where you can get help from our team and other developers.',
    },
    {
      question: 'Are updates included?',
      answer: 'Yes, you\'ll get free updates and bug fixes. We regularly update the template with new features and security patches.',
    },
  ]

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-outfit text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 font-jakarta text-lg leading-8 text-gray-600">
            Find answers to common questions about our template
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-3xl divide-y divide-gray-900/10">
          {faqs.map((faq, index) => (
            <div key={index} className="py-6">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-start justify-between text-left"
              >
                <span className="font-outfit text-base font-semibold leading-7 text-gray-900">
                  {faq.question}
                </span>
                <ChevronDownIcon
                  className={`h-6 w-6 flex-none text-gray-400 transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="mt-2 pr-12">
                  <p className="font-jakarta text-base leading-7 text-gray-600">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
