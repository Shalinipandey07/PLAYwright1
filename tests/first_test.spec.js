const {test, expect} = require('@playwright/test')

test('My first test', async ({page}) => {

    await page.goto ('https://www.google.com')
    await expect(page).toHaveTitle ('Google')
});

test('My Second test', async ({page}) => {

    await page.goto ('https://opensource-demo.orangehrmlive.com')
    await expect(page).toHaveTitle ('Login')
});