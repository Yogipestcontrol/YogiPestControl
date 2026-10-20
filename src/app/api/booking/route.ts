import { NextResponse } from "next/server";
import { isRateLimited } from "@/lib/leads";
import { submitInspectionRequest } from "@/lib/inspection-request";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = await submitInspectionRequest(body ?? {}, {
      source: "web",
      rateLimit: () => isRateLimited(request),
    });

    if (!result.ok) {
      return NextResponse.json(
        { error: result.status === 429 ? "Too many requests" : result.error },
        { status: result.status }
      );
    }
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Booking form error:", error);
    return NextResponse.json(
      { error: "Failed to submit booking" },
      { status: 500 }
    );
  }
}
