const {test, expect} = require('@playwright/test');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://example.com');
  
  // Find an element using a relative locator
  const element = await page.locator('text=Search').locator('xpath=./following-sibling::input');
  
  // Do something with the element
  await element.fill('Playwright is awesome!');
  
  // Close the browser
  await browser.close();
})();
