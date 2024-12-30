import { RocketLaunchIcon, CodeBracketIcon, CreditCardIcon } from '@heroicons/react/24/outline'

export default function HowItWorksSection() {
  const steps = [
    {
      title: 'Choose Your Template',
      description: 'Select from our pre-built templates designed for different use cases',
      icon: CodeBracketIcon,
    },
    {
      title: 'Customize & Configure',
      description: 'Easily customize the design and configure your settings',
      icon: RocketLaunchIcon,
    },
    {
      title: 'Launch Your SaaS',
      description: 'Deploy your application and start serving customers',
      icon: CreditCardIcon,
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-white to-primary/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-outfit text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Launch in 3 Simple Steps
          </h2>
          <p className="mt-4 font-jakarta text-lg leading-8 text-gray-600">
            Get your SaaS up and running in minutes, not months
          </p>
        </div>
        
        <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-x-8 gap-y-12 sm:max-w-none sm:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="relative pl-16"
            >
              <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-primary to-secondary">
                <step.icon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <div className="relative">
                <div className="inline-flex items-center space-x-2">
                  <div className="font-outfit font-semibold text-xl leading-7 tracking-tight text-gray-900">
                    {step.title}
                  </div>
                </div>
                <p className="mt-2 font-jakarta text-base leading-7 text-gray-600">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
