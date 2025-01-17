import mongoose from "mongoose";

export async function connectDB() {
  if (mongoose.connection.readyState >= 1) {
    return; // Already connected
  }

  const MONGO_URI = process.env.MONGO_URI; // Ensure this is set in your environment variables
  if (!MONGO_URI) {
    throw new Error("MONGO_URI is not defined in environment variables");
  }

  await mongoose.connect(MONGO_URI, {
    serverSelectionTimeoutMS: 10000,
  });
  mongoose.set('bufferCommands', false);

}
