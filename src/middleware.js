import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside

export function middleware(request) {
  const pathname = request.nextUrl.pathname;

  let isPublicPath = pathname === "/login" || pathname === "/signup";
  const token = request.cookies.get("auth-token")?.value || "";
  if (isPublicPath && token) {
    return NextResponse.redirect(new URL("/", request.nextUrl));
  } else if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL("/login", request.nextUrl));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/", "/profile/:path*", "/login", "/signup"],
};
