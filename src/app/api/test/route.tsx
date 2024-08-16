import { NextResponse, NextRequest } from "next/server";

export async function GET(req: NextRequest): Promise<NextResponse> {
  return NextResponse.json<ApiResponse>({
    message: "Hello, World!",
    success: true,
    foo: true,
  });
}
