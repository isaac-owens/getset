const express = require("express");
const router = express.Router();
const passport = require("passport");
const mongoose = require("mongoose");
const validatePlayHuntInput = require("../../validation/play_hunt");
const PlayHunt = require("../../models/PlayHunt");
// const Validator = require("validator");

router.get("/test", (req, res) => res.json({ msg: "This is the play hunts route" }));


router.post("/", passport.authenticate('jwt', { session: false }), (req, res) => {
    // fetch hunt based on hunt_id
    Hunt.findById(req.body.hunt_id)
        .then(hunt => {
            // validating based on hunt images
            const { errors, isValid } = validatePlayHuntInput(req.body, hunt);
            if (!isValid) return res.status(400).json(errors);
            // validate play hunt object
            const playHunt = new PlayHunt({
                user: req.user.id,
                hunt_id: req.body.hunt_id,
                images: req.body.images,
                timestamps: req.body.timestamps,
                score: 0
            })
            playHunt.save().then(playHunt => res.json(playHunt));
        })
        .catch(err => res.status(404).json(err))

})

module.exports = router;
