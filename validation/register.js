const Validator  = require("validator");
const validText = require("./valid-text");


module.exports = function validateRegisterInput(data){
    let errors = {};

    data.username = validText(data.username) ? data.username : '';
    data.email = validText(data.email) ? data.email : '';
    data.confirmEmail = validText(data.confirmEmail) ? data.confirmEmail : '';
    data.password = validText(data.password) ? data.password : '';

    
    if (!Validator.isEmail(data.email)) {
      errors.email = "Email must be valid";
    }
    
    if (Validator.isEmpty(data.email)) {
      errors.email = "Email is required";
    }
    
    
    if (!Validator.equals(data.email, data.confirmEmail)) {
      errors.email = "Emails must be the same";
    }
    
    if(!Validator.isLength(data.username, {min: 5, max: 14})){
        errors.username= "Username must be between 5 to 14 characters";
    }

    if(Validator.isEmpty(data.username)){
        errors.username = "Username is required";
    }
    
    if (!Validator.isLength(data.password, {min: 6, max: 12})) {
        errors.password = "Password must be between 6 to 12 characters"
    }

    if (Validator.isEmpty(data.password)) {
        errors.password = "password can't be blank";
    }

    return {
        errors, 
        isValid: Object.keys(errors).length === 0
    };
};