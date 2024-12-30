import { ObjectId } from 'mongodb'

export interface Blog {
  _id?: ObjectId
  title: string
  slug: string
  content: string
  excerpt: string
  coverImage: string
  published: boolean
  createdAt: Date
  updatedAt: Date
}

export interface BlogInput {
  title: string
  content: string
  excerpt: string
  coverImage: string
  published: boolean
}

export interface UpdateBlogInput extends Partial<BlogInput> {
  published?: boolean
}
