import browser from "webextension-polyfill";

browser.action.onClicked.addListener(async tab => {
  try {
    await browser.scripting.executeScript({
      target: {
        tabId: tab.id,
      },
      func: () => {
        alert("browser.scripting.executeScript works");
      },
    });
  } catch (err) {
    console.error(`failed to execute script: ${err}`);
  }
});
