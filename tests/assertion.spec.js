import { test, page, expect } from '@playwright/test'
import exp from 'constants'

test.use({ retries: 0 })     // no retry for this test

test('Assertions Demo', async ({ page }) => {

    await page.goto('https://kitchen.applitools.com')
    await page.pause()

    // Assertion
    // check element present or not
    await expect(page.getByRole('heading', { name: 'The Kitchen' })).toHaveCount(1)     //check this element is unique or not

    /* if element_A presents, click on it
    This method "page.$()" finds an element matching the specified selector within the page. 
    If no elements match the selector, the return value resolves to null.
    */
    if (await page.$('heading', { name: 'The Kitchen' })) {
        await page.getByRole('heading', { name: 'The Kitchen' }).click()
    }

    // check element hidden or visible
    await expect(page.getByRole('heading', { name: 'The Kitchen' })).toBeVisible()
    await expect.soft(page.getByRole('heading', { name: 'The Kitchen' })).toBeHidden()      // soft assertion would not stop the execution if the assertion fails

    // check element enabled or diabled
    await expect(page.getByRole('heading', { name: 'The Kitchen' })).toBeEnabled()
    await expect.soft(page.getByRole('heading', { name: 'The Kitchen' })).toBeDisabled()    // soft assertion would not stop the execution if the assertion fails

    // check text
    await expect(page.getByRole('heading', { name: 'The Kitchen' })).toHaveText('The Kitchen')
    await expect(page.getByRole('heading', { name: 'The Kitchen' })).not.toHaveText('ABCD')

    await page.pause()
    // check attribute value
    // .toHaveAttribute('class', /.*value/) --> can use regular expression or complete value
    await expect(page.getByRole('heading', { name: 'The Kitchen' })).toHaveAttribute('class', /.*css-dpmy2a/)   // chakra-heading css-dpmy2a
    await expect(page.getByRole('heading', { name: 'The Kitchen' })).toHaveClass(/.*css-dpmy2a/)

    // check page url and title
    await expect(page).toHaveURL(/kitchen.applitools.com/)  // check partial URL
    await expect(page).toHaveTitle(/.*Kitchen/)             // or use complete title --> 'The Kitchen'

    await page.pause()
    // visual validation with screenshot
    await expect(page).toHaveScreenshot()

})
