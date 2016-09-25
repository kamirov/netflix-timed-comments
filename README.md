# Netflix Timed Comments
Viki-style timed comments for Netflix.

# To Do
- [x] Uniquely identify id of video the user is currently watching (extract ID from watch URL)
- [x] Uniquely identify name of video the user is currently watching (netflix.falkorCache.videos[<video_id>].title.value)
- [x] Uniquely identify user (netflix.reactContext.models.userInfo.data.(guid|name))
- [x] Figure out how far into the movie we are [$('.player-slider label').innerHTML]
- [x] Figure out how to store comments on our server (Python + MySQL)
- [x] Write out DB schema
- [ ] Configure simply Python website
- [ ] Set up Python DB communication
- [ ] Create DB
- [ ] Test data packaging (to send to our server)
- [ ] Test data retrieval (from our server)
- [ ] Figure out how to query comments from our server
- [ ] Figure out how to cache comments on the user's side
- [ ] Style comments