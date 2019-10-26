const mongoose = require('mongoose');

var jwt = require('jsonwebtoken')
const moderatorSchema = mongoose.Schema({
    login : {type: String},
    password : {type: String},
    email: {type: String},
    step : {type: Number}

})


moderatorSchema.statics.generatetoken = function(login, password) {
    var value = {
        login: login,
        password: password
    };

    var token = jwt.sign(value, 'pro');

    return token;
}

// moderatorSchema.statics.