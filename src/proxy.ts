import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { isAuthorizedBasicAuth, makeUnauthorizedResponse } from "./app/basicAuth";

export function proxy(request: NextRequest) {
  if (isAuthorizedBasicAuth(request.headers.get("authorization"), process.env.SITE_PASSWORD)) {
    return NextResponse.next();
  }

  return makeUnauthorizedResponse();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)"],
};
