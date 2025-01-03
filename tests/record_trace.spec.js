import { test, expect } from '@playwright/test';
import { snapshot } from 'node:test';

// set-up the tracing for all the tests in this file
/* this set-up only works WHEN trace is 'on' in the playwright.config.ts file */
let context
let page
test.beforeAll(async ({ browser }) => {
  context = await browser.newContext()
  await context.tracing.start(
    {
      snapshots: true,      // snapshot --> every actions: Action | Before | After
      screenshots: true     // the screen capture during the tracing
    })
  page = await context.newPage()
})
// stop the tracing for all the tests in this file, and give the location and name of the trace file
test.afterAll(async () => {
  await context.tracing.stop({ path: './trace-viewer/record_trace_data.zip' })
})

test('login_success', async () => {     // no need to declare fixture {page} here anymore

  /*
  // start the tracing in this test
  await context.tracing.start(
    {
      snapshots: true,      // snapshot --> every actions: Action | Before | After
      screenshots: true     // the screen capture during the tracing
    })
  */

  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await page.getByRole('button', { name: 'Open Menu' }).click();
  await page.locator('[data-test="logout-sidebar-link"]').click();

  /*
  // stop the tracing in this test, and give the location and name of the trace file
  await context.tracing.stop({ path: 'test1_trace.zip' })
  */
});