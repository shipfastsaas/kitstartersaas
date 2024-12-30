import Image from 'next/image'
import * as Icons from '@heroicons/react/24/outline'

const testimonials = [
  {
    content: "This starter kit saved us weeks of development time. The code quality is exceptional, and the support is outstanding. Highly recommend for any SaaS project!",
    author: {
      name: 'Sarah Chen',
      role: 'CTO at TechFlow',
      image: '/images/testimonials/sarah.jpg'
    },
    rating: 5,
    company: {
      name: 'TechFlow',
      logo: '/images/companies/techflow.svg'
    }
  },
  {
    content: "We launched our MVP in just 2 weeks using this template. The authentication and payment integration worked flawlessly. Best investment we've made!",
    author: {
      name: 'Michael Torres',
      role: 'Founder at DataSync',
      image: '/images/testimonials/michael.jpg'
    },
    rating: 5,
    company: {
      name: 'DataSync',
      logo: '/images/companies/datasync.svg'
    }
  },
  {
    content: "The UI components are beautiful and the code structure is clean. This template has everything you need to build a professional SaaS product.",
    author: {
      name: 'Emily Watson',
      role: 'Lead Developer',
      image: '/images/testimonials/emily.jpg'
    },
    rating: 5,
    company: {
      name: 'CloudStack',
      logo: '/images/companies/cloudstack.svg'
    }
  },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Icons.StarIcon
          key={i}
          className={`h-5 w-5 ${
            i < rating ? 'fill-yellow-400 text-yellow-400' : 'fill-gray-200 text-gray-200'
          }`}
        />
      ))}
    </div>
  )
}

export default function Testimonials() {
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
              Trusted by developers
            </span>
          </div>
          <h2 className="mt-6 text-4xl font-outfit font-bold tracking-tight text-gray-900 sm:text-5xl">
            Loved by{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              thousands
            </span>
            {' '}of developers
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 max-w-[40ch] mx-auto">
            Join the community of developers who have already accelerated their development process with our starter kit.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.author.name}
              className={`relative flex flex-col rounded-3xl bg-white p-8 shadow-xl ring-1 ring-gray-200/50 transition-all duration-300 hover:shadow-2xl ${
                index === 1 ? 'lg:scale-105' : ''
              }`}
            >
              {/* Company logo */}
              <div className="mb-6 h-12">
                <Image
                  src={testimonial.company.logo}
                  alt={testimonial.company.name}
                  width={120}
                  height={48}
                  className="h-8 w-auto object-contain"
                />
              </div>

              {/* Rating */}
              <StarRating rating={testimonial.rating} />

              {/* Testimonial content */}
              <blockquote className="mt-6 flex-1">
                <p className="text-lg leading-relaxed text-gray-900">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
              </blockquote>

              {/* Author */}
              <div className="mt-8 flex items-center gap-4">
                <Image
                  className="h-12 w-12 rounded-full object-cover"
                  src={testimonial.author.image}
                  alt={testimonial.author.name}
                  width={48}
                  height={48}
                />
                <div>
                  <div className="font-outfit font-semibold text-gray-900">
                    {testimonial.author.name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.author.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-16 flex flex-col items-center">
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-outfit font-bold text-gray-900">4.9</span>
            <StarRating rating={5} />
            <span className="ml-2 text-gray-600">from 200+ reviews</span>
          </div>
          <div className="mt-4 flex items-center gap-8">
            <Image
              src="/images/trust/trustpilot.svg"
              alt="Trustpilot"
              width={120}
              height={30}
              className="h-8 w-auto grayscale opacity-70"
            />
            <Image
              src="/images/trust/producthunt.svg"
              alt="Product Hunt"
              width={120}
              height={30}
              className="h-8 w-auto grayscale opacity-70"
            />
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
