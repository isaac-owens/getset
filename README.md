# GetSet v.0.0.1 
#### Ready, GetSet, PHOTO!!

* Created w/ javascript 2.5.1 by Isaac Owens 2020
---
### GetSet is a photo comparison scavenger hunt game where users can create photo hunt challenges, participate in other photo hunt challenges, or enjoy a feed of other people's finished photo hunts.

(heroku link here)

--
## Tech Stack
GetSet is an MERN framework app developed with MongoDB + Mongoose + Express + React/Axios + Node.js
The image file storage is handled by AWS S3.

### MongoDB:
GetSet uses a MongoDB NoSQL database on the backend.  This type of database management allows for better for scalability as media apps tend to scale faster in general.  Also, it being the first time most of us have worked on a software development team the built in flexibility worked in our favor as the basic schema could easily be updated throughout development.

### Mongoose:
With all of our team coming from a background in Ruby on Rails working with ORM, Mongoose made for a smoother transition into a new stack to keep the workflow similar to what we had all already worked with.  We also utilized the schema validations that we really appreciated!

### Express:
We used Express for handling our different HTTP requests.  This allowed us to turn our backend into an API that our frontend team was able to use to retrieve information for React Component rendering. We applied middleware to our user auth pattern to make for a more robust browser session.

### React: 
Axios was our technology of choice when it came to our frontend HTTP requests.  We all were coming to this project familiar with `$.ajax` so the transition to Axios was smooth as butter.

### Node.js:
GetSet uses Node.js to manage JavaScript dependencies, bundle the JavaScript with webpack, and as a runtime for our local server.  We really liked that Node.js made it easy for us to allow multiple events to occur at the same time on the backend.  Very fun!

## System dependencies

## Run GetSet
1. Install dependencies on your maching `npm install` 
2. Boot the server `npm run start` ( `npm run server` if you want to utilize nodemon refresh)

## Features
GetSet allows users to create a list of photos as "scavenger hunt" items.  Once a list is completed, other users attempt to match each picture in the hunt list with their own photos, attempting to make the match as pixel perfect as possible.  The app returns a score of how accurately the picture matches the original and tallies a score.  Photo Hunts have an expiration date and upon expiration the results are posted to any user that participated in the hunt.  Winners photos are added to the landing page feed.  Users can comment on other photo challenges as well as save challenges they are currently finishing or already have finished.

## Meet the Team!
  (photos and short bio/quote for each team member here)
  
## Future Directions
  * Create a mobile version of GetSet
  * Expand Hunt categories
  * Add in app photo edit functionality as a bonus
  
