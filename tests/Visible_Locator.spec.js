const { test, expect } = require('@playwright/test');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://www.example.com');

  // Wait for the element to be visible on the page
  element = await page.waitForSelector('input[type="text"]');

  // Click on the element
  await element.click();

  // Type some text into the input field
  await element.type('Hello, World!');

  await browser.close();
})();
