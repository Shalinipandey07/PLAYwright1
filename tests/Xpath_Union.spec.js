const { test, expect } = require('@playwright/test');


//In Playwright, XPath Union is used to combine the results of two or more XPath expressions into a 
//single result set. It is achieved by using the '/' operator in an XPath expression.
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://example.com');

  // Find all the links and buttons on the page using two different XPath expressions
  const links = await page.$x('//a');
  const buttons = await page.$x('//button');

  // Combine the results using XPath Union
  const linksAndButtons = links.concat(buttons);

  // Click on each link or button
  for (const elementHandle of linksAndButtons) {
    await elementHandle.click();
  }

  await browser.close();
})();
