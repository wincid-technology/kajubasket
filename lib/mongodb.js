// lib/mongodb.js

import { MongoClient } from "mongodb";

// Create a MongoDB client instance (you should use environment variables to store the URI)
const client = new MongoClient(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

export async function connectToDatabase() {
  if (client.isConnected()) {
    return client.db(); // Return the existing connection if already connected
  }

  await client.connect(); // Connect if not already connected
  return client.db(); // Return the database instance
}
