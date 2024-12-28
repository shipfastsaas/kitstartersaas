import { NextResponse } from 'next/server'
import * as blogService from '@/lib/blog'

export async function POST(request: Request) {
  try {
    const data = await request.json()
    const post = await blogService.createPost({
      ...data,
      authorId: 'temp_user_id', // TODO: Get from authenticated user
    })
    return NextResponse.json(post)
  } catch (error) {
    console.error('Failed to create post:', error)
    return NextResponse.json(
      { error: 'Failed to create post' },
      { status: 500 }
    )
  }
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const limit = Number(searchParams.get('limit')) || 10
    const skip = Number(searchParams.get('skip')) || 0
    const published = searchParams.get('published') === 'true'

    const posts = await blogService.getPosts({ limit, skip, published })
    return NextResponse.json(posts)
  } catch (error) {
    console.error('Failed to fetch posts:', error)
    return NextResponse.json(
      { error: 'Failed to fetch posts' },
      { status: 500 }
    )
  }
}
