# [GetSet v.0.0.1](https://getsetapp.herokuapp.com/) 
#### Ready, GetSet, PHOTO!!


* Created w/ javascript 2.5.1
---
### GetSet is a photo comparison scavenger hunt game where users can create photo hunt challenges, participate in other photo hunt challenges, or enjoy a feed of other people's finished photo hunts.

--
# Tech Stack
GetSet is an MERN framework app developed with MongoDB + Mongoose + Express + React/Axios + Node.js
The image file storage is handled by AWS S3.

### [MongoDB Atlas Cloud](https://docs.mongodb.com/cloud/):
GetSet uses a MongoDB NoSQL database on the backend.  This type of database management allows for better for scalability as media apps tend to scale faster in general.  Also, it being the first time most of us have worked on a software development team the built in flexibility worked in our favor as the basic schema could easily be updated throughout development.

### [Mongoose](https://mongoosejs.com/):
With all of our team coming from a background in Ruby on Rails working with ORM, Mongoose made for a smoother transition into a new stack to keep the workflow similar to what we had all already worked with.  We also utilized the schema validations that we really appreciated!

### [Express](https://expressjs.com/en/starter/installing.html):
We used Express for handling our different HTTP requests.  This allowed us to turn our backend into an API that our frontend team was able to use to retrieve information for React Component rendering. We applied middleware to our user auth pattern to make for a more robust browser session.

### [React](https://reactjs.org/docs/getting-started.html): 
Axios was our technology of choice when it came to our frontend HTTP requests.  We all were coming to this project familiar with `$.ajax` so the transition to Axios was smooth as butter.

### [Node.js](https://nodejs.org/en/about/):
GetSet uses Node.js to manage JavaScript dependencies, bundle the JavaScript with webpack, and as a runtime for our local server.  We really liked that Node.js made it easy for us to allow multiple events to occur at the same time on the backend.  Very fun!

### [Resemble.JS](https://github.com/rsmbl/Resemble.js):
Resemble is our API of choice when it came down to the actual comparing of photos.  We originally had considered a few other APIs including Rembrandt but we found that the criterion for comparison was not as rich and customizable as Resemble.  Backend and Flex worked very hard to understand the 'under-the-hood' workings of Resemble to customize the callback information to exactly what we needed for our game.  Good job fellas!

### [multer package](https://www.npmjs.com/package/multer):

### [AWS S3 Cognito](https://aws.amazon.com/cognito/):

### [react-dropzone](https://react-dropzone.js.org/):

# System dependencies
GetSet runs on the following JavaScript dependencies (Versions subject to update):
  - "bcryptjs": "^2.4.3",
  - "body-parser": "^1.19.0",
  - "concurrently": "^5.2.0",
  - "express": "^4.17.1",
  - "jsonwebtoken": "^8.5.1",
  - "mongoose": "^5.9.18",
  - "passport": "^0.4.1",
  - "passport-jwt": "^4.0.0",
  - "validator": "^13.1.1"

# Run GetSet from your terminal
1. Install node dependencies:
    - frontend:
      * `cd` into `/frontend`
      * run `npm install`
    - backend:
     * `cd` into root directory
     * run `npm intall`
     
2. Boot both frontend and backend servers concurrently by running `npm run dev`

# Features
GetSet allows users to create a list of photos as "scavenger hunt" items.  Once a list is completed, other users attempt to match each picture in the Hunt with their own photo.  The app returns a score of how accurately the pictures match the original and tallies a percentage score.  Photo Hunts have an expiration date and upon expiration the results are posted to any user that participated in the hunt.  Winners photos are added to the landing page feed.  Users can comment on other photo challenges as well as save challenges they are currently finishing or already have finished.

# Challenges
### Backend
---
The main feature of GetSet is photo comparison which posed the question "How do we go about comparing these photos?  Our Backend and Flex Leads (Danny and Zohaib) worked together to research the best API to do the job.  They first began with a google search to see what types of API's were available to us.  After getting a feel for what was possible, they created a spreadsheet to compare the scoring capabilities of individual APIs they tested.

### Frontend
---
GetSet utilizes a bit of drag and drop functionality that none of us previously had any exposure to. Our Team Flex Zohaib was able to figure out this functionality by studying...

Frontend Lead Kevin worked tirelessly to provide the card game aesthetics of GetSet.  He utilized a lot of absolute positioning techniques through CSS to make sure our site was pixel perfect and felt fun to use!

### Lead
---


# Meet the Team!
## <img src="frontend/public/isaac.jpg" width="58" height="72"> Isaac
### Team Lead

Isaac's favorite game is Catan.  He really loves the arts and looks forward to being able to combine his passions with technology.
 ## <img src="frontend/public/zohaib2.jpg" width="58" height="72"> Zohaib
### Team Lead Asst. / Flex
Zohaib's favorite games are cricket and foosball. He has worked as a Software Engineer with experience developing android applications. Hit him up if you're looking to hire!

## <img src="frontend/public/kevin.png" width="58" height="72"> Kevin
### Frontend Lead
Kevin's favorite game is Portal.  He wants you to know that cake is not a matter to lie about.

## <img src="frontend/public/danny.png" width="58" height="72"> Danny
### Backend Lead
Danny's favorite games are basketball and golf. Aside from coding, his real dream is to become a professional poker player.
  
# Future Directions
  * Create a mobile version of GetSet
  * Expand Hunt categories
  * Add in app photo edit functionality as a bonus
  
