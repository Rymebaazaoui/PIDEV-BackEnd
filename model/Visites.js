var mongoose = require('mongoose');
var schema = mongoose.Schema;
var Visite= new schema({
    Description: String,
    DateD : Date ,
    DateF : Date ,
    Nom :[{ type: schema.Types.ObjectId,
        ref: 'lieu'
    }]

});
var visites =mongoose.model('Visite', Visite);

module.exports = visites;