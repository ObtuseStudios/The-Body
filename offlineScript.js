chrome.app.runtime.onLaunched.addListener(function() 
{
  chrome.app.window.create('offlineIndex.html', {
    id: 'main',
    bounds: { width: 768, height: 512 }
  });
});