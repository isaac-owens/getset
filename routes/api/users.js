const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require("../../models/User");
const jwt  = require('jsonwebtoken');
const keys = require('../../config/keys');
const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');
const passport = require('passport')
const { UsersHelper } = require("../../helper/users_helper");


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
                            null,  //was originally telling key to expire in {expiresIn: 3600}
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

//User login
router.post('/login', (req, res) => {
    const {errors, isValid} = validateLoginInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

    const email = req.body.email;
    const password = req.body.password;

    User.findOne({email})
    .then(user => {
        if (!user) {
            return res.status(404).json({email: 'A user with this email does not exist'});
        }

        bcrypt.compare(password, user.password)
        .then(isMatch => {
            if (isMatch) {
                const payload = {id: user.id, username: user.username};

            jwt.sign(
                payload,
                keys.secretOrKey,
                null, //same as above, replacing the expires in one hour
                (err, token) => {
                    res.json({
                        success: true,
                        token: 'Bearer ' + token,
                        id: user.id 
                    });
                });
            } else {
                return res.status(400).json({password: 'Incorrect Password'});
            }
        })

    })

})

router.get('/current', passport.authenticate('jwt', { session: false }), (req, res) => {
    res.json({
        id: req.user.id,
        username: req.user.username,
        email: req.user.email
    });
})


//add challenge to user's incomplete challenge list
router.post('/challenges', passport.authenticate('jwt', { session: false }), (req, res) => {
  User.updateOne(
    { _id: req.user.id },
    {
      $push: { "incomplete_challenges": req.body.challenge_id },
    })
    .then((user) => {
      return res.json("Challenge Added")
    })
    .catch(error => res.status(404).json({ error: 'Challenge not added' }))
});

//fetch user's incomplete challenges with details
router.get("/challenges", passport.authenticate('jwt', { session: false }), (req, res) => {
    User.findById(req.user.id)
        .sort({ date: -1 })
        .then(user => {
            let combo = {}
            for (let i = 0; i < user.incomplete_challenges.length; i++) {
                const challengeId = user.incomplete_challenges[i];
                Hunt.find({ _id: challengeId }).then(challenge => {
                    combo[challengeId] = challenge[0];
                    if (i == user.incomplete_challenges.length - 1) {
                        return res.json(combo)
                    }
                })
            }
        }).catch(error => res.status(404).json({ error: "No challenges were found" }))
});

//remove incomplete challenge from user's incomplete challenge list
router.delete('/challenges/:challenge_id', passport.authenticate('jwt', { session: false }), (req, res) => {
    User.updateOne(
        { _id : req.user.id},
        { $pull: {"incomplete_challenges": req.params.challenge_id}
    }).then((user) => {
        return  res.json(user);
      })
      .catch(error => res.json({error: 'Challenge not removed'}))
});


//fetch user my hunts with details
router.get("/hunts", passport.authenticate('jwt', { session: false }), (req, res) => {
  User.findById(req.user.id)
  .sort({ date: -1 })
  .then(user => {
    let combo = {}
    for (let i = 0; i < user.hunts.length; i++) {
      const huntId = user.hunts[i];
      Hunt.find({ _id: huntId }).then(challenge => {
        combo[huntId] = challenge[0];
        if (i == user.hunts.length - 1) {
          return res.json(combo)
        }
      })
    }
  }).catch(error => res.status(404).json({ error: "No hunts were found" }))
});

//remove hunt from my_hunts list
router.delete('/hunts/:hunt_id', passport.authenticate("jwt", {session: false}), (req, res) => {
    User.updateOne(
        {_id: req.user.id},
        { $pull: {"hunts": req.params.hunt_id}})
    .then(user => {
        return res.json(user)
    })
    .catch(error => res.status(404).json({error: 'Hunt not removed'}))
});

module.exports = router;