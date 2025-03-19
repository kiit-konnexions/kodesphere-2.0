import { NextResponse } from "next/server";

export function middleware(req) {
  const url = req.nextUrl;
  const targetDate = new Date("2025-04-01T00:00:00Z"); // Set your hackathon start date
  const currentDate = new Date();

  if (currentDate < targetDate && url.pathname.startsWith("/dashboard") && process.env.NODE_ENV === "production") {
    return NextResponse.redirect(new URL("/", req.url)); // Redirect if access is restricted
  }

  return NextResponse.next();
}

// Apply middleware only to dashboard routes
export const config = {
  matcher: "/dashboard/:path*", // Protects all routes under /dashboard/
};
