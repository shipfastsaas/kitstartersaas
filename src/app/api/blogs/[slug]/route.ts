import { NextResponse } from 'next/server'
import { getBlog, updateBlog, deleteBlog } from '@/lib/db'
import { Blog, UpdateBlogInput } from '@/types/blog'

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  try {
    const slug = (await params).slug
    console.log('GET - Fetching blog with slug:', slug)
    const blog = await getBlog(slug)

    if (!blog) {
      console.log('GET - Blog not found')
      return NextResponse.json({ error: 'Blog not found' }, { status: 404 })
    }

    console.log('GET - Blog found:', blog)
    return NextResponse.json(blog)
  } catch (error) {
    console.error('GET - Error:', error)
    const errorMessage = error instanceof Error ? error.message : 'Error fetching blog'
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    )
  }
}

export async function PUT(
  request: Request,
  { params }: { params: { slug: string } }
) {
  try {
    const slug = (await params).slug
    const body = await request.json() as UpdateBlogInput
    console.log('PUT - Updating blog with slug:', slug)
    console.log('PUT - Update data:', body)

    const result = await updateBlog(slug, {
      ...body,
      updatedAt: new Date(),
    })

    console.log('PUT - Update result:', result)

    if (result.matchedCount === 0) {
      console.log('PUT - Blog not found')
      return NextResponse.json({ error: 'Blog not found' }, { status: 404 })
    }

    const updatedBlog = await getBlog(slug)
    console.log('PUT - Updated blog:', updatedBlog)
    return NextResponse.json(updatedBlog)
  } catch (error) {
    console.error('PUT - Error:', error)
    const errorMessage = error instanceof Error ? error.message : 'Error updating blog'
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    )
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { slug: string } }
) {
  try {
    const slug = (await params).slug
    console.log('DELETE - Deleting blog with slug:', slug)
    const result = await deleteBlog(slug)

    console.log('DELETE - Delete result:', result)

    if (result.deletedCount === 0) {
      console.log('DELETE - Blog not found')
      return NextResponse.json({ error: 'Blog not found' }, { status: 404 })
    }

    return NextResponse.json({ message: 'Blog deleted successfully' })
  } catch (error) {
    console.error('DELETE - Error:', error)
    const errorMessage = error instanceof Error ? error.message : 'Error deleting blog'
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    )
  }
}
