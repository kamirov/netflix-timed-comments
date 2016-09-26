window.ntc = {};

// On address bar change (onhashchange doesn't work when looking for changes to location.pathname)
setInterval(function() {
  // console.log("Check. Current: " + window.ntc.pathname + ". Old: " + window.location.pathname);

  if (window.ntc.pathname != window.location.pathname) {
    window.ntc.pathname = window.location.pathname;
    ntc_main();
  }
}, 1000)


// Entry point function. Takes care of caching, communicating with server, and displaying interface
// This function executes every time there is a URL change
function ntc_main() {
  if (pageIsWatch()) {
    cacheSession();
  }
  else {
    clearSession();
  }

}

// Clears ntc structure. This may be overkill.
function clearSession() {
  window.ntc = {};
}

// Checks if page is a '/watch/' page
function pageIsWatch() {
  var url = window.location.href;

  if (url.indexOf('/watch/') !== -1)
    return true;
}


// Caches video and userdata
function cacheSession() {
  
  var userInfo,
      videoId;

  // User data (we'll take everything for now, but only use what we need on the back-end)
  window.ntc.user = window.netflix.reactContext.models.userInfo.data;


  // Video data
  videoId = window.location.pathname.substr(7);    // Offset is for the '/watch/' part of the URL
  // videoType = window.netflix.falkorCache.videos[videoId].summary.type;

  // Currently we don't differentiate what we take - movies or episodes. We just take the ID. This might change in the future
  window.ntc.video = {};
  window.ntc.video.id = videoId;
  // window.ntc.video.title = window.netflix.falkorCache.videos[videoId].title.value;
}