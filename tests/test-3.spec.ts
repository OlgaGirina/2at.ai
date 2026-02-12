import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://2at.ai/');
  await page.getByRole('button', { name: 'Accept All' }).click();
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.locator('#auth-iframe').contentFrame().getByRole('button', { name: 'Join Us' }).click();
  await page.locator('#auth-iframe').contentFrame().locator('span').filter({ hasText: 'Find and hire a trusted' }).locator('div').first().click();
  await page.locator('#auth-iframe').contentFrame().getByRole('button', { name: 'Continue' }).click();
  await page.locator('#auth-iframe').contentFrame().getByRole('textbox', { name: 'Fill in Company name to' }).click();
  await page.locator('#auth-iframe').contentFrame().getByRole('textbox', { name: 'Fill in Company name to' }).fill('uuu');
  await page.locator('#auth-iframe').contentFrame().getByRole('textbox', { name: 'Work email' }).click();
  await page.locator('#auth-iframe').contentFrame().getByRole('textbox', { name: 'Work email' }).fill('hhh');
  await page.locator('#auth-iframe').contentFrame().getByRole('checkbox', { name: 'I agree to Terms of Use and' }).check();
  await page.locator('#auth-iframe').contentFrame().getByRole('button', { name: 'Create account' }).click();
  
});