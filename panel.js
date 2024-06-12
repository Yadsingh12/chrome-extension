document.addEventListener('DOMContentLoaded', () => {
    /*const port = chrome.runtime.connect({ name: 'panel' });
  
    port.onMessage.addListener(message => {
      if (message.text) {
        document.getElementById('text').textContent = message.text;
      }
    });
  
    // Request the latest text when the panel is opened
    port.postMessage({ request: 'latestText' });
    */
    /*chrome.storage.sync.get( latestText , function (data) {
        document.getElementById('text').textContent = data.latestText;
    });*/
    chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
        if (message.type === 'updateText') {
          latestText = message.text;
          document.getElementById('text').textContent = latestText;
        }
    })
});

