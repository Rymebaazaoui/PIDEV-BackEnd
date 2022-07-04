var mongoose = require('mongoose');
var schema = mongoose.Schema;

var Parade= new schema({
    Description: String,
    DateDeb: Date,
    DateFin: Date,
    Lieu : String,
    //Type : [{ type: schema.Types.ObjectId, ref: 'Type_parade' }]

});

var parade =mongoose.model('Parades', Parade);

module.exports = parade;