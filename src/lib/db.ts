import { MongoClient as MC, ObjectId } from 'mongodb'
import { Blog, BlogInput, UpdateBlogInput } from '@/types/blog'
import { clientPromise } from './mongodb'

export const MongoClient = MC

async function getCollection(name: string) {
  const client = await clientPromise
  const db = client.db()
  return db.collection(name)
}

export async function createBlog(blogData: BlogInput): Promise<Blog> {
  const collection = await getCollection('blogs')
  const now = new Date()
  
  const blog = {
    ...blogData,
    slug: blogData.title.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
    createdAt: now,
    updatedAt: now,
  }

  const result = await collection.insertOne(blog)
  return {
    ...blog,
    _id: result.insertedId,
  } as Blog
}

export async function updateBlog(slug: string, blogData: UpdateBlogInput): Promise<Blog | null> {
  const collection = await getCollection('blogs')
  const result = await collection.findOneAndUpdate(
    { slug },
    { 
      $set: { 
        ...blogData,
        updatedAt: new Date()
      } 
    },
    { returnDocument: 'after' }
  )

  if (!result) return null
  return result.value as unknown as Blog
}

export async function getBlog(slug: string): Promise<Blog | null> {
  const collection = await getCollection('blogs')
  return collection.findOne<Blog>({ slug })
}

export async function getBlogs(page = 1, limit = 10, search = ''): Promise<Blog[]> {
  const collection = await getCollection('blogs')
  const query = search ? {
    $or: [
      { title: { $regex: search, $options: 'i' } },
      { content: { $regex: search, $options: 'i' } },
      { excerpt: { $regex: search, $options: 'i' } },
    ]
  } : {}

  return collection
    .find<Blog>(query)
    .sort({ createdAt: -1 })
    .skip((page - 1) * limit)
    .limit(limit)
    .toArray()
}

export async function deleteBlog(slug: string): Promise<boolean> {
  const collection = await getCollection('blogs')
  const result = await collection.deleteOne({ slug })
  return result.deletedCount > 0
}
