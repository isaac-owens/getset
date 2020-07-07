const User = require("../models/User");

const HuntsHelper = {
     deleteUserChallenge: (user_id, hunt_id, success, failure)=>{
        User.updateOne(
            { _id : user_id},
            { $pull: {"my_challenges": hunt_id}
        }).then((user) => {
            return  success(user);
          })
          .catch(error => failure({error: 'Challenge not removed'}))
     }
 }

module.exports = HuntsHelper;