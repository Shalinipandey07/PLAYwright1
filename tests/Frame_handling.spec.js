const { test, expect} = require('@playwright/test');
// In Playwright, a frame is a child context of a page that represents an embedded HTML frame. 
//Playwright provides several methods to interact with frames, such as frame() and frames(). 

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://example.com');

  // Get the main frame
  const mainFrame = page.mainFrame();

  // Get the first child frame
  const childFrame = mainFrame.childFrames()[0];

  // Navigate to a URL within the child frame
  await childFrame.goto('https://example.com/path/to/iframe');

  // Fill out a form inside the child frame
  await childFrame.fill('#username', 'myusername');
  await childFrame.fill('#password', 'mypassword');
  await childFrame.click('#submit');

  // Switch back to the main frame
  await page.bringToFront();

  // Get all the frames on the page
  const frames = page.frames();

  // Iterate over the frames and log their URLs
  for (const frame of frames) {
    console.log(frame.url());
  }

  await browser.close();
})();
