var mongoose = require('mongoose');
var schema = mongoose.Schema;

var type_association= new schema({
    Type: String,
});

var Type =mongoose.model('Type_association', type_association);

module.exports = Type;