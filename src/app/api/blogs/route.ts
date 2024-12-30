import { NextResponse } from 'next/server'
import { createBlog, getBlogs } from '@/lib/db'
import type { Blog } from '@/types/blog'

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // Créer un slug à partir du titre
    const slug = body.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)+/g, '')

    const blog: Blog = {
      ...body,
      slug,
      createdAt: new Date(),
      updatedAt: new Date(),
    }

    const result = await createBlog(blog)

    return NextResponse.json({ blog: result })
  } catch (error) {
    console.error('Error creating blog:', error)
    return NextResponse.json({ error: 'Failed to create blog' }, { status: 500 })
  }
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '10')
    const search = searchParams.get('search') || ''

    const result = await getBlogs(page, limit, search)

    return NextResponse.json({ blogs: result })
  } catch (error) {
    console.error('Error fetching blogs:', error)
    return NextResponse.json({ error: 'Failed to fetch blogs' }, { status: 500 })
  }
}
