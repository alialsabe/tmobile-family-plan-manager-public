import { NextResponse, type NextRequest } from "next/server";
import { AUTH_COOKIE_NAME, hashPassword } from "../../passwordAuth";

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const password = String(formData.get("password") || "");
  const next = String(formData.get("next") || "/");
  const sitePassword = process.env.SITE_PASSWORD;

  if (!sitePassword || password !== sitePassword) {
    const retryUrl = new URL("/login", request.url);
    retryUrl.searchParams.set("error", "1");
    retryUrl.searchParams.set("next", next.startsWith("/") && !next.startsWith("//") ? next : "/");
    return NextResponse.redirect(retryUrl, 303);
  }

  const safeNext = next.startsWith("/") && !next.startsWith("//") ? next : "/";
  const response = NextResponse.redirect(new URL(safeNext, request.url), 303);
  response.cookies.set(AUTH_COOKIE_NAME, await hashPassword(sitePassword), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
  });

  return response;
}
