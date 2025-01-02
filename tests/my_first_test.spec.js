const {test, expect} = require('@playwright/test')

/* demo to call function from another file
const {hello, helloworld} = require('./demo/hello')

console.log(hello())
console.log(helloworld())
*/

test('My first test', async ({page}) => {
    await page.goto('https://google.com')
    await expect(page).toHaveTitle('Google')
})