import { MongoClient, ObjectId } from 'mongodb'
import { Blog, BlogInput, UpdateBlogInput } from '@/types/blog'
import { clientPromise } from './mongodb'

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
    _id: result.insertedId.toString(),
  } as Blog
}

export async function updateBlog(slug: string, blogData: UpdateBlogInput): Promise<Blog | null> {
  const collection = await getCollection('blogs')
  const result = await collection.findOneAndUpdate(
    { slug },
    { $set: blogData }
  )

  if (!result) return null

  const updatedBlog = await getBlog(slug)
  return updatedBlog
}

export async function getBlog(slug: string): Promise<Blog | null> {
  const collection = await getCollection('blogs')
  const result = await collection.findOne({ slug })
  
  if (!result) return null

  return {
    ...result,
    _id: result._id.toString(),
    createdAt: new Date(result.createdAt),
    updatedAt: new Date(result.updatedAt),
  } as Blog
}

export async function getBlogs(page = 1, limit = 10, search = '') {
  const collection = await getCollection('blogs')
  const skip = (page - 1) * limit

  const query = search
    ? { title: { $regex: search, $options: 'i' } }
    : {}

  const [blogs, total] = await Promise.all([
    collection
      .find(query)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .toArray(),
    collection.countDocuments(query),
  ])

  return {
    blogs: blogs.map((blog) => ({
      ...blog,
      _id: blog._id.toString(),
      createdAt: new Date(blog.createdAt),
      updatedAt: new Date(blog.updatedAt),
    })) as Blog[],
    total,
    page,
    totalPages: Math.ceil(total / limit),
  }
}

export async function deleteBlog(slug: string): Promise<boolean> {
  const collection = await getCollection('blogs')
  const result = await collection.deleteOne({ slug })
  return result.deletedCount === 1
}
