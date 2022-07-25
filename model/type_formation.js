var mongoose = require('mongoose');
var schema = mongoose.Schema;

var Type_Formation= new schema({
    Type: { type: String },
});

var Type =mongoose.model('type_formation', Type_Formation);

module.exports = Type;