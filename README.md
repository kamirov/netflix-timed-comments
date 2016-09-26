# Netflix Timed Comments
Viki-style timed comments for Netflix.

# To Do
- [x] Uniquely identify id of video the user is currently watching (extract ID from watch URL)
- [x] Uniquely identify name of video the user is currently watching (netflix.falkorCache.videos[{video_id}].title.value)
- [x] Uniquely identify user (netflix.reactContext.models.userInfo.data.(guid|name))
- [x] Figure out how far into the movie we are [$('.player-slider label').innerHTML]
- [x] Figure out how to store comments on our server (PHP + MySQL)
- [x] Write out DB schema
- [x] Create DB
- [x] Reliably get data from Netflix
- [ ] Create post and get code
- [ ] Test data packaging (to send to our server)
- [ ] Test data retrieval (from our server)
- [ ] Figure out how to query comments from our server
- [ ] Figure out how to cache comments on the user's side
- [ ] Style comments
- [ ] Convert backend code to Python

# Notes

Heads up. This is my first Python (PHP for now. Will convert to Python) project and first Chrome extension. There might be some...less than efficient approaches taken. :)