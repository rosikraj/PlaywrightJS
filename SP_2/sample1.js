const { Builder, By, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

// Set up Chrome options
const chromeOptions = new chrome.Options();

// Create a new instance of the WebDriver with Chrome
const driver = new Builder().forBrowser('chrome').setChromeOptions(chromeOptions).build();

async function searchAndOpenVideo() {
  try {
    // Navigate to YouTube
    await driver.get('https://www.youtube.com');

    // Find the search input
    const searchInput = await driver.findElement(By.name('search_query'));

    // Type the search query
    await searchInput.sendKeys('infinite computer solutions');

    // Press Enter
    await searchInput.sendKeys('\uE007'); // '\uE007' is the Unicode for Enter key

    // Wait for search results to load (you might want to use proper waits in a real scenario)
    await driver.wait(until.titleContains('YouTube Search Results'), 5000);

    // Find and click on the first video in the search results
    const firstVideo = await driver.findElement(By.css('#video-title'));
    await firstVideo.click();

    // Wait for the video to load and start playing (you might want to use proper waits in a real scenario)
    await driver.wait(until.elementLocated(By.css('.html5-main-video')), 10000);

    // Execute JavaScript to play the video
    await driver.executeScript('document.querySelector(".html5-main-video").play()');

    // Wait for a while (you might want to use proper waits in a real scenario)
    await driver.sleep(5000);
  } finally {
    // Close the browser
    await driver.quit();
  }
}

// Call the function to perform the YouTube search and video opening
searchAndOpenVideo();