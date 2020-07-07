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

// router.get("/:user_id", (req, res) => {
//     Challenge.find({user: req.params.user_id})
//     .sort({date: -1})
//     .then(challenges => res.json(challenges))
//     .catch(err => res.status(404).json("this user does not have any challenges"))
// })

//fetch challenge by challenge id
router.get("/:id", (req, res) => {
    Challenge.findById(req.params.id)
    .then(challenge => res.json(challenge))
    .catch(err => res.status(404).json("No challenge exists with this id"))
})

// router.get("/", (req, res) => {
//     Challenge.find()
//     .sort({date: -1})
//     .then(challenges => res.json(challenges))
//     .catch(err => res.status(404).json("No challenges found"))
// })

// router.delete("/:id", (req, res) => {
//     Challenge.findByIdAndDelete(req.params.id)
//     .then(() => res.json("Challenge deleted"))
//     .catch(err => res.status(404).json("Challenge was not found"))
// })

//complete a challenge
router.post("/", [passport.authenticate('jwt', { session: false }), upload.array('images', 10)], (req, res) => {
    // fetch hunt based on hunt_id
    Hunt.findById(req.body.hunt_id)
        .then(huntDetails => {
            // validate req images
            const { errors, isValid } = validateChallengeInput(req, huntDetails);
            if (!isValid) return res.status(400).json(errors);

            PlayHuntHelper.uploadToAWS(req, imageAwsPaths=>{

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
                                debugger
                                const avgScore = scoreSum / numFiles;
                                PlayHuntHelper.completeChallenge(avgScore,imageAwsPaths, req, huntDetails, (customResponse)=>{
                                    return res.json(customResponse);
                                });
                            }
                        });
                }
            })

        })
})


module.exports = router;
