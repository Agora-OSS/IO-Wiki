import type { Account } from "@/feature/account/domain/entities";
import { fx } from "@fxts/core";
import { random } from "typia";

export const createAccountMocks = (count: number) =>
  fx(Array(count).fill(0))
    .map((_) => random<Account>())
    .toArray();

export const createEncorrectValidationAccountMocks = (count: number) =>
  fx(Array(count).fill(0))
    .map((_) => {
      const mock = random<Account>();

      return { ...mock, password: mock.password?.slice(0, 3) || "123" };
    })
    .toArray();
