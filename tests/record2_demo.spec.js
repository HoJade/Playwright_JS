/*
the following script is complied in javascript
>> npx playwright codegen --target javascript -o record2_demo.spec.js
*/

const { test, expect, chromium } = require('@playwright/test');

test('codegen demo 2', async () => {
  const browser = await chromium.launch({
    headless: true      // change the value to false if run it directly
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await page.getByRole('button', { name: 'Open Menu' }).click();
  await page.locator('[data-test="logout-sidebar-link"]').click();

  // ---------------------
  await context.close();
  await browser.close();
});