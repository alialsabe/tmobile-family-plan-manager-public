export function isAuthorizedBasicAuth(authorizationHeader: string | null, expectedPassword: string | undefined) {
  if (!expectedPassword) return false;
  if (!authorizationHeader?.startsWith("Basic ")) return false;

  const encoded = authorizationHeader.slice("Basic ".length).trim();
  let decoded = "";

  try {
    decoded = atob(encoded);
  } catch {
    return false;
  }

  const separatorIndex = decoded.indexOf(":");
  if (separatorIndex === -1) return false;

  const password = decoded.slice(separatorIndex + 1);
  return password === expectedPassword;
}

export function makeUnauthorizedResponse() {
  return new Response("Authentication required", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="T-Mobile Family Plan", charset="UTF-8"',
      "Cache-Control": "no-store",
    },
  });
}
