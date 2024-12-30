'use client'

import Link from 'next/link'
import { CheckCircleIcon, ArrowDownTrayIcon, BookOpenIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline'

export default function SuccessPage() {
  return (
    <div className="relative isolate bg-gradient-to-b from-primary/5 via-white to-white">
      {/* Background effects */}
      <div className="absolute inset-x-0 top-0 -z-10 transform-gpu overflow-hidden blur-3xl" aria-hidden="true">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary to-secondary opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
      </div>

      <div className="mx-auto max-w-3xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="bg-white/80 backdrop-blur-sm px-8 py-12 shadow-xl rounded-2xl ring-1 ring-gray-900/10">
          {/* Success Header */}
          <div className="text-center">
            <div className="mx-auto h-16 w-16 flex items-center justify-center rounded-full bg-gradient-to-r from-primary to-secondary">
              <CheckCircleIcon className="h-10 w-10 text-white" />
            </div>
            <h1 className="mt-6 font-outfit text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Thank you for your purchase!
            </h1>
            <p className="mt-4 text-lg text-gray-600 font-jakarta">
              You now have access to the Next.js SaaS Starter Template. Let's get your startup launched!
            </p>
          </div>

          {/* Next Steps */}
          <div className="mt-12">
            <h2 className="text-xl font-semibold text-gray-900 font-outfit">Next steps:</h2>
            <div className="mt-8 space-y-8">
              {/* GitHub Download */}
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-primary to-secondary">
                    <ArrowDownTrayIcon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900 font-outfit">Download your template</h3>
                  <p className="mt-2 text-gray-600 font-jakarta">
                    Get started by downloading your template from GitHub
                  </p>
                  <a
                    href="https://github.com/yourusername/saas-template"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center rounded-full bg-gradient-to-r from-primary to-secondary px-6 py-2.5 text-sm font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-200 ease-in-out transform hover:scale-105"
                  >
                    Download from GitHub
                    <ArrowDownTrayIcon className="ml-2 -mr-0.5 h-4 w-4" />
                  </a>
                </div>
              </div>

              {/* Documentation */}
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-primary to-secondary">
                    <BookOpenIcon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900 font-outfit">Read the documentation</h3>
                  <p className="mt-2 text-gray-600 font-jakarta">
                    Learn how to customize and deploy your SaaS application
                  </p>
                  <Link
                    href="/docs"
                    className="mt-4 inline-flex items-center text-sm font-semibold text-primary hover:text-primary/90 transition-colors duration-200"
                  >
                    View documentation
                    <span aria-hidden="true" className="ml-2 transition-transform duration-200 group-hover:translate-x-1">→</span>
                  </Link>
                </div>
              </div>

              {/* Support */}
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-primary to-secondary">
                    <ChatBubbleLeftRightIcon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900 font-outfit">Get support</h3>
                  <p className="mt-2 text-gray-600 font-jakarta">
                    Join our community for support and updates
                  </p>
                  <a
                    href="https://discord.gg/your-discord"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center text-sm font-semibold text-primary hover:text-primary/90 transition-colors duration-200"
                  >
                    Join Discord community
                    <span aria-hidden="true" className="ml-2 transition-transform duration-200 group-hover:translate-x-1">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Features Reminder */}
          <div className="mt-16 rounded-xl bg-gradient-to-r from-primary/5 to-secondary/5 px-8 py-10">
            <h2 className="text-xl font-semibold text-gray-900 font-outfit">Included in your purchase:</h2>
            <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {[
                'Next.js 13+ App Router',
                'TypeScript Configuration',
                'Tailwind CSS Setup',
                'Authentication System',
                'Database Integration',
                'Payment Processing',
                'Email Templates',
                'API Routes',
              ].map((feature) => (
                <li key={feature} className="flex items-center text-base text-gray-600 font-jakarta">
                  <div className="mr-3 h-5 w-5 flex-shrink-0 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                    <CheckCircleIcon className="h-4 w-4 text-white" />
                  </div>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Help Link */}
          <div className="mt-12 text-center">
            <p className="text-sm text-gray-600 font-jakarta">
              Need help getting started?{' '}
              <a
                href="mailto:support@yourdomain.com"
                className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity duration-200"
              >
                Contact our support team
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
