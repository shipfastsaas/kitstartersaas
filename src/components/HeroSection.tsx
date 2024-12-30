import Image from 'next/image'
import Link from 'next/link'

export default function HeroSection() {
  return (
    <div className="relative isolate overflow-hidden bg-gradient-to-b from-primary/5 via-white to-white">
      {/* Background effects */}
      <div className="absolute inset-x-0 top-0 -z-10 transform-gpu overflow-hidden blur-3xl" aria-hidden="true">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary to-secondary opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
          {/* Startup metrics */}
          <div className="mt-4 flex items-center gap-x-6 text-sm">
            <div className="flex items-center gap-x-2 text-gray-600">
              <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20">
                Trusted by 1000+ Startups
              </span>
            </div>
            <div className="flex items-center gap-x-2">
              <div className="h-6 w-px bg-gray-200" />
              <div className="flex -space-x-2">
                {['JD', 'SM', 'AK'].map((initials, i) => (
                  <div 
                    key={i} 
                    className="inline-block h-8 w-8 rounded-full ring-2 ring-white relative overflow-hidden"
                    style={{
                      background: `linear-gradient(to bottom right, var(--tw-gradient-from), var(--tw-gradient-to))`,
                    }}
                  >
                    <div className="absolute inset-0 flex items-center justify-center text-sm font-semibold text-white">
                      {initials}
                    </div>
                  </div>
                ))}
                <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary text-xs font-medium text-white">
                  +99
                </div>
              </div>
            </div>
          </div>

          {/* Main heading */}
          <h1 className="mt-10 font-outfit text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Launch Your Startup{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              10x Faster
            </span>
          </h1>
          
          {/* Value proposition */}
          <p className="mt-6 font-jakarta text-lg leading-8 text-gray-600">
            Stop wasting weeks on technical setup. Get a production-ready Next.js starter kit with 
            everything you need: Authentication, Database, Payments, and beautiful UI components.
          </p>

          {/* Time savings calculator */}
          <div className="mt-8 p-4 bg-white/50 backdrop-blur-sm rounded-2xl border border-gray-200">
            <h3 className="font-outfit font-semibold text-gray-900">Time & Money Saved:</h3>
            <div className="mt-2 grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">200+</div>
                <div className="text-sm text-gray-600">Dev Hours</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">$20k</div>
                <div className="text-sm text-gray-600">Dev Costs</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">4</div>
                <div className="text-sm text-gray-600">Weeks Saved</div>
              </div>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="mt-10 flex items-center gap-x-6">
            <Link
              href="/signup"
              className="rounded-full bg-gradient-to-r from-[#7C3AED] to-[#DB2777] px-8 py-4 text-base font-outfit font-semibold text-white shadow-lg hover:bg-primary/90 hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              Start Building Free
              <span className="ml-2">&rarr;</span>
            </Link>
            <Link
              href="#demo"
              className="group flex items-center gap-x-2 text-base font-outfit font-semibold leading-6 text-gray-900 hover:text-primary transition-colors duration-300"
            >
              Live Demo
              <span aria-hidden="true" className="group-hover:translate-x-1 transition-transform duration-300">
                →
              </span>
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="mt-10 flex flex-col gap-4">
            <p className="text-sm font-semibold text-gray-900">Trusted by innovative startups</p>
            <div className="flex gap-x-8 grayscale opacity-70">
              <Image src="/images/meta.png" alt="Company 1" width={120} height={40} className="h-8 w-auto" />
              <Image src="/images/microsoft.png" alt="Company 2" width={120} height={40} className="h-8 w-auto" />
              <Image src="/images/mac.png" alt="Company 3" width={120} height={40} className="h-8 w-auto" />
            </div>
          </div>
        </div>

        {/* Preview section */}
        <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
          <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
            <div className="relative">
              {/* Code preview */}
              <div className="rounded-xl bg-gray-900/90 p-4 shadow-2xl ring-1 ring-white/10 backdrop-blur">
                <div className="flex items-center gap-2 mb-4">
                  <div className="h-3 w-3 rounded-full bg-red-500" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500" />
                  <div className="h-3 w-3 rounded-full bg-green-500" />
                </div>
                <pre className="text-sm text-green-400">
                  <code>
                    {`npm create next-app my-startup --template saas-starter
cd my-startup
npm run dev

✨ Your startup is ready at http://localhost:3000`}
                  </code>
                </pre>
              </div>

              {/* App preview */}
              <div className="mt-6">
                <Image
                  src="/images/hero-features.png"
                  alt="App preview"
                  width={1000}
                  height={700}
                  className="rounded-xl shadow-2xl ring-1 ring-gray-900/10"
                  priority
                />
              </div>

              {/* Feature badges */}
              <div className="absolute -left-8 top-[50%] flex flex-col gap-4">
                {['Auth', 'Database', 'Payments'].map((feature) => (
                  <div key={feature} className="rounded-full bg-white px-4 py-2 text-sm font-medium shadow-lg">
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
