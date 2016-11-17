# Netflix Timed Comments
Viki-style timed comments for Netflix. 

Netflix has long since shuttered up their public API, so we have to get a bit crafty.

# To Do
- [x] Uniquely identify id of video the user is currently watching
   - Extract ID from watch URL
- [x] Uniquely identify name of video the user is currently watching
   - `netflix.falkorCache.videos[{video_id}].title.value`
- [x] Uniquely identify user
   - `netflix.reactContext.models.userInfo.data.(guid|name)`
- [x] Figure out how far into the movie we are
   - `document.getElementsByClassName('player-slider')[0].firstChild.innerHTML`
- [x] Figure out how to store comments on our server
   - Node.js + MongoDB
- [ ] Style comments
- [ ] Finish writing this To Do list

# Notes

I'm in the process of rewriting this extension. The files will all likely get scrapped and replaced. Only the README file should remain.

Heads up. This is my first Node.js and MongoDB project and first Chrome extension. There might be some...less than efficient approaches taken, but I welcome any criticism. :)