import { NextRequest, NextResponse } from "next/server";

export async function GET(_req: NextRequest) {
  const driveUrl =
    "https://drive.google.com/file/d/1tXZHtHO4gvMWvrjGDrN5Z0Q2oRm-Y9Fj/view?usp=sharing";
  return NextResponse.redirect(driveUrl, { status: 302 });
}
