const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');


const personschema = mongoose.Schema({
    number : {type: String},
    kod : {type: String},
    name : {type: String},
    lastname : {type: String},
    moljal : {type: String},
    address : {type: String},
    home : {type: String},
})

personschema.statics.generateToken = function(number, kod) {
    var value = {
        number: number,
        kod: kod
    }
    var token = jwt.sign(value, 'pro');
    return token;
}


personschema.statics.verifyPerson = function( person, token) {
    var object = {isUser : false };
    var distoken = undefined
    person.forEach((pers) => {
        try{
            distoken = jwt.verify(token, 'pro');
        }
        catch {

        }
        if (distoken) {
            if(pers.number == distoken.number && pers.kod == distoken.kod ) {
                    object.isUser = true;
                    object.token = jwt.sign({number: pers.number, kod: pers.kod}, 'pro')
            }
        }
        else {
            console.log("Distoken Error");
        }
})
    return object;
}

personschema.statics.getPerson = function(token, response) {
    var object = {};
    var distoken = undefined;
    distoken = jwt.verify(token, 'pro');
    if(distoken) {
        
    }
    else {
        console.log("Distoken undefined")
    }

}



module.exports = mongoose.model('person', personschema)

