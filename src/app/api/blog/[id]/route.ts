import { NextResponse } from 'next/server'
import { getPost, deletePost, updatePost } from '@/lib/blog'
import { ObjectId } from 'mongodb'

export async function GET(
  _req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const post = await getPost(params.id)
    if (!post) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 })
    }
    return NextResponse.json(post)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch post' }, { status: 500 })
  }
}

export async function DELETE(
  _req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const success = await deletePost(params.id)
    if (!success) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 })
    }
    return NextResponse.json({ message: 'Post deleted successfully' })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete post' }, { status: 500 })
  }
}

export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const data = await req.json()
    const post = await updatePost(params.id, data)
    if (!post) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 })
    }
    return NextResponse.json(post)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update post' }, { status: 500 })
  }
}
