import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { AUTH_COOKIE_NAME, isAuthenticatedCookieValue } from "./app/passwordAuth";

const PUBLIC_PATHS = new Set(["/login", "/api/login"]);

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (PUBLIC_PATHS.has(pathname)) {
    return NextResponse.next();
  }

  const cookieValue = request.cookies.get(AUTH_COOKIE_NAME)?.value;
  const isAuthenticated = await isAuthenticatedCookieValue(cookieValue, process.env.SITE_PASSWORD);

  if (isAuthenticated) {
    return NextResponse.next();
  }

  const loginUrl = new URL("/login", request.url);
  loginUrl.searchParams.set("next", pathname);
  return NextResponse.redirect(loginUrl);
}

export const config = {
  matcher: ["/((?!favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)"],
};
