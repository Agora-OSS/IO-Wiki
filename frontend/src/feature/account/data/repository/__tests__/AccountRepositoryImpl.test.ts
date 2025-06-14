import { describe, expect, test } from "vitest";
import { createAccount, doLogin } from "../AccountRepository";

describe("AccountRepositoryImpl Test", () => {
  test("should return true when login is successful", async () => {
    const loginResult = await doLogin({
      email: "testUser@email.com",
      password: "testPassword123",
    });

    expect(loginResult).toBe(true);
  });

  test("should return true when createAccount is successful", async () => {
    const loginResult = await createAccount({
      email: "testUser@email.com",
      password: "testPassword123",
    });

    expect(loginResult).toBe(true);
  });
});
