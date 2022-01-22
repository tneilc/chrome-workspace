/* eslint-disable no-undef */
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.message === "save_workspace_to_storage") {
    const name = request.name
    chrome.tabs.query({}, function (tabs) {
      const value = tabs.map((tab) => tab.url)
      const object = {};object[name] = value;
      console.log(value)
      chrome.storage.local.set(object);
      
    });
  }
});
