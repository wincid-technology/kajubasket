// pages/api/user.js

import { connectDB } from "@/lib/mongodb";


export default async function handler(req, res) {
  try {
    // Connect to MongoDB
    const db = await connectDB();

    // Access the "users" collection from the database
    const usersCollection = db.collection("users");

    // Fetch the user data based on the session or query
    const user = await usersCollection.findOne({}); // Customize the query as needed

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Return the user data as JSON
    res.status(200).json(user);
  } catch (error) {
    console.error("Error fetching user data: ", error);
    res.status(500).json({ error: "Failed to fetch user data" });
  }
}
