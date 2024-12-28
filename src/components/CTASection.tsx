import Link from 'next/link'
import { ArrowRightIcon } from '@heroicons/react/24/outline'

export default function CTASection() {
  return (
    <div className="relative isolate mt-8 px-6 py-12 sm:mt-16 sm:py-16 lg:px-8">
      {/* Décoration d'arrière-plan */}
      <div
        className="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl"
        aria-hidden="true"
      >
        <div
          className="ml-[max(50%,38rem)] aspect-[1313/771] w-[82.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div
        className="absolute inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden pt-16 opacity-25 blur-3xl sm:pt-24 xl:justify-end"
        aria-hidden="true"
      >
        <div
          className="ml-[-22rem] aspect-[1313/771] w-[82.0625rem] flex-none origin-top-right rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] xl:ml-0 xl:mr-[calc(50%-12rem)]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>

      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
          Boost your productivity.
          <br />
          Start using our template today.
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-base leading-7 text-gray-600 sm:text-lg">
          Join thousands of developers who have already accelerated their projects.
        </p>
        <div className="mt-6 flex items-center justify-center gap-x-6">
          <Link
            href="/pricing"
            className="rounded-full bg-gradient-to-r from-[#7C3AED] to-[#DB2777] px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
          >
            Get started
          </Link>
          <Link
            href="/docs"
            className="group flex items-center gap-x-2 text-sm font-semibold leading-6 text-gray-900"
          >
            View documentation
            <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Social Proof */}
        <div className="mt-8 flex items-center justify-center gap-x-6">
          <div className="flex -space-x-2">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className={`relative inline-block h-6 w-6 rounded-full border-2 border-white bg-gradient-to-r ${
                  i % 2 === 0
                    ? 'from-purple-400 to-pink-400'
                    : 'from-pink-400 to-purple-400'
                }`}
              />
            ))}
          </div>
          <div className="text-sm leading-6 text-gray-600">
            <span className="font-semibold text-gray-900">500+</span> developers already onboard
          </div>
        </div>
      </div>
    </div>
  )
}
