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
    startUpdateTimer();
  }
  else {
    reset_ntc();
  }

}


function startUpdateTimer() {
  // We keep the interval as faster than 1s to minimize comm delays. This helps alleviate problem if the Netflix timer starts before our timer does, and as a result our timer always has a <1s delay. This might be overkill though.
  window.ntc.updateTimer = setInterval(updateCurrentVideoTime, 100);
}

// Clears ntc structure. This may be overkill.
function reset_ntc() {

  clearInterval(window.ntc.updateTimer);
  
  window.ntc = {};
}

// Checks if page is a '/watch/' page
function pageIsWatch() {
  var url = window.location.href;

  if (url.indexOf('/watch/') !== -1)
    return true;
}


// Checks the DOM for the current time in the video. If we find one, store it on the ntc structure.
function updateCurrentVideoTime() {
  var sliderList = document.getElementsByClassName('player-slider');

  if (sliderList.length)
    window.ntc.video.time = sliderList[0].children[0].innerHTML;  // e.g. "44:58"
}


// Caches video and userdata
function cacheSession() {

  // User data (we'll take everything for now, but only use what we need on the back-end)
  window.ntc.user = window.netflix.reactContext.models.userInfo.data;

  // Video data
  window.ntc.video = {};
  window.ntc.video.id = window.location.pathname.substr(7);    // Offset is for the '/watch/' part of the URL

  // videoType = window.netflix.falkorCache.videos[window.ntc.video.id].summary.type;
  // window.ntc.video.title = window.netflix.falkorCache.videos[videoId].title.value;
}