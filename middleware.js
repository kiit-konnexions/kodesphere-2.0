import { NextResponse } from "next/server";

export function middleware(req) {
  const url = req.nextUrl;
  // change the timing to IST
  // const IST_OFFSET = 5.5 * 60 * 60 * 1000; // IST offset in milliseconds
  
  const targetDateSubmission = new Date("2025-04-06T15:15:00+05:30");
  const targetDateHackathonStart = new Date("2025-04-06T09:00+05:30");
  // Set your hackathon start date add ist time of 3:30 pm
  // targetDate.setTime(targetDate.getTime() + IST_OFFSET); // Adjust to IST

  const currentDate = new Date();

  const restrictedPaths = ["/submission", "/dashboard", "/problem-statements", "/rules", "/certification"];
  
  // Check if the request is for a restricted route
  if (
    ( url.pathname === "/submission") && process.env.NODE_ENV==='production'
  ) {
    return NextResponse.redirect(new URL("/dashboard", req.url)); // Redirect if access is restricted
  }

  if(
    (currentDate < targetDateHackathonStart && restrictedPaths.includes(url.pathname)) && process.env.NODE_ENV==='production'
  ){
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
}

// Apply middleware only to specific routes
export const config = {
  matcher: ["/submission", "/dashboard", "/problem-statements", "/rules", "/certification"]// Protects all these routes
};
