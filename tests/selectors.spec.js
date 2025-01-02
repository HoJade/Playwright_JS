import { test, expect } from "@playwright/test";

test('Selectors Demo', async ({ page }) => {
    await page.goto('https://www.saucedemo.com')
    /**
     * use page.pause() to pause the script and open the Playwright Inspector
     * WHEN only run in headed mode
     * hence, can do step-by-step execution
     */
    await page.pause()

    // using any specific object property
    await page.click('id=user-name')
    //await page.locator('[id="user-name"]').click()

    await page.locator('id=user-name').fill('Yuki')
    // or
    await page.locator('[id="user-name"]').fill('Yannie')    // this would over-write the previous input


    // using XPath
    await page.locator('xpath=//input[@id="user-name"]').fill('Yannes')
    // or
    await page.locator('//input[@id="user-name"]').fill('standard_user')
    // CSS alternative
    // await page.locator('input[id="user-name"]').fill('standard_user')


    // using CSS selector
    // # --> ID
    await page.locator('#password').fill('secret_sauce')    // can send the input w/o clicking the field .click()


    // using Text
    await page.locator('text = Login').click()
    /**
     * Alternative:
     * this can be used WHEN the string is long
     * e.g., targets an <input> element containing the text "Login"
    */
    // await page.locator('input:has-text("Login")').click()       // 'tag:has-text("string")'

})