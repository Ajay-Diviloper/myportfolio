import { MongoClient } from "mongodb";

// Use environment variable for the MongoDB URI
const client = new MongoClient(process.env.MONGODB_URI || "mongodb://localhost:27017");

const dbName = "contactDB"; // Name of your database

let db: any;

// Connect to the database
export async function connectToDatabase() {
  if (db) {
    return { db, client }; // Return the existing connection if it's already established
  }
  
  try {
    await client.connect(); // Establish the connection
    db = client.db(dbName); // Select your database
    return { db, client };
  } catch (error) {
    console.error("MongoDB connection failed:", error);
    throw new Error("Failed to connect to MongoDB");
  }
}

// Optionally, you can export a function to close the connection when needed
export async function closeConnection() {
  if (client) {
    await client.close();
  }
}

