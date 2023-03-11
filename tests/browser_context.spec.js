/*// Create a new incognito browser context
const context = await browser.newContext();
// Create a new page inside context.
const page = await context.newPage();
await page.goto('https://example.com');
// Dispose context once it's no longer needed.
await context.close(); */

const { test, expect } = require('@playwright/test');
const { chromium, firefox, webkit } = require('playwright');

test('has title', async ({page}) =>{
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  
  // Perform some operations on the page
  await page.goto('https://www.example.com');
  
  // Close the context and browser
  await context.close();
  await browser.close();
});  
