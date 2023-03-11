const {test, expect} = require ('@playwright/test')

test('Selectors Demo', async ({page}) => {

    await page.goto('https://www.saucedemo.com/')
    await page.pause()

    //1. Using any object repository

    await page.click('id=user-name')
    await page.locator('id=user-name').fill('Shalini')
    await page.locator('[(id="user-name")]').fill('Pandey')

    //2. Using Css Selector

    await page.locator('#login-button').click()

    //3. Using X-path

    await page.locator('xpath=//input[@name="password"]').fill('Shalini')
    await page.locator('//input[@name="password"]').fill('Pandey')




})