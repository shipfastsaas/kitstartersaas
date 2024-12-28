import * as Icons from '@heroicons/react/24/outline'

const timeline = [
  {
    date: 'Coming Q2 2024',
    title: 'AI Integration Suite',
    description: 'Complete AI toolkit with OpenAI integration, custom models support, and AI-powered features.',
    status: 'planned',
    features: [
      'OpenAI API integration',
      'Custom AI model support',
      'AI-powered content generation',
      'Smart data analysis tools'
    ]
  },
  {
    date: 'Coming Q1 2024',
    title: 'Advanced Analytics Dashboard',
    description: 'Comprehensive analytics suite with real-time data visualization and custom reports.',
    status: 'in-progress',
    features: [
      'Real-time data tracking',
      'Custom report builder',
      'User behavior analytics',
      'Performance metrics'
    ]
  },
  {
    date: 'December 2023',
    title: 'Initial Release v1.0',
    description: 'First stable release with core features and essential integrations.',
    status: 'completed',
    features: [
      'Authentication system',
      'Stripe integration',
      'Database setup',
      'Email templates'
    ]
  }
]

const futureVision = [
  {
    icon: <Icons.RocketLaunchIcon className="h-6 w-6" />,
    title: 'Simplified Development',
    description: 'Our goal is to reduce development time by 80% for common SaaS features.'
  },
  {
    icon: <Icons.CubeTransparentIcon className="h-6 w-6" />,
    title: 'Modular Architecture',
    description: 'Building a plugin system for easy feature extension and customization.'
  },
  {
    icon: <Icons.UserGroupIcon className="h-6 w-6" />,
    title: 'Community-Driven',
    description: 'Creating a marketplace for community-built components and templates.'
  }
]

function StatusBadge({ status }: { status: string }) {
  const styles = {
    planned: 'bg-gray-100 text-gray-600',
    'in-progress': 'bg-blue-100 text-blue-600',
    completed: 'bg-green-100 text-green-600'
  }[status]

  const labels = {
    planned: 'Planned',
    'in-progress': 'In Progress',
    completed: 'Completed'
  }[status]

  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${styles}`}>
      {labels}
    </span>
  )
}

export default function Changelog() {
  return (
    <div className="relative isolate overflow-hidden py-24 sm:py-32">
      {/* Background decoration */}
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary to-secondary opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Page header */}
        <div className="mx-auto max-w-2xl lg:text-center">
          <div className="flex items-center justify-center">
            <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20">
              Product Updates
            </span>
          </div>
          <h1 className="mt-6 text-4xl font-outfit font-bold tracking-tight text-gray-900 sm:text-5xl">
            Changelog &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Roadmap
            </span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 max-w-[40ch] mx-auto">
            Keep track of our latest updates and see what's coming next. We're constantly improving and adding new features.
          </p>
        </div>

        {/* Timeline */}
        <div className="mx-auto mt-16 max-w-3xl">
          <div className="space-y-16">
            {timeline.map((item, index) => (
              <div key={item.title} className="relative pb-4">
                {index !== timeline.length - 1 && (
                  <div className="absolute left-4 top-8 -bottom-4 w-0.5 bg-gray-200" />
                )}
                <div className="relative flex gap-6">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 ring-1 ring-primary/20">
                    <div className="h-2.5 w-2.5 rounded-full bg-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-4">
                      <div className="flex-none text-sm text-gray-600">
                        {item.date}
                      </div>
                      <StatusBadge status={item.status} />
                    </div>
                    <h3 className="mt-2 text-xl font-outfit font-semibold text-gray-900">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-base text-gray-600">
                      {item.description}
                    </p>
                    <ul className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                      {item.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3">
                          <Icons.CheckCircleIcon className="h-5 w-5 flex-none text-primary" />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Future Vision */}
        <div className="mx-auto mt-32 max-w-5xl">
          <h2 className="text-center text-3xl font-outfit font-bold tracking-tight text-gray-900">
            Our Vision for the Future
          </h2>
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {futureVision.map((item) => (
              <div
                key={item.title}
                className="relative flex flex-col rounded-3xl bg-white p-8 shadow-xl ring-1 ring-gray-200/50 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-secondary p-3 text-white shadow-lg ring-1 ring-white/10">
                  {item.icon}
                </div>
                <h3 className="mt-6 text-lg font-outfit font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Newsletter signup */}
          <div className="mt-16 text-center">
            <h3 className="text-lg font-outfit font-semibold text-gray-900">
              Stay Updated
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              Get notified about new features and updates.
            </p>
            <form className="mt-6 flex justify-center gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full max-w-sm rounded-full bg-white px-4 py-2.5 text-sm text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-primary"
              />
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-full bg-gray-900 px-6 py-2.5 text-sm font-outfit font-semibold text-white shadow-lg transition-all duration-300 hover:bg-gray-800 hover:shadow-xl hover:-translate-y-0.5"
              >
                Subscribe
                <Icons.PaperAirplaneIcon className="h-4 w-4" />
              </button>
            </form>
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
