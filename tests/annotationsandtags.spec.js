import { test, expect } from '@playwright/test';

/* Annotations */
test.skip('Skip this test', async ({ page }) => {
    // This test will be skipped
    console.log('If you see this message, test "Skip this test" was not skipped');
});

test('not yet ready', async ({ page }) => {
    // This test will be marked as failed
    test.fail();
});

test.fixme('test to be fixed', async ({ page }) => {
    // This test will be aborted and marked as skipped
});

test('slow test', async ({ page }) => {
    // This test will triple the test timeout
    test.slow();
});

test.only('focus this test', async ({ page }) => {
    // Only tests with `.only` annotation will be run in the entire project, all others will be neglected
    console.log('Only test with annotation `.only` will be run');
});

test('Safari-only test', async ({ page, browserName }) => {
    test.skip(browserName !== 'webkit', 'This feature is Safari-only');
    // ...
});

/* Tags */
// can tag tests with tags like @smoke, @sanity, @regression, @critical, @p1, @p2, @p3, @p4, @p5
/**  Run tests with specific tags
 * npx playwright test --grep "@smoke"
 * 
 *   Skip tests with specific tags\
 * npx playwright test --grep-invert "@smoke"
 */
test('Test login page @smoke', async ({ page }) => {
    // Only tests with `@smoke` tag will be run in the entire project, all others will be neglected
    console.log('Only test with tag `@smoke` will be run')
})
