const express = require("express");
const router = express.Router();
const Hunt = require("../../models/Hunt");
const User = require("../../models/User");
const PlayHunt = require("../../models/PlayHunt");
const passport = require("passport");
const mongoose = require("mongoose");
const validateHuntInput = require("../../validation/hunt");
var multer = require('multer');
var upload = multer({ dest: 'uploads/' });
var AWS = require("aws-sdk");
const keys = require('../../config/keys');
var fs = require('file-system');
var Category = require('../../models/Category');
const { default: CategoryReducer } = require("../../frontend/src/reducers/category_reducer");
const { route } = require("./play_hunts");

// fetch user's completed challenge stats
router.get("/stats/:user_id", (req, res) => {
    PlayHunt.find({ user: req.params.user_id })
        // .sort({date: -1})
        .then(completedChallenges => res.json(completedChallenges))
        .catch(error => res.status(404).json({ error: "No challenges were found" }))
})

router.post('/add/', passport.authenticate('jwt', { session: false }), (req, res) => {
    User.updateOne(
        { _id: req.user.id },
        {
            $push: { "my_challenges": req.body.hunt_id },
        })
        .then((user) => {
            return res.json("Challenge Added")
        })
        .catch(error => res.status(404).json({ error: 'Challenge not added' }))
})


