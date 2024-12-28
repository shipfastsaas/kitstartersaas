'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navigation = [
  {
    title: 'Getting Started',
    links: [
      { title: 'Overview', href: '/docs' },
      { title: 'Installation', href: '/docs/installation' },
      { title: 'Configuration', href: '/docs/configuration' },
    ],
  },
  {
    title: 'Features',
    links: [
      { title: 'Authentication', href: '/docs/auth' },
      { title: 'Stripe Integration', href: '/docs/stripe' },
      { title: 'Database', href: '/docs/database' },
      { title: 'API Routes', href: '/docs/api-routes' },
    ],
  },
  {
    title: 'Components',
    links: [
      { title: 'Layout & Design', href: '/docs/layout' },
      { title: 'Navigation', href: '/docs/navigation' },
      { title: 'Forms', href: '/docs/forms' },
      { title: 'Pricing', href: '/docs/pricing' },
    ],
  },
  {
    title: 'Deployment',
    links: [
      { title: 'Vercel', href: '/docs/deployment-vercel' },
      { title: 'Environment Variables', href: '/docs/env-variables' },
    ],
  },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="fixed w-64 h-screen overflow-y-auto border-r border-gray-200 py-8 px-4 bg-white">
      <div className="space-y-8">
        {navigation.map((section) => (
          <div key={section.title}>
            <h2 className="font-semibold text-gray-900 uppercase tracking-wider text-sm">
              {section.title}
            </h2>
            <ul className="mt-3 space-y-2">
              {section.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`block px-3 py-2 text-sm rounded-md transition-colors ${
                      pathname === link.href
                        ? 'bg-gradient-to-r from-[#7C3AED] to-[#DB2777] text-white'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
