

import { connectDB } from "@/lib/mongodb";
import { NextResponse } from "next/server";
import bcrypt from 'bcryptjs'
import User from "@/models/user";



export async function POST(req) {

  try {
    const { name, email, phone, pass } = await req.json();

    // Validate the request body
    if (!name || !email || !phone || !pass) {
      return NextResponse.json(
        { message: "All fields are required!" },
        { status: 400 }
      );
    }

    // Connect to the database
    await connectDB();

    // Check if the email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { message: "A user with this email already exists!" },
        { status: 400 }
      );
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(pass, 10);

    // Create and save the new user
    const newUser = new User({
      name,
      email,
      phone,
      pass: hashedPassword,
    });

    const savedUser = await newUser.save();

    // Return a success response
    return NextResponse.json(
      {
        message: "User registered successfully!",
        user: savedUser,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error in /api/register:", error.message);

    // Return an error response
    return NextResponse.json(
      { message: "An error occurred while registering user.", error: error.message },
      { status: 500 }
    );
  }
}
