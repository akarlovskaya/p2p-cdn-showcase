// GET /api/providerStat

import { NextResponse } from "next/server";
import { mockDataProvider } from "../../lib/mockData";

export async function GET() {
  const data = mockDataProvider.months;
  console.log("API returning:", data); // Debug
  return NextResponse.json(data, {
    headers: {
      "Content-Type": "application/json", // Explicit content type
    },
  });
}

// POST /api/providerStat
export async function POST(request) {
  const body = await request.json();
  return NextResponse.json({ success: true, data: body });
}
