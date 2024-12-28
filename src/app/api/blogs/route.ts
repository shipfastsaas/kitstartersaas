import { NextResponse } from 'next/server'
import { createBlog, getBlogs } from '@/lib/db'

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // Créer un slug à partir du titre
    const slug = body.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)+/g, '')

    const result = await createBlog({
      ...body,
      slug,
      createdAt: new Date(),
      updatedAt: new Date(),
    })

    return NextResponse.json(result)
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || 'Error creating blog' },
      { status: 500 }
    )
  }
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '10')
    const search = searchParams.get('search') || ''

    const result = await getBlogs(page, limit, search)

    return NextResponse.json(result)
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || 'Error fetching blogs' },
      { status: 500 }
    )
  }
}
