import { connectToDatabase } from "@/app/lib/mongodb";
import { Contact } from "@/app/model/contact";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { firstName, lastName, email, phone, option, message }: Contact = await req.json();

    // Validate required fields
    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
    }

    // Connect to MongoDB
    const { db } = await connectToDatabase();

    // Insert the contact data into the "contacts" collection
    const result = await db.collection("contacts").insertOne({
      firstName,
      lastName,
      email,
      phone,
      option,
      message,
      createdAt: new Date(),
    });

    return NextResponse.json({ message: "Message sent successfully!", result }, { status: 200 });
  } catch (error) {
    console.error("Error saving message:", error);
    return NextResponse.json({ message: "Failed to send message" }, { status: 500 });
  }
}
