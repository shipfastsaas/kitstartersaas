'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import BlogForm from '@/components/BlogForm'

interface Blog {
  title: string
  content: string
  excerpt: string
  coverImage: string
  published: boolean
}

export default function EditBlogPage() {
  const params = useParams()
  const slug = params.slug as string
  const [blog, setBlog] = useState<Blog | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch(`/api/blogs/${slug}`)
        const data = await response.json()

        if (response.ok) {
          setBlog(data)
        } else {
          setError(data.error)
        }
      } catch (err) {
        setError('Error fetching blog')
      } finally {
        setLoading(false)
      }
    }

    if (slug) {
      fetchBlog()
    }
  }, [slug])

  if (loading) {
    return <div>Chargement...</div>
  }

  if (error) {
    return <div className="text-red-500">Error: {error}</div>
  }

  if (!blog) {
    return <div>Article non trouvé</div>
  }

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-base font-semibold leading-6 text-gray-900">
          Modifier l'article
        </h1>
        <p className="mt-2 text-sm text-gray-700">
          Modifiez les détails de votre article
        </p>
      </div>

      <div className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2">
        <div className="px-4 py-6 sm:p-8">
          <BlogForm initialData={blog} slug={slug} />
        </div>
      </div>
    </div>
  )
}
