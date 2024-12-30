import { ObjectId } from 'mongodb'
import { clientPromise } from './mongodb'

export interface Post {
  _id?: ObjectId
  title: string
  content: string
  slug: string
  tags: string[]
  published: boolean
  createdAt?: Date
  updatedAt?: Date
  views?: number
}

export interface GetPostsOptions {
  published?: boolean
  limit?: number
  skip?: number
}

export async function getPost(id: string): Promise<Post | null> {
  const client = await clientPromise
  const db = client.db()
  return db.collection<Post>('posts').findOne({ _id: new ObjectId(id) })
}

export async function getPosts(options?: GetPostsOptions): Promise<Post[]> {
  const client = await clientPromise
  const db = client.db()
  
  const query = options?.published !== undefined ? { published: options.published } : {}
  
  return db
    .collection<Post>('posts')
    .find(query)
    .skip(options?.skip ?? 0)
    .limit(options?.limit ?? 10)
    .toArray()
}

export async function createPost(data: Omit<Post, '_id' | 'createdAt' | 'updatedAt'>): Promise<Post> {
  const client = await clientPromise
  const db = client.db()
  
  const post = {
    ...data,
    createdAt: new Date(),
    updatedAt: new Date(),
    views: 0
  }
  
  const result = await db.collection<Post>('posts').insertOne(post)
  return { ...post, _id: result.insertedId }
}

export async function updatePost(id: string, data: Partial<Post>): Promise<Post | null> {
  const client = await clientPromise
  const db = client.db()
  
  const update = {
    $set: {
      ...data,
      updatedAt: new Date()
    }
  }

  const result = await db.collection<Post>('posts').findOneAndUpdate(
    { _id: new ObjectId(id) },
    update,
    { returnDocument: 'after' }
  )

  if (!result) return null
  return result as unknown as Post
}

export async function deletePost(id: string): Promise<boolean> {
  const client = await clientPromise
  const db = client.db()
  const result = await db.collection('posts').deleteOne({ _id: new ObjectId(id) })
  return result.deletedCount > 0
}

export async function incrementViews(id: string): Promise<void> {
  const client = await clientPromise
  const db = client.db()
  await db.collection('posts').updateOne(
    { _id: new ObjectId(id) },
    { $inc: { views: 1 } }
  )
}
