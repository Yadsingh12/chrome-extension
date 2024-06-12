document.addEventListener('mouseup', () => {
    const selectedText = window.getSelection().toString().trim();
    console.log(selectedText)
    if (selectedText) {
      chrome.runtime.sendMessage({ type: 'selectedText', text: selectedText });
    }
  });
  