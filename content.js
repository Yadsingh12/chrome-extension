console.log('Content script loaded');

function extractSelectedText() {
  return window.getSelection().toString();
}

function sendSelectedText() {
  const selectedText = extractSelectedText();
  console.log('Selected text:', selectedText);
  if (selectedText) {
    chrome.runtime.sendMessage({ selectedText: selectedText }, function(response) {
      console.log('Selected text sent to background script');
    });
  }
}

// Listen for mouseup event to detect text selection
document.addEventListener('mouseup', sendSelectedText);

// Ensure the script works even if added late
document.addEventListener('DOMContentLoaded', () => {
  console.log('Document loaded, content script active');
  sendSelectedText();
});