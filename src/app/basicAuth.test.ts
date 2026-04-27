import { describe, expect, it } from "vitest";
import { isAuthorizedBasicAuth, makeUnauthorizedResponse } from "./basicAuth";

function basic(username: string, password: string) {
  return `Basic ${btoa(`${username}:${password}`)}`;
}

describe("site-wide basic auth", () => {
  it("accepts the configured password regardless of username", () => {
    expect(isAuthorizedBasicAuth(basic("ali", "correct-password"), "correct-password")).toBe(true);
  });

  it("rejects missing, malformed, or wrong passwords", () => {
    expect(isAuthorizedBasicAuth(null, "correct-password")).toBe(false);
    expect(isAuthorizedBasicAuth("Bearer token", "correct-password")).toBe(false);
    expect(isAuthorizedBasicAuth(basic("ali", "wrong"), "correct-password")).toBe(false);
  });

  it("returns a browser password prompt response", () => {
    const response = makeUnauthorizedResponse();
    expect(response.status).toBe(401);
    expect(response.headers.get("WWW-Authenticate")).toContain("Basic");
  });
});
