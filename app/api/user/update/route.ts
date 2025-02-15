import { NextResponse } from "next/server";
import User from "@/models/User";

export async function POST(request: Request) {
  try {
    // Parse request body
    const { userId, subject, marks, status } = await request.json();

    // Update the marks map for the given subject
    const result = await User.updateOne(
      { _id: userId, [`marks.${subject}`]: { $exists: true } },
      {
        $set: {
          [`marks.${subject}.marks`]: marks,
          [`marks.${subject}.status`]: status,
        },
      }
    );

    if (result.modifiedCount === 0) {
      return NextResponse.json(
        { error: "No changes made to the user" },
        { status: 500 }
      );
    }

    return NextResponse.json({ message: "User marks updated successfully" });
  } catch (error: any) {
    console.error("Error updating user:", error);
    return NextResponse.json(
      { error: "Failed to update user" },
      { status: 500 }
    );
  }
}
