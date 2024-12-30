import { clientPromise, ObjectId } from './mongodb'
import { Blog } from '@/types/blog'

interface PostData {
  title: string
  content: string
  tags: string[]
  authorId: string
}

interface UpdatePostData {
  title?: string
  content?: string
  tags?: string[]
  published?: boolean
}

interface GetPostsOptions {
  limit?: number
  skip?: number
  published?: boolean
}

interface Post {
  _id: ObjectId
  title: string
  content: string
  tags: string[]
  authorId: string
  slug: string
  views: number
  published: boolean
  createdAt: Date
  updatedAt: Date
}

export async function createPost(data: PostData): Promise<Post> {
  const client = await clientPromise
  const db = client.db('saas-template')
  
  const slug = data.title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')

  return db.collection('posts').insertOne({
    ...data,
    slug,
    views: 0,
    published: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  }) as Promise<Post>
}

export async function updatePost(id: string, data: UpdatePostData): Promise<{ _id: ObjectId } | null> {
  const client = await clientPromise
  const db = client.db('saas-template')
  
  const updateData: UpdatePostData & { updatedAt: Date } = {
    ...data,
    updatedAt: new Date(),
  }

  if (data.title) {
    updateData.slug = data.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '')
  }

  return db.collection('posts').updateOne(
    { _id: new ObjectId(id) },
    { $set: updateData }
  )
}

export async function deletePost(id: string): Promise<{ deletedCount: number }> {
  const client = await clientPromise
  const db = client.db('saas-template')
  
  return db.collection('posts').deleteOne({ _id: new ObjectId(id) })
}

export async function getPost(id: string): Promise<Post | null> {
  const client = await clientPromise
  const db = client.db('saas-template')
  
  return db.collection('posts').findOne({ _id: new ObjectId(id) }) as Promise<Post | null>
}

export async function getPosts(options?: GetPostsOptions): Promise<Post[]> {
  const client = await clientPromise
  const db = client.db('saas-template')
  
  const query = options?.published !== undefined ? { published: options.published } : {}
  
  return db
    .collection('posts')
    .find(query)
    .sort({ createdAt: -1 })
    .skip(options?.skip || 0)
    .limit(options?.limit || 10)
    .toArray() as Promise<Post[]>
}

export async function incrementViews(id: string): Promise<{ _id: ObjectId } | null> {
  const client = await clientPromise
  const db = client.db('saas-template')
  
  return db.collection('posts').updateOne(
    { _id: new ObjectId(id) },
    { $inc: { views: 1 } }
  )
}
