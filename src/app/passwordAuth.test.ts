import { describe, expect, it } from "vitest";
import { AUTH_COOKIE_NAME, hashPassword, isAuthenticatedCookieValue } from "./passwordAuth";

describe("in-app password auth", () => {
  it("uses a dedicated auth cookie name", () => {
    expect(AUTH_COOKIE_NAME).toBe("tmobile_family_auth");
  });

  it("accepts only the hash for the configured password", async () => {
    const correct = await hashPassword("correct-password");
    const wrong = await hashPassword("wrong-password");

    await expect(isAuthenticatedCookieValue(correct, "correct-password")).resolves.toBe(true);
    await expect(isAuthenticatedCookieValue(wrong, "correct-password")).resolves.toBe(false);
    await expect(isAuthenticatedCookieValue(null, "correct-password")).resolves.toBe(false);
  });

  it("fails closed if the expected password is missing", async () => {
    const correct = await hashPassword("correct-password");
    await expect(isAuthenticatedCookieValue(correct, undefined)).resolves.toBe(false);
  });
});
