import { MongoClient, ObjectId } from 'mongodb'

declare global {
  let _mongoClientPromise: Promise<MongoClient>
}

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL is not defined in environment variables')
}

const uri = process.env.DATABASE_URL
console.log('MongoDB URI:', uri.replace(/:[^:@]+@/, ':****@')) // Log URI with hidden password

const options = {
  maxPoolSize: 10,
  serverSelectionTimeoutMS: 5000,
  socketTimeoutMS: 45000,
}

let clientPromise: Promise<MongoClient>

if (process.env.NODE_ENV === 'development') {
  if (!global._mongoClientPromise) {
    const client = new MongoClient(uri, options)
    global._mongoClientPromise = client.connect()
  }
  clientPromise = global._mongoClientPromise
} else {
  const client = new MongoClient(uri, options)
  clientPromise = client.connect()
}

// Test the connection
clientPromise
  .then(() => console.log('Successfully connected to MongoDB'))
  .catch((error) => console.error('Failed to connect to MongoDB:', error))

export { clientPromise, ObjectId }
