var mongoose = require('mongoose');
var schema = mongoose.Schema;

var Velo = new schema({
    marque: String,
    image: String,
    prix: Number,
    description: String,
    quantite: Number,
    Type :[{ type: schema.Types.ObjectId, 
        ref: 'Type_velo' 
        
    }]


});

var velo =mongoose.model('Velos', Velo);

module.exports = velo;  