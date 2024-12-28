import { useState } from 'react'
import Link from 'next/link'
import { PencilIcon, TrashIcon } from '@heroicons/react/24/outline'
import { format } from 'date-fns'
import { fr } from 'date-fns/locale'

interface Blog {
  _id: string
  title: string
  slug: string
  excerpt: string
  published: boolean
  createdAt: string
  coverImage: string
}

export default function BlogsTable({
  blogs,
  onDelete,
}: {
  blogs: Blog[]
  onDelete: (slug: string) => void
}) {
  const [deletingSlug, setDeletingSlug] = useState<string | null>(null)

  const handleDelete = async (slug: string) => {
    if (confirm('Êtes-vous sûr de vouloir supprimer cet article ?')) {
      setDeletingSlug(slug)
      await onDelete(slug)
      setDeletingSlug(null)
    }
  }

  return (
    <div className="mt-8 flow-root">
      <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-300">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                  >
                    Image
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Titre
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Date
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Statut
                  </th>
                  <th
                    scope="col"
                    className="relative py-3.5 pl-3 pr-4 sm:pr-6"
                  >
                    <span className="sr-only">Actions</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {blogs.map((blog) => (
                  <tr key={blog._id}>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 sm:pl-6">
                      <img
                        src={blog.coverImage}
                        alt={blog.title}
                        className="h-12 w-12 rounded-md object-cover"
                      />
                    </td>
                    <td className="whitespace-nowrap px-3 py-4">
                      <div className="flex flex-col">
                        <span className="font-medium text-gray-900">
                          {blog.title}
                        </span>
                        <span className="text-sm text-gray-500">
                          {blog.excerpt}
                        </span>
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {format(new Date(blog.createdAt), 'dd MMMM yyyy', {
                        locale: fr,
                      })}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm">
                      <span
                        className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${
                          blog.published
                            ? 'bg-green-100 text-green-800'
                            : 'bg-yellow-100 text-yellow-800'
                        }`}
                      >
                        {blog.published ? 'Publié' : 'Brouillon'}
                      </span>
                    </td>
                    <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                      <div className="flex justify-end gap-2">
                        <Link
                          href={`/dashboard/blog/${blog.slug}/edit`}
                          className="text-purple-600 hover:text-purple-900"
                        >
                          <PencilIcon className="h-5 w-5" aria-hidden="true" />
                        </Link>
                        <button
                          onClick={() => handleDelete(blog.slug)}
                          disabled={deletingSlug === blog.slug}
                          className="text-red-600 hover:text-red-900"
                        >
                          <TrashIcon className="h-5 w-5" aria-hidden="true" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
