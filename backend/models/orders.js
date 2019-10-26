const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    how : {type: Array},

    pharms: {type: Array},
    payType: {type: String},
    rate : {type: Number},
    date : {type: String},
    status : {type: String},
    // personName : {type: String},
    scoreNumber : {type: String},
    forward: {type: String},
    address: {type: String},
    telnumber: {type: String},
    maker: {type: String}
});

module.exports =mongoose.model('orders', orderSchema) ;
