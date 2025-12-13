import { NextRequest, NextResponse } from "next/server";

export async function GET(_req: NextRequest) {
  const driveUrl =
    "https://docs.google.com/document/d/1EDDtcETx_FnMtOQDurEwYGIpb6qi4Ui5Pf87gJYdA6U/edit?usp=sharing";
  return NextResponse.redirect(driveUrl, { status: 302 });
}
