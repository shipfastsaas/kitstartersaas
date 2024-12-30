'use client'

import Image from 'next/image'
import { StarIcon } from '@heroicons/react/24/solid'

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Founder at TechFlow',
      image: '/images/avatar1.jpg',
      quote: 'This template saved us weeks of development time. The code quality is excellent and the support is outstanding.',
    },
    {
      name: 'Michael Ross',
      role: 'CTO at DataPulse',
      image: '/images/avatar2.jpg',
      quote: 'Best investment we\'ve made. We launched our MVP in days instead of months. Highly recommended!',
    },
    {
      name: 'Emma Wilson',
      role: 'CEO at StartupX',
      image: '/images/avatar3.jpg',
      quote: 'The authentication and payment integration worked flawlessly. This is a game-changer for startups.',
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-primary/5 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-outfit text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            What Founders Say
          </h2>
          <p className="mt-4 font-jakarta text-lg leading-8 text-gray-600">
            Join hundreds of satisfied founders who launched their SaaS with our template
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-lg gap-8 lg:max-w-none lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="flex flex-col justify-between rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200"
            >
              <div>
                <div className="flex gap-x-1">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="h-5 w-5 text-yellow-400" />
                  ))}
                </div>
                <p className="mt-4 font-jakarta text-base leading-6 text-gray-600">
                  "{testimonial.quote}"
                </p>
              </div>
              <div className="mt-6 flex items-center gap-x-4">
                <Image
                  className="h-12 w-12 rounded-full bg-gray-50"
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={48}
                  height={48}
                />
                <div>
                  <h3 className="font-outfit text-sm font-semibold leading-7 tracking-tight text-gray-900">
                    {testimonial.name}
                  </h3>
                  <p className="font-jakarta text-sm leading-6 text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
