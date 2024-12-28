import { MongoClient, ObjectId } from 'mongodb'

declare global {
  var _mongoClientPromise: Promise<MongoClient>
}

if (!process.env.DATABASE_URL) {
  throw new Error('Please add your Mongo URI to .env.local')
}

const uri = process.env.DATABASE_URL
const options = {}

let clientPromise: Promise<MongoClient>

if (process.env.NODE_ENV !== 'production') {
  if (!global._mongoClientPromise) {
    const client = new MongoClient(uri, options)
    global._mongoClientPromise = client.connect()
  }
  clientPromise = global._mongoClientPromise
} else {
  const client = new MongoClient(uri, options)
  clientPromise = client.connect()
}

export { clientPromise, ObjectId }
