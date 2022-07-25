var mongoose = require('mongoose');

var schema = mongoose.Schema;

var lieu= new schema({
    nom: String

});
var lieu =mongoose.model('lieu', lieu);

module.exports = lieu;