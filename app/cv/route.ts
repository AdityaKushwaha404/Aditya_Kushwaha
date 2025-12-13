import { NextRequest, NextResponse } from "next/server";

export async function GET(_req: NextRequest) {
  const driveUrl =
    "https://drive.google.com/file/d/1VtFHQUtB3SNb_kKd7J_bAMkhIJYVx8-t/view?usp=sharing";
  return NextResponse.redirect(driveUrl, { status: 302 });
}
