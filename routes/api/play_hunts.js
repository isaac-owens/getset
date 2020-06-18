const express = require("express");
const router = express.Router();
const passport = require("passport");
const mongoose = require("mongoose");
const validatePlayHuntInput = require("../../validation/play_hunt");
const PlayHunt = require("../../models/PlayHunt");
var AWS = require("aws-sdk");
var multer = require('multer');
var upload = multer({ dest: 'uploads/' });
const keys = require('../../config/keys_dev');
var fs = require('file-system');
var fsy = require("fs");
var resemble = require('resemblejs');
var http = require("http");

router.get("/test", (req, res) => res.json({ msg: "This is the play hunts route" }));


// router.post("/", [passport.authenticate('jwt', { session: false }), upload.array('photo_collection', 10)], (req, res) => {
router.post("/", [passport.authenticate('jwt', { session: false }), upload.array('images', 10)], (req, res) => {
    // fetch hunt based on hunt_id
    Hunt.findById(req.body.hunt_id)
        .then(playHunt => {
            // debugger
            // validating based on hunt images
            const { errors, isValid } = validatePlayHuntInput(req, playHunt);
            if (!isValid) return res.status(400).json(errors);
            
            let s3bucket = new AWS.S3({
                accessKeyId: process.env.AWS_ACCESS_KEY_ID || keys.AWS_ACCESS_KEY_ID,
                secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || keys.AWS_SECRET_ACCESS_KEY,
                region: process.env.AWS_REGION || keys.AWS_REGION
            });
            
            const numFiles = req.files.length;
            const imageAwsPath = []; 
            
            
            req.files.map((item) => {
                //setting params for aws
                var params = {
                    Bucket: process.env.AWS_BUCKET_NAME || keys.AWS_BUCKET_NAME,
                    Key: item.originalname,
                    Body: fs.createReadStream(item.path),
                    ACL: 'public-read'
                }
                // debugger
                // uploading image to aws
                s3bucket.upload(params, function (err, data) {
                    // debugger
                    if (err) {
                        // error 
                        res.json({ "error": true, "Message": err });
                    } else {
                        // success
                        
                        imageAwsPath.push(data.Location)
                        if (numFiles === imageAwsPath.length) {
                            // debugger
                            for (let i = 0; i < numFiles; i++) {
                                resemble(imageAwsPath[i])
                                .compareTo(playHunt.photo_collection[i])
                                .scaleToSameSize()
                                .ignoreAntialiasing()
                                .onComplete(function(data) {
                                    debugger
                                    const playHunt = new PlayHunt({
                                        user: req.user.id,
                                        hunt_id: req.body.hunt_id,
                                        timestamps: req.body.timestamps,
                                        score: 100 - data.misMatchPercentage,
                                        images: imageAwsPath
                                    })
                                    if (numFiles - i === 1) {
                                        playHunt.save().then(playHunt => res.json(playHunt));
                                    }
                                    // break;
                                })
                            }
                            
                            // playHunt.score

                        }
                        

                    }

                })
            });

        })
        

})

module.exports = router;
