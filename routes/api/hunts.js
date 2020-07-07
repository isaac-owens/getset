const express = require("express");
const router = express.Router();
const Hunt = require("../../models/Hunt");
const User = require("../../models/User");
const Challenge = require("../../models/Challenge");
const passport = require("passport");
const validateHuntInput = require("../../validation/hunt");
var multer = require('multer');
var upload = multer({ dest: 'uploads/' });
var AWS = require("aws-sdk");
const keys = require('../../config/keys');
var fs = require('file-system');
var Category = require('../../models/Category');

router.get("/test", (req, res) => res.json({msg: "This is the hunts route"}));



// //fetch user created hunts
// router.get("/:user_id", (req, res) => {
//     Hunt.find({user: req.params.user_id})
//     .sort({date: -1})
//     .then(hunts => {
//         return res.json(hunts);
//     }).catch(error => res.status(404).json({error: "No hunts were found"}))
// });



//fetch hunt detail by Id
router.get("/:id", (req, res) => {
    Hunt.findById(req.params.id)
    .then(hunt => res.json(hunt))
    .catch(error => res.status(404).json({error: "No hunt exists with this id"}))
})





// //remove user challenges
// router.delete('/my/challenges/:challenge_id', passport.authenticate("jwt", {session: false}), (req, res) => {
//     User.updateOne(
//         {_id: req.user.id},
//         { $pull: {"my_challenges": req.params.challenge_id}})
//     .then(user => {
//         return res.json(user)
//     })
//     .catch(error => res.status(404).json({error: 'Challenge not removed'}))
// })

router.post("/", [passport.authenticate('jwt', {session: false}), upload.array('photo_collection', 10)], (req, res) => {
    const {errors, isValid} = validateHuntInput(req);
    if (!isValid) return res.status(400).json(errors);
    // setting up aws s3 bucket
    let s3bucket = new AWS.S3({
        accessKeyId: keys.AWS_ACCESS_KEY_ID,
        secretAccessKey: keys.AWS_SECRET_ACCESS_KEY,
        region: keys.AWS_REGION
    });

    const numFiles = req.files.length;
    const imageAwsPath = []; 
    req.files.map((item) => { 
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

                
                    hunt.save()
                    // .then(hunt.user.update({$push: {"my_challenges": req.body.hunt_id}}))
                    User.updateOne(
                        { _id : req.user.id},
                        { $push: {"hunts": hunt._id},
                    })
                        .then(() => {
                            return  res.json(hunt)
                        })
                }

            }
            
        })
    });
})

module.exports = router;
