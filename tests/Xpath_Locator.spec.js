import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://example.com');
  const searchButton = await page.$x("//button[contains(text(), 'Search')]");
/*the page.$x method takes an XPath expression as an argument and returns an array of all matching 
elements. In this case, we are using the contains function to find the button element that contains 
the text "Search" in its label.*/

await searchButton[0].click();
await browser.close();
})();

