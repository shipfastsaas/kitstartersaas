'use client'

import Link from 'next/link'
import { CheckCircleIcon, ArrowDownTrayIcon, BookOpenIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline'

export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="bg-white px-8 py-12 shadow-xl rounded-2xl">
          {/* Success Header */}
          <div className="text-center">
            <CheckCircleIcon className="mx-auto h-16 w-16 text-green-500" />
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Thank you for your purchase!
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              You now have access to the Next.js SaaS Starter Template. Let's get your startup launched!
            </p>
          </div>

          {/* Next Steps */}
          <div className="mt-12">
            <h2 className="text-lg font-semibold text-gray-900">Next steps:</h2>
            <div className="mt-6 space-y-6">
              {/* GitHub Download */}
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-50">
                    <ArrowDownTrayIcon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-base font-medium text-gray-900">Download your template</h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Get started by downloading your template from GitHub
                  </p>
                  <a
                    href="https://github.com/yourusername/saas-template"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center rounded-full bg-primary px-4 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-primary/90"
                  >
                    Download from GitHub
                    <ArrowDownTrayIcon className="ml-2 -mr-0.5 h-4 w-4" />
                  </a>
                </div>
              </div>

              {/* Documentation */}
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-50">
                    <BookOpenIcon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-base font-medium text-gray-900">Read the documentation</h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Learn how to customize and deploy your SaaS application
                  </p>
                  <Link
                    href="/docs"
                    className="mt-3 inline-flex items-center text-sm font-semibold text-primary hover:text-primary/90"
                  >
                    View documentation
                    <span aria-hidden="true"> →</span>
                  </Link>
                </div>
              </div>

              {/* Support */}
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-50">
                    <ChatBubbleLeftRightIcon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-base font-medium text-gray-900">Get support</h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Join our community for support and updates
                  </p>
                  <a
                    href="https://discord.gg/your-discord"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center text-sm font-semibold text-primary hover:text-primary/90"
                  >
                    Join Discord community
                    <span aria-hidden="true"> →</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Features Reminder */}
          <div className="mt-12 rounded-lg bg-gray-50 px-6 py-8">
            <h2 className="text-sm font-medium text-gray-900">Included in your purchase:</h2>
            <ul className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
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
                <li key={feature} className="flex items-center text-sm text-gray-600">
                  <CheckCircleIcon className="mr-2 h-5 w-5 text-green-500" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Help Link */}
          <div className="mt-12 text-center">
            <p className="text-sm text-gray-600">
              Need help getting started?{' '}
              <a
                href="mailto:support@yourdomain.com"
                className="font-medium text-primary hover:text-primary/90"
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
