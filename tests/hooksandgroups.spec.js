import { test, expect, chromium } from '@playwright/test';
import { describe } from 'node:test';

test.describe('All My Tests', () => {


    /* test name is not required */
    test.beforeEach('Login', async ({ page }) => {
        await page.goto('https://www.saucedemo.com/');

        // await page.locator('[data-test="username"]').click();
        await page.locator('[data-test="username"]').fill('standard_user');
        // await page.locator('[data-test="password"]').click();
        await page.locator('[data-test="password"]').fill('secret_sauce');
        await page.locator('[data-test="login-button"]').click();
        await expect(page).toHaveURL(/inventory/)

    })

    /* Playwright automatically closes the page after each test, so you don't need to close it manually. */
    // test.afterEach(async ({ page }) => {
    //     await page.close();
    // })


    test('Homepage', async ({ page }) => {

        await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
        await page.locator('[data-test="item-1-title-link"]').click();
        await page.locator('[data-test="add-to-cart"]').click();
    })

    test('Logout', async ({ page }) => {

        await page.locator('text = Open Menu').click();
        await page.locator('[data-test="logout-sidebar-link"]').click();
        await expect(page).toHaveURL(/saucedemo/)
    })

})