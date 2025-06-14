import { beforeEach } from "node:test";
import {
  createAccountMocks,
  createEncorrectValidationAccountMocks,
} from "@/mock/account";
import { describe, expect, test } from "vitest";
import { AccountUsecase } from "../account-usecase";
import { is, type IValidation } from "typia";

describe("AccountUsecase test", () => {
  beforeEach(() => {});

  test("should complete login execution successfully", async () => {
    const account = createAccountMocks(1)[0];

    expect(await AccountUsecase.login(account)).toBeTruthy();
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

    expect(result).toBeTruthy();
  });

  test("should return an IError object when registration violates validation policies", async () => {
    const account = createEncorrectValidationAccountMocks(1)[0];

    const result = await AccountUsecase.register(account);

    expect(is<IValidation.IError[]>(result)).toEqual(true);
  });
});
