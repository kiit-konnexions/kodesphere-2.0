import { NextResponse } from "next/server";

export function middleware(req) {
  const url = req.nextUrl;
  const targetDate = new Date("2025-03-31T00:00:00Z"); // Set your hackathon start date
  const currentDate = new Date();

  const restrictedPaths = ["/submission", "/certification", "/problem-statements", "/rules"];
  
  // Check if the request is for a restricted route
  if (
    currentDate < targetDate &&
    (url.pathname.startsWith("/dashboard") || restrictedPaths.includes(url.pathname)) && process.env.NODE_ENV === "production"
  ) {
    return NextResponse.redirect(new URL("/", req.url)); // Redirect if access is restricted
  }

  return NextResponse.next();
}

// Apply middleware only to specific routes
export const config = {
  matcher: ["/dashboard/:path*", "/submission", "/certification", "/problem-statements", "/rules"], // Protects all these routes
};
