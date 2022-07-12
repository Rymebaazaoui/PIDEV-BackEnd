var mongoose = require('mongoose');
var schema = mongoose.Schema;

var type_Parade= new schema({
    Type: String,
});

var Type =mongoose.model('Type_parade', type_Parade);

module.exports = Type;