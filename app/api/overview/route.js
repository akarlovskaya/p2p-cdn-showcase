// GET /api/overview
import { NextResponse } from "next/server";
import { mockDataClient } from "../../lib/mockData";

export async function GET() {
  const data = mockDataClient.overview;
  console.log("API returning:", data); // Debug 4
  return NextResponse.json(data, {
    headers: {
      "Content-Type": "application/json", // Explicit content type
    },
  });
}

// POST /api/overview
export async function POST(request) {
  const body = await request.json(); // Read request body
  return NextResponse.json({ success: true, data: body });
}
