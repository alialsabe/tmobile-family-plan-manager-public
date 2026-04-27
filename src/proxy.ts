import { NextResponse, type NextRequest } from "next/server";
import { AUTH_COOKIE_NAME, isAuthenticatedCookieValue } from "./app/passwordAuth";

export async function proxy(request: NextRequest) {
  const cookieValue = request.cookies.get(AUTH_COOKIE_NAME)?.value;

  if (await isAuthenticatedCookieValue(cookieValue, process.env.SITE_PASSWORD)) {
    return NextResponse.next();
  }

  const loginUrl = new URL("/login", request.url);
  const nextPath = `${request.nextUrl.pathname}${request.nextUrl.search}`;
  loginUrl.searchParams.set("next", nextPath);
  return NextResponse.redirect(loginUrl);
}

export const config = {
  matcher: ["/((?!api/login|login|_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
