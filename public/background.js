/* eslint-disable no-undef */
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.message === "save_workspace_to_storage") {
    const name = request.name;
    chrome.tabs.query({}, function (tabs) {
      const value = tabs.map((tab) => tab.url);
      chrome.storage.local.get({ workspaces: {} }, (stored) => {
        const keys = Object.keys(stored.workspaces);
        if (keys.length < 15 && !keys.includes(name)) {
          const object = stored;
          object.workspaces[name] = value;
          chrome.storage.local.set(object);
          sendResponse(true);
        }
        else {
          sendResponse(false);
          return 0;
        }
      });
    });
  }
  if (request.message === "load_workspaces_to_ui") {
    chrome.storage.local.get("workspaces", (res) => {
      sendResponse(res.workspaces);
    });
  }
  if (request.message === "open_workspace_on_new_window") {
    chrome.windows.create({ url: request.elements }, function (win) {});
  }
  if (request.message === "delete_workspace_from_storage") {
    const name = request.name;
    chrome.storage.local.get({ workspaces: {} }, (stored) => {
      const object = stored;
      delete object.workspaces[name];
      chrome.storage.local.set(object);
    });
    sendResponse("nice");
  }

  return true;
});
