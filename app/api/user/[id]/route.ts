import { NextResponse } from "next/server";
import User from "@/models/User";

// The handler for POST requests to fetch user data by userId
export async function POST(req: Request) {
  try {
    const { userId } = await req.json(); // Extract userId from the request body
    
    if (!userId) {
      return NextResponse.json({ error: "User ID is required" }, { status: 400 });
    }
    
    // // Find the user by ID
    const user = await User.findById({_id: userId});
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }
    // Return the found user data
    return NextResponse.json(user);
  } catch (error) {
    console.error("Error fetching user:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
