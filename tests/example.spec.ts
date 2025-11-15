import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  await expect(page.getByRole('link', { name: 'Star microsoft/playwright on' })).toBeVisible();

  await expect(page.getByRole('img', { name: 'Browsers (Chromium, Firefox,' })).toBeVisible();

  await expect(page.getByRole('link', { name: 'GitHub repository' })).toBeVisible();

  await expect(page.getByRole('link', { name: 'Discord server' })).toBeVisible();

  await expect(page.getByRole('button', { name: 'Switch between dark and light' })).toBeVisible();

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
