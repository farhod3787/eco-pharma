const mongoose = require('mongoose');

const pharmacySchema = mongoose.Schema({
    name : {type: String },
    logo: { type: String },
    price: { type: String },
    inform: { type: String },
    // sort: {type: String},
    sort : { type : Array},
    //  test
    sale: {type: Number},
    roomy: {type: String},
    pod_category: {type: String},
    rate: {type: Number}
});

module.exports = mongoose.model('pharmacy', pharmacySchema);
