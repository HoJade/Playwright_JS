import { test, expect } from '@playwright/test'

/**
 * 3 ways to summon Playwright Inspector to generate script:
 * 1.   npx playwright codegen {optional: website address}
 * 2.   npx playwright test {file path} --debug
 * 3.   using --> await page.pause() command
 */

test('Demo Login Test 1', async ({ page }) => {
    await page.goto('https://demo.applitools.com')
    await page.pause()

    /**
    // using page.locator() format
    await page.locator('#username').click()
    await page.locator('[placeholder="Enter your username"]').fill('Yannie')
    */
    // using Playwright Inspector
    await page.getByPlaceholder('Enter your username').fill('Yanna')        // can send the input w/o having .click()
    await page.getByPlaceholder('Enter your password').fill('1010')

    /**
    // these assertion are already in-build in playwright framework
    await page.waitForSelector('text=Sign in', {timeout: 4000})      // to over-write the default value of the timeout parameter
    await page.expect(page.locator('text = Sign in')).toHaveCount(1)    // count the number of object of that selector

    // using page.locator() format
    await page.locator('text=Sign in').click()
    
    await page.locator('text=ACME').isVisible()
    */

    await page.getByRole('link', { name: 'Sign in' }).click()

    await expect(page.getByRole('link', { name: 'ACME' })).toBeVisible();

})

// test.only() --> only run this test in the current file
test.only('Demo Login Test 2', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.pause()

    // await page.locator('[placeholder="Username"]').click()
    await page.getByPlaceholder('Username').click();
    // await page.locator('[placeholder="Username"]').fill('Admin')
    await page.getByPlaceholder('Username').fill('Admin')
    // await page.locator('[placeholder="Username"]').press('Tab')
    await page.getByPlaceholder('Username').press('Tab');
    // await page.locator('[placeholder="Password"]').fill('admin123')
    await page.getByPlaceholder('Password').fill('admin123')

    // await page.locator('button:has-text("Login")').click()
    await page.getByRole('button', { name: 'Login' }).click();
    /**
     * depreciated
     * await page.waitForURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
     */

    await page.locator('[class="oxd-userdropdown-name"]').click()

    //await page.locator('a:has-text("Logout")').click()
    // or
    //await page.locator('text = Logout').click()
    await page.getByRole('menuitem', { name: 'Logout' }).click();
    /**
     * depreciated
     * await page.waitForURL('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
     */

})

test('Demo Login Test 3', async ({ browser }) => {
    // create a new context with a custom User-Agent
    const context = await browser.newContext({
        userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36'
    })
    const page = await context.newPage()    // create a new page in the context
    await page.goto('https://admin-demo.nopcommerce.com/login')
    // await page.pause()

    // await page.locator('input[name="Email"]').click()    // using CSS selector format here
    await page.getByLabel('Email:').click();
    await page.getByLabel('Email:').press('ControlOrMeta+a');
    await page.getByLabel('Email:').fill('admin@yourstore.com');
    // await page.locator('input[name="Password"]').click()
    await page.getByLabel('Password:').click();
    await page.getByLabel('Password:').press('ControlOrMeta+a');
    await page.getByLabel('Password:').fill('admin');
    // await page.locator('text = Log in').click()
    await page.getByRole('button', { name: 'Log in' }).click();

    await page.waitForLoadState('networkidle')
    const captchaSelectorExists = await page.locator('#gLIfn4 > div > div').isVisible()
    if (captchaSelectorExists) {
        console.log("reCAPTCHA deteched, please solve it manually.")
        await page.pause()
    } else {
        console.log('No reCAPTCHA deteched, proceeding with the test.')
    }

    /**
     * these command can't by-pass the reCAPTCHA
    await page.getByLabel('checkbox').click()
    await page.locator('//input[@type="checkbox"]').click()
     */

    await page.locator('text = Logout').click()
})
