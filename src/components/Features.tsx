import Image from 'next/image'
import * as Icons from '@heroicons/react/24/outline'

interface Feature {
  name: string;
  description: string;
  icon: JSX.Element;
  gradient: string;
  comingSoon?: boolean;
}

const features: Feature[] = [
  {
    name: 'Payments',
    description: 'Stripe integration with custom checkout pages, subscriptions, and usage-based billing.',
    icon: <Icons.CreditCardIcon className="h-6 w-6" />,
    gradient: 'from-[#FF80B5] to-[#9089FC]'
  },
  {
    name: 'Authentication',
    description: 'Multi-provider auth with NextAuth.js. Support for Google, GitHub, and more.',
    icon: <Icons.LockClosedIcon className="h-6 w-6" />,
    gradient: 'from-[#6EE7B7] to-[#3B82F6]'
  },
  {
    name: 'SEO',
    description: 'Built-in SEO components and meta tags for perfect search engine optimization.',
    icon: <Icons.MagnifyingGlassIcon className="h-6 w-6" />,
    gradient: 'from-[#FDE68A] to-[#FCA5A5]'
  },
  {
    name: 'Database',
    description: 'Prisma ORM setup with your choice of database. Migrations and type safety included.',
    icon: <Icons.CircleStackIcon className="h-6 w-6" />,
    gradient: 'from-[#D8B4FE] to-[#818CF8]'
  },
  {
    name: 'AI',
    description: 'OpenAI integration ready. Add AI features to your product in minutes.',
    icon: <Icons.CpuChipIcon className="h-6 w-6" />,
    gradient: 'from-[#F43F5E] to-[#7C3AED]'
  },
  {
    name: 'Style',
    description: 'Beautiful UI components built with Tailwind CSS and Radix UI primitives.',
    icon: <Icons.PaintBrushIcon className="h-6 w-6" />,
    gradient: 'from-[#34D399] to-[#3B82F6]'
  },
  {
    name: 'Emails',
    description: 'Transactional emails with React Email and Resend. Beautiful templates included.',
    icon: <Icons.EnvelopeIcon className="h-6 w-6" />,
    gradient: 'from-[#FB923C] to-[#DB2777]'
  },
  {
    name: 'More',
    description: 'Regular updates with new features based on community feedback.',
    icon: <Icons.PlusIcon className="h-6 w-6" />,
    gradient: 'from-[#94A3B8] to-[#475569]',
    comingSoon: true
  }
] as const

export default function Features() {
  return (
    <div className="relative isolate py-24 sm:py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary to-secondary opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-2xl lg:text-center">
          <div className="flex items-center justify-center">
            <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20">
              Everything you need
            </span>
          </div>
          <h2 className="mt-6 text-4xl font-outfit font-bold tracking-tight text-gray-900 sm:text-5xl">
            All the tools to build your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              next big thing
            </span>
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 max-w-[40ch] mx-auto">
            Stop reinventing the wheel. Get all the essential features you need to launch your SaaS, right out of the box.
          </p>
        </div>

        {/* Features grid */}
        <div className="mx-auto mt-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {features.map((feature, index) => (
              <div
                key={feature.name}
                className={`relative group rounded-3xl bg-white p-8 shadow-lg ring-1 ring-gray-200/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                  index === 0 ? 'sm:col-span-2 lg:col-span-1' : ''
                }`}
              >
                {/* Gradient background */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-300">
                  <div className={`h-full w-full bg-gradient-to-br ${feature.gradient}`} />
                </div>

                <div className="relative">
                  {/* Icon */}
                  <div className={`inline-flex rounded-2xl bg-gradient-to-br ${feature.gradient} p-3 text-white shadow-lg ring-1 ring-white/10`}>
                    {feature.icon}
                  </div>

                  {/* Content */}
                  <div className="mt-6 space-y-2">
                    <div className="flex items-center gap-3">
                      <h3 className="text-lg font-outfit font-semibold text-gray-900">
                        {feature.name}
                      </h3>
                      {feature.comingSoon && (
                        <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                          Soon
                        </span>
                      )}
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  {/* Learn more link */}
                  <div className="mt-6 flex items-center gap-x-2">
                    <a
                      href={`#${feature.name.toLowerCase()}`}
                      className="text-sm font-outfit font-semibold text-gray-900 group-hover:text-primary transition-colors duration-300 flex items-center gap-1"
                    >
                      Learn more
                      <Icons.ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 flex justify-center">
          <a
            href="#roadmap"
            className="inline-flex items-center gap-2 rounded-full bg-gray-900 px-6 py-3 text-sm font-outfit font-semibold text-white shadow-lg transition-all duration-300 hover:bg-gray-800 hover:shadow-xl hover:-translate-y-0.5"
          >
            <span>View our feature roadmap</span>
            <Icons.ArrowRightIcon className="h-4 w-4" />
          </a>
        </div>
      </div>

      {/* Bottom decoration */}
      <div className="absolute inset-x-0 -bottom-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-bottom-80" aria-hidden="true">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-secondary to-primary opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
      </div>
    </div>
  )
}
