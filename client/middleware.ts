import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  let token: string = "";
  if (typeof window !== "undefined") {
    token = JSON.parse(localStorage.getItem("auth-token") || "");
  }
  return !token && NextResponse.redirect(new URL("/", request.url));
}

export const config = {
  matcher: "/logind",
};
