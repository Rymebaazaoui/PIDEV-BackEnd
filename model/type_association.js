var mongoose = require('mongoose');
var schema = mongoose.Schema;

var type_association= new schema({
    Type: String,
});

var TypeAssociation =mongoose.model('Type_association', type_association);

module.exports = TypeAssociation;