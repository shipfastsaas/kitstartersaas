import { NextResponse } from 'next/server'
import { getBlog, updateBlog, deleteBlog } from '@/lib/db'

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
  } catch (error: any) {
    console.error('GET - Error:', error)
    return NextResponse.json(
      { error: error.message || 'Error fetching blog' },
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
    const body = await request.json()
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
  } catch (error: any) {
    console.error('PUT - Error:', error)
    return NextResponse.json(
      { error: error.message || 'Error updating blog' },
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
  } catch (error: any) {
    console.error('DELETE - Error:', error)
    return NextResponse.json(
      { error: error.message || 'Error deleting blog' },
      { status: 500 }
    )
  }
}
