var mongoose = require('mongoose');
var schema = mongoose.Schema;
var Visite= new schema({
    Description: String,
    dateD: String,
    dateF: String,
    Nom :[{ type: schema.Types.ObjectId,
        ref: 'lieu'
    }]

});
var visites =mongoose.model('Visites', Visite);

module.exports = visites;