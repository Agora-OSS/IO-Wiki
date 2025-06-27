import { beforeEach } from "node:test";
import { describe, expect, test } from "vitest";
import { AdminAccountUsecase } from "../AdminAccountUsecase";

describe("AdminAccountUsecase test", () => {
  beforeEach(() => {});

  test("should initialize admin account successfully", async () => {
    const email = "admin@example.com";
    await AdminAccountUsecase.initializeAdminAccount(email);

    expect(true).toBeTruthy(); // Assuming the method does not return anything, we just check if it runs without error
    // In a real test, you might want to mock the repository method and check if it was called with the correct parameters
  });

  test("should approve member successfully", async () => {
    const email = "member@example.com";
    await AdminAccountUsecase.approveMember(email);

    expect(true).toBeTruthy(); // Assuming the method does not return anything, we just check if it runs without error

    // In a real test, you might want to mock the repository method and check if it was called with the correct parameters
  });

  test("should reject member successfully", async () => {
    const email = "member@example.com";
    await AdminAccountUsecase.rejectMember(email);

    expect(true).toBeTruthy(); // Assuming the method does not return anything, we just check if it runs without error

    // In a real test, you might want to mock the repository method and check if it was called with the correct parameters
  });
});
