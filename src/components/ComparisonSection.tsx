'use client'

import { XMarkIcon, CheckIcon } from '@heroicons/react/24/outline'

export default function ComparisonSection() {
  const comparisons = {
    scratch: [
      '4-6 weeks of development',
      '$15,000+ in development costs',
      'Security vulnerabilities risks',
      'Complex infrastructure setup',
      'Ongoing maintenance burden',
    ],
    template: [
      'Start in 5 minutes',
      'Save $14,000+',
      'Production-ready security',
      'Pre-configured infrastructure',
      'Free updates & maintenance',
    ],
  }

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-outfit text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Why Choose Our Template?
          </h2>
          <p className="mt-4 font-jakarta text-lg leading-8 text-gray-600">
            Save time and money while reducing technical risk
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-xl grid-cols-1 gap-8 sm:mt-20 sm:max-w-none sm:grid-cols-2">
          <div className="rounded-3xl bg-gray-50 p-8 ring-1 ring-gray-200">
            <h3 className="font-outfit text-lg font-semibold leading-8 text-red-500">
              Building from Scratch
            </h3>
            <ul className="mt-6 space-y-4">
              {comparisons.scratch.map((item) => (
                <li key={item} className="flex gap-x-3">
                  <XMarkIcon className="h-6 w-5 flex-none text-red-500" aria-hidden="true" />
                  <span className="font-jakarta text-sm leading-6 text-gray-600">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl bg-primary/5 p-8 ring-1 ring-primary/10">
            <h3 className="font-outfit text-lg font-semibold leading-8 text-primary">
              Using Our Template
            </h3>
            <ul className="mt-6 space-y-4">
              {comparisons.template.map((item) => (
                <li key={item} className="flex gap-x-3">
                  <CheckIcon className="h-6 w-5 flex-none text-primary" aria-hidden="true" />
                  <span className="font-jakarta text-sm leading-6 text-gray-600">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
