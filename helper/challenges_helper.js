var AWS = require("aws-sdk");
var fs = require('file-system');
const keys = require('../config/keys');
const Hunt = require("../models/Hunt");
const Challenge = require("../models/Challenge");

const ChallengeHelper  = { 
    uploadToAWS : (req, cb)=>{
        //set up aws bucket
        let s3bucket = new AWS.S3({
            accessKeyId: keys.AWS_ACCESS_KEY_ID,
            secretAccessKey: keys.AWS_SECRET_ACCESS_KEY,
            region: keys.AWS_REGION
        });

        const numFiles = req.files.length;
        const imageAwsPath = new Array(numFiles); 
        imageAwsPath.fill(null);
        


        //iterating through the files submitted in the request
        req.files.map((item, idx) => {
            //setting params for aws
            var params = {
                Bucket: keys.AWS_BUCKET_NAME,
                Key: item.originalname,
                Body: fs.createReadStream(item.path),
                ACL: 'public-read'
            }

            // uploading images to aws
            s3bucket.upload(params, function (err, data) {
                if (err) {
                    // error 
                return res.json({ "error": true, "Message": err });
                } else {
                    // success
                    imageAwsPath[idx] = data.Location;
                    if (numFiles === imageAwsPath.length && !imageAwsPath.includes(null)) {
                    //all files have been sucessfully uploaded to AWS
                         cb(imageAwsPath);
                    }
                }
            })
        });
    },

    completeChallenge :  (avgScore,imageAwsPaths, req, playedHuntDetails, onSuccess)=>{
        //create a play hunt object
            const challenge = new Challenge({
                user: req.user.id,
                hunt_id: req.body.hunt_id,
                timestamps: req.body.timestamps,
                score: avgScore,
                images: imageAwsPaths
            })  
            
            //save play hunt to mongoDB
            challenge.save();
            debugger
            //update challenge as completed

            //update score if required
            if (playedHuntDetails.winner.score < challenge.score) {
                Hunt.updateOne(
                    {_id: challenge.hunt_id},
                    {"winner": {id: challenge.user, score: challenge.score}
                    }).catch(err => {
                        // return  res.json(err)
                    })
            }

            //building a custom response
            const customResponse = {
                hunt_id: playedHuntDetails._id,
                score: challenge.score,
                hunt_name: playedHuntDetails.title
            }
            onSuccess(customResponse);                       
    },

    // updateHighScore:  (challenge) => {
    //     debugger
        
    // }
}

module.exports = ChallengeHelper;
