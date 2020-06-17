const express = require("express");
const router = express.Router();
const Hunt = require("../../models/Hunt");
const passport = require("passport");
const mongoose = require("mongoose");
const validateHuntInput = require("../../validation/hunt");

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

router.post("/", passport.authenticate('jwt', {session: false}), (req, res) => {
    const {errors, isValid} = validateHuntInput(req.body);
    if (!isValid) return res.status(400).json(errors);

    const hunt = new Hunt({
        title: req.body.title,
        category: req.body.category,
        user: req.user.id,
        start_date: req.body.start_date,
        close_date: req.body.close_date,
        photo_collection: req.body.photo_collection
    })

    hunt.save().then(hunt => res.json(hunt));
})

module.exports = router;
