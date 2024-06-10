// popup.js

document.addEventListener('DOMContentLoaded', () => {
    chrome.storage.local.get('selectedText', function(data) {
      console.log('Retrieved text from storage:', data.selectedText);
      if (data.selectedText) {
        document.getElementById('text').innerText = data.selectedText;
      } else {
        document.getElementById('text').innerText = 'No text selected';
      }
    });
  });
  