var mongoose = require('mongoose');
var schema = mongoose.Schema;

var Type_Parade= new schema({
    Type: String,
});

var Type =mongoose.model('Type_parade', Type_Parade);

module.exports = Type;