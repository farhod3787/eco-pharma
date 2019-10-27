const mongoose = require('mongoose');

const restseptSchema = mongoose.Schema({
    logo : {type: String},
    number: {type: String},
    status: {type: Boolean}
});

module.exports = mongoose.model('retsept', restseptSchema);
