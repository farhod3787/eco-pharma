const mongoose = require('mongoose');

const podcategoriesSchema = mongoose.Schema({
    name : {type: String},
    category_id : {type: String}
});

module.exports = mongoose.model('podcategories', podcategoriesSchema);
