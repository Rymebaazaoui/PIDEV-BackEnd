var mongoose = require('mongoose');
var schema = mongoose.Schema;

var Parade= new schema({
    Description: String,
    DateDeb: Date,
    DateFin: Date,
    Lieu : String,});

var parade =mongoose.model('Parades', Parade);

module.exports = parade;