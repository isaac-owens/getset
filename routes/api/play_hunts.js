const express = require("express");
const router = express.Router();
const passport = require("passport");
const mongoose = require("mongoose");
const validatePlayHuntInput = require("../../validation/play_hunt");
const PlayHunt = require("../../models/PlayHunt");
const Hunt = require("../../models/Hunt")
var multer = require('multer');
var upload = multer({ dest: 'uploads/' });

var resemble = require('resemblejs');
var http = require("http");
const PlayHuntHelper = require("../../helper/play_hunts_helper");

router.get("/test", (req, res) => res.json({ msg: "This is the play hunts route" }));

router.get("/:user_id", (req, res) => {
    PlayHunt.find({user: req.params.user_id})
    .sort({date: -1})
    .then(playhunts => res.json(playhunts))
    .catch(err => res.status(404).json("this user does not have any played hunts"))
})

router.get("/:id", (req, res) => {
    PlayHunt.findById(req.params.id)
    .then(playhunt => res.json(playhunt))
    .catch(err => res.status(404).json("No playhunt exists with this id"))
})

router.get("/", (req, res) => {
    PlayHunt.find()
    .sort({date: -1})
    .then(playhunts => res.json(playhunts))
    .catch(err => res.status(404).json("No challenges found"))
})

router.delete("/:id", (req, res) => {
    PlayHunt.findByIdAndDelete(req.params.id)
    .then(() => res.json("Playhunt deleted"))
    .catch(err => res.status(404).json("Playhunt was not found"))
})


router.post("/", [passport.authenticate('jwt', { session: false }), upload.array('images', 10)], (req, res) => {
    // fetch hunt based on hunt_id
    Hunt.findById(req.body.hunt_id)
        .then(playHunt => {
            // validate req images
            const { errors, isValid } = validatePlayHuntInput(req, playHunt);
            if (!isValid) return res.status(400).json(errors);
            debugger
            //create custom promise to make code more readable
            PlayHuntHelper.uploadToAWS(req, imageAwsPaths=>{

                //images uploaded to aws and imageAwsPaths is path to those images
                let scoreSum = 0, numFiles = imageAwsPaths.length;

                //iterating through images sending pairs to rememeble to get the match score
                for (let i = 0; i < numFiles; i++) {
                    resemble(imageAwsPaths[i])
                        .compareTo(playHunt.photo_collection[i])
                        .scaleToSameSize()
                        .ignoreAntialiasing()
                        .onComplete(function (data) {
                            scoreSum += 100 - data.misMatchPercentage;
                            if (numFiles - i === 1) {
                               //we have result of all images summed up in scoreSum

                                const avgScore = scoreSum / numFiles;
                                PlayHuntHelper.completeChallenge(avgScore,imageAwsPaths, req, (customResponse)=>{
                                    return res.json(customResponse);
                                });
                            }
                        });
                }
            })

        })
})


module.exports = router;
