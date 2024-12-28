import { MongoClient, ObjectId } from 'mongodb'

if (!process.env.DATABASE_URL) {
  throw new Error('Please add your Mongo URI to .env.local')
}

const uri = process.env.DATABASE_URL
const options = {}

const client: MongoClient = new MongoClient(uri, options)
const clientPromise: Promise<MongoClient> = client.connect()

if (process.env.NODE_ENV !== 'production') {
  declare global {
    var _mongoClientPromise: Promise<MongoClient>
  }
  global._mongoClientPromise = clientPromise
}

export { clientPromise, ObjectId }
