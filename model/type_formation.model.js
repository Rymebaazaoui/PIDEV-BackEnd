var mongoose = require('mongoose');
var schema = mongoose.Schema;

var type_Formation= new schema({
    Type: String,
});

var Type =mongoose.model('Type_formation', type_Formation);

module.exports = Type;