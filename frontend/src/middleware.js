import { NextResponse } from "next/server";

export function middleware(request) {
  const token = request.cookies.get("user_token")?.value;
  const { pathname } = request.nextUrl;
  const protectedRoutes = ["/cheakout", "/profile"];
  if (protectedRoutes.some(route => pathname.startsWith(route))) { // ➡️ kya user kisi protected page par ja raha hai?
    if (!token) {
      return NextResponse.redirect(new URL("/", request.url));
      // Agar token nahi hai (user login nahi)
        //➡️ to home page par bhej do
    }
  }

  if ((pathname === "/userlogin") && token) {
    return NextResponse.redirect(new URL("/", request.url));
    // To wapas home page bhej do

//“Already logged-in ho, dobara login kyun?”
  }

  return NextResponse.next();
  //👉 Sab theek hai → page open hone do ✅
}


export const config = { //Middleware sirf in routes par chalega
// pure project par nahi
  matcher: [
    "/cheakout/:path*",
    "/profile/:path*",
    // "/userlogin"
  ],
};