import { clientPromise } from './mongodb'

export async function getCollection(collectionName: string) {
  const client = await clientPromise
  const db = client.db()
  return db.collection(collectionName)
}

export async function createBlog(data: any) {
  const collection = await getCollection('blogs')
  return collection.insertOne(data)
}

export async function updateBlog(slug: string, data: any) {
  console.log('updateBlog - Input:', { slug, data })
  const collection = await getCollection('blogs')
  try {
    // Exclure _id des données à mettre à jour
    const { _id, ...updateData } = data
    const result = await collection.updateOne(
      { slug },
      { $set: updateData }
    )
    console.log('updateBlog - Result:', result)
    return result
  } catch (error) {
    console.error('updateBlog - Error:', error)
    throw error
  }
}

export async function deleteBlog(slug: string) {
  const collection = await getCollection('blogs')
  return collection.deleteOne({ slug })
}

export async function getBlog(slug: string) {
  const collection = await getCollection('blogs')
  return collection.findOne({ slug })
}

export async function getBlogs(page = 1, limit = 10, search = '') {
  const collection = await getCollection('blogs')
  const skip = (page - 1) * limit

  const query = search
    ? {
        $or: [
          { title: { $regex: search, $options: 'i' } },
          { content: { $regex: search, $options: 'i' } },
        ],
      }
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
    blogs,
    totalPages: Math.ceil(total / limit),
    currentPage: page,
  }
}
