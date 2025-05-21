import { beforeEach } from "node:test";
import {
  createAccountMocks,
  createEncorrectValidationAccountMocks,
} from "@/mock/account";
import { flat } from "@fxts/core";
import { describe, expect, test } from "vitest";
import { AccountUsecase } from "../account-usecase";

describe("AccountUsecase test", () => {
  beforeEach(() => {});

  test("should complete login execution successfully", async () => {
    const account = createAccountMocks(1)[0];

    AccountUsecase.login(account);
  });

  test("should return valid validation result when creating user account", async () => {
    const account = createAccountMocks(1)[0];

    const validationResult = AccountUsecase.validateAccountInfo(account);

    for (const result of validationResult) {
      expect(result.success).toBeTruthy();
      expect(result.data).toBeTruthy();
    }
  });
});
