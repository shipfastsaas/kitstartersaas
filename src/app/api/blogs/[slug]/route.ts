import { NextRequest, NextResponse } from 'next/server'
import { getBlog, updateBlog, deleteBlog } from '@/lib/db'

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const blog = await getBlog(params.slug)

    if (!blog) {
      return NextResponse.json({ error: 'Blog not found' }, { status: 404 })
    }

    return NextResponse.json(blog)
  } catch (error) {
    console.error('GET - Error:', error)
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const body = await request.json()
    console.log('PUT - Request body:', body)

    // Validate required fields
    const requiredFields = ['title', 'content', 'excerpt', 'coverImage']
    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json(
          { error: `${field} is required` },
          { status: 400 }
        )
      }
    }

    const updatedBlog = await updateBlog(params.slug, {
      ...body,
      updatedAt: new Date(),
    })

    if (!updatedBlog) {
      return NextResponse.json({ error: 'Blog not found' }, { status: 404 })
    }

    return NextResponse.json(updatedBlog)
  } catch (error) {
    console.error('PUT - Error:', error)
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const result = await deleteBlog(params.slug)

    if (!result) {
      return NextResponse.json({ error: 'Blog not found' }, { status: 404 })
    }

    return NextResponse.json({ message: 'Blog deleted successfully' })
  } catch (error) {
    console.error('DELETE - Error:', error)
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}
