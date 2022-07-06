var mongoose = require('mongoose');
var schema = mongoose.Schema;

var Velo = new schema({
    marque: String,
    image: String,
    prix: Number,
    description: String,
    quantite: Number,


});

var velo =mongoose.model('Velos', Velo);

module.exports = velo;  