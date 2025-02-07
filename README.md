## Installation
Go to Terminal and run command\
`npm init playwright`


### Update
**Step 1: Update the Playwright Package**\
Use the following command to install the latest version:\
`npm install @playwright/test@latest`\
This will update the package version `@playwright/test` in `package.json`

**Step 2: Update Browser Binaries**\
After updateing the package, you need to download the compatible browser binaries:\
`npx playwright install`\
This ensures that the updated Playwright version works correctly with its required browser versions.

**Step 3: Verify the Update**\
Check the current installed version:\
`npx playwright --version`\
It should now reflect the latest installed version.

> [!TIP]
> Check `package.json` to ensure that both Playwright and `@playwright/test` versions are consistent.\
> After updating, check that the version matches by running:\
> `npm ls @playwright/test`\
> You should now see `@playwright/test` in the output, matching the Playwright CLI version.




## Running Test
run all tests on all browsers in headless mode\
`npx playwright test`

run tests in UI mode\
`npx playwright test --ui`

run with 3 workers in parallel\
`npx playwright test --workers 3`

run a specific test file\
`npx playwright test example.spec.js`

run the files specified\
`npx playwright test example.spec.js demo-todo-app.spec.js`

run files that have example or demo in the file name\
`npx playwright test example demo`

run test with the title\
`npx playwright test -g "check title"`

run on specific browser\
`npx playwright test --project=chromium`
or
`npx playwright test --project chromium`

run test in headed mode\
`npx playwright test --headed`

debug tests\
`npx playwright test --debug`

debug specific tests\
`npx playwright test example.spec.js --debug`

debug starting from specific line where test() starts\
`npx playwright test example.spec.js:21 --debug`




## Test Generator
> [!TIP]
> can be used to record test and generate test scripts

record on a specific browser\
`npx playwright codegen --browser firebox`
> default: chromium

record and save to a file\
`npx playwright codegen --target javascript -o record_example.js`

set viewport - screen resolution (size)\
`npx playwright codegen --viewport-size=800,600`

emulate devices\
`npx playwright codegen --device="iPhone 11"`

emulate color scheme (if available on the website)\
`npx playwright codegen --color-scheme=dark`

see all options
`npx playwright codegen --help`




## Trace Viewer
> [!NOTE]
> GUI tool that helps viewing the executed test along with snapshots, timeline and other details (traces)

### Trace Viewer Options
- **'on-first-retry'**\
  record a trace only when retrying a test for the first time

- **'off'**\
  do not record a trace

- **'on'**\
  record a trace for each test.
  > not recommend as it's performance heavy

- **'retain-on-failure'**\
  record a trace for each test, but remove it from successful test runs


### To set trace on from command
`npx playwright test --trace on`

### Different ways to view trace
using HTML report
`npx playwright show-report`

using command
`npx playwright show-trace trace.zip`

using utility - [Playwright Trace Viewer](https://trace.playwright.dev/)
