const express = require("express");
const router = express.Router();
const passport = require("passport");
const mongoose = require("mongoose");
const validateChallengeInput = require("../../validation/challenge");
const Challenge = require("../../models/Challenge");
const Hunt = require("../../models/Hunt")
var multer = require('multer');
var upload = multer({ dest: 'uploads/' });
var resemble = require('resemblejs');
var http = require("http");
const ChallengeHelper = require("../../helper/challenges_helper");

router.get("/test", (req, res) => res.json({ msg: "This is the challenges route" }));

//fetch challenges based on categories
//res will be each category id with all challenges under it
router.get("/", (req, res) => {
    Category.find()
    .sort({date: -1})
    .then(categories => {
       let combo = {}
        for (let i = 0; i < categories.length; i++) {
            Hunt.find({category: categories[i]}).then(challenges=>{
                combo[categories[i]._id] = challenges;
                if(i==categories.length-1){
                    return res.json(combo)
                }
            })
        }
    }).catch(error => res.status(404).json({error: "No challenges were found"}))
});

// fetch user's completed challenge stats
router.get("/stats", [passport.authenticate('jwt', { session: false })], (req, res) => {
    debugger
  Challenge.find({ user: req.user.id })
    .sort({ timestamps: -1 })
    .then(completedChallenges => {
        debugger
      let stats = [];
      let date = new Date();
      for (let i = 0; i < completedChallenges.length; i++) {
        const completedChallenge = completedChallenges[i];
        Hunt.findById(completedChallenge.hunt_id)
        .then(hunt => {
            debugger
          const stat = {}
          stat.hunt_name = hunt.title;
          stat.user_score = completedChallenge.score;
          // deadline has been met
          if (hunt.close_date <= date) {
            stat.winner = hunt.winner.name;
            stat.winner_score = hunt.winner.score;
          } else {
            stat.winner = "-";
            stat.winner_score = "-";
          }
          stats.push(stat);
          if(i === completedChallenges.length - 1) 
            return res.json(stats);
        })
      }
    })
    .catch(error => res.status(404).json({ error: "No challenges were found" }))
})

//complete a challenge
router.post("/", [passport.authenticate('jwt', { session: false }), upload.array('images', 10)], (req, res) => {
    // fetch hunt based on hunt_id
    Hunt.findById(req.body.hunt_id)
        .then(huntDetails => {
            // validate req images
            const { errors, isValid } = validateChallengeInput(req, huntDetails);
            if (!isValid) return res.status(400).json(errors);

            ChallengeHelper.uploadToAWS(req, imageAwsPaths=>{

                //images uploaded to aws and imageAwsPaths is path to those images
                let scoreSum = 0, numFiles = imageAwsPaths.length;

                //iterating through images sending pairs to rememeble to get the match score
                for (let i = 0; i < numFiles; i++) {
                    resemble(imageAwsPaths[i])
                        .compareTo(huntDetails.photo_collection[i])
                        .scaleToSameSize()
                        .ignoreAntialiasing()
                        .onComplete(function (data) {
                            scoreSum += 100 - data.misMatchPercentage;
                            if (numFiles - i === 1) {
                               //we have result of all images summed up in scoreSum
                               const avgScore = scoreSum / numFiles;
                                ChallengeHelper.completeChallenge(avgScore,imageAwsPaths, req, huntDetails, (customResponse)=>{
                                    return res.json(customResponse);
                                });
                            }
                        });
                }
            })

        })
})


module.exports = router;
