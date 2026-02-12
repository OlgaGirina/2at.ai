import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://2at.ai/');
  await page.getByRole('button', { name: 'Accept All' }).click();
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.locator('#auth-iframe').contentFrame().getByRole('button', { name: 'Join Us' }).click();
  await page.locator('#auth-iframe').contentFrame().locator('label').filter({ hasText: 'Find and hire a trusted' }).click();
  await page.locator('#auth-iframe').contentFrame().getByRole('button', { name: 'Continue' }).click();

  
});