import { delay, HttpResponse } from 'msw';
import { expect, test } from '@/e2e/index';

test.describe.parallel("A demo of playwright-msw's functionality", () => {
  test('should allow mocks to be overridden on a per test basis', async ({
    page,
    worker,
    http
  }) => {
    await worker.use(
      http.get('/api/users', async () => {
        return new HttpResponse(null, {
          status: 200,
        });
      }),
    );

    await page.goto('/');
    await expect(page.locator('text="This is a core widget component."')).toBeVisible();
    await expect(page.locator('text="This is a basic Vue 3 component."')).toBeVisible();
    await expect(page.locator('text="this is a widget component by React."')).toBeVisible();
  });
});