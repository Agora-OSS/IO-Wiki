import { beforeEach } from "node:test";
import {
  createAccountMocks,
  createEncorrectValidationAccountMocks,
} from "@/mock/account";
import { describe, expect, test } from "vitest";
import { AccountUsecase } from "../AccountUsecase";
import { is, type IValidation } from "typia";

describe("AccountUsecase test", () => {
  beforeEach(() => {});

  test("should complete login execution successfully", async () => {
    const account = createAccountMocks(1)[0];

    expect(await AccountUsecase.login(account)).toBeNull();
  });

  test("should return an IError object when login violates validation policies.", async () => {
    const account = createEncorrectValidationAccountMocks(1)[0];
    const accounHastError = await AccountUsecase.login(account);

    expect(is<IValidation.IError[]>(accounHastError)).toEqual(true);
    console.log(accounHastError);
  });

  test("should return valid validation result when creating user account", async () => {
    const account = createAccountMocks(1)[0];

    const validationResult = AccountUsecase.validateAccountInfo(account);

    for (const result of validationResult) {
      expect(result.success).toBeTruthy();
      expect(result.data).toBeTruthy();
    }
  });

  test("should return true when the account is successfully created", async () => {
    const account = createAccountMocks(1)[0];

    const result = await AccountUsecase.register(account);

    expect(result).toBeNull();
  });

  test("should return an IError object when registration violates validation policies", async () => {
    const account = createEncorrectValidationAccountMocks(1)[0];

    const result = await AccountUsecase.register(account);

    expect(is<IValidation.IError[]>(result)).toEqual(true);
  });

  test("should return true when email exists", async () => {
    const account = createAccountMocks(1)[0];

    const result = await AccountUsecase.checkEmailExsist(account.email);
    expect(result).toBeTruthy();
  });

  test("should return false when email does not exist", async () => {
    const result = await AccountUsecase.checkEmailExsist("nonexistent@example");

    expect(is<IValidation.IError[]>(result)).toEqual(true);
  });

  test("should return user details when fetching my details", async () => {
    const result = await AccountUsecase.getMyDetails();

    expect(result).toBeDefined();
    expect(result.email).toBe("test@example.com");
  });
});
