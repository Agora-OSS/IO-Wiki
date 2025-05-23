import type { ExtractEntityProperty } from "@/core/utils/types";
import { persistentAtom } from "@nanostores/persistent";
import type { tags } from "typia";
import typia from "typia";
import type { Format } from "typia/lib/tags";

export type AccountType = ExtractEntityProperty<Account>;

export class Account {
  readonly email;
  readonly password;

  private constructor(
    email: string & Format<"email">,
    password: string & tags.Pattern<"(?=.*[A-Za-z])(?=.*d)[A-Za-zd]{8,}$">,
  ) {
    this.email = email;
    this.password = password;
  }

  static create(account: AccountType | null) {
    return account === null
      ? new Account("", "")
      : new Account(account.email, account.password);
  }

  static getValidator() {
    return typia.createValidateEquals<Account>();
  }

  getAccountAtom() {
    return accountAtom;
  }

  persistent() {
    accountAtom.set({ email: this.email, password: this.password });
  }
}

const accountAtom = persistentAtom<AccountType>(
  "account",
  Account.create({ email: "", password: "" }),
  {
    encode: typia.json.stringify,
    decode: (encoded) =>
      Account.create(typia.json.isParse<AccountType>(encoded)),
  },
);
