const mongoose = require('mongoose');

const categoriesSchema = mongoose.Schema({
    name : {type: String},
    id : {type: Number}
});

module.exports = mongoose.model('categories', categoriesSchema);