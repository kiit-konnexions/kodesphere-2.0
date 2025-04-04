import { NextResponse } from "next/server";

export function middleware(req) {
  const url = req.nextUrl;
  // change the timing to IST
  // const IST_OFFSET = 5.5 * 60 * 60 * 1000; // IST offset in milliseconds
  
  const targetDate = new Date("2025-04-06T15:30:00+05:30"); // Set your hackathon start date add ist time of 3:30 pm
  // targetDate.setTime(targetDate.getTime() + IST_OFFSET); // Adjust to IST

  const currentDate = new Date();

  const restrictedPaths = ["/submission"];
  
  // Check if the request is for a restricted route
  if (
    (currentDate < targetDate && (restrictedPaths.includes(url.pathname) && process.env.NODE_ENV=== "production"))
  ) {
    return NextResponse.redirect(new URL("/dashboard", req.url)); // Redirect if access is restricted
  }

  return NextResponse.next();
}

// Apply middleware only to specific routes
export const config = {
  matcher: ["/submission"], // Protects all these routes
};
