'use client'

import BlogForm from '@/components/BlogForm'

export default function NewBlogPage() {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-base font-semibold leading-6 text-gray-900">
          Nouvel article
        </h1>
        <p className="mt-2 text-sm text-gray-700">
          Créez un nouvel article pour votre blog
        </p>
      </div>

      <div className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2">
        <div className="px-4 py-6 sm:p-8">
          <BlogForm />
        </div>
      </div>
    </div>
  )
}
