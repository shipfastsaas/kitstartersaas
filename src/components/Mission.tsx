import Image from 'next/image'
import * as Icons from '@heroicons/react/24/outline'

const stats = [
  { label: 'Developers using our kit', value: '10,000+' },
  { label: 'Successfully launched startups', value: '500+' },
  { label: 'Average development time saved', value: '200h' },
  { label: 'Open source contributions', value: '1,000+' },
]

const values = [
  {
    name: 'Developer Experience',
    description: 'We obsess over creating the most intuitive and enjoyable development experience possible.',
    icon: <Icons.CommandLineIcon className="h-6 w-6" />
  },
  {
    name: 'Best Practices',
    description: 'Every line of code follows industry best practices and modern development standards.',
    icon: <Icons.CheckBadgeIcon className="h-6 w-6" />
  },
  {
    name: 'Community Driven',
    description: "Our roadmap is shaped by our community's needs and feedback.",
    icon: <Icons.UserGroupIcon className="h-6 w-6" />
  },
]

export default function Mission() {
  return (
    <div className="relative isolate overflow-hidden py-24 sm:py-32">
      {/* Background decoration */}
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary to-secondary opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <div className="flex items-center">
            <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20">
              Our Mission
            </span>
          </div>
          <h2 className="mt-6 text-4xl font-outfit font-bold tracking-tight text-gray-900 sm:text-5xl">
            Empowering developers to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              build the future
            </span>
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            &quot;Notre mission est de fournir des solutions SaaS innovantes qui
            simplifient la vie des entrepreneurs. Nous croyons qu&#39;avec les bons
            outils, chaque entreprise peut prospérer dans le monde numérique
            d&#39;aujourd&#39;hui.&quot;
          </p>
        </div>

        {/* Stats */}
        <div className="mx-auto mt-16 flex flex-wrap justify-center gap-8 lg:gap-12">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center">
              <div className="text-4xl font-outfit font-bold text-gray-900">
                {stat.value}
              </div>
              <div className="mt-2 text-sm text-gray-600">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Values grid */}
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:mt-20 lg:max-w-none lg:grid-cols-3">
          {values.map((value) => (
            <div
              key={value.name}
              className="relative flex flex-col rounded-3xl bg-white p-8 shadow-xl ring-1 ring-gray-200/50 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-secondary p-3 text-white shadow-lg ring-1 ring-white/10">
                {value.icon}
              </div>

              {/* Content */}
              <div className="mt-6">
                <h3 className="text-lg font-outfit font-semibold text-gray-900">
                  {value.name}
                </h3>
                <p className="mt-2 text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Founder section */}
        <div className="relative mt-20">
          <div className="mx-auto max-w-4xl">
            <div className="relative overflow-hidden rounded-3xl bg-white px-6 py-12 shadow-xl ring-1 ring-gray-200/50 sm:px-12">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10" />
              <div className="relative flex flex-col items-center text-center sm:flex-row sm:text-left">
                <div className="mb-8 sm:mb-0 sm:mr-12">
                  <Image
                    src="/images/riadh.jpg"
                    alt="Riadh - CEO of Kitstarter"
                    width={200}
                    height={200}
                    className="rounded-2xl object-cover shadow-lg"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-outfit font-bold text-gray-900">
                    Meet Our Founder
                  </h3>
                  <p className="mt-2 text-lg font-semibold text-primary">
                    Riadh, 27 - CEO of Kitstarter
                  </p>
                  <p className="mt-4 text-gray-600 leading-relaxed max-w-2xl">
                    "As a developer myself, I understand the challenges of building modern SaaS applications. 
                    That's why I created Kitstarter - to help developers focus on what matters most: building 
                    unique features that bring value to their users. Our mission is to make SaaS development 
                    accessible, efficient, and enjoyable for everyone."
                  </p>
                  <div className="mt-6 flex justify-center sm:justify-start space-x-4">
                    <a
                      href="https://twitter.com/kitstarter"
                      className="text-gray-400 hover:text-primary transition-colors"
                    >
                      <span className="sr-only">Twitter</span>
                      <Icons.ChatBubbleLeftRightIcon className="h-6 w-6" />
                    </a>
                    <a
                      href="https://github.com/kitstarter"
                      className="text-gray-400 hover:text-primary transition-colors"
                    >
                      <span className="sr-only">GitHub</span>
                      <Icons.CodeBracketIcon className="h-6 w-6" />
                    </a>
                    <a
                      href="https://linkedin.com/in/kitstarter"
                      className="text-gray-400 hover:text-primary transition-colors"
                    >
                      <span className="sr-only">LinkedIn</span>
                      <Icons.UserIcon className="h-6 w-6" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Image section */}
        <div className="relative mt-16 sm:mt-20">
          <div className="relative overflow-hidden rounded-3xl bg-gray-900 px-6 py-20 shadow-2xl sm:px-12 sm:py-32 md:px-16">
            <Image
              src="/images/mission/team.jpg"
              alt="Our team collaborating"
              width={1920}
              height={1080}
              className="absolute inset-0 h-full w-full object-cover opacity-30"
            />

            <div className="relative mx-auto max-w-2xl text-center">
              <h3 className="text-3xl font-outfit font-bold tracking-tight text-white sm:text-4xl">
                Join us in revolutionizing SaaS development
              </h3>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Whether you're a solo developer or part of a team, our starter kit provides the foundation you need to build exceptional products. Join our community and be part of the next generation of SaaS builders.
              </p>
              <div className="mt-8 flex justify-center gap-4">
                <a
                  href="#join-discord"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-outfit font-semibold text-gray-900 shadow-lg transition-all duration-300 hover:bg-gray-100 hover:shadow-xl hover:-translate-y-0.5"
                >
                  <Icons.ChatBubbleLeftRightIcon className="h-4 w-4" />
                  <span>Join our Discord</span>
                </a>
                <a
                  href="#github"
                  className="inline-flex items-center gap-2 rounded-full bg-white/10 px-6 py-3 text-sm font-outfit font-semibold text-white shadow-lg transition-all duration-300 hover:bg-white/20 hover:shadow-xl hover:-translate-y-0.5"
                >
                  <Icons.CodeBracketIcon className="h-4 w-4" />
                  <span>View on GitHub</span>
                </a>
              </div>
            </div>
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
