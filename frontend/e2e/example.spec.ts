import { expect, test } from "@playwright/test";

test.describe
  .parallel("A demo of playwright-msw's functionality", () => {
    test("should allow mocks to be overridden on a per test basis", async ({
      page,
    }) => {
      await page.goto("/");
      await expect(
        page.locator('text="This is a core widget component."'),
      ).toBeVisible();
      await expect(
        page.locator('text="This is a basic Vue 3 component."'),
      ).toBeVisible();
      await expect(
        page.locator('text="this is a widget component by React."'),
      ).toBeVisible();
    });
  });
