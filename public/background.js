/* eslint-disable no-undef */
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.message === "save_workspace") {
    const name = request.name
    chrome.tabs.query({}, function (tabs) {
      const setValue = {}[name] = tabs.map((tab) => tab.url)
      chrome.storage.local.set(setValue);
      
    });
    chrome.storage.local.get(["lol"],function(e) {
      console.log(e.lol)
    });

  }
});
