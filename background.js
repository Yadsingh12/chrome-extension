// background.js

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log('Message received in background script:', request);
    if (request.selectedText) {
      console.log('Selected text received in background script:', request.selectedText);
      chrome.storage.local.set({ selectedText: request.selectedText });
      
      // Send the selected text to the content script
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, { selectedText: request.selectedText });
      });
    }
  });
  
  // Add a listener to handle tab changes and updates
  chrome.tabs.onActivated.addListener((activeInfo) => {
    chrome.tabs.get(activeInfo.tabId, (tab) => {
      if (tab.status === 'complete') {
        chrome.scripting.executeScript({
          target: { tabId: activeInfo.tabId },
          files: ['content.js']
        });
      }
    });
  });
  
  chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete') {
      chrome.scripting.executeScript({
        target: { tabId: tabId },
        files: ['content.js']
      });
    }
  });