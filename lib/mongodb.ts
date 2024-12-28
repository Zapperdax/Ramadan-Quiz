import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGODB_URI!);

export async function connectToDatabase() {
  try {
    // Attempt to connect to MongoDB
    await client.connect();

    // Optionally, you can use a ping command to verify the connection
    await client.db().command({ ping: 1 });

    console.log("MongoDB connected successfully.");
    return client.db("ramadan-quiz"); // Replace with your database name
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw new Error("Could not connect to the database");
  }
}
