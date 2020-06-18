const express = require("express");
const router = express.Router();
const Hunt = require("../../models/Hunt");
const passport = require("passport");
const mongoose = require("mongoose");
const validateHuntInput = require("../../validation/hunt");
var multer = require('multer');
var upload = multer({ dest: 'uploads/' });
var AWS = require("aws-sdk");
const keys = require('../../config/keys_dev');
var fs = require('file-system');

router.get("/test", (req, res) => res.json({msg: "This is the hunts route"}))

router.get("/", (req, res) => {
    Hunt.find()
    .sort({date: -1})
    .then(hunts => {
        return res.json(hunts);
    }).catch(err=> res.status(404).json({nohuntsfound: "No hunts were found"}))
});

router.get("/hunt/:hunt_id", (req, res) => {
    Hunt.find({hunt: req.params.hunt_id})
    .then(hunts => res.json(hunts))
    .catch(err => res.status(404).json({nohuntfound: "This hunt was not found"}))
})

router.get("/:id", (req, res) => {
    Hunt.findById(req.params.id)
    .then(hunt => res.json(hunt))
    .catch(err => res.status(404).json("No hunt exists with this id"))
})

router.post("/", [passport.authenticate('jwt', {session: false}), upload.array('photo_collection', 10)], (req, res) => {
    const {errors, isValid} = validateHuntInput(req);
    if (!isValid) return res.status(400).json(errors);
    // setting up aws s3 bucket
    let s3bucket = new AWS.S3({
        accessKeyId: process.env.AWS_ACCESS_KEY_ID  || keys.AWS_ACCESS_KEY_ID,
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
        // uploading image to aws
        s3bucket.upload(params, function (err, data) {
            
            if (err) {
                // error 
                res.json({"error": true, "Message": err});
            } else {
                // success
                imageAwsPath.push(data.Location)
                if (numFiles === imageAwsPath.length) {
                    const hunt = new Hunt({
                        title: req.body.title,
                        category: req.body.category,
                        user: req.user.id,
                        start_date: req.body.start_date,
                        close_date: req.body.close_date,
                        photo_collection: imageAwsPath 
                    })
                
                    hunt.save().then(hunt => res.json(hunt));
                }

            }
            
        })
    });
})

module.exports = router;
