import { NextResponse } from "next/server";
import User from "@/models/User";

// The handler for POST requests to fetch user data by userId
export async function GET() {
  try {
    const users = await User.find({});

    if (!users) {
      return NextResponse.json({ error: "No Users Found" }, { status: 400 });
    }

    return NextResponse.json(users);
  } catch (error) {
    console.error("Error fetching user:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
