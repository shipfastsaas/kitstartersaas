import { clientPromise, ObjectId } from './mongodb'

export async function createPost(data: {
  title: string
  content: string
  tags: string[]
  authorId: string
}) {
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
  })
}

export async function updatePost(id: string, data: {
  title?: string
  content?: string
  tags?: string[]
  published?: boolean
}) {
  const client = await clientPromise
  const db = client.db('saas-template')
  
  const updateData: any = {
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

export async function deletePost(id: string) {
  const client = await clientPromise
  const db = client.db('saas-template')
  
  return db.collection('posts').deleteOne({ _id: new ObjectId(id) })
}

export async function getPost(id: string) {
  const client = await clientPromise
  const db = client.db('saas-template')
  
  return db.collection('posts').findOne({ _id: new ObjectId(id) })
}

export async function getPosts(options?: {
  limit?: number
  skip?: number
  published?: boolean
}) {
  const client = await clientPromise
  const db = client.db('saas-template')
  
  const query = options?.published !== undefined ? { published: options.published } : {}
  
  return db
    .collection('posts')
    .find(query)
    .sort({ createdAt: -1 })
    .skip(options?.skip || 0)
    .limit(options?.limit || 10)
    .toArray()
}

export async function incrementViews(id: string) {
  const client = await clientPromise
  const db = client.db('saas-template')
  
  return db.collection('posts').updateOne(
    { _id: new ObjectId(id) },
    { $inc: { views: 1 } }
  )
}
