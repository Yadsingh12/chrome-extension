chrome.runtime.onInstalled.addListener(() => {
    chrome.sidePanel.setPanelBehavior({ openPanelOnActionClick: true });
  });

let latestText = "";

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'selectedText') {
    latestText = message.text;
    chrome.runtime.sendMessage({ type: 'updateText', text: latestText });
  }
});
