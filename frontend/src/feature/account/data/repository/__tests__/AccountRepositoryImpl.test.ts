import { describe, expect, test } from "vitest";
import { createAccount, doLogin, checkEmailExsist } from "../AccountRepository";

describe("AccountRepositoryImpl Test", () => {
  test("should return true when login is successful", async () => {
    const loginResult = await doLogin({
      email: "testUser@email.com",
      password: "testPassword123",
    });

    expect(loginResult).toBeNull();
  });

  test("should return true when createAccount is successful", async () => {
    const loginResult = await createAccount({
      email: "testUser@email.com",
      password: "testPassword123",
    });

    expect(loginResult).toBeNull();
  });

  test("should return true when checkSameEmail is successful", async () => {
    const emailCheckResult = await checkEmailExsist("testUser@email.com");

    expect(emailCheckResult.exists).toBe(false);
  });
});
