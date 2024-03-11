import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const [isLoggedIn, isUser] = request.cookies.getAll();
  if (request.nextUrl.pathname.startsWith("/login")) {
    return isLoggedIn && NextResponse.redirect(new URL("/", request.url));
  } else {
    return isUser && NextResponse.redirect(new URL("/", request.url));
  }
}

export const config = {
  matcher: ["/login", "/panel", "/products", "/add-product"],
};
