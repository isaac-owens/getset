const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require("../../models/User");
const jwt  = require('jsonwebtoken');
const keys = require('../../config/keys');
const validateRegisterInput = require('../../validation/register');


router.get("/test", (req, res) => res.json({ msg: "This is the users route" }));


// User registration
router.post('/register', (req, res) => {
    
    //check validation
    const {errors, isValid} = validateRegisterInput(req.body);
    if(!isValid) {
        return res.status(400).json(errors);
    }

    //find if user already exist
    User.findOne({email: req.body.email})
    .then(user=>{
        if(user){
            return res.status(400).json("This email address is already exists")
        } else {
            //create new user
            const newUser = new User({
                email: req.body.email,
                username: req.body.username,
                password: req.body.password
            });

            //create bcrypt salt
            bcrypt.genSalt(12, (err, salt) => {
                //create bcrypt hash
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    //throw error
                    if(err) throw err;

                    //make new user
                    newUser.password = hash;
                    newUser.save()
                    .then(user => {
                        const payload = {
                            id: user.id,
                            username: user.username
                        };

                        //sign jwt token 
                        jwt.sign(
                            payload,
                            keys.secretOrKey,
                            null,
                            (err, token) => {
                                res.json({
                                    success: true,
                                    token: 'Bearer ' + token,
                                    // id: user.id 
                                });
                            }
                        )
                    })
                })
            });

        }
    })
})





module.exports = router;