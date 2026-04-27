export const AUTH_COOKIE_NAME = "tmobile_family_auth";

export async function hashPassword(password: string) {
  const bytes = new TextEncoder().encode(password);
  const digest = await crypto.subtle.digest("SHA-256", bytes);
  return Array.from(new Uint8Array(digest))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

export async function isAuthenticatedCookieValue(cookieValue: string | null | undefined, expectedPassword: string | undefined) {
  if (!cookieValue || !expectedPassword) return false;
  return cookieValue === (await hashPassword(expectedPassword));
}
