'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { PlusIcon } from '@heroicons/react/24/outline'
import BlogsTable from '@/components/BlogsTable'

interface Blog {
  _id: string
  title: string
  slug: string
  excerpt: string
  published: boolean
  createdAt: string
  coverImage: string
}

export default function BlogPage() {
  const [blogs, setBlogs] = useState<Blog[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const fetchBlogs = async () => {
    try {
      const response = await fetch('/api/blogs')
      const data = await response.json()
      if (response.ok) {
        setBlogs(data.blogs)
      } else {
        setError(data.error)
      }
    } catch (err) {
      setError('Error fetching blogs')
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (slug: string) => {
    try {
      const response = await fetch(`/api/blogs/${slug}`, {
        method: 'DELETE',
      })
      const data = await response.json()
      
      if (response.ok) {
        fetchBlogs() // Recharger la liste après suppression
      } else {
        setError(data.error)
      }
    } catch (err) {
      setError('Error deleting blog')
    }
  }

  useEffect(() => {
    fetchBlogs()
  }, [])

  if (loading) {
    return <div>Chargement...</div>
  }

  if (error) {
    return <div className="text-red-500">Error: {error}</div>
  }

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">
            Articles
          </h1>
          <p className="mt-2 text-sm text-gray-700">
            Liste de tous vos articles, publiés et brouillons
          </p>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <Link
            href="/dashboard/blog/new"
            className="inline-flex items-center gap-x-1.5 rounded-md bg-purple-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
          >
            <PlusIcon className="-ml-0.5 h-5 w-5" aria-hidden="true" />
            Nouvel article
          </Link>
        </div>
      </div>

      <BlogsTable blogs={blogs} onDelete={handleDelete} />
    </div>
  )
}
