const express = require("express");
const router = express.Router();
const Category = require("../../models/Category");
const mongoose = require("mongoose");
const passport = require("passport");


router.get("/", (req, res) => {
    Category.find()
    .then(categories => {
        return res.json(categories)
    })
})

router.get("/:category_id", (req, res)=>{
    Category.findById(req.params.category_id)
    .then(category => res.json(category))
    .catch(err=>res.status(404).json({categoryNotFound: "The selected category was not found"}))
})

module.exports = router;