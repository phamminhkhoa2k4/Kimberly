import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";

const SECRET_KEY = new TextEncoder().encode(
  process.env.JWT_SECRET_KEY || "Kimberly"
);

export async function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  const token = req.cookies.get("authToken");

  if (url.pathname.startsWith("/admin")) {
    if (!token?.value) {
      url.pathname = "/staff/login";
      return NextResponse.redirect(url);
    }

    try {
      await jwtVerify(token.value, SECRET_KEY); 
    } catch (err) {
      console.error("Token verification failed:", err);
      url.pathname = "/staff/login";
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
