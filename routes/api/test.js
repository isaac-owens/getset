const express = require("express");
const router = express.Router();
const passport = require("passport");
const mongoose = require("mongoose");
const validatePlayHuntInput = require("../../validation/play_hunt");
const PlayHunt = require("../../models/PlayHunt");
var AWS = require("aws-sdk");
var multer = require('multer');
var upload = multer({ dest: 'uploads/' });
const keys = require('../../config/keys');
var fs = require('file-system');
var fsy = require("fs");
var resemble = require('resemblejs');
var http = require("http");

router.get("/test", (req, res) => res.json({ msg: "This is the play hunts route" }));

router.post("/", [passport.authenticate('jwt', {session: false}), upload.array('images', 10)], (req, res) => {
    let arr = [];
    Hunt.findById(req.body.hunt_id)
    .then(hunting => {
        const { errors, isValid } = validatePlayHuntInput(req, hunting);
        if (!isValid) return res.status(400).json(errors);

        let s3bucket = new AWS.S3({
            accessKeyId: keys.AWS_ACCESS_KEY_ID,
            secretAccessKey: keys.AWS_SECRET_ACCESS_KEY,
            region: keys.AWS_REGION
        });

        const numFiles = req.files.length;
        const imageAwsPath = [];
        let ele = 0;
        req.files.map((item, idx) => {
            arr.push(item);
            var params = {
                Bucket: keys.AWS_BUCKET_NAME,
                Key: item.originalname,
                Body: fs.createReadStream(item.path),
                ACL: 'public-read'
            }

            s3bucket.upload(params, function (err, data) {
                if (err) {
                    res.json({"error": true, "Message": err});
                } else {
                    imageAwsPath.push(data.Location);
                    
                    if (numFiles === imageAwsPath.length) {
                        resemble(imageAwsPath[idx])
                        .compareTo(hunting.photo_collection[idx])
                        .scaleToSameSize()
                        .ignoreAntiaLiasing()
                        .onComplete(function (data) {
                            ele += (100 - dataMisMatchPercentage);
                        })
                        console.log(ele);
                    }

                }
            })
        })

    })
})

module.exports = router;