import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const protectedPaths = ["/dashboard"];

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  const authToken = req.cookies.get("authToken")?.value;

  if (protectedPaths.some((path) => req.nextUrl.pathname.startsWith(path))) {
    if (!authToken) {
      url.pathname = "/login";
      return NextResponse.redirect(url);
    }
    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
