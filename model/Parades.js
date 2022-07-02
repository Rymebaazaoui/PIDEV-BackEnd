var mongoose = require('mongoose');
var schema = mongoose.Schema;

var Parade= new schema({
    Description: String,
});

var parade =mongoose.model('Parades', Parade);

module.exports = parade;