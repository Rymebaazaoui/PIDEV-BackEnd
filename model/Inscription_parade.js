var mongoose = require('mongoose');
var schema = mongoose.Schema;

var InscriptionParade= new schema({
    Nom : String,
    Prenom : String,
    Mail : String,
    Parade :[{ type: schema.Types.ObjectId, 
            ref: 'Parades' 
            
        }]

});

var inscription_parade =mongoose.model('Inscription_parade', InscriptionParade);

module.exports = inscription_parade;