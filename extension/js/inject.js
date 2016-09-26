window.onload = function() {
	var urls = ['js/ntc.js'];

	for (var i = 0; i < urls.length; i++)
		injectScript(urls[i]);

	// Adds a script to the DOM. This allows us to interact with JS variables on the page.
	function injectScript(url) {

		// Adds a script tag to the DOM, halts until it loads, then deletes itself
		var s = document.createElement('script');
		s.src = chrome.extension.getURL(url);
		s.onload = function() {
		    this.remove();
		};
		(document.head || document.documentElement).appendChild(s);
	}
}