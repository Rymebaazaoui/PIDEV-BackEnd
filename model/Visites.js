var mongoose = require('mongoose');
var schema = mongoose.Schema;
var Visite= new schema({
    Description: String,
    dateD: String,
    dateF: String,
});
var visites =mongoose.model('Visites', Visite);

module.exports = visites;