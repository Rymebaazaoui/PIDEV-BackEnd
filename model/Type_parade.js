var mongoose = require('mongoose');
var schema = mongoose.Schema;

var type_Parade= new schema({
    Type: String,
});

module.exports = mongoose.model('Type_parade', type_Parade);