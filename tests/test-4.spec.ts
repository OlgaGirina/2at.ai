import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://2at.ai/');
  await page.getByRole('button', { name: 'Accept All' }).click();
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.locator('#auth-iframe').contentFrame().getByRole('button', { name: 'Join Us' }).click();
  await page.locator('#auth-iframe').contentFrame().getByRole('heading', { name: 'Find and hire a trusted' }).click();
  await page.locator('#auth-iframe').contentFrame().getByRole('button', { name: 'Continue' }).click();
  await page.locator('#auth-iframe').contentFrame().getByRole('textbox', { name: 'Fill in Company name to' }).click();
  await page.locator('#auth-iframe').contentFrame().getByRole('textbox', { name: 'Fill in Company name to' }).fill('eee');
  await page.locator('#auth-iframe').contentFrame().getByRole('checkbox', { name: 'I agree to Terms of Use and' }).check();
});