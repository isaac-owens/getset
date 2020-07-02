const express = require("express");
const router = express.Router();
const passport = require("passport");
const mongoose = require("mongoose");
const validatePlayHuntInput = require("../../validation/play_hunt");
const PlayHunt = require("../../models/PlayHunt");
const Hunt = require("../../models/Hunt")
var AWS = require("aws-sdk");
var multer = require('multer');
var upload = multer({ dest: 'uploads/' });
const keys = require('../../config/keys');
var fs = require('file-system');
var fsy = require("fs");
var resemble = require('resemblejs');
var http = require("http");
const hunt = require("../../validation/hunt");

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
            // validating based on hunt images
            const { errors, isValid } = validatePlayHuntInput(req, playHunt);
            if (!isValid) return res.status(400).json(errors);

            let s3bucket = new AWS.S3({
                accessKeyId: keys.AWS_ACCESS_KEY_ID,
                secretAccessKey: keys.AWS_SECRET_ACCESS_KEY,
                region: keys.AWS_REGION
            });

            const numFiles = req.files.length;
            const imageAwsPath = new Array(numFiles); 
            imageAwsPath.fill(null);
            


            req.files.map((item, idx) => {
                //setting params for aws
                var params = {
                    Bucket: keys.AWS_BUCKET_NAME,
                    Key: item.originalname,
                    Body: fs.createReadStream(item.path),
                    ACL: 'public-read'
                }
                // uploading image to aws
                s3bucket.upload(params, function (err, data) {
                    if (err) {
                        // error 
                        res.json({ "error": true, "Message": err });
                    } else {
                        // success

                        imageAwsPath[idx] = data.Location;
                        if (numFiles === imageAwsPath.length && !imageAwsPath.includes(null)) {
                            let ele = 0;
                            for (let i = 0; i < numFiles; i++) {
                                resemble(imageAwsPath[i])
                                    .compareTo(playHunt.photo_collection[i])
                                    .scaleToSameSize()
                                    .ignoreAntialiasing()
                                    .onComplete(function (data) {
                                        ele += 100 - data.misMatchPercentage;
                                        if (numFiles - i === 1) {
                                            const playHunt = new PlayHunt({
                                                user: req.user.id,
                                                hunt_id: req.body.hunt_id,
                                                timestamps: req.body.timestamps,
                                                score: ele / numFiles,
                                                images: imageAwsPath
                                            })
                                            // winningScore = Hunt.findById(playHunt.hunt_id)
                                            
                                            playHunt.save()
                                            Hunt.findById(req.body.hunt_id)
                                            .then((hunt) => {
                                                if (hunt.winner.score < playHunt.score) {
                                                    Hunt.updateOne(
                                                        {_id: playHunt.hunt_id},
                                                        {"winner": {id: playHunt.user, score: playHunt.score}}
                                                        ).then(err => {
                                                       res.json})
                                                       .catch(err => {
                                                           res.json(err)
                                                       })
                                                }
                                                return res.json(playHunt)
                                            })
                                            
                                            
                                            // if (score > hunt_id.winner.value) {
                                            //     Hunt.updateOne(
                                            //         {hunt_id: playHunt.hunt_id},
                                            //         {"winner": {user : score}}
                                            //     )
                                            // }
                                        }
                                        
                                    })
                            }

                            

                        }


                    }

                })
            });

        })


})

module.exports = router;
