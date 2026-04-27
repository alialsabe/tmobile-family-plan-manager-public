import { NextRequest, NextResponse } from "next/server";
import { AUTH_COOKIE_NAME, hashPassword } from "../../passwordAuth";

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const password = String(formData.get("password") ?? "");
  const nextPath = String(formData.get("next") ?? "/");
  const expectedPassword = process.env.SITE_PASSWORD;

  if (!expectedPassword || password !== expectedPassword) {
    const url = new URL("/login", request.url);
    url.searchParams.set("error", "1");
    if (nextPath.startsWith("/")) url.searchParams.set("next", nextPath);
    return NextResponse.redirect(url, 303);
  }

  const safeNextPath = nextPath.startsWith("/") && !nextPath.startsWith("//") ? nextPath : "/";
  const response = NextResponse.redirect(new URL(safeNextPath, request.url), 303);
  response.cookies.set({
    name: AUTH_COOKIE_NAME,
    value: await hashPassword(expectedPassword),
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
  });
  return response;
}
