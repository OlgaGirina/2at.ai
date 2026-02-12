import { test as setup, expect } from '@playwright/test';
import path from 'path';

const storageStatePath = path.join(__dirname, '../authState.json');

setup('Authenticate and save state', async ({ page }) => {
  await page.goto('https://2at.ai');

  await page.getByRole('button', { name: 'Sign in' }).click();

// 2️⃣ Ждём появления iframe
const frame = page.frameLocator('#auth-iframe');

// 3️⃣ Заполняем поля ВНУТРИ iframe
await frame.locator('input[placeholder="Enter email"]').fill('Client241020252@gmail.com');
await frame.locator('input[placeholder="Enter password"]').fill('qwerty123');

// 4️⃣ Кликаем на Sign in внутри iframe
await frame.getByRole('button', { name: 'Sign in' }).click();

  
// Проверяем, что успешно вошли
  await expect(page).toHaveURL(/client|vendor\/\d+/);

  // Сохраняем сессию
  await page.context().storageState({ path: storageStatePath });
  console.log(`✅ Auth state saved to ${storageStatePath}`);
});
